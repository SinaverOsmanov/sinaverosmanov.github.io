import{u as et,j as y}from"./index-579ed0d4.js";import{b as J,r as gt}from"./react-e7981c99.js";import{L as xt,d as pt,m as bt}from"./features-animation-331a34cf.js";var ce=e=>e.type==="checkbox",se=e=>e instanceof Date,E=e=>e==null;const tt=e=>typeof e=="object";var D=e=>!E(e)&&!Array.isArray(e)&&tt(e)&&!se(e),_t=e=>D(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,wt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Vt=(e,s)=>e.has(wt(s)),At=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Se=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Se&&(e instanceof Blob||e instanceof FileList))&&(i||D(e)))if(s=i?[]:{},!i&&!At(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=$(e[r]));else return e;return s}var ue=e=>Array.isArray(e)?e.filter(Boolean):[],N=e=>e===void 0,d=(e,s,i)=>{if(!s||!D(e))return i;const r=ue(s.split(/[,[\].]+?/)).reduce((o,l)=>E(o)?o:o[l],e);return N(r)||r===e?N(e[s])?i:e[s]:r};const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},U={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};J.createContext(null);var Ft=(e,s,i,r=!0)=>{const o={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(o,l,{get:()=>{const u=l;return s._proxyFormState[u]!==U.all&&(s._proxyFormState[u]=!r||U.all),i&&(i[u]=!0),e[u]}});return o},M=e=>D(e)&&!Object.keys(e).length,Nt=(e,s,i,r)=>{i(e);const{name:o,...l}=e;return M(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(u=>s[u]===(!r||U.all))},Ae=e=>Array.isArray(e)?e:[e];function kt(e){const s=J.useRef(e);s.current=e,J.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var q=e=>typeof e=="string",Dt=(e,s,i,r,o)=>q(e)?(r&&s.watch.add(e),d(i,e,o)):Array.isArray(e)?e.map(l=>(r&&s.watch.add(l),d(i,l))):(r&&(s.watchAll=!0),i),Ee=e=>/^\w*$/.test(e),rt=e=>ue(e.replace(/["|']|\]/g,"").split(/\.|\[/));function w(e,s,i){let r=-1;const o=Ee(s)?[s]:rt(s),l=o.length,u=l-1;for(;++r<l;){const p=o[r];let _=i;if(r!==u){const T=e[p];_=D(T)||Array.isArray(T)?T:isNaN(+o[r+1])?{}:[]}e[p]=_,e=e[p]}return e}var jt=(e,s,i,r,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[r]:o||!0}}:{};const je=(e,s,i)=>{for(const r of i||Object.keys(e)){const o=d(e,r);if(o){const{_f:l,...u}=o;if(l&&s(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else D(u)&&je(u,s)}}};var $e=e=>({isOnSubmit:!e||e===U.onSubmit,isOnBlur:e===U.onBlur,isOnChange:e===U.onChange,isOnAll:e===U.all,isOnTouch:e===U.onTouched}),Ke=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),St=(e,s,i)=>{const r=ue(d(e,i));return w(r,"root",s[i]),w(e,i,r),e},G=e=>typeof e=="boolean",Oe=e=>e.type==="file",z=e=>typeof e=="function",he=e=>{if(!Se)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},de=e=>q(e),Te=e=>e.type==="radio",ye=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},ze={value:!0,isValid:!0};var st=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Je}return Je};const Xe={isValid:!1,value:null};var it=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,Xe):Xe;function Ye(e,s,i="validate"){if(de(e)||Array.isArray(e)&&e.every(de)||G(e)&&!e)return{type:i,message:de(e)?e:"",ref:s}}var re=e=>D(e)&&!ye(e)?e:{value:e,message:""},Ge=async(e,s,i,r,o)=>{const{ref:l,refs:u,required:p,maxLength:_,minLength:T,min:Z,max:k,pattern:x,validate:K,name:L,valueAsNumber:ge,mount:fe,disabled:xe}=e._f,v=d(s,L);if(!fe||xe)return{};const R=u?u[0]:l,I=b=>{r&&R.reportValidity&&(R.setCustomValidity(G(b)?"":b||""),R.reportValidity())},j={},ie=Te(l),ee=ce(l),pe=ie||ee,P=(ge||Oe(l))&&N(l.value)&&N(v)||he(l)&&l.value===""||v===""||Array.isArray(v)&&!v.length,X=jt.bind(null,L,i,j),H=(b,g,A,O=W.maxLength,C=W.minLength)=>{const B=b?g:A;j[L]={type:b?O:C,message:B,ref:l,...X(b?O:C,B)}};if(o?!Array.isArray(v)||!v.length:p&&(!pe&&(P||E(v))||G(v)&&!v||ee&&!st(u).isValid||ie&&!it(u).isValid)){const{value:b,message:g}=de(p)?{value:!!p,message:p}:re(p);if(b&&(j[L]={type:W.required,message:g,ref:R,...X(W.required,g)},!i))return I(g),j}if(!P&&(!E(Z)||!E(k))){let b,g;const A=re(k),O=re(Z);if(!E(v)&&!isNaN(v)){const C=l.valueAsNumber||v&&+v;E(A.value)||(b=C>A.value),E(O.value)||(g=C<O.value)}else{const C=l.valueAsDate||new Date(v),B=ne=>new Date(new Date().toDateString()+" "+ne),Y=l.type=="time",ae=l.type=="week";q(A.value)&&v&&(b=Y?B(v)>B(A.value):ae?v>A.value:C>new Date(A.value)),q(O.value)&&v&&(g=Y?B(v)<B(O.value):ae?v<O.value:C<new Date(O.value))}if((b||g)&&(H(!!b,A.message,O.message,W.max,W.min),!i))return I(j[L].message),j}if((_||T)&&!P&&(q(v)||o&&Array.isArray(v))){const b=re(_),g=re(T),A=!E(b.value)&&v.length>+b.value,O=!E(g.value)&&v.length<+g.value;if((A||O)&&(H(A,b.message,g.message),!i))return I(j[L].message),j}if(x&&!P&&q(v)){const{value:b,message:g}=re(x);if(ye(b)&&!v.match(b)&&(j[L]={type:W.pattern,message:g,ref:l,...X(W.pattern,g)},!i))return I(g),j}if(K){if(z(K)){const b=await K(v,s),g=Ye(b,R);if(g&&(j[L]={...g,...X(W.validate,g.message)},!i))return I(g.message),j}else if(D(K)){let b={};for(const g in K){if(!M(b)&&!i)break;const A=Ye(await K[g](v,s),R,g);A&&(b={...A,...X(g,A.message)},I(A.message),i&&(j[L]=b))}if(!M(b)&&(j[L]={ref:R,...b},!i))return j}}return I(!0),j};function Et(e,s){const i=s.slice(0,-1).length;let r=0;for(;r<i;)e=N(e)?r++:e[s[r++]];return e}function Ot(e){for(const s in e)if(e.hasOwnProperty(s)&&!N(e[s]))return!1;return!0}function S(e,s){const i=Array.isArray(s)?s:Ee(s)?[s]:rt(s),r=i.length===1?e:Et(e,i),o=i.length-1,l=i[o];return r&&delete r[l],o!==0&&(D(r)&&M(r)||Array.isArray(r)&&Ot(r))&&S(e,i.slice(0,-1)),e}function Fe(){let e=[];return{get observers(){return e},next:o=>{for(const l of e)l.next&&l.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(l=>l!==o)}}),unsubscribe:()=>{e=[]}}}var me=e=>E(e)||!tt(e);function Q(e,s){if(me(e)||me(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const i=Object.keys(e),r=Object.keys(s);if(i.length!==r.length)return!1;for(const o of i){const l=e[o];if(!r.includes(o))return!1;if(o!=="ref"){const u=s[o];if(se(l)&&se(u)||D(l)&&D(u)||Array.isArray(l)&&Array.isArray(u)?!Q(l,u):l!==u)return!1}}return!0}var at=e=>e.type==="select-multiple",Tt=e=>Te(e)||ce(e),Ne=e=>he(e)&&e.isConnected,nt=e=>{for(const s in e)if(z(e[s]))return!0;return!1};function ve(e,s={}){const i=Array.isArray(e);if(D(e)||i)for(const r in e)Array.isArray(e[r])||D(e[r])&&!nt(e[r])?(s[r]=Array.isArray(e[r])?[]:{},ve(e[r],s[r])):E(e[r])||(s[r]=!0);return s}function lt(e,s,i){const r=Array.isArray(e);if(D(e)||r)for(const o in e)Array.isArray(e[o])||D(e[o])&&!nt(e[o])?N(s)||me(i[o])?i[o]=Array.isArray(e[o])?ve(e[o],[]):{...ve(e[o])}:lt(e[o],E(s)?{}:s[o],i[o]):i[o]=!Q(e[o],s[o]);return i}var ke=(e,s)=>lt(e,s,ve(s)),ot=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:r})=>N(e)?e:s?e===""?NaN:e&&+e:i&&q(e)?new Date(e):r?r(e):e;function De(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Oe(s)?s.files:Te(s)?it(e.refs).value:at(s)?[...s.selectedOptions].map(({value:i})=>i):ce(s)?st(e.refs).value:ot(N(s.value)?e.ref.value:s.value,e)}var Lt=(e,s,i,r)=>{const o={};for(const l of e){const u=d(s,l);u&&w(o,l,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:r}},le=e=>N(e)?e:ye(e)?e.source:D(e)?ye(e.value)?e.value.source:e.value:e,Ct=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qe(e,s,i){const r=d(e,i);if(r||Ee(i))return{error:r,name:i};const o=i.split(".");for(;o.length;){const l=o.join("."),u=d(s,l),p=d(e,l);if(u&&!Array.isArray(u)&&i!==l)return{name:i};if(p&&p.type)return{name:l,error:p};o.pop()}return{name:i}}var Mt=(e,s,i,r,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?r.isOnBlur:o.isOnBlur)?!e:(i?r.isOnChange:o.isOnChange)?e:!0,Rt=(e,s)=>!ue(d(e,s)).length&&S(e,s);const Ut={mode:U.onSubmit,reValidateMode:U.onChange,shouldFocusError:!0};function Pt(e={},s){let i={...Ut,...e},r={submitCount:0,isDirty:!1,isLoading:z(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},l=D(i.defaultValues)||D(i.values)?$(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:$(l),p={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,Z=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Fe(),array:Fe(),state:Fe()},K=e.resetOptions&&e.resetOptions.keepDirtyValues,L=$e(i.mode),ge=$e(i.reValidateMode),fe=i.criteriaMode===U.all,xe=t=>a=>{clearTimeout(Z),Z=setTimeout(t,a)},v=async t=>{if(k.isValid||t){const a=i.resolver?M((await P()).errors):await H(o,!0);a!==r.isValid&&x.state.next({isValid:a})}},R=t=>k.isValidating&&x.state.next({isValidating:t}),I=(t,a=[],n,h,f=!0,c=!0)=>{if(h&&n){if(p.action=!0,c&&Array.isArray(d(o,t))){const m=n(d(o,t),h.argA,h.argB);f&&w(o,t,m)}if(c&&Array.isArray(d(r.errors,t))){const m=n(d(r.errors,t),h.argA,h.argB);f&&w(r.errors,t,m),Rt(r.errors,t)}if(k.touchedFields&&c&&Array.isArray(d(r.touchedFields,t))){const m=n(d(r.touchedFields,t),h.argA,h.argB);f&&w(r.touchedFields,t,m)}k.dirtyFields&&(r.dirtyFields=ke(l,u)),x.state.next({name:t,isDirty:g(t,a),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(u,t,a)},j=(t,a)=>{w(r.errors,t,a),x.state.next({errors:r.errors})},ie=(t,a,n,h)=>{const f=d(o,t);if(f){const c=d(u,t,N(n)?d(l,t):n);N(c)||h&&h.defaultChecked||a?w(u,t,a?c:De(f._f)):C(t,c),p.mount&&v()}},ee=(t,a,n,h,f)=>{let c=!1,m=!1;const V={name:t};if(!n||h){k.isDirty&&(m=r.isDirty,r.isDirty=V.isDirty=g(),c=m!==V.isDirty);const F=Q(d(l,t),a);m=d(r.dirtyFields,t),F?S(r.dirtyFields,t):w(r.dirtyFields,t,!0),V.dirtyFields=r.dirtyFields,c=c||k.dirtyFields&&m!==!F}if(n){const F=d(r.touchedFields,t);F||(w(r.touchedFields,t,n),V.touchedFields=r.touchedFields,c=c||k.touchedFields&&F!==n)}return c&&f&&x.state.next(V),c?V:{}},pe=(t,a,n,h)=>{const f=d(r.errors,t),c=k.isValid&&G(a)&&r.isValid!==a;if(e.delayError&&n?(T=xe(()=>j(t,n)),T(e.delayError)):(clearTimeout(Z),T=null,n?w(r.errors,t,n):S(r.errors,t)),(n?!Q(f,n):f)||!M(h)||c){const m={...h,...c&&G(a)?{isValid:a}:{},errors:r.errors,name:t};r={...r,...m},x.state.next(m)}R(!1)},P=async t=>i.resolver(u,i.context,Lt(t||_.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),X=async t=>{const{errors:a}=await P(t);if(t)for(const n of t){const h=d(a,n);h?w(r.errors,n,h):S(r.errors,n)}else r.errors=a;return a},H=async(t,a,n={valid:!0})=>{for(const h in t){const f=t[h];if(f){const{_f:c,...m}=f;if(c){const V=_.array.has(c.name),F=await Ge(f,u,fe,i.shouldUseNativeValidation&&!a,V);if(F[c.name]&&(n.valid=!1,a))break;!a&&(d(F,c.name)?V?St(r.errors,F,c.name):w(r.errors,c.name,F[c.name]):S(r.errors,c.name))}m&&await H(m,a,n)}}return n.valid},b=()=>{for(const t of _.unMount){const a=d(o,t);a&&(a._f.refs?a._f.refs.every(n=>!Ne(n)):!Ne(a._f.ref))&&be(t)}_.unMount=new Set},g=(t,a)=>(t&&a&&w(u,t,a),!Q(Le(),l)),A=(t,a,n)=>Dt(t,_,{...p.mount?u:N(a)?l:q(t)?{[t]:a}:a},n,a),O=t=>ue(d(p.mount?u:l,t,e.shouldUnregister?d(l,t,[]):[])),C=(t,a,n={})=>{const h=d(o,t);let f=a;if(h){const c=h._f;c&&(!c.disabled&&w(u,t,ot(a,c)),f=he(c.ref)&&E(a)?"":a,at(c.ref)?[...c.ref.options].forEach(m=>m.selected=f.includes(m.value)):c.refs?ce(c.ref)?c.refs.length>1?c.refs.forEach(m=>(!m.defaultChecked||!m.disabled)&&(m.checked=Array.isArray(f)?!!f.find(V=>V===m.value):f===m.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(m=>m.checked=m.value===f):Oe(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||x.values.next({name:t,values:{...u}})))}(n.shouldDirty||n.shouldTouch)&&ee(t,f,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ne(t)},B=(t,a,n)=>{for(const h in a){const f=a[h],c=`${t}.${h}`,m=d(o,c);(_.array.has(t)||!me(f)||m&&!m._f)&&!se(f)?B(c,f,n):C(c,f,n)}},Y=(t,a,n={})=>{const h=d(o,t),f=_.array.has(t),c=$(a);w(u,t,c),f?(x.array.next({name:t,values:{...u}}),(k.isDirty||k.dirtyFields)&&n.shouldDirty&&x.state.next({name:t,dirtyFields:ke(l,u),isDirty:g(t,c)})):h&&!h._f&&!E(c)?B(t,c,n):C(t,c,n),Ke(t,_)&&x.state.next({...r}),x.values.next({name:t,values:{...u}}),!p.mount&&s()},ae=async t=>{const a=t.target;let n=a.name,h=!0;const f=d(o,n),c=()=>a.type?De(f._f):_t(t);if(f){let m,V;const F=c(),te=t.type===We.BLUR||t.type===We.FOCUS_OUT,yt=!Ct(f._f)&&!i.resolver&&!d(r.errors,n)&&!f._f.deps||Mt(te,d(r.touchedFields,n),r.isSubmitted,ge,L),we=Ke(n,_,te);w(u,n,F),te?(f._f.onBlur&&f._f.onBlur(t),T&&T(0)):f._f.onChange&&f._f.onChange(t);const Ve=ee(n,F,te,!1),mt=!M(Ve)||we;if(!te&&x.values.next({name:n,type:t.type,values:{...u}}),yt)return k.isValid&&v(),mt&&x.state.next({name:n,...we?{}:Ve});if(!te&&we&&x.state.next({...r}),R(!0),i.resolver){const{errors:Ie}=await P([n]),vt=Qe(r.errors,o,n),He=Qe(Ie,o,vt.name||n);m=He.error,n=He.name,V=M(Ie)}else m=(await Ge(f,u,fe,i.shouldUseNativeValidation))[n],h=isNaN(F)||F===d(u,n,F),h&&(m?V=!1:k.isValid&&(V=await H(o,!0)));h&&(f._f.deps&&ne(f._f.deps),pe(n,V,m,Ve))}},ne=async(t,a={})=>{let n,h;const f=Ae(t);if(R(!0),i.resolver){const c=await X(N(t)?t:f);n=M(c),h=t?!f.some(m=>d(c,m)):n}else t?(h=(await Promise.all(f.map(async c=>{const m=d(o,c);return await H(m&&m._f?{[c]:m}:m)}))).every(Boolean),!(!h&&!r.isValid)&&v()):h=n=await H(o);return x.state.next({...!q(t)||k.isValid&&n!==r.isValid?{}:{name:t},...i.resolver||!t?{isValid:n}:{},errors:r.errors,isValidating:!1}),a.shouldFocus&&!h&&je(o,c=>c&&d(r.errors,c),t?f:_.mount),h},Le=t=>{const a={...l,...p.mount?u:{}};return N(t)?a:q(t)?d(a,t):t.map(n=>d(a,n))},Ce=(t,a)=>({invalid:!!d((a||r).errors,t),isDirty:!!d((a||r).dirtyFields,t),isTouched:!!d((a||r).touchedFields,t),error:d((a||r).errors,t)}),ft=t=>{t&&Ae(t).forEach(a=>S(r.errors,a)),x.state.next({errors:t?r.errors:{}})},Me=(t,a,n)=>{const h=(d(o,t,{_f:{}})._f||{}).ref;w(r.errors,t,{...a,ref:h}),x.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&h&&h.focus&&h.focus()},dt=(t,a)=>z(t)?x.values.subscribe({next:n=>t(A(void 0,a),n)}):A(t,a,!0),be=(t,a={})=>{for(const n of t?Ae(t):_.mount)_.mount.delete(n),_.array.delete(n),a.keepValue||(S(o,n),S(u,n)),!a.keepError&&S(r.errors,n),!a.keepDirty&&S(r.dirtyFields,n),!a.keepTouched&&S(r.touchedFields,n),!i.shouldUnregister&&!a.keepDefaultValue&&S(l,n);x.values.next({values:{...u}}),x.state.next({...r,...a.keepDirty?{isDirty:g()}:{}}),!a.keepIsValid&&v()},Re=({disabled:t,name:a,field:n,fields:h})=>{if(G(t)){const f=t?void 0:d(u,a,De(n?n._f:d(h,a)._f));w(u,a,f),ee(a,f,!1,!1,!0)}},_e=(t,a={})=>{let n=d(o,t);const h=G(a.disabled);return w(o,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...a}}),_.mount.add(t),n?Re({field:n,disabled:a.disabled,name:t}):ie(t,!0,a.value),{...h?{disabled:a.disabled}:{},...i.progressive?{required:!!a.required,min:le(a.min),max:le(a.max),minLength:le(a.minLength),maxLength:le(a.maxLength),pattern:le(a.pattern)}:{},name:t,onChange:ae,onBlur:ae,ref:f=>{if(f){_e(t,a),n=d(o,t);const c=N(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,m=Tt(c),V=n._f.refs||[];if(m?V.find(F=>F===c):c===n._f.ref)return;w(o,t,{_f:{...n._f,...m?{refs:[...V.filter(Ne),c,...Array.isArray(d(l,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),ie(t,!1,void 0,c)}else n=d(o,t,{}),n._f&&(n._f.mount=!1),(i.shouldUnregister||a.shouldUnregister)&&!(Vt(_.array,t)&&p.action)&&_.unMount.add(t)}}},Ue=()=>i.shouldFocusError&&je(o,t=>t&&d(r.errors,t),_.mount),Pe=(t,a)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let h=$(u);if(x.state.next({isSubmitting:!0}),i.resolver){const{errors:f,values:c}=await P();r.errors=f,h=c}else await H(o);S(r.errors,"root"),M(r.errors)?(x.state.next({errors:{}}),await t(h,n)):(a&&await a({...r.errors},n),Ue(),setTimeout(Ue)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ht=(t,a={})=>{d(o,t)&&(N(a.defaultValue)?Y(t,d(l,t)):(Y(t,a.defaultValue),w(l,t,a.defaultValue)),a.keepTouched||S(r.touchedFields,t),a.keepDirty||(S(r.dirtyFields,t),r.isDirty=a.defaultValue?g(t,d(l,t)):g()),a.keepError||(S(r.errors,t),k.isValid&&v()),x.state.next({...r}))},Be=(t,a={})=>{const n=t?$(t):l,h=$(n),f=t&&!M(t)?h:l;if(a.keepDefaultValues||(l=n),!a.keepValues){if(a.keepDirtyValues||K)for(const c of _.mount)d(r.dirtyFields,c)?w(f,c,d(u,c)):Y(c,d(f,c));else{if(Se&&N(t))for(const c of _.mount){const m=d(o,c);if(m&&m._f){const V=Array.isArray(m._f.refs)?m._f.refs[0]:m._f.ref;if(he(V)){const F=V.closest("form");if(F){F.reset();break}}}}o={}}u=e.shouldUnregister?a.keepDefaultValues?$(l):{}:$(f),x.array.next({values:{...f}}),x.values.next({values:{...f}})}_={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!p.mount&&s(),p.mount=!k.isValid||!!a.keepIsValid,p.watch=!!e.shouldUnregister,x.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:a.keepDirty?r.isDirty:!!(a.keepDefaultValues&&!Q(t,l)),isSubmitted:a.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:a.keepDirtyValues?r.dirtyFields:a.keepDefaultValues&&t?ke(l,t):{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},qe=(t,a)=>Be(z(t)?t(u):t,a);return{control:{register:_e,unregister:be,getFieldState:Ce,handleSubmit:Pe,setError:Me,_executeSchema:P,_getWatch:A,_getDirty:g,_updateValid:v,_removeUnmounted:b,_updateFieldArray:I,_updateDisabledField:Re,_getFieldArray:O,_reset:Be,_resetDefaultValues:()=>z(i.defaultValues)&&i.defaultValues().then(t=>{qe(t,i.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:x,_proxyFormState:k,get _fields(){return o},get _formValues(){return u},get _state(){return p},set _state(t){p=t},get _defaultValues(){return l},get _names(){return _},set _names(t){_=t},get _formState(){return r},set _formState(t){r=t},get _options(){return i},set _options(t){i={...i,...t}}},trigger:ne,register:_e,handleSubmit:Pe,watch:dt,setValue:Y,getValues:Le,reset:qe,resetField:ht,clearErrors:ft,unregister:be,setError:Me,setFocus:(t,a={})=>{const n=d(o,t),h=n&&n._f;if(h){const f=h.refs?h.refs[0]:h.ref;f.focus&&(f.focus(),a.shouldSelect&&f.select())}},getFieldState:Ce}}function Bt(e={}){const s=J.useRef(),i=J.useRef(),[r,o]=J.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Pt(e,()=>o(u=>({...u}))),formState:r});const l=s.current.control;return l._options=e,kt({subject:l._subjects.state,next:u=>{Nt(u,l._proxyFormState,l._updateFormState,!0)&&o({...l._formState})}}),J.useEffect(()=>{e.values&&!Q(e.values,i.current)?(l._reset(e.values,l._options.resetOptions),i.current=e.values):l._resetDefaultValues()},[e.values,l]),J.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),s.current.formState=Ft(r,l),s.current}const oe={_origin:"https://api.emailjs.com"},qt=(e,s="https://api.emailjs.com")=>{oe._userID=e,oe._origin=s},ct=(e,s,i)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ze{constructor(s){this.status=s?s.status:0,this.text=s?s.responseText:"Network Error"}}const ut=(e,s,i={})=>new Promise((r,o)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:u})=>{const p=new Ze(u);p.status===200||p.text==="OK"?r(p):o(p)}),l.addEventListener("error",({target:u})=>{o(new Ze(u))}),l.open("POST",oe._origin+e,!0),Object.keys(i).forEach(u=>{l.setRequestHeader(u,i[u])}),l.send(s)}),It=(e,s,i,r)=>{const o=r||oe._userID;return ct(o,e,s),ut("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:s,template_params:i}),{"Content-type":"application/json"})},Ht=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},Wt=(e,s,i,r)=>{const o=r||oe._userID,l=Ht(i);ct(o,e,s);const u=new FormData(l);return u.append("lib_version","3.11.0"),u.append("service_id",e),u.append("template_id",s),u.append("user_id",o),ut("/api/v1.0/email/send-form",u)},$t={init:qt,send:It,sendForm:Wt};function Zt(){const{t:e}=et();return y.jsx(xt,{features:pt,children:y.jsx(bt.section,{initial:{x:"100vw"},animate:{x:"0"},transition:{duration:1,bounce:!1,type:"spring",damping:15,stiffness:70},className:"contact section",id:"contact",children:y.jsxs("div",{className:"container py-16",children:[y.jsx("div",{className:"row",children:y.jsx("div",{className:"flex-custom-full mb-14 section-title",children:y.jsx("h1",{children:e("contact-page.title")})})}),y.jsx("h3",{className:"contact-title",children:e("contact-page.contact-question-title")}),y.jsx("h4",{className:"contact-sub-title",children:e("contact-page.contact-question-subtitle")}),y.jsxs("div",{className:"row flex-wrap",children:[y.jsxs("div",{className:"flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words",children:[y.jsx("div",{className:"icon",children:y.jsx("i",{className:"fa fa-brands fa-telegram"})}),y.jsx("h4",{children:e("contact-page.services.write-me")}),y.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>window.location.href="https://t.me/mr_osmanov",children:"@Mr_Osmanov"})]}),y.jsxs("div",{className:"flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words",children:[y.jsx("div",{className:"icon",children:y.jsx("i",{className:"fa fa-map-marker-alt"})}),y.jsx("h4",{children:e("contact-page.services.address")}),y.jsx("p",{children:"Crimea, Evpatoriya"})]}),y.jsxs("div",{className:"flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words",children:[y.jsx("div",{className:"icon",children:y.jsx("i",{className:"fa fa-envelope"})}),y.jsx("h4",{children:e("contact-page.services.mail")}),y.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>window.location.href="https://mail.google.com/",children:"sinaver.osmanov@gmail.com"})]}),y.jsxs("div",{className:"flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words",children:[y.jsx("div",{className:"icon",children:y.jsx("i",{className:"fa fa-globe-asia"})}),y.jsx("h4",{children:e("contact-page.services.git")}),y.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>window.location.href="https://github.com/SinaverOsmanov",children:"SinaverOsmanov"}),y.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>window.location.href="https://github.com/SinaverFrontent",children:"SinaverFrontent"})]})]}),y.jsx("h3",{className:"contact-title",children:e("contact-page.form-title")}),y.jsx("h4",{className:"contact-sub-title",children:e("contact-page.form-description")}),y.jsx("div",{className:"row",children:y.jsx(Kt,{})})]})})})}function Kt(){const e=gt.useRef(null),{register:s,handleSubmit:i}=Bt(),{t:r}=et(),o=l=>{$t.sendForm("service_dvyfrv7","template_dijtokg",e.current,"OiAYajDR_DHv1IuAj").then(u=>{console.log(u.text)},u=>{console.log(u.text)})};return y.jsx("div",{className:"flex-custom-full contact-form",children:y.jsxs("form",{ref:e,onSubmit:i(o),children:[y.jsxs("div",{className:"row gap-x-3",children:[y.jsx("div",{className:"flex-col grow form-item",children:y.jsx("div",{className:"form-group",children:y.jsx("input",{...s("name"),type:"text",className:"form-control",placeholder:r("contact-page.form.name")})})}),y.jsx("div",{className:"flex-col grow form-item",children:y.jsx("div",{className:"form-group",children:y.jsx("input",{...s("email"),type:"email",className:"form-control",placeholder:r("contact-page.form.email")})})})]}),y.jsx("div",{className:"row",children:y.jsx("div",{className:"flex-custom-full form-item",children:y.jsx("div",{className:"form-group",children:y.jsx("input",{...s("subject"),type:"text",className:"form-control",placeholder:r("contact-page.form.subject")})})})}),y.jsx("div",{className:"row",children:y.jsx("div",{className:"flex-custom-full form-item",children:y.jsx("div",{className:"form-group",children:y.jsx("textarea",{...s("message"),className:"form-control",placeholder:r("contact-page.form.message")})})})}),y.jsx("div",{className:"row",children:y.jsx("div",{className:"flex-custom-full form-item",children:y.jsx("button",{type:"submit",className:"btn",children:r("contact-page.form-button")})})})]})})}export{Zt as default};
//# sourceMappingURL=Contact-3f650550.js.map
