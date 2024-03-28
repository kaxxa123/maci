/* eslint-disable no-console */
import { type BigNumberish } from "ethers";

import type { ITreeMergeParams } from "./types";
import type { AccQueue, Poll } from "../../typechain-types";
import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

/**
 * @notice Tree merger keeps merging simple for hardhat task.
 * This class is using for merging signups and messages.
 */
export class TreeMerger {
  /**
   * User messages AccQueue contract
   */
  private messageAccQueueContract: AccQueue;

  /**
   * Poll contract
   */
  private pollContract: Poll;

  /**
   * Ethers signer
   */
  private deployer: HardhatEthersSigner;

  /**
   * Initialize class properties
   *
   * @param {ITreeMergeParams} params - contracts and signer
   */
  constructor({ deployer, messageAccQueueContract, pollContract }: ITreeMergeParams) {
    this.pollContract = pollContract;
    this.messageAccQueueContract = messageAccQueueContract;
    this.deployer = deployer;
  }

  /**
   * Check if signer is an owner. Otherwise, throw an error.
   */
  async checkPollOwner(): Promise<void> {
    const pollOwner = await this.pollContract.owner();
    const deployerAddress = await this.deployer.getAddress();

    if (pollOwner.toLowerCase() !== deployerAddress.toLowerCase()) {
      throw new Error("The signer is not the owner of this Poll contract");
    }
  }

  /**
   * Check if voting period is over. Otherwise, throw an error.
   */
  async checkPollDuration(): Promise<void> {
    // check if it's time to merge the message AQ
    const [deployTime, duration] = await this.pollContract.getDeployTimeAndDuration();
    const deadline = Number(deployTime) + Number(duration);

    const blockNum = await this.deployer.provider.getBlockNumber();
    const block = await this.deployer.provider.getBlock(blockNum);
    const now = Number(block?.timestamp);

    if (now < deadline) {
      throw new Error("Voting period is not over");
    }
  }

  /**
   * Merge user signup MACI state
   *
   * @param pollId - poll id
   */
  async mergeSignups(pollId: BigNumberish): Promise<void> {
    // go and merge the state tree
    console.log("Syncing state tree data to the Poll contract...");
    const receipt = await this.pollContract.syncMaciStateTree(pollId.toString()).then((tx) => tx.wait());

    if (receipt?.status !== 1) {
      throw new Error("Error merging signup state subroots");
    }

    console.log(`Transaction hash: ${receipt.hash}`);
    console.log(`Executed syncMaciStateTree(); gas used: ${receipt.gasUsed.toString()}`);
  }

  /**
   * Merge message subtrees
   *
   * @param queueOps - the number of queue operations to perform
   */
  async mergeMessageSubtrees(queueOps: number): Promise<void> {
    let subTreesMerged = false;

    // infinite loop to merge the sub trees
    while (!subTreesMerged) {
      // eslint-disable-next-line no-await-in-loop
      subTreesMerged = await this.messageAccQueueContract.subTreesMerged();

      if (subTreesMerged) {
        console.log("All message subtrees have been merged.");
      } else {
        // eslint-disable-next-line no-await-in-loop
        await this.messageAccQueueContract.getSrIndices().then((indices) => {
          console.log(`Merging message subroots ${indices[0] + 1n} / ${indices[1] + 1n}`);
        });

        // eslint-disable-next-line no-await-in-loop
        const tx = await this.pollContract.mergeMessageAqSubRoots(queueOps);
        // eslint-disable-next-line no-await-in-loop
        const receipt = await tx.wait();

        if (receipt?.status !== 1) {
          throw new Error("Merge message subroots transaction failed");
        }

        console.log(`Executed mergeMessageAqSubRoots(); gas used: ${receipt.gasUsed.toString()}`);

        console.log(`Transaction hash: ${receipt.hash}`);
      }
    }
  }

  /**
   * Merge message queue
   */
  async mergeMessages(): Promise<void> {
    // check if the message AQ has been fully merged
    const messageTreeDepth = await this.pollContract.treeDepths().then((depths) => Number(depths[2]));

    // check if the main root was not already computed
    const mainRoot = await this.messageAccQueueContract.getMainRoot(messageTreeDepth.toString());
    if (mainRoot.toString() === "0") {
      // go and merge the message tree

      console.log("Merging subroots to a main message root...");
      const tx = await this.pollContract.mergeMessageAq();
      const receipt = await tx.wait();

      if (receipt?.status !== 1) {
        throw new Error("Merge messages transaction failed");
      }

      console.log(`Executed mergeMessageAq(); gas used: ${receipt.gasUsed.toString()}`);
      console.log(`Transaction hash: ${receipt.hash}`);
      console.log("The message tree has been merged.");
    } else {
      console.log("The message tree has already been merged.");
    }
  }
}
