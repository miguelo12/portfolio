(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(61),r=a(270),o=a(268),i=a(274),m=r.a.Title,u=r.a.Link,E=o.a.Header,s=o.a.Content;Object(c.addPrefetchExcludes)([/c/]),t.default=function(){var e=Object(c.useRouteData)().linktecnology;return l.a.createElement("div",null,l.a.createElement(E,null,l.a.createElement(i.a,{current:"home"})),l.a.createElement("div",{style:{padding:"25px 15px"}},l.a.createElement(s,{style:{background:"rgba(235, 235, 235, 0.88)",padding:24,minHeight:380}},l.a.createElement(m,{style:{textAlign:"center"}},"Welcome to my portfolio"),l.a.createElement(m,{level:3},"This proyect contains:"),l.a.createElement("ul",null,e.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(u,{href:e.url},e.name))}))))))}},274:function(e,t,a){"use strict";var n=a(20),l=a.n(n),c=a(0),r=a.n(c),o=a(76),i=a(293),m=a(302),u=a(303),E=a(304);t.a=function(e){var t=Object(c.useState)(""),a=l()(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){s(e.current)})),r.a.createElement(i.a,{style:{lineHeight:"64px"},theme:"dark",onClick:function(e){return function(e){console.log("click ",e),s(e.key)}(e)},selectedKeys:[n],mode:"horizontal"},r.a.createElement(i.a.Item,{key:"home"},r.a.createElement(o.Link,{to:"/portfolio/"},r.a.createElement(m.a,null),"Home")),r.a.createElement(i.a.Item,{key:"about"},r.a.createElement(o.Link,{to:"/portfolio/about"},r.a.createElement(u.a,null),"Me")),r.a.createElement(i.a.Item,{key:"app"},r.a.createElement(o.Link,{to:"/portfolio/blog"},r.a.createElement(E.a,null),"Pc")))}}}]);