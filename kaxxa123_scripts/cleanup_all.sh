#! /bin/bash

# Ensure we run this script
# from the script folder location.
SCRIPT_DIR=$(dirname "$0")
cd "$SCRIPT_DIR"
echo "Running from $(pwd)"
echo

set -x

rm ../node_modules -rfv
rm ../circuits/node_modules -rfv
rm ../cli/node_modules -rfv
rm ../contracts/node_modules -rfv
rm ../coordinator/node_modules -rfv
rm ../core/node_modules -rfv
rm ../crypto/node_modules -rfv
rm ../domainobjs/node_modules -rfv
rm ../integrationTests/node_modules -rfv
rm ../subgraph/node_modules -rfv
rm ../website/node_modules -rfv
rm ../cli/zkeys -rfv

set +x
