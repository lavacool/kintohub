(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(9),o=(n(0),n(215)),b={id:"ruby-example",title:"Ruby"},l={id:"examples/ruby/ruby-example",isDocsHomePage:!1,title:"Ruby",description:"A sample ruby app for KintoHub",source:"@site/docs/examples/ruby/README.md",permalink:"/examples/ruby/ruby-example",sidebar:"someSidebar",previous:{title:"Beego",permalink:"/examples/beego/beego-example"},next:{title:"Django",permalink:"/examples/django/django-example"}},c=[{value:"\ud83d\ude80 Deploying on KintoHub",id:"-deploying-on-kintohub",children:[]},{value:"\ud83d\udd28 Running locally",id:"-running-locally",children:[]},{value:"\ud83d\ude91 Support",id:"-support",children:[]}],p={rightToc:c};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A sample ruby app for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://kintohub.com"}),"KintoHub")),Object(o.b)("h2",{id:"-deploying-on-kintohub"},"\ud83d\ude80 Deploying on KintoHub"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Service Type:")," Web App"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Repo:")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub-examples/ruby"}),"https://github.com/kintohub-examples/ruby")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Branch:")," master"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Language:")," Ruby"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Language version:")," 2.5"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Build Command:")," ",Object(o.b)("inlineCode",{parentName:"li"},"gem install bundler && bundle install")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Start Command:")," ",Object(o.b)("inlineCode",{parentName:"li"},"bundle exec ruby app.rb")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Port:")," 8000")),Object(o.b)("h2",{id:"-running-locally"},"\ud83d\udd28 Running locally"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pre-requisites:")," Ruby v2.5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clone the repository to a folder of choice.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ git clone https://github.com/kintohub-examples/ruby\n\n$ cd ruby\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install the dependencies")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ gem install bundler && bundle install\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To start the app")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ bundle exec ruby app.rb\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Default port 8000 (port can be set by setting PORT env variable)")),Object(o.b)("h2",{id:"-support"},"\ud83d\ude91 Support"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Contact us:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"https://www.kintohub.com/contact-us")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discord:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://kintohub.com/discord"}),"https://kintohub.com/discord")))}i.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),s=r,O=u["".concat(b,".").concat(s)]||u[s]||m[s]||o;return n?a.a.createElement(O,l(l({ref:t},p),{},{components:n})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,b=new Array(o);b[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var p=2;p<o;p++)b[p]=n[p];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);