"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[2720],{47352:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"rules/formatting","title":"Formatting Rule Set","description":"This rule set provides wrappers for rules implemented by ktlint - https://ktlint.github.io/.","source":"@site/versioned_docs/version-1.21.0/rules/formatting.md","sourceDirName":"rules","slug":"/rules/formatting","permalink":"/docs/1.21.0/rules/formatting","draft":false,"unlisted":false,"editUrl":"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/rules/formatting.md","tags":[],"version":"1.21.0","frontMatter":{"title":"Formatting Rule Set","sidebar":"home_sidebar","keywords":["rules","formatting"],"permalink":"formatting.html","toc":true,"folder":"documentation"},"sidebar":"defaultSidebar","previous":{"title":"Exceptions Rule Set","permalink":"/docs/1.21.0/rules/exceptions"},"next":{"title":"Naming Rule Set","permalink":"/docs/1.21.0/rules/naming"}}');var r=i(74848),s=i(28453);const l={title:"Formatting Rule Set",sidebar:"home_sidebar",keywords:["rules","formatting"],permalink:"formatting.html",toc:!0,folder:"documentation"},d=void 0,o={},a=[{value:"AnnotationOnSeparateLine",id:"annotationonseparateline",level:3},{value:"AnnotationSpacing",id:"annotationspacing",level:3},{value:"ArgumentListWrapping",id:"argumentlistwrapping",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"BlockCommentInitialStarAlignment",id:"blockcommentinitialstaralignment",level:3},{value:"ChainWrapping",id:"chainwrapping",level:3},{value:"CommentSpacing",id:"commentspacing",level:3},{value:"CommentWrapping",id:"commentwrapping",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"DiscouragedCommentLocation",id:"discouragedcommentlocation",level:3},{value:"EnumEntryNameCase",id:"enumentrynamecase",level:3},{value:"Filename",id:"filename",level:3},{value:"FinalNewline",id:"finalnewline",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"FunKeywordSpacing",id:"funkeywordspacing",level:3},{value:"FunctionTypeReferenceSpacing",id:"functiontypereferencespacing",level:3},{value:"ImportOrdering",id:"importordering",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"Indentation",id:"indentation",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"KdocWrapping",id:"kdocwrapping",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4},{value:"MaximumLineLength",id:"maximumlinelength",level:3},{value:"Configuration options:",id:"configuration-options-6",level:4},{value:"ModifierListSpacing",id:"modifierlistspacing",level:3},{value:"ModifierOrdering",id:"modifierordering",level:3},{value:"MultiLineIfElse",id:"multilineifelse",level:3},{value:"NoBlankLineBeforeRbrace",id:"noblanklinebeforerbrace",level:3},{value:"NoConsecutiveBlankLines",id:"noconsecutiveblanklines",level:3},{value:"NoEmptyClassBody",id:"noemptyclassbody",level:3},{value:"NoEmptyFirstLineInMethodBlock",id:"noemptyfirstlineinmethodblock",level:3},{value:"NoLineBreakAfterElse",id:"nolinebreakafterelse",level:3},{value:"NoLineBreakBeforeAssignment",id:"nolinebreakbeforeassignment",level:3},{value:"NoMultipleSpaces",id:"nomultiplespaces",level:3},{value:"NoSemicolons",id:"nosemicolons",level:3},{value:"NoTrailingSpaces",id:"notrailingspaces",level:3},{value:"NoUnitReturn",id:"nounitreturn",level:3},{value:"NoUnusedImports",id:"nounusedimports",level:3},{value:"NoWildcardImports",id:"nowildcardimports",level:3},{value:"Configuration options:",id:"configuration-options-7",level:4},{value:"PackageName",id:"packagename",level:3},{value:"ParameterListWrapping",id:"parameterlistwrapping",level:3},{value:"Configuration options:",id:"configuration-options-8",level:4},{value:"SpacingAroundAngleBrackets",id:"spacingaroundanglebrackets",level:3},{value:"SpacingAroundColon",id:"spacingaroundcolon",level:3},{value:"SpacingAroundComma",id:"spacingaroundcomma",level:3},{value:"SpacingAroundCurly",id:"spacingaroundcurly",level:3},{value:"SpacingAroundDot",id:"spacingarounddot",level:3},{value:"SpacingAroundDoubleColon",id:"spacingarounddoublecolon",level:3},{value:"SpacingAroundKeyword",id:"spacingaroundkeyword",level:3},{value:"SpacingAroundOperators",id:"spacingaroundoperators",level:3},{value:"SpacingAroundParens",id:"spacingaroundparens",level:3},{value:"SpacingAroundRangeOperator",id:"spacingaroundrangeoperator",level:3},{value:"SpacingAroundUnaryOperator",id:"spacingaroundunaryoperator",level:3},{value:"SpacingBetweenDeclarationsWithAnnotations",id:"spacingbetweendeclarationswithannotations",level:3},{value:"SpacingBetweenDeclarationsWithComments",id:"spacingbetweendeclarationswithcomments",level:3},{value:"StringTemplate",id:"stringtemplate",level:3},{value:"TrailingComma",id:"trailingcomma",level:3},{value:"Configuration options:",id:"configuration-options-9",level:4},{value:"TypeArgumentListSpacing",id:"typeargumentlistspacing",level:3},{value:"UnnecessaryParenthesesBeforeTrailingLambda",id:"unnecessaryparenthesesbeforetrailinglambda",level:3},{value:"Wrapping",id:"wrapping",level:3}];function c(e){const n={a:"a",code:"code",del:"del",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This rule set provides wrappers for rules implemented by ktlint - ",(0,r.jsx)(n.a,{href:"https://ktlint.github.io/",children:"https://ktlint.github.io/"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Note: Issues reported by this rule set can only be suppressed on file level (",(0,r.jsx)(n.code,{children:'@file:Suppress("detekt.rule")'}),").\nNote: The formatting rule set is not included by default in the detekt-cli or gradle plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["To enable this rule set, add ",(0,r.jsx)(n.code,{children:'detektPlugins "io.gitlab.arturbosch.detekt:detekt-formatting:$version"'}),"\nto your gradle dependencies or reference the ",(0,r.jsx)(n.code,{children:"detekt-formatting"}),"-jar with the ",(0,r.jsx)(n.code,{children:"--plugins"})," option\nin the command line interface."]}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://github.com/detekt/detekt/blob/main/detekt-formatting/src/main/resources/config/config.yml",children:"config.yml"}),"\nfile for all ",(0,r.jsx)(n.code,{children:"detekt-formatting"})," configuration options and their default values."]}),"\n",(0,r.jsxs)(n.p,{children:["To enable\\disable a rule add the ",(0,r.jsx)(n.code,{children:"formatting:"})," section (from the above config file) to your custom detekt config file."]}),"\n",(0,r.jsx)(n.h3,{id:"annotationonseparateline",children:"AnnotationOnSeparateLine"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"annotationspacing",children:"AnnotationSpacing"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"argumentlistwrapping",children:"ArgumentListWrapping"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"indentSize"})," (default: ",(0,r.jsx)(n.code,{children:"4"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"indentation size"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"maxLineLength"})," (default: ",(0,r.jsx)(n.code,{children:"120"}),") (android default: ",(0,r.jsx)(n.code,{children:"100"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"maximum line length"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"blockcommentinitialstaralignment",children:"BlockCommentInitialStarAlignment"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"chainwrapping",children:"ChainWrapping"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"commentspacing",children:"CommentSpacing"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"commentwrapping",children:"CommentWrapping"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-1",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"indentSize"})," (default: ",(0,r.jsx)(n.code,{children:"4"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"indentation size"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"discouragedcommentlocation",children:"DiscouragedCommentLocation"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"enumentrynamecase",children:"EnumEntryNameCase"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"filename",children:"Filename"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["This rules overlaps with ",(0,r.jsx)(n.a,{href:"https://detekt.dev/docs/rules/naming/#matchingdeclarationname",children:"naming>MatchingDeclarationName"}),"\nfrom the standard rules, make sure to enable just one."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"finalnewline",children:"FinalNewline"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["This rules overlaps with ",(0,r.jsx)(n.a,{href:"https://detekt.dev/docs/rules/style/#newlineatendoffile",children:"style>NewLineAtEndOfFile"}),"\nfrom the standard rules, make sure to enable just one. The pro of this rule is that it can auto-correct the issue."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-2",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"insertFinalNewLine"})," (default: ",(0,r.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"report absence or presence of a newline"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"funkeywordspacing",children:"FunKeywordSpacing"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"functiontypereferencespacing",children:"FunctionTypeReferenceSpacing"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"importordering",children:"ImportOrdering"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["For defining import layout patterns see the ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint/blob/0.50.0/ktlint-ruleset-standard/src/main/kotlin/com/pinterest/ktlint/ruleset/standard/rules/ImportOrderingRule.kt",children:"KtLint Source Code"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.19.0"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-3",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"layout"})," (default: ",(0,r.jsx)(n.code,{children:"'*,java.**,javax.**,kotlin.**,^'"}),") (android default: ",(0,r.jsx)(n.code,{children:"'*'"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"the import ordering layout"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"indentation",children:"Indentation"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.19.0"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-4",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"indentSize"})," (default: ",(0,r.jsx)(n.code,{children:"4"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"indentation size"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.del,{children:(0,r.jsx)(n.code,{children:"continuationIndentSize"})})," (default: ",(0,r.jsx)(n.code,{children:"4"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deprecated"}),": ",(0,r.jsx)(n.code,{children:"continuationIndentSize"})," is ignored by KtLint and will have no effect"]}),"\n",(0,r.jsx)(n.p,{children:"continuation indentation size"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"kdocwrapping",children:"KdocWrapping"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-5",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"indentSize"})," (default: ",(0,r.jsx)(n.code,{children:"4"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"indentation size"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"maximumlinelength",children:"MaximumLineLength"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["This rules overlaps with ",(0,r.jsx)(n.a,{href:"https://detekt.dev/docs/rules/style/#maxlinelength",children:"style>MaxLineLength"}),"\nfrom the standard rules, make sure to enable just one or keep them aligned. The pro of this rule is that it can\nauto-correct the issue."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-6",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"maxLineLength"})," (default: ",(0,r.jsx)(n.code,{children:"120"}),") (android default: ",(0,r.jsx)(n.code,{children:"100"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"maximum line length"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ignoreBackTickedIdentifier"})," (default: ",(0,r.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"ignore back ticked identifier"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"modifierlistspacing",children:"ModifierListSpacing"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"modifierordering",children:"ModifierOrdering"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["This rules overlaps with ",(0,r.jsx)(n.a,{href:"https://detekt.dev/docs/rules/style/#modifierorder",children:"style>ModifierOrder"}),"\nfrom the standard rules, make sure to enable just one. The pro of this rule is that it can auto-correct the issue."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"multilineifelse",children:"MultiLineIfElse"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"noblanklinebeforerbrace",children:"NoBlankLineBeforeRbrace"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"noconsecutiveblanklines",children:"NoConsecutiveBlankLines"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"noemptyclassbody",children:"NoEmptyClassBody"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["This rules overlaps with ",(0,r.jsx)(n.a,{href:"https://detekt.dev/docs/rules/empty-blocks/#emptyclassblock",children:"empty-blocks>EmptyClassBlock"}),"\nfrom the standard rules, make sure to enable just one. The pro of this rule is that it can auto-correct the issue."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"noemptyfirstlineinmethodblock",children:"NoEmptyFirstLineInMethodBlock"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"nolinebreakafterelse",children:"NoLineBreakAfterElse"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"nolinebreakbeforeassignment",children:"NoLineBreakBeforeAssignment"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"nomultiplespaces",children:"NoMultipleSpaces"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"nosemicolons",children:"NoSemicolons"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"notrailingspaces",children:"NoTrailingSpaces"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"nounitreturn",children:"NoUnitReturn"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"nounusedimports",children:"NoUnusedImports"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"nowildcardimports",children:"NoWildcardImports"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-7",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"packagesToUseImportOnDemandProperty"})," (default: ",(0,r.jsx)(n.code,{children:"'java.util.*,kotlinx.android.synthetic.**'"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Defines allowed wildcard imports"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"packagename",children:"PackageName"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"parameterlistwrapping",children:"ParameterListWrapping"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-8",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"maxLineLength"})," (default: ",(0,r.jsx)(n.code,{children:"120"}),") (android default: ",(0,r.jsx)(n.code,{children:"100"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"maximum line length"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.del,{children:(0,r.jsx)(n.code,{children:"indentSize"})})," (default: ",(0,r.jsx)(n.code,{children:"4"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deprecated"}),": ",(0,r.jsx)(n.code,{children:"indentSize"})," is ignored by KtLint and will have no effect"]}),"\n",(0,r.jsx)(n.p,{children:"indentation size"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundanglebrackets",children:"SpacingAroundAngleBrackets"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundcolon",children:"SpacingAroundColon"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundcomma",children:"SpacingAroundComma"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundcurly",children:"SpacingAroundCurly"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingarounddot",children:"SpacingAroundDot"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingarounddoublecolon",children:"SpacingAroundDoubleColon"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundkeyword",children:"SpacingAroundKeyword"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundoperators",children:"SpacingAroundOperators"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundparens",children:"SpacingAroundParens"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundrangeoperator",children:"SpacingAroundRangeOperator"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingaroundunaryoperator",children:"SpacingAroundUnaryOperator"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingbetweendeclarationswithannotations",children:"SpacingBetweenDeclarationsWithAnnotations"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"spacingbetweendeclarationswithcomments",children:"SpacingBetweenDeclarationsWithComments"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#spacing",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"stringtemplate",children:"StringTemplate"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,r.jsx)(n.h3,{id:"trailingcomma",children:"TrailingComma"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options-9",children:"Configuration options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"allowTrailingComma"})," (default: ",(0,r.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Defines whether a trailing comma (or no trailing comma) should be enforced on the defining side"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"allowTrailingCommaOnCallSite"})," (default: ",(0,r.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Defines whether a trailing comma (or no trailing comma) should be enforced on the calling side"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"typeargumentlistspacing",children:"TypeArgumentListSpacing"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"unnecessaryparenthesesbeforetrailinglambda",children:"UnnecessaryParenthesesBeforeTrailingLambda"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#experimental-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,r.jsx)(n.h3,{id:"wrapping",children:"Wrapping"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/pinterest/ktlint#standard-rules",children:"ktlint-readme"})," for documentation."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.20.0"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);