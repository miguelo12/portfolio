(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{277:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(416),l=a(414),o=a(419),i=c.a.Title,m=l.a.Header,p=l.a.Content;t.default=function(){return r.a.createElement("div",null,r.a.createElement(m,null,r.a.createElement(o.a,{current:"home"})),r.a.createElement("div",{style:{padding:"25px 50px"}},r.a.createElement(p,{style:{background:"rgba(235, 235, 235, 0.88)",padding:24,minHeight:380}},r.a.createElement(i,null,"Welcome to my portfolio"),r.a.createElement("p",null,"Learn"," ",r.a.createElement("a",{href:"https://github.com/sw-yx/react-typescript-cheatsheet"},"React + TypeScript")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://twitter.com/swyx"},"Report issues with this template")))))}},419:function(e,t,a){"use strict";var n=a(32),r=a.n(n),c=a(0),l=a.n(c),o=a(74),i=a(444),m=a(15);t.a=function(e){var t=Object(c.useState)(""),a=r()(t,2),n=a[0],p=a[1];return Object(c.useEffect)((function(){p(e.current)})),l.a.createElement(i.a,{style:{lineHeight:"64px"},theme:"dark",onClick:function(e){return function(e){console.log("click ",e),p(e.key)}(e)},selectedKeys:[n],mode:"horizontal"},l.a.createElement(i.a.Item,{key:"home"},l.a.createElement(o.Link,{to:"/portfolio/"},l.a.createElement(m.a,{type:"home"}),"Home")),l.a.createElement(i.a.Item,{key:"about"},l.a.createElement(o.Link,{to:"/portfolio/about"},l.a.createElement(m.a,{type:"user"}),"Me")),l.a.createElement(i.a.Item,{key:"app"},l.a.createElement(o.Link,{to:"/portfolio/blog"},l.a.createElement(m.a,{type:"windows"}),"Pc")))}}}]);