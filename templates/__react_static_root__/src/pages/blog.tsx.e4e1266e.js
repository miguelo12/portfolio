(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(61),c=a(76),o=a(268),i=a(270),m=a(301),u=a(302),E=a(304),p=a(274),s=o.a.Header,d=o.a.Content,k=i.a.Title;t.default=function(){var e=Object(r.useRouteData)().posts;return l.a.createElement("div",null,l.a.createElement(s,null,l.a.createElement(p.a,{current:"app"})),l.a.createElement("div",{style:{padding:"25px 15px"}},l.a.createElement(d,{style:{background:"rgba(235, 235, 235, 0.88)",padding:24,minHeight:50}},l.a.createElement(m.a,null,l.a.createElement(m.a.Item,null,l.a.createElement(c.Link,{to:"/portfolio/"},l.a.createElement(u.a,null))),l.a.createElement(m.a.Item,null,l.a.createElement(E.a,null),l.a.createElement("span",null,"App"))))),l.a.createElement("div",{style:{padding:"0 15px 25px"}},l.a.createElement(d,{style:{background:"rgba(235, 235, 235, 0.88)",padding:24,minHeight:380}},l.a.createElement(k,null,"It's blog time."),l.a.createElement("br",null),"All Posts:",l.a.createElement("ul",null,e.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(c.Link,{to:"/portfolio/blog/post/".concat(e.id,"/")},e.title))}))))))}},274:function(e,t,a){"use strict";var n=a(20),l=a.n(n),r=a(0),c=a.n(r),o=a(76),i=a(293),m=a(302),u=a(303),E=a(304);t.a=function(e){var t=Object(r.useState)(""),a=l()(t,2),n=a[0],p=a[1];return Object(r.useEffect)((function(){p(e.current)})),c.a.createElement(i.a,{style:{lineHeight:"64px"},theme:"dark",onClick:function(e){return function(e){console.log("click ",e),p(e.key)}(e)},selectedKeys:[n],mode:"horizontal"},c.a.createElement(i.a.Item,{key:"home"},c.a.createElement(o.Link,{to:"/portfolio/"},c.a.createElement(m.a,null),"Home")),c.a.createElement(i.a.Item,{key:"about"},c.a.createElement(o.Link,{to:"/portfolio/about"},c.a.createElement(u.a,null),"Me")),c.a.createElement(i.a.Item,{key:"app"},c.a.createElement(o.Link,{to:"/portfolio/blog"},c.a.createElement(E.a,null),"Pc")))}}}]);