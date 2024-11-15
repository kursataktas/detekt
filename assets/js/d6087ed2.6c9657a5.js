"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[5219],{37438:(M,e,j)=>{j.r(e),j.d(e,{assets:()=>z,contentTitle:()=>t,default:()=>n,frontMatter:()=>I,metadata:()=>N,toc:()=>g});const N=JSON.parse('{"id":"intro","title":"Welcome","description":"detekt logo","source":"@site/versioned_docs/version-1.23.0/intro.mdx","sourceDirName":".","slug":"/intro","permalink":"/docs/1.23.0/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.0/intro.mdx","tags":[],"version":"1.23.0","sidebarPosition":1,"frontMatter":{"title":"Welcome","keywords":["detekt","static","analysis","code","kotlin"],"sidebar_position":1,"summary":null},"sidebar":"defaultSidebar","next":{"title":"detekt Configuration File","permalink":"/docs/1.23.0/introduction/configurations"}}');var D=j(74848),i=j(28453);const I={title:"Welcome",keywords:["detekt","static","analysis","code","kotlin"],sidebar_position:1,summary:null},t=void 0,z={},g=[{value:"Features",id:"features",level:3},{value:"Quick Start with Gradle",id:"quick-start-with-gradle",level:3},{value:"Adding more rule sets",id:"adding-more-rule-sets",level:3}];function u(M){const e={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...M.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(e.p,{children:[(0,D.jsx)(e.img,{alt:"detekt logo",src:j(47779).A+"",title:"detekt logo",width:"225",height:"53"}),"\n",(0,D.jsx)(e.img,{alt:"detekt in action",src:j(49086).A+"",title:"detekt in action",width:"1390",height:"535"})]}),"\n",(0,D.jsx)(e.h3,{id:"features",children:"Features"}),"\n",(0,D.jsxs)(e.ul,{children:["\n",(0,D.jsxs)(e.li,{children:["Code smell analysis for your ",(0,D.jsx)(e.a,{href:"https://kotlinlang.org/",children:"Kotlin"})," projects."]}),"\n",(0,D.jsx)(e.li,{children:"Highly configurable rule sets."}),"\n",(0,D.jsx)(e.li,{children:"Generate baselines to suppress existing issues for legacy projects while making sure no new issues are introduced."}),"\n",(0,D.jsxs)(e.li,{children:["Suppress issues in source files using ",(0,D.jsx)(e.code,{children:"@Suppress"})," annotations."]}),"\n",(0,D.jsxs)(e.li,{children:["Support for different report formats: HTML, Markdown, ",(0,D.jsx)(e.a,{href:"https://sarifweb.azurewebsites.net/",children:"SARIF"}),", XML (Checkstyle) and custom reports."]}),"\n",(0,D.jsxs)(e.li,{children:[(0,D.jsx)(e.a,{href:"introduction/extensions",children:"Extend detekt"})," with custom rule sets and reports."]}),"\n",(0,D.jsx)(e.li,{children:"Complexity reports based on lines of code, cyclomatic complexity and number of code smells."}),"\n",(0,D.jsxs)(e.li,{children:["First party integration with Gradle with our ",(0,D.jsx)(e.a,{href:"/docs/1.23.0/gettingstarted/gradle",children:"Gradle plugin"}),"."]}),"\n",(0,D.jsxs)(e.li,{children:["A community of ",(0,D.jsx)(e.a,{href:"https://github.com/topics/detekt-plugin",children:"third party plugins"})," that adds more rules and features to detekt."]}),"\n"]}),"\n",(0,D.jsx)(e.h3,{id:"quick-start-with-gradle",children:"Quick Start with Gradle"}),"\n",(0,D.jsx)(e.p,{children:"Apply the following configuration to your Gradle project build file:"}),"\n",(0,D.jsx)(e.pre,{children:(0,D.jsx)(e.code,{className:"language-kotlin",children:'plugins {\n    id("io.gitlab.arturbosch.detekt") version("1.23.0")\n}\n\nrepositories {\n    mavenCentral()\n}\n'})}),"\n",(0,D.jsxs)(e.p,{children:["You can find what is the ",(0,D.jsx)(e.strong,{children:"latest version of detekt"})," in the ",(0,D.jsx)(e.a,{href:"/changelog",children:"release notes"}),"."]}),"\n",(0,D.jsxs)(e.p,{children:["Once you have set up detekt in your project, simply run ",(0,D.jsx)(e.code,{children:"gradlew detekt"}),"."]}),"\n",(0,D.jsxs)(e.p,{children:["To change the default behaviour of detekt rules, first generate yourself a detekt configuration file by running\n",(0,D.jsx)(e.code,{children:"gradlew detektGenerateConfig"})," task and applying any changes to the generated file."]}),"\n",(0,D.jsxs)(e.p,{children:["Don't forget to reference the newly generated config inside the ",(0,D.jsx)(e.code,{children:"detekt { }"})," closure. Optionally, it is possible to\nslim down the configuration file to only the changes from the default configuration, by applying the\n",(0,D.jsx)(e.code,{children:"buildUponDefaultConfig"})," option:"]}),"\n",(0,D.jsx)(e.pre,{children:(0,D.jsx)(e.code,{className:"language-kotlin",children:'detekt {\n    toolVersion = "1.23.0"\n    config.setFrom(file("config/detekt/detekt.yml"))\n    buildUponDefaultConfig = true\n}\n'})}),"\n",(0,D.jsxs)(e.p,{children:["To enable/disable detekt reports use the ",(0,D.jsx)(e.code,{children:"withType"})," method to set defaults for all detekt tasks at once:"]}),"\n",(0,D.jsx)(e.pre,{children:(0,D.jsx)(e.code,{className:"language-kotlin",children:"// Kotlin DSL\ntasks.withType<Detekt>().configureEach {\n    reports {\n        xml.required.set(true)\n        html.required.set(true)\n        txt.required.set(true)\n        sarif.required.set(true)\n        md.required.set(true)\n    }\n}\n"})}),"\n",(0,D.jsx)(e.pre,{children:(0,D.jsx)(e.code,{className:"language-groovy",children:"// Groovy DSL\ntasks.withType(Detekt).configureEach {\n    reports {\n        xml.required.set(true)\n        html.required.set(true)\n        txt.required.set(true)\n        sarif.required.set(true)\n        md.required.set(true)\n    }\n}\n"})}),"\n",(0,D.jsxs)(e.p,{children:["See ",(0,D.jsx)(e.a,{href:"introduction/reporting",children:"reporting"})," docs for more details on configuring reports."]}),"\n",(0,D.jsx)(e.h3,{id:"adding-more-rule-sets",children:"Adding more rule sets"}),"\n",(0,D.jsxs)(e.p,{children:["detekt itself provides a wrapper over ",(0,D.jsx)(e.a,{href:"https://github.com/pinterest/ktlint",children:"ktlint"})," as the ",(0,D.jsx)(e.code,{children:"formatting"})," rule set\nwhich can be easily added to the Gradle configuration:"]}),"\n",(0,D.jsx)(e.pre,{children:(0,D.jsx)(e.code,{className:"language-gradle",children:'dependencies {\n    detektPlugins("io.gitlab.arturbosch.detekt:detekt-formatting:1.23.0")\n}\n'})})]})}function n(M={}){const{wrapper:e}={...(0,i.R)(),...M.components};return e?(0,D.jsx)(e,{...M,children:(0,D.jsx)(u,{...M})}):u(M)}},47779:(M,e,j)=>{j.d(e,{A:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI1IiBoZWlnaHQ9IjUzIiB2aWV3Qm94PSIwIDAgMjI1IDUzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNODguODg4MyA0Mi4yNjY1VjcuOTk0ODdIODEuNjk1NFYyMC4zODlDNzkuOTkxOCAxOC4zNzAzIDc3LjYyNTcgMTYuNjMzMiA3My43OTI2IDE2LjYzMzJDNjcuNzgyOCAxNi42MzMyIDYyLjI0NjEgMjEuMjM0MSA2Mi4yNDYxIDI5LjYzNzdWMjkuNzMxNkM2Mi4yNDYxIDM4LjEzNTIgNjcuODc3NCA0Mi43MzYgNzMuNzkyNiA0Mi43MzZDNzcuNTMxMSA0Mi43MzYgNzkuOTQ0NSA0MC45OTg5IDgxLjY5NTQgMzguNjUxNlY0Mi4yNjY1SDg4Ljg4ODNaTTgxLjc5IDI5LjczMTZDODEuNzkgMzMuOTA5OSA3OC45OTggMzYuNjc5OCA3NS42MzgyIDM2LjY3OThDNzIuMjc4MyAzNi42Nzk4IDY5LjQzOSAzMy45MDk5IDY5LjQzOSAyOS43MzE2VjI5LjYzNzdDNjkuNDM5IDI1LjQxMjQgNzIuMjc4MyAyMi42ODk0IDc1LjYzODIgMjIuNjg5NEM3OC45OTggMjIuNjg5NCA4MS43OSAyNS40NTkzIDgxLjc5IDI5LjYzNzdWMjkuNzMxNloiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTEyMC4zMjUgMzAuMzg4OFYzMC4yOTQ5QzEyMC4zMjUgMjMuMTU4OSAxMTYuNDQ0IDE2LjYzMzIgMTA3Ljk3NCAxNi42MzMyQzEwMC41OTEgMTYuNjMzMiA5NS40MzM0IDIyLjU0ODYgOTUuNDMzNCAyOS43MzE2VjI5LjgyNTRDOTUuNDMzNCAzNy41MjQ4IDEwMS4wNjUgNDIuODI5OSAxMDguNjgzIDQyLjgyOTlDMTEzLjI3NCA0Mi44Mjk5IDExNi42ODEgNDEuMDQ1OSAxMTkuMDQ3IDM4LjEzNTJMMTE0LjkzIDM0LjUyMDJDMTEyLjk0MiAzNi4zNTExIDExMS4xOTIgMzcuMTAyMyAxMDguNzc4IDM3LjEwMjNDMTA1LjU2IDM3LjEwMjMgMTAzLjI4OSAzNS40MTIyIDEwMi41NzkgMzIuMTcyOEgxMjAuMjNDMTIwLjI3NyAzMS41MTU2IDEyMC4zMjUgMzEuMDkzIDEyMC4zMjUgMzAuMzg4OFpNMTEzLjMyMSAyNy43MTI4SDEwMi40ODRDMTAzLjA1MiAyNC40NzM0IDEwNC45OTIgMjIuMzYwOCAxMDcuOTc0IDIyLjM2MDhDMTExLjAwMiAyMi4zNjA4IDExMi44OTUgMjQuNTIwNCAxMTMuMzIxIDI3LjcxMjhaIiBmaWxsPSIjMjIyMjIyIi8+CjxwYXRoIGQ9Ik0xNDEuMjc4IDQxLjIzMzdWMzUuNTA2MUMxNDAuMjM3IDM2LjA2OTUgMTM5LjA1NCAzNi4zOTgxIDEzNy43MjkgMzYuMzk4MUMxMzYuMTIgMzYuMzk4MSAxMzUuNDEgMzUuNiAxMzUuNDEgMzMuOTU2OFYyMy4yMDU5SDE0MS4zNzNWMTcuMTAyN0gxMzUuNDFWMTAuNjcwOUgxMjguMjE3VjE3LjEwMjdIMTI1LjE4OVYyMy4yMDU5SDEyOC4yMTdWMzUuMTMwNUMxMjguMjE3IDQwLjk1MiAxMzEuMTk5IDQyLjY4OTEgMTM1LjU5OSA0Mi42ODkxQzEzOC4wMTMgNDIuNjg5MSAxMzkuNzY0IDQyLjEyNTcgMTQxLjI3OCA0MS4yMzM3WiIgZmlsbD0iIzIyMjIyMiIvPgo8cGF0aCBkPSJNMTcyLjAwOCAzMC4zODg4VjMwLjI5NDlDMTcyLjAwOCAyMy4xNTg5IDE2OC4xMjggMTYuNjMzMiAxNTkuNjU3IDE2LjYzMzJDMTUyLjI3NSAxNi42MzMyIDE0Ny4xMTcgMjIuNTQ4NiAxNDcuMTE3IDI5LjczMTZWMjkuODI1NEMxNDcuMTE3IDM3LjUyNDggMTUyLjc0OCA0Mi44Mjk5IDE2MC4zNjcgNDIuODI5OUMxNjQuOTU4IDQyLjgyOTkgMTY4LjM2NSA0MS4wNDU5IDE3MC43MzEgMzguMTM1MkwxNjYuNjE0IDM0LjUyMDJDMTY0LjYyNiAzNi4zNTExIDE2Mi44NzUgMzcuMTAyMyAxNjAuNDYyIDM3LjEwMjNDMTU3LjI0NCAzNy4xMDIzIDE1NC45NzMgMzUuNDEyMiAxNTQuMjYzIDMyLjE3MjhIMTcxLjkxNEMxNzEuOTYxIDMxLjUxNTYgMTcyLjAwOCAzMS4wOTMgMTcyLjAwOCAzMC4zODg4Wk0xNjUuMDA1IDI3LjcxMjhIMTU0LjE2OEMxNTQuNzM2IDI0LjQ3MzQgMTU2LjY3NiAyMi4zNjA4IDE1OS42NTcgMjIuMzYwOEMxNjIuNjg2IDIyLjM2MDggMTY0LjU3OSAyNC41MjA0IDE2NS4wMDUgMjcuNzEyOFoiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTIwMy4yNzggNDIuMjY2NUwxOTMuMjkzIDI3LjAwODZMMjAyLjk0NyAxNy4xMDI3SDE5NC4zMzRMMTg1LjkxMSAyNi4yNTc0VjcuOTk0ODdIMTc4LjcxOFY0Mi4yNjY1SDE4NS45MTFWMzQuNjE0MUwxODguNDE5IDMxLjk4NUwxOTUuMDQ0IDQyLjI2NjVIMjAzLjI3OFoiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZD0iTTIyNC45MDUgNDEuMjMzN1YzNS41MDYxQzIyMy44NjQgMzYuMDY5NSAyMjIuNjgxIDM2LjM5ODEgMjIxLjM1NiAzNi4zOTgxQzIxOS43NDcgMzYuMzk4MSAyMTkuMDM3IDM1LjYgMjE5LjAzNyAzMy45NTY4VjIzLjIwNTlIMjI1VjE3LjEwMjdIMjE5LjAzN1YxMC42NzA5SDIxMS44NDRWMTcuMTAyN0gyMDguODE2VjIzLjIwNTlIMjExLjg0NFYzNS4xMzA1QzIxMS44NDQgNDAuOTUyIDIxNC44MjYgNDIuNjg5MSAyMTkuMjI3IDQyLjY4OTFDMjIxLjY0IDQyLjY4OTEgMjIzLjM5MSA0Mi4xMjU3IDIyNC45MDUgNDEuMjMzN1oiIGZpbGw9IiMyMjIyMjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjE4NjExIDBDMC45Nzg3NTUgMCAwIDAuOTc4NzU1IDAgMi4xODYxMVY0MC43NzFDMCA0MS45NzgzIDAuOTc4NzU1IDQyLjk1NzEgMi4xODYxMSA0Mi45NTcxSDI0LjI1MzRDMjUuNjUyNSA0Mi45NTcxIDI2LjYyNTggNDEuNTQ3MyAyNi4zNzc0IDQwLjE3MDVDMjYuMjEwOSAzOS4yNDgxIDI2LjEyNCAzOC4yOTgxIDI2LjEyNCAzNy4zMjc5QzI2LjEyNCAyOC41NDQzIDMzLjI0NDUgMjEuNDIzOSA0Mi4wMjggMjEuNDIzOUM0Mi44Njg5IDIxLjQyMzkgNDMuNjk0NSAyMS40ODkyIDQ0LjUwMDEgMjEuNjE0OUM0NS44NTc4IDIxLjgyNjggNDcuMjIgMjAuODU4NSA0Ny4yMiAxOS40ODQ0VjIuMTg2MTFDNDcuMjIgMC45Nzg3NTUgNDYuMjQxMiAwIDQ1LjAzMzkgMEgyLjE4NjExWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNNTUuMzM1OCA0OC42MTY2TDU0Ljc2NzMgNDguMDQ4MUw1My4yNDIxIDQ2LjUyMjlMNTIuOTUxNiA0Ni4yMzI0QzUyLjI0MjcgNDUuNTIzNCA1Mi4xODU1IDQ0LjQwNjcgNTIuNjczIDQzLjUzMDZDNTMuNjI5OSA0MS44MTA5IDU0LjE3NjIgMzkuODMzIDU0LjE3NjIgMzcuNzI5M0M1NC4xNzYyIDMyLjkxMDQgNTEuMzE0NyAyOC43NDk5IDQ3LjIwMjkgMjYuODUwMUM0Ni41MTk2IDI2LjUzNDQgNDUuODAyNCAyNi4yODA4IDQ1LjA1NzMgMjYuMDk3NEM0NC4zNjM2IDI1LjkyNjggNDMuNjQ2NyAyNS44MTY0IDQyLjkxMTggMjUuNzcyN0M0Mi42NzQ5IDI1Ljc1ODcgNDIuNDM2OSAyNS43NDk1IDQyLjE5NjYgMjUuNzQ5NUMzOC41MTY2IDI1Ljc0OTUgMzUuMjIwMyAyNy40MTg4IDMzLjAyMTEgMzAuMDM4MUMzMS45Nzg0IDMxLjI4MDIgMzEuMTgzOCAzMi43MzU3IDMwLjcxMTQgMzQuMzI5M0MzMC4zOTE2IDM1LjQwNzkgMzAuMjE3IDM2LjU0ODEgMzAuMjE3IDM3LjcyOTFDMzAuMjE3IDM4LjAyOTMgMzAuMjMxOSAzOC4zMjU5IDMwLjI1MzcgMzguNjIwNUMzMC4zMDgyIDM5LjM1NTkgMzAuNDI2NSA0MC4wNzMzIDMwLjYwODIgNDAuNzY2QzMwLjgwMzggNDEuNTExNyAzMS4wNjg5IDQyLjIyOTYgMzEuMzk3NCA0Mi45MTE2QzMzLjMzMzIgNDYuOTI5NSAzNy40NDY1IDQ5LjcwODkgNDIuMTk2NyA0OS43MDg5QzQzLjk1NyA0OS43MDg5IDQ1LjYyOTEgNDkuMzI1OSA0Ny4xMzU3IDQ4LjY0MDNDNDcuOTg0MSA0OC4yNTQzIDQ5LjAwNDYgNDguMzUzNiA0OS42NjM2IDQ5LjAxMjdMNTAuMDg5NCA0OS40Mzg1TDUxLjYzMDEgNTAuOTc5NEw1Mi4zMDE2IDUxLjY1MDlDNTIuNzIwNSA1Mi4wNjk5IDUzLjI2OTcgNTIuMjc5NCA1My44MTg2IDUyLjI3OTRDNTQuMzY3NyA1Mi4yNzk0IDU0LjkxNjkgNTIuMDY5OSA1NS4zMzU3IDUxLjY1MDlDNTYuMTczOCA1MC44MTI5IDU2LjE3MzggNDkuNDU0NCA1NS4zMzU4IDQ4LjYxNjZaTTQyLjE5NjcgNDUuNDE4QzM5Ljk1MjUgNDUuNDE4IDM3LjkzIDQ0LjQ1MSAzNi41MjMyIDQyLjkxMjJDMzUuOTQ4NSA0Mi4yODM2IDM1LjQ3NzIgNDEuNTU5NCAzNS4xMzUgNDAuNzY2N0MzNC44NDUgNDAuMDk1NCAzNC42NDkzIDM5LjM3NDYgMzQuNTYxNyAzOC42MjExQzM0LjUyNzcgMzguMzI4MyAzNC41MDg0IDM4LjAzMTQgMzQuNTA4NCAzNy43Mjk3QzM0LjUwODQgMzMuNDkwMyAzNy45NTc0IDMwLjA0MTMgNDIuMTk2OCAzMC4wNDEzQzQyLjQzNzkgMzAuMDQxMyA0Mi42NzYyIDMwLjA1MzkgNDIuOTEyIDMwLjA3NTZDNDMuNjYzOCAzMC4xNDU1IDQ0LjM4MzcgMzAuMzI0MiA0NS4wNTc2IDMwLjU5NTZDNDUuODQ1OCAzMC45MTI3IDQ2LjU2ODkgMzEuMzU2NCA0Ny4yMDMxIDMxLjkwMkM0OC44NDM0IDMzLjMxMzEgNDkuODg1MiAzNS40MDE1IDQ5Ljg4NTIgMzcuNzI5N0M0OS44ODUgNDEuOTY4OCA0Ni40MzYxIDQ1LjQxOCA0Mi4xOTY3IDQ1LjQxOFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPHBhdGggZD0iTTkuOTkzNiAyNS42OTc5QzkuMzQyMTcgMjUuNjk3OSA4Ljg0NjE4IDI1LjQ5NTggOC41MDU2NiAyNS4wOTE0QzguMTY1MTQgMjQuNjcwOSA3Ljk5NDg3IDI0LjE2OTUgNy45OTQ4NyAyMy41ODczVjIzLjQ5MDNDNy45OTQ4NyAyMi45MDggOC4xNjUxNCAyMi40MTQ3IDguNTA1NjYgMjIuMDEwNEM4Ljg0NjE4IDIxLjU4OTkgOS4zNDIxNyAyMS4zNzk2IDkuOTkzNiAyMS4zNzk2QzEwLjY0NSAyMS4zNzk2IDExLjE0MSAyMS41ODk5IDExLjQ4MTUgMjIuMDEwNEMxMS44MjIxIDIyLjQxNDcgMTEuOTkyMyAyMi45MDggMTEuOTkyMyAyMy40OTAzVjIzLjU4NzNDMTEuOTkyMyAyNC4xNjk1IDExLjgyMjEgMjQuNjcwOSAxMS40ODE1IDI1LjA5MTRDMTEuMTQxIDI1LjQ5NTggMTAuNjQ1IDI1LjY5NzkgOS45OTM2IDI1LjY5NzlaTTguMTcyNTQgMTAuODE1OFY3Ljk5NDg3SDExLjgxNDdWMTAuODE1OEwxMC42NTk4IDE5LjE2MTJIOS4zMjczNkw4LjE3MjU0IDEwLjgxNThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAuMjcyOSAyNS42OTc5QzE5LjYyMTUgMjUuNjk3OSAxOS4xMjU1IDI1LjQ5NTggMTguNzg1IDI1LjA5MTRDMTguNDQ0NCAyNC42NzA5IDE4LjI3NDIgMjQuMTY5NSAxOC4yNzQyIDIzLjU4NzNWMjMuNDkwM0MxOC4yNzQyIDIyLjkwOCAxOC40NDQ0IDIyLjQxNDcgMTguNzg1IDIyLjAxMDRDMTkuMTI1NSAyMS41ODk5IDE5LjYyMTUgMjEuMzc5NiAyMC4yNzI5IDIxLjM3OTZDMjAuOTI0MyAyMS4zNzk2IDIxLjQyMDMgMjEuNTg5OSAyMS43NjA4IDIyLjAxMDRDMjIuMTAxNCAyMi40MTQ3IDIyLjI3MTYgMjIuOTA4IDIyLjI3MTYgMjMuNDkwM1YyMy41ODczQzIyLjI3MTYgMjQuMTY5NSAyMi4xMDE0IDI0LjY3MDkgMjEuNzYwOCAyNS4wOTE0QzIxLjQyMDMgMjUuNDk1OCAyMC45MjQzIDI1LjY5NzkgMjAuMjcyOSAyNS42OTc5Wk0xOC40NTE4IDEwLjgxNThWNy45OTQ4N0gyMi4wOTRWMTAuODE1OEwyMC45MzkxIDE5LjE2MTJIMTkuNjA2N0wxOC40NTE4IDEwLjgxNThaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNS4yMjJlLTA3IiB5MT0iNDEuMzM2MSIgeDI9IjUxLjk4MiIgeTI9IjMzLjI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM3OTQyRUUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0NjUxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjAxMjEiIHkxPSI1MS41NDY1IiB4Mj0iNjAuOTgwMSIgeTI9IjMwLjI0MjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzc5NDJFRSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjQ2NTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},49086:(M,e,j)=>{j.d(e,{A:()=>N});const N=j.p+"assets/images/detekt_in_action-28584853d114ee77b5b013bb77b2bce7.png"},28453:(M,e,j)=>{j.d(e,{R:()=>I,x:()=>t});var N=j(96540);const D={},i=N.createContext(D);function I(M){const e=N.useContext(i);return N.useMemo((function(){return"function"==typeof M?M(e):{...e,...M}}),[e,M])}function t(M){let e;return e=M.disableParentContext?"function"==typeof M.components?M.components(D):M.components||D:I(M.components),N.createElement(i.Provider,{value:e},M.children)}}}]);