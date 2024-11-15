"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[4892],{4786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"gettingstarted/gradletask","title":"Run detekt using Gradle Task","description":"1. Add following lines to your build.gradle file.","source":"@site/versioned_docs/version-1.21.0/gettingstarted/gradletask.md","sourceDirName":"gettingstarted","slug":"/gettingstarted/gradletask","permalink":"/docs/1.21.0/gettingstarted/gradletask","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/gettingstarted/gradletask.md","tags":[],"version":"1.21.0","sidebarPosition":3,"frontMatter":{"title":"Run detekt using Gradle Task","keywords":["gradle","task"],"sidebar":null,"permalink":"gradletask.html","folder":"gettingstarted","summary":null,"sidebar_position":3},"sidebar":"defaultSidebar","previous":{"title":"Run detekt using the Detekt Gradle Plugin","permalink":"/docs/1.21.0/gettingstarted/gradle"},"next":{"title":"Run detekt using Maven Ant Task","permalink":"/docs/1.21.0/gettingstarted/mavenanttask"}}');var i=n(74848),r=n(28453);const a={title:"Run detekt using Gradle Task",keywords:["gradle","task"],sidebar:null,permalink:"gradletask.html",folder:"gettingstarted",summary:null,sidebar_position:3},d=void 0,l={},o=[{value:"Groovy DSL",id:"groovy-dsl",level:6},{value:"Kotlin DSL",id:"kotlin-dsl",level:6}];function c(e){const t={code:"code",h6:"h6",li:"li",ol:"ol",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Add following lines to your build.gradle file."}),"\n",(0,i.jsxs)(t.li,{children:["Run ",(0,i.jsx)(t.code,{children:"gradle detekt"})]}),"\n"]}),"\n",(0,i.jsx)(t.h6,{id:"groovy-dsl",children:"Groovy DSL"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-groovy",children:'repositories {\n    mavenCentral()\n}\n\nconfigurations {\n\tdetekt\n}\n\ndef detektTask = tasks.register("detekt", JavaExec) {\n\tmainClass = "io.gitlab.arturbosch.detekt.cli.Main"\n\tclasspath = configurations.detekt\n\n\tdef input = "$projectDir"\n\tdef config = "$projectDir/detekt.yml"\n\tdef exclude = ".*/build/.*,.*/resources/.*"\n\tdef params = [ \'-i\', input, \'-c\', config, \'-ex\', exclude]\n\n\targs(params)\n}\n\ndependencies {\n\tdetekt \'io.gitlab.arturbosch.detekt:detekt-cli:1.21.0\'\n}\n\n// Remove this line if you don\'t want to run detekt on every build\ncheck.dependsOn detektTask\n'})}),"\n",(0,i.jsx)(t.h6,{id:"kotlin-dsl",children:"Kotlin DSL"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'repositories {\n    mavenCentral()\n}\n\nval detekt by configurations.creating\n\nval detektTask = tasks.register<JavaExec>("detekt") {\n    mainClass.set("io.gitlab.arturbosch.detekt.cli.Main")\n    classpath = detekt\n\n    val input = projectDir\n    val config = "$projectDir/detekt.yml"\n    val exclude = ".*/build/.*,.*/resources/.*"\n    val params = listOf("-i", input, "-c", config, "-ex", exclude)\n\n    args(params)\n}\n\ndependencies {\n    detekt("io.gitlab.arturbosch.detekt:detekt-cli:1.21.0")\n}\n\n// Remove this block if you don\'t want to run detekt on every build\ntasks.check {\n    dependsOn(detektTask)\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);