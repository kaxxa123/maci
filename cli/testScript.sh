#! /bin/bash
# rm -r ./proofs
# rm tally.json
node build/ts/index.js deployVkRegistry
node build/ts/index.js setVerifyingKeys \
    --state-tree-depth 10 \
    --int-state-tree-depth 1 \
    --msg-tree-depth 2 \
    --vote-option-tree-depth 2 \
    --msg-batch-depth 1 \
    --process-messages-zkey ./zkeys/ProcessMessagesNonQv_10-2-1-2_test/ProcessMessagesNonQv_10-2-1-2_test.0.zkey \
    --tally-votes-zkey ./zkeys/TallyVotesNonQv_10-1-2_test/TallyVotesNonQv_10-1-2_test.0.zkey
node build/ts/index.js create -s 10 -uq false
node build/ts/index.js deployPoll \
    --pubkey macipk.281830024fb6d21a4c73a89a7139aff61fbbddad731ef2dc2db9516171fd390e \
    -t 100 -i 1 -m 2 -b 1 -v 2
node build/ts/index.js getPoll \
    --quiet false
node build/ts/index.js signup \
    --pubkey macipk.1cac8e4e5b54d7dcce4aa06e71d8b9f324458756e7a9368383d005592719512a 
node build/ts/index.js isRegisteredUser \
    --pubkey macipk.1cac8e4e5b54d7dcce4aa06e71d8b9f324458756e7a9368383d005592719512a \
    --quiet false
node build/ts/index.js publish \
    --pubkey macipk.1cac8e4e5b54d7dcce4aa06e71d8b9f324458756e7a9368383d005592719512a \
    --privkey macisk.63e796e4e5d18a5fcf4ccef1e74e83b807a165d6727bb89201782240458f7420 \
    --state-index 1 \
    --vote-option-index 1 \
    --new-vote-weight 9 \
    --nonce 3 \
    --poll-id 0
node build/ts/index.js publish \
    --pubkey macipk.8dab6c63370cadb094d6c8f085b3693c8495f14185e9631a82be955501b837f6 \
    --privkey macisk.63e796e4e5d18a5fcf4ccef1e74e83b807a165d6727bb89201782240458f7420 \
    --state-index 1 \
    --vote-option-index 0 \
    --new-vote-weight 9 \
    --nonce 2 \
    --poll-id 0 
node build/ts/index.js publish \
    --pubkey macipk.1cac8e4e5b54d7dcce4aa06e71d8b9f324458756e7a9368383d005592719512a \
    --privkey macisk.63e796e4e5d18a5fcf4ccef1e74e83b807a165d6727bb89201782240458f7420 \
    --state-index 1 \
    --vote-option-index 0 \
    --new-vote-weight 9 \
    --nonce 1 \
    --poll-id 0
node build/ts/index.js timeTravel -s 100
node build/ts/index.js mergeSignups --poll-id 0
node build/ts/index.js mergeMessages --poll-id 0
node build/ts/index.js genProofs \
    --privkey macisk.bf92af7614b07e2ba19dce65bb7fef2b93d83b84da2cf2e3af690104fbc52511 \
    --poll-id 0 \
    --process-zkey ./zkeys/ProcessMessagesNonQv_10-2-1-2_test/ProcessMessagesNonQv_10-2-1-2_test.0.zkey \
    --tally-zkey ./zkeys/TallyVotesNonQv_10-1-2_test/TallyVotesNonQv_10-1-2_test.0.zkey \
    --tally-file tally.json \
    --output proofs/ \
    -tw ./zkeys/TallyVotesNonQv_10-1-2_test/TallyVotesNonQv_10-1-2_test_js/TallyVotesNonQv_10-1-2_test.wasm \
    -pw ./zkeys/ProcessMessagesNonQv_10-2-1-2_test/ProcessMessagesNonQv_10-2-1-2_test_js/ProcessMessagesNonQv_10-2-1-2_test.wasm \
    -w true \
    -q false \
    -uq false 
node build/ts/index.js proveOnChain \
    --poll-id 0 \
    --proof-dir proofs/ 
node build/ts/index.js verify \
    --poll-id 0 \
    --tally-file tally.json
