!function(e){function t(t){for(var r,l,c=t[0],i=t[1],u=t[2],m=0,f=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={0:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;o.push([186,1]),n()}({183:function(e,t,n){e.exports=n.p+"49f2daeab0f607d4c4b2b2a7c7ae20d4.jpg"},186:function(e,t,n){n(187),n(188),e.exports=n(405)},404:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(41),l=n.n(o),c=n(76),i=n(48),u=n(413),s=n(415),m=n(414),f=n(96),p=n(407),d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a.Header,null,a.a.createElement(u.a.Title,null,"Contact Form")),a.a.createElement(u.a.Body,null,"WIP"),a.a.createElement(u.a.Footer,null,a.a.createElement(p.a,{variant:"dark"},"Send")))},y=n(417),b=n(416);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(e){var t,n,o,l=e.words,c=l.length,i=h(Object(r.useState)(0),2),u=i[0],s=i[1];return t=function(){s(u=Math.floor(Math.random()*c))},n=3e3,o=Object(r.useRef)(),Object(r.useEffect)((function(){o.current=t}),[t]),Object(r.useEffect)((function(){if(null!==n){var e=setInterval((function(){o.current()}),n);return function(){return clearInterval(e)}}}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(y.a,null,a.a.createElement(b.a,{key:l[u],classNames:"carousel",timeout:{enter:500,exit:.5}},a.a.createElement("span",null,l[u]))))},v=["react v16.8.3","react-bootstrap v1.0.0-beta.5","react-router-dom v4.3.1","webpack v4.29.6","babel/core v7.3.4","react-transition-group v4.0.0","react-hooks","sass","npm","nodejs","ecmascript 2016"];function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(){var e=g(Object(r.useState)(!1),2),t=e[0],n=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{show:t,onHide:function(){n(!t)}},a.a.createElement(d,null)),a.a.createElement(s.a,{bg:"dark",expand:"lg",variant:"dark",fixed:"top"},a.a.createElement(f.LinkContainer,{to:"/",exact:!0},a.a.createElement(s.a.Brand,null,"Arban Nichols ")),a.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(s.a.Collapse,null,a.a.createElement(m.a,{className:"mr-auto"},a.a.createElement(f.LinkContainer,{to:"/",exact:!0},a.a.createElement(m.a.Link,null,"Home")),a.a.createElement(f.LinkContainer,{to:"/resume",exact:!0},a.a.createElement(m.a.Link,null,"Resume"))),a.a.createElement(m.a,{className:"ml-auto"},a.a.createElement(m.a.Link,{href:"https://github.com/ArbanNichols/react-resume"},a.a.createElement(E,{words:v}))))))},j=n(409),O=n(410),k=n(411),x=n(412),S=function(){return a.a.createElement("div",{className:"coverletter"},a.a.createElement("h1",null,"~$ whoami",a.a.createElement("span",{className:"cursor"},"▍")),a.a.createElement("strong",null,"TLDR; "),a.a.createElement("span",null,"Veteran Air Force Electrician retrained to provide you websites and web applications."),a.a.createElement("p",null,"Nice to make your acquaintance! I am a former aircraft environmental and electrical tehcnicain for the Air Force who used the GI Bill to gain a B.Sc. in Computer Science. During my undergraduate studies I performed research under network science study grants aimed at creating Android applications optimized for delay laden networks. After my graduation from York College in 2016, I worked as an embedded software engineer on RTOS such as INTEGRITY and VxWorks. Afterwards I found enjoyment and passion in creating UI using React.Js and web servers with NodeJs. Wow, so early into my career but I have used so many different technologies! Currently, I am continuing down the road of web development and engineering so as to become a strong full-stack software engineer."))},A=n(408),N=n(183),P=n.n(N),I=function(){return a.a.createElement("div",{className:"headshot"},a.a.createElement(A.a,{src:P.a,rounded:!0}),a.a.createElement("p",null,"arban.nichs@gmail.com",a.a.createElement("ion-icon",{name:"copy",onClick:function(){navigator.clipboard.writeText("arban.nichs@gmail.com").then((function(){console.log("Email copied to clipboard")})).catch((function(){console.log("Failed to copy email.")}))}})),a.a.createElement("div",{className:"links"},a.a.createElement("a",{href:"https://linkedin.com/in/arban-nichols",target:"_blank"},a.a.createElement("ion-icon",{name:"logo-linkedin"})),a.a.createElement("a",{href:"https://github.com/ArbanNichols",target:"_blank"},a.a.createElement("ion-icon",{name:"logo-github"}))))},C=function(){return a.a.createElement(j.a,null,a.a.createElement(O.a,null,a.a.createElement(k.a,null,a.a.createElement(x.a,{className:"jumbo-cv"},a.a.createElement(O.a,null,a.a.createElement(k.a,{xs:12,sm:12,md:4,lg:3},a.a.createElement(I,null)),a.a.createElement(k.a,{xs:12,sm:12,md:8,lg:8},a.a.createElement(S,null)))))))},T=n(98);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e,t,n,r,a,o,l){try{var c=e[o](l),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=a.a.createContext(),J=T.c.initializeDefaultAppClient("react-resume-cptng"),W=function(e){function t(){var e,n,r,a,o,l,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=this,n=!(a=(e=L(t)).call.apply(e,[this].concat(u)))||"object"!==_(a)&&"function"!=typeof a?B(r):a,o=B(n),c={experiences:[]},(l="state")in o?Object.defineProperty(o,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[l]=c,n}var n,r,o,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(l=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.auth.loginWithCredential(new T.a);case 3:return t=J.getServiceClient(T.b.factory,"resume-server").db("resume"),e.next=6,t.collection("experience").find().asArray();case 6:n=e.sent,this.setState({experiences:R(n)}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})),c=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=l.apply(e,t);function o(e){F(a,n,r,o,c,"next",e)}function c(e){F(a,n,r,o,c,"throw",e)}o(void 0)}))},function(){return c.apply(this,arguments)})},{key:"render",value:function(){return a.a.createElement(H.Provider,{value:this.state},this.props.children)}}])&&M(n.prototype,r),o&&M(n,o),t}(r.Component),z=H.Consumer;function G(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,G)}var V=n(93);function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var U=function(e){var t=e.experience,n=(q(e,["experience"]),t.tasks),o=t.location,l=t.dates,c=t.company,i=t.title,u=t.project,s=t.highlights,m=t.description,f=Y(Object(r.useState)(!1),2),p=f[0],d=f[1];return a.a.createElement(k.a,{md:{span:10,offset:1}},a.a.createElement(x.a,{className:"jumbo-resume"},a.a.createElement("h4",null,c),a.a.createElement("strong",null,i),a.a.createElement("div",null,a.a.createElement("ion-icon",{name:"pin"})," ",o,a.a.createElement("em",{className:"dates"},l)),a.a.createElement("hr",null),a.a.createElement("ion-icon",{name:"sunny"}),a.a.createElement("h6",null,"Daily Tasks"),a.a.createElement("ul",null,n.map((function(e){return a.a.createElement("li",{key:G()},e)}))),a.a.createElement("div",{className:"project-highlight"},a.a.createElement("ion-icon",{name:"git-branch"}),a.a.createElement("h6",null,a.a.createElement("b",null,"Project Highlight - ")),a.a.createElement("span",{className:"project-name"},u),a.a.createElement("p",{className:"description"},a.a.createElement("em",null,m),a.a.createElement("span",{className:"dropdown-arrow","aria-controls":"project-details",onClick:function(){return d(!p)}},"▼")),a.a.createElement(V.a,{in:p},a.a.createElement("div",{id:"project-details"},a.a.createElement("ul",null,s.map((function(e){return a.a.createElement("li",{key:G()},e)}))))))))},$=function(e){return a.a.createElement(W,null,a.a.createElement(z,null,(function(e){var t=e.experiences;return a.a.createElement(j.a,null,a.a.createElement(O.a,null,t.map((function(e){return a.a.createElement(U,{key:G(),experience:e})}))))})))},K=(n(404),function(){return a.a.createElement("div",null,a.a.createElement(w,null),a.a.createElement(i.g,null,a.a.createElement(i.d,{exact:!0,path:"/",render:function(e){return a.a.createElement(C,e)}}),a.a.createElement(i.d,{exact:!0,path:"/resume",render:function(e){return a.a.createElement($,e)}})))});l.a.render(a.a.createElement(c.BrowserRouter,null,a.a.createElement(K,null)),document.getElementById("root"))}});