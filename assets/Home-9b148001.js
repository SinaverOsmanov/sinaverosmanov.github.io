import{u as H,j as m}from"./index-ea29f043.js";import{r as h,b as W}from"./react-e7981c99.js";import{L as J,d as V,m as X}from"./features-animation-c0709c06.js";function B(n,r,a,t){return new(a||(a=Promise))(function(e,o){function s(f){try{l(t.next(f))}catch(i){o(i)}}function c(f){try{l(t.throw(f))}catch(i){o(i)}}function l(f){var i;f.done?e(f.value):(i=f.value,i instanceof a?i:new a(function(p){p(i)})).then(s,c)}l((t=t.apply(n,r||[])).next())})}function k(n,r){var a,t,e,o,s={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(l){return function(f){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,t&&(e=2&i[0]?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,t=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(e=s.trys,!((e=e.length>0&&e[e.length-1])||i[0]!==6&&i[0]!==2)){s=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){s.label=i[1];break}if(i[0]===6&&s.label<e[1]){s.label=e[1],e=i;break}if(e&&s.label<e[2]){s.label=e[2],s.ops.push(i);break}e[2]&&s.ops.pop(),s.trys.pop();continue}i=r.call(n,s)}catch(p){i=[6,p],t=0}finally{a=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([l,f])}}}function K(n){var r=typeof Symbol=="function"&&Symbol.iterator,a=r&&n[r],t=0;if(a)return a.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(n,r){var a=typeof Symbol=="function"&&n[Symbol.iterator];if(!a)return n;var t,e,o=a.call(n),s=[];try{for(;(r===void 0||r-- >0)&&!(t=o.next()).done;)s.push(t.value)}catch(c){e={error:c}}finally{try{t&&!t.done&&(a=o.return)&&a.call(o)}finally{if(e)throw e.error}}return s}function A(n,r,a){if(a||arguments.length===2)for(var t,e=0,o=r.length;e<o;e++)!t&&e in r||(t||(t=Array.prototype.slice.call(r,0,e)),t[e]=r[e]);return n.concat(t||Array.prototype.slice.call(r))}function z(n,r,a,t){for(var e=[],o=4;o<arguments.length;o++)e[o-4]=arguments[o];return B(this,void 0,void 0,function(){var s,c,l,f,i,p;return k(this,function(d){switch(d.label){case 0:d.trys.push([0,12,13,14]),s=K(e),c=s.next(),d.label=1;case 1:if(c.done)return[3,11];switch(l=c.value,typeof l){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,Y(n,l,r,a,t)];case 3:return d.sent(),[3,10];case 4:return[4,U(l)];case 5:return d.sent(),[3,10];case 6:return[4,l.apply(void 0,A([n,r,a,t],g(e),!1))];case 7:return d.sent(),[3,10];case 8:return[4,l];case 9:d.sent(),d.label=10;case 10:return c=s.next(),[3,1];case 11:return[3,14];case 12:return f=d.sent(),i={error:f},[3,14];case 13:try{c&&!c.done&&(p=s.return)&&p.call(s)}finally{if(i)throw i.error}return[7];case 14:return[2]}})})}function Y(n,r,a,t,e){return B(this,void 0,void 0,function(){var o;return k(this,function(s){switch(s.label){case 0:return o=function(c,l){var f=g(l).slice(0);return A(A([],g(c),!1),[NaN],!1).findIndex(function(i,p){return f[p]!==i})}(n.textContent,r),[4,Z(n,A(A([],g(ne(n.textContent,o)),!1),g(ee(r,o)),!1),a,t,e)];case 1:return s.sent(),[2]}})})}function U(n){return B(this,void 0,void 0,function(){return k(this,function(r){switch(r.label){case 0:return[4,new Promise(function(a){return setTimeout(a,n)})];case 1:return r.sent(),[2]}})})}function Z(n,r,a,t,e){return B(this,void 0,void 0,function(){var o,s,c,l,f,i,p,d,O,P,q,D,G;return k(this,function(b){switch(b.label){case 0:if(o=r,e){for(s=0,c=1;c<r.length;c++)if(l=g([r[c-1],r[c]],2),f=l[0],(i=l[1]).length>f.length||i===""){s=c;break}o=r.slice(s,r.length)}b.label=1;case 1:b.trys.push([1,6,7,8]),p=K(function(L){var S,E,w,R,_,C,M;return k(this,function(j){switch(j.label){case 0:S=function(F){return k(this,function(T){switch(T.label){case 0:return[4,{op:function(I){return requestAnimationFrame(function(){return I.textContent=F})},opCode:function(I){return F===""||I.textContent.length>F.length?"DELETE":"WRITING"}}];case 1:return T.sent(),[2]}})},j.label=1;case 1:j.trys.push([1,6,7,8]),E=K(L),w=E.next(),j.label=2;case 2:return w.done?[3,5]:(R=w.value,[5,S(R)]);case 3:j.sent(),j.label=4;case 4:return w=E.next(),[3,2];case 5:return[3,8];case 6:return _=j.sent(),C={error:_},[3,8];case 7:try{w&&!w.done&&(M=E.return)&&M.call(E)}finally{if(C)throw C.error}return[7];case 8:return[2]}})}(o)),d=p.next(),b.label=2;case 2:return d.done?[3,5]:(O=d.value,P=O.opCode(n)==="WRITING"?a+a*(Math.random()-.5):t+t*(Math.random()-.5),O.op(n),[4,U(P)]);case 3:b.sent(),b.label=4;case 4:return d=p.next(),[3,2];case 5:return[3,8];case 6:return q=b.sent(),D={error:q},[3,8];case 7:try{d&&!d.done&&(G=p.return)&&G.call(p)}finally{if(D)throw D.error}return[7];case 8:return[2]}})})}function ee(n,r,a){var t=g(n).slice(0);return r===void 0&&(r=0),a===void 0&&(a=t.length),k(this,function(e){switch(e.label){case 0:return r<a?[4,t.slice(0,++r).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}function ne(n,r,a){var t=g(n).slice(0);return r===void 0&&(r=0),a===void 0&&(a=t.length),k(this,function(e){switch(e.label){case 0:return a>r?[4,t.slice(0,--a).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}var te="index-module_type__E-SaG";(function(n,r){r===void 0&&(r={});var a=r.insertAt;if(n&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var re=h.memo(h.forwardRef(function(n,r){var a=n.sequence,t=n.repeat,e=n.className,o=n.speed,s=o===void 0?40:o,c=n.deletionSpeed,l=n.omitDeletionAnimation,f=l!==void 0&&l,i=n.preRenderFirstString,p=i!==void 0&&i,d=n.wrapper,O=d===void 0?"span":d,P=n.cursor,q=P===void 0||P,D=n.style,G=function(u,y){var x={};for(var v in u)Object.prototype.hasOwnProperty.call(u,v)&&y.indexOf(v)<0&&(x[v]=u[v]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var N=0;for(v=Object.getOwnPropertySymbols(u);N<v.length;N++)y.indexOf(v[N])<0&&Object.prototype.propertyIsEnumerable.call(u,v[N])&&(x[v[N]]=u[v[N]])}return x}(n,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","cursor","style"]),b=G["aria-label"],L=G["aria-hidden"];c||(c=s);var S=new Array(2).fill(40);[s,c].forEach(function(u,y){switch(typeof u){case"number":S[y]=Math.abs(u-100);break;case"object":var x=u,v=x.type,N=x.value;if(typeof N!="number")break;v==="keyStrokeDelayInMs"&&(S[y]=N)}});var E,w,R,_,C,M,j=S[0],F=S[1],T=function(u,y){y===void 0&&(y=null);var x=h.useRef(y);return h.useEffect(function(){u&&(typeof u=="function"?u(x.current):u.current=x.current)},[u]),x}(r),I=te;E=e?"".concat(q?I+" ":"").concat(e):q?I:"",w=h.useRef(function(){var u,y=a;return t===1/0?u=z:typeof t=="number"&&(y=Array(1+t).fill(a).flat()),z.apply(void 0,A(A([T.current,j,F,f],g(y),!1),[u],!1)),function(){T.current}}),R=h.useRef(),_=h.useRef(!1),C=h.useRef(!1),M=g(h.useState(0),2)[1],_.current&&(C.current=!0),h.useEffect(function(){return _.current||(R.current=w.current(),_.current=!0),M(function(u){return u+1}),function(){C.current&&R.current&&R.current()}},[]);var $=O,Q=p?a.find(function(u){return typeof u=="string"})||"":null;return W.createElement($,{"aria-hidden":L,"aria-label":b,style:D,className:E,children:b?W.createElement("span",{"aria-hidden":"true",ref:T,children:Q}):Q,ref:b?void 0:T})}),function(n,r){return!0});const ie=h.memo(function({sequence:n,speed:r,repeat:a}){const{i18n:{language:t}}=H(),[e,o]=h.useState(()=>Date.now());return h.useEffect(()=>{o(Date.now())},[t]),m.jsx(re,{sequence:n,wrapper:"span",speed:r,className:"ml-2",repeat:a},e)});function ce(){const{t:n}=H();return m.jsx(J,{features:V,children:m.jsx(X.section,{initial:{x:"100vw"},animate:{x:"0"},transition:{duration:1,bounce:!1,type:"spring",damping:15,stiffness:70},className:"home active section",id:"home",children:m.jsx("div",{className:"container ls:pt-52 max-ls:py-16",children:m.jsxs("div",{className:"flex flex-row flex-wrap",children:[m.jsxs("div",{className:"flex-col basis-7/12 max-lg:basis-auto max-lg:mb-10 home-info",children:[m.jsxs("h3",{className:"hello",children:[n("home-page.title"),m.jsx("span",{className:"name sl:ml-2 max-sl:block",children:n("name")})]}),m.jsxs("h3",{className:"my-profession max-sl:h-20 mb-5",children:[n("home-page.profession.I-m"),m.jsx(ie,{sequence:[n("home-page.profession.list.item1"),1e3,n("home-page.profession.list.item2"),1e3],speed:50,repeat:1/0})]}),m.jsx("p",{children:n("home-page.description")}),m.jsx("button",{className:"btn",onClick:()=>window.location.href="https://www.linkedin.com/in/sinaver-osmanov/",children:n("home-page.linkedIn-button")})]}),m.jsx("div",{className:"pl-10 flex-col max-lg:basis-full basis-5/12 flex items-center justify-center",children:m.jsx("div",{className:"max-w-[300px] max-lg:after:hidden max-lg:before:hidden home-img",children:m.jsx("img",{src:"./assets/avatar.png",alt:"hero"})})})]})})})})}export{ce as default};
//# sourceMappingURL=Home-9b148001.js.map