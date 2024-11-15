"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[3450],{16507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var i=n(1180),o=n(74848),s=n(28453);const a={title:"Recipe: diff your detekt config with the default one",published:!0,permalink:"howto-diff-config.html",summary:"This guide shows how to create an additional Gradle task which generates the default detekt config.",tags:["guides"]},r=void 0,d={authorsImageUrls:[]},l=[];function c(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["detekt's ",(0,o.jsx)(t.code,{children:"./gradlew detektGenerateConfig"})," task copies the default configuration file to the location\nspecified by the ",(0,o.jsx)(t.code,{children:"config"})," property."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kt",children:"detekt {\n  ...\n  config = files(...)\n  ...\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"When the file on this location already exists, your configuration won't be overwritten, and the task is a noop."}),"\n",(0,o.jsxs)(t.p,{children:["When we release a new version, some users like to generate the default one to compare changed properties.\nThis can be done by running the detekt cli with the ",(0,o.jsx)(t.code,{children:"--generate-config --config [/new/location]"})," flags.\nWhen already using Gradle, we can write a custom task and share this procedure with the team:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kt",children:'import io.gitlab.arturbosch.detekt.DetektGenerateConfigTask\n\nval createDetektConfigForDiff by tasks.registering(DetektGenerateConfigTask::class) {\n    description = "Generate newest default detekt config"\n    config.setFrom(layout.buildDirectory.file("detekt-diff.yaml"))\n\n    doFirst {\n      // optionally delete the old config diff file first \n    }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The last step involves calling your favorite diff tool (e.g. ",(0,o.jsx)(t.code,{children:"diff detekt-diff.yaml my_config.yaml"}),") or using an online service like ",(0,o.jsx)(t.code,{children:"http://incaseofstairs.com/jsdiff/"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Likewise we can diff the default config of detekt version X with the default config of detekt version X-1. This will tell us which properties are new in version X."})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},1180:e=>{e.exports=JSON.parse('{"permalink":"/blog/2020/09/27/additional-diff-config-task","editUrl":"https://github.com/detekt/detekt/edit/main/website/blog/2020-09-27-additional-diff-config-task.md","source":"@site/blog/2020-09-27-additional-diff-config-task.md","title":"Recipe: diff your detekt config with the default one","description":"detekt\'s ./gradlew detektGenerateConfig task copies the default configuration file to the location","date":"2020-09-27T00:00:00.000Z","tags":[{"inline":true,"label":"guides","permalink":"/blog/tags/guides"}],"readingTime":0.895,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Recipe: diff your detekt config with the default one","published":true,"permalink":"howto-diff-config.html","summary":"This guide shows how to create an additional Gradle task which generates the default detekt config.","tags":["guides"]},"unlisted":false,"nextItem":{"title":"Howto: make detekt silent","permalink":"/blog/2019/08/14/custom-console-reports"}}')}}]);