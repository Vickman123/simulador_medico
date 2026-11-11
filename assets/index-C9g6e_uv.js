var iu=Object.defineProperty;var su=(r,e,t)=>e in r?iu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var A=(r,e,t)=>su(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="187",Hi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ru=0,dl=1,au=2,vr=1,Xc=2,gs=3,ri=0,jt=1,St=2,Vi=0,ys=1,xi=2,fl=3,pl=4,ou=5,zi=100,lu=101,cu=102,hu=103,uu=104,du=200,fu=201,pu=202,mu=203,qc=204,Yc=205,gu=206,_u=207,vu=208,xu=209,yu=210,Su=211,Mu=212,bu=213,Eu=214,Ra=0,Ca=1,La=2,As=3,Pa=4,Ia=5,Da=6,Na=7,Kc=0,Tu=1,wu=2,Wn=0,$c=1,Zc=2,Jc=3,So=4,jc=5,Qc=6,eh=7,ml="attached",Au="detached",th=300,Yi=301,Rs=302,Vr=303,Wr=304,Ki=1e3,Rn=1001,Tr=1002,Lt=1003,nh=1004,_s=1005,Mt=1006,xr=1007,Cn=1008,nn=1009,ih=1010,sh=1011,Cs=1012,Mo=1013,Pn=1014,un=1015,In=1016,bo=1017,Eo=1018,$i=1020,rh=35902,ah=35899,oh=1021,lh=1022,_n=1023,ai=1026,ii=1027,To=1028,wo=1029,yi=1030,Ao=1031,Ro=1033,yr=33776,Sr=33777,Mr=33778,br=33779,Ua=35840,Oa=35841,Fa=35842,Ba=35843,ka=36196,za=37492,Ga=37496,Ha=37488,Va=37489,wr=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Ka=37811,$a=37812,Za=37813,Ja=37814,ja=37815,Qa=37816,eo=37817,to=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,Ar=36285,ho=36286,Ls=2300,Ps=2301,Xr=2302,gl=2303,_l=2400,vl=2401,xl=2402,Ru=2500,Cu=0,ch=1,uo=2,Lu=3200,fo=0,Pu=1,ni="",yt="srgb",Qt="srgb-linear",Rr="linear",st="srgb",qr=7680,Iu=519,Du=512,Nu=513,Uu=514,hh=515,Ou=516,Fu=517,uh=518,dh=519,fh=35044,yl="300 es",vn=2e3,Is=2001;function Bu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ku(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zu(){const r=Ds("canvas");return r.style.display="block",r}const Sl={};function Cr(...r){const e="THREE."+r.shift();console.log(e,...r)}function ph(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ae(...r){r=ph(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ne(...r){r=ph(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Wi(...r){const e=r.join(" ");e in Sl||(Sl[e]=!0,Ae(...r))}function Gu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Hu={[Ra]:Ra,[La]:Da,[Pa]:Pa,[As]:Ia,[Ca]:Ca,[Da]:La,[Na]:Na,[Ia]:As};class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ml=1234567;const Ss=Math.PI/180,Zi=180/Math.PI;function Dn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[r&255]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function He(r,e,t){return Math.max(e,Math.min(t,r))}function Co(r,e){return(r%e+e)%e}function Vu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Wu(r,e,t){return r!==e?(t-r)/(e-r):0}function Ms(r,e,t){return(1-t)*r+t*e}function Xu(r,e,t,n){return Ms(r,e,1-Math.exp(-t*n))}function qu(r,e=1){return e-Math.abs(Co(r,e*2)-e)}function Yu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ku(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function $u(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Zu(r,e){return r+Math.random()*(e-r)}function Ju(r){return r*(.5-Math.random())}function ju(r){r!==void 0&&(Ml=r);let e=Ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qu(r){return r*Ss}function ed(r){return r*Zi}function td(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function nd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function id(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fr(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Lo(r,e){if(e.constructor===Float32Array)return r;const t=Fr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Po(r,e){if(e.constructor===Float32Array)return r;const t=Fr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const gh={DEG2RAD:Ss,RAD2DEG:Zi,generateUUID:Dn,clamp:He,euclideanModulo:Co,mapLinear:Vu,inverseLerp:Wu,lerp:Ms,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:Ku,randInt:$u,randFloat:Zu,randFloatSpread:Ju,seededRandom:ju,degToRad:Qu,radToDeg:ed,isPowerOfTwo:td,ceilPowerOfTwo:nd,floorPowerOfTwo:mh,setQuaternionFromProperEuler:id,normalize:Po,denormalize:Lo},Jo=class Jo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jo.prototype.isVector2=!0;let xe=Jo;class yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],m=s[a+2],v=s[a+3];if(d!==v||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*v;p<0&&(u=-u,f=-f,m=-m,v=-v,p=-p);let g=1-o;if(p<.9995){const x=Math.acos(p),T=Math.sin(x);g=Math.sin(g*x)/T,o=Math.sin(o*x)/T,l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+v*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-o*f,e[t+2]=c*m+h*f+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jo=class jo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jo.prototype.isVector3=!0;let y=jo;const Yr=new y,bl=new yn,Qo=class Qo{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=i[0],p=i[3],g=i[6],x=i[1],T=i[4],S=i[7],R=i[2],w=i[5],_=i[8];return s[0]=a*v+o*x+l*R,s[3]=a*p+o*T+l*w,s[6]=a*g+o*S+l*_,s[1]=c*v+h*x+d*R,s[4]=c*p+h*T+d*w,s[7]=c*g+h*S+d*_,s[2]=u*v+f*x+m*R,s[5]=u*p+f*T+m*w,s[8]=u*g+f*S+m*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,m=t*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qo.prototype.isMatrix3=!0;let Fe=Qo;const Kr=new Fe,El=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sd(){const r={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?Rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qt]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),r}const qe=sd();function Xn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wi;class rd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Ds("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ad=0;class Io{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push($r(i[a].image)):s.push($r(i[a]))}else s=$r(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function $r(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let od=0;const Zr=new y;class Pt extends li{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Rn,i=Rn,s=Mt,a=Cn,o=_n,l=nn,c=Pt.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Dn(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zr).x}get height(){return this.source.getSize(Zr).y}get depth(){return this.source.getSize(Zr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=th;Pt.DEFAULT_ANISOTROPY=1;const el=class el{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(f+1)/2,R=(g+1)/2,w=(h+u)/4,_=(d+v)/4,M=(m+p)/4;return T>S&&T>R?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=_/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=M/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=_/s,i=M/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-m)*(p-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};el.prototype.isVector4=!0;let ot=el;class ld extends li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Pt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _h extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Or=class Or{constructor(e,t,n,i,s,a,o,l,c,h,d,u,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,f,m,v,p)}set(e,t,n,i,s,a,o,l,c,h,d,u,f,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Or().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,f=a*d,m=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,m=c*h,v=c*d;t[0]=u+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,m=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,m=o*h,v=o*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hd,e,ud)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),$n.crossVectors(n,en),$n.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),$n.crossVectors(n,en)),$n.normalize(),Ws.crossVectors(en,$n),i[0]=$n.x,i[4]=Ws.x,i[8]=en.x,i[1]=$n.y,i[5]=Ws.y,i[9]=en.y,i[2]=$n.z,i[6]=Ws.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],x=n[3],T=n[7],S=n[11],R=n[15],w=i[0],_=i[4],M=i[8],L=i[12],P=i[1],N=i[5],F=i[9],V=i[13],D=i[2],W=i[6],q=i[10],G=i[14],te=i[3],H=i[7],K=i[11],ee=i[15];return s[0]=a*w+o*P+l*D+c*te,s[4]=a*_+o*N+l*W+c*H,s[8]=a*M+o*F+l*q+c*K,s[12]=a*L+o*V+l*G+c*ee,s[1]=h*w+d*P+u*D+f*te,s[5]=h*_+d*N+u*W+f*H,s[9]=h*M+d*F+u*q+f*K,s[13]=h*L+d*V+u*G+f*ee,s[2]=m*w+v*P+p*D+g*te,s[6]=m*_+v*N+p*W+g*H,s[10]=m*M+v*F+p*q+g*K,s[14]=m*L+v*V+p*G+g*ee,s[3]=x*w+T*P+S*D+R*te,s[7]=x*_+T*N+S*W+R*H,s[11]=x*M+T*F+S*q+R*K,s[15]=x*L+T*V+S*G+R*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15],x=l*f-c*u,T=o*f-c*d,S=o*u-l*d,R=a*f-c*h,w=a*u-l*h,_=a*d-o*h;return t*(v*x-p*T+g*S)-n*(m*x-p*R+g*w)+i*(m*T-v*R+g*_)-s*(m*S-v*w+p*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],x=t*o-n*a,T=t*l-i*a,S=t*c-s*a,R=n*l-i*o,w=n*c-s*o,_=i*c-s*l,M=h*v-d*m,L=h*p-u*m,P=h*g-f*m,N=d*p-u*v,F=d*g-f*v,V=u*g-f*p,D=x*V-T*F+S*N+R*P-w*L+_*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/D;return e[0]=(o*V-l*F+c*N)*W,e[1]=(i*F-n*V-s*N)*W,e[2]=(v*_-p*w+g*R)*W,e[3]=(u*w-d*_-f*R)*W,e[4]=(l*P-a*V-c*L)*W,e[5]=(t*V-i*P+s*L)*W,e[6]=(p*S-m*_-g*T)*W,e[7]=(h*_-u*S+f*T)*W,e[8]=(a*F-o*P+c*M)*W,e[9]=(n*P-t*F-s*M)*W,e[10]=(m*w-v*S+g*x)*W,e[11]=(d*S-h*w-f*x)*W,e[12]=(o*L-a*N-l*M)*W,e[13]=(t*N-n*L+i*M)*W,e[14]=(v*T-m*R-p*x)*W,e[15]=(h*R-d*T+u*x)*W,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,m=s*d,v=a*h,p=a*d,g=o*d,x=l*c,T=l*h,S=l*d,R=n.x,w=n.y,_=n.z;return i[0]=(1-(v+g))*R,i[1]=(f+S)*R,i[2]=(m-T)*R,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(u+g))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(m+T)*_,i[9]=(p-x)*_,i[10]=(1-(u+v))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ai.set(i[0],i[1],i[2]).length();const o=Ai.set(i[4],i[5],i[6]).length(),l=Ai.set(i[8],i[9],i[10]).length();s<0&&(a=-a),fn.copy(this);const c=1/a,h=1/o,d=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=vn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===vn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Is)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=vn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===vn)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===Is)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Or.prototype.isMatrix4=!0;let Ue=Or;const Ai=new y,fn=new Ue,hd=new y(0,0,0),ud=new y(1,1,1),$n=new y,Ws=new y,en=new y,wl=new Ue,Al=new yn;class oi{constructor(e=0,t=0,n=0,i=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Do{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dd=0;const Rl=new y,Ri=new yn,On=new Ue,Xs=new y,as=new y,fd=new y,pd=new yn,Cl=new y(1,0,0),Ll=new y(0,1,0),Pl=new y(0,0,1),Il={type:"added"},md={type:"removed"},Ci={type:"childadded",child:null},Jr={type:"childremoved",child:null};class gt extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new y,t=new oi,n=new yn,i=new y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Fe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(as,Xs,this.up):On.lookAt(Xs,as,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(On),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(md),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gt.DEFAULT_UP=new y(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ze extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gd={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Qr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Co(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qr(a,s,e+1/3),this.g=Qr(a,s,e),this.b=Qr(a,s,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return qe.workingToColorSpace(Wt.copy(this),e),Math.round(He(Wt.r*255,0,255))*65536+Math.round(He(Wt.g*255,0,255))*256+Math.round(He(Wt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,s=Wt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=yt){qe.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(qs);const n=Ms(Zn.h,qs.h,t),i=Ms(Zn.s,qs.s,t),s=Ms(Zn.l,qs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ye;ye.NAMES=vh;class No{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new No(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _d extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new y,Fn=new y,ea=new y,Bn=new y,Li=new y,Pi=new y,Dl=new y,ta=new y,na=new y,ia=new y,sa=new ot,ra=new ot,aa=new ot;class gn{constructor(e=new y,t=new y,n=new y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),Fn.subVectors(n,t),ea.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Fn),l=pn.dot(ea),c=Fn.dot(Fn),h=Fn.dot(ea),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return sa.setScalar(0),ra.setScalar(0),aa.setScalar(0),sa.fromBufferAttribute(e,t),ra.fromBufferAttribute(e,n),aa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(sa,s.x),a.addScaledVector(ra,s.y),a.addScaledVector(aa,s.z),a}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Fn.subVectors(e,t),pn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Li.subVectors(i,n),Pi.subVectors(s,n),ta.subVectors(e,n);const l=Li.dot(ta),c=Pi.dot(ta);if(l<=0&&c<=0)return t.copy(n);na.subVectors(e,i);const h=Li.dot(na),d=Pi.dot(na);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Li,a);ia.subVectors(e,s);const f=Li.dot(ia),m=Pi.dot(ia);if(m>=0&&f<=m)return t.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Pi,o);const p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Dl.subVectors(s,i),o=(d-h)/(d-h+(f-m)),t.copy(i).addScaledVector(Dl,o);const g=1/(p+v+u);return a=v*g,o=u*g,t.copy(n).addScaledVector(Li,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mt{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Ks.subVectors(this.max,os),Ii.subVectors(e.a,os),Di.subVectors(e.b,os),Ni.subVectors(e.c,os),Jn.subVectors(Di,Ii),jn.subVectors(Ni,Di),fi.subVectors(Ii,Ni);let t=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-fi.z,fi.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,fi.z,0,-fi.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-fi.y,fi.x,0];return!oa(t,Ii,Di,Ni,Ks)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Ii,Di,Ni,Ks))?!1:($s.crossVectors(Jn,jn),t=[$s.x,$s.y,$s.z],oa(t,Ii,Di,Ni,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new y,new y,new y,new y,new y,new y,new y,new y],mn=new y,Ys=new mt,Ii=new y,Di=new y,Ni=new y,Jn=new y,jn=new y,fi=new y,os=new y,Ks=new y,$s=new y,pi=new y;function oa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){pi.fromArray(r,s);const o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tt=new y,Zs=new xe;let vd=0;class wt extends li{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=e!==void 0?Fr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Po(e,this.array)}}class xh extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yh extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const xd=new mt,ls=new y,la=new y;class Nn{constructor(e=new y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(la)),this.expandByPoint(ls.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yd=0;const cn=new Ue,ca=new gt,Ui=new y,tn=new mt,cs=new mt,Ft=new y;class dt extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)?yh:xh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(tn.min,cs.min),tn.expandByPoint(Ft),Ft.addVectors(tn.max,cs.max),tn.expandByPoint(Ft)):(tn.expandByPoint(cs.min),tn.expandByPoint(cs.max))}tn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),Ft.add(Ui)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new y,l[L]=new y;const h=new y,d=new y,u=new y,f=new xe,m=new xe,v=new xe,p=new y,g=new y;function x(L,P,N){c[L]=c[P]=c[N]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,P),u.fromBufferAttribute(n,N),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,P),v.fromBufferAttribute(s,N),d.sub(h),u.sub(h),m.sub(f),v.sub(f);const F=1/(m.x*v.y-v.x*m.y);isFinite(F)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(F),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(F),o[L].add(p),o[P].add(p),o[N].add(p),l[L].add(g),l[P].add(g),l[N].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,P=T.length;L<P;++L){const N=T[L],F=N.start,V=N.count;for(let D=F,W=F+V;D<W;D+=3)x(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const S=new y,R=new y,w=new y,_=new y;function M(L){w.fromBufferAttribute(i,L),_.copy(w);const P=o[L];S.copy(P),S.sub(w.multiplyScalar(w.dot(P))).normalize(),R.crossVectors(_,P);const F=R.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,F)}for(let L=0,P=n.count;L<P;++L)c[L]&&M(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new y,s=new y,a=new y,o=new y,l=new y,c=new y,h=new y,d=new y;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new wt(u,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Nl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Nl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Nl(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Dn()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}const Yt=new y;class Br{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Fr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Br(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Lo(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Po(e,this.data.array)}}const ha=new y,Sd=new y,Md=new Fe;class Hn{constructor(e=new y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ha.subVectors(n,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Md.getNormalMatrix(e),i=this.coplanarPoint(ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bd=0;class xn extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=ys,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zn=new y,ua=new y,Js=new y,js=new y;class Qi{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ua.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),js.copy(this.origin).sub(ua);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=js.dot(this.direction),l=-js.dot(Js),c=js.lengthSq(),h=Math.abs(1-a*a);let d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ua).addScaledVector(Js,u),f}intersectSphere(e,t){if(e.radius<0)return null;zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,m=t.x-a.x,v=t.y-a.y,p=t.z-a.z,g=n.x-a.x,x=n.y-a.y,T=n.z-a.z,S=Math.abs(l),R=Math.abs(c),w=Math.abs(h);let _,M,L,P,N,F,V,D,W,q,G,te;if(S>=R&&S>=w?(L=l,F=d,W=m,te=g,l>=0?(_=c,M=h,P=u,N=f,V=v,D=p,q=x,G=T):(_=h,M=c,P=f,N=u,V=p,D=v,q=T,G=x)):R>=w?(L=c,F=u,W=v,te=x,c>=0?(_=h,M=l,P=f,N=d,V=p,D=m,q=T,G=g):(_=l,M=h,P=d,N=f,V=m,D=p,q=g,G=T)):(L=h,F=f,W=p,te=T,h>=0?(_=l,M=c,P=d,N=u,V=m,D=v,q=g,G=x):(_=c,M=l,P=u,N=d,V=v,D=m,q=x,G=g)),L===0)return null;const H=_/L,K=M/L,ee=1/L,Me=P-H*F,De=N-K*F,J=V-H*W,ge=D-K*W,be=q-H*te,Le=G-K*te,_e=be*ge-Le*J,ke=Me*Le-De*be,bt=J*De-ge*Me;if(i){if(_e<0||ke<0||bt<0)return null}else if((_e<0||ke<0||bt<0)&&(_e>0||ke>0||bt>0))return null;const Ie=_e+ke+bt;if(Ie===0)return null;const nt=ee*(_e*F+ke*W+bt*te);return(Ie>0?nt<0:nt>0)?null:this.at(nt/Ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ul=new Ue,mi=new Qi,Qs=new Nn,Ol=new y,er=new y,tr=new y,nr=new y,da=new y,ir=new y,Fl=new y,sr=new y;class de extends gt{constructor(e=new dt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ir.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(da.fromBufferAttribute(d,e),a?ir.addScaledVector(da,h):ir.addScaledVector(da.sub(t),h))}t.add(ir)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),mi.copy(e.ray).recast(e.near),!(Qs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Qs,Ol)===null||mi.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Ul.copy(s).invert(),mi.copy(e.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=a[p.materialIndex],x=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=x,R=T;S<R;S+=3){const w=o.getX(S),_=o.getX(S+1),M=o.getX(S+2);i=rr(this,g,e,n,c,h,d,w,_,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const x=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);i=rr(this,a,e,n,c,h,d,x,T,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=a[p.materialIndex],x=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=x,R=T;S<R;S+=3){const w=S,_=S+1,M=S+2;i=rr(this,g,e,n,c,h,d,w,_,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const x=p,T=p+1,S=p+2;i=rr(this,a,e,n,c,h,d,x,T,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Ed(r,e,t,n,i,s,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ri,o),l===null)return null;sr.copy(o),sr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:r}}function rr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,er),r.getVertexPosition(l,tr),r.getVertexPosition(c,nr);const h=Ed(r,e,t,n,er,tr,nr,Fl);if(h){const d=new y;gn.getBarycoord(Fl,er,tr,nr,d),i&&(h.uv=gn.getInterpolatedAttribute(i,o,l,c,d,new xe)),s&&(h.uv1=gn.getInterpolatedAttribute(s,o,l,c,d,new xe)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,l,c,d,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new y,materialIndex:0};gn.getNormal(er,tr,nr,u.normal),h.face=u,h.barycoord=d}return h}const hs=new ot,Bl=new ot,kl=new ot,Td=new ot,zl=new Ue,ar=new y,fa=new Nn,Gl=new Ue,pa=new Qi;class wd extends de{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ml,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ar),this.boundingBox.expandByPoint(ar)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ar),this.boundingSphere.expandByPoint(ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1&&(Gl.copy(i).invert(),pa.copy(e.ray).applyMatrix4(Gl),!(this.boundingBox!==null&&pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ml?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Au?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Bl.fromBufferAttribute(i.attributes.skinIndex,e),kl.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(hs.copy(t),t.set(0,0,0,0)):(hs.set(t.x,t.y,t.z,1),t.set(0,0,0)),hs.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=kl.getComponent(s);if(a!==0){const o=Bl.getComponent(s);zl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Td.copy(hs).applyMatrix4(zl),a)}}return t.isVector4&&(t.w=hs.w),t.applyMatrix4(this.bindMatrixInverse)}}class Mh extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uo extends Pt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Lt,h=Lt,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hl=new Ue,Ad=new Ue;class Oo{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Ad;Hl.multiplyMatrices(o,t[s]),Hl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Uo(t,e,e,_n,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Ae("Skeleton: No bone found with UUID:",s),a=new Mh),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Lr extends wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new Ue,Vl=new Ue,or=[],Wl=new mt,Rd=new Ue,us=new de,ds=new Nn;class Cd extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),Wl.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(Wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),ds.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),e.ray.intersectsSphere(ds)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Oi),Vl.multiplyMatrices(n,Oi),us.matrixWorld=Vl,us.raycast(e,or);for(let a=0,o=or.length;a<o;a++){const l=or[a];l.instanceId=s,l.object=this,t.push(l)}or.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uo(new Float32Array(i*this.count),i,this.count,To,un));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gi=new Nn,Ld=new xe(.5,.5),lr=new y;class Ns{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],v=s[9],p=s[10],g=s[11],x=s[12],T=s[13],S=s[14],R=s[15];if(i[0].setComponents(c-a,f-h,g-m,R-x).normalize(),i[1].setComponents(c+a,f+h,g+m,R+x).normalize(),i[2].setComponents(c+o,f+d,g+v,R+T).normalize(),i[3].setComponents(c-o,f-d,g-v,R-T).normalize(),n)i[4].setComponents(l,u,p,S).normalize(),i[5].setComponents(c-l,f-u,g-p,R-S).normalize();else if(i[4].setComponents(c-l,f-u,g-p,R-S).normalize(),t===vn)i[5].setComponents(c+l,f+u,g+p,R+S).normalize();else if(t===Is)i[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=Ld.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Xl=new Ue;class Fo{constructor(){this.coordinateSystem=vn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];Xl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ns),n[i].setFromProjectionMatrix(Xl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ns),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Fo().copy(this)}}class Bs extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pr=new y,Ir=new y,ql=new Ue,fs=new Qi,cr=new Nn,ma=new y,Yl=new y;class ks extends gt{constructor(e=new dt,t=new Bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Pr.fromBufferAttribute(t,i-1),Ir.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pr.distanceTo(Ir);e.setAttribute("lineDistance",new et(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=s,e.ray.intersectsSphere(cr)===!1)return;ql.copy(i).invert(),fs.copy(e.ray).applyMatrix4(ql);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,p=m-1;v<p;v+=c){const g=h.getX(v),x=h.getX(v+1),T=hr(this,e,fs,l,g,x,v);T&&t.push(T)}if(this.isLineLoop){const v=h.getX(m-1),p=h.getX(f),g=hr(this,e,fs,l,v,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,p=m-1;v<p;v+=c){const g=hr(this,e,fs,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){const v=hr(this,e,fs,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hr(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Pr.fromBufferAttribute(o,i),Ir.fromBufferAttribute(o,s),t.distanceSqToSegment(Pr,Ir,ma,Yl)>n)return;ma.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ma);if(!(c<e.near||c>e.far))return{distance:c,point:Yl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Kl=new y,$l=new y;class bh extends ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Kl.fromBufferAttribute(t,i),$l.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kl.distanceTo($l);e.setAttribute("lineDistance",new et(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pd extends ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bi extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zl=new Ue,po=new Qi,ur=new Nn,dr=new y;class es extends gt{constructor(e=new dt,t=new bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=s,e.ray.intersectsSphere(ur)===!1)return;Zl.copy(i).invert(),po.copy(e.ray).applyMatrix4(Zl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,v=f;m<v;m++){const p=c.getX(m);dr.fromBufferAttribute(d,p),Jl(dr,p,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,v=f;m<v;m++)dr.fromBufferAttribute(d,m),Jl(dr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jl(r,e,t,n,i,s,a){const o=po.distanceSqToPoint(r);if(o<t){const l=new y;po.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Eh extends Pt{constructor(e=[],t=Yi,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Th extends Pt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ji extends Pt{constructor(e,t,n=Pn,i,s,a,o=Lt,l=Lt,c,h=ai,d=1){if(h!==ai&&h!==ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class wh extends Ji{constructor(e,t=Pn,n=Yi,i,s,a=Lt,o=Lt,l,c=ai){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ah extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tt extends dt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2));function m(v,p,g,x,T,S,R,w,_,M,L){const P=S/_,N=R/M,F=S/2,V=R/2,D=w/2,W=_+1,q=M+1;let G=0,te=0;const H=new y;for(let K=0;K<q;K++){const ee=K*N-V;for(let Me=0;Me<W;Me++){const De=Me*P-F;H[v]=De*x,H[p]=ee*T,H[g]=D,c.push(H.x,H.y,H.z),H[v]=0,H[p]=0,H[g]=w>0?1:-1,h.push(H.x,H.y,H.z),d.push(Me/_),d.push(1-K/M),G+=1}}for(let K=0;K<M;K++)for(let ee=0;ee<_;ee++){const Me=u+ee+W*K,De=u+ee+W*(K+1),J=u+(ee+1)+W*(K+1),ge=u+(ee+1)+W*K;l.push(Me,De,ge),l.push(De,J,ge),te+=6}o.addGroup(f,te,L),f+=te,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ci extends dt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const v=[],p=n/2;let g=0;x(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function x(){const S=new y,R=new y;let w=0;const _=(t-e)/n;for(let M=0;M<=s;M++){const L=[],P=M/s,N=P*(t-e)+e;for(let F=0;F<=i;F++){const V=F/i,D=V*l+o,W=Math.sin(D),q=Math.cos(D);R.x=N*W,R.y=-P*n+p,R.z=N*q,d.push(R.x,R.y,R.z),S.set(W,_,q).normalize(),u.push(S.x,S.y,S.z),f.push(V,1-P),L.push(m++)}v.push(L)}for(let M=0;M<i;M++)for(let L=0;L<s;L++){const P=v[L][M],N=v[L+1][M],F=v[L+1][M+1],V=v[L][M+1];(e>0||L!==0)&&(h.push(P,N,V),w+=3),(t>0||L!==s-1)&&(h.push(N,F,V),w+=3)}c.addGroup(g,w,0),g+=w}function T(S){const R=m,w=new xe,_=new y;let M=0;const L=S===!0?e:t,P=S===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,p*P,0),u.push(0,P,0),f.push(.5,.5),m++;const N=m;for(let F=0;F<=i;F++){const D=F/i*l+o,W=Math.cos(D),q=Math.sin(D);_.x=L*q,_.y=p*P,_.z=L*W,d.push(_.x,_.y,_.z),u.push(0,P,0),w.x=W*.5+.5,w.y=q*.5*P+.5,f.push(w.x,w.y),m++}for(let F=0;F<i;F++){const V=R+F,D=N+F;S===!0?h.push(D,D+1,V):h.push(D+1,D,V),M+=3}c.addGroup(g,M,S===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bo extends ci{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Bo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ko extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const T=new y,S=new y,R=new y;for(let w=0;w<t.length;w+=3)f(t[w+0],T),f(t[w+1],S),f(t[w+2],R),l(T,S,R,x)}function l(x,T,S,R){const w=R+1,_=[];for(let M=0;M<=w;M++){_[M]=[];const L=x.clone().lerp(S,M/w),P=T.clone().lerp(S,M/w),N=w-M;for(let F=0;F<=N;F++)F===0&&M===w?_[M][F]=L:_[M][F]=L.clone().lerp(P,F/N)}for(let M=0;M<w;M++)for(let L=0;L<2*(w-M)-1;L++){const P=Math.floor(L/2);L%2===0?(u(_[M][P+1]),u(_[M+1][P]),u(_[M][P])):(u(_[M][P+1]),u(_[M+1][P+1]),u(_[M+1][P]))}}function c(x){const T=new y;for(let S=0;S<s.length;S+=3)T.x=s[S+0],T.y=s[S+1],T.z=s[S+2],T.normalize().multiplyScalar(x),s[S+0]=T.x,s[S+1]=T.y,s[S+2]=T.z}function h(){const x=new y;for(let T=0;T<s.length;T+=3){x.x=s[T+0],x.y=s[T+1],x.z=s[T+2];const S=p(x)/2/Math.PI+.5,R=g(x)/Math.PI+.5;a.push(S,1-R)}m(),d()}function d(){for(let x=0;x<a.length;x+=6){const T=a[x+0],S=a[x+2],R=a[x+4],w=Math.max(T,S,R),_=Math.min(T,S,R);w>.9&&_<.1&&(T<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,T){const S=x*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function m(){const x=new y,T=new y,S=new y,R=new y,w=new xe,_=new xe,M=new xe;for(let L=0,P=0;L<s.length;L+=9,P+=6){x.set(s[L+0],s[L+1],s[L+2]),T.set(s[L+3],s[L+4],s[L+5]),S.set(s[L+6],s[L+7],s[L+8]),w.set(a[P+0],a[P+1]),_.set(a[P+2],a[P+3]),M.set(a[P+4],a[P+5]),R.copy(x).add(T).add(S).divideScalar(3);const N=p(R);v(w,P+0,x,N),v(_,P+2,T,N),v(M,P+4,S,N)}}function v(x,T,S,R){R<0&&x.x===1&&(a[T]=x.x-1),S.x===0&&S.z===0&&(a[T]=R/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.vertices,e.indices,e.radius,e.detail)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new xe:new y);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new y,i=[],s=[],a=[],o=new y,l=new Ue;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new y)}s[0]=new y,a[0]=new y;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(He(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(He(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Rh extends qn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new xe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Id extends Rh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function zo(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const jl=new y,Ql=new y,ga=new zo,_a=new zo,va=new zo;class ut extends qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new y){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Ql.subVectors(i[0],i[1]).add(i[0]),c=Ql);const d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(jl.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=jl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),ga.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,v,p),_a.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,v,p),va.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),_a.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),va.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ga.calc(l),_a.calc(l),va.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ec(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Dd(r,e){const t=1-r;return t*t*e}function Nd(r,e){return 2*(1-r)*r*e}function Ud(r,e){return r*r*e}function bs(r,e,t,n){return Dd(r,e)+Nd(r,t)+Ud(r,n)}function Od(r,e){const t=1-r;return t*t*t*e}function Fd(r,e){const t=1-r;return 3*t*t*r*e}function Bd(r,e){return 3*(1-r)*r*r*e}function kd(r,e){return r*r*r*e}function Es(r,e,t,n,i){return Od(r,e)+Fd(r,t)+Bd(r,n)+kd(r,i)}class zd extends qn{constructor(e=new xe,t=new xe,n=new xe,i=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new xe){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Es(e,i.x,s.x,a.x,o.x),Es(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gd extends qn{constructor(e=new y,t=new y,n=new y,i=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new y){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Es(e,i.x,s.x,a.x,o.x),Es(e,i.y,s.y,a.y,o.y),Es(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hd extends qn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vd extends qn{constructor(e=new y,t=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends qn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(bs(e,i.x,s.x,a.x),bs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends qn{constructor(e=new y,t=new y,n=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new y){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(bs(e,i.x,s.x,a.x),bs(e,i.y,s.y,a.y),bs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(ec(o,l.x,c.x,h.x,d.x),ec(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new xe().fromArray(i))}return this}}var qd=Object.freeze({__proto__:null,ArcCurve:Id,CatmullRomCurve3:ut,CubicBezierCurve:zd,CubicBezierCurve3:Gd,EllipseCurve:Rh,LineCurve:Hd,LineCurve3:Vd,QuadraticBezierCurve:Wd,QuadraticBezierCurve3:Ch,SplineCurve:Xd});class Go extends ko{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Go(e.radius,e.detail)}}class Ei extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const x=g*u-a;for(let T=0;T<c;T++){const S=T*d-s;m.push(S,-x,0),v.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const T=x+c*g,S=x+c*(g+1),R=x+1+c*(g+1),w=x+1+c*g;f.push(T,S,w),f.push(S,R,w)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class Si extends dt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new y,m=new xe;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){const g=s+p/n*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let v=0;v<i;v++){const p=v*(n+1);for(let g=0;g<n;g++){const x=g+p,T=x,S=x+n+1,R=x+n+2,w=x+1;o.push(T,S,w),o.push(S,R,w)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sn extends dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new y,u=new y,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){const x=[],T=g/n,S=a+T*o,R=e*Math.cos(S),w=Math.sqrt(e*e-R*R);let _=0;g===0&&a===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){const L=M/t,P=i+L*s;d.x=-w*Math.cos(P),d.y=R,d.z=w*Math.sin(P),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(L+_,1-T),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const T=h[g][x+1],S=h[g][x],R=h[g+1][x],w=h[g+1][x+1];(g!==0||a>0)&&f.push(T,S,w),(g!==n-1||l<Math.PI)&&f.push(S,R,w)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ho extends dt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new y,f=new y,m=new y;for(let v=0;v<=n;v++){const p=a+v/n*o;for(let g=0;g<=i;g++){const x=g/i*s;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=i;p++){const g=(i+1)*v+p-1,x=(i+1)*(v-1)+p-1,T=(i+1)*(v-1)+p,S=(i+1)*v+p;l.push(g,x,S),l.push(x,T,S)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class zt extends dt{constructor(e=new Ch(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new y,l=new y,c=new xe;let h=new y;const d=[],u=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function v(){for(let T=0;T<t;T++)p(T);p(s===!1?t:0),x(),g()}function p(T){h=e.getPointAt(T/t,h);const S=a.normals[T],R=a.binormals[T];for(let w=0;w<=i;w++){const _=w/i*Math.PI*2,M=Math.sin(_),L=-Math.cos(_);l.x=L*S.x+M*R.x,l.y=L*S.y+M*R.y,l.z=L*S.z+M*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let T=1;T<=t;T++)for(let S=1;S<=i;S++){const R=(i+1)*(T-1)+(S-1),w=(i+1)*T+(S-1),_=(i+1)*T+S,M=(i+1)*(T-1)+S;m.push(R,w,M),m.push(w,_,M)}}function x(){for(let T=0;T<=t;T++)for(let S=0;S<=i;S++)c.x=T/t,c.y=S/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zt(new qd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Yd extends xn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function ji(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(tc(i))i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(tc(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kt(r){const e={};for(let t=0;t<r.length;t++){const n=ji(r[t]);for(const i in n)e[i]=n[i]}return e}function tc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Kd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Lh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const $d={clone:ji,merge:Kt};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(i.value);break;case"v2":this.uniforms[n].value=new xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new y().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jd extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class at extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Je extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qd extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ef extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ti(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vs(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function tf(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function nf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ts{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class sf extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_l,endingEnd:_l}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case vl:s=e,o=2*t-n;break;case xl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vl:a=e,l=2*n-t;break;case xl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,p=v*m,g=-u*p+2*u*v-u*m,x=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*m+1,T=(-1-f)*p+(1.5+f)*v+.5*m,S=f*p-f*v;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+x*a[c+R]+T*a[l+R]+S*a[d+R];return s}}class rf extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class af extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class of extends ts{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const m=(n-t)/(i-t),v=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*v+a[l+p]*m;return s}const u=o*2,f=e-1;for(let m=0;m!==o;++m){const v=a[c+m],p=a[l+m],g=f*u+m*2,x=d[g],T=d[g+1],S=e*u+m*2,R=h[S],w=h[S+1],_=cf(n,t,x,R,i);s[m]=Ph(_,v,T,w,p)}return s}}function Ph(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function lf(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function cf(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){const o=Ph(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;const l=lf(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ti(t,this.TimeBufferType),this.values=ti(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ti(e.times,Array),values:ti(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),vs(e.settings)&&(n.settings={inTangents:ti(e.settings.inTangents,Array),outTangents:ti(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new of(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case Xr:t=this.InterpolantFactoryMethodSmooth;break;case gl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return Xr;case this.InterpolantFactoryMethodBezier:return gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;vs(this.settings)&&(ic(this.settings.inTangents,e),ic(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;vs(this.settings)&&(sc(this.settings.inTangents,e),sc(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ku(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const v=t[d+m];if(v!==t[u+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,vs(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function ic(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function sc(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Ps;class ns extends Mn{constructor(e,t,n){super(e,t,n)}}ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ls;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Ih extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}Ih.prototype.ValueTypeName="color";class Us extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}Us.prototype.ValueTypeName="number";class hf extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Os extends Mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new hf(this.times,this.values,this.getValueSize(),e)}}Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends Mn{constructor(e,t,n){super(e,t,n)}}is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ls;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}Dr.prototype.ValueTypeName="vector";class uf{constructor(e="",t=-1,n=[],i=Ru){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ff(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=tf(l);l=nc(l,1,h),c=nc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Us(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function df(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return Ih;case"quaternion":return Os;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ff(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=df(r.type);if(r.times===void 0){const n=[],i=[];nf(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),vs(r.settings)&&(t.settings={inTangents:ti(r.settings.inTangents,Float32Array),outTangents:ti(r.settings.outTangents,Float32Array)}),t}const Vn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(rc(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!rc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function rc(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class pf{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const mf=new pf;class Ti{constructor(e){this.manager=e!==void 0?e:mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class gf extends Error{constructor(e,t){super(e),this.response=t}}class Nr extends Ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:i});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Gn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let v=0;const p=new ReadableStream({start(g){x();function x(){d.read().then(({done:T,value:S})=>{if(T)g.close();else{v+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let w=0,_=h.length;w<_;w++){const M=h[w];M.onProgress&&M.onProgress(R)}g.enqueue(S),x()}},T=>{g.error(T)})}}});return new Response(p)}else throw new gf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Vn.add(`file:${e}`,c);const h=Gn[e];delete Gn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Gn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fi=new WeakMap;class _f extends Ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Fi.get(a);d===void 0&&(d=[],Fi.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Ds("img");function l(){h(),t&&t(this);const d=Fi.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Fi.delete(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),Vn.remove(`image:${e}`);const u=Fi.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}Fi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vn.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class vf extends Ti{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,a=new _f(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class zs extends gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class xf extends zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xa=new Ue,ac=new y,oc=new y;class Vo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(ac),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xa,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===Is||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fr=new y,pr=new yn,En=new y;class Dh extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fr,pr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fr,pr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new y,lc=new xe,cc=new xe;class Jt extends Dh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,lc,cc),t.subVectors(cc,lc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class yf extends Vo{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Sf extends zs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new yf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Mf extends Vo{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Fs extends zs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wo extends Dh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bf extends Vo{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ts extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new bf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Nh extends zs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class si{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ya=new WeakMap;class Ef extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{ya.has(a)===!0?(i&&i(ya.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ya.set(l,c),Vn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Vn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Bi=-90,ki=1;class mo extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(Bi,ki,e,t);i.layers=this.layers,this.add(i);const s=new Jt(Bi,ki,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Bi,ki,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Bi,ki,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Bi,ki,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Bi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Tf extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Xo="\\[\\]\\.:\\/",wf=new RegExp("["+Xo+"]","g"),qo="[^"+Xo+"]",Af="[^"+Xo.replace("\\.","")+"]",Rf=/((?:WC+[\/:])*)/.source.replace("WC",qo),Cf=/(WCOD+)?/.source.replace("WCOD",Af),Lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qo),Pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qo),If=new RegExp("^"+Rf+Cf+Lf+Pf+"$"),Df=["material","materials","bones","map"];class Nf{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(e){const t=If.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Df.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Nf;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const hc=new Ue;class Yo{constructor(e,t,n=0,i=1/0){this.ray=new Qi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hc),this}intersectObject(e,t=!0,n=[]){return go(e,this,n,t),n.sort(uc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)go(e[i],this,n,t);return n.sort(uc),n}}function uc(r,e){return r.distance-e.distance}function go(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)go(s[a],e,t,!0)}}class Uf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ae("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class dc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ko extends bh{constructor(e=10,t=10,n=4473924,i=8947848){n=new ye(n),i=new ye(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,m=-o;u<=t;u++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const v=u===s?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new dt;h.setAttribute("position",new et(l,3)),h.setAttribute("color",new et(c,3));const d=new Bs({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Of extends li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fc(r,e,t,n){const i=Ff(n);switch(t){case oh:return r*e;case To:return r*e/i.components*i.byteLength;case wo:return r*e/i.components*i.byteLength;case yi:return r*e*2/i.components*i.byteLength;case Ao:return r*e*2/i.components*i.byteLength;case lh:return r*e*3/i.components*i.byteLength;case _n:return r*e*4/i.components*i.byteLength;case Ro:return r*e*4/i.components*i.byteLength;case yr:case Sr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mr:case br:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oa:case Ba:return Math.max(r,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(r,8)*Math.max(e,8)/2;case ka:case za:case Ha:case Va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ga:case wr:case Wa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ro:case ao:case oo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ar:case ho:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ff(r){switch(r){case nn:case ih:return{byteLength:1,components:1};case Cs:case sh:case In:return{byteLength:2,components:1};case bo:case Eo:return{byteLength:2,components:4};case Pn:case Mo:case un:return{byteLength:4,components:1};case rh:case ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uh(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bf(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Op=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ig=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ag=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:kf,alphahash_pars_fragment:zf,alphamap_fragment:Gf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:Kf,begin_vertex:$f,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:op,common:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:_p,envmap_pars_fragment:vp,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Lp,envmap_vertex:yp,fog_vertex:Sp,fog_pars_vertex:Mp,fog_fragment:bp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Dp,lights_phong_pars_fragment:Np,lights_physical_fragment:Up,lights_physical_pars_fragment:Op,lights_fragment_begin:Fp,lights_fragment_maps:Bp,lights_fragment_end:kp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:Kp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Jp,morphcolor_vertex:jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:em,morphtarget_vertex:tm,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:_m,roughnessmap_fragment:vm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:Sm,shadowmap_vertex:Mm,shadowmask_pars_fragment:bm,skinbase_vertex:Em,skinning_pars_vertex:Tm,skinning_vertex:wm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Pm,transmission_fragment:Im,transmission_pars_fragment:Dm,uv_pars_fragment:Nm,uv_pars_vertex:Um,uv_vertex:Om,worldpos_vertex:Fm,background_vert:Bm,background_frag:km,backgroundCube_vert:zm,backgroundCube_frag:Gm,cube_vert:Hm,cube_frag:Vm,depth_vert:Wm,depth_frag:Xm,distance_vert:qm,distance_frag:Ym,equirect_vert:Km,equirect_frag:$m,linedashed_vert:Zm,linedashed_frag:Jm,meshbasic_vert:jm,meshbasic_frag:Qm,meshlambert_vert:eg,meshlambert_frag:tg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:ag,meshphong_frag:og,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:_g},me={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},An={basic:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Kt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Kt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ye(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Kt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Kt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Kt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Kt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Kt([me.common,me.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Kt([me.lights,me.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};An.physical={uniforms:Kt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const mr={r:0,b:0,g:0},vg=new Ue,Oh=new Fe;Oh.set(-1,0,0,0,1,0,0,0,1);function xg(r,e,t,n,i,s){const a=new ye(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const S=x.backgroundBlurriness>0;T=e.get(T,S)}return T}function m(x){let T=!1;const S=f(x);S===null?p(a,o):S&&S.isColor&&(p(S,1),T=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(x,T){const S=f(T);S&&S.isCubeTexture?(c===void 0&&(c=new de(new tt(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:ji(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Oh),c.material.toneMapped=qe.getTransfer(S.colorSpace)!==st,(h!==S||d!==S.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new de(new Ei(2,2),new Mi({name:"BackgroundMaterial",uniforms:ji(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,T){x.getRGB(mr,Lh(r)),t.buffers.color.setClear(mr.r,mr.g,mr.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,T=1){a.set(x),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:m,addToRenderList:v,dispose:g}}function yg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(N,F,V,D,W){let q=!1;const G=d(N,D,V,F);s!==G&&(s=G,c(s.object)),q=f(N,D,V,W),q&&m(N,D,V,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(N,F,V,D),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,F,V,D){const W=D.wireframe===!0;let q=n[F.id];q===void 0&&(q={},n[F.id]=q);const G=N.isInstancedMesh===!0?N.id:0;let te=q[G];te===void 0&&(te={},q[G]=te);let H=te[V.id];H===void 0&&(H={},te[V.id]=H);let K=H[W];return K===void 0&&(K=u(l()),H[W]=K),K}function u(N){const F=[],V=[],D=[];for(let W=0;W<t;W++)F[W]=0,V[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:D,object:N,attributes:{},index:null}}function f(N,F,V,D){const W=s.attributes,q=F.attributes;let G=0;const te=V.getAttributes();for(const H in te)if(te[H].location>=0){const ee=W[H];let Me=q[H];if(Me===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function m(N,F,V,D){const W={},q=F.attributes;let G=0;const te=V.getAttributes();for(const H in te)if(te[H].location>=0){let ee=q[H];ee===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));const Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),W[H]=Me,G++}s.attributes=W,s.attributesNum=G,s.index=D}function v(){const N=s.newAttributes;for(let F=0,V=N.length;F<V;F++)N[F]=0}function p(N){g(N,0)}function g(N,F){const V=s.newAttributes,D=s.enabledAttributes,W=s.attributeDivisors;V[N]=1,D[N]===0&&(r.enableVertexAttribArray(N),D[N]=1),W[N]!==F&&(r.vertexAttribDivisor(N,F),W[N]=F)}function x(){const N=s.newAttributes,F=s.enabledAttributes;for(let V=0,D=F.length;V<D;V++)F[V]!==N[V]&&(r.disableVertexAttribArray(V),F[V]=0)}function T(N,F,V,D,W,q,G){G===!0?r.vertexAttribIPointer(N,F,V,W,q):r.vertexAttribPointer(N,F,V,D,W,q)}function S(N,F,V,D){v();const W=D.attributes,q=V.getAttributes(),G=F.defaultAttributeValues;for(const te in q){const H=q[te];if(H.location>=0){let K=W[te];if(K===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){const ee=K.normalized,Me=K.itemSize,De=e.get(K);if(De===void 0)continue;const J=De.buffer,ge=De.type,be=De.bytesPerElement,Le=ge===r.INT||ge===r.UNSIGNED_INT||K.gpuType===Mo;if(K.isInterleavedBufferAttribute){const _e=K.data,ke=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,bt=K.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Ie=0;Ie<H.locationSize;Ie++)g(H.location+Ie,_e.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ie=0;Ie<H.locationSize;Ie++)p(H.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,J);for(let Ie=0;Ie<H.locationSize;Ie++)T(H.location+Ie,Me/H.locationSize,ge,ee,ke*be,(bt+Me/H.locationSize*Ie)*be,Le)}else{if(K.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)g(H.location+_e,K.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e);r.bindBuffer(r.ARRAY_BUFFER,J);for(let _e=0;_e<H.locationSize;_e++)T(H.location+_e,Me/H.locationSize,ge,ee,Me*be,Me/H.locationSize*_e*be,Le)}}else if(G!==void 0){const ee=G[te];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(H.location,ee);break;case 3:r.vertexAttrib3fv(H.location,ee);break;case 4:r.vertexAttrib4fv(H.location,ee);break;default:r.vertexAttrib1fv(H.location,ee)}}}}x()}function R(){L();for(const N in n){const F=n[N];for(const V in F){const D=F[V];for(const W in D){const q=D[W];for(const G in q)h(q[G].object),delete q[G];delete D[W]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;const F=n[N.id];for(const V in F){const D=F[V];for(const W in D){const q=D[W];for(const G in q)h(q[G].object),delete q[G];delete D[W]}}delete n[N.id]}function _(N){for(const F in n){const V=n[F];for(const D in V){const W=V[D];if(W[N.id]===void 0)continue;const q=W[N.id];for(const G in q)h(q[G].object),delete q[G];delete W[N.id]}}}function M(N){for(const F in n){const V=n[F],D=N.isInstancedMesh===!0?N.id:0,W=V[D];if(W!==void 0){for(const q in W){const G=W[q];for(const te in G)h(G[te].object),delete G[te];delete W[q]}delete V[D],Object.keys(V).length===0&&delete n[F]}}}function L(){P(),a=!0,s!==i&&(s=i,c(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function Sg(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Mg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==_n&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const M=_===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==nn&&_!==un&&!M&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:S,maxSamples:R,samples:w}}function bg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Hn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const x=s?0:n,T=x*4;let S=g.clippingState||null;l.value=S,S=h(m,u,T,f);for(let R=0;R!==T;++R)S[R]=t[R];g.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,S=f;T!==v;++T,S+=4)a.copy(d[T]).applyMatrix4(x,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class $o extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new tt(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Vi});s.uniforms.tEquirect.value=t;const a=new de(i,s),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Mt),new mo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const pc=256,Eg=3,Tg=20,Fh=256,Bh=16,wg=3,Ag=new y,Rg=new ye;class Ur{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mo(1,10,null),this._boxMesh=new de(new tt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Ag}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Rg));const p=new mo(n,i,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(pc,mh(e))}_fromTexture(e,t){e.mapping===Yi||e.mapping===Rs?this._setSize(e.image.length===0?pc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=mc(e,!1,!1),n=Math.log2(e)-Eg;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Yi||e.mapping===Rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Cg(),this._integrationMaterial=Lg());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Bh);for(let a=0;a<=n;a++){const o=Ur.lodToRoughness(a,n);if(a>n-wg)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Fh*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Pg());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function mc(r,e,t){return new $o(r,{minFilter:Cn,generateMipmaps:e,type:In,colorSpace:Qt,depthBuffer:t})}function Gs(r,e,t){return new Mi({name:r,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:jt,blending:Vi,depthTest:!1,depthWrite:!1})}function Cg(){return Gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Lg(){return Gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Pg(){return Gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gc(){return Gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _c(){return Gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ig(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Vr||f===Wr)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new $o(m.height);return v.fromEquirectangularTexture(r,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,m=f===Vr||f===Wr,v=f===Yi||f===Rs;if(m||v){let p=t.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ur(r)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const x=u.image;return m&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Ur(r)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Vr?u.mapping=Yi:f===Wr&&(u.mapping=Rs),u}function l(u){let f=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function c(u){const f=u.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Dg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Wi("WebGLRenderer: "+n+" extension not supported."),i}}}function Ng(r,e,t,n){const i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);const v=s.get(m);v&&(e.remove(v),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,v){return i[v.id]!==void 0||(v.addEventListener("dispose",o),i[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(m){const v=m.attributes;for(const p in v)e.update(v[p],r.ARRAY_BUFFER)}function d(m){const v=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const x=v!==null?v.array.length:p.array.length/3-1,T=p.count>=65535?yh:xh,S=new T(Math.ceil(x/3)*6,1),R=S.array;if(v!==null){const _=v.array;g=v.version;for(let M=0,L=0;M<x;M+=3){const P=_[M+0],N=_[M+1],F=_[M+2];R[L++]=P,R[L++]=N,R[L++]=N,R[L++]=F,R[L++]=F,R[L++]=P}}else{g=p.version;for(let _=0,M=0;_<x;_+=3){const L=_+0,P=_+1,N=_+2;R[M++]=L,R[M++]=P,R[M++]=P,R[M++]=N,R[M++]=N,R[M++]=L}}S.version=g;const w=s.get(m);w&&e.remove(w),s.set(m,S)}function u(m){const v=s.get(m);if(v){const p=m.index;p!==null&&v.version<p.version&&d(m)}else d(m);return s.get(m)}function f(){for(const m in i){const v=i[m].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Ug(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Og(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fg(r,e,t){const n=new WeakMap,i=new ot;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),m===!0&&(T=2),v===!0&&(T=3);let S=o.attributes.position.count*T,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*R*4*d),_=new _h(w,S,R,d);_.type=un,_.needsUpdate=!0;const M=T*4;for(let P=0;P<d;P++){const N=p[P],F=g[P],V=x[P],D=S*R*4*P;for(let W=0;W<N.count;W++){const q=W*M;f===!0&&(i.fromBufferAttribute(N,W),w[D+q+0]=i.x,w[D+q+1]=i.y,w[D+q+2]=i.z,w[D+q+3]=0),m===!0&&(i.fromBufferAttribute(F,W),w[D+q+4]=i.x,w[D+q+5]=i.y,w[D+q+6]=i.z,w[D+q+7]=0),v===!0&&(i.fromBufferAttribute(V,W),w[D+q+8]=i.x,w[D+q+9]=i.y,w[D+q+10]=i.z,w[D+q+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new xe(S,R)},n.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Bg(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const kg={[$c]:"LINEAR_TONE_MAPPING",[Zc]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[So]:"ACES_FILMIC_TONE_MAPPING",[Qc]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function zg(r,e,t,n,i,s){const a=new Ln(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new dt;h.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new et([0,2,0,0,2,0],2));const d=new jd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new de(h,d),f=new Wo(-1,1,1,-1,0,1);let m=null,v=null,p=!1,g,x=null,T=[],S=!1;this.setSize=function(R,w){a.setSize(R,w),o!==null&&o.setSize(R,w),l!==null&&l.setSize(R,w);for(let _=0;_<T.length;_++){const M=T[_];M.setSize&&M.setSize(R,w)}},this.setEffects=function(R){T=R,S=T.length>0&&T[0].isRenderPass===!0;const w=a.width,_=a.height;T.length>0&&o===null&&(o=new Ln(w,_,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(w,_,{type:In,depthBuffer:!1,stencilBuffer:!1}));const M=i===!0&&T.some(L=>L.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ji(w,_),s===!0&&(c.format=ii,c.type=$i)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let L=0;L<T.length;L++){const P=T[L];P.setSize&&P.setSize(w,_),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,w){if(p||R.toneMapping===Wn&&T.length===0)return!1;if(x=w,w!==null){const _=w.width,M=w.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return S===!1&&R.setRenderTarget(a),g=R.toneMapping,R.toneMapping=Wn,!0},this.hasRenderPass=function(){return S},this.end=function(R,w){R.toneMapping=g,p=!0;let _=a,M=o;for(let L=0;L<T.length;L++){const P=T[L];P.enabled!==!1&&(P.render(R,M,_,w),P.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(m!==R.outputColorSpace||v!==R.toneMapping){m=R.outputColorSpace,v=R.toneMapping,d.defines={},qe.getTransfer(m)===st&&(d.defines.SRGB_TRANSFER="");const L=kg[v];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(x),R.render(u,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const kh=new Pt,zh=new Ji(1,1),Gh=new wh(1),Hh=new _h,Vh=new cd,Wh=new Eh,vc=[],xc=[],yc=new Float32Array(16),Sc=new Float32Array(9),Mc=new Float32Array(4);function ss(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=vc[i];if(s===void 0&&(s=new Float32Array(i),vc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function kr(r,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Gg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function Wg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function Xg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Mc.set(n),r.uniformMatrix2fv(this.addr,!1,Mc),Dt(t,n)}}function qg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Sc.set(n),r.uniformMatrix3fv(this.addr,!1,Sc),Dt(t,n)}}function Yg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;yc.set(n),r.uniformMatrix4fv(this.addr,!1,yc),Dt(t,n)}}function Kg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function Jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function jg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function zr(r){return r.version===0&&(r.compareFunction=dh,r.needsUpdate=!0),r}function n0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=zr(zh):s=kh,t.setTexture2D(e||s,i)}function i0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vh,i)}function s0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=zr(Gh):s=Wh,t.setTextureCube(e||s,i)}function r0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hh,i)}function a0(r){switch(r){case 5126:return Gg;case 35664:return Hg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Kg;case 35667:case 35671:return $g;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return jg;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function o0(r,e){r.uniform1fv(this.addr,e)}function l0(r,e){const t=ss(e,this.size,2);r.uniform2fv(this.addr,t)}function c0(r,e){const t=ss(e,this.size,3);r.uniform3fv(this.addr,t)}function h0(r,e){const t=ss(e,this.size,4);r.uniform4fv(this.addr,t)}function u0(r,e){const t=ss(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function d0(r,e){const t=ss(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function f0(r,e){const t=ss(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function p0(r,e){r.uniform1iv(this.addr,e)}function m0(r,e){r.uniform2iv(this.addr,e)}function g0(r,e){r.uniform3iv(this.addr,e)}function _0(r,e){r.uniform4iv(this.addr,e)}function v0(r,e){r.uniform1uiv(this.addr,e)}function x0(r,e){r.uniform2uiv(this.addr,e)}function y0(r,e){r.uniform3uiv(this.addr,e)}function S0(r,e){r.uniform4uiv(this.addr,e)}function M0(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=zr(zh):a=kh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function b0(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Vh,s[a])}function E0(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=zr(Gh):a=Wh;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function T0(r,e,t){const n=this.cache,i=e.length,s=kr(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hh,s[a])}function w0(r){switch(r){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a0(t.type)}}class R0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w0(t.type)}}class C0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function bc(r,e){r.seq.push(e),r.map[e.id]=e}function L0(r,e,t){const n=r.name,i=n.length;for(Sa.lastIndex=0;;){const s=Sa.exec(n),a=Sa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bc(t,c===void 0?new A0(o,r,e):new R0(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new C0(o),bc(t,d)),t=d}}}class Er{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);L0(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ec(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const P0=37297;let I0=0;function D0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tc=new Fe;function N0(r){qe._getMatrix(Tc,qe.workingColorSpace,r);const e=`mat3( ${Tc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case Rr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function wc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+D0(r.getShaderSource(e),o)}else return s}function U0(r,e){const t=N0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const O0={[$c]:"Linear",[Zc]:"Reinhard",[Jc]:"Cineon",[So]:"ACESFilmic",[Qc]:"AgX",[eh]:"Neutral",[jc]:"Custom"};function F0(r,e){const t=O0[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gr=new y;function B0(){qe.getLuminanceCoefficients(gr);const r=gr.x.toFixed(4),e=gr.y.toFixed(4),t=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function z0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function xs(r){return r!==""}function Ac(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Rc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(r){return r.replace(H0,V0)}function V0(r,e){const t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _o(t)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(r){return r.replace(W0,X0)}function X0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const q0={[vr]:"SHADOWMAP_TYPE_PCF",[gs]:"SHADOWMAP_TYPE_VSM"};function Y0(r){return q0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K0={[Rs]:"ENVMAP_MODE_REFRACTION"};function $0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":K0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z0={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[Tu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function J0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Z0[r.combine]||"ENVMAP_BLENDING_NONE"}function j0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Y0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$0(t),d=J0(t),u=k0(t),f=z0(s),m=i.createProgram();let v,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(xs).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(xs).join(`
`),p.length>0&&(p+=`
`)):(v=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),p=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?We.tonemapping_pars_fragment:"",t.toneMapping!==Wn?F0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),B0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),a=_o(a),a=Ac(a,t),a=Rc(a,t),o=_o(o),o=Ac(o,t),o=Rc(o,t),a=Cc(a),o=Cc(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=g+v+a,T=g+p+o,S=Ec(i,i.VERTEX_SHADER,x),R=Ec(i,i.FRAGMENT_SHADER,T);i.attachShader(m,S),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(m)||"",F=i.getShaderInfoLog(S)||"",V=i.getShaderInfoLog(R)||"",D=N.trim(),W=F.trim(),q=V.trim();let G=!0,te=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,S,R);else{const H=wc(i,S,"vertex"),K=wc(i,R,"fragment");Ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+H+`
`+K)}else D!==""?Ae("WebGLProgram: Program Info Log:",D):(W===""||q==="")&&(te=!1);te&&(P.diagnostics={runnable:G,programLog:D,vertexShader:{log:W,prefix:v},fragmentShader:{log:q,prefix:p}})}i.deleteShader(S),i.deleteShader(R),_=new Er(i,m),M=G0(i,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(m,P0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=R,this}let Q0=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new t_(e),t.set(e,n)),n}}class t_{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}}function n_(r){return r===yi||r===wr||r===Ar}function i_(r,e,t,n,i,s){const a=new Do,o=new e_,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,L,P,N,F){const V=P.fog,D=N.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||W,q),te=u[_.type];let H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));const K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ee=K!==void 0?K.length:0;let Me=0;D.morphAttributes.position!==void 0&&(Me=1),D.morphAttributes.normal!==void 0&&(Me=2),D.morphAttributes.color!==void 0&&(Me=3);let De,J,ge,be;if(te){const pe=An[te];De=pe.vertexShader,J=pe.fragmentShader}else{De=_.vertexShader,J=_.fragmentShader;const pe=o.getVertexShaderStage(_),it=o.getFragmentShaderStage(_);o.update(_,pe,it),ge=pe.id,be=it.id}const Le=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,bt=N.isBatchedMesh===!0,Ie=!!_.map,nt=!!_.matcap,lt=!!G,Ye=lt&&G.isPMREMTexture===!0,Bt=!!_.aoMap,At=!!_.lightMap,$t=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,bn=!!_.displacementMap,Nt=!!_.emissiveMap,rn=!!_.metalnessMap,an=!!_.roughnessMap,on=_.anisotropy>0,O=_.clearcoat>0,ln=_.diffuseRoughness>0,ft=_.dispersion>0,pt=_.retroreflectivity>0,fe=_.iridescence>0,Rt=_.sheen>0,Pe=_.transmission>0,Oe=on&&!!_.anisotropyMap,C=O&&!!_.clearcoatMap,b=O&&!!_.clearcoatNormalMap,k=O&&!!_.clearcoatRoughnessMap,ne=ln&&!!_.diffuseRoughnessMap,Q=fe&&!!_.iridescenceMap,re=fe&&!!_.iridescenceThicknessMap,he=Rt&&!!_.sheenColorMap,$=Rt&&!!_.sheenRoughnessMap,Z=!!_.specularMap,oe=!!_.specularColorMap,I=!!_.specularIntensityMap,j=Pe&&!!_.transmissionMap,Y=Pe&&!!_.thicknessMap,le=!!_.gradientMap,se=!!_.alphaMap,ae=_.alphaTest>0,Re=!!_.alphaHash,Ve=!!_.extensions;let ie=Wn;_.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Ce=Ye?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ge={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:J,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:bt,batchingColor:bt&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:Le===null?r.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:nt,envMap:lt,envMapMode:lt&&G.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ce.length-1:null,envMapSize:Ye?Ce[0].width:null,aoMap:Bt,lightMap:At,bumpMap:$t,normalMap:_t,displacementMap:bn,emissiveMap:Nt,normalMapObjectSpace:_t&&_.normalMapType===Pu,normalMapTangentSpace:_t&&_.normalMapType===fo,packedNormalMap:_t&&_.normalMapType===fo&&n_(_.normalMap.format),metalnessMap:rn,roughnessMap:an,anisotropy:on,anisotropyMap:Oe,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:k,diffuseRoughness:ln,diffuseRoughnessMap:ne,dispersion:ft,retroreflection:pt,iridescence:fe,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:Rt,sheenColorMap:he,sheenRoughnessMap:$,specularMap:Z,specularColorMap:oe,specularIntensityMap:I,transmission:Pe,transmissionMap:j,thicknessMap:Y,gradientMap:le,opaque:_.transparent===!1&&_.blending===ys&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Re,combine:_.combine,mapUv:Ie&&f(_.map.channel),aoMapUv:Bt&&f(_.aoMap.channel),lightMapUv:At&&f(_.lightMap.channel),bumpMapUv:$t&&f(_.bumpMap.channel),normalMapUv:_t&&f(_.normalMap.channel),displacementMapUv:bn&&f(_.displacementMap.channel),emissiveMapUv:Nt&&f(_.emissiveMap.channel),metalnessMapUv:rn&&f(_.metalnessMap.channel),roughnessMapUv:an&&f(_.roughnessMap.channel),anisotropyMapUv:Oe&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:oe&&f(_.specularColorMap.channel),specularIntensityMapUv:I&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:se&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_t||on),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Ie||se),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Me,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(pe=>pe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===St,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ve&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&_.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function v(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)M.push(L),M.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(M,_),g(M,_),M.push(r.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const M=u[_.type];let L;if(M){const P=An[M];L=$d.clone(P.uniforms)}else L=_.uniforms;return L}function T(_,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new j0(r,M,_,i),c.push(L),h.set(M,L)),L}function S(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:x,acquireProgram:T,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:w}}function s_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function r_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Pc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ic(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,v,p,g){let x=r[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:g},r[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=m,x.materialVariant=a(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=p,x.group=g),e++,x}function l(u,f,m,v,p,g,x){x.reversedDepth===!0&&(p=-p);const T=o(u,f,m,v,p,g);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):t.push(T)}function c(u,f,m,v,p,g){const x=o(u,f,m,v,p,g);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function h(u,f){t.length>1&&t.sort(u||r_),n.length>1&&n.sort(f||Pc),i.length>1&&i.sort(f||Pc)}function d(){for(let u=e,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function a_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ic,r.set(n,[a])):i>=s.length?(a=new Ic,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function o_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new y,color:new ye};break;case"SpotLight":t={position:new y,direction:new y,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new y,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new y,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new y,halfWidth:new y,halfHeight:new y};break}return r[e.id]=t,t}}}function l_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let c_=0;function h_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function u_(r){const e=new o_,t=l_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new y);const i=new y,s=new Ue,a=new Ue;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,x=0,T=0,S=0,R=0,w=0,_=0,M=0,L=0,P=0;c.sort(h_);for(let F=0,V=c.length;F<V;F++){const D=c[F],W=D.color,q=D.intensity,G=D.distance;let te=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===yi?te=D.shadow.map.texture:te=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=W.r*q,d+=W.g*q,u+=W.b*q;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],q);P++}else if(D.isSunLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,ee=t.get(D);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=te;const Me=K.getViewportCount();for(let De=0;De<Me;De++)n.sunShadowMatrix[v+De]=K.getMatrix(De),n.sunShadowCascade[v+De]=K._cascadeData[De];v+=Me,m++}n.sun[f]=H,f++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,ee=t.get(D);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=D.shadow.matrix,R++}n.directional[p]=H,p++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(W).multiplyScalar(q),H.distance=G,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[x]=H;const K=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,K.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[x]=K.matrix,D.castShadow){const ee=t.get(D);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=te,_++}x++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(W).multiplyScalar(q),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=H,T++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const K=D.shadow,ee=t.get(D);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=D.shadow.matrix,w++}n.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(q),H.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[S]=H,S++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==T||N.hemiLength!==S||N.numSunShadows!==m||N.numDirectionalShadows!==R||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==M||N.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=x,n.rectArea.length=T,n.point.length=g,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=T,N.hemiLength=S,N.numSunShadows=m,N.numDirectionalShadows=R,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=M,N.numLightProbes=P,n.version=c_++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0,p=0;const g=h.matrixWorldInverse;for(let x=0,T=c.length;x<T;x++){const S=c[x];if(S.isSunLight){const R=n.sun[d];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(g),d++}else if(S.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(g),u++}else if(S.isSpotLight){const R=n.spot[m];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const R=n.rectArea[v];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const R=n.hemi[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Dc(r){const e=new u_(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function d_(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Dc(r),e.set(i,[o])):s>=a.length?(o=new Dc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,m_=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],g_=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],Nc=new Ue,ps=new y,Ma=new y;function __(r,e,t){let n=new Ns;const i=new xe,s=new xe,a=new ot,o=new Qd,l=new ef,c={},h=t.maxTextureSize,d={[ri]:jt,[jt]:ri,[St]:St},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new dt;m.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new de(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let g=this.type;this.render=function(w,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Xc&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vr);const L=r.getRenderTarget(),P=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Vi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=g!==this.type;V&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=w.length;D<W;D++){const q=w[D],G=q.shadow;if(G===void 0){Ae("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const te=G.getFrameExtents();i.multiply(te),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,G.mapSize.y=s.y));const H=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=H,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===gs){if(q.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ln(i.x,i.y,{format:yi,type:In,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Ji(i.x,i.y,un),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=ai,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Lt,G.map.depthTexture.magFilter=Lt}else q.isPointLight?(G.map=new $o(i.x),G.map.depthTexture=new wh(i.x,Pn)):(G.map=new Ln(i.x,i.y),G.map.depthTexture=new Ji(i.x,i.y,Pn)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=ai,this.type===vr?(G.map.depthTexture.compareFunction=H?uh:hh,G.map.depthTexture.minFilter=Mt,G.map.depthTexture.magFilter=Mt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Lt,G.map.depthTexture.magFilter=Lt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);const K=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,M);const ee=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let Me=0;Me<K;Me++){const De=G.getCamera(Me);if(q.isPointLight){const J=G.camera,ge=G.matrix,be=q.distance||J.far;be!==J.far&&(J.far=be,J.updateProjectionMatrix()),ps.setFromMatrixPosition(q.matrixWorld),J.position.copy(ps),Ma.copy(J.position),Ma.add(m_[Me]),J.up.copy(g_[Me]),J.lookAt(Ma),J.updateMatrixWorld(),ge.makeTranslation(-ps.x,-ps.y,-ps.z),Nc.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Nc,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,Me),r.clear();else{Me===0&&(r.setRenderTarget(G.map),r.clear());const J=G.getViewport(Me);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),F.viewport(a)}n=G.getFrustum(Me),S(_,M,De,q,ee,this.type)}G.isPointLightShadow!==!0&&this.type===gs&&x(G,M),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(L,P,N)};function x(w,_){const M=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ln(i.x,i.y,{format:yi,type:In}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(_,null,M,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(_,null,M,f,v,null)}function T(w,_,M,L){let P=null;const N=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=M.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const F=P.uuid,V=_.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let W=D[V];W===void 0&&(W=P.clone(),D[V]=W,_.addEventListener("dispose",R)),P=W}if(P.visible=_.visible,P.wireframe=_.wireframe,L===gs?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:d[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=r.properties.get(P);F.light=M}return P}function S(w,_,M,L,P,N){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===gs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);const D=e.update(w),W=w.material;if(Array.isArray(W)){const q=D.groups;for(let G=0,te=q.length;G<te;G++){const H=q[G],K=W[H.materialIndex];if(K&&K.visible){const ee=T(w,K,L,N);w.onBeforeShadow(r,w,_,M,D,ee,H),r.renderBufferDirect(M,null,D,ee,w,H),w.onAfterShadow(r,w,_,M,D,ee,H)}}}else if(W.visible){const q=T(w,W,L,N);w.onBeforeShadow(r,w,_,M,D,q,null),r.renderBufferDirect(M,null,D,q,w,null),w.onAfterShadow(r,w,_,M,D,q,null)}}const V=w.children;for(let D=0,W=V.length;D<W;D++)S(V[D],_,M,L,P,N)}function R(w){w.target.removeEventListener("dispose",R);for(const M in c){const L=c[M],P=w.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function v_(r,e){function t(){let I=!1;const j=new ot;let Y=null;const le=new ot(0,0,0,0);return{setMask:function(se){Y!==se&&!I&&(r.colorMask(se,se,se,se),Y=se)},setLocked:function(se){I=se},setClear:function(se,ae,Re,Ve,ie){ie===!0&&(se*=Ve,ae*=Ve,Re*=Ve),j.set(se,ae,Re,Ve),le.equals(j)===!1&&(r.clearColor(se,ae,Re,Ve),le.copy(j))},reset:function(){I=!1,Y=null,le.set(-1,0,0,0)}}}function n(){let I=!1,j=!1,Y=null,le=null,se=null;return{setReversed:function(ae){if(j!==ae){const Re=e.get("EXT_clip_control");ae?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),j=ae;const Ve=se;se=null,this.setClear(Ve)}},getReversed:function(){return j},setTest:function(ae){ae?_e(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(ae){Y!==ae&&!I&&(r.depthMask(ae),Y=ae)},setFunc:function(ae){if(j&&(ae=Hu[ae]),le!==ae){switch(ae){case Ra:r.depthFunc(r.NEVER);break;case Ca:r.depthFunc(r.ALWAYS);break;case La:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case Pa:r.depthFunc(r.EQUAL);break;case Ia:r.depthFunc(r.GEQUAL);break;case Da:r.depthFunc(r.GREATER);break;case Na:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=ae}},setLocked:function(ae){I=ae},setClear:function(ae){se!==ae&&(se=ae,j&&(ae=1-ae),r.clearDepth(ae))},reset:function(){I=!1,Y=null,le=null,se=null,j=!1}}}function i(){let I=!1,j=null,Y=null,le=null,se=null,ae=null,Re=null,Ve=null,ie=null;return{setTest:function(Ce){I||(Ce?_e(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(Ce){j!==Ce&&!I&&(r.stencilMask(Ce),j=Ce)},setFunc:function(Ce,Ge,pe){(Y!==Ce||le!==Ge||se!==pe)&&(r.stencilFunc(Ce,Ge,pe),Y=Ce,le=Ge,se=pe)},setOp:function(Ce,Ge,pe){(ae!==Ce||Re!==Ge||Ve!==pe)&&(r.stencilOp(Ce,Ge,pe),ae=Ce,Re=Ge,Ve=pe)},setLocked:function(Ce){I=Ce},setClear:function(Ce){ie!==Ce&&(r.clearStencil(Ce),ie=Ce)},reset:function(){I=!1,j=null,Y=null,le=null,se=null,ae=null,Re=null,Ve=null,ie=null}}}const s=new t,a=new n,o=new i;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,m=[],v=null,p=!1,g=null,x=null,T=null,S=null,R=null,w=null,_=null,M=new ye(0,0,0),L=0,P=!1,N=null,F=null,V=null,D=null,W=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=te>=2);let K=null,ee={};const Me=r.getParameter(r.SCISSOR_BOX),De=r.getParameter(r.VIEWPORT),J=new ot().fromArray(Me),ge=new ot().fromArray(De);function be(I,j,Y,le){const se=new Uint8Array(4),ae=r.createTexture();r.bindTexture(I,ae),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<Y;Re++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(j,0,r.RGBA,1,1,le,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(j+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return ae}const Le={};Le[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),Le[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Le[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(r.DEPTH_TEST),a.setFunc(As),$t(!1),_t(dl),_e(r.CULL_FACE),Bt(Vi);function _e(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function ke(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function bt(I,j){return u[I]!==j?(r.bindFramebuffer(I,j),u[I]=j,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=j),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=j),!0):!1}function Ie(I,j){let Y=m,le=!1;if(I){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));const se=I.textures;if(Y.length!==se.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,Re=se.length;ae<Re;ae++)Y[ae]=r.COLOR_ATTACHMENT0+ae;Y.length=se.length,le=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,le=!0);le&&r.drawBuffers(Y)}function nt(I){return v!==I?(r.useProgram(I),v=I,!0):!1}const lt={[zi]:r.FUNC_ADD,[lu]:r.FUNC_SUBTRACT,[cu]:r.FUNC_REVERSE_SUBTRACT};lt[hu]=r.MIN,lt[uu]=r.MAX;const Ye={[du]:r.ZERO,[fu]:r.ONE,[pu]:r.SRC_COLOR,[qc]:r.SRC_ALPHA,[yu]:r.SRC_ALPHA_SATURATE,[vu]:r.DST_COLOR,[gu]:r.DST_ALPHA,[mu]:r.ONE_MINUS_SRC_COLOR,[Yc]:r.ONE_MINUS_SRC_ALPHA,[xu]:r.ONE_MINUS_DST_COLOR,[_u]:r.ONE_MINUS_DST_ALPHA,[Su]:r.CONSTANT_COLOR,[Mu]:r.ONE_MINUS_CONSTANT_COLOR,[bu]:r.CONSTANT_ALPHA,[Eu]:r.ONE_MINUS_CONSTANT_ALPHA};function Bt(I,j,Y,le,se,ae,Re,Ve,ie,Ce){if(I===Vi){p===!0&&(ke(r.BLEND),p=!1);return}if(p===!1&&(_e(r.BLEND),p=!0),I!==ou){if(I!==g||Ce!==P){if((x!==zi||R!==zi)&&(r.blendEquation(r.FUNC_ADD),x=zi,R=zi),Ce)switch(I){case ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xi:r.blendFunc(r.ONE,r.ONE);break;case fl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ne("WebGLState: Invalid blending: ",I);break}else switch(I){case ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case fl:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",I);break}T=null,S=null,w=null,_=null,M.set(0,0,0),L=0,g=I,P=Ce}return}se=se||j,ae=ae||Y,Re=Re||le,(j!==x||se!==R)&&(r.blendEquationSeparate(lt[j],lt[se]),x=j,R=se),(Y!==T||le!==S||ae!==w||Re!==_)&&(r.blendFuncSeparate(Ye[Y],Ye[le],Ye[ae],Ye[Re]),T=Y,S=le,w=ae,_=Re),(Ve.equals(M)===!1||ie!==L)&&(r.blendColor(Ve.r,Ve.g,Ve.b,ie),M.copy(Ve),L=ie),g=I,P=!1}function At(I,j){I.side===St?ke(r.CULL_FACE):_e(r.CULL_FACE);let Y=I.side===jt;j&&(Y=!Y),$t(Y),I.blending===ys&&I.transparent===!1?Bt(Vi):Bt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const le=I.stencilWrite;o.setTest(le),le&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(I){N!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),N=I)}function _t(I){I!==ru?(_e(r.CULL_FACE),I!==F&&(I===dl?r.cullFace(r.BACK):I===au?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),F=I}function bn(I){I!==V&&(G&&r.lineWidth(I),V=I)}function Nt(I,j,Y){I?(_e(r.POLYGON_OFFSET_FILL),(D!==j||W!==Y)&&(D=j,W=Y,a.getReversed()&&(j=-j,Y=-Y),r.polygonOffset(j,Y))):ke(r.POLYGON_OFFSET_FILL)}function rn(I){I?_e(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function an(I){I===void 0&&(I=r.TEXTURE0+q-1),K!==I&&(r.activeTexture(I),K=I)}function on(I,j,Y){Y===void 0&&(K===null?Y=r.TEXTURE0+q-1:Y=K);let le=ee[Y];le===void 0&&(le={type:void 0,texture:void 0},ee[Y]=le),(le.type!==I||le.texture!==j)&&(K!==Y&&(r.activeTexture(Y),K=Y),r.bindTexture(I,j||Le[I]),le.type=I,le.texture=j)}function O(){const I=ee[K];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ln(){try{r.compressedTexImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function ft(){try{r.compressedTexImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function pt(){try{r.texSubImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function fe(){try{r.texSubImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function Rt(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function Oe(){try{r.texStorage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function C(){try{r.texStorage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function b(){try{r.texImage2D(...arguments)}catch(I){Ne("WebGLState:",I)}}function k(){try{r.texImage3D(...arguments)}catch(I){Ne("WebGLState:",I)}}function ne(I){return d[I]!==void 0?d[I]:r.getParameter(I)}function Q(I,j){d[I]!==j&&(r.pixelStorei(I,j),d[I]=j)}function re(I){J.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function he(I){ge.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function $(I,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let le=Y.get(I);le===void 0&&(le=r.getUniformBlockIndex(j,I.name),r.uniformBlockBinding(j,le,le),Y.set(I,le))}function Z(I,j,Y){const se=c.get(j).get(I);l[se]!==Y&&(r.bindBufferBase(r.UNIFORM_BUFFER,se,Y),l[se]=Y)}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,ee={},u={},l={},f=new WeakMap,m=[],v=null,p=!1,g=null,x=null,T=null,S=null,R=null,w=null,_=null,M=new ye(0,0,0),L=0,P=!1,N=null,F=null,V=null,D=null,W=null,J.set(0,0,r.canvas.width,r.canvas.height),ge.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:ke,bindFramebuffer:bt,drawBuffers:Ie,useProgram:nt,setBlending:Bt,setMaterial:At,setFlipSided:$t,setCullFace:_t,setLineWidth:bn,setPolygonOffset:Nt,setScissorTest:rn,activeTexture:an,bindTexture:on,unbindTexture:O,compressedTexImage2D:ln,compressedTexImage3D:ft,texImage2D:b,texImage3D:k,pixelStorei:Q,getParameter:ne,updateUBOMapping:$,uniformBlockBinding:Z,texStorage2D:Oe,texStorage3D:C,texSubImage2D:pt,texSubImage3D:fe,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Pe,scissor:re,viewport:he,reset:oe}}function x_(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,d=new Set;let u;const f=new WeakMap,m=new Set,v=new FinalizationRegistry(C=>m.delete(C));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return p?new OffscreenCanvas(C,b):Ds("canvas")}function x(C,b,k){let ne=1;const Q=Oe(C);if((Q.width>k||Q.height>k)&&(ne=k/Math.max(Q.width,Q.height)),ne<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(ne*Q.width),he=Math.floor(ne*Q.height);u===void 0&&(u=g(re,he));const $=b?g(re,he):u;return $.width=re,$.height=he,$.getContext("2d").drawImage(C,0,0,re,he),Ae("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+he+")."),$}else return"data"in C&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function T(C){return C.generateMipmaps}function S(C){r.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,b,k,ne,Q,re=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he;ne&&(he=e.get("EXT_texture_norm16"),he||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=b;if(b===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8),k===r.UNSIGNED_SHORT&&he&&($=he.R16_EXT),k===r.SHORT&&he&&($=he.R16_SNORM_EXT)),b===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),b===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8),k===r.UNSIGNED_SHORT&&he&&($=he.RG16_EXT),k===r.SHORT&&he&&($=he.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),b===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),b===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),b===r.RGB&&(k===r.UNSIGNED_SHORT&&he&&($=he.RGB16_EXT),k===r.SHORT&&he&&($=he.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),b===r.RGBA){const Z=re?Rr:qe.getTransfer(Q);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=Z===st?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&he&&($=he.RGBA16_EXT),k===r.SHORT&&he&&($=he.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(C,b){let k;return C?b===null||b===Pn||b===$i?k=r.DEPTH24_STENCIL8:b===un?k=r.DEPTH32F_STENCIL8:b===Cs&&(k=r.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pn||b===$i?k=r.DEPTH_COMPONENT24:b===un?k=r.DEPTH_COMPONENT32F:b===Cs&&(k=r.DEPTH_COMPONENT16),k}function M(C,b){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==Mt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function L(C){const b=new WeakRef(C);n.get(C).__ref=b,m.add(b),v.register(C,b,b)}function P(C){const b=n.get(C).__ref;b!==void 0&&(m.delete(b),v.unregister(b))}function N(C){V(C.target)}function F(C){D(C.target)}function V(C){C.removeEventListener("dispose",N),P(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function D(C){C.removeEventListener("dispose",F),P(C),te(C)}function W(){for(const C of m){const b=C.deref();b!==void 0&&(b.isRenderTarget===!0?D(b):V(b))}m.clear(),d.clear()}function q(C){const b=n.get(C);if(b.__webglInit===void 0)return;const k=C.source,ne=f.get(k);if(ne){const Q=ne[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(C),Object.keys(ne).length===0&&f.delete(k)}n.remove(C)}function G(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const k=C.source,ne=f.get(k);delete ne[b.__cacheKey],a.memory.textures--}function te(C){const b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();const k=C.depthTexture;if(k&&k.renderTarget===C&&V(k),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let re=0;re<b.__webglFramebuffer[Q].length;re++)r.deleteFramebuffer(b.__webglFramebuffer[Q][re]);else r.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[Q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=C.textures;for(let Q=0,re=ne.length;Q<re;Q++){const he=n.get(ne[Q]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(ne[Q])}n.remove(C)}let H=0;function K(){H=0}function ee(){return H}function Me(C){H=C}function De(){const C=H;return C>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,C}function J(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function ge(C,b){const k=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const ne=C.image;if(ne===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{At(k,C,b);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+b)}function be(C,b){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){At(k,C,b);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+b)}function Le(C,b){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){At(k,C,b);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+b)}function _e(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){$t(k,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+b)}const ke={[Ki]:r.REPEAT,[Rn]:r.CLAMP_TO_EDGE,[Tr]:r.MIRRORED_REPEAT},bt={[Lt]:r.NEAREST,[nh]:r.NEAREST_MIPMAP_NEAREST,[_s]:r.NEAREST_MIPMAP_LINEAR,[Mt]:r.LINEAR,[xr]:r.LINEAR_MIPMAP_NEAREST,[Cn]:r.LINEAR_MIPMAP_LINEAR},Ie={[Du]:r.NEVER,[dh]:r.ALWAYS,[Nu]:r.LESS,[hh]:r.LEQUAL,[Uu]:r.EQUAL,[uh]:r.GEQUAL,[Ou]:r.GREATER,[Fu]:r.NOTEQUAL};function nt(C,b){if(b.type===un&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Mt||b.magFilter===xr||b.magFilter===_s||b.magFilter===Cn||b.minFilter===Mt||b.minFilter===xr||b.minFilter===_s||b.minFilter===Cn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ke[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ke[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ke[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,bt[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,bt[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Lt||b.minFilter!==_s&&b.minFilter!==Cn||b.type===un&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function lt(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",N),L(b));const ne=b.source;let Q=f.get(ne);Q===void 0&&(Q={},f.set(ne,Q));const re=J(b);if(re!==C.__cacheKey){Q[re]===void 0&&(Q[re]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[re].usedTimes++;const he=Q[C.__cacheKey];he!==void 0&&(Q[C.__cacheKey].usedTimes--,he.usedTimes===0&&G(b)),C.__cacheKey=re,C.__webglTexture=Q[re].texture}return k}function Ye(C,b,k){return Math.floor(Math.floor(C/k)/b)}function Bt(C,b,k,ne){const re=C.updateRanges;if(re.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,k,ne,b.data);else{re.sort((I,j)=>I.start-j.start);let he=0;for(let I=1;I<re.length;I++){const j=re[he],Y=re[I],le=j.start+j.count,se=Ye(Y.start,b.width,4),ae=Ye(j.start,b.width,4);Y.start<=le+1&&se===ae&&Ye(Y.start+Y.count-1,b.width,4)===se?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++he,re[he]=Y)}re.length=he+1;const $=t.getParameter(r.UNPACK_ROW_LENGTH),Z=t.getParameter(r.UNPACK_SKIP_PIXELS),oe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let I=0,j=re.length;I<j;I++){const Y=re[I],le=Math.floor(Y.start/4),se=Math.ceil(Y.count/4),ae=le%b.width,Re=Math.floor(le/b.width),Ve=se,ie=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(r.TEXTURE_2D,0,ae,Re,Ve,ie,k,ne,b.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function At(C,b,k){let ne=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=r.TEXTURE_3D);const Q=lt(C,b),re=b.source;t.bindTexture(ne,C.__webglTexture,r.TEXTURE0+k);const he=n.get(re);if(re.version!==he.__version||Q===!0){if(t.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ie=qe.getPrimaries(qe.workingColorSpace),Ce=b.colorSpace===ni?null:qe.getPrimaries(b.colorSpace),Ge=b.colorSpace===ni||ie===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let Z=x(b.image,!1,i.maxTextureSize);Z=Pe(b,Z);const oe=s.convert(b.format,b.colorSpace),I=s.convert(b.type);let j=w(b.internalFormat,oe,I,b.normalized,b.colorSpace,b.isVideoTexture);nt(ne,b);let Y;const le=b.mipmaps,se=b.isVideoTexture!==!0,ae=he.__version===void 0||Q===!0,Re=re.dataReady,Ve=M(b,Z);if(b.isDepthTexture)j=_(b.format===ii,b.type),ae&&(se?t.texStorage2D(r.TEXTURE_2D,1,j,Z.width,Z.height):t.texImage2D(r.TEXTURE_2D,0,j,Z.width,Z.height,0,oe,I,null));else if(b.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(r.TEXTURE_2D,Ve,j,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)Y=le[ie],se?Re&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,oe,I,Y.data):t.texImage2D(r.TEXTURE_2D,ie,j,Y.width,Y.height,0,oe,I,Y.data);b.generateMipmaps=!1}else se?(ae&&t.texStorage2D(r.TEXTURE_2D,Ve,j,Z.width,Z.height),Re&&Bt(b,Z,oe,I)):t.texImage2D(r.TEXTURE_2D,0,j,Z.width,Z.height,0,oe,I,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,j,le[0].width,le[0].height,Z.depth);for(let ie=0,Ce=le.length;ie<Ce;ie++)if(Y=le[ie],b.format!==_n)if(oe!==null)if(se){if(Re)if(b.layerUpdates.size>0){const Ge=fc(Y.width,Y.height,b.format,b.type);for(const pe of b.layerUpdates){const it=Y.data.subarray(pe*Ge/Y.data.BYTES_PER_ELEMENT,(pe+1)*Ge/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,pe,Y.width,Y.height,1,oe,it)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,Z.depth,oe,Y.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,j,Y.width,Y.height,Z.depth,0,Y.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,Z.depth,oe,I,Y.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,j,Y.width,Y.height,Z.depth,0,oe,I,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(r.TEXTURE_2D,Ve,j,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)Y=le[ie],b.format!==_n?oe!==null?se?Re&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,oe,Y.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,j,Y.width,Y.height,0,Y.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Re&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Y.width,Y.height,oe,I,Y.data):t.texImage2D(r.TEXTURE_2D,ie,j,Y.width,Y.height,0,oe,I,Y.data)}else if(b.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,j,Z.width,Z.height,Z.depth),Re)if(b.layerUpdates.size>0){const ie=fc(Z.width,Z.height,b.format,b.type);for(const Ce of b.layerUpdates){const Ge=Z.data.subarray(Ce*ie/Z.data.BYTES_PER_ELEMENT,(Ce+1)*ie/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ce,Z.width,Z.height,1,oe,I,Ge)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,oe,I,Z.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,j,Z.width,Z.height,Z.depth,0,oe,I,Z.data);else if(b.isData3DTexture)se?(ae&&t.texStorage3D(r.TEXTURE_3D,Ve,j,Z.width,Z.height,Z.depth),Re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,oe,I,Z.data)):t.texImage3D(r.TEXTURE_3D,0,j,Z.width,Z.height,Z.depth,0,oe,I,Z.data);else if(b.isFramebufferTexture){if(ae)if(se)t.texStorage2D(r.TEXTURE_2D,Ve,j,Z.width,Z.height);else{let ie=Z.width,Ce=Z.height;for(let Ge=0;Ge<Ve;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,j,ie,Ce,0,oe,I,null),ie>>=1,Ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const ie=r.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Z.parentNode!==ie){ie.appendChild(Z),d.add(b),ie.onpaint=Ce=>{const Ge=Ce.changedElements;for(const pe of d)Ge.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Z);else{const Ge=r.RGBA,pe=r.RGBA,it=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,pe,it,Z)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){const ie=Oe(le[0]);t.texStorage2D(r.TEXTURE_2D,Ve,j,ie.width,ie.height)}for(let ie=0,Ce=le.length;ie<Ce;ie++)Y=le[ie],se?Re&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,oe,I,Y):t.texImage2D(r.TEXTURE_2D,ie,j,oe,I,Y);b.generateMipmaps=!1}else if(se){if(ae){const ie=Oe(Z);t.texStorage2D(r.TEXTURE_2D,Ve,j,ie.width,ie.height)}Re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,I,Z)}else t.texImage2D(r.TEXTURE_2D,0,j,oe,I,Z);T(b)&&b.mipmapsAutoUpdate===!0&&S(ne),he.__version=re.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function $t(C,b,k){if(b.image.length!==6)return;const ne=lt(C,b),Q=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const re=n.get(Q);if(Q.version!==re.__version||ne===!0){t.activeTexture(r.TEXTURE0+k);const he=qe.getPrimaries(qe.workingColorSpace),$=b.colorSpace===ni?null:qe.getPrimaries(b.colorSpace),Z=b.colorSpace===ni||he===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,I=b.image[0]&&b.image[0].isDataTexture,j=[];for(let pe=0;pe<6;pe++)!oe&&!I?j[pe]=x(b.image[pe],!0,i.maxCubemapSize):j[pe]=I?b.image[pe].image:b.image[pe],j[pe]=Pe(b,j[pe]);const Y=j[0],le=s.convert(b.format,b.colorSpace),se=s.convert(b.type);let ae=w(b.internalFormat,le,se,b.normalized,b.colorSpace);const Re=b.isVideoTexture!==!0,Ve=re.__version===void 0||ne===!0,ie=Q.dataReady;let Ce=M(b,Y);nt(r.TEXTURE_CUBE_MAP,b);let Ge;if(b.isDepthTexture){if(ae=_(b.format===ii,b.type),Ve)if(Re)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,ae,Y.width,Y.height);else for(let pe=0;pe<6;pe++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,Y.width,Y.height,0,le,se,null)}else if(oe){Re&&Ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ae,Y.width,Y.height);for(let pe=0;pe<6;pe++){Ge=j[pe].mipmaps;for(let it=0;it<Ge.length;it++){const Ut=Ge[it];b.format!==_n?le!==null?Re?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,0,0,Ut.width,Ut.height,le,Ut.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,ae,Ut.width,Ut.height,0,Ut.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,0,0,Ut.width,Ut.height,le,se,Ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,ae,Ut.width,Ut.height,0,le,se,Ut.data)}}}else{if(Ge=b.mipmaps,Re&&Ve){Ge.length>0&&Ce++;const pe=Oe(j[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ae,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(I){Re?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,j[pe].width,j[pe].height,le,se,j[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,j[pe].width,j[pe].height,0,le,se,j[pe].data);for(let it=0;it<Ge.length;it++){const Yn=Ge[it].image[pe].image;Re?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,0,0,Yn.width,Yn.height,le,se,Yn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,ae,Yn.width,Yn.height,0,le,se,Yn.data)}}else{Re?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,le,se,j[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,le,se,j[pe]);for(let it=0;it<Ge.length;it++){const Ut=Ge[it];Re?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,0,0,le,se,Ut.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,ae,le,se,Ut.image[pe])}}}T(b)&&b.mipmapsAutoUpdate===!0&&S(r.TEXTURE_CUBE_MAP),re.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _t(C,b,k,ne,Q,re){const he=s.convert(k.format,k.colorSpace),$=s.convert(k.type),Z=w(k.internalFormat,he,$,k.normalized,k.colorSpace),oe=n.get(b),I=n.get(k);if(I.__renderTarget=b,!oe.__hasExternalTextures){const j=Math.max(1,b.width>>re),Y=Math.max(1,b.height>>re);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,Z,j,Y,b.depth,0,he,$,null):t.texImage2D(Q,re,Z,j,Y,0,he,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),fe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,I.__webglTexture,0,pt(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,I.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function bn(C,b,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const ne=b.depthTexture,Q=ne&&ne.isDepthTexture?ne.type:null,re=_(b.stencilBuffer,Q),he=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fe(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt(b),re,b.width,b.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt(b),re,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,re,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,C)}else{const ne=b.textures;for(let Q=0;Q<ne.length;Q++){const re=ne[Q],he=s.convert(re.format,re.colorSpace),$=s.convert(re.type),Z=w(re.internalFormat,he,$,re.normalized,re.colorSpace);fe(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt(b),Z,b.width,b.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt(b),Z,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Z,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(C,b,k){const ne=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(b.depthTexture);Q.__renderTarget=b;const re=ne?b.depthTexture.image[0]:b.depthTexture.image;(!Q.__webglTexture||re.width!==b.width||re.height!==b.height)&&(re.width=b.width,re.height=b.height,b.depthTexture.needsUpdate=!0),ne?_e(b.depthTexture,0):ge(b.depthTexture,0);const he=Q.__webglTexture,$=pt(b),Z=ne?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,oe=b.depthTexture.format===ii?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ai)fe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,Z,he,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,oe,Z,he,0);else if(b.depthTexture.format===ii)fe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,Z,he,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,oe,Z,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rn(C){const b=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const ne=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",Q)};ne.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=ne}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let ne=0;ne<6;ne++)Nt(b.__webglFramebuffer[ne],C,ne);else C.texture.mipmaps.length>0?Nt(b.__webglFramebuffer[0],C,0):Nt(b.__webglFramebuffer,C,0);else if(k){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=r.createRenderbuffer(),bn(b.__webglDepthbuffer[ne],C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer[ne];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,re)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),bn(b.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,re)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function an(C,b,k){const ne=n.get(C);b!==void 0&&_t(ne.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&rn(C)}function on(C){const b=C.texture,k=n.get(C),ne=n.get(b);C.addEventListener("dispose",F),L(C);const Q=C.textures,re=C.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=b.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(b.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let Z=0;Z<b.mipmaps.length;Z++)k.__webglFramebuffer[$][Z]=r.createFramebuffer()}else k.__webglFramebuffer[$]=r.createFramebuffer()}else{if(b.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<b.mipmaps.length;$++)k.__webglFramebuffer[$]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(he)for(let $=0,Z=Q.length;$<Z;$++){const oe=n.get(Q[$]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&fe(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){const Z=Q[$];k.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[$]);const oe=s.convert(Z.format,Z.colorSpace),I=s.convert(Z.type),j=w(Z.internalFormat,oe,I,Z.normalized,Z.colorSpace,C.isXRRenderTarget===!0),Y=pt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,j,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,k.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),bn(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),nt(r.TEXTURE_CUBE_MAP,b);for(let $=0;$<6;$++)if(b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)_t(k.__webglFramebuffer[$][Z],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Z);else _t(k.__webglFramebuffer[$],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);T(b)?S(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(he){for(let $=0,Z=Q.length;$<Z;$++){const oe=Q[$],I=n.get(oe);let j=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,I.__webglTexture),nt(j,oe),_t(k.__webglFramebuffer,C,oe,r.COLOR_ATTACHMENT0+$,j,0),T(oe)&&S(j)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,ne.__webglTexture),nt($,b),b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)_t(k.__webglFramebuffer[Z],C,b,r.COLOR_ATTACHMENT0,$,Z);else _t(k.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,$,0);T(b)?S($):b.mipmaps.length>0&&r.texParameteri($,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&rn(C)}function O(C){const b=C.textures;for(let k=0,ne=b.length;k<ne;k++){const Q=b[k];if(T(Q)&&Q.mipmapsAutoUpdate===!0){const re=R(C),he=n.get(Q).__webglTexture;t.bindTexture(re,he),S(re),t.unbindTexture()}}}const ln=[];function ft(C){if(C.samples>0){if(fe(C)===!1){const b=C.textures,k=C.width,ne=C.height;let Q=r.COLOR_BUFFER_BIT;const re=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=n.get(C),$=b.length>1;if($)for(let oe=0;oe<b.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let oe=0;oe<b.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);const I=n.get(b[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,I,0)}r.blitFramebuffer(0,0,k,ne,0,0,k,ne,Q,r.NEAREST),l===!0&&(ln.length=0,ln.push(r.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ln.push(re),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ln))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let oe=0;oe<b.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);const I=n.get(b[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,I,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function pt(C){return Math.min(i.maxSamples,C.samples)}function fe(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Pe(C,b){const k=C.colorSpace,ne=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Qt&&k!==ni&&(qe.getTransfer(k)===st?(ne!==_n||Q!==nn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",k)),b}function Oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=K,this.getTextureUnits=ee,this.setTextureUnits=Me,this.setTexture2D=ge,this.setTexture2DArray=be,this.setTexture3D=Le,this.setTextureCube=_e,this.rebindTextures=an,this.setupRenderTarget=on,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=rn,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=fe,this.dispose=W}function y_(r,e){function t(n,i=ni){let s;const a=qe.getTransfer(i);if(n===nn)return r.UNSIGNED_BYTE;if(n===bo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return r.BYTE;if(n===sh)return r.SHORT;if(n===Cs)return r.UNSIGNED_SHORT;if(n===Mo)return r.INT;if(n===Pn)return r.UNSIGNED_INT;if(n===un)return r.FLOAT;if(n===In)return r.HALF_FLOAT;if(n===oh)return r.ALPHA;if(n===lh)return r.RGB;if(n===_n)return r.RGBA;if(n===ai)return r.DEPTH_COMPONENT;if(n===ii)return r.DEPTH_STENCIL;if(n===To)return r.RED;if(n===wo)return r.RED_INTEGER;if(n===yi)return r.RG;if(n===Ao)return r.RG_INTEGER;if(n===Ro)return r.RGBA_INTEGER;if(n===yr||n===Sr||n===Mr||n===br)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Oa||n===Fa||n===Ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===za||n===Ga||n===Ha||n===Va||n===wr||n===Wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ka||n===za)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ga)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return s.COMPRESSED_R11_EAC;if(n===Va)return s.COMPRESSED_SIGNED_R11_EAC;if(n===wr)return s.COMPRESSED_RG11_EAC;if(n===Wa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Ka||n===$a||n===Za||n===Ja||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===so)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===ao||n===oo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ro)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===Ar||n===ho)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ar)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class b_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ah(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mi({vertexShader:S_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends li{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",p=new b_,g={},x=t.getContextAttributes();let T=null,S=null;const R=[],w=[],_=new xe;let M=null,L=null;const P=new Jt;P.viewport=new ot;const N=new Jt;N.viewport=new ot;const F=[P,N],V=new Tf;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=R[J];return ge===void 0&&(ge=new jr,R[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=R[J];return ge===void 0&&(ge=new jr,R[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=R[J];return ge===void 0&&(ge=new jr,R[J]=ge),ge.getHandSpace()};function q(J){const ge=w.indexOf(J.inputSource);if(ge===-1)return;const be=R[ge];be!==void 0&&(be.update(J.inputSource,J.frame,c||a),be.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",te);for(let J=0;J<R.length;J++){const ge=w[J];ge!==null&&(w[J]=null,R[J].disconnect(ge))}D=null,W=null,p.reset();for(const J in g)delete g[J];if(e.setRenderTarget(T),f=null,u=null,d=null,i=null,S=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),L!==null){const J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",G),i.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Le=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=x.stencil?ii:ai,Le=x.stencil?$i:Pn);const ke={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(ke),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Ln(u.textureWidth,u.textureHeight,{format:_n,type:nn,depthTexture:new Ji(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ln(f.framebufferWidth,f.framebufferHeight,{format:_n,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(J){for(let ge=0;ge<J.removed.length;ge++){const be=J.removed[ge],Le=w.indexOf(be);Le>=0&&(w[Le]=null,R[Le].disconnect(be))}for(let ge=0;ge<J.added.length;ge++){const be=J.added[ge];let Le=w.indexOf(be);if(Le===-1){for(let ke=0;ke<R.length;ke++)if(ke>=w.length){w.push(be),Le=ke;break}else if(w[ke]===null){w[ke]=be,Le=ke;break}if(Le===-1)break}const _e=R[Le];_e&&_e.connect(be)}}function H(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ge=J.near,be=J.far;p.texture!==null&&(p.depthNear>0&&(ge=p.depthNear),p.depthFar>0&&(be=p.depthFar)),V.near=N.near=P.near=ge,V.far=N.far=P.far=be,(D!==V.near||W!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,W=V.far),V.layers.mask=J.layers.mask|6,P.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Le=J.parent,_e=V.cameras;H(V,Le);for(let ke=0;ke<_e.length;ke++)H(_e[ke],Le);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),K(J,V,Le)};function K(J,ge,be){be===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Zi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(J){return g[J]};let ee=null;function Me(J,ge){if(h=ge.getViewerPose(c||a),m=ge,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Le=!1;be.length!==V.cameras.length&&(V.cameras.length=0,Le=!0);for(let Ie=0;Ie<be.length;Ie++){const nt=be[Ie];let lt=null;if(f!==null)lt=f.getViewport(nt);else{const Bt=d.getViewSubImage(u,nt);lt=Bt.viewport,Ie===0&&(e.setRenderTargetTextures(S,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(S))}let Ye=F[Ie];Ye===void 0&&(Ye=new Jt,Ye.layers.enable(Ie),Ye.viewport=new ot,F[Ie]=Ye),Ye.matrix.fromArray(nt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(nt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(lt.x,lt.y,lt.width,lt.height),Ie===0&&(V.matrix.copy(Ye.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Le===!0&&V.cameras.push(Ye)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Ie=d.getDepthInformation(be[0]);Ie&&Ie.isValid&&Ie.texture&&p.init(Ie,i.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ie=0;Ie<be.length;Ie++){const nt=be[Ie].camera;if(nt){let lt=g[nt];lt||(lt=new Ah,g[nt]=lt);const Ye=d.getCameraImage(nt);lt.sourceTexture=Ye}}}}for(let be=0;be<R.length;be++){const Le=w[be],_e=R[be];Le!==null&&_e!==void 0&&_e.update(Le,ge,c||a)}ee&&ee(J,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),m=null}const De=new Uh;De.setAnimationLoop(Me),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const T_=new Ue,Xh=new Fe;Xh.set(-1,0,0,0,1,0,0,0,1);function w_(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Lh(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,x,T,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,S)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),v(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,x,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===jt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===jt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),T=x.envMap,S=x.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Xh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,x){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function A_(r,e,t,n){let i={},s={};function a(x,T){const S=T.program;n.uniformBlockBinding(x,S,i[x.id])}function o(x,T){let S=i[x.id];S===void 0&&(m(x),S=l(x),i[x.id]=S,x.addEventListener("dispose",p));const R=T.program;n.updateUBOMapping(x,R);const w=e.render.frame;s[x.id]!==w&&(c(x),s[x.id]=w)}function l(x){const T=r.createBuffer(),S=x.__size,R=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,S,R),r.bindBuffer(r.UNIFORM_BUFFER,null),T}function c(x){const T=i[x.id],S=x.uniforms,R=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let w=0,_=S.length;w<_;w++){const M=S[w];if(Array.isArray(M))for(let L=0,P=M.length;L<P;L++)h(M[L],w,L,R);else h(M,w,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(x,T,S,R){if(u(x,T,S,R)===!0){const w=x.__offset,_=x.value;if(Array.isArray(_)){let M=0;for(let L=0;L<_.length;L++){const P=_[L],N=v(P,!0);d(P,x.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,x.__data)}}function d(x,T,S){typeof x=="number"||typeof x=="boolean"?T[S]=x:x.isMatrix3?(T[S]=x.elements[0],T[S+1]=x.elements[1],T[S+2]=x.elements[2],T[S+3]=0,T[S+4]=x.elements[3],T[S+5]=x.elements[4],T[S+6]=x.elements[5],T[S+7]=0,T[S+8]=x.elements[6],T[S+9]=x.elements[7],T[S+10]=x.elements[8],T[S+11]=0):ArrayBuffer.isView(x)?T.set(x.subarray(0,T.length-S),S):x.toArray(T,S)}function u(x,T,S,R){const w=x.value,_=T+"_"+S;if(Array.isArray(w)){R[_]===void 0&&(R[_]=[]);const M=R[_];let L=!1;for(let P=0;P<w.length;P++)f(w[P],M,P)===!0&&(L=!0);return L}return f(w,R,_)}function f(x,T,S){if(T[S]===void 0)return typeof x=="number"||typeof x=="boolean"?T[S]=x:ArrayBuffer.isView(x)?T[S]=x.slice():T[S]=x.clone(),!0;{const R=T[S];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return T[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(x){const T=x.uniforms;let S=0;const R=16;for(let _=0,M=T.length;_<M;_++){const L=Array.isArray(T[_])?T[_]:[T[_]];for(let P=0,N=L.length;P<N;P++){const F=L[P],V=Array.isArray(F.value)?F.value:[F.value],D=Array.isArray(T[_])||Array.isArray(F.value);let W=S;for(let G=0,te=V.length;G<te;G++){const H=V[G],K=v(H,D),ee=S%R,Me=ee%K.boundary,De=ee+Me;S+=Me,De!==0&&R-De<K.storage&&(S+=R-De),G===0&&(W=S),S+=K.storage}const q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((S-W)/Float32Array.BYTES_PER_ELEMENT),F.__offset=W}}const w=S%R;return w>0&&(S+=R-w),x.__size=S,x.__cache={},this}function v(x,T){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=16,S.storage=48):x.isMatrix4?(S.boundary=16,S.storage=64):x.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",x),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(x){const T=x.target;T.removeEventListener("dispose",p),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);i={},s={}}return{bind:a,update:o,dispose:g}}const R_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function C_(){return Tn===null&&(Tn=new Uo(R_,16,16,yi,In),Tn.name="DFG_LUT",Tn.minFilter=Mt,Tn.magFilter=Mt,Tn.wrapS=Rn,Tn.wrapT=Rn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class L_{constructor(e={}){const{canvas:t=zu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=f,p=new Set([Ro,Ao,wo]),g=new Set([nn,Pn,Cs,$i,bo,Eo]),x=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let R=null,w=null;const _=[],M=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,F=null,V=null,D=null,W=null;this._outputColorSpace=yt;let q=0,G=0,te=null,H=-1,K=null;const ee=new ot,Me=new ot;let De=null;const J=new ye(0);let ge=0,be=t.width,Le=t.height,_e=1,ke=null,bt=null;const Ie=new ot(0,0,be,Le),nt=new ot(0,0,be,Le);let lt=!1;const Ye=new Ns,Bt=new Fo;let At=!1,$t=!1;const _t=new Ue,bn=new y,Nt=new ot,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let an=!1;function on(){return te===null?_e:1}let O=n;function ln(E,U){return t.getContext(E,U)}let ft,pt,fe,Rt,Pe,Oe,C,b,k,ne,Q,re,he,$,Z,oe,I,j,Y,le,se,ae,Re;try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){const U="webgl2";if(O=ln(U,E),O===null)throw ln(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(E){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ne("WebGLRenderer: "+E.message),E}function Ve(){ft=new Dg(O),ft.init(),se=new y_(O,ft),pt=new Mg(O,ft,e,se),fe=new v_(O,ft),pt.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),V=O.createFramebuffer(),D=O.createFramebuffer(),W=O.createFramebuffer(),Rt=new Og(O),Pe=new s_,Oe=new x_(O,ft,fe,Pe,pt,se,Rt),C=new Ig(P),b=new Bf(O),ae=new yg(O,b),k=new Ng(O,b,Rt,ae),ne=new Bg(O,k,b,ae,Rt),j=new Fg(O,pt,Oe),Z=new bg(Pe),Q=new i_(P,C,ft,pt,ae,Z),re=new w_(P,Pe),he=new a_,$=new d_(ft),I=new xg(P,C,fe,ne,m,l),oe=new __(P,ne,pt),Re=new A_(O,Rt,pt,fe),Y=new Sg(O,ft,Rt),le=new Ug(O,ft,Rt),Rt.programs=Q.programs,P.capabilities=pt,P.extensions=ft,P.properties=Pe,P.renderLists=he,P.shadowMap=oe,P.state=fe,P.info=Rt}v!==nn&&(L=new zg(v,t.width,t.height,o,i,s));const ie=new E_(P,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(E){E!==void 0&&(_e=E,this.setSize(be,Le,!1))},this.getSize=function(E){return E.set(be,Le)},this.setSize=function(E,U,X=!0){if(ie.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}be=E,Le=U,t.width=Math.floor(E*_e),t.height=Math.floor(U*_e),X===!0&&(t.style.width=E+"px",t.style.height=U+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(be*_e,Le*_e).floor()},this.setDrawingBufferSize=function(E,U,X){be=E,Le=U,_e=X,t.width=Math.floor(E*X),t.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(v===nn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(Ie)},this.setViewport=function(E,U,X,B){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,U,X,B),fe.viewport(ee.copy(Ie).multiplyScalar(on()).round())},this.getScissor=function(E){return E.copy(nt)},this.setScissor=function(E,U,X,B){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,U,X,B),fe.scissor(Me.copy(nt).multiplyScalar(on()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){fe.setScissorTest(lt=E)},this.setOpaqueSort=function(E){ke=E},this.setTransparentSort=function(E){bt=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let B=0;if(E){let z=!1;if(te!==null){const ue=te.texture.format;z=p.has(ue)}if(z){const ue=te.texture.type,Se=g.has(ue),ce=I.getClearColor(),ve=I.getClearAlpha(),we=ce.r,Be=ce.g,Ke=ce.b;Se?(x[0]=we,x[1]=Be,x[2]=Ke,x[3]=ve,O.clearBufferuiv(O.COLOR,0,x)):(T[0]=we,T[1]=Be,T[2]=Ke,T[3]=ve,O.clearBufferiv(O.COLOR,0,T))}else B|=O.COLOR_BUFFER_BIT}U&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),I.dispose(),he.dispose(),$.dispose(),Oe.dispose(),Pe.dispose(),C.dispose(),ne.dispose(),k.dispose(),ae.dispose(),Re.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",nl),ie.removeEventListener("sessionend",il),hi.stop()};function Ce(E){E.preventDefault(),Cr("WebGLRenderer: Context Lost."),N=!0}function Ge(){Cr("WebGLRenderer: Context Restored."),N=!1;const E=Rt.autoReset,U=oe.enabled,X=oe.autoUpdate,B=oe.needsUpdate,z=oe.type;Ve(),Rt.autoReset=E,oe.enabled=U,oe.autoUpdate=X,oe.needsUpdate=B,oe.type=z}function pe(E){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const U=E.target;U.removeEventListener("dispose",it),Ut(U)}function Ut(E){Yn(E),Pe.remove(E)}function Yn(E){const U=Pe.get(E).programs;U!==void 0&&(U.forEach(function(X){Q.releaseProgram(X)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,B,z,ue){U===null&&(U=rn);const Se=z.isMesh&&z.matrixWorld.determinantAffine()<0,ce=eu(E,U,X,B,z);fe.setMaterial(B,Se);let ve=X.index,we=1;if(B.wireframe===!0){if(ve=k.getWireframeAttribute(X),ve===void 0)return;we=2}const Be=X.drawRange,Ke=X.attributes.position;let Ee=Be.start*we,$e=(Be.start+Be.count)*we;ue!==null&&(Ee=Math.max(Ee,ue.start*we),$e=Math.min($e,(ue.start+ue.count)*we)),ve!==null?(Ee=Math.max(Ee,0),$e=Math.min($e,ve.count)):Ke!=null&&(Ee=Math.max(Ee,0),$e=Math.min($e,Ke.count));const Et=$e-Ee;if(Et<0||Et===1/0)return;ae.setup(z,B,ce,X,ve);let ht,ct=Y;if(ve!==null&&(ht=b.get(ve),ct=le,ct.setIndex(ht)),z.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*on()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(z.isLine){let Gt=B.linewidth;Gt===void 0&&(Gt=1),fe.setLineWidth(Gt*on()),z.isLineSegments?ct.setMode(O.LINES):z.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else z.isPoints?ct.setMode(O.POINTS):z.isSprite&&ct.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Gt=z._multiDrawStarts,Te=z._multiDrawCounts,qt=z._multiDrawCount,je=ve?b.get(ve).bytesPerElement:1,ui=Pe.get(B).currentProgram.getUniforms();for(let Ht=0;Ht<qt;Ht++)ui.setValue(O,"_gl_DrawID",Ht),ct.render(Gt[Ht]/je,Te[Ht])}else if(z.isInstancedMesh)ct.renderInstances(Ee,Et,z.count);else if(X.isInstancedBufferGeometry){const Gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Te=Math.min(X.instanceCount,Gt);ct.renderInstances(Ee,Et,Te)}else ct.render(Ee,Et)};function tl(E,U,X,B){F!==null&&E.isNodeMaterial&&F.setObject(B,E),At===!0&&Z.setState(E,X,!1),E.transparent===!0&&E.side===St&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,rs(E,U,B),E.side=ri,E.needsUpdate=!0,rs(E,U,B),E.side=St):rs(E,U,B)}this.compile=function(E,U,X=null){X===null&&(X=E),F!==null&&F.renderStart(E,U,X),w=$.get(X),w.init(U),M.push(w),X.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),$t=this.localClippingEnabled,At=Z.init(this.clippingPlanes,$t),At===!0&&Z.setGlobalState(this.clippingPlanes,U),F!==null&&oe.render(w.state.shadowsArray,X,U);const B=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ue=z.material;if(ue)if(Array.isArray(ue))for(let Se=0;Se<ue.length;Se++){const ce=ue[Se];tl(ce,X,U,z),B.add(ce)}else tl(ue,X,U,z),B.add(ue)}),w=M.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(E,U,X=null){const B=this.compile(E,U,X);return new Promise(z=>{function ue(){if(B.forEach(function(Se){const ve=Pe.get(Se).currentProgram;(ve===void 0||ve.isReady())&&B.delete(Se)}),B.size===0){z(E);return}setTimeout(ue,10)}ft.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Gr=null;function jh(E){Gr&&Gr(E)}function nl(){hi.stop()}function il(){hi.start()}const hi=new Uh;hi.setAnimationLoop(jh),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(E){Gr=E,ie.setAnimationLoop(E),E===null?hi.stop():hi.start()},ie.addEventListener("sessionstart",nl),ie.addEventListener("sessionend",il),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(E,U);const X=ie.enabled===!0&&ie.isPresenting===!0,B=L!==null&&(te===null||X)&&L.begin(P,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,U,te),w=$.get(E,M.length),w.init(U),w.state.textureUnits=Oe.getTextureUnits(),M.push(w),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Bt.setFromArrayCamera(U):Ye.setFromProjectionMatrix(_t,vn,U.reversedDepth),$t=this.localClippingEnabled,At=Z.init(this.clippingPlanes,$t),R=he.get(E,_.length),R.init(),_.push(R),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&Hr(Se,U,-1/0,P.sortObjects)}Hr(E,U,0,P.sortObjects),R.finish(),F!==null&&F.updateLights(w.state.lightsArray),P.sortObjects===!0&&R.sort(ke,bt),an=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,an&&I.addToRenderList(R,E),this.info.autoReset===!0&&this.info.reset(),At===!0&&Z.beginShadows();const z=w.state.shadowsArray;if(oe.render(z,E,U),At===!0&&Z.endShadows(),(B&&L.hasRenderPass())===!1){const Se=R.opaque,ce=R.transmissive;if(w.setupLights(),U.isArrayCamera){const ve=U.cameras;if(ce.length>0)for(let we=0,Be=ve.length;we<Be;we++){const Ke=ve[we];rl(Se,ce,E,Ke)}an&&I.render(E);for(let we=0,Be=ve.length;we<Be;we++){const Ke=ve[we];sl(R,E,Ke,Ke.viewport)}}else ce.length>0&&rl(Se,ce,E,U),an&&I.render(E),sl(R,E,U)}te!==null&&G===0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te)),B&&L.end(P),E.isScene===!0&&E.onAfterRender(P,E,U),ae.resetDefaultState(),H=-1,K=null,M.pop(),M.length>0?(w=M[M.length-1],Oe.setTextureUnits(w.state.textureUnits),At===!0&&Z.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,F!==null&&F.renderEnd()};function Hr(E,U,X,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){const Se=U.isArrayCamera?Bt:Ye;if(!E.frustumCulled||E.intersectsFrustum(Se)){B&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const ce=ne.update(E),ve=E.material;ve.visible&&R.push(E,ce,ve,X,Nt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){const Se=U.isArrayCamera?Bt:Ye;if(!E.frustumCulled||E.intersectsFrustum(Se)){const ce=ne.update(E),ve=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Nt.copy(ce.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(ve)){const we=ce.groups;for(let Be=0,Ke=we.length;Be<Ke;Be++){const Ee=we[Be],$e=ve[Ee.materialIndex];$e&&$e.visible&&R.push(E,ce,$e,X,Nt.z,Ee,U)}}else ve.visible&&R.push(E,ce,ve,X,Nt.z,null,U)}}}const ue=E.children;for(let Se=0,ce=ue.length;Se<ce;Se++)Hr(ue[Se],U,X,B)}function sl(E,U,X,B){const{opaque:z,transmissive:ue,transparent:Se}=E;w.setupLightsView(X),At===!0&&Z.setGlobalState(P.clippingPlanes,X),B&&fe.viewport(ee.copy(B)),z.length>0&&Hs(z,U,X),ue.length>0&&Hs(ue,U,X),Se.length>0&&Hs(Se,U,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function rl(E,U,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Ee=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Ln(1,1,{generateMipmaps:!0,type:Ee?In:nn,minFilter:Cn,samples:Math.max(4,pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const ue=w.state.transmissionRenderTarget[B.id],Se=B.viewport||ee;ue.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);const ce=P.getRenderTarget(),ve=P.getActiveCubeFace(),we=P.getActiveMipmapLevel();P.setRenderTarget(ue),P.getClearColor(J),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),an&&I.render(X);const Be=P.toneMapping;P.toneMapping=Wn;const Ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),At===!0&&Z.setGlobalState(P.clippingPlanes,B),Hs(E,X,B),Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let $e=0,Et=U.length;$e<Et;$e++){const ht=U[$e],{object:ct,geometry:Gt,material:Te,group:qt}=ht;if(Te.side===St&&ct.layers.test(B.layers)){const je=Te.side;Te.side=jt,Te.needsUpdate=!0,al(ct,X,B,Gt,Te,qt),Te.side=je,Te.needsUpdate=!0,Ee=!0}}Ee===!0&&(Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue))}P.setRenderTarget(ce,ve,we),P.setClearColor(J,ge),Ke!==void 0&&(B.viewport=Ke),P.toneMapping=Be}function Hs(E,U,X){const B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ue=E.length;z<ue;z++){const Se=E[z],{object:ce,geometry:ve,group:we}=Se;let Be=Se.material;Be.allowOverride===!0&&B!==null&&(Be=B),ce.layers.test(X.layers)&&al(ce,U,X,ve,Be,we)}}function al(E,U,X,B,z,ue){F!==null&&z.isNodeMaterial&&F.setObject(E,z),E.onBeforeRender(P,U,X,B,z,ue),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(P,U,X,B,E,ue),z.transparent===!0&&z.side===St&&z.forceSinglePass===!1?(z.side=jt,z.needsUpdate=!0,P.renderBufferDirect(X,U,B,z,E,ue),z.side=ri,z.needsUpdate=!0,P.renderBufferDirect(X,U,B,z,E,ue),z.side=St):P.renderBufferDirect(X,U,B,z,E,ue),E.onAfterRender(P,U,X,B,z,ue)}function ol(E){let U=0;for(const X of E)X.texture!==null&&U++;return U}function rs(E,U,X){U.isScene!==!0&&(U=rn);const B=Pe.get(E),z=w.state.lights,ue=w.state.shadowsArray,Se=z.state.version,ce=Q.getParameters(E,z.state,ue,U,X,w.state.lightProbeGridArray),ve=Q.getProgramCacheKey(ce);let we=B.programs;B.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Be=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;B.envMap=C.get(E.envMap||B.environment,Be),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",it),we=new Map,B.programs=we,B.programVariants=new Map);let Ke=we.get(ve);if(Ke!==void 0){if(B.currentProgram===Ke&&B.lightsStateVersion===Se)return cl(E,ce),Ke}else ce.uniforms=Q.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,X,ce),E.onBeforeCompile(ce,P),Ke=Q.acquireProgram(ce,ve),we.set(ve,Ke),B.uniforms=ce.uniforms;const Ee=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=Z.uniform),cl(E,ce),B.needsLights=nu(E),B.lightsStateVersion=Se,B.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.sunLights.value=z.state.sun,Ee.sunLightShadows.value=z.state.sunShadow,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.sunShadowMatrix.value=z.state.sunShadowMatrix,Ee.sunShadowCascade.value=z.state.sunShadowCascade,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=ol(w.state.lightProbeGridArray),B.currentProgram=Ke,B.uniformsList=null,Ke}function Qh(E,U,X,B,z){const ue=Pe.get(E),Se=ue.currentProgram.id+","+B+","+z;let ce=ue.programVariants.get(Se);return ce===void 0?(ce=rs(E,U,X),ue.programVariants.set(Se,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=B,ue.toneMapping=z),ce}function ll(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Er.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function cl(E,U){const X=Pe.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function eu(E,U,X,B,z){U.isScene!==!0&&(U=rn),Oe.resetTextureUnits();const ue=U.fog,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ce=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,we=C.get(B.envMap||Se,ve),Be=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,Et=!!X.morphAttributes.color;let ht=Wn;B.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ht=P.toneMapping);const ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Gt=ct!==void 0?ct.length:0,Te=Pe.get(B),qt=w.state.lights;if(At===!0&&($t===!0||E!==K)){const vt=E===K&&B.id===H;Z.setState(B,E,vt)}let je=!1,ui=!1;B.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==qt.state.version||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==we||B.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Z.numPlanes||Te.numIntersection!==Z.numIntersection)||Te.vertexAlphas!==Be||Te.vertexTangents!==Ke||Te.morphTargets!==Ee||Te.morphNormals!==$e||Te.morphColors!==Et||Te.morphTargetsCount!==Gt||Te.numLightProbeGrids!==ol(w.state.lightProbeGridArray)?je=!0:(Te.outputColorSpace!==ce||Te.toneMapping!==ht)&&(ui=!0):(je=!0,Te.__version=B.version);let Ht=Te.currentProgram;(je===!0||ui===!0)&&(Ht=ui===!0?Qh(B,U,z,ce,ht):rs(B,U,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,Ht,Te));let Vs=!1,Kn=!1,di=!1;const Ze=Ht.getUniforms(),kt=Te.uniforms;if(fe.useProgram(Ht.program)&&(Vs=!0,Kn=!0,di=!0),B.id!==H&&(H=B.id,Kn=!0),Vs||K!==E){fe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ze.setValue(O,"projectionMatrix",E.projectionMatrix),Ze.setValue(O,"viewMatrix",E.matrixWorldInverse);const Ot=Ze.map.cameraPosition;Ot!==void 0&&Ot.setValue(O,bn.setFromMatrixPosition(E.matrixWorld)),pt.logarithmicDepthBuffer&&Ze.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ze.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,Kn=!0,di=!0)}if(Te.needsLights&&(qt.state.sunShadowMap.length>0&&Ze.setValue(O,"sunShadowMap",qt.state.sunShadowMap,Oe),qt.state.directionalShadowMap.length>0&&Ze.setValue(O,"directionalShadowMap",qt.state.directionalShadowMap,Oe),qt.state.spotShadowMap.length>0&&Ze.setValue(O,"spotShadowMap",qt.state.spotShadowMap,Oe),qt.state.pointShadowMap.length>0&&Ze.setValue(O,"pointShadowMap",qt.state.pointShadowMap,Oe)),z.isSkinnedMesh){Ze.setOptional(O,z,"bindMatrix"),Ze.setOptional(O,z,"bindMatrixInverse");const vt=z.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),Ze.setValue(O,"boneTexture",vt.boneTexture,Oe))}z.isBatchedMesh&&(Ze.setOptional(O,z,"batchingTexture"),Ze.setValue(O,"batchingTexture",z._matricesTexture,Oe),Ze.setOptional(O,z,"batchingIdTexture"),Ze.setValue(O,"batchingIdTexture",z._indirectTexture,Oe),Ze.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&Ze.setValue(O,"batchingColorTexture",z._colorsTexture,Oe));const dn=X.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&j.update(z,X,Ht),(Kn||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,Ze.setValue(O,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(kt.envMapIntensity.value=U.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=C_()),Kn){if(Ze.setValue(O,"toneMappingExposure",P.toneMappingExposure),Te.needsLights&&tu(kt,di),ue&&B.fog===!0&&re.refreshFogUniforms(kt,ue),re.refreshMaterialUniforms(kt,B,_e,Le,w.state.transmissionRenderTarget[E.id]),Te.needsLights&&Te.numLightProbeGrids>0){const vt=S;let Ot=0;for(const Un of w.state.lightProbeGridArray)Un.texture!==null&&(vt.textures[Ot]=Un.texture,vt.min[Ot]=Un.boundingBox.min,vt.max[Ot]=Un.boundingBox.max,vt.resolution[Ot]=Un.resolution,Ot++);for(const Un in vt)vt[Un].length=Ot;kt.probesSH.value=vt.textures,kt.probesMin.value=vt.min,kt.probesMax.value=vt.max,kt.probesResolution.value=vt.resolution}Er.upload(O,ll(Te),kt,Oe)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Er.upload(O,ll(Te),kt,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ze.setValue(O,"center",z.center),Ze.setValue(O,"modelViewMatrix",z.modelViewMatrix),Ze.setValue(O,"normalMatrix",z.normalMatrix),Ze.setValue(O,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const vt=B.uniformsGroups;for(let Ot=0,Un=vt.length;Ot<Un;Ot++){const ul=vt[Ot];Re.update(ul,Ht),Re.bind(ul,Ht)}}return Ht}function tu(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function nu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,U,X){const B=Pe.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Pe.get(E.texture).__webglTexture=U,Pe.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:X,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const X=Pe.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){te=E,q=U,G=X;let B=null,z=!1,ue=!1;if(E){const ce=Pe.get(E);if(ce.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(O.FRAMEBUFFER,ce.__webglFramebuffer),ee.copy(E.viewport),Me.copy(E.scissor),De=E.scissorTest,fe.viewport(ee),fe.scissor(Me),fe.setScissorTest(De),H=-1;return}else if(ce.__webglFramebuffer===void 0)Oe.setupRenderTarget(E);else if(ce.__hasExternalTextures)Oe.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Be=E.depthTexture;if(ce.__boundDepthTexture!==Be){if(Be!==null&&Pe.has(Be)&&(E.width!==Be.image.width||E.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(E)}}const ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);const we=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[U])?B=we[U][X]:B=we[U],z=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?B=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?B=we[X]:B=we,ee.copy(E.viewport),Me.copy(E.scissor),De=E.scissorTest}else ee.copy(Ie).multiplyScalar(_e).floor(),Me.copy(nt).multiplyScalar(_e).floor(),De=lt;if(X!==0&&(B=V),fe.bindFramebuffer(O.FRAMEBUFFER,B)&&fe.drawBuffers(E,B),fe.viewport(ee),fe.scissor(Me),fe.setScissorTest(De),z){const ce=Pe.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ce.__webglTexture,X)}else if(ue){const ce=U;for(let ve=0;ve<E.textures.length;ve++){const we=Pe.get(E.textures[ve]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ve,we.__webglTexture,X,ce)}}else if(E!==null&&X!==0){const ce=Pe.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ce.__webglTexture,X)}H=-1};function hl(E){const U=Pe.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=pt.textureFormatReadable(E.format),U.__typeReadable=pt.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,X,B,z,ue,Se,ce=0){if(!(E&&E.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve){fe.bindFramebuffer(O.FRAMEBUFFER,ve);try{const we=E.textures[ce],Be=we.format,Ke=we.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ce);const Ee=hl(we);if(Ee.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&X>=0&&X<=E.height-z&&O.readPixels(U,X,B,z,se.convert(Be),se.convert(Ke),ue)}finally{const we=te!==null?Pe.get(te).__webglFramebuffer:null;fe.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,B,z,ue,Se,ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve)if(U>=0&&U<=E.width-B&&X>=0&&X<=E.height-z){fe.bindFramebuffer(O.FRAMEBUFFER,ve);const we=E.textures[ce],Be=we.format,Ke=we.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ce);const Ee=hl(we);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.bufferData(O.PIXEL_PACK_BUFFER,ue.byteLength,O.STREAM_READ),O.readPixels(U,X,B,z,se.convert(Be),se.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Et=te!==null?Pe.get(te).__webglFramebuffer:null;fe.bindFramebuffer(O.FRAMEBUFFER,Et);const ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Gu(O,ht,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ue),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer($e),O.deleteSync(ht),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){const B=Math.pow(2,-X),z=Math.floor(E.image.width*B),ue=Math.floor(E.image.height*B),Se=U!==null?U.x:0,ce=U!==null?U.y:0;Oe.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Se,ce,z,ue),fe.unbindTexture()},this.copyTextureToTexture=function(E,U,X=null,B=null,z=0,ue=0){let Se,ce,ve,we,Be,Ke,Ee,$e,Et;const ht=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(X!==null)Se=X.max.x-X.min.x,ce=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,Be=X.min.y,Ke=X.isBox3?X.min.z:0;else{const Ze=Math.pow(2,-z);Se=Math.floor(ht.width*Ze),ce=Math.floor(ht.height*Ze),E.isDataArrayTexture?ve=ht.depth:E.isData3DTexture?ve=Math.floor(ht.depth*Ze):ve=1,we=0,Be=0,Ke=0}B!==null?(Ee=B.x,$e=B.y,Et=B.z):(Ee=0,$e=0,Et=0);const ct=se.convert(U.format),Gt=se.convert(U.type);let Te;U.isData3DTexture?(Oe.setTexture3D(U,0),Te=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),Te=O.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),Te=O.TEXTURE_2D),fe.activeTexture(O.TEXTURE0),fe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),fe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),fe.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const qt=fe.getParameter(O.UNPACK_ROW_LENGTH),je=fe.getParameter(O.UNPACK_IMAGE_HEIGHT),ui=fe.getParameter(O.UNPACK_SKIP_PIXELS),Ht=fe.getParameter(O.UNPACK_SKIP_ROWS),Vs=fe.getParameter(O.UNPACK_SKIP_IMAGES);fe.pixelStorei(O.UNPACK_ROW_LENGTH,ht.width),fe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht.height),fe.pixelStorei(O.UNPACK_SKIP_PIXELS,we),fe.pixelStorei(O.UNPACK_SKIP_ROWS,Be),fe.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);const Kn=E.isDataArrayTexture||E.isData3DTexture,di=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Ze=Pe.get(E),kt=Pe.get(U),dn=Pe.get(Ze.__renderTarget),vt=Pe.get(kt.__renderTarget);fe.bindFramebuffer(O.READ_FRAMEBUFFER,dn.__webglFramebuffer),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ot=0;Ot<ve;Ot++)Kn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.get(E).__webglTexture,z,Ke+Ot),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.get(U).__webglTexture,ue,Et+Ot)),O.blitFramebuffer(we,Be,we+Se,Be+ce,Ee,$e,Ee+Se,$e+ce,O.DEPTH_BUFFER_BIT,O.NEAREST);fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Pe.has(E)){const Ze=Pe.get(E),kt=Pe.get(U);fe.bindFramebuffer(O.READ_FRAMEBUFFER,D),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,W);for(let dn=0;dn<ve;dn++)Kn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ze.__webglTexture,z,Ke+dn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ze.__webglTexture,z),di?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.__webglTexture,ue,Et+dn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,kt.__webglTexture,ue),z!==0?O.blitFramebuffer(we,Be,we+Se,Be+ce,Ee,$e,Ee+Se,$e+ce,O.COLOR_BUFFER_BIT,O.NEAREST):di?O.copyTexSubImage3D(Te,ue,Ee,$e,Et+dn,we,Be,Se,ce):O.copyTexSubImage2D(Te,ue,Ee,$e,we,Be,Se,ce);fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else di?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Te,ue,Ee,$e,Et,Se,ce,ve,ct,Gt,ht.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,ue,Ee,$e,Et,Se,ce,ve,ct,ht.data):O.texSubImage3D(Te,ue,Ee,$e,Et,Se,ce,ve,ct,Gt,ht):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ue,Ee,$e,Se,ce,ct,Gt,ht.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ue,Ee,$e,ht.width,ht.height,ct,ht.data):O.texSubImage2D(O.TEXTURE_2D,ue,Ee,$e,Se,ce,ct,Gt,ht);fe.pixelStorei(O.UNPACK_ROW_LENGTH,qt),fe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,je),fe.pixelStorei(O.UNPACK_SKIP_PIXELS,ui),fe.pixelStorei(O.UNPACK_SKIP_ROWS,Ht),fe.pixelStorei(O.UNPACK_SKIP_IMAGES,Vs),ue===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Te),fe.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){q=0,G=0,te=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Uc={type:"change"},Zo={type:"start"},qh={type:"end"},_r=new Qi,Oc=new Hn,P_=Math.cos(70*gh.DEG2RAD),Ct=new y,Zt=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ba=1e-6;class I_ extends Of{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new yn,this._lastTargetPosition=new y,this._quat=new yn().setFromUnitVectors(e.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dc,this._sphericalDelta=new dc,this._scale=1,this._panOffset=new y,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new y,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N_.bind(this),this._onPointerDown=D_.bind(this),this._onPointerUp=U_.bind(this),this._onContextMenu=H_.bind(this),this._onMouseWheel=B_.bind(this),this._onKeyDown=k_.bind(this),this._onTouchStart=z_.bind(this),this._onTouchMove=G_.bind(this),this._onMouseDown=O_.bind(this),this._onMouseMove=F_.bind(this),this._interceptControlDown=V_.bind(this),this._interceptControlUp=W_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Qe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uc),this.update(),this.state=Qe.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Zt:n>Math.PI&&(n-=Zt),i<-Math.PI?i+=Zt:i>Math.PI&&(i-=Zt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ct.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new y(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_r.origin.copy(this.object.position),_r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_r.direction))<P_?this.object.lookAt(this.target):(Oc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_r.intersectPlane(Oc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ba||this._lastTargetPosition.distanceToSquared(this.target)>ba?(this.dispatchEvent(Uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ct.copy(i).sub(this.target);let s=Ct.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function D_(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function N_(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function U_(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qh),this.state=Qe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function O_(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Qe.DOLLY;break;case Hi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qe.ROTATE}break;case Hi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Zo)}function F_(r){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function B_(r){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(r.preventDefault(),this.dispatchEvent(Zo),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(qh))}function k_(r){this.enabled!==!1&&this._handleKeyDown(r)}function z_(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1){this.state=Qe.NONE;break}this._handleTouchStartRotate(r),this.state=Qe.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1){this.state=Qe.NONE;break}this._handleTouchStartPan(r),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Qe.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Zo)}function G_(r){switch(this._trackPointer(r),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Qe.NONE}}function H_(r){this.enabled!==!1&&r.preventDefault()}function V_(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W_(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class X_{constructor(e={}){A(this,"nativeScene");A(this,"ambientLight",null);A(this,"directionalLight",null);A(this,"hemiLight",null);A(this,"gridHelper",null);A(this,"groundPlane",null);this.nativeScene=new _d;const t=e.backgroundColor??724761;this.nativeScene.background=new ye(t),e.defaultLighting!==!1&&this.setupDefaultLighting(e.enableShadows!==!1),e.enableGrid!==!1&&this.setupGroundReference()}setupDefaultLighting(e){this.ambientLight=new Nh(16777215,.7),this.ambientLight.name="VXR_AmbientLight",this.nativeScene.add(this.ambientLight),this.directionalLight=new Ts(16775917,1.2),this.directionalLight.name="VXR_DirectionalKeyLight",this.directionalLight.position.set(6,12,8),e&&(this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=1024,this.directionalLight.shadow.mapSize.height=1024,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=40,this.directionalLight.shadow.camera.left=-10,this.directionalLight.shadow.camera.right=10,this.directionalLight.shadow.camera.top=10,this.directionalLight.shadow.camera.bottom=-10,this.directionalLight.shadow.bias=-4e-4,this.directionalLight.shadow.normalBias=.02),this.nativeScene.add(this.directionalLight),this.hemiLight=new xf(16777215,3359061,.4),this.hemiLight.name="VXR_HemisphereFillLight",this.nativeScene.add(this.hemiLight)}setupGroundReference(){const e=new Ei(30,30),t=new Yd({opacity:.25});this.groundPlane=new de(e,t),this.groundPlane.name="VXR_GroundShadowPlane",this.groundPlane.rotation.x=-Math.PI/2,this.groundPlane.position.y=-.001,this.groundPlane.receiveShadow=!0,this.nativeScene.add(this.groundPlane),this.gridHelper=new Ko(20,20,3718648,1976635),this.gridHelper.name="VXR_GridHelper",this.gridHelper.position.y=0,this.nativeScene.add(this.gridHelper)}setEnvironmentPreset(e){e==="daylight"?(this.setBackground(14870768),this.ambientLight&&(this.ambientLight.color.setHex(16777215),this.ambientLight.intensity=.95),this.directionalLight&&(this.directionalLight.color.setHex(16775917),this.directionalLight.intensity=1.4),this.hemiLight&&(this.hemiLight.color.setHex(9684477),this.hemiLight.groundColor.setHex(6583435),this.hemiLight.intensity=.5)):e==="dark"?(this.setBackground(132631),this.ambientLight&&(this.ambientLight.color.setHex(9741240),this.ambientLight.intensity=.35),this.directionalLight&&(this.directionalLight.color.setHex(3718648),this.directionalLight.intensity=1),this.hemiLight&&(this.hemiLight.intensity=.2)):(this.setBackground(724761),this.ambientLight&&(this.ambientLight.color.setHex(16777215),this.ambientLight.intensity=.7),this.directionalLight&&(this.directionalLight.color.setHex(16775917),this.directionalLight.intensity=1.2),this.hemiLight&&(this.hemiLight.color.setHex(16777215),this.hemiLight.groundColor.setHex(3359061),this.hemiLight.intensity=.4))}add(...e){return this.nativeScene.add(...e),this}remove(...e){return this.nativeScene.remove(...e),this}setBackground(e){typeof e=="string"||typeof e=="number"?this.nativeScene.background=new ye(e):this.nativeScene.background=e}setFog(e,t=10,n=80){this.nativeScene.fog=new No(e,t,n)}setGridVisible(e){this.gridHelper&&(this.gridHelper.visible=e)}dispose(){this.groundPlane&&(this.groundPlane.geometry.dispose(),this.groundPlane.material.dispose(),this.nativeScene.remove(this.groundPlane)),this.gridHelper&&(this.gridHelper.geometry.dispose(),this.gridHelper.material.dispose(),this.nativeScene.remove(this.gridHelper)),this.nativeScene.clear()}}class q_{constructor(e={}){A(this,"nativeRenderer");A(this,"camera");A(this,"container");A(this,"clock");A(this,"updatables",new Set);A(this,"boundOnResize");A(this,"isRunning",!1);if(typeof e.container=="string"){const l=document.querySelector(e.container);if(!l)throw new Error(`[VXR] Container selector "${e.container}" not found in DOM.`);this.container=l}else e.container instanceof HTMLElement?this.container=e.container:this.container=document.body;const t=this.container.clientWidth/(this.container.clientHeight||window.innerHeight),n=e.fov??60,i=e.near??.1,s=e.far??200;this.camera=new Jt(n,t,i,s);const a=e.cameraPosition??[0,1.6,3.5];this.camera.position.set(a[0],a[1],a[2]),this.camera.lookAt(0,1,0),this.nativeRenderer=new L_({canvas:e.canvas,antialias:e.antialias!==!1,alpha:!0,powerPreference:"high-performance"});const o=e.pixelRatioCap??1.5;this.nativeRenderer.setPixelRatio(Math.min(window.devicePixelRatio,o)),this.updateSize(),this.nativeRenderer.outputColorSpace=yt,this.nativeRenderer.toneMapping=So,this.nativeRenderer.toneMappingExposure=1.1,e.enableShadows!==!1&&(this.nativeRenderer.shadowMap.enabled=!0,this.nativeRenderer.shadowMap.type=Xc),this.nativeRenderer.xr.enabled=!0,this.nativeRenderer.domElement.parentElement||this.container.appendChild(this.nativeRenderer.domElement),this.clock=new Uf,this.boundOnResize=this.handleResize.bind(this),window.addEventListener("resize",this.boundOnResize)}get domElement(){return this.nativeRenderer.domElement}updateSize(){const e=this.container===document.body?window.innerWidth:this.container.clientWidth,t=this.container===document.body?window.innerHeight:this.container.clientHeight;this.nativeRenderer.setSize(e,t,!1),this.camera.aspect=e/(t||1),this.camera.updateProjectionMatrix()}handleResize(){this.updateSize()}addUpdatable(e){return this.updatables.add(e),()=>this.updatables.delete(e)}start(e){this.isRunning||(this.isRunning=!0,this.clock.start(),this.nativeRenderer.setAnimationLoop(()=>{const t=this.clock.getDelta(),n=this.clock.getElapsedTime();for(const i of this.updatables)try{i(t,n)}catch(s){console.error("[VXR] Error inside updatable callback:",s)}e(t,n)}))}stop(){this.isRunning&&(this.isRunning=!1,this.nativeRenderer.setAnimationLoop(null),this.clock.stop())}render(e){this.nativeRenderer.render(e,this.camera)}dispose(){this.stop(),window.removeEventListener("resize",this.boundOnResize),this.updatables.clear(),this.nativeRenderer.dispose(),this.nativeRenderer.domElement.parentElement===this.container&&this.container.removeChild(this.nativeRenderer.domElement)}}class Y_{constructor(e){A(this,"renderer");A(this,"activeSession",null);A(this,"sessionListeners",new Set);A(this,"selectListeners",new Set);A(this,"buttonElement",null);A(this,"controllers",[]);A(this,"grips",[]);A(this,"controllerGroup");this.renderer=e,this.controllerGroup=new ze,this.controllerGroup.name="VXR_ControllerRig",this.setupControllers(),this.setupRendererEvents()}setupControllers(){const e=()=>{const t=new dt().setFromPoints([new y(0,0,0),new y(0,0,-3)]),n=new Bs({color:3718648,transparent:!0,opacity:.6}),i=new ks(t,n);return i.name="VXR_LaserRay",i};for(let t=0;t<2;t++){const n=this.renderer.xr.getController(t);n.name=`VXR_Controller_${t}`;const i=e();n.add(i),n.addEventListener("select",()=>{this.notifySelectListeners(t,n)}),this.controllerGroup.add(n),this.controllers.push(n);const s=this.renderer.xr.getControllerGrip(t);s.name=`VXR_Grip_${t}`,this.controllerGroup.add(s),this.grips.push(s)}}setupRendererEvents(){this.renderer.xr.addEventListener("sessionstart",()=>{this.activeSession=this.renderer.xr.getSession(),this.notifyListeners(!0),this.updateButtonUI()}),this.renderer.xr.addEventListener("sessionend",()=>{this.activeSession=null,this.notifyListeners(!1),this.updateButtonUI()})}async checkVRSupport(){if(!("xr"in navigator)||!navigator.xr)return!1;try{return await navigator.xr.isSessionSupported("immersive-vr")}catch{return!1}}async enterVR(e){if(!("xr"in navigator)||!navigator.xr)throw new Error("[VXR] WebXR is not supported on this browser or platform.");const t=e??{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]},n=await navigator.xr.requestSession("immersive-vr",t);return await this.renderer.xr.setSession(n),this.activeSession=n,n}async exitVR(){this.activeSession&&(await this.activeSession.end(),this.activeSession=null)}async toggleVR(){this.isPresenting?await this.exitVR():await this.enterVR()}get isPresenting(){return this.renderer.xr.isPresenting}get currentSession(){return this.activeSession}onStateChange(e){return this.sessionListeners.add(e),()=>this.sessionListeners.delete(e)}onSelect(e){return this.selectListeners.add(e),()=>this.selectListeners.delete(e)}notifyListeners(e){for(const t of this.sessionListeners)try{t(e,this.activeSession)}catch(n){console.error("[VXR] Error in XRSession listener:",n)}}notifySelectListeners(e,t){for(const n of this.selectListeners)try{n(e,t)}catch(i){console.error("[VXR] Error in XRSession controller select listener:",i)}}raycastController(e,t,n=!0){const i=this.controllers[e];if(!i)return[];const s=new Ue;s.identity().extractRotation(i.matrixWorld);const a=new y;i.getWorldPosition(a);const o=new y(0,0,-1).applyMatrix4(s).normalize(),l=new Yo;return l.set(a,o),l.intersectObjects(t,n)}createVRButton(e){if(this.buttonElement)return this.buttonElement;const t=document.createElement("button");return t.id="vxr-vr-button",t.setAttribute("aria-label","Enter WebXR Virtual Reality"),t.style.position="fixed",t.style.bottom="24px",t.style.left="50%",t.style.transform="translateX(-50%)",t.style.padding="12px 24px",t.style.fontSize="13px",t.style.fontWeight="600",t.style.letterSpacing="0.06em",t.style.textTransform="uppercase",t.style.color="#ffffff",t.style.backgroundColor="#0284c7",t.style.border="1px solid #38bdf8",t.style.borderRadius="9999px",t.style.boxShadow="0 10px 25px -5px rgba(14, 165, 233, 0.4)",t.style.cursor="pointer",t.style.zIndex="9999",t.style.transition="all 0.2s ease",t.style.fontFamily="system-ui, -apple-system, sans-serif",t.textContent="CHECKING VR...",t.disabled=!0,this.checkVRSupport().then(i=>{i?(t.textContent="🥽 ENTER VR",t.disabled=!1,t.style.backgroundColor="#0284c7"):(t.textContent="VR NOT SUPPORTED",t.disabled=!0,t.style.backgroundColor="#334155",t.style.border="1px solid #475569",t.style.color="#94a3b8",t.style.cursor="not-allowed")}),t.addEventListener("click",()=>{this.toggleVR().catch(i=>{console.warn("[VXR] Failed to toggle VR session:",i)})}),t.addEventListener("mouseenter",()=>{t.disabled||(t.style.backgroundColor="#0369a1",t.style.transform="translateX(-50%) scale(1.04)")}),t.addEventListener("mouseleave",()=>{t.disabled||(t.style.backgroundColor="#0284c7",t.style.transform="translateX(-50%) scale(1.0)")}),this.buttonElement=t,(e??document.body).appendChild(t),t}updateButtonUI(){this.buttonElement&&(this.isPresenting?(this.buttonElement.textContent="❌ EXIT VR",this.buttonElement.style.backgroundColor="#dc2626",this.buttonElement.style.borderColor="#f87171"):(this.buttonElement.textContent="🥽 ENTER VR",this.buttonElement.style.backgroundColor="#0284c7",this.buttonElement.style.borderColor="#38bdf8"))}dispose(){var e;this.exitVR().catch(()=>{}),(e=this.buttonElement)!=null&&e.parentElement&&(this.buttonElement.parentElement.removeChild(this.buttonElement),this.buttonElement=null),this.sessionListeners.clear(),this.selectListeners.clear()}}function Fc(r,e){if(e===Cu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===uo||e===ch){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===uo)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function K_(r){const e=new Map,t=new Map,n=r.clone();return Yh(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Yh(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Yh(r.children[n],e.children[n],t)}class Kh extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Q_(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new Bc(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bc(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new fv(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=si.extractUrlBase(e);a=si.resolveURL(c,this.path)}else a=si.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Nr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===$h){try{a[Xe.KHR_BINARY_GLTF]=new pv(e)}catch(d){i&&i(d);return}s=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Av(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Xe.KHR_MATERIALS_UNLIT:a[d]=new J_;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[d]=new mv(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[d]=new gv;break;case Xe.KHR_MESH_QUANTIZATION:a[d]=new _v;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function $_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function xt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Z_{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Qt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ts(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fs(h),c.distance=d;break;case"spot":c=new Sf(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),wn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class J_{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){const i=[];e.color=new ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Qt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,yt))}return Promise.all(i)}}class j_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(s,s)}return Promise.all(i)}}class ev{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class tv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class nv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class iv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Qt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class sv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class rv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(s[0],s[1],s[2],Qt),Promise.all(i)}}class av{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class ov{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(s[0],s[1],s[2],Qt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(i)}}class lv{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class cv{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return xt(this.parser,e,this.name)!==null?Je:null}extendMaterialParams(e,t){const n=xt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class hv{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class uv{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class dv{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Bc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class fv{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const m of d){const v=new Ue,p=new y,g=new yn,x=new y(1,1,1),T=new Cd(m.geometry,m.material,u);for(let R=0;R<u;R++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,R),l.SCALE&&x.fromBufferAttribute(l.SCALE,R),T.setMatrixAt(R,v.compose(p,g,x));let S=null;for(const R in l)if(R==="_COLOR_0"){const w=l[R];T.instanceColor=new Lr(w.array,w.itemSize,w.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(S===null){const _=T.geometry;S=new dt,S.name=_.name;for(const M in _.attributes)S.setAttribute(M,_.attributes[M]);for(const M in _.morphAttributes)S.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&S.setIndex(_.index),S.morphTargetsRelative=_.morphTargetsRelative;for(const M of _.groups)S.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(S.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(S.boundingSphere=_.boundingSphere.clone()),S.drawRange.start=_.drawRange.start,S.drawRange.count=_.drawRange.count,S.userData=Object.assign({},_.userData),T.geometry=S}const w=l[R];S.setAttribute(R,new Lr(w.array,w.itemSize,w.normalized))}gt.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const $h="glTF",ms=12,kc={JSON:1313821514,BIN:5130562};class pv{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$h)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ms,s=new DataView(e,ms);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===kc.JSON){const c=new Uint8Array(e,ms+a,o);this.content=n.decode(c)}else if(l===kc.BIN){const c=ms+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=vo[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=vo[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=qi[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],p=l[m];p!==void 0&&(v.normalized=p)}d(f)},o,c,Qt,u)})})}}class gv{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class _v{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Zh extends ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,m=e*c,v=m-c,p=-2*f+3*u,g=f-u,x=1-p,T=g-u+d;for(let S=0;S!==o;S++){const R=a[v+S+o],w=a[v+S+l]*h,_=a[m+S+o],M=a[m+S]*h;s[S]=x*R+T*w+p*_+g*M}return s}}const vv=new yn;class xv extends Zh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return vv.fromArray(s).normalize().toArray(s),s}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zc={9728:Lt,9729:Mt,9984:nh,9985:xr,9986:_s,9987:Cn},Gc={33071:Rn,33648:Tr,10497:Ki},Ea={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yv={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Ls},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),r.DefaultMaterial}function _i(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mv(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function bv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ev(r){let e;const t=r.extensions&&r.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wa(t.attributes):e=r.indices+":"+wa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+wa(r.targets[n]);return e}function wa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function xo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wv=new Ue;class Av{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?(this.textureLoader=new vf(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ef(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return _i(s,o,i),wn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(si.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ea[i.type],o=qi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new wt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Ea[i.type],c=qi[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,p;if(f&&f!==d){const g=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let T=t.cache.get(x);T||(v=new c(o,g*f,i.count*f/h),T=new Sh(v,f/h),t.cache.add(x,T)),p=new Br(T,l,u%f/h,m)}else o===null?v=new c(i.count*l):v=new c(o,u,i.count*l),p=new wt(v,l,m);if(i.sparse!==void 0){const g=Ea.SCALAR,x=qi[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,R=new x(a[1],T,i.sparse.count*g),w=new c(a[2],S,i.sparse.count*l);o!==null&&(p=new wt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,M=R.length;_<M;_++){const L=R[_];if(p.setX(L,w[_*l]),l>=2&&p.setY(L,w[_*l+1]),l>=3&&p.setZ(L,w[_*l+2]),l>=4&&p.setW(L,w[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return h.magFilter=zc[u.magFilter]||Mt,h.minFilter=zc[u.minFilter]||Cn,h.wrapS=Gc[u.wrapS]||Ki,h.wrapT=Gc[u.wrapT]||Ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Lt&&h.minFilter!==Mt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,m){t.parse(u,f,m)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(u){return new Promise(function(f,m){let v=f;t.isImageBitmapLoader===!0&&(v=function(p){const g=new Pt(p);g.needsUpdate=!0,f(g)}),t.load(si.resolveURL(u,s.path),v,void 0,m)})})}const d=h.then(function(u){return c===!0&&o.revokeObjectURL(l),wn(u,a),u.userData.mimeType=a.mimeType||Tv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bi,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Bs,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return at}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const d=i[Xe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Qt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,yt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=St);const h=s.alphaMode||Ta.OPAQUE;if(h===Ta.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ta.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==sn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new xe(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==sn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==sn){const d=s.emissiveFactor;o.emissive=new ye().setRGB(d[0],d[1],d[2],Qt)}return s.emissiveTexture!==void 0&&a!==sn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,yt)),Promise.all(c).then(function(){const d=new a(o);return s.name&&(d.name=s.name),wn(d,s),t.associations.set(d,{materials:e}),s.extensions&&_i(i,d,s),d})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Hc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Ev(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Hc(new dt,c,t),c.mode===hn.TRIANGLE_STRIP?u=u.then(f=>Fc(f,ch)):c.mode===hn.TRIANGLE_FAN&&(u=u.then(f=>Fc(f,uo))),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Sv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],p=a[f];let g;const x=c[f];if(p.mode===hn.TRIANGLES||p.mode===hn.TRIANGLE_STRIP||p.mode===hn.TRIANGLE_FAN||p.mode===void 0){const T=s.isSkinnedMesh===!0,S=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");T&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&S?new wd(v,x):new de(v,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===hn.LINES)g=new bh(v,x);else if(p.mode===hn.LINE_STRIP)g=new ks(v,x);else if(p.mode===hn.LINE_LOOP)g=new Pd(v,x);else if(p.mode===hn.POINTS)g=new es(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&bv(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),wn(g,s),p.extensions&&_i(i,g,p),t.assignFinalMaterial(g),d.push(g)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&_i(i,d[0],s),d[0];const u=new ze;s.extensions&&_i(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(gh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Ue;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Oo(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],m=i.samplers[f.sampler],v=f.target,p=v.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],m=d[2],v=d[3],p=d[4],g=[];for(let T=0,S=u.length;T<S;T++){const R=u[T],w=f[T],_=m[T],M=v[T],L=p[T];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const P=n._createAnimationTracks(R,w,_,M,L);if(P)for(let N=0;N<P.length;N++)g.push(P[N])}const x=new uf(s,void 0,g);return wn(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,wv)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,m=d[0];h.pivot=new y().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Mh:c.length>1?h=new ze:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=a),wn(h,s),s.extensions&&_i(n,h,s),s.matrix!==void 0){const d=new Ue;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ze;n.name&&(s.name=i.createUniqueName(n.name)),wn(s,n),n.extensions&&_i(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?s.add(K_(u)):s.add(u)}const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof xn||u instanceof Pt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ei[s.path]===ei.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ei[s.path]){case ei.weights:h=Us;break;case ei.rotation:h=Os;break;case ei.translation:case ei.scale:h=Dr;break;default:switch(n.itemSize){case 1:h=Us;break;case 2:case 3:default:h=Dr;break}break}const d=i.interpolation!==void 0?yv[i.interpolation]:Ps,u=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const v=new h(l[f]+"."+ei[s.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xo(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Os?xv:Zh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Rv(r,e,t){const n=e.attributes,i=new mt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new y(l[0],l[1],l[2]),new y(c[0],c[1],c[2])),o.normalized){const h=xo(qi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new y,l=new y;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const v=xo(qi[u.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Nn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Hc(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=vo[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return qe.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),wn(r,e),Rv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Mv(r,e.targets,t):r})}const Aa=new WeakMap,Cv=new URL(""+new URL("draco_decoder-C32yEggz.wasm",import.meta.url).href,import.meta.url).toString(),Lv=new URL(""+new URL("draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).href,import.meta.url).toString(),Pv=new URL(""+new URL("draco_decoder-fzg4nYZr.js",import.meta.url).href,import.meta.url).toString();new URL(""+new URL("draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).href,import.meta.url).toString(),new URL(""+new URL("draco_decoder-Z1_iN-Ht.wasm",import.meta.url).href,import.meta.url).toString();class Iv extends Ti{constructor(e){super(e),this.decoderPaths={js:Lv,wasm:Cv,dep_js:Pv},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=si.resolveURL("draco_wasm_wrapper.js",e),t.wasm=si.resolveURL("draco_decoder.wasm",e),t.dep_js=si.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Nr(this.manager);s.setPriority(this.priority),s.setCache(this.cache),s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,yt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Qt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Aa.has(e)){const l=Aa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Aa.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new dt;e.index&&t.setIndex(new wt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:s,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n];let c;if(a===o)c=new wt(s,a);else{const h=new Sh(s,o);c=new Br(h,a,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(s instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==yt)return;const n=new ye;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),qe.colorSpaceToWorking(n,yt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Nr(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const a=Dv.toString(),o=["/* draco decoder */",s,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Dv(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const d=h.draco,u=new d.Decoder;try{const f=t(d,u,new Int8Array(l),c),m=f.attributes.map(v=>v.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{d.destroy(u)}});break}};function t(a,o,l,c){const h=c.attributeIDs,d=c.attributeTypes;let u,f;const m=o.GetEncodedGeometryType(l);if(m===a.TRIANGULAR_MESH)u=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,u);else if(m===a.POINT_CLOUD)u=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const p in h){const g=self[d[p]];let x,T;if(c.useUniqueIDs)T=h[p],x=o.GetAttributeByUniqueId(u,T);else{if(T=o.GetAttributeId(u,a[h[p]]),T===-1)continue;x=o.GetAttribute(u,T)}const S=i(a,o,u,p,g,x);p==="color"&&(S.vertexColorSpace=c.vertexColorSpace),v.attributes.push(S)}return m===a.TRIANGULAR_MESH&&(v.index=n(a,o,u)),a.destroy(u),v}function n(a,o,l){const h=l.num_faces()*3,d=h*4,u=a._malloc(d);o.GetTrianglesUInt32Array(l,d,u);const f=new Uint32Array(a.HEAPF32.buffer,u,h).slice();return a._free(u),{array:f,itemSize:1}}function i(a,o,l,c,h,d){const u=l.num_points(),f=d.num_components(),m=s(a,h),v=f*h.BYTES_PER_ELEMENT,p=Math.ceil(v/4)*4,g=p/h.BYTES_PER_ELEMENT,x=u*v,T=u*p,S=a._malloc(x);o.GetAttributeDataArrayForAllPoints(l,d,m,x,S);const R=new h(a.HEAPF32.buffer,S,x/h.BYTES_PER_ELEMENT);let w;if(v===p)w=R.slice();else{w=new h(T/h.BYTES_PER_ELEMENT);let _=0;for(let M=0;M<u;M++){for(let L=0;L<f;L++)w[_+L]=R[M*f+L];_+=g}}return a._free(S),{name:c,count:u,itemSize:f,array:w,stride:g}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class Nv{constructor(e){A(this,"gltfLoader");A(this,"dracoLoader",null);A(this,"loadedCache",new Map);this.gltfLoader=new Kh;const t=e??"https://www.gstatic.com/draco/versioned/decoders/1.5.7/";this.dracoLoader=new Iv,this.dracoLoader.setDecoderPath(t),this.gltfLoader.setDRACOLoader(this.dracoLoader)}async loadModel(e,t={}){let n,i=null,s=!1;if(typeof e=="string"){if(n=e,i=e,this.loadedCache.has(i))return this.loadedCache.get(i)}else n=URL.createObjectURL(e),s=!0;const a=await new Promise((g,x)=>{this.gltfLoader.load(n,T=>g(T),T=>{t.onProgress&&T.total>0&&t.onProgress(Math.round(T.loaded/T.total*100))},T=>x(T))});s&&URL.revokeObjectURL(n);const o=a.scene;o.traverse(g=>{if(g.isMesh){const x=g;x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!0}});const l=this.computeMetrics(o),c=t.autoGround!==!1,h=t.autoCenter!==!1,d=new mt().setFromObject(o),u=h?-l.center[0]:0,f=c?-d.min.y:0,m=h?-l.center[2]:0;o.position.set(u,f,m);const v=new ze;v.name="VXR_ModelContainer",v.add(o);const p={group:v,metrics:l,rawGltf:a,dispose:()=>{this.disposeObject(v),i&&this.loadedCache.delete(i)}};return i&&this.loadedCache.set(i,p),p}computeMetrics(e){const t=new mt().setFromObject(e),n=new y;t.getSize(n);const i=new y;t.getCenter(i);let s=0,a=0,o=0;return e.traverse(l=>{if(l.isMesh){o++;const h=l.geometry;if(h){const d=h.attributes.position;d&&(s+=d.count),h.index?a+=h.index.count/3:d&&(a+=d.count/3)}}}),{dimensions:{width:Number(n.x.toFixed(3)),height:Number(n.y.toFixed(3)),depth:Number(n.z.toFixed(3))},center:[Number(i.x.toFixed(3)),Number(i.y.toFixed(3)),Number(i.z.toFixed(3))],vertexCount:s,triangleCount:Math.round(a),meshCount:o}}disposeObject(e){e.traverse(t=>{if(t.isMesh){const n=t;if(n.geometry&&n.geometry.dispose(),n.material){const i=Array.isArray(n.material)?n.material:[n.material];for(const s of i){const a=s;a.map&&a.map.dispose(),a.normalMap&&a.normalMap.dispose(),a.roughnessMap&&a.roughnessMap.dispose(),a.metalnessMap&&a.metalnessMap.dispose(),a.aoMap&&a.aoMap.dispose(),a.emissiveMap&&a.emissiveMap.dispose(),s.dispose()}}}}),e.parent&&e.parent.remove(e),e.clear()}dispose(){for(const e of this.loadedCache.values())e.dispose();this.loadedCache.clear(),this.dracoLoader&&(this.dracoLoader.dispose(),this.dracoLoader=null)}}const Vc={gallery:{floorColor:14866892,floorRoughness:.45,floorMetalness:.05,wallColor:16317180,wallRoughness:.9,trimColor:13358561,ceilingColor:16777215,lightColor:16775149,lightIntensity:1.6},scifi:{floorColor:988970,floorRoughness:.3,floorMetalness:.6,wallColor:1976635,wallRoughness:.55,trimColor:61695,ceilingColor:593174,lightColor:3718648,lightIntensity:1.8,grid:!0},office:{floorColor:3359061,floorRoughness:.8,floorMetalness:.05,wallColor:15857145,wallRoughness:.85,trimColor:9741240,ceilingColor:16777215,lightColor:16777215,lightIntensity:1.5},cozy:{floorColor:7877903,floorRoughness:.6,floorMetalness:.05,wallColor:16708551,wallRoughness:.9,trimColor:9584654,ceilingColor:16776171,lightColor:16707722,lightIntensity:1.4},minimal:{floorColor:1579035,floorRoughness:.4,floorMetalness:.2,wallColor:2565930,wallRoughness:.7,trimColor:5395035,ceilingColor:592139,lightColor:16777215,lightIntensity:1.4}};class Uv{constructor(e={}){A(this,"id");A(this,"name");A(this,"dimensions");A(this,"center");A(this,"theme");A(this,"nativeGroup",new ze);A(this,"wallThickness",.25);A(this,"doorApertures",[]);A(this,"doors",[]);A(this,"meshes",[]);A(this,"ceilingLight",null);A(this,"materialsToDispose",[]);A(this,"geometriesToDispose",[]);A(this,"spawnOffset");this.id=e.id||`room-${Math.random().toString(36).substring(2,8)}`,this.name=e.name||"Room",this.theme=e.theme||"gallery";const t=e.dimensions||{};this.dimensions={width:Math.max(3,t.width??10),depth:Math.max(3,t.depth??10),height:Math.max(2.4,t.height??3.5)};const n=e.center||[0,0,0];this.center=new y(n[0],n[1],n[2]),this.nativeGroup.position.copy(this.center),this.nativeGroup.name=`XRRoom_${this.id}`,this.spawnOffset=e.spawnPoint||[0,1.6,0],e.doors&&(this.doors=[...e.doors]),this.build(e)}build(e){var T,S,R,w,_,M,L,P,N,F,V,D,W,q;const t=Vc[this.theme]||Vc.gallery,{width:n,depth:i,height:s}=this.dimensions,a=this.wallThickness,o=((T=e.floor)==null?void 0:T.color)??t.floorColor,l=((S=e.floor)==null?void 0:S.roughness)??t.floorRoughness,c=((R=e.floor)==null?void 0:R.metalness)??t.floorMetalness,h=new at({color:o,roughness:l,metalness:c});this.materialsToDispose.push(h);const d=new tt(n,.2,i);this.geometriesToDispose.push(d);const u=new de(d,h);if(u.position.set(0,-.1,0),u.receiveShadow=!0,u.name=`${this.id}_floor`,this.nativeGroup.add(u),this.meshes.push(u),((w=e.floor)==null?void 0:w.grid)??t.grid){const G=new Ko(Math.max(n,i),Math.round(Math.max(n,i)),61695,1976635);G.position.set(0,.005,0),this.nativeGroup.add(G)}if(((_=e.ceiling)==null?void 0:_.enabled)!==!1){const G=((M=e.ceiling)==null?void 0:M.color)??t.ceilingColor,te=new at({color:G,roughness:.85,metalness:.05});this.materialsToDispose.push(te);const H=new tt(n,.2,i);this.geometriesToDispose.push(H);const K=new de(H,te);if(K.position.set(0,s+.1,0),K.name=`${this.id}_ceiling`,this.nativeGroup.add(K),this.meshes.push(K),((L=e.ceiling)==null?void 0:L.lamps)!==!1){const ee=new at({color:16777215,emissive:((P=e.lighting)==null?void 0:P.color)??t.lightColor,emissiveIntensity:.6,roughness:.3});this.materialsToDispose.push(ee);const Me=new tt(1.6,.08,.8);this.geometriesToDispose.push(Me);const De=new de(Me,ee);De.position.set(0,s-.04,0),this.nativeGroup.add(De)}}const m=((N=e.walls)==null?void 0:N.color)??t.wallColor,v=((F=e.walls)==null?void 0:F.roughness)??t.wallRoughness,p=new at({color:m,roughness:v,metalness:.05});this.materialsToDispose.push(p);const g=((V=e.walls)==null?void 0:V.trimColor)??t.trimColor,x=new at({color:g,roughness:.4,metalness:.4});if(this.materialsToDispose.push(x),this.buildWall("north",n,i,s,a,p,x),this.buildWall("south",n,i,s,a,p,x),this.buildWall("east",n,i,s,a,p,x),this.buildWall("west",n,i,s,a,p,x),((D=e.lighting)==null?void 0:D.enabled)!==!1){const G=((W=e.lighting)==null?void 0:W.color)??t.lightColor,te=((q=e.lighting)==null?void 0:q.intensity)??t.lightIntensity,H=Math.max(n,i)*1.8,K=new Fs(G,te,H,1);K.position.set(0,s-.4,0),K.castShadow=!0,K.shadow.mapSize.width=1024,K.shadow.mapSize.height=1024,K.shadow.bias=-3e-4,this.ceilingLight=K,this.nativeGroup.add(K)}}buildWall(e,t,n,i,s,a,o){const l=this.doors.find(p=>p.wall===e);if(!l){let p,g=0,x=0;e==="north"||e==="south"?(p=new tt(t,i,s),x=e==="north"?-n/2:n/2):(p=new tt(s,i,n),g=e==="west"?-t/2:t/2),this.geometriesToDispose.push(p);const T=new de(p,a);T.position.set(g,i/2,x),T.castShadow=!0,T.receiveShadow=!0,T.name=`${this.id}_wall_${e}`,this.nativeGroup.add(T),this.meshes.push(T);return}const c=Math.min(l.width??2.2,(e==="north"||e==="south"?t:n)-1),h=Math.min(l.height??2.6,i-.4),d=l.offset??0,u=e==="north"||e==="south"?t:n,f=u/2+d-c/2,m=u/2-d-c/2,v=i-h;if(e==="north"||e==="south"){const p=e==="north"?-n/2:n/2;if(f>.05){const M=new tt(f,i,s);this.geometriesToDispose.push(M);const L=new de(M,a);L.position.set(-t/2+f/2,i/2,p),L.castShadow=!0,L.receiveShadow=!0,this.nativeGroup.add(L),this.meshes.push(L)}if(m>.05){const M=new tt(m,i,s);this.geometriesToDispose.push(M);const L=new de(M,a);L.position.set(t/2-m/2,i/2,p),L.castShadow=!0,L.receiveShadow=!0,this.nativeGroup.add(L),this.meshes.push(L)}if(v>.05){const M=new tt(c,v,s);this.geometriesToDispose.push(M);const L=new de(M,a);L.position.set(d,h+v/2,p),L.castShadow=!0,L.receiveShadow=!0,this.nativeGroup.add(L),this.meshes.push(L)}const g=new tt(.08,h,s*1.15);this.geometriesToDispose.push(g),new de(g,o).position.set(d-c/2+.04,h/2,p),new de(g,o).position.set(d+c/2-.04,h/2,p);const S=this.center.z+p,w=Math.max(.4,c/2-.15),_=Math.max(2,s+1.5);this.doorApertures.push({wall:e,minX:this.center.x+d-w,maxX:this.center.x+d+w,minZ:S-_,maxZ:S+_})}else{const p=e==="west"?-t/2:t/2;if(f>.05){const M=new tt(s,i,f);this.geometriesToDispose.push(M);const L=new de(M,a);L.position.set(p,i/2,-n/2+f/2),L.castShadow=!0,L.receiveShadow=!0,this.nativeGroup.add(L),this.meshes.push(L)}if(m>.05){const M=new tt(s,i,m);this.geometriesToDispose.push(M);const L=new de(M,a);L.position.set(p,i/2,n/2-m/2),L.castShadow=!0,L.receiveShadow=!0,this.nativeGroup.add(L),this.meshes.push(L)}if(v>.05){const M=new tt(s,v,c);this.geometriesToDispose.push(M);const L=new de(M,a);L.position.set(p,h+v/2,d),L.castShadow=!0,L.receiveShadow=!0,this.nativeGroup.add(L),this.meshes.push(L)}const g=new tt(s*1.15,h,.08);this.geometriesToDispose.push(g);const x=new de(g,o);x.position.set(p,h/2,d-c/2+.04);const T=new de(g,o);T.position.set(p,h/2,d+c/2-.04),this.nativeGroup.add(x,T);const S=this.center.x+p,w=Math.max(.4,c/2-.15),_=Math.max(2,s+1.5);this.doorApertures.push({wall:e,minX:S-_,maxX:S+_,minZ:this.center.z+d-w,maxZ:this.center.z+d+w})}}getWalkableBounds(e=.35){const t=this.dimensions.width/2-this.wallThickness-e,n=this.dimensions.depth/2-this.wallThickness-e;return{minX:this.center.x-t,maxX:this.center.x+t,minZ:this.center.z-n,maxZ:this.center.z+n}}containsPoint(e,t,n=.35){const i=this.getWalkableBounds(n);if(e>=i.minX&&e<=i.maxX&&t>=i.minZ&&t<=i.maxZ)return!0;for(const s of this.doorApertures)if(e>=s.minX&&e<=s.maxX&&t>=s.minZ&&t<=s.maxZ)return!0;return!1}getSpawnPosition(){return new y(this.center.x+this.spawnOffset[0],this.center.y+this.spawnOffset[1],this.center.z+this.spawnOffset[2])}addDecoration(e,t=[0,0,0]){e.position.set(t[0],t[1],t[2]),this.nativeGroup.add(e)}dispose(){for(const e of this.geometriesToDispose)e.dispose();for(const e of this.materialsToDispose)e.dispose();this.geometriesToDispose=[],this.materialsToDispose=[],this.nativeGroup.clear()}}class Ov{constructor(e="Scenario"){A(this,"name");A(this,"nativeGroup",new ze);A(this,"corridorsGroup",new ze);A(this,"rooms",new Map);A(this,"corridors",[]);A(this,"defaultSpawnRoomId",null);this.name=e,this.nativeGroup.name=`XRScenario_${e}`,this.nativeGroup.add(this.corridorsGroup)}addRoom(e){const t=new Uv(e);return this.rooms.has(t.id)&&(console.warn(`[XRScenario] Room with ID '${t.id}' already exists. Overwriting.`),this.removeRoom(t.id)),this.rooms.set(t.id,t),this.nativeGroup.add(t.nativeGroup),this.defaultSpawnRoomId||(this.defaultSpawnRoomId=t.id),t}getRoom(e){return this.rooms.get(e)}getAllRooms(){return Array.from(this.rooms.values())}removeRoom(e){const t=this.rooms.get(e);if(t&&(this.nativeGroup.remove(t.nativeGroup),t.dispose(),this.rooms.delete(e),this.defaultSpawnRoomId===e)){const n=this.rooms.keys().next().value;this.defaultSpawnRoomId=n||null}}connectRooms(e,t,n,i,s={}){const a=this.rooms.get(e),o=this.rooms.get(n);if(!a||!o){console.warn(`[XRScenario] Cannot connect rooms: '${e}' or '${n}' not found.`);return}const l=s.width??2.4,c=s.height??3,h=.2;let d=a.center.x,u=a.center.z;t==="north"?u-=a.dimensions.depth/2:t==="south"?u+=a.dimensions.depth/2:t==="west"?d-=a.dimensions.width/2:t==="east"&&(d+=a.dimensions.width/2);let f=o.center.x,m=o.center.z;i==="north"?m-=o.dimensions.depth/2:i==="south"?m+=o.dimensions.depth/2:i==="west"?f-=o.dimensions.width/2:i==="east"&&(f+=o.dimensions.width/2);const v=Math.abs(m-u)>=Math.abs(f-d),p=new ze;p.name=`corridor_${e}_to_${n}`;const g=[],x=[],T=new at({color:1976635,roughness:.6,metalness:.1}),S=new at({color:3359061,roughness:.8}),R=new at({color:988970,roughness:.9});g.push(T,S,R);let w;if(v){const _=Math.min(u,m),M=Math.max(u,m),L=Math.max(.5,M-_),P=(_+M)/2,N=(d+f)/2,F=new tt(l,.2,L);x.push(F);const V=new de(F,T);V.position.set(N,-.1,P),V.receiveShadow=!0,p.add(V);const D=new tt(l,.2,L);x.push(D);const W=new de(D,R);W.position.set(N,c+.1,P),p.add(W);const q=new tt(h,c,L);x.push(q);const G=new de(q,S);G.position.set(N-l/2+h/2,c/2,P),G.castShadow=!0,G.receiveShadow=!0,p.add(G);const te=new tt(h,c,L);x.push(te);const H=new de(te,S);if(H.position.set(N+l/2-h/2,c/2,P),H.castShadow=!0,H.receiveShadow=!0,p.add(H),s.lighting!==!1){const ee=new Fs(3718648,1.2,L*1.5,1);ee.position.set(N,c-.3,P),p.add(ee)}const K=2;w={minX:N-l/2+.15,maxX:N+l/2-.15,minZ:_-K,maxZ:M+K}}else{const _=Math.min(d,f),M=Math.max(d,f),L=Math.max(.5,M-_),P=(_+M)/2,N=(u+m)/2,F=new tt(L,.2,l);x.push(F);const V=new de(F,T);V.position.set(P,-.1,N),V.receiveShadow=!0,p.add(V);const D=new tt(L,.2,l);x.push(D);const W=new de(D,R);W.position.set(P,c+.1,N),p.add(W);const q=new tt(L,c,h);x.push(q);const G=new de(q,S);G.position.set(P,c/2,N-l/2+h/2),G.castShadow=!0,G.receiveShadow=!0,p.add(G);const te=new tt(L,c,h);x.push(te);const H=new de(te,S);if(H.position.set(P,c/2,N+l/2-h/2),H.castShadow=!0,H.receiveShadow=!0,p.add(H),s.lighting!==!1){const ee=new Fs(3718648,1.2,L*1.5,1);ee.position.set(P,c-.3,N),p.add(ee)}const K=2;w={minX:_-K,maxX:M+K,minZ:N-l/2+.15,maxZ:N+l/2-.15}}this.corridorsGroup.add(p),this.corridors.push({aabb:w,group:p,materials:g,geometries:x})}isWalkable(e,t=.35){for(const n of this.rooms.values())if(n.containsPoint(e.x,e.z,t))return!0;for(const n of this.corridors)if(e.x>=n.aabb.minX&&e.x<=n.aabb.maxX&&e.z>=n.aabb.minZ&&e.z<=n.aabb.maxZ)return!0;return!1}clampMovement(e,t,n=.35){if(this.isWalkable(t,n))return t.clone();const i=new y(t.x,t.y,e.z);if(this.isWalkable(i,n))return i;const s=new y(e.x,t.y,t.z);return this.isWalkable(s,n)?s:e.clone()}loadFromJSON(e){if(e.name&&(this.name=e.name),this.clear(),Array.isArray(e.rooms))for(const t of e.rooms)this.addRoom(t);if(Array.isArray(e.connections))for(const t of e.connections)this.connectRooms(t.fromRoom,t.fromWall,t.toRoom,t.toWall,t.options);e.defaultSpawnRoom&&(this.defaultSpawnRoomId=e.defaultSpawnRoom)}async loadFromURL(e){const t=await fetch(e);if(!t.ok)throw new Error(`[XRScenario] Failed to fetch scenario from '${e}': ${t.statusText}`);const n=await t.json();this.loadFromJSON(n)}getSpawnPosition(e){const t=e||this.defaultSpawnRoomId;if(t){const n=this.rooms.get(t);if(n)return n.getSpawnPosition()}return new y(0,1.6,0)}clear(){for(const e of this.rooms.values())this.nativeGroup.remove(e.nativeGroup),e.dispose();this.rooms.clear();for(const e of this.corridors){this.corridorsGroup.remove(e.group);for(const t of e.geometries)t.dispose();for(const t of e.materials)t.dispose()}this.corridors=[],this.corridorsGroup.clear(),this.defaultSpawnRoomId=null}dispose(){this.clear(),this.nativeGroup.clear()}}class Fv{constructor(){A(this,"ctx",null);A(this,"masterGain",null);A(this,"ambientGain",null);A(this,"ambientOscs",[]);A(this,"muted",!1);A(this,"lastStepTime",0)}resume(){if(this.ctx)this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});else try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.muted?0:.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}catch(e){console.warn("[XRAudio] Web Audio API not supported in this environment:",e)}}toggleMute(){return this.muted=!this.muted,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.muted?0:.7,this.ctx.currentTime,.05),this.muted}get isMuted(){return this.muted}playStep(){const e=Date.now();if(!(e-this.lastStepTime<320)&&(this.lastStepTime=e,this.resume(),!(!this.ctx||!this.masterGain||this.muted)))try{const t=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter(),s=65+Math.random()*15;t.type="sine",t.frequency.setValueAtTime(s,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(28,this.ctx.currentTime+.08),i.type="lowpass",i.frequency.setValueAtTime(140,this.ctx.currentTime),n.gain.setValueAtTime(.22,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.09),t.connect(i),i.connect(n),n.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+.1)}catch{}}playClick(){if(this.resume(),!(!this.ctx||!this.masterGain||this.muted))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(980,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(240,this.ctx.currentTime+.04),t.gain.setValueAtTime(.18,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.045),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playSuccess(){if(this.resume(),!(!this.ctx||!this.masterGain||this.muted))try{[523.25,659.25,783.99].forEach((t,n)=>{const i=this.ctx.currentTime+n*.08,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t,i),a.gain.setValueAtTime(.16,i),a.gain.exponentialRampToValueAtTime(.001,i+.45),s.connect(a),a.connect(this.masterGain),s.start(i),s.stop(i+.46)})}catch{}}playAlert(){if(this.resume(),!(!this.ctx||!this.masterGain||this.muted))try{[0,.12].forEach(e=>{const t=this.ctx.currentTime+e,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(440,t),n.frequency.setValueAtTime(880,t+.05),i.gain.setValueAtTime(.18,t),i.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+.11)})}catch{}}playWarp(){if(this.resume(),!(!this.ctx||!this.masterGain||this.muted))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(140,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(840,this.ctx.currentTime+.22),t.gain.setValueAtTime(.2,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.26)}catch{}}startAmbient(e="laboratory"){if(this.resume(),!(!this.ctx||!this.masterGain||this.ambientGain))try{this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(.035,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(e==="space"?85:120,this.ctx.currentTime);const n=this.ctx.createOscillator(),i=this.ctx.createOscillator(),s=e==="space"?45:55;n.type="sawtooth",n.frequency.setValueAtTime(s,this.ctx.currentTime),i.type="sine",i.frequency.setValueAtTime(s+1.2,this.ctx.currentTime),n.connect(t),i.connect(t),t.connect(this.ambientGain),this.ambientGain.connect(this.masterGain),n.start(),i.start(),this.ambientOscs=[n,i]}catch{}}stopAmbient(){for(const e of this.ambientOscs)try{e.stop(),e.disconnect()}catch{}if(this.ambientOscs=[],this.ambientGain){try{this.ambientGain.disconnect()}catch{}this.ambientGain=null}}dispose(){this.stopAmbient(),this.ctx&&(this.ctx.close().catch(()=>{}),this.ctx=null)}}class Bv{constructor(e){A(this,"id");A(this,"title");A(this,"category");A(this,"description");A(this,"specs");A(this,"themeColor");A(this,"nativeGroup",new ze);A(this,"screenMesh");A(this,"mountedObject",null);A(this,"onInspectCallback");A(this,"materialsToDispose",[]);A(this,"geometriesToDispose",[]);A(this,"screenTexture",null);this.id=e.id||`exhibit-${Math.random().toString(36).substring(2,8)}`,this.title=e.title,this.category=e.category||"EXHIBICIÓN 3D",this.description=e.description||"Objeto interactivo tridimensional para inspección y análisis espacial.",this.specs=e.specs||["ESCALA: 1:1","FORMATO: GLTF/GLB","MODO: WebXR"],this.themeColor=typeof e.themeColor=="number"?`#${e.themeColor.toString(16).padStart(6,"0")}`:e.themeColor||"#38bdf8",this.onInspectCallback=e.onInspect;const t=e.position||[0,0,0];if(this.nativeGroup.position.set(t[0],t[1],t[2]),this.nativeGroup.rotation.y=e.rotationY||0,this.nativeGroup.name=`XRExhibit_${this.id}`,this.screenMesh=this.buildPedestal(),e.model)this.setMountedObject(e.model,e.modelScale);else if(!e.modelUrl){const n=this.createDefaultArtifact();this.setMountedObject(n,e.modelScale)}}get group(){return this.nativeGroup}buildPedestal(){const e=parseInt(this.themeColor.replace("#",""),16),t=new at({color:1976635,roughness:.35,metalness:.7}),n=new at({color:988970,roughness:.5,metalness:.4}),i=new at({color:e,emissive:e,emissiveIntensity:.7,roughness:.2});this.materialsToDispose.push(t,n,i);const s=new tt(1.4,.12,1.1);this.geometriesToDispose.push(s);const a=new de(s,t);a.position.y=.06,a.receiveShadow=!0,this.nativeGroup.add(a);const o=new tt(.32,.9,.24);this.geometriesToDispose.push(o);const l=new de(o,n);l.position.set(0,.57,0),l.castShadow=!0,this.nativeGroup.add(l);const c=new tt(.04,.8,.25);this.geometriesToDispose.push(c);const h=new de(c,i);h.position.set(0,.57,0),this.nativeGroup.add(h);const d=new ze;d.position.set(0,1.12,.08),d.rotation.x=-Math.PI/8;const u=new tt(1.6,1.05,.06);this.geometriesToDispose.push(u);const f=new de(u,t);f.castShadow=!0,d.add(f),this.screenTexture=this.createScreenTexture();const m=new sn({map:this.screenTexture,toneMapped:!1});this.materialsToDispose.push(m);const v=new Ei(1.5,.96);this.geometriesToDispose.push(v);const p=new de(v,m);return p.position.z=.035,p.name=`${this.id}_screen`,p.userData={interactive:!0,exhibit:this,prompt:`Inspeccionar ${this.title}`},d.add(p),this.nativeGroup.add(d),p}createScreenTexture(){const e=document.createElement("canvas");e.width=1024,e.height=640;const t=e.getContext("2d");t.fillStyle="#060b14",t.fillRect(0,0,1024,640),t.strokeStyle="rgba(56, 189, 248, 0.06)",t.lineWidth=1;for(let o=0;o<1024;o+=32)t.beginPath(),t.moveTo(o,0),t.lineTo(o,640),t.stroke();for(let o=0;o<640;o+=32)t.beginPath(),t.moveTo(0,o),t.lineTo(1024,o),t.stroke();t.fillStyle=this.themeColor,t.fillRect(36,36,8,568),t.fillStyle="rgba(56, 189, 248, 0.15)",t.strokeStyle=this.themeColor,t.lineWidth=2,t.fillRect(64,48,280,42),t.strokeRect(64,48,280,42),t.fillStyle=this.themeColor,t.font="bold 18px monospace",t.fillText(this.category.toUpperCase(),84,75),t.fillStyle="#ffffff",t.font='bold 42px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',t.fillText(this.title,64,140),t.fillStyle="#94a3b8",t.font='22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const n=this.description.split(" ");let i="",s=185;for(let o=0;o<n.length;o++){const l=i+n[o]+" ";t.measureText(l).width>880&&o>0?(t.fillText(i,64,s),i=n[o]+" ",s+=32):i=l}t.fillText(i,64,s),s+=48,t.fillStyle="#38bdf8",t.font="bold 18px monospace",t.fillText("ESPECIFICACIONES TÉCNICAS:",64,s),s+=30,t.font="20px monospace",this.specs.slice(0,4).forEach(o=>{t.fillStyle=this.themeColor,t.beginPath(),t.arc(74,s-7,5,0,Math.PI*2),t.fill(),t.fillStyle="#cbd5e1",t.fillText(o,94,s),s+=32}),t.fillStyle="rgba(56, 189, 248, 0.12)",t.fillRect(64,545,896,50),t.strokeStyle=this.themeColor,t.strokeRect(64,545,896,50),t.fillStyle="#ffffff",t.font="bold 19px monospace",t.fillText("▶ HAZ CLIC O APUNTA CON EL LÁSER PARA INSPECCIONAR",160,577);const a=new Th(e);return a.minFilter=Mt,a.magFilter=Mt,a}createDefaultArtifact(){const e=new ze,t=parseInt(this.themeColor.replace("#",""),16),n=new Ho(.38,.02,16,32);this.geometriesToDispose.push(n);const i=new at({color:t,emissive:t,emissiveIntensity:.6});this.materialsToDispose.push(i);const s=new de(n,i);s.rotation.x=Math.PI/2,e.add(s);const a=new Go(.24,0);this.geometriesToDispose.push(a);const o=new at({color:16777215,roughness:.1,metalness:.9,emissive:t,emissiveIntensity:.3});this.materialsToDispose.push(o);const l=new de(a,o);return e.add(l),e}setMountedObject(e,t=1){this.mountedObject&&this.nativeGroup.remove(this.mountedObject),this.mountedObject=e,this.mountedObject.position.set(0,1.9,0),this.mountedObject.scale.set(t,t,t),this.nativeGroup.add(this.mountedObject)}update(e){this.mountedObject&&(this.mountedObject.rotation.y+=e*.75)}inspect(){this.onInspectCallback&&this.onInspectCallback(this)}dispose(){this.screenTexture&&(this.screenTexture.dispose(),this.screenTexture=null);for(const e of this.geometriesToDispose)e.dispose();for(const e of this.materialsToDispose)e.dispose();this.geometriesToDispose=[],this.materialsToDispose=[],this.nativeGroup.clear()}}class kv{constructor(e,t){A(this,"tasks",new Map);A(this,"containerEl",null);A(this,"audio");A(this,"options");A(this,"isCollapsed",!1);this.options={title:"Misiones & Práctica",position:"top-left",autoSound:!0,...e},this.audio=t;for(const n of e.tasks)this.tasks.set(n.id,{...n,completed:n.completed??!1});this.mountHUD()}setAudio(e){this.audio=e}completeTask(e){const t=this.tasks.get(e);if(!t)return!1;if(t.completed)return!0;t.completed=!0,this.options.autoSound&&this.audio&&this.audio.playSuccess(),this.render();const n=this.getRemainingCount();return this.options.onTaskComplete&&this.options.onTaskComplete(t,n),n===0&&this.options.onAllComplete&&this.options.onAllComplete(),!0}resetTask(e){const t=this.tasks.get(e);t&&(t.completed=!1,this.render())}isCompleted(e){var t;return!!((t=this.tasks.get(e))!=null&&t.completed)}getRemainingCount(){let e=0;for(const t of this.tasks.values())!t.optional&&!t.completed&&e++;return e}getProgress(){const e=Array.from(this.tasks.values()).filter(n=>!n.optional);if(e.length===0)return 100;const t=e.filter(n=>n.completed).length;return Math.round(t/e.length*100)}show(){this.containerEl&&(this.containerEl.style.display="block")}hide(){this.containerEl&&(this.containerEl.style.display="none")}toggleCollapse(){this.isCollapsed=!this.isCollapsed,this.render()}destroy(){this.containerEl&&this.containerEl.parentNode&&(this.containerEl.parentNode.removeChild(this.containerEl),this.containerEl=null)}mountHUD(){if(typeof document>"u")return;this.containerEl=document.createElement("div"),this.containerEl.className="vxr-tutorial-hud";const e=this.options.position||"top-left",t=e.startsWith("top"),n=e.endsWith("left");Object.assign(this.containerEl.style,{position:"fixed",zIndex:"9998",top:t?"20px":"auto",bottom:t?"auto":"20px",left:n?"20px":"auto",right:n?"auto":"20px",width:"320px",maxWidth:"calc(100vw - 40px)",background:"rgba(15, 23, 42, 0.88)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.3)",borderRadius:"16px",boxShadow:"0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.15)",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",overflow:"hidden",transition:"all 0.3s ease"}),document.body.appendChild(this.containerEl),this.render()}render(){if(!this.containerEl)return;const e=this.getProgress(),t=Array.from(this.tasks.values()),n=e===100;let i=`
      <div style="padding: 14px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: space-between; cursor: pointer;" id="vxr-hud-header">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 18px;">${n?"🏆":"🎯"}</span>
          <div>
            <div style="font-weight: 700; font-size: 13px; letter-spacing: 0.05em; text-transform: uppercase; color: #38bdf8;">
              ${this.options.title}
            </div>
            <div style="font-size: 11px; color: #94a3b8;">
              ${n?"¡Completado con éxito!":`Progreso: ${e}%`}
            </div>
          </div>
        </div>
        <button id="vxr-hud-toggle" style="background: none; border: none; color: #94a3b8; font-size: 16px; cursor: pointer; padding: 4px;">
          ${this.isCollapsed?"▼":"▲"}
        </button>
      </div>
      <div style="height: 3px; background: rgba(255,255,255,0.1); width: 100%;">
        <div style="height: 100%; width: ${e}%; background: linear-gradient(90deg, #38bdf8, #818cf8); transition: width 0.4s ease;"></div>
      </div>
    `;if(!this.isCollapsed){i+='<div style="padding: 12px 14px; max-height: 320px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px;">';for(const a of t)i+=`
          <div style="display: flex; align-items: flex-start; gap: 10px; padding: 8px 10px; border-radius: 8px; background: ${a.completed?"rgba(34, 197, 94, 0.08)":"rgba(255, 255, 255, 0.03)"}; border: 1px solid ${a.completed?"rgba(34, 197, 94, 0.25)":"rgba(255, 255, 255, 0.05)"}; transition: all 0.2s ease;">
            <div style="width: 18px; height: 18px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; margin-top: 2px; flex-shrink: 0; ${a.completed?"background: #22c55e; color: #000;":"border: 2px solid #64748b; color: transparent;"}">
              ✓
            </div>
            <div style="flex: 1;">
              <div style="font-size: 13px; font-weight: 600; color: ${a.completed?"#86efac":"#f1f5f9"}; ${a.completed?"text-decoration: line-through; opacity: 0.8;":""}">
                ${a.title}
              </div>
              ${a.description?`<div style="font-size: 11px; color: #94a3b8; margin-top: 2px; line-height: 1.4;">${a.description}</div>`:""}
            </div>
          </div>
        `;i+="</div>"}this.containerEl.innerHTML=i;const s=this.containerEl.querySelector("#vxr-hud-header");s&&s.addEventListener("click",()=>this.toggleCollapse())}}function zv(r,e={}){if(typeof window>"u"||typeof document>"u")return()=>{};const t=e.domElement||document.body,n=e.showOverlay!==!1;let i=null,s=0;n&&(i=document.createElement("div"),i.className="vxr-drop-overlay",Object.assign(i.style,{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",zIndex:"9999",display:"none",alignItems:"center",justifyContent:"center",background:"rgba(15, 23, 42, 0.75)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",border:"4px dashed #38bdf8",boxSizing:"border-box",pointerEvents:"none",transition:"opacity 0.2s ease",opacity:"0"}),i.innerHTML=`
      <div style="text-align: center; color: #f8fafc; font-family: system-ui, sans-serif;">
        <div style="font-size: 64px; margin-bottom: 12px; animation: bounce 1s infinite alternate;">📦</div>
        <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #38bdf8;">Suelta tu modelo 3D (.glb / .gltf)</h2>
        <p style="margin: 0; font-size: 14px; color: #94a3b8;">Procesamiento 100% en tu navegador (sin subir a ningún servidor)</p>
      </div>
    `,document.body.appendChild(i));const a=h=>{h.preventDefault(),s++,i&&(i.style.display="flex",requestAnimationFrame(()=>{i&&(i.style.opacity="1")}))},o=h=>{h.preventDefault()},l=h=>{h.preventDefault(),s--,s<=0&&i&&(s=0,i.style.opacity="0",setTimeout(()=>{i&&s===0&&(i.style.display="none")},200))},c=async h=>{if(h.preventDefault(),s=0,i&&(i.style.opacity="0",i.style.display="none"),!h.dataTransfer||!h.dataTransfer.files||h.dataTransfer.files.length===0)return;const d=h.dataTransfer.files[0],u=d.name.toLowerCase();if(!u.endsWith(".glb")&&!u.endsWith(".gltf")){const f=new Error("Solo se admiten formatos 3D estándar (.glb o .gltf)");e.onError&&e.onError(f);return}try{const f=await r.assets.loadModel(d,{autoGround:e.autoGround!==!1,autoCenter:!0});if(e.maxDimension&&e.maxDimension>0){const{width:m,height:v,depth:p}=f.metrics.dimensions,g=Math.max(m,v,p);if(g>0){const x=e.maxDimension/g;f.group.scale.set(x,x,x)}}e.targetPosition&&f.group.position.set(e.targetPosition[0],e.targetPosition[1],e.targetPosition[2]),r.scene.nativeScene.add(f.group),r.audio&&r.audio.playSuccess(),e.onModelLoaded&&e.onModelLoaded(f,d)}catch(f){r.audio&&r.audio.playAlert(),e.onError?e.onError(f):console.error("[VXR LocalDrop] Error cargando archivo:",f)}};return t.addEventListener("dragenter",a),t.addEventListener("dragover",o),t.addEventListener("dragleave",l),t.addEventListener("drop",c),()=>{t.removeEventListener("dragenter",a),t.removeEventListener("dragover",o),t.removeEventListener("dragleave",l),t.removeEventListener("drop",c),i&&i.parentNode&&i.parentNode.removeChild(i)}}class Gv{constructor(){A(this,"id","desktop");A(this,"isVRSupported",!1);A(this,"app",null)}async init(e){this.app=e,this.app.controls&&(this.app.controls.enabled=!0)}update(e,t){var n;(n=this.app)!=null&&n.controls&&this.app.controls.enabled&&this.app.controls.update()}dispose(){this.app=null}}async function Hv(){const r=typeof navigator<"u"?navigator.userAgent:"",e=/OculusBrowser|Quest/i.test(r);let t=!1;if(typeof document<"u")try{t=!!document.createElement("canvas").getContext("webgl2")}catch{t=!1}const n=typeof navigator<"u"&&"xr"in navigator&&!!navigator.xr;let i=!1;if(n&&navigator.xr)try{i=await navigator.xr.isSessionSupported("immersive-vr")}catch{i=!1}return{isWebXRSupported:n,isQuestBrowser:e,supportsImmersiveVR:i,supportedFrameRates:[],supportsTargetFrameRate:!1,supportsHandTracking:!1,webgl2Available:t}}async function Jh(r,e=90){if(!r||typeof r.updateTargetFrameRate!="function")return null;try{const t=r.supportedFrameRates;if(t&&t.length>0){const n=Array.from(t).sort((s,a)=>a-s),i=n.includes(e)?e:n.find(s=>s<=e)||n[n.length-1];return await r.updateTargetFrameRate(i),i}else return await r.updateTargetFrameRate(e),e}catch(t){return console.warn("[VXR] Target frame rate negotiation not available or rejected:",t),null}}class Vv{constructor(e={}){A(this,"id","webxr");A(this,"isVRSupported",!1);A(this,"app",null);A(this,"options");A(this,"cleanupSessionListener",null);A(this,"previousPixelRatio",1);this.options={targetFrameRate:e.targetFrameRate??90,questOptimization:e.questOptimization??!0}}async init(e){this.app=e,this.isVRSupported=await e.session.checkVRSupport(),this.cleanupSessionListener=e.session.onStateChange((t,n)=>{this.handleSessionTransition(t,n)})}handleSessionTransition(e,t){this.app&&(e&&t?(this.app.controls&&(this.app.controls.enabled=!1),this.options.questOptimization&&(this.previousPixelRatio=this.app.nativeRenderer.getPixelRatio(),this.app.nativeRenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25))),Jh(t,this.options.targetFrameRate).then(n=>{n&&console.info(`[VXR WebXRRuntime] Target frame rate set to ${n}Hz`)})):(this.app.controls&&(this.app.controls.enabled=!0),this.options.questOptimization&&this.app.nativeRenderer.setPixelRatio(this.previousPixelRatio)))}update(e,t){var n;(n=this.app)!=null&&n.controls&&this.app.controls.enabled&&this.app.controls.update()}dispose(){this.cleanupSessionListener&&(this.cleanupSessionListener(),this.cleanupSessionListener=null),this.app=null}}const Wv={move_forward:["KeyW","ArrowUp"],move_backward:["KeyS","ArrowDown"],move_left:["KeyA","ArrowLeft"],move_right:["KeyD","ArrowRight"],jump:["Space"],sprint:["ShiftLeft","ShiftRight"],interact:["KeyE","KeyF"],reload:["KeyR"],pause:["Escape","KeyP"],fire:["Enter"],altFire:["KeyQ"]},Xv={0:"fire",2:"altFire",1:"interact"},qv={trigger:"fire",grip:"altFire",primaryButton:"jump",secondaryButton:"pause",thumbstickPress:"sprint"};class Yv{constructor(e,t,n={}){A(this,"options");A(this,"xrSession",null);A(this,"domElement",null);A(this,"activeKeys",new Set);A(this,"activeMouseButtons",new Set);A(this,"mouseDelta",{x:0,y:0});A(this,"_isPointerLocked",!1);A(this,"actionStates",new Map);A(this,"prevActionPressed",new Map);A(this,"vectorStates",new Map);A(this,"actionListeners",new Map);A(this,"snapCooldownTimer",0);A(this,"snapTurnPending",0);A(this,"cleanupCallbacks",[]);A(this,"tempForward",new y);A(this,"tempRight",new y);A(this,"tempDirection",new y);this.domElement=e??null,this.xrSession=t??null,this.options={domElement:this.domElement,pointerLock:n.pointerLock??!1,mouseSensitivity:n.mouseSensitivity??.0024,invertMouseY:n.invertMouseY??!1,thumbstickDeadzone:Math.max(.01,Math.min(.9,n.thumbstickDeadzone??.15)),snapTurnAngle:n.snapTurnAngle??0,snapTurnCooldown:n.snapTurnCooldown??.28,keyBindings:{...Wv,...n.keyBindings},mouseButtonBindings:{...Xv,...n.mouseButtonBindings},xrButtonBindings:{...qv,...n.xrButtonBindings}},this.setupDesktopListeners(),this.setupXRListeners()}setupDesktopListeners(){if(typeof window>"u")return;const e=c=>{var d,u;const h=(u=(d=c.target)==null?void 0:d.tagName)==null?void 0:u.toLowerCase();h==="input"||h==="textarea"||this.activeKeys.add(c.code)},t=c=>{this.activeKeys.delete(c.code)};window.addEventListener("keydown",e),window.addEventListener("keyup",t),this.cleanupCallbacks.push(()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)});const n=this.domElement??(typeof document<"u"?document.body:null);if(!n)return;const i=c=>{this.activeMouseButtons.add(c.button),this.options.pointerLock&&!this._isPointerLocked&&this.requestPointerLock()},s=c=>{this.activeMouseButtons.delete(c.button)},a=c=>{this.options.mouseButtonBindings[2]&&c.preventDefault()};n.addEventListener("mousedown",i),window.addEventListener("mouseup",s),n.addEventListener("contextmenu",a),this.cleanupCallbacks.push(()=>{n.removeEventListener("mousedown",i),window.removeEventListener("mouseup",s),n.removeEventListener("contextmenu",a)});const o=c=>{if(this.options.pointerLock&&!this._isPointerLocked)return;const h=(c.movementX||0)*this.options.mouseSensitivity,d=this.options.invertMouseY?1:-1,u=(c.movementY||0)*this.options.mouseSensitivity*d;this.mouseDelta.x+=h,this.mouseDelta.y+=u};window.addEventListener("mousemove",o),this.cleanupCallbacks.push(()=>{window.removeEventListener("mousemove",o)});const l=()=>{this._isPointerLocked=typeof document<"u"&&document.pointerLockElement===n};typeof document<"u"&&(document.addEventListener("pointerlockchange",l),this.cleanupCallbacks.push(()=>{document.removeEventListener("pointerlockchange",l)}))}setupXRListeners(){if(!this.xrSession)return;const e=this.xrSession.onSelect(t=>{const n=this.options.xrButtonBindings.trigger;this.dispatchImmediateAction(n,!0,1,"xr-controller",t)});this.cleanupCallbacks.push(e)}requestPointerLock(){if(this.domElement&&typeof this.domElement.requestPointerLock=="function")try{this.domElement.requestPointerLock()}catch(e){console.warn("[XRInput] Failed to request pointer lock:",e)}}exitPointerLock(){if(typeof document<"u"&&typeof document.exitPointerLock=="function")try{document.exitPointerLock()}catch(e){console.warn("[XRInput] Failed to exit pointer lock:",e)}}get isPointerLocked(){return this._isPointerLocked}isPressed(e){const t=this.actionStates.get(e);return t?t.pressed:!1}isJustPressed(e){const t=this.actionStates.get(e);return t?t.justPressed:!1}isJustReleased(e){const t=this.actionStates.get(e);return t?t.justReleased:!1}getValue(e){const t=this.actionStates.get(e);return t?t.value:0}getVector(e){const t=this.vectorStates.get(e);return t?{x:t.x,y:t.y}:{x:0,y:0}}consumeSnapTurn(){const e=this.snapTurnPending;return this.snapTurnPending=0,e}onAction(e,t){this.actionListeners.has(e)||this.actionListeners.set(e,new Set);const n=this.actionListeners.get(e);return n.add(t),()=>n.delete(t)}onActionDown(e,t){return this.onAction(e,n=>{n.pressed&&t()})}onActionUp(e,t){return this.onAction(e,n=>{n.pressed||t()})}getMovementDirection(e){const t=this.getVector("move");return t.x===0&&t.y===0?this.tempDirection.set(0,0,0):(e.getWorldDirection(this.tempForward),this.tempForward.y=0,this.tempForward.normalize(),this.tempRight.crossVectors(this.tempForward,e.up),this.tempRight.y=0,this.tempRight.normalize(),this.tempDirection.set(0,0,0).addScaledVector(this.tempForward,t.y).addScaledVector(this.tempRight,t.x),this.tempDirection.length()>1&&this.tempDirection.normalize(),this.tempDirection)}update(e){this.snapCooldownTimer>0&&(this.snapCooldownTimer-=e);const t=new Map;this.pollDesktop(t),this.pollXR(e,t);for(const[n,i]of t.entries()){const s=i.value>.15,a=this.prevActionPressed.get(n)??!1,o=s&&!a,l=!s&&a;this.actionStates.set(n,{pressed:s,justPressed:o,justReleased:l,value:i.value}),this.prevActionPressed.set(n,s),(o||l)&&this.dispatchAction(n,s,i.value,i.device,i.ctrl)}for(const[n,i]of this.prevActionPressed.entries())if(!t.has(n))if(i)this.actionStates.set(n,{pressed:!1,justPressed:!1,justReleased:!0,value:0}),this.prevActionPressed.set(n,!1),this.dispatchAction(n,!1,0,"keyboard");else{const s=this.actionStates.get(n);s&&s.justReleased&&this.actionStates.set(n,{pressed:!1,justPressed:!1,justReleased:!1,value:0})}this.mouseDelta.x=0,this.mouseDelta.y=0}pollDesktop(e){for(const[s,a]of Object.entries(this.options.keyBindings)){let o=!1;for(const l of a)if(this.activeKeys.has(l)){o=!0;break}o&&e.set(s,{value:1,device:"keyboard"})}for(const[s,a]of Object.entries(this.options.mouseButtonBindings)){const o=Number(s);this.activeMouseButtons.has(o)&&e.set(a,{value:1,device:"mouse"})}let t=0,n=0;this.isKeyActive("move_right")&&(t+=1),this.isKeyActive("move_left")&&(t-=1),this.isKeyActive("move_forward")&&(n+=1),this.isKeyActive("move_backward")&&(n-=1);const i=Math.hypot(t,n);i>0&&(t/=i,n/=i),this.vectorStates.set("move",{x:t,y:n}),this.vectorStates.set("look",{x:this.mouseDelta.x,y:this.mouseDelta.y})}pollXR(e,t){var i,s;if(!this.xrSession||!this.xrSession.isPresenting)return;const n=this.xrSession.controllers;for(let a=0;a<n.length;a++){const l=n[a].inputSource;if(!l||!l.gamepad)continue;const c=l.gamepad,h=l.handedness;if(c.buttons.length>0){const g=c.buttons[0];if(g&&g.value>.05){const x=this.options.xrButtonBindings.trigger,T=((i=t.get(x))==null?void 0:i.value)??0;g.value>T&&t.set(x,{value:g.value,device:"xr-controller",ctrl:a})}}if(c.buttons.length>1){const g=c.buttons[1];if(g&&g.value>.05){const x=this.options.xrButtonBindings.grip,T=((s=t.get(x))==null?void 0:s.value)??0;g.value>T&&t.set(x,{value:g.value,device:"xr-controller",ctrl:a})}}if(c.buttons.length>3){const g=c.buttons[3];g&&g.pressed&&t.set(this.options.xrButtonBindings.thumbstickPress,{value:1,device:"xr-controller",ctrl:a})}if(c.buttons.length>4){const g=c.buttons[4];g&&g.pressed&&t.set(this.options.xrButtonBindings.primaryButton,{value:1,device:"xr-controller",ctrl:a})}if(c.buttons.length>5){const g=c.buttons[5];g&&g.pressed&&t.set(this.options.xrButtonBindings.secondaryButton,{value:1,device:"xr-controller",ctrl:a})}let d=0,u=0;c.axes.length>=4?(d=c.axes[2],u=c.axes[3]):c.axes.length>=2&&(d=c.axes[0],u=c.axes[1]);const f=this.options.thumbstickDeadzone,m=Math.hypot(d,u);let v=0,p=0;if(m>f){const g=Math.min(1,(m-f)/(1-f));v=d/m*g,p=u/m*g}if((h==="left"||h==="none"&&a===1)&&Math.hypot(v,p)>0&&this.vectorStates.set("move",{x:v,y:-p}),h==="right"||h==="none"&&a===0){if(this.options.snapTurnAngle>0)Math.abs(v)>.65&&this.snapCooldownTimer<=0&&(this.snapTurnPending=v>0?-this.options.snapTurnAngle:this.options.snapTurnAngle,this.snapCooldownTimer=this.options.snapTurnCooldown);else if(Math.abs(v)>0){const g=this.vectorStates.get("look")??{x:0,y:0};this.vectorStates.set("look",{x:g.x-v*e*2.5,y:g.y})}}}}isKeyActive(e){const t=this.options.keyBindings[e]??[];for(const n of t)if(this.activeKeys.has(n))return!0;return!1}dispatchAction(e,t,n,i,s){const a=this.actionListeners.get(e);if(!a||a.size===0)return;const o={action:e,pressed:t,value:n,vector:this.vectorStates.get(e),device:i,controllerIndex:s,timestamp:typeof performance<"u"?performance.now():Date.now()};for(const l of a)try{l(o)}catch(c){console.error(`[XRInput] Error in action listener for '${e}':`,c)}}dispatchImmediateAction(e,t,n,i,s){this.actionStates.set(e,{pressed:t,justPressed:t,justReleased:!t,value:n}),this.dispatchAction(e,t,n,i,s)}simulateKey(e,t){t?this.activeKeys.add(e):this.activeKeys.delete(e)}simulateMouseButton(e,t){t?this.activeMouseButtons.add(e):this.activeMouseButtons.delete(e)}simulateMouseMove(e,t){const n=this.options.invertMouseY?1:-1;this.mouseDelta.x+=e*this.options.mouseSensitivity,this.mouseDelta.y+=t*this.options.mouseSensitivity*n}dispose(){for(const e of this.cleanupCallbacks)try{e()}catch(t){console.warn("[XRInput] Error during listener cleanup:",t)}this.cleanupCallbacks.length=0,this.activeKeys.clear(),this.activeMouseButtons.clear(),this.actionStates.clear(),this.prevActionPressed.clear(),this.vectorStates.clear(),this.actionListeners.clear(),this.domElement=null,this.xrSession=null}}class Kv{constructor(e={}){A(this,"scene");A(this,"renderer");A(this,"session");A(this,"assets");A(this,"controls",null);A(this,"input");A(this,"runtime");A(this,"initialCameraPosition");A(this,"initialCameraTarget",[0,.8,0]);A(this,"currentModel",null);A(this,"activeScenario",null);A(this,"xrAudio",null);A(this,"exhibits",[]);A(this,"tutorial",null);A(this,"dropCleanup",null);this.scene=new X_({enableShadows:e.enableShadows,enableGrid:e.enableGrid}),this.renderer=new q_(e),this.session=new Y_(this.renderer.nativeRenderer),this.input=new Yv(this.renderer.domElement,this.session,e.input),this.assets=new Nv,e.runtime&&typeof e.runtime=="object"?this.runtime=e.runtime:e.runtime==="desktop"?this.runtime=new Gv:this.runtime=new Vv({targetFrameRate:e.targetFrameRate,questOptimization:e.questOptimization}),this.scene.nativeScene.add(this.session.controllerGroup),this.initialCameraPosition=e.cameraPosition??[0,1.6,3.5],e.autoOrbitControls!==!1&&(this.controls=new I_(this.renderer.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=.5,this.controls.maxDistance=100,this.controls.target.set(this.initialCameraTarget[0],this.initialCameraTarget[1],this.initialCameraTarget[2])),e.autoVRButton!==!1&&this.session.createVRButton(this.renderer.container),this.session.onStateChange(t=>{this.controls&&(this.controls.enabled=!t)}),this.runtime.init(this).catch(t=>{console.warn("[VXR] Runtime initialization warning:",t)})}get camera(){return this.renderer.camera}get nativeScene(){return this.scene.nativeScene}get nativeRenderer(){return this.renderer.nativeRenderer}get model(){return this.currentModel}get controllers(){return this.session.controllers}get audio(){return this.xrAudio||(this.xrAudio=new Fv),this.xrAudio}resetCamera(e,t){const n=e??this.initialCameraPosition,i=t??this.initialCameraTarget;this.renderer.camera.position.set(n[0],n[1],n[2]),this.controls?(this.controls.target.set(i[0],i[1],i[2]),this.controls.update()):this.renderer.camera.lookAt(i[0],i[1],i[2])}raycastPointer(e,t,n=!0){const s=this.renderer.domElement.getBoundingClientRect(),a=(e.clientX-s.left)/s.width*2-1,o=-((e.clientY-s.top)/s.height)*2+1,l=new Yo;l.setFromCamera(new xe(a,o),this.renderer.camera);const c=t??this.scene.nativeScene.children;return l.intersectObjects(c,n)}raycastController(e,t,n=!0){const i=t??this.scene.nativeScene.children;return this.session.raycastController(e,i,n)}onControllerSelect(e){return this.session.onSelect(e)}async loadModel(e,t={}){this.currentModel&&(this.scene.remove(this.currentModel.group),this.currentModel.dispose(),this.currentModel=null);const n=await this.assets.loadModel(e,t);if(this.currentModel=n,this.scene.add(n.group),this.controls){const i=n.metrics.dimensions.height;this.initialCameraTarget=[0,i*.4,0],this.controls.target.set(0,i*.4,0),this.controls.update()}return n}onUpdate(e){return this.renderer.addUpdatable(e)}start(){return this.renderer.start((e,t)=>{this.input.update(e),this.runtime.update(e,t),this.controls&&this.controls.enabled&&this.controls.update(),this.renderer.render(this.scene.nativeScene)}),this}stop(){return this.renderer.stop(),this}get scenario(){return this.activeScenario}createScenario(e="Scenario"){return this.activeScenario&&(this.scene.nativeScene.remove(this.activeScenario.nativeGroup),this.activeScenario.dispose()),this.activeScenario=new Ov(e),this.scene.nativeScene.add(this.activeScenario.nativeGroup),this.activeScenario}createRoom(e={}){return this.activeScenario||this.createScenario("DefaultScenario"),this.activeScenario.addRoom(e)}connectRooms(e,t,n,i,s={}){if(!this.activeScenario){console.warn("[XRApp] Cannot connect rooms: No active scenario found.");return}this.activeScenario.connectRooms(e,t,n,i,s)}async loadScenario(e){const t=this.createScenario();return typeof e=="string"?await t.loadFromURL(e):t.loadFromJSON(e),t}teleportToRoom(e){if(!this.activeScenario)return;const t=this.activeScenario.getRoom(e);if(!t){console.warn(`[XRApp] Cannot teleport: Room '${e}' not found.`);return}const n=t.getSpawnPosition();this.resetCamera([n.x,n.y,n.z],[t.center.x,n.y,t.center.z])}constrainToScenario(e,t,n=.35){return this.activeScenario?this.activeScenario.clampMovement(e,t,n):t}addExhibit(e){const t=new Bv(e);return this.scene.nativeScene.add(t.group),this.exhibits.push(t),this.renderer.addUpdatable(n=>t.update(n)),t}createTutorial(e){return this.tutorial&&this.tutorial.destroy(),this.tutorial=new kv(e,this.audio),this.tutorial}enableLocalFileDrop(e={}){return this.dropCleanup&&this.dropCleanup(),this.dropCleanup=zv(this,e),this.dropCleanup}dispose(){this.stop(),this.dropCleanup&&(this.dropCleanup(),this.dropCleanup=null),this.tutorial&&(this.tutorial.destroy(),this.tutorial=null);for(const e of this.exhibits)e.dispose();this.exhibits.length=0,this.xrAudio&&(this.xrAudio.dispose(),this.xrAudio=null),this.controls&&this.controls.dispose(),this.activeScenario&&(this.scene.nativeScene.remove(this.activeScenario.nativeGroup),this.activeScenario.dispose(),this.activeScenario=null),this.input.dispose(),this.session.dispose(),this.runtime.dispose(),this.assets.dispose(),this.scene.dispose(),this.renderer.dispose(),this.currentModel=null}}class $v{constructor(e){A(this,"app");A(this,"laboratoryGroup");A(this,"ambientParticles",null);this.app=e,this.laboratoryGroup=new ze,this.laboratoryGroup.name="Futuristic_Anatomy_Laboratory",this.setupLaboratoryEnvironment(),this.setupLaboratoryLighting(),this.setupAtmosphericParticles(),this.app.scene.nativeScene.add(this.laboratoryGroup)}setupLaboratoryEnvironment(){this.app.scene.nativeScene.background=new ye(198418);const e=new Ko(16,32,61695,924728);e.position.y=-.05,e.material.transparent=!0,e.material.opacity=.35,this.laboratoryGroup.add(e);const t=new Si(4.8,5,64),n=new sn({color:61695,side:St,transparent:!0,opacity:.15}),i=new de(t,n);i.rotation.x=-Math.PI/2,i.position.y=-.045,this.laboratoryGroup.add(i)}setupLaboratoryLighting(){const e=this.app.scene.nativeScene,t=new Nh(16777215,.85);e.add(t);const n=new Ts(16777215,1.4);n.position.set(4,7,5),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.bias=-2e-4,e.add(n);const i=new Ts(61695,1.2);i.position.set(-4,5,-4),e.add(i);const s=new Ts(14251782,.45);s.position.set(0,-2,4),e.add(s)}setupAtmosphericParticles(){const t=new Float32Array(600);for(let s=0;s<200;s++)t[s*3]=(Math.random()-.5)*8,t[s*3+1]=Math.random()*4,t[s*3+2]=(Math.random()-.5)*8;const n=new dt;n.setAttribute("position",new wt(t,3));const i=new bi({size:.015,color:61695,transparent:!0,opacity:.4,blending:xi,depthWrite:!1});this.ambientParticles=new es(n,i),this.laboratoryGroup.add(this.ambientParticles)}update(e){if(this.ambientParticles){const t=this.ambientParticles.geometry.attributes.position,n=t.array;for(let i=1;i<n.length;i+=3)n[i]+=e*.04,n[i]>4&&(n[i]=0);t.needsUpdate=!0}}}class Zv{constructor(e){A(this,"app");A(this,"targetPosition",new y);A(this,"targetLookAt",new y);A(this,"isTransitioning",!1);A(this,"transitionSpeed",4.5);A(this,"presets",{frontal:{pos:new y(0,1.35,2.2),look:new y(0,1.05,0)},posterior:{pos:new y(0,1.35,-2.2),look:new y(0,1.05,0)},lateral:{pos:new y(2.2,1.35,0),look:new y(0,1.05,0)},superior:{pos:new y(0,2.7,.45),look:new y(0,.95,0)},torax:{pos:new y(0,1.35,.85),look:new y(0,1.3,0)},cabeza:{pos:new y(0,1.7,.65),look:new y(0,1.68,0)}});this.app=e,this.targetPosition.copy(this.presets.frontal.pos),this.targetLookAt.copy(this.presets.frontal.look)}setPreset(e){const t=this.presets[e];t&&(this.targetPosition.copy(t.pos),this.targetLookAt.copy(t.look),this.isTransitioning=!0)}focusOnPoint(e,t){this.targetPosition.set(e[0],e[1],e[2]),this.targetLookAt.set(t[0],t[1],t[2]),this.isTransitioning=!0}reset(){this.setPreset("frontal")}update(e){if(!this.isTransitioning||this.app.session.isPresenting)return;const t=this.app.camera,n=this.app.controls;t.position.lerp(this.targetPosition,e*this.transitionSpeed),n?(n.target.lerp(this.targetLookAt,e*this.transitionSpeed),n.update()):t.lookAt(this.targetLookAt),t.position.distanceTo(this.targetPosition)<.01&&(t.position.copy(this.targetPosition),n&&n.target.copy(this.targetLookAt),this.isTransitioning=!1)}}function Xt(r){if(r.startsWith("http://")||r.startsWith("https://"))return r;const e="./",t=e.endsWith("/")?e:`${e}/`,n=r.startsWith("/")?r.slice(1):r;return`${t}${n}`}class Jv{constructor(){A(this,"group");A(this,"id","skeletal");A(this,"name","Sistema Óseo");A(this,"originalMaterials",new Map);A(this,"bones",[]);A(this,"isLoaded",!1);A(this,"modelGroup",null);this.group=new ze,this.group.name="System_Skeletal"}async load(e,t){return new Promise(n=>{e.load(Xt("models/skeleton.glb"),i=>{this.modelGroup=i.scene,this.modelGroup.name="Skeleton_Model";const s=new at({color:16118766,roughness:.45,metalness:.04,side:St}),a=new Je({color:14412542,roughness:.32,metalness:.06,clearcoat:.4,side:St});this.modelGroup.traverse(l=>{if(l.isMesh){const c=l;c.castShadow=!0,c.receiveShadow=!0,this.originalMaterials.set(c,c.material);const h=(c.name||"").toLowerCase(),d=h.includes("cartilage")||h.includes("costal")||h.includes("disc");c.material=d?a.clone():s.clone();const u=this.formatBoneName(c.name);c.userData={systemId:"skeletal",structureId:"skeleton",structureName:u,selectable:!0},this.bones.push(c)}});const o=1.75/4.106;this.modelGroup.scale.setScalar(o),this.modelGroup.position.set(0,.875,0),this.group.add(this.modelGroup),this.isLoaded=!0,console.log(`[SkeletalSystem] ${this.bones.length} huesos anatómicos cargados.`),n(this.group)},i=>{i.total>0&&t&&t(i.loaded/i.total)},i=>{console.warn("[SkeletalSystem] Fallback a esqueleto básico:",i),this.buildProceduralSkeleton(),this.isLoaded=!0,n(this.group)})})}formatBoneName(e){return e?e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()):"Hueso"}buildProceduralSkeleton(){const e=new at({color:16118766,roughness:.5}),t=new de(new Sn(.12,16,16),e);t.position.set(0,1.65,0),t.userData={structureId:"skeleton",structureName:"Cráneo"},this.group.add(t)}setVisible(e){this.group.visible=e}setHighlight(e,t=61695){this.bones.forEach(n=>{const i=n.material;e?(i.emissive=new ye(t),i.emissiveIntensity=.45):(i.emissive=new ye(0),i.emissiveIntensity=0)})}setExploded(e){this.group.position.z=-e*.35}}class jv{constructor(){A(this,"group");A(this,"id","muscular");A(this,"name","Sistema Muscular");A(this,"isLoaded",!1);A(this,"muscles",[]);A(this,"muscleMaterials",[]);A(this,"modelGroup",null);this.group=new ze,this.group.name="System_Muscular"}async load(e,t){return new Promise(n=>{e.load(Xt("models/muscles.glb"),i=>{this.modelGroup=i.scene,this.modelGroup.name="Anatomical_Muscles_Model";const s=new Je({color:10165294,roughness:.42,metalness:.05,clearcoat:.45,clearcoatRoughness:.25,side:St}),a=new Je({color:15857145,roughness:.32,metalness:.08,clearcoat:.5,clearcoatRoughness:.2,side:St});this.muscleMaterials.push(s,a),this.modelGroup.traverse(l=>{if(l.isMesh){const c=l;c.castShadow=!0,c.receiveShadow=!0;const h=(c.name||"").toLowerCase(),d=h.includes("aponeurosis")||h.includes("tendon")||h.includes("galea")||h.includes("ligament");c.material=d?a.clone():s.clone(),this.muscleMaterials.push(c.material);const u=this.formatMuscleName(c.name);c.userData={systemId:"muscular",structureId:"muscular",structureName:u,selectable:!0},this.muscles.push(c)}}),this.modelGroup.scale.setScalar(.26638),this.modelGroup.position.set(0,.875,0),this.group.add(this.modelGroup),this.isLoaded=!0,console.log(`[MuscularSystem] ${this.muscles.length} estructuras musculares reales cargadas.`),n(this.group)},i=>{i.total>0&&t&&t(i.loaded/i.total)},i=>{console.warn("[MuscularSystem] Fallback a músculos estilizados:",i),this.buildProceduralMuscles(),this.isLoaded=!0,n(this.group)})})}formatMuscleName(e){return e?e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()):"Músculo Esquelético"}buildProceduralMuscles(){const e=new at({color:10165294,roughness:.45,clearcoat:.4}),t=new de(new ci(.16,.13,.52,24),e);t.position.set(0,1.22,.02),t.userData={systemId:"muscular",structureId:"muscular",structureName:"Músculos del Tronco",selectable:!0},this.group.add(t)}setVisible(e){this.group.visible=e}setHighlight(e,t=16007006){this.muscleMaterials.forEach(n=>{e?(n.emissive=new ye(t),n.emissiveIntensity=.5):(n.emissive=new ye(0),n.emissiveIntensity=0)})}setExploded(e){this.group.position.set(0,0,e*.35)}}class Qv{constructor(){A(this,"group");A(this,"id","circulatory");A(this,"name","Sistema Circulatorio");A(this,"heartMesh",null);A(this,"vesselsGroup");A(this,"isLoaded",!1);A(this,"heartBaseScale",new y(1,1,1));A(this,"heartMaterials",[]);this.group=new ze,this.group.name="System_Circulatory",this.vesselsGroup=new ze,this.vesselsGroup.name="Systemic_Vasculature",this.group.add(this.vesselsGroup)}async load(e,t){return new Promise(n=>{this.buildSystemicVasculature(),e.load(Xt("models/heart.glb"),i=>{this.heartMesh=i.scene,this.heartMesh.name="Anatomical_Heart";const s=new Je({color:9117226,roughness:.3,metalness:.05,clearcoat:.85,clearcoatRoughness:.18});this.heartMesh.traverse(d=>{if(d.isMesh){const u=d;u.castShadow=!0,u.receiveShadow=!0,u.material=s.clone(),this.heartMaterials.push(u.material),u.userData={systemId:"circulatory",structureId:"heart",structureName:"Corazón (Miocardio y Cavidades)",selectable:!0}}});const a=new mt().setFromObject(this.heartMesh),o=new y;a.getSize(o);const l=new y;a.getCenter(l);const h=.115/(o.y||1);this.heartMesh.scale.setScalar(h),this.heartBaseScale.setScalar(h),this.heartMesh.position.set(-l.x*h-.015,-l.y*h+1.28,-l.z*h+.02),this.group.add(this.heartMesh),this.isLoaded=!0,n(this.group)},i=>{i.total>0&&t&&t(i.loaded/i.total)},i=>{console.warn("[CirculatorySystem] Fallback a corazón procedimental:",i),this.buildProceduralHeart(),this.isLoaded=!0,n(this.group)})})}buildSystemicVasculature(){const e=new at({color:12131356,roughness:.35,metalness:.1,clearcoat:.6,clearcoatRoughness:.2}),t=new at({color:1920728,roughness:.35,metalness:.1,clearcoat:.6,clearcoatRoughness:.2}),n=new ut([new y(-.012,1.32,.02),new y(-.012,1.37,.01),new y(-.018,1.34,-.02),new y(-.015,1.2,-.025),new y(-.01,1.05,-.025),new y(0,.9,-.02)]),i=new zt(n,32,.011,12,!1),s=new de(i,e);s.userData={systemId:"circulatory",structureId:"heart",structureName:"Arteria Aorta Ascendente y Descendente",selectable:!0},this.vesselsGroup.add(s);const a=new ut([new y(.018,1.43,.01),new y(.018,1.32,.015),new y(.014,1.18,-.018),new y(.012,1.05,-.018),new y(.008,.9,-.018)]),o=new zt(a,32,.012,12,!1),l=new de(o,t);l.userData={systemId:"circulatory",structureId:"heart",structureName:"Vena Cava Superior e Inferior",selectable:!0},this.vesselsGroup.add(l);const c=new ut([new y(.01,1.37,.01),new y(.022,1.5,.01),new y(.02,1.62,.015)]),h=new ut([new y(-.015,1.37,.01),new y(-.022,1.5,.01),new y(-.02,1.62,.015)]);this.vesselsGroup.add(new de(new zt(c,16,.005,8,!1),e)),this.vesselsGroup.add(new de(new zt(h,16,.005,8,!1),e));const d=new ut([new y(0,.9,-.02),new y(.05,.82,0),new y(.07,.62,.01),new y(.065,.42,0)]),u=new ut([new y(0,.9,-.02),new y(-.05,.82,0),new y(-.07,.62,.01),new y(-.065,.42,0)]);this.vesselsGroup.add(new de(new zt(d,24,.006,8,!1),e)),this.vesselsGroup.add(new de(new zt(u,24,.006,8,!1),e))}buildProceduralHeart(){const e=new ze,t=new at({color:9117226,roughness:.3,clearcoat:.8}),n=new de(new Sn(.06,24,24),t);n.scale.set(1,1.25,.9),n.position.set(-.015,1.28,.02),n.userData={systemId:"circulatory",structureId:"heart",structureName:"Corazón (Miocardio)",selectable:!0},e.add(n),this.group.add(e),this.heartMesh=e}pulse(e){this.heartMesh&&this.heartMesh.scale.set(this.heartBaseScale.x*e,this.heartBaseScale.y*(e*.95),this.heartBaseScale.z*e)}setVisible(e){this.group.visible=e}setHighlight(e,t=16724838){this.heartMaterials.forEach(n=>{e?(n.emissive=new ye(t),n.emissiveIntensity=.5):(n.emissive=new ye(0),n.emissiveIntensity=0)})}setExploded(e){this.group.position.set(-e*.2,0,e*.25)}}class ex{constructor(){A(this,"group");A(this,"id","nervous");A(this,"name","Sistema Nervioso");A(this,"brainMesh",null);A(this,"spinalMesh",null);A(this,"peripheralGroup");A(this,"isLoaded",!1);A(this,"nerveMaterials",[]);this.group=new ze,this.group.name="System_Nervous",this.peripheralGroup=new ze,this.peripheralGroup.name="Peripheral_Nerves",this.group.add(this.peripheralGroup)}async load(e,t){this.buildPeripheralNerves();const n=new Promise(s=>{e.load(Xt("models/brain.glb"),a=>{this.brainMesh=a.scene,this.brainMesh.name="Anatomical_Brain";const o=new Je({color:12887188,roughness:.38,metalness:.04,clearcoat:.55,clearcoatRoughness:.2});this.brainMesh.traverse(f=>{if(f.isMesh){const m=f;m.castShadow=!0,m.receiveShadow=!0,m.material=o.clone(),this.nerveMaterials.push(m.material),m.userData={systemId:"nervous",structureId:"brain",structureName:"Encéfalo (Corteza, Tronco y Cerebelo)",selectable:!0}}});const l=new mt().setFromObject(this.brainMesh),c=new y;l.getSize(c);const h=new y;l.getCenter(h);const u=.138/(c.y||1);this.brainMesh.scale.setScalar(u),this.brainMesh.position.set(-h.x*u,-h.y*u+1.635,-h.z*u-.018),this.group.add(this.brainMesh),s()},void 0,a=>{console.warn("[NervousSystem] Fallback a encéfalo procedimental:",a),this.buildProceduralBrain(),s()})}),i=new Promise(s=>{e.load(Xt("models/spinal_cord.glb"),a=>{this.spinalMesh=a.scene,this.spinalMesh.name="Anatomical_SpinalCord";const o=new at({color:16707722,roughness:.35,metalness:.05,clearcoat:.4});this.spinalMesh.traverse(f=>{if(f.isMesh){const m=f;m.material=o.clone(),this.nerveMaterials.push(m.material),m.userData={systemId:"nervous",structureId:"spinal_cord",structureName:"Médula Espinal",selectable:!0}}});const l=new mt().setFromObject(this.spinalMesh),c=new y;l.getSize(c);const h=new y;l.getCenter(h);const u=.5/(c.y||1);this.spinalMesh.scale.setScalar(u),this.spinalMesh.position.set(-h.x*u,-h.y*u+1.32,-h.z*u-.028),this.group.add(this.spinalMesh),s()},void 0,a=>{console.warn("[NervousSystem] Fallback a médula procedimental:",a),this.buildProceduralSpinalCord(),s()})});return await Promise.all([n,i]),this.isLoaded=!0,this.group}buildPeripheralNerves(){const e=new at({color:16707722,roughness:.35,emissive:165063,emissiveIntensity:.18}),t=new ut([new y(.015,1.45,-.02),new y(.08,1.42,-.01),new y(.18,1.34,0),new y(.28,1.2,0),new y(.35,1.02,0)]),n=new ut([new y(-.015,1.45,-.02),new y(-.08,1.42,-.01),new y(-.18,1.34,0),new y(-.28,1.2,0),new y(-.35,1.02,0)]);this.peripheralGroup.add(new de(new zt(t,20,.003,8,!1),e)),this.peripheralGroup.add(new de(new zt(n,20,.003,8,!1),e));const i=new ut([new y(.015,1.02,-.025),new y(.045,.92,-.02),new y(.068,.82,-.01),new y(.075,.62,-.01),new y(.07,.42,-.01)]),s=new ut([new y(-.015,1.02,-.025),new y(-.045,.92,-.02),new y(-.068,.82,-.01),new y(-.075,.62,-.01),new y(-.07,.42,-.01)]);this.peripheralGroup.add(new de(new zt(i,24,.0035,8,!1),e)),this.peripheralGroup.add(new de(new zt(s,24,.0035,8,!1),e))}buildProceduralBrain(){const e=new at({color:12887188,roughness:.4,clearcoat:.5}),t=new de(new Sn(.07,24,24),e);t.scale.set(1,.9,1.2),t.position.set(0,1.635,-.018),this.group.add(t)}buildProceduralSpinalCord(){const e=new at({color:16707722,roughness:.35}),t=new de(new ci(.007,.007,.5,12),e);t.position.set(0,1.32,-.028),this.group.add(t)}setVisible(e){this.group.visible=e}setHighlight(e,t=3718648){this.nerveMaterials.forEach(n=>{e?(n.emissive=new ye(t),n.emissiveIntensity=.65):(n.emissive=new ye(165063),n.emissiveIntensity=.12)})}setExploded(e){this.group.position.set(0,e*.1,-e*.25)}}class tx{constructor(){A(this,"group");A(this,"id","digestive");A(this,"name","Sistema Digestivo");A(this,"liverMesh",null);A(this,"spleenMesh",null);A(this,"stomachMesh",null);A(this,"smallIntestineMesh",null);A(this,"largeIntestineMesh",null);A(this,"esophagusMesh",null);A(this,"gallbladderMesh",null);A(this,"isLoaded",!1);A(this,"organMaterials",[]);this.group=new ze,this.group.name="System_Digestive"}async load(e,t){this.buildEsophagusAndStomach(),this.buildGallbladder();const n=new Promise(o=>{e.load(Xt("models/liver.glb"),l=>{this.liverMesh=l.scene,this.liverMesh.name="Anatomical_Liver";const c=new Je({color:6166804,roughness:.28,metalness:.04,clearcoat:.85,clearcoatRoughness:.18});this.liverMesh.traverse(v=>{if(v.isMesh){const p=v;p.castShadow=!0,p.receiveShadow=!0,p.material=c.clone(),this.organMaterials.push(p.material),p.userData={systemId:"digestive",structureId:"liver",structureName:"Hígado (Lóbulos Derecho e Izquierdo, Glisson)",selectable:!0}}});const h=new mt().setFromObject(this.liverMesh),d=new y;h.getSize(d);const u=new y;h.getCenter(u);const m=.165/(d.y||1);this.liverMesh.scale.setScalar(m),this.liverMesh.position.set(-u.x*m+.045,-u.y*m+1.16,-u.z*m+.028),this.group.add(this.liverMesh),o()},void 0,()=>o())}),i=new Promise(o=>{e.load(Xt("models/spleen.glb"),l=>{this.spleenMesh=l.scene,this.spleenMesh.name="Anatomical_Spleen";const c=new Je({color:4855077,roughness:.32,metalness:.05,clearcoat:.8,clearcoatRoughness:.2});this.spleenMesh.traverse(v=>{if(v.isMesh){const p=v;p.castShadow=!0,p.receiveShadow=!0,p.material=c.clone(),this.organMaterials.push(p.material),p.userData={systemId:"digestive",structureId:"digestive_spleen",structureName:"Bazo (Pulpa Roja y Blanca)",selectable:!0}}});const h=new mt().setFromObject(this.spleenMesh),d=new y;h.getSize(d);const u=new y;h.getCenter(u);const m=.085/(d.y||1);this.spleenMesh.scale.setScalar(m),this.spleenMesh.position.set(-u.x*m-.09,-u.y*m+1.17,-u.z*m-.015),this.group.add(this.spleenMesh),o()},void 0,()=>o())}),s=new Promise(o=>{e.load(Xt("models/intestine_small.glb"),l=>{this.smallIntestineMesh=l.scene,this.smallIntestineMesh.name="Anatomical_SmallIntestine";const c=new Je({color:11888970,roughness:.36,metalness:.04,clearcoat:.65,clearcoatRoughness:.25});this.smallIntestineMesh.traverse(v=>{if(v.isMesh){const p=v;p.castShadow=!0,p.receiveShadow=!0,p.material=c.clone(),this.organMaterials.push(p.material),p.userData={systemId:"digestive",structureId:"intestine_small",structureName:"Intestino Delgado (Duodeno, Yeyuno e Íleon)",selectable:!0}}});const h=new mt().setFromObject(this.smallIntestineMesh),d=new y;h.getSize(d);const u=new y;h.getCenter(u);const m=.18/(d.y||1);this.smallIntestineMesh.scale.setScalar(m),this.smallIntestineMesh.position.set(-u.x*m,-u.y*m+.95,-u.z*m+.035),this.group.add(this.smallIntestineMesh),o()},void 0,()=>o())}),a=new Promise(o=>{e.load(Xt("models/intestine_large.glb"),l=>{this.largeIntestineMesh=l.scene,this.largeIntestineMesh.name="Anatomical_LargeIntestine";const c=new Je({color:9190958,roughness:.35,metalness:.04,clearcoat:.72,clearcoatRoughness:.22});this.largeIntestineMesh.traverse(v=>{if(v.isMesh){const p=v;p.castShadow=!0,p.receiveShadow=!0,p.material=c.clone(),this.organMaterials.push(p.material),p.userData={systemId:"digestive",structureId:"intestine_large",structureName:"Intestino Grueso (Marco Cólico y Haustras)",selectable:!0}}});const h=new mt().setFromObject(this.largeIntestineMesh),d=new y;h.getSize(d);const u=new y;h.getCenter(u);const m=.225/(d.y||1);this.largeIntestineMesh.scale.setScalar(m),this.largeIntestineMesh.position.set(-u.x*m,-u.y*m+.97,-u.z*m+.028),this.group.add(this.largeIntestineMesh),o()},void 0,()=>o())});return await Promise.all([n,i,s,a]),this.isLoaded=!0,this.group}buildEsophagusAndStomach(){const e=new ze;e.name="Anatomical_Stomach_Complex";const t=new Je({color:10372918,roughness:.32,metalness:.04,clearcoat:.82,clearcoatRoughness:.2});this.organMaterials.push(t);const n=new ut([new y(0,1.48,-.01),new y(0,1.36,-.015),new y(-.008,1.25,-.01),new y(-.022,1.21,.01)]),i=new zt(n,24,.0085,12,!1);this.esophagusMesh=new de(i,t),this.esophagusMesh.castShadow=!0,this.esophagusMesh.userData={systemId:"digestive",structureId:"stomach",structureName:"Esófago (Cervical, Torácico y Abdominal)",selectable:!0},e.add(this.esophagusMesh),new ut([new y(-.022,1.205,.01),new y(-.05,1.225,.025),new y(-.065,1.18,.03),new y(-.055,1.12,.035),new y(-.025,1.1,.032),new y(.005,1.11,.022)]);const s=new Sn(.058,24,24),a=s.attributes.position;for(let l=0;l<a.count;l++){let c=a.getX(l),h=a.getY(l),d=a.getZ(l);h>0&&c<0&&(c*=1.25,h*=1.15),h<0&&c>0&&(c*=.85,d*=.75),a.setXYZ(l,c*1.1,h*1.35,d*.95)}s.computeVertexNormals();const o=new de(s,t);o.rotation.z=-.35,o.rotation.y=.2,o.position.set(-.038,1.165,.028),o.castShadow=!0,o.receiveShadow=!0,o.userData={systemId:"digestive",structureId:"stomach",structureName:"Estómago (Fundus, Cuerpo, Antro y Píloro)",selectable:!0},e.add(o),this.stomachMesh=e,this.group.add(this.stomachMesh)}buildGallbladder(){const e=new Je({color:4026433,roughness:.25,metalness:.05,clearcoat:.88,clearcoatRoughness:.15});this.organMaterials.push(e);const t=new Sn(.016,16,16);t.scale(1,1.8,1),this.gallbladderMesh=new de(t,e),this.gallbladderMesh.rotation.z=.4,this.gallbladderMesh.rotation.x=.3,this.gallbladderMesh.position.set(.045,1.12,.04),this.gallbladderMesh.userData={systemId:"digestive",structureId:"liver",structureName:"Vesícula Biliar y Vías Biliares (Coledoco)",selectable:!0},this.group.add(this.gallbladderMesh)}setVisible(e){this.group.visible=e}setHighlight(e,t=16096779){this.organMaterials.forEach(n=>{e?(n.emissive=new ye(t),n.emissiveIntensity=.5):(n.emissive=new ye(0),n.emissiveIntensity=0)})}setExploded(e){this.group.position.set(0,-e*.05,e*.2)}}class nx{constructor(){A(this,"group");A(this,"id","respiratory");A(this,"name","Sistema Respiratorio");A(this,"lungsMesh",null);A(this,"tracheaGroup");A(this,"isLoaded",!1);A(this,"lungsBaseScale",new y(1,1,1));A(this,"lungMaterials",[]);this.group=new ze,this.group.name="System_Respiratory",this.tracheaGroup=new ze,this.tracheaGroup.name="Trachea_Bronchi",this.group.add(this.tracheaGroup)}async load(e,t){return new Promise(n=>{this.buildTracheaAndBronchi(),e.load(Xt("models/lungs.glb"),i=>{this.lungsMesh=i.scene,this.lungsMesh.name="Anatomical_Lungs";const s=new Je({color:12480123,roughness:.52,metalness:.04,clearcoat:.35,clearcoatRoughness:.3,transparent:!0,opacity:.94});this.lungsMesh.traverse(d=>{if(d.isMesh){const u=d;u.castShadow=!0,u.receiveShadow=!0,u.material=s.clone(),this.lungMaterials.push(u.material),u.userData={systemId:"respiratory",structureId:"lungs",structureName:"Pulmones y Árbol Bronquial",selectable:!0}}});const a=new mt().setFromObject(this.lungsMesh),o=new y;a.getSize(o);const l=new y;a.getCenter(l);const h=.24/(o.y||1);this.lungsMesh.scale.setScalar(h),this.lungsBaseScale.setScalar(h),this.lungsMesh.position.set(-l.x*h,-l.y*h+1.3,-l.z*h+.005),this.group.add(this.lungsMesh),this.isLoaded=!0,n(this.group)},i=>{i.total>0&&t&&t(i.loaded/i.total)},i=>{console.warn("[RespiratorySystem] Fallback a pulmones procedimentales:",i),this.buildProceduralLungs(),this.isLoaded=!0,n(this.group)})})}buildTracheaAndBronchi(){const e=new at({color:14739455,roughness:.35,metalness:.08,clearcoat:.4}),t=new ci(.011,.011,.11,16),n=new de(t,e);n.position.set(0,1.44,.015),n.userData={systemId:"respiratory",structureId:"lungs",structureName:"Tráquea Cartilaginosa",selectable:!0},this.tracheaGroup.add(n);const i=new ut([new y(0,1.38,.015),new y(.024,1.35,.005),new y(.048,1.32,-.005)]),s=new ut([new y(0,1.38,.015),new y(-.028,1.35,.005),new y(-.052,1.32,-.005)]);this.tracheaGroup.add(new de(new zt(i,12,.006,8,!1),e)),this.tracheaGroup.add(new de(new zt(s,12,.006,8,!1),e))}buildProceduralLungs(){const e=new ze,t=new at({color:12480123,roughness:.5,clearcoat:.3}),n=new de(new Sn(.075,20,20),t);n.scale.set(.9,1.4,.8),n.position.set(.065,1.3,.005),e.add(n);const i=new de(new Sn(.07,20,20),t);i.scale.set(.85,1.35,.75),i.position.set(-.065,1.3,.005),e.add(i),this.group.add(e),this.lungsMesh=e}expand(e){this.lungsMesh&&this.lungsMesh.scale.set(this.lungsBaseScale.x*e,this.lungsBaseScale.y*(1+(e-1)*.8),this.lungsBaseScale.z*e)}setVisible(e){this.group.visible=e}setHighlight(e,t=61695){this.lungMaterials.forEach(n=>{e?(n.emissive=new ye(t),n.emissiveIntensity=.5):(n.emissive=new ye(0),n.emissiveIntensity=0)})}setExploded(e){this.group.position.z=e*.22}}class ix{constructor(){A(this,"group");A(this,"id","urinary");A(this,"name","Sistema Urinario");A(this,"kidneyLeftMesh",null);A(this,"kidneyRightMesh",null);A(this,"bladderMesh",null);A(this,"uretersGroup");A(this,"isLoaded",!1);A(this,"urinaryMaterials",[]);this.group=new ze,this.group.name="System_Urinary",this.uretersGroup=new ze,this.uretersGroup.name="Ureters",this.group.add(this.uretersGroup)}async load(e,t){this.buildUreters();const n=new Je({color:7218216,roughness:.32,metalness:.05,clearcoat:.85,clearcoatRoughness:.18}),i=new Je({color:11031372,roughness:.36,metalness:.04,clearcoat:.78,clearcoatRoughness:.22}),s=new Promise(l=>{e.load(Xt("models/kidney_left.glb"),c=>{this.kidneyLeftMesh=c.scene,this.kidneyLeftMesh.name="Anatomical_Kidney_L",this.kidneyLeftMesh.traverse(v=>{if(v.isMesh){const p=v;p.castShadow=!0,p.receiveShadow=!0,p.material=n.clone(),this.urinaryMaterials.push(p.material),p.userData={systemId:"urinary",structureId:"kidneys",structureName:"Riñón Izquierdo (Corteza, Médula, Pirámides y Pelvis Renal)",selectable:!0}}});const h=new mt().setFromObject(this.kidneyLeftMesh),d=new y;h.getSize(d);const u=new y;h.getCenter(u);const m=.115/(d.y||1);this.kidneyLeftMesh.scale.setScalar(m),this.kidneyLeftMesh.position.set(-u.x*m-.045,-u.y*m+1.13,-u.z*m-.025),this.group.add(this.kidneyLeftMesh),l()},void 0,()=>l())}),a=new Promise(l=>{e.load(Xt("models/kidney_right.glb"),c=>{this.kidneyRightMesh=c.scene,this.kidneyRightMesh.name="Anatomical_Kidney_R",this.kidneyRightMesh.traverse(v=>{if(v.isMesh){const p=v;p.castShadow=!0,p.receiveShadow=!0,p.material=n.clone(),this.urinaryMaterials.push(p.material),p.userData={systemId:"urinary",structureId:"kidneys",structureName:"Riñón Derecho (Corteza, Médula y Cápsula Renal)",selectable:!0}}});const h=new mt().setFromObject(this.kidneyRightMesh),d=new y;h.getSize(d);const u=new y;h.getCenter(u);const m=.115/(d.y||1);this.kidneyRightMesh.scale.setScalar(m),this.kidneyRightMesh.position.set(-u.x*m+.045,-u.y*m+1.115,-u.z*m-.025),this.group.add(this.kidneyRightMesh),l()},void 0,()=>l())}),o=new Promise(l=>{e.load(Xt("models/bladder.glb"),c=>{this.bladderMesh=c.scene,this.bladderMesh.name="Anatomical_Bladder",this.bladderMesh.traverse(v=>{if(v.isMesh){const p=v;p.castShadow=!0,p.receiveShadow=!0,p.material=i.clone(),this.urinaryMaterials.push(p.material),p.userData={systemId:"urinary",structureId:"urinary_bladder",structureName:"Vejiga Urinaria (Detrusor y Trígono Vesical)",selectable:!0}}});const h=new mt().setFromObject(this.bladderMesh),d=new y;h.getSize(d);const u=new y;h.getCenter(u);const m=.085/(d.y||1);this.bladderMesh.scale.setScalar(m),this.bladderMesh.position.set(-u.x*m,-u.y*m+.88,-u.z*m+.015),this.group.add(this.bladderMesh),l()},void 0,()=>l())});return await Promise.all([s,a,o]),this.isLoaded=!0,this.group}buildUreters(){const e=new Je({color:14598319,roughness:.38,metalness:.04,clearcoat:.65});this.urinaryMaterials.push(e);const t=new ut([new y(-.045,1.11,-.02),new y(-.038,1.04,-.015),new y(-.025,.96,-.005),new y(-.015,.89,.01)]),n=new zt(t,20,.0035,8,!1),i=new de(n,e);i.userData={systemId:"urinary",structureId:"urinary_bladder",structureName:"Uréter Izquierdo (Conducto Urotelial Retroperitoneal)",selectable:!0},this.uretersGroup.add(i);const s=new ut([new y(.045,1.095,-.02),new y(.038,1.03,-.015),new y(.025,.96,-.005),new y(.015,.89,.01)]),a=new zt(s,20,.0035,8,!1),o=new de(a,e);o.userData={systemId:"urinary",structureId:"urinary_bladder",structureName:"Uréter Derecho (Conducto Urotelial Retroperitoneal)",selectable:!0},this.uretersGroup.add(o)}setVisible(e){this.group.visible=e}setHighlight(e,t=1096065){this.urinaryMaterials.forEach(n=>{e?(n.emissive=new ye(t),n.emissiveIntensity=.5):(n.emissive=new ye(0),n.emissiveIntensity=0)})}setExploded(e){this.group.position.set(0,-e*.04,-e*.12)}}class sx{constructor(){A(this,"group");A(this,"id","endocrine");A(this,"name","Sistema Endocrino");A(this,"thymusMesh",null);A(this,"pancreasMesh",null);A(this,"thyroidMesh",null);A(this,"pituitaryMesh",null);A(this,"adrenalsGroup");A(this,"isLoaded",!1);A(this,"endocrineMaterials",[]);this.group=new ze,this.group.name="System_Endocrine",this.adrenalsGroup=new ze,this.adrenalsGroup.name="Adrenal_Glands",this.group.add(this.adrenalsGroup)}async load(e,t){this.buildThyroidPituitaryAndAdrenals();const n=new Promise(s=>{e.load(Xt("models/thymus.glb"),a=>{this.thymusMesh=a.scene,this.thymusMesh.name="Anatomical_Thymus";const o=new Je({color:11366528,roughness:.35,metalness:.05,clearcoat:.6,clearcoatRoughness:.2});this.thymusMesh.traverse(f=>{if(f.isMesh){const m=f;m.castShadow=!0,m.receiveShadow=!0,m.material=o.clone(),this.endocrineMaterials.push(m.material),m.userData={systemId:"endocrine",structureId:"thymus",structureName:"Timo (Lóbulos Bilaterales Mediastínicos)",selectable:!0}}});const l=new mt().setFromObject(this.thymusMesh),c=new y;l.getSize(c);const h=new y;l.getCenter(h);const u=.075/(c.y||1);this.thymusMesh.scale.setScalar(u),this.thymusMesh.position.set(-h.x*u,-h.y*u+1.39,-h.z*u+.035),this.group.add(this.thymusMesh),s()},void 0,()=>s())}),i=new Promise(s=>{e.load(Xt("models/pancreas.glb"),a=>{this.pancreasMesh=a.scene,this.pancreasMesh.name="Anatomical_Pancreas";const o=new Je({color:13933385,roughness:.38,metalness:.04,clearcoat:.68,clearcoatRoughness:.22});this.pancreasMesh.traverse(f=>{if(f.isMesh){const m=f;m.castShadow=!0,m.receiveShadow=!0,m.material=o.clone(),this.endocrineMaterials.push(m.material),m.userData={systemId:"endocrine",structureId:"endocrine_pancreas",structureName:"Páncreas (Islotes de Langerhans: Insulina y Glucagón)",selectable:!0}}});const l=new mt().setFromObject(this.pancreasMesh),c=new y;l.getSize(c);const h=new y;l.getCenter(h);const u=.14/(c.x||1);this.pancreasMesh.scale.setScalar(u),this.pancreasMesh.position.set(-h.x*u-.01,-h.y*u+1.135,-h.z*u+.01),this.group.add(this.pancreasMesh),s()},void 0,()=>s())});return await Promise.all([n,i]),this.isLoaded=!0,this.group}buildThyroidPituitaryAndAdrenals(){const e=new Je({color:9387065,roughness:.32,metalness:.05,clearcoat:.75,clearcoatRoughness:.2});this.endocrineMaterials.push(e);const t=new ze;t.name="Thyroid_Gland";const n=new Sn(.016,16,16);n.scale(.8,1.8,.9);const i=new de(n,e);i.position.set(.016,0,0),i.rotation.z=-.15,t.add(i);const s=new de(n,e);s.position.set(-.016,0,0),s.rotation.z=.15,t.add(s);const a=new ci(.007,.007,.024,12),o=new de(a,e);o.rotation.z=Math.PI/2,o.position.set(0,-.008,.006),t.add(o),t.position.set(0,1.485,.018),t.traverse(m=>{m.isMesh&&(m.userData={systemId:"endocrine",structureId:"thyroid",structureName:"Glándula Tiroides e Istmo (Hormonas T3, T4 y Calcitonina)",selectable:!0})}),this.thyroidMesh=t,this.group.add(t);const l=new Je({color:10771068,roughness:.35,metalness:.04,clearcoat:.65});this.endocrineMaterials.push(l);const c=new Sn(.008,16,16);c.scale(1.2,.9,1),this.pituitaryMesh=new de(c,l),this.pituitaryMesh.position.set(0,1.61,-.012),this.pituitaryMesh.userData={systemId:"endocrine",structureId:"pituitary",structureName:"Hipófisis / Pituitaria (Adenohipófisis y Neurohipófisis)",selectable:!0},this.group.add(this.pituitaryMesh);const h=new Je({color:13147963,roughness:.36,metalness:.04,clearcoat:.62});this.endocrineMaterials.push(h);const d=new Bo(.018,.024,16);d.scale(1.3,1,.8);const u=new de(d,h);u.position.set(-.045,1.19,-.025),u.rotation.z=-.2,u.userData={systemId:"endocrine",structureId:"adrenals",structureName:"Glándula Suprarrenal Izquierda (Corteza: Cortisol/Aldosterona; Médula: Adrenalina)",selectable:!0},this.adrenalsGroup.add(u);const f=new de(d,h);f.position.set(.045,1.175,-.025),f.rotation.z=.2,f.userData={systemId:"endocrine",structureId:"adrenals",structureName:"Glándula Suprarrenal Derecha (Corteza y Médula Suprarrenal)",selectable:!0},this.adrenalsGroup.add(f)}setVisible(e){this.group.visible=e}setHighlight(e,t=11032055){this.endocrineMaterials.forEach(n=>{e?(n.emissive=new ye(t),n.emissiveIntensity=.5):(n.emissive=new ye(0),n.emissiveIntensity=0)})}setExploded(e){this.group.position.set(0,e*.06,e*.1)}}class rx{constructor(){A(this,"group");A(this,"pedestalGroup");A(this,"skeletal");A(this,"muscular");A(this,"circulatory");A(this,"nervous");A(this,"digestive");A(this,"respiratory");A(this,"urinary");A(this,"endocrine");A(this,"skinGroup",null);A(this,"isSkinVisible",!1);A(this,"skinMaterial",null);A(this,"loader");A(this,"systemStates",{skeletal:!0,muscular:!0,circulatory:!0,nervous:!0,digestive:!0,respiratory:!0,urinary:!0,endocrine:!0});A(this,"isExploded",!1);A(this,"explodeFactor",0);A(this,"targetExplodeFactor",0);A(this,"isolatedStructureId",null);A(this,"pedestalRing",null);A(this,"haloLight",null);this.group=new ze,this.group.name="HumanBody_Master",this.pedestalGroup=new ze,this.pedestalGroup.name="Futuristic_Pedestal",this.group.add(this.pedestalGroup),this.loader=new Kh,this.skeletal=new Jv,this.muscular=new jv,this.circulatory=new Qv,this.nervous=new ex,this.digestive=new tx,this.respiratory=new nx,this.urinary=new ix,this.endocrine=new sx,this.group.add(this.skeletal.group),this.group.add(this.muscular.group),this.group.add(this.circulatory.group),this.group.add(this.nervous.group),this.group.add(this.digestive.group),this.group.add(this.respiratory.group),this.group.add(this.urinary.group),this.group.add(this.endocrine.group),this.buildLaboratoryPedestal()}buildLaboratoryPedestal(){const e=new ci(.85,.95,.08,48),t=new at({color:528672,metalness:.85,roughness:.25}),n=new de(e,t);n.position.y=-.04,n.receiveShadow=!0,this.pedestalGroup.add(n);const i=new Si(.72,.77,64),s=new sn({color:61695,side:St,transparent:!0,opacity:.85});this.pedestalRing=new de(i,s),this.pedestalRing.rotation.x=-Math.PI/2,this.pedestalRing.position.y=.003,this.pedestalGroup.add(this.pedestalRing);const a=new Si(.64,.66,48),o=new sn({color:14251782,side:St,transparent:!0,opacity:.65}),l=new de(a,o);l.rotation.x=-Math.PI/2,l.position.y=.004,this.pedestalGroup.add(l),this.haloLight=new Fs(61695,1.2,3.5),this.haloLight.position.set(0,.1,0),this.pedestalGroup.add(this.haloLight)}async loadAll(e){const t=[{sys:this.skeletal,name:"Sistema Óseo"},{sys:this.muscular,name:"Sistema Muscular"},{sys:this.circulatory,name:"Sistema Circulatorio"},{sys:this.nervous,name:"Sistema Nervioso"},{sys:this.digestive,name:"Sistema Digestivo"},{sys:this.respiratory,name:"Sistema Respiratorio"},{sys:this.urinary,name:"Sistema Urinario"},{sys:this.endocrine,name:"Sistema Endocrino"}];let n=0;const i=t.length+1;for(const s of t){e&&e(s.name,n/i);try{await s.sys.load(this.loader)}catch(a){console.warn(`[HumanBody] Error cargando ${s.name}:`,a)}n++,e&&e(s.name,n/i)}try{e&&e("Silueta Holográfica Corporal",n/i),await this.loadSkinSilhouette()}catch(s){console.warn("[HumanBody] No se pudo cargar la silueta de piel:",s)}}async loadSkinSilhouette(){return new Promise(e=>{this.loader.load(Xt("models/skin.glb"),t=>{this.skinGroup=t.scene,this.skinGroup.name="Holographic_Skin_Silhouette",this.skinMaterial=new Je({color:3718648,roughness:.22,metalness:.05,transmission:.7,transparent:!0,opacity:.14,depthWrite:!1,side:St}),this.skinGroup.traverse(i=>{if(i.isMesh){const s=i;s.material=this.skinMaterial,s.userData={systemId:null,structureId:"skin",structureName:"Silueta Humana (Piel Translúcida de Cristal)",selectable:!1}}});const n=1.75/1.8295;this.skinGroup.scale.setScalar(n),this.skinGroup.position.set(0,.875,0),this.skinGroup.visible=this.isSkinVisible,this.group.add(this.skinGroup),console.log("[HumanBody] Silueta corporal de piel holográfica cargada correctamente."),e()},void 0,t=>{console.warn("[HumanBody] Error al cargar skin.glb:",t),e()})})}toggleSkin(){return this.isSkinVisible=!this.isSkinVisible,this.skinGroup&&(this.skinGroup.visible=this.isSkinVisible),this.isSkinVisible}setSkinVisible(e){this.isSkinVisible=e,this.skinGroup&&(this.skinGroup.visible=e)}isSkinSilhouetteVisible(){return this.isSkinVisible}setSystemVisibility(e,t){switch(this.systemStates[e]=t,e){case"skeletal":this.skeletal.setVisible(t);break;case"muscular":this.muscular.setVisible(t);break;case"circulatory":this.circulatory.setVisible(t);break;case"nervous":this.nervous.setVisible(t);break;case"digestive":this.digestive.setVisible(t);break;case"respiratory":this.respiratory.setVisible(t);break;case"urinary":this.urinary.setVisible(t);break;case"endocrine":this.endocrine.setVisible(t);break}}toggleSystem(e){const t=!this.systemStates[e];return this.setSystemVisibility(e,t),t}isSystemVisible(e){return this.systemStates[e]}showAllSystems(){Object.keys(this.systemStates).forEach(e=>{this.setSystemVisibility(e,!0)})}showOnlySystem(e){Object.keys(this.systemStates).forEach(t=>{this.setSystemVisibility(t,t===e)})}toggleExplodedView(){return this.isExploded=!this.isExploded,this.targetExplodeFactor=this.isExploded?1:0,this.isExploded}getIsExploded(){return this.isExploded}isolateStructure(e){this.isolatedStructureId=e,this.group.traverse(t=>{if(t.isMesh&&t.userData&&t.userData.structureId){const n=t,i=n.userData.structureId===e,s=n.material;i?(s.opacity=1,s.transparent=!1,s.emissive=new ye(61695),s.emissiveIntensity=.45):(s.transparent=!0,s.opacity=.12,s.emissiveIntensity=0)}})}resetIsolation(){this.isolatedStructureId=null,this.group.traverse(e=>{if(e.isMesh&&e.userData&&e.userData.systemId){const n=e.material;n.transparent=!1,n.opacity=1,n.emissiveIntensity=0}}),Object.keys(this.systemStates).forEach(e=>{this.setSystemVisibility(e,this.systemStates[e])})}getIsolatedStructureId(){return this.isolatedStructureId}getSelectableMeshes(){const e=[];return this.group.traverse(t=>{if(t.isMesh&&t.userData&&t.userData.selectable){const n=t.userData.systemId;(!n||this.systemStates[n])&&e.push(t)}}),e}update(e,t){Math.abs(this.explodeFactor-this.targetExplodeFactor)>.001&&(this.explodeFactor+=(this.targetExplodeFactor-this.explodeFactor)*(e*6),this.skeletal.setExploded(this.explodeFactor),this.muscular.setExploded(this.explodeFactor),this.circulatory.setExploded(this.explodeFactor),this.nervous.setExploded(this.explodeFactor),this.digestive.setExploded(this.explodeFactor),this.respiratory.setExploded(this.explodeFactor),this.urinary.setExploded(this.explodeFactor),this.endocrine.setExploded(this.explodeFactor)),this.pedestalRing&&(this.pedestalRing.rotation.z=t*.15)}}const ws={skeletal:{id:"skeletal",name:"Sistema Óseo",latinName:"Systema skeletale",accentColor:"#e2e8f0",colorHex:15857145,icon:"🦴",overview:"Armazón rígido de 206 huesos que otorga soporte estructural, protege órganos vitales, permite el movimiento junto a los músculos y almacena calcio y fósforo.",organsCount:206,clinicalSignificance:"Fundamental en traumatología y ortopedia: fracturas, osteoporosis, artrosis, escoliosis y patología de la médula ósea hematopoyética.",learningObjectives:["Diferenciar entre esqueleto axial y apendicular","Identificar la anatomía del cráneo, columna vertebral y caja torácica","Comprender la función biomecánica de las articulaciones diartrodiales"]},muscular:{id:"muscular",name:"Sistema Muscular",latinName:"Systema musculare",accentColor:"#f43f5e",colorHex:14753096,icon:"💪",overview:"Más de 650 músculos esqueléticos que generan movimiento voluntario, mantienen la postura corporal, estabilizan articulaciones y producen calor metabólico.",organsCount:650,clinicalSignificance:"Miopatías, distrofias musculares, desgarros fibrilares, sarcopenia en el adulto mayor y síndrome compartimental.",learningObjectives:["Identificar los principales grupos musculares del tronco y extremidades","Reconocer el mecanismo de contracción por deslizamiento de actina y miosina","Comprender el control motor y la unión neuromuscular"]},circulatory:{id:"circulatory",name:"Sistema Circulatorio",latinName:"Systema cardiovasculare",accentColor:"#ef4444",colorHex:14427686,icon:"❤️",overview:"Circuito hemodinámico cerrado compuesto por el corazón y una extensa red de arterias, venas y capilares que transporta oxígeno, nutrientes y hormonas a todos los tejidos.",organsCount:3,clinicalSignificance:"Primera causa de morbimortalidad mundial: cardiopatía isquémica, infarto agudo de miocardio, hipertensión arterial e insuficiencia cardíaca.",learningObjectives:["Diferenciar la circulación mayor (sistémica) de la menor (pulmonar)","Identificar las cuatro cavidades cardíacas y el aparato valvular","Comprender el ciclo cardíaco (sístole y diástole) y el sistema de conducción"]},nervous:{id:"nervous",name:"Sistema Nervioso",latinName:"Systema nervosum",accentColor:"#38bdf8",colorHex:165063,icon:"🧠",overview:"Red de alta velocidad formada por el encéfalo, médula espinal y nervios periféricos encargada de percibir estímulos, procesar información y coordinar respuestas corporales.",organsCount:4,clinicalSignificance:"Eventos cerebrovasculares (EVC), epilepsia, enfermedades neurodegenerativas (Alzheimer, Parkinson), traumatismo craneoencefálico y esclerosis múltiple.",learningObjectives:["Identificar los lóbulos cerebrales, cerebelo y tronco encefálico","Trazar las vías motoras piramidales y sensitivas ascendentes en la médula espinal","Comprender la propagación del potencial de acción y la sinapsis"]},digestive:{id:"digestive",name:"Sistema Digestivo",latinName:"Systema digestorium",accentColor:"#f59e0b",colorHex:14251782,icon:"🥗",overview:"Tracto gastrointestinal desde la boca hasta el recto, acompañado de glándulas anexas (hígado, páncreas), destinado a la digestión, absorción de nutrientes y excreción.",organsCount:8,clinicalSignificance:"Úlcera péptica, cirrosis hepática, apendicitis aguda, pancreatitis, colelitiasis y enfermedades inflamatorias intestinales.",learningObjectives:["Seguir la ruta anatómica del bolo alimenticio y quimo","Identificar las funciones metabólicas del hígado y la vía biliar","Comprender la función exocrina pancreática y la motilidad por peristalsis"]},respiratory:{id:"respiratory",name:"Sistema Respiratorio",latinName:"Systema respiratorium",accentColor:"#06b6d4",colorHex:561586,icon:"🫁",overview:"Vías aéreas superiores e inferiores y pulmones que permiten el intercambio gaseoso (hematosis) entre el aire ambiental y la sangre capilar.",organsCount:5,clinicalSignificance:"EPOC, asma bronquial, neumonía, tromboembolia pulmonar, síndrome de dificultad respiratoria aguda y neumotórax.",learningObjectives:["Identificar la anatomía lobar pulmonar y el árbol bronquial","Comprender la mecánica ventilatoria de inspiración y espiración","Explicar la hematosis y la barrera alvéolo-capilar"]},urinary:{id:"urinary",name:"Sistema Urinario",latinName:"Systema urinarium",accentColor:"#10b981",colorHex:366185,icon:"💧",overview:"Compuesto por riñones, uréteres, vejiga y uretra. Filtra la sangre, elimina desechos metabólicos, regula el volumen plasmático, el equilibrio hidroelectrolítico y el pH.",organsCount:4,clinicalSignificance:"Insuficiencia renal aguda y crónica, glomerulonefritis, litiasis urinaria, infecciones de vías urinarias e hipertensión renovascular.",learningObjectives:["Identificar la corteza, médula y sistema pielocalicial renal","Describir el trayecto de los uréteres hacia la vejiga urinaria","Comprender los procesos de filtración glomerular, reabsorción y secreción tubular"]},endocrine:{id:"endocrine",name:"Sistema Endocrino",latinName:"Systema endocrinum",accentColor:"#a855f7",colorHex:9647082,icon:"⚡",overview:"Conjunto de glándulas secretoras que liberan hormonas al torrente sanguíneo para regular el crecimiento, metabolismo, balance electrolítico y reproducción.",organsCount:7,clinicalSignificance:"Diabetes mellitus, hipotiroidismo, hipertiroidismo, síndrome de Cushing, acromegalia y trastornos del eje hipotálamo-hipofisario.",learningObjectives:["Localizar las principales glándulas endocrinas en el eje corporal","Identificar la función del timo en la inmunocompetencia de linfocitos T","Comprender la retroalimentación hormonal negativa (feedback negativo)"]}},Wc={heart:{id:"heart",name:"Corazón",latinName:"Cor",systemId:"circulatory",description:"Órgano muscular hueco de cuatro cavidades que actúa como bomba impelente y aspirante central del sistema cardiovascular humano.",function:"Bombea sangre desoxigenada a los pulmones a través de la arteria pulmonar y sangre oxigenada al organismo a través de la arteria aorta.",location:"Mediastino medio de la cavidad torácica, descansando sobre el diafragma, entre ambos pulmones, inclinado hacia la izquierda.",clinicalPearls:["Gasto cardíaco en reposo: aprox. 5 litros/minuto (70 latidos/minuto x 70 ml/latido).","La arteria coronaria descendente anterior irriga gran parte del ventrículo izquierdo y el tabique.","El nódulo sinoauricular (marcapasos fisiológico) inicia el impulso a 60-100 lpm."],keyComponents:["Aurícula derecha","Ventrículo derecho","Aurícula izquierda","Ventrículo izquierdo","Aorta ascendente","Arteria pulmonar"],modelFile:"models/heart.glb",colorHex:13379894,highlightColorHex:16731501,tags:["miocardio","aorta","valvulas","ventriculo","auricula"],suggestedCameraOffset:[0,1.35,.75],suggestedLookAt:[0,1.3,0]},lungs:{id:"lungs",name:"Pulmones",latinName:"Pulmones",systemId:"respiratory",description:"Par de órganos esponjosos esenciales para la respiración. El pulmón derecho posee tres lóbulos y el izquierdo dos debido a la escotadura cardíaca.",function:"Efectúan el intercambio gaseoso (hematosis): incorporan oxígeno a los eritrocitos capilares y eliminan dióxido de carbono por difusión pasiva.",location:"Cavidad torácica, a ambos lados del mediastino, recubiertos por la pleura visceral y parietal.",clinicalPearls:["Superficie alveolar total de intercambio: aprox. 70 a 100 m² (equivalente a una cancha de tenis).","El surfactante pulmonar sintetizado por neumocitos tipo II previene el colapso alveolar.","El hilio pulmonar alberga la arteria pulmonar, venas pulmonares y el bronquio principal."],keyComponents:["Lóbulo superior derecho","Lóbulo medio","Lóbulo inferior derecho","Lóbulo superior izquierdo","Lóbulo inferior izquierdo","Árbol bronquial"],modelFile:"models/lungs.glb",colorHex:3718648,highlightColorHex:8246268,tags:["bronquios","alveolos","pleura","lobulos","hematosis"],suggestedCameraOffset:[0,1.35,.85],suggestedLookAt:[0,1.3,0]},brain:{id:"brain",name:"Encéfalo",latinName:"Encephalon",systemId:"nervous",description:"Centro de control maestro del cuerpo, compuesto por el cerebro (telencéfalo y diencéfalo), cerebelo y tronco del encéfalo.",function:"Procesa información sensorial, regula funciones motoras, gobierna la homeostasis autónoma y da soporte a las facultades cognitivas superiores.",location:"Cavidad craneal, protegido por las meninges (duramadre, aracnoides, piamadre) y el líquido cefalorraquídeo.",clinicalPearls:["Consume aproximadamente el 20% del oxígeno y glucosa corporal a pesar de representar solo el 2% del peso corporal.","El polígono de Willis asegura flujo colateral entre las arterias carótidas internas y vertebrales.","La barrera hematoencefálica protege el parénquima contra patógenos y toxinas circulantes."],keyComponents:["Lóbulo frontal","Lóbulo parietal","Lóbulo temporal","Lóbulo occipital","Cerebelo","Tronco encefálico"],modelFile:"models/brain.glb",colorHex:11032055,highlightColorHex:12616956,tags:["corteza","cerebelo","tronco","neuronas","sinapsis"],suggestedCameraOffset:[0,1.7,.65],suggestedLookAt:[0,1.65,0]},spinal_cord:{id:"spinal_cord",name:"Médula Espinal",latinName:"Medulla spinalis",systemId:"nervous",description:"Cordón cilíndrico de tejido neural que desciende desde el bulbo raquídeo a lo largo del canal vertebral hasta el nivel de L1-L2.",function:"Conduce impulsos motores eferentes desde el encéfalo y aferencias sensitivas hacia el mismo, además de coordinar reflejos espinales autónomos.",location:"Dentro del conducto raquídeo de la columna vertebral.",clinicalPearls:["Termina en el cono medular a nivel de L1-L2, continuándose como la cauda equina (cola de caballo).","La punción lumbar se realiza con seguridad en los espacios intervertebrales L3-L4 o L4-L5."],keyComponents:["Sustancia gris en mariposa","Cordones blancos anterior/lateral/posterior","Raíces dorsales y ventrales"],modelFile:"models/spinal_cord.glb",colorHex:3718648,highlightColorHex:6809849,tags:["reflejos","cono medular","vias motoras","sensibilidad"],suggestedCameraOffset:[0,1.4,.75],suggestedLookAt:[0,1.2,0]},liver:{id:"liver",name:"Hígado",latinName:"Hepar",systemId:"digestive",description:"La glándula más voluminosa del cuerpo humano, de color rojo pardo, situada en el hipocondrio derecho y epigastrio.",function:"Metaboliza carbohidratos, lípidos y proteínas; sintetiza albúmina y factores de coagulación; detoxifica xenobióticos y secreta bilis para digerir grasas.",location:"Hipocondrio derecho y epigastrio, debajo del hemidiafragma derecho, protegido por las costillas 7ª a 11ª.",clinicalPearls:["Recibe un doble aporte sanguíneo: 75% venoso de la vena porta (nutrientes intestinales) y 25% arterial de la arteria hepática.","Posee una extraordinaria capacidad de regeneración celular a partir de hepatocitos y células ovales."],keyComponents:["Lóbulo derecho","Lóbulo izquierdo","Lóbulo caudado","Lóbulo cuadrado","Hilio hepático","Vena porta"],modelFile:"models/liver.glb",colorHex:10033947,highlightColorHex:15680580,tags:["bilis","hepatocitos","metabolismo","vena porta","coagulacion"],suggestedCameraOffset:[0,1.15,.75],suggestedLookAt:[.08,1.1,0]},pancreas:{id:"pancreas",name:"Páncreas",latinName:"Pancreas",systemId:"endocrine",description:"Glándula mixta retroperitoneal alargada transversalmente en la pared posterior del abdomen.",function:"Función exocrina: secreta enzimas digestivas (amilasa, lipasa, tripsina) al duodeno. Función endocrina: los islotes de Langerhans secretan insulina y glucagón.",location:"Retroperitoneo, detrás del estómago, enmarcado por el marco duodenal a la derecha y en contacto con el bazo a la izquierda.",clinicalPearls:["Las células beta secretan insulina en respuesta a hiperglucemia; las células alfa secretan glucagón.","La autodigestión por activación prematura de enzimas zimógenas causa pancreatitis aguda grave."],keyComponents:["Cabeza","Cuello","Cuerpo","Cola","Conducto pancreático principal de Wirsung","Islotes de Langerhans"],modelFile:"models/pancreas.glb",colorHex:16096779,highlightColorHex:16498468,tags:["insulina","glucagon","enzimas","islotes","duodeno"],suggestedCameraOffset:[0,1.15,.65],suggestedLookAt:[0,1.1,0]},intestine_small:{id:"intestine_small",name:"Intestino Delgado",latinName:"Intestinum tenue",systemId:"digestive",description:"Tubo digestivo de aproximadamente 6 a 7 metros de longitud dividido en duodeno, yeyuno e íleon.",function:"Completa la digestión enzimática de los alimentos y absorbe agua, electrolitos, aminoácidos, monosacáridos y ácidos grasos hacia la circulación.",location:"Cavidad abdominal central e inferior, rodeado por el marco cólico del intestino grueso.",clinicalPearls:["Las microvellosidades y pliegues circulares multiplican la superficie absortiva hasta unos 250 m².","Las placas de Peyer en el íleon constituyen un componente crítico del sistema inmune asociado a mucosas (MALT)."],keyComponents:["Duodeno","Yeyuno","Íleon","Mesenterio","Vellosidades intestinales"],modelFile:"models/intestine_small.glb",colorHex:14251782,highlightColorHex:16096779,tags:["absorcion","yeyuno","ileon","duodeno","peristalsis"],suggestedCameraOffset:[0,.95,.75],suggestedLookAt:[0,.9,0]},intestine_large:{id:"intestine_large",name:"Intestino Grueso",latinName:"Intestinum crassum",systemId:"digestive",description:"Segmento terminal del tubo digestivo de 1.5 metros compuesto por ciego, apéndice, colon ascendente, transverso, descendente, sigmoide y recto.",function:"Reabsorbe agua y sales minerales, compacta las heces y alberga la microbiota comensal productora de vitaminas K y B.",location:"Enmarca la cavidad abdominal en forma de arco alrededor del intestino delgado.",clinicalPearls:["El apéndice cecal nace del fondo del ciego; su obstrucción luminal provoca apendicitis aguda, la urgencia quirúrgica más frecuente.","Se caracteriza por tenias cólicas, haustras y apéndices epiploicos."],keyComponents:["Ciego y apéndice","Colon ascendente","Colon transverso","Colon descendente","Colon sigmoide","Recto"],modelFile:"models/intestine_large.glb",colorHex:11817737,highlightColorHex:14251782,tags:["colon","ciego","recto","microbiota","apendice"],suggestedCameraOffset:[0,.95,.75],suggestedLookAt:[0,.9,0]},kidneys:{id:"kidneys",name:"Riñones",latinName:"Renes",systemId:"urinary",description:"Par de órganos retroperitoneales en forma de habichuela encargados de la depuración sanguínea y homeostasis hídrica.",function:"Filtran unos 180 litros de plasma diarios, forman la orina, regulan la presión arterial mediante el eje renina-angiotensina-aldosterona y estimulan la eritropoyesis (eritropoyetina).",location:"Espacio retroperitoneal paravertebral, entre T12 y L3; el riñón derecho se ubica ligeramente más bajo por la presencia del hígado.",clinicalPearls:["La nefrona es la unidad funcional; cada riñón alberga aproximadamente 1 a 1.2 millones de nefronas.","Filtrado glomerular normal: > 90 ml/min/1.73m²."],keyComponents:["Corteza renal","Médula y pirámides de Malpighi","Cálices menores y mayores","Pelvis renal","Arteria y vena renal"],modelFile:"models/kidney_left.glb",colorHex:366185,highlightColorHex:1096065,tags:["nefrona","filtracion","orina","eritropoyetina","renina"],suggestedCameraOffset:[0,1.1,.75],suggestedLookAt:[0,1.05,0]},bladder:{id:"bladder",name:"Vejiga Urinaria",latinName:"Vesica urinaria",systemId:"urinary",description:"Órgano muscular distensible situado en la pelvis menor que sirve de reservorio temporal de la orina antes de la micción.",function:"Almacena entre 300 y 500 ml de orina en condiciones fisiológicas normales; el músculo detrusor se contrae coordinadamente para el vaciamiento miccional.",location:"Pelvis menor, detrás de la sínfisis del pubis y anterior al recto (en el varón) o anterior al útero (en la mujer).",clinicalPearls:["El trígono vesical es una región triangular de base superior delimitada por las desembocaduras de ambos uréteres y el orificio uretral interno.","La inervación parasimpática (S2-S4) induce contracción del detrusor y relajación esfinteriana."],keyComponents:["Músculo detrusor","Trígono vesical","Orificios ureterales","Cuello vesical"],modelFile:"models/bladder.glb",colorHex:1096065,highlightColorHex:3462041,tags:["miccion","detrusor","trigono","pelvis","orina"],suggestedCameraOffset:[0,.8,.65],suggestedLookAt:[0,.75,0]},thymus:{id:"thymus",name:"Timo",latinName:"Thymus",systemId:"endocrine",description:"Órgano linfoide y endocrino bilobulado situado en el mediastino superior y anterior.",function:"Maduración y selección clonal de linfocitos T inmunocompetentes; secreta timosina y timopoyetina que modulan la respuesta inmunológica.",location:"Mediastino superior y anterior, por detrás del manubrio esternal y por delante de los grandes vasos y el pericardio.",clinicalPearls:["Alcanza su desarrollo y peso máximo relativo en la pubertad, sufriendo después una involución fisiológica con reemplazo por tejido adiposo.","La deleción cromosómica 22q11.2 (Síndrome de DiGeorge) cursa con aplasia tímica e inmunodeficiencia celular grave."],keyComponents:["Lóbulo derecho","Lóbulo izquierdo","Corteza tímica","Médula tímica y corpúsculos de Hassall"],modelFile:"models/thymus.glb",colorHex:9647082,highlightColorHex:11032055,tags:["linfocitos T","inmunidad","mediastino","hormonas"],suggestedCameraOffset:[0,1.45,.65],suggestedLookAt:[0,1.4,0]},skeleton:{id:"skeleton",name:"Esqueleto Completo",latinName:"Skeleton humanum",systemId:"skeletal",description:"Conjunto articulado de 206 huesos que conforman el esqueleto axial (cráneo, columna, costillas, esternón) y apendicular (cinturas escapular/pélvica y extremidades).",function:"Soporte mecánico antigravitatorio, palancas de locomoción, protección encefálica y visceral, y reservorio del 99% del calcio corporal.",location:"Eje axial y apendicular de toda la anatomía humana.",clinicalPearls:["El fémur es el hueso más largo y resistente del cuerpo humano.","La médula ósea roja del esternón, crestas ilíacas y cuerpos vertebrales es la sede principal de hematopoyesis en el adulto."],keyComponents:["Cráneo y mandíbula","Columna vertebral","Caja torácica","Cintura escapular","Cintura pélvica","Extremidades superiores e inferiores"],modelFile:"models/skeleton.glb",colorHex:15857145,highlightColorHex:3718648,tags:["huesos","femur","craneo","vertebras","calcio"],suggestedCameraOffset:[0,1,2.2],suggestedLookAt:[0,.9,0]},muscular:{id:"muscular",name:"Sistema Muscular Esquelético",latinName:"Systema musculare",systemId:"muscular",description:"177 grupos musculares reales segmentados anatómicamente: deltoides, pectorales, bíceps, rectos abdominales, cuádriceps, gemelos y aponeurosis tendinosas.",function:"Genera fuerza mecánica mediante el deslizamiento de filamentos de actina y miosina accionado por ATP y calcio, permitiendo la marcha, postura y estabilidad.",location:"Insertado a lo largo de todo el esqueleto axial y apendicular.",clinicalPearls:["El músculo más potente en relación a su tamaño es el masetero; el más largo es el sartorio.","La unión neuromuscular utiliza acetilcolina como neurotransmisor primordial."],keyComponents:["Pectoral mayor","Deltoides","Bíceps braquial","Recto abdominal","Cuádriceps femoral","Tendón de Aquiles"],modelFile:"models/muscles.glb",colorHex:14753096,highlightColorHex:16478597,tags:["musculos","deltoides","biceps","cuadriceps","contraccion"],suggestedCameraOffset:[0,1.1,1.6],suggestedLookAt:[0,1,0]},stomach:{id:"stomach",name:"Estómago y Esófago",latinName:"Gaster & Oesophagus",systemId:"digestive",description:"Dilatación en forma de J del tubo digestivo interpuesta entre el esófago y el duodeno.",function:"Digestión química mediante ácido clorhídrico (HCl) y pepsina, degradación mecánica del bolo alimenticio y formación del quimo.",location:"Hipocondrio izquierdo y epigastrio, bajo la cúpula hemidiafragmática izquierda.",clinicalPearls:["Las células parietales secretan ácido clorhídrico y factor intrínseco (esencial para absorber vitamina B12 en íleon).","La barrera mucosa gástrica resiste un pH luminal tan ácido como 1.5 a 2.0."],keyComponents:["Cardias","Fundus gástrico","Cuerpo","Antro","Píloro","Curvatura mayor","Curvatura menor"],modelFile:"models/intestine_small.glb",colorHex:10372918,highlightColorHex:16281969,tags:["estomago","acido","pepsina","quimo","fundus"],suggestedCameraOffset:[0,1.2,.7],suggestedLookAt:[-.03,1.15,0]},digestive_spleen:{id:"digestive_spleen",name:"Bazo",latinName:"Splen / Lien",systemId:"digestive",description:"Órgano linfoide y hemocaterético vascularizado situado en el hipocondrio izquierdo.",function:"Filtra la sangre eliminando eritrocitos senescentes (hemocateresis), almacena plaquetas y coordina respuestas inmunes humorales contra bacterias capsuladas.",location:"Hipocondrio izquierdo, posterolateral al estómago, protegido por las costillas 9ª a 11ª.",clinicalPearls:["Un traumatismo abdominal cerrado puede causar rotura esplénica con hemoperitoneo masivo por su rica vascularización.","Los pacientes esplenectomizados requieren vacunación obligatoria contra bacterias encapsuladas (Neumococo, Meningococo, Hib)."],keyComponents:["Pulpa roja (sinusoides y cordones de Billroth)","Pulpa blanca (folículos linfoides)","Cápsula fibroelástica","Arteria esplénica"],modelFile:"models/spleen.glb",colorHex:4855077,highlightColorHex:12616956,tags:["bazo","inmunidad","hemocateresis","linfocitos","plaquetas"],suggestedCameraOffset:[0,1.2,.65],suggestedLookAt:[-.08,1.17,0]},thyroid:{id:"thyroid",name:"Glándula Tiroides",latinName:"Glandula thyroidea",systemId:"endocrine",description:"Glándula neuroendocrina bilobulada en forma de mariposa unida por un istmo transversal.",function:"Sintetiza hormonas tiroideas (T4 tiroxina y T3 triyodotironina) para regular el metabolismo basal, así como calcitonina (células C para homeostasis del calcio).",location:"Región anterior del cuello, abrazando la tráquea por debajo del cartílago tiroides (C5-T1).",clinicalPearls:["La glándula tiroides depende del yodo dietético para la síntesis de hormonas; su deficiencia produce bocio endémico.","El nervio laríngeo recurrente transcurre íntimamente ligado a la cara posterior de los lóbulos tiroideos."],keyComponents:["Lóbulo derecho","Lóbulo izquierdo","Istmo tiroideo","Folículos tiroideos y coloide"],modelFile:"models/thymus.glb",colorHex:9387065,highlightColorHex:16007006,tags:["tiroides","metabolismo","T3","T4","calcitonina"],suggestedCameraOffset:[0,1.5,.55],suggestedLookAt:[0,1.48,0]}};class ax{constructor(e,t){A(this,"circulatory");A(this,"isEnabled",!0);A(this,"bpm",72);A(this,"timeAccumulator",0);A(this,"audioCallback");A(this,"hasTriggeredSystole",!1);this.circulatory=e,this.audioCallback=t}update(e){if(!this.isEnabled)return;const t=60/this.bpm;this.timeAccumulator=(this.timeAccumulator+e)%t;const n=this.timeAccumulator/t;let i=1;if(n<.15){const s=n/.15;i=1-Math.sin(s*Math.PI)*.12,this.hasTriggeredSystole||(this.hasTriggeredSystole=!0,this.audioCallback&&this.audioCallback())}else if(n<.35){const s=(n-.15)/.2;i=1+Math.sin(s*Math.PI)*.04,this.hasTriggeredSystole=!1}else i=1,this.hasTriggeredSystole=!1;this.circulatory.pulse(i)}setBPM(e){this.bpm=Math.max(40,Math.min(180,e))}getBPM(){return this.bpm}}class ox{constructor(){A(this,"group");A(this,"isEnabled",!0);A(this,"particleCount",280);A(this,"particlesMesh");A(this,"particlePositions");A(this,"particleColors");A(this,"particlePathProgress");A(this,"particleSpeeds");A(this,"particleTypes");A(this,"arterialPath");A(this,"venousPath");this.group=new ze,this.group.name="Hemodynamic_Flow",this.arterialPath=new ut([new y(-.01,1.34,.03),new y(-.015,1.38,.01),new y(-.02,1.25,-.02),new y(-.015,1.05,-.03),new y(0,.92,-.02),new y(.06,.85,0),new y(.075,.65,.01),new y(.07,.45,0)]),this.venousPath=new ut([new y(-.07,.45,0),new y(-.075,.65,.01),new y(-.06,.85,0),new y(.01,.92,-.02),new y(.015,1.05,-.02),new y(.018,1.22,-.02),new y(.02,1.34,.02)]),this.particlePositions=new Float32Array(this.particleCount*3),this.particleColors=new Float32Array(this.particleCount*3),this.particlePathProgress=new Float32Array(this.particleCount),this.particleSpeeds=new Float32Array(this.particleCount),this.particleTypes=new Uint8Array(this.particleCount);for(let n=0;n<this.particleCount;n++)this.particlePathProgress[n]=Math.random(),this.particleSpeeds[n]=.15+Math.random()*.12,this.particleTypes[n]=n%2===0?0:1,this.particleTypes[n]===0?(this.particleColors[n*3]=1,this.particleColors[n*3+1]=.15,this.particleColors[n*3+2]=.2):(this.particleColors[n*3]=0,this.particleColors[n*3+1]=.7,this.particleColors[n*3+2]=1);const e=new dt;e.setAttribute("position",new wt(this.particlePositions,3)),e.setAttribute("color",new wt(this.particleColors,3));const t=new bi({size:.012,vertexColors:!0,transparent:!0,opacity:.85,blending:xi,depthWrite:!1});this.particlesMesh=new es(e,t),this.group.add(this.particlesMesh)}update(e){if(!this.isEnabled){this.group.visible=!1;return}this.group.visible=!0;const t=this.particlesMesh.geometry.attributes.position,n=new y;for(let i=0;i<this.particleCount;i++){this.particlePathProgress[i]+=this.particleSpeeds[i]*e,this.particlePathProgress[i]>1&&(this.particlePathProgress[i]-=1),(this.particleTypes[i]===0?this.arterialPath:this.venousPath).getPoint(this.particlePathProgress[i],n);const a=i*.5,o=.003;n.x+=Math.cos(a)*o,n.z+=Math.sin(a)*o,this.particlePositions[i*3]=n.x,this.particlePositions[i*3+1]=n.y,this.particlePositions[i*3+2]=n.z}t.needsUpdate=!0}}class lx{constructor(e){A(this,"group");A(this,"respiratory");A(this,"isEnabled",!0);A(this,"bpm",14);A(this,"timeAccumulator",0);A(this,"particleCount",120);A(this,"particlesMesh");A(this,"particlePositions");A(this,"particleProgress");A(this,"tracheaCurve");this.respiratory=e,this.group=new ze,this.group.name="Airflow_Simulation",this.tracheaCurve=new ut([new y(0,1.58,.05),new y(0,1.48,.02),new y(0,1.4,.01),new y(.04,1.34,0)]),this.particlePositions=new Float32Array(this.particleCount*3),this.particleProgress=new Float32Array(this.particleCount);for(let i=0;i<this.particleCount;i++)this.particleProgress[i]=Math.random();const t=new dt;t.setAttribute("position",new wt(this.particlePositions,3));const n=new bi({size:.009,color:6809849,transparent:!0,opacity:.75,blending:xi,depthWrite:!1});this.particlesMesh=new es(t,n),this.group.add(this.particlesMesh)}update(e){if(!this.isEnabled){this.group.visible=!1;return}this.group.visible=!0;const t=60/this.bpm;this.timeAccumulator=(this.timeAccumulator+e)%t;const n=this.timeAccumulator/t;let i=1,s=!0;if(n<.4){const c=n/.4;i=1+Math.sin(c*Math.PI/2)*.12,s=!0}else if(n<.48)i=1.12,s=!0;else{const c=(n-.48)/.52;i=1.12-Math.sin(c*Math.PI/2)*.12,s=!1}this.respiratory.expand(i);const a=this.particlesMesh.geometry.attributes.position,o=new y,l=s?.35:-.3;for(let c=0;c<this.particleCount;c++)this.particleProgress[c]+=l*e,this.particleProgress[c]>1&&(this.particleProgress[c]-=1),this.particleProgress[c]<0&&(this.particleProgress[c]+=1),this.tracheaCurve.getPoint(this.particleProgress[c],o),o.x+=(Math.random()-.5)*.005,o.z+=(Math.random()-.5)*.005,this.particlePositions[c*3]=o.x,this.particlePositions[c*3+1]=o.y,this.particlePositions[c*3+2]=o.z;a.needsUpdate=!0}}class cx{constructor(){A(this,"group");A(this,"isEnabled",!0);A(this,"particleCount",70);A(this,"particlesMesh");A(this,"particlePositions");A(this,"particleProgress");A(this,"digestivePath");this.group=new ze,this.group.name="Digestive_Transit",this.digestivePath=new ut([new y(0,1.58,.04),new y(0,1.48,0),new y(0,1.35,-.01),new y(-.02,1.22,.02),new y(-.06,1.17,.03),new y(-.02,1.12,.03),new y(.01,1.08,.03),new y(-.03,1,.035),new y(.03,.95,.035),new y(.06,.9,.02),new y(.06,1.04,.02),new y(0,1.06,.03),new y(-.06,1.04,.02),new y(-.03,.88,.01)]),this.particlePositions=new Float32Array(this.particleCount*3),this.particleProgress=new Float32Array(this.particleCount);for(let n=0;n<this.particleCount;n++)this.particleProgress[n]=n/this.particleCount;const e=new dt;e.setAttribute("position",new wt(this.particlePositions,3));const t=new bi({size:.012,color:16096779,transparent:!0,opacity:.9,blending:xi,depthWrite:!1});this.particlesMesh=new es(e,t),this.group.add(this.particlesMesh)}update(e){if(!this.isEnabled){this.group.visible=!1;return}this.group.visible=!0;const t=this.particlesMesh.geometry.attributes.position,n=new y,i=.08;for(let s=0;s<this.particleCount;s++)this.particleProgress[s]+=i*e,this.particleProgress[s]>1&&(this.particleProgress[s]-=1),this.digestivePath.getPoint(this.particleProgress[s],n),n.x+=(Math.random()-.5)*.004,n.y+=(Math.random()-.5)*.004,this.particlePositions[s*3]=n.x,this.particlePositions[s*3+1]=n.y,this.particlePositions[s*3+2]=n.z;t.needsUpdate=!0}}class hx{constructor(){A(this,"group");A(this,"isEnabled",!0);A(this,"pulseCount",140);A(this,"pulsesMesh");A(this,"pulsePositions");A(this,"pulseProgress");A(this,"nerveCurves",[]);this.group=new ze,this.group.name="Neural_Action_Potentials",this.nerveCurves.push(new ut([new y(0,1.68,0),new y(0,1.58,-.01),new y(0,1.45,-.025),new y(0,1.25,-.03),new y(0,1.05,-.025)])),this.nerveCurves.push(new ut([new y(0,1.45,-.025),new y(.08,1.45,-.01),new y(.18,1.38,0),new y(.28,1.25,0),new y(.35,1.05,0)])),this.nerveCurves.push(new ut([new y(0,1.45,-.025),new y(-.08,1.45,-.01),new y(-.18,1.38,0),new y(-.28,1.25,0),new y(-.35,1.05,0)])),this.nerveCurves.push(new ut([new y(0,1.05,-.025),new y(.05,.95,-.02),new y(.08,.65,-.01),new y(.075,.45,-.01)])),this.nerveCurves.push(new ut([new y(0,1.05,-.025),new y(-.05,.95,-.02),new y(-.08,.65,-.01),new y(-.075,.45,-.01)])),this.pulsePositions=new Float32Array(this.pulseCount*3),this.pulseProgress=new Float32Array(this.pulseCount);for(let n=0;n<this.pulseCount;n++)this.pulseProgress[n]=Math.random();const e=new dt;e.setAttribute("position",new wt(this.pulsePositions,3));const t=new bi({size:.013,color:3718648,transparent:!0,opacity:.95,blending:xi,depthWrite:!1});this.pulsesMesh=new es(e,t),this.group.add(this.pulsesMesh)}update(e){if(!this.isEnabled){this.group.visible=!1;return}this.group.visible=!0;const t=this.pulsesMesh.geometry.attributes.position,n=new y,i=.55;for(let s=0;s<this.pulseCount;s++){this.pulseProgress[s]+=i*e,this.pulseProgress[s]>1&&(this.pulseProgress[s]-=1);const a=s%this.nerveCurves.length;this.nerveCurves[a].getPoint(this.pulseProgress[s],n),this.pulsePositions[s*3]=n.x,this.pulsePositions[s*3+1]=n.y,this.pulsePositions[s*3+2]=n.z}t.needsUpdate=!0}}class ux{constructor(){A(this,"group");A(this,"canvas");A(this,"ctx");A(this,"texture");A(this,"panelMesh");A(this,"frameMesh");A(this,"currentStructure",null);A(this,"width",1);A(this,"height",.65);this.group=new ze,this.group.name="Holographic_Info_Panel",this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=660,this.ctx=this.canvas.getContext("2d"),this.texture=new Th(this.canvas),this.texture.minFilter=Mt,this.texture.magFilter=Mt;const e=new Ei(this.width,this.height),t=new sn({map:this.texture,transparent:!0,opacity:.95,side:St});this.panelMesh=new de(e,t),this.group.add(this.panelMesh);const n=new Si(.35,.36,4);n.scale(1.4,.92,1);const i=new sn({color:61695,side:St,transparent:!0,opacity:.6});this.frameMesh=new de(n,i),this.frameMesh.position.z=-.002,this.group.add(this.frameMesh),this.group.position.set(.65,1.35,.35),this.group.rotation.y=-Math.PI/8,this.group.visible=!1,this.renderWelcomeScreen()}setStructure(e){if(this.currentStructure=e,this.renderStructureScreen(e),this.group.visible=!0,e.suggestedLookAt){const t=Math.max(1.1,e.suggestedLookAt[1]);this.group.position.set(.65,t,.35)}}hide(){this.group.visible=!1}show(){this.group.visible=!0}drawRoundedRect(e,t,n,i,s,a){typeof e.roundRect=="function"?e.roundRect(t,n,i,s,a):(e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+i-a,n),e.quadraticCurveTo(t+i,n,t+i,n+a),e.lineTo(t+i,n+s-a),e.quadraticCurveTo(t+i,n+s,t+i-a,n+s),e.lineTo(t+a,n+s),e.quadraticCurveTo(t,n+s,t,n+s-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath())}renderStructureScreen(e){const t=this.ctx,n=this.canvas.width,i=this.canvas.height,s=ws[e.systemId];t.clearRect(0,0,n,i);const a=t.createLinearGradient(0,0,n,i);a.addColorStop(0,"rgba(4, 9, 24, 0.92)"),a.addColorStop(1,"rgba(2, 6, 16, 0.96)"),t.fillStyle=a,this.drawRoundedRect(t,10,10,n-20,i-20,24),t.fill(),t.lineWidth=4,t.strokeStyle=s?s.accentColor:"#00f0ff",this.drawRoundedRect(t,10,10,n-20,i-20,24),t.stroke(),t.fillStyle="rgba(0, 240, 255, 0.08)",t.fillRect(10,10,n-20,90),t.font='600 20px "Segoe UI", Roboto, sans-serif',t.fillStyle="#00f0ff",t.fillText("PC PUMA – UNAM | HUMAN XR",36,44);const o=s?`${s.icon} ${s.name.toUpperCase()}`:"ANATOMÍA HUMANA";t.font='700 18px "Segoe UI", Roboto, sans-serif',t.fillStyle=s?s.accentColor:"#38bdf8",t.textAlign="right",t.fillText(o,n-36,44),t.textAlign="left",t.font='700 42px "Segoe UI", Roboto, sans-serif',t.fillStyle="#ffffff",t.fillText(e.name,36,88),t.font='italic 400 24px "Georgia", serif',t.fillStyle="#94a3b8",t.fillText(e.latinName,36+t.measureText(e.name).width+20,88),t.strokeStyle="rgba(255, 255, 255, 0.12)",t.lineWidth=1,t.beginPath(),t.moveTo(36,115),t.lineTo(n-36,115),t.stroke(),t.font='400 22px "Segoe UI", Roboto, sans-serif',t.fillStyle="#e2e8f0",this.wrapText(t,e.description,36,150,n-72,30);let l=225;t.font='700 22px "Segoe UI", Roboto, sans-serif',t.fillStyle="#38bdf8",t.fillText("⚡ FUNCIÓN FISIOLÓGICA",36,l),t.font='400 20px "Segoe UI", Roboto, sans-serif',t.fillStyle="#cbd5e1",l+=28,l=this.wrapText(t,e.function,36,l,n-72,28),l+=15,t.font='700 22px "Segoe UI", Roboto, sans-serif',t.fillStyle="#10b981",t.fillText("📍 LOCALIZACIÓN TOPOGRÁFICA",36,l),t.font='400 20px "Segoe UI", Roboto, sans-serif',t.fillStyle="#cbd5e1",l+=28,l=this.wrapText(t,e.location,36,l,n-72,28),e.clinicalPearls&&e.clinicalPearls.length>0&&(l+=15,t.font='700 22px "Segoe UI", Roboto, sans-serif',t.fillStyle="#f59e0b",t.fillText("🩺 CORRELACIÓN CLÍNICA ACADÉMICA",36,l),t.font='400 19px "Segoe UI", Roboto, sans-serif',t.fillStyle="#e2e8f0",l+=26,e.clinicalPearls.slice(0,2).forEach(c=>{l=this.wrapText(t,`• ${c}`,42,l,n-84,26),l+=6})),this.texture.needsUpdate=!0}renderWelcomeScreen(){const e=this.ctx,t=this.canvas.width,n=this.canvas.height;e.clearRect(0,0,t,n),e.fillStyle="rgba(4, 9, 24, 0.94)",this.drawRoundedRect(e,10,10,t-20,n-20,24),e.fill(),e.lineWidth=3,e.strokeStyle="#00f0ff",this.drawRoundedRect(e,10,10,t-20,n-20,24),e.stroke(),e.font='700 38px "Segoe UI", Roboto, sans-serif',e.fillStyle="#ffffff",e.textAlign="center",e.fillText("HUMAN XR",t/2,80),e.font='600 22px "Segoe UI", Roboto, sans-serif',e.fillStyle="#00f0ff",e.fillText("Laboratorio de Anatomía Humana Inmersiva",t/2,120),e.font='400 20px "Segoe UI", Roboto, sans-serif',e.fillStyle="#d97706",e.fillText("PC PUMA – Universidad Nacional Autónoma de México",t/2,155),e.font='400 20px "Segoe UI", Roboto, sans-serif',e.fillStyle="#94a3b8",e.fillText("Apunta con el controlador de Meta Quest o haz clic",t/2,220),e.fillText("sobre cualquier órgano para abrir su ficha médica.",t/2,255),e.textAlign="left",this.texture.needsUpdate=!0}wrapText(e,t,n,i,s,a){const o=t.split(" ");let l="",c=i;for(let h=0;h<o.length;h++){const d=l+o[h]+" ";e.measureText(d).width>s&&h>0?(e.fillText(l,n,c),l=o[h]+" ",c+=a):l=d}return e.fillText(l,n,c),c+a}update(e){this.group.visible&&this.group.lookAt(e.position.x,this.group.position.y,e.position.z)}}class dx{constructor(e){A(this,"app");A(this,"group");A(this,"laserRays",[]);A(this,"reticles",[]);A(this,"controllerTransforms",[new Ue,new Ue]);this.app=e,this.group=new ze,this.group.name="Quest_Controllers_Manager",this.setupControllerPointers()}setupControllerPointers(){const e=new Bs({color:61695,transparent:!0,opacity:.65,linewidth:2}),t=new Si(.015,.022,32),n=new sn({color:61695,side:St,transparent:!0,opacity:.85});for(let i=0;i<2;i++){const s=new dt().setFromPoints([new y(0,0,0),new y(0,0,-5)]),a=new ks(s,e.clone());a.name=`Laser_Ray_${i}`,this.laserRays.push(a);const o=new de(t,n.clone());o.name=`Reticle_${i}`,o.visible=!1,this.reticles.push(o),this.app.scene.nativeScene.add(o);const l=this.app.session.controllers[i];l&&l.add(a)}}updatePointers(e){const t=[];for(let n=0;n<2;n++){const i=this.app.raycastController(n,e,!0),s=this.laserRays[n],a=this.reticles[n];if(i&&i.length>0){const o=i[0];t.push({controllerIndex:n,intersection:o});const l=o.distance,c=s.geometry.attributes.position;c.setXYZ(1,0,0,-l),c.needsUpdate=!0,a.position.copy(o.point),o.face&&a.quaternion.setFromUnitVectors(new y(0,0,1),o.face.normal),a.visible=!0}else{t.push({controllerIndex:n,intersection:null});const o=s.geometry.attributes.position;o.setXYZ(1,0,0,-5),o.needsUpdate=!0,a.visible=!1}}return t}}class fx{constructor(e,t,n={}){A(this,"app");A(this,"controllers");A(this,"callbacks");A(this,"currentHoveredMesh",null);A(this,"originalEmissive",new ye(0,0,0));A(this,"originalIntensity",0);A(this,"mousePosition",new xe(-999,-999));A(this,"isPointerDown",!1);this.app=e,this.controllers=t,this.callbacks=n,this.setupDesktopEvents(),this.setupWebXREvents()}setupDesktopEvents(){const e=this.app.renderer.domElement;e.addEventListener("pointermove",t=>{const n=e.getBoundingClientRect();this.mousePosition.x=(t.clientX-n.left)/n.width*2-1,this.mousePosition.y=-((t.clientY-n.top)/n.height)*2+1}),e.addEventListener("pointerdown",()=>{this.isPointerDown=!0}),e.addEventListener("pointerup",t=>{if(this.isPointerDown&&(this.isPointerDown=!1,!this.app.session.isPresenting)){const n=this.app.raycastPointer(t);this.processHitSelection(n)}})}setupWebXREvents(){this.app.onControllerSelect((e,t)=>{const n=this.app.raycastController(e);this.processHitSelection(n)})}processHitSelection(e){if(!(!e||e.length===0))for(const t of e){const n=t.object;if(n.userData&&n.userData.selectable&&n.userData.structureId){this.callbacks.onSelect&&this.callbacks.onSelect(n.userData.structureId,n.userData.structureName||n.name,t.point);break}}}update(e){var n,i;let t=null;if(this.app.session.isPresenting){const s=this.controllers.updatePointers(e);for(const a of s)if(a.intersection&&((n=a.intersection.object.userData)!=null&&n.selectable)){t=a.intersection;break}}else if(this.mousePosition.x>-2&&this.mousePosition.y>-2){const s=new Yo;s.setFromCamera(this.mousePosition,this.app.camera);const a=s.intersectObjects(e,!0);a.length>0&&((i=a[0].object.userData)!=null&&i.selectable)&&(t=a[0])}if(t){const s=t.object;this.currentHoveredMesh!==s&&(this.clearHover(),this.setHover(s))}else this.currentHoveredMesh&&this.clearHover()}setHover(e){this.currentHoveredMesh=e;const t=e.material;t&&t.emissive&&(this.originalEmissive.copy(t.emissive),this.originalIntensity=t.emissiveIntensity||0,t.emissive.setHex(61695),t.emissiveIntensity=.45);const n=this.app.renderer.domElement;n.style.cursor="pointer",this.callbacks.onHover&&this.callbacks.onHover(e.userData.structureId,e.userData.structureName||e.name)}clearHover(){if(this.currentHoveredMesh){const t=this.currentHoveredMesh.material;t&&t.emissive&&(t.emissive.copy(this.originalEmissive),t.emissiveIntensity=this.originalIntensity),this.currentHoveredMesh=null}const e=this.app.renderer.domElement;e.style.cursor="default",this.callbacks.onHover&&this.callbacks.onHover(null,null)}}class px{constructor(e){A(this,"app");A(this,"capabilities",null);A(this,"onSessionChangeCallbacks",[]);this.app=e,this.initCapabilities(),this.setupSessionListeners()}async initCapabilities(){try{this.capabilities=await Hv(),console.log("[XRSessionManager] Meta Quest / WebXR capabilities:",this.capabilities)}catch(e){console.warn("[XRSessionManager] Capability detection warning:",e)}}setupSessionListeners(){this.app.session.onStateChange(async(e,t)=>{if(console.log(`[XRSessionManager] Session state changed: ${e?"ENTER VR":"EXIT VR"}`),e){const n=t||this.app.session.currentSession;if(n){try{await Jh(n,72)}catch(i){console.log("[XRSessionManager] Target frame rate negotiation skipped:",i)}try{const i=n.renderState.baseLayer;i&&"fixedFoveation"in i&&(i.fixedFoveation=1)}catch{}}}this.onSessionChangeCallbacks.forEach(n=>n(e))})}onSessionChange(e){return this.onSessionChangeCallbacks.push(e),()=>{this.onSessionChangeCallbacks=this.onSessionChangeCallbacks.filter(t=>t!==e)}}get isInVR(){return this.app.session.isPresenting}}class mx{constructor(e){A(this,"container");A(this,"humanBody");A(this,"buttons",new Map);this.humanBody=e,this.container=document.createElement("div"),this.container.className="systems-dock",this.render()}getElement(){return this.container}render(){var t,n;this.container.innerHTML=`
      <div class="systems-dock-header">
        <span>SISTEMAS ANATÓMICOS</span>
        <span style="font-size: 10px; color: #94a3b8;">8 CAPAS</span>
      </div>
      <div class="systems-list" id="systems-list-container"></div>
      <div class="system-dock-footer">
        <button class="btn-dock-action" id="btn-show-all-systems">Ver Todos</button>
        <button class="btn-dock-action" id="btn-hide-all-systems">Ocultar Todos</button>
      </div>
    `;const e=this.container.querySelector("#systems-list-container");Object.keys(ws).forEach(i=>{const s=ws[i],a=document.createElement("div");a.className="system-item-btn active",a.innerHTML=`
        <div class="system-item-left">
          <input type="checkbox" class="system-toggle-checkbox" checked id="chk-${i}">
          <span>${s.icon}</span>
          <span style="color: ${s.accentColor}; font-weight: 600;">${s.name}</span>
        </div>
      `;const o=a.querySelector("input");a.addEventListener("click",l=>{l.target!==o&&(o.checked=!o.checked);const c=o.checked;this.humanBody.setSystemVisibility(i,c),a.classList.toggle("active",c)}),o.addEventListener("change",()=>{this.humanBody.setSystemVisibility(i,o.checked),a.classList.toggle("active",o.checked)}),this.buttons.set(i,a),e.appendChild(a)}),(t=this.container.querySelector("#btn-show-all-systems"))==null||t.addEventListener("click",()=>{this.humanBody.showAllSystems(),this.buttons.forEach((i,s)=>{i.classList.add("active"),i.querySelector("input").checked=!0})}),(n=this.container.querySelector("#btn-hide-all-systems"))==null||n.addEventListener("click",()=>{Object.keys(ws).forEach(i=>{this.humanBody.setSystemVisibility(i,!1)}),this.buttons.forEach(i=>{i.classList.remove("active"),i.querySelector("input").checked=!1})})}updateSystemState(e,t){const n=this.buttons.get(e);n&&(n.classList.toggle("active",t),n.querySelector("input").checked=t)}}class gx{constructor(e={}){A(this,"container");A(this,"currentStructure",null);A(this,"isCurrentlyIsolated",!1);A(this,"callbacks");this.callbacks=e,this.container=document.createElement("div"),this.container.className="inspector-panel hidden",this.renderEmpty()}getElement(){return this.container}showStructure(e){this.currentStructure=e,this.container.classList.remove("hidden"),this.renderStructure(e)}hide(){this.container.classList.add("hidden")}renderEmpty(){this.container.innerHTML=`
      <div style="text-align: center; color: #94a3b8; font-size: 13px; padding: 20px 0;">
        Selecciona una estructura para visualizar su correlación médica.
      </div>
    `}renderStructure(e){var i,s,a;const t=ws[e.systemId];let n="";e.clinicalPearls&&e.clinicalPearls.length>0&&(n=`
        <div class="inspector-section">
          <span class="section-label">🩺 Correlación Clínica UNAM</span>
          <div class="clinical-box">
            ${e.clinicalPearls.map(o=>`<p style="margin-bottom: 6px;">• ${o}</p>`).join("")}
          </div>
        </div>
      `),this.container.innerHTML=`
      <div class="inspector-header">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="inspector-system-tag" style="color: ${t?t.accentColor:"#00f0ff"};">
            ${t?`${t.icon} ${t.name}`:"ANATOMÍA"}
          </span>
          <button id="btn-close-inspector" style="background:none; border:none; color:#94a3b8; font-size:16px; cursor:pointer;">✕</button>
        </div>
        <div class="inspector-title">${e.name}</div>
        <div class="inspector-latin">${e.latinName}</div>
      </div>

      <div class="inspector-section">
        <span class="section-label">Descripción General</span>
        <div class="section-body">${e.description}</div>
      </div>

      <div class="inspector-section">
        <span class="section-label">⚡ Función Fisiológica</span>
        <div class="section-body">${e.function}</div>
      </div>

      <div class="inspector-section">
        <span class="section-label">📍 Ubicación Topográfica</span>
        <div class="section-body">${e.location}</div>
      </div>

      ${n}

      <div class="inspector-actions">
        <button class="btn-inspector-action" id="btn-isolate-organ">
          ${this.isCurrentlyIsolated?"Quitar Aislamiento":"🔍 Aislar Órgano"}
        </button>
        <button class="btn-inspector-action" id="btn-read-aloud" style="flex: 0 0 44px;" title="Lectura Médica en Audio">
          🔊
        </button>
      </div>
    `,(i=this.container.querySelector("#btn-close-inspector"))==null||i.addEventListener("click",()=>{this.hide(),this.callbacks.onClose&&this.callbacks.onClose()}),(s=this.container.querySelector("#btn-isolate-organ"))==null||s.addEventListener("click",()=>{this.isCurrentlyIsolated=!this.isCurrentlyIsolated,this.isCurrentlyIsolated?this.callbacks.onIsolate&&this.callbacks.onIsolate(e.id):this.callbacks.onResetIsolation&&this.callbacks.onResetIsolation(),this.renderStructure(e)}),(a=this.container.querySelector("#btn-read-aloud"))==null||a.addEventListener("click",()=>{this.readAloud(e)})}readAloud(e){if("speechSynthesis"in window){window.speechSynthesis.cancel();const t=`${e.name}. ${e.description} Función: ${e.function}`,n=new SpeechSynthesisUtterance(t);n.lang="es-MX",n.rate=1,window.speechSynthesis.speak(n)}}setIsolateState(e){this.isCurrentlyIsolated=e,this.currentStructure&&this.renderStructure(this.currentStructure)}}class _x{constructor(e={}){A(this,"container");A(this,"callbacks");this.callbacks=e,this.container=document.createElement("div"),this.container.className="bottom-controls-bar",this.render()}getElement(){return this.container}render(){var i,s,a,o,l,c,h;this.container.innerHTML=`
      <button class="control-btn" id="btn-toggle-exploded" title="Separar los sistemas anatómicos en capas espaciales">
        <span>✨</span> Vista Desglosada
      </button>

      <button class="control-btn" id="btn-toggle-skin" title="Mostrar u ocultar la silueta humana de cristal">
        <span>👤</span> Silueta Cristal
      </button>

      <button class="control-btn active" id="btn-toggle-physiology" title="Activar/Pausar animaciones fisiológicas de latido, respiración y peristalsis">
        <span>💓</span> Simulación Fisiológica
      </button>

      <button class="control-btn btn-quiz" id="btn-open-quiz" title="Evaluación Anatómica interactiva UNAM">
        <span>📝</span> Evaluación UNAM
      </button>

      <div class="separator"></div>

      <button class="control-btn" id="btn-preset-frontal" title="Vista Anterior / Frontal">
        Frontal
      </button>
      <button class="control-btn" id="btn-preset-posterior" title="Vista Posterior">
        Posterior
      </button>
      <button class="control-btn" id="btn-preset-lateral" title="Vista Lateral">
        Lateral
      </button>
      <button class="control-btn" id="btn-preset-torax" title="Enfoque Tórax (Corazón / Pulmones)">
        Tórax
      </button>
      <button class="control-btn" id="btn-preset-cabeza" title="Enfoque Cabeza (Encéfalo / Cráneo)">
        Encéfalo
      </button>

      <div class="separator"></div>

      <button class="control-btn" id="btn-reset-view" title="Restablecer Posición Original">
        <span>🔄</span> Restablecer
      </button>
    `;const e=this.container.querySelector("#btn-toggle-exploded");e.addEventListener("click",()=>{if(this.callbacks.onToggleExploded){const d=this.callbacks.onToggleExploded();e.classList.toggle("active",d)}});const t=this.container.querySelector("#btn-toggle-skin");t.addEventListener("click",()=>{if(this.callbacks.onToggleSkin){const d=this.callbacks.onToggleSkin();t.classList.toggle("active",d)}});const n=this.container.querySelector("#btn-toggle-physiology");n.addEventListener("click",()=>{if(this.callbacks.onTogglePhysiology){const d=this.callbacks.onTogglePhysiology();n.classList.toggle("active",d)}}),(i=this.container.querySelector("#btn-open-quiz"))==null||i.addEventListener("click",()=>{this.callbacks.onOpenQuiz&&this.callbacks.onOpenQuiz()}),(s=this.container.querySelector("#btn-preset-frontal"))==null||s.addEventListener("click",()=>{this.callbacks.onCameraPreset&&this.callbacks.onCameraPreset("frontal")}),(a=this.container.querySelector("#btn-preset-posterior"))==null||a.addEventListener("click",()=>{this.callbacks.onCameraPreset&&this.callbacks.onCameraPreset("posterior")}),(o=this.container.querySelector("#btn-preset-lateral"))==null||o.addEventListener("click",()=>{this.callbacks.onCameraPreset&&this.callbacks.onCameraPreset("lateral")}),(l=this.container.querySelector("#btn-preset-torax"))==null||l.addEventListener("click",()=>{this.callbacks.onCameraPreset&&this.callbacks.onCameraPreset("torax")}),(c=this.container.querySelector("#btn-preset-cabeza"))==null||c.addEventListener("click",()=>{this.callbacks.onCameraPreset&&this.callbacks.onCameraPreset("cabeza")}),(h=this.container.querySelector("#btn-reset-view"))==null||h.addEventListener("click",()=>{this.callbacks.onResetView&&this.callbacks.onResetView()})}}class vx{constructor(e={}){A(this,"overlay");A(this,"card");A(this,"callbacks");this.callbacks=e,this.overlay=document.createElement("div"),this.overlay.className="modal-overlay",this.card=document.createElement("div"),this.card.className="modal-card",this.overlay.appendChild(this.card),this.render()}getElement(){return this.overlay}close(){this.overlay.classList.add("hidden"),this.callbacks.onStart&&this.callbacks.onStart()}open(){this.overlay.classList.remove("hidden")}render(){var e;this.card.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="modal-badge">PC PUMA – UNAM | INNOVACIÓN EDUCATIVA</span>
        <span style="font-size: 12px; color: #00f0ff; font-weight: 700;">DEMO TECNOLÓGICA</span>
      </div>

      <div>
        <div class="modal-title">
          HUMAN <span>XR</span>
        </div>
        <div style="color: #94a3b8; font-size: 14px; margin-top: 4px;">
          Laboratorio de Anatomía Humana Inmersiva para Meta Quest 3 & 3S
        </div>
      </div>

      <div class="modal-description">
        Bienvenido al entorno tridimensional de aprendizaje anatómico de la Universidad Nacional Autónoma de México. Explora el cuerpo humano a través de 8 sistemas anatómicos interactivos, visualiza simulaciones fisiológicas en tiempo real y evalúa tus conocimientos morfológicos.
      </div>

      <div class="controls-guide-grid">
        <div class="guide-column">
          <h4>🖥️ MODO ESCRITORIO</h4>
          <ul>
            <li><strong>Clic + Arrastrar:</strong> Rotar el modelo 3D</li>
            <li><strong>Rueda del ratón:</strong> Acercar / Alejar zoom</li>
            <li><strong>Clic en órgano:</strong> Abrir ficha médica y aislar</li>
            <li><strong>Barra inferior:</strong> Vistas, capas y quiz</li>
          </ul>
        </div>
        <div class="guide-column">
          <h4>🥽 META QUEST 3 / 3S</h4>
          <ul>
            <li><strong>Puntero Láser:</strong> Apuntar a los órganos</li>
            <li><strong>Gatillo (Trigger):</strong> Seleccionar estructura</li>
            <li><strong>Stick Analógico:</strong> Rotación y navegación</li>
            <li><strong>Botón 'Modo VR':</strong> Entrar en WebXR inmersivo</li>
          </ul>
        </div>
      </div>

      <button class="btn-primary-action" id="btn-enter-lab">
        INGRESAR AL LABORATORIO ANATÓMICO ➔
      </button>
    `,(e=this.card.querySelector("#btn-enter-lab"))==null||e.addEventListener("click",()=>{this.close()})}}const vi=[{id:"q1",systemId:"circulatory",question:"¿Cuál es la función principal de la arteria aorta al emerger del ventrículo izquierdo?",options:["Distribuir sangre ricamente oxigenada a todo el árbol arterial sistémico","Transportar sangre desoxigenada hacia los alvéolos pulmonares","Filtrar productos de desecho nitrogenado hacia la vena cava","Regular directamente la síntesis de eritropoyetina"],correctIndex:0,explanation:"La arteria aorta nace del ventrículo izquierdo y es el tronco de origen de todo el sistema arterial sistémico que distribuye sangre oxigenada a los tejidos.",clinicalNote:"La disección aórtica tipo A de Stanford es una emergencia cardiovascular absoluta con alta mortalidad sin resolución quirúrgica inmediata.",targetStructureId:"heart"},{id:"q2",systemId:"respiratory",question:"¿Por qué el pulmón izquierdo posee dos lóbulos en comparación con los tres del pulmón derecho?",options:["Para acomodar el mediastino medio y la escotadura cardíaca del corazón inclinado a la izquierda","Por una menor demanda metabólica del hemitórax izquierdo","Debido a la ausencia de ramas del árbol bronquial izquierdo","Para permitir mayor movilidad al hemidiafragma izquierdo"],correctIndex:0,explanation:"El corazón ocupa una posición oblicua en el mediastino medio con su vértice apuntando hacia la izquierda, generando la escotadura cardíaca en el pulmón izquierdo.",clinicalNote:"La língula del pulmón izquierdo es el equivalente anatómico homologable al lóbulo medio del pulmón derecho.",targetStructureId:"lungs"},{id:"q3",systemId:"urinary",question:"¿En qué estructura histofuncional del riñón se produce el ultrafiltrado inicial del plasma sanguíneo?",options:["En el corpúsculo renal (glomérulo y cápsula de Bowman) de la corteza renal","En el asa de Henle de la médula interna","En la pelvis renal y cálices mayores","En el esfínter uretral interno vesical"],correctIndex:0,explanation:"La barrera de filtración glomerular en el corpúsculo renal filtra agua y pequeños solutos del plasma, generando unos 180 L de ultrafiltrado al día.",clinicalNote:"La presencia persistente de proteinuria o hematuria glomerular orienta hacia nefropatías primarias o secundarias a diabetes o hipertensión.",targetStructureId:"kidneys"},{id:"q4",systemId:"digestive",question:"¿Qué gran vaso sanguíneo transporta la mayor parte de los nutrientes absorbidos en el intestino directamente hacia el hígado?",options:["La vena porta hepática (confluencia mesentérica superior y esplénica)","La arteria hepática propia","La vena cava inferior","El conducto torácico linfático"],correctIndex:0,explanation:"La vena porta aporta aproximadamente el 75% del flujo sanguíneo hepático total, cargada de aminoácidos, monosacáridos y nutrientes digeridos para su procesamiento.",clinicalNote:"La hipertensión portal secundaria a cirrosis hepática genera várices esofágicas, esplenomegalia y ascitis clínica.",targetStructureId:"liver"},{id:"q5",systemId:"nervous",question:"¿A qué nivel de la columna vertebral finaliza habitualmente el cono medular de la médula espinal en el adulto sano?",options:["A nivel del disco intervertebral L1 - L2","A nivel del sacro (S1 - S2)","A nivel de la última vértebra torácica (T12)","A nivel de la quinta vértebra lumbar (L5)"],correctIndex:0,explanation:"Debido al crecimiento diferencial de la columna vertebral sobre la médula durante el desarrollo embrionario, el cono medular termina en L1-L2 en el adulto.",clinicalNote:"La punción lumbar y la anestesia raquídea se efectúan con seguridad en L3-L4 o L4-L5 para evitar lesionar la médula espinal.",targetStructureId:"spinal_cord"},{id:"q6",systemId:"endocrine",question:"¿Cuál es el rol primordial del timo en el sistema endocrino e inmunológico durante las primeras etapas de la vida?",options:["Diferenciación, maduración y selección clonal positiva/negativa de linfocitos T","Síntesis de tiroxina y triyodotironina libre","Producción de insulina y glucagón postprandial","Almacenamiento y liberación de catecolaminas suprarrenales"],correctIndex:0,explanation:"El timo es el órgano linfoide primario donde los precursores tímicos adquieren el receptor TCR y aprenden la tolerancia hacia lo propio antes de salir a la periferia.",clinicalNote:"El síndrome de DiGeorge (deleción 22q11.2) cursa con aplasia o hipoplasia tímica e inmunodeficiencia celular grave susceptible a infecciones oportunistas.",targetStructureId:"thymus"},{id:"q7",systemId:"skeletal",question:"¿Cuál es el hueso más largo y resistente del esqueleto humano que articula proximalmente con el acetábulo pélvico?",options:["El fémur","La tibia","El húmero","El radio"],correctIndex:0,explanation:"El fémur soporta enormes fuerzas de compresión durante la marcha y la bipedestación, articulando con el cótilo o acetábulo en la articulación coxofemoral.",clinicalNote:"Las fracturas del cuello femoral en pacientes geriátricos con osteoporosis conllevan alto riesgo de necrosis avascular de la cabeza femoral.",targetStructureId:"skeleton"},{id:"q8",systemId:"digestive",question:"¿Qué porción del intestino delgado recibe el quimo ácido gástrico junto con el jugo pancreático y la bilis por la ampolla de Vater?",options:["El duodeno (segunda porción o descendente)","El yeyuno medio","El íleon terminal","El colon ascendente"],correctIndex:0,explanation:"El conducto colédoco y el conducto pancreático de Wirsung desembocan juntos en la papila duodenal mayor (ampolla de Vater) en la segunda porción del duodeno.",clinicalNote:"La coledocolitiasis obstructiva en la ampolla duodenal puede desencadenar pancreatitis aguda litiásica por reflujo de enzimas activadas.",targetStructureId:"intestine_small"},{id:"q9",systemId:"endocrine",question:"¿Qué población celular de los islotes de Langerhans en el páncreas se encarga de sintetizar la hormona insulina?",options:["Células beta (aprox. 65-70% del islote)","Células alfa (productoras de glucagón)","Células delta (productoras de somatostatina)","Células acinares exocrinas"],correctIndex:0,explanation:"Las células beta secretan insulina en respuesta al aumento de glucemia plasmática para facilitar la captación celular de glucosa.",clinicalNote:"La destrucción autoinmune mediada por linfocitos T contra las células beta origina la Diabetes Mellitus Tipo 1.",targetStructureId:"pancreas"},{id:"q10",systemId:"muscular",question:"¿Qué músculo potente de la cintura escapular es el principal abductor del brazo a partir de los 15 grados y le da forma al hombro?",options:["Músculo deltoides","Músculo pectoral mayor","Músculo bíceps braquial","Músculo dorsal ancho"],correctIndex:0,explanation:"El músculo supraespinoso inicia los primeros 15° de abducción, y el deltoides ejecuta la abducción potente del brazo hasta los 90° o más.",clinicalNote:"La lesión del nervio axilar (circunflejo) por luxación anterior de hombro o fractura del cuello quirúrgico del húmero causa parálisis del deltoides.",targetStructureId:"muscular"}];class xx{constructor(e={}){A(this,"overlay");A(this,"card");A(this,"callbacks");A(this,"currentIndex",0);A(this,"score",0);A(this,"hasAnsweredCurrent",!1);this.callbacks=e,this.overlay=document.createElement("div"),this.overlay.className="modal-overlay hidden",this.card=document.createElement("div"),this.card.className="modal-card",this.overlay.appendChild(this.card),this.overlay.addEventListener("click",t=>{t.target===this.overlay&&this.close()})}getElement(){return this.overlay}open(){this.currentIndex=0,this.score=0,this.hasAnsweredCurrent=!1,this.overlay.classList.remove("hidden"),this.renderQuestion()}close(){this.overlay.classList.add("hidden"),this.callbacks.onClose&&this.callbacks.onClose()}renderQuestion(){var a;const e=vi[this.currentIndex];this.hasAnsweredCurrent=!1,e.targetStructureId&&this.callbacks.onFocusStructure&&this.callbacks.onFocusStructure(e.targetStructureId);const t=(this.currentIndex+1)/vi.length*100;this.card.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="modal-badge">EVALUACIÓN MÉDICA | PREGUNTA ${this.currentIndex+1} DE ${vi.length}</span>
        <button id="btn-close-quiz" style="background:none; border:none; color:#94a3b8; font-size:18px; cursor:pointer;">✕</button>
      </div>

      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${t}%;"></div>
      </div>

      <div class="modal-title" style="font-size: 20px; line-height: 1.4;">
        ${e.question}
      </div>

      <div class="quiz-options-list" id="quiz-options-container"></div>

      <div id="quiz-feedback-container" style="display: none;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
        <span style="font-size: 13px; color: #94a3b8;">Aciertos: <strong style="color: #00f0ff;">${this.score}</strong> / ${vi.length}</span>
        <button class="btn-primary-action" id="btn-next-question" style="display: none; width: auto; padding: 10px 20px; font-size: 14px;">
          ${this.currentIndex<vi.length-1?"Siguiente Pregunta ➔":"Ver Calificación Final ➔"}
        </button>
      </div>
    `,(a=this.card.querySelector("#btn-close-quiz"))==null||a.addEventListener("click",()=>this.close());const n=this.card.querySelector("#quiz-options-container"),i=this.card.querySelector("#quiz-feedback-container"),s=this.card.querySelector("#btn-next-question");e.options.forEach((o,l)=>{const c=document.createElement("button");c.className="quiz-option-btn",c.textContent=`${String.fromCharCode(65+l)}) ${o}`,c.addEventListener("click",()=>{if(this.hasAnsweredCurrent)return;this.hasAnsweredCurrent=!0;const h=l===e.correctIndex;if(h)this.score++,c.classList.add("correct"),this.callbacks.onSoundCorrect&&this.callbacks.onSoundCorrect();else{c.classList.add("incorrect");const d=n.children[e.correctIndex];d&&d.classList.add("correct"),this.callbacks.onSoundIncorrect&&this.callbacks.onSoundIncorrect()}i.style.display="block",i.className="quiz-feedback-box",i.innerHTML=`
          <div style="font-weight: 700; color: ${h?"#10b981":"#ef4444"}; margin-bottom: 6px;">
            ${h?"✓ ¡Respuesta Correcta!":"✗ Respuesta Incorrecta"}
          </div>
          <div>${e.explanation}</div>
          <div style="margin-top: 6px; font-size: 12px; color: #fbbf24;">🩺 <strong>Nota Clínica:</strong> ${e.clinicalNote}</div>
        `,s.style.display="inline-block"}),n.appendChild(c)}),s.addEventListener("click",()=>{this.currentIndex<vi.length-1?(this.currentIndex++,this.renderQuestion()):this.renderResults()})}renderResults(){var i,s;const e=vi.length,t=Math.round(this.score/e*100),n=t>=70;this.card.innerHTML=`
      <div style="text-align: center; display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <span class="modal-badge">REPORTE FINAL DE EVALUACIÓN</span>
        
        <div style="font-size: 64px;">${n?"🏆":"📚"}</div>
        
        <div class="modal-title">
          ${n?"¡Excelente Desempeño Anatómico!":"Evaluación Completada"}
        </div>

        <div style="font-size: 36px; font-weight: 900; color: ${n?"#10b981":"#f59e0b"};">
          ${t}%
        </div>

        <div style="color: #cbd5e1; font-size: 15px; max-width: 440px; line-height: 1.5;">
          Has obtenido <strong>${this.score} de ${e}</strong> aciertos en los módulos de ciencias morfológicas de PC PUMA – UNAM.
        </div>

        <div style="width: 100%; display: flex; gap: 12px; margin-top: 10px;">
          <button class="btn-primary-action" id="btn-restart-quiz" style="flex: 1;">
            🔄 Reintentar Evaluación
          </button>
          <button class="btn-primary-action" id="btn-finish-quiz" style="flex: 1; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff;">
            Regresar al Laboratorio
          </button>
        </div>
      </div>
    `,(i=this.card.querySelector("#btn-restart-quiz"))==null||i.addEventListener("click",()=>{this.currentIndex=0,this.score=0,this.renderQuestion()}),(s=this.card.querySelector("#btn-finish-quiz"))==null||s.addEventListener("click",()=>{this.close()})}}class yx{constructor(e){A(this,"app");A(this,"sceneMgr");A(this,"cameraMgr");A(this,"humanBody");A(this,"sessionMgr");A(this,"cardiacAnim");A(this,"circulationAnim");A(this,"respiratoryAnim");A(this,"digestiveAnim");A(this,"nervousAnim");A(this,"holographicPanel3D");A(this,"controllers");A(this,"raycaster");A(this,"systemSelectorUI");A(this,"infoPanelUI");A(this,"controlsUI");A(this,"welcomeModalUI");A(this,"quizModalUI");A(this,"isPhysiologyActive",!0);this.app=new Kv({container:e,enableShadows:!0,enableGrid:!1,backgroundColor:198418,cameraPosition:[0,1.35,2.2],autoVRButton:!1,runtime:"webxr",questOptimization:!0,targetFrameRate:72}),this.sceneMgr=new $v(this.app),this.cameraMgr=new Zv(this.app),this.humanBody=new rx,this.app.scene.nativeScene.add(this.humanBody.group),this.cardiacAnim=new ax(this.humanBody.circulatory,()=>{this.playHeartbeatSound()}),this.circulationAnim=new ox,this.app.scene.nativeScene.add(this.circulationAnim.group),this.respiratoryAnim=new lx(this.humanBody.respiratory),this.app.scene.nativeScene.add(this.respiratoryAnim.group),this.digestiveAnim=new cx,this.app.scene.nativeScene.add(this.digestiveAnim.group),this.nervousAnim=new hx,this.app.scene.nativeScene.add(this.nervousAnim.group),this.holographicPanel3D=new ux,this.app.scene.nativeScene.add(this.holographicPanel3D.group),this.controllers=new dx(this.app),this.app.scene.nativeScene.add(this.controllers.group),this.sessionMgr=new px(this.app),this.raycaster=new fx(this.app,this.controllers,{onHover:(t,n)=>{},onSelect:(t,n,i)=>{this.selectStructure(t)}}),this.systemSelectorUI=new mx(this.humanBody),this.infoPanelUI=new gx({onIsolate:t=>{this.humanBody.isolateStructure(t),this.focusOnStructure(t)},onResetIsolation:()=>{this.humanBody.resetIsolation(),this.cameraMgr.reset()},onClose:()=>{this.holographicPanel3D.hide()}}),this.controlsUI=new _x({onToggleExploded:()=>{const t=this.humanBody.toggleExplodedView();return this.playUiClickSound(),t},onToggleSkin:()=>{const t=this.humanBody.toggleSkin();return this.playUiClickSound(),t},onTogglePhysiology:()=>(this.isPhysiologyActive=!this.isPhysiologyActive,this.cardiacAnim.isEnabled=this.isPhysiologyActive,this.circulationAnim.isEnabled=this.isPhysiologyActive,this.respiratoryAnim.isEnabled=this.isPhysiologyActive,this.digestiveAnim.isEnabled=this.isPhysiologyActive,this.nervousAnim.isEnabled=this.isPhysiologyActive,this.playUiClickSound(),this.isPhysiologyActive),onOpenQuiz:()=>{this.quizModalUI.open(),this.playUiClickSound()},onResetView:()=>{this.humanBody.resetIsolation(),this.infoPanelUI.setIsolateState(!1),this.cameraMgr.reset(),this.playUiClickSound()},onCameraPreset:t=>{this.cameraMgr.setPreset(t),this.playUiClickSound()}}),this.welcomeModalUI=new vx({onStart:()=>{this.playUiClickSound()}}),this.quizModalUI=new xx({onFocusStructure:t=>{this.selectStructure(t,!1)},onSoundCorrect:()=>{this.playCorrectSound()},onSoundIncorrect:()=>{this.playIncorrectSound()},onClose:()=>{this.humanBody.resetIsolation(),this.cameraMgr.reset()}}),this.mountInterface(e),this.app.onUpdate((t,n)=>{this.update(t,n)}),this.app.start()}mountInterface(e){var i;const t=document.createElement("div");t.className="header-bar",t.innerHTML=`
      <div class="brand-section">
        <span class="unam-logo-badge">UNAM | PC PUMA</span>
        <div>
          <div class="brand-title">HUMAN <span>XR</span></div>
          <div class="brand-subtitle">Laboratorio de Anatomía Humana Inmersiva</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn-header" id="btn-header-guide">ℹ️ Guía</button>
        <button class="btn-header btn-vr-mode" id="btn-enter-vr">🥽 Entrar en VR</button>
      </div>
    `,e.appendChild(t),(i=t.querySelector("#btn-header-guide"))==null||i.addEventListener("click",()=>{this.welcomeModalUI.open()}),t.querySelector("#btn-enter-vr").addEventListener("click",async()=>{if(!navigator.xr){alert("WebXR no está disponible en este navegador. Para la experiencia completa en Meta Quest 3/3S, abre esta página desde Meta Quest Browser.");return}try{await this.app.session.enterVR()}catch(s){console.error("[HUMAN XR] Error al iniciar sesión WebXR:",s)}}),e.appendChild(this.systemSelectorUI.getElement()),e.appendChild(this.infoPanelUI.getElement()),e.appendChild(this.controlsUI.getElement()),e.appendChild(this.quizModalUI.getElement()),e.appendChild(this.welcomeModalUI.getElement())}async loadAnatomicalModels(e){await this.humanBody.loadAll(e)}selectStructure(e,t=!0){const n=Wc[e];n&&(this.playSelectSound(),this.holographicPanel3D.setStructure(n),t&&this.infoPanelUI.showStructure(n),n.suggestedCameraOffset&&n.suggestedLookAt&&this.cameraMgr.focusOnPoint(n.suggestedCameraOffset,n.suggestedLookAt))}focusOnStructure(e){const t=Wc[e];t&&t.suggestedCameraOffset&&t.suggestedLookAt&&this.cameraMgr.focusOnPoint(t.suggestedCameraOffset,t.suggestedLookAt)}update(e,t){this.humanBody.update(e,t),this.isPhysiologyActive&&(this.cardiacAnim.update(e),this.circulationAnim.update(e),this.respiratoryAnim.update(e),this.digestiveAnim.update(e),this.nervousAnim.update(e));const n=this.humanBody.getSelectableMeshes();this.raycaster.update(n),this.holographicPanel3D.update(this.app.camera),this.sceneMgr.update(e),this.cameraMgr.update(e)}playHeartbeatSound(){try{const e=this.app.audio.context,t=e.createOscillator(),n=e.createGain();t.type="sine",t.frequency.setValueAtTime(65,e.currentTime),t.frequency.exponentialRampToValueAtTime(32,e.currentTime+.12),n.gain.setValueAtTime(.3,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.14),t.connect(n),n.connect(e.destination),t.start(),t.stop(e.currentTime+.15)}catch{}}playUiClickSound(){try{const e=this.app.audio.context,t=e.createOscillator(),n=e.createGain();t.type="sine",t.frequency.setValueAtTime(440,e.currentTime),t.frequency.exponentialRampToValueAtTime(880,e.currentTime+.05),n.gain.setValueAtTime(.12,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.06),t.connect(n),n.connect(e.destination),t.start(),t.stop(e.currentTime+.07)}catch{}}playSelectSound(){try{const e=this.app.audio.context,t=e.createOscillator(),n=e.createGain();t.type="triangle",t.frequency.setValueAtTime(520,e.currentTime),t.frequency.exponentialRampToValueAtTime(1040,e.currentTime+.08),n.gain.setValueAtTime(.2,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.1),t.connect(n),n.connect(e.destination),t.start(),t.stop(e.currentTime+.11)}catch{}}playCorrectSound(){try{const e=this.app.audio.context,t=e.currentTime,n=e.createOscillator(),i=e.createOscillator(),s=e.createGain();n.frequency.setValueAtTime(523.25,t),i.frequency.setValueAtTime(659.25,t+.08),s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.35),n.connect(s),i.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.15),i.start(t+.08),i.stop(t+.35)}catch{}}playIncorrectSound(){try{const e=this.app.audio.context,t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(196,t),n.frequency.exponentialRampToValueAtTime(130.81,t+.2),i.gain.setValueAtTime(.18,t),i.gain.exponentialRampToValueAtTime(.001,t+.25),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.25)}catch{}}}window.addEventListener("DOMContentLoaded",async()=>{const r=document.getElementById("webgl-canvas-container"),e=document.getElementById("loading-overlay"),t=document.getElementById("loading-status-text");if(!r){console.error("[HUMAN XR] No se encontró el contenedor #webgl-canvas-container.");return}try{t&&(t.textContent="Inicializando entorno tridimensional WebXR...");const n=new yx(r);try{await n.loadAnatomicalModels((i,s)=>{if(t){const a=Math.round(s*100);t.textContent=`Cargando ${i} (${a}%)...`}})}catch(i){console.warn("[HUMAN XR] Advertencia en carga de modelos, activando respaldo procedimental:",i)}t&&(t.textContent="¡Laboratorio listo!"),setTimeout(()=>{e&&(e.style.opacity="0",setTimeout(()=>{e.style.display="none"},500))},400),console.log("[HUMAN XR] Laboratorio de Anatomía Humana cargado exitosamente.")}catch(n){console.error("[HUMAN XR] Error crítico al inicializar la experiencia:",n),t&&(t.innerHTML=`
        <div style="color: #ef4444; font-weight: 700; margin-bottom: 6px;">Error al inicializar el laboratorio</div>
        <div style="font-size: 11px; color: #fca5a5; max-width: 420px; margin: 0 auto 12px auto;">${(n==null?void 0:n.message)||n}</div>
        <button onclick="location.reload()" style="background: #00f0ff; color: #030712; border: none; padding: 6px 14px; border-radius: 6px; font-weight: 700; cursor: pointer;">Reintentar</button>
      `)}});
