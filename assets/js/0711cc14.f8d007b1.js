"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4911],{6426:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=e(5893),r=e(1151);const s={},o="Pairing",l={id:"solidity-docs/crypto/Pairing",title:"Pairing",description:"PRIME_Q",source:"@site/versioned_docs/version-v1.x/solidity-docs/crypto/Pairing.md",sourceDirName:"solidity-docs/crypto",slug:"/solidity-docs/crypto/Pairing",permalink:"/docs/solidity-docs/crypto/Pairing",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/crypto/Pairing.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"PoseidonT3",permalink:"/docs/solidity-docs/crypto/Hasher"},next:{title:"SnarkCommon",permalink:"/docs/solidity-docs/crypto/SnarkCommon"}},a={},c=[{value:"PRIME_Q",id:"prime_q",level:3},{value:"G1Point",id:"g1point",level:3},{value:"G2Point",id:"g2point",level:3},{value:"negate",id:"negate",level:3},{value:"plus",id:"plus",level:3},{value:"scalar_mul",id:"scalar_mul",level:3},{value:"pairing",id:"pairing-1",level:3},{value:"Return Values",id:"return-values",level:4}];function d(n){const i={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"pairing",children:"Pairing"}),"\n",(0,t.jsx)(i.h3,{id:"prime_q",children:"PRIME_Q"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-solidity",children:"uint256 PRIME_Q\n"})}),"\n",(0,t.jsx)(i.h3,{id:"g1point",children:"G1Point"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-solidity",children:"struct G1Point {\n  uint256 x;\n  uint256 y;\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"g2point",children:"G2Point"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-solidity",children:"struct G2Point {\n  uint256[2] x;\n  uint256[2] y;\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"negate",children:"negate"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-solidity",children:"function negate(struct Pairing.G1Point p) internal pure returns (struct Pairing.G1Point)\n"})}),"\n",(0,t.jsx)(i.p,{children:"The negation of p, i.e. p.plus(p.negate()) should be zero."}),"\n",(0,t.jsx)(i.h3,{id:"plus",children:"plus"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-solidity",children:"function plus(struct Pairing.G1Point p1, struct Pairing.G1Point p2) internal view returns (struct Pairing.G1Point r)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Returns the sum of two points of G1"}),"\n",(0,t.jsx)(i.h3,{id:"scalar_mul",children:"scalar_mul"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-solidity",children:"function scalar_mul(struct Pairing.G1Point p, uint256 s) internal view returns (struct Pairing.G1Point r)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Return te product of a point on G1 and a scalar, i.e.\np == p.scalar_mul(1) and p.plus(p) == p.scalar_mul(2) for all\npoints p."}),"\n",(0,t.jsx)(i.h3,{id:"pairing-1",children:"pairing"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-solidity",children:"function pairing(struct Pairing.G1Point a1, struct Pairing.G2Point a2, struct Pairing.G1Point b1, struct Pairing.G2Point b2, struct Pairing.G1Point c1, struct Pairing.G2Point c2, struct Pairing.G1Point d1, struct Pairing.G2Point d2) internal view returns (bool)\n"})}),"\n",(0,t.jsx)(i.h4,{id:"return-values",children:"Return Values"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"[0]"}),(0,t.jsx)(i.td,{children:"bool"}),(0,t.jsx)(i.td,{children:"The result of computing the pairing check         e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1        For example,        pairing([P1(), P1().negate()], [P2(), P2()]) should return true."})]})})]})]})}function u(n={}){const{wrapper:i}={...(0,r.a)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,i,e)=>{e.d(i,{Z:()=>l,a:()=>o});var t=e(7294);const r={},s=t.createContext(r);function o(n){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:i},n.children)}}}]);