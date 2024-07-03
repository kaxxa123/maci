# Run this script from the contract dir using:
# > source ../kaxxa123_scripts/setenv.sh

export MACI=$(jq -r '.localhost.named.MACI.address' ./deployed-contracts.json)
export MSGPROC=$(jq -r '.localhost.named.MessageProcessor."poll-0".address' ./deployed-contracts.json)
export TALLY=$(jq -r '.localhost.named.Tally."poll-0".address' ./deployed-contracts.json)

export AGENTPK="macipk.15d9b3b1dc8a20ce47186ecff14102d4874abfce4f1e0d4168810290740f58a4"
export AGENTSK="macisk.50497ce3b2fc92fef810c9019000711e2810a3cf0e1cfe62432ad59c775632cc"

declare -A voters
voters[0,0]="macipk.8ee2f2fda9d8d21934ac92700aff201302daa4e2b055f4788ae396bf151e13a5"
voters[0,1]="macisk.2ff4d0b3ffba09d90f5ba68e397ccae6fd50b4e76cc50770cf49b3681f3a5c74"
voters[1,0]="macipk.a01ff7106d59ff0f4dc2a65cac07674442a80ddbf7292993147007e3724455f1"
voters[1,1]="macisk.e5390f5c28c923826a0dff9bdbdddf12288bb182fcf6582d08022d72ca6cdc0d"
voters[2,0]="macipk.90cd0bf365be466da5004e01771d27bf1818bcec64c77205838342c6d0aea59c"
voters[2,1]="macisk.a7896dbace12486dee1e2603e3fa95273a878f15b2f2eb23dca5337b96ba593f"
voters[3,0]="macipk.8a805807c14e6889031568fd92afa31365094d13cfc0db17d6aca969776db79a"
voters[3,1]="macisk.705600c2ae40706cb66de9c5794bbe15ad8147fcd85e54b91eaccfc3e6d35179"

echo "MACI Contract: $MACI"
echo "TALLY Contract: $TALLY"
echo "Message Processor Contract: $MSGPROC"
echo "Agent public key:  $AGENTPK"
echo "Agent secret key:  $AGENTSK"
echo "Voter 3 public key:  ${voters[2,0]}"
