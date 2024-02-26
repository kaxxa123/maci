"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9647],{896:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(5250),i=s(720);const o={title:"Contributing to MACI",description:"Instructions on how to contribute to MACI",sidebar_label:"Contributing",sidebar_position:19},r="Contributing",c={id:"contributing/contributing",title:"Contributing to MACI",description:"Instructions on how to contribute to MACI",source:"@site/versioned_docs/version-v1.x/contributing/contributing.md",sourceDirName:"contributing",slug:"/contributing/",permalink:"/docs/contributing/",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/contributing/contributing.md",tags:[],version:"v1.x",sidebarPosition:19,frontMatter:{title:"Contributing to MACI",description:"Instructions on how to contribute to MACI",sidebar_label:"Contributing",sidebar_position:19},sidebar:"version-1.x/mySidebar",previous:{title:"MACI versioning",permalink:"/docs/versioning"},next:{title:"Code of Conduct",permalink:"/docs/contributing/code-of-conduct"}},l={},a=[{value:"Issues",id:"issues",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"CI (Github Actions) Tests",id:"ci-github-actions-tests",level:2},{value:"Style Guide",id:"style-guide",level:2},{value:"Code rules",id:"code-rules",level:3},{value:"Commits rules",id:"commits-rules",level:3},{value:"Type",id:"type",level:4},{value:"Scope",id:"scope",level:4},{value:"Subject",id:"subject",level:4},{value:"Body",id:"body",level:4},{value:"Branch rules",id:"branch-rules",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 Thank you for being interested in contributing to MACI! \ud83c\udf89"}),"\n",(0,t.jsx)(n.p,{children:"Feel welcome and read the following sections in order to know how to ask questions and how to work on something."}),"\n",(0,t.jsxs)(n.p,{children:["All members of our community are expected to follow our ",(0,t.jsx)(n.a,{href:"/docs/contributing/code-of-conduct",children:"Code of Conduct"}),". Please make sure you are welcoming and friendly in all of our spaces."]}),"\n",(0,t.jsx)(n.p,{children:"We're really glad you're reading this, because we need volunteer developers to help this project come to fruition. There is a lot we want to achieve, and this can only be made possible thanks to your support. \ud83d\udc4f"}),"\n",(0,t.jsx)(n.h2,{id:"issues",children:"Issues"}),"\n",(0,t.jsxs)(n.p,{children:["The best way to contribute to our projects is by opening a ",(0,t.jsx)(n.a,{href:"https://github.com/privacy-scaling-explorations/maci/issues",children:"new issue"})," or tackling one of the issues listed ",(0,t.jsx)(n.a,{href:"https://github.com/privacy-scaling-explorations/maci/contribute",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,t.jsx)(n.p,{children:"Pull requests are great if you want to add a feature or fix a bug. Here's a quick guide:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ensure there is an issue tracking your work."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fork the repo."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the tests. We only take pull requests with passing tests."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add a test for your change. Only refactoring and documentation changes require no new tests."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure to check out the ",(0,t.jsx)(n.a,{href:"#style-guide",children:"Style Guide"})," and ensure that your code complies with the rules."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure you read our ",(0,t.jsx)(n.a,{href:"https://github.com/privacy-scaling-explorations/maci/discussions/847",children:"GitHub processes"})," documentation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make the test pass."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Commit your changes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Push to your fork and submit a pull request on our ",(0,t.jsx)(n.code,{children:"dev"})," branch. Please provide us with some explanation of why you made the changes you made. For new features make sure to explain a standard use case to us."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Link any issues that the PR is addressing as described in our processes documentation."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ci-github-actions-tests",children:"CI (Github Actions) Tests"}),"\n",(0,t.jsx)(n.p,{children:"We use GitHub Actions to test each PR before it is merged."}),"\n",(0,t.jsx)(n.p,{children:"When you submit your PR (or later change that code), a CI build will automatically be kicked off. A note will be added to the PR, and will indicate the current status of the build."}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to our ",(0,t.jsx)(n.a,{href:"/docs/testing",children:"testing guide"})," for more details on how we run tests across the monorepo."]}),"\n",(0,t.jsx)(n.h2,{id:"style-guide",children:"Style Guide"}),"\n",(0,t.jsx)(n.h3,{id:"code-rules",children:"Code rules"}),"\n",(0,t.jsxs)(n.p,{children:["We always use ESLint and Prettier. To check that your code follows the rules, simply run the pnpm script ",(0,t.jsx)(n.code,{children:"pnpm run lint"})," and ",(0,t.jsx)(n.code,{children:"pnpm run prettier"}),". When committing, ",(0,t.jsx)(n.code,{children:"eslint"})," is run automatically, so you will be required to fix any error before being able to push a commit. We highly recommend to tackle warnings as well."]}),"\n",(0,t.jsx)(n.h3,{id:"commits-rules",children:"Commits rules"}),"\n",(0,t.jsxs)(n.p,{children:["For commits it is recommended to use ",(0,t.jsx)(n.a,{href:"https://www.conventionalcommits.org",children:"Conventional Commits"}),". You may install the ",(0,t.jsx)(n.a,{href:"https://commitizen-tools.github.io/commitizen/",children:"commitizen"})," tool to help you with this."]}),"\n",(0,t.jsxs)(n.p,{children:["Each commit message consists of a ",(0,t.jsx)(n.strong,{children:"header"}),", a ",(0,t.jsx)(n.strong,{children:"body"})," and a ",(0,t.jsx)(n.strong,{children:"footer"}),". The ",(0,t.jsx)(n.strong,{children:"header"})," has a special format that includes a ",(0,t.jsx)(n.strong,{children:"type"}),", a ",(0,t.jsx)(n.strong,{children:"scope"})," and a ",(0,t.jsx)(n.strong,{children:"subject"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    <type>(<scope>): <subject>\n    <BLANK LINE>\n    <body>\n    <BLANK LINE>\n    <footer>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"header"})," is mandatory and the ",(0,t.jsx)(n.strong,{children:"scope"})," of the header must contain the name of the component you are working on."]}),"\n",(0,t.jsx)(n.h4,{id:"type",children:"Type"}),"\n",(0,t.jsx)(n.p,{children:"The type must be one of the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"feat: A new feature"}),"\n",(0,t.jsx)(n.li,{children:"fix: A bug fix"}),"\n",(0,t.jsx)(n.li,{children:"docs: Documentation only changes"}),"\n",(0,t.jsx)(n.li,{children:"style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"}),"\n",(0,t.jsx)(n.li,{children:"refactor: A code change that neither fixes a bug nor adds a feature (improvements of the code structure)"}),"\n",(0,t.jsx)(n.li,{children:"perf: A code change that improves the performance"}),"\n",(0,t.jsx)(n.li,{children:"test: Adding missing or correcting existing tests"}),"\n",(0,t.jsx)(n.li,{children:"build: Changes that affect the build system or external dependencies (example scopes: gulp, npm)"}),"\n",(0,t.jsx)(n.li,{children:"ci: Changes to CI configuration files and scripts (example scopes: travis, circle)"}),"\n",(0,t.jsx)(n.li,{children:"chore: Other changes that don't modify src or test files"}),"\n",(0,t.jsx)(n.li,{children:"revert: Reverts a previous commit"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"scope",children:"Scope"}),"\n",(0,t.jsx)(n.p,{children:"The scope should be the name of the feature or package modified (as perceived by the person reading the changelog generated from commit messages)."}),"\n",(0,t.jsx)(n.h4,{id:"subject",children:"Subject"}),"\n",(0,t.jsx)(n.p,{children:"The subject contains a succinct description of the change:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Use the imperative, present tense: "change" not "changed" nor "changes"'}),"\n",(0,t.jsx)(n.li,{children:"Don't capitalize the first letter"}),"\n",(0,t.jsx)(n.li,{children:"No dot (.) at the end"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"body",children:"Body"}),"\n",(0,t.jsx)(n.p,{children:'Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.'}),"\n",(0,t.jsx)(n.h3,{id:"branch-rules",children:"Branch rules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Branches should generally be created off of the base branch (",(0,t.jsx)(n.code,{children:"dev"})," )"]}),"\n",(0,t.jsx)(n.li,{children:"Avoid long descriptive names for long-lived branches"}),"\n",(0,t.jsx)(n.li,{children:"Use kebab-case (no CamelCase)"}),"\n",(0,t.jsxs)(n.li,{children:["Use grouping tokens (words) at the beginning of your branch names (in a similar way to the ",(0,t.jsx)(n.code,{children:"type"})," of commit)"]}),"\n",(0,t.jsx)(n.li,{children:"Define and use short lead tokens to differentiate branches in a way that is meaningful to your workflow"}),"\n",(0,t.jsx)(n.li,{children:"Use slashes to separate parts of your branch names"}),"\n",(0,t.jsx)(n.li,{children:"Remove branch after merge if it is not important"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git branch -b docs/readme\ngit branch -b test/a-feature\ngit branch -b feat/sidebar\ngit branch -b fix/b-feature\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},720:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(79);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);