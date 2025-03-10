import type { EASGatekeeper, GitcoinPassportGatekeeper, ZupassGatekeeper, MACI } from "../../../typechain-types";

import { ContractStorage } from "../../helpers/ContractStorage";
import { Deployment } from "../../helpers/Deployment";
import { EContracts, IDeployParams } from "../../helpers/types";

const deployment = Deployment.getInstance();
const storage = ContractStorage.getInstance();

const DEFAULT_STATE_TREE_DEPTH = 10;

/**
 * Deploy step registration and task itself
 */
deployment.deployTask("full:deploy-maci", "Deploy MACI contract").then((task) =>
  task.setAction(async ({ incremental }: IDeployParams, hre) => {
    deployment.setHre(hre);
    const deployer = await deployment.getDeployer();

    const maciContractAddress = storage.getAddress(EContracts.MACI, hre.network.name);

    if (incremental && maciContractAddress) {
      return;
    }

    const poseidonT3ContractAddress = storage.mustGetAddress(EContracts.PoseidonT3, hre.network.name);
    const poseidonT4ContractAddress = storage.mustGetAddress(EContracts.PoseidonT4, hre.network.name);
    const poseidonT5ContractAddress = storage.mustGetAddress(EContracts.PoseidonT5, hre.network.name);
    const poseidonT6ContractAddress = storage.mustGetAddress(EContracts.PoseidonT6, hre.network.name);

    const maciContractFactory = await hre.ethers.getContractFactory(EContracts.MACI, {
      signer: deployer,
      libraries: {
        PoseidonT3: poseidonT3ContractAddress,
        PoseidonT4: poseidonT4ContractAddress,
        PoseidonT5: poseidonT5ContractAddress,
        PoseidonT6: poseidonT6ContractAddress,
      },
    });

    const constantInitialVoiceCreditProxyContractAddress = storage.mustGetAddress(
      EContracts.ConstantInitialVoiceCreditProxy,
      hre.network.name,
    );
    const gatekeeper =
      deployment.getDeployConfigField<EContracts | null>(EContracts.MACI, "gatekeeper") ||
      EContracts.FreeForAllGatekeeper;
    const gatekeeperContractAddress = storage.mustGetAddress(gatekeeper, hre.network.name);
    const pollFactoryContractAddress = storage.mustGetAddress(EContracts.PollFactory, hre.network.name);
    const messageProcessorFactoryContractAddress = storage.mustGetAddress(
      EContracts.MessageProcessorFactory,
      hre.network.name,
    );
    const tallyFactoryContractAddress = storage.mustGetAddress(EContracts.TallyFactory, hre.network.name);

    const stateTreeDepth =
      deployment.getDeployConfigField<number | null>(EContracts.MACI, "stateTreeDepth") ?? DEFAULT_STATE_TREE_DEPTH;

    const maciContract = await deployment.deployContractWithLinkedLibraries<MACI>(
      { contractFactory: maciContractFactory },
      pollFactoryContractAddress,
      messageProcessorFactoryContractAddress,
      tallyFactoryContractAddress,
      gatekeeperContractAddress,
      constantInitialVoiceCreditProxyContractAddress,
      stateTreeDepth,
    );

    if (gatekeeper === EContracts.EASGatekeeper) {
      const gatekeeperContract = await deployment.getContract<EASGatekeeper>({
        name: EContracts.EASGatekeeper,
        address: gatekeeperContractAddress,
      });
      const maciInstanceAddress = await maciContract.getAddress();

      await gatekeeperContract.setMaciInstance(maciInstanceAddress).then((tx) => tx.wait());
    } else if (gatekeeper === EContracts.GitcoinPassportGatekeeper) {
      const gatekeeperContract = await deployment.getContract<GitcoinPassportGatekeeper>({
        name: EContracts.GitcoinPassportGatekeeper,
        address: gatekeeperContractAddress,
      });
      const maciInstanceAddress = await maciContract.getAddress();

      await gatekeeperContract.setMaciInstance(maciInstanceAddress).then((tx) => tx.wait());
    } else if (gatekeeper === EContracts.ZupassGatekeeper) {
      const gatekeeperContract = await deployment.getContract<ZupassGatekeeper>({
        name: EContracts.ZupassGatekeeper,
        address: gatekeeperContractAddress,
      });
      const maciInstanceAddress = await maciContract.getAddress();
      await gatekeeperContract.setMaciInstance(maciInstanceAddress).then((tx) => tx.wait());
    }

    await storage.register({
      id: EContracts.MACI,
      contract: maciContract,
      args: [
        pollFactoryContractAddress,
        messageProcessorFactoryContractAddress,
        tallyFactoryContractAddress,
        gatekeeperContractAddress,
        constantInitialVoiceCreditProxyContractAddress,
        stateTreeDepth,
      ],
      network: hre.network.name,
    });
  }),
);
