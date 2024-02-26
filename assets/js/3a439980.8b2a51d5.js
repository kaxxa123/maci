"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3991],{86:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=s(5250),n=s(720);const i={title:"MACI Workflow",description:"Overview of the MACI workflow",sidebar_label:"Workflow",sidebar_position:2},r="MACI Workflow",a={id:"workflow",title:"MACI Workflow",description:"Overview of the MACI workflow",source:"@site/versioned_docs/version-v1.x/workflow.md",sourceDirName:".",slug:"/workflow",permalink:"/docs/workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/workflow.md",tags:[],version:"v1.x",sidebarPosition:2,frontMatter:{title:"MACI Workflow",description:"Overview of the MACI workflow",sidebar_label:"Workflow",sidebar_position:2},sidebar:"version-1.x/mySidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Installation",permalink:"/docs/installation"}},l={},c=[{value:"Roles",id:"roles",level:2},{value:"User (voter)",id:"user-voter",level:3},{value:"Coordinator",id:"coordinator",level:3},{value:"Trust assumptions",id:"trust-assumptions",level:4},{value:"Contracts",id:"contracts",level:2},{value:"MACI.sol",id:"macisol",level:3},{value:"Poll.sol",id:"pollsol",level:3},{value:"MessageProcessor.sol and Tally.sol",id:"messageprocessorsol-and-tallysol",level:3},{value:"Poll lifecycle",id:"poll-lifecycle",level:2},{value:"1) Open",id:"1-open",level:3},{value:"Sign up",id:"sign-up",level:4},{value:"Vote",id:"vote",level:4},{value:"2) Closed",id:"2-closed",level:3},{value:"Process Messages",id:"process-messages",level:4},{value:"Tally Results",id:"tally-results",level:4},{value:"3) Finalized",id:"3-finalized",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"maci-workflow",children:"MACI Workflow"}),"\n",(0,o.jsxs)(t.p,{children:["This article covers the high-level MACI workflow, which borrows heavily from our ",(0,o.jsx)(t.a,{href:"/blog/maci-1-0-technical-introduction#system-overview",children:"Technical Introduction to MACI"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"roles",children:"Roles"}),"\n",(0,o.jsx)(t.p,{children:"There are two key roles that participate in MACI:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Users, who vote on polls"}),"\n",(0,o.jsx)(t.li,{children:"A trusted coordinator, who configures and launches polls, tallies up votes, and publishes the final results"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"user-voter",children:"User (voter)"}),"\n",(0,o.jsx)(t.p,{children:'A "User" is any voter in a MACI poll.'}),"\n",(0,o.jsx)(t.p,{children:"In order to participate in a MACI poll, a user will perform at least 2 on-chain transactions:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Sign up with MACI"}),"\n",(0,o.jsx)(t.li,{children:"Vote on a poll"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"coordinator",children:"Coordinator"}),"\n",(0,o.jsx)(t.p,{children:'The "Coordinator" helps set up and execute MACI polls. They are responsible for deploying the MACI smart contracts, initiating polls, tallying the final results of a vote, and finalizing polls by publishing the final results on-chain.'}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Note: it's possible for the contract deployer and the coordinator to be two separate accounts/entities, but for simplicity we'll start by assuming these functions are the same role."})}),"\n",(0,o.jsx)(t.p,{children:"Once a voting poll has completed (i.e. the voting deadline has elapsed), the coordinator has the sole ability to decrypt all user votes and tally up the total results. The coordinator then publishes commitments and proofs of these results on chain to finalize a poll. The coordinators must use zk-SNARKs proofs to guarantee that their final tally result is valid, and this is accomplished without releasing the vote of every individual."}),"\n",(0,o.jsx)(t.h4,{id:"trust-assumptions",children:"Trust assumptions"}),"\n",(0,o.jsx)(t.p,{children:'We say the coordinator is a "trusted" coordinator, because there\'s areas where a corrupt (or inept) coordinator could disrupt the "happy path" of the MACI workflow.'}),"\n",(0,o.jsx)(t.p,{children:"For instance, a coordinator can:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Decrypt votes (in order to publish them, or to bribe individual voters)"}),"\n",(0,o.jsx)(t.li,{children:"Halt a round (by never tallying results or never submitting the final proofs)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"A coordinator cannot:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Publish incorrect results (either by censoring valid votes or creating fraudulent votes)"}),"\n",(0,o.jsx)(t.li,{children:"Change the parameters of a poll (e.g. by extending its voting deadline once it's been deployed)"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Therefore, even if a coordinator is corrupt, they are unable to change a user\u2019s vote or add extra votes themselves. A corrupt coordinator can stop a vote by never publishing the results, but they can\u2019t publish false results."}),"\n",(0,o.jsx)(t.h2,{id:"contracts",children:"Contracts"}),"\n",(0,o.jsx)(t.p,{children:"To explain the MACI workflow, let's give a quick overview of the key smart contracts."}),"\n",(0,o.jsxs)(t.p,{children:["See our ",(0,o.jsx)(t.a,{href:"/docs/contracts",children:"smart contract docs"})," or our ",(0,o.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/dev/contracts/contracts",children:"contract source code"})," for a more in-depth explanation of all smart contracts."]}),"\n",(0,o.jsx)(t.h3,{id:"macisol",children:"MACI.sol"}),"\n",(0,o.jsxs)(t.p,{children:["The MACI contract is responsible for registering user signups by recording the initial public key for each user (via the ",(0,o.jsxs)(t.a,{href:"/docs/solidity-docs/MACI#signup-1",children:[(0,o.jsx)(t.code,{children:"signUp"})," function"]}),"). To conduct a voting round, the coordinator can deploy a Poll via MACI (with the ",(0,o.jsxs)(t.a,{href:"/docs/solidity-docs/MACI#deploypoll",children:[(0,o.jsx)(t.code,{children:"deployPoll"})," function"]}),")."]}),"\n",(0,o.jsx)(t.h3,{id:"pollsol",children:"Poll.sol"}),"\n",(0,o.jsxs)(t.p,{children:["The Poll contract is where users submit their votes (via the ",(0,o.jsxs)(t.a,{href:"/docs/typedoc/core/classes/Poll#publishmessage",children:[(0,o.jsx)(t.code,{children:"publishMessage"})," function"]}),"). One MACI contract can be used for multiple Poll contracts. In other words, a user that signed up to the MACI contract can vote on multiple issues, with each issue represented by a distinct Poll contract."]}),"\n",(0,o.jsx)(t.h3,{id:"messageprocessorsol-and-tallysol",children:"MessageProcessor.sol and Tally.sol"}),"\n",(0,o.jsx)(t.p,{children:"The MessageProcessor and Tally contracts are used by the coordinator to process all user votes and to prove on-chain that they correctly tallied each vote."}),"\n",(0,o.jsx)(t.h2,{id:"poll-lifecycle",children:"Poll lifecycle"}),"\n",(0,o.jsx)(t.p,{children:"As described above, a core contract of MACI is a Poll. Coordinators can deploy polls and add vote options to polls, which users can then vote on. Although each instance of MACI can deploy multiple Polls, only one Poll can be active at a time."}),"\n",(0,o.jsx)(t.p,{children:"In essence, each MACI Poll is a state machine which has 3 stages:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Open"}),"\n",(0,o.jsx)(t.li,{children:"Closed"}),"\n",(0,o.jsx)(t.li,{children:"Finalized"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"1-open",children:"1) Open"}),"\n",(0,o.jsxs)(t.p,{children:["When a Poll is deployed, its voting period starts immediately. As part of its deployment, the ",(0,o.jsx)(t.code,{children:"duration"}),' of the Poll is set, which determines how long the Poll is open for voting. A Poll is "open" until the duration of the Poll has elapsed.']}),"\n",(0,o.jsx)(t.p,{children:"During this stage, users can sign up and vote."}),"\n",(0,o.jsx)(t.h4,{id:"sign-up",children:"Sign up"}),"\n",(0,o.jsx)(t.p,{children:"Before a user can cast a vote, they must sign up by generating a MACI keypair and then sending the public key they wish to use to cast their vote to the MACI smart contract. This MACI public key (distinct from their Ethereum account public key) acts as their identity when voting. Users can vote from any Ethereum address, but their message must contain a signature from that MACI public key."}),"\n",(0,o.jsxs)(t.p,{children:["This registration process is necessary to fortify MACI against Sybil attacks. The particular criteria used to allow user signups is customizable, and can be configured using any ",(0,o.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/dev/contracts/contracts/gatekeepers/SignUpGatekeeper.sol",children:"SignUpGatekeeper contract"}),". This contract dictates the criteria a user must pass in order to participate in a poll. For example, a user might need to prove ownership of a certain NFT, or that they've received some attestation on EAS, or prove that they have passed some sort of proof-of-personhood verification. Note that MACI presumes an identity system where each legitimate member\ncontrols a unique private key - MACI does not specifically solve for this, but allows for customization on how this is configured."]}),"\n",(0,o.jsx)(t.h4,{id:"vote",children:"Vote"}),"\n",(0,o.jsx)(t.p,{children:"Once a user has signed up with MACI, they are eligible to vote on open polls."}),"\n",(0,o.jsx)(t.p,{children:'To cast a vote, a user will bundle a few variables \u2014 including a public key, their vote option, their vote amount, and a few others \u2014 into what is called a "command". Then, the user signs the command with the public key they originally used to sign up. After that, the user encrypts the signature and command together so that it is now considered a "message". If the command is properly signed by the user\u2019s MACI public key, then the message is considered valid will be counted in the final tally. Therefore, the MACI public key can be thought of as the user\u2019s voting username, and the signature is the voting password. If they provide the correct signature, they can submit a vote.'}),"\n",(0,o.jsx)(t.p,{children:"Before sending their vote on-chain, users encrypt their vote using a shared key that only the user and coordinator can know. This key scheme is designed so that every individual user shares a distinct key with the coordinator. This prevents any bribers from simply reading the transaction data to see which option a user voted for. It also allows the coordinator to decrypt user votes (so that they can tally the results)."}),"\n",(0,o.jsx)(t.h3,{id:"2-closed",children:"2) Closed"}),"\n",(0,o.jsx)(t.p,{children:'A Poll is "closed", when the voting period ends. At this point, no users may submit any more votes. The Poll remains closed until the coordinator tallies the final results.'}),"\n",(0,o.jsx)(t.p,{children:"At this point, the coordinator must process all the messages, tally the results, and publish the proofs on-chain."}),"\n",(0,o.jsx)(t.h4,{id:"process-messages",children:"Process Messages"}),"\n",(0,o.jsxs)(t.p,{children:["Once the voting period has completed for a specific poll, the coordinator will use the ",(0,o.jsx)(t.code,{children:"MessageProcessor"})," contract to first prove that they have correctly decrypted each message and applied them to correctly create an updated state tree. This state tree keeps an account of all the valid votes that should be counted. So, when processing the messages, the coordinator will not keep messages that are later overridden by a newer message inside the state tree. For example, if a user votes for option A, but then later sends a new message to vote for option B, the coordinator will only count the vote for option B."]}),"\n",(0,o.jsxs)(t.p,{children:["The coordinator must process messages in batches so that proving on chain does not exceed the data limit. The coordinator then creates a zk-SNARK proving their state tree correctly contains only the valid messages. Once the proof is ready, the coordinator calls ",(0,o.jsx)(t.a,{href:"/docs/solidity-docs/MessageProcessor#processmessages",children:(0,o.jsx)(t.code,{children:"MessageProcessor.processMessages()"})}),", providing a hash of the state tree and the zk-SNARK proof as an input parameters."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"MessageProcessor"})," contract will send the proof to a separate verifier contract. The verifier contract is specifically built to read MACI zk-SNARK proofs and tell if they are valid or not. So, if the verifier contract returns true, then everyone can see on-chain that the coordinator correctly processed that batch of messages. The coordinator repeats this process until all messages have been processed."]}),"\n",(0,o.jsx)(t.h4,{id:"tally-results",children:"Tally Results"}),"\n",(0,o.jsxs)(t.p,{children:["Finally, once all messages have been processed, the coordinator tallies the votes of the valid messages (off-chain). The coordinator creates a zk-SNARK proving that the valid messages in the state tree (proved in Process Messages step) contain votes that sum to the given tally result. Then, they call ",(0,o.jsx)(t.a,{href:"/docs/solidity-docs/Tally#tallyvotes",children:(0,o.jsx)(t.code,{children:"Tally.tallyVotes()"})})," with a hash of the correct tally results and the zk-SNARK proof. Similarly to the processMessages function, the ",(0,o.jsx)(t.code,{children:"tallyVotes"})," function will send the proof to a verifier contract to ensure that it is valid."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"tallyVotes"})," function is only successful if the verifier contract returns that the proof is valid. Therefore, once the ",(0,o.jsx)(t.code,{children:"tallyVotes"})," function succeeds, users can trust that the coordinator has correctly tallied all of the valid votes. After this step, anyone can see the final tally results and the proof that these results are a correct result of the messages sent to the Poll contract. The users won\u2019t be able to see how any individual voted, but will be able to trust that these votes were properly processed and counted."]}),"\n",(0,o.jsx)(t.h3,{id:"3-finalized",children:"3) Finalized"}),"\n",(0,o.jsx)(t.p,{children:'A poll is "finalized" after the coordinator processes all the messages, tallies the results, and publishes the on-chain proofs.'}),"\n",(0,o.jsx)(t.p,{children:"At this point, the final results of a poll can be announced, and anyone can verify that the results have been processed and calculated correctly by the coordinator."})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},720:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var o=s(79);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);