// @note port of https://github.com/privacy-scaling-explorations/zk-kit/tree/main/packages/imt.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { PoseidonT3 } from "../crypto/PoseidonT3.sol";

struct LeanIMTData {
  // Tracks the current number of leaves in the tree.
  uint256 size;
  // Represents the current depth of the tree, which can increase as new leaves are inserted.
  uint256 depth;
  // A mapping from each level of the tree to the node value of the last even position at that level.
  // Used for efficient inserts, updates and root calculations.
  mapping(uint256 => uint256) sideNodes;
  // A mapping from leaf values to their respective indices in the tree.
  // This facilitates checks for leaf existence and retrieval of leaf positions.
  mapping(uint256 => uint256) leaves;
}

error LeafDoesNotExist();

/// @title Lean Incremental binary Merkle tree.
/// @dev The LeanIMT is an optimized version of the BinaryIMT.
/// This implementation eliminates the use of zeroes, and make the tree depth dynamic.
/// When a node doesn't have the right child, instead of using a zero hash as in the BinaryIMT,
/// the node's value becomes that of its left child. Furthermore, rather than utilizing a static tree depth,
/// it is updated based on the number of leaves in the tree. This approach
/// results in the calculation of significantly fewer hashes, making the tree more efficient.
library InternalLeanIMT {
  uint256 internal constant SNARK_SCALAR_FIELD =
    21888242871839275222246405745257275088548364400416034343698204186575808495617;

  /// @dev Inserts a new leaf into the incremental merkle tree.
  /// This function does not perform any validation on the leaf
  /// as this is done by MACI.signUp() before calling this function.
  /// It updates the tree's structure accordingly.
  /// @param self: A storage reference to the 'LeanIMTData' struct.
  /// @param leaf: The value of the new leaf to be inserted into the tree.
  /// @return The new hash of the node after the leaf has been inserted.
  function _insert(LeanIMTData storage self, uint256 leaf) internal returns (uint256) {
    uint256 index = self.size;

    // Cache tree depth to optimize gas
    uint256 treeDepth = self.depth;

    // A new insertion can increase a tree's depth by at most 1,
    // and only if the number of leaves supported by the current
    // depth is less than the number of leaves to be supported after insertion.
    if (2 ** treeDepth < index + 1) {
      unchecked {
        ++treeDepth;
      }
    }

    self.depth = treeDepth;

    uint256 node = leaf;

    for (uint256 level = 0; level < treeDepth; ) {
      if ((index >> level) & 1 == 1) {
        node = PoseidonT3.poseidon([self.sideNodes[level], node]);
      } else {
        self.sideNodes[level] = node;
      }

      unchecked {
        ++level;
      }
    }

    unchecked {
      self.size = ++index;
    }

    self.sideNodes[treeDepth] = node;
    self.leaves[leaf] = index;

    return node;
  }

  /// @dev Retrieves the root of the tree from the 'sideNodes' mapping using the
  /// current tree depth.
  /// @param self: A storage reference to the 'LeanIMTData' struct.
  /// @return The root hash of the tree.
  function _root(LeanIMTData storage self) internal view returns (uint256) {
    return self.sideNodes[self.depth];
  }
}
