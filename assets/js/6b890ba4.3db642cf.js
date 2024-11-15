"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[7935],{56164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"rules/comments","title":"Comments Rule Set","description":"This rule set provides rules that address issues in comments and documentation","source":"@site/versioned_docs/version-1.21.0/rules/comments.md","sourceDirName":"rules","slug":"/rules/comments","permalink":"/docs/1.21.0/rules/comments","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/rules/comments.md","tags":[],"version":"1.21.0","frontMatter":{"title":"Comments Rule Set","sidebar":"home_sidebar","keywords":["rules","comments"],"permalink":"comments.html","toc":true,"folder":"documentation"},"sidebar":"defaultSidebar","previous":{"title":"Run detekt using a Git pre-commit hook","permalink":"/docs/1.21.0/gettingstarted/git-pre-commit-hook"},"next":{"title":"Complexity Rule Set","permalink":"/docs/1.21.0/rules/complexity"}}');var o=t(74848),s=t(28453);const r={title:"Comments Rule Set",sidebar:"home_sidebar",keywords:["rules","comments"],permalink:"comments.html",toc:!0,folder:"documentation"},l=void 0,c={},d=[{value:"AbsentOrWrongFileLicense",id:"absentorwrongfilelicense",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"CommentOverPrivateFunction",id:"commentoverprivatefunction",level:3},{value:"CommentOverPrivateProperty",id:"commentoverprivateproperty",level:3},{value:"DeprecatedBlockTag",id:"deprecatedblocktag",level:3},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"EndOfSentenceFormat",id:"endofsentenceformat",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"KDocReferencesNonPublicProperty",id:"kdocreferencesnonpublicproperty",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"OutdatedDocumentation",id:"outdateddocumentation",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"UndocumentedPublicClass",id:"undocumentedpublicclass",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"UndocumentedPublicFunction",id:"undocumentedpublicfunction",level:3},{value:"UndocumentedPublicProperty",id:"undocumentedpublicproperty",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This rule set provides rules that address issues in comments and documentation\nof the code."}),"\n",(0,o.jsx)(n.h3,{id:"absentorwrongfilelicense",children:"AbsentOrWrongFileLicense"}),"\n",(0,o.jsxs)(n.p,{children:["This rule will report every Kotlin source file which doesn't have the required license header.\nThe rule validates each Kotlin source and operates in two modes: if ",(0,o.jsx)(n.code,{children:"licenseTemplateIsRegex = false"})," (or missing)\nthe rule checks whether the input file header starts with the read text from the passed file in the\n",(0,o.jsx)(n.code,{children:"licenseTemplateFile"})," configuration option. If ",(0,o.jsx)(n.code,{children:"licenseTemplateIsRegex = true"})," the rule matches the header with\na regular expression produced from the passed template license file (defined via ",(0,o.jsx)(n.code,{children:"licenseTemplateFile"})," configuration\noption)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"licenseTemplateFile"})," (default: ",(0,o.jsx)(n.code,{children:"'license.template'"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"path to file with license header template resolved relatively to config file"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"licenseTemplateIsRegex"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"whether or not the license header template is a regex template"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"commentoverprivatefunction",children:"CommentOverPrivateFunction"}),"\n",(0,o.jsx)(n.p,{children:"This rule reports comments and documentation that has been added to private functions. These comments get reported\nbecause they probably explain the functionality of the private function. However, private functions should be small\nenough and have an understandable name so that they are self-explanatory and do not need this comment in the first\nplace."}),"\n",(0,o.jsx)(n.p,{children:"Instead of simply removing this comment to solve this issue prefer to split up the function into smaller functions\nwith better names if necessary. Giving the function a better, more descriptive name can also help in\nsolving this issue."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h3,{id:"commentoverprivateproperty",children:"CommentOverPrivateProperty"}),"\n",(0,o.jsx)(n.p,{children:"This rule reports comments and documentation above private properties. This can indicate that the property has a\nconfusing name or is not in a small enough context to be understood.\nPrivate properties should be named in a self-explanatory way and readers of the code should be able to understand\nwhy the property exists and what purpose it solves without the comment."}),"\n",(0,o.jsx)(n.p,{children:"Instead of simply removing the comment to solve this issue, prefer renaming the property to a more self-explanatory\nname. If this property is inside a bigger class, it makes sense to refactor and split up the class. This can\nincrease readability and make the documentation obsolete."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h3,{id:"deprecatedblocktag",children:"DeprecatedBlockTag"}),"\n",(0,o.jsxs)(n.p,{children:["This rule reports use of the ",(0,o.jsx)(n.code,{children:"@deprecated"})," block tag in KDoc comments. Deprecation must be specified using a\n",(0,o.jsx)(n.code,{children:"@Deprecated"})," annotation as adding a ",(0,o.jsx)(n.code,{children:"@deprecated"})," block tag in KDoc comments\n",(0,o.jsx)(n.a,{href:"https://kotlinlang.org/docs/kotlin-doc.html#suppress",children:"has no effect and is not supported"}),". The ",(0,o.jsx)(n.code,{children:"@Deprecated"}),"\nannotation constructor has dedicated fields for a message and a type (warning, error, etc.). You can also use the\n",(0,o.jsx)(n.code,{children:"@ReplaceWith"})," annotation to specify how to solve the deprecation automatically via the IDE."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"/**\n* This function prints a message followed by a new line.\n*\n* @deprecated Useless, the Kotlin standard library can already do this. Replace with println.\n*/\nfun printThenNewline(what: String) {\n    // ...\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'/**\n* This function prints a message followed by a new line.\n*/\n@Deprecated("Useless, the Kotlin standard library can already do this.")\n@ReplaceWith("println(what)")\nfun printThenNewline(what: String) {\n    // ...\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"endofsentenceformat",children:"EndOfSentenceFormat"}),"\n",(0,o.jsx)(n.p,{children:"This rule validates the end of the first sentence of a KDoc comment.\nIt should end with proper punctuation or with a correct URL."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-1",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"endOfSentenceFormat"})," (default: ",(0,o.jsx)(n.code,{children:"'([.?!][ \\t\\n\\r\\f<])|([.?!:]$)'"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"regular expression which should match the end of the first sentence in the KDoc"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"kdocreferencesnonpublicproperty",children:"KDocReferencesNonPublicProperty"}),"\n",(0,o.jsx)(n.p,{children:"This rule will report any KDoc comments that refer to non-public properties of a class.\nClients do not need to know the implementation details."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 5min"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code-1",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"/**\n* Comment\n* [prop1] - non-public property\n* [prop2] - public property\n*/\nclass Test {\n    private val prop1 = 0\n    val prop2 = 0\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code-1",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"/**\n* Comment\n* [prop2] - public property\n*/\nclass Test {\n    private val prop1 = 0\n    val prop2 = 0\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"outdateddocumentation",children:"OutdatedDocumentation"}),"\n",(0,o.jsx)(n.p,{children:"This rule will report any class, function or constructor with KDoc that does not match the declaration signature.\nIf KDoc is not present or does not contain any @param or @property tags, rule violation will not be reported.\nBy default, both type and value parameters need to be matched and declarations orders must be preserved. You can\nturn off these features using configuration options."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 10min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-2",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"matchTypeParameters"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if type parameters should be matched"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"matchDeclarationsOrder"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if the order of declarations should be preserved"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"allowParamOnConstructorProperties"})," (default: ",(0,o.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if we allow constructor parameters to be marked as @param instead of @property"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"noncompliant-code-2",children:"Noncompliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"/**\n* @param someParam\n* @property someProp\n*/\nclass MyClass(otherParam: String, val otherProp: String)\n\n/**\n* @param T\n* @param someParam\n*/\nfun <T, S> myFun(someParam: String)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"compliant-code-2",children:"Compliant Code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"/**\n* @param someParam\n* @property someProp\n*/\nclass MyClass(someParam: String, val someProp: String)\n\n/**\n* @param T\n* @param S\n* @param someParam\n*/\nfun <T, S> myFun(someParam: String)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"undocumentedpublicclass",children:"UndocumentedPublicClass"}),"\n",(0,o.jsx)(n.p,{children:"This rule reports public classes, objects and interfaces which do not have the required documentation.\nEnable this rule if the codebase should have documentation on every public class, interface and object."}),"\n",(0,o.jsx)(n.p,{children:"By default, this rule also searches for nested and inner classes and objects. This default behavior can be changed\nwith the configuration options of this rule."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-options-3",children:"Configuration options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"searchInNestedClass"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if nested classes should be searched"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"searchInInnerClass"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if inner classes should be searched"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"searchInInnerObject"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if inner objects should be searched"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"searchInInnerInterface"})," (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"if inner interfaces should be searched"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"undocumentedpublicfunction",children:"UndocumentedPublicFunction"}),"\n",(0,o.jsx)(n.p,{children:"This rule will report any public function which does not have the required documentation.\nIf the codebase should have documentation on all public functions enable this rule to enforce this.\nOverridden functions are excluded by this rule."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]}),"\n",(0,o.jsx)(n.h3,{id:"undocumentedpublicproperty",children:"UndocumentedPublicProperty"}),"\n",(0,o.jsx)(n.p,{children:"This rule will report any public property which does not have the required documentation.\nThis also includes public properties defined in a primary constructor.\nIf the codebase should have documentation on all public properties enable this rule to enforce this.\nOverridden properties are excluded by this rule."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Debt"}),": 20min"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);