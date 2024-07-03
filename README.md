# Minimal Anti-Collusion Infrastructure - Fork

[Original README](./READMEOriginal.md)

This fork is meant to explore the MACI project.

Here I will be documenting the steps taken to get a test Poll running on Windows WSL2 (Ubuntu 22.04).

<BR />

## Fork Setup

```BASH
gh repo fork git@github.com:privacy-scaling-explorations/maci.git
git checkout -b kaxxa123
```

<BR />

## Setup/Build

1. Get the right node version

   ```BASH
   nvm install 20.15.0
   nvm use 20.15.0
   ```

1. Install pnpm

   ```BASH
   npm install -g pnpm
   pnpm -v
   ```

1. Edit [package.json](./package.json) to allow latest pnpm:

   ```
   From:
       "pnpm": "8"
   To:
       "pnpm": ">8"
   ```

1. Build, and download ZK keys.

   ```BASH
   pnpm i
   pnpm build
   pnpm download-zkeys:test
   ```

   At this point we will have `maci-cli` ready for use from:

   ```BASH
   node ./cli/build/ts/index.js --help
   ```

   We will also have the proving and verification
   keys downloaded at `./cli/zkeys`.

1. Optionally configure hardhat local node mining speed under: <BR />
   [./contracts/hardhat.config.ts](./contracts/hardhat.config.ts)

   Initial configuration is set to mine a block every 100ms. This will cause 10x clock speed since every block must increment the timestamp in seconds. If we increment this to >1000ms this speedup trick is neutralized.

   ```JSON
     mining: {
       auto: true,
       interval: 100,
     },
   ```

1. Optionally configure `./contracts/.env`. <BR />
   Otherwise the scripts will work against a local hardhat node.

