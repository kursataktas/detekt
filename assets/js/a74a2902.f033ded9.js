"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[5648],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(a,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(k,p(p({ref:t},c),{},{components:n})):o.createElement(k,p({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2091:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var o=n(3117),l=n(102),r=(n(7294),n(3905)),p=["components"],i={title:"Empty-blocks Rule Set",sidebar:"home_sidebar",keywords:["rules","empty-blocks"],permalink:"empty-blocks.html",toc:!0,folder:"documentation"},a=void 0,s={unversionedId:"rules/empty-blocks",id:"rules/empty-blocks",title:"Empty-blocks Rule Set",description:"The empty-blocks ruleset contains rules that will report empty blocks of code",source:"@site/docs/rules/empty-blocks.md",sourceDirName:"rules",slug:"/rules/empty-blocks",permalink:"/docs/next/rules/empty-blocks",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/rules/empty-blocks.md",tags:[],version:"current",frontMatter:{title:"Empty-blocks Rule Set",sidebar:"home_sidebar",keywords:["rules","empty-blocks"],permalink:"empty-blocks.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Coroutines Rule Set",permalink:"/docs/next/rules/coroutines"},next:{title:"Exceptions Rule Set",permalink:"/docs/next/rules/exceptions"}},c={},u=[{value:"EmptyCatchBlock",id:"emptycatchblock",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"EmptyClassBlock",id:"emptyclassblock",level:3},{value:"EmptyDefaultConstructor",id:"emptydefaultconstructor",level:3},{value:"EmptyDoWhileBlock",id:"emptydowhileblock",level:3},{value:"EmptyElseBlock",id:"emptyelseblock",level:3},{value:"EmptyFinallyBlock",id:"emptyfinallyblock",level:3},{value:"EmptyForBlock",id:"emptyforblock",level:3},{value:"EmptyFunctionBlock",id:"emptyfunctionblock",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"EmptyIfBlock",id:"emptyifblock",level:3},{value:"EmptyInitBlock",id:"emptyinitblock",level:3},{value:"EmptyKotlinFile",id:"emptykotlinfile",level:3},{value:"EmptySecondaryConstructor",id:"emptysecondaryconstructor",level:3},{value:"EmptyTryBlock",id:"emptytryblock",level:3},{value:"EmptyWhenBlock",id:"emptywhenblock",level:3},{value:"EmptyWhileBlock",id:"emptywhileblock",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The empty-blocks ruleset contains rules that will report empty blocks of code\nwhich should be avoided."),(0,r.kt)("h3",{id:"emptycatchblock"},"EmptyCatchBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," blocks. Empty catch blocks indicate that an exception is ignored and not handled.\nIn case exceptions are ignored intentionally, this should be made explicit\nby using the specified names in the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowedExceptionNameRegex"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"allowedExceptionNameRegex")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'_|(ignore|expected).*'"),")"),(0,r.kt)("p",{parentName:"li"},"ignores exception types which match this regex"))),(0,r.kt)("h3",{id:"emptyclassblock"},"EmptyClassBlock"),(0,r.kt)("p",null,"Reports empty classes. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptydefaultconstructor"},"EmptyDefaultConstructor"),(0,r.kt)("p",null,"Reports empty default constructors. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptydowhileblock"},"EmptyDoWhileBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"do"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loops. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptyelseblock"},"EmptyElseBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," blocks. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptyfinallyblock"},"EmptyFinallyBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," blocks. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptyforblock"},"EmptyForBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loops. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptyfunctionblock"},"EmptyFunctionBlock"),(0,r.kt)("p",null,"Reports empty functions. Empty blocks of code serve no purpose and should be removed.\nThis rule will not report functions with the override modifier that have a comment as their only body contents\n(e.g., a ",(0,r.kt)("inlineCode",{parentName:"p"},"// no-op")," comment in an unused listener function)."),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreOverridden")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to exclude all functions which are overriding other\nfunctions from the superclass or from an interface (i.e., functions declared with the override modifier)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"configuration-options-1"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("del",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"del"},"ignoreOverriddenFunctions"))," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deprecated"),": Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreOverridden")," instead"),(0,r.kt)("p",{parentName:"li"},"Excludes all the overridden functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ignoreOverridden")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"Excludes all the overridden functions"))),(0,r.kt)("h3",{id:"emptyifblock"},"EmptyIfBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," blocks. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptyinitblock"},"EmptyInitBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," expressions. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptykotlinfile"},"EmptyKotlinFile"),(0,r.kt)("p",null,"Reports empty Kotlin (.kt, .kts) files. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptysecondaryconstructor"},"EmptySecondaryConstructor"),(0,r.kt)("p",null,"Reports empty secondary constructors. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptytryblock"},"EmptyTryBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," blocks. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.6.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptywhenblock"},"EmptyWhenBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," expressions. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h3",{id:"emptywhileblock"},"EmptyWhileBlock"),(0,r.kt)("p",null,"Reports empty ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," expressions. Empty blocks of code serve no purpose and should be removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"))}d.isMDXComponent=!0}}]);