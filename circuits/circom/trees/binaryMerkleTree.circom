pragma circom 2.1.5;

include "../hasherPoseidon.circom";

include "mux1.circom";
include "comparators.circom";

// This circuit is designed to calculate the root of a binary Merkle
// tree given a leaf, its depth, and the necessary sibling
// information (aka proof of membership).
// A circuit is designed without the capability to iterate through
// a dynamic array. To address this, a parameter with the static maximum
// tree depth is defined (i.e. 'MAX_DEPTH'). And additionally, the circuit
// receives a dynamic depth as an input, which is utilized in calculating the
// true root of the Merkle tree. The actual depth of the Merkle tree
// may be equal to or less than the static maximum depth.
// NOTE: This circuit will successfully verify `out = 0` for `depth > MAX_DEPTH`.
// Make sure to enforce `depth <= MAX_DEPTH` outside the circuit.
template LeanBinaryMerkleRoot(MAX_DEPTH) {
    signal input leaf, indices[MAX_DEPTH], siblings[MAX_DEPTH];

    signal output out;

    signal nodes[MAX_DEPTH + 1];
    nodes[0] <== leaf;

    signal roots[MAX_DEPTH];
    var root = 0;

    for (var i = 0; i < MAX_DEPTH; i++) {
        var c[2][2] = [ [nodes[i], siblings[i]], [siblings[i], nodes[i]] ];
        var childNodes[2] = MultiMux1(2)(c, indices[i]);

        // if the sibling is zero, then we shouldn't count the hash
        var isSiblingZero = IsZero()(siblings[i]);
        // calculate the hash of the node normally
        var nodeHash = HashLeftRight()(childNodes[0], childNodes[1]);

        // the node i+1 will either be the hash of the current node and the sibling
        // or the previous node value 
        nodes[i + 1] <== Mux1()([nodeHash, nodes[i]], isSiblingZero);
    }

    // the last root will be the correct one 
    out <== nodes[MAX_DEPTH-1];
}

// template PathIndices(maxDepth) {
//     // Inputs
//     signal input leafIndex;
//     signal input numLeaves;

//     // Outputs
//     signal output pathIndices[maxDepth];

//     // Calculate tree depth based on the number of leaves
//     signal treeDepth;
//     treeDepth <-- ceil(log2(numLeaves));

//     component isRightChild[maxDepth];

//     for (var i = 0; i < maxDepth; i++) {
//         isRightChild[i] = IsRightChild();
//         if (i == 0) {
//             isRightChild[i].index <== leafIndex;
//         } else {
//             isRightChild[i].index <== isRightChild[i-1].parentIndex;
//         }
//         isRightChild[i].depth <== i+1;
//         isRightChild[i].treeDepth <== treeDepth;

//         pathIndices[i] <== isRightChild[i].isRight;
//     }
// }

// template IsRightChild() {
//     signal input index;
//     signal input depth;
//     signal input treeDepth;

//     signal output isRight;
//     signal output parentIndex;

//     // Check if the current node is a right child
//     isRight <== index % 2;
//     parentIndex <== index >> 1;
// }