1. Configure [./contracts/deploy-config.json](./contracts/deploy-config.json) | `localhost`,
   by copying from [./contracts/deploy-config-example.json](./contracts/deploy-config-example.json)

   The one configured for this test is [./contracts/deploy-config-kaxxa123.json](./contracts/deploy-config-kaxxa123.json)

   ```JSON
   {
       "localhost": {
       }
   }
   ```

   We can copy from `deploy-config-example.json` | `arbitrum_sepolia` <BR />
   | `FreeForAllGatekeeper` <BR />
   | `MACI` <BR />
   | `VkRegistry` <BR />
   | `Poll` <BR />

   **Ensure references to the tree depth are set to 10
   since the test circuits have this depth.**

   Also refer to [the docs](https://maci.pse.dev/docs/quick-start/deployment#deployment-using-maci-contracts-hardhat-tasks) for configuration examples.

1. Under `deploy-config.json` | `localhost` | `Poll`, update the poll duration `pollDuration` in seconds and election agent public key `coordinatorPubkey`. However keep in mind that the actual poll duration is a function of the hardhat mining speed-up trick discussed earlier.

   To update the electoral agent public key we can create a new pair using `maci-cli`:

   ```BASH
   cd cli
   node build/ts/index.js genMaciKeyPair

   # [✓] Public key: macipk.15d9b3b1dc8a20ce47186ecff14102d4874abfce4f1e0d4168810290740f58a4
   # [✓] Private key: macisk.50497ce3b2fc92fef810c9019000711e2810a3cf0e1cfe62432ad59c775632cc
   ```

1. Create voter key pairs.

   ```BASH
   cd cli
   node build/ts/index.js genMaciKeyPair

   # [✓] Public key: macipk.8ee2f2fda9d8d21934ac92700aff201302daa4e2b055f4788ae396bf151e13a5
   # [✓] Private key: macisk.2ff4d0b3ffba09d90f5ba68e397ccae6fd50b4e76cc50770cf49b3681f3a5c74
   #
   # [✓] Public key: macipk.a01ff7106d59ff0f4dc2a65cac07674442a80ddbf7292993147007e3724455f1
   # [✓] Private key: macisk.e5390f5c28c923826a0dff9bdbdddf12288bb182fcf6582d08022d72ca6cdc0d
   #
   # [✓] Public key: macipk.90cd0bf365be466da5004e01771d27bf1818bcec64c77205838342c6d0aea59c
   # [✓] Private key: macisk.a7896dbace12486dee1e2603e3fa95273a878f15b2f2eb23dca5337b96ba593f
   #
   # [✓] Public key: macipk.8a805807c14e6889031568fd92afa31365094d13cfc0db17d6aca969776db79a
   # [✓] Private key: macisk.705600c2ae40706cb66de9c5794bbe15ad8147fcd85e54b91eaccfc3e6d35179
   ```

1. Install json parser for bash to easily access the deployed contracts log (`deployed-contracts.json`) later:
   ```BASH
   sudo apt-get install jq
   ```

<BR />

## Cleanup Poll

1. Run [./kaxxa123_scripts/cleanup_poll.sh](./kaxxa123_scripts/cleanup_poll.sh)

   ```BASH
   rm ./contracts/deployed-contracts.json
   rm ./cli/tally.json
   rm ./cli/localState.json
   rm ./cli/proofs -rfv
   ```

<BR />

## Deploy

1. Deploy contracts:

   ```BASH
   nvm use 20.15.0

   cd contracts

   # Start a hardhat node
   pnpm hardhat

   # Deploy the core set of contracts
   pnpm deploy:localhost

   # Deploy poll contract
   pnpm deploy-poll:localhost

   # List deployed contracts
   cat ./deployed-contracts.json
   ```

<BR />

## Voting

1.  Signup voter, using public key and MACI contract address
    from [./contracts/deployed-contracts.json](./contracts/deployed-contracts.json)

        ```BASH
        # Initialize some useful environment variables
        cd contracts
        source ../kaxxa123_scripts/setenv.sh

        cd ../cli
        node build/ts/index.js signup -p "${voters[0,0]}" -x ${MACI}
        node build/ts/index.js signup -p "${voters[1,0]}" -x ${MACI}
        node build/ts/index.js signup -p "${voters[2,0]}" -x ${MACI}
        node build/ts/index.js signup -p "${voters[3,0]}" -x ${MACI}

        # Note each signup is assigned a state index required on submitting votes...
        # [✓] State index: 1
        ```

1.  Submit votes: <BR />

    ```BASH
    node build/ts/index.js publish \
        -p "${voters[0,0]}" \
        -sk "${voters[0,1]}" \
        --maci-address $MACI  \
        --state-index 1  \
        --vote-option-index 0  \
        --new-vote-weight 9  \
        --nonce 1  \
        --poll-id 0

    node build/ts/index.js publish \
        -p "${voters[1,0]}" \
        -sk "${voters[1,1]}" \
        --maci-address $MACI  \
        --state-index 2  \
        --vote-option-index 1  \
        --new-vote-weight 3  \
        --nonce 1  \
        --poll-id 0

    node build/ts/index.js publish \
        -p "${voters[2,0]}" \
        -sk "${voters[2,1]}" \
        --maci-address $MACI  \
        --state-index 3  \
        --vote-option-index 1  \
        --new-vote-weight 7  \
        --nonce 1  \
        --poll-id 0

    node build/ts/index.js publish \
        -p "${voters[3,0]}" \
        -sk "${voters[3,1]}" \
        --maci-address $MACI  \
        --state-index 4  \
        --vote-option-index 1  \
        --new-vote-weight 5  \
        --nonce 1  \
        --poll-id 0

    # Note the ephemeral private key returned...
    # [i] Ephemeral private key: macisk.616d09263492390579009d0b2143ccd63118d6c63212bf6c38f7a63c9343e0fb
    ```

<BR />

## Tallying

1. Merge state tree:

   ```BASH
   node build/ts/index.js mergeSignups --maci-address $MACI --poll-id  0

   # [i] Calculating root and storing on Poll...
   # [i] Transaction hash: 0x4180399c2b5e873afe563dde8caef6b45a03966251e28f4ee0220cb7cbfc2547
   # [✓] Executed mergeStateAq(); gas used: 295859
   ```

1. Merge message tree:

   ```BASH
   node build/ts/index.js mergeMessages --maci-address $MACI --poll-id 0

   # [i] Merging message subroots 1 / 2
   # [✓] Executed mergeMessageAqSubRoots(); gas used: 81267
   # [i] Transaction hash: 0x30fcba83535a3a8a8e09923cee33bfe2cbf43dfa58f7b5ba14b3c93d234bd846
   # [✓] All message subtrees have been merged.
   # [i] Merging subroots to a main message root...
   # [✓] Executed mergeMessageAq(); gas used: 167044
   # [i] Transaction hash: 0x885f76cf65a5b67d1c8eb13a865441df8400835ea12328f508d4145175998e8d
   # [✓] The message tree has been merged.
   ```

1. Generate off-chain MACI state

   ```BASH
   node build/ts/index.js genLocalState \
       --maci-address $MACI \
       --privkey $AGENTSK \
       --blocks-per-batch 50 \
       --poll-id 0 \
       --output ./localState.json

   cat ./localState.json
   ```

1. Generate proofs

   ```BASH
   node build/ts/index.js genProofs \
       --maci-address $MACI \
       -sk $AGENTSK \
       --poll-id  0 \
       --state-file  ./localState.json \
       --process-zkey ./zkeys/ProcessMessages_10-2-1-2_test/ProcessMessages_10-2-1-2_test.0.zkey \
       --tally-zkey   ./zkeys/TallyVotes_10-1-2_test/TallyVotes_10-1-2_test.0.zkey \
       --tally-wasm   ./zkeys/TallyVotes_10-1-2_test/TallyVotes_10-1-2_test_js/TallyVotes_10-1-2_test.wasm \
       --process-wasm ./zkeys/ProcessMessages_10-2-1-2_test/ProcessMessages_10-2-1-2_test_js/ProcessMessages_10-2-1-2_test.wasm \
       --wasm true \
       --tally-file ./tally.json \
       --output ./proofs

   cat ./tally.json
   ```

1. Submit tally proof on-chain

   ```BASH
   node build/ts/index.js proveOnChain \
       --maci-address $MACI \
       --message-processor-address  $MSGPROC  \
       --tally-contract  $TALLY  \
       --poll-id  0 \
       --proof-dir  ./proofs/
   ```

<BR />

## Interact with Contracts

We can interact with the Poll contract directly as follows. However it makes more sense to use `maci-cli` because
of the multiple calls that must be done in the correct order.

```BASH
cd contracts
nvm use 20.15.0
npx hardhat console --network localhost
```

```JS
accounts = await ethers.getSigners()
trn = await accounts[0].sendTransaction({to: accounts[1], value: 10n**18n})
rcp = await trn.wait()
await  ethers.provider.getBalance(accounts[1].address)

//Read the contract addresses, and remove troublesome characters
fs = require("fs")
fs.readFile(`./deployed-contracts.json`, 'utf8',
                    (err, data) =>
                    maci_contracts = JSON.parse(data.split('-').join('')))
maci_contracts = maci_contracts.localhost.named

// Addresses from deploy-config.json
let PollFactory = await ethers.getContractFactory("Poll", {
    libraries: {
        PoseidonT3: maci_contracts.PoseidonT3.address,
        PoseidonT4: maci_contracts.PoseidonT4.address,
        PoseidonT5: maci_contracts.PoseidonT5.address,
        PoseidonT6: maci_contracts.PoseidonT6.address,
    }
})
let poll = await PollFactory.attach(maci_contracts.Poll.poll0.address)

// Read poll duration parameters
await poll.getDeployTimeAndDuration()

// Check the blockchain time to see if duration expired...
let blocknum = await ethers.provider.getBlockNumber()
(await ethers.provider.getBlock(blocknum)).timestamp

// Read signup and message count. Return is only valid
// after agent merges the state tree.
await poll.numSignUpsAndMessages()
```
