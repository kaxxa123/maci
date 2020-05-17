import {
    compileAndLoadCircuit,
} from '../'

import {
    genRandomSalt,
    IncrementalQuadTree,
    SnarkBigInt,
    bigInt,
} from 'maci-crypto'

const LEVELS = 3
const ZERO_VALUE = 0

describe('Quad Merkle Tree circuits', () => {
    describe('QuadTreeInsertionProof', () => {
        let circuit

        beforeAll(async () => {
            circuit = await compileAndLoadCircuit('test/quadTreeInclusionProof_test.circom')
        })

        it('Valid QuadTreeInsertionProof inputs should work', async () => {
            const tree = new IncrementalQuadTree(LEVELS, ZERO_VALUE)

            for (let i = 0; i < 30; i++) {
                const randomVal = genRandomSalt()
                tree.insert(randomVal)
            }
            const path = tree.genMerklePath(7)
            const isValid = IncrementalQuadTree.verifyMerklePath(
                path,
                tree.hashFunc,
                tree.depth,
                tree.root,
            )
            expect(isValid).toBeTruthy()

            const circuitInputs = path
            const witness = circuit.calculateWitness(circuitInputs)
            expect(circuit.checkWitness(witness)).toBeTruthy()
        })
    })

    describe('QuadCheckRoot', () => {
        let circuit

        beforeAll(async () => {
            circuit = await compileAndLoadCircuit('test/quadTreeCheckRoot_test.circom')
        })

        it('Valid CheckRoot inputs should work', async () => {
            const tree = new IncrementalQuadTree(LEVELS, ZERO_VALUE)
            const leaves: SnarkBigInt[] = []

            for (let i = 0; i < 5 ** LEVELS; i++) {
                const randomVal = genRandomSalt()
                tree.insert(randomVal)
                leaves.push(randomVal)
            }

            const root = tree.root

            const circuitInputs = { leaves }

            const witness = circuit.calculateWitness(circuitInputs)
            expect(circuit.checkWitness(witness)).toBeTruthy()
            const circuitRoot = witness[circuit.getSignalIdx('main.root')].toString()

            expect(circuitRoot).toEqual(root.toString())
        })

        it('Different leaves should generate a different root', async () => {
            const tree = new IncrementalQuadTree(LEVELS, ZERO_VALUE)
            const leaves: SnarkBigInt[] = []

            for (let i = 0; i < 5 ** LEVELS; i++) {
                const randomVal = genRandomSalt()
                tree.insert(randomVal)
                leaves.push(randomVal)
            }

            leaves[0] = bigInt(0)

            const root = tree.root

            const circuitInputs = { leaves }

            const witness = circuit.calculateWitness(circuitInputs)
            expect(circuit.checkWitness(witness)).toBeTruthy()
            const circuitRoot = witness[circuit.getSignalIdx('main.root')].toString()

            expect(circuitRoot).not.toEqual(root.toString())
        })
    })
})
