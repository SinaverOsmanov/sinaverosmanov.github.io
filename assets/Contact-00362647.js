import{u as tt,j as m}from"./index-58bdee3c.js";import{b as J,r as xt}from"./react-e7981c99.js";import{r as de}from"./redirectToExternalLink-1ac192dc.js";import{L as pt,d as _t,m as bt}from"./features-animation-7c371067.js";const oe={_origin:"https://api.emailjs.com"},wt=(e,s="https://api.emailjs.com")=>{oe._userID=e,oe._origin=s},rt=(e,s,i)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class $e{constructor(s){this.status=s?s.status:0,this.text=s?s.responseText:"Network Error"}}const st=(e,s,i={})=>new Promise((r,o)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:u})=>{const p=new $e(u);p.status===200||p.text==="OK"?r(p):o(p)}),l.addEventListener("error",({target:u})=>{o(new $e(u))}),l.open("POST",oe._origin+e,!0),Object.keys(i).forEach(u=>{l.setRequestHeader(u,i[u])}),l.send(s)}),Vt=(e,s,i,r)=>{const o=r||oe._userID;return rt(o,e,s),st("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:s,template_params:i}),{"Content-type":"application/json"})},At=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},Ft=(e,s,i,r)=>{const o=r||oe._userID,l=At(i);rt(o,e,s);const u=new FormData(l);return u.append("lib_version","3.11.0"),u.append("service_id",e),u.append("template_id",s),u.append("user_id",o),st("/api/v1.0/email/send-form",u)},Dt={init:wt,send:Vt,sendForm:Ft};var ce=e=>e.type==="checkbox",se=e=>e instanceof Date,E=e=>e==null;const it=e=>typeof e=="object";var k=e=>!E(e)&&!Array.isArray(e)&&it(e)&&!se(e),Nt=e=>k(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,kt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,St=(e,s)=>e.has(kt(s)),jt=e=>{const s=e.constructor&&e.constructor.prototype;return k(s)&&s.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ee&&(e instanceof Blob||e instanceof FileList))&&(i||k(e)))if(s=i?[]:{},!i&&!jt(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=$(e[r]));else return e;return s}var ue=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,d=(e,s,i)=>{if(!s||!k(e))return i;const r=ue(s.split(/[,[\].]+?/)).reduce((o,l)=>E(o)?o:o[l],e);return D(r)||r===e?D(e[s])?i:e[s]:r};const Ke={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},U={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};J.createContext(null);var Et=(e,s,i,r=!0)=>{const o={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(o,l,{get:()=>{const u=l;return s._proxyFormState[u]!==U.all&&(s._proxyFormState[u]=!r||U.all),i&&(i[u]=!0),e[u]}});return o},M=e=>k(e)&&!Object.keys(e).length,Ot=(e,s,i,r)=>{i(e);const{name:o,...l}=e;return M(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(u=>s[u]===(!r||U.all))},Fe=e=>Array.isArray(e)?e:[e];function Tt(e){const s=J.useRef(e);s.current=e,J.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var q=e=>typeof e=="string",Lt=(e,s,i,r,o)=>q(e)?(r&&s.watch.add(e),d(i,e,o)):Array.isArray(e)?e.map(l=>(r&&s.watch.add(l),d(i,l))):(r&&(s.watchAll=!0),i),Oe=e=>/^\w*$/.test(e),nt=e=>ue(e.replace(/["|']|\]/g,"").split(/\.|\[/));function w(e,s,i){let r=-1;const o=Oe(s)?[s]:nt(s),l=o.length,u=l-1;for(;++r<l;){const p=o[r];let b=i;if(r!==u){const T=e[p];b=k(T)||Array.isArray(T)?T:isNaN(+o[r+1])?{}:[]}e[p]=b,e=e[p]}return e}var Ct=(e,s,i,r,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[r]:o||!0}}:{};const je=(e,s,i)=>{for(const r of i||Object.keys(e)){const o=d(e,r);if(o){const{_f:l,...u}=o;if(l&&s(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else k(u)&&je(u,s)}}};var Je=e=>({isOnSubmit:!e||e===U.onSubmit,isOnBlur:e===U.onBlur,isOnChange:e===U.onChange,isOnAll:e===U.all,isOnTouch:e===U.onTouched}),ze=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Mt=(e,s,i)=>{const r=ue(d(e,i));return w(r,"root",s[i]),w(e,i,r),e},G=e=>typeof e=="boolean",Te=e=>e.type==="file",z=e=>typeof e=="function",he=e=>{if(!Ee)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ye=e=>q(e),Le=e=>e.type==="radio",me=e=>e instanceof RegExp;const Xe={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var at=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Xe}return Xe};const Ge={isValid:!1,value:null};var lt=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,Ge):Ge;function Qe(e,s,i="validate"){if(ye(e)||Array.isArray(e)&&e.every(ye)||G(e)&&!e)return{type:i,message:ye(e)?e:"",ref:s}}var re=e=>k(e)&&!me(e)?e:{value:e,message:""},Ze=async(e,s,i,r,o)=>{const{ref:l,refs:u,required:p,maxLength:b,minLength:T,min:Z,max:N,pattern:x,validate:K,name:L,valueAsNumber:xe,mount:fe,disabled:pe}=e._f,v=d(s,L);if(!fe||pe)return{};const R=u?u[0]:l,I=_=>{r&&R.reportValidity&&(R.setCustomValidity(G(_)?"":_||""),R.reportValidity())},S={},ie=Le(l),ee=ce(l),_e=ie||ee,P=(xe||Te(l))&&D(l.value)&&D(v)||he(l)&&l.value===""||v===""||Array.isArray(v)&&!v.length,X=Ct.bind(null,L,i,S),H=(_,g,A,O=W.maxLength,C=W.minLength)=>{const B=_?g:A;S[L]={type:_?O:C,message:B,ref:l,...X(_?O:C,B)}};if(o?!Array.isArray(v)||!v.length:p&&(!_e&&(P||E(v))||G(v)&&!v||ee&&!at(u).isValid||ie&&!lt(u).isValid)){const{value:_,message:g}=ye(p)?{value:!!p,message:p}:re(p);if(_&&(S[L]={type:W.required,message:g,ref:R,...X(W.required,g)},!i))return I(g),S}if(!P&&(!E(Z)||!E(N))){let _,g;const A=re(N),O=re(Z);if(!E(v)&&!isNaN(v)){const C=l.valueAsNumber||v&&+v;E(A.value)||(_=C>A.value),E(O.value)||(g=C<O.value)}else{const C=l.valueAsDate||new Date(v),B=ae=>new Date(new Date().toDateString()+" "+ae),Y=l.type=="time",ne=l.type=="week";q(A.value)&&v&&(_=Y?B(v)>B(A.value):ne?v>A.value:C>new Date(A.value)),q(O.value)&&v&&(g=Y?B(v)<B(O.value):ne?v<O.value:C<new Date(O.value))}if((_||g)&&(H(!!_,A.message,O.message,W.max,W.min),!i))return I(S[L].message),S}if((b||T)&&!P&&(q(v)||o&&Array.isArray(v))){const _=re(b),g=re(T),A=!E(_.value)&&v.length>+_.value,O=!E(g.value)&&v.length<+g.value;if((A||O)&&(H(A,_.message,g.message),!i))return I(S[L].message),S}if(x&&!P&&q(v)){const{value:_,message:g}=re(x);if(me(_)&&!v.match(_)&&(S[L]={type:W.pattern,message:g,ref:l,...X(W.pattern,g)},!i))return I(g),S}if(K){if(z(K)){const _=await K(v,s),g=Qe(_,R);if(g&&(S[L]={...g,...X(W.validate,g.message)},!i))return I(g.message),S}else if(k(K)){let _={};for(const g in K){if(!M(_)&&!i)break;const A=Qe(await K[g](v,s),R,g);A&&(_={...A,...X(g,A.message)},I(A.message),i&&(S[L]=_))}if(!M(_)&&(S[L]={ref:R,..._},!i))return S}}return I(!0),S};function Rt(e,s){const i=s.slice(0,-1).length;let r=0;for(;r<i;)e=D(e)?r++:e[s[r++]];return e}function Ut(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function j(e,s){const i=Array.isArray(s)?s:Oe(s)?[s]:nt(s),r=i.length===1?e:Rt(e,i),o=i.length-1,l=i[o];return r&&delete r[l],o!==0&&(k(r)&&M(r)||Array.isArray(r)&&Ut(r))&&j(e,i.slice(0,-1)),e}function De(){let e=[];return{get observers(){return e},next:o=>{for(const l of e)l.next&&l.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(l=>l!==o)}}),unsubscribe:()=>{e=[]}}}var ve=e=>E(e)||!it(e);function Q(e,s){if(ve(e)||ve(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const i=Object.keys(e),r=Object.keys(s);if(i.length!==r.length)return!1;for(const o of i){const l=e[o];if(!r.includes(o))return!1;if(o!=="ref"){const u=s[o];if(se(l)&&se(u)||k(l)&&k(u)||Array.isArray(l)&&Array.isArray(u)?!Q(l,u):l!==u)return!1}}return!0}var ot=e=>e.type==="select-multiple",Pt=e=>Le(e)||ce(e),Ne=e=>he(e)&&e.isConnected,ct=e=>{for(const s in e)if(z(e[s]))return!0;return!1};function ge(e,s={}){const i=Array.isArray(e);if(k(e)||i)for(const r in e)Array.isArray(e[r])||k(e[r])&&!ct(e[r])?(s[r]=Array.isArray(e[r])?[]:{},ge(e[r],s[r])):E(e[r])||(s[r]=!0);return s}function ut(e,s,i){const r=Array.isArray(e);if(k(e)||r)for(const o in e)Array.isArray(e[o])||k(e[o])&&!ct(e[o])?D(s)||ve(i[o])?i[o]=Array.isArray(e[o])?ge(e[o],[]):{...ge(e[o])}:ut(e[o],E(s)?{}:s[o],i[o]):i[o]=!Q(e[o],s[o]);return i}var ke=(e,s)=>ut(e,s,ge(s)),ft=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:r})=>D(e)?e:s?e===""?NaN:e&&+e:i&&q(e)?new Date(e):r?r(e):e;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Te(s)?s.files:Le(s)?lt(e.refs).value:ot(s)?[...s.selectedOptions].map(({value:i})=>i):ce(s)?at(e.refs).value:ft(D(s.value)?e.ref.value:s.value,e)}var Bt=(e,s,i,r)=>{const o={};for(const l of e){const u=d(s,l);u&&w(o,l,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:r}},le=e=>D(e)?e:me(e)?e.source:k(e)?me(e.value)?e.value.source:e.value:e,qt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function et(e,s,i){const r=d(e,i);if(r||Oe(i))return{error:r,name:i};const o=i.split(".");for(;o.length;){const l=o.join("."),u=d(s,l),p=d(e,l);if(u&&!Array.isArray(u)&&i!==l)return{name:i};if(p&&p.type)return{name:l,error:p};o.pop()}return{name:i}}var It=(e,s,i,r,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?r.isOnBlur:o.isOnBlur)?!e:(i?r.isOnChange:o.isOnChange)?e:!0,Ht=(e,s)=>!ue(d(e,s)).length&&j(e,s);const Wt={mode:U.onSubmit,reValidateMode:U.onChange,shouldFocusError:!0};function $t(e={},s){let i={...Wt,...e},r={submitCount:0,isDirty:!1,isLoading:z(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},l=k(i.defaultValues)||k(i.values)?$(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:$(l),p={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,Z=0;const N={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:De(),array:De(),state:De()},K=e.resetOptions&&e.resetOptions.keepDirtyValues,L=Je(i.mode),xe=Je(i.reValidateMode),fe=i.criteriaMode===U.all,pe=t=>n=>{clearTimeout(Z),Z=setTimeout(t,n)},v=async t=>{if(N.isValid||t){const n=i.resolver?M((await P()).errors):await H(o,!0);n!==r.isValid&&x.state.next({isValid:n})}},R=t=>N.isValidating&&x.state.next({isValidating:t}),I=(t,n=[],a,y,f=!0,c=!0)=>{if(y&&a){if(p.action=!0,c&&Array.isArray(d(o,t))){const h=a(d(o,t),y.argA,y.argB);f&&w(o,t,h)}if(c&&Array.isArray(d(r.errors,t))){const h=a(d(r.errors,t),y.argA,y.argB);f&&w(r.errors,t,h),Ht(r.errors,t)}if(N.touchedFields&&c&&Array.isArray(d(r.touchedFields,t))){const h=a(d(r.touchedFields,t),y.argA,y.argB);f&&w(r.touchedFields,t,h)}N.dirtyFields&&(r.dirtyFields=ke(l,u)),x.state.next({name:t,isDirty:g(t,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(u,t,n)},S=(t,n)=>{w(r.errors,t,n),x.state.next({errors:r.errors})},ie=(t,n,a,y)=>{const f=d(o,t);if(f){const c=d(u,t,D(a)?d(l,t):a);D(c)||y&&y.defaultChecked||n?w(u,t,n?c:Se(f._f)):C(t,c),p.mount&&v()}},ee=(t,n,a,y,f)=>{let c=!1,h=!1;const V={name:t};if(!a||y){N.isDirty&&(h=r.isDirty,r.isDirty=V.isDirty=g(),c=h!==V.isDirty);const F=Q(d(l,t),n);h=d(r.dirtyFields,t),F?j(r.dirtyFields,t):w(r.dirtyFields,t,!0),V.dirtyFields=r.dirtyFields,c=c||N.dirtyFields&&h!==!F}if(a){const F=d(r.touchedFields,t);F||(w(r.touchedFields,t,a),V.touchedFields=r.touchedFields,c=c||N.touchedFields&&F!==a)}return c&&f&&x.state.next(V),c?V:{}},_e=(t,n,a,y)=>{const f=d(r.errors,t),c=N.isValid&&G(n)&&r.isValid!==n;if(e.delayError&&a?(T=pe(()=>S(t,a)),T(e.delayError)):(clearTimeout(Z),T=null,a?w(r.errors,t,a):j(r.errors,t)),(a?!Q(f,a):f)||!M(y)||c){const h={...y,...c&&G(n)?{isValid:n}:{},errors:r.errors,name:t};r={...r,...h},x.state.next(h)}R(!1)},P=async t=>i.resolver(u,i.context,Bt(t||b.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),X=async t=>{const{errors:n}=await P(t);if(t)for(const a of t){const y=d(n,a);y?w(r.errors,a,y):j(r.errors,a)}else r.errors=n;return n},H=async(t,n,a={valid:!0})=>{for(const y in t){const f=t[y];if(f){const{_f:c,...h}=f;if(c){const V=b.array.has(c.name),F=await Ze(f,u,fe,i.shouldUseNativeValidation&&!n,V);if(F[c.name]&&(a.valid=!1,n))break;!n&&(d(F,c.name)?V?Mt(r.errors,F,c.name):w(r.errors,c.name,F[c.name]):j(r.errors,c.name))}h&&await H(h,n,a)}}return a.valid},_=()=>{for(const t of b.unMount){const n=d(o,t);n&&(n._f.refs?n._f.refs.every(a=>!Ne(a)):!Ne(n._f.ref))&&be(t)}b.unMount=new Set},g=(t,n)=>(t&&n&&w(u,t,n),!Q(Ce(),l)),A=(t,n,a)=>Lt(t,b,{...p.mount?u:D(n)?l:q(t)?{[t]:n}:n},a,n),O=t=>ue(d(p.mount?u:l,t,e.shouldUnregister?d(l,t,[]):[])),C=(t,n,a={})=>{const y=d(o,t);let f=n;if(y){const c=y._f;c&&(!c.disabled&&w(u,t,ft(n,c)),f=he(c.ref)&&E(n)?"":n,ot(c.ref)?[...c.ref.options].forEach(h=>h.selected=f.includes(h.value)):c.refs?ce(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(V=>V===h.value):f===h.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(h=>h.checked=h.value===f):Te(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||x.values.next({name:t,values:{...u}})))}(a.shouldDirty||a.shouldTouch)&&ee(t,f,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ae(t)},B=(t,n,a)=>{for(const y in n){const f=n[y],c=`${t}.${y}`,h=d(o,c);(b.array.has(t)||!ve(f)||h&&!h._f)&&!se(f)?B(c,f,a):C(c,f,a)}},Y=(t,n,a={})=>{const y=d(o,t),f=b.array.has(t),c=$(n);w(u,t,c),f?(x.array.next({name:t,values:{...u}}),(N.isDirty||N.dirtyFields)&&a.shouldDirty&&x.state.next({name:t,dirtyFields:ke(l,u),isDirty:g(t,c)})):y&&!y._f&&!E(c)?B(t,c,a):C(t,c,a),ze(t,b)&&x.state.next({...r}),x.values.next({name:t,values:{...u}}),!p.mount&&s()},ne=async t=>{const n=t.target;let a=n.name,y=!0;const f=d(o,a),c=()=>n.type?Se(f._f):Nt(t);if(f){let h,V;const F=c(),te=t.type===Ke.BLUR||t.type===Ke.FOCUS_OUT,mt=!qt(f._f)&&!i.resolver&&!d(r.errors,a)&&!f._f.deps||It(te,d(r.touchedFields,a),r.isSubmitted,xe,L),Ve=ze(a,b,te);w(u,a,F),te?(f._f.onBlur&&f._f.onBlur(t),T&&T(0)):f._f.onChange&&f._f.onChange(t);const Ae=ee(a,F,te,!1),vt=!M(Ae)||Ve;if(!te&&x.values.next({name:a,type:t.type,values:{...u}}),mt)return N.isValid&&v(),vt&&x.state.next({name:a,...Ve?{}:Ae});if(!te&&Ve&&x.state.next({...r}),R(!0),i.resolver){const{errors:He}=await P([a]),gt=et(r.errors,o,a),We=et(He,o,gt.name||a);h=We.error,a=We.name,V=M(He)}else h=(await Ze(f,u,fe,i.shouldUseNativeValidation))[a],y=isNaN(F)||F===d(u,a,F),y&&(h?V=!1:N.isValid&&(V=await H(o,!0)));y&&(f._f.deps&&ae(f._f.deps),_e(a,V,h,Ae))}},ae=async(t,n={})=>{let a,y;const f=Fe(t);if(R(!0),i.resolver){const c=await X(D(t)?t:f);a=M(c),y=t?!f.some(h=>d(c,h)):a}else t?(y=(await Promise.all(f.map(async c=>{const h=d(o,c);return await H(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&v()):y=a=await H(o);return x.state.next({...!q(t)||N.isValid&&a!==r.isValid?{}:{name:t},...i.resolver||!t?{isValid:a}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!y&&je(o,c=>c&&d(r.errors,c),t?f:b.mount),y},Ce=t=>{const n={...l,...p.mount?u:{}};return D(t)?n:q(t)?d(n,t):t.map(a=>d(n,a))},Me=(t,n)=>({invalid:!!d((n||r).errors,t),isDirty:!!d((n||r).dirtyFields,t),isTouched:!!d((n||r).touchedFields,t),error:d((n||r).errors,t)}),dt=t=>{t&&Fe(t).forEach(n=>j(r.errors,n)),x.state.next({errors:t?r.errors:{}})},Re=(t,n,a)=>{const y=(d(o,t,{_f:{}})._f||{}).ref;w(r.errors,t,{...n,ref:y}),x.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&y&&y.focus&&y.focus()},yt=(t,n)=>z(t)?x.values.subscribe({next:a=>t(A(void 0,n),a)}):A(t,n,!0),be=(t,n={})=>{for(const a of t?Fe(t):b.mount)b.mount.delete(a),b.array.delete(a),n.keepValue||(j(o,a),j(u,a)),!n.keepError&&j(r.errors,a),!n.keepDirty&&j(r.dirtyFields,a),!n.keepTouched&&j(r.touchedFields,a),!i.shouldUnregister&&!n.keepDefaultValue&&j(l,a);x.values.next({values:{...u}}),x.state.next({...r,...n.keepDirty?{isDirty:g()}:{}}),!n.keepIsValid&&v()},Ue=({disabled:t,name:n,field:a,fields:y})=>{if(G(t)){const f=t?void 0:d(u,n,Se(a?a._f:d(y,n)._f));w(u,n,f),ee(n,f,!1,!1,!0)}},we=(t,n={})=>{let a=d(o,t);const y=G(n.disabled);return w(o,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...n}}),b.mount.add(t),a?Ue({field:a,disabled:n.disabled,name:t}):ie(t,!0,n.value),{...y?{disabled:n.disabled}:{},...i.progressive?{required:!!n.required,min:le(n.min),max:le(n.max),minLength:le(n.minLength),maxLength:le(n.maxLength),pattern:le(n.pattern)}:{},name:t,onChange:ne,onBlur:ne,ref:f=>{if(f){we(t,n),a=d(o,t);const c=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Pt(c),V=a._f.refs||[];if(h?V.find(F=>F===c):c===a._f.ref)return;w(o,t,{_f:{...a._f,...h?{refs:[...V.filter(Ne),c,...Array.isArray(d(l,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),ie(t,!1,void 0,c)}else a=d(o,t,{}),a._f&&(a._f.mount=!1),(i.shouldUnregister||n.shouldUnregister)&&!(St(b.array,t)&&p.action)&&b.unMount.add(t)}}},Pe=()=>i.shouldFocusError&&je(o,t=>t&&d(r.errors,t),b.mount),Be=(t,n)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let y=$(u);if(x.state.next({isSubmitting:!0}),i.resolver){const{errors:f,values:c}=await P();r.errors=f,y=c}else await H(o);j(r.errors,"root"),M(r.errors)?(x.state.next({errors:{}}),await t(y,a)):(n&&await n({...r.errors},a),Pe(),setTimeout(Pe)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ht=(t,n={})=>{d(o,t)&&(D(n.defaultValue)?Y(t,d(l,t)):(Y(t,n.defaultValue),w(l,t,n.defaultValue)),n.keepTouched||j(r.touchedFields,t),n.keepDirty||(j(r.dirtyFields,t),r.isDirty=n.defaultValue?g(t,d(l,t)):g()),n.keepError||(j(r.errors,t),N.isValid&&v()),x.state.next({...r}))},qe=(t,n={})=>{const a=t?$(t):l,y=$(a),f=t&&!M(t)?y:l;if(n.keepDefaultValues||(l=a),!n.keepValues){if(n.keepDirtyValues||K)for(const c of b.mount)d(r.dirtyFields,c)?w(f,c,d(u,c)):Y(c,d(f,c));else{if(Ee&&D(t))for(const c of b.mount){const h=d(o,c);if(h&&h._f){const V=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(he(V)){const F=V.closest("form");if(F){F.reset();break}}}}o={}}u=e.shouldUnregister?n.keepDefaultValues?$(l):{}:$(f),x.array.next({values:{...f}}),x.values.next({values:{...f}})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!p.mount&&s(),p.mount=!N.isValid||!!n.keepIsValid,p.watch=!!e.shouldUnregister,x.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!Q(t,l)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&t?ke(l,t):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ie=(t,n)=>qe(z(t)?t(u):t,n);return{control:{register:we,unregister:be,getFieldState:Me,handleSubmit:Be,setError:Re,_executeSchema:P,_getWatch:A,_getDirty:g,_updateValid:v,_removeUnmounted:_,_updateFieldArray:I,_updateDisabledField:Ue,_getFieldArray:O,_reset:qe,_resetDefaultValues:()=>z(i.defaultValues)&&i.defaultValues().then(t=>{Ie(t,i.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:x,_proxyFormState:N,get _fields(){return o},get _formValues(){return u},get _state(){return p},set _state(t){p=t},get _defaultValues(){return l},get _names(){return b},set _names(t){b=t},get _formState(){return r},set _formState(t){r=t},get _options(){return i},set _options(t){i={...i,...t}}},trigger:ae,register:we,handleSubmit:Be,watch:yt,setValue:Y,getValues:Ce,reset:Ie,resetField:ht,clearErrors:dt,unregister:be,setError:Re,setFocus:(t,n={})=>{const a=d(o,t),y=a&&a._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),n.shouldSelect&&f.select())}},getFieldState:Me}}function Kt(e={}){const s=J.useRef(),i=J.useRef(),[r,o]=J.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...$t(e,()=>o(u=>({...u}))),formState:r});const l=s.current.control;return l._options=e,Tt({subject:l._subjects.state,next:u=>{Ot(u,l._proxyFormState,l._updateFormState,!0)&&o({...l._formState})}}),J.useEffect(()=>{e.values&&!Q(e.values,i.current)?(l._reset(e.values,l._options.resetOptions),i.current=e.values):l._resetDefaultValues()},[e.values,l]),J.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),s.current.formState=Et(r,l),s.current}function Jt(){const e=xt.useRef(null),{register:s,handleSubmit:i}=Kt(),{t:r}=tt(),o=()=>{Dt.sendForm("service_dvyfrv7","template_dijtokg",e.current,"OiAYajDR_DHv1IuAj").then(l=>{console.log(l.text)},l=>{console.log(l.text)})};return m.jsx("div",{className:"flex-custom-full contact-form",children:m.jsxs("form",{ref:e,onSubmit:i(o),children:[m.jsxs("div",{className:"row gap-x-3",children:[m.jsx("div",{className:"flex-col grow form-item",children:m.jsx("div",{className:"form-group",children:m.jsx("input",{...s("name"),type:"text",className:"form-control",placeholder:r("contact-page.form.name")})})}),m.jsx("div",{className:"flex-col grow form-item",children:m.jsx("div",{className:"form-group",children:m.jsx("input",{...s("email"),type:"email",className:"form-control",placeholder:r("contact-page.form.email")})})})]}),m.jsx("div",{className:"row",children:m.jsx("div",{className:"flex-custom-full form-item",children:m.jsx("div",{className:"form-group",children:m.jsx("input",{...s("subject"),type:"text",className:"form-control",placeholder:r("contact-page.form.subject")})})})}),m.jsx("div",{className:"row",children:m.jsx("div",{className:"flex-custom-full form-item",children:m.jsx("div",{className:"form-group",children:m.jsx("textarea",{...s("message"),className:"form-control",placeholder:r("contact-page.form.message")})})})}),m.jsx("div",{className:"row",children:m.jsx("div",{className:"flex-custom-full form-item",children:m.jsx("button",{type:"submit",className:"btn",children:r("contact-page.form-button")})})})]})})}function tr(){const{t:e}=tt();return m.jsx(pt,{features:_t,children:m.jsx(bt.section,{initial:{x:"100vw"},animate:{x:"0"},transition:{duration:1,bounce:!1,type:"spring",damping:15,stiffness:70},className:"contact section",id:"contact",children:m.jsxs("div",{className:"container py-16",children:[m.jsx("div",{className:"row",children:m.jsx("div",{className:"flex-custom-full mb-14 section-title",children:m.jsx("h1",{children:e("contact-page.title")})})}),m.jsx("h3",{className:"contact-title",children:e("contact-page.contact-question-title")}),m.jsx("h4",{className:"contact-sub-title",children:e("contact-page.contact-question-subtitle")}),m.jsxs("div",{className:"row flex-wrap",children:[m.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[m.jsx("div",{className:"icon",children:m.jsx("i",{className:"fa fa-brands fa-telegram"})}),m.jsx("h4",{children:e("contact-page.services.write-me")}),m.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://t.me/mr_osmanov"),children:"@Mr_Osmanov"})]}),m.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[m.jsx("div",{className:"icon",children:m.jsx("i",{className:"fa fa-envelope"})}),m.jsx("h4",{children:e("contact-page.services.mail")}),m.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://mail.google.com/"),children:"sinaver.osmanov@gmail.com"})]}),m.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[m.jsx("div",{className:"icon",children:m.jsx("i",{className:"fa fa-globe-asia"})}),m.jsx("h4",{children:e("contact-page.services.git")}),m.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://github.com/SinaverOsmanov"),children:"SinaverOsmanov"}),m.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://github.com/SinaverFrontend"),children:"SinaverFrontent"})]})]}),m.jsx("h3",{className:"contact-title",children:e("contact-page.form-title")}),m.jsx("h4",{className:"contact-sub-title",children:e("contact-page.form-description")}),m.jsx("div",{className:"row",children:m.jsx(Jt,{})})]})})})}export{tr as default};
//# sourceMappingURL=Contact-00362647.js.map