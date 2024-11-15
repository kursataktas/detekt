"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[4632],{92375:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"rules/performance","title":"Performance Rule Set","description":"The performance rule set analyzes code for potential performance problems.","source":"@site/docs/rules/performance.md","sourceDirName":"rules","slug":"/rules/performance","permalink":"/docs/next/rules/performance","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/docs/rules/performance.md","tags":[],"version":"current","frontMatter":{"title":"Performance Rule Set","sidebar":"home_sidebar","keywords":["rules","performance"],"permalink":"performance.html","toc":true,"folder":"documentation"},"sidebar":"defaultSidebar","previous":{"title":"Naming Rule Set","permalink":"/docs/next/rules/naming"},"next":{"title":"Potential-bugs Rule Set","permalink":"/docs/next/rules/potential-bugs"}}');var i=o(74848),t=o(28453);const a={title:"Performance Rule Set",sidebar:"home_sidebar",keywords:["rules","performance"],permalink:"performance.html",toc:!0,folder:"documentation"},l=void 0,s={},c=[{value:"ArrayPrimitive",id:"arrayprimitive",level:3},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"CouldBeSequence",id:"couldbesequence",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"ForEachOnRange",id:"foreachonrange",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"SpreadOperator",id:"spreadoperator",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"UnnecessaryPartOfBinaryExpression",id:"unnecessarypartofbinaryexpression",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"UnnecessaryTemporaryInstantiation",id:"unnecessarytemporaryinstantiation",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-5",level:4},{value:"Compliant Code:",id:"compliant-code-5",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The performance rule set analyzes code for potential performance problems."}),"\n",(0,i.jsx)(n.h3,{id:"arrayprimitive",children:"ArrayPrimitive"}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"Array<Primitive>"})," leads to implicit boxing and performance hit. Prefer using Kotlin specialized Array\nInstances."]}),"\n",(0,i.jsxs)(n.p,{children:["As stated in the Kotlin ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/basic-types.html#arrays",children:"documentation"})," Kotlin has\nspecialized arrays to represent primitive types without boxing overhead, such as ",(0,i.jsx)(n.code,{children:"IntArray"}),", ",(0,i.jsx)(n.code,{children:"ByteArray"})," and so on."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.2.0"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun function(array: Array<Int>) { }\n\nfun returningFunction(): Array<Double> { }\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun function(array: IntArray) { }\n\nfun returningFunction(): DoubleArray { }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"couldbesequence",children:"CouldBeSequence"}),"\n",(0,i.jsxs)(n.p,{children:["Long chains of collection operations will have a performance penalty due to a new list being created for each call. Consider using sequences instead. Read more about this in the ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/sequences.html",children:"documentation"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"configuration-options",children:"Configuration options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"allowedOperations"})," (default: ",(0,i.jsx)(n.code,{children:"2"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"The maximum number of allowed chained collection operations."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-1",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"listOf(1, 2, 3, 4).map { it*2 }.filter { it < 4 }.map { it*it }\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-1",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"listOf(1, 2, 3, 4).asSequence().map { it*2 }.filter { it < 4 }.map { it*it }.toList()\n\nlistOf(1, 2, 3, 4).map { it*2 }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"foreachonrange",children:"ForEachOnRange"}),"\n",(0,i.jsx)(n.p,{children:"Using the forEach method on ranges has a heavy performance cost. Prefer using simple for loops."}),"\n",(0,i.jsxs)(n.p,{children:["Benchmarks have shown that using forEach on a range can have a huge performance cost in comparison to\nsimple for loops. Hence, in most contexts, a simple for loop should be used instead.\nSee more details here:\n",(0,i.jsx)(n.a,{href:"https://bladecoder.medium.com/exploring-kotlins-hidden-costs-part-1-fbb9935d9b62",children:"Exploring Kotlin Hidden Costs - Part 1"}),"\n",(0,i.jsx)(n.a,{href:"https://bladecoder.medium.com/exploring-kotlins-hidden-costs-part-2-324a4a50b70",children:"Exploring Kotlin Hidden Costs - Part 2"}),"\n",(0,i.jsx)(n.a,{href:"https://bladecoder.medium.com/exploring-kotlins-hidden-costs-part-3-3bf6e0dbf0a4",children:"Exploring Kotlin Hidden Costs - Part 3"})]}),"\n",(0,i.jsx)(n.p,{children:"To solve this CodeSmell, the forEach usage should be replaced by a for loop."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-2",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"(1..10).forEach {\n    println(it)\n}\n(1 until 10).forEach {\n    println(it)\n}\n(10 downTo 1).forEach {\n    println(it)\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-2",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"for (i in 1..10) {\n    println(i)\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"spreadoperator",children:"SpreadOperator"}),"\n",(0,i.jsxs)(n.p,{children:["In most cases using a spread operator causes a full copy of the array to be created before calling a method.\nThis has a very high performance penalty. Benchmarks showing this performance penalty can be seen here:\n",(0,i.jsx)(n.a,{href:"https://bladecoder.medium.com/exploring-kotlins-hidden-costs-part-1-fbb9935d9b62",children:"Exploring Kotlin Hidden Costs - Part 1"}),"\n",(0,i.jsx)(n.a,{href:"https://bladecoder.medium.com/exploring-kotlins-hidden-costs-part-2-324a4a50b70",children:"Exploring Kotlin Hidden Costs - Part 2"}),"\n",(0,i.jsx)(n.a,{href:"https://bladecoder.medium.com/exploring-kotlins-hidden-costs-part-3-3bf6e0dbf0a4",children:"Exploring Kotlin Hidden Costs - Part 3"})]}),"\n",(0,i.jsx)(n.p,{children:"The Kotlin compiler since v1.1.60 has an optimization that skips the array copy when an array constructor\nfunction is used to create the arguments that are passed to the vararg parameter. This case will not be flagged\nby the rule since it doesn't suffer the performance penalty of an array copy."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-3",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val strs = arrayOf("value one", "value two")\nval foo = bar(*strs)\n\nfun bar(vararg strs: String) {\n    strs.forEach { println(it) }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-3",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'// array copy skipped in this case since Kotlin 1.1.60\nval foo = bar(*arrayOf("value one", "value two"))\n\n// array not passed so no array copy is required\nval foo2 = bar("value one", "value two")\n\nfun bar(vararg strs: String) {\n    strs.forEach { println(it) }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"unnecessarypartofbinaryexpression",children:"UnnecessaryPartOfBinaryExpression"}),"\n",(0,i.jsx)(n.p,{children:"Unnecessary binary expression add complexity to the code and accomplish nothing. They should be removed.\nThe rule works with all binary expression included if and when condition. The rule also works with all predicates.\nThe rule verify binary expression only in case when the expression use only one type of the following\noperators || or &&."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-4",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val foo = true\nval bar = true\n\nif (foo || bar || foo) {\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-4",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val foo = true\nif (foo) {\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"unnecessarytemporaryinstantiation",children:"UnnecessaryTemporaryInstantiation"}),"\n",(0,i.jsx)(n.p,{children:"Avoid temporary objects when converting primitive types to String. This has a performance penalty when compared\nto using primitive types directly.\nTo solve this issue, remove the wrapping type."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-5",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val i = Integer(1).toString() // temporary Integer instantiation just for the conversion\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-5",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val i = Integer.toString(1)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>l});var r=o(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);