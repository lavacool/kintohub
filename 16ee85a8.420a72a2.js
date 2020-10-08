(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(9),o=(t(0),t(215)),c={id:"backend-worker",title:"Backend Worker"},i={id:"service-types/backend-worker",isDocsHomePage:!1,title:"Backend Worker",description:"KintoHub can host backend workers which are services that run continuously and do not expose any port.",source:"@site/docs/service-types/types-backend-worker.md",permalink:"/service-types/backend-worker",sidebar:"someSidebar",previous:{title:"Backend API",permalink:"/service-types/backend-api"},next:{title:"Job",permalink:"/service-types/job"}},s=[{value:"When to use a backend worker service?",id:"when-to-use-a-backend-worker-service",children:[]},{value:"Backend worker features",id:"backend-worker-features",children:[]}],u={rightToc:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"KintoHub can host backend workers which are services that run continuously and do not expose any port.\nUsually backend workers are used to consume messages or process events from queues such as Redis, Kafka or RabbitMQ.\nSidekiq and Celery are often used as a backend worker service."),Object(o.b)("h2",{id:"when-to-use-a-backend-worker-service"},"When to use a backend worker service?"),Object(o.b)("p",null,"If your app does not have any public API endpoints and needs to run continuously, you should consider using a backend worker."),Object(o.b)("h2",{id:"backend-worker-features"},"Backend worker features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Advance ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/anatomy/build-settings"}),"Build")," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/anatomy/deploy"}),"Deploy")," Settings",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"1st Class Languages Build and Deploy support"),Object(o.b)("li",{parentName:"ul"},"Single and Multi-Stage Dockerfile Build and Deploy support"),Object(o.b)("li",{parentName:"ul"},"Auto scaling"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/anatomy/metrics"}),"Metrics")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/anatomy/environment-variables"}),"Environment Variables"))))}l.isMDXComponent=!0},215:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(f,i(i({ref:r},u),{},{components:t})):a.a.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);