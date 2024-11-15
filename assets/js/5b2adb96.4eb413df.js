"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[8958],{17097:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"introduction/compatibility","title":"Compatibility Table","description":"Detekt Support Commitment","source":"@site/versioned_docs/version-1.23.7/introduction/compatibility.md","sourceDirName":"introduction","slug":"/introduction/compatibility","permalink":"/docs/introduction/compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.7/introduction/compatibility.md","tags":[],"version":"1.23.7","sidebarPosition":11,"frontMatter":{"id":"compatibility","title":"Compatibility Table","keywords":["detekt","kotlin","gradle","compatibility","android"],"summary":"This page lists the version of the Gradle plugins have been used to build detekt.","sidebar_position":11},"sidebar":"defaultSidebar","previous":{"title":"Using Snapshots","permalink":"/docs/introduction/snapshots"},"next":{"title":"Run detekt using Command Line Interface","permalink":"/docs/gettingstarted/cli"}}');var n=i(74848),c=i(28453);const r={id:"compatibility",title:"Compatibility Table",keywords:["detekt","kotlin","gradle","compatibility","android"],summary:"This page lists the version of the Gradle plugins have been used to build detekt.",sidebar_position:11},t=void 0,l={},o=[{value:"Detekt Support Commitment",id:"detekt-support-commitment",level:2},{value:"Tool Versions",id:"tool-versions",level:2}];function h(e){const d={a:"a",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h2,{id:"detekt-support-commitment",children:"Detekt Support Commitment"}),"\n",(0,n.jsxs)(d.p,{children:["detekt is developed by open-source contributors as a volunteer effort.\nDue to our limited resources, we commit to support only the ",(0,n.jsx)(d.strong,{children:"latest stable versions"})," and related RC versions."]}),"\n",(0,n.jsx)(d.p,{children:"When opening Issues and Discussions, consider first updating to the latest version and align your tool versions\nwith the one listed below. This allows us to offer you better support."}),"\n",(0,n.jsx)(d.h2,{id:"tool-versions",children:"Tool Versions"}),"\n",(0,n.jsxs)(d.p,{children:["When shipping the Detekt Gradle Plugin, we depend on both the ",(0,n.jsx)(d.strong,{children:"Kotlin Gradle Plugin"})," and the ",(0,n.jsx)(d.strong,{children:"Android Gradle Plugin"}),"."]}),"\n",(0,n.jsxs)(d.p,{children:["Those dependencies are applied as ",(0,n.jsx)(d.code,{children:"compileOnly"})," (",(0,n.jsx)(d.a,{href:"https://github.com/detekt/detekt/blob/75622d3ba88b0ae0357aec5f2d82a55aa6c6d157/detekt-gradle-plugin/build.gradle.kts#L17-L18",children:"see here"}),") to allow our users to pick the version of the Gradle plugin they prefer and don't impose the one we use inside detekt."]}),"\n",(0,n.jsxs)(d.p,{children:["We try to provide ",(0,n.jsx)(d.strong,{children:"backward compatibility"})," when possible, although that's not always trivial (especially with AGP or across minor versions of Kotlin)."]}),"\n",(0,n.jsxs)(d.p,{children:["The following table lists the version of the Gradle plugin we used to compile the Detekt Gradle Plugin. The ",(0,n.jsx)(d.code,{children:"Java Target Level"})," entry specifies the level of the generated bytecode (i.e. the ",(0,n.jsx)(d.code,{children:"-target"})," flag used when generating bytecode). The ",(0,n.jsx)(d.code,{children:"JDK Version"})," represents the highest version of the JDK we test our code against."]}),"\n",(0,n.jsxs)(d.p,{children:["Consider ",(0,n.jsx)(d.strong,{children:"aligning"})," your Gradle plugin versions with the one listed below, as we can offer better support on Issues and Discussions for the listed versions of those tools."]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"detekt Version"}),(0,n.jsx)(d.th,{children:"Gradle Version"}),(0,n.jsx)(d.th,{children:"Kotlin Version"}),(0,n.jsx)(d.th,{children:"AGP Version"}),(0,n.jsx)(d.th,{children:"Java Target Level"}),(0,n.jsx)(d.th,{children:"JDK Version"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.23.7"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.10"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"2.0.10"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.5.2"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"21"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.23.6"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.7"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.9.23"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.3.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.23.5"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.5"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.9.22"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.2.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.23.4"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.4"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.9.21"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.1.3"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.23.3"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.4"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.9.10"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.1.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.23.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.2.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.9.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.1.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.23.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.1.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8.21"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"8.0.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.22.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.5.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.7.21"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.3.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.21.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.5"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.6.21"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.2.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.20.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.4.2"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.6.20"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.1.3"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.19.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.3.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.5.31"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"4.2.2"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"17"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.18.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.0.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.5.21"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"4.2.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"16"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.17.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"7.0.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.4.32"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"4.2.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"15"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.16.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"6.8.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.4.21"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"4.1.2"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"15"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.15.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"6.8.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.4.10"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"4.0.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"15"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.14.2"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"6.7.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.4.10"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"4.0.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"14"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.14.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"6.7-rc-2"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.4.10"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"4.0.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"14"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.13.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"6.6.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.4.0"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"4.0.1"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1.8"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"14"})})]})]})]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.em,{children:"(older versions are omitted for brevity)"})})]})}function x(e={}){const{wrapper:d}={...(0,c.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,d,i)=>{i.d(d,{R:()=>r,x:()=>t});var s=i(96540);const n={},c=s.createContext(n);function r(e){const d=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(c.Provider,{value:d},e.children)}}}]);