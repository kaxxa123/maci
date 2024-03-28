/* eslint-disable no-console */
import { PubKey } from "maci-domainobjs";

import { MACI, Poll } from "../../../typechain-types";
import { ContractStorage } from "../../helpers/ContractStorage";
import { Deployment } from "../../helpers/Deployment";
import { EContracts } from "../../helpers/types";

const deployment = Deployment.getInstance();
const storage = ContractStorage.getInstance();

/**
 * Deploy step registration and task itself
 */
deployment.deployTask("poll:deploy-poll", "Deploy poll").setAction(async (_, hre) => {
  deployment.setHre(hre);

  const maciContractAddress = storage.getAddress(EContracts.MACI, hre.network.name);
  const verifierContractAddress = storage.getAddress(EContracts.Verifier, hre.network.name);
  const vkRegistryContractAddress = storage.getAddress(EContracts.VkRegistry, hre.network.name);

  if (!maciContractAddress) {
    throw new Error("Need to deploy MACI contract first");
  }

  if (!verifierContractAddress) {
    throw new Error("Need to deploy Verifier contract first");
  }

  if (!vkRegistryContractAddress) {
    throw new Error("Need to deploy VkRegistry contract first");
  }

  const maciContract = await deployment.getContract<MACI>({ name: EContracts.MACI });
  const pollId = await maciContract.nextPollId();

  const coordinatorPubkey = deployment.getDeployConfigField<string>(EContracts.Poll, "coordinatorPubkey");
  const pollDuration = deployment.getDeployConfigField<number>(EContracts.Poll, "pollDuration");
  const intStateTreeDepth = deployment.getDeployConfigField<number>(EContracts.VkRegistry, "intStateTreeDepth");
  const messageTreeSubDepth = deployment.getDeployConfigField<number>(EContracts.VkRegistry, "messageBatchDepth");
  const messageTreeDepth = deployment.getDeployConfigField<number>(EContracts.VkRegistry, "messageTreeDepth");
  const voteOptionTreeDepth = deployment.getDeployConfigField<number>(EContracts.VkRegistry, "voteOptionTreeDepth");

  const useQuadraticVoting =
    deployment.getDeployConfigField<boolean | null>(EContracts.Poll, "useQuadraticVoting") ?? false;
  const unserializedKey = PubKey.deserialize(coordinatorPubkey);

  const [pollContractAddress, messageProcessorContractAddress, tallyContractAddress] =
    await maciContract.deployPoll.staticCall(
      pollDuration,
      {
        intStateTreeDepth,
        messageTreeSubDepth,
        messageTreeDepth,
        voteOptionTreeDepth,
      },
      unserializedKey.asContractParam(),
      verifierContractAddress,
      vkRegistryContractAddress,
      useQuadraticVoting,
    );

  const tx = await maciContract.deployPoll(
    pollDuration,
    {
      intStateTreeDepth,
      messageTreeSubDepth,
      messageTreeDepth,
      voteOptionTreeDepth,
    },
    unserializedKey.asContractParam(),
    verifierContractAddress,
    vkRegistryContractAddress,
    useQuadraticVoting,
  );

  const receipt = await tx.wait();

  if (receipt?.status !== 1) {
    throw new Error("Deploy poll transaction is failed");
  }

  const pollContract = await deployment.getContract<Poll>({ name: EContracts.Poll, address: pollContractAddress });
  const [maxValues, extContracts] = await Promise.all([pollContract.maxValues(), pollContract.extContracts()]);

  const messageProcessorContract = await deployment.getContract({
    name: EContracts.MessageProcessor,
    address: messageProcessorContractAddress,
  });

  const tallyContract = await deployment.getContract({
    name: EContracts.Tally,
    address: tallyContractAddress,
  });

  const messageAccQueueContract = await deployment.getContract({
    name: EContracts.AccQueueQuinaryMaci,
    address: extContracts[1],
  });

  await Promise.all([
    storage.register({
      id: EContracts.Poll,
      key: `poll-${pollId}`,
      contract: pollContract,
      args: [
        pollDuration,
        maxValues.map((value) => value.toString()),
        {
          intStateTreeDepth,
          messageTreeSubDepth,
          messageTreeDepth,
          voteOptionTreeDepth,
        },
        unserializedKey.asContractParam(),
        extContracts,
      ],
      network: hre.network.name,
    }),

    storage.register({
      id: EContracts.MessageProcessor,
      key: `poll-${pollId}`,
      contract: messageProcessorContract,
      args: [verifierContractAddress, vkRegistryContractAddress, pollContractAddress],
      network: hre.network.name,
    }),

    storage.register({
      id: EContracts.Tally,
      key: `poll-${pollId}`,
      contract: tallyContract,
      args: [
        verifierContractAddress,
        vkRegistryContractAddress,
        pollContractAddress,
        messageProcessorContractAddress,
        useQuadraticVoting,
      ],
      network: hre.network.name,
    }),

    storage.register({
      id: EContracts.AccQueueQuinaryMaci,
      key: `poll-${pollId}`,
      name: "contracts/trees/AccQueueQuinaryMaci.sol:AccQueueQuinaryMaci",
      contract: messageAccQueueContract,
      args: [messageTreeSubDepth],
      network: hre.network.name,
    }),
  ]);
});
