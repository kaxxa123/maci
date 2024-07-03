#! /bin/bash

# Ensure we run this script
# from the script folder location.
SCRIPT_DIR=$(dirname "$0")
cd "$SCRIPT_DIR"
echo "Running from $(pwd)"
echo

set -x

rm ../contracts/deployed-contracts.json
rm ../cli/tally.json
rm ../cli/localState.json
rm ../cli/proofs -rfv

set +x
