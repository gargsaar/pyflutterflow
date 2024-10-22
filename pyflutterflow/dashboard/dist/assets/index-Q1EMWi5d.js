(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ka(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ce={},kr=[],Gt=()=>{},kp=()=>!1,Ji=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Wa=e=>e.startsWith("onUpdate:"),Me=Object.assign,qa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xp=Object.prototype.hasOwnProperty,ve=(e,t)=>xp.call(e,t),Q=Array.isArray,xr=e=>Yi(e)==="[object Map]",Rd=e=>Yi(e)==="[object Set]",oe=e=>typeof e=="function",Re=e=>typeof e=="string",Un=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",$d=e=>(Le(e)||oe(e))&&oe(e.then)&&oe(e.catch),Dd=Object.prototype.toString,Yi=e=>Dd.call(e),_p=e=>Yi(e).slice(8,-1),Nd=e=>Yi(e)==="[object Object]",Ga=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,to=Ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ip=/-(\w)/g,Et=Zi(e=>e.replace(Ip,(t,n)=>n?n.toUpperCase():"")),Sp=/\B([A-Z])/g,dr=Zi(e=>e.replace(Sp,"-$1").toLowerCase()),Xi=Zi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ss=Zi(e=>e?`on${Xi(e)}`:""),zn=(e,t)=>!Object.is(e,t),Cs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Md=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Cp=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ep=e=>{const t=Re(e)?Number(e):NaN;return isNaN(t)?e:t};let Zl;const jd=()=>Zl||(Zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fo(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Re(r)?Ap(r):Fo(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(Re(e)||Le(e))return e}const Tp=/;(?![^(]*\))/g,Pp=/:([^]+)/,Op=/\/\*[^]*?\*\//g;function Ap(e){const t={};return e.replace(Op,"").split(Tp).forEach(n=>{if(n){const r=n.split(Pp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xe(e){let t="";if(Re(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const r=Xe(e[n]);r&&(t+=r+" ")}else if(Le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Ei(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Re(t)&&(e.class=Xe(t)),n&&(e.style=Fo(n)),e}const Lp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rp=Ka(Lp);function Bd(e){return!!e||e===""}const zd=e=>!!(e&&e.__v_isRef===!0),Ie=e=>Re(e)?e:e==null?"":Q(e)||Le(e)&&(e.toString===Dd||!oe(e.toString))?zd(e)?Ie(e.value):JSON.stringify(e,Fd,2):String(e),Fd=(e,t)=>zd(t)?Fd(e,t.value):xr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o],i)=>(n[Es(r,i)+" =>"]=o,n),{})}:Rd(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Es(n))}:Un(t)?Es(t):Le(t)&&!Q(t)&&!Nd(t)?String(t):t,Es=(e,t="")=>{var n;return Un(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class Ud{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nt,!t&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=nt;try{return nt=this,t()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Vd(e){return new Ud(e)}function Hd(){return nt}function $p(e,t=!1){nt&&nt.cleanups.push(e)}let Te;const Ts=new WeakSet;class Kd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ts.has(this)&&(Ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xl(this),Gd(this);const t=Te,n=$t;Te=this,$t=!0;try{return this.fn()}finally{Jd(this),Te=t,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Za(t);this.deps=this.depsTail=void 0,Xl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ia(this)&&this.run()}get dirty(){return ia(this)}}let Wd=0,vr;function qd(e){e.flags|=8,e.next=vr,vr=e}function Ja(){Wd++}function Ya(){if(--Wd>0)return;let e;for(;vr;){let t=vr,n;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=vr,vr=void 0;t;){if(n=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Gd(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jd(e){let t,n=e.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),Za(r),Dp(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}e.deps=t,e.depsTail=n}function ia(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Yd(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ho))return;e.globalVersion=ho;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ia(e)){e.flags&=-3;return}const n=Te,r=$t;Te=e,$t=!0;try{Gd(e);const o=e.fn(e._value);(t.version===0||zn(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Te=n,$t=r,Jd(e),e.flags&=-3}}function Za(e,t=!1){const{dep:n,prevSub:r,nextSub:o}=e;if(r&&(r.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Za(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $t=!0;const Zd=[];function Vn(){Zd.push($t),$t=!1}function Hn(){const e=Zd.pop();$t=e===void 0?!0:e}function Xl(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Te;Te=void 0;try{t()}finally{Te=n}}}let ho=0;class Np{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Te||!$t||Te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Te)n=this.activeLink=new Np(Te,this),Te.deps?(n.prevDep=Te.depsTail,Te.depsTail.nextDep=n,Te.depsTail=n):Te.deps=Te.depsTail=n,Xd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Te.depsTail,n.nextDep=void 0,Te.depsTail.nextDep=n,Te.depsTail=n,Te.deps===n&&(Te.deps=r)}return n}trigger(t){this.version++,ho++,this.notify(t)}notify(t){Ja();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ya()}}}function Xd(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Xd(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ti=new WeakMap,nr=Symbol(""),sa=Symbol(""),mo=Symbol("");function Qe(e,t,n){if($t&&Te){let r=Ti.get(e);r||Ti.set(e,r=new Map);let o=r.get(n);o||(r.set(n,o=new Xa),o.target=e,o.map=r,o.key=n),o.track()}}function dn(e,t,n,r,o,i){const s=Ti.get(e);if(!s){ho++;return}const l=a=>{a&&a.trigger()};if(Ja(),t==="clear")s.forEach(l);else{const a=Q(e),c=a&&Ga(n);if(a&&n==="length"){const u=Number(r);s.forEach((d,f)=>{(f==="length"||f===mo||!Un(f)&&f>=u)&&l(d)})}else switch(n!==void 0&&l(s.get(n)),c&&l(s.get(mo)),t){case"add":a?c&&l(s.get("length")):(l(s.get(nr)),xr(e)&&l(s.get(sa)));break;case"delete":a||(l(s.get(nr)),xr(e)&&l(s.get(sa)));break;case"set":xr(e)&&l(s.get(nr));break}}Ya()}function Mp(e,t){const n=Ti.get(e);return n&&n.get(t)}function mr(e){const t=he(e);return t===e?t:(Qe(t,"iterate",mo),Ct(e)?t:t.map(Ze))}function Qi(e){return Qe(e=he(e),"iterate",mo),e}const jp={__proto__:null,[Symbol.iterator](){return Ps(this,Symbol.iterator,Ze)},concat(...e){return mr(this).concat(...e.map(t=>Q(t)?mr(t):t))},entries(){return Ps(this,"entries",e=>(e[1]=Ze(e[1]),e))},every(e,t){return Xt(this,"every",e,t,void 0,arguments)},filter(e,t){return Xt(this,"filter",e,t,n=>n.map(Ze),arguments)},find(e,t){return Xt(this,"find",e,t,Ze,arguments)},findIndex(e,t){return Xt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xt(this,"findLast",e,t,Ze,arguments)},findLastIndex(e,t){return Xt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Os(this,"includes",e)},indexOf(...e){return Os(this,"indexOf",e)},join(e){return mr(this).join(e)},lastIndexOf(...e){return Os(this,"lastIndexOf",e)},map(e,t){return Xt(this,"map",e,t,void 0,arguments)},pop(){return Vr(this,"pop")},push(...e){return Vr(this,"push",e)},reduce(e,...t){return Ql(this,"reduce",e,t)},reduceRight(e,...t){return Ql(this,"reduceRight",e,t)},shift(){return Vr(this,"shift")},some(e,t){return Xt(this,"some",e,t,void 0,arguments)},splice(...e){return Vr(this,"splice",e)},toReversed(){return mr(this).toReversed()},toSorted(e){return mr(this).toSorted(e)},toSpliced(...e){return mr(this).toSpliced(...e)},unshift(...e){return Vr(this,"unshift",e)},values(){return Ps(this,"values",Ze)}};function Ps(e,t,n){const r=Qi(e),o=r[t]();return r!==e&&!Ct(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=n(i.value)),i}),o}const Bp=Array.prototype;function Xt(e,t,n,r,o,i){const s=Qi(e),l=s!==e&&!Ct(e),a=s[t];if(a!==Bp[t]){const d=a.apply(e,i);return l?Ze(d):d}let c=n;s!==e&&(l?c=function(d,f){return n.call(this,Ze(d),f,e)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,e)}));const u=a.call(s,c,r);return l&&o?o(u):u}function Ql(e,t,n,r){const o=Qi(e);let i=n;return o!==e&&(Ct(e)?n.length>3&&(i=function(s,l,a){return n.call(this,s,l,a,e)}):i=function(s,l,a){return n.call(this,s,Ze(l),a,e)}),o[t](i,...r)}function Os(e,t,n){const r=he(e);Qe(r,"iterate",mo);const o=r[t](...n);return(o===-1||o===!1)&&rl(n[0])?(n[0]=he(n[0]),r[t](...n)):o}function Vr(e,t,n=[]){Vn(),Ja();const r=he(e)[t].apply(e,n);return Ya(),Hn(),r}const zp=Ka("__proto__,__v_isRef,__isVue"),Qd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Un));function Fp(e){Un(e)||(e=String(e));const t=he(this);return Qe(t,"has",e),t.hasOwnProperty(e)}class ef{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(o?i?e0:of:i?rf:nf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=Q(t);if(!o){let a;if(s&&(a=jp[n]))return a;if(n==="hasOwnProperty")return Fp}const l=Reflect.get(t,n,Ne(t)?t:r);return(Un(n)?Qd.has(n):zp(n))||(o||Qe(t,"get",n),i)?l:Ne(l)?s&&Ga(n)?l:l.value:Le(l)?o?tl(l):Kn(l):l}}class tf extends ef{constructor(t=!1){super(!1,t)}set(t,n,r,o){let i=t[n];if(!this._isShallow){const a=ir(i);if(!Ct(r)&&!ir(r)&&(i=he(i),r=he(r)),!Q(t)&&Ne(i)&&!Ne(r))return a?!1:(i.value=r,!0)}const s=Q(t)&&Ga(n)?Number(n)<t.length:ve(t,n),l=Reflect.set(t,n,r,Ne(t)?t:o);return t===he(o)&&(s?zn(r,i)&&dn(t,"set",n,r):dn(t,"add",n,r)),l}deleteProperty(t,n){const r=ve(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&dn(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!Un(n)||!Qd.has(n))&&Qe(t,"has",n),r}ownKeys(t){return Qe(t,"iterate",Q(t)?"length":nr),Reflect.ownKeys(t)}}class Up extends ef{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vp=new tf,Hp=new Up,Kp=new tf(!0);const Qa=e=>e,es=e=>Reflect.getPrototypeOf(e);function oi(e,t,n=!1,r=!1){e=e.__v_raw;const o=he(e),i=he(t);n||(zn(t,i)&&Qe(o,"get",t),Qe(o,"get",i));const{has:s}=es(o),l=r?Qa:n?il:Ze;if(s.call(o,t))return l(e.get(t));if(s.call(o,i))return l(e.get(i));e!==o&&e.get(t)}function ii(e,t=!1){const n=this.__v_raw,r=he(n),o=he(e);return t||(zn(e,o)&&Qe(r,"has",e),Qe(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function si(e,t=!1){return e=e.__v_raw,!t&&Qe(he(e),"iterate",nr),Reflect.get(e,"size",e)}function ec(e,t=!1){!t&&!Ct(e)&&!ir(e)&&(e=he(e));const n=he(this);return es(n).has.call(n,e)||(n.add(e),dn(n,"add",e,e)),this}function tc(e,t,n=!1){!n&&!Ct(t)&&!ir(t)&&(t=he(t));const r=he(this),{has:o,get:i}=es(r);let s=o.call(r,e);s||(e=he(e),s=o.call(r,e));const l=i.call(r,e);return r.set(e,t),s?zn(t,l)&&dn(r,"set",e,t):dn(r,"add",e,t),this}function nc(e){const t=he(this),{has:n,get:r}=es(t);let o=n.call(t,e);o||(e=he(e),o=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return o&&dn(t,"delete",e,void 0),i}function rc(){const e=he(this),t=e.size!==0,n=e.clear();return t&&dn(e,"clear",void 0,void 0),n}function ai(e,t){return function(r,o){const i=this,s=i.__v_raw,l=he(s),a=t?Qa:e?il:Ze;return!e&&Qe(l,"iterate",nr),s.forEach((c,u)=>r.call(o,a(c),a(u),i))}}function li(e,t,n){return function(...r){const o=this.__v_raw,i=he(o),s=xr(i),l=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,c=o[e](...r),u=n?Qa:t?il:Ze;return!t&&Qe(i,"iterate",a?sa:nr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:l?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function kn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wp(){const e={get(i){return oi(this,i)},get size(){return si(this)},has:ii,add:ec,set:tc,delete:nc,clear:rc,forEach:ai(!1,!1)},t={get(i){return oi(this,i,!1,!0)},get size(){return si(this)},has:ii,add(i){return ec.call(this,i,!0)},set(i,s){return tc.call(this,i,s,!0)},delete:nc,clear:rc,forEach:ai(!1,!0)},n={get(i){return oi(this,i,!0)},get size(){return si(this,!0)},has(i){return ii.call(this,i,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:ai(!0,!1)},r={get(i){return oi(this,i,!0,!0)},get size(){return si(this,!0)},has(i){return ii.call(this,i,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:ai(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=li(i,!1,!1),n[i]=li(i,!0,!1),t[i]=li(i,!1,!0),r[i]=li(i,!0,!0)}),[e,n,t,r]}const[qp,Gp,Jp,Yp]=Wp();function el(e,t){const n=t?e?Yp:Jp:e?Gp:qp;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ve(n,o)&&o in r?n:r,o,i)}const Zp={get:el(!1,!1)},Xp={get:el(!1,!0)},Qp={get:el(!0,!1)};const nf=new WeakMap,rf=new WeakMap,of=new WeakMap,e0=new WeakMap;function t0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function n0(e){return e.__v_skip||!Object.isExtensible(e)?0:t0(_p(e))}function Kn(e){return ir(e)?e:nl(e,!1,Vp,Zp,nf)}function sf(e){return nl(e,!1,Kp,Xp,rf)}function tl(e){return nl(e,!0,Hp,Qp,of)}function nl(e,t,n,r,o){if(!Le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const s=n0(e);if(s===0)return e;const l=new Proxy(e,s===2?r:n);return o.set(e,l),l}function Nn(e){return ir(e)?Nn(e.__v_raw):!!(e&&e.__v_isReactive)}function ir(e){return!!(e&&e.__v_isReadonly)}function Ct(e){return!!(e&&e.__v_isShallow)}function rl(e){return e?!!e.__v_raw:!1}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function ol(e){return!ve(e,"__v_skip")&&Object.isExtensible(e)&&Md(e,"__v_skip",!0),e}const Ze=e=>Le(e)?Kn(e):e,il=e=>Le(e)?tl(e):e;function Ne(e){return e?e.__v_isRef===!0:!1}function De(e){return af(e,!1)}function r0(e){return af(e,!0)}function af(e,t){return Ne(e)?e:new o0(e,t)}class o0{constructor(t,n){this.dep=new Xa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:he(t),this._value=n?t:Ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ct(t)||ir(t);t=r?t:he(t),zn(t,n)&&(this._rawValue=t,this._value=r?t:Ze(t),this.dep.trigger())}}function Y(e){return Ne(e)?e.value:e}const i0={get:(e,t,n)=>t==="__v_raw"?e:Y(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Ne(o)&&!Ne(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function lf(e){return Nn(e)?e:new Proxy(e,i0)}function s0(e){const t=Q(e)?new Array(e.length):{};for(const n in e)t[n]=l0(e,n);return t}class a0{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Mp(he(this._object),this._key)}}function l0(e,t,n){const r=e[t];return Ne(r)?r:new a0(e,t,n)}class c0{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Xa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ho-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return qd(this),!0}get value(){const t=this.dep.track();return Yd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function u0(e,t,n=!1){let r,o;return oe(e)?r=e:(r=e.get,o=e.set),new c0(r,o,n)}const ci={},Pi=new WeakMap;let Yn;function d0(e,t=!1,n=Yn){if(n){let r=Pi.get(n);r||Pi.set(n,r=[]),r.push(e)}}function f0(e,t,n=Ce){const{immediate:r,deep:o,once:i,scheduler:s,augmentJob:l,call:a}=n,c=O=>o?O:Ct(O)||o===!1||o===0?rn(O,1):rn(O);let u,d,f,h,b=!1,g=!1;if(Ne(e)?(d=()=>e.value,b=Ct(e)):Nn(e)?(d=()=>c(e),b=!0):Q(e)?(g=!0,b=e.some(O=>Nn(O)||Ct(O)),d=()=>e.map(O=>{if(Ne(O))return O.value;if(Nn(O))return c(O);if(oe(O))return a?a(O,2):O()})):oe(e)?t?d=a?()=>a(e,2):e:d=()=>{if(f){Vn();try{f()}finally{Hn()}}const O=Yn;Yn=u;try{return a?a(e,3,[h]):e(h)}finally{Yn=O}}:d=Gt,t&&o){const O=d,N=o===!0?1/0:o;d=()=>rn(O(),N)}const y=Hd(),I=()=>{u.stop(),y&&qa(y.effects,u)};if(i&&t){const O=t;t=(...N)=>{O(...N),I()}}let v=g?new Array(e.length).fill(ci):ci;const _=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(t){const N=u.run();if(o||b||(g?N.some((q,K)=>zn(q,v[K])):zn(N,v))){f&&f();const q=Yn;Yn=u;try{const K=[N,v===ci?void 0:g&&v[0]===ci?[]:v,h];a?a(t,3,K):t(...K),v=N}finally{Yn=q}}}else u.run()};return l&&l(_),u=new Kd(d),u.scheduler=s?()=>s(_,!1):_,h=O=>d0(O,!1,u),f=u.onStop=()=>{const O=Pi.get(u);if(O){if(a)a(O,4);else for(const N of O)N();Pi.delete(u)}},t?r?_(!0):v=u.run():s?s(_.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function rn(e,t=1/0,n){if(t<=0||!Le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ne(e))rn(e.value,t,n);else if(Q(e))for(let r=0;r<e.length;r++)rn(e[r],t,n);else if(Rd(e)||xr(e))e.forEach(r=>{rn(r,t,n)});else if(Nd(e)){for(const r in e)rn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&rn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uo(e,t,n,r){try{return r?e(...r):e()}catch(o){ts(o,t,n)}}function Nt(e,t,n,r){if(oe(e)){const o=Uo(e,t,n,r);return o&&$d(o)&&o.catch(i=>{ts(i,t,n)}),o}if(Q(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Nt(e[i],t,n,r));return o}}function ts(e,t,n,r=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||Ce;if(t){let l=t.parent;const a=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,c)===!1)return}l=l.parent}if(i){Vn(),Uo(i,null,10,[e,a,c]),Hn();return}}h0(e,n,o,r,s)}function h0(e,t,n,r=!0,o=!1){if(o)throw e;console.error(e)}let po=!1,aa=!1;const rt=[];let Kt=0;const _r=[];let Tn=null,br=0;const cf=Promise.resolve();let sl=null;function ns(e){const t=sl||cf;return e?t.then(this?e.bind(this):e):t}function m0(e){let t=po?Kt+1:0,n=rt.length;for(;t<n;){const r=t+n>>>1,o=rt[r],i=bo(o);i<e||i===e&&o.flags&2?t=r+1:n=r}return t}function al(e){if(!(e.flags&1)){const t=bo(e),n=rt[rt.length-1];!n||!(e.flags&2)&&t>=bo(n)?rt.push(e):rt.splice(m0(t),0,e),e.flags|=1,uf()}}function uf(){!po&&!aa&&(aa=!0,sl=cf.then(ff))}function p0(e){Q(e)?_r.push(...e):Tn&&e.id===-1?Tn.splice(br+1,0,e):e.flags&1||(_r.push(e),e.flags|=1),uf()}function oc(e,t,n=po?Kt+1:0){for(;n<rt.length;n++){const r=rt[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function df(e){if(_r.length){const t=[...new Set(_r)].sort((n,r)=>bo(n)-bo(r));if(_r.length=0,Tn){Tn.push(...t);return}for(Tn=t,br=0;br<Tn.length;br++){const n=Tn[br];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tn=null,br=0}}const bo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ff(e){aa=!1,po=!0;try{for(Kt=0;Kt<rt.length;Kt++){const t=rt[Kt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Uo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Kt<rt.length;Kt++){const t=rt[Kt];t&&(t.flags&=-2)}Kt=0,rt.length=0,df(),po=!1,sl=null,(rt.length||_r.length)&&ff()}}let Fe=null,hf=null;function Oi(e){const t=Fe;return Fe=e,hf=e&&e.type.__scopeId||null,t}function me(e,t=Fe,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&bc(-1);const i=Oi(t);let s;try{s=e(...o)}finally{Oi(i),r._d&&bc(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Dr(e,t){if(Fe===null)return e;const n=ls(Fe),r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,s,l,a=Ce]=t[o];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&rn(s),r.push({dir:i,instance:n,value:s,oldValue:void 0,arg:l,modifiers:a}))}return e}function qn(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const l=o[s];i&&(l.oldValue=i[s].value);let a=l.dir[r];a&&(Vn(),Nt(a,n,8,[e.el,l,e,t]),Hn())}}const mf=Symbol("_vte"),pf=e=>e.__isTeleport,no=e=>e&&(e.disabled||e.disabled===""),b0=e=>e&&(e.defer||e.defer===""),ic=e=>typeof SVGElement<"u"&&e instanceof SVGElement,sc=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,la=(e,t)=>{const n=e&&e.to;return Re(n)?t?t(n):null:n},g0={name:"Teleport",__isTeleport:!0,process(e,t,n,r,o,i,s,l,a,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:b,createText:g,createComment:y}}=c,I=no(t.props);let{shapeFlag:v,children:_,dynamicChildren:O}=t;if(e==null){const N=t.el=g(""),q=t.anchor=g("");h(N,n,r),h(q,n,r);const K=(R,W)=>{v&16&&(o&&o.isCE&&(o.ce._teleportTarget=R),u(_,R,W,o,i,s,l,a))},H=()=>{const R=t.target=la(t.props,b),W=bf(R,t,g,h);R&&(s!=="svg"&&ic(R)?s="svg":s!=="mathml"&&sc(R)&&(s="mathml"),I||(K(R,W),bi(t)))};I&&(K(n,q),bi(t)),b0(t.props)?ct(H,i):H()}else{t.el=e.el,t.targetStart=e.targetStart;const N=t.anchor=e.anchor,q=t.target=e.target,K=t.targetAnchor=e.targetAnchor,H=no(e.props),R=H?n:q,W=H?N:K;if(s==="svg"||ic(q)?s="svg":(s==="mathml"||sc(q))&&(s="mathml"),O?(f(e.dynamicChildren,O,R,o,i,s,l),hl(e,t,!0)):a||d(e,t,R,W,o,i,s,l,!1),I)H?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ui(t,n,N,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const re=t.target=la(t.props,b);re&&ui(t,re,null,c,0)}else H&&ui(t,q,K,c,1);bi(t)}},remove(e,t,n,{um:r,o:{remove:o}},i){const{shapeFlag:s,children:l,anchor:a,targetStart:c,targetAnchor:u,target:d,props:f}=e;if(d&&(o(c),o(u)),i&&o(a),s&16){const h=i||!no(f);for(let b=0;b<l.length;b++){const g=l[b];r(g,t,n,h,!!g.dynamicChildren)}}},move:ui,hydrate:v0};function ui(e,t,n,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,t,n);const{el:s,anchor:l,shapeFlag:a,children:c,props:u}=e,d=i===2;if(d&&r(s,t,n),(!d||no(u))&&a&16)for(let f=0;f<c.length;f++)o(c[f],t,n,2);d&&r(l,t,n)}function v0(e,t,n,r,o,i,{o:{nextSibling:s,parentNode:l,querySelector:a,insert:c,createText:u}},d){const f=t.target=la(t.props,a);if(f){const h=f._lpa||f.firstChild;if(t.shapeFlag&16)if(no(t.props))t.anchor=d(s(e),t,l(e),n,r,o,i),t.targetStart=h,t.targetAnchor=h&&s(h);else{t.anchor=s(e);let b=h;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")t.targetStart=b;else if(b.data==="teleport anchor"){t.targetAnchor=b,f._lpa=t.targetAnchor&&s(t.targetAnchor);break}}b=s(b)}t.targetAnchor||bf(f,t,u,c),d(h&&s(h),t,f,n,r,o,i)}bi(t)}return t.anchor&&s(t.anchor)}const y0=g0;function bi(e){const t=e.ctx;if(t&&t.ut){let n=e.targetStart;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}function bf(e,t,n,r){const o=t.targetStart=n(""),i=t.targetAnchor=n("");return o[mf]=i,e&&(r(o,e),r(i,e)),i}const Pn=Symbol("_leaveCb"),di=Symbol("_enterCb");function gf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fr(()=>{e.isMounted=!0}),Ef(()=>{e.isUnmounting=!0}),e}const _t=[Function,Array],vf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},yf=e=>{const t=e.subTree;return t.component?yf(t.component):t},w0={name:"BaseTransition",props:vf,setup(e,{slots:t}){const n=pl(),r=gf();return()=>{const o=t.default&&ll(t.default(),!0);if(!o||!o.length)return;const i=wf(o),s=he(e),{mode:l}=s;if(r.isLeaving)return As(i);const a=ac(i);if(!a)return As(i);let c=go(a,s,r,n,f=>c=f);a.type!==ot&&sr(a,c);const u=n.subTree,d=u&&ac(u);if(d&&d.type!==ot&&!Qn(a,d)&&yf(n).type!==ot){const f=go(d,s,r,n);if(sr(d,f),l==="out-in"&&a.type!==ot)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave},As(i);l==="in-out"&&a.type!==ot&&(f.delayLeave=(h,b,g)=>{const y=kf(r,d);y[String(d.key)]=d,h[Pn]=()=>{b(),h[Pn]=void 0,delete c.delayedLeave},c.delayedLeave=g})}return i}}};function wf(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ot){t=n;break}}return t}const k0=w0;function kf(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function go(e,t,n,r,o){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:b,onLeaveCancelled:g,onBeforeAppear:y,onAppear:I,onAfterAppear:v,onAppearCancelled:_}=t,O=String(e.key),N=kf(n,e),q=(R,W)=>{R&&Nt(R,r,9,W)},K=(R,W)=>{const re=W[1];q(R,W),Q(R)?R.every(z=>z.length<=1)&&re():R.length<=1&&re()},H={mode:s,persisted:l,beforeEnter(R){let W=a;if(!n.isMounted)if(i)W=y||a;else return;R[Pn]&&R[Pn](!0);const re=N[O];re&&Qn(e,re)&&re.el[Pn]&&re.el[Pn](),q(W,[R])},enter(R){let W=c,re=u,z=d;if(!n.isMounted)if(i)W=I||c,re=v||u,z=_||d;else return;let ae=!1;const Pe=R[di]=Ue=>{ae||(ae=!0,Ue?q(z,[R]):q(re,[R]),H.delayedLeave&&H.delayedLeave(),R[di]=void 0)};W?K(W,[R,Pe]):Pe()},leave(R,W){const re=String(e.key);if(R[di]&&R[di](!0),n.isUnmounting)return W();q(f,[R]);let z=!1;const ae=R[Pn]=Pe=>{z||(z=!0,W(),Pe?q(g,[R]):q(b,[R]),R[Pn]=void 0,N[re]===e&&delete N[re])};N[re]=e,h?K(h,[R,ae]):ae()},clone(R){const W=go(R,t,n,r,o);return o&&o(W),W}};return H}function As(e){if(rs(e))return e=Fn(e),e.children=null,e}function ac(e){if(!rs(e))return pf(e.type)&&e.children?wf(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&oe(n.default))return n.default()}}function sr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,sr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ll(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const l=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===le?(s.patchFlag&128&&o++,r=r.concat(ll(s.children,t,l))):(t||s.type!==ot)&&r.push(l!=null?Fn(s,{key:l}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function xf(e,t){return oe(e)?Me({name:e.name},t,{setup:e}):e}function _f(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ca(e,t,n,r,o=!1){if(Q(e)){e.forEach((b,g)=>ca(b,t&&(Q(t)?t[g]:t),n,r,o));return}if(Ir(r)&&!o)return;const i=r.shapeFlag&4?ls(r.component):r.el,s=o?null:i,{i:l,r:a}=e,c=t&&t.r,u=l.refs===Ce?l.refs={}:l.refs,d=l.setupState,f=he(d),h=d===Ce?()=>!1:b=>ve(f,b);if(c!=null&&c!==a&&(Re(c)?(u[c]=null,h(c)&&(d[c]=null)):Ne(c)&&(c.value=null)),oe(a))Uo(a,l,12,[s,u]);else{const b=Re(a),g=Ne(a);if(b||g){const y=()=>{if(e.f){const I=b?h(a)?d[a]:u[a]:a.value;o?Q(I)&&qa(I,i):Q(I)?I.includes(i)||I.push(i):b?(u[a]=[i],h(a)&&(d[a]=u[a])):(a.value=[i],e.k&&(u[e.k]=a.value))}else b?(u[a]=s,h(a)&&(d[a]=s)):g&&(a.value=s,e.k&&(u[e.k]=s))};s?(y.id=-1,ct(y,n)):y()}}}const Ir=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function x0(e,t){If(e,"a",t)}function _0(e,t){If(e,"da",t)}function If(e,t,n=Ve){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(os(t,r,n),n){let o=n.parent;for(;o&&o.parent;)rs(o.parent.vnode)&&I0(r,t,n,o),o=o.parent}}function I0(e,t,n,r){const o=os(t,e,r,!0);Tf(()=>{qa(r[t],o)},n)}function os(e,t,n=Ve,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{Vn();const l=Vo(n),a=Nt(t,n,e,s);return l(),Hn(),a});return r?o.unshift(i):o.push(i),i}}const gn=e=>(t,n=Ve)=>{(!as||e==="sp")&&os(e,(...r)=>t(...r),n)},Sf=gn("bm"),fr=gn("m"),S0=gn("bu"),Cf=gn("u"),Ef=gn("bum"),Tf=gn("um"),C0=gn("sp"),E0=gn("rtg"),T0=gn("rtc");function P0(e,t=Ve){os("ec",e,t)}const cl="components",O0="directives";function je(e,t){return ul(cl,e,!0,t)||e}const Pf=Symbol.for("v-ndc");function it(e){return Re(e)?ul(cl,e,!1)||e:e||Pf}function Nr(e){return ul(O0,e)}function ul(e,t,n=!0,r=!1){const o=Fe||Ve;if(o){const i=o.type;if(e===cl){const l=pb(i,!1);if(l&&(l===t||l===Et(t)||l===Xi(Et(t))))return i}const s=lc(o[e]||i[e],t)||lc(o.appContext[e],t);return!s&&r?i:s}}function lc(e,t){return e&&(e[t]||e[Et(t)]||e[Xi(Et(t))])}function ar(e,t,n,r){let o;const i=n,s=Q(e);if(s||Re(e)){const l=s&&Nn(e);let a=!1;l&&(a=!Ct(e),e=Qi(e)),o=new Array(e.length);for(let c=0,u=e.length;c<u;c++)o[c]=t(a?Ze(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,i)}else if(Le(e))if(e[Symbol.iterator])o=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);o=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];o[a]=t(e[u],u,a,i)}}else o=[];return o}function ye(e,t,n={},r,o){if(Fe.ce||Fe.parent&&Ir(Fe.parent)&&Fe.parent.ce)return t!=="default"&&(n.name=t),k(),fe(le,null,[j("slot",n,r&&r())],64);let i=e[t];i&&i._c&&(i._d=!1),k();const s=i&&Of(i(n)),l=fe(le,{key:(n.key||s&&s.key||`_${t}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Of(e){return e.some(t=>yo(t)?!(t.type===ot||t.type===le&&!Of(t.children)):!0)?e:null}const ua=e=>e?Jf(e)?ls(e):ua(e.parent):null,ro=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ua(e.parent),$root:e=>ua(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>dl(e),$forceUpdate:e=>e.f||(e.f=()=>{al(e.update)}),$nextTick:e=>e.n||(e.n=ns.bind(e.proxy)),$watch:e=>X0.bind(e)}),Ls=(e,t)=>e!==Ce&&!e.__isScriptSetup&&ve(e,t),A0={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:i,accessCache:s,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const h=s[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(Ls(r,t))return s[t]=1,r[t];if(o!==Ce&&ve(o,t))return s[t]=2,o[t];if((c=e.propsOptions[0])&&ve(c,t))return s[t]=3,i[t];if(n!==Ce&&ve(n,t))return s[t]=4,n[t];da&&(s[t]=0)}}const u=ro[t];let d,f;if(u)return t==="$attrs"&&Qe(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==Ce&&ve(n,t))return s[t]=4,n[t];if(f=a.config.globalProperties,ve(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return Ls(o,t)?(o[t]=n,!0):r!==Ce&&ve(r,t)?(r[t]=n,!0):ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:i}},s){let l;return!!n[s]||e!==Ce&&ve(e,s)||Ls(t,s)||(l=i[0])&&ve(l,s)||ve(r,s)||ve(ro,s)||ve(o.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ve(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cc(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let da=!0;function L0(e){const t=dl(e),n=e.proxy,r=e.ctx;da=!1,t.beforeCreate&&uc(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:l,provide:a,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:b,activated:g,deactivated:y,beforeDestroy:I,beforeUnmount:v,destroyed:_,unmounted:O,render:N,renderTracked:q,renderTriggered:K,errorCaptured:H,serverPrefetch:R,expose:W,inheritAttrs:re,components:z,directives:ae,filters:Pe}=t;if(c&&R0(c,r,null),s)for(const ee in s){const ce=s[ee];oe(ce)&&(r[ee]=ce.bind(n))}if(o){const ee=o.call(n,n);Le(ee)&&(e.data=Kn(ee))}if(da=!0,i)for(const ee in i){const ce=i[ee],mt=oe(ce)?ce.bind(n,n):oe(ce.get)?ce.get.bind(n,n):Gt,et=!oe(ce)&&oe(ce.set)?ce.set.bind(n):Gt,Ge=Ae({get:mt,set:et});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:He=>Ge.value=He})}if(l)for(const ee in l)Af(l[ee],r,n,ee);if(a){const ee=oe(a)?a.call(n):a;Reflect.ownKeys(ee).forEach(ce=>{gi(ce,ee[ce])})}u&&uc(u,e,"c");function ge(ee,ce){Q(ce)?ce.forEach(mt=>ee(mt.bind(n))):ce&&ee(ce.bind(n))}if(ge(Sf,d),ge(fr,f),ge(S0,h),ge(Cf,b),ge(x0,g),ge(_0,y),ge(P0,H),ge(T0,q),ge(E0,K),ge(Ef,v),ge(Tf,O),ge(C0,R),Q(W))if(W.length){const ee=e.exposed||(e.exposed={});W.forEach(ce=>{Object.defineProperty(ee,ce,{get:()=>n[ce],set:mt=>n[ce]=mt})})}else e.exposed||(e.exposed={});N&&e.render===Gt&&(e.render=N),re!=null&&(e.inheritAttrs=re),z&&(e.components=z),ae&&(e.directives=ae),R&&_f(e)}function R0(e,t,n=Gt){Q(e)&&(e=fa(e));for(const r in e){const o=e[r];let i;Le(o)?"default"in o?i=yt(o.from||r,o.default,!0):i=yt(o.from||r):i=yt(o),Ne(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function uc(e,t,n){Nt(Q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Af(e,t,n,r){let o=r.includes(".")?Hf(n,r):()=>n[r];if(Re(e)){const i=t[e];oe(i)&&qt(o,i)}else if(oe(e))qt(o,e.bind(n));else if(Le(e))if(Q(e))e.forEach(i=>Af(i,t,n,r));else{const i=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(i)&&qt(o,i,e)}}function dl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(t);let a;return l?a=l:!o.length&&!n&&!r?a=t:(a={},o.length&&o.forEach(c=>Ai(a,c,s,!0)),Ai(a,t,s)),Le(t)&&i.set(t,a),a}function Ai(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Ai(e,i,n,!0),o&&o.forEach(s=>Ai(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const l=$0[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const $0={data:dc,props:fc,emits:fc,methods:Yr,computed:Yr,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Yr,directives:Yr,watch:N0,provide:dc,inject:D0};function dc(e,t){return t?e?function(){return Me(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function D0(e,t){return Yr(fa(e),fa(t))}function fa(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Yr(e,t){return e?Me(Object.create(null),e,t):t}function fc(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:Me(Object.create(null),cc(e),cc(t??{})):t}function N0(e,t){if(!e)return t;if(!t)return e;const n=Me(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function Lf(){return{app:null,config:{isNativeTag:kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let M0=0;function j0(e,t){return function(r,o=null){oe(r)||(r=Me({},r)),o!=null&&!Le(o)&&(o=null);const i=Lf(),s=new WeakSet,l=[];let a=!1;const c=i.app={_uid:M0++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:gb,get config(){return i.config},set config(u){},use(u,...d){return s.has(u)||(u&&oe(u.install)?(s.add(u),u.install(c,...d)):oe(u)&&(s.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,f){if(!a){const h=c._ceVNode||j(r,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),d&&t?t(h,u):e(h,u,f),a=!0,c._container=u,u.__vue_app__=c,ls(h.component)}},onUnmount(u){l.push(u)},unmount(){a&&(Nt(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=rr;rr=c;try{return u()}finally{rr=d}}};return c}}let rr=null;function gi(e,t){if(Ve){let n=Ve.provides;const r=Ve.parent&&Ve.parent.provides;r===n&&(n=Ve.provides=Object.create(r)),n[e]=t}}function yt(e,t,n=!1){const r=Ve||Fe;if(r||rr){const o=rr?rr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&oe(t)?t.call(r&&r.proxy):t}}function B0(){return!!(Ve||Fe||rr)}const Rf={},$f=()=>Object.create(Rf),Df=e=>Object.getPrototypeOf(e)===Rf;function z0(e,t,n,r=!1){const o={},i=$f();e.propsDefaults=Object.create(null),Nf(e,t,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);n?e.props=r?o:sf(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function F0(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,l=he(o),[a]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(is(e.emitsOptions,f))continue;const h=t[f];if(a)if(ve(i,f))h!==i[f]&&(i[f]=h,c=!0);else{const b=Et(f);o[b]=ha(a,l,b,h,e,!1)}else h!==i[f]&&(i[f]=h,c=!0)}}}else{Nf(e,t,o,i)&&(c=!0);let u;for(const d in l)(!t||!ve(t,d)&&((u=dr(d))===d||!ve(t,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=ha(a,l,d,void 0,e,!0)):delete o[d]);if(i!==l)for(const d in i)(!t||!ve(t,d))&&(delete i[d],c=!0)}c&&dn(e.attrs,"set","")}function Nf(e,t,n,r){const[o,i]=e.propsOptions;let s=!1,l;if(t)for(let a in t){if(to(a))continue;const c=t[a];let u;o&&ve(o,u=Et(a))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:is(e.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,s=!0)}if(i){const a=he(n),c=l||Ce;for(let u=0;u<i.length;u++){const d=i[u];n[d]=ha(o,a,d,c[d],e,!ve(c,d))}}return s}function ha(e,t,n,r,o,i){const s=e[n];if(s!=null){const l=ve(s,"default");if(l&&r===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&oe(a)){const{propsDefaults:c}=o;if(n in c)r=c[n];else{const u=Vo(o);r=c[n]=a.call(null,t),u()}}else r=a;o.ce&&o.ce._setProp(n,r)}s[0]&&(i&&!l?r=!1:s[1]&&(r===""||r===dr(n))&&(r=!0))}return r}const U0=new WeakMap;function Mf(e,t,n=!1){const r=n?U0:t.propsCache,o=r.get(e);if(o)return o;const i=e.props,s={},l=[];let a=!1;if(!oe(e)){const u=d=>{a=!0;const[f,h]=Mf(d,t,!0);Me(s,f),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return Le(e)&&r.set(e,kr),kr;if(Q(i))for(let u=0;u<i.length;u++){const d=Et(i[u]);hc(d)&&(s[d]=Ce)}else if(i)for(const u in i){const d=Et(u);if(hc(d)){const f=i[u],h=s[d]=Q(f)||oe(f)?{type:f}:Me({},f),b=h.type;let g=!1,y=!0;if(Q(b))for(let I=0;I<b.length;++I){const v=b[I],_=oe(v)&&v.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(y=!1)}else g=oe(b)&&b.name==="Boolean";h[0]=g,h[1]=y,(g||ve(h,"default"))&&l.push(d)}}const c=[s,l];return Le(e)&&r.set(e,c),c}function hc(e){return e[0]!=="$"&&!to(e)}const jf=e=>e[0]==="_"||e==="$stable",fl=e=>Q(e)?e.map(Wt):[Wt(e)],V0=(e,t,n)=>{if(t._n)return t;const r=me((...o)=>fl(t(...o)),n);return r._c=!1,r},Bf=(e,t,n)=>{const r=e._ctx;for(const o in e){if(jf(o))continue;const i=e[o];if(oe(i))t[o]=V0(o,i,r);else if(i!=null){const s=fl(i);t[o]=()=>s}}},zf=(e,t)=>{const n=fl(t);e.slots.default=()=>n},Ff=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},H0=(e,t,n)=>{const r=e.slots=$f();if(e.vnode.shapeFlag&32){const o=t._;o?(Ff(r,t,n),n&&Md(r,"_",o,!0)):Bf(t,r)}else t&&zf(e,t)},K0=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,s=Ce;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Ff(o,t,n):(i=!t.$stable,Bf(t,o)),s=t}else t&&(zf(e,t),s={default:1});if(i)for(const l in o)!jf(l)&&s[l]==null&&delete o[l]},ct=ib;function W0(e){return q0(e)}function q0(e,t){const n=jd();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:l,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Gt,insertStaticContent:b}=e,g=(m,p,w,A=null,S=null,L=null,B=void 0,M=null,D=!!p.dynamicChildren)=>{if(m===p)return;m&&!Qn(m,p)&&(A=E(m),He(m,S,L,!0),m=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:$,ref:Z,shapeFlag:U}=p;switch($){case ss:y(m,p,w,A);break;case ot:I(m,p,w,A);break;case Ds:m==null&&v(p,w,A,B);break;case le:z(m,p,w,A,S,L,B,M,D);break;default:U&1?N(m,p,w,A,S,L,B,M,D):U&6?ae(m,p,w,A,S,L,B,M,D):(U&64||U&128)&&$.process(m,p,w,A,S,L,B,M,D,G)}Z!=null&&S&&ca(Z,m&&m.ref,L,p||m,!p)},y=(m,p,w,A)=>{if(m==null)r(p.el=l(p.children),w,A);else{const S=p.el=m.el;p.children!==m.children&&c(S,p.children)}},I=(m,p,w,A)=>{m==null?r(p.el=a(p.children||""),w,A):p.el=m.el},v=(m,p,w,A)=>{[m.el,m.anchor]=b(m.children,p,w,A,m.el,m.anchor)},_=({el:m,anchor:p},w,A)=>{let S;for(;m&&m!==p;)S=f(m),r(m,w,A),m=S;r(p,w,A)},O=({el:m,anchor:p})=>{let w;for(;m&&m!==p;)w=f(m),o(m),m=w;o(p)},N=(m,p,w,A,S,L,B,M,D)=>{p.type==="svg"?B="svg":p.type==="math"&&(B="mathml"),m==null?q(p,w,A,S,L,B,M,D):R(m,p,S,L,B,M,D)},q=(m,p,w,A,S,L,B,M)=>{let D,$;const{props:Z,shapeFlag:U,transition:J,dirs:ne}=m;if(D=m.el=s(m.type,L,Z&&Z.is,Z),U&8?u(D,m.children):U&16&&H(m.children,D,null,A,S,Rs(m,L),B,M),ne&&qn(m,null,A,"created"),K(D,m,m.scopeId,B,A),Z){for(const Ee in Z)Ee!=="value"&&!to(Ee)&&i(D,Ee,null,Z[Ee],L,A);"value"in Z&&i(D,"value",null,Z.value,L),($=Z.onVnodeBeforeMount)&&Vt($,A,m)}ne&&qn(m,null,A,"beforeMount");const ue=G0(S,J);ue&&J.beforeEnter(D),r(D,p,w),(($=Z&&Z.onVnodeMounted)||ue||ne)&&ct(()=>{$&&Vt($,A,m),ue&&J.enter(D),ne&&qn(m,null,A,"mounted")},S)},K=(m,p,w,A,S)=>{if(w&&h(m,w),A)for(let L=0;L<A.length;L++)h(m,A[L]);if(S){let L=S.subTree;if(p===L||Wf(L.type)&&(L.ssContent===p||L.ssFallback===p)){const B=S.vnode;K(m,B,B.scopeId,B.slotScopeIds,S.parent)}}},H=(m,p,w,A,S,L,B,M,D=0)=>{for(let $=D;$<m.length;$++){const Z=m[$]=M?On(m[$]):Wt(m[$]);g(null,Z,p,w,A,S,L,B,M)}},R=(m,p,w,A,S,L,B)=>{const M=p.el=m.el;let{patchFlag:D,dynamicChildren:$,dirs:Z}=p;D|=m.patchFlag&16;const U=m.props||Ce,J=p.props||Ce;let ne;if(w&&Gn(w,!1),(ne=J.onVnodeBeforeUpdate)&&Vt(ne,w,p,m),Z&&qn(p,m,w,"beforeUpdate"),w&&Gn(w,!0),(U.innerHTML&&J.innerHTML==null||U.textContent&&J.textContent==null)&&u(M,""),$?W(m.dynamicChildren,$,M,w,A,Rs(p,S),L):B||ce(m,p,M,null,w,A,Rs(p,S),L,!1),D>0){if(D&16)re(M,U,J,w,S);else if(D&2&&U.class!==J.class&&i(M,"class",null,J.class,S),D&4&&i(M,"style",U.style,J.style,S),D&8){const ue=p.dynamicProps;for(let Ee=0;Ee<ue.length;Ee++){const ke=ue[Ee],pt=U[ke],Je=J[ke];(Je!==pt||ke==="value")&&i(M,ke,pt,Je,S,w)}}D&1&&m.children!==p.children&&u(M,p.children)}else!B&&$==null&&re(M,U,J,w,S);((ne=J.onVnodeUpdated)||Z)&&ct(()=>{ne&&Vt(ne,w,p,m),Z&&qn(p,m,w,"updated")},A)},W=(m,p,w,A,S,L,B)=>{for(let M=0;M<p.length;M++){const D=m[M],$=p[M],Z=D.el&&(D.type===le||!Qn(D,$)||D.shapeFlag&70)?d(D.el):w;g(D,$,Z,null,A,S,L,B,!0)}},re=(m,p,w,A,S)=>{if(p!==w){if(p!==Ce)for(const L in p)!to(L)&&!(L in w)&&i(m,L,p[L],null,S,A);for(const L in w){if(to(L))continue;const B=w[L],M=p[L];B!==M&&L!=="value"&&i(m,L,M,B,S,A)}"value"in w&&i(m,"value",p.value,w.value,S)}},z=(m,p,w,A,S,L,B,M,D)=>{const $=p.el=m?m.el:l(""),Z=p.anchor=m?m.anchor:l("");let{patchFlag:U,dynamicChildren:J,slotScopeIds:ne}=p;ne&&(M=M?M.concat(ne):ne),m==null?(r($,w,A),r(Z,w,A),H(p.children||[],w,Z,S,L,B,M,D)):U>0&&U&64&&J&&m.dynamicChildren?(W(m.dynamicChildren,J,w,S,L,B,M),(p.key!=null||S&&p===S.subTree)&&hl(m,p,!0)):ce(m,p,w,Z,S,L,B,M,D)},ae=(m,p,w,A,S,L,B,M,D)=>{p.slotScopeIds=M,m==null?p.shapeFlag&512?S.ctx.activate(p,w,A,B,D):Pe(p,w,A,S,L,B,D):Ue(m,p,D)},Pe=(m,p,w,A,S,L,B)=>{const M=m.component=ub(m,A,S);if(rs(m)&&(M.ctx.renderer=G),db(M,!1,B),M.asyncDep){if(S&&S.registerDep(M,ge,B),!m.el){const D=M.subTree=j(ot);I(null,D,p,w)}}else ge(M,m,p,w,S,L,B)},Ue=(m,p,w)=>{const A=p.component=m.component;if(rb(m,p,w))if(A.asyncDep&&!A.asyncResolved){ee(A,p,w);return}else A.next=p,A.update();else p.el=m.el,A.vnode=p},ge=(m,p,w,A,S,L,B)=>{const M=()=>{if(m.isMounted){let{next:U,bu:J,u:ne,parent:ue,vnode:Ee}=m;{const bt=Uf(m);if(bt){U&&(U.el=Ee.el,ee(m,U,B)),bt.asyncDep.then(()=>{m.isUnmounted||M()});return}}let ke=U,pt;Gn(m,!1),U?(U.el=Ee.el,ee(m,U,B)):U=Ee,J&&Cs(J),(pt=U.props&&U.props.onVnodeBeforeUpdate)&&Vt(pt,ue,U,Ee),Gn(m,!0);const Je=$s(m),Pt=m.subTree;m.subTree=Je,g(Pt,Je,d(Pt.el),E(Pt),m,S,L),U.el=Je.el,ke===null&&ob(m,Je.el),ne&&ct(ne,S),(pt=U.props&&U.props.onVnodeUpdated)&&ct(()=>Vt(pt,ue,U,Ee),S)}else{let U;const{el:J,props:ne}=p,{bm:ue,m:Ee,parent:ke,root:pt,type:Je}=m,Pt=Ir(p);if(Gn(m,!1),ue&&Cs(ue),!Pt&&(U=ne&&ne.onVnodeBeforeMount)&&Vt(U,ke,p),Gn(m,!0),J&&$e){const bt=()=>{m.subTree=$s(m),$e(J,m.subTree,m,S,null)};Pt&&Je.__asyncHydrate?Je.__asyncHydrate(J,m,bt):bt()}else{pt.ce&&pt.ce._injectChildStyle(Je);const bt=m.subTree=$s(m);g(null,bt,w,A,m,S,L),p.el=bt.el}if(Ee&&ct(Ee,S),!Pt&&(U=ne&&ne.onVnodeMounted)){const bt=p;ct(()=>Vt(U,ke,bt),S)}(p.shapeFlag&256||ke&&Ir(ke.vnode)&&ke.vnode.shapeFlag&256)&&m.a&&ct(m.a,S),m.isMounted=!0,p=w=A=null}};m.scope.on();const D=m.effect=new Kd(M);m.scope.off();const $=m.update=D.run.bind(D),Z=m.job=D.runIfDirty.bind(D);Z.i=m,Z.id=m.uid,D.scheduler=()=>al(Z),Gn(m,!0),$()},ee=(m,p,w)=>{p.component=m;const A=m.vnode.props;m.vnode=p,m.next=null,F0(m,p.props,A,w),K0(m,p.children,w),Vn(),oc(m),Hn()},ce=(m,p,w,A,S,L,B,M,D=!1)=>{const $=m&&m.children,Z=m?m.shapeFlag:0,U=p.children,{patchFlag:J,shapeFlag:ne}=p;if(J>0){if(J&128){et($,U,w,A,S,L,B,M,D);return}else if(J&256){mt($,U,w,A,S,L,B,M,D);return}}ne&8?(Z&16&&xt($,S,L),U!==$&&u(w,U)):Z&16?ne&16?et($,U,w,A,S,L,B,M,D):xt($,S,L,!0):(Z&8&&u(w,""),ne&16&&H(U,w,A,S,L,B,M,D))},mt=(m,p,w,A,S,L,B,M,D)=>{m=m||kr,p=p||kr;const $=m.length,Z=p.length,U=Math.min($,Z);let J;for(J=0;J<U;J++){const ne=p[J]=D?On(p[J]):Wt(p[J]);g(m[J],ne,w,null,S,L,B,M,D)}$>Z?xt(m,S,L,!0,!1,U):H(p,w,A,S,L,B,M,D,U)},et=(m,p,w,A,S,L,B,M,D)=>{let $=0;const Z=p.length;let U=m.length-1,J=Z-1;for(;$<=U&&$<=J;){const ne=m[$],ue=p[$]=D?On(p[$]):Wt(p[$]);if(Qn(ne,ue))g(ne,ue,w,null,S,L,B,M,D);else break;$++}for(;$<=U&&$<=J;){const ne=m[U],ue=p[J]=D?On(p[J]):Wt(p[J]);if(Qn(ne,ue))g(ne,ue,w,null,S,L,B,M,D);else break;U--,J--}if($>U){if($<=J){const ne=J+1,ue=ne<Z?p[ne].el:A;for(;$<=J;)g(null,p[$]=D?On(p[$]):Wt(p[$]),w,ue,S,L,B,M,D),$++}}else if($>J)for(;$<=U;)He(m[$],S,L,!0),$++;else{const ne=$,ue=$,Ee=new Map;for($=ue;$<=J;$++){const gt=p[$]=D?On(p[$]):Wt(p[$]);gt.key!=null&&Ee.set(gt.key,$)}let ke,pt=0;const Je=J-ue+1;let Pt=!1,bt=0;const Ur=new Array(Je);for($=0;$<Je;$++)Ur[$]=0;for($=ne;$<=U;$++){const gt=m[$];if(pt>=Je){He(gt,S,L,!0);continue}let Ut;if(gt.key!=null)Ut=Ee.get(gt.key);else for(ke=ue;ke<=J;ke++)if(Ur[ke-ue]===0&&Qn(gt,p[ke])){Ut=ke;break}Ut===void 0?He(gt,S,L,!0):(Ur[Ut-ue]=$+1,Ut>=bt?bt=Ut:Pt=!0,g(gt,p[Ut],w,null,S,L,B,M,D),pt++)}const Jl=Pt?J0(Ur):kr;for(ke=Jl.length-1,$=Je-1;$>=0;$--){const gt=ue+$,Ut=p[gt],Yl=gt+1<Z?p[gt+1].el:A;Ur[$]===0?g(null,Ut,w,Yl,S,L,B,M,D):Pt&&(ke<0||$!==Jl[ke]?Ge(Ut,w,Yl,2):ke--)}}},Ge=(m,p,w,A,S=null)=>{const{el:L,type:B,transition:M,children:D,shapeFlag:$}=m;if($&6){Ge(m.component.subTree,p,w,A);return}if($&128){m.suspense.move(p,w,A);return}if($&64){B.move(m,p,w,G);return}if(B===le){r(L,p,w);for(let U=0;U<D.length;U++)Ge(D[U],p,w,A);r(m.anchor,p,w);return}if(B===Ds){_(m,p,w);return}if(A!==2&&$&1&&M)if(A===0)M.beforeEnter(L),r(L,p,w),ct(()=>M.enter(L),S);else{const{leave:U,delayLeave:J,afterLeave:ne}=M,ue=()=>r(L,p,w),Ee=()=>{U(L,()=>{ue(),ne&&ne()})};J?J(L,ue,Ee):Ee()}else r(L,p,w)},He=(m,p,w,A=!1,S=!1)=>{const{type:L,props:B,ref:M,children:D,dynamicChildren:$,shapeFlag:Z,patchFlag:U,dirs:J,cacheIndex:ne}=m;if(U===-2&&(S=!1),M!=null&&ca(M,null,w,m,!0),ne!=null&&(p.renderCache[ne]=void 0),Z&256){p.ctx.deactivate(m);return}const ue=Z&1&&J,Ee=!Ir(m);let ke;if(Ee&&(ke=B&&B.onVnodeBeforeUnmount)&&Vt(ke,p,m),Z&6)ri(m.component,w,A);else{if(Z&128){m.suspense.unmount(w,A);return}ue&&qn(m,null,p,"beforeUnmount"),Z&64?m.type.remove(m,p,w,G,A):$&&!$.hasOnce&&(L!==le||U>0&&U&64)?xt($,p,w,!1,!0):(L===le&&U&384||!S&&Z&16)&&xt(D,p,w),A&&wn(m)}(Ee&&(ke=B&&B.onVnodeUnmounted)||ue)&&ct(()=>{ke&&Vt(ke,p,m),ue&&qn(m,null,p,"unmounted")},w)},wn=m=>{const{type:p,el:w,anchor:A,transition:S}=m;if(p===le){Ft(w,A);return}if(p===Ds){O(m);return}const L=()=>{o(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(m.shapeFlag&1&&S&&!S.persisted){const{leave:B,delayLeave:M}=S,D=()=>B(w,L);M?M(m.el,L,D):D()}else L()},Ft=(m,p)=>{let w;for(;m!==p;)w=f(m),o(m),m=w;o(p)},ri=(m,p,w)=>{const{bum:A,scope:S,job:L,subTree:B,um:M,m:D,a:$}=m;mc(D),mc($),A&&Cs(A),S.stop(),L&&(L.flags|=8,He(B,m,p,w)),M&&ct(M,p),ct(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},xt=(m,p,w,A=!1,S=!1,L=0)=>{for(let B=L;B<m.length;B++)He(m[B],p,w,A,S)},E=m=>{if(m.shapeFlag&6)return E(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const p=f(m.anchor||m.el),w=p&&p[mf];return w?f(w):p};let V=!1;const F=(m,p,w)=>{m==null?p._vnode&&He(p._vnode,null,null,!0):g(p._vnode||null,m,p,null,null,null,w),p._vnode=m,V||(V=!0,oc(),df(),V=!1)},G={p:g,um:He,m:Ge,r:wn,mt:Pe,mc:H,pc:ce,pbc:W,n:E,o:e};let we,$e;return{render:F,hydrate:we,createApp:j0(F,we)}}function Rs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function G0(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function hl(e,t,n=!1){const r=e.children,o=t.children;if(Q(r)&&Q(o))for(let i=0;i<r.length;i++){const s=r[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=On(o[i]),l.el=s.el),!n&&l.patchFlag!==-2&&hl(s,l)),l.type===ss&&(l.el=s.el)}}function J0(e){const t=e.slice(),n=[0];let r,o,i,s,l;const a=e.length;for(r=0;r<a;r++){const c=e[r];if(c!==0){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}for(i=0,s=n.length-1;i<s;)l=i+s>>1,e[n[l]]<c?i=l+1:s=l;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function Uf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Uf(t)}function mc(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Y0=Symbol.for("v-scx"),Z0=()=>yt(Y0);function qt(e,t,n){return Vf(e,t,n)}function Vf(e,t,n=Ce){const{immediate:r,deep:o,flush:i,once:s}=n,l=Me({},n);let a;if(as)if(i==="sync"){const f=Z0();a=f.__watcherHandles||(f.__watcherHandles=[])}else if(!t||r)l.once=!0;else{const f=()=>{};return f.stop=Gt,f.resume=Gt,f.pause=Gt,f}const c=Ve;l.call=(f,h,b)=>Nt(f,c,h,b);let u=!1;i==="post"?l.scheduler=f=>{ct(f,c&&c.suspense)}:i!=="sync"&&(u=!0,l.scheduler=(f,h)=>{h?f():al(f)}),l.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const d=f0(e,t,l);return a&&a.push(d),d}function X0(e,t,n){const r=this.proxy,o=Re(e)?e.includes(".")?Hf(r,e):()=>r[e]:e.bind(r,r);let i;oe(t)?i=t:(i=t.handler,n=t);const s=Vo(this),l=Vf(o,i.bind(r),n);return s(),l}function Hf(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const Q0=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Et(t)}Modifiers`]||e[`${dr(t)}Modifiers`];function eb(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ce;let o=n;const i=t.startsWith("update:"),s=i&&Q0(r,t.slice(7));s&&(s.trim&&(o=n.map(u=>Re(u)?u.trim():u)),s.number&&(o=n.map(Cp)));let l,a=r[l=Ss(t)]||r[l=Ss(Et(t))];!a&&i&&(a=r[l=Ss(dr(t))]),a&&Nt(a,e,6,o);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Nt(c,e,6,o)}}function Kf(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let s={},l=!1;if(!oe(e)){const a=c=>{const u=Kf(c,t,!0);u&&(l=!0,Me(s,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(Le(e)&&r.set(e,null),null):(Q(i)?i.forEach(a=>s[a]=null):Me(s,i),Le(e)&&r.set(e,s),s)}function is(e,t){return!e||!Ji(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,dr(t))||ve(e,t))}function $s(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[i],slots:s,attrs:l,emit:a,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:b,inheritAttrs:g}=e,y=Oi(e);let I,v;try{if(n.shapeFlag&4){const O=o||r,N=O;I=Wt(c.call(N,O,u,d,h,f,b)),v=l}else{const O=t;I=Wt(O.length>1?O(d,{attrs:l,slots:s,emit:a}):O(d,null)),v=t.props?l:tb(l)}}catch(O){oo.length=0,ts(O,e,1),I=j(ot)}let _=I;if(v&&g!==!1){const O=Object.keys(v),{shapeFlag:N}=_;O.length&&N&7&&(i&&O.some(Wa)&&(v=nb(v,i)),_=Fn(_,v,!1,!0))}return n.dirs&&(_=Fn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&sr(_,n.transition),I=_,Oi(y),I}const tb=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ji(n))&&((t||(t={}))[n]=e[n]);return t},nb=(e,t)=>{const n={};for(const r in e)(!Wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rb(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:l,patchFlag:a}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?pc(r,s,c):!!s;if(a&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==r[f]&&!is(c,f))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?pc(r,s,c):!0:!!s;return!1}function pc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!is(n,i))return!0}return!1}function ob({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Wf=e=>e.__isSuspense;function ib(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):p0(e)}const le=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),Ds=Symbol.for("v-stc"),oo=[];let vt=null;function k(e=!1){oo.push(vt=e?null:[])}function sb(){oo.pop(),vt=oo[oo.length-1]||null}let vo=1;function bc(e){vo+=e,e<0&&vt&&(vt.hasOnce=!0)}function qf(e){return e.dynamicChildren=vo>0?vt||kr:null,sb(),vo>0&&vt&&vt.push(e),e}function T(e,t,n,r,o,i){return qf(C(e,t,n,r,o,i,!0))}function fe(e,t,n,r,o){return qf(j(e,t,n,r,o,!0))}function yo(e){return e?e.__v_isVNode===!0:!1}function Qn(e,t){return e.type===t.type&&e.key===t.key}const Gf=({key:e})=>e??null,vi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Re(e)||Ne(e)||oe(e)?{i:Fe,r:e,k:t,f:!!n}:e:null);function C(e,t=null,n=null,r=0,o=null,i=e===le?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gf(t),ref:t&&vi(t),scopeId:hf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Fe};return l?(ml(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=Re(n)?8:16),vo>0&&!s&&vt&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&vt.push(a),a}const j=ab;function ab(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===Pf)&&(e=ot),yo(e)){const l=Fn(e,t,!0);return n&&ml(l,n),vo>0&&!i&&vt&&(l.shapeFlag&6?vt[vt.indexOf(e)]=l:vt.push(l)),l.patchFlag=-2,l}if(bb(e)&&(e=e.__vccOpts),t){t=Li(t);let{class:l,style:a}=t;l&&!Re(l)&&(t.class=Xe(l)),Le(a)&&(rl(a)&&!Q(a)&&(a=Me({},a)),t.style=Fo(a))}const s=Re(e)?1:Wf(e)?128:pf(e)?64:Le(e)?4:oe(e)?2:0;return C(e,t,n,r,o,s,i,!0)}function Li(e){return e?rl(e)||Df(e)?Me({},e):e:null}function Fn(e,t,n=!1,r=!1){const{props:o,ref:i,patchFlag:s,children:l,transition:a}=e,c=t?P(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gf(c),ref:t&&t.ref?n&&i?Q(i)?i.concat(vi(t)):[i,vi(t)]:vi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fn(e.ssContent),ssFallback:e.ssFallback&&Fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&sr(u,a.clone(u)),u}function mn(e=" ",t=0){return j(ss,null,e,t)}function te(e="",t=!1){return t?(k(),fe(ot,null,e)):j(ot,null,e)}function Wt(e){return e==null||typeof e=="boolean"?j(ot):Q(e)?j(le,null,e.slice()):yo(e)?On(e):j(ss,null,String(e))}function On(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Fn(e)}function ml(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),ml(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Df(t)?t._ctx=Fe:o===3&&Fe&&(Fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:Fe},n=32):(t=String(t),r&64?(n=16,t=[mn(t)]):n=8);e.children=t,e.shapeFlag|=n}function P(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Xe([t.class,r.class]));else if(o==="style")t.style=Fo([t.style,r.style]);else if(Ji(o)){const i=t[o],s=r[o];s&&i!==s&&!(Q(i)&&i.includes(s))&&(t[o]=i?[].concat(i,s):s)}else o!==""&&(t[o]=r[o])}return t}function Vt(e,t,n,r=null){Nt(e,t,7,[n,r])}const lb=Lf();let cb=0;function ub(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||lb,i={uid:cb++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ud(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mf(r,o),emitsOptions:Kf(r,o),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=eb.bind(null,i),e.ce&&e.ce(i),i}let Ve=null;const pl=()=>Ve||Fe;let Ri,ma;{const e=jd(),t=(n,r)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(r),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};Ri=t("__VUE_INSTANCE_SETTERS__",n=>Ve=n),ma=t("__VUE_SSR_SETTERS__",n=>as=n)}const Vo=e=>{const t=Ve;return Ri(e),e.scope.on(),()=>{e.scope.off(),Ri(t)}},gc=()=>{Ve&&Ve.scope.off(),Ri(null)};function Jf(e){return e.vnode.shapeFlag&4}let as=!1;function db(e,t=!1,n=!1){t&&ma(t);const{props:r,children:o}=e.vnode,i=Jf(e);z0(e,r,i,t),H0(e,o,n);const s=i?fb(e,t):void 0;return t&&ma(!1),s}function fb(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,A0);const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?mb(e):null,i=Vo(e);Vn();const s=Uo(r,e,0,[e.props,o]);if(Hn(),i(),$d(s)){if(Ir(e)||_f(e),s.then(gc,gc),t)return s.then(l=>{vc(e,l,t)}).catch(l=>{ts(l,e,0)});e.asyncDep=s}else vc(e,s,t)}else Yf(e,t)}function vc(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Le(t)&&(e.setupState=lf(t)),Yf(e,n)}let yc;function Yf(e,t,n){const r=e.type;if(!e.render){if(!t&&yc&&!r.render){const o=r.template||dl(e).template;if(o){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,c=Me(Me({isCustomElement:i,delimiters:l},s),a);r.render=yc(o,c)}}e.render=r.render||Gt}{const o=Vo(e);Vn();try{L0(e)}finally{Hn(),o()}}}const hb={get(e,t){return Qe(e,"get",""),e[t]}};function mb(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,hb),slots:e.slots,emit:e.emit,expose:t}}function ls(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(lf(ol(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ro)return ro[n](e)},has(t,n){return n in t||n in ro}})):e.proxy}function pb(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function bb(e){return oe(e)&&"__vccOpts"in e}const Ae=(e,t)=>u0(e,t,as);function bl(e,t,n){const r=arguments.length;return r===2?Le(t)&&!Q(t)?yo(t)?j(e,null,[t]):j(e,t):j(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yo(n)&&(n=[n]),j(e,t,n))}const gb="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pa;const wc=typeof window<"u"&&window.trustedTypes;if(wc)try{pa=wc.createPolicy("vue",{createHTML:e=>e})}catch{}const Zf=pa?e=>pa.createHTML(e):e=>e,vb="http://www.w3.org/2000/svg",yb="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,kc=tn&&tn.createElement("template"),wb={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t==="svg"?tn.createElementNS(vb,e):t==="mathml"?tn.createElementNS(yb,e):n?tn.createElement(e,{is:n}):tn.createElement(e);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>tn.createTextNode(e),createComment:e=>tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{kc.innerHTML=Zf(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=kc.content;if(r==="svg"||r==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xn="transition",Hr="animation",Pr=Symbol("_vtc"),Xf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qf=Me({},vf,Xf),kb=e=>(e.displayName="Transition",e.props=Qf,e),gl=kb((e,{slots:t})=>bl(k0,eh(e),t)),Jn=(e,t=[])=>{Q(e)?e.forEach(n=>n(...t)):e&&e(...t)},xc=e=>e?Q(e)?e.some(t=>t.length>1):e.length>1:!1;function eh(e){const t={};for(const z in e)z in Xf||(t[z]=e[z]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:c=s,appearToClass:u=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,b=xb(o),g=b&&b[0],y=b&&b[1],{onBeforeEnter:I,onEnter:v,onEnterCancelled:_,onLeave:O,onLeaveCancelled:N,onBeforeAppear:q=I,onAppear:K=v,onAppearCancelled:H=_}=t,R=(z,ae,Pe)=>{Cn(z,ae?u:l),Cn(z,ae?c:s),Pe&&Pe()},W=(z,ae)=>{z._isLeaving=!1,Cn(z,d),Cn(z,h),Cn(z,f),ae&&ae()},re=z=>(ae,Pe)=>{const Ue=z?K:v,ge=()=>R(ae,z,Pe);Jn(Ue,[ae,ge]),_c(()=>{Cn(ae,z?a:i),en(ae,z?u:l),xc(Ue)||Ic(ae,r,g,ge)})};return Me(t,{onBeforeEnter(z){Jn(I,[z]),en(z,i),en(z,s)},onBeforeAppear(z){Jn(q,[z]),en(z,a),en(z,c)},onEnter:re(!1),onAppear:re(!0),onLeave(z,ae){z._isLeaving=!0;const Pe=()=>W(z,ae);en(z,d),en(z,f),nh(),_c(()=>{z._isLeaving&&(Cn(z,d),en(z,h),xc(O)||Ic(z,r,y,Pe))}),Jn(O,[z,Pe])},onEnterCancelled(z){R(z,!1),Jn(_,[z])},onAppearCancelled(z){R(z,!0),Jn(H,[z])},onLeaveCancelled(z){W(z),Jn(N,[z])}})}function xb(e){if(e==null)return null;if(Le(e))return[Ns(e.enter),Ns(e.leave)];{const t=Ns(e);return[t,t]}}function Ns(e){return Ep(e)}function en(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Pr]||(e[Pr]=new Set)).add(t)}function Cn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Pr];n&&(n.delete(t),n.size||(e[Pr]=void 0))}function _c(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _b=0;function Ic(e,t,n,r){const o=e._endId=++_b,i=()=>{o===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:s,timeout:l,propCount:a}=th(e,t);if(!s)return r();const c=s+"end";let u=0;const d=()=>{e.removeEventListener(c,f),i()},f=h=>{h.target===e&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},l+1),e.addEventListener(c,f)}function th(e,t){const n=window.getComputedStyle(e),r=b=>(n[b]||"").split(", "),o=r(`${xn}Delay`),i=r(`${xn}Duration`),s=Sc(o,i),l=r(`${Hr}Delay`),a=r(`${Hr}Duration`),c=Sc(l,a);let u=null,d=0,f=0;t===xn?s>0&&(u=xn,d=s,f=i.length):t===Hr?c>0&&(u=Hr,d=c,f=a.length):(d=Math.max(s,c),u=d>0?s>c?xn:Hr:null,f=u?u===xn?i.length:a.length:0);const h=u===xn&&/\b(transform|all)(,|$)/.test(r(`${xn}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Sc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Cc(n)+Cc(e[r])))}function Cc(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function nh(){return document.body.offsetHeight}function Ib(e,t,n){const r=e[Pr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ec=Symbol("_vod"),Sb=Symbol("_vsh"),Cb=Symbol(""),Eb=/(^|;)\s*display\s*:/;function Tb(e,t,n){const r=e.style,o=Re(n);let i=!1;if(n&&!o){if(t)if(Re(t))for(const s of t.split(";")){const l=s.slice(0,s.indexOf(":")).trim();n[l]==null&&yi(r,l,"")}else for(const s in t)n[s]==null&&yi(r,s,"");for(const s in n)s==="display"&&(i=!0),yi(r,s,n[s])}else if(o){if(t!==n){const s=r[Cb];s&&(n+=";"+s),r.cssText=n,i=Eb.test(n)}}else t&&e.removeAttribute("style");Ec in e&&(e[Ec]=i?r.display:"",e[Sb]&&(r.display="none"))}const Tc=/\s*!important$/;function yi(e,t,n){if(Q(n))n.forEach(r=>yi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Pb(e,t);Tc.test(n)?e.setProperty(dr(r),n.replace(Tc,""),"important"):e[r]=n}}const Pc=["Webkit","Moz","ms"],Ms={};function Pb(e,t){const n=Ms[t];if(n)return n;let r=Et(t);if(r!=="filter"&&r in e)return Ms[t]=r;r=Xi(r);for(let o=0;o<Pc.length;o++){const i=Pc[o]+r;if(i in e)return Ms[t]=i}return t}const Oc="http://www.w3.org/1999/xlink";function Ac(e,t,n,r,o,i=Rp(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Oc,t.slice(6,t.length)):e.setAttributeNS(Oc,t,n):n==null||i&&!Bd(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Un(n)?String(n):n)}function Lc(e,t,n,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Zf(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const s=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(s!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=Bd(n):n==null&&s==="string"?(n="",i=!0):s==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function Ob(e,t,n,r){e.addEventListener(t,n,r)}function Ab(e,t,n,r){e.removeEventListener(t,n,r)}const Rc=Symbol("_vei");function Lb(e,t,n,r,o=null){const i=e[Rc]||(e[Rc]={}),s=i[t];if(r&&s)s.value=r;else{const[l,a]=Rb(t);if(r){const c=i[t]=Nb(r,o);Ob(e,l,c,a)}else s&&(Ab(e,l,s,a),i[t]=void 0)}}const $c=/(?:Once|Passive|Capture)$/;function Rb(e){let t;if($c.test(e)){t={};let r;for(;r=e.match($c);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):dr(e.slice(2)),t]}let js=0;const $b=Promise.resolve(),Db=()=>js||($b.then(()=>js=0),js=Date.now());function Nb(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Nt(Mb(r,n.value),t,5,[r])};return n.value=e,n.attached=Db(),n}function Mb(e,t){if(Q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Dc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jb=(e,t,n,r,o,i)=>{const s=o==="svg";t==="class"?Ib(e,r,s):t==="style"?Tb(e,n,r):Ji(t)?Wa(t)||Lb(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bb(e,t,r,s))?(Lc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ac(e,t,r,s,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Re(r))?Lc(e,Et(t),r):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ac(e,t,r,s))};function Bb(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Dc(t)&&oe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Dc(t)&&Re(n)?!1:t in e}const rh=new WeakMap,oh=new WeakMap,$i=Symbol("_moveCb"),Nc=Symbol("_enterCb"),zb=e=>(delete e.props.mode,e),Fb=zb({name:"TransitionGroup",props:Me({},Qf,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=pl(),r=gf();let o,i;return Cf(()=>{if(!o.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!Wb(o[0].el,n.vnode.el,s))return;o.forEach(Vb),o.forEach(Hb);const l=o.filter(Kb);nh(),l.forEach(a=>{const c=a.el,u=c.style;en(c,s),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[$i]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c[$i]=null,Cn(c,s))};c.addEventListener("transitionend",d)})}),()=>{const s=he(e),l=eh(s);let a=s.tag||le;if(o=[],i)for(let c=0;c<i.length;c++){const u=i[c];u.el&&u.el instanceof Element&&(o.push(u),sr(u,go(u,l,r,n)),rh.set(u,u.el.getBoundingClientRect()))}i=t.default?ll(t.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&sr(u,go(u,l,r,n))}return j(a,null,i)}}}),Ub=Fb;function Vb(e){const t=e.el;t[$i]&&t[$i](),t[Nc]&&t[Nc]()}function Hb(e){oh.set(e,e.el.getBoundingClientRect())}function Kb(e){const t=rh.get(e),n=oh.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${o}px)`,i.transitionDuration="0s",e}}function Wb(e,t,n){const r=e.cloneNode(),o=e[Pr];o&&o.forEach(l=>{l.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=th(r);return i.removeChild(r),s}const qb=["ctrl","shift","alt","meta"],Gb={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>qb.some(n=>e[`${n}Key`]&&!t.includes(n))},cs=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(o,...i)=>{for(let s=0;s<t.length;s++){const l=Gb[t[s]];if(l&&l(o,t))return}return e(o,...i)})},Jb=Me({patchProp:jb},wb);let Mc;function Yb(){return Mc||(Mc=W0(Jb))}const Zb=(...e)=>{const t=Yb().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Qb(r);if(!o)return;const i=t._component;!oe(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=n(o,!1,Xb(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function Xb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Qb(e){return Re(e)?document.querySelector(e):e}var eg=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let ih;const us=e=>ih=e,sh=Symbol();function jc(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var io;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(io||(io={}));function tg(){const e=Vd(!0),t=e.run(()=>De({}));let n=[],r=[];const o=ol({install(i){us(o),o._a=i,i.provide(sh,o),i.config.globalProperties.$pinia=o,r.forEach(s=>n.push(s)),r=[]},use(i){return!this._a&&!eg?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const ng=()=>{};function Bc(e,t,n,r=ng){e.push(t);const o=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Hd()&&$p(o),o}function pr(e,...t){e.slice().forEach(n=>{n(...t)})}const rg=e=>e(),zc=Symbol(),Bs=Symbol();function ah(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];jc(o)&&jc(r)&&e.hasOwnProperty(n)&&!Ne(r)&&!Nn(r)?e[n]=ah(o,r):e[n]=r}return e}const{assign:En}=Object;function og(e){return!!(Ne(e)&&e.effect)}function ig(e,t,n,r){const{state:o,actions:i,getters:s}=t,l=n.state.value[e];let a;function c(){l||(n.state.value[e]=o?o():{});const u=s0(n.state.value[e]);return En(u,i,Object.keys(s||{}).reduce((d,f)=>(d[f]=ol(Ae(()=>{us(n);const h=n._s.get(e);return s[f].call(h,h)})),d),{}))}return a=sg(e,c,t,n,r,!0),a}function sg(e,t,n={},r,o,i){let s;const l=En({actions:{}},n),a={deep:!0};let c,u,d=[],f=[],h;const b=r.state.value[e];De({});let g;function y(H){let R;c=u=!1,typeof H=="function"?(H(r.state.value[e]),R={type:io.patchFunction,storeId:e,events:h}):(ah(r.state.value[e],H),R={type:io.patchObject,payload:H,storeId:e,events:h});const W=g=Symbol();ns().then(()=>{g===W&&(c=!0)}),u=!0,pr(d,R,r.state.value[e])}const I=function(){const{state:R}=n,W=R?R():{};this.$patch(re=>{En(re,W)})};function v(){s.stop(),d=[],f=[],r._s.delete(e)}const _=(H,R="")=>{if(zc in H)return H[Bs]=R,H;const W=function(){us(r);const re=Array.from(arguments),z=[],ae=[];function Pe(ee){z.push(ee)}function Ue(ee){ae.push(ee)}pr(f,{args:re,name:W[Bs],store:N,after:Pe,onError:Ue});let ge;try{ge=H.apply(this&&this.$id===e?this:N,re)}catch(ee){throw pr(ae,ee),ee}return ge instanceof Promise?ge.then(ee=>(pr(z,ee),ee)).catch(ee=>(pr(ae,ee),Promise.reject(ee))):(pr(z,ge),ge)};return W[zc]=!0,W[Bs]=R,W},O={_p:r,$id:e,$onAction:Bc.bind(null,f),$patch:y,$reset:I,$subscribe(H,R={}){const W=Bc(d,H,R.detached,()=>re()),re=s.run(()=>qt(()=>r.state.value[e],z=>{(R.flush==="sync"?u:c)&&H({storeId:e,type:io.direct,events:h},z)},En({},a,R)));return W},$dispose:v},N=Kn(O);r._s.set(e,N);const K=(r._a&&r._a.runWithContext||rg)(()=>r._e.run(()=>(s=Vd()).run(()=>t({action:_}))));for(const H in K){const R=K[H];if(!(Ne(R)&&!og(R)||Nn(R))){if(typeof R=="function"){const W=_(R,H);K[H]=W,l.actions[H]=R}}}return En(N,K),En(he(N),K),Object.defineProperty(N,"$state",{get:()=>r.state.value[e],set:H=>{y(R=>{En(R,H)})}}),r._p.forEach(H=>{En(N,s.run(()=>H({store:N,app:r._a,pinia:r,options:l})))}),b&&i&&n.hydrate&&n.hydrate(N.$state,b),c=!0,u=!0,N}function vl(e,t,n){let r,o;typeof e=="string"?(r=e,o=t):(o=e,r=e.id);function i(s,l){const a=B0();return s=s||(a?yt(sh,null):null),s&&us(s),s=ih,s._s.has(r)||ig(r,o,s),s._s.get(r)}return i.$id=r,i}var ag=Object.defineProperty,Fc=Object.getOwnPropertySymbols,lg=Object.prototype.hasOwnProperty,cg=Object.prototype.propertyIsEnumerable,Uc=(e,t,n)=>t in e?ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ug=(e,t)=>{for(var n in t||(t={}))lg.call(t,n)&&Uc(e,n,t[n]);if(Fc)for(var n of Fc(t))cg.call(t,n)&&Uc(e,n,t[n]);return e};function st(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function yl(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Oe(e){return!st(e)}function Vc(e,t){let n=-1;if(Oe(e))try{n=e.findLastIndex(t)}catch{n=e.lastIndexOf([...e].reverse().find(t))}return n}function Yt(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)}function wt(e,...t){return yl(e)?e(...t):e}function dt(e,t=!0){return typeof e=="string"&&(t||e!=="")}function Lt(e){return dt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function wl(e,t="",n={}){const r=Lt(t).split("."),o=r.shift();return o?Yt(e)?wl(wt(e[Object.keys(e).find(i=>Lt(i)===o)||""],n),r.join("."),n):void 0:wt(e,n)}function kl(e,t=!0){return Array.isArray(e)&&(t||e.length!==0)}function lh(e){return Oe(e)&&!isNaN(e)}function dg(e=""){return Oe(e)&&e.length===1&&!!e.match(/\S| /)}function an(e,t){if(t){const n=t.test(e);return t.lastIndex=0,n}return!1}function fg(...e){const t=(n={},r={})=>{const o=ug({},n);return Object.keys(r).forEach(i=>{Yt(r[i])&&i in n&&Yt(n[i])?o[i]=t(n[i],r[i]):o[i]=r[i]}),o};return e.reduce((n,r,o)=>o===0?r:t(n,r),{})}function so(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function hg(e){return dt(e,!1)?e[0].toUpperCase()+e.slice(1):e}function ch(e){return dt(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(t,n)=>n===0?t:"-"+t.toLowerCase()).toLowerCase():e}function Hc(e){return dt(e)?e.replace(/[A-Z]/g,(t,n)=>n===0?t:"."+t.toLowerCase()).toLowerCase():e}function ds(){const e=new Map;return{on(t,n){let r=e.get(t);return r?r.push(n):r=[n],e.set(t,r),this},off(t,n){let r=e.get(t);return r&&r.splice(r.indexOf(n)>>>0,1),this},emit(t,n){let r=e.get(t);r&&r.slice().map(o=>{o(n)})},clear(){e.clear()}}}var mg=Object.defineProperty,pg=Object.defineProperties,bg=Object.getOwnPropertyDescriptors,Di=Object.getOwnPropertySymbols,uh=Object.prototype.hasOwnProperty,dh=Object.prototype.propertyIsEnumerable,Kc=(e,t,n)=>t in e?mg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kr=(e,t)=>{for(var n in t||(t={}))uh.call(t,n)&&Kc(e,n,t[n]);if(Di)for(var n of Di(t))dh.call(t,n)&&Kc(e,n,t[n]);return e},zs=(e,t)=>pg(e,bg(t)),Wr=(e,t)=>{var n={};for(var r in e)uh.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Di)for(var r of Di(e))t.indexOf(r)<0&&dh.call(e,r)&&(n[r]=e[r]);return n},gg=ds(),At=gg;function Wc(e,t){kl(e)?e.push(...t||[]):Yt(e)&&Object.assign(e,t)}function vg(e){return Yt(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function qc(e,t=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(r=>t.endsWith(r))?e:`${e}`.trim().split(" ").map(i=>lh(i)?`${i}px`:i).join(" ")}function yg(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ba(e="",t=""){return yg(`${dt(e,!1)&&dt(t,!1)?`${e}-`:e}${t}`)}function fh(e="",t=""){return`--${ba(e,t)}`}function hh(e,t="",n="",r=[],o){if(dt(e)){const i=/{([^}]*)}/g,s=e.trim();if(an(s,i)){const l=s.replaceAll(i,u=>{const f=u.replace(/{|}/g,"").split(".").filter(h=>!r.some(b=>an(h,b)));return`var(${fh(n,ch(f.join("-")))}${Oe(o)?`, ${o}`:""})`}),a=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return an(l.replace(c,"0"),a)?`calc(${l})`:l}return qc(s,t)}else if(lh(e))return qc(e,t)}function wg(e,t,n){dt(t,!1)&&e.push(`${t}:${n};`)}function Zr(e,t){return e?`${e}{${t}}`:""}var Fs=(...e)=>kg(_e.getTheme(),...e),kg=(e={},t,n,r="variable")=>{if(t){const{variable:o,options:i}=_e.defaults||{},{prefix:s,transform:l}=(e==null?void 0:e.options)||i||{},c=an(t,/{([^}]*)}/g)?t:`{${t}}`;return r==="value"||l==="strict"?_e.getTokenValue(t):hh(c,void 0,s,[o.excludedKeyRegex],n)}return""};function xg(e,t={}){const n=_e.defaults.variable,{prefix:r=n.prefix,selector:o=n.selector,excludedKeyRegex:i=n.excludedKeyRegex}=t,s=(c,u="")=>Object.entries(c).reduce((d,[f,h])=>{const b=an(f,i)?ba(u):ba(u,ch(f)),g=vg(h);if(Yt(g)){const{variables:y,tokens:I}=s(g,b);Wc(d.tokens,I),Wc(d.variables,y)}else d.tokens.push((r?b.replace(`${r}-`,""):b).replaceAll("-",".")),wg(d.variables,fh(b),hh(g,b,r,[i]));return d},{variables:[],tokens:[]}),{variables:l,tokens:a}=s(e,r);return{value:l,tokens:a,declarations:l.join(""),css:Zr(o,l.join(""))}}var Ot={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){const t=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[e].flat().map(n=>{var r;return(r=t.map(o=>o.resolve(n)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(n)})}},_toVariables(e,t){return xg(e,{prefix:t==null?void 0:t.prefix})},getCommon({name:e="",theme:t={},params:n,set:r,defaults:o}){var i,s,l,a;const{preset:c,options:u}=t;let d,f,h,b;if(Oe(c)){const{primitive:g,semantic:y}=c,I=y||{},{colorScheme:v}=I,_=Wr(I,["colorScheme"]),O=v||{},{dark:N}=O,q=Wr(O,["dark"]),K=Oe(g)?this._toVariables({primitive:g},u):{},H=Oe(_)?this._toVariables({semantic:_},u):{},R=Oe(q)?this._toVariables({light:q},u):{},W=Oe(N)?this._toVariables({dark:N},u):{},[re,z]=[(i=K.declarations)!=null?i:"",K.tokens],[ae,Pe]=[(s=H.declarations)!=null?s:"",H.tokens||[]],[Ue,ge]=[(l=R.declarations)!=null?l:"",R.tokens||[]],[ee,ce]=[(a=W.declarations)!=null?a:"",W.tokens||[]];d=this.transformCSS(e,re,"light","variable",u,r,o),f=z;const mt=this.transformCSS(e,`${ae}${Ue}color-scheme:light`,"light","variable",u,r,o),et=this.transformCSS(e,`${ee}color-scheme:dark`,"dark","variable",u,r,o);h=`${mt}${et}`,b=[...new Set([...Pe,...ge,...ce])]}return{primitive:{css:d,tokens:f},semantic:{css:h,tokens:b}}},getPreset({name:e="",preset:t={},options:n,params:r,set:o,defaults:i,selector:s}){var l,a,c;const u=e.replace("-directive",""),d=t,{colorScheme:f}=d,h=Wr(d,["colorScheme"]),b=f||{},{dark:g}=b,y=Wr(b,["dark"]),I=Oe(h)?this._toVariables({[u]:h},n):{},v=Oe(y)?this._toVariables({[u]:y},n):{},_=Oe(g)?this._toVariables({[u]:g},n):{},[O,N]=[(l=I.declarations)!=null?l:"",I.tokens||[]],[q,K]=[(a=v.declarations)!=null?a:"",v.tokens||[]],[H,R]=[(c=_.declarations)!=null?c:"",_.tokens||[]],W=[...new Set([...N,...K,...R])],re=this.transformCSS(u,`${O}${q}`,"light","variable",n,o,i,s),z=this.transformCSS(u,H,"dark","variable",n,o,i,s);return{css:`${re}${z}`,tokens:W}},getPresetC({name:e="",theme:t={},params:n,set:r,defaults:o}){var i;const{preset:s,options:l}=t,a=(i=s==null?void 0:s.components)==null?void 0:i[e];return this.getPreset({name:e,preset:a,options:l,params:n,set:r,defaults:o})},getPresetD({name:e="",theme:t={},params:n,set:r,defaults:o}){var i;const s=e.replace("-directive",""),{preset:l,options:a}=t,c=(i=l==null?void 0:l.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:c,options:a,params:n,set:r,defaults:o})},getColorSchemeOption(e,t){var n;return this.regex.resolve((n=e.darkModeSelector)!=null?n:t.options.darkModeSelector)},getLayerOrder(e,t={},n,r){const{cssLayer:o}=t;return o?`@layer ${wt(o.order||"primeui",n)}`:""},getCommonStyleSheet({name:e="",theme:t={},params:n,props:r={},set:o,defaults:i}){const s=this.getCommon({name:e,theme:t,params:n,set:o,defaults:i}),l=Object.entries(r).reduce((a,[c,u])=>a.push(`${c}="${u}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,u])=>{if(u!=null&&u.css){const d=so(u==null?void 0:u.css),f=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${f}" ${l}>${d}</style>`)}return a},[]).join("")},getStyleSheet({name:e="",theme:t={},params:n,props:r={},set:o,defaults:i}){var s;const l={name:e,theme:t,params:n,set:o,defaults:i},a=(s=e.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(r).reduce((u,[d,f])=>u.push(`${d}="${f}"`)&&u,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${so(a)}</style>`:""},createTokens(e={},t,n="",r="",o={}){return Object.entries(e).forEach(([i,s])=>{const l=an(i,t.variable.excludedKeyRegex)?n:n?`${n}.${Hc(i)}`:Hc(i),a=r?`${r}.${i}`:i;Yt(s)?this.createTokens(s,t,l,a,o):(o[l]||(o[l]={paths:[],computed(c,u={}){if(c){const d=this.paths.find(f=>f.scheme===c)||this.paths.find(f=>f.scheme==="none");return d==null?void 0:d.computed(c,u.binding)}return this.paths.map(d=>d.computed(d.scheme,u[d.scheme]))}}),o[l].paths.push({path:a,value:s,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){const d=/{([^}]*)}/g;let f=s;if(u.name=this.path,u.binding||(u.binding={}),an(s,d)){const b=s.trim().replaceAll(d,I=>{var v,_;const O=I.replace(/{|}/g,"");return(_=(v=o[O])==null?void 0:v.computed(c,u))==null?void 0:_.value}),g=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,y=/var\([^)]+\)/g;f=an(b.replace(y,"0"),g)?`calc(${b})`:b}return st(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),o},getTokenValue(e,t,n){var r;const i=(a=>a.split(".").filter(u=>!an(u.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(t),s=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,l=[(r=e[i])==null?void 0:r.computed(s)].flat().filter(a=>a);return l.length===1?l[0].value:l.reduce((a={},c)=>{const u=c,{colorScheme:d}=u,f=Wr(u,["colorScheme"]);return a[d]=f,a},void 0)},transformCSS(e,t,n,r,o={},i,s,l){if(Oe(t)){const{cssLayer:a}=o;if(r!=="style"){const c=this.getColorSchemeOption(o,s),u=l?Zr(l,t):t;t=n==="dark"?c.reduce((d,{selector:f})=>(Oe(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",u):Zr(f,u)),d),""):Zr(l??":root",t)}if(a){const c={name:"primeui",order:"primeui"};Yt(a)&&(c.name=wt(a.name,{name:e,type:r})),Oe(c.name)&&(t=Zr(`@layer ${c.name}`,t),i==null||i.layerNames(c.name))}return t}return""}},_e={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){const{theme:t}=e;t&&(this._theme=zs(Kr({},t),{options:Kr(Kr({},this.defaults.options),t.options)}),this._tokens=Ot.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),At.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=zs(Kr({},this.theme),{preset:e}),this._tokens=Ot.createTokens(e,this.defaults),this.clearLoadedStyleNames(),At.emit("preset:change",e),At.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=zs(Kr({},this.theme),{options:e}),this.clearLoadedStyleNames(),At.emit("options:change",e),At.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return Ot.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return Ot.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){const n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ot.getPresetC(n)},getDirective(e="",t){const n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ot.getPresetD(n)},getCustomPreset(e="",t,n,r){const o={name:e,preset:t,options:this.options,selector:n,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ot.getPreset(o)},getLayerOrderCSS(e=""){return Ot.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,n="style",r){return Ot.transformCSS(e,t,r,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,n={}){return Ot.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,n={}){return Ot.getStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),At.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&At.emit("theme:load"))}},Ye={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function mh(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}function Ho(e,t){if(e&&t){const n=r=>{mh(e,r)||(e.classList?e.classList.add(r):e.className+=" "+r)};[t].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(n))}}function _g(){return window.innerWidth-document.documentElement.offsetWidth}function Ni(e){for(const t of document==null?void 0:document.styleSheets)try{for(const n of t==null?void 0:t.cssRules)for(const r of n==null?void 0:n.style)if(e.test(r))return{name:r,value:n.style.getPropertyValue(r).trim()}}catch{}return null}function ga(e="p-overflow-hidden"){const t=Ni(/-scrollbar-width$/);t!=null&&t.name&&document.body.style.setProperty(t.name,_g()+"px"),Ho(document.body,e)}function ao(e,t){if(e&&t){const n=r=>{e.classList?e.classList.remove(r):e.className=e.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[t].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(n))}}function va(e="p-overflow-hidden"){const t=Ni(/-scrollbar-width$/);t!=null&&t.name&&document.body.style.removeProperty(t.name),ao(document.body,e)}function Ig(e){let t={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),t}function xl(){let e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0],o=e.innerWidth||n.clientWidth||r.clientWidth,i=e.innerHeight||n.clientHeight||r.clientHeight;return{width:o,height:i}}function ph(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function bh(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Sg(e,t,n=!0){var r,o,i,s;if(e){const l=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Ig(e),a=l.height,c=l.width,u=t.offsetHeight,d=t.offsetWidth,f=t.getBoundingClientRect(),h=bh(),b=ph(),g=xl();let y,I,v="top";f.top+u+a>g.height?(y=f.top+h-a,v="bottom",y<0&&(y=h)):y=u+f.top+h,f.left+c>g.width?I=Math.max(0,f.left+b+d-c):I=f.left+b,e.style.top=y+"px",e.style.left=I+"px",e.style.transformOrigin=v,n&&(e.style.marginTop=v==="bottom"?`calc(${(o=(r=Ni(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"2px"} * -1)`:(s=(i=Ni(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function gh(e,t){e&&(typeof t=="string"?e.style.cssText=t:Object.entries(t||{}).forEach(([n,r])=>e.style[n]=r))}function St(e,t){return e instanceof HTMLElement?e.offsetWidth:0}function Mr(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function Mi(e,t={}){if(Mr(e)){const n=(r,o)=>{var i,s;const l=(i=e==null?void 0:e.$attrs)!=null&&i[r]?[(s=e==null?void 0:e.$attrs)==null?void 0:s[r]]:[];return[o].flat().reduce((a,c)=>{if(c!=null){const u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){const d=Array.isArray(c)?n(r,c):Object.entries(c).map(([f,h])=>r==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);a=d.length?a.concat(d.filter(f=>!!f)):a}}return a},l)};Object.entries(t).forEach(([r,o])=>{if(o!=null){const i=r.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),o):r==="p-bind"?Mi(e,o):(o=r==="class"?[...new Set(n("class",o))].join(" ").trim():r==="style"?n("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=o),e.setAttribute(r,o))}})}}function lo(e,t={},...n){if(e){const r=document.createElement(e);return Mi(r,t),r.append(...n),r}}function Cg(e,t){if(e){e.style.opacity="0";let n=+new Date,r="0",o=function(){r=`${+e.style.opacity+(new Date().getTime()-n)/t}`,e.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function Xr(e,t){return Mr(e)?Array.from(e.querySelectorAll(t)):[]}function fn(e,t){return Mr(e)?e.matches(t)?e:e.querySelector(t):null}function Ke(e,t){e&&document.activeElement!==e&&e.focus(t)}function Zn(e,t){if(Mr(e)){const n=e.getAttribute(t);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}function vh(e,t=""){let n=Xr(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`),r=[];for(let o of n)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&r.push(o);return r}function qr(e,t){const n=vh(e,t);return n.length>0?n[0]:null}function Gc(e){if(e){let t=e.offsetHeight,n=getComputedStyle(e);return t-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),t}return 0}function yh(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function Eg(e,t){const n=vh(e,t);return n.length>0?n[n.length-1]:null}function Tg(e){if(e){let t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function nn(e,t){return e?e.offsetHeight:0}function wh(e,t=[]){const n=yh(e);return n===null?t:wh(n,t.concat([n]))}function Pg(e){let t=[];if(e){let n=wh(e);const r=/(auto|scroll)/,o=i=>{try{let s=window.getComputedStyle(i,null);return r.test(s.getPropertyValue("overflow"))||r.test(s.getPropertyValue("overflowX"))||r.test(s.getPropertyValue("overflowY"))}catch{return!1}};for(let i of n){let s=i.nodeType===1&&i.dataset.scrollselectors;if(s){let l=s.split(",");for(let a of l){let c=fn(i,a);c&&o(c)&&t.push(c)}}i.nodeType!==9&&o(i)&&t.push(i)}}return t}function kh(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&yh(e))}function Jc(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),t}return 0}function xh(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Yc(e,t=""){return Mr(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}function _l(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Il(e,t="",n){Mr(e)&&n!==null&&n!==void 0&&e.setAttribute(t,n)}function wo(e){"@babel/helpers - typeof";return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wo(e)}function Zc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Xc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zc(Object(n),!0).forEach(function(r){Og(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Og(e,t,n){return(t=Ag(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ag(e){var t=Lg(e,"string");return wo(t)=="symbol"?t:t+""}function Lg(e,t){if(wo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(wo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;pl()?fr(e):t?e():ns(e)}var $g=0;function Dg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=De(!1),r=De(e),o=De(null),i=xh()?window.document:void 0,s=t.document,l=s===void 0?i:s,a=t.immediate,c=a===void 0?!0:a,u=t.manual,d=u===void 0?!1:u,f=t.name,h=f===void 0?"style_".concat(++$g):f,b=t.id,g=b===void 0?void 0:b,y=t.media,I=y===void 0?void 0:y,v=t.nonce,_=v===void 0?void 0:v,O=t.first,N=O===void 0?!1:O,q=t.onMounted,K=q===void 0?void 0:q,H=t.onUpdated,R=H===void 0?void 0:H,W=t.onLoad,re=W===void 0?void 0:W,z=t.props,ae=z===void 0?{}:z,Pe=function(){},Ue=function(ce){var mt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(l){var et=Xc(Xc({},ae),mt),Ge=et.name||h,He=et.id||g,wn=et.nonce||_;o.value=l.querySelector('style[data-primevue-style-id="'.concat(Ge,'"]'))||l.getElementById(He)||l.createElement("style"),o.value.isConnected||(r.value=ce||e,Mi(o.value,{type:"text/css",id:He,media:I,nonce:wn}),N?l.head.prepend(o.value):l.head.appendChild(o.value),Il(o.value,"data-primevue-style-id",Ge),Mi(o.value,et),o.value.onload=function(Ft){return re==null?void 0:re(Ft,{name:Ge})},K==null||K(Ge)),!n.value&&(Pe=qt(r,function(Ft){o.value.textContent=Ft,R==null||R(Ge)},{immediate:!0}),n.value=!0)}},ge=function(){!l||!n.value||(Pe(),kh(o.value)&&l.head.removeChild(o.value),n.value=!1)};return c&&!d&&Rg(Ue),{id:g,name:h,el:o,css:r,unload:ge,load:Ue,isLoaded:tl(n)}}function ko(e){"@babel/helpers - typeof";return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ko(e)}function Qc(e,t){return Bg(e)||jg(e,t)||Mg(e,t)||Ng()}function Ng(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mg(e,t){if(e){if(typeof e=="string")return eu(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?eu(e,t):void 0}}function eu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function jg(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,l=[],a=!0,c=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return l}}function Bg(e){if(Array.isArray(e))return e}function tu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Us(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tu(Object(n),!0).forEach(function(r){zg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zg(e,t,n){return(t=Fg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fg(e){var t=Ug(e,"string");return ko(t)=="symbol"?t:t+""}function Ug(e,t){if(ko(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ko(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Vg=function(t){var n=t.dt;return`
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(n("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(n("icon.size"),`;
}

.p-icon {
    width: `).concat(n("icon.size"),`;
    height: `).concat(n("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(n("mask.background"),`;
    color: `).concat(n("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(n("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(n("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(n("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(n("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},Hg=function(t){var n=t.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},Kg={},Wg={},be={name:"base",css:Hg,theme:Vg,classes:Kg,inlineStyles:Wg,load:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},o=r(wt(t,{dt:Fs}));return o?Dg(so(o),Us({name:this.name},n)):{}},loadCSS:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,t)},loadTheme:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.theme,n,function(r){return _e.transformCSS(n.name||t.name,r)})},getCommonTheme:function(t){return _e.getCommon(this.name,t)},getComponentTheme:function(t){return _e.getComponent(this.name,t)},getDirectiveTheme:function(t){return _e.getDirective(this.name,t)},getPresetTheme:function(t,n,r){return _e.getCustomPreset(this.name,t,n,r)},getLayerOrderThemeCSS:function(){return _e.getLayerOrderCSS(this.name)},getStyleSheet:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=wt(this.css,{dt:Fs}),o=so("".concat(r).concat(t)),i=Object.entries(n).reduce(function(s,l){var a=Qc(l,2),c=a[0],u=a[1];return s.push("".concat(c,'="').concat(u,'"'))&&s},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(o,"</style>")}return""},getCommonThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return _e.getCommonStyleSheet(this.name,t,n)},getThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[_e.getStyleSheet(this.name,t,n)];if(this.theme){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=wt(this.theme,{dt:Fs}),s=so(_e.transformCSS(o,i)),l=Object.entries(n).reduce(function(a,c){var u=Qc(c,2),d=u[0],f=u[1];return a.push("".concat(d,'="').concat(f,'"'))&&a},[]).join(" ");r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(l,">").concat(s,"</style>"))}return r.join("")},extend:function(t){return Us(Us({},this),{},{css:void 0,theme:void 0},t)}},yr=ds(),fi={};function qg(e="pui_id_"){return fi.hasOwnProperty(e)||(fi[e]=0),fi[e]++,`${e}${fi[e]}`}function Gg(){let e=[];const t=(s,l,a=999)=>{const c=o(s,l,a),u=c.value+(c.key===s?0:a)+1;return e.push({key:s,value:u}),u},n=s=>{e=e.filter(l=>l.value!==s)},r=(s,l)=>o(s).value,o=(s,l,a=0)=>[...e].reverse().find(c=>!0)||{key:s,value:a},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,l,a)=>{l&&(l.style.zIndex=String(t(s,!0,a)))},clear:s=>{s&&(n(i(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var We=Gg();function xo(e){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xo(e)}function nu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Vs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nu(Object(n),!0).forEach(function(r){Jg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jg(e,t,n){return(t=Yg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yg(e){var t=Zg(e,"string");return xo(t)=="symbol"?t:t+""}function Zg(e,t){if(xo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Xg={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Ye.STARTS_WITH,Ye.CONTAINS,Ye.NOT_CONTAINS,Ye.ENDS_WITH,Ye.EQUALS,Ye.NOT_EQUALS],numeric:[Ye.EQUALS,Ye.NOT_EQUALS,Ye.LESS_THAN,Ye.LESS_THAN_OR_EQUAL_TO,Ye.GREATER_THAN,Ye.GREATER_THAN_OR_EQUAL_TO],date:[Ye.DATE_IS,Ye.DATE_IS_NOT,Ye.DATE_BEFORE,Ye.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Qg=Symbol();function ev(e,t){var n={config:Kn(t)};return e.config.globalProperties.$primevue=n,e.provide(Qg,n),tv(),nv(e,n),n}var wr=[];function tv(){At.clear(),wr.forEach(function(e){return e==null?void 0:e()}),wr=[]}function nv(e,t){var n=De(!1),r=function(){if(!_e.isStyleNameLoaded("common")){var c,u,d=((c=be.getCommonTheme)===null||c===void 0?void 0:c.call(be))||{},f=d.primitive,h=d.semantic,b={nonce:(u=t.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};be.load(f==null?void 0:f.css,Vs({name:"primitive-variables"},b)),be.load(h==null?void 0:h.css,Vs({name:"semantic-variables"},b)),be.loadTheme(Vs({name:"global-style"},b)),_e.setLoadedStyleName("common")}};At.on("theme:change",function(a){n.value||(e.config.globalProperties.$primevue.config.theme=a,n.value=!0)});var o=qt(t.config,function(a,c){yr.emit("config:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0}),i=qt(function(){return t.config.ripple},function(a,c){yr.emit("config:ripple:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0}),s=qt(function(){return t.config.theme},function(a,c){n.value||_e.setTheme(a),t.config.unstyled||r(),n.value=!1,yr.emit("config:theme:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0}),l=qt(function(){return t.config.unstyled},function(a,c){!a&&t.config.theme&&r(),yr.emit("config:unstyled:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0});wr.push(o),wr.push(i),wr.push(s),wr.push(l)}var rv={install:function(t,n){var r=fg(Xg,n);ev(t,r)}};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const gr=typeof document<"u";function _h(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ov(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&_h(e.default)}const xe=Object.assign;function Hs(e,t){const n={};for(const r in t){const o=t[r];n[r]=Mt(o)?o.map(e):e(o)}return n}const co=()=>{},Mt=Array.isArray,Ih=/#/g,iv=/&/g,sv=/\//g,av=/=/g,lv=/\?/g,Sh=/\+/g,cv=/%5B/g,uv=/%5D/g,Ch=/%5E/g,dv=/%60/g,Eh=/%7B/g,fv=/%7C/g,Th=/%7D/g,hv=/%20/g;function Sl(e){return encodeURI(""+e).replace(fv,"|").replace(cv,"[").replace(uv,"]")}function mv(e){return Sl(e).replace(Eh,"{").replace(Th,"}").replace(Ch,"^")}function ya(e){return Sl(e).replace(Sh,"%2B").replace(hv,"+").replace(Ih,"%23").replace(iv,"%26").replace(dv,"`").replace(Eh,"{").replace(Th,"}").replace(Ch,"^")}function pv(e){return ya(e).replace(av,"%3D")}function bv(e){return Sl(e).replace(Ih,"%23").replace(lv,"%3F")}function gv(e){return e==null?"":bv(e).replace(sv,"%2F")}function _o(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const vv=/\/$/,yv=e=>e.replace(vv,"");function Ks(e,t,n="/"){let r,o={},i="",s="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,l>-1?l:t.length),o=e(i)),l>-1&&(r=r||t.slice(0,l),s=t.slice(l,t.length)),r=_v(r??t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:_o(s)}}function wv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ru(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function kv(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Or(t.matched[r],n.matched[o])&&Ph(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Or(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ph(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!xv(e[n],t[n]))return!1;return!0}function xv(e,t){return Mt(e)?ou(e,t):Mt(t)?ou(t,e):e===t}function ou(e,t){return Mt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function _v(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,s,l;for(s=0;s<r.length;s++)if(l=r[s],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s).join("/")}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Io;(function(e){e.pop="pop",e.push="push"})(Io||(Io={}));var uo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(uo||(uo={}));function Iv(e){if(!e)if(gr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),yv(e)}const Sv=/^[^#]+#/;function Cv(e,t){return e.replace(Sv,"#")+t}function Ev(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fs=()=>({left:window.scrollX,top:window.scrollY});function Tv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Ev(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function iu(e,t){return(history.state?history.state.position-t:-1)+e}const wa=new Map;function Pv(e,t){wa.set(e,t)}function Ov(e){const t=wa.get(e);return wa.delete(e),t}let Av=()=>location.protocol+"//"+location.host;function Oh(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let l=o.includes(e.slice(i))?e.slice(i).length:1,a=o.slice(l);return a[0]!=="/"&&(a="/"+a),ru(a,"")}return ru(n,e)+r+o}function Lv(e,t,n,r){let o=[],i=[],s=null;const l=({state:f})=>{const h=Oh(e,location),b=n.value,g=t.value;let y=0;if(f){if(n.value=h,t.value=f,s&&s===b){s=null;return}y=g?f.position-g.position:0}else r(h);o.forEach(I=>{I(n.value,b,{delta:y,type:Io.pop,direction:y?y>0?uo.forward:uo.back:uo.unknown})})};function a(){s=n.value}function c(f){o.push(f);const h=()=>{const b=o.indexOf(f);b>-1&&o.splice(b,1)};return i.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(xe({},f.state,{scroll:fs()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function su(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?fs():null}}function Rv(e){const{history:t,location:n}=window,r={value:Oh(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,c,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:Av()+e+a;try{t[u?"replaceState":"pushState"](c,"",f),o.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function s(a,c){const u=xe({},t.state,su(o.value.back,a,o.value.forward,!0),c,{position:o.value.position});i(a,u,!0),r.value=a}function l(a,c){const u=xe({},o.value,t.state,{forward:a,scroll:fs()});i(u.current,u,!0);const d=xe({},su(r.value,a,null),{position:u.position+1},c);i(a,d,!1),r.value=a}return{location:r,state:o,push:l,replace:s}}function $v(e){e=Iv(e);const t=Rv(e),n=Lv(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const o=xe({location:"",base:e,go:r,createHref:Cv.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Dv(e){return typeof e=="string"||e&&typeof e=="object"}function Ah(e){return typeof e=="string"||typeof e=="symbol"}const Lh=Symbol("");var au;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(au||(au={}));function Ar(e,t){return xe(new Error,{type:e,[Lh]:!0},t)}function Qt(e,t){return e instanceof Error&&Lh in e&&(t==null||!!(e.type&t))}const lu="[^/]+?",Nv={sensitive:!1,strict:!1,start:!0,end:!0},Mv=/[.+*?^${}()[\]/\\]/g;function jv(e,t){const n=xe({},Nv,t),r=[];let o=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(o+="/"),o+=f.value.replace(Mv,"\\$&"),h+=40;else if(f.type===1){const{value:b,repeatable:g,optional:y,regexp:I}=f;i.push({name:b,repeatable:g,optional:y});const v=I||lu;if(v!==lu){h+=10;try{new RegExp(`(${v})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${b}" (${v}): `+O.message)}}let _=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(_=y&&c.length<2?`(?:/${_})`:"/"+_),y&&(_+="?"),o+=_,h+=20,y&&(h+=-8),g&&(h+=-20),v===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function l(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",b=i[f-1];d[b.name]=h&&b.repeatable?h.split("/"):h}return d}function a(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:b,repeatable:g,optional:y}=h,I=b in c?c[b]:"";if(Mt(I)&&!g)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const v=Mt(I)?I.join("/"):I;if(!v)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);u+=v}}return u||"/"}return{re:s,score:r,keys:i,parse:l,stringify:a}}function Bv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Rh(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=Bv(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(cu(r))return 1;if(cu(o))return-1}return o.length-r.length}function cu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const zv={type:0,value:""},Fv=/[a-zA-Z0-9_]/;function Uv(e){if(!e)return[[]];if(e==="/")return[[zv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let l=0,a,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),s()):a===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:a==="("?n=2:Fv.test(a)?f():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),s(),o}function Vv(e,t,n){const r=jv(Uv(e.path),n),o=xe(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Hv(e,t){const n=[],r=new Map;t=hu({strict:!1,end:!0,sensitive:!1},t);function o(d){return r.get(d)}function i(d,f,h){const b=!h,g=du(d);g.aliasOf=h&&h.record;const y=hu(t,d),I=[g];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const N of O)I.push(du(xe({},g,{components:h?h.record.components:g.components,path:N,aliasOf:h?h.record:g})))}let v,_;for(const O of I){const{path:N}=O;if(f&&N[0]!=="/"){const q=f.record.path,K=q[q.length-1]==="/"?"":"/";O.path=f.record.path+(N&&K+N)}if(v=Vv(O,f,y),h?h.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),b&&d.name&&!fu(v)&&s(d.name)),$h(v)&&a(v),g.children){const q=g.children;for(let K=0;K<q.length;K++)i(q[K],v,h&&h.children[K])}h=h||v}return _?()=>{s(_)}:co}function s(d){if(Ah(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function l(){return n}function a(d){const f=qv(d,n);n.splice(f,0,d),d.record.name&&!fu(d)&&r.set(d.record.name,d)}function c(d,f){let h,b={},g,y;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw Ar(1,{location:d});y=h.record.name,b=xe(uu(f.params,h.keys.filter(_=>!_.optional).concat(h.parent?h.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&uu(d.params,h.keys.map(_=>_.name))),g=h.stringify(b)}else if(d.path!=null)g=d.path,h=n.find(_=>_.re.test(g)),h&&(b=h.parse(g),y=h.record.name);else{if(h=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!h)throw Ar(1,{location:d,currentLocation:f});y=h.record.name,b=xe({},f.params,d.params),g=h.stringify(b)}const I=[];let v=h;for(;v;)I.unshift(v.record),v=v.parent;return{name:y,path:g,params:b,matched:I,meta:Wv(I)}}e.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:s,clearRoutes:u,getRoutes:l,getRecordMatcher:o}}function uu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function du(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Kv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Kv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function fu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wv(e){return e.reduce((t,n)=>xe(t,n.meta),{})}function hu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function qv(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Rh(e,t[i])<0?r=i:n=i+1}const o=Gv(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function Gv(e){let t=e;for(;t=t.parent;)if($h(t)&&Rh(e,t)===0)return t}function $h({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Jv(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Sh," "),s=i.indexOf("="),l=_o(s<0?i:i.slice(0,s)),a=s<0?null:_o(i.slice(s+1));if(l in t){let c=t[l];Mt(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function mu(e){let t="";for(let n in e){const r=e[n];if(n=pv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Mt(r)?r.map(i=>i&&ya(i)):[r&&ya(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Yv(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Mt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Zv=Symbol(""),pu=Symbol(""),hs=Symbol(""),Cl=Symbol(""),ka=Symbol("");function Gr(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function An(e,t,n,r,o,i=s=>s()){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((l,a)=>{const c=f=>{f===!1?a(Ar(4,{from:n,to:t})):f instanceof Error?a(f):Dv(f)?a(Ar(2,{from:t,to:f})):(s&&r.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),l())},u=i(()=>e.call(r&&r.instances[o],t,n,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(f=>a(f))})}function Ws(e,t,n,r,o=i=>i()){const i=[];for(const s of e)for(const l in s.components){let a=s.components[l];if(!(t!=="beforeRouteEnter"&&!s.instances[l]))if(_h(a)){const u=(a.__vccOpts||a)[t];u&&i.push(An(u,n,r,s,l,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const d=ov(u)?u.default:u;s.mods[l]=u,s.components[l]=d;const h=(d.__vccOpts||d)[t];return h&&An(h,n,r,s,l,o)()}))}}return i}function bu(e){const t=yt(hs),n=yt(Cl),r=Ae(()=>{const a=Y(e.to);return t.resolve(a)}),o=Ae(()=>{const{matched:a}=r.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Or.bind(null,u));if(f>-1)return f;const h=gu(a[c-2]);return c>1&&gu(u)===h&&d[d.length-1].path!==h?d.findIndex(Or.bind(null,a[c-2])):f}),i=Ae(()=>o.value>-1&&ty(n.params,r.value.params)),s=Ae(()=>o.value>-1&&o.value===n.matched.length-1&&Ph(n.params,r.value.params));function l(a={}){return ey(a)?t[Y(e.replace)?"replace":"push"](Y(e.to)).catch(co):Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:s,navigate:l}}const Xv=xf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bu,setup(e,{slots:t}){const n=Kn(bu(e)),{options:r}=yt(hs),o=Ae(()=>({[vu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:bl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Qv=Xv;function ey(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ty(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Mt(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function gu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const vu=(e,t,n)=>e??t??n,ny=xf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=yt(ka),o=Ae(()=>e.route||r.value),i=yt(pu,0),s=Ae(()=>{let c=Y(i);const{matched:u}=o.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=Ae(()=>o.value.matched[s.value]);gi(pu,Ae(()=>s.value+1)),gi(Zv,l),gi(ka,o);const a=De();return qt(()=>[a.value,l.value,e.name],([c,u,d],[f,h,b])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Or(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,d=l.value,f=d&&d.components[u];if(!f)return yu(n.default,{Component:f,route:c});const h=d.props[u],b=h?h===!0?c.params:typeof h=="function"?h(c):h:null,y=bl(f,xe({},b,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return yu(n.default,{Component:y,route:c})||y}}});function yu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Dh=ny;function ry(e){const t=Hv(e.routes,e),n=e.parseQuery||Jv,r=e.stringifyQuery||mu,o=e.history,i=Gr(),s=Gr(),l=Gr(),a=r0(_n);let c=_n;gr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hs.bind(null,E=>""+E),d=Hs.bind(null,gv),f=Hs.bind(null,_o);function h(E,V){let F,G;return Ah(E)?(F=t.getRecordMatcher(E),G=V):G=E,t.addRoute(G,F)}function b(E){const V=t.getRecordMatcher(E);V&&t.removeRoute(V)}function g(){return t.getRoutes().map(E=>E.record)}function y(E){return!!t.getRecordMatcher(E)}function I(E,V){if(V=xe({},V||a.value),typeof E=="string"){const p=Ks(n,E,V.path),w=t.resolve({path:p.path},V),A=o.createHref(p.fullPath);return xe(p,w,{params:f(w.params),hash:_o(p.hash),redirectedFrom:void 0,href:A})}let F;if(E.path!=null)F=xe({},E,{path:Ks(n,E.path,V.path).path});else{const p=xe({},E.params);for(const w in p)p[w]==null&&delete p[w];F=xe({},E,{params:d(p)}),V.params=d(V.params)}const G=t.resolve(F,V),we=E.hash||"";G.params=u(f(G.params));const $e=wv(r,xe({},E,{hash:mv(we),path:G.path})),m=o.createHref($e);return xe({fullPath:$e,hash:we,query:r===mu?Yv(E.query):E.query||{}},G,{redirectedFrom:void 0,href:m})}function v(E){return typeof E=="string"?Ks(n,E,a.value.path):xe({},E)}function _(E,V){if(c!==E)return Ar(8,{from:V,to:E})}function O(E){return K(E)}function N(E){return O(xe(v(E),{replace:!0}))}function q(E){const V=E.matched[E.matched.length-1];if(V&&V.redirect){const{redirect:F}=V;let G=typeof F=="function"?F(E):F;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=v(G):{path:G},G.params={}),xe({query:E.query,hash:E.hash,params:G.path!=null?{}:E.params},G)}}function K(E,V){const F=c=I(E),G=a.value,we=E.state,$e=E.force,m=E.replace===!0,p=q(F);if(p)return K(xe(v(p),{state:typeof p=="object"?xe({},we,p.state):we,force:$e,replace:m}),V||F);const w=F;w.redirectedFrom=V;let A;return!$e&&kv(r,G,F)&&(A=Ar(16,{to:w,from:G}),Ge(G,G,!0,!1)),(A?Promise.resolve(A):W(w,G)).catch(S=>Qt(S)?Qt(S,2)?S:et(S):ce(S,w,G)).then(S=>{if(S){if(Qt(S,2))return K(xe({replace:m},v(S.to),{state:typeof S.to=="object"?xe({},we,S.to.state):we,force:$e}),V||w)}else S=z(w,G,!0,m,we);return re(w,G,S),S})}function H(E,V){const F=_(E,V);return F?Promise.reject(F):Promise.resolve()}function R(E){const V=Ft.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(E):E()}function W(E,V){let F;const[G,we,$e]=oy(E,V);F=Ws(G.reverse(),"beforeRouteLeave",E,V);for(const p of G)p.leaveGuards.forEach(w=>{F.push(An(w,E,V))});const m=H.bind(null,E,V);return F.push(m),xt(F).then(()=>{F=[];for(const p of i.list())F.push(An(p,E,V));return F.push(m),xt(F)}).then(()=>{F=Ws(we,"beforeRouteUpdate",E,V);for(const p of we)p.updateGuards.forEach(w=>{F.push(An(w,E,V))});return F.push(m),xt(F)}).then(()=>{F=[];for(const p of $e)if(p.beforeEnter)if(Mt(p.beforeEnter))for(const w of p.beforeEnter)F.push(An(w,E,V));else F.push(An(p.beforeEnter,E,V));return F.push(m),xt(F)}).then(()=>(E.matched.forEach(p=>p.enterCallbacks={}),F=Ws($e,"beforeRouteEnter",E,V,R),F.push(m),xt(F))).then(()=>{F=[];for(const p of s.list())F.push(An(p,E,V));return F.push(m),xt(F)}).catch(p=>Qt(p,8)?p:Promise.reject(p))}function re(E,V,F){l.list().forEach(G=>R(()=>G(E,V,F)))}function z(E,V,F,G,we){const $e=_(E,V);if($e)return $e;const m=V===_n,p=gr?history.state:{};F&&(G||m?o.replace(E.fullPath,xe({scroll:m&&p&&p.scroll},we)):o.push(E.fullPath,we)),a.value=E,Ge(E,V,F,m),et()}let ae;function Pe(){ae||(ae=o.listen((E,V,F)=>{if(!ri.listening)return;const G=I(E),we=q(G);if(we){K(xe(we,{replace:!0}),G).catch(co);return}c=G;const $e=a.value;gr&&Pv(iu($e.fullPath,F.delta),fs()),W(G,$e).catch(m=>Qt(m,12)?m:Qt(m,2)?(K(m.to,G).then(p=>{Qt(p,20)&&!F.delta&&F.type===Io.pop&&o.go(-1,!1)}).catch(co),Promise.reject()):(F.delta&&o.go(-F.delta,!1),ce(m,G,$e))).then(m=>{m=m||z(G,$e,!1),m&&(F.delta&&!Qt(m,8)?o.go(-F.delta,!1):F.type===Io.pop&&Qt(m,20)&&o.go(-1,!1)),re(G,$e,m)}).catch(co)}))}let Ue=Gr(),ge=Gr(),ee;function ce(E,V,F){et(E);const G=ge.list();return G.length?G.forEach(we=>we(E,V,F)):console.error(E),Promise.reject(E)}function mt(){return ee&&a.value!==_n?Promise.resolve():new Promise((E,V)=>{Ue.add([E,V])})}function et(E){return ee||(ee=!E,Pe(),Ue.list().forEach(([V,F])=>E?F(E):V()),Ue.reset()),E}function Ge(E,V,F,G){const{scrollBehavior:we}=e;if(!gr||!we)return Promise.resolve();const $e=!F&&Ov(iu(E.fullPath,0))||(G||!F)&&history.state&&history.state.scroll||null;return ns().then(()=>we(E,V,$e)).then(m=>m&&Tv(m)).catch(m=>ce(m,E,V))}const He=E=>o.go(E);let wn;const Ft=new Set,ri={currentRoute:a,listening:!0,addRoute:h,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:g,resolve:I,options:e,push:O,replace:N,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:ge.add,isReady:mt,install(E){const V=this;E.component("RouterLink",Qv),E.component("RouterView",Dh),E.config.globalProperties.$router=V,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(a)}),gr&&!wn&&a.value===_n&&(wn=!0,O(o.location).catch(we=>{}));const F={};for(const we in _n)Object.defineProperty(F,we,{get:()=>a.value[we],enumerable:!0});E.provide(hs,V),E.provide(Cl,sf(F)),E.provide(ka,a);const G=E.unmount;Ft.add(E),E.unmount=function(){Ft.delete(E),Ft.size<1&&(c=_n,ae&&ae(),ae=null,a.value=_n,wn=!1,ee=!1),G()}}};function xt(E){return E.reduce((V,F)=>V.then(()=>R(F)),Promise.resolve())}return ri}function oy(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=t.matched[s];l&&(e.matched.find(c=>Or(c,l))?r.push(l):n.push(l));const a=e.matched[s];a&&(t.matched.find(c=>Or(c,a))||o.push(a))}return[n,r,o]}function Ko(){return yt(hs)}function Wo(e){return yt(Cl)}const ji="/dashboard/assets/logo-ByLmkyx8.png";function So(e){"@babel/helpers - typeof";return So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},So(e)}function iy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sy(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ly(r.key),r)}}function ay(e,t,n){return t&&sy(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ly(e){var t=cy(e,"string");return So(t)=="symbol"?t:t+""}function cy(e,t){if(So(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(So(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Nh=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};iy(this,e),this.element=t,this.listener=n}return ay(e,[{key:"bindScrollListener",value:function(){this.scrollableParents=Pg(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function ut(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return qg(e)}var uy=ds(),qo={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=xh()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function dy(e,t,n,r,o,i){return i.inline?ye(e.$slots,"default",{key:0}):o.mounted?(k(),fe(y0,{key:1,to:n.appendTo},[ye(e.$slots,"default")],8,["to"])):te("",!0)}qo.render=dy;var Ln={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(t){return this._loadedStyleNames.has(t)},setLoadedStyleName:function(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName:function(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}},wu=be.extend({name:"common"});function Co(e){"@babel/helpers - typeof";return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Co(e)}function fy(e){return Bh(e)||hy(e)||jh(e)||Mh()}function hy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hi(e,t){return Bh(e)||my(e,t)||jh(e,t)||Mh()}function Mh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jh(e,t){if(e){if(typeof e=="string")return ku(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ku(e,t):void 0}}function ku(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function my(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,l=[],a=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return l}}function Bh(e){if(Array.isArray(e))return e}function xu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xu(Object(n),!0).forEach(function(r){wi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wi(e,t,n){return(t=py(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function py(e){var t=by(e,"string");return Co(t)=="symbol"?t:t+""}function by(e,t){if(Co(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Co(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var lt={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(t){t||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(t){var n=this;t?(this._loadScopedThemeStyles(t),this._themeChangeListener(function(){return n._loadScopedThemeStyles(t)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,beforeCreate:function(){var t,n,r,o,i,s,l,a,c,u,d,f=(t=this.pt)===null||t===void 0?void 0:t._usept,h=f?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,b=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=b||h)===null||o===void 0||(o=o.hooks)===null||o===void 0||(i=o.onBeforeCreate)===null||i===void 0||i.call(o);var g=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,y=g?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.originalValue:void 0,I=g?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=I||y)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this.rootEl=fn(this.$el,'[data-pc-name="'.concat(Lt(this.$.type.name),'"]')),this.rootEl&&(this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=de({name:this.$.type.name},this.$params)),this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(t){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(t)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(t));n==null||n(),r==null||r()}},_mergeProps:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return yl(t)?t.apply(void 0,r):P.apply(void 0,r)},_loadStyles:function(){var t=this,n=function(){Ln.isStyleNameLoaded("base")||(be.loadCSS(t.$styleOptions),t._loadGlobalStyles(),Ln.setLoadedStyleName("base")),t._loadThemeStyles()};n(),this._themeChangeListener(n)},_loadCoreStyles:function(){var t,n;!Ln.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(wu.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Ln.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Oe(t)&&be.load(t,de({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var t,n;if(!this.isUnstyled){if(!_e.isStyleNameLoaded("common")){var r,o,i=((r=this.$style)===null||r===void 0||(o=r.getCommonTheme)===null||o===void 0?void 0:o.call(r))||{},s=i.primitive,l=i.semantic;be.load(s==null?void 0:s.css,de({name:"primitive-variables"},this.$styleOptions)),be.load(l==null?void 0:l.css,de({name:"semantic-variables"},this.$styleOptions)),be.loadTheme(de({name:"global-style"},this.$styleOptions)),_e.setLoadedStyleName("common")}if(!_e.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var a,c,u,d,f=((a=this.$style)===null||a===void 0||(c=a.getComponentTheme)===null||c===void 0?void 0:c.call(a))||{},h=f.css;(u=this.$style)===null||u===void 0||u.load(h,de({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(d=this.$style)===null||d===void 0||d.loadTheme(de({name:"".concat(this.$style.name,"-style")},this.$styleOptions)),_e.setLoadedStyleName(this.$style.name)}if(!_e.isStyleNameLoaded("layer-order")){var b,g,y=(b=this.$style)===null||b===void 0||(g=b.getLayerOrderThemeCSS)===null||g===void 0?void 0:g.call(b);be.load(y,de({name:"layer-order",first:!0},this.$styleOptions)),_e.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(t){var n,r,o,i=((n=this.$style)===null||n===void 0||(r=n.getPresetTheme)===null||r===void 0?void 0:r.call(n,t,"[".concat(this.$attrSelector,"]")))||{},s=i.css,l=(o=this.$style)===null||o===void 0?void 0:o.load(s,de({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=l.el},_unloadScopedThemeStyles:function(){var t;(t=this.scopedStyleEl)===null||t===void 0||(t=t.value)===null||t===void 0||t.remove()},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Ln.clearLoadedStyleNames(),At.on("theme:change",t)},_getHostInstance:function(t){return t?this.$options.hostName?t.$.type.name===this.$options.hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0},_getPropValue:function(t){var n;return this[t]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[t])},_getOptionValue:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return wl(t,n,r)},_getPTValue:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!o[r.split(".")[0]],l=this._getPropValue("ptOptions")||((t=this.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},a=l.mergeSections,c=a===void 0?!0:a,u=l.mergeProps,d=u===void 0?!1:u,f=i?s?this._useGlobalPT(this._getPTClassValue,r,o):this._useDefaultPT(this._getPTClassValue,r,o):void 0,h=s?void 0:this._getPTSelf(n,this._getPTClassValue,r,de(de({},o),{},{global:f||{}})),b=this._getPTDatasets(r);return c||!c&&h?d?this._mergeProps(d,f,h,b):de(de(de({},f),h),b):de(de({},h),b)},_getPTSelf:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return P(this._usePT.apply(this,[this._getPT(t,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var t,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o="data-pc-",i=r==="root"&&Oe((t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]);return r!=="transition"&&de(de({},r==="root"&&de(wi({},"".concat(o,"name"),Lt(i?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),i&&wi({},"".concat(o,"extend"),Lt(this.$.type.name)))),{},wi({},"".concat(o,"section"),Lt(r)))},_getPTClassValue:function(){var t=this._getOptionValue.apply(this,arguments);return dt(t)||kl(t)?{class:t}:t},_getPT:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i=function(l){var a,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=o?o(l):l,d=Lt(r),f=Lt(n.$name);return(a=c?d!==f?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&a!==void 0?a:u};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t,!0)},_usePT:function(t,n,r,o){var i=function(g){return n(g,r,o)};if(t!=null&&t.hasOwnProperty("_usept")){var s,l=t._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},a=l.mergeSections,c=a===void 0?!0:a,u=l.mergeProps,d=u===void 0?!1:u,f=i(t.originalValue),h=i(t.value);return f===void 0&&h===void 0?void 0:dt(h)?h:dt(f)?f:c||!c&&h?d?this._mergeProps(d,f,h):de(de({},f),h):h}return i(t)},_useGlobalPT:function(t,n,r){return this._usePT(this.globalPT,t,n,r)},_useDefaultPT:function(t,n,r){return this._usePT(this.defaultPT,t,n,r)},ptm:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,t,de(de({},this.$params),n))},ptmi:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return P(this.$_attrsWithoutPT,this.ptm(t,n))},ptmo:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(t,n,de({instance:this},r),!1)},cx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,t,de(de({},this.$params),n))},sx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var o=this._getOptionValue(this.$style.inlineStyles,t,de(de({},this.$params),r)),i=this._getOptionValue(wu.inlineStyles,t,de(de({},this.$params),r));return[i,o]}}},computed:{globalPT:function(){var t,n=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(r){return wt(r,{instance:n})})},defaultPT:function(){var t,n=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(r){return n._getOptionValue(r,n.$name,de({},n.$params))||wt(r,de({},n.$params))})},isUnstyled:function(){var t;return this.unstyled!==void 0?this.unstyled:(t=this.$primevueConfig)===null||t===void 0?void 0:t.unstyled},$theme:function(){var t;return(t=this.$primevueConfig)===null||t===void 0?void 0:t.theme},$style:function(){return de(de({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var t;return{nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}},$primevueConfig:function(){var t;return(t=this.$primevue)===null||t===void 0?void 0:t.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var t=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:t,props:t==null?void 0:t.$props,state:t==null?void 0:t.$data,attrs:t==null?void 0:t.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var n=hi(t,1),r=n[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(t,n){var r=hi(n,2),o=r[0],i=r[1],s=o.split(":"),l=fy(s),a=l.slice(1);return a==null||a.reduce(function(c,u,d,f){return!c[u]&&(c[u]=d===f.length-1?i:{}),c[u]},t),t},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var n=hi(t,1),r=n[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(t,n){var r=hi(n,2),o=r[0],i=r[1];return t[o]=i,t},{})},$attrSelector:function(){return ut("pc")}}},gy=function(t){var n=t.dt;return`
.p-menu {
    background: `.concat(n("menu.background"),`;
    color: `).concat(n("menu.color"),`;
    border: 1px solid `).concat(n("menu.border.color"),`;
    border-radius: `).concat(n("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(n("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(n("menu.transition.duration"),", color ").concat(n("menu.transition.duration"),`;
    border-radius: `).concat(n("menu.item.border.radius"),`;
    color: `).concat(n("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(n("menu.item.padding"),`;
    gap: `).concat(n("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(n("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(n("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(n("menu.submenu.label.background"),`;
    padding: `).concat(n("menu.submenu.label.padding"),`;
    color: `).concat(n("menu.submenu.label.color"),`;
    font-weight: `).concat(n("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-top: 1px solid `).concat(n("menu.separator.border.color"),`;
}
`)},vy={root:function(t){var n=t.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var n=t.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},yy=be.extend({name:"menu",theme:gy,classes:vy});function Eo(e){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Eo(e)}function _u(e,t){return _y(e)||xy(e,t)||ky(e,t)||wy()}function wy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ky(e,t){if(e){if(typeof e=="string")return Iu(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Iu(e,t):void 0}}function Iu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function xy(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,l=[],a=!0,c=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return l}}function _y(e){if(Array.isArray(e))return e}function Su(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Su(Object(n),!0).forEach(function(r){xa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Su(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xa(e,t,n){return(t=Iy(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Iy(e){var t=Sy(e,"string");return Eo(t)=="symbol"?t:t+""}function Sy(e,t){if(Eo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Eo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var se={_getMeta:function(){return[Yt(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],wt(Yt(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(t,n){var r,o,i;return(r=(t==null||(o=t.instance)===null||o===void 0?void 0:o.$primevue)||(n==null||(i=n.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:wl,_getPTValue:function(){var t,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=function(){var v=se._getOptionValue.apply(se,arguments);return dt(v)||kl(v)?{class:v}:v},c=((t=r.binding)===null||t===void 0||(t=t.value)===null||t===void 0?void 0:t.ptOptions)||((n=r.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},u=c.mergeSections,d=u===void 0?!0:u,f=c.mergeProps,h=f===void 0?!1:f,b=l?se._useDefaultPT(r,r.defaultPT(),a,i,s):void 0,g=se._usePT(r,se._getPT(o,r.$name),a,i,pe(pe({},s),{},{global:b||{}})),y=se._getPTDatasets(r,i);return d||!d&&g?h?se._mergeProps(r,h,b,g,y):pe(pe(pe({},b),g),y):pe(pe({},g),y)},_getPTDatasets:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return pe(pe({},n==="root"&&xa({},"".concat(r,"name"),Lt(t.$name))),{},xa({},"".concat(r,"section"),Lt(n)))},_getPT:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=function(s){var l,a=r?r(s):s,c=Lt(n);return(l=a==null?void 0:a[c])!==null&&l!==void 0?l:a};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:o(t.originalValue),value:o(t.value)}:o(t)},_usePT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(y){return r(y,o,i)};if(n!=null&&n.hasOwnProperty("_usept")){var l,a=n._usept||((l=t.$primevueConfig)===null||l===void 0?void 0:l.ptOptions)||{},c=a.mergeSections,u=c===void 0?!0:c,d=a.mergeProps,f=d===void 0?!1:d,h=s(n.originalValue),b=s(n.value);return h===void 0&&b===void 0?void 0:dt(b)?b:dt(h)?h:u||!u&&b?f?se._mergeProps(t,f,h,b):pe(pe({},h),b):b}return s(n)},_useDefaultPT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return se._usePT(t,n,r,o,i)},_loadStyles:function(t,n,r){var o,i=se._getConfig(n,r),s={nonce:i==null||(o=i.csp)===null||o===void 0?void 0:o.nonce};se._loadCoreStyles(t.$instance,s),se._loadThemeStyles(t.$instance,s),se._loadScopedThemeStyles(t.$instance,s),se._themeChangeListener(function(){return se._loadThemeStyles(t.$instance,s)})},_loadCoreStyles:function(){var t,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!Ln.isStyleNameLoaded((t=r.$style)===null||t===void 0?void 0:t.name)&&(n=r.$style)!==null&&n!==void 0&&n.name){var i;be.loadCSS(o),r.isUnstyled()&&((i=r.$style)===null||i===void 0||i.loadCSS(o)),Ln.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var t,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!(r!=null&&r.isUnstyled())){if(!_e.isStyleNameLoaded("common")){var i,s,l=((i=r.$style)===null||i===void 0||(s=i.getCommonTheme)===null||s===void 0?void 0:s.call(i))||{},a=l.primitive,c=l.semantic;be.load(a==null?void 0:a.css,pe({name:"primitive-variables"},o)),be.load(c==null?void 0:c.css,pe({name:"semantic-variables"},o)),be.loadTheme(pe({name:"global-style"},o)),_e.setLoadedStyleName("common")}if(!_e.isStyleNameLoaded((t=r.$style)===null||t===void 0?void 0:t.name)&&(n=r.$style)!==null&&n!==void 0&&n.name){var u,d,f,h,b=((u=r.$style)===null||u===void 0||(d=u.getDirectiveTheme)===null||d===void 0?void 0:d.call(u))||{},g=b.css;(f=r.$style)===null||f===void 0||f.load(g,pe({name:"".concat(r.$style.name,"-variables")},o)),(h=r.$style)===null||h===void 0||h.loadTheme(pe({name:"".concat(r.$style.name,"-style")},o)),_e.setLoadedStyleName(r.$style.name)}if(!_e.isStyleNameLoaded("layer-order")){var y,I,v=(y=r.$style)===null||y===void 0||(I=y.getLayerOrderThemeCSS)===null||I===void 0?void 0:I.call(y);be.load(v,pe({name:"layer-order",first:!0},o)),_e.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=t.preset();if(r&&t.$attrSelector){var o,i,s,l=((o=t.$style)===null||o===void 0||(i=o.getPresetTheme)===null||i===void 0?void 0:i.call(o,r,"[".concat(t.$attrSelector,"]")))||{},a=l.css,c=(s=t.$style)===null||s===void 0?void 0:s.load(a,pe({name:"".concat(t.$attrSelector,"-").concat(t.$style.name)},n));t.scopedStyleEl=c.el}},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Ln.clearLoadedStyleNames(),At.on("theme:change",t)},_hook:function(t,n,r,o,i,s){var l,a,c="on".concat(hg(n)),u=se._getConfig(o,i),d=r==null?void 0:r.$instance,f=se._usePT(d,se._getPT(o==null||(l=o.value)===null||l===void 0?void 0:l.pt,t),se._getOptionValue,"hooks.".concat(c)),h=se._useDefaultPT(d,u==null||(a=u.pt)===null||a===void 0||(a=a.directives)===null||a===void 0?void 0:a[t],se._getOptionValue,"hooks.".concat(c)),b={el:r,binding:o,vnode:i,prevVnode:s};f==null||f(d,b),h==null||h(d,b)},_mergeProps:function(){for(var t=arguments.length>1?arguments[1]:void 0,n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return yl(t)?t.apply(void 0,r):P.apply(void 0,r)},_extend:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,l,a,c,u){var d,f,h;l._$instances=l._$instances||{};var b=se._getConfig(a,c),g=l._$instances[t]||{},y=st(g)?pe(pe({},n),n==null?void 0:n.methods):{};l._$instances[t]=pe(pe({},g),{},{$name:t,$host:l,$binding:a,$modifiers:a==null?void 0:a.modifiers,$value:a==null?void 0:a.value,$el:g.$el||l||void 0,$style:pe({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},n==null?void 0:n.style),$primevueConfig:b,$attrSelector:l.$attrSelector,defaultPT:function(){return se._getPT(b==null?void 0:b.pt,void 0,function(v){var _;return v==null||(_=v.directives)===null||_===void 0?void 0:_[t]})},isUnstyled:function(){var v,_;return((v=l.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.unstyled)!==void 0?(_=l.$instance)===null||_===void 0||(_=_.$binding)===null||_===void 0||(_=_.value)===null||_===void 0?void 0:_.unstyled:b==null?void 0:b.unstyled},theme:function(){var v;return(v=l.$instance)===null||v===void 0||(v=v.$primevueConfig)===null||v===void 0?void 0:v.theme},preset:function(){var v;return(v=l.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.dt},ptm:function(){var v,_=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return se._getPTValue(l.$instance,(v=l.$instance)===null||v===void 0||(v=v.$binding)===null||v===void 0||(v=v.value)===null||v===void 0?void 0:v.pt,_,pe({},O))},ptmo:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return se._getPTValue(l.$instance,v,_,O,!1)},cx:function(){var v,_,O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(v=l.$instance)!==null&&v!==void 0&&v.isUnstyled()?void 0:se._getOptionValue((_=l.$instance)===null||_===void 0||(_=_.$style)===null||_===void 0?void 0:_.classes,O,pe({},N))},sx:function(){var v,_=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return O?se._getOptionValue((v=l.$instance)===null||v===void 0||(v=v.$style)===null||v===void 0?void 0:v.inlineStyles,_,pe({},N)):void 0}},y),l.$instance=l._$instances[t],(d=(f=l.$instance)[s])===null||d===void 0||d.call(f,l,a,c,u),l["$".concat(t)]=l.$instance,se._hook(t,s,l,a,c,u),l.$pd||(l.$pd={}),l.$pd[t]=pe(pe({},(h=l.$pd)===null||h===void 0?void 0:h[t]),{},{name:t,instance:l.$instance})},o=function(s){var l,a,c,u,d,f=(l=s.$instance)===null||l===void 0?void 0:l.watch;f==null||(a=f.config)===null||a===void 0||a.call(s.$instance,(c=s.$instance)===null||c===void 0?void 0:c.$primevueConfig),yr.on("config:change",function(h){var b,g=h.newValue,y=h.oldValue;return f==null||(b=f.config)===null||b===void 0?void 0:b.call(s.$instance,g,y)}),f==null||(u=f["config.ripple"])===null||u===void 0||u.call(s.$instance,(d=s.$instance)===null||d===void 0||(d=d.$primevueConfig)===null||d===void 0?void 0:d.ripple),yr.on("config:ripple:change",function(h){var b,g=h.newValue,y=h.oldValue;return f==null||(b=f["config.ripple"])===null||b===void 0?void 0:b.call(s.$instance,g,y)})};return{created:function(s,l,a,c){r("created",s,l,a,c)},beforeMount:function(s,l,a,c){s.$attrSelector=ut("pd"),se._loadStyles(s,l,a),r("beforeMount",s,l,a,c),o(s)},mounted:function(s,l,a,c){se._loadStyles(s,l,a),r("mounted",s,l,a,c)},beforeUpdate:function(s,l,a,c){r("beforeUpdate",s,l,a,c)},updated:function(s,l,a,c){se._loadStyles(s,l,a),r("updated",s,l,a,c)},beforeUnmount:function(s,l,a,c){r("beforeUnmount",s,l,a,c)},unmounted:function(s,l,a,c){var u;(u=s.$instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),r("unmounted",s,l,a,c)}}},extend:function(){var t=se._getMeta.apply(se,arguments),n=_u(t,2),r=n[0],o=n[1];return pe({extend:function(){var s=se._getMeta.apply(se,arguments),l=_u(s,2),a=l[0],c=l[1];return se.extend(a,pe(pe(pe({},o),o==null?void 0:o.methods),c))}},se._extend(r,o))}},Cy=function(t){var n=t.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(n("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},Ey={root:"p-ink"},Ty=be.extend({name:"ripple-directive",theme:Cy,classes:Ey}),Py=se.extend({style:Ty});function To(e){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},To(e)}function Oy(e){return $y(e)||Ry(e)||Ly(e)||Ay()}function Ay(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ly(e,t){if(e){if(typeof e=="string")return _a(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_a(e,t):void 0}}function Ry(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $y(e){if(Array.isArray(e))return _a(e)}function _a(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Cu(e,t,n){return(t=Dy(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dy(e){var t=Ny(e,"string");return To(t)=="symbol"?t:t+""}function Ny(e,t){if(To(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(To(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var jr=Py.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var n=lo("span",Cu(Cu({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));t.appendChild(n),this.$el=n},remove:function(t){var n=this.getInk(t);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=this,r=t.currentTarget,o=this.getInk(r);if(!(!o||getComputedStyle(o,null).display==="none")){if(!this.isUnstyled()&&ao(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Gc(o)&&!Jc(o)){var i=Math.max(St(r),nn(r));o.style.height=i+"px",o.style.width=i+"px"}var s=Tg(r),l=t.pageX-s.left+document.body.scrollTop-Jc(o)/2,a=t.pageY-s.top+document.body.scrollLeft-Gc(o)/2;o.style.top=a+"px",o.style.left=l+"px",!this.isUnstyled()&&Ho(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){o&&(!n.isUnstyled()&&ao(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&ao(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?Oy(t.children).find(function(n){return Zn(n,"data-pc-name")==="ripple"}):void 0}}}),My={name:"BaseMenu",extends:lt,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:yy,provide:function(){return{$pcMenu:this,$parentInstance:this}}},zh={name:"Menuitem",hostName:"Menu",extends:lt,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,n){return t&&t.item?wt(t.item[n]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:P({class:this.cx("itemLink"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("itemLink")),icon:P({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:P({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:jr}},jy=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],By=["href","target"];function zy(e,t,n,r,o,i){var s=Nr("ripple");return i.visible()?(k(),T("li",P({key:0,id:n.id,class:[e.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[C("div",P({class:e.cx("itemContent"),onClick:t[0]||(t[0]=function(l){return i.onItemClick(l)}),onMousemove:t[1]||(t[1]=function(l){return i.onItemMouseMove(l)})},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(k(),fe(it(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):te("",!0):Dr((k(),T("a",P({key:0,href:n.item.url,class:e.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(k(),fe(it(n.templates.itemicon),{key:0,item:n.item,class:Xe(e.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(k(),T("span",P({key:1,class:[e.cx("itemIcon"),n.item.icon]},i.getPTOptions("itemIcon")),null,16)):te("",!0),C("span",P({class:e.cx("itemLabel")},i.getPTOptions("itemLabel")),Ie(i.label()),17)],16,By)),[[s]])],16)],16,jy)):te("",!0)}zh.render=zy;function Eu(e){return Hy(e)||Vy(e)||Uy(e)||Fy()}function Fy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Uy(e,t){if(e){if(typeof e=="string")return Ia(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ia(e,t):void 0}}function Vy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hy(e){if(Array.isArray(e))return Ia(e)}function Ia(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var El={name:"Menu",extends:My,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(t){this.id=t||ut()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||ut(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&We.clear(this.container),this.container=null},methods:{itemClick:function(t){var n=t.item;this.disabled(n)||(n.command&&n.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(Ke(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)Ke(this.target),this.hide(),t.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(Xr(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var n=fn(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),r=n&&fn(n,'a[data-pc-section="itemlink"]');this.popup&&Ke(this.target),r?r.click():n&&n.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var n=Xr(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),r=Eu(n).findIndex(function(o){return o.id===t});return r>-1?r+1:0},findPrevOptionIndex:function(t){var n=Xr(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),r=Eu(n).findIndex(function(o){return o.id===t});return r>-1?r-1:0},changeFocusedOptionIndex:function(t){var n=Xr(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),r=t>=n.length?n.length-1:t<0?0:t;r>-1&&(this.focusedOptionIndex=n[r].getAttribute("id"))},toggle:function(t){this.overlayVisible?this.hide():this.show(t)},show:function(t){this.overlayVisible=!0,this.target=t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){gh(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&We.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&Ke(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&We.clear(t)},alignOverlay:function(){Sg(this.container,this.target);var t=St(this.target);t>St(this.container)&&(this.container.style.minWidth=St(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var r=t.container&&!t.container.contains(n.target),o=!(t.target&&(t.target===n.target||t.target.contains(n.target)));t.overlayVisible&&r&&o?t.hide():!t.popup&&r&&o&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new Nh(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!_l()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){uy.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:zh,Portal:qo}},Ky=["id"],Wy=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],qy=["id"];function Gy(e,t,n,r,o,i){var s=je("PVMenuitem"),l=je("Portal");return k(),fe(l,{appendTo:e.appendTo,disabled:!e.popup},{default:me(function(){return[j(gl,P({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},e.ptm("transition")),{default:me(function(){return[!e.popup||o.overlayVisible?(k(),T("div",P({key:0,ref:i.containerRef,id:o.id,class:e.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},e.ptmi("root")),[e.$slots.start?(k(),T("div",P({key:0,class:e.cx("start")},e.ptm("start")),[ye(e.$slots,"start")],16)):te("",!0),C("ul",P({ref:i.listRef,id:o.id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},e.ptm("list")),[(k(!0),T(le,null,ar(e.model,function(a,c){return k(),T(le,{key:i.label(a)+c.toString()},[a.items&&i.visible(a)&&!a.separator?(k(),T(le,{key:0},[a.items?(k(),T("li",P({key:0,id:o.id+"_"+c,class:[e.cx("submenuLabel"),a.class],role:"none",ref_for:!0},e.ptm("submenuLabel")),[ye(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:a},function(){return[mn(Ie(i.label(a)),1)]})],16,qy)):te("",!0),(k(!0),T(le,null,ar(a.items,function(u,d){return k(),T(le,{key:u.label+c+"_"+d},[i.visible(u)&&!u.separator?(k(),fe(s,{key:0,id:o.id+"_"+c+"_"+d,item:u,templates:e.$slots,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(u)&&u.separator?(k(),T("li",P({key:"separator"+c+d,class:[e.cx("separator"),a.class],style:u.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):te("",!0)],64)}),128))],64)):i.visible(a)&&a.separator?(k(),T("li",P({key:"separator"+c.toString(),class:[e.cx("separator"),a.class],style:a.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):(k(),fe(s,{key:i.label(a)+c.toString(),id:o.id+"_"+c,item:a,index:c,templates:e.$slots,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Wy),e.$slots.end?(k(),T("div",P({key:1,class:e.cx("end")},e.ptm("end")),[ye(e.$slots,"end")],16)):te("",!0)],16,Ky)):te("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}El.render=Gy;const Jy={root:{class:["min-w-[12.5rem]","rounded-md","p-1","bg-surface-800 dark:bg-surface-900","text-surface-0 dark:text-white/80"]},list:{class:["list-none","m-0","p-0","outline-none"]},item:{class:"relative my-[2px] [&:first-child]:mt-0"},itemContent:({context:e})=>({class:["rounded-[4px]","text-surface-0 dark:text-white/80",{"text-surface-0 dark:text-white/70":!e.focused&&!e.active,"text-surface-0 dark:text-white/70 bg-surface-200":e.focused&&!e.active,"bg-highlight":e.focused&&e.active||e.active||!e.focused&&e.active},"transition-shadow","duration-200",{"hover:bg-surface-700 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.active,"hover:bg-highlight-emphasis":e.active},{"opacity-60 pointer-events-none cursor-default":e.disabled}]}),itemLink:{class:["relative","flex","items-center","py-2","px-3","text-surface-0 dark:text-white/80","no-underline","overflow-hidden","cursor-pointer","select-none"]},itemIcon:{class:["mr-2","text-surface-400 dark:text-white/70"]},itemLabel:{class:["leading-[normal]"]},submenuLabel:{class:["font-bold","m-0","py-2 px-3","rounded-tl-none","rounded-tr-none","bg-surface-0 dark:bg-surface-900","text-surface-400 dark:text-surface-600"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}};var Tu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Yy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=e[n++],s=e[n++],l=e[n++],a=((o&7)<<18|(i&63)<<12|(s&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|s&63)}}return t.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const i=e[o],s=o+1<e.length,l=s?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|c>>6,h=c&63;a||(h=64,s||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Fh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Yy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const i=n[e.charAt(o++)],l=o<e.length?n[e.charAt(o)]:0;++o;const c=o<e.length?n[e.charAt(o)]:64;++o;const d=o<e.length?n[e.charAt(o)]:64;if(++o,i==null||l==null||c==null||d==null)throw new Zy;const f=i<<2|l>>4;if(r.push(f),c!==64){const h=l<<4&240|c>>2;if(r.push(h),d!==64){const b=c<<6&192|d;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Zy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xy=function(e){const t=Fh(e);return Uh.encodeByteArray(t,!0)},Vh=function(e){return Xy(e).replace(/\./g,"")},Hh=function(e){try{return Uh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=()=>Qy().__FIREBASE_DEFAULTS__,t1=()=>{if(typeof process>"u"||typeof Tu>"u")return;const e=Tu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},n1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hh(e[1]);return t&&JSON.parse(t)},Tl=()=>{try{return e1()||t1()||n1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},r1=e=>{var t,n;return(n=(t=Tl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Kh=()=>{var e;return(e=Tl())===null||e===void 0?void 0:e.config},Wh=e=>{var t;return(t=Tl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function i1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function s1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function a1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function l1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c1(){const e=at();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function u1(){try{return typeof indexedDB=="object"}catch{return!1}}function d1(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;t(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="FirebaseError";class Wn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=f1,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,i=this.errors[t],s=i?h1(i,r):"Error",l=`${this.serviceName}: ${s} (${o}).`;return new Wn(o,l,r)}}function h1(e,t){return e.replace(m1,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const m1=/\{\$([^}]+)}/g;function p1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Bi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const i=e[o],s=t[o];if(Pu(i)&&Pu(s)){if(!Bi(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Pu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,i]=r.split("=");t[decodeURIComponent(o)]=decodeURIComponent(i)}}),t}function eo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function b1(e,t){const n=new g1(e,t);return n.subscribe.bind(n)}class g1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let o;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");v1(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:r},o.next===void 0&&(o.next=qs),o.error===void 0&&(o.error=qs),o.complete===void 0&&(o.complete=qs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function qs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return e&&e._delegate?e._delegate:e}class Lr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new o1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(k1(t))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(t=Xn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xn){return this.instances.has(t)}getOptions(t=Xn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&s.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&t(s,o),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:w1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xn){return this.component?this.component.multipleInstances?t:Xn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w1(e){return e===Xn?void 0:e}function k1(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new y1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Se||(Se={}));const _1={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},I1=Se.INFO,S1={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},C1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=S1[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qh{constructor(t){this.name=t,this._logLevel=I1,this._logHandler=C1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...t),this._logHandler(this,Se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...t),this._logHandler(this,Se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...t),this._logHandler(this,Se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...t),this._logHandler(this,Se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...t),this._logHandler(this,Se.ERROR,...t)}}const E1=(e,t)=>t.some(n=>e instanceof n);let Ou,Au;function T1(){return Ou||(Ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P1(){return Au||(Au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gh=new WeakMap,Sa=new WeakMap,Jh=new WeakMap,Gs=new WeakMap,Pl=new WeakMap;function O1(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(Mn(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Gh.set(n,e)}).catch(()=>{}),Pl.set(t,e),t}function A1(e){if(Sa.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});Sa.set(e,t)}let Ca={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function L1(e){Ca=e(Ca)}function R1(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Js(this),t,...n);return Jh.set(r,t.sort?t.sort():[t]),Mn(r)}:P1().includes(e)?function(...t){return e.apply(Js(this),t),Mn(Gh.get(this))}:function(...t){return Mn(e.apply(Js(this),t))}}function $1(e){return typeof e=="function"?R1(e):(e instanceof IDBTransaction&&A1(e),E1(e,T1())?new Proxy(e,Ca):e)}function Mn(e){if(e instanceof IDBRequest)return O1(e);if(Gs.has(e))return Gs.get(e);const t=$1(e);return t!==e&&(Gs.set(e,t),Pl.set(t,e)),t}const Js=e=>Pl.get(e);function D1(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),l=Mn(s);return r&&s.addEventListener("upgradeneeded",a=>{r(Mn(s.result),a.oldVersion,a.newVersion,Mn(s.transaction),a)}),n&&s.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),o&&a.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const N1=["get","getKey","getAll","getAllKeys","count"],M1=["put","add","delete","clear"],Ys=new Map;function Lu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ys.get(t))return Ys.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=M1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||N1.includes(n)))return;const i=async function(s,...l){const a=this.transaction(s,o?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),o&&a.done]))[0]};return Ys.set(t,i),i}L1(e=>({...e,get:(t,n,r)=>Lu(t,n)||e.get(t,n,r),has:(t,n)=>!!Lu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(B1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function B1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ea="@firebase/app",Ru="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new qh("@firebase/app"),z1="@firebase/app-compat",F1="@firebase/analytics-compat",U1="@firebase/analytics",V1="@firebase/app-check-compat",H1="@firebase/app-check",K1="@firebase/auth",W1="@firebase/auth-compat",q1="@firebase/database",G1="@firebase/data-connect",J1="@firebase/database-compat",Y1="@firebase/functions",Z1="@firebase/functions-compat",X1="@firebase/installations",Q1="@firebase/installations-compat",ew="@firebase/messaging",tw="@firebase/messaging-compat",nw="@firebase/performance",rw="@firebase/performance-compat",ow="@firebase/remote-config",iw="@firebase/remote-config-compat",sw="@firebase/storage",aw="@firebase/storage-compat",lw="@firebase/firestore",cw="@firebase/vertexai-preview",uw="@firebase/firestore-compat",dw="firebase",fw="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="[DEFAULT]",hw={[Ea]:"fire-core",[z1]:"fire-core-compat",[U1]:"fire-analytics",[F1]:"fire-analytics-compat",[H1]:"fire-app-check",[V1]:"fire-app-check-compat",[K1]:"fire-auth",[W1]:"fire-auth-compat",[q1]:"fire-rtdb",[G1]:"fire-data-connect",[J1]:"fire-rtdb-compat",[Y1]:"fire-fn",[Z1]:"fire-fn-compat",[X1]:"fire-iid",[Q1]:"fire-iid-compat",[ew]:"fire-fcm",[tw]:"fire-fcm-compat",[nw]:"fire-perf",[rw]:"fire-perf-compat",[ow]:"fire-rc",[iw]:"fire-rc-compat",[sw]:"fire-gcs",[aw]:"fire-gcs-compat",[lw]:"fire-fst",[uw]:"fire-fst-compat",[cw]:"fire-vertex","fire-js":"fire-js",[dw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Map,mw=new Map,Pa=new Map;function $u(e,t){try{e.container.addComponent(t)}catch(n){pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Po(e){const t=e.name;if(Pa.has(t))return pn.debug(`There were multiple attempts to register component ${t}.`),!1;Pa.set(t,e);for(const n of zi.values())$u(n,e);for(const n of mw.values())$u(n,e);return!0}function Yh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Rt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Go("app","Firebase",pw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=fw;function Zh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ta,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw jn.create("bad-app-name",{appName:String(o)});if(n||(n=Kh()),!n)throw jn.create("no-options");const i=zi.get(o);if(i){if(Bi(n,i.options)&&Bi(r,i.config))return i;throw jn.create("duplicate-app",{appName:o})}const s=new x1(o);for(const a of Pa.values())s.addComponent(a);const l=new bw(n,r,s);return zi.set(o,l),l}function gw(e=Ta){const t=zi.get(e);if(!t&&e===Ta&&Kh())return Zh();if(!t)throw jn.create("no-app",{appName:e});return t}function Sr(e,t,n){var r;let o=(r=hw[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const l=[`Unable to register library "${o}" with version "${t}":`];i&&l.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&l.push("and"),s&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pn.warn(l.join(" "));return}Po(new Lr(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="firebase-heartbeat-database",yw=1,Oo="firebase-heartbeat-store";let Zs=null;function Xh(){return Zs||(Zs=D1(vw,yw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(e=>{throw jn.create("idb-open",{originalErrorMessage:e.message})})),Zs}async function ww(e){try{const n=(await Xh()).transaction(Oo),r=await n.objectStore(Oo).get(Qh(e));return await n.done,r}catch(t){if(t instanceof Wn)pn.warn(t.message);else{const n=jn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pn.warn(n.message)}}}async function Du(e,t){try{const r=(await Xh()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(t,Qh(e)),await r.done}catch(n){if(n instanceof Wn)pn.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function Qh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=1024,xw=30*24*60*60*1e3;class _w{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nu();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=xw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nu(),{heartbeatsToSend:r,unsentEntries:o}=Iw(this._heartbeatsCache.heartbeats),i=Vh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pn.warn(n),""}}}function Nu(){return new Date().toISOString().substring(0,10)}function Iw(e,t=kw){const n=[];let r=e.slice();for(const o of e){const i=n.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),Mu(n)>t){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Mu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u1()?d1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ww(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Du(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Du(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Mu(e){return Vh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(e){Po(new Lr("platform-logger",t=>new j1(t),"PRIVATE")),Po(new Lr("heartbeat",t=>new _w(t),"PRIVATE")),Sr(Ea,Ru,e),Sr(Ea,Ru,"esm2017"),Sr("fire-js","")}Cw("");var Ew="firebase",Tw="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr(Ew,Tw,"app");function Ol(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function em(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pw=em,tm=new Go("auth","Firebase",em());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new qh("@firebase/auth");function Ow(e,...t){Fi.logLevel<=Se.WARN&&Fi.warn(`Auth (${Yo}): ${e}`,...t)}function ki(e,...t){Fi.logLevel<=Se.ERROR&&Fi.error(`Auth (${Yo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,...t){throw Ll(e,...t)}function Dt(e,...t){return Ll(e,...t)}function Al(e,t,n){const r=Object.assign(Object.assign({},Pw()),{[t]:n});return new Go("auth","Firebase",r).create(t,{appName:e.name})}function hn(e){return Al(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Aw(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Tt(e,"argument-error"),Al(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ll(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return tm.create(e,...t)}function X(e,t,...n){if(!e)throw Ll(t,...n)}function ln(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ki(t),new Error(t)}function bn(e,t){e||ln(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Lw(){return ju()==="http:"||ju()==="https:"}function ju(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lw()||a1()||"connection"in navigator)?navigator.onLine:!0}function $w(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,n){this.shortDelay=t,this.longDelay=n,bn(n>t,"Short delay should be less than long delay!"),this.isMobile=i1()||l1()}get(){return Rw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e,t){bn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new Zo(3e4,6e4);function vn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Zt(e,t,n,r,o={}){return rm(e,o,async()=>{let i={},s={};r&&(t==="GET"?s=r:i={body:JSON.stringify(r)});const l=Jo(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const c=Object.assign({method:t,headers:a},i);return s1()||(c.referrerPolicy="no-referrer"),nm.fetch()(om(e,e.config.apiHost,n,l),c)})}async function rm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dw),t);try{const o=new jw(e),i=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw mi(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const l=i.ok?s.errorMessage:s.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(e,"credential-already-in-use",s);if(a==="EMAIL_EXISTS")throw mi(e,"email-already-in-use",s);if(a==="USER_DISABLED")throw mi(e,"user-disabled",s);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Al(e,u,c);Tt(e,u)}}catch(o){if(o instanceof Wn)throw o;Tt(e,"network-request-failed",{message:String(o)})}}async function Xo(e,t,n,r,o={}){const i=await Zt(e,t,n,r,o);return"mfaPendingCredential"in i&&Tt(e,"multi-factor-auth-required",{_serverResponse:i}),i}function om(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?Rl(e.config,o):`${e.config.apiScheme}://${o}`}function Mw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),Nw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Dt(e,t,r);return o.customData._tokenResponse=n,o}function Bu(e){return e!==void 0&&e.enterprise!==void 0}class Bw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Mw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function zw(e,t){return Zt(e,"GET","/v2/recaptchaConfig",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(e,t){return Zt(e,"POST","/v1/accounts:delete",t)}async function im(e,t){return Zt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Uw(e,t=!1){const n=jt(e),r=await n.getIdToken(t),o=$l(r);X(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const i=typeof o.firebase=="object"?o.firebase:void 0,s=i==null?void 0:i.sign_in_provider;return{claims:o,token:r,authTime:fo(Xs(o.auth_time)),issuedAtTime:fo(Xs(o.iat)),expirationTime:fo(Xs(o.exp)),signInProvider:s||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xs(e){return Number(e)*1e3}function $l(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const o=Hh(n);return o?JSON.parse(o):(ki("Failed to decode base64 JWT payload"),null)}catch(o){return ki("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function zu(e){const t=$l(e);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Wn&&Vw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Vw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(e){var t;const n=e.auth,r=await e.getIdToken(),o=await Rr(e,im(n,{idToken:r}));X(o==null?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?sm(i.providerUserInfo):[],l=Ww(e.providerData,s),a=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Aa(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Kw(e){const t=jt(e);await Ui(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ww(e,t){return[...e.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function sm(e){return e.map(t=>{var{providerId:n}=t,r=Ol(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(e,t){const n=await rm(e,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=om(e,o,"/v1/token",`key=${i}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",nm.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Gw(e,t){return Zt(e,"POST","/v2/accounts:revokeToken",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){X(t.length!==0,"internal-error");const n=zu(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:o,expiresIn:i}=await qw(t,n);this.updateTokensAndExpiration(r,o,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:o,expirationTime:i}=n,s=new Cr;return r&&(X(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),o&&(X(typeof o=="string","internal-error",{appName:t}),s.accessToken=o),i&&(X(typeof i=="number","internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e,t){X(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class cn{constructor(t){var{uid:n,auth:r,stsTokenManager:o}=t,i=Ol(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Aa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Rr(this,this.stsTokenManager.getToken(this.auth,t));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Uw(this,t)}reload(){return Kw(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new cn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ui(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(hn(this.auth));const t=await this.getIdToken();return await Rr(this,Fw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,o,i,s,l,a,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(o=n.email)!==null&&o!==void 0?o:void 0,h=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(s=n.photoURL)!==null&&s!==void 0?s:void 0,g=(l=n.tenantId)!==null&&l!==void 0?l:void 0,y=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:O,isAnonymous:N,providerData:q,stsTokenManager:K}=n;X(_&&K,t,"internal-error");const H=Cr.fromJSON(this.name,K);X(typeof _=="string",t,"internal-error"),In(d,t.name),In(f,t.name),X(typeof O=="boolean",t,"internal-error"),X(typeof N=="boolean",t,"internal-error"),In(h,t.name),In(b,t.name),In(g,t.name),In(y,t.name),In(I,t.name),In(v,t.name);const R=new cn({uid:_,auth:t,email:f,emailVerified:O,displayName:d,isAnonymous:N,photoURL:b,phoneNumber:h,tenantId:g,stsTokenManager:H,createdAt:I,lastLoginAt:v});return q&&Array.isArray(q)&&(R.providerData=q.map(W=>Object.assign({},W))),y&&(R._redirectEventId=y),R}static async _fromIdTokenResponse(t,n,r=!1){const o=new Cr;o.updateFromServerResponse(n);const i=new cn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await Ui(i),i}static async _fromGetAccountInfoResponse(t,n,r){const o=n.users[0];X(o.localId!==void 0,"internal-error");const i=o.providerUserInfo!==void 0?sm(o.providerUserInfo):[],s=!(o.email&&o.passwordHash)&&!(i!=null&&i.length),l=new Cr;l.updateFromIdToken(r);const a=new cn({uid:o.localId,auth:t,stsTokenManager:l,isAnonymous:s}),c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:i,metadata:new Aa(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new Map;function un(e){bn(e instanceof Function,"Expected a class definition");let t=Fu.get(e);return t?(bn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Fu.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}am.type="NONE";const Uu=am;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e,t,n){return`firebase:${e}:${t}:${n}`}class Er{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:o,name:i}=this.auth;this.fullUserKey=xi(this.userKey,o.apiKey,i),this.fullPersistenceKey=xi("persistence",o.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?cn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Er(un(Uu),t,r);const o=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=o[0]||un(Uu);const s=xi(r,t.config.apiKey,t.name);let l=null;for(const c of n)try{const u=await c._get(s);if(u){const d=cn._fromJSON(t,u);c!==i&&(l=d),i=c;break}}catch{}const a=o.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Er(i,t,r):(i=a[0],l&&await i._set(s,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(s)}catch{}})),new Er(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hm(t))return"Blackberry";if(mm(t))return"Webos";if(cm(t))return"Safari";if((t.includes("chrome/")||um(t))&&!t.includes("edge/"))return"Chrome";if(fm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lm(e=at()){return/firefox\//i.test(e)}function cm(e=at()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function um(e=at()){return/crios\//i.test(e)}function dm(e=at()){return/iemobile/i.test(e)}function fm(e=at()){return/android/i.test(e)}function hm(e=at()){return/blackberry/i.test(e)}function mm(e=at()){return/webos/i.test(e)}function Dl(e=at()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Jw(e=at()){var t;return Dl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Yw(){return c1()&&document.documentMode===10}function pm(e=at()){return Dl(e)||fm(e)||mm(e)||hm(e)||/windows phone/i.test(e)||dm(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(e,t=[]){let n;switch(e){case"Browser":n=Vu(at());break;case"Worker":n=`${Vu(at())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((s,l)=>{try{const a=t(i);s(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(e,t={}){return Zt(e,"GET","/v2/passwordPolicy",vn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=6;class ek{constructor(t){var n,r,o,i;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Qw,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,o,i,s,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsLowercaseLetter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsNumericCharacter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,o,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(t,n,r,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hu(this),this.idTokenSubscription=new Hu(this),this.beforeStateQueue=new Zw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Er.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await im(this,{idToken:t}),r=await cn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Rt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=o==null?void 0:o._redirectEventId,a=await this.tryRedirectSignIn(t);(!s||s===l)&&(a!=null&&a.user)&&(o=a.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(s){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ui(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$w()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Rt(this.app))return Promise.reject(hn(this));const n=t?jt(t):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Rt(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Xw(this),n=new ek(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Go("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&un(t)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,o){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{s||i(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,o);return()=>{s=!0,a()}}else{const a=t.addObserver(n);return()=>{s=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Ow(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yn(e){return jt(e)}class Hu{constructor(t){this.auth=t,this.observer=null,this.addObserver=b1(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nk(e){ms=e}function gm(e){return ms.loadJS(e)}function rk(){return ms.recaptchaEnterpriseScript}function ok(){return ms.gapiScript}function ik(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const sk="recaptcha-enterprise",ak="NO_RECAPTCHA";class lk{constructor(t){this.type=sk,this.auth=yn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(s,l)=>{zw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Bw(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,s(c.siteKey)}}).catch(a=>{l(a)})})}function o(i,s,l){const a=window.grecaptcha;Bu(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:t}).then(c=>{s(c)}).catch(()=>{s(ak)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,s)=>{r(this.auth).then(l=>{if(!n&&Bu(window.grecaptcha))o(l,i,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let a=rk();a.length!==0&&(a+=l),gm(a).then(()=>{o(l,i,s)}).catch(c=>{s(c)})}}).catch(l=>{s(l)})})}}async function Ku(e,t,n,r=!1){const o=new lk(e);let i;try{i=await o.verify(n)}catch{i=await o.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Vi(e,t,n,r){var o;if(!((o=e._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ku(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Ku(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(e,t){const n=Yh(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),i=n.getOptions();if(Bi(i,t??{}))return o;Tt(o,"already-initialized")}return n.initialize({options:t})}function uk(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function dk(e,t,n){const r=yn(e);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,i=vm(t),{host:s,port:l}=fk(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${s}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),hk()}function vm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function fk(e){const t=vm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const i=o[1];return{host:i,port:Wu(r.substr(i.length+1))}}else{const[i,s]=r.split(":");return{host:i,port:Wu(s)}}}function Wu(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function hk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(t){return ln("not implemented")}_linkToIdToken(t,n){return ln("not implemented")}_getReauthenticationResolver(t){return ln("not implemented")}}async function mk(e,t){return Zt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(e,t){return Xo(e,"POST","/v1/accounts:signInWithPassword",vn(e,t))}async function ym(e,t){return Zt(e,"POST","/v1/accounts:sendOobCode",vn(e,t))}async function bk(e,t){return ym(e,t)}async function gk(e,t){return ym(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(e,t){return Xo(e,"POST","/v1/accounts:signInWithEmailLink",vn(e,t))}async function yk(e,t){return Xo(e,"POST","/v1/accounts:signInWithEmailLink",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Nl{constructor(t,n,r,o=null){super("password",r),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Ao(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ao(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vi(t,n,"signInWithPassword",pk);case"emailLink":return vk(t,{email:this._email,oobCode:this._password});default:Tt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vi(t,r,"signUpPassword",mk);case"emailLink":return yk(t,{idToken:n,email:this._email,oobCode:this._password});default:Tt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(e,t){return Xo(e,"POST","/v1/accounts:signInWithIdp",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="http://localhost";class lr extends Nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new lr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o}=n,i=Ol(n,["providerId","signInMethod"]);if(!r||!o)return null;const s=new lr(r,o);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Tr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Tr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Tr(t,n)}buildRequest(){const t={requestUri:wk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Jo(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xk(e){const t=Qr(eo(e)).link,n=t?Qr(eo(t)).deep_link_id:null,r=Qr(eo(e)).deep_link_id;return(r?Qr(eo(r)).link:null)||r||n||t||e}class Ml{constructor(t){var n,r,o,i,s,l;const a=Qr(eo(t)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,d=kk((o=a.mode)!==null&&o!==void 0?o:null);X(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(s=a.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=xk(t);try{return new Ml(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.providerId=Br.PROVIDER_ID}static credential(t,n){return Ao._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ml.parseLink(n);return X(r,"argument-error"),Ao._fromEmailAndCode(t,r.code,r.tenantId)}}Br.PROVIDER_ID="password";Br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends jl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Qo{constructor(){super("facebook.com")}static credential(t){return lr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rn.credential(t.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return lr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return on.credentialFromTaggedObject(t)}static credentialFromError(t){return on.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return on.credential(n,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Qo{constructor(){super("github.com")}static credential(t){return lr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $n.credentialFromTaggedObject(t)}static credentialFromError(t){return $n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $n.credential(t.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Qo{constructor(){super("twitter.com")}static credential(t,n){return lr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Dn.credentialFromTaggedObject(t)}static credentialFromError(t){return Dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(e,t){return Xo(e,"POST","/v1/accounts:signUp",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,o=!1){const i=await cn._fromIdTokenResponse(t,r,o),s=qu(r);return new cr({user:i,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const o=qu(r);return new cr({user:t,providerId:o,_tokenResponse:r,operationType:n})}}function qu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Wn{constructor(t,n,r,o){var i;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Hi.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,o){return new Hi(t,n,r,o)}}function wm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hi._fromErrorAndOperation(e,i,t,r):i})}async function Ik(e,t,n=!1){const r=await Rr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(e,t,n=!1){const{auth:r}=e;if(Rt(r.app))return Promise.reject(hn(r));const o="reauthenticate";try{const i=await Rr(e,wm(r,o,t,e),n);X(i.idToken,r,"internal-error");const s=$l(i.idToken);X(s,r,"internal-error");const{sub:l}=s;return X(e.uid===l,r,"user-mismatch"),cr._forOperation(e,o,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(e,t,n=!1){if(Rt(e.app))return Promise.reject(hn(e));const r="signIn",o=await wm(e,r,t),i=await cr._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function Ck(e,t){return km(yn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(e){const t=yn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Ek(e,t,n){const r=yn(e);await Vi(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",gk)}async function Tk(e,t,n){if(Rt(e.app))return Promise.reject(hn(e));const r=yn(e),s=await Vi(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_k).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&xm(e),a}),l=await cr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(l.user),l}function Pk(e,t,n){return Rt(e.app)?Promise.reject(hn(e)):Ck(jt(e),Br.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xm(e),r})}async function Ok(e,t){const n=jt(e),o={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:i}=await bk(n.auth,o);i!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(e,t){return Zt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=jt(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Rr(r,Ak(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Rk(e,t,n,r){return jt(e).onIdTokenChanged(t,n,r)}function $k(e,t,n){return jt(e).beforeAuthStateChanged(t,n)}function Dk(e,t,n,r){return jt(e).onAuthStateChanged(t,n,r)}function Nk(e){return jt(e).signOut()}const Ki="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ki,"1"),this.storage.removeItem(Ki),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=1e3,jk=10;class Im extends _m{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&t(n,o,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,l,a)=>{this.notifyListeners(s,a)});return}const r=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},i=this.storage.getItem(r);Yw()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,jk):o()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Im.type="LOCAL";const Bk=Im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends _m{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Sm.type="SESSION";const Cm=Sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const r=new ps(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:o,data:i}=n.data,s=this.handlersMap[o];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const l=Array.from(s).map(async c=>c(n.origin,i)),a=await zk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ps.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let i,s;return new Promise((l,a)=>{const c=Bl("",20);o.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);s={messageChannel:o,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),o.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function Uk(e){Jt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function Vk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Kk(){return Em()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="firebaseLocalStorageDb",Wk=1,Wi="firebaseLocalStorage",Pm="fbase_key";class ei{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(e,t){return e.transaction([Wi],t?"readwrite":"readonly").objectStore(Wi)}function qk(){const e=indexedDB.deleteDatabase(Tm);return new ei(e).toPromise()}function La(){const e=indexedDB.open(Tm,Wk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wi,{keyPath:Pm})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wi)?t(r):(r.close(),await qk(),t(await La()))})})}async function Gu(e,t,n){const r=bs(e,!0).put({[Pm]:t,value:n});return new ei(r).toPromise()}async function Gk(e,t){const n=bs(e,!1).get(t),r=await new ei(n).toPromise();return r===void 0?null:r.value}function Ju(e,t){const n=bs(e,!0).delete(t);return new ei(n).toPromise()}const Jk=800,Yk=3;class Om{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await La(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Yk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Em()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ps._getInstance(Kk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Vk(),!this.activeServiceWorker)return;this.sender=new Fk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Hk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await La();return await Gu(t,Ki,"1"),await Ju(t,Ki),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gu(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Gk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ju(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const i=bs(o,!1).getAll();return new ei(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:i}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(i)&&(this.notifyListeners(o,i),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Om.type="LOCAL";const Zk=Om;new Zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(e,t){return t?un(t):(X(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Nl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Tr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Tr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Tr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Xk(e){return km(e.auth,new zl(e),e.bypassAuthState)}function Qk(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),Sk(n,new zl(e),e.bypassAuthState)}async function ex(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),Ik(n,new zl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,n,r,o,i=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:o,tenantId:i,error:s,type:l}=t;if(s){this.reject(s);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Xk;case"linkViaPopup":case"linkViaRedirect":return ex;case"reauthViaPopup":case"reauthViaRedirect":return Qk;default:Tt(this.auth,"internal-error")}}resolve(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=new Zo(2e3,1e4);async function nx(e,t,n){if(Rt(e.app))return Promise.reject(Dt(e,"operation-not-supported-in-this-environment"));const r=yn(e);Aw(e,t,jl);const o=Am(r,n);return new er(r,"signInViaPopup",t,o).executeNotNull()}class er extends Lm{constructor(t,n,r,o,i){super(t,n,o,i),this.provider=r,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const t=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,tx.get())};t()}}er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="pendingRedirect",_i=new Map;class ox extends Lm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=_i.get(this.auth._key());if(!t){try{const r=await ix(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}_i.set(this.auth._key(),t)}return this.bypassAuthState||_i.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ix(e,t){const n=lx(t),r=ax(e);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function sx(e,t){_i.set(e._key(),t)}function ax(e){return un(e._redirectPersistence)}function lx(e){return xi(rx,e.config.apiKey,e.name)}async function cx(e,t,n=!1){if(Rt(e.app))return Promise.reject(hn(e));const r=yn(e),o=Am(r,t),s=await new ox(r,o,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=10*60*1e3;class dx{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Rm(t)){const o=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ux&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yu(t))}saveEventToCache(t){this.cachedEventUids.add(Yu(t)),this.lastProcessedEventTime=Date.now()}}function Yu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Rm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function fx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(e,t={}){return Zt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,px=/^https?/;async function bx(e){if(e.config.emulator)return;const{authorizedDomains:t}=await hx(e);for(const n of t)try{if(gx(n))return}catch{}Tt(e,"unauthorized-domain")}function gx(e){const t=Oa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!px.test(n))return!1;if(mx.test(e))return r===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=new Zo(3e4,6e4);function Zu(){const e=Jt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function yx(e){return new Promise((t,n)=>{var r,o,i;function s(){Zu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zu(),n(Dt(e,"network-request-failed"))},timeout:vx.get()})}if(!((o=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)s();else{const l=ik("iframefcb");return Jt()[l]=()=>{gapi.load?s():n(Dt(e,"network-request-failed"))},gm(`${ok()}?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw Ii=null,t})}let Ii=null;function wx(e){return Ii=Ii||yx(e),Ii}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=new Zo(5e3,15e3),xx="__/auth/iframe",_x="emulator/auth/iframe",Ix={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cx(e){const t=e.config;X(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Rl(t,_x):`https://${e.config.authDomain}/${xx}`,r={apiKey:t.apiKey,appName:e.name,v:Yo},o=Sx.get(e.config.apiHost);o&&(r.eid=o);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Jo(r).slice(1)}`}async function Ex(e){const t=await wx(e),n=Jt().gapi;return X(n,e,"internal-error"),t.open({where:document.body,url:Cx(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ix,dontclear:!0},r=>new Promise(async(o,i)=>{await r.restyle({setHideOnLeave:!1});const s=Dt(e,"network-request-failed"),l=Jt().setTimeout(()=>{i(s)},kx.get());function a(){Jt().clearTimeout(l),o(r)}r.ping(a).then(a,()=>{i(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Px=500,Ox=600,Ax="_blank",Lx="http://localhost";class Xu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rx(e,t,n,r=Px,o=Ox){const i=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Tx),{width:r.toString(),height:o.toString(),top:i,left:s}),c=at().toLowerCase();n&&(l=um(c)?Ax:n),lm(c)&&(t=t||Lx,a.scrollbars="yes");const u=Object.entries(a).reduce((f,[h,b])=>`${f}${h}=${b},`,"");if(Jw(c)&&l!=="_self")return $x(t||"",l),new Xu(null);const d=window.open(t||"",l,u);X(d,e,"popup-blocked");try{d.focus()}catch{}return new Xu(d)}function $x(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="__/auth/handler",Nx="emulator/auth/handler",Mx=encodeURIComponent("fac");async function Qu(e,t,n,r,o,i){X(e.config.authDomain,e,"auth-domain-config-required"),X(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Yo,eventId:o};if(t instanceof jl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",p1(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries({}))s[u]=d}if(t instanceof Qo){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(s.scopes=u.join(","))}e.tenantId&&(s.tid=e.tenantId);const l=s;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await e._getAppCheckToken(),c=a?`#${Mx}=${encodeURIComponent(a)}`:"";return`${jx(e)}?${Jo(l).slice(1)}${c}`}function jx({config:e}){return e.emulator?Rl(e,Nx):`https://${e.authDomain}/${Dx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="webStorageSupport";class Bx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cm,this._completeRedirectFn=cx,this._overrideRedirectResult=sx}async _openPopup(t,n,r,o){var i;bn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Qu(t,n,r,Oa(),o);return Rx(t,s,Bl())}async _openRedirect(t,n,r,o){await this._originValidation(t);const i=await Qu(t,n,r,Oa(),o);return Uk(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:i}=this.eventManagers[n];return o?Promise.resolve(o):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Ex(t),r=new dx(t);return n.register("authEvent",o=>(X(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Qs,{type:Qs},o=>{var i;const s=(i=o==null?void 0:o[0])===null||i===void 0?void 0:i[Qs];s!==void 0&&n(!!s),Tt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bx(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return pm()||cm()||Dl()}}const zx=Bx;var ed="@firebase/auth",td="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vx(e){Po(new Lr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;X(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:s,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bm(e)},c=new tk(r,o,i,a);return uk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Po(new Lr("auth-internal",t=>{const n=yn(t.getProvider("auth").getImmediate());return(r=>new Fx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr(ed,td,Ux(e)),Sr(ed,td,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=5*60,Kx=Wh("authIdTokenMaxAge")||Hx;let nd=null;const Wx=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kx)return;const o=n==null?void 0:n.token;nd!==o&&(nd=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function rd(e=gw()){const t=Yh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ck(e,{popupRedirectResolver:zx,persistence:[Zk,Bk,Cm]}),r=Wh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const s=Wx(i.toString());$k(n,s,()=>s(n.currentUser)),Rk(n,l=>s(l))}}const o=r1("auth");return o&&dk(n,`http://${o}`),n}function qx(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}nk({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=o=>{const i=Dt("internal-error");i.customData=o,n(i)},r.type="text/javascript",r.charset="UTF-8",qx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vx("Browser");const Gx=async(e,t)=>{const n=ze();return await Pk(n.firebaseAuth,e,t)},Jx=async(e,t)=>{const n=ze();return await Tk(n.firebaseAuth,e,t)},Yx=async()=>{const e=ze();return await Nk(e.firebaseAuth)},Zx=async()=>{const e=ze(),t=new on;return t.setCustomParameters({prompt:"select_account"}),await nx(e.firebaseAuth,t)},Xx=async e=>{const t=ze();return await Ek(t.firebaseAuth,e)},Qx=async(e,t)=>(ze(),await Lk(e,{displayName:t.displayName})),ea=e=>{switch(e){case"auth/wrong-password":return"Incorrect password";case"auth/invalid-credential":return"These credentials are not valid";case"auth/user-not-found":return"User account not found";case"auth/invalid-email":return"Invalid email address";case"auth/missing-password":return"Please insert your password";case"auth/invalid-login-credentials":return"Invalid credentials";case"auth/email-already-in-use":return"This email address already in use";case"auth/too-many-requests":return"You have attempted this too many times in a short period of time. Please try again later.";case"auth/not-admin":return"You are not an admin";default:return"There was a problem processing the request"}};function $m(e,t){return function(){return e.apply(t,arguments)}}const{toString:e2}=Object.prototype,{getPrototypeOf:Fl}=Object,gs=(e=>t=>{const n=e2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Bt=e=>(e=e.toLowerCase(),t=>gs(t)===e),vs=e=>t=>typeof t===e,{isArray:zr}=Array,Lo=vs("undefined");function t2(e){return e!==null&&!Lo(e)&&e.constructor!==null&&!Lo(e.constructor)&&kt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Dm=Bt("ArrayBuffer");function n2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Dm(e.buffer),t}const r2=vs("string"),kt=vs("function"),Nm=vs("number"),ys=e=>e!==null&&typeof e=="object",o2=e=>e===!0||e===!1,Si=e=>{if(gs(e)!=="object")return!1;const t=Fl(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},i2=Bt("Date"),s2=Bt("File"),a2=Bt("Blob"),l2=Bt("FileList"),c2=e=>ys(e)&&kt(e.pipe),u2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||kt(e.append)&&((t=gs(e))==="formdata"||t==="object"&&kt(e.toString)&&e.toString()==="[object FormData]"))},d2=Bt("URLSearchParams"),[f2,h2,m2,p2]=["ReadableStream","Request","Response","Headers"].map(Bt),b2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ti(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),zr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function Mm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,jm=e=>!Lo(e)&&e!==tr;function Ra(){const{caseless:e}=jm(this)&&this||{},t={},n=(r,o)=>{const i=e&&Mm(t,o)||o;Si(t[i])&&Si(r)?t[i]=Ra(t[i],r):Si(r)?t[i]=Ra({},r):zr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ti(arguments[r],n);return t}const g2=(e,t,n,{allOwnKeys:r}={})=>(ti(t,(o,i)=>{n&&kt(o)?e[i]=$m(o,n):e[i]=o},{allOwnKeys:r}),e),v2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),y2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},w2=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Fl(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},k2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},x2=e=>{if(!e)return null;if(zr(e))return e;let t=e.length;if(!Nm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},_2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Fl(Uint8Array)),I2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},S2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},C2=Bt("HTMLFormElement"),E2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),od=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),T2=Bt("RegExp"),Bm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ti(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},P2=e=>{Bm(e,(t,n)=>{if(kt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(kt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},O2=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return zr(e)?r(e):r(String(e).split(t)),n},A2=()=>{},L2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ta="abcdefghijklmnopqrstuvwxyz",id="0123456789",zm={DIGIT:id,ALPHA:ta,ALPHA_DIGIT:ta+ta.toUpperCase()+id},R2=(e=16,t=zm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function $2(e){return!!(e&&kt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const D2=e=>{const t=new Array(10),n=(r,o)=>{if(ys(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=zr(r)?[]:{};return ti(r,(s,l)=>{const a=n(s,o+1);!Lo(a)&&(i[l]=a)}),t[o]=void 0,i}}return r};return n(e,0)},N2=Bt("AsyncFunction"),M2=e=>e&&(ys(e)||kt(e))&&kt(e.then)&&kt(e.catch),Fm=((e,t)=>e?setImmediate:t?((n,r)=>(tr.addEventListener("message",({source:o,data:i})=>{o===tr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),tr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",kt(tr.postMessage)),j2=typeof queueMicrotask<"u"?queueMicrotask.bind(tr):typeof process<"u"&&process.nextTick||Fm,x={isArray:zr,isArrayBuffer:Dm,isBuffer:t2,isFormData:u2,isArrayBufferView:n2,isString:r2,isNumber:Nm,isBoolean:o2,isObject:ys,isPlainObject:Si,isReadableStream:f2,isRequest:h2,isResponse:m2,isHeaders:p2,isUndefined:Lo,isDate:i2,isFile:s2,isBlob:a2,isRegExp:T2,isFunction:kt,isStream:c2,isURLSearchParams:d2,isTypedArray:_2,isFileList:l2,forEach:ti,merge:Ra,extend:g2,trim:b2,stripBOM:v2,inherits:y2,toFlatObject:w2,kindOf:gs,kindOfTest:Bt,endsWith:k2,toArray:x2,forEachEntry:I2,matchAll:S2,isHTMLForm:C2,hasOwnProperty:od,hasOwnProp:od,reduceDescriptors:Bm,freezeMethods:P2,toObjectSet:O2,toCamelCase:E2,noop:A2,toFiniteNumber:L2,findKey:Mm,global:tr,isContextDefined:jm,ALPHABET:zm,generateString:R2,isSpecCompliantForm:$2,toJSONObject:D2,isAsyncFn:N2,isThenable:M2,setImmediate:Fm,asap:j2};function ie(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}x.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.status}}});const Um=ie.prototype,Vm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Vm[e]={value:e}});Object.defineProperties(ie,Vm);Object.defineProperty(Um,"isAxiosError",{value:!0});ie.from=(e,t,n,r,o,i)=>{const s=Object.create(Um);return x.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),ie.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const B2=null;function $a(e){return x.isPlainObject(e)||x.isArray(e)}function Hm(e){return x.endsWith(e,"[]")?e.slice(0,-2):e}function sd(e,t,n){return e?e.concat(t).map(function(o,i){return o=Hm(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function z2(e){return x.isArray(e)&&!e.some($a)}const F2=x.toFlatObject(x,{},null,function(t){return/^is[A-Z]/.test(t)});function ws(e,t,n){if(!x.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,y){return!x.isUndefined(y[g])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(t);if(!x.isFunction(o))throw new TypeError("visitor must be a function");function c(b){if(b===null)return"";if(x.isDate(b))return b.toISOString();if(!a&&x.isBlob(b))throw new ie("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(b)||x.isTypedArray(b)?a&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function u(b,g,y){let I=b;if(b&&!y&&typeof b=="object"){if(x.endsWith(g,"{}"))g=r?g:g.slice(0,-2),b=JSON.stringify(b);else if(x.isArray(b)&&z2(b)||(x.isFileList(b)||x.endsWith(g,"[]"))&&(I=x.toArray(b)))return g=Hm(g),I.forEach(function(_,O){!(x.isUndefined(_)||_===null)&&t.append(s===!0?sd([g],O,i):s===null?g:g+"[]",c(_))}),!1}return $a(b)?!0:(t.append(sd(y,g,i),c(b)),!1)}const d=[],f=Object.assign(F2,{defaultVisitor:u,convertValue:c,isVisitable:$a});function h(b,g){if(!x.isUndefined(b)){if(d.indexOf(b)!==-1)throw Error("Circular reference detected in "+g.join("."));d.push(b),x.forEach(b,function(I,v){(!(x.isUndefined(I)||I===null)&&o.call(t,I,x.isString(v)?v.trim():v,g,f))===!0&&h(I,g?g.concat(v):[v])}),d.pop()}}if(!x.isObject(e))throw new TypeError("data must be an object");return h(e),t}function ad(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ul(e,t){this._pairs=[],e&&ws(e,this,t)}const Km=Ul.prototype;Km.append=function(t,n){this._pairs.push([t,n])};Km.toString=function(t){const n=t?function(r){return t.call(this,r,ad)}:ad;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function U2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wm(e,t,n){if(!t)return e;const r=n&&n.encode||U2,o=n&&n.serialize;let i;if(o?i=o(t,n):i=x.isURLSearchParams(t)?t.toString():new Ul(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ld{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){x.forEach(this.handlers,function(r){r!==null&&t(r)})}}const qm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V2=typeof URLSearchParams<"u"?URLSearchParams:Ul,H2=typeof FormData<"u"?FormData:null,K2=typeof Blob<"u"?Blob:null,W2={isBrowser:!0,classes:{URLSearchParams:V2,FormData:H2,Blob:K2},protocols:["http","https","file","blob","url","data"]},Vl=typeof window<"u"&&typeof document<"u",Da=typeof navigator=="object"&&navigator||void 0,q2=Vl&&(!Da||["ReactNative","NativeScript","NS"].indexOf(Da.product)<0),G2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",J2=Vl&&window.location.href||"http://localhost",Y2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Vl,hasStandardBrowserEnv:q2,hasStandardBrowserWebWorkerEnv:G2,navigator:Da,origin:J2},Symbol.toStringTag,{value:"Module"})),ft={...Y2,...W2};function Z2(e,t){return ws(e,new ft.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return ft.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function X2(e){return x.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Q2(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Gm(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),a=i>=n.length;return s=!s&&x.isArray(o)?o.length:s,a?(x.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!x.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&x.isArray(o[s])&&(o[s]=Q2(o[s])),!l)}if(x.isFormData(e)&&x.isFunction(e.entries)){const n={};return x.forEachEntry(e,(r,o)=>{t(X2(r),o,n,0)}),n}return null}function e_(e,t,n){if(x.isString(e))try{return(t||JSON.parse)(e),x.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const ni={transitional:qm,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=x.isObject(t);if(i&&x.isHTMLForm(t)&&(t=new FormData(t)),x.isFormData(t))return o?JSON.stringify(Gm(t)):t;if(x.isArrayBuffer(t)||x.isBuffer(t)||x.isStream(t)||x.isFile(t)||x.isBlob(t)||x.isReadableStream(t))return t;if(x.isArrayBufferView(t))return t.buffer;if(x.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Z2(t,this.formSerializer).toString();if((l=x.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return ws(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),e_(t)):t}],transformResponse:[function(t){const n=this.transitional||ni.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(x.isResponse(t)||x.isReadableStream(t))return t;if(t&&x.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?ie.from(l,ie.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],e=>{ni.headers[e]={}});const t_=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),n_=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&t_[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},cd=Symbol("internals");function Jr(e){return e&&String(e).trim().toLowerCase()}function Ci(e){return e===!1||e==null?e:x.isArray(e)?e.map(Ci):String(e)}function r_(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const o_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function na(e,t,n,r,o){if(x.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!x.isString(t)){if(x.isString(r))return t.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(t)}}function i_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function s_(e,t){const n=x.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class ht{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,a,c){const u=Jr(a);if(!u)throw new Error("header name must be a non-empty string");const d=x.findKey(o,u);(!d||o[d]===void 0||c===!0||c===void 0&&o[d]!==!1)&&(o[d||a]=Ci(l))}const s=(l,a)=>x.forEach(l,(c,u)=>i(c,u,a));if(x.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(x.isString(t)&&(t=t.trim())&&!o_(t))s(n_(t),n);else if(x.isHeaders(t))for(const[l,a]of t.entries())i(a,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Jr(t),t){const r=x.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return r_(o);if(x.isFunction(n))return n.call(this,o,r);if(x.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Jr(t),t){const r=x.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||na(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Jr(s),s){const l=x.findKey(r,s);l&&(!n||na(r,r[l],l,n))&&(delete r[l],o=!0)}}return x.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||na(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return x.forEach(this,(o,i)=>{const s=x.findKey(r,i);if(s){n[s]=Ci(o),delete n[i];return}const l=t?i_(i):String(i).trim();l!==i&&delete n[i],n[l]=Ci(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return x.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[cd]=this[cd]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=Jr(s);r[l]||(s_(o,s),r[l]=!0)}return x.isArray(t)?t.forEach(i):i(t),this}}ht.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(ht.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});x.freezeMethods(ht);function ra(e,t){const n=this||ni,r=t||n,o=ht.from(r.headers);let i=r.data;return x.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Jm(e){return!!(e&&e.__CANCEL__)}function Fr(e,t,n){ie.call(this,e??"canceled",ie.ERR_CANCELED,t,n),this.name="CanceledError"}x.inherits(Fr,ie,{__CANCEL__:!0});function Ym(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function a_(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function l_(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(a){const c=Date.now(),u=r[i];s||(s=c),n[o]=a,r[o]=c;let d=i,f=0;for(;d!==o;)f+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const h=u&&c-u;return h?Math.round(f*1e3/h):void 0}}function c_(e,t){let n=0,r=1e3/t,o,i;const s=(c,u=Date.now())=>{n=u,o=null,i&&(clearTimeout(i),i=null),e.apply(null,c)};return[(...c)=>{const u=Date.now(),d=u-n;d>=r?s(c,u):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-d)))},()=>o&&s(o)]}const qi=(e,t,n=3)=>{let r=0;const o=l_(50,250);return c_(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,a=s-r,c=o(a),u=s<=l;r=s;const d={loaded:s,total:l,progress:l?s/l:void 0,bytes:a,rate:c||void 0,estimated:c&&l&&u?(l-s)/c:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(d)},n)},ud=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},dd=e=>(...t)=>x.asap(()=>e(...t)),u_=ft.hasStandardBrowserEnv?function(){const t=ft.navigator&&/(msie|trident)/i.test(ft.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=x.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),d_=ft.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];x.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),x.isString(r)&&s.push("path="+r),x.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function f_(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function h_(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Zm(e,t){return e&&!f_(t)?h_(e,t):t}const fd=e=>e instanceof ht?{...e}:e;function ur(e,t){t=t||{};const n={};function r(c,u,d){return x.isPlainObject(c)&&x.isPlainObject(u)?x.merge.call({caseless:d},c,u):x.isPlainObject(u)?x.merge({},u):x.isArray(u)?u.slice():u}function o(c,u,d){if(x.isUndefined(u)){if(!x.isUndefined(c))return r(void 0,c,d)}else return r(c,u,d)}function i(c,u){if(!x.isUndefined(u))return r(void 0,u)}function s(c,u){if(x.isUndefined(u)){if(!x.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,d){if(d in t)return r(c,u);if(d in e)return r(void 0,c)}const a={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,u)=>o(fd(c),fd(u),!0)};return x.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=a[u]||o,f=d(e[u],t[u],u);x.isUndefined(f)&&d!==l||(n[u]=f)}),n}const Xm=e=>{const t=ur({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=ht.from(s),t.url=Wm(Zm(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(x.isFormData(n)){if(ft.hasStandardBrowserEnv||ft.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((a=s.getContentType())!==!1){const[c,...u]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...u].join("; "))}}if(ft.hasStandardBrowserEnv&&(r&&x.isFunction(r)&&(r=r(t)),r||r!==!1&&u_(t.url))){const c=o&&i&&d_.read(i);c&&s.set(o,c)}return t},m_=typeof XMLHttpRequest<"u",p_=m_&&function(e){return new Promise(function(n,r){const o=Xm(e);let i=o.data;const s=ht.from(o.headers).normalize();let{responseType:l,onUploadProgress:a,onDownloadProgress:c}=o,u,d,f,h,b;function g(){h&&h(),b&&b(),o.cancelToken&&o.cancelToken.unsubscribe(u),o.signal&&o.signal.removeEventListener("abort",u)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function I(){if(!y)return;const _=ht.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),N={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:_,config:e,request:y};Ym(function(K){n(K),g()},function(K){r(K),g()},N),y=null}"onloadend"in y?y.onloadend=I:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(I)},y.onabort=function(){y&&(r(new ie("Request aborted",ie.ECONNABORTED,e,y)),y=null)},y.onerror=function(){r(new ie("Network Error",ie.ERR_NETWORK,e,y)),y=null},y.ontimeout=function(){let O=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||qm;o.timeoutErrorMessage&&(O=o.timeoutErrorMessage),r(new ie(O,N.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,e,y)),y=null},i===void 0&&s.setContentType(null),"setRequestHeader"in y&&x.forEach(s.toJSON(),function(O,N){y.setRequestHeader(N,O)}),x.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),l&&l!=="json"&&(y.responseType=o.responseType),c&&([f,b]=qi(c,!0),y.addEventListener("progress",f)),a&&y.upload&&([d,h]=qi(a),y.upload.addEventListener("progress",d),y.upload.addEventListener("loadend",h)),(o.cancelToken||o.signal)&&(u=_=>{y&&(r(!_||_.type?new Fr(null,e,y):_),y.abort(),y=null)},o.cancelToken&&o.cancelToken.subscribe(u),o.signal&&(o.signal.aborted?u():o.signal.addEventListener("abort",u)));const v=a_(o.url);if(v&&ft.protocols.indexOf(v)===-1){r(new ie("Unsupported protocol "+v+":",ie.ERR_BAD_REQUEST,e));return}y.send(i||null)})},b_=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,l();const u=c instanceof Error?c:this.reason;r.abort(u instanceof ie?u:new Fr(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{s=null,i(new ie(`timeout ${t} of ms exceeded`,ie.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:a}=r;return a.unsubscribe=()=>x.asap(l),a}},g_=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},v_=async function*(e,t){for await(const n of y_(e))yield*g_(n,t)},y_=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},hd=(e,t,n,r)=>{const o=v_(e,t);let i=0,s,l=a=>{s||(s=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:c,value:u}=await o.next();if(c){l(),a.close();return}let d=u.byteLength;if(n){let f=i+=d;n(f)}a.enqueue(new Uint8Array(u))}catch(c){throw l(c),c}},cancel(a){return l(a),o.return()}},{highWaterMark:2})},ks=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Qm=ks&&typeof ReadableStream=="function",w_=ks&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ep=(e,...t)=>{try{return!!e(...t)}catch{return!1}},k_=Qm&&ep(()=>{let e=!1;const t=new Request(ft.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),md=64*1024,Na=Qm&&ep(()=>x.isReadableStream(new Response("").body)),Gi={stream:Na&&(e=>e.body)};ks&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Gi[t]&&(Gi[t]=x.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new ie(`Response type '${t}' is not supported`,ie.ERR_NOT_SUPPORT,r)})})})(new Response);const x_=async e=>{if(e==null)return 0;if(x.isBlob(e))return e.size;if(x.isSpecCompliantForm(e))return(await new Request(ft.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(x.isArrayBufferView(e)||x.isArrayBuffer(e))return e.byteLength;if(x.isURLSearchParams(e)&&(e=e+""),x.isString(e))return(await w_(e)).byteLength},__=async(e,t)=>{const n=x.toFiniteNumber(e.getContentLength());return n??x_(t)},I_=ks&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:a,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:f}=Xm(e);c=c?(c+"").toLowerCase():"text";let h=b_([o,i&&i.toAbortSignal()],s),b;const g=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(a&&k_&&n!=="get"&&n!=="head"&&(y=await __(u,r))!==0){let N=new Request(t,{method:"POST",body:r,duplex:"half"}),q;if(x.isFormData(r)&&(q=N.headers.get("content-type"))&&u.setContentType(q),N.body){const[K,H]=ud(y,qi(dd(a)));r=hd(N.body,md,K,H)}}x.isString(d)||(d=d?"include":"omit");const I="credentials"in Request.prototype;b=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:I?d:void 0});let v=await fetch(b);const _=Na&&(c==="stream"||c==="response");if(Na&&(l||_&&g)){const N={};["status","statusText","headers"].forEach(R=>{N[R]=v[R]});const q=x.toFiniteNumber(v.headers.get("content-length")),[K,H]=l&&ud(q,qi(dd(l),!0))||[];v=new Response(hd(v.body,md,K,()=>{H&&H(),g&&g()}),N)}c=c||"text";let O=await Gi[x.findKey(Gi,c)||"text"](v,e);return!_&&g&&g(),await new Promise((N,q)=>{Ym(N,q,{data:O,headers:ht.from(v.headers),status:v.status,statusText:v.statusText,config:e,request:b})})}catch(I){throw g&&g(),I&&I.name==="TypeError"&&/fetch/i.test(I.message)?Object.assign(new ie("Network Error",ie.ERR_NETWORK,e,b),{cause:I.cause||I}):ie.from(I,I&&I.code,e,b)}}),Ma={http:B2,xhr:p_,fetch:I_};x.forEach(Ma,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pd=e=>`- ${e}`,S_=e=>x.isFunction(e)||e===null||e===!1,tp={getAdapter:e=>{e=x.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!S_(n)&&(r=Ma[(s=String(n)).toLowerCase()],r===void 0))throw new ie(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(pd).join(`
`):" "+pd(i[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Ma};function oa(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Fr(null,e)}function bd(e){return oa(e),e.headers=ht.from(e.headers),e.data=ra.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tp.getAdapter(e.adapter||ni.adapter)(e).then(function(r){return oa(e),r.data=ra.call(e,e.transformResponse,r),r.headers=ht.from(r.headers),r},function(r){return Jm(r)||(oa(e),r&&r.response&&(r.response.data=ra.call(e,e.transformResponse,r.response),r.response.headers=ht.from(r.response.headers))),Promise.reject(r)})}const np="1.7.7",Hl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Hl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const gd={};Hl.transitional=function(t,n,r){function o(i,s){return"[Axios v"+np+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new ie(o(s," has been removed"+(n?" in "+n:"")),ie.ERR_DEPRECATED);return n&&!gd[s]&&(gd[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function C_(e,t,n){if(typeof e!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],a=l===void 0||s(l,i,e);if(a!==!0)throw new ie("option "+i+" must be "+a,ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ie("Unknown option "+i,ie.ERR_BAD_OPTION)}}const ja={assertOptions:C_,validators:Hl},Sn=ja.validators;class or{constructor(t){this.defaults=t,this.interceptors={request:new ld,response:new ld}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ur(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ja.assertOptions(r,{silentJSONParsing:Sn.transitional(Sn.boolean),forcedJSONParsing:Sn.transitional(Sn.boolean),clarifyTimeoutError:Sn.transitional(Sn.boolean)},!1),o!=null&&(x.isFunction(o)?n.paramsSerializer={serialize:o}:ja.assertOptions(o,{encode:Sn.function,serialize:Sn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&x.merge(i.common,i[n.method]);i&&x.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=ht.concat(s,i);const l=[];let a=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(a=a&&g.synchronous,l.unshift(g.fulfilled,g.rejected))});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let u,d=0,f;if(!a){const b=[bd.bind(this),void 0];for(b.unshift.apply(b,l),b.push.apply(b,c),f=b.length,u=Promise.resolve(n);d<f;)u=u.then(b[d++],b[d++]);return u}f=l.length;let h=n;for(d=0;d<f;){const b=l[d++],g=l[d++];try{h=b(h)}catch(y){g.call(this,y);break}}try{u=bd.call(this,h)}catch(b){return Promise.reject(b)}for(d=0,f=c.length;d<f;)u=u.then(c[d++],c[d++]);return u}getUri(t){t=ur(this.defaults,t);const n=Zm(t.baseURL,t.url);return Wm(n,t.params,t.paramsSerializer)}}x.forEach(["delete","get","head","options"],function(t){or.prototype[t]=function(n,r){return this.request(ur(r||{},{method:t,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(ur(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}or.prototype[t]=n(),or.prototype[t+"Form"]=n(!0)});class Kl{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new Fr(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Kl(function(o){t=o}),cancel:t}}}function E_(e){return function(n){return e.apply(null,n)}}function T_(e){return x.isObject(e)&&e.isAxiosError===!0}const Ba={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ba).forEach(([e,t])=>{Ba[t]=e});function rp(e){const t=new or(e),n=$m(or.prototype.request,t);return x.extend(n,or.prototype,t,{allOwnKeys:!0}),x.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return rp(ur(e,o))},n}const Be=rp(ni);Be.Axios=or;Be.CanceledError=Fr;Be.CancelToken=Kl;Be.isCancel=Jm;Be.VERSION=np;Be.toFormData=ws;Be.AxiosError=ie;Be.Cancel=Be.CanceledError;Be.all=function(t){return Promise.all(t)};Be.spread=E_;Be.isAxiosError=T_;Be.mergeConfig=ur;Be.AxiosHeaders=ht;Be.formToJSON=e=>Gm(x.isHTMLForm(e)?new FormData(e):e);Be.getAdapter=tp.getAdapter;Be.HttpStatusCode=Ba;Be.default=Be;const sn=Be.create({baseURL:"http://localhost:8000"});sn.interceptors.request.use(async e=>{const n=ze().accessToken;return n&&(e.headers.Authorization="Bearer "+n),e},e=>{Promise.reject(e)});const ze=vl({id:"auth",state:()=>({firebaseApp:null,firebaseAuth:null,user:null,accessToken:null,isCheckingAuth:!1,authErrorMessage:null,showEmailVerificationModal:!1,dashboardConfig:{},role:null}),getters:{displayName:e=>{var t;return(t=e.user)==null?void 0:t.displayName},email:e=>{var t;return(t=e.user)==null?void 0:t.email},checkingAuth:e=>e.isCheckingAuth,dateCreated:e=>new Date(e.user.metadata.creationTime),isAdmin:e=>e.role==="admin"},actions:{async initializeFirebase(){if(!this.firebaseApp){const{data:e}=await sn.get("/getconf");this.firebaseApp=Zh(e.firebase_config),this.firebaseAuth=rd(this.firebaseApp)}},async signIn(e,t){try{const n=await Gx(e,t);if(await this.setUser(n.user),await this.setRole(),!this.isAdmin)throw new Error("You are not an admin.")}catch{await this.signOut(),this.authErrorMessage="You are not an admin."}},async setRole(){var t;const e=await this.user.getIdTokenResult();this.role=(t=e==null?void 0:e.claims)==null?void 0:t.role},async emailSignUp(e,t){try{const n=await Jx(e,t);await this.setUser(n.user),this.emailVerificationSend()}catch(n){console.log("Email signup error:",n.message),this.authErrorMessage=ea(n.code)}},async emailVerificationSend(){if(!this.user){console.error("No user to send email verification to");return}try{return console.log("Sending Verification Email..."),await Ok(this.user),{severity:"success",summary:"We've sent you an email",detail:`We've resent a verification email to ${email}.`,life:3e3}}catch(e){return console.error("Error sending verification email: ",e.message),{severity:"error",summary:"Problem sending the verification email",detail:ea(e.code),life:5e3}}},async googleSignIn(){try{const e=await Zx();if(console.log("Login via Google was successful  😃"),await this.setUser(e.user),await this.setRole(),!this.isAdmin){const t=new Error("You are not an admin.");throw t.code="auth/not-admin",t}}catch(e){this.authErrorMessage=ea(e.code),await this.signOut()}},async passwordReset(e){try{return await Xx(e),{severity:"success",summary:"We've sent you an email",detail:`If the email ${e} exists in our database, you'll recieve an email with password reset instructions.`,life:5e3}}catch(t){return console.log("Password reset error",t.message),{severity:"error",summary:"Password",detail:"There was a problem resetting your password. Please try again.",life:3e3}}},async checkForAuthenticatedUser(){this.firebaseAuth||await this.initializeFirebase();const e=rd();return this.isCheckingAuth=!0,new Promise(t=>{const n=Dk(e,async r=>{await this.setUser(r),this.isCheckingAuth=!1,n(),t()})})},async setUser(e){if(this.user=e,e){await e.reload(),this.setEmailVerificationModal(!e.emailVerified);const t=await e.getIdToken();this.accessToken=t}},async setEmailVerificationModal(e){this.showEmailVerificationModal=e},async updateUserProfile(e){try{return await Qx(this.user,e),{severity:"success",summary:"Profile Updated",detail:"Your user profile was updated successfully.",life:3e3}}catch(t){return console.error("Profile update error:",t.message),{severity:"error",summary:"Profile Update Failed",detail:"Something went wrong when trying to update your user profile. Please try again.",life:3e3}}},async getToken(){return this.user?await this.user.getIdToken():null},async signOut(){await Yx(),this.user=null},async getDashboardConfig(){const{data:e}=await sn.get("/getconf");return this.dashboardConfig=e,e}}}),P_={key:0,class:"bg-gradient-to-r to-surface-100 from-primary-300 items-center my-20 p-3 rounded ring-1 ring-surface-300 flex gap-4 text-lg justify-center"},O_={__name:"LoadingIndicators",setup(e){const t=ze();return(n,r)=>Y(t).isCheckingAuth?(k(),T("div",P_,r[0]||(r[0]=[C("i",{class:"fa-solid fa-spin fa-gear text-xl"},null,-1),C("span",null,"Logging in...",-1)]))):te("",!0)}},vd={__name:"Sidenav",props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=ze(),i=Wo();fr(async()=>{await o.getDashboardConfig()}),Ae({get(){return n.modelValue},set(l){r("update:modelValue",l)}});const s=Ae(()=>o.dashboardConfig.models);return(l,a)=>{const c=je("router-link");return k(),T(le,null,[Y(o).user?(k(),fe(Y(El),{key:0,model:s.value,pt:Y(Jy)},{item:me(({item:u,props:d})=>[j(c,P({to:`/${u.collection_name}`},d.action,{class:["!my-0 !py-4 flex gap-4",`/${u.collection_name}`==Y(i).path?"bg-surface-700":""]}),{default:me(()=>[a[0]||(a[0]=C("i",{class:"fa-solid fa-database"},null,-1)),C("span",Ei(Li(d.label)),Ie(u.display_name),17)]),_:2},1040,["to","class"])]),_:1},8,["model","pt"])):te("",!0),j(c,{to:"/users",class:Xe(["!m-1 !px-3 !my-12 !py-3 flex gap-4 items-center",Y(i).path=="/users"?"bg-surface-700":""])},{default:me(()=>[a[1]||(a[1]=C("i",{class:"fa-solid fa-users"},null,-1)),C("span",Ei(Li(n.label)),"Users",16)]),_:1},8,["class"]),j(O_)],64)}}};var A_=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,L_=be.extend({name:"baseicon",css:A_});function Ro(e){"@babel/helpers - typeof";return Ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ro(e)}function yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function wd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yd(Object(n),!0).forEach(function(r){R_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R_(e,t,n){return(t=$_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $_(e){var t=D_(e,"string");return Ro(t)=="symbol"?t:t+""}function D_(e,t){if(Ro(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ro(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var zt={name:"BaseIcon",extends:lt,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:L_,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var t=st(this.label);return wd(wd({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t})}}},xs={name:"TimesIcon",extends:zt};function N_(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}xs.render=N_;var op={name:"SpinnerIcon",extends:zt};function M_(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}op.render=M_;var j_=function(t){var n=t.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(n("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("badge.padding"),`;
    background: `).concat(n("badge.primary.background"),`;
    color: `).concat(n("badge.primary.color"),`;
    font-size: `).concat(n("badge.font.size"),`;
    font-weight: `).concat(n("badge.font.weight"),`;
    min-width: `).concat(n("badge.min.width"),`;
    height: `).concat(n("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(n("badge.dot.size"),`;
    min-width: `).concat(n("badge.dot.size"),`;
    height: `).concat(n("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(n("badge.secondary.background"),`;
    color: `).concat(n("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(n("badge.success.background"),`;
    color: `).concat(n("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(n("badge.info.background"),`;
    color: `).concat(n("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(n("badge.warn.background"),`;
    color: `).concat(n("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(n("badge.danger.background"),`;
    color: `).concat(n("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(n("badge.contrast.background"),`;
    color: `).concat(n("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(n("badge.sm.font.size"),`;
    min-width: `).concat(n("badge.sm.min.width"),`;
    height: `).concat(n("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(n("badge.lg.font.size"),`;
    min-width: `).concat(n("badge.lg.min.width"),`;
    height: `).concat(n("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(n("badge.xl.font.size"),`;
    min-width: `).concat(n("badge.xl.min.width"),`;
    height: `).concat(n("badge.xl.height"),`;
}
`)},B_={root:function(t){var n=t.props,r=t.instance;return["p-badge p-component",{"p-badge-circle":Oe(n.value)&&String(n.value).length===1,"p-badge-dot":st(n.value)&&!r.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},z_=be.extend({name:"badge",theme:j_,classes:B_}),F_={name:"BaseBadge",extends:lt,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:z_,provide:function(){return{$pcBadge:this,$parentInstance:this}}},ip={name:"Badge",extends:F_,inheritAttrs:!1};function U_(e,t,n,r,o,i){return k(),T("span",P({class:e.cx("root")},e.ptmi("root")),[ye(e.$slots,"default",{},function(){return[mn(Ie(e.value),1)]})],16)}ip.render=U_;function $o(e){"@babel/helpers - typeof";return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$o(e)}function Ht(e,t,n){return(t=V_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V_(e){var t=H_(e,"string");return $o(t)=="symbol"?t:t+""}function H_(e,t){if($o(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if($o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var K_=function(t){var n=t.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("button.primary.color"),`;
    background: `).concat(n("button.primary.background"),`;
    border: 1px solid `).concat(n("button.primary.border.color"),`;
    padding: `).concat(n("button.padding.y")," ").concat(n("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("button.transition.duration"),", color ").concat(n("button.transition.duration"),", border-color ").concat(n("button.transition.duration"),`,
            outline-color `).concat(n("button.transition.duration"),", box-shadow ").concat(n("button.transition.duration"),`;
    border-radius: `).concat(n("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(n("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(n("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(n("button.sm.font.size"),`;
    padding: `).concat(n("button.sm.padding.y")," ").concat(n("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(n("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(n("button.lg.font.size"),`;
    padding: `).concat(n("button.lg.padding.y")," ").concat(n("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(n("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(n("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(n("button.primary.hover.background"),`;
    border: 1px solid `).concat(n("button.primary.hover.border.color"),`;
    color: `).concat(n("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(n("button.primary.active.background"),`;
    border: 1px solid `).concat(n("button.primary.active.border.color"),`;
    color: `).concat(n("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(n("button.primary.focus.ring.shadow"),`;
    outline: `).concat(n("button.focus.ring.width")," ").concat(n("button.focus.ring.style")," ").concat(n("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(n("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(n("button.badge.size"),`;
    height: `).concat(n("button.badge.size"),`;
    line-height: `).concat(n("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(n("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(n("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(n("button.secondary.background"),`;
    border: 1px solid `).concat(n("button.secondary.border.color"),`;
    color: `).concat(n("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.secondary.hover.background"),`;
    border: 1px solid `).concat(n("button.secondary.hover.border.color"),`;
    color: `).concat(n("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.secondary.active.background"),`;
    border: 1px solid `).concat(n("button.secondary.active.border.color"),`;
    color: `).concat(n("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(n("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(n("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(n("button.success.background"),`;
    border: 1px solid `).concat(n("button.success.border.color"),`;
    color: `).concat(n("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.success.hover.background"),`;
    border: 1px solid `).concat(n("button.success.hover.border.color"),`;
    color: `).concat(n("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(n("button.success.active.background"),`;
    border: 1px solid `).concat(n("button.success.active.border.color"),`;
    color: `).concat(n("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(n("button.success.focus.ring.color"),`;
    box-shadow: `).concat(n("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(n("button.info.background"),`;
    border: 1px solid `).concat(n("button.info.border.color"),`;
    color: `).concat(n("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.info.hover.background"),`;
    border: 1px solid `).concat(n("button.info.hover.border.color"),`;
    color: `).concat(n("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(n("button.info.active.background"),`;
    border: 1px solid `).concat(n("button.info.active.border.color"),`;
    color: `).concat(n("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(n("button.info.focus.ring.color"),`;
    box-shadow: `).concat(n("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(n("button.warn.background"),`;
    border: 1px solid `).concat(n("button.warn.border.color"),`;
    color: `).concat(n("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.warn.hover.background"),`;
    border: 1px solid `).concat(n("button.warn.hover.border.color"),`;
    color: `).concat(n("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.warn.active.background"),`;
    border: 1px solid `).concat(n("button.warn.active.border.color"),`;
    color: `).concat(n("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(n("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(n("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(n("button.help.background"),`;
    border: 1px solid `).concat(n("button.help.border.color"),`;
    color: `).concat(n("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.help.hover.background"),`;
    border: 1px solid `).concat(n("button.help.hover.border.color"),`;
    color: `).concat(n("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(n("button.help.active.background"),`;
    border: 1px solid `).concat(n("button.help.active.border.color"),`;
    color: `).concat(n("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(n("button.help.focus.ring.color"),`;
    box-shadow: `).concat(n("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(n("button.danger.background"),`;
    border: 1px solid `).concat(n("button.danger.border.color"),`;
    color: `).concat(n("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.danger.hover.background"),`;
    border: 1px solid `).concat(n("button.danger.hover.border.color"),`;
    color: `).concat(n("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.danger.active.background"),`;
    border: 1px solid `).concat(n("button.danger.active.border.color"),`;
    color: `).concat(n("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(n("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(n("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(n("button.contrast.background"),`;
    border: 1px solid `).concat(n("button.contrast.border.color"),`;
    color: `).concat(n("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.contrast.hover.background"),`;
    border: 1px solid `).concat(n("button.contrast.hover.border.color"),`;
    color: `).concat(n("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.contrast.active.background"),`;
    border: 1px solid `).concat(n("button.contrast.active.border.color"),`;
    color: `).concat(n("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(n("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(n("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(n("button.outlined.primary.hover.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(n("button.outlined.primary.active.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.outlined.secondary.active.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.outlined.success.hover.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(n("button.outlined.success.active.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.outlined.info.hover.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(n("button.outlined.info.active.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.outlined.warn.hover.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.outlined.warn.active.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.outlined.help.hover.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(n("button.outlined.help.active.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.outlined.danger.hover.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.outlined.danger.active.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.outlined.contrast.active.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.outlined.plain.hover.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.outlined.plain.active.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(n("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(n("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(n("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(n("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(n("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.active.color"),`;
}
`)},W_={root:function(t){var n=t.instance,r=t.props;return["p-button p-component",Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht(Ht({"p-button-icon-only":n.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text),"p-button-outlined",r.outlined),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(t){var n=t.props;return["p-button-icon",Ht({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},q_=be.extend({name:"button",theme:K_,classes:W_}),G_={name:"BaseButton",extends:lt,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:q_,provide:function(){return{$pcButton:this,$parentInstance:this}}},qe={name:"Button",extends:G_,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return P(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return st(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:op,Badge:ip},directives:{ripple:jr}};function J_(e,t,n,r,o,i){var s=je("SpinnerIcon"),l=je("Badge"),a=Nr("ripple");return e.asChild?ye(e.$slots,"default",{key:1,class:Xe(e.cx("root")),a11yAttrs:i.a11yAttrs}):Dr((k(),fe(it(e.as),P({key:0,class:e.cx("root")},i.attrs),{default:me(function(){return[ye(e.$slots,"default",{},function(){return[e.loading?ye(e.$slots,"loadingicon",{key:0,class:Xe([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(k(),T("span",P({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(k(),fe(s,P({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):ye(e.$slots,"icon",{key:1,class:Xe([e.cx("icon")])},function(){return[e.icon?(k(),T("span",P({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):te("",!0)]}),C("span",P({class:e.cx("label")},e.ptm("label")),Ie(e.label||" "),17),e.badge?(k(),fe(l,P({key:2,value:e.badge,class:e.badgeClass,severity:e.badgeSeverity,unstyled:e.unstyled},e.ptm("pcBadge")),null,16,["value","class","severity","unstyled"])):te("",!0)]})]}),_:3},16,["class"])),[[a]])}qe.render=J_;var Y_=be.extend({name:"focustrap-directive"}),Z_=se.extend({style:Y_});function Do(e){"@babel/helpers - typeof";return Do=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Do(e)}function kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function xd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kd(Object(n),!0).forEach(function(r){X_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function X_(e,t,n){return(t=Q_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q_(e){var t=eI(e,"string");return Do(t)=="symbol"?t:t+""}function eI(e,t){if(Do(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Do(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var sp=Z_.extend("focustrap",{mounted:function(t,n){var r=n.value||{},o=r.disabled;o||(this.createHiddenFocusableElements(t,n),this.bind(t,n),this.autoElementFocus(t,n)),t.setAttribute("data-pd-focustrap",!0),this.$el=t},updated:function(t,n){var r=n.value||{},o=r.disabled;o&&this.unbind(t)},unmounted:function(t){this.unbind(t)},methods:{getComputedSelector:function(t){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(t??"")},bind:function(t,n){var r=this,o=n.value||{},i=o.onFocusIn,s=o.onFocusOut;t.$_pfocustrap_mutationobserver=new MutationObserver(function(l){l.forEach(function(a){if(a.type==="childList"&&!t.contains(document.activeElement)){var c=function(d){var f=Yc(d)?Yc(d,r.getComputedSelector(t.$_pfocustrap_focusableselector))?d:qr(t,r.getComputedSelector(t.$_pfocustrap_focusableselector)):qr(d);return Oe(f)?f:d.nextSibling&&c(d.nextSibling)};Ke(c(a.nextSibling))}})}),t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_mutationobserver.observe(t,{childList:!0}),t.$_pfocustrap_focusinlistener=function(l){return i&&i(l)},t.$_pfocustrap_focusoutlistener=function(l){return s&&s(l)},t.addEventListener("focusin",t.$_pfocustrap_focusinlistener),t.addEventListener("focusout",t.$_pfocustrap_focusoutlistener)},unbind:function(t){t.$_pfocustrap_mutationobserver&&t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_focusinlistener&&t.removeEventListener("focusin",t.$_pfocustrap_focusinlistener)&&(t.$_pfocustrap_focusinlistener=null),t.$_pfocustrap_focusoutlistener&&t.removeEventListener("focusout",t.$_pfocustrap_focusoutlistener)&&(t.$_pfocustrap_focusoutlistener=null)},autoFocus:function(t){this.autoElementFocus(this.$el,{value:xd(xd({},t),{},{autoFocus:!0})})},autoElementFocus:function(t,n){var r=n.value||{},o=r.autoFocusSelector,i=o===void 0?"":o,s=r.firstFocusableSelector,l=s===void 0?"":s,a=r.autoFocus,c=a===void 0?!1:a,u=qr(t,"[autofocus]".concat(this.getComputedSelector(i)));c&&!u&&(u=qr(t,this.getComputedSelector(l))),Ke(u)},onFirstHiddenElementFocus:function(t){var n,r=t.currentTarget,o=t.relatedTarget,i=o===r.$_pfocustrap_lasthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(o))?qr(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;Ke(i)},onLastHiddenElementFocus:function(t){var n,r=t.currentTarget,o=t.relatedTarget,i=o===r.$_pfocustrap_firsthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(o))?Eg(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;Ke(i)},createHiddenFocusableElements:function(t,n){var r=this,o=n.value||{},i=o.tabIndex,s=i===void 0?0:i,l=o.firstFocusableSelector,a=l===void 0?"":l,c=o.lastFocusableSelector,u=c===void 0?"":c,d=function(g){return lo("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:s,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:g==null?void 0:g.bind(r)})},f=d(this.onFirstHiddenElementFocus),h=d(this.onLastHiddenElementFocus);f.$_pfocustrap_lasthiddenfocusableelement=h,f.$_pfocustrap_focusableselector=a,f.setAttribute("data-pc-section","firstfocusableelement"),h.$_pfocustrap_firsthiddenfocusableelement=f,h.$_pfocustrap_focusableselector=u,h.setAttribute("data-pc-section","lastfocusableelement"),t.prepend(f),t.append(h)}}}),tI=function(t){var n=t.dt;return`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(n("drawer.background"),`;
    color: `).concat(n("drawer.color"),`;
    border: 1px solid `).concat(n("drawer.border.color"),`;
    box-shadow: `).concat(n("drawer.shadow"),`;
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: `).concat(n("drawer.content.padding"),`;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(n("drawer.header.padding"),`;
}

.p-drawer-footer {
    padding: `).concat(n("drawer.header.padding"),`;
}

.p-drawer-title {
    font-weight: `).concat(n("drawer.title.font.weight"),`;
    font-size: `).concat(n("drawer.title.font.size"),`;
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-drawer-left .p-drawer {
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}
`)},nI={mask:function(t){var n=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},rI={mask:function(t){var n=t.instance,r=t.props,o=["left","right","top","bottom"],i=o.find(function(s){return s===r.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":r.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen},i?"p-drawer-".concat(i):""]},root:function(t){var n=t.instance;return["p-drawer p-component",{"p-drawer-full":n.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},oI=be.extend({name:"drawer",theme:tI,classes:rI,inlineStyles:nI}),iI={name:"BaseDrawer",extends:lt,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:oI,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},ap={name:"Drawer",extends:iI,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&We.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&We.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ho(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&We.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.$slots.footer&&t(this.footerContainer),n||(n=this.closeButton))),n&&Ke(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ga()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&va()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:sp},components:{Button:qe,Portal:qo,TimesIcon:xs}},sI=["aria-modal"];function aI(e,t,n,r,o,i){var s=je("Button"),l=je("Portal"),a=Nr("focustrap");return k(),fe(l,null,{default:me(function(){return[o.containerVisible?(k(),T("div",P({key:0,ref:i.maskRef,onMousedown:t[0]||(t[0]=function(){return i.onMaskClick&&i.onMaskClick.apply(i,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[j(gl,P({name:"p-drawer",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:me(function(){return[e.visible?Dr((k(),T("div",P({key:0,ref:i.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?ye(e.$slots,"container",{key:0,closeCallback:i.hide}):(k(),T(le,{key:1},[C("div",P({ref:i.headerContainerRef,class:e.cx("header")},e.ptm("header")),[ye(e.$slots,"header",{class:Xe(e.cx("title"))},function(){return[e.header?(k(),T("div",P({key:0,class:e.cx("title")},e.ptm("title")),Ie(e.header),17)):te("",!0)]}),e.showCloseIcon?(k(),fe(s,P({key:0,ref:i.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":i.closeAriaLabel,unstyled:e.unstyled,onClick:i.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:me(function(c){return[ye(e.$slots,"closeicon",{},function(){return[(k(),fe(it(e.closeIcon?"span":"TimesIcon"),P({class:[e.closeIcon,c.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):te("",!0)],16),C("div",P({ref:i.contentRef,class:e.cx("content")},e.ptm("content")),[ye(e.$slots,"default")],16),e.$slots.footer?(k(),T("div",P({key:0,ref:i.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[ye(e.$slots,"footer")],16)):te("",!0)],64))],16,sI)),[[a]]):te("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):te("",!0)]}),_:3})}ap.render=aI;var lI={name:"Sidebar",extends:ap,mounted:function(){console.warn("Deprecated since v4. Use Drawer component instead.")}},lp={name:"BarsIcon",extends:zt};function cI(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",fill:"currentColor"},null,-1)]),16)}lp.render=cI;var uI=function(t){var n=t.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    background: `.concat(n("menubar.background"),`;
    border: 1px solid `).concat(n("menubar.border.color"),`;
    border-radius: `).concat(n("menubar.border.radius"),`;
    color: `).concat(n("menubar.color"),`;
    padding: `).concat(n("menubar.padding"),`;
    gap: `).concat(n("menubar.gap"),`;
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(n("menubar.gap"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(n("menubar.base.item.border.radius"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(n("menubar.base.item.padding"),`;
}

.p-menubar-item-content {
    transition: background `).concat(n("menubar.transition.duration"),", color ").concat(n("menubar.transition.duration"),`;
    border-radius: `).concat(n("menubar.item.border.radius"),`;
    color: `).concat(n("menubar.item.color"),`;
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(n("menubar.item.padding"),`;
    gap: `).concat(n("menubar.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: `).concat(n("menubar.item.icon.color"),`;
}

.p-menubar-submenu-icon {
    color: `).concat(n("menubar.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(n("menubar.submenu.icon.size"),`;
    width: `).concat(n("menubar.submenu.icon.size"),`;
    height: `).concat(n("menubar.submenu.icon.size"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: `).concat(n("menubar.item.focus.color"),`;
    background: `).concat(n("menubar.item.focus.background"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(n("menubar.item.icon.focus.color"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(n("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: `).concat(n("menubar.item.focus.color"),`;
    background: `).concat(n("menubar.item.focus.background"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: `).concat(n("menubar.item.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: `).concat(n("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content {
    color: `).concat(n("menubar.item.active.color"),`;
    background: `).concat(n("menubar.item.active.background"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(n("menubar.item.icon.active.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(n("menubar.submenu.icon.active.color"),`;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: `).concat(n("menubar.submenu.background"),`;
    border: 1px solid `).concat(n("menubar.submenu.border.color"),`;
    border-radius: `).concat(n("menubar.border.radius"),`;
    box-shadow: `).concat(n("menubar.submenu.shadow"),`;
    color: `).concat(n("menubar.submenu.color"),`;
    flex-direction: column;
    padding: `).concat(n("menubar.submenu.padding"),`;
    gap: `).concat(n("menubar.submenu.gap"),`;
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid `).concat(n("menubar.separator.border.color"),`;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

 .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(n("menubar.mobile.button.size"),`;
    height: `).concat(n("menubar.mobile.button.size"),`;
    position: relative;
    color: `).concat(n("menubar.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(n("menubar.mobile.button.border.radius"),`;
    transition: background `).concat(n("menubar.transition.duration"),", color ").concat(n("menubar.transition.duration"),", outline-color ").concat(n("menubar.transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(n("menubar.mobile.button.hover.color"),`;
    background: `).concat(n("menubar.mobile.button.hover.background"),`;
}

.p-menubar-button:focus-visible {
    box-shadow: `).concat(n("menubar.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(n("menubar.mobile.button.focus.ring.width")," ").concat(n("menubar.mobile.button.focus.ring.style")," ").concat(n("menubar.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(n("menubar.mobile.button.focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: `).concat(n("menubar.submenu.padding"),`;
    background: `).concat(n("menubar.submenu.background"),`;
    border: 1px solid `).concat(n("menubar.submenu.border.color"),`;
    box-shadow: `).concat(n("menubar.submenu.shadow"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(n("menubar.item.border.radius"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(n("menubar.item.padding"),`;
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid `).concat(n("menubar.separator.border.color"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: `).concat(n("menubar.submenu.mobile.indent"),`;
}
`)},dI={submenu:function(t){var n=t.instance,r=t.processedItem;return{display:n.isItemActive(r)?"flex":"none"}}},fI={root:function(t){var n=t.instance;return["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(t){var n=t.instance,r=t.processedItem;return["p-menubar-item",{"p-menubar-item-active":n.isItemActive(r),"p-focus":n.isItemFocused(r),"p-disabled":n.isItemDisabled(r)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},hI=be.extend({name:"menubar",theme:uI,classes:fI,inlineStyles:dI}),cp={name:"AngleDownIcon",extends:zt};function mI(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1)]),16)}cp.render=mI;var up={name:"AngleRightIcon",extends:zt};function pI(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"},null,-1)]),16)}up.render=pI;var bI={name:"BaseMenubar",extends:lt,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:hI,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},dp={name:"MenubarSub",hostName:"Menubar",extends:lt,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(t){return"".concat(this.menuId,"_").concat(t.key)},getItemKey:function(t){return this.getItemId(t)},getItemProp:function(t,n,r){return t&&t.item?wt(t.item[n],r):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},getItemLabelId:function(t){return"".concat(this.menuId,"_").concat(t.key,"_label")},getPTOptions:function(t,n,r){return this.ptm(r,{context:{item:t.item,index:n,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),level:this.level}})},isItemActive:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemFocused:function(t){return this.focusedItemId===this.getItemId(t)},isItemGroup:function(t){return Oe(t.items)},onItemClick:function(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.$emit("item-click",{originalEvent:t,processedItem:n,isFocus:!0})},onItemMouseEnter:function(t,n){this.$emit("item-mouseenter",{originalEvent:t,processedItem:n})},onItemMouseMove:function(t,n){this.$emit("item-mousemove",{originalEvent:t,processedItem:n})},getAriaPosInset:function(t){return t-this.calculateAriaSetSize.slice(0,t).length+1},getMenuItemProps:function(t,n){return{action:P({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(t,n,"itemLink")),icon:P({class:[this.cx("itemIcon"),this.getItemProp(t,"icon")]},this.getPTOptions(t,n,"itemIcon")),label:P({class:this.cx("itemLabel")},this.getPTOptions(t,n,"itemLabel")),submenuicon:P({class:this.cx("submenuIcon")},this.getPTOptions(t,n,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&t.getItemProp(n,"separator")})},getAriaSetSize:function(){var t=this;return this.items.filter(function(n){return t.isItemVisible(n)&&!t.getItemProp(n,"separator")}).length}},components:{AngleRightIcon:up,AngleDownIcon:cp},directives:{ripple:jr}},gI=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],vI=["onClick","onMouseenter","onMousemove"],yI=["href","target"],wI=["id"],kI=["id"];function xI(e,t,n,r,o,i){var s=je("MenubarSub",!0),l=Nr("ripple");return k(),T("ul",P({class:n.level===0?e.cx("rootList"):e.cx("submenu")},n.level===0?e.ptm("rootList"):e.ptm("submenu")),[(k(!0),T(le,null,ar(n.items,function(a,c){return k(),T(le,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(k(),T("li",P({key:0,id:i.getItemId(a),style:i.getItemProp(a,"style"),class:[e.cx("item",{processedItem:a}),i.getItemProp(a,"class")],role:"menuitem","aria-label":i.getItemLabel(a),"aria-disabled":i.isItemDisabled(a)||void 0,"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-haspopup":i.isItemGroup(a)&&!i.getItemProp(a,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize,"aria-posinset":i.getAriaPosInset(c),ref_for:!0},i.getPTOptions(a,c,"item"),{"data-p-active":i.isItemActive(a),"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[C("div",P({class:e.cx("itemContent"),onClick:function(d){return i.onItemClick(d,a)},onMouseenter:function(d){return i.onItemMouseEnter(d,a)},onMousemove:function(d){return i.onItemMouseMove(d,a)},ref_for:!0},i.getPTOptions(a,c,"itemContent")),[n.templates.item?(k(),fe(it(n.templates.item),{key:1,item:a.item,root:n.root,hasSubmenu:i.getItemProp(a,"items"),label:i.getItemLabel(a),props:i.getMenuItemProps(a,c)},null,8,["item","root","hasSubmenu","label","props"])):Dr((k(),T("a",P({key:0,href:i.getItemProp(a,"url"),class:e.cx("itemLink"),target:i.getItemProp(a,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(a,c,"itemLink")),[n.templates.itemicon?(k(),fe(it(n.templates.itemicon),{key:0,item:a.item,class:Xe(e.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(a,"icon")?(k(),T("span",P({key:1,class:[e.cx("itemIcon"),i.getItemProp(a,"icon")],ref_for:!0},i.getPTOptions(a,c,"itemIcon")),null,16)):te("",!0),C("span",P({id:i.getItemLabelId(a),class:e.cx("itemLabel"),ref_for:!0},i.getPTOptions(a,c,"itemLabel")),Ie(i.getItemLabel(a)),17,wI),i.getItemProp(a,"items")?(k(),T(le,{key:2},[n.templates.submenuicon?(k(),fe(it(n.templates.submenuicon),{key:0,root:n.root,active:i.isItemActive(a),class:Xe(e.cx("submenuIcon"))},null,8,["root","active","class"])):(k(),fe(it(n.root?"AngleDownIcon":"AngleRightIcon"),P({key:1,class:e.cx("submenuIcon"),ref_for:!0},i.getPTOptions(a,c,"submenuIcon")),null,16,["class"]))],64)):te("",!0)],16,yI)),[[l]])],16,vI),i.isItemVisible(a)&&i.isItemGroup(a)?(k(),fe(s,{key:0,id:i.getItemId(a)+"_list",menuId:n.menuId,role:"menu",style:Fo(e.sx("submenu",!0,{processedItem:a})),focusedItemId:n.focusedItemId,items:a.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,level:n.level+1,"aria-labelledby":i.getItemLabelId(a),pt:e.pt,unstyled:e.unstyled,onItemClick:t[0]||(t[0]=function(u){return e.$emit("item-click",u)}),onItemMouseenter:t[1]||(t[1]=function(u){return e.$emit("item-mouseenter",u)}),onItemMousemove:t[2]||(t[2]=function(u){return e.$emit("item-mousemove",u)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):te("",!0)],16,gI)):te("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(k(),T("li",P({key:1,id:i.getItemId(a),class:[e.cx("separator"),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"separator",ref_for:!0},e.ptm("separator")),null,16,kI)):te("",!0)],64)}),128))],16)}dp.render=xI;var fp={name:"Menubar",extends:bI,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(t){this.id=t||ut()},activeItemPath:function(t){Oe(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||ut(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&We.clear(this.container),this.container=null},methods:{getItemProp:function(t,n){return t?wt(t[n]):void 0},getItemLabel:function(t){return this.getItemProp(t,"label")},isItemDisabled:function(t){return this.getItemProp(t,"disabled")},isItemVisible:function(t){return this.getItemProp(t,"visible")!==!1},isItemGroup:function(t){return Oe(this.getItemProp(t,"items"))},isItemSeparator:function(t){return this.getItemProp(t,"separator")},getProccessedItemLabel:function(t){return t?this.getItemLabel(t.item):void 0},isProccessedItemGroup:function(t){return t&&Oe(t.items)},toggle:function(t){var n=this;this.mobileActive?(this.mobileActive=!1,We.clear(this.menubar),this.hide()):(this.mobileActive=!0,We.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),t.preventDefault()},show:function(){Ke(this.menubar)},hide:function(t,n){var r=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){Ke(r.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&Ke(this.menubar),this.dirty=!1},onFocus:function(t){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",t)},onKeyDown:function(t){var n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&dg(t.key)&&this.searchItems(t,t.key);break}},onItemChange:function(t){var n=t.processedItem,r=t.isFocus;if(!st(n)){var o=n.index,i=n.key,s=n.level,l=n.parentKey,a=n.items,c=Oe(a),u=this.activeItemPath.filter(function(d){return d.parentKey!==l&&d.parentKey!==i});c&&u.push(n),this.focusedItemInfo={index:o,level:s,parentKey:l},this.activeItemPath=u,c&&(this.dirty=!0),r&&Ke(this.menubar)}},onItemClick:function(t){var n=t.originalEvent,r=t.processedItem,o=this.isProccessedItemGroup(r),i=st(r.parent),s=this.isSelected(r);if(s){var l=r.index,a=r.key,c=r.level,u=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(f){return a!==f.key&&a.startsWith(f.key)}),this.focusedItemInfo={index:l,level:c,parentKey:u},this.dirty=!i,Ke(this.menubar)}else if(o)this.onItemChange(t);else{var d=i?r:this.activeItemPath.find(function(f){return f.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,d?d.index:-1),this.mobileActive=!1,Ke(this.menubar)}},onItemMouseEnter:function(t){this.dirty&&this.onItemChange(t)},onItemMouseMove:function(t){this.focused&&this.changeFocusedItemIndex(t,t.processedItem.index)},menuButtonClick:function(t){this.toggle(t)},menuButtonKeydown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&this.menuButtonClick(t)},onArrowDownKey:function(t){var n=this.visibleItems[this.focusedItemInfo.index],r=n?st(n.parent):null;if(r){var o=this.isProccessedItemGroup(n);o&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowRightKey(t))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i)}t.preventDefault()},onArrowUpKey:function(t){var n=this,r=this.visibleItems[this.focusedItemInfo.index],o=st(r.parent);if(o){var i=this.isProccessedItemGroup(r);if(i){this.onItemChange({originalEvent:t,processedItem:r}),this.focusedItemInfo={index:-1,parentKey:r.key};var s=this.findLastItemIndex();this.changeFocusedItemIndex(t,s)}}else{var l=this.activeItemPath.find(function(c){return c.key===r.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:l?l.parentKey:""},this.searchValue="",this.onArrowLeftKey(t),this.activeItemPath=this.activeItemPath.filter(function(c){return c.parentKey!==n.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,a)}}t.preventDefault()},onArrowLeftKey:function(t){var n=this,r=this.visibleItems[this.focusedItemInfo.index],o=r?this.activeItemPath.find(function(s){return s.key===r.parentKey}):null;if(o)this.onItemChange({originalEvent:t,processedItem:o}),this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==n.focusedItemInfo.parentKey}),t.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onArrowRightKey:function(t){var n=this.visibleItems[this.focusedItemInfo.index],r=n?this.activeItemPath.find(function(s){return s.key===n.parentKey}):null;if(r){var o=this.isProccessedItemGroup(n);o&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowDownKey(t))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()},onEndKey:function(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()},onEnterKey:function(t){if(this.focusedItemInfo.index!==-1){var n=fn(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=n&&fn(n,'a[data-pc-section="itemlink"]');r?r.click():n&&n.click();var o=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(o);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},onEscapeKey:function(t){if(this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(t,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""}}t.preventDefault()},onTabKey:function(t){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);!r&&this.onItemChange({originalEvent:t,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var r=t.container&&!t.container.contains(n.target),o=!(t.target&&(t.target===n.target||t.target.contains(n.target)));r&&o&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(n){_l()||t.hide(n,!0),t.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var t=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){t.queryMatches=n.matches,t.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(t){var n;return this.isValidItem(t)&&((n=this.getProccessedItemLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)&&this.isItemVisible(t.item)},isValidSelectedItem:function(t){return this.isValidItem(t)&&this.isSelected(t)},isSelected:function(t){return this.activeItemPath.some(function(n){return n.key===t.key})},findFirstItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidItem(n)})},findLastItemIndex:function(){var t=this;return Vc(this.visibleItems,function(n){return t.isValidItem(n)})},findNextItemIndex:function(t){var n=this,r=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(function(o){return n.isValidItem(o)}):-1;return r>-1?r+t+1:t},findPrevItemIndex:function(t){var n=this,r=t>0?Vc(this.visibleItems.slice(0,t),function(o){return n.isValidItem(o)}):-1;return r>-1?r:t},findSelectedItemIndex:function(){var t=this;return this.visibleItems.findIndex(function(n){return t.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t},findLastFocusedItemIndex:function(){var t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t},searchItems:function(t,n){var r=this;this.searchValue=(this.searchValue||"")+n;var o=-1,i=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(s){return r.isItemMatched(s)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(s){return r.isItemMatched(s)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(s){return r.isItemMatched(s)}),o!==-1&&(i=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemIndex(t,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItemIndex:function(t,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=t!==-1?"".concat(this.id,"_").concat(t):this.focusedItemId,r=fn(this.menubar,'li[id="'.concat(n,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",s=[];return t&&t.forEach(function(l,a){var c=(i!==""?i+"_":"")+a,u={item:l,index:a,level:r,key:c,parent:o,parentKey:i};u.items=n.createProcessedItems(l.items,r+1,u,c),s.push(u)}),s},containerRef:function(t){this.container=t},menubarRef:function(t){this.menubar=t?t.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var t=this,n=this.activeItemPath.find(function(r){return r.key===t.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(Oe(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:dp,BarsIcon:lp}};function No(e){"@babel/helpers - typeof";return No=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},No(e)}function _d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Id(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_d(Object(n),!0).forEach(function(r){_I(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _I(e,t,n){return(t=II(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function II(e){var t=SI(e,"string");return No(t)=="symbol"?t:t+""}function SI(e,t){if(No(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(No(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var CI=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function EI(e,t,n,r,o,i){var s=je("BarsIcon"),l=je("MenubarSub");return k(),T("div",P({ref:i.containerRef,class:e.cx("root")},e.ptmi("root")),[e.$slots.start?(k(),T("div",P({key:0,class:e.cx("start")},e.ptm("start")),[ye(e.$slots,"start")],16)):te("",!0),ye(e.$slots,e.$slots.button?"button":"menubutton",{id:o.id,class:Xe(e.cx("button")),toggleCallback:function(c){return i.menuButtonClick(c)}},function(){var a;return[e.model&&e.model.length>0?(k(),T("a",P({key:0,ref:"menubutton",role:"button",tabindex:"0",class:e.cx("button"),"aria-haspopup":!!(e.model.length&&e.model.length>0),"aria-expanded":o.mobileActive,"aria-controls":o.id,"aria-label":(a=e.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:t[0]||(t[0]=function(c){return i.menuButtonClick(c)}),onKeydown:t[1]||(t[1]=function(c){return i.menuButtonKeydown(c)})},Id(Id({},e.buttonProps),e.ptm("button"))),[ye(e.$slots,e.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[j(s,Ei(Li(e.ptm("buttonicon"))),null,16)]})],16,CI)):te("",!0)]}),j(l,{ref:i.menubarRef,id:o.id+"_list",role:"menubar",items:i.processedItems,templates:e.$slots,root:!0,mobileActive:o.mobileActive,tabindex:"0","aria-activedescendant":o.focused?i.focusedItemId:void 0,menuId:o.id,focusedItemId:o.focused?i.focusedItemId:void 0,activeItemPath:o.activeItemPath,level:0,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,pt:e.pt,unstyled:e.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),e.$slots.end?(k(),T("div",P({key:1,class:e.cx("end")},e.ptm("end")),[ye(e.$slots,"end")],16)):te("",!0)],16)}fp.render=EI;var TI=function(t){var n=t.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(n("avatar.width"),`;
    height: `).concat(n("avatar.height"),`;
    font-size: `).concat(n("avatar.font.size"),`;
    background: `).concat(n("avatar.background"),`;
    border-radius: `).concat(n("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(n("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(n("avatar.lg.width"),`;
    height: `).concat(n("avatar.lg.width"),`;
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(n("avatar.xl.width"),`;
    height: `).concat(n("avatar.xl.width"),`;
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(n("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.group.border.color"),`;
}
`)},PI={root:function(t){var n=t.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},OI=be.extend({name:"avatar",theme:TI,classes:PI}),AI={name:"BaseAvatar",extends:lt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:OI,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},Wl={name:"Avatar",extends:AI,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}}},LI=["aria-labelledby","aria-label"],RI=["src","alt"];function $I(e,t,n,r,o,i){return k(),T("div",P({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[ye(e.$slots,"default",{},function(){return[e.label?(k(),T("span",P({key:0,class:e.cx("label")},e.ptm("label")),Ie(e.label),17)):e.$slots.icon?(k(),fe(it(e.$slots.icon),{key:1,class:Xe(e.cx("icon"))},null,8,["class"])):e.icon?(k(),T("span",P({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):e.image?(k(),T("img",P({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},e.ptm("image")),null,16,RI)):te("",!0)]})],16,LI)}Wl.render=$I;const DI={class:"flex items-center gap-2"},NI={class:"text-xs"},Sd={__name:"Navbar",setup(e){const t=Ko(),n=ze(),r=De(),o=l=>r.value.toggle(l),i=Ae(()=>n.user.photoURL?{image:n.user.photoURL}:{icon:"fa-solid fa-user"}),s=De([{label:"My Account",icon:"fa-solid fa-user",command:async()=>{t.push({name:"ProfileView"})}},{label:"Logout",icon:"fa-solid fa-right-to-bracket",command:async()=>{console.log("Logging out..."),await n.signOut(),t.push({name:"LoginView"})}}]);return(l,a)=>(k(),T("div",null,[j(Y(fp),null,{end:me(()=>[C("div",DI,[Y(n).user?(k(),T("div",{key:0,onClick:o,class:"card flex justify-center items-center gap-3 hover:cursor-pointer"},[C("span",NI,Ie(Y(n).user.displayName||Y(n).user.email),1),j(Y(Wl),P(i.value,{image:Y(n).user.photoURL,shape:"circle"}),null,16,["image"]),j(Y(El),{ref_key:"menu",ref:r,id:"overlay_menu",model:s.value,popup:!0},null,8,["model"])])):te("",!0)])]),_:1})]))}},MI={class:"flex h-screen antialiased"},jI={class:"md:hidden w-full"},BI={class:"flex justify-between items-center"},zI={class:"flex flex-1 overflow-auto"},FI={class:"p-3 md:p-5 w-full"},UI={class:"fixed inset-0 z-50 hidden md:flex"},VI={class:"flex flex-col lg:w-72 xl:w-80 text-surface-0 bg-surface-800 dark:bg-surface-800"},HI={class:"flex h-full flex-col overflow-y-auto border-r md:p-5"},KI={class:"mb-10 flex items-center rounded-lg"},WI={class:"flex flex-col flex-1 overflow-auto"},qI={class:"p-5 md:px-16 lg:px-32"},GI={__name:"Layout",setup(e){const t=De(!1);return(n,r)=>{const o=je("router-link");return k(),T("div",MI,[C("div",jI,[j(Y(lI),{visible:t.value,"onUpdate:visible":r[1]||(r[1]=i=>t.value=i)},{header:me(()=>r[3]||(r[3]=[C("img",{src:ji,alt:"logo image",class:"w-12 dark:invert rounded"},null,-1)])),default:me(()=>[j(vd,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=i=>t.value=i)},null,8,["modelValue"])]),_:1},8,["visible"]),C("div",BI,[j(Y(qe),{icon:"fa-solid fa-bars",class:"m-3",text:"",size:"large",onClick:r[2]||(r[2]=i=>t.value=!0),severity:"secondary",rounded:"","aria-label":"menu"}),j(Sd,{class:"md:hidden w-full"})]),C("div",zI,[C("main",FI,[ye(n.$slots,"default")])])]),C("div",UI,[C("div",VI,[C("div",HI,[C("div",KI,[j(o,{to:"/"},{default:me(()=>r[4]||(r[4]=[C("div",{class:"flex justify-between items-center"},[C("img",{src:ji,alt:"logo image",class:"dark:invert w-12 rounded"}),C("div",{class:"flex flex-col p-3"},[C("span",{class:"font-bold"},"Flutterflow "),C("span",{class:"text-sm"}," Admin")])],-1)])),_:1})]),j(vd)])]),C("div",WI,[j(Sd,{class:"hidden md:block w-full"}),C("main",qI,[ye(n.$slots,"default")])])])])}}};var It=ds();function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(e)}function pi(e,t,n){return(t=JI(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function JI(e){var t=YI(e,"string");return Mo(t)=="symbol"?t:t+""}function YI(e,t){if(Mo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Mo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ZI=function(t){var n=t.dt;return`
.p-toast {
    width: `.concat(n("toast.width"),`;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: `).concat(n("toast.icon.size"),`;
    width: `).concat(n("toast.icon.size"),`;
    height: `).concat(n("toast.icon.size"),`;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: `).concat(n("toast.content.padding"),`;
    gap: `).concat(n("toast.content.gap"),`;
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("toast.text.gap"),`;
}

.p-toast-summary {
    font-weight: `).concat(n("toast.summary.font.weight"),`;
    font-size: `).concat(n("toast.summary.font.size"),`;
}

.p-toast-detail {
    font-weight: `).concat(n("toast.detail.font.weight"),`;
    font-size: `).concat(n("toast.detail.font.size"),`;
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background `).concat(n("toast.transition.duration"),", color ").concat(n("toast.transition.duration"),", outline-color ").concat(n("toast.transition.duration"),", box-shadow ").concat(n("toast.transition.duration"),`;
    outline-color: transparent;
    color: inherit;
    width: `).concat(n("toast.close.button.width"),`;
    height: `).concat(n("toast.close.button.height"),`;
    border-radius: `).concat(n("toast.close.button.border.radius"),`;
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: `).concat(n("toast.border.width"),`;
    border-style: solid;
    backdrop-filter: blur(`).concat(n("toast.blur"),`);
    border-radius: `).concat(n("toast.border.radius"),`;
}

.p-toast-close-icon {
    font-size: `).concat(n("toast.close.icon.size"),`;
    width: `).concat(n("toast.close.icon.size"),`;
    height: `).concat(n("toast.close.icon.size"),`;
}

.p-toast-close-button:focus-visible {
    outline-width: `).concat(n("focus.ring.width"),`;
    outline-style: `).concat(n("focus.ring.style"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-toast-message-info {
    background: `).concat(n("toast.info.background"),`;
    border-color: `).concat(n("toast.info.border.color"),`;
    color: `).concat(n("toast.info.color"),`;
    box-shadow: `).concat(n("toast.info.shadow"),`;
}

.p-toast-message-info .p-toast-detail {
    color: `).concat(n("toast.info.detail.color"),`;
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.info.close.button.focus.ring.shadow"),`;
}

.p-toast-message-info .p-toast-close-button:hover {
    background: `).concat(n("toast.info.close.button.hover.background"),`;
}

.p-toast-message-success {
    background: `).concat(n("toast.success.background"),`;
    border-color: `).concat(n("toast.success.border.color"),`;
    color: `).concat(n("toast.success.color"),`;
    box-shadow: `).concat(n("toast.success.shadow"),`;
}

.p-toast-message-success .p-toast-detail {
    color: `).concat(n("toast.success.detail.color"),`;
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.success.close.button.focus.ring.shadow"),`;
}

.p-toast-message-success .p-toast-close-button:hover {
    background: `).concat(n("toast.success.close.button.hover.background"),`;
}

.p-toast-message-warn {
    background: `).concat(n("toast.warn.background"),`;
    border-color: `).concat(n("toast.warn.border.color"),`;
    color: `).concat(n("toast.warn.color"),`;
    box-shadow: `).concat(n("toast.warn.shadow"),`;
}

.p-toast-message-warn .p-toast-detail {
    color: `).concat(n("toast.warn.detail.color"),`;
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.warn.close.button.focus.ring.shadow"),`;
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: `).concat(n("toast.warn.close.button.hover.background"),`;
}

.p-toast-message-error {
    background: `).concat(n("toast.error.background"),`;
    border-color: `).concat(n("toast.error.border.color"),`;
    color: `).concat(n("toast.error.color"),`;
    box-shadow: `).concat(n("toast.error.shadow"),`;
}

.p-toast-message-error .p-toast-detail {
    color: `).concat(n("toast.error.detail.color"),`;
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.error.close.button.focus.ring.shadow"),`;
}

.p-toast-message-error .p-toast-close-button:hover {
    background: `).concat(n("toast.error.close.button.hover.background"),`;
}

.p-toast-message-secondary {
    background: `).concat(n("toast.secondary.background"),`;
    border-color: `).concat(n("toast.secondary.border.color"),`;
    color: `).concat(n("toast.secondary.color"),`;
    box-shadow: `).concat(n("toast.secondary.shadow"),`;
}

.p-toast-message-secondary .p-toast-detail {
    color: `).concat(n("toast.secondary.detail.color"),`;
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.secondary.close.button.focus.ring.shadow"),`;
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: `).concat(n("toast.secondary.close.button.hover.background"),`;
}

.p-toast-message-contrast {
    background: `).concat(n("toast.contrast.background"),`;
    border-color: `).concat(n("toast.contrast.border.color"),`;
    color: `).concat(n("toast.contrast.color"),`;
    box-shadow: `).concat(n("toast.contrast.shadow"),`;
}

.p-toast-message-contrast .p-toast-detail {
    color: `).concat(n("toast.contrast.detail.color"),`;
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.contrast.close.button.focus.ring.shadow"),`;
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: `).concat(n("toast.contrast.close.button.hover.background"),`;
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`)},XI={root:function(t){var n=t.position;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},QI={root:function(t){var n=t.props;return["p-toast p-component p-toast-"+n.position]},message:function(t){var n=t.props;return["p-toast-message",{"p-toast-message-info":n.message.severity==="info"||n.message.severity===void 0,"p-toast-message-warn":n.message.severity==="warn","p-toast-message-error":n.message.severity==="error","p-toast-message-success":n.message.severity==="success","p-toast-message-secondary":n.message.severity==="secondary","p-toast-message-contrast":n.message.severity==="contrast"}]},messageContent:"p-toast-message-content",messageIcon:function(t){var n=t.props;return["p-toast-message-icon",pi(pi(pi(pi({},n.infoIcon,n.message.severity==="info"),n.warnIcon,n.message.severity==="warn"),n.errorIcon,n.message.severity==="error"),n.successIcon,n.message.severity==="success")]},messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:"p-toast-close-icon"},eS=be.extend({name:"toast",theme:ZI,classes:QI,inlineStyles:XI}),za={name:"CheckIcon",extends:zt};function tS(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1)]),16)}za.render=tS;var Fa={name:"ExclamationTriangleIcon",extends:zt};function nS(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"},null,-1),C("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"},null,-1),C("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"},null,-1)]),16)}Fa.render=nS;var Ua={name:"InfoCircleIcon",extends:zt};function rS(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"},null,-1)]),16)}Ua.render=rS;var Va={name:"TimesCircleIcon",extends:zt};function oS(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}Va.render=oS;var iS={name:"BaseToast",extends:lt,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:eS,provide:function(){return{$pcToast:this,$parentInstance:this}}},hp={name:"ToastMessage",hostName:"Toast",extends:lt,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var t=this;this.message.life&&(this.closeTimeout=setTimeout(function(){t.close({message:t.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(t){this.$emit("close",t)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&Ua,success:!this.successIcon&&za,warn:!this.warnIcon&&Fa,error:!this.errorIcon&&Va}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:xs,InfoCircleIcon:Ua,CheckIcon:za,ExclamationTriangleIcon:Fa,TimesCircleIcon:Va},directives:{ripple:jr}};function jo(e){"@babel/helpers - typeof";return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jo(e)}function Cd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ed(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cd(Object(n),!0).forEach(function(r){sS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sS(e,t,n){return(t=aS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aS(e){var t=lS(e,"string");return jo(t)=="symbol"?t:t+""}function lS(e,t){if(jo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(jo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cS=["aria-label"];function uS(e,t,n,r,o,i){var s=Nr("ripple");return k(),T("div",P({class:[e.cx("message"),n.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("message")),[n.templates.container?(k(),fe(it(n.templates.container),{key:0,message:n.message,closeCallback:i.onCloseClick},null,8,["message","closeCallback"])):(k(),T("div",P({key:1,class:[e.cx("messageContent"),n.message.contentStyleClass]},e.ptm("messageContent")),[n.templates.message?(k(),fe(it(n.templates.message),{key:1,message:n.message},null,8,["message"])):(k(),T(le,{key:0},[(k(),fe(it(n.templates.messageicon?n.templates.messageicon:n.templates.icon?n.templates.icon:i.iconComponent&&i.iconComponent.name?i.iconComponent:"span"),P({class:e.cx("messageIcon")},e.ptm("messageIcon")),null,16,["class"])),C("div",P({class:e.cx("messageText")},e.ptm("messageText")),[C("span",P({class:e.cx("summary")},e.ptm("summary")),Ie(n.message.summary),17),C("div",P({class:e.cx("detail")},e.ptm("detail")),Ie(n.message.detail),17)],16)],64)),n.message.closable!==!1?(k(),T("div",Ei(P({key:2},e.ptm("buttonContainer"))),[Dr((k(),T("button",P({class:e.cx("closeButton"),type:"button","aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=function(){return i.onCloseClick&&i.onCloseClick.apply(i,arguments)}),autofocus:""},Ed(Ed({},n.closeButtonProps),e.ptm("closeButton"))),[(k(),fe(it(n.templates.closeicon||"TimesIcon"),P({class:[e.cx("closeIcon"),n.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))],16,cS)),[[s]])],16)):te("",!0)],16))],16)}hp.render=uS;function dS(e){return pS(e)||mS(e)||hS(e)||fS()}function fS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hS(e,t){if(e){if(typeof e=="string")return Ha(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ha(e,t):void 0}}function mS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pS(e){if(Array.isArray(e))return Ha(e)}function Ha(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var bS=0,mp={name:"Toast",extends:iS,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){It.on("add",this.onAdd),It.on("remove",this.onRemove),It.on("remove-group",this.onRemoveGroup),It.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&We.clear(this.$refs.container),It.off("add",this.onAdd),It.off("remove",this.onRemove),It.off("remove-group",this.onRemoveGroup),It.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(t){t.id==null&&(t.id=bS++),this.messages=[].concat(dS(this.messages),[t])},remove:function(t){var n=this.messages.findIndex(function(r){return r.id===t.message.id});n!==-1&&(this.messages.splice(n,1),this.$emit(t.type,{message:t.message}))},onAdd:function(t){this.group==t.group&&this.add(t)},onRemove:function(t){this.remove({message:t,type:"close"})},onRemoveGroup:function(t){this.group===t&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&We.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var t=this;this.$refs.container&&this.autoZIndex&&st(this.messages)&&setTimeout(function(){We.clear(t.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Il(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var r in this.breakpoints){var o="";for(var i in this.breakpoints[r])o+=i+":"+this.breakpoints[r][i]+"!important;";n+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-toast[`).concat(this.attributeSelector,`] {
                                `).concat(o,`
                            }
                        }
                    `)}this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{attributeSelector:function(){return ut()}},components:{ToastMessage:hp,Portal:qo}};function Bo(e){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bo(e)}function Td(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function gS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Td(Object(n),!0).forEach(function(r){vS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Td(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vS(e,t,n){return(t=yS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yS(e){var t=wS(e,"string");return Bo(t)=="symbol"?t:t+""}function wS(e,t){if(Bo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Bo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kS(e,t,n,r,o,i){var s=je("ToastMessage"),l=je("Portal");return k(),fe(l,null,{default:me(function(){return[C("div",P({ref:"container",class:e.cx("root"),style:e.sx("root",!0,{position:e.position})},e.ptmi("root")),[j(Ub,P({name:"p-toast-message",tag:"div",onEnter:i.onEnter,onLeave:i.onLeave},gS({},e.ptm("transition"))),{default:me(function(){return[(k(!0),T(le,null,ar(o.messages,function(a){return k(),fe(s,{key:a.id,message:a,templates:e.$slots,closeIcon:e.closeIcon,infoIcon:e.infoIcon,warnIcon:e.warnIcon,errorIcon:e.errorIcon,successIcon:e.successIcon,closeButtonProps:e.closeButtonProps,unstyled:e.unstyled,onClose:t[0]||(t[0]=function(c){return i.remove(c)}),pt:e.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","unstyled","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}mp.render=kS;var pp={name:"WindowMaximizeIcon",extends:zt};function xS(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}pp.render=xS;var bp={name:"WindowMinimizeIcon",extends:zt};function _S(e,t,n,r,o,i){return k(),T("svg",P({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[C("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}bp.render=_S;var IS=function(t){var n=t.dt;return`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: `.concat(n("dialog.border.radius"),`;
    box-shadow: `).concat(n("dialog.shadow"),`;
    background: `).concat(n("dialog.background"),`;
    border: 1px solid `).concat(n("dialog.border.color"),`;
    color: `).concat(n("dialog.color"),`;
}

.p-dialog-content {
    overflow-y: auto;
    padding: `).concat(n("dialog.content.padding"),`;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(n("dialog.header.padding"),`;
}

.p-dialog-title {
    font-weight: `).concat(n("dialog.title.font.weight"),`;
    font-size: `).concat(n("dialog.title.font.size"),`;
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: `).concat(n("dialog.footer.padding"),`;
    display: flex;
    justify-content: flex-end;
    gap: `).concat(n("dialog.footer.gap"),`;
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: `).concat(n("dialog.header.gap"),`;
}
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}
`)},SS={mask:function(t){var n=t.position,r=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"||n==="topleft"||n==="bottomleft"?"flex-start":n==="right"||n==="topright"||n==="bottomright"?"flex-end":"center",alignItems:n==="top"||n==="topleft"||n==="topright"?"flex-start":n==="bottom"||n==="bottomleft"||n==="bottomright"?"flex-end":"center",pointerEvents:r?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},CS={mask:function(t){var n=t.props,r=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],o=r.find(function(i){return i===n.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":n.modal},o?"p-dialog-".concat(o):""]},root:function(t){var n=t.props,r=t.instance;return["p-dialog p-component",{"p-dialog-maximized":n.maximizable&&r.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},ES=be.extend({name:"dialog",theme:IS,classes:CS,inlineStyles:SS}),TS={name:"BaseDialog",extends:lt,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:ES,provide:function(){return{$pcDialog:this,$parentInstance:this}}},ql={name:"Dialog",extends:TS,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var t=this;return{dialogRef:Ae(function(){return t._instance})}},data:function(){return{id:this.$attrs.id,containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},watch:{"$attrs.id":function(t){this.id=t||ut()}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&We.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.id=this.id||ut(),this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onBeforeEnter:function(t){t.setAttribute(this.attributeSelector,"")},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&We.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ho(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),Ke(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&We.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(t){this.maskMouseDownTarget=t.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var t=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.footer&&t(this.footerContainer);n||(n=this.$slots.header&&t(this.headerContainer),n||(n=this.$slots.default&&t(this.content),n||(this.maximizable?(this.focusableMax=!0,n=this.maximizableButton):(this.focusableClose=!0,n=this.closeButton)))),n&&Ke(n,{focusVisible:!0})},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?ga():va())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&ga()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&va()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t?t.$el:void 0},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Il(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var r in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-dialog[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){t.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&gh(document.body,{"user-select":"none"}),this.$emit("dragstart",t))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(n){if(t.dragging){var r=St(t.container),o=nn(t.container),i=n.pageX-t.lastPageX,s=n.pageY-t.lastPageY,l=t.container.getBoundingClientRect(),a=l.left+i,c=l.top+s,u=xl(),d=getComputedStyle(t.container),f=parseFloat(d.marginLeft),h=parseFloat(d.marginTop);t.container.style.position="fixed",t.keepInViewport?(a>=t.minX&&a+r<u.width&&(t.lastPageX=n.pageX,t.container.style.left=a-f+"px"),c>=t.minY&&c+o<u.height&&(t.lastPageY=n.pageY,t.container.style.top=c-h+"px")):(t.lastPageX=n.pageX,t.container.style.left=a-f+"px",t.lastPageY=n.pageY,t.container.style.top=c-h+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(n){t.dragging&&(t.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!t.isUnstyled&&(document.body.style["user-select"]=""),t.$emit("dragend",n))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector:function(){return ut()}},directives:{ripple:jr,focustrap:sp},components:{Button:qe,Portal:qo,WindowMinimizeIcon:bp,WindowMaximizeIcon:pp,TimesIcon:xs}};function zo(e){"@babel/helpers - typeof";return zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zo(e)}function Pd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Od(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pd(Object(n),!0).forEach(function(r){PS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PS(e,t,n){return(t=OS(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OS(e){var t=AS(e,"string");return zo(t)=="symbol"?t:t+""}function AS(e,t){if(zo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(zo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var LS=["aria-labelledby","aria-modal"],RS=["id"];function $S(e,t,n,r,o,i){var s=je("Button"),l=je("Portal"),a=Nr("focustrap");return k(),fe(l,{appendTo:e.appendTo},{default:me(function(){return[o.containerVisible?(k(),T("div",P({key:0,ref:i.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||(t[1]=function(){return i.onMaskMouseDown&&i.onMaskMouseDown.apply(i,arguments)}),onMouseup:t[2]||(t[2]=function(){return i.onMaskMouseUp&&i.onMaskMouseUp.apply(i,arguments)})},e.ptm("mask")),[j(gl,P({name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:me(function(){return[e.visible?Dr((k(),T("div",P({key:0,ref:i.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?ye(e.$slots,"container",{key:0,closeCallback:i.close,maximizeCallback:function(u){return i.maximize(u)}}):(k(),T(le,{key:1},[e.showHeader?(k(),T("div",P({key:0,ref:i.headerContainerRef,class:e.cx("header"),onMousedown:t[0]||(t[0]=function(){return i.initDrag&&i.initDrag.apply(i,arguments)})},e.ptm("header")),[ye(e.$slots,"header",{class:Xe(e.cx("title"))},function(){return[e.header?(k(),T("span",P({key:0,id:i.ariaLabelledById,class:e.cx("title")},e.ptm("title")),Ie(e.header),17,RS)):te("",!0)]}),C("div",P({class:e.cx("headerActions")},e.ptm("headerActions")),[e.maximizable?(k(),fe(s,P({key:0,ref:i.maximizableRef,autofocus:o.focusableMax,class:e.cx("pcMaximizeButton"),onClick:i.maximize,tabindex:e.maximizable?"0":"-1",unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:me(function(c){return[ye(e.$slots,"maximizeicon",{maximized:o.maximized},function(){return[(k(),fe(it(i.maximizeIconComponent),P({class:[c.class,o.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])):te("",!0),e.closable?(k(),fe(s,P({key:1,ref:i.closeButtonRef,autofocus:o.focusableClose,class:e.cx("pcCloseButton"),onClick:i.close,"aria-label":i.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:me(function(c){return[ye(e.$slots,"closeicon",{},function(){return[(k(),fe(it(e.closeIcon?"span":"TimesIcon"),P({class:[e.closeIcon,c.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])):te("",!0)],16)],16)):te("",!0),C("div",P({ref:i.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle},Od(Od({},e.contentProps),e.ptm("content"))),[ye(e.$slots,"default")],16),e.footer||e.$slots.footer?(k(),T("div",P({key:1,ref:i.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[ye(e.$slots,"footer",{},function(){return[mn(Ie(e.footer),1)]})],16)):te("",!0)],64))],16,LS)),[[a,{disabled:!e.modal}]]):te("",!0)]}),_:3},16,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):te("",!0)]}),_:3},8,["appendTo"])}ql.render=$S;var gp=Symbol();function _s(){var e=yt(gp);if(!e)throw new Error("No PrimeVue Toast provided!");return e}const DS={class:"flex justify-center"},NS={class:"flex justify-between w-full"},MS={class:"space-y-8"},jS={key:0},BS={class:"flex gap-10"},zS={__name:"EmailVerificationModal",setup(e){const t=Ko(),n=ze(),r=_s(),o=Ae(()=>n.showEmailVerificationModal),i=Ae(()=>n.checkingAuth),s=async()=>{const c=await n.emailVerificationSend();r.add(c)},l=async()=>{await n.checkForAuthenticatedUser(),n.user&&!n.user.emailVerified?(console.log("Email not verified yet"),r.add({severity:"info",summary:"Email not verified",detail:"It appears that you have not yet verified your email address. Please check your inbox.",life:5e3})):t.push({name:"HomeView"})},a=async()=>{await n.signOut(),t.push({name:"LoginView"})};return(c,u)=>(k(),T("div",DS,[j(Y(ql),{blockScroll:!0,"close-on-escape":!1,closable:!1,visible:o.value,"onUpdate:visible":u[0]||(u[0]=d=>o.value=d),modal:"",class:"w-full p-3 max-w-3xl bg-primary-900"},{header:me(()=>[C("div",NS,[u[1]||(u[1]=C("div",{class:"flex items-center gap-5"},[C("i",{class:"fa-solid fa-envelope text-xl text-surface-500"}),C("h1",{class:"text-xl font-bold"},"Please verify your email address")],-1)),j(Y(qe),{onClick:a,label:"Logout",text:""})])]),default:me(()=>[C("div",MS,[Y(n).user?(k(),T("p",jS," We've sent an email to "+Ie(Y(n).user.email)+". Please click the link in this email to gain access to your dashboard. ",1)):te("",!0),C("div",BS,[j(Y(qe),{label:"Resend Email",onClick:s,size:"small",icon:"fa-solid fa-inbox"}),j(Y(qe),{severity:"info",label:"Done",onClick:l,size:"small",icon:i.value?"fa-solid fa-spin fa-cog":"fa-solid fa-check"},null,8,["icon"])])])]),_:1},8,["visible"])]))}},FS={__name:"App",setup(e){return Sf(async()=>{await ze().initializeFirebase()}),(t,n)=>(k(),T(le,null,[j(Y(mp)),j(zS),j(GI,null,{default:me(()=>[(k(),fe(Y(Dh),{key:t.$route.fullPath}))]),_:1})],64))}},US={class:"text-3xl"},VS={__name:"HomeView",setup(e){const t=ze(),n=Ae(()=>t.displayName||t.email);return(r,o)=>(k(),T(le,null,[C("h1",US,"Hi "+Ie(n.value),1),o[0]||(o[0]=C("span",{class:"text-surface-400"},"Welcome Back",-1))],64))}},vp=vl({id:"database-entity",state:()=>({databaseEntityIndex:null,isLoading:!1,isError:!1,errorsList:[]}),actions:{async getDatabaseEntityIndex(e,t,n){const{data:r}=await sn.get(`/admin${e}?page=${t}&size=${n}`);return this.databaseEntityIndex=r,r},async getDatabaseEntityDetail(e,t){const{data:n}=await sn.get(`/admin/${e}/${t}`);return n},async upsertDatabaseEntity(e,t,n){return t==="create"?this.createDatabaseEntity(e,n):this.updateDatabaseEntity(e,t,n)},async createDatabaseEntity(e,t){try{return await sn.post(`/admin/${e}`,t),{severity:"success",summary:"Document created",detail:"The database entry was created successfully",life:3e3}}catch(n){return{severity:"error",summary:"Document not created",detail:n,life:3e3}}},async updateDatabaseEntity(e,t,n){try{return await sn.patch(`/admin/${e}/${t}`,n),{severity:"success",summary:"Document updated",detail:"The database entry was saved successfully",life:3e3}}catch(r){return{severity:"error",summary:"Document not updated",detail:r,life:3e3}}},async deleteDatabaseEntity(e,t){try{return await sn.delete(`/admin/${e}/${t}`),{severity:"success",summary:"Document removed",detail:"The database entry was deleted successfully",life:3e3}}catch(n){return{severity:"error",summary:"Document not removed",detail:n,life:3e3}}}}}),HS={key:0},KS={class:"text-xl my-6"},WS={key:0},qS={class:"outline outline-1 outline-surface-200 rounded-lg shadow p-3 my-3 hover:shadow-lg"},GS={key:1,class:"text-surface-500"},JS={__name:"DatabaseEntityIndex",setup(e){const t=ze(),n=Wo(),r=vp();t.getDashboardConfig();const o=De({});fr(async()=>{o.value=t.dashboardConfig.models.find(s=>s.collection_name===n.params.entity),await r.getDatabaseEntityIndex(n.path,1,100)}),r.getDatabaseEntityIndex(n.path,1,100);const i=Ae(()=>r.databaseEntityIndex);return(s,l)=>{const a=je("router-link");return o.value&&i.value?(k(),T("div",HS,[C("h1",KS,[mn(Ie(o.value.display_name)+" collection ",1),j(a,{to:`/${Y(n).params.entity}/create`},{default:me(()=>[j(Y(qe),{icon:"fa-solid fa-plus text-green-600",text:""})]),_:1},8,["to"])]),C("div",null,[i.value&&o.value.fields&&i.value.length>0?(k(),T("ul",WS,[(k(!0),T(le,null,ar(i.value.items,c=>(k(),T("li",{key:c.id},[j(a,{class:"w-full outline",to:`/${Y(n).params.entity}/${c.id}`},{default:me(()=>[C("div",qS,Ie(c[o.value.fields[0].fieldName]),1)]),_:2},1032,["to"])]))),128))])):(k(),T("div",GS,l[0]||(l[0]=[C("p",null,"No items",-1)])))])])):te("",!0)}}};var YS=function(t){var n=t.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(n("inputtext.color"),`;
    background: `).concat(n("inputtext.background"),`;
    padding: `).concat(n("inputtext.padding.y")," ").concat(n("inputtext.padding.x"),`;
    border: 1px solid `).concat(n("inputtext.border.color"),`;
    transition: background `).concat(n("inputtext.transition.duration"),", color ").concat(n("inputtext.transition.duration"),", border-color ").concat(n("inputtext.transition.duration"),", outline-color ").concat(n("inputtext.transition.duration"),", box-shadow ").concat(n("inputtext.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(n("inputtext.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("inputtext.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(n("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(n("inputtext.focus.border.color"),`;
    box-shadow: `).concat(n("inputtext.focus.ring.shadow"),`;
    outline: `).concat(n("inputtext.focus.ring.width")," ").concat(n("inputtext.focus.ring.style")," ").concat(n("inputtext.focus.ring.color"),`;
    outline-offset: `).concat(n("inputtext.focus.ring.offset"),`;
}

.p-inputtext.p-invalid {
    border-color: `).concat(n("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(n("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(n("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(n("inputtext.disabled.background"),`;
    color: `).concat(n("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(n("inputtext.placeholder.color"),`;
}

.p-inputtext-sm {
    font-size: `).concat(n("inputtext.sm.font.size"),`;
    padding: `).concat(n("inputtext.sm.padding.y")," ").concat(n("inputtext.sm.padding.x"),`;
}

.p-inputtext-lg {
    font-size: `).concat(n("inputtext.lg.font.size"),`;
    padding: `).concat(n("inputtext.lg.padding.y")," ").concat(n("inputtext.lg.padding.x"),`;
}

.p-inputtext-fluid {
    width: 100%;
}
`)},ZS={root:function(t){var n=t.instance,r=t.props;return["p-inputtext p-component",{"p-filled":n.filled,"p-inputtext-sm":r.size==="small","p-inputtext-lg":r.size==="large","p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled","p-inputtext-fluid":n.hasFluid}]}},XS=be.extend({name:"inputtext",theme:YS,classes:ZS}),QS={name:"BaseInputText",extends:lt,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:XS,provide:function(){return{$pcInputText:this,$parentInstance:this}}},Is={name:"InputText",extends:QS,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},hasFluid:function(){return st(this.fluid)?!!this.$pcFluid:this.fluid}}},eC=["value","aria-invalid"];function tC(e,t,n,r,o,i){return k(),T("input",P({type:"text",class:e.cx("root"),value:e.modelValue,"aria-invalid":e.invalid||void 0,onInput:t[0]||(t[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.getPTOptions("root")),null,16,eC)}Is.render=tC;const nC={class:"my-6 flex justify-between"},rC={class:"text-xl"},oC={class:"text-xl"},iC={class:"text-xs text-surface-500"},sC={class:"flex flex-col gap-4"},aC={key:0},lC={key:0,class:"flex flex-col"},cC={class:"text-surface-600"},uC={__name:"DatabaseEntityDetail",setup(e){const t=ze(),n=_s(),r=De({}),o=Wo(),i=Ko(),s=vp(),l=De({});fr(async()=>{l.value=t.dashboardConfig.models.find(u=>u.collection_name===o.params.entity),r.value=await s.getDatabaseEntityDetail(o.params.entity,o.params.id)});const a=async()=>{const u=await s.upsertDatabaseEntity(o.params.entity,o.params.id,r.value);o.params.id==="create"&&i.push(`/${o.params.entity}`),n.add(u)},c=async()=>{const u=await s.deleteDatabaseEntity(o.params.entity,o.params.id);n.add(u),i.push(`/${o.params.entity}`)};return(u,d)=>(k(),T(le,null,[C("div",nC,[C("div",rC,[C("h1",oC,Ie(l.value.display_name)+" document ",1),C("span",iC,Ie(Y(o).params.id),1)]),j(Y(qe),{onClick:c,icon:"fa-solid fa-trash text-red-600",text:""})]),C("div",sC,[(k(!0),T(le,null,ar(l.value.fields,f=>(k(),T("div",null,[f&&r.value?(k(),T("div",aC,[f.type==="String"?(k(),T("div",lC,[C("label",cC,Ie(f.fieldName),1),j(Y(Is),{modelValue:r.value[f.fieldName],"onUpdate:modelValue":h=>r.value[f.fieldName]=h},null,8,["modelValue","onUpdate:modelValue"])])):te("",!0)])):te("",!0)]))),256)),j(Y(qe),{severity:"contrast",onClick:a,label:"Save"})])],64))}},dC=vl({id:"users",state:()=>({userIndex:[]}),actions:{async getUsers(){const{data:e}=await sn.get("/admin/users");return this.userIndex=e,e}}}),fC={key:0},hC={key:0},mC={class:"flex flex-col outline outline-1 outline-surface-200 rounded-lg shadow p-3 my-3 hover:shadow-lg"},pC={class:"text-xs text-surface-600"},bC={key:1,class:"text-surface-500"},gC={__name:"UserIndex",setup(e){const t=dC();t.getUsers();const n=Ae(()=>t.userIndex);return(r,o)=>{const i=je("router-link");return n.value?(k(),T("div",fC,[o[1]||(o[1]=C("h1",{class:"text-xl my-6"},"Users ",-1)),C("div",null,[n.value&&n.value.length>0?(k(),T("ul",hC,[(k(!0),T(le,null,ar(n.value,s=>(k(),T("li",{key:s.uid},[j(i,{class:"w-full outline",to:"/users"},{default:me(()=>[C("div",mC,[C("span",null,Ie(s.display_name||"Unnamed"),1),C("span",pC,Ie(s.email),1)])]),_:2},1024)]))),128))])):(k(),T("div",bC,o[0]||(o[0]=[C("p",null,"No items",-1)])))])])):te("",!0)}}},vC={class:"flex flex-col gap-1"},yC={class:"flex gap-2 items-center"},wC=["for"],$r={__name:"TextInput",props:{modelValue:{type:String,required:!0},label:{type:String,required:!0},identifier:{type:String,required:!0},icon:{type:String,required:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},inputType:{type:String,required:!0},placeholder:{type:String,required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,o=Ae({get(){return n.modelValue},set(i){r("update:modelValue",i)}});return(i,s)=>(k(),T("div",vC,[C("div",yC,[e.icon?(k(),T("i",{key:0,class:Xe([e.icon,"text-surface-400"])},null,2)):te("",!0),C("label",{class:"text-surface-500 dark:text-surface-100 text-sm",for:e.identifier},Ie(e.label),9,wC)]),j(Y(Is),{placeholder:e.placeholder,type:e.inputType,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=l=>o.value=l),"aria-describedby":e.identifier,disabled:e.disabled,required:e.required},null,8,["placeholder","type","modelValue","aria-describedby","disabled","required"])]))}},kC={class:"flex flex-col gap-6 mt-10 max-w-lg justify-center mx-auto"},xC={class:"flex justify-between"},_C={class:"text-surface-400"},IC={__name:"ProfileView",setup(e){const t=_s(),n=ze(),r=De(!1),o=Ae(()=>n.user.photoURL?{image:n.user.photoURL}:{icon:"fa pi-user"}),i=Kn({email:n.user.email,name:n.user.displayName}),s=async()=>{r.value=!0;const a={displayName:i.name},c=await n.updateUserProfile(a);t.add(c),r.value=!1},l=Ae(()=>n.dateCreated.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}));return(a,c)=>(k(),T("div",kC,[C("div",xC,[j(Y(Wl),P(o.value,{image:Y(n).user.photoURL,size:"larger",shape:"circle"}),null,16,["image"]),C("div",null,[c[2]||(c[2]=C("h1",{class:"text-3xl text-right"},"My Account",-1)),C("small",_C,"Member since: "+Ie(l.value),1)])]),C("form",{onSubmit:cs(s,["prevent"]),class:"flex flex-col gap-6 mt-10"},[j($r,{disabled:"",icon:"fa-solid fa-at",modelValue:i.email,"onUpdate:modelValue":c[0]||(c[0]=u=>i.email=u),identifier:"emailField",inputType:"email",label:"Email"},null,8,["modelValue"]),j($r,{modelValue:i.name,"onUpdate:modelValue":c[1]||(c[1]=u=>i.name=u),icon:"fa-solid fa-signature",identifier:"nameField",inputType:"text",label:"Full Name"},null,8,["modelValue"]),C("div",null,[j(Y(qe),{type:"submit",icon:r.value?"fa-solid fa-spin fa-cog":"fa-solid fa-user-check",label:"Update Profile",size:"small",class:"flex gap-2 px-6"},null,8,["icon"])])],32)]))}};var SC=function(t){var n=t.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: `.concat(n("divider.horizontal.margin"),`;
    padding: `).concat(n("divider.horizontal.padding"),`;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: `).concat(n("divider.horizontal.content.padding"),`;
}

.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
    margin: `).concat(n("divider.vertical.margin"),`;
    padding: `).concat(n("divider.vertical.padding"),`;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: `).concat(n("divider.vertical.content.padding"),`;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(n("divider.content.background"),`;
    color: `).concat(n("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
`)},CC={root:function(t){var n=t.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},EC={root:function(t){var n=t.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},TC=be.extend({name:"divider",theme:SC,classes:EC,inlineStyles:CC}),PC={name:"BaseDivider",extends:lt,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:TC,provide:function(){return{$pcDivider:this,$parentInstance:this}}},Gl={name:"Divider",extends:PC,inheritAttrs:!1},OC=["aria-orientation"];function AC(e,t,n,r,o,i){return k(),T("div",P({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(k(),T("div",P({key:0,class:e.cx("content")},e.ptm("content")),[ye(e.$slots,"default")],16)):te("",!0)],16,OC)}Gl.render=AC;var LC=function(t){var n=t.dt;return`
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: `.concat(n("inputgroup.addon.background"),`;
    color: `).concat(n("inputgroup.addon.color"),`;
    border-top: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    border-left: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    border-bottom: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    padding: 0.5rem 0.75rem;
    min-width: 2.5rem;
}

.p-inputgroup .p-floatlabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup-fluid .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-inputgroup-fluid .p-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon:last-child {
    border-right: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-floatlabel > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroup > .p-component + .p-inputgroupaddon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroupaddon,
.p-inputgroup > .p-floatlabel > .p-component + .p-inputgroupaddon {
    border-left: 0 none;
}

.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-floatlabel > .p-component:focus {
    z-index: 1;
}

.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,
.p-inputgroup > .p-floatlabel > .p-component:focus~label {
    z-index: 1;
}

.p-inputgroupaddon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-floatlabel:first-child input {
    border-top-left-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-bottom-left-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-floatlabel:last-child input {
    border-top-right-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-bottom-right-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroup-fluid .p-button {
    width: auto;
}

.p-inputgroup-fluid .p-button.p-button-icon-only {
    width: 2.5rem;
}
`)},RC={root:function(t){var n=t.instance;return["p-inputgroup",{"p-inputgroup-fluid":n.hasFluid}]}},$C=be.extend({name:"inputgroup",theme:LC,classes:RC}),DC={name:"BaseInputGroup",extends:lt,props:{fluid:{type:Boolean,default:null}},style:$C,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},yp={name:"InputGroup",extends:DC,inheritAttrs:!1,inject:{$pcFluid:{default:null}},computed:{hasFluid:function(){return st(this.fluid)?!!this.$pcFluid:this.fluid}}};function NC(e,t,n,r,o,i){return k(),T("div",P({class:e.cx("root")},e.ptmi("root")),[ye(e.$slots,"default")],16)}yp.render=NC;const MC={__name:"PasswordResetModal",setup(e){const t=ze(),n=De(!1),r=De(""),o=De(!1),i=_s(),s=async()=>{o.value=!0;const l=await t.passwordReset(r.value);i.add(l),o.value=!1,n.value=!1};return(l,a)=>(k(),T(le,null,[C("span",{class:"text-right text-surface-600 dark:text-surface-50 text-xs hover:cursor-pointer hover:text-primary-700 hover:dark:text-surface-200",onClick:a[0]||(a[0]=c=>n.value=!0)},"Reset password"),j(Y(ql),{visible:n.value,"onUpdate:visible":a[2]||(a[2]=c=>n.value=c),modal:"",header:"Reset Password",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:me(()=>[C("form",{onSubmit:cs(s,["prevent"])},[a[3]||(a[3]=C("span",{class:"text-sm text-surface-500 dark:text-surface-200"},"Enter your email to reset your password",-1)),j(Y(yp),{class:""},{default:me(()=>[j(Y(Is),{type:"email",modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c),placeholder:"joe@example.com",required:""},null,8,["modelValue"]),j(Y(qe),{type:"submit",icon:o.value?"fa-solid fa-spin fa-cog":"fa-solid fa-key",severity:"warning"},null,8,["icon"])]),_:1})],32)]),_:1},8,["visible"])],64))}},jC={class:"flex flex-col gap-2 md:gap-6 mt-3 md:mt-10"},BC={key:0,class:"flex items-center gap-3 text-xs m-1 text-error"},zC={class:"text-xs text-surface-600 dark:text-surface-50"},FC={__name:"LoginComponent",setup(e){const t=De(!1),n=Wo(),r=Ko(),o=ze(),i=Ae(()=>o.authErrorMessage),s=De({email:"",password:""});fr(async()=>{n.query.redirect?r.push(n.query.redirect):r.push("/")});const l=async()=>{o.checkForAuthenticatedUser?(console.log("Login successful  😃"),n.query.redirect?r.push(n.query.redirect):r.push("/")):await o.getToken()&&(n.query.redirect?r.push(n.query.redirect):r.push("/"))},a=async()=>{console.log("logging in..."),t.value=!0,await o.signIn(s.value.email,s.value.password),await l(),t.value=!1},c=async()=>{t.value=!0,await o.googleSignIn(),await l(),t.value=!1};return(u,d)=>{const f=je("router-link");return k(),T("div",jC,[d[7]||(d[7]=C("img",{src:ji,alt:"logo image",class:"mx-auto w-32 dark:invert"},null,-1)),C("form",{onSubmit:cs(a,["prevent"]),class:"flex flex-col gap-3 md:gap-6 md:mt-10"},[d[5]||(d[5]=C("div",{class:"flex items-center gap-3 text-surface-400 justify-center"},[C("i",{class:"fa-solid fa-user"}),C("h2",{class:"text-surface-400 text-center text-sm md:text-base font-display"},"Please login to continue")],-1)),j($r,{placeholder:"john@example.com",modelValue:s.value.email,"onUpdate:modelValue":d[0]||(d[0]=h=>s.value.email=h),identifier:"emailField",inputType:"email",label:"Email"},null,8,["modelValue"]),j($r,{placeholder:"Enter your password...",modelValue:s.value.password,"onUpdate:modelValue":d[1]||(d[1]=h=>s.value.password=h),identifier:"passwordField",inputType:"password",label:"Password"},null,8,["modelValue"]),j(MC),C("div",null,[j(Y(qe),{label:t.value?"Authenticating...":"Log in",type:"submit",class:"w-full",icon:`fa-solid ${t.value?"fa-solid fa-spin fa-cog":"fa-user"}`,size:"small"},null,8,["label","icon"]),i.value?(k(),T("div",BC,[d[2]||(d[2]=C("i",{class:"fa-solid fa-exclamation-circle"},null,-1)),C("span",null,Ie(i.value),1)])):te("",!0)]),C("span",zC,[d[4]||(d[4]=mn("Don't have an account? ")),j(f,{to:{name:"SignupView"},class:"font-bold hover:text-primary-700 dark:hover:text-primary-200"},{default:me(()=>d[3]||(d[3]=[mn("Sign up")])),_:1})])],32),j(Y(Gl),{type:"dotted",align:"center"},{default:me(()=>d[6]||(d[6]=[C("span",{class:"text-xs mx-2"},"or",-1)])),_:1}),j(Y(qe),{onClick:c,label:"Continue with Google",type:"button",severity:"secondary",size:"small",outlined:"",icon:`${t.value?"fa-solid fa-spin fa-cog":"fa-brands fa-google"}`},null,8,["icon"])])}}},UC={class:"shadow rounded-lg md:shadow-xl md:rounded-xl outline outline-1 outline-surface-300 p-5 md:p-10 max-w-lg mx-auto md:m-10"},VC={__name:"LoginView",setup(e){return(t,n)=>(k(),T("div",UC,[j(FC)]))}},HC={class:"flex flex-col gap-3 md:gap-6 mt-2 md:mt-10"},KC={key:0,class:"flex items-center gap-3 text-xs m-1 text-error"},WC={key:1,class:"flex items-center gap-3 text-sm text-error"},qC={class:"text-xs text-surface-600 dark:text-surface-50"},GC={__name:"SignupComponent",setup(e){const t=Wo(),n=Ko(),r=ze(),o=De(!1),i=De(null),s=Kn({email:"",password:""}),l=async()=>{r.checkForAuthenticatedUser?(console.log("Login successful  😃"),t.query.redirect?n.push(t.query.redirect):n.push("/")):await r.getToken()&&(t.query.redirect?n.push(t.query.redirect):n.push("/"))},a=async()=>{console.log(`Attempting to registering new user ${s.email}...`),o.value=!0,i.value=await r.emailSignUp(s.email,s.password),await l(),o.value=!1},c=async()=>{o.value=!0,await r.googleSignIn(),await l(),o.value=!1};return(u,d)=>{const f=je("router-link");return k(),T(le,null,[d[8]||(d[8]=C("img",{src:ji,alt:"logo image",class:"mx-auto w-32 dark:invert"},null,-1)),C("form",{onSubmit:cs(a,["prevent"]),class:"flex flex-col gap-2 md:gap-6 mt-3 md:mt-10"},[d[7]||(d[7]=C("div",{class:"flex items-center gap-3 text-surface-400 justify-center"},[C("i",{class:"fa-solid fa-user-plus"}),C("h2",{class:"text-surface-400 text-center text-xs md:text-base font-display"},"Sign up for a new account")],-1)),C("div",HC,[j($r,{placeholder:"john@example.com",modelValue:s.email,"onUpdate:modelValue":d[0]||(d[0]=h=>s.email=h),identifier:"emailFieldsu",inputType:"email",label:"Email",required:""},null,8,["modelValue"]),j($r,{placeholder:"Choose a password...",modelValue:s.password,"onUpdate:modelValue":d[1]||(d[1]=h=>s.password=h),identifier:"passwordFieldsu",inputType:"password",label:"Password",required:""},null,8,["modelValue"]),j(Y(qe),{label:"Register",icon:`fa-solid ${o.value?"fa-solid fa-spin fa-cog":"fa-user"}`,type:"submit",size:"small"},null,8,["icon"]),i.value?(k(),T("div",KC,[d[2]||(d[2]=C("i",{class:"fa-solid fa-exclamation-circle"},null,-1)),C("span",null,Ie(i.value),1)])):te("",!0),Y(r).authErrorMessage?(k(),T("div",WC,[d[3]||(d[3]=C("i",{class:"fa-solid fa-exclamation-circle"},null,-1)),C("span",null,Ie(Y(r).authErrorMessage),1)])):te("",!0),C("span",qC,[d[5]||(d[5]=mn("Already have an account? ")),j(f,{to:{name:"LoginView"},class:"font-bold hover:text-primary-700 dark:hover:text-primary-200"},{default:me(()=>d[4]||(d[4]=[mn("Log in")])),_:1})]),j(Y(Gl),{type:"dotted",align:"center"},{default:me(()=>d[6]||(d[6]=[C("span",{class:"text-xs mx-2"},"or",-1)])),_:1}),j(Y(qe),{onClick:c,label:"Continue with Google",type:"button",severity:"secondary",size:"small",outlined:"",icon:"fa-brands fa-google"})])],32)],64)}}},JC={class:"shadow rounded-lg md:shadow-xl md:rounded-xl outline outline-1 outline-surface-300 p-5 md:p-10 max-w-lg mx-auto md:m-10"},YC={__name:"SignupView",setup(e){return(t,n)=>(k(),T("div",JC,[j(GC)]))}},ZC={class:"flex items-center justify-center"},XC={class:"my-10 px-4 md:p-10 rounded-lg py-2 md:rounded-md md:shadow-xl bg-surface-50"},QC={class:"flex flex-col items-center"},e5={__name:"NotFound404",setup(e){return(t,n)=>{const r=je("router-link");return k(),T("div",ZC,[C("div",XC,[C("div",QC,[n[0]||(n[0]=C("h1",{class:"font-bold text-primary-600 text-5xl"},"404",-1)),n[1]||(n[1]=C("p",{class:"mb-2 text-2xl font-bold text-center text-surface-800 md:text-3xl"}," Page not found ",-1)),n[2]||(n[2]=C("p",{class:"mb-8 text-center text-surface-500 md:text-lg"}," The page you're looking for doesn't exist. ",-1)),j(r,{to:"/"},{default:me(()=>[j(Y(qe),{icon:"pi pi-backward",label:"Back to home"})]),_:1})])])])}}},wp=ry({history:$v("/dashboard"),routes:[{path:"/",name:"HomeView",component:VS,meta:{requiresAuth:!0,requiresVerifiedEmail:!0}},{path:"/users",name:"UserIndex",component:gC,meta:{requiresAuth:!0}},{path:"/:entity",name:"DatabaseEntityIndex",component:JS,meta:{requiresAuth:!0}},{path:"/:entity/:id",name:"DatabaseEntityDetail",component:uC,meta:{requiresAuth:!0}},{path:"/auth",name:"AuthLayout",children:[{path:"login",name:"LoginView",component:VC},{path:"register",name:"SignupView",component:YC},{path:"profile",name:"ProfileView",component:IC}]},{path:"/:catchAll(.*)*",name:"NotFound404",component:e5,meta:{requiresAuth:!0}}]});wp.beforeEach(async(e,t,n)=>{const r=ze();if(r.user||await r.checkForAuthenticatedUser(),e.matched.some(s=>s.meta.requiresVerifiedEmail)&&r.user&&!r.user.emailVerified){r.setEmailVerificationModal(!0),n(!1);return}if(r.setEmailVerificationModal(!1),e.matched.some(s=>s.meta.requiresAuth)&&!r.user){n({name:"LoginView",query:{redirect:e.fullPath}});return}n()});const t5={css:`
    *[data-pd-ripple="true"]{
        overflow: hidden;
        position: relative;
    }
    span[data-p-ink-active="true"]{
        animation: ripple 0.4s linear;
    }
    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }

    .progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progress-spinner-dash{
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progress-spinner-color {
        100%, 0% {
            stroke: #ff5757;
        }
        40% {
            stroke: #696cff;
        }
        66% {
            stroke: #1ea97c;
        }
        80%, 90% {
            stroke: #cc8925;
        }
    }

    .progressbar-value-animate::after {
        will-change: left, right;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }
    .progressbar-value-animate::before {
        will-change: left, right;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }
    @keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }

    .p-fadein {
        animation: p-fadein 250ms linear;
    }

    @keyframes p-fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`},n5={root:({props:e})=>({class:["relative",{flex:e.fluid,"inline-flex":!e.fluid},{"w-full":e.multiple},"text-surface-900 dark:text-surface-0",{"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled}]}),inputMultiple:({props:e,state:t})=>({class:["leading-none","flex items-center flex-wrap","gap-2","m-0 list-none","py-1 px-1","w-full","appearance-none rounded-md","text-surface-700 dark:text-white/80","placeholder:text-surface-400 dark:placeholder:text-surface-500",{"bg-surface-0 dark:bg-surface-950":!e.disabled},"border",{"border-surface-300 dark:border-surface-700":!e.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.invalid},{"hover:border-surface-400 dark:hover:border-surface-700":!e.invalid},{"outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400":t.focused},"transition duration-200 ease-in-out","cursor-text overflow-hidden"]}),inputToken:{class:["py-1 px-0 ml-2","inline-flex flex-auto"]},inputChip:{class:"flex-auto inline-flex pt-1 pb-1"},input:{class:"border-none outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full"},dropdown:{class:["relative","items-center inline-flex justify-center text-center align-bottom","rounded-r-md","py-2 leading-none","w-10","text-primary-contrast","bg-primary","border border-primary","focus:outline-none focus:outline-offset-0 focus:ring-1 ","hover:bg-primary-emphasis hover:border-primary-emphasis","focus:ring-primary-500 dark:focus:ring-primary-400"]},loader:{class:["text-surface-500 dark:text-surface-0/70","absolute top-[50%] right-[0.5rem] -mt-2 animate-spin"]},overlay:{class:["bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","border border-surface-300 dark:border-surface-700","rounded-md","shadow-md","overflow-auto"]},list:{class:"p-1 list-none m-0"},option:({context:e})=>({class:["relative","leading-none","m-0 px-3 py-2","first:mt-0 mt-[2px]","border-0 rounded",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected,"bg-surface-200 dark:bg-surface-600/60":e.focused&&!e.selected,"text-surface-700 dark:text-white/80":e.focused&&!e.selected,"bg-highlight":e.selected},{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.focused&&!e.selected},{"hover:bg-highlight-emphasis":e.selected},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]":e.focused&&!e.selected},"transition-shadow duration-200","cursor-pointer overflow-hidden whitespace-nowrap"]}),optionGroup:{class:["font-semibold","m-0 py-2 px-3","text-surface-400 dark:text-surface-500","cursor-auto"]},emptyMessage:{class:["leading-none","py-2 px-3","text-surface-800 dark:text-white/80","bg-transparent"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},r5={root:({props:e,state:t})=>({class:["relative",{flex:e.fluid,"inline-flex":!e.fluid},"rounded-md",{"bg-surface-0 dark:bg-surface-950":!e.disabled},"border",{"border-surface-300 dark:border-surface-600":!e.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.invalid},"transition-all","duration-200",{"hover:border-surface-400 dark:hover:border-surface-600":!e.invalid},{"outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400":t.focused},"cursor-pointer","select-none",{"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled}]}),label:({props:e})=>({class:["leading-none","flex flex-auto","w-[1%]","py-2 px-3","rounded-none","bg-transparent","border-0",{"text-surface-800 dark:text-white/80":e.modelValue,"text-surface-400 dark:text-surface-500":!e.modelValue},"placeholder:text-surface-400 dark:placeholder:text-surface-500","transition","duration-200","focus:outline-none focus:shadow-none","relative","cursor-pointer","overflow-hidden overflow-ellipsis","whitespace-nowrap","appearance-none"]}),dropdown:{class:["flex items-center justify-center","shrink-0","bg-transparent","text-surface-500","w-12","rounded-r-md"]},overlay:{class:["bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","border border-surface-300 dark:border-surface-700","rounded-md","shadow-md"]},list:{class:"flex flex-col list-none p-0 m-0 gap-[2px] min-w-full"},option:({context:e})=>({class:["rounded-[4px]","first:mt-0 mt-[2px]",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90":e.focused&&!e.active,"bg-highlight":e.focused&&e.active||e.active||!e.focused&&e.active},"transition-shadow","duration-200",{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.active,"hover:bg-highlight-emphasis":e.active},{"opacity-60 pointer-events-none cursor-default":e.disabled}]}),optionContent:{class:["relative","leading-[normal]","flex","items-center","py-2","px-3","no-underline","overflow-hidden","cursor-pointer","select-none"]},groupIcon:{class:["ml-auto"]},optionList:{class:["min-w-full","p-1","m-0","list-none","shadow-none sm:shadow-md","rounded-md","border border-surface-200 dark:border-surface-700","static sm:absolute","z-10","bg-surface-0 dark:bg-surface-900"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},o5={root:{class:["relative","inline-flex","align-bottom","w-5","h-5","cursor-pointer","select-none"]},box:({props:e,context:t})=>({class:["flex","items-center","justify-center","w-5","h-5","rounded","border",{"border-surface-300 dark:border-surface-700":!t.checked&&!e.invalid,"bg-surface-0 dark:bg-surface-950":!t.checked&&!e.invalid&&!e.disabled,"border-primary bg-primary":t.checked},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.invalid},{"peer-hover:border-surface-400 dark:peer-hover:border-surface-600":!e.disabled&&!t.checked&&!e.invalid,"peer-hover:bg-primary-emphasis peer-hover:border-primary-emphasis":!e.disabled&&t.checked,"peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400":!e.disabled,"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled},"transition-colors","duration-200"]}),input:{class:["peer","w-full ","h-full","absolute","top-0 left-0","z-10","p-0","m-0","opacity-0","rounded","outline-none","border border-surface-300 dark:border-surface-700","appearance-none","cursor-pointer"]},icon:({context:e,state:t})=>({class:["w-[0.875rem]","h-[0.875rem]",{"text-white dark:text-surface-950":e.checked,"text-primary":t.d_indeterminate},"transition-all","duration-200"]})},i5={root:({props:e})=>({class:["inline-block",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),preview:{class:["text-base leading-none","m-0","p-0","w-6 h-6","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-300 dark:border-surface-700","hover:border-surface-400 dark:hover:border-surface-600","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10","transition-colors duration-200","cursor-pointer"]},panel:({props:e})=>({class:[{"relative h-[166px] w-[193px]":e.inline,"absolute h-[166px] w-[193px]":!e.inline},"shadow-md border","bg-surface-800 dark:bg-surface-900 border-surface-600 dark:border-surface-700"]}),colorSelector:{class:["absolute top-[8px] left-[8px]","h-[150px] w-[150px]"]},color:{class:["h-[150px] w-[150px]"],style:"background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)"},colorHandle:{class:["absolute","rounded-full border border-solid","h-[10px] w-[10px]","-ml-[5px] -mt-[5px]","border-white","cursor-pointer opacity-85"]},hue:{class:["absolute top-[8px] left-[167px]","h-[150px] w-[17px]","opacity-85"],style:"background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)"},hueHandle:{class:["absolute left-0 -ml-[2px] -mt-[5px]","h-[10px] w-[21px]","border-solid border-2","cursor-pointer opacity-85"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},s5={root:({props:e})=>({class:[{flex:e.fluid,"inline-flex":!e.fluid},"max-w-full","relative"]}),pcInput:({props:e,parent:t})=>{var n;return{root:{class:["flex-auto w-[1%]","leading-none","text-surface-600 dark:text-surface-200","placeholder:text-surface-400 dark:placeholder:text-surface-500",{"bg-surface-0 dark:bg-surface-950":!e.disabled},"border",{"border-surface-300 dark:border-surface-600":!e.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.invalid},"m-0 py-2 px-3","appearance-none",{"rounded-md":!e.showIcon||e.iconDisplay=="input"},{"rounded-l-md  flex-1 pr-9":e.showIcon&&e.iconDisplay!=="input"},{"rounded-md flex-1 pr-9":e.showIcon&&e.iconDisplay==="input"},"transition-colors","duration-200",{"hover:border-surface-400 dark:hover:border-surface-600":!e.disabled&&!e.invalid,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10":!e.disabled,"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled},{filled:((n=t.instance)==null?void 0:n.$name)=="FloatLabel"&&e.modelValue!==null}]}}},dropdownIcon:{class:["absolute top-1/2 -mt-2","text-surface-600 dark:text-surface-200","right-3"]},dropdown:{class:["relative","items-center inline-flex text-center align-bottom justify-center","rounded-r-md","py-2 px-0","w-10","leading-[normal]","border border-l-0 border-surface-300 dark:border-surface-600","focus:outline-none focus:outline-offset-0 focus:ring-1","hover:bg-primary-hover hover:border-primary-hover","focus:ring-primary-500 dark:focus:ring-primary-400"]},inputIconContainer:"absolute cursor-pointer top-1/2 right-3 -mt-3",inputIcon:"inline-block text-base",panel:({props:e})=>({class:[{absolute:!e.inline,"inline-block":e.inline},{"w-auto p-3 ":!e.inline},{"min-w-[80vw] w-auto p-3 ":e.touchUI},{"p-3 min-w-full":e.inline},"border rounded-lg",{"shadow-md":!e.inline},"bg-surface-0 dark:bg-surface-900","border-surface-200 dark:border-surface-700",{"overflow-x-auto":e.inline}]}),header:{class:["font-medium","flex items-center justify-between","p-0 pb-2","m-0","border-b","rounded-t-md","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-900","border-surface-200 dark:border-surface-700"]},title:{class:["leading-7","mx-auto my-0"]},selectMonth:{class:["text-base leading-[normal]","font-medium","rounded-md","text-surface-700 dark:text-white/80","transition duration-200","p-1","m-0 mr-2","hover:text-primary-500 dark:hover:text-primary-400","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10","cursor-pointer"]},selectYear:{class:["text-base leading-[normal]","font-medium","rounded-md","text-surface-700 dark:text-white/80","transition duration-200","p-1","m-0 mr-2","hover:text-primary-500 dark:hover:text-primary-400","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10","cursor-pointer"]},table:{class:["text-base leading-[normal]","border-collapse","w-full","m-0 mt-2"]},tableHeaderCell:{class:["p-1","font-medium"]},weekHeader:{class:["leading-5","text-surface-600 dark:text-white/70","opacity-60 cursor-default"]},weekNumber:{class:["text-surface-600 dark:text-white/70","opacity-60 cursor-default"]},weekday:{class:["text-surface-500 dark:text-white/60","p-1"]},dayCell:{class:["p-1"]},weekLabelContainer:{class:["flex items-center justify-center","mx-auto","w-8 h-8","rounded-full","border-transparent border","leading-[normal]","opacity-60 cursor-default"]},dayView:"w-full",day:({context:e})=>({class:["flex items-center justify-center","mx-auto","w-8 h-8","rounded-full","border-transparent border","leading-[normal]",{"bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-white/70":e.date.today&&!e.selected&&!e.disabled,"bg-transparent text-surface-600 dark:text-white/70":!e.selected&&!e.disabled&&!e.date.today,"bg-highlight":e.selected&&!e.disabled},"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",{"hover:bg-surface-50 dark:hover:bg-surface-500/10":!e.selected&&!e.disabled},{"opacity-60 cursor-default":e.disabled,"cursor-pointer":!e.disabled}]}),monthView:{class:["mt-2"]},month:({context:e})=>({class:["inline-flex items-center justify-center","w-1/3","p-1","rounded-md",{"text-surface-600 dark:text-white/70 bg-transparent":!e.selected&&!e.disabled,"bg-highlight":e.selected&&!e.disabled},"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.selected&&!e.disabled},"cursor-pointer"]}),yearView:{class:["mt-2"]},year:({context:e})=>({class:["inline-flex items-center justify-center","w-1/2","p-1","rounded-md",{"text-surface-600 dark:text-white/70 bg-transparent":!e.selected&&!e.disabled,"bg-highlight":e.selected&&!e.disabled},"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.selected&&!e.disabled},"cursor-pointer"]}),timePicker:{class:["flex","justify-center items-center","border-t-1","border-solid border-surface-200","pt-2 mt-2"]},separatorContainer:{class:["flex","items-center","flex-col","px-2"]},separator:{class:["text-xl"]},hourPicker:{class:["flex","items-center","flex-col","px-2"]},minutePicker:{class:["flex","items-center","flex-col","px-2"]},secondPicker:{class:["flex","items-center","flex-col","px-2"]},ampmPicker:{class:["flex","items-center","flex-col","px-2"]},calendarContainer:"flex",calendar:"flex-auto border-l first:border-l-0 border-surface-200",buttonbar:{class:["flex justify-between items-center","pt-2","border-t border-surface-200 dark:border-surface-700"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},a5={root:{class:["block relative","[&>*:last-child]:text-surface-900/60 dark:[&>*:last-child]:text-white/60","[&>*:last-child]:absolute","[&>*:last-child]:top-1/2","[&>*:last-child]:-translate-y-1/2","[&>*:last-child]:left-3","[&>*:last-child]:pointer-events-none","[&>*:last-child]:transition-all","[&>*:last-child]:duration-200","[&>*:last-child]:ease","[&>*:last-child]:has-[:focus]:-top-3","[&>*:last-child]:has-[:focus]:text-sm","[&>*:last-child]:has-[.filled]:-top-3","[&>*:last-child]:has-[.filled]:text-sm"]}},l5={root:{class:["relative","[&>[data-pc-name=inputicon]]:absolute","[&>[data-pc-name=inputicon]]:top-1/2","[&>[data-pc-name=inputicon]]:-mt-2","[&>[data-pc-name=inputicon]]:text-surface-900/60 dark:[&>[data-pc-name=inputicon]]:text-white/60","[&>[data-pc-name=inputicon]:first-child]:left-3","[&>[data-pc-name=inputicon]:last-child]:right-3","[&>[data-pc-name=inputtext]:first-child]:pr-10","[&>[data-pc-name=inputtext]:last-child]:pl-10","[&>[data-pc-extend=inputicon]]:absolute","[&>[data-pc-extend=inputicon]]:top-1/2","[&>[data-pc-extend=inputicon]]:-mt-2","[&>[data-pc-extend=inputicon]]:text-surface-900/60 dark:[&>[data-pc-extend=inputicon]]:text-white/60","[&>[data-pc-extend=inputicon]:first-child]:left-3","[&>[data-pc-extend=inputicon]:last-child]:right-3"]}},c5={root:{class:["flex items-stretch","w-full"]}},u5={root:{class:["flex items-center","gap-2","[&_[data-pc-name=pcinput]]:w-10"]}},d5={root:{class:["flex items-center justify-center","first:rounded-l-md","last:rounded-r-md","border-y","last:border-r","border-l","border-r-0","p-2","min-w-[2.5rem]","bg-transparent dark:bg-surface-900","text-surface-800 dark:text-white/80","border-surface-300 dark:border-surface-700"]}},f5={root:({context:e,props:t,parent:n})=>{var r,o;return{class:["leading-none","m-0 py-2 px-3","text-surface-800 dark:text-white/80","placeholder:text-surface-400 dark:placeholder:text-surface-500",{"bg-surface-0 dark:bg-surface-950":!e.disabled},"border",{"border-surface-300 dark:border-surface-700":!t.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":t.invalid},{"hover:border-surface-400 dark:hover:border-surface-600":!e.disabled&&!t.invalid,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10":!e.disabled,"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled},{filled:((r=n.instance)==null?void 0:r.$name)=="FloatLabel"&&t.modelValue!==null&&((o=t.modelValue)==null?void 0:o.length)!==0},"rounded-md","appearance-none","transition-colors duration-200"]}}},h5={root:({props:e,parent:t})=>({class:["inline-flex","relative",{"flex-col":e.showButtons&&e.buttonLayout==="vertical"},{"flex-1 w-[1%]":t.instance.$name==="InputGroup"},{"w-full":e.fluid},{"first:rounded-l-md rounded-none last:rounded-r-md":t.instance.$name==="InputGroup"&&!e.showButtons},{"border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-700":t.instance.$name==="InputGroup"&&!e.showButtons},{"first:ml-0 -ml-px":t.instance.$name==="InputGroup"&&!e.showButtons},{"!w-16":e.showButtons&&e.buttonLayout=="vertical"}]}),pcInput:{root:({parent:e,context:t})=>{var n,r,o;return{class:["leading-none","flex-auto",{"w-[1%]":e.props.fluid},{"text-center":e.props.showButtons&&e.props.buttonLayout=="vertical"},"py-2 px-3","m-0","rounded-md",{"rounded-l-none rounded-r-none":e.props.showButtons&&e.props.buttonLayout==="horizontal"},{"rounded-none":e.props.showButtons&&e.props.buttonLayout==="vertical"},{"border-0":((n=e.instance.$parentInstance)==null?void 0:n.$name)==="InputGroup"&&!e.props.showButtons},"text-surface-800 dark:text-white/80","placeholder:text-surface-400 dark:placeholder:text-surface-500",{"bg-surface-0 dark:bg-surface-950":!t.disabled},"border",{"border-surface-300 dark:border-surface-700":!e.props.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.props.invalid},{"hover:border-primary":!e.props.invalid},"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",{"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":t.disabled},{filled:((o=(r=e.instance)==null?void 0:r.$parentInstance)==null?void 0:o.$name)==="FloatLabel"&&e.state.d_modelValue!==null},{"order-2":e.props.buttonLayout=="horizontal"||e.props.buttonLayout==="vertical"}]}}},buttonGroup:({props:e})=>({class:["absolute","flex","flex-col","top-px right-px",{"h-[calc(100%-2px)]":e.showButtons&&e.buttonLayout==="stacked"}]}),incrementButton:({props:e})=>({class:[{"flex flex-initial shrink-0":e.showButtons&&e.buttonLayout==="horizontal"},{"flex flex-auto":e.showButtons&&e.buttonLayout==="stacked"},"items-center","justify-center","text-center align-bottom","relative",{"order-3":e.showButtons&&e.buttonLayout==="horizontal"},{"order-1":e.showButtons&&e.buttonLayout==="vertical"},"text-surface-800 dark:text-surface-0","bg-transparent",{"dark:bg-surface-900":e.showButtons&&e.buttonLayout!=="stacked"},"border border-surface-300 dark:border-surface-700",{"border-0":e.showButtons&&e.buttonLayout==="stacked"},{"border-l-0":e.showButtons&&e.buttonLayout!=="stacked"&&e.buttonLayout==="horizontal"},{"border-b-0":e.showButtons&&e.buttonLayout!=="stacked"&&e.buttonLayout==="vertical"},"w-[3rem]",{"px-3 py-2":e.showButtons&&e.buttonLayout!=="stacked"},{"p-0":e.showButtons&&e.buttonLayout==="stacked"},{"w-full":e.showButtons&&e.buttonLayout==="vertical"},"rounded-md",{"rounded-md":e.showButtons&&e.buttonLayout=="stacked"},{"rounded-bl-none rounded-tl-none":e.showButtons&&e.buttonLayout==="horizontal"},{"rounded-bl-none rounded-br-none":e.showButtons&&e.buttonLayout==="vertical"},"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]","cursor-pointer overflow-hidden select-none"]}),incrementIcon:"inline-block w-4 h-4",decrementButton:({props:e})=>({class:[{"flex flex-initial shrink-0":e.showButtons&&e.buttonLayout==="horizontal"},{"flex flex-auto":e.showButtons&&e.buttonLayout==="stacked"},"items-center","justify-center","text-center align-bottom","relative",{"order-1":e.showButtons&&e.buttonLayout==="horizontal"},{"order-3":e.showButtons&&e.buttonLayout==="vertical"},"text-surface-800 dark:text-surface-0","bg-transparent",{"dark:bg-surface-900":e.showButtons&&e.buttonLayout!=="stacked"},"border border-surface-300 dark:border-surface-700",{"border-0":e.showButtons&&e.buttonLayout==="stacked"},{"border-r-0":e.showButtons&&e.buttonLayout!=="stacked"&&e.buttonLayout==="horizontal"},{"border-t-0":e.showButtons&&e.buttonLayout!=="stacked"&&e.buttonLayout==="vertical"},"w-[3rem]",{"px-3 py-2":e.showButtons&&e.buttonLayout!=="stacked"},{"p-0":e.showButtons&&e.buttonLayout==="stacked"},{"w-full":e.showButtons&&e.buttonLayout==="vertical"},"rounded-md",{"rounded-tr-none rounded-tl-none rounded-bl-none":e.showButtons&&e.buttonLayout==="stacked"},{"rounded-tr-none rounded-br-none ":e.showButtons&&e.buttonLayout==="horizontal"},{"rounded-tr-none rounded-tl-none ":e.showButtons&&e.buttonLayout==="vertical"},"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]","cursor-pointer overflow-hidden select-none"]}),decrementIcon:"inline-block w-4 h-4"},m5={root:({props:e,context:t,parent:n})=>{var r;return{class:["leading-none",{"flex-1 w-[1%]":n.instance.$name=="InputGroup"},"m-0",{"w-full":e.fluid},{"py-3 px-3.5":e.size=="large","py-1.5 px-2":e.size=="small","py-2 px-3":e.size==null},{"rounded-md":n.instance.$name!=="InputGroup"},{"first:rounded-l-md rounded-none last:rounded-r-md":n.instance.$name=="InputGroup"},{"border-0 border-y border-l last:border-r":n.instance.$name=="InputGroup"},{"first:ml-0 -ml-px":n.instance.$name=="InputGroup"&&!e.showButtons},"text-surface-800 dark:text-white/80","placeholder:text-surface-400 dark:placeholder:text-surface-500",{"bg-surface-0 dark:bg-surface-950":!t.disabled},"border",{"border-surface-900 dark:border-surface-700":!e.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.invalid},{"hover:border-surface-400 dark:hover:border-surface-600":!t.disabled&&!e.invalid,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10":!t.disabled,"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":t.disabled},{filled:((r=n.instance)==null?void 0:r.$name)=="FloatLabel"&&t.filled},"appearance-none","transition-colors duration-200"]}}},p5={root:({props:e})=>({class:[{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),range:{class:["stroke-current","stroke-surface-200 dark:stroke-surface-700","fill-none","transition duration-100 ease-in"]},value:{class:["animate-dash-frame","stroke-primary","fill-none"]},text:{class:["text-center text-xl","fill-surface-600 dark:fill-surface-200"]}},b5={root:({props:e})=>({class:["rounded-md",{"bg-surface-0 dark:bg-surface-900":!e.disabled},"text-surface-700 dark:text-white/80","border",{"border-surface-300 dark:border-surface-700":!e.invalid},{"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled},{"border-red-500 dark:border-red-400":e.invalid}]}),listContainer:"overflow-auto",list:{class:"p-1 list-none m-0 outline-none"},option:({context:e})=>({class:["relative","flex items-center","leading-none","m-0 px-3 py-2","first:mt-0 mt-[2px]","border-0 rounded",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected,"bg-surface-200 dark:bg-surface-600/60":e.focused&&!e.selected,"text-surface-700 dark:text-white/80":e.focused&&!e.selected,"bg-highlight":e.selected},{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.focused&&!e.selected},{"hover:bg-highlight-emphasis":e.selected},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]":e.focused&&!e.selected},"transition-shadow duration-200","cursor-pointer overflow-hidden whitespace-nowrap"]}),optionGroup:{class:["font-semibold","m-0 py-2 px-3","text-surface-400 dark:text-surface-500","cursor-auto"]},optionCheckIcon:"relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4",emptyMessage:{class:["leading-none","py-2 px-3","text-surface-800 dark:text-white/80","bg-transparent"]},header:{class:["pt-2 px-2 pb-0","m-0","border-b-0","rounded-tl-md","rounded-tr-md","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-900","border-surface-300 dark:border-surface-700","[&_[data-pc-name=pcfilter]]:w-full"]}},g5={root:({props:e,state:t})=>({class:["leading-none","inline-flex","relative","rounded-md",{"bg-surface-0 dark:bg-surface-950":!e.disabled},"border",{"border-surface-300 dark:border-surface-600":!e.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.invalid},"transition-all","duration-200",{"hover:border-surface-400 dark:hover:border-surface-700":!e.invalid},{"outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400":t.focused},"cursor-pointer","select-none",{"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled}]}),labelContainer:"overflow-hidden flex flex-auto cursor-pointer",label:({props:e})=>{var t,n,r,o;return{class:["text-base leading-2",{"py-2 px-3":e.display==="comma"||e.display==="chip"&&!((t=e==null?void 0:e.modelValue)!=null&&t.length),"py-1 px-1":e.display==="chip"&&((n=e==null?void 0:e.modelValue)==null?void 0:n.length)>0},{"text-surface-800 dark:text-white/80":(r=e.modelValue)==null?void 0:r.length,"text-surface-400 dark:text-surface-500":!((o=e.modelValue)!=null&&o.length)},"placeholder:text-surface-400 dark:placeholder:text-surface-500","transition duration-200","overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"]}},dropdown:{class:["flex items-center justify-center","shrink-0","bg-transparent","text-surface-500","w-12","rounded-r-md"]},overlay:{class:["bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","border border-surface-300 dark:border-surface-700","rounded-md","shadow-md","mt-[2px]"]},header:{class:["flex items-center justify-between","pt-2 px-4 pb-0 gap-2","m-0","border-b-0","rounded-tl-md","rounded-tr-md","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-900","border-surface-300 dark:border-surface-700","[&_[data-pc-name=pcfiltercontainer]]:!flex-auto","[&_[data-pc-name=pcfilter]]:w-full"]},listContainer:{class:["max-h-[200px]","overflow-auto"]},list:{class:"p-1 list-none m-0"},option:({context:e})=>({class:["relative","flex items-center","leading-none","m-0 px-3 py-2 gap-2","first:mt-0 mt-[2px]","border-0 rounded",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected,"bg-surface-200 dark:bg-surface-600/60":e.focused&&!e.selected,"text-surface-700 dark:text-white/80":e.focused&&!e.selected,"bg-highlight":e.selected},{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.focused&&!e.selected},{"hover:bg-highlight-emphasis":e.selected},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]":e.focused&&!e.selected},"transition-shadow duration-200","cursor-pointer overflow-hidden whitespace-nowrap"]}),optionGroup:{class:["font-semibold","m-0 py-2 px-3","text-surface-400 dark:text-surface-500","cursor-auto"]},emptyMessage:{class:["leading-none","py-2 px-3","text-surface-800 dark:text-white/80","bg-transparent"]},loadingIcon:{class:"text-surface-400 dark:text-surface-500 animate-spin"},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},v5={root:({props:e})=>({class:["relative",{"[&>input]:pr-10":e.toggleMask},{"flex [&>input]:w-full":e.fluid,"inline-flex":!e.fluid}]}),overlay:{class:["p-3","border","shadow-md rounded-md","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","border-surface-200 dark:border-surface-700"]},meter:{class:["overflow-hidden","relative","border-0","h-[10px]","rounded-md","mb-3","bg-surface-100 dark:bg-surface-700"]},meterLabel:({instance:e})=>{var t,n,r;return{class:["h-full",{"bg-red-500 dark:bg-red-400/50":((t=e==null?void 0:e.meter)==null?void 0:t.strength)=="weak","bg-orange-500 dark:bg-orange-400/50":((n=e==null?void 0:e.meter)==null?void 0:n.strength)=="medium","bg-green-500 dark:bg-green-400/50":((r=e==null?void 0:e.meter)==null?void 0:r.strength)=="strong"},"transition-all duration-1000 ease-in-out"]}},maskIcon:{class:["absolute top-1/2 right-3 -mt-2 z-10","text-surface-600 dark:text-white/70"]},unmaskIcon:{class:["absolute top-1/2 right-3 -mt-2 z-10","text-surface-600 dark:text-white/70"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},y5={root:{class:["relative","inline-flex","align-bottom","w-5 h-5","cursor-pointer","select-none"]},box:({props:e,context:t})=>({class:["flex justify-center items-center","w-5 h-5","border outline-transparent","rounded-full","transition duration-200 ease-in-out",{"text-surface-700 dark:text-white/80":t.checked,"border-surface-300 dark:border-surface-700":!t.checked&&!e.invalid,"border-primary bg-primary":t.checked&&!e.disabled},{"border-red-500 dark:border-red-400":e.invalid},{"peer-hover:border-surface-400 dark:peer-hover:border-surface-400":!e.disabled&&!e.invalid&&!t.checked,"peer-hover:border-primary-emphasis":!e.disabled&&!t.checked,"peer-hover:[&>*:first-child]:bg-primary-600 dark:peer-hover:[&>*:first-child]:bg-primary-300":!e.disabled&&!t.checked,"peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400":!e.disabled,"bg-surface-200 [&>*:first-child]:bg-surface-600 dark:bg-surface-700 dark:[&>*:first-child]:bg-surface-400 border-surface-300 dark:border-surface-700 select-none pointer-events-none cursor-default":e.disabled}]}),input:{class:["peer","w-full ","h-full","absolute","top-0 left-0","z-10","p-0","m-0","opacity-0","rounded-md","outline-none","border-1 border-surface-200 dark:border-surface-700","appearance-none","cursor-pointer"]},icon:({context:e})=>({class:["block","rounded-full","w-3 h-3",{"bg-surface-0 dark:bg-surface-900":e.checked,"bg-primary":!e.checked,"backface-hidden invisible scale-[0.1]":!e.checked,"transform visible translate-z-0 scale-[1,1]":e.checked},"transition duration-200"]})},w5={root:({props:e})=>({class:["relative","flex items-center","gap-1",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),option:({props:e,context:t})=>({class:["inline-flex items-center",{"outline-none ring-1 ring-primary-500/50 dark:ring-primary-500":t.focused},{"cursor-pointer":!e.readonly,"cursor-default":e.readonly}]}),offIcon:({props:e})=>({class:["w-4 h-4","text-surface-700 dark:text-surface-0/80",{"hover:text-primary-500 dark:hover:text-primary-400":!e.readonly},"transition duration-200 ease-in"]}),onIcon:({props:e})=>({class:["w-4 h-4","text-primary",{"hover:text-primary-600 dark:hover:text-primary-300":!e.readonly},"transition duration-200 ease-in"]})},k5={root:({props:e,state:t,parent:n})=>({class:["inline-flex","relative",{"rounded-md":n.instance.$name!=="InputGroup"},{"first:rounded-l-md rounded-none last:rounded-r-md":n.instance.$name=="InputGroup"},{"border-0 border-y border-l last:border-r":n.instance.$name=="InputGroup"},{"first:ml-0 ml-[-1px]":n.instance.$name=="InputGroup"&&!e.showButtons},{"bg-surface-0 dark:bg-surface-950":!e.disabled},"border",{"dark:border-surface-700":n.instance.$name!="InputGroup"},{"dark:border-surface-600":n.instance.$name=="InputGroup"},{"border-surface-300 dark:border-surface-600":!e.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.invalid},"transition-all","duration-200",{"hover:border-surface-400 dark:hover:border-surface-600":!e.invalid},{"outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10":t.focused},"cursor-pointer","select-none",{"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled}]}),label:({props:e,parent:t})=>{var n;return{class:["leading-[normal]","block","flex-auto","bg-transparent","border-0",{"text-surface-800 dark:text-white/80":e.modelValue!=null,"text-surface-400 dark:text-surface-500":e.modelValue==null},"placeholder:text-surface-400 dark:placeholder:text-surface-500","w-[1%]","py-2 px-3",{"pr-7":e.showClear},"rounded-none","transition","duration-200","focus:outline-none focus:shadow-none",{filled:((n=t.instance)==null?void 0:n.$name)=="FloatLabel"&&e.modelValue!==null},"relative","cursor-pointer","overflow-hidden overflow-ellipsis","whitespace-nowrap","appearance-none"]}},dropdown:{class:["flex items-center justify-center","shrink-0","bg-transparent","text-surface-500","w-12","rounded-r-md"]},overlay:{class:["bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","border border-surface-300 dark:border-surface-700","rounded-md","shadow-md"]},listContainer:{class:["max-h-[200px]","overflow-auto"]},list:{class:"p-1 list-none m-0"},option:({context:e})=>({class:["relative","flex items-center","leading-none","m-0 px-3 py-2","first:mt-0 mt-[2px]","border-0 rounded",{"text-surface-700 dark:text-white/80":!e.focused&&!e.selected,"bg-surface-200 dark:bg-surface-600/60":e.focused&&!e.selected,"text-surface-700 dark:text-white/80":e.focused&&!e.selected,"bg-highlight":e.selected},{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.focused&&!e.selected},{"hover:bg-highlight-emphasis":e.selected},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]":e.focused&&!e.selected},"transition-shadow duration-200","cursor-pointer overflow-hidden whitespace-nowrap"]}),optionGroup:{class:["font-semibold","m-0 py-2 px-3","text-surface-400 dark:text-surface-500","cursor-auto"]},optionCheckIcon:"relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4",optionBlankIcon:"w-4 h-4",emptyMessage:{class:["leading-none","py-2 px-3","text-surface-800 dark:text-white/80","bg-transparent"]},header:{class:["pt-2 px-2 pb-0","m-0","border-b-0","rounded-tl-md","rounded-tr-md","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-900","border-surface-300 dark:border-surface-700"]},clearIcon:{class:["text-surface-400 dark:text-surface-500","absolute","top-1/2","right-12","-mt-2"]},loadingIcon:{class:"text-surface-400 dark:text-surface-500 animate-spin"},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},x5={root:({props:e})=>({class:["inline-flex select-none align-bottom outline-transparent","border rounded-md [&>button]:rounded-none [&>button]:border-none","[&>button:first-child]:border-r-none [&>button:first-child]:rounded-r-none [&>button:first-child]:rounded-tl-md [&>button:first-child]:rounded-bl-md","[&>button:last-child]:border-l-none [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-tr-md [&>button:last-child]:rounded-br-md",{"border-red-500 dark:border-red-400":e.invalid,"border-transparent":!e.invalid}]})},_5={root:({props:e})=>({class:["relative",{"h-[3px]":e.orientation=="horizontal","w-[3px]":e.orientation=="vertical"},"border-0","rounded-md","bg-surface-200 dark:bg-surface-800",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),range:({props:e})=>({class:["block absolute",{"top-0 left-0":e.orientation=="horizontal","bottom-0 left-0":e.orientation=="vertical"},{"h-full":e.orientation=="horizontal","w-full":e.orientation=="vertical"},"rounded-md","bg-primary"]}),handle:({props:e})=>({class:["flex items-center justify-center","h-[20px]","w-[20px]",{"top-[50%] -mt-[10px] -ml-[10px]":e.orientation=="horizontal","left-[50%] -mb-[10px] -ml-[10px]":e.orientation=="vertical"},"rounded-full","before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md","bg-surface-200 dark:bg-surface-800","focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1","ring-primary-500 dark:ring-primary-400","transition duration-200","cursor-grab","touch-action-none"]}),startHandler:({props:e})=>({class:["flex items-center justify-center","h-[20px]","w-[20px]",{"top-[50%] -mt-[10px] -ml-[10px]":e.orientation=="horizontal","left-[50%] -mb-[10px] -ml-[10px]":e.orientation=="vertical"},"rounded-full","before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md","bg-surface-200 dark:bg-surface-800","focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1","ring-primary-500 dark:ring-primary-400","transition duration-200","cursor-grab","touch-action-none"]}),endHandler:({props:e})=>({class:["flex items-center justify-center","h-[20px]","w-[20px]",{"top-[50%] -mt-[10px] -ml-[10px]":e.orientation=="horizontal","left-[50%] -mb-[10px] -ml-[10px]":e.orientation=="vertical"},"rounded-full","before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md","bg-surface-200 dark:bg-surface-800","focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1","ring-primary-500 dark:ring-primary-400","transition duration-200","cursor-grab","touch-action-none"]})},I5={root:({context:e,props:t,parent:n})=>{var r,o;return{class:["leading-none","m-0","py-2 px-3","rounded-md","text-surface-800 dark:text-white/80","placeholder:text-surface-400 dark:placeholder:text-surface-500",{"bg-surface-0 dark:bg-surface-950":!e.disabled},"border",{"border-surface-300 dark:border-surface-600":!t.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":t.invalid},{"hover:border-surface-400 dark:hover:border-surface-600":!e.disabled&&!t.invalid,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10":!e.disabled,"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled},{filled:((r=n.instance)==null?void 0:r.$name)=="FloatLabel"&&t.modelValue!==null&&((o=t.modelValue)==null?void 0:o.length)!==0},"appearance-none","transition-colors duration-200"]}}},S5={root:({props:e,context:t})=>({class:["relative","flex items-center justify-center","py-2 px-4","rounded-md border","bg-surface-100 dark:bg-surface-950",{"text-surface-600 dark:text-white/60 before:bg-transparent":!t.active,"text-surface-800 dark:text-white/80 before:bg-surface-0 dark:before:bg-surface-800":t.active},{"hover:text-surface-800 dark:hover:text-white/80":!e.disabled&&!e.modelValue,"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400":!e.disabled},{"border-red-500 dark:border-red-400":e.invalid,"border-surface-100 dark:border-surface-950":!e.invalid},"before:absolute before:left-1 before:top-1 before:w-[calc(100%-0.5rem)] before:h-[calc(100%-0.5rem)] before:rounded-[4px] before:z-0","transition-all duration-200",{"cursor-pointer":!e.disabled,"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),content:"relative items-center inline-flex justify-center gap-2",label:"font-medium leading-[normal] text-center w-full z-10 relative",icon:"relative z-10 mr-2"},C5={root:({props:e})=>({class:["inline-block relative","w-10 h-6","rounded-2xl",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),slider:({props:e})=>({class:["absolute top-0 left-0 right-0 bottom-0",{"before:transform before:translate-x-4":e.modelValue==e.trueValue},"rounded-2xl","before:absolute before:top-1/2 before:left-1","before:-mt-2","before:h-4 before:w-4","before:rounded-full","before:duration-200","before:bg-surface-0 before:dark:bg-surface-500","border",{"bg-surface-300 dark:bg-surface-800":e.modelValue!=e.trueValue,"bg-primary":e.modelValue==e.trueValue,"before:dark:bg-surface-950":e.modelValue==e.trueValue,"border-transparent":!e.invalid},{"border-red-500 dark:border-red-400":e.invalid},{"peer-hover:bg-surface-400 dark:peer-hover:bg-surface-700":e.modelValue!=e.trueValue&&!e.disabled&&!e.invalid},{"peer-hover:bg-primary-hover":e.modelValue==e.trueValue&&!e.disabled&&!e.invalid},"peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400","transition-colors duration-200","cursor-pointer"]}),input:{class:["peer","w-full ","h-full","absolute","top-0 left-0","z-10","p-0","m-0","opacity-0","rounded-2xl","outline-none","appearance-none","cursor-pointer"]}},E5={root:({props:e,state:t})=>({class:["inline-flex","relative","rounded-md",{"bg-surface-0 dark:bg-surface-950":!e.disabled},"border",{"border-surface-300 dark:border-surface-700":!e.invalid},"invalid:focus:ring-red-200","invalid:hover:border-red-500",{"border-red-500 dark:border-red-400":e.invalid},"transition-all","duration-200",{"hover:border-surface-400 dark:hover:border-surface-600":!e.invalid},{"outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10":t.focused},"cursor-pointer","select-none",{"bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":e.disabled}]}),labelContainer:{class:["overflow-hidden flex flex-auto cursor-pointer"]},label:{class:["block leading-[normal]","py-2 px-3","text-surface-800 dark:text-white/80","transition duration-200","overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"]},dropdown:{class:["flex items-center justify-center","shrink-0","bg-transparent","text-surface-500","w-12","rounded-r-md"]},panel:{class:["bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","border border-surface-300 dark:border-surface-700","rounded-md","shadow-md"]},treeContainer:{class:["max-h-[200px]","overflow-auto"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},T5={root:({props:e,context:t,parent:n,instance:r})=>({class:["relative","items-center inline-flex text-center align-bottom justify-center",{"flex-col":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label},"leading-[normal]",{"px-3 py-2":e.size===null,"text-sm py-1.5 px-3":e.size==="small","text-xl py-3 px-4":e.size==="large"},{"gap-2":e.label!==null},{"w-10 px-0 py-2":e.label==null&&e.icon!==null},{"w-10 px-0 gap-0":r.hasIcon&&!e.label&&!e.badge,"rounded-[50%] h-10 [&>[data-pc-section=label]]:w-0 [&>[data-pc-section=label]]:invisible":r.hasIcon&&!e.label&&!e.badge&&e.rounded},{"shadow-lg":e.raised},{"rounded-md":!e.rounded,"rounded-full":e.rounded},{"rounded-none first:rounded-l-md last:rounded-r-md":n.instance.$name=="InputGroup"},{"text-primary-600 bg-transparent border-transparent":e.link},{"text-white bg-gray-500 border border-gray-500":e.plain&&!e.outlined&&!e.text},{"text-surface-500":e.plain&&e.text},{"text-surface-500 border border-gray-500":e.plain&&e.outlined},{"bg-transparent border-transparent":e.text&&!e.plain},{"bg-transparent border":e.outlined&&!e.plain},{"text-primary-contrast":!e.link&&e.severity===null&&!e.text&&!e.outlined&&!e.plain,"bg-primary":!e.link&&e.severity===null&&!e.text&&!e.outlined&&!e.plain,"border border-primary":!e.link&&e.severity===null&&!e.text&&!e.outlined&&!e.plain},{"text-primary":e.text&&e.severity===null&&!e.plain},{"text-primary border border-primary":e.outlined&&e.severity===null&&!e.plain},{"text-surface-900 dark:text-white":e.severity==="secondary"&&!e.text&&!e.outlined&&!e.plain,"bg-surface-100 dark:bg-surface-700":e.severity==="secondary"&&!e.text&&!e.outlined&&!e.plain,"border border-surface-100 dark:border-surface-700":e.severity==="secondary"&&!e.text&&!e.outlined&&!e.plain},{"text-surface-500 dark:text-surface-300":e.text&&e.severity==="secondary"&&!e.plain},{"text-surface-500 dark:text-surface-300 border border-surface-500 hover:bg-surface-300/10":e.outlined&&e.severity==="secondary"&&!e.plain},{"text-white dark:text-green-900":e.severity==="success"&&!e.text&&!e.outlined&&!e.plain,"bg-green-500 dark:bg-green-400":e.severity==="success"&&!e.text&&!e.outlined&&!e.plain,"border border-green-500 dark:border-green-400":e.severity==="success"&&!e.text&&!e.outlined&&!e.plain},{"text-green-500 dark:text-green-400":e.text&&e.severity==="success"&&!e.plain},{"text-green-500 border border-green-500 hover:bg-green-300/10":e.outlined&&e.severity==="success"&&!e.plain},{"text-white dark:text-surface-900":e.severity==="info"&&!e.text&&!e.outlined&&!e.plain,"bg-blue-500 dark:bg-blue-400":e.severity==="info"&&!e.text&&!e.outlined&&!e.plain,"border border-blue-500 dark:border-blue-400":e.severity==="info"&&!e.text&&!e.outlined&&!e.plain},{"text-blue-500 dark:text-blue-400":e.text&&e.severity==="info"&&!e.plain},{"text-blue-500 border border-blue-500 hover:bg-blue-300/10 ":e.outlined&&e.severity==="info"&&!e.plain},{"text-white dark:text-surface-900":e.severity==="warn"&&!e.text&&!e.outlined&&!e.plain,"bg-orange-500 dark:bg-orange-400":e.severity==="warn"&&!e.text&&!e.outlined&&!e.plain,"border border-orange-500 dark:border-orange-400":e.severity==="warn"&&!e.text&&!e.outlined&&!e.plain},{"text-orange-500 dark:text-orange-400":e.text&&e.severity==="warn"&&!e.plain},{"text-orange-500 border border-orange-500 hover:bg-orange-300/10":e.outlined&&e.severity==="warn"&&!e.plain},{"text-white dark:text-surface-900":e.severity==="help"&&!e.text&&!e.outlined&&!e.plain,"bg-purple-500 dark:bg-purple-400":e.severity==="help"&&!e.text&&!e.outlined&&!e.plain,"border border-purple-500 dark:border-purple-400":e.severity==="help"&&!e.text&&!e.outlined&&!e.plain},{"text-purple-500 dark:text-purple-400":e.text&&e.severity==="help"&&!e.plain},{"text-purple-500 border border-purple-500 hover:bg-purple-300/10":e.outlined&&e.severity==="help"&&!e.plain},{"text-white dark:text-surface-900":e.severity==="danger"&&!e.text&&!e.outlined&&!e.plain,"bg-red-500 dark:bg-red-400":e.severity==="danger"&&!e.text&&!e.outlined&&!e.plain,"border border-red-500 dark:border-red-400":e.severity==="danger"&&!e.text&&!e.outlined&&!e.plain},{"text-red-500 dark:text-red-400":e.text&&e.severity==="danger"&&!e.plain},{"text-red-500 border border-red-500 hover:bg-red-300/10":e.outlined&&e.severity==="danger"&&!e.plain},{"text-white dark:text-surface-900":e.severity==="contrast"&&!e.text&&!e.outlined&&!e.plain,"bg-surface-900 dark:bg-surface-0":e.severity==="contrast"&&!e.text&&!e.outlined&&!e.plain,"border border-surface-900 dark:border-surface-0":e.severity==="contrast"&&!e.text&&!e.outlined&&!e.plain},{"text-surface-900 dark:text-surface-0":e.text&&e.severity==="contrast"&&!e.plain},{"text-surface-900 dark:text-surface-0 border border-surface-900 dark:border-surface-0":e.outlined&&e.severity==="contrast"&&!e.plain},"focus:outline-none focus:outline-offset-0 focus:ring-1",{"focus:ring-primary":e.link},{"hover:bg-gray-600 hover:border-gray-600":e.plain&&!e.outlined&&!e.text},{"hover:bg-surface-300/10":e.plain&&(e.text||e.outlined)},{"hover:bg-primary-emphasis hover:border-primary-emphasis":!e.link&&e.severity===null&&!e.text&&!e.outlined&&!e.plain},{"focus:ring-primary":e.severity===null},{"hover:bg-primary-300/10":(e.text||e.outlined)&&e.severity===null&&!e.plain},{"hover:bg-surface-200 dark:hover:bg-surface-600 hover:border-surface-200 dark:hover:border-surface-600":e.severity==="secondary"&&!e.text&&!e.outlined&&!e.plain},{"focus:ring-surface-500 dark:focus:ring-surface-400":e.severity==="secondary"},{"hover:bg-surface-300/10":(e.text||e.outlined)&&e.severity==="secondary"&&!e.plain},{"hover:bg-green-600 dark:hover:bg-green-300 hover:border-green-600 dark:hover:border-green-300":e.severity==="success"&&!e.text&&!e.outlined&&!e.plain},{"focus:ring-green-500 dark:focus:ring-green-400":e.severity==="success"},{"hover:bg-green-300/10":(e.text||e.outlined)&&e.severity==="success"&&!e.plain},{"hover:bg-blue-600 dark:hover:bg-blue-300 hover:border-blue-600 dark:hover:border-blue-300":e.severity==="info"&&!e.text&&!e.outlined&&!e.plain},{"focus:ring-blue-500 dark:focus:ring-blue-400":e.severity==="info"},{"hover:bg-blue-300/10":(e.text||e.outlined)&&e.severity==="info"&&!e.plain},{"hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300":e.severity==="warn"&&!e.text&&!e.outlined&&!e.plain},{"focus:ring-orange-500 dark:focus:ring-orange-400":e.severity==="warn"},{"hover:bg-orange-300/10":(e.text||e.outlined)&&e.severity==="warn"&&!e.plain},{"hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300":e.severity==="help"&&!e.text&&!e.outlined&&!e.plain},{"focus:ring-purple-500 dark:focus:ring-purple-400":e.severity==="help"},{"hover:bg-purple-300/10":(e.text||e.outlined)&&e.severity==="help"&&!e.plain},{"hover:bg-red-600 dark:hover:bg-red-300 hover:border-red-600 dark:hover:border-red-300":e.severity==="danger"&&!e.text&&!e.outlined&&!e.plain},{"focus:ring-red-500 dark:focus:ring-red-400":e.severity==="danger"},{"hover:bg-red-300/10":(e.text||e.outlined)&&e.severity==="danger"&&!e.plain},{"hover:bg-surface-800 dark:hover:bg-surface-100 hover:border-surface-800 dark:hover:border-surface-100":e.severity==="contrast"&&!e.text&&!e.outlined&&!e.plain},{"focus:ring-surface-500 dark:focus:ring-surface-400":e.severity==="contrast"},{"hover:bg-surface-900/10 dark:hover:bg-[rgba(255,255,255,0.03)]":(e.text||e.outlined)&&e.severity==="contrast"&&!e.plain},{"opacity-60 pointer-events-none cursor-default":t.disabled},"transition duration-200 ease-in-out","cursor-pointer overflow-hidden select-none","[&>[data-pc-name=badge]]:min-w-4 [&>[data-pc-name=badge]]:h-4 [&>[data-pc-name=badge]]:leading-4"]}),label:({props:e})=>({class:["duration-200","font-medium",{"hover:underline":e.link},{"flex-1":e.label!==null,"invisible w-0":e.label==null}]}),icon:({props:e})=>({class:["text-base leading-4","mx-0",{"mr-2":e.iconPos=="left"&&e.label!=null,"ml-2 order-1":e.iconPos=="right"&&e.label!=null,"order-2":e.iconPos=="bottom"&&e.label!=null}]}),loadingIcon:({props:e})=>({class:["h-4 w-4","mx-0",{"mr-2":e.iconPos=="left"&&e.label!=null,"ml-2 order-1":e.iconPos=="right"&&e.label!=null,"mb-2":e.iconPos=="top"&&e.label!=null,"mt-2":e.iconPos=="bottom"&&e.label!=null},"animate-spin"]}),badge:({props:e})=>({class:[{"ml-2 w-4 h-4 leading-none flex items-center justify-center":e.badge}]})},P5={root:({state:e})=>({class:["static flex gap-2",{"[&_[data-pc-name=pcbutton]]:rotate-45":e.d_visible,"[&_[data-pc-name=pcbutton]]:rotate-0":!e.d_visible}]}),list:{class:["m-0 p-0","list-none flex items-center justify-center","transition delay-200","z-20"]},item:({props:e,context:t})=>({class:["transform transition-transform duration-200 ease-out transition-opacity duration-800",t.hidden?"opacity-0 scale-0":"opacity-100 scale-100",{"my-1 first:mb-2":e.direction=="up"&&e.type=="linear","my-1 first:mt-2":e.direction=="down"&&e.type=="linear","mx-1 first:mr-2":e.direction=="left"&&e.type=="linear","mx-1 first:ml-2":e.direction=="right"&&e.type=="linear"},{absolute:e.type!=="linear"}]}),mask:({state:e})=>({class:["absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0",{"opacity-0 pointer-events-none":!e.d_visible,"opacity-100 transition-opacity duration-400 ease-in-out":e.d_visible}]})},O5={root:({props:e})=>({class:["inline-flex","relative","rounded-md",{"shadow-lg":e.raised},"[&>[data-pc-name=pcbutton]]:rounded-tr-none","[&>[data-pc-name=pcbutton]]:rounded-br-none","[&>[data-pc-name=pcdropdown]]:rounded-tl-none","[&>[data-pc-name=pcdropdown]]:rounded-bl-none","[&>[data-pc-name=pcmenu]]:min-w-full"]})},A5={root:({props:e})=>({class:["relative",{"flex flex-col":e.scrollable&&e.scrollHeight==="flex"},{"h-full":e.scrollable&&e.scrollHeight==="flex"}]}),mask:{class:["absolute","top-0 left-0","z-20","flex items-center justify-center","w-full h-full","bg-surface-100/40 dark:bg-surface-900/40","transition duration-200"]},loadingIcon:{class:"w-8 h-8 animate-spin"},tableContainer:({props:e})=>({class:[{relative:e.scrollable,"flex flex-col grow":e.scrollable&&e.scrollHeight==="flex"},{"h-full":e.scrollable&&e.scrollHeight==="flex"}]}),header:({props:e})=>({class:["font-bold",e.showGridlines?"border-x border-t border-b-0":"border-y border-x-0","p-4","bg-surface-0 dark:bg-surface-900","border-surface-200 dark:border-surface-700","text-surface-700 dark:text-white/80"]}),table:{class:"w-full border-spacing-0 border-separate"},thead:({context:e})=>({class:[{"bg-surface-0 dark:bg-surface-900 top-0 z-40 sticky":e.scrollable}]}),tbody:({instance:e,context:t})=>({class:[{"sticky z-20":e.frozenRow&&t.scrollable},"bg-surface-0 dark:bg-surface-900"]}),tfoot:({context:e})=>({class:[{"bg-surface-0 bottom-0 z-0":e.scrollable}]}),footer:{class:["font-bold","border-t-0 border-b border-x-0","p-4","bg-surface-0 dark:bg-surface-900","border-surface-200 dark:border-surface-700","text-surface-700 dark:text-white/80"]},column:{headerCell:({context:e,props:t})=>({class:["font-semibold","leading-[normal]",{"sticky z-20 border-b":t.frozen||t.frozen===""},{relative:e.resizable},"text-left",{"first:border-l border-y border-r":e==null?void 0:e.showGridlines},"border-0 border-b border-solid",(e==null?void 0:e.size)==="small"?"py-[0.375rem] px-2":(e==null?void 0:e.size)==="large"?"py-[0.9375rem] px-5":"py-3 px-4",(t.sortable===""||t.sortable)&&e.sorted?"bg-highlight":"bg-surface-50 text-surface-700 dark:text-white/80 dark:bg-surface-800","border-surface-200 dark:border-surface-700 ",{"hover:bg-surface-100 dark:hover:bg-surface-800/50":(t.sortable===""||t.sortable)&&!(e!=null&&e.sorted)},"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",{"transition duration-200":t.sortable===""||t.sortable},{"cursor-pointer":t.sortable===""||t.sortable},{"overflow-hidden whitespace-nowrap border-y bg-clip-padding":e==null?void 0:e.resizable}]}),columnHeaderContent:{class:"flex items-center gap-2"},sort:({context:e})=>({class:[e.sorted?"text-primary-500":"text-surface-700",e.sorted?"dark:text-primary-400":"dark:text-white/80"]}),bodyCell:({props:e,context:t,state:n,parent:r})=>{var o,i,s;return{class:["leading-[normal]",{"sticky box-border border-b":r.instance.frozenRow},{"sticky box-border border-b z-20":e.frozen||e.frozen===""},"text-left","border-0 border-b border-solid",{"first:border-l border-r border-b":t==null?void 0:t.showGridlines},{"bg-surface-0 dark:bg-surface-900":r.instance.frozenRow||e.frozen||e.frozen===""},{"py-[0.375rem] px-2":(t==null?void 0:t.size)==="small"&&!n.d_editing},{"py-[0.9375rem] px-5":(t==null?void 0:t.size)==="large"&&!n.d_editing},{"py-3 px-4":(t==null?void 0:t.size)!=="large"&&(t==null?void 0:t.size)!=="small"&&!n.d_editing},{"py-[0.6rem] px-2":n.d_editing},"border-surface-200 dark:border-surface-700",{"overflow-hidden whitespace-nowrap border-y bg-clip-padding":(s=(i=(o=r.instance)==null?void 0:o.$parentInstance)==null?void 0:i.$parentInstance)==null?void 0:s.resizableColumns}]}},footerCell:({context:e})=>({class:["font-bold","text-left","border-0 border-b border-solid",{"border-x border-y":e==null?void 0:e.showGridlines},(e==null?void 0:e.size)==="small"?"p-2":(e==null?void 0:e.size)==="large"?"p-5":"p-4","border-surface-200 dark:border-surface-700","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-900"]}),sortIcon:({context:e})=>({class:["ml-2",e.sorted?"text-inherit":"text-surface-700 dark:text-white/70"]}),columnFilter:{class:"inline-flex items-center ml-auto font-normal"},filterOverlay:{class:["flex flex-col gap-2","absolute top-0 left-0","border-0 dark:border","rounded-md","shadow-md","min-w-[12.5rem]","bg-surface-0 dark:bg-surface-900","text-surface-800 dark:text-white/80","dark:border-surface-700"]},filterConstraintList:{class:"m-0 p-0 py-3 list-none"},filterConstraint:({context:e})=>({class:["font-normal","leading-none","relative","border-0","rounded-none","m-0","py-3 px-5",{"text-surface-700 dark:text-white/80":!(e!=null&&e.highlighted)},{"bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80":!(e!=null&&e.highlighted)},{"bg-highlight":e==null?void 0:e.highlighted},{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!(e!=null&&e.highlighted)},{"hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]":!(e!=null&&e.highlighted)},"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400","transition-shadow","duration-200","cursor-pointer","overflow-hidden","whitespace-nowrap"]}),filterOperator:{class:["rounded-t-md","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-700","[&>[data-pc-name=pcfilteroperatordropdown]]:w-full"]},filter:({instance:e})=>({class:[{"flex items-center w-full gap-2":e.display==="row","inline-flex ml-auto":e.display==="menu"}]}),filterRule:"flex flex-col gap-2",filterButtonbar:"flex items-center justify-between p-0",filterAddButtonContainer:"[&>[data-pc-name=pcfilteraddrulebutton]]:w-full",rowToggleButton:{class:["relative","inline-flex items-center justify-center","text-left","m-0 p-0","w-8 h-8","border-0 rounded-full","text-surface-500 dark:text-white/70","bg-transparent","focus-visible:outline-none focus-visible:outline-offset-0","focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400","transition duration-200","overflow-hidden","cursor-pointer select-none"]},columnResizer:{class:["block","absolute top-0 right-0","w-2 h-full","m-0 p-0","border border-transparent","cursor-col-resize"]},transition:{class:"p-4 flex flex-col gap-2",enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},bodyRow:({context:e,props:t})=>({class:["dark:text-white/80",{"bg-highlight":e.selected&&t.highlightOnSelect},{"bg-surface-0 text-surface-600 dark:bg-surface-900":!e.selected},{"font-bold bg-surface-0 dark:bg-surface-900 z-20":t.frozenRow},{"odd:bg-surface-0 odd:text-surface-600 dark:odd:bg-surface-900 even:bg-surface-50 even:text-surface-600 dark:even:bg-surface-800/50":e.stripedRows},{"hover:bg-surface-300/20 dark:hover:bg-surface-800/50 hover:text-surface-600":t.selectionMode&&!e.selected},{"transition duration-200":t.selectionMode&&!e.selected||t.rowHover},{"cursor-pointer":t.selectionMode}]}),rowExpansion:{class:"bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-white/80"},rowGroupHeader:{class:["sticky z-20","bg-surface-0 text-surface-600 dark:text-white/70","dark:bg-surface-900"]},rowGroupFooter:{class:["sticky z-20","bg-surface-0 text-surface-600 dark:text-white/70","dark:bg-surface-900"]},rowToggleButton:{class:["relative","inline-flex items-center justify-center","text-left","m-0 p-0","w-8 h-8","border-0 rounded-full","text-surface-500 dark:text-white/70","bg-transparent","focus-visible:outline-none focus-visible:outline-offset-0","focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400","transition duration-200","overflow-hidden","cursor-pointer select-none"]},rowToggleIcon:{class:"inline-block w-4 h-4"},columnResizeIndicator:{class:"absolute hidden w-[2px] z-20 bg-primary"}},L5={content:{class:["p-0","border-0","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-900"]},header:{class:["font-semibold","py-3 px-4","text-surface-800 dark:text-white/80","bg-surface-00 dark:bg-surface-900","border-b border-surface-200 dark:border-surface-700"]}},R5={root:"flex",controls:{class:["flex xl:flex-col justify-center gap-2","p-[1.125rem]"]},container:{class:["flex-auto","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-200 dark:border-surface-700","outline-none"]}},$5={table:{class:["mx-auto my-0","border-spacing-0 border-separate"]},cell:{class:["text-center align-top","py-0 px-3"]},node:({context:e})=>({class:["relative inline-block","py-3 px-4","border","rounded-md","border-surface-200 dark:border-surface-700",{"text-surface-600 dark:text-white/80":!(e!=null&&e.selected),"bg-surface-0 dark:bg-surface-900":!(e!=null&&e.selected),"bg-highlight":e==null?void 0:e.selected},{"hover:bg-surface-100 dark:hover:bg-surface-800":(e==null?void 0:e.selectable)&&!(e!=null&&e.selected),"hover:bg-highlight-emphasis":(e==null?void 0:e.selectable)&&(e==null?void 0:e.selected)},{"cursor-pointer":e==null?void 0:e.selectable}]}),lineCell:{class:["text-center align-top","py-0 px-3"]},connectorDown:{class:["mx-auto my-0","w-px h-[20px]","bg-surface-200 dark:bg-surface-700"]},connectorLeft:({context:e})=>({class:["text-center align-top","py-0 px-3","rounded-none border-r",{"border-t":e.lineTop},"border-surface-200 dark:border-surface-700"]}),connectorRight:({context:e})=>({class:["text-center align-top","py-0 px-3","rounded-none",{"border-t border-surface-200 dark:border-surface-700":e.lineTop}]}),nodeCell:{class:"text-center align-top py-0 px-3"},nodeToggleButton:{class:["absolute bottom-[-0.75rem] left-2/4 -ml-3","z-20","flex items-center justify-center","w-6 h-6","rounded-full","border border-surface-200 dark:border-surface-700","bg-inherit text-inherit","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","cursor-pointer no-underline select-none"]},nodeToggleButtonIcon:{class:["static inline-block","w-4 h-4"]}},D5={root:{class:["flex items-center justify-center flex-wrap","px-4 py-2","border-0 rounded-md","bg-surface-0 dark:bg-surface-900","text-surface-500 dark:text-white/60"]},first:({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full","min-w-[2.5rem] h-10 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),prev:({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full","min-w-[2.5rem] h-10 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),next:({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full","min-w-[2.5rem] h-10 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),last:({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full","min-w-[2.5rem] h-10 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),page:({context:e})=>({class:["relative","inline-flex items-center justify-center","border-0 rounded-full","min-w-[2.5rem] h-10 m-[0.143rem]","leading-none","text-surface-500 dark:text-white/60",{"hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.disabled,"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400":!e.disabled},"transition duration-200","user-none overflow-hidden",{"cursor-default pointer-events-none opacity-60":e.disabled}]}),contentStart:"mr-auto",contentEnd:"ml-auto"},N5={root:"flex [&_[data-pc-name=pclist]]:h-full",sourceControls:{class:["flex xl:flex-col justify-center gap-2","p-[1.125rem]"]},sourceListContainer:{class:["grow shrink basis-2/4","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-200 dark:border-surface-700","outline-none"]},transferControls:{class:["flex xl:flex-col justify-center gap-2","p-[1.125rem]"]},targetListContainer:{class:["grow shrink basis-2/4","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-200 dark:border-surface-700","outline-none"]},targetControls:{class:["flex xl:flex-col justify-center gap-2","p-[1.125rem]"]},transition:{enterFromClass:"!transition-none",enterActiveClass:"!transition-none",leaveActiveClass:"!transition-none",leaveToClass:"!transition-none"}},M5={root:{class:["p-4","rounded-md","border-none","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","[&_[data-pc-name=pcfilter]]:w-full"]},wrapper:{class:["overflow-auto"]},container:{class:["m-0 p-0","list-none overflow-auto"]},node:{class:["p-0 my-[2px] mx-0 first:mt-0","rounded-md","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10"]},nodeContent:({context:e,props:t})=>({class:["flex items-center","rounded-md","py-1 px-2 gap-2",e.selected?"bg-highlight text-primary-600 dark:text-white":"bg-transparent text-surface-600 dark:text-white/70",{"hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]":(t.selectionMode=="single"||t.selectionMode=="multiple")&&!e.selected},"transition-shadow duration-200",{"cursor-pointer select-none":t.selectionMode=="single"||t.selectionMode=="multiple"}]}),nodeToggleButton:({context:e})=>({class:["inline-flex items-center justify-center","border-0 rounded-full","w-7 h-7","bg-transparent",{"text-surface-600 dark:text-white/70":!e.selected,"text-primary-600 dark:text-white":e.selected,invisible:e.leaf},"hover:bg-surface-200/20 dark:hover:bg-surface-500/20","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200","cursor-pointer select-none"]}),nodeIcon:({context:e})=>({class:["mr-2",{"text-surface-600 dark:text-white/70":!e.selected,"text-primary-600 dark:text-white":e.selected}]}),nodeLabel:({context:e})=>({class:[{"text-surface-600 dark:text-white/70":!e.selected,"text-primary-600 dark:text-white":e.selected}]}),nodeChildren:{class:["m-0 list-none p-0 pl-4 [&:not(ul)]:pl-0 [&:not(ul)]:my-[2px]"]},loadingIcon:{class:["text-surface-500 dark:text-surface-0/70","absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin"]}},j5={root:({props:e})=>({class:["relative",{"flex flex-col h-full":e.scrollHeight==="flex"}]}),mask:{class:["absolute","top-0 left-0","z-20","flex items-center justify-center","w-full h-full","bg-surface-100/40 dark:bg-surface-800/40","transition duration-200"]},loadingIcon:{class:"w-8 h-8 animate-spin"},tableContainer:({props:e})=>({class:[{"relative overflow-auto":e.scrollable,"overflow-x-auto":e.resizableColumns}]}),header:({props:e})=>({class:["font-semibold",e.showGridlines?"border-x border-t border-b-0":"border-y border-x-0","p-4","bg-surface-0 dark:bg-surface-900","border-surface-200 dark:border-surface-700","text-surface-700 dark:text-white/80"]}),footer:{class:["font-semibold","border-t-0 border-b border-x-0","p-4","bg-surface-0 dark:bg-surface-900","border-surface-200 dark:border-surface-700","text-surface-700 dark:text-white/80"]},table:{class:["border-collapse table-fixed w-full "]},thead:({props:e})=>({class:[{"top-0 z-40 sticky":e.scrollable}]}),tbody:({props:e})=>({class:[{block:e.scrollable}]}),tfoot:({props:e})=>({class:[{block:e.scrollable}]}),headerRow:({props:e})=>({class:[{"flex flex-nowrap w-full":e.scrollable}]}),row:({context:e,props:t})=>({class:[{"flex flex-nowrap w-full":e.scrollable},"text-surface-700 dark:text-white/80",{"bg-highlight":e.selected},{"bg-surface-0 text-surface-600 dark:bg-surface-900":!e.selected},{"hover:bg-surface-100 dark:bg-surface-800/50":e.selectable&&!e.selected},"focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 ring-inset dark:focus:ring-primary-400",{"transition duration-200":t.selectionMode&&!e.selected||t.rowHover}]}),headerCell:({context:e,props:t})=>({class:["font-semibold","leading-[normal]",{"sticky z-40":e.scrollable&&e.scrollDirection==="both"&&e.frozen},{"flex flex-1 items-center":e.scrollable,"flex-initial shrink-0":e.scrollable&&e.scrollDirection==="both"&&!e.frozen},"text-left",{"first:border-l border-y border-r":e==null?void 0:e.showGridlines},"border-0 border-b border-solid",(e==null?void 0:e.size)==="small"?"py-[0.375rem] px-2":(e==null?void 0:e.size)==="large"?"py-[0.9375rem] px-5":"py-3 px-4",(t.sortable===""||t.sortable)&&e.sorted?"bg-highlight":"bg-surface-0 text-surface-700 dark:text-white/80 dark:bg-surface-900","border-surface-200 dark:border-surface-700",{"hover:bg-surface-100 dark:hover:bg-surface-80/50":(t.sortable===""||t.sortable)&&!(e!=null&&e.sorted)},"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",{"transition duration-200":t.sortable===""||t.sortable},{"overflow-hidden relative bg-clip-padding":e.resizable&&!e.frozen}]}),column:{headerCell:({context:e,props:t})=>({class:["font-semibold","leading-[normal]",{"sticky z-40":e.scrollable&&e.scrollDirection==="both"&&e.frozen},{"flex flex-1 items-center":e.scrollable,"flex-initial shrink-0":e.scrollable&&e.scrollDirection==="both"&&!e.frozen},"text-left",{"first:border-l border-y border-r":e==null?void 0:e.showGridlines},"border-0 border-b border-solid",(e==null?void 0:e.size)==="small"?"py-[0.375rem] px-2":(e==null?void 0:e.size)==="large"?"py-[0.9375rem] px-5":"py-3 px-4",(t.sortable===""||t.sortable)&&e.sorted?"bg-highlight":"bg-surface-0 text-surface-700 dark:text-white/80 dark:bg-surface-900","border-surface-200 dark:border-surface-700",{"hover:bg-surface-100 dark:hover:bg-surface-80/50":(t.sortable===""||t.sortable)&&!(e!=null&&e.sorted)},"focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",{"transition duration-200":t.sortable===""||t.sortable},{"overflow-hidden relative bg-clip-padding":e.resizable&&!e.frozen}]}),bodyCell:({context:e})=>({class:["leading-[normal]",{sticky:e.scrollable&&e.scrollDirection==="both"&&e.frozen},{"flex flex-1 items-center":e.scrollable,"flex-initial shrink-0":e.scrollable&&e.scrollDirection==="both"&&!e.frozen},"text-left","border-0 border-b border-solid","border-surface-200 dark:border-surface-700",{"border-x-0 border-l-0":!e.showGridlines},{"first:border-l border-r border-b":e==null?void 0:e.showGridlines},(e==null?void 0:e.size)==="small"?"py-[0.375rem] px-2":(e==null?void 0:e.size)==="large"?"py-[0.9375rem] px-5":"py-3 px-4",{"cursor-pointer":e.selectable,sticky:e.scrollable&&e.scrollDirection==="both"&&e.frozen,"border-x-0 border-l-0":!e.showGridlines}]}),bodyCellContent:"flex items-center gap-2",rowToggleButton:{class:["relative","inline-flex items-center justify-center","text-left align-middle","m-0 mr-2 p-0","w-7 h-7","border-0 rounded-full","text-surface-700 dark:text-white/70","border-transparent","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","hover:text-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800/50","transition duration-200","overflow-hidden","cursor-pointer select-none"]},sortIcon:({context:e})=>({class:["ml-2 inline-block",e.sorted?"text-inherit":"fill-surface-700 dark:fill-white/70"]}),columnResizer:{class:["block","absolute top-0 right-0","w-2 h-full","m-0 p-0","border border-transparent","cursor-col-resize"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},columnResizeIndicator:{class:"absolute hidden w-[2px] z-20 bg-primary"}},B5={root:({props:e})=>({class:["flex grow",{"flex-col":e.layout==="vertical","flex-row":e.layout==="horizontal"}]}),event:({props:e,context:t})=>({class:["flex relative min-h-[70px]",{"flex-row-reverse":e.align==="right"||e.layout==="vertical"&&e.align==="alternate"&&t.index%2===1,"flex-col [&:not(:last-child)]:flex-1":e.layout==="horizontal","flex-col-reverse ":e.align==="bottom"||e.layout==="horizontal"&&e.align==="alternate"&&t.index%2===1}]}),eventOpposite:({props:e,context:t})=>({class:["flex-1",{"px-4":e.layout==="vertical","py-4":e.layout==="horizontal"},{"text-right":e.align==="left"||e.layout==="vertical"&&e.align==="alternate"&&t.index%2===0,"text-left":e.align==="right"||e.layout==="vertical"&&e.align==="alternate"&&t.index%2===1}]}),eventSeparator:({props:e})=>({class:["flex items-center flex-initial",{"flex-col":e.layout==="vertical","flex-row":e.layout==="horizontal"}]}),eventMarker:{class:["relative","inline-flex items-center justify-center","w-[1.125rem] h-[1.125rem]","rounded-full border-2 border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-950","before:rounded-full before:w-[0.375rem] before:h-[0.375rem] before:bg-primary","after:absolute after:rounded-full after:w-full after:h-full after:shadow-sm"]},eventConnector:({props:e})=>({class:["grow bg-surface-300 dark:bg-surface-700",{"w-[2px]":e.layout==="vertical","w-full h-[2px]":e.layout==="horizontal"}]}),eventContent:({props:e,context:t})=>({class:["flex-1",{"px-4":e.layout==="vertical","py-4":e.layout==="horizontal"},{"text-left":e.align==="left"||e.layout==="vertical"&&e.align==="alternate"&&t.index%2===0,"text-right":e.align==="right"||e.layout==="vertical"&&e.align==="alternate"&&t.index%2===1},{"min-h-0":e.layout==="vertical"&&t.index===t.count-1,"grow-0":e.layout==="horizontal"&&t.index===t.count-1}]})},z5={accordiontab:{root:{class:["mb-0","border-b border-surface-200 dark:border-surface-700"]},header:({props:e})=>({class:[{"select-none pointer-events-none cursor-default opacity-60":e==null?void 0:e.disabled}]}),headerAction:{class:["font-semibold","leading-none","flex justify-between items-center","flex-row-reverse","relative","p-[1.125rem]","rounded-md","border-0","bg-surface-0 dark:bg-surface-900","text-surface-600 dark:text-surface-0/80","transition duration-200 ease-in-out","transition-shadow duration-200","focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300","cursor-pointer no-underline select-none"]},headerIcon:({context:e})=>({class:["inline-block ml-2",{"text-surface-900 dark:text-surface-0":e.active}]}),headerTitle:{class:"leading-none"},content:{class:["p-[1.125rem] pt-0","border-0 rounded-none","bg-surface-0 dark:bg-surface-900","text-surface-600 dark:text-surface-0/70"]},transition:{enterFromClass:"max-h-0",enterActiveClass:"overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",enterToClass:"max-h-[1000px]",leaveFromClass:"max-h-[1000px]",leaveActiveClass:"overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",leaveToClass:"max-h-0"}}},F5={root:{class:["flex flex-col","rounded-[12px]","shadow-md","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-surface-0"]},body:{class:["flex flex-col","gap-4","p-6"]},caption:{class:["flex flex-col","gap-2"]},title:{class:"text-xl font-semibold mb-0"},subtitle:{class:["font-normal","mb-0","text-surface-600 dark:text-surface-0/60"]},content:{class:"p-0"},footer:{class:"p-0"}},U5={root:{}},V5={root:({props:e})=>({class:["flex relative",{"justify-center":e.layout=="vertical"},{"items-center":e.layout=="vertical"},{"justify-start":(e==null?void 0:e.align)=="left"&&e.layout=="horizontal","justify-center":(e==null?void 0:e.align)=="center"&&e.layout=="horizontal","justify-end":(e==null?void 0:e.align)=="right"&&e.layout=="horizontal","items-center":(e==null?void 0:e.align)=="top"&&e.layout=="vertical","items-start":(e==null?void 0:e.align)=="center"&&e.layout=="vertical","items-end":(e==null?void 0:e.align)=="bottom"&&e.layout=="vertical"},{"my-5 mx-0 py-0 px-5":e.layout=="horizontal","mx-4 md:mx-5 py-5":e.layout=="vertical"},{"w-full":e.layout=="horizontal","min-h-full":e.layout=="vertical"},"before:block",{"before:absolute before:left-0 before:top-1/2":e.layout=="horizontal","before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2":e.layout=="vertical"},{"before:w-full":e.layout=="horizontal","before:min-h-full":e.layout=="vertical"},{"before:border-solid":e.type=="solid","before:border-dotted":e.type=="dotted","before:border-dashed":e.type=="dashed"},{"before:border-t before:border-surface-200 before:dark:border-surface-600":e.layout=="horizontal","before:border-l before:border-surface-200 before:dark:border-surface-600":e.layout=="vertical"}]}),content:{class:["px-1 z-10","bg-surface-0 dark:bg-surface-800"]}},H5={root:{class:["p-[1.125rem] pt-0","rounded-md","border border-surface-200 dark:border-surface-700","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-surface-0/80"]},legend:({props:e})=>({class:["font-semibold","leading-none","p-0 mb-[0.375rem]","rounded-md","text-surface-700 dark:text-surface-0/80","bg-surface-0 dark:bg-surface-900","transition-none",{"hover:bg-surface-100 dark:hover:bg-surface-800":e.toggleable}]}),toggleButton:({props:e})=>({class:["flex items-center justify-center","relative",{"py-2 px-3":e.toggleable},{"rounded-md":e.toggleable},{"text-surface-700 dark:text-surface-200 hover:text-surface-900":e.toggleable},{"hover:text-surface-900 dark:hover:text-surface-100":e.toggleable},{"focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300":e.toggleable},{"transition-none cursor-pointer overflow-hidden select-none":e.toggleable}]}),toggleIcon:{class:"mr-2 inline-block"},legendLabel:({props:e})=>({class:["flex items-center justify-center leading-none",{"py-2 px-3":!e.toggleable}]}),content:{class:"p-0"},transition:{enterFromClass:"max-h-0",enterActiveClass:"overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",enterToClass:"max-h-[1000px]",leaveFromClass:"max-h-[1000px]",leaveActiveClass:"overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",leaveToClass:"max-h-0"}},K5={root:{class:["rounded-md","border border-surface-200 dark:border-surface-700","bg-surface-0 dark:bg-surface-900"]},header:({props:e})=>({class:["flex items-center justify-between","text-surface-700 dark:text-surface-0/80","bg-transparent","rounded-tl-md rounded-tr-md","border-0",{"p-[1.125rem]":!e.toggleable,"py-3 px-[1.125rem]":e.toggleable}]}),title:{class:"leading-none font-semibold"},toggler:{class:["inline-flex items-center justify-center","relative","w-7 h-7","m-0 p-0","border-0 rounded-full","bg-transparent","text-surface-600 dark:text-surface-0/80","hover:text-surface-800 dark:hover:text-surface-0","hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]","focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300","transition-all duration-200 ease-in-out","overflow-hidden no-underline","cursor-pointer"]},togglerIcon:{class:"inline-block w-4 h-4"},content:{class:["p-[1.125rem] pt-0","border-0 border-t-0 last:rounded-br-md last:rounded-bl-md","text-surface-700 dark:text-surface-0/80"]},footer:{class:["p-[1.125rem] pt-0","border-0 border-t-0 rounded-br-lg rounded-bl-lg","text-surface-700 dark:text-surface-0/80"]},transition:{enterFromClass:"max-h-0",enterActiveClass:"overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",enterToClass:"max-h-[1000px]",leaveFromClass:"max-h-[1000px]",leaveActiveClass:"overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",leaveToClass:"max-h-0"}},W5={contentContainer:{class:["h-full w-full","z-[1]","overflow-hidden","relative float-left"]},content:{class:["h-[calc(100%+18px)] w-[calc(100%+18px)] pr-[18px] pb-[18px] pl-0 pt-0","overflow-scroll scrollbar-none","box-border","relative","[&::-webkit-scrollbar]:hidden"]},barX:{class:["h-[9px] bottom-0","bg-surface-50 dark:bg-surface-700 rounded","cursor-pointer","invisible z-20","transition duration-[250ms] ease-linear","relative"]},barY:{class:["w-[9px] top-0","bg-surface-50 dark:bg-surface-700 rounded","cursor-pointer","z-20","transition duration-[250ms] ease-linear","relative"]}},q5={root:({context:e})=>({class:["bg-surface-0","dark:bg-surface-900","text-surface-700","dark:text-surface-0/80","rounded-md",{"border border-solid border-surface-200 dark:border-surface-700":!e.nested},{"flex grow border-0":e.nested}]}),gutter:({props:e})=>({class:["flex","items-center","justify-center","shrink-0","bg-surface-100","dark:bg-surface-700","transition-all","duration-200",{"cursor-col-resize":e.layout=="horizontal","cursor-row-resize":e.layout!=="horizontal"}]}),gutterhandler:({props:e})=>({class:["z-20","bg-surface-100","dark:bg-surface-700","rounded-md","focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300","transition-all","duration-200",{"h-[1.70rem]":e.layout=="horizontal","w-[1.70rem] h-2":e.layout!=="horizontal"}]})},G5={root:"has-[[data-pc-name=stepitem]]:flex has-[[data-pc-name=stepitem]]:flex-col",separator:"flex-1 w-full h-[2px] bg-surface-200 dark:bg-surface-700 transition-shadow duration-200",transition:{class:["flex flex-1","bg-surface-0 dark:bg-surface-900","text-surface-900 dark:text-surface-0"],enterFromClass:"max-h-0",enterActiveClass:"overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",enterToClass:"max-h-[1000px]",leaveFromClass:"max-h-[1000px]",leaveActiveClass:"overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",leaveToClass:"max-h-0"}},J5={root:({props:e})=>({class:["flex flex-col",{"[&>[data-pc-name=tablist]]:overflow-hidden":e.scrollable}]})},Y5={root:{class:["flex items-center justify-between flex-wrap","gap-2","p-3","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-200 dark:border-surface-700"]},start:{class:"flex items-center"},center:{class:"flex items-center"},end:{class:"flex items-center"}},Z5={root:{class:["rounded-lg","shadow-lg","border-0","z-40 transform origin-center","mt-3 absolute left-0 top-0","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-surface-0/80","before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[calc(var(--overlayArrowLeft,0)+1.25rem)] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700","after:absolute after:w-0 after:-top-[0.54rem] after:h-0 after:border-transparent after:border-solid after:ml-[calc(var(--overlayArrowLeft,0)+1.3rem)] after:border-x-[9px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900"]},content:{class:["p-4 items-center flex","rounded-t-lg","border-x border-t last:border-b border-surface-200 dark:border-surface-700"]},icon:{class:"text-2xl mr-4"},footer:{class:["flex items-center justify-end","shrink-0","text-right","gap-2","px-4","pb-4","border-t-0","rounded-b-lg","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-surface-0/80","border-x border-b border-surface-200 dark:border-surface-700"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},X5={icon:"w-8 h-8 text-[2rem] mr-2"},Q5={root:({state:e})=>({class:["rounded-lg","shadow-lg","border-0","max-h-[90vh]","m-0","bg-surface-0 dark:bg-surface-900","[&:last-child]:border-b","border-surface-200 dark:border-surface-700","transform","scale-100",{"transition-none":e.maximized,"transform-none":e.maximized,"!w-screen":e.maximized,"!h-screen":e.maximized,"!max-h-full":e.maximized,"!top-0":e.maximized,"!left-0":e.maximized}]}),header:{class:["flex items-center justify-between","shrink-0","p-6","rounded-tl-lg","rounded-tr-lg","text-surface-700 dark:text-surface-0/80","border border-b-0","border-surface-200 dark:border-surface-700"]},title:{class:["font-semibold text-xl leading-[normal]"]},headerActions:{class:["flex items-center"]},content:({state:e,instance:t})=>({class:["px-6","pb-6","pt-0",{grow:e.maximized,"rounded-bl-lg":!t.$slots.footer,"rounded-br-lg":!t.$slots.footer},"text-surface-700 dark:text-surface-0/80","border border-t-0 border-b-0","border-surface-200 dark:border-surface-700","overflow-y-auto"]}),footer:{class:["flex items-center justify-end","shrink-0","text-right","gap-2","px-6","pb-6","border-t-0","rounded-b-lg","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-surface-0/80","border border-t-0 border-b-0","border-surface-200 dark:border-surface-700"]},mask:({props:e})=>({class:["transition-all","duration-300",{"p-5":!e.position=="full"},{"has-[.mask-active]:bg-transparent bg-black/40":e.modal}]}),transition:({props:e})=>e.position==="top"?{enterFromClass:"opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active"}:e.position==="bottom"?{enterFromClass:"opacity-0 scale-75 translate-y-full mask-active",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active"}:e.position==="left"||e.position==="topleft"||e.position==="bottomleft"?{enterFromClass:"opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active"}:e.position==="right"||e.position==="topright"||e.position==="bottomright"?{enterFromClass:"opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active"}:{enterFromClass:"opacity-0 scale-75 mask-active",enterActiveClass:"transition-all duration-200 ease-out",leaveActiveClass:"transition-all duration-200 ease-out",leaveToClass:"opacity-0 scale-75 mask-active"}},eE={root:({props:e})=>({class:["flex flex-col","relative",{"!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":e.position=="full"},{"h-full w-80":e.position=="left"||e.position=="right","h-auto w-full":e.position=="top"||e.position=="bottom"},"border-0 dark:border","shadow-lg","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","dark:border-surface-700","transition-transform","duration-300","pointer-events-auto"]}),header:{class:["flex items-center justify-between","shrink-0","p-[1.125rem]","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-surface-0/80"]},title:{class:["font-semibold text-xl"]},icons:{class:["flex items-center"]},closeButton:{class:["relative","flex items-center justify-center","mr-2","last:mr-0","w-7 h-7","border-0","rounded-full","text-surface-500","bg-transparent","transition duration-200 ease-in-out","hover:text-surface-700 dark:hover:text-white/80","hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]","focus:outline-none focus:outline-offset-0 focus:ring-1","focus:ring-primary-500 dark:focus:ring-primary-400","overflow-hidden"]},closeButtonIcon:{class:["inline-block","w-4","h-4"]},content:{class:["p-[1.125rem]","pt-0","h-full","w-full","grow","overflow-y-auto"]},mask:({props:e})=>({class:["transition-all","duration-300",{"p-5":!e.position=="full"},{"has-[.mask-active]:bg-transparent bg-black/40":e.modal}]}),transition:({props:e})=>e.position==="top"?{enterFromClass:"translate-x-0 -translate-y-full translate-z-0 mask-active",leaveToClass:"translate-x-0 -translate-y-full translate-z-0 mask-active"}:e.position==="bottom"?{enterFromClass:"translate-x-0 translate-y-full translate-z-0 mask-active",leaveToClass:"translate-x-0 translate-y-full translate-z-0 mask-active"}:e.position==="left"?{enterFromClass:"-translate-x-full translate-y-0 translate-z-0 mask-active",leaveToClass:"-translate-x-full translate-y-0 translate-z-0 mask-active"}:e.position==="right"?{enterFromClass:"translate-x-full translate-y-0 translate-z-0 mask-active",leaveToClass:"translate-x-full translate-y-0 translate-z-0 mask-active"}:{enterFromClass:"opacity-0 mask-active",enterActiveClass:"transition-opacity duration-400 ease-in",leaveActiveClass:"transition-opacity duration-400 ease-in",leaveToClass:"opacity-0 mask-active"}},tE={root:{class:["rounded-md shadow-lg","absolute left-0 top-0 mt-2","z-40 transform origin-center","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-surface-0/80","before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[10px] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700","after:absolute after:w-0 after:-top-[0.54rem] after:left-[4px] after:h-0 after:border-transparent after:border-solid after:ml-[8px] after:border-x-[8px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900"]},content:{class:["p-5 items-center flex","rounded-lg","border border-surface-200 dark:border-surface-700"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},nE={root:({context:e})=>({class:["absolute","shadow-md","p-fadein",{"py-0 px-1":(e==null?void 0:e.right)||(e==null?void 0:e.left)||!(e!=null&&e.right)&&!(e!=null&&e.left)&&!(e!=null&&e.top)&&!(e!=null&&e.bottom),"py-1 px-0":(e==null?void 0:e.top)||(e==null?void 0:e.bottom)}]}),arrow:({context:e})=>({class:["absolute","w-0","h-0","border-transparent","border-solid",{"border-y-[10px] border-r-[10px] border-l-0 border-r-surface-700":(e==null?void 0:e.right)||!(e!=null&&e.right)&&!(e!=null&&e.left)&&!(e!=null&&e.top)&&!(e!=null&&e.bottom),"border-y-[10px] border-l-[10px] border-r-0 border-l-surface-700":e==null?void 0:e.left,"border-x-[10px] border-t-[10px] border-b-0 border-t-surface-700":e==null?void 0:e.top,"border-x-[10px] border-b-[10px] border-t-0 border-b-surface-700":e==null?void 0:e.bottom},{"-mt-[10px] top-1/2":(e==null?void 0:e.right)||(e==null?void 0:e.left)||!(e!=null&&e.right)&&!(e!=null&&e.left)&&!(e!=null&&e.top)&&!(e!=null&&e.bottom),"-ml-[10px] left-1/2":(e==null?void 0:e.top)||(e==null?void 0:e.bottom)}]}),text:{class:["p-3","bg-surface-700","text-white","leading-none","rounded-md","whitespace-pre-line","break-words"]}},rE={root:({props:e})=>({class:[{"flex flex-wrap items-center justify-center gap-2":e.mode==="basic"}]}),input:{class:"hidden"},header:{class:["flex","flex-wrap","bg-surface-0","dark:bg-surface-900","text-surface-700","dark:text-white/80","p-[1.125rem]","gap-2","border","border-solid","border-surface-200","dark:border-surface-700","border-b-0","rounded-tr-lg","rounded-tl-lg"]},content:{class:["relative","bg-surface-0","dark:bg-surface-900","text-surface-700","dark:text-white/80","p-[1.125rem]","border border-t-0","border-surface-200","dark:border-surface-700","rounded-b-lg","[&>[data-pc-name=pcprogressbar]]:absolute","[&>[data-pc-name=pcprogressbar]]:w-full","[&>[data-pc-name=pcprogressbar]]:top-0","[&>[data-pc-name=pcprogressbar]]:left-0","[&>[data-pc-name=pcprogressbar]]:h-1"]},file:{class:["flex","items-center","flex-wrap","p-4","mb-2","last:mb-0","border","border-surface-200","dark:border-surface-700","gap-2","rounded"]},fileThumbnail:"shrink-0",fileName:"mb-2 break-all",fileSize:"mr-2"},oE={root:{class:["rounded-md","p-4","bg-surface-0 dark:bg-surface-900","overflow-x-auto"]},list:{class:["flex items-center flex-nowrap","m-0 p-0 list-none leading-none"]},itemLink:{class:["flex items-center gap-2","rounded-md","text-surface-600 dark:text-white/70","focus-visible:outline-none focus-visible:outline-offset-0","focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400","transition-shadow duration-200","text-decoration-none"]},itemIcon:{class:"text-surface-600 dark:text-white/70"},separator:{class:["flex items-center","mx-2","text-surface-600 dark:text-white/70"]}},iE={root:{class:["min-w-[12.5rem]","rounded-md","shadow-md","p-1","bg-surface-0 dark:bg-surface-900","text-surface-700 dark:text-white/80","border border-surface-200 dark:border-surface-700"]},rootList:{class:["flex flex-col","list-none","m-0","p-0","outline-none"]},item:{class:"relative my-[2px] [&:first-child]:mt-0"},itemContent:({context:e})=>({class:["rounded-[4px]","text-surface-700 dark:text-white/80",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200":e.focused&&!e.active,"bg-highlight":e.focused&&e.active||e.active||!e.focused&&e.active},"transition-shadow","duration-200",{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.active,"hover:bg-highlight-emphasis":e.active},{"opacity-60 pointer-events-none cursor-default":e.disabled}]}),itemLink:{class:["relative","flex","items-center","py-2","px-3","text-surface-700 dark:text-white/80","no-underline","overflow-hidden","cursor-pointer","select-none"]},itemIcon:{class:["mr-2","text-surface-600 dark:text-white/70"]},itemLabel:{class:["leading-none"]},submenu:({props:e})=>({class:["flex flex-col","w-full sm:w-48","p-1","m-0","list-none","shadow-md","rounded-md","dark:border dark:border-surface-700","static sm:absolute","z-10",{"sm:absolute sm:left-full sm:top-0":e.level>1},"bg-surface-0 dark:bg-surface-900"]}),submenuIcon:{class:["ml-auto"]},separator:{class:"border-t border-surface-200 dark:border-surface-600 my-1"},transition:{enterFromClass:"opacity-0",enterActiveClass:"transition-opacity duration-250"}},sE={root:({props:e})=>({class:["absolute z-1",{"left-0 bottom-0 w-full":e.position=="bottom","left-0 top-0 w-full":e.position=="top","left-0 top-0 h-full":e.position=="left","right-0 top-0 h-full":e.position=="right"},"flex justify-center items-center","pointer-events-none"]}),listContainer:{class:["flex","rounded-md","bg-surface-0/10 dark:bg-surface-900/20 border border-surface-0/20","backdrop-blur-sm","p-2","pointer-events-auto"]},list:({props:e})=>({class:["flex items-center justify-center",{"flex-col":e.position=="left"||e.position=="right"},"m-0 p-0 list-none","outline-none"]}),item:({props:e,context:t,instance:n})=>({class:["p-2 rounded-md",{"origin-bottom":e.position=="bottom","origin-top":e.position=="top","origin-left":e.position=="left","origin-right":e.position=="right"},"transition-all duration-200 ease-cubic-bezier-will-change-transform transform"]}),itemLink:{class:["flex flex-col items-center justify-center","relative","w-16 h-16","cursor-default overflow-hidden"]}},aE={root:{class:["min-w-[12.5rem]","rounded-md","p-2","bg-surface-0 dark:bg-surface-900","text-surface-0 dark:text-white/80","border border-surface-200 dark:border-surface-700"]},list:{class:["list-none","m-0","p-0","outline-none"]},item:{class:"relative my-[2px] [&:first-child]:mt-0"},itemContent:({context:e})=>({class:["rounded-[4px]","text-surface-0 dark:text-white/80",{"text-surface-0 dark:text-white/70":!e.focused&&!e.active,"text-surface-0 dark:text-white/70 bg-surface-50":e.focused&&!e.active,"bg-highlight":e.focused&&e.active||e.active||!e.focused&&e.active},"transition-shadow","duration-200",{"opacity-60 pointer-events-none cursor-default":e.disabled}]}),itemLink:{class:["relative","flex","items-center","py-3","px-4","text-surface-600 dark:text-white/80","no-underline","overflow-hidden","cursor-pointer","select-none"]},itemIcon:{class:["mr-6","text-surface-500 dark:text-white/70"]},itemLabel:{class:["leading-[normal]"]},submenuLabel:{class:["font-bold","m-0","py-2 px-3","rounded-tl-none","rounded-tr-none","bg-surface-0 dark:bg-surface-900","text-surface-400 dark:text-surface-600"]},transition:{enterFromClass:"opacity-0 scale-y-[0.8]",enterActiveClass:"transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",leaveActiveClass:"transition-opacity duration-100 ease-linear",leaveToClass:"opacity-0"}},lE={root:{class:["relative","flex","items-center","p-2","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-200 dark:border-surface-700"]},rootList:({props:e})=>({class:["sm:flex","items-center","flex-wrap","flex-col sm:flex-row",{hidden:!(e!=null&&e.mobileActive),flex:e==null?void 0:e.mobileActive},"absolute sm:relative","top-full left-0","sm:top-auto sm:left-auto","w-full sm:w-auto","m-0","p-1 sm:py-0 sm:p-0","list-none","shadow-md sm:shadow-none","border-0","bg-surface-0 dark:bg-surface-900 sm:bg-transparent","outline-none"]}),item:{class:"sm:relative sm:w-auto w-full static my-[2px] [&:first-child]:mt-0"},itemContent:({context:e})=>({class:["rounded-[4px]","text-surface-700 dark:text-white/80",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200":e.focused&&!e.active,"bg-highlight":e.focused&&e.active||e.active||!e.focused&&e.active},{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.active,"hover:bg-highlight-emphasis":e.active},"transition-all","duration-200"]}),itemLink:({context:e})=>({class:["relative","flex","items-center","py-2","px-3",{"pl-9 sm:pl-5":e.level===1,"pl-14 sm:pl-5":e.level===2},"leading-none","select-none","cursor-pointer","no-underline ","overflow-hidden"]}),itemIcon:{class:"mr-2"},submenuIcon:({props:e})=>({class:[{"ml-auto sm:ml-2":e.root,"ml-auto":!e.root}]}),submenu:({props:e})=>({class:["flex flex-col","rounded-md","min-w-[12.5rem]","p-1","m-0","list-none","shadow-none sm:shadow-md","border border-surface-200 dark:border-surface-700","static sm:absolute","z-10",{"sm:absolute sm:left-full sm:top-0":e.level>1},"bg-surface-0 dark:bg-surface-900"]}),separator:{class:"border-t border-surface-200 dark:border-surface-600 my-[2px]"},button:{class:["flex sm:hidden","items-center justify-center","w-7","h-7","rounded-full","text-surface-500 dark:text-white/80","hover:text-surface-600 dark:hover:text-white/60","hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]","focus:outline-none focus:outline-offset-0","focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200 ease-in-out","cursor-pointer","no-underline"]},end:{class:"ml-auto self-center"}},cE={root:({props:e})=>({class:["relative","flex","rounded-md","bg-surface-0 dark:bg-surface-900","border border-surface-200 dark:border-surface-700",{"p-2 items-center":e.orientation=="horizontal","flex-col sm:w-48 p-1":e.orientation!=="horizontal"}]}),rootList:({props:e})=>({class:["sm:flex","items-center","flex-wrap","flex-col sm:flex-row",{hidden:!(e!=null&&e.mobileActive),flex:e==null?void 0:e.mobileActive},"absolute sm:relative","top-full left-0","sm:top-auto sm:left-auto","w-full sm:w-auto","m-0","p-1 sm:py-0 sm:p-0","list-none","shadow-md sm:shadow-none","border-0","bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent","outline-none"]}),item:({props:e})=>({class:["sm:relative static my-[2px] [&:first-child]:mt-0",{"sm:w-auto w-full":e.horizontal,"w-full":!e.horizontal}]}),itemContent:({context:e})=>({class:["rounded-[4px]",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200":e.focused&&!e.active,"bg-highlight":e.focused&&e.active||e.active||!e.focused&&e.active},{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.active,"hover:bg-highlight-emphasis":e.active},"transition-all","duration-200"]}),itemLink:{class:["relative","flex","items-center","py-2","px-3","leading-none","select-none","cursor-pointer","no-underline ","overflow-hidden"]},itemIcon:{class:"mr-2"},submenuIcon:({props:e})=>({class:[{"ml-auto sm:ml-2":e.horizontal,"ml-auto":!e.horizontal}]}),overlay:({props:e})=>({class:["w-auto","m-0","shadow-none sm:shadow-md","rounded-md","bg-surface-0 dark:bg-surface-900","static sm:absolute","z-10",{"sm:left-full top-0":!e.horizontal}]}),grid:{class:"flex flex-wrap sm:flex-nowrap"},column:{class:"w-full sm:w-1/2"},submenu:{class:["m-0 list-none","p-1 px-2 w-full sm:min-w-[14rem]"]},submenuLabel:{class:["font-semibold","py-2 px-3","m-0","text-surface-400 dark:text-surface-500","bg-surface-0 dark:bg-surface-900"]},separator:{class:"border-t border-surface-200 dark:border-surface-600 my-1"},button:{class:["flex sm:hidden","items-center justify-center","w-7","h-7","rounded-full","text-surface-500 dark:text-white/80","hover:text-surface-600 dark:hover:text-white/60","hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]","focus:outline-none focus:outline-offset-0","focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200 ease-in-out","cursor-pointer","no-underline"]},end:{class:"ml-auto self-center"}},uE={panel:{class:"p-1 overflow-hidden mb-3 border border-surface-200 dark:border-surface-700 rounded-md"},header:{class:["rounded-[4px]","outline-none"]},headerContent:({context:e})=>({class:["rounded-[4px]","bg-surface-0 dark:bg-surface-900","text-surface-600 dark:text-surface-0/80",{"text-surface-900":e.active},"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]","hover:text-surface-900","transition duration-200 ease-in-out","transition-shadow duration-200"]}),headerLink:{class:["relative","font-semibold","leading-none","flex items-center","py-2 px-3","select-none cursor-pointer no-underline"]},headerLabel:{class:"leading-none"},headerIcon:{class:"mr-2"},submenuIcon:{class:"mr-2"},content:{class:["pl-4","text-surface-700 dark:text-white/80","bg-surface-0 dark:bg-surface-900"]},rootList:{class:["outline-none","m-0 p-0 list-none"]},menuitem:{class:"relative my-[2px]"},itemContent:{class:["border-none rounded-[4px]","text-surface-700 dark:text-white/80","transition-shadow duration-200"]},itemLink:({context:e})=>({class:["relative","leading-none","flex items-center","py-2 px-3","rounded-[4px]","text-surface-700 dark:text-white/80","hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)] hover:text-surface-700 dark:hover:text-white/80",{"bg-surface-200 text-surface-700 dark:text-white/80 dark:bg-surface-0/10":e.focused},"cursor-pointer no-underline","select-none overflow-hidden"]}),itemIcon:{class:"mr-2"},submenu:{class:"p-0 pl-4 m-0 list-none"},transition:{enterFromClass:"max-h-0",enterActiveClass:"overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",enterToClass:"max-h-[1000px]",leaveFromClass:"max-h-[1000px]",leaveActiveClass:"overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",leaveToClass:"max-h-0"}},dE={root:{class:"overflow-x-auto"},menu:{class:["flex flex-1","list-none","p-0 m-0","bg-surface-0 dark:bg-surface-900","border-b-2 border-surface-200 dark:border-surface-700","text-surface-900 dark:text-surface-0/80"]},menuitem:{class:"mr-0"},action:({context:e,state:t})=>({class:["relative","font-semibold leading-none","flex items-center","py-4 px-[1.125rem]","-mb-px","border-b","rounded-t-md",{"border-surface-200 dark:border-surface-700":t.d_activeIndex!==e.index,"bg-surface-0 dark:bg-surface-900":t.d_activeIndex!==e.index,"text-surface-700 dark:text-surface-0/80":t.d_activeIndex!==e.index,"bg-surface-0 dark:bg-surface-900":t.d_activeIndex===e.index,"border-primary":t.d_activeIndex===e.index,"text-primary":t.d_activeIndex===e.index},"focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",{"hover:text-surface-900 dark:hover:text-surface-0":t.d_activeIndex!==e.index},"transition-all duration-200","cursor-pointer select-none text-decoration-none","overflow-hidden","user-select-none"]}),icon:{class:"mr-2"}},fE={root:{class:["rounded-md","min-w-[12rem]","p-1","bg-surface-0 dark:bg-surface-900","border border-surface-200 dark:border-surface-700"]},rootList:{class:["list-none","flex flex-col","m-0 p-0","outline-none"]},item:{class:"relative my-[2px] [&:first-child]:mt-0"},itemContent:({context:e})=>({class:["rounded-[4px]","text-surface-700 dark:text-white/80",{"text-surface-500 dark:text-white/70":!e.focused&&!e.active,"text-surface-500 dark:text-white/70 bg-surface-200":e.focused&&!e.active,"bg-highlight":e.focused&&e.active||e.active||!e.focused&&e.active},"transition-shadow","duration-200",{"hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]":!e.active,"hover:bg-highlight-emphasis":e.active},{"opacity-60 pointer-events-none cursor-default":e.disabled}]}),itemLink:{class:["relative","flex","items-center","py-2","px-3","text-surface-700 dark:text-white/80","no-underline","overflow-hidden","cursor-pointer","select-none"]},itemIcon:{class:["mr-2","text-surface-600 dark:text-white/70"]},itemLabel:{class:["leading-none"]},submenuIcon:{class:["ml-auto"]},submenu:{class:["flex flex-col","m-0","p-1","list-none","min-w-[12.5rem]","shadow-none sm:shadow-md","border border-surface-200 dark:border-surface-700","static sm:absolute","z-10","bg-surface-0 dark:bg-surface-900"]},separator:{class:"border-t border-surface-200 dark:border-surface-600 my-[2px]"},transition:{enterFromClass:"opacity-0",enterActiveClass:"transition-opacity duration-250"}},hE={root:({props:e})=>({class:["rounded-md","outline",{"bg-blue-100/70 dark:bg-blue-500/20":e.severity=="info","bg-green-100/70 dark:bg-green-500/20":e.severity=="success","bg-surface-100/70 dark:bg-surface-500/20":e.severity=="secondary","bg-orange-100/70 dark:bg-orange-500/20":e.severity=="warn","bg-red-100/70 dark:bg-red-500/20":e.severity=="error","bg-surface-950 dark:bg-surface-0":e.severity=="contrast"},{"outline-blue-200 dark:outline-blue-500/20":e.severity=="info","outline-green-200 dark:outline-green-500/20":e.severity=="success","outline-surface-200 dark:outline-surface-500/20":e.severity=="secondary","outline-orange-200 dark:outline-orange-500/20":e.severity=="warn","outline-red-200 dark:outline-red-500/20":e.severity=="error","outline-surface-950 dark:outline-surface-0":e.severity=="contrast"},{"text-blue-700 dark:text-blue-300":e.severity=="info","text-green-700 dark:text-green-300":e.severity=="success","text-surface-700 dark:text-surface-300":e.severity=="secondary","text-orange-700 dark:text-orange-300":e.severity=="warn","text-red-700 dark:text-red-300":e.severity=="error","text-surface-0 dark:text-surface-950":e.severity=="contrast"}]}),content:{class:["flex items-center h-full","py-2 px-3 gap-2"]},icon:{class:["shrink-0 w-[1.125rem] h-[1.125rem]"]},text:{class:["text-base leading-[normal]","font-medium"]},closeButton:({props:e})=>({class:["flex items-center justify-center","w-7 h-7","ml-auto relative","rounded-full","bg-transparent","transition duration-200 ease-in-out","hover:bg-surface-0/30 dark:hover:bg-[rgba(255,255,255,0.03)]","focus:outline-none focus:outline-offset-0 focus:ring-1",{"focus:ring-blue-500 dark:focus:ring-blue-400":e.severity=="info","focus:ring-green-500 dark:focus:ring-green-400":e.severity=="success","focus:ring-surface-500 dark:focus:ring-surface-400":e.severity=="secondary","focus:ring-orange-500 dark:focus:ring-orange-400":e.severity=="warn","focus:ring-red-500 dark:focus:ring-red-4000":e.severity=="error","focus:ring-surface-0 dark:focus:ring-surface-950":e.severity=="contrast"},"overflow-hidden"]}),transition:{enterFromClass:"opacity-0",enterActiveClass:"transition-opacity duration-300",leaveFromClass:"max-h-40",leaveActiveClass:"overflow-hidden transition-all duration-300 ease-in",leaveToClass:"max-h-0 opacity-0 !m-0"}},mE={root:({props:e})=>({class:["w-96 rounded-md",{"-translate-x-2/4":e.position=="top-center"||e.position=="bottom-center"}]}),message:({props:e})=>({class:["mb-4 rounded-md w-full","border border-transparent","backdrop-blur-[10px] shadow-md",{"bg-blue-50/90 dark:bg-blue-500/20":e.message.severity=="info","bg-green-50/90 dark:bg-green-500/20":e.message.severity=="success","bg-surface-50 dark:bg-surface-800":e.message.severity=="secondary","bg-orange-50/90 dark:bg-orange-500/20":e.message.severity=="warn","bg-red-50/90 dark:bg-red-500/20":e.message.severity=="error","bg-surface-950 dark:bg-surface-0":e.message.severity=="contrast"},{"border-blue-200 dark:border-blue-500/20":e.message.severity=="info","border-green-200 dark:border-green-500/20":e.message.severity=="success","border-surface-300 dark:border-surface-500/20":e.message.severity=="secondary","border-orange-200 dark:border-orange-500/20":e.message.severity=="warn","border-red-200 dark:border-red-500/20":e.message.severity=="error","border-surface-950 dark:border-surface-0":e.message.severity=="contrast"},{"text-blue-700 dark:text-blue-300":e.message.severity=="info","text-green-700 dark:text-green-300":e.message.severity=="success","text-surface-700 dark:text-surface-300":e.message.severity=="secondary","text-orange-700 dark:text-orange-300":e.message.severity=="warn","text-red-700 dark:text-red-300":e.message.severity=="error","text-surface-0 dark:text-surface-950":e.message.severity=="contrast"}]}),messageContent:({props:e})=>({class:["flex p-3",{"items-start":e.message.summary,"items-center":!e.message.summary}]}),messageIcon:({props:e})=>({class:[e.message.severity==="contrast"||e.message.severity==="secondary"?"w-0":"w-[1.125rem] h-[1.125rem] mr-2","text-lg leading-[normal]"]}),messageText:{class:["text-base leading-[normal]","ml-2","flex-1"]},summary:{class:"font-medium block"},detail:({props:e})=>({class:["block","text-sm",e.message.severity==="contrast"?"text-surface-0 dark:text-surface-950":"text-surface-700 dark:text-surface-0",{"mt-2":e.message.summary}]}),closeButton:({props:e})=>({class:["flex items-center justify-center","w-7 h-7","ml-auto  relative","rounded-full","bg-transparent","transition duration-200 ease-in-out","hover:bg-surface-0/30 dark:hover:bg-[rgba(255,255,255,0.03)]","focus:outline-none focus:outline-offset-0 focus:ring-1",{"focus:ring-blue-500 dark:focus:ring-blue-400":e.severity=="info","focus:ring-green-500 dark:focus:ring-green-400":e.severity=="success","focus:ring-surface-500 dark:focus:ring-surface-400":e.severity=="secondary","focus:ring-orange-500 dark:focus:ring-orange-400":e.severity=="warn","focus:ring-red-500 dark:focus:ring-red-4000":e.severity=="error","focus:ring-surface-0 dark:focus:ring-surface-950":e.severity=="contrast"},"overflow-hidden"]}),transition:{enterFromClass:"opacity-0 translate-y-2/4",enterActiveClass:"transition-[transform,opacity] duration-300",leaveFromClass:"max-h-[1000px]",leaveActiveClass:"!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden",leaveToClass:"max-h-0 opacity-0 mb-0"}},pE={root:{class:["flex flex-col"]},contentContainer:{class:["flex flex-col overflow-auto"]},content:({props:e})=>({class:["flex",{"flex-row":e.orientation!=="vertical","flex-col":e.orientation=="vertical"},"[&>[data-pc-extend=button]]:self-center"]}),viewport:{class:["overflow-hidden w-full"]},itemList:({props:e})=>({class:["flex",{"flex-row":e.orientation!=="vertical","flex-col h-full":e.orientation=="vertical"}]}),item:({props:e})=>({class:["flex shrink-0 grow ",{"w-full sm:w-[50%] md:w-[33.333333333333336%]":e.orientation!=="vertical","w-full h-full":e.orientation=="vertical"}]}),itemClone:({props:e})=>({class:["flex shrink-0 grow","unvisible",{"w-full sm:w-[50%] md:w-[33.333333333333336%]":e.orientation!=="vertical","w-full h-full":e.orientation=="vertical"}]}),indicatorList:{class:["flex flex-row justify-center flex-wrap"]},indicator:{class:["mr-2 mb-2"]},indicatorButton:({context:e})=>({class:["w-8 h-2 rounded-md","transition duration-200","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",{"bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600":!e.highlighted,"bg-primary hover:bg-primary-emphasis":e.highlighted}]})},bE={content:({parent:e,props:t})=>({class:["flex",{"flex-col":t.fullScreen},{"flex-col":e.props.thumbnailsPosition==="top"||e.props.thumbnailsPosition==="bottom","flex-row":e.props.thumbnailsPosition==="right"||e.props.thumbnailsPosition==="left"}]}),itemsContainer:({parent:e,props:t})=>({class:["group","flex relative",{"grow shrink w-0 justify-center":t.fullScreen},{"flex-col":e.props.indicatorsPosition==="bottom"||e.props.indicatorsPosition==="top","flex-row items-center":e.props.indicatorsPosition==="left"||e.props.indicatorsPosition==="right"},{"order-2":e.props.thumbnailsPosition==="top"||e.props.thumbnailsPosition==="left","flex-row":e.props.thumbnailsPosition==="right"}]}),items:({parent:e})=>({class:["flex h-full relative",{"order-1":e.props.indicatorsPosition==="bottom"||e.props.indicatorsPosition==="right","order-2":e.props.indicatorsPosition==="top"||e.props.indicatorsPosition==="left"}]}),item:{class:["flex justify-center items-center h-full w-full","h-full w-full"]},thumbnails:({parent:e})=>({class:["flex flex-col shrink-0",{"order-1":e.props.thumbnailsPosition==="top"||e.props.thumbnailsPosition==="left"},"overflow-auto"]}),thumbnailContent:({parent:e})=>({class:["flex","py-4 px-1","bg-black/90",{"flex-row":e.props.thumbnailsPosition==="top"||e.props.thumbnailsPosition==="bottom","flex-col grow":e.props.thumbnailsPosition==="right"||e.props.thumbnailsPosition==="left"}]}),thumbnailPrevButton:{class:["self-center relative","flex shrink-0 justify-center items-center overflow-hidden","m-2","bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out","hover:bg-surface-0/10 hover:text-white","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"]},thumbnailsViewport:{class:"overflow-hidden w-full"},thumbnailItems:({parent:e})=>({class:["flex",{"flex-col h-full":e.props.thumbnailsPosition==="right"||e.props.thumbnailsPosition==="left"}]}),thumbnailItem:({parent:e})=>({class:["flex items-center justify-center","grow shrink-0",{"w-full md:w-[25%] lg:w-[20%]":e.props.thumbnailsPosition==="top"||e.props.thumbnailsPosition==="bottom"},"overflow-auto","cursor-pointer","opacity-50",'[&[data-p-active="true"]]:opacity-100',"hover:opacity-100","transition-opacity duration-300"]}),thumbnailNextButton:{class:["self-center relative","flex shrink-0 justify-center items-center overflow-hidden","m-2","bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out","hover:bg-surface-0/10 hover:text-white","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"]},indicatorList:({parent:e})=>({class:["flex items-center justify-center","p-4",{"order-2":e.props.indicatorsPosition=="bottom","order-1":e.props.indicatorsPosition=="top","order-1 flex-col":e.props.indicatorsPosition=="left","flex-col order-2":e.props.indicatorsPosition=="right"},{"absolute z-10 bg-black/50":e.props.showIndicatorsOnItem},{"bottom-0 left-0 w-full items-start":e.props.indicatorsPosition=="bottom"&&e.props.showIndicatorsOnItem,"top-0 left-0 w-full items-start":e.props.indicatorsPosition=="top"&&e.props.showIndicatorsOnItem,"left-0 top-0 h-full items-start":e.props.indicatorsPosition=="left"&&e.props.showIndicatorsOnItem,"right-0 top-0 h-full items-start":e.props.indicatorsPosition=="right"&&e.props.showIndicatorsOnItem}]}),indicator:({parent:e})=>({class:[{"mr-2":e.props.indicatorsPosition=="bottom"||e.props.indicatorsPosition=="top","mb-2":e.props.indicatorsPosition=="left"||e.props.indicatorsPosition=="right"}]}),indicatorButton:({context:e})=>({class:["w-4 h-4","rounded-full transition duration-200","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",{"bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600":!e.highlighted},{"bg-primary hover:bg-primary-emphasis":e.highlighted}]}),mask:{class:["fixed top-0 left-0 w-full h-full","flex items-center justify-center","bg-black/90"]},closeButton:{class:["!absolute top-0 right-0","flex justify-center items-center overflow-hidden","m-2","text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out","hover:text-white hover:bg-surface-0/10","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"]},closeIcon:{class:"w-6 h-6"},prevButton:({parent:e})=>({class:["inline-flex justify-center items-center overflow-hidden","bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md",{"opacity-0 group-hover:opacity-100":e.props.showItemNavigatorsOnHover},"mx-2","top-1/2 mt-[-0.5rem] left-0",{"!absolute":!e.state.containerVisible&&e.props.showItemNavigators,"!fixed":e.state.containerVisible},"hover:bg-surface-0/10 hover:text-white","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"]}),nextButton:({parent:e})=>({class:["inline-flex justify-center items-center overflow-hidden","bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md",{"opacity-0 group-hover:opacity-100":e.props.showItemNavigatorsOnHover},"mx-2","top-1/2 mt-[-0.5rem] right-0",{"!absolute":!e.state.containerVisible&&e.props.showItemNavigators,"!fixed":e.state.containerVisible},"hover:bg-surface-0/10 hover:text-white","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"]}),caption:{class:["absolute bottom-0 left-0 w-full","bg-black/50 text-white p-4"]},transition:{enterFromClass:"opacity-0 scale-75",enterActiveClass:"transition-all duration-150 ease-in-out",leaveActiveClass:"transition-all duration-150 ease-in",leaveToClass:"opacity-0 scale-75"}},gE={root:{class:"relative inline-block"},previewMask:{class:["flex items-center justify-center","absolute","inset-0 opacity-0 transition-opacity duration-300","bg-transparent text-surface-100","hover:opacity-100 hover:cursor-pointer hover:bg-black/50 hover:bg-opacity-50"]},mask:{class:["flex items-center justify-center","fixed top-0 left-0","w-full h-full","bg-black/90"]},toolbar:{class:["flex","absolute top-0 right-0","p-4"]},rotateRightButton:{class:["z-20","flex justify-center items-center","w-12 h-12","mr-2","rounded-full","text-white bg-transparent","hover:text-white hover:bg-surface-0/10","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200 ease-in-out"]},rotateRightIcon:{class:"w-6 h-6"},rotateLeftButton:{class:["z-20","flex justify-center items-center","w-12 h-12","mr-2","rounded-full","text-white bg-transparent","hover:text-white hover:bg-surface-0/10","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200 ease-in-out"]},rotateLeftIcon:{class:"w-6 h-6"},zoomOutButton:{class:["z-20","flex justify-center items-center","w-12 h-12","mr-2","rounded-full","text-white bg-transparent","hover:text-white hover:bg-surface-0/10","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200 ease-in-out"]},zoomOutIcon:{class:"w-6 h-6"},zoomInButton:{class:["z-20","flex justify-center items-center","w-12 h-12","mr-2","rounded-full","text-white bg-transparent","hover:text-white hover:bg-surface-0/10","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200 ease-in-out"]},zoomInIcon:{class:"w-6 h-6"},closeButton:{class:["z-20","flex justify-center items-center","w-12 h-12","mr-2","rounded-full","text-white bg-transparent","hover:text-white hover:bg-surface-0/10","focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400","transition duration-200 ease-in-out"]},closeIcon:{class:"w-6 h-6"},transition:{enterFromClass:"opacity-0 scale-75",enterActiveClass:"transition-all duration-150 ease-in-out",leaveActiveClass:"transition-all duration-150 ease-in",leaveToClass:"opacity-0 scale-75"}},vE={root:({props:e,parent:t})=>{var n,r,o;return{class:[{"text-xl":e.size=="large","text-2xl":e.size=="xlarge"},"inline-flex items-center justify-center","relative",{"h-8 w-8":e.size==null||e.size=="normal","w-12 h-12":e.size=="large","w-16 h-16":e.size=="xlarge"},{"-ml-4":((n=t.instance.$style)==null?void 0:n.name)=="avatargroup"},{"rounded-lg":e.shape=="square","rounded-full":e.shape=="circle"},{"border-2":((r=t.instance.$style)==null?void 0:r.name)=="avatargroup"},"bg-surface-300 dark:bg-surface-700",{"border-white dark:border-surface-800":((o=t.instance.$style)==null?void 0:o.name)=="avatargroup"}]}},image:({props:e})=>({class:["h-full w-full",{"rounded-lg":e.shape=="square","rounded-full":e.shape=="circle"}]})},yE={root:({props:e})=>{var t,n;return{class:["font-bold",{"text-xs leading-[1.5rem]":e.size===null,"text-[0.625rem] leading-[1.25rem]":e.size==="small","text-lg leading-[2.25rem]":e.size==="large","text-2xl leading-[3rem]":e.size==="xlarge"},"text-center inline-block","p-0 px-1",{"w-2 h-2":e.value===null,"min-w-[1.5rem] h-[1.5rem]":e.value!==null&&e.size===null,"min-w-[1.25rem] h-[1.25rem]":e.size==="small","min-w-[2.25rem] h-[2.25rem]":e.size==="large","min-w-[3rem] h-[3rem]":e.size==="xlarge"},{"rounded-full":((t=e.value)==null?void 0:t.length)===1,"rounded-[0.71rem]":((n=e.value)==null?void 0:n.length)!==1},"text-primary-contrast",{"bg-primary":e.severity==null||e.severity==="primary","bg-surface-500 dark:bg-surface-400":e.severity==="secondary","bg-green-500 dark:bg-green-400":e.severity==="success","bg-blue-500 dark:bg-blue-400":e.severity==="info","bg-orange-500 dark:bg-orange-400":e.severity==="warn","bg-purple-500 dark:bg-purple-400":e.severity==="help","bg-red-500 dark:bg-red-400":e.severity==="danger","text-surface-0 dark:text-surface-900 bg-surface-900 dark:bg-surface-0":e.severity==="contrast"}]}}},wE={root:"relative",mask:"bg-black/40 rounded-md"},kE={root:{class:["inline-flex items-center","px-3 py-1 gap-2","rounded-[16px]","text-surface-700 dark:text-white","bg-surface-100 dark:bg-surface-700"]},label:{class:"leading-6 m-0"},icon:{class:"leading-6 mr-2"},image:{class:["w-8 h-8 -ml-2 mr-2","rounded-full"]},removeIcon:{class:["inline-block","rounded-md leading-6","w-4 h-4","transition duration-200 ease-in-out","cursor-pointer"]}},xE={display:{class:["inline","px-3 py-2","rounded-md","text-surface-700 dark:text-white/80","hover:bg-surface-100 hover:text-surface-700 dark:hover:bg-surface-800 dark:hover:text-white/80","transition","duration-200","cursor-pointer"]}},_E={root:({props:e})=>({class:["flex gap-4",{"flex-col":e.orientation=="horizontal","flex-row":e.orientation=="vertical"}]}),meters:({props:e})=>({class:["flex",{"flex-col":e.orientation==="vertical"},{"w-2 h-full":e.orientation==="vertical"},{"h-2":e.orientation==="horizontal"},"bg-gray-200 dark:bg-gray-700","rounded-lg"]}),meter:({props:e})=>({class:["border-0",{"first:rounded-l-lg last:rounded-r-lg":e.orientation==="horizontal"},{"first:rounded-t-lg last:rounded-b-lg":e.orientation==="vertical"},"bg-primary"]}),labelList:({props:e})=>({class:["flex flex-wrap",{"gap-4":e.labelOrientation==="horizontal"},{"gap-2":e.labelOrientation==="vertical"},{"flex-col":e.labelOrientation==="vertical"},{"align-end":e.labelOrientation==="horizontal"&&e.labelPosition==="end","align-start":e.labelOrientation==="horizontal"&&e.labelPosition==="start"},{"justify-start":e.labelOrientation==="vertical"&&e.labelPosition==="start"},"m-0 p-0 list-none"]}),label:{class:["inline-flex","items-center","gap-2"]},labelMarker:{class:["inline-flex","bg-primary","w-2 h-2","rounded-full"]}},IE={button:({props:e})=>({root:{class:["flex items-center justify-center",{"!sticky flex ml-auto":e.target==="parent","!fixed":e.target==="window"},"bottom-[20px] right-[20px]","h-10 w-10 rounded-full shadow-md","text-white dark:text-surface-900 bg-surface-600 dark:bg-surface-700","hover:bg-surface-600 dark:hover:bg-surface-300"]}}),transition:{enterFromClass:"opacity-0",enterActiveClass:"transition-opacity duration-150",leaveActiveClass:"transition-opacity duration-150",leaveToClass:"opacity-0"}},SE={root:({props:e})=>({class:["overflow-hidden",{"animate-pulse":e.animation!=="none"},{"rounded-full":e.shape==="circle","rounded-md":e.shape!=="circle"},"bg-surface-200 dark:bg-surface-700"]})},CE={root:{class:["overflow-hidden","relative","border-0","h-5","rounded-md","bg-surface-100 dark:bg-surface-800"]},value:({props:e})=>({class:[{"absolute flex items-center justify-center overflow-hidden":e.mode!=="indeterminate"},"bg-primary","m-0",{"h-full w-0":e.mode!=="indeterminate"},"border-0",{"transition-width duration-1000 ease-in-out":e.mode!=="indeterminate","progressbar-value-animate":e.mode=="indeterminate"},{"before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit ":e.mode=="indeterminate","after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000":e.mode=="indeterminate"}]}),label:{class:["text-xs font-semibold","inline-flex","text-white dark:text-surface-900","leading-5"]}},EE={root:{class:["relative","mx-auto","w-28","h-28","inline-block","before:block","before:pt-full"]},spinner:{class:["absolute","top-0","bottom-0","left-0","right-0","m-auto","w-full","h-full","transform","origin-center","animate-spin"]},circle:{class:["text-red-500","progress-spinner-circle"]}},TE={root:{class:["block absolute bg-surface-0/50 rounded-full pointer-events-none"],style:"transform: scale(0)"}},PE={root:({props:e})=>({class:["text-xs font-bold","inline-flex items-center justify-center","px-[0.4rem] py-1",{"rounded-md":!e.rounded,"rounded-full":e.rounded},{"bg-highlight":e.severity===null||e.severity==="primary","text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-500/20":e.severity==="success","text-surface-700 dark:text-surface-300 bg-surface-100 dark:bg-surface-500/20":e.severity==="secondary","text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/20":e.severity==="info","text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-500/20":e.severity==="warn","text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-500/20":e.severity==="danger","text-surface-0 dark:text-surface-900 bg-surface-900 dark:bg-surface-0":e.severity==="contrast"}]}),value:{class:"leading-normal"},icon:{class:"mr-1 text-sm"}},OE={root:{class:["py-2 px-3","rounded-md","bg-surface-0 dark:bg-surface-950 text-surface-700 dark:text-surface-0","border border-surface-200 dark:border-surface-700","h-72 overflow-auto"]},container:{class:["flex items-center"]},prompt:{class:["text-surface-700 dark:text-surface-0"]},response:{class:["text-surface-700 dark:text-surface-0"]},command:{class:["text-surface-700 dark:text-surface-0"]},commandtext:{class:["flex-1 shrink grow-0","border-0","p-0","bg-transparent text-inherit","outline-none"]}},AE={global:t5,directives:{tooltip:nE,ripple:TE},autocomplete:n5,cascadeselect:r5,checkbox:o5,colorpicker:i5,datepicker:s5,floatlabel:a5,iconfield:l5,inputgroup:c5,inputotp:u5,inputgroupaddon:d5,inputmask:f5,inputnumber:h5,inputtext:m5,knob:p5,listbox:b5,multiselect:g5,password:v5,radiobutton:y5,rating:w5,select:k5,selectbutton:x5,slider:_5,textarea:I5,togglebutton:S5,toggleswitch:C5,treeselect:E5,button:T5,speeddial:P5,splitbutton:O5,datatable:A5,dataview:L5,orderlist:R5,organizationchart:$5,paginator:D5,picklist:N5,tree:M5,treetable:j5,timeline:B5,accordion:z5,card:F5,deferred:U5,divider:V5,fieldset:H5,panel:K5,scrollpanel:W5,splitter:q5,stepper:G5,tabs:J5,toolbar:Y5,confirmpopup:Z5,confirmdialog:X5,dialog:Q5,drawer:eE,popover:tE,fileupload:rE,breadcrumb:oE,contextmenu:iE,dock:sE,menu:aE,menubar:lE,megamenu:cE,panelmenu:uE,tabmenu:dE,tieredmenu:fE,message:hE,toast:mE,carousel:pE,galleria:bE,image:gE,avatar:vE,badge:yE,blockui:wE,chip:kE,inplace:xE,metergroup:_E,scrolltop:IE,skeleton:SE,progressbar:CE,progressspinner:EE,tag:PE,terminal:OE};var LE=function(t){var n=t.dt;return`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: `.concat(n("tooltip.max.width"),`;
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 `).concat(n("tooltip.gutter"),`;
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: `).concat(n("tooltip.gutter"),` 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: `).concat(n("tooltip.background"),`;
    color: `).concat(n("tooltip.color"),`;
    padding: `).concat(n("tooltip.padding"),`;
    box-shadow: `).concat(n("tooltip.shadow"),`;
    border-radius: `).concat(n("tooltip.border.radius"),`;
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    margin-top: calc(-1 * `).concat(n("tooltip.gutter"),`);
    border-width: `).concat(n("tooltip.gutter")," ").concat(n("tooltip.gutter")," ").concat(n("tooltip.gutter"),` 0;
    border-right-color: `).concat(n("tooltip.background"),`;
}

.p-tooltip-left .p-tooltip-arrow {
    margin-top: calc(-1 * `).concat(n("tooltip.gutter"),`);
    border-width: `).concat(n("tooltip.gutter")," 0 ").concat(n("tooltip.gutter")," ").concat(n("tooltip.gutter"),`;
    border-left-color: `).concat(n("tooltip.background"),`;
}

.p-tooltip-top .p-tooltip-arrow {
    margin-left: calc(-1 * `).concat(n("tooltip.gutter"),`);
    border-width: `).concat(n("tooltip.gutter")," ").concat(n("tooltip.gutter")," 0 ").concat(n("tooltip.gutter"),`;
    border-top-color: `).concat(n("tooltip.background"),`;
    border-bottom-color: `).concat(n("tooltip.background"),`;
}

.p-tooltip-bottom .p-tooltip-arrow {
    margin-left: calc(-1 * `).concat(n("tooltip.gutter"),`);
    border-width: 0 `).concat(n("tooltip.gutter")," ").concat(n("tooltip.gutter")," ").concat(n("tooltip.gutter"),`;
    border-top-color: `).concat(n("tooltip.background"),`;
    border-bottom-color: `).concat(n("tooltip.background"),`;
}
`)},RE={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},$E=be.extend({name:"tooltip-directive",theme:LE,classes:RE}),DE=se.extend({style:$E});function NE(e,t){return zE(e)||BE(e,t)||jE(e,t)||ME()}function ME(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jE(e,t){if(e){if(typeof e=="string")return Ad(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ad(e,t):void 0}}function Ad(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function BE(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,s,l=[],a=!0,c=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return l}}function zE(e){if(Array.isArray(e))return e}function Ld(e,t,n){return(t=FE(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FE(e){var t=UE(e,"string");return Bn(t)=="symbol"?t:t+""}function UE(e,t){if(Bn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Bn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}var VE=DE.extend("tooltip",{beforeMount:function(t,n){var r,o=this.getTarget(t);if(o.$_ptooltipModifiers=this.getModifiers(n),n.value){if(typeof n.value=="string")o.$_ptooltipValue=n.value,o.$_ptooltipDisabled=!1,o.$_ptooltipEscape=!0,o.$_ptooltipClass=null,o.$_ptooltipFitContent=!0,o.$_ptooltipIdAttr=ut()+"_tooltip",o.$_ptooltipShowDelay=0,o.$_ptooltipHideDelay=0,o.$_ptooltipAutoHide=!0;else if(Bn(n.value)==="object"&&n.value){if(st(n.value.value)||n.value.value.trim()==="")return;o.$_ptooltipValue=n.value.value,o.$_ptooltipDisabled=!!n.value.disabled===n.value.disabled?n.value.disabled:!1,o.$_ptooltipEscape=!!n.value.escape===n.value.escape?n.value.escape:!0,o.$_ptooltipClass=n.value.class||"",o.$_ptooltipFitContent=!!n.value.fitContent===n.value.fitContent?n.value.fitContent:!0,o.$_ptooltipIdAttr=n.value.id||ut()+"_tooltip",o.$_ptooltipShowDelay=n.value.showDelay||0,o.$_ptooltipHideDelay=n.value.hideDelay||0,o.$_ptooltipAutoHide=!!n.value.autoHide===n.value.autoHide?n.value.autoHide:!0}}else return;o.$_ptooltipZIndex=(r=n.instance.$primevue)===null||r===void 0||(r=r.config)===null||r===void 0||(r=r.zIndex)===null||r===void 0?void 0:r.tooltip,this.bindEvents(o,n),t.setAttribute("data-pd-tooltip",!0)},updated:function(t,n){var r=this.getTarget(t);if(r.$_ptooltipModifiers=this.getModifiers(n),this.unbindEvents(r),!!n.value){if(typeof n.value=="string")r.$_ptooltipValue=n.value,r.$_ptooltipDisabled=!1,r.$_ptooltipEscape=!0,r.$_ptooltipClass=null,r.$_ptooltipIdAttr=r.$_ptooltipIdAttr||ut()+"_tooltip",r.$_ptooltipShowDelay=0,r.$_ptooltipHideDelay=0,r.$_ptooltipAutoHide=!0,this.bindEvents(r,n);else if(Bn(n.value)==="object"&&n.value)if(st(n.value.value)||n.value.value.trim()===""){this.unbindEvents(r,n);return}else r.$_ptooltipValue=n.value.value,r.$_ptooltipDisabled=!!n.value.disabled===n.value.disabled?n.value.disabled:!1,r.$_ptooltipEscape=!!n.value.escape===n.value.escape?n.value.escape:!0,r.$_ptooltipClass=n.value.class||"",r.$_ptooltipFitContent=!!n.value.fitContent===n.value.fitContent?n.value.fitContent:!0,r.$_ptooltipIdAttr=n.value.id||r.$_ptooltipIdAttr||ut()+"_tooltip",r.$_ptooltipShowDelay=n.value.showDelay||0,r.$_ptooltipHideDelay=n.value.hideDelay||0,r.$_ptooltipAutoHide=!!n.value.autoHide===n.value.autoHide?n.value.autoHide:!0,this.bindEvents(r,n)}},unmounted:function(t,n){var r=this.getTarget(t);this.remove(r),this.unbindEvents(r,n),r.$_ptooltipScrollHandler&&(r.$_ptooltipScrollHandler.destroy(),r.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(t,n){var r=this,o=t.$_ptooltipModifiers;o.focus?(t.$_focusevent=function(i){return r.onFocus(i,n)},t.addEventListener("focus",t.$_focusevent),t.addEventListener("blur",this.onBlur.bind(this))):(t.$_mouseenterevent=function(i){return r.onMouseEnter(i,n)},t.addEventListener("mouseenter",t.$_mouseenterevent),t.addEventListener("mouseleave",this.onMouseLeave.bind(this)),t.addEventListener("click",this.onClick.bind(this))),t.addEventListener("keydown",this.onKeydown.bind(this))},unbindEvents:function(t){var n=t.$_ptooltipModifiers;n.focus?(t.removeEventListener("focus",t.$_focusevent),t.$_focusevent=null,t.removeEventListener("blur",this.onBlur.bind(this))):(t.removeEventListener("mouseenter",t.$_mouseenterevent),t.$_mouseenterevent=null,t.removeEventListener("mouseleave",this.onMouseLeave.bind(this)),t.removeEventListener("click",this.onClick.bind(this))),t.removeEventListener("keydown",this.onKeydown.bind(this))},bindScrollListener:function(t){var n=this;t.$_ptooltipScrollHandler||(t.$_ptooltipScrollHandler=new Nh(t,function(){n.hide(t)})),t.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(t){t.$_ptooltipScrollHandler&&t.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(t,n){var r=t.currentTarget,o=r.$_ptooltipShowDelay;this.show(r,n,o)},onMouseLeave:function(t){var n=t.currentTarget,r=n.$_ptooltipHideDelay,o=n.$_ptooltipAutoHide;if(o)this.hide(n,r);else{var i=Zn(t.target,"data-pc-name")==="tooltip"||Zn(t.target,"data-pc-section")==="arrow"||Zn(t.target,"data-pc-section")==="text"||Zn(t.relatedTarget,"data-pc-name")==="tooltip"||Zn(t.relatedTarget,"data-pc-section")==="arrow"||Zn(t.relatedTarget,"data-pc-section")==="text";!i&&this.hide(n,r)}},onFocus:function(t,n){var r=t.currentTarget,o=r.$_ptooltipShowDelay;this.show(r,n,o)},onBlur:function(t){var n=t.currentTarget,r=n.$_ptooltipHideDelay;this.hide(n,r)},onClick:function(t){var n=t.currentTarget,r=n.$_ptooltipHideDelay;this.hide(n,r)},onKeydown:function(t){var n=t.currentTarget,r=n.$_ptooltipHideDelay;t.code==="Escape"&&this.hide(t.currentTarget,r)},tooltipActions:function(t,n){if(!(t.$_ptooltipDisabled||!kh(t))){var r=this.create(t,n);this.align(t),!this.isUnstyled()&&Cg(r,250);var o=this;window.addEventListener("resize",function i(){_l()||o.hide(t),window.removeEventListener("resize",i)}),r.addEventListener("mouseleave",function i(){o.hide(t),r.removeEventListener("mouseleave",i)}),this.bindScrollListener(t),We.set("tooltip",r,t.$_ptooltipZIndex)}},show:function(t,n,r){var o=this;r!==void 0?this.timer=setTimeout(function(){return o.tooltipActions(t,n)},r):this.tooltipActions(t,n)},tooltipRemoval:function(t){this.remove(t),this.unbindScrollListener(t)},hide:function(t,n){var r=this;clearTimeout(this.timer),n!==void 0?setTimeout(function(){return r.tooltipRemoval(t)},n):this.tooltipRemoval(t)},getTooltipElement:function(t){return document.getElementById(t.$_ptooltipId)},create:function(t){var n=t.$_ptooltipModifiers,r=lo("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:n})}),o=lo("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:n})});t.$_ptooltipEscape?(o.innerHTML="",o.appendChild(document.createTextNode(t.$_ptooltipValue))):o.innerHTML=t.$_ptooltipValue;var i=lo("div",Ld(Ld({id:t.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:t.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&t.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),t.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:n})),r,o);return document.body.appendChild(i),t.$_ptooltipId=i.id,this.$el=i,i},remove:function(t){if(t){var n=this.getTooltipElement(t);n&&n.parentElement&&(We.clear(n),document.body.removeChild(n)),t.$_ptooltipId=null}},align:function(t){var n=t.$_ptooltipModifiers;n.top?(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignTop(t))):n.left?(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignLeft(t))))):n.bottom?(this.alignBottom(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&this.alignBottom(t))):(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignRight(t)))))},getHostOffset:function(t){var n=t.getBoundingClientRect(),r=n.left+ph(),o=n.top+bh();return{left:r,top:o}},alignRight:function(t){this.preAlign(t,"right");var n=this.getTooltipElement(t),r=this.getHostOffset(t),o=r.left+St(t),i=r.top+(nn(t)-nn(n))/2;n.style.left=o+"px",n.style.top=i+"px"},alignLeft:function(t){this.preAlign(t,"left");var n=this.getTooltipElement(t),r=this.getHostOffset(t),o=r.left-St(n),i=r.top+(nn(t)-nn(n))/2;n.style.left=o+"px",n.style.top=i+"px"},alignTop:function(t){this.preAlign(t,"top");var n=this.getTooltipElement(t),r=this.getHostOffset(t),o=r.left+(St(t)-St(n))/2,i=r.top-nn(n);n.style.left=o+"px",n.style.top=i+"px"},alignBottom:function(t){this.preAlign(t,"bottom");var n=this.getTooltipElement(t),r=this.getHostOffset(t),o=r.left+(St(t)-St(n))/2,i=r.top+nn(t);n.style.left=o+"px",n.style.top=i+"px"},preAlign:function(t,n){var r=this.getTooltipElement(t);r.style.left="-999px",r.style.top="-999px",ao(r,"p-tooltip-".concat(r.$_ptooltipPosition)),!this.isUnstyled()&&Ho(r,"p-tooltip-".concat(n)),r.$_ptooltipPosition=n,r.setAttribute("data-p-position",n);var o=fn(r,'[data-pc-section="arrow"]');o.style.top=n==="bottom"?"0":n==="right"||n==="left"||n!=="right"&&n!=="left"&&n!=="top"&&n!=="bottom"?"50%":null,o.style.bottom=n==="top"?"0":null,o.style.left=n==="right"||n!=="right"&&n!=="left"&&n!=="top"&&n!=="bottom"?"0":n==="top"||n==="bottom"?"50%":null,o.style.right=n==="left"?"0":null},isOutOfBounds:function(t){var n=this.getTooltipElement(t),r=n.getBoundingClientRect(),o=r.top,i=r.left,s=St(n),l=nn(n),a=xl();return i+s>a.width||i<0||o<0||o+l>a.height},getTarget:function(t){return mh(t,"p-inputwrapper")?fn(t,"input"):t},getModifiers:function(t){return t.modifiers&&Object.keys(t.modifiers).length?t.modifiers:t.arg&&Bn(t.arg)==="object"?Object.entries(t.arg).reduce(function(n,r){var o=NE(r,2),i=o[0],s=o[1];return(i==="event"||i==="position")&&(n[s]=!0),n},{}):{}}}}),HE={install:function(t){var n={add:function(o){It.emit("add",o)},remove:function(o){It.emit("remove",o)},removeGroup:function(o){It.emit("remove-group",o)},removeAllGroups:function(){It.emit("remove-all-groups")}};t.config.globalProperties.$toast=n,t.provide(gp,n)}};const hr=Zb(FS);hr.directive("tooltip",VE);hr.directive("ripple",jr);hr.use(tg());hr.use(wp);hr.use(HE);hr.use(rv,{unstyled:!0,ripple:!0,pt:AE});hr.mount("#app");
