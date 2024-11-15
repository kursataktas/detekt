"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[7370],{39560:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"rules/complexity","title":"Complexity Rule Set","description":"This rule set contains rules that report complex code.","source":"@site/versioned_docs/version-1.23.5/rules/complexity.md","sourceDirName":"rules","slug":"/rules/complexity","permalink":"/docs/1.23.5/rules/complexity","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.5/rules/complexity.md","tags":[],"version":"1.23.5","frontMatter":{"title":"Complexity Rule Set","sidebar":"home_sidebar","keywords":["rules","complexity"],"permalink":"complexity.html","toc":true,"folder":"documentation"},"sidebar":"defaultSidebar","previous":{"title":"Comments Rule Set","permalink":"/docs/1.23.5/rules/comments"},"next":{"title":"Coroutines Rule Set","permalink":"/docs/1.23.5/rules/coroutines"}}');var o=i(74848),l=i(28453);const t={title:"Complexity Rule Set",sidebar:"home_sidebar",keywords:["rules","complexity"],permalink:"complexity.html",toc:!0,folder:"documentation"},r=void 0,d={},c=[{value:"CognitiveComplexMethod",id:"cognitivecomplexmethod",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"ComplexCondition",id:"complexcondition",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"ComplexInterface",id:"complexinterface",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"CyclomaticComplexMethod",id:"cyclomaticcomplexmethod",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"LabeledExpression",id:"labeledexpression",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"LargeClass",id:"largeclass",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4},{value:"LongMethod",id:"longmethod",level:3},{value:"Configuration options:",id:"configuration-options-6",level:4},{value:"LongParameterList",id:"longparameterlist",level:3},{value:"Configuration options:",id:"configuration-options-7",level:4},{value:"MethodOverloading",id:"methodoverloading",level:3},{value:"Configuration options:",id:"configuration-options-8",level:4},{value:"NamedArguments",id:"namedarguments",level:3},{value:"Configuration options:",id:"configuration-options-9",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"NestedBlockDepth",id:"nestedblockdepth",level:3},{value:"Configuration options:",id:"configuration-options-10",level:4},{value:"NestedScopeFunctions",id:"nestedscopefunctions",level:3},{value:"Configuration options:",id:"configuration-options-11",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"ReplaceSafeCallChainWithRun",id:"replacesafecallchainwithrun",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"StringLiteralDuplication",id:"stringliteralduplication",level:3},{value:"Configuration options:",id:"configuration-options-12",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-5",level:4},{value:"Compliant Code:",id:"compliant-code-5",level:4},{value:"TooManyFunctions",id:"toomanyfunctions",level:3},{value:"Configuration options:",id:"configuration-options-13",level:4}];function a(e){const n={a:"a",code:"code",del:"del",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This rule set contains rules that report complex code."}),"\n",(0,o.jsx)(n.h3,{id:"cognitivecomplexmethod",children:"CognitiveComplexMethod"}),"\n",(0,o.jsx)(n.p,{children:"Complex methods are hard to understand and read. It might not be obvious what side-effects a complex method has.\nPrefer splitting up complex methods into smaller methods that are in turn easier to understand.\nSmaller methods can also be named much clearer which leads to improved readability of the code."}),"\n",(0,o.jsxs)(n.p,{children:["This rule measures and restricts the complexity of the method through the ",(0,o.jsx)(n.a,{href:"https://www.sonarsource.com/docs/CognitiveComplexity.pdf",children:"Cognitive Complexity metric of Sonasource"}),".\nWhich improves McCabe's Cyclomatic Complexity (see ",(0,o.jsx)(n.a,{href:"/docs/rules/complexity#cyclomaticcomplexmethod",children:"CyclomaticComplexMethod"}),") considering the programmer's mental model."]}),"\n",(0,o.jsx)(n.p,{children:"Similar to cyclomatic complexity, it is a mathematical model that increases +1 complexity for flow control statements,\nbut increases additional complexity when the statements are deeply nested."}),"\n",(0,o.jsx)(n.p,{children:"The statements that increase the complexity or the nesting level are as follows."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Complexity Increments"})," - ",(0,o.jsx)(n.code,{children:"if"}),", ",(0,o.jsx)(n.code,{children:"when"}),", ",(0,o.jsx)(n.code,{children:"for"}),", ",(0,o.jsx)(n.code,{children:"while"}),", ",(0,o.jsx)(n.code,{children:"do while"}),", ",(0,o.jsx)(n.code,{children:"catch"}),", ",(0,o.jsx)(n.code,{children:"labeled break"}),", ",(0,o.jsx)(n.code,{children:"labeled continue"}),", ",(0,o.jsx)(n.code,{children:"labeled return"}),", ",(0,o.jsx)(n.code,{children:"recursion call"}),", ",(0,o.jsx)(n.code,{children:"&&"}),", ",(0,o.jsx)(n.code,{children:"||"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Nesting Level Increments"})," - ",(0,o.jsx)(n.code,{children:"if"}),", ",(0,o.jsx)(n.code,{children:"when"}),", ",(0,o.jsx)(n.code,{children:"for"}),", ",(0,o.jsx)(n.code,{children:"while"}),", ",(0,o.jsx)(n.code,{children:"do while"}),", ",(0,o.jsx)(n.code,{children:"catch"}),", ",(0,o.jsx)(n.code,{children:"nested function"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Additional Complexity Increments by Nesting Level"})," - ",(0,o.jsx)(n.code,{children:"if"}),", ",(0,o.jsx)(n.code,{children:"when"}),", ",(0,o.jsx)(n.code,{children:"for"}),", ",(0,o.jsx)(n.code,{children:"while"}),", ",(0,o.jsx)(n.code,{children:"do while"}),", ",(0,o.jsx)(n.code,{children:"catch"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"15"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Cognitive Complexity number for a method."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"complexcondition",children:"ComplexCondition"}),"\n",(0,o.jsx)(n.p,{children:"Complex conditions make it hard to understand which cases lead to the condition being true or false. To improve\nreadability and understanding of complex conditions consider extracting them into well-named functions or variables\nand call those instead."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-1",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"4"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"the number of conditions which will trigger the rule"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val str = "foo"\nval isFoo = if (str.startsWith("foo") && !str.endsWith("foo") && !str.endsWith("bar") && !str.endsWith("_")) {\n    // ...\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val str = "foo"\nval isFoo = if (str.startsWith("foo") && hasCorrectEnding()) {\n    // ...\n}\n\nfun hasCorrectEnding() = return !str.endsWith("foo") && !str.endsWith("bar") && !str.endsWith("_")\n'})}),"\n",(0,o.jsx)(n.h3,{id:"complexinterface",children:"ComplexInterface"}),"\n",(0,o.jsx)(n.p,{children:"Complex interfaces which contain too many functions and/or properties indicate that this interface is handling too\nmany things at once. Interfaces should follow the single-responsibility principle to also encourage implementations\nof this interface to not handle too many things at once."}),"\n",(0,o.jsx)(n.p,{children:"Large interfaces should be split into smaller interfaces which have a clear responsibility and are easier\nto understand and implement."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-2",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"10"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"the amount of definitions in an interface to trigger the rule"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"includeStaticDeclarations"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"whether static declarations should be included"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"includePrivateDeclarations"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"whether private declarations should be included"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreOverloaded"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignore overloaded methods - only count once"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"cyclomaticcomplexmethod",children:"CyclomaticComplexMethod"}),"\n",(0,o.jsx)(n.p,{children:"Complex methods are hard to understand and read. It might not be obvious what side-effects a complex method has.\nPrefer splitting up complex methods into smaller methods that are in turn easier to understand.\nSmaller methods can also be named much clearer which leads to improved readability of the code."}),"\n",(0,o.jsxs)(n.p,{children:["This rule uses McCabe's Cyclomatic Complexity (MCC) metric to measure the number of\nlinearly independent paths through a function's source code (",(0,o.jsx)(n.a,{href:"https://www.ndepend.com/docs/code-metrics#CC",children:"https://www.ndepend.com/docs/code-metrics#CC"}),").\nThe higher the number of independent paths, the more complex a method is.\nComplex methods use too many of the following statements.\nEach one of them adds one to the complexity count."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Conditional statements"})," - ",(0,o.jsx)(n.code,{children:"if"}),", ",(0,o.jsx)(n.code,{children:"else if"}),", ",(0,o.jsx)(n.code,{children:"when"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Jump statements"})," - ",(0,o.jsx)(n.code,{children:"continue"}),", ",(0,o.jsx)(n.code,{children:"break"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Loops"})," - ",(0,o.jsx)(n.code,{children:"for"}),", ",(0,o.jsx)(n.code,{children:"while"}),", ",(0,o.jsx)(n.code,{children:"do-while"}),", ",(0,o.jsx)(n.code,{children:"forEach"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Operators"})," ",(0,o.jsx)(n.code,{children:"&&"}),", ",(0,o.jsx)(n.code,{children:"||"}),", ",(0,o.jsx)(n.code,{children:"?:"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Exceptions"})," - ",(0,o.jsx)(n.code,{children:"catch"}),", ",(0,o.jsx)(n.code,{children:"use"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Scope Functions"})," - ",(0,o.jsx)(n.code,{children:"let"}),", ",(0,o.jsx)(n.code,{children:"run"}),", ",(0,o.jsx)(n.code,{children:"with"}),", ",(0,o.jsx)(n.code,{children:"apply"}),", and ",(0,o.jsx)(n.code,{children:"also"})," ->\n",(0,o.jsx)(n.a,{href:"https://kotlinlang.org/docs/scope-functions.html",children:"Reference"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Aliases"}),": ComplexMethod"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-3",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"15"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"McCabe's Cyclomatic Complexity (MCC) number for a method."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreSingleWhenExpression"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Ignores a complex method if it only contains a single when expression."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreSimpleWhenEntries"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Whether to ignore simple (braceless) when entries."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreNestingFunctions"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["Whether to ignore functions which are often used instead of an ",(0,o.jsx)(n.code,{children:"if"})," or ",(0,o.jsx)(n.code,{children:"for"})," statement."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"nestingFunctions"})," (default: ",(0,o.jsx)(n.code,{children:"['also', 'apply', 'forEach', 'isNotNull', 'ifNull', 'let', 'run', 'use', 'with']"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Comma separated list of function names which add complexity."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"labeledexpression",children:"LabeledExpression"}),"\n",(0,o.jsx)(n.p,{children:"This rule reports labeled expressions. Expressions with labels generally increase complexity and worsen the\nmaintainability of the code. Refactor the violating code to not use labels instead.\nLabeled expressions referencing an outer class with a label from an inner class are allowed, because there is no\nway to get the instance of an outer class from an inner class in Kotlin."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-4",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoredLabels"})," (default: ",(0,o.jsx)(n.code,{children:"[]"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"allows to provide a list of label names which should be ignored by this rule"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code-1",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val range = listOf<String>("foo", "bar")\nloop@ for (r in range) {\n    if (r == "bar") break@loop\n    println(r)\n}\n\nclass Outer {\n    inner class Inner {\n        fun f() {\n            val i = this@Inner // referencing itself, use `this instead\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code-1",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val range = listOf<String>("foo", "bar")\nfor (r in range) {\n    if (r == "bar") break\n    println(r)\n}\n\nclass Outer {\n    inner class Inner {\n        fun f() {\n            val outer = this@Outer\n        }\n        fun Int.extend() {\n            val inner = this@Inner // this would reference Int and not Inner\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"largeclass",children:"LargeClass"}),"\n",(0,o.jsx)(n.p,{children:"This rule reports large classes. Classes should generally have one responsibility. Large classes can indicate that\nthe class does instead handle multiple responsibilities. Instead of doing many things at once prefer to\nsplit up large classes into smaller classes. These smaller classes are then easier to understand and handle less\nthings."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-5",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"600"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"the size of class required to trigger the rule"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"longmethod",children:"LongMethod"}),"\n",(0,o.jsx)(n.p,{children:"Methods should have one responsibility. Long methods can indicate that a method handles too many cases at once.\nPrefer smaller methods with clear names that describe their functionality clearly."}),"\n",(0,o.jsx)(n.p,{children:"Extract parts of the functionality of long methods into separate, smaller methods."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-6",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"60"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"number of lines in a method to trigger the rule"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"longparameterlist",children:"LongParameterList"}),"\n",(0,o.jsx)(n.p,{children:"Reports functions and constructors which have more parameters than a certain threshold."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-7",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.del,{children:(0,o.jsx)(n.code,{children:"threshold"})})," (default: ",(0,o.jsx)(n.code,{children:"6"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Deprecated"}),": Use ",(0,o.jsx)(n.code,{children:"functionThreshold"})," and ",(0,o.jsx)(n.code,{children:"constructorThreshold"})," instead"]}),"\n",(0,o.jsx)(n.p,{children:"number of parameters required to trigger the rule"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"functionThreshold"})," (default: ",(0,o.jsx)(n.code,{children:"6"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"number of function parameters required to trigger the rule"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"constructorThreshold"})," (default: ",(0,o.jsx)(n.code,{children:"7"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"number of constructor parameters required to trigger the rule"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreDefaultParameters"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignore parameters that have a default value"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreDataClasses"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignore long constructor parameters list for data classes"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreAnnotatedParameter"})," (default: ",(0,o.jsx)(n.code,{children:"[]"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["ignore the annotated parameters for the count (e.g. ",(0,o.jsx)(n.code,{children:"fun foo(@Value bar: Int)"})," would not be counted"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"methodoverloading",children:"MethodOverloading"}),"\n",(0,o.jsx)(n.p,{children:"This rule reports methods which are overloaded often.\nMethod overloading tightly couples these methods together which might make the code harder to understand."}),"\n",(0,o.jsx)(n.p,{children:"Refactor these methods and try to use optional parameters instead to prevent some of the overloading."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-8",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"6"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"number of overloads which will trigger the rule"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"namedarguments",children:"NamedArguments"}),"\n",(0,o.jsx)(n.p,{children:"Reports function invocations which have more arguments than a certain threshold and are all not named. Calls with\ntoo many arguments are more difficult to understand so a named arguments help."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-9",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"3"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"number of arguments that triggers this inspection"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreArgumentsMatchingNames"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignores when argument values are the same as the parameter names"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code-2",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"fun sum(a: Int, b: Int, c: Int, d: Int) {\n}\nsum(1, 2, 3, 4)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code-2",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"fun sum(a: Int, b: Int, c: Int, d: Int) {\n}\nsum(a = 1, b = 2, c = 3, d = 4)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"nestedblockdepth",children:"NestedBlockDepth"}),"\n",(0,o.jsx)(n.p,{children:"This rule reports excessive nesting depth in functions. Excessively nested code becomes harder to read and increases\nits hidden complexity. It might become harder to understand edge-cases of the function."}),"\n",(0,o.jsx)(n.p,{children:"Prefer extracting the nested code into well-named functions to make it easier to understand."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-10",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"4"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"the nested depth required to trigger rule"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"nestedscopefunctions",children:"NestedScopeFunctions"}),"\n",(0,o.jsx)(n.p,{children:"Although the scope functions are a way of making the code more concise, avoid overusing them: it can decrease\nyour code readability and lead to errors. Avoid nesting scope functions and be careful when chaining them:\nit's easy to get confused about the current context object and the value of this or it."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://kotlinlang.org/docs/scope-functions.html",children:"Reference"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-11",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"1"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Number of nested scope functions allowed."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"functions"})," (default: ",(0,o.jsx)(n.code,{children:"['kotlin.apply', 'kotlin.run', 'kotlin.with', 'kotlin.let', 'kotlin.also']"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Set of scope function names which add complexity. Function names have to be fully qualified. For example 'kotlin.apply'."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code-3",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"// Try to figure out, what changed, without knowing the details\nfirst.apply {\n    second.apply {\n        b = a\n        c = b\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code-3",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"// 'a' is a property of current class\n// 'b' is a property of class 'first'\n// 'c' is a property of class 'second'\nfirst.b = this.a\nsecond.c = first.b\n"})}),"\n",(0,o.jsx)(n.h3,{id:"replacesafecallchainwithrun",children:"ReplaceSafeCallChainWithRun"}),"\n",(0,o.jsxs)(n.p,{children:["Chains of safe calls on non-nullable types are redundant and can be removed by enclosing the redundant safe calls in\na ",(0,o.jsx)(n.code,{children:"run {}"})," block. This improves code coverage and reduces cyclomatic complexity as redundant null checks are removed."]}),"\n",(0,o.jsx)(n.p,{children:"This rule only checks from the end of a chain and works backwards, so it won't recommend inserting run blocks in the\nmiddle of a safe call chain as that is likely to make the code more difficult to understand."}),"\n",(0,o.jsx)(n.p,{children:"The rule will check for every opportunity to replace a safe call when it sits at the end of a chain, even if there's\nonly one, as that will still improve code coverage and reduce cyclomatic complexity."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 10min"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code-4",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val x = System.getenv()\n    ?.getValue("HOME")\n    ?.toLowerCase()\n    ?.split("/") ?: emptyList()\n'})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code-4",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val x = getenv()?.run {\n    getValue("HOME")\n        .toLowerCase()\n        .split("/")\n} ?: emptyList()\n'})}),"\n",(0,o.jsx)(n.h3,{id:"stringliteralduplication",children:"StringLiteralDuplication"}),"\n",(0,o.jsx)(n.p,{children:"This rule detects and reports duplicated String literals. Repeatedly typing out the same String literal across the\ncodebase makes it harder to change and maintain."}),"\n",(0,o.jsx)(n.p,{children:"Instead, prefer extracting the String literal into a property or constant."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-12",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"threshold"})," (default: ",(0,o.jsx)(n.code,{children:"3"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"amount of duplications to trigger rule"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreAnnotation"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if values in Annotations should be ignored"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"excludeStringsWithLessThan5Characters"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if short strings should be excluded"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreStringsRegex"})," (default: ",(0,o.jsx)(n.code,{children:"'$^'"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"RegEx of Strings that should be ignored"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code-5",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'class Foo {\n\n    val s1 = "lorem"\n    fun bar(s: String = "lorem") {\n        s1.equals("lorem")\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code-5",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'class Foo {\n    val lorem = "lorem"\n    val s1 = lorem\n    fun bar(s: String = lorem) {\n        s1.equals(lorem)\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"toomanyfunctions",children:"TooManyFunctions"}),"\n",(0,o.jsx)(n.p,{children:"This rule reports files, classes, interfaces, objects and enums which contain too many functions.\nEach element can be configured with different thresholds."}),"\n",(0,o.jsx)(n.p,{children:"Too many functions indicate a violation of the single responsibility principle. Prefer extracting functionality\nwhich clearly belongs together in separate parts of the code."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-13",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"thresholdInFiles"})," (default: ",(0,o.jsx)(n.code,{children:"11"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"threshold in files"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"thresholdInClasses"})," (default: ",(0,o.jsx)(n.code,{children:"11"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"threshold in classes"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"thresholdInInterfaces"})," (default: ",(0,o.jsx)(n.code,{children:"11"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"threshold in interfaces"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"thresholdInObjects"})," (default: ",(0,o.jsx)(n.code,{children:"11"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"threshold in objects"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"thresholdInEnums"})," (default: ",(0,o.jsx)(n.code,{children:"11"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"threshold in enums"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreDeprecated"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignore deprecated functions"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignorePrivate"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignore private functions"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreOverridden"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignore overridden functions"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ignoreAnnotatedFunctions"})," (default: ",(0,o.jsx)(n.code,{children:"[]"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"ignore functions annotated with these annotations"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(96540);const o={},l=s.createContext(o);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);