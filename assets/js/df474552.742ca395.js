"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[786],{50886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"gettingstarted/git-pre-commit-hook","title":"Run detekt using a Git pre-commit hook","description":"detekt can be integrated into your development workflow by using a Git pre-commit hook.","source":"@site/versioned_docs/version-1.23.7/gettingstarted/git-pre-commit-hook.md","sourceDirName":"gettingstarted","slug":"/gettingstarted/git-pre-commit-hook","permalink":"/docs/gettingstarted/git-pre-commit-hook","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.7/gettingstarted/git-pre-commit-hook.md","tags":[],"version":"1.23.7","sidebarPosition":6,"frontMatter":{"title":"Run detekt using a Git pre-commit hook","keywords":["detekt","static","analysis","code","kotlin"],"sidebar":null,"permalink":"git-pre-commit-hook.html","folder":"gettingstarted","summary":null,"sidebar_position":6},"sidebar":"defaultSidebar","previous":{"title":"Using Type Resolution","permalink":"/docs/gettingstarted/type-resolution"},"next":{"title":"Run detekt using the Compiler Plugin","permalink":"/docs/gettingstarted/compilerplugin"}}');var i=n(74848),s=n(28453);const r={title:"Run detekt using a Git pre-commit hook",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"git-pre-commit-hook.html",folder:"gettingstarted",summary:null,sidebar_position:6},a=void 0,c={},d=[{value:"Only run on staged files",id:"only-run-on-staged-files",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"detekt can be integrated into your development workflow by using a Git pre-commit hook.\nFor that reason Git supports to run custom scripts automatically, when a specific action occurs.\nThe mentioned pre-commit hook can be setup locally on your dev-machine.\nThe following client-side detekt hook is triggered by a commit operation, and checks all files via the gradle task."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'#!/usr/bin/env bash\necho "Running detekt check..."\nOUTPUT="/tmp/detekt-$(date +%s)"\n./gradlew detekt > $OUTPUT\nEXIT_CODE=$?\nif [ $EXIT_CODE -ne 0 ]; then\n  cat $OUTPUT\n  rm $OUTPUT\n  echo "***********************************************"\n  echo "                 detekt failed                 "\n  echo " Please fix the above issues before committing "\n  echo "***********************************************"\n  exit $EXIT_CODE\nfi\nrm $OUTPUT\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The shell script can be installed by copying the content over to ",(0,i.jsx)(t.code,{children:"<<your-repo>>/.git/hooks/pre-commit"}),".\nThis pre-commit hook needs to be executable, so you may need to change the permission (",(0,i.jsx)(t.code,{children:"chmod +x pre-commit"}),").\nMore information about Git hooks and how to install them can be found in\n",(0,i.jsx)(t.a,{href:"https://www.atlassian.com/git/tutorials/git-hooks",children:"Atlassian's tutorial"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["A special thanks goes to Mohit Sarveiya for providing this shell script.\nYou can watch his excellent talk about ",(0,i.jsx)(t.strong,{children:"Static Code Analysis For Kotlin"})," on\n",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=LT6m5_LO2DQ",children:"YouTube"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"only-run-on-staged-files",children:"Only run on staged files"}),"\n",(0,i.jsxs)(t.p,{children:["It is also possible to use ",(0,i.jsx)(t.a,{href:"/docs/gettingstarted/cli",children:"the CLI"})," to create a hook that only runs on staged files. This has the advantage of speedier execution, by running on fewer files and avoiding the warm-up time of the gradle daemon."]}),"\n",(0,i.jsxs)(t.p,{children:["Please note, however, that a handful of checks requiring ",(0,i.jsx)(t.a,{href:"/docs/gettingstarted/type-resolution",children:"type resolution"})," will not work correctly with this approach. If you do adopt a partial hook, it is recommended that you still implement a full ",(0,i.jsx)(t.code,{children:"detekt"})," check as part of your CI pipeline."]}),"\n",(0,i.jsxs)(t.p,{children:["This example has been put together using ",(0,i.jsx)(t.a,{href:"https://pre-commit.com/",children:"pre-commit"}),", but the same principle can be applied to any kind of hook."]}),"\n",(0,i.jsx)(t.p,{children:"Hook definition in pre-commit:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"- id: detekt\n  name: detekt check\n  description: Runs `detekt` on modified .kt files.\n  language: script\n  entry: detekt.sh\n  files: \\.kt\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Script ",(0,i.jsx)(t.code,{children:"detekt.sh"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'#!/bin/bash\n\necho "Running detekt check..."\nfileArray=($@)\ndetektInput=$(IFS=,;printf  "%s" "${fileArray[*]}")\necho "Input files: $detektInput"\n\nOUTPUT=$(detekt --input "$detektInput" 2>&1)\nEXIT_CODE=$?\nif [ $EXIT_CODE -ne 0 ]; then\n  echo $OUTPUT\n  echo "***********************************************"\n  echo "                 detekt failed                 "\n  echo " Please fix the above issues before committing "\n  echo "***********************************************"\n  exit $EXIT_CODE\nfi\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);