"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[8434],{57399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"gettingstarted/type-resolution","title":"Using Type Resolution","description":"This page describes how to use detekt\'s type resolution feature.","source":"@site/versioned_docs/version-1.21.0/gettingstarted/type-resolution.md","sourceDirName":"gettingstarted","slug":"/gettingstarted/type-resolution","permalink":"/docs/1.21.0/gettingstarted/type-resolution","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/gettingstarted/type-resolution.md","tags":[],"version":"1.21.0","sidebarPosition":5,"frontMatter":{"title":"Using Type Resolution","keywords":["detekt","static","analysis","code","kotlin"],"sidebar":null,"permalink":"type-resolution.html","folder":"gettingstarted","summary":null,"sidebar_position":5},"sidebar":"defaultSidebar","previous":{"title":"Run detekt using Maven Ant Task","permalink":"/docs/1.21.0/gettingstarted/mavenanttask"},"next":{"title":"Run detekt using a Git pre-commit hook","permalink":"/docs/1.21.0/gettingstarted/git-pre-commit-hook"}}');var i=n(74848),o=n(28453);const r={title:"Using Type Resolution",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"type-resolution.html",folder:"gettingstarted",summary:null,sidebar_position:5},l=void 0,a={},d=[{value:"What is type resolution",id:"what-is-type-resolution",level:2},{value:"An example",id:"an-example",level:3},{value:"Is my rule using type resolution?",id:"is-my-rule-using-type-resolution",level:2},{value:"Enabling on a JVM project",id:"enabling-on-a-jvm-project",level:2},{value:"Enabling on an Android project",id:"enabling-on-an-android-project",level:2},{value:"Enabling on Detekt CLI",id:"enabling-on-detekt-cli",level:2},{value:"Writing a rule that uses type resolution",id:"writing-a-rule-that-uses-type-resolution",level:2},{value:"Testing a rule that uses type resolution",id:"testing-a-rule-that-uses-type-resolution",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This page describes how to use detekt's ",(0,i.jsx)(t.strong,{children:"type resolution"})," feature."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Please note that type resolution is still an ",(0,i.jsx)(t.strong,{children:"experimental feature"})," of Detekt. We expect it to be stable with the upcoming release of Detekt (2.x)"]})}),"\n",(0,i.jsx)(t.h2,{id:"what-is-type-resolution",children:"What is type resolution"}),"\n",(0,i.jsxs)(t.p,{children:["Type resolution is a feature that allows Detekt to perform more ",(0,i.jsx)(t.strong,{children:"advanced"})," static analysis on your Kotlin source code."]}),"\n",(0,i.jsxs)(t.p,{children:["Normally, Detekt doesn't have access to the types and symbols that are available to the compiler during the compilation. This restricts the inspection capability.\nBy enabling type resolution, you provide to Detekt all the information to understand types and symbols in your code needed to perform more accurate analysis. This extends Detekt's inspection capability to ones of the Kotlin ",(0,i.jsx)(t.strong,{children:"compiler"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"an-example",children:"An example"}),"\n",(0,i.jsxs)(t.p,{children:["Detekt has a rule called ",(0,i.jsx)(t.a,{href:"/docs/rules/style#magicnumber",children:"MagicNumber"})," to detect usages of magic numbers in your code."]}),"\n",(0,i.jsx)(t.p,{children:"In the following code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"val user = getUserById(42)?.toString()\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Detekt is able to report the usage of the number ",(0,i.jsx)(t.code,{children:"42"})," as a magic number, ",(0,i.jsx)(t.strong,{children:"without"})," type resolution. All the information needed to run this inspection is already available in the source code."]}),"\n",(0,i.jsxs)(t.p,{children:["Similarly, Detekt has another rule called ",(0,i.jsx)(t.a,{href:"/docs/rules/potential-bugs#unnecessarysafecall",children:"UnnecessarySafeCall"})," to detect unnecessary usages of safe call operators (",(0,i.jsx)(t.code,{children:"?."}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["In the previous example, Detekt is able to determine if the safe call in ",(0,i.jsx)(t.code,{children:"getUserById(42)?.toString()"})," is required ",(0,i.jsx)(t.strong,{children:"only with"})," type resolution."]}),"\n",(0,i.jsxs)(t.p,{children:["This is because Detekt needs to know what is the ",(0,i.jsx)(t.strong,{children:"return type"})," of ",(0,i.jsx)(t.code,{children:"getUserById()"})," in order to correctly perform the inspection. If the return type is a nullable type, then the code is valid. If the return type is a non-nullable type, Detekt will report an ",(0,i.jsx)(t.code,{children:"UnnecessarySafeCall"})," as the ",(0,i.jsx)(t.code,{children:"?."})," is actually not needed."]}),"\n",(0,i.jsxs)(t.p,{children:["With type resolution, Detekt has access to all the symbols and types of your codebase. Type resolution can be enabled by providing the ",(0,i.jsx)(t.strong,{children:"classpath"})," that is used during compilation. This will give Detekt access to all the code used to compile your project (both first and third party code) and will allow more advanced analysis."]}),"\n",(0,i.jsx)(t.h2,{id:"is-my-rule-using-type-resolution",children:"Is my rule using type resolution?"}),"\n",(0,i.jsxs)(t.p,{children:["If you're running Detekt ",(0,i.jsx)(t.strong,{children:"without"})," type resolution, all the rules that require type resolution ",(0,i.jsx)(t.strong,{children:"will not run"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["All the rules that require type resolution are annotated with ",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/search?q=%40RequiresTypeResolution",children:(0,i.jsx)(t.code,{children:"@RequiresTypeResolution"})}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Moreover, their official documentation in the Detekt website will mention ",(0,i.jsx)(t.em,{children:"Requires Type Resolution"})," (",(0,i.jsx)(t.a,{href:"/docs/rules/potential-bugs#unnecessarysafecall",children:"like here"}),")."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Please note that we do have some rules that have mixed behavior whether type resolution is enabled or not. Those rules are listed here: ",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/issues/2994",children:"#2994"})]})}),"\n",(0,i.jsx)(t.p,{children:"Before opening an issue that you're rule is not working, please verify, whether your rule requires type resolution and check if you have type resolution enabled."}),"\n",(0,i.jsxs)(t.p,{children:["Issues and proposals for rules that require type resolution are labelled with ",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/labels/needs%20type%20and%20symbol%20solving",children:"needs type and symbol solving"})," on the Issue tracker."]}),"\n",(0,i.jsx)(t.h2,{id:"enabling-on-a-jvm-project",children:"Enabling on a JVM project"}),"\n",(0,i.jsx)(t.p,{children:"The easiest way to use type resolution is to use the Detekt Gradle plugin. On a JVM project, the following tasks will be created:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"detekt"})," - Runs detekt WITHOUT type resolution"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"detektMain"})," - Runs detekt with type resolution on the ",(0,i.jsx)(t.code,{children:"main"})," source set"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"detektTest"})," - Runs detekt with type resolution on the ",(0,i.jsx)(t.code,{children:"test"})," source set"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Moreover, you can use ",(0,i.jsx)(t.code,{children:"detektBaselineMain"})," and ",(0,i.jsx)(t.code,{children:"detektBaselineTest"})," to create baselines starting from runs of Detekt with type resolution enabled."]}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, you can create a ",(0,i.jsx)(t.strong,{children:"custom detekt task"}),", making sure to specify the ",(0,i.jsx)(t.code,{children:"classpath"})," and ",(0,i.jsx)(t.code,{children:"jvmTarget"})," properties correctly. See the ",(0,i.jsx)(t.a,{href:"/docs/gettingstarted/gradle",children:"Run detekt using the Detekt Gradle Plugin"})," and the ",(0,i.jsx)(t.a,{href:"/docs/gettingstarted/gradletask",children:"Run detekt using Gradle Task"})," for further readings on this."]}),"\n",(0,i.jsx)(t.h2,{id:"enabling-on-an-android-project",children:"Enabling on an Android project"}),"\n",(0,i.jsx)(t.p,{children:"Other than the aforementioned tasks for JVM projects, you can use the following Android-specific gradle tasks:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"detekt<Variant>"})," - Runs detekt with type resolution on the specific build variant"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"detektBaseline<Variant>"})," - Creates a detekt baselines starting from a run of Detekt with type resolution enabled on the specific build variant."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, you can create a ",(0,i.jsx)(t.strong,{children:"custom detekt task"}),", making sure to specify the ",(0,i.jsx)(t.code,{children:"classpath"})," and ",(0,i.jsx)(t.code,{children:"jvmTarget"})," properties correctly.\nDoing this on Android is more complicated due to build types/flavors (see ",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/issues/2259",children:"#2259"})," for further context).\nTherefore, we recommend using the ",(0,i.jsx)(t.code,{children:"detekt<Variant>"})," tasks offered by the Gradle plugins."]}),"\n",(0,i.jsxs)(t.p,{children:["In case of build related issues, you may try ",(0,i.jsx)(t.code,{children:"detekt.android.disabled=true"})," in ",(0,i.jsx)(t.code,{children:"gradle.properties"})," to prevent detekt\nGradle plugins from configuring Android-specific gradle tasks."]}),"\n",(0,i.jsx)(t.h2,{id:"enabling-on-detekt-cli",children:"Enabling on Detekt CLI"}),"\n",(0,i.jsxs)(t.p,{children:["If you're using ",(0,i.jsx)(t.a,{href:"/docs/gettingstarted/cli",children:"Detekt via CLI"}),", type resolution will be enabled only if you provide the ",(0,i.jsx)(t.code,{children:"--classpath"})," and\n",(0,i.jsx)(t.code,{children:"--jvm-target"})," flags. See the list of ",(0,i.jsx)(t.a,{href:"/docs/gettingstarted/cli#use-the-cli",children:"CLI options"})," for details."]}),"\n",(0,i.jsx)(t.h2,{id:"writing-a-rule-that-uses-type-resolution",children:"Writing a rule that uses type resolution"}),"\n",(0,i.jsxs)(t.p,{children:["If you're ",(0,i.jsx)(t.a,{href:"/docs/introduction/extensions",children:"writing a custom rule"})," or if you're willing to write a rule to contribute to Detekt, you might want to leverage type resolution."]}),"\n",(0,i.jsxs)(t.p,{children:["Rules that are using type resolution, access the ",(0,i.jsx)(t.a,{href:"https://github.com/JetBrains/kotlin/blob/master/compiler/frontend/src/org/jetbrains/kotlin/resolve/BindingContext.java",children:"bindingContext"})," from the ",(0,i.jsx)(t.code,{children:"BaseRule"})," class (",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/blob/cd659ce8737fb177caf140f46f73a1a86b22be56/detekt-api/src/main/kotlin/io/gitlab/arturbosch/detekt/api/internal/BaseRule.kt#L30",children:"source"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["By default, the ",(0,i.jsx)(t.code,{children:"bindingContext"})," is initialized as ",(0,i.jsx)(t.code,{children:"BindingContext.EMPTY"}),". This is the ",(0,i.jsx)(t.strong,{children:"default value"})," that the rule receives if type resolution is ",(0,i.jsx)(t.strong,{children:"not enabled"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Therefore, is generally advised to wrap your rules with a check for an empty binding context (",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/blob/cd659ce8737fb177caf140f46f73a1a86b22be56/detekt-rules-style/src/main/kotlin/io/gitlab/arturbosch/detekt/rules/style/UseCheckNotNull.kt#L37-L39",children:"source"}),"):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"    override fun visitCallExpression(expression: KtCallExpression) {\n        super.visitCallExpression(expression)\n    \n        if (bindingContext == BindingContext.EMPTY) return\n    \n        // Rest of the rule that will run only with type resolution enabled.\n    }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.code,{children:"bindingContext"})," is not ",(0,i.jsx)(t.code,{children:"EMPTY"}),", you are free to use it to resolve types and get access to all the information needed for your rules. As a rule of thumb, we recommend to get inspiration from other rules on how they're using the ",(0,i.jsx)(t.code,{children:"bindingContext"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"testing-a-rule-that-uses-type-resolution",children:"Testing a rule that uses type resolution"}),"\n",(0,i.jsxs)(t.p,{children:["To test a rule that uses type resolution, you can use the ",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/blob/d3546ff0d539d57e7a502dacbf66e91587fff098/detekt-test/src/main/kotlin/io/gitlab/arturbosch/detekt/test/RuleExtensions.kt#L40-L44",children:(0,i.jsx)(t.code,{children:"lintWithContext"})})," and ",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/blob/cd659ce8737fb177caf140f46f73a1a86b22be56/detekt-test/src/main/kotlin/io/gitlab/arturbosch/detekt/test/RuleExtensions.kt#L63-L72",children:(0,i.jsx)(t.code,{children:"compileAndLintWithContext"})})," extension functions."]}),"\n",(0,i.jsxs)(t.p,{children:["If you're using JUnit 5 for testing, you can use the ",(0,i.jsx)(t.code,{children:"@KotlinCoreEnvironmentTest"})," annotation on your test class, and\naccept a parameter of type ",(0,i.jsx)(t.code,{children:"KotlinCoreEnvironment"})," in the class constructor. You can then access the environment by\nreferencing the parameter specified in the constructor:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'@KotlinCoreEnvironmentTest\nclass MyRuleSpec(private val env: KotlinCoreEnvironment) {\n    @Test\n    fun `reports cast that cannot succeed`() {\n        val code = """/* The code you want to test */"""\n        assertThat(MyRuleSpec().compileAndLintWithContext(env, code)).hasSize(1)\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you're using Spek for testing, you can create a ",(0,i.jsx)(t.code,{children:"setupKotlinEnvironment()"})," util function, and get access to the\n",(0,i.jsx)(t.code,{children:"KotlinCoreEnvironment"})," by simply calling ",(0,i.jsx)(t.code,{children:"val env: KotlinCoreEnvironment by memoized()"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'fun org.spekframework.spek2.dsl.Root.setupKotlinEnvironment(additionalJavaSourceRootPath: Path? = null) {\n    val wrapper by memoized(\n        CachingMode.SCOPE,\n        { createEnvironment(additionalJavaSourceRootPaths = listOfNotNull(additionalJavaSourceRootPath?.toFile())) },\n        { it.dispose() }\n    )\n\n    // `env` name is used for delegation\n    @Suppress("UNUSED_VARIABLE")\n    val env: KotlinCoreEnvironment by memoized(CachingMode.EACH_GROUP) { wrapper.env }\n}\n\nclass MyRuleTest : Spek({\n    setupKotlinEnvironment()\n\n    val env: KotlinCoreEnvironment by memoized()\n\n    it("reports cast that cannot succeed") {\n        val code = """/* The code you want to test */"""\n        assertThat(MyRuleSpec().compileAndLintWithContext(env, code)).hasSize(1)\n    }\n})\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you're using another testing framework (e.g. JUnit 4), you can use the ",(0,i.jsx)(t.a,{href:"https://github.com/detekt/detekt/blob/cd659ce8737fb177caf140f46f73a1a86b22be56/detekt-test-utils/src/main/kotlin/io/github/detekt/test/utils/KotlinCoreEnvironmentWrapper.kt#L26-L31",children:(0,i.jsx)(t.code,{children:"createEnvironment()"})})," method from ",(0,i.jsx)(t.code,{children:"detekt-test-utils"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);