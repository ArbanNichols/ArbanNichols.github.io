(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"o/CI":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("IUOw"),c=n("7vrA"),i=n("3Z9Z");function o(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,o)}var u=n("vYJ8"),m=n("JI6e"),s=n("xXt2");function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E=function(e){var t=e.experience,n=(f(e,["experience"]),t.tasks),l=t.location,c=t.dates,i=t.company,E=t.title,d=t.project,y=t.highlights,h=t.description,b=p(Object(r.useState)(!1),2),v=b[0],g=b[1];return a.a.createElement(m.a,{md:{span:10,offset:1}},a.a.createElement(s.a,{className:"jumbo-resume"},a.a.createElement("h4",null,i),a.a.createElement("strong",null,E),a.a.createElement("div",null,a.a.createElement("ion-icon",{name:"pin"})," ",l,a.a.createElement("em",{className:"dates"},c)),a.a.createElement("hr",null),a.a.createElement("ion-icon",{name:"sunny"}),a.a.createElement("h6",null,"Daily Tasks"),a.a.createElement("ul",null,n.map((function(e){return a.a.createElement("li",{key:o()},e)}))),a.a.createElement("div",{className:"project-highlight"},a.a.createElement("ion-icon",{name:"git-branch"}),a.a.createElement("h6",null,a.a.createElement("b",null,"Project Highlight - ")),a.a.createElement("span",{className:"project-name"},d),a.a.createElement("p",{className:"description"},a.a.createElement("em",null,h),a.a.createElement("span",{className:"dropdown-arrow","aria-controls":"project-details",onClick:function(){return g(!v)}},"▼")),a.a.createElement(u.a,{in:v},a.a.createElement("div",{id:"project-details"},a.a.createElement("ul",null,y.map((function(e){return a.a.createElement("li",{key:o()},e)}))))))))};t.default=function(e){return a.a.createElement(l.a,null,(function(e){var t=e.experiences;return a.a.createElement(c.a,null,a.a.createElement(i.a,null,t.map((function(e){return a.a.createElement(E,{key:o(),experience:e})}))))}))}}}]);