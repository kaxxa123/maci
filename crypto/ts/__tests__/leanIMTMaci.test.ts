import { expect } from "chai";
import { hash2 } from "../hashing";
import { LeanIMT } from "../leanIMT";

describe("Lean IMT", () => {
  // If you change this value you need to calculate
  // the new expected roots below.
  const treeSize = 5;

  const leaves = Array.from(Array(treeSize).keys()).map(BigInt);

  const roots: bigint[] = new Array(2);

  before(() => {
    // Expected root value after 5 insertions.
    {
      const n1_0 = hash2([leaves[0], leaves[1]]);
      const n1_1 = hash2([leaves[2], leaves[3]]);
      const n2_0 = hash2([n1_0, n1_1]);
      roots[0] = hash2([n2_0, leaves[4]]);
    }
    // Expected root value after 5 updates.
    {
      const n1 = hash2([0n, 0n]);
      const n2 = hash2([n1, n1]);
      roots[1] = hash2([n2, 0n]);
    }
  });

  describe("# new LeanIMT", () => {
    it("should not initialize a tree if the parameters are wrong", () => {
      const fun1 = () => new LeanIMT(undefined as any);
      const fun2 = () => new LeanIMT(1 as any);
      const fun3 = () => new LeanIMT(hash2, "string" as any);

      expect(fun1).to.throw("Parameter 'hash' is not defined");
      expect(fun2).to.throw("Parameter 'hash' is not a function");
      expect(fun3).to.throw("Parameter 'leaves' is not an array");
    });

    it("should initialize a tree", () => {
      const tree = new LeanIMT(hash2);

      expect(tree.root).to.eq(undefined);
      expect(tree.depth).to.eq(0);
      expect(tree.leaves).to.deep.eq([]);
      expect(tree.size).to.eq(0);
    });

    for (let treeSize = 100; treeSize < 116; treeSize += 1) {
      it(`Should initialize a tree with ${treeSize} leaves`, () => {
        const leaves = Array.from(Array(treeSize).keys()).map(BigInt);
        const tree1 = new LeanIMT(hash2, leaves);
        const tree2 = new LeanIMT(hash2);

        for (const leaf of leaves) {
          tree2.insert(BigInt(leaf));
        }

        expect(tree1.root).to.eq(tree2.root);
        expect(tree1.depth).to.eq(Math.ceil(Math.log2(treeSize)));
        expect(tree1.size).to.eq(treeSize);
      });
    }
  });

  describe("# indexOf", () => {
    it(`Should not return any value if the index is not defined`, () => {
      const tree = new LeanIMT(hash2);

      const fun = () => tree.indexOf(undefined as any);

      expect(fun).to.throw("Parameter 'leaf' is not defined");
    });

    it("should return the index of a leaf", () => {
      const tree = new LeanIMT(hash2, leaves);

      const index = tree.indexOf(2n);

      expect(index).to.eq(2);
    });
  });

  describe("# has", () => {
    it(`Should not return any value if the leaf is not defined`, () => {
      const tree = new LeanIMT(hash2);

      const fun = () => tree.has(undefined as any);

      expect(fun).to.throw("Parameter 'leaf' is not defined");
    });

    it("should return true if the leaf exists", () => {
      const tree = new LeanIMT(hash2, leaves);

      const result = tree.has(2n);

      expect(result).to.eq(true);
    });

    it("should return false if the leaf does not exist", () => {
      const tree = new LeanIMT(hash2, leaves);

      const result = tree.has(999n);

      expect(result).to.eq(false);
    });
  });

  describe("# insert", () => {
    it(`Should not insert any leaf if it is not defined`, () => {
      const tree = new LeanIMT(hash2);

      const fun = () => tree.insert(undefined as any);

      expect(fun).to.throw("Parameter 'leaf' is not defined");
    });

    it(`Should insert 1 leaf`, () => {
      const tree = new LeanIMT(hash2);

      tree.insert(1n);

      expect(tree.root).to.eq(1n);
    });

    it(`Should insert ${treeSize} leaves`, () => {
      const tree = new LeanIMT(hash2);

      for (let i = 0; i < treeSize; i += 1) {
        tree.insert(BigInt(i));

        expect(tree.size).to.eq(i + 1);
      }

      expect(tree.root).to.eq(roots[0]);
    });
  });

  describe("# insertMany", () => {
    it(`Should not insert any leaf if the list of leaves is not defined`, () => {
      const tree = new LeanIMT(hash2);

      const fun = () => tree.insertMany(undefined as any);

      expect(fun).to.throw("Parameter 'leaves' is not defined");
    });

    it(`Should not insert any leaf if the list of leaves is not a list`, () => {
      const tree = new LeanIMT(hash2);

      const fun = () => tree.insertMany("uoe" as any);

      expect(fun).to.throw("Parameter 'leaves' is not an array");
    });

    it(`Should not insert any leaf if the list of leaves is empty`, () => {
      const tree = new LeanIMT(hash2);

      const fun = () => tree.insertMany([]);

      expect(fun).to.throw("There are no leaves to add");
    });

    it(`Should insert ${treeSize} leaves at once`, () => {
      const tree = new LeanIMT(hash2);

      tree.insertMany(leaves);

      expect(tree.root).to.eq(roots[0]);
    });
  });

  describe("# update", () => {
    it(`Should not update any leaf if the parameters are not defined`, () => {
      const tree = new LeanIMT(hash2, leaves);

      const fun1 = () => tree.update(undefined as any, 1n);
      const fun2 = () => tree.update(1, undefined as any);

      expect(fun1).to.throw("Parameter 'index' is not defined");
      expect(fun2).to.throw("Parameter 'newLeaf' is not defined");
    });

    it(`Should not update any leaf if the index is not a number`, () => {
      const tree = new LeanIMT(hash2, leaves);

      const fun = () => tree.update("uoe" as any, 3n);

      expect(fun).to.throw("Parameter 'index' is not a number");
    });

    it(`Should insert 1 leaf`, () => {
      const tree = new LeanIMT(hash2, [0n, 1n]);

      tree.update(0, 2n);

      expect(tree.root).to.eq(hash2([2n, 1n]));
    });

    it(`Should update ${treeSize} leaves`, () => {
      const tree = new LeanIMT(hash2, leaves);

      for (let i = 0; i < treeSize; i += 1) {
        tree.update(i, 0n);
      }

      expect(tree.root).to.eq(roots[1]);
    });
  });

  describe("# generateProof", () => {
    it(`Should not generate any proof if the index is not defined`, () => {
      const tree = new LeanIMT(hash2, leaves);

      const fun = () => tree.genProof(undefined as any, 2);

      expect(fun).to.throw("Parameter 'index' is not defined");
    });

    it(`Should not generate any proof if the index is not a number`, () => {
      const tree = new LeanIMT(hash2, leaves);

      const fun = () => tree.genProof("uoe" as any, 2);

      expect(fun).to.throw("Parameter 'index' is not a number");
    });

    it("should not generate any proof if the leaf does not exist", () => {
      const tree = new LeanIMT(hash2, leaves);

      const fun = () => tree.genProof(999, 2);

      expect(fun).to.throw("The leaf at index '999' does not exist in this tree");
    });

    it("should generate a proof for a leaf", () => {
      const tree = new LeanIMT(hash2, leaves);

      const proof = tree.genProof(2, 2);

      expect(proof.leaf).to.eq(2n);
    });

    it("should generate a proof with only 1 sibling when odd number of leaves and using the last leaf index", () => {
      const leaves = [0n, 1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n];
      const tree = new LeanIMT(hash2, leaves);

      const proof = tree.genProof(leaves.length - 1, 10);

      expect(proof.pathElements.length).to.eq(10);
      // when there are odd leaves and we are using the last leaf, there's only 1 sibling in the path
      expect(proof.pathElements[1]).to.eq(0n);

      // check hash matches
      expect(hash2([proof.pathElements[0], leaves[leaves.length - 1]])).to.eq(tree.root);
    });

    it("should generate a proof with 2 siblings when even number of leaves and using the last leaf index", () => {
      const leaves = [0n, 1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n];
      const tree = new LeanIMT(hash2, leaves);

      const proof = tree.genProof(leaves.length - 1, 10);

      expect(proof.pathElements.length).to.eq(10);
      // when there are even leaves and we are using the last leaf, there's only 2 siblings in the path
      expect(proof.pathElements[1]).to.not.eq(0n);

      expect(hash2([proof.pathElements[1], hash2([proof.pathElements[0], leaves[leaves.length - 1]])])).to.eq(
        tree.root,
      );
    });
  });
});
