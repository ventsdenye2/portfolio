(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Lu="179",pg=0,Eh=1,mg=2,Xf=1,jf=2,Ci=3,xn=0,on=1,hi=2,gi=0,Ji=1,bh=2,wh=3,Ah=4,gg=5,Mr=100,_g=101,vg=102,xg=103,yg=104,Sg=200,Tg=201,Mg=202,Eg=203,dl=204,fl=205,bg=206,wg=207,Ag=208,Cg=209,Rg=210,Pg=211,Lg=212,Ig=213,Dg=214,pl=0,ml=1,gl=2,ps=3,_l=4,vl=5,xl=6,yl=7,qf=0,Og=1,Ug=2,Ui=0,$f=1,Yf=2,Kf=3,Zf=4,Jf=5,Qf=6,ep=7,Ch="attached",Ng="detached",tp=300,ms=301,gs=302,Sl=303,Tl=304,qo=306,_s=1e3,Ht=1001,Io=1002,qt=1003,np=1004,na=1005,Et=1006,So=1007,ni=1008,vi=1009,ip=1010,rp=1011,ha=1012,Iu=1013,Ir=1014,ii=1015,Dr=1016,Du=1017,Ou=1018,da=1020,sp=35902,ap=1021,op=1022,Wn=1023,fa=1026,pa=1027,Uu=1028,Nu=1029,cp=1030,Fu=1031,Bu=1033,To=33776,Mo=33777,Eo=33778,bo=33779,Ml=35840,El=35841,bl=35842,wl=35843,Al=36196,Cl=37492,Rl=37496,Pl=37808,Ll=37809,Il=37810,Dl=37811,Ol=37812,Ul=37813,Nl=37814,Fl=37815,Bl=37816,kl=37817,zl=37818,Hl=37819,Vl=37820,Gl=37821,wo=36492,Wl=36494,Xl=36495,lp=36283,jl=36284,ql=36285,$l=36286,ma=2300,ga=2301,cc=2302,Rh=2400,Ph=2401,Lh=2402,Fg=2500,Bg=0,up=1,Yl=2,kg=3200,hp=3201,dp=0,zg=1,$i="",mt="srgb",un="srgb-linear",Do="linear",tt="srgb",Fr=7680,Ih=519,Hg=512,Vg=513,Gg=514,fp=515,Wg=516,Xg=517,jg=518,qg=519,Kl=35044,Dh="300 es",pi=2e3,Oo=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const os=Math.PI/180,vs=180/Math.PI;function ri(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Ue(r,e,t){return Math.max(e,Math.min(t,r))}function ku(r,e){return(r%e+e)%e}function $g(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Yg(r,e,t){return r!==e?(t-r)/(e-r):0}function aa(r,e,t){return(1-t)*r+t*e}function Kg(r,e,t,n){return aa(r,e,1-Math.exp(-t*n))}function Zg(r,e=1){return e-Math.abs(ku(r,e*2)-e)}function Jg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Qg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function e_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function t_(r,e){return r+Math.random()*(e-r)}function n_(r){return r*(.5-Math.random())}function i_(r){r!==void 0&&(Oh=r);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r_(r){return r*os}function s_(r){return r*vs}function a_(r){return(r&r-1)===0&&r!==0}function o_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function c_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function l_(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*h,c*d,o*l);break;case"YZY":r.set(c*d,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*d,o*u,o*l);break;case"XZX":r.set(o*u,c*_,c*f,o*l);break;case"YXY":r.set(c*f,o*u,c*_,o*l);break;case"ZYZ":r.set(c*_,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ti(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qi={DEG2RAD:os,RAD2DEG:vs,generateUUID:ri,clamp:Ue,euclideanModulo:ku,mapLinear:$g,inverseLerp:Yg,lerp:aa,damp:Kg,pingpong:Zg,smoothstep:Jg,smootherstep:Qg,randInt:e_,randFloat:t_,randFloatSpread:n_,seededRandom:i_,degToRad:r_,radToDeg:s_,isPowerOfTwo:a_,ceilPowerOfTwo:o_,floorPowerOfTwo:c_,setQuaternionFromProperEuler:l_,normalize:nt,denormalize:ti};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==f||u!==_){let m=1-o;const p=c*d+l*f+u*_+h*g,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const b=Math.sqrt(S),C=Math.atan2(b,p*T);m=Math.sin(m*C)/b,o=Math.sin(o*C)/b}const v=o*T;if(c=c*m+d*v,l=l*m+f*v,u=u*m+_*v,h=h*m+g*v,m===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*h+c*f-l*d,e[t+1]=c*_+u*d+l*h-o*f,e[t+2]=l*_+u*f+o*d-c*h,e[t+3]=u*_-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),d=c(n/2),f=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lc=new L,Uh=new Yn;class Fe{constructor(e,t,n,i,s,a,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],T=i[1],S=i[4],v=i[7],b=i[2],C=i[5],w=i[8];return s[0]=a*g+o*T+c*b,s[3]=a*m+o*S+c*C,s[6]=a*p+o*v+c*w,s[1]=l*g+u*T+h*b,s[4]=l*m+u*S+h*C,s[7]=l*p+u*v+h*w,s[2]=d*g+f*T+_*b,s[5]=d*m+f*S+_*C,s[8]=d*p+f*v+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new Fe;function pp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _a(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function u_(){const r=_a("canvas");return r.style.display="block",r}const Nh={};function cs(r){r in Nh||(Nh[r]=!0,console.warn(r))}function h_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Fh=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d_(){const r={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$i?Do:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[un]:{primaries:e,whitePoint:n,transfer:Do,toXYZ:Fh,fromXYZ:Bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Fh,fromXYZ:Bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),r}const qe=d_();function Ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class f_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=_a("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p_=0;class zu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(hc(i[a].image)):s.push(hc(i[a]))}else s=hc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function hc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?f_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m_=0;const dc=new L;class Ut extends Ps{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Ht,i=Ht,s=Et,a=ni,o=Wn,c=vi,l=Ut.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=ri(),this.name="",this.source=new zu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=tp;Ut.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,v=(f+1)/2,b=(p+1)/2,C=(u+d)/4,w=(h+g)/4,R=(_+m)/4;return S>v&&S>b?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=w/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=R/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=w/s,i=R/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-g)/T,this.z=(d-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this.w=Ue(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this.w=Ue(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g_ extends Ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ut(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new zu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends g_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mp extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class __ extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Ba.subVectors(this.max,zs),kr.subVectors(e.a,zs),zr.subVectors(e.b,zs),Hr.subVectors(e.c,zs),Hi.subVectors(zr,kr),Vi.subVectors(Hr,zr),ur.subVectors(kr,Hr);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-ur.z,ur.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,ur.z,0,-ur.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-ur.y,ur.x,0];return!fc(t,kr,zr,Hr,Ba)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,kr,zr,Hr,Ba))?!1:(ka.crossVectors(Hi,Vi),t=[ka.x,ka.y,ka.z],fc(t,kr,zr,Hr,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new L,new L,new L,new L,new L,new L,new L,new L],Zn=new L,Fa=new Yt,kr=new L,zr=new L,Hr=new L,Hi=new L,Vi=new L,ur=new L,zs=new L,Ba=new L,ka=new L,hr=new L;function fc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){hr.fromArray(r,s);const o=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),c=e.dot(hr),l=t.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const v_=new Yt,Hs=new L,pc=new L;class Kn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):v_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(pc)),this.expandByPoint(Hs.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mi=new L,mc=new L,za=new L,Gi=new L,gc=new L,Ha=new L,_c=new L;class $o{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(mc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=Gi.dot(this.direction),c=-Gi.dot(za),l=Gi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*c-o,d=a*o-c,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(mc).addScaledVector(za,d),f}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,s){gc.subVectors(t,e),Ha.subVectors(n,e),_c.crossVectors(gc,Ha);let a=this.direction.dot(_c),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const c=o*this.direction.dot(Ha.crossVectors(Gi,Ha));if(c<0)return null;const l=o*this.direction.dot(gc.cross(Gi));if(l<0||c+l>a)return null;const u=-o*Gi.dot(_c);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,s,a,o,c,l,u,h,d,f,_,g,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,h,d,f,_,g,m)}set(e,t,n,i,s,a,o,c,l,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+_*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=_+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,_=l*u,g=l*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,_=l*u,g=l*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=_*l-f,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*c,f=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x_,e,y_)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Wi.crossVectors(n,En),Wi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Wi.crossVectors(n,En)),Wi.normalize(),Va.crossVectors(En,Wi),i[0]=Wi.x,i[4]=Va.x,i[8]=En.x,i[1]=Wi.y,i[5]=Va.y,i[9]=En.y,i[2]=Wi.z,i[6]=Va.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],S=n[7],v=n[11],b=n[15],C=i[0],w=i[4],R=i[8],x=i[12],E=i[1],P=i[5],H=i[9],F=i[13],V=i[2],j=i[6],G=i[10],q=i[14],z=i[3],ie=i[7],ae=i[11],ge=i[15];return s[0]=a*C+o*E+c*V+l*z,s[4]=a*w+o*P+c*j+l*ie,s[8]=a*R+o*H+c*G+l*ae,s[12]=a*x+o*F+c*q+l*ge,s[1]=u*C+h*E+d*V+f*z,s[5]=u*w+h*P+d*j+f*ie,s[9]=u*R+h*H+d*G+f*ae,s[13]=u*x+h*F+d*q+f*ge,s[2]=_*C+g*E+m*V+p*z,s[6]=_*w+g*P+m*j+p*ie,s[10]=_*R+g*H+m*G+p*ae,s[14]=_*x+g*F+m*q+p*ge,s[3]=T*C+S*E+v*V+b*z,s[7]=T*w+S*P+v*j+b*ie,s[11]=T*R+S*H+v*G+b*ae,s[15]=T*x+S*F+v*q+b*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*c*h-i*l*h-s*o*d+n*l*d+i*o*f-n*c*f)+g*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+n*a*f+s*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],T=h*m*l-g*d*l+g*c*f-o*m*f-h*c*p+o*d*p,S=_*d*l-u*m*l-_*c*f+a*m*f+u*c*p-a*d*p,v=u*g*l-_*h*l+_*o*f-a*g*f-u*o*p+a*h*p,b=_*h*c-u*g*c-_*o*d+a*g*d+u*o*m-a*h*m,C=t*T+n*S+i*v+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=T*w,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*w,e[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*p+n*c*p)*w,e[3]=(h*c*s-o*d*s-h*i*l+n*d*l+o*i*f-n*c*f)*w,e[4]=S*w,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*w,e[6]=(_*c*s-a*m*s-_*i*l+t*m*l+a*i*p-t*c*p)*w,e[7]=(a*d*s-u*c*s+u*i*l-t*d*l-a*i*f+t*c*f)*w,e[8]=v*w,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*w,e[10]=(a*g*s-_*o*s+_*n*l-t*g*l-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*f-t*o*f)*w,e[12]=b*w,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*w,e[14]=(_*o*i-a*g*i-_*n*c+t*g*c+a*n*m-t*o*m)*w,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,T=c*l,S=c*u,v=c*h,b=n.x,C=n.y,w=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+v)*b,i[2]=(_-S)*b,i[3]=0,i[4]=(f-v)*C,i[5]=(1-(d+p))*C,i[6]=(m+T)*C,i[7]=0,i[8]=(_+S)*w,i[9]=(m-T)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Vr.set(i[0],i[1],i[2]).length();const a=Vr.set(i[4],i[5],i[6]).length(),o=Vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Jn.copy(this);const l=1/s,u=1/a,h=1/o;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,t.setFromRotationMatrix(Jn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=pi,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let _,g;if(c)_=s/(a-s),g=a*s/(a-s);else if(o===pi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Oo)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=pi,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let _,g;if(c)_=1/(a-s),g=a/(a-s);else if(o===pi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Oo)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new L,Jn=new Be,x_=new L(0,0,0),y_=new L(1,1,1),Wi=new L,Va=new L,En=new L,kh=new Be,zh=new Yn;class Dn{constructor(e=0,t=0,n=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S_=0;const Hh=new L,Gr=new Yn,Ei=new Be,Ga=new L,Vs=new L,T_=new L,M_=new Yn,Vh=new L(1,0,0),Gh=new L(0,1,0),Wh=new L(0,0,1),Xh={type:"added"},E_={type:"removed"},Wr={type:"childadded",child:null},vc={type:"childremoved",child:null};class _t extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new L,t=new Dn,n=new Yn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Fe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Vh,e)}rotateY(e){return this.rotateOnAxis(Gh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vh,e)}translateY(e){return this.translateOnAxis(Gh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Vs,Ga,this.up):Ei.lookAt(Ga,Vs,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),Gr.setFromRotationMatrix(Ei),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xh),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E_),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xh),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,T_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new L(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new L,bi=new L,xc=new L,wi=new L,Xr=new L,jr=new L,jh=new L,yc=new L,Sc=new L,Tc=new L,Mc=new je,Ec=new je,bc=new je;class Gn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qn.subVectors(i,t),bi.subVectors(n,t),xc.subVectors(e,t);const a=Qn.dot(Qn),o=Qn.dot(bi),c=Qn.dot(xc),l=bi.dot(bi),u=bi.dot(xc),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,_=(a*u-o*c)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Mc.setScalar(0),Ec.setScalar(0),bc.setScalar(0),Mc.fromBufferAttribute(e,t),Ec.fromBufferAttribute(e,n),bc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Mc,s.x),a.addScaledVector(Ec,s.y),a.addScaledVector(bc,s.z),a}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),bi.subVectors(e,t),Qn.cross(bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Qn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Xr.subVectors(i,n),jr.subVectors(s,n),yc.subVectors(e,n);const c=Xr.dot(yc),l=jr.dot(yc);if(c<=0&&l<=0)return t.copy(n);Sc.subVectors(e,i);const u=Xr.dot(Sc),h=jr.dot(Sc);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Xr,a);Tc.subVectors(e,s);const f=Xr.dot(Tc),_=jr.dot(Tc);if(_>=0&&f<=_)return t.copy(s);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(jr,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return jh.subVectors(s,i),o=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(jh,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Xr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function wc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=ku(e,1),t=Ue(t,0,1),n=Ue(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=wc(a,s,e+1/3),this.g=wc(a,s,e),this.b=wc(a,s,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=_p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return qe.workingToColorSpace(Zt.copy(this),e),Math.round(Ue(Zt.r*255,0,255))*65536+Math.round(Ue(Zt.g*255,0,255))*256+Math.round(Ue(Zt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,s=Zt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=mt){qe.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Wa);const n=aa(Xi.h,Wa.h,t),i=aa(Xi.s,Wa.s,t),s=aa(Xi.l,Wa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new be;be.NAMES=_p;let b_=0;class _i extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Ji,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xn extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new L,Xa=new He;let w_=0;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}}class vp extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xp extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let A_=0;const Bn=new Be,Ac=new _t,qr=new L,bn=new Yt,Gs=new Yt,kt=new L;class Sn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pp(e)?xp:vp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ln(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(bn.min,Gs.min),bn.expandByPoint(kt),kt.addVectors(bn.max,Gs.max),bn.expandByPoint(kt)):(bn.expandByPoint(Gs.min),bn.expandByPoint(Gs.max))}bn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)kt.fromBufferAttribute(o,l),c&&(qr.fromBufferAttribute(e,l),kt.add(qr)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new L,c[R]=new L;const l=new L,u=new L,h=new L,d=new He,f=new He,_=new He,g=new L,m=new L;function p(R,x,E){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,x),_.fromBufferAttribute(s,E),u.sub(l),h.sub(l),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[R].add(g),o[x].add(g),o[E].add(g),c[R].add(m),c[x].add(m),c[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,x=T.length;R<x;++R){const E=T[R],P=E.start,H=E.count;for(let F=P,V=P+H;F<V;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new L,v=new L,b=new L,C=new L;function w(R){b.fromBufferAttribute(i,R),C.copy(b);const x=o[R];S.copy(x),S.sub(b.multiplyScalar(b.dot(x))).normalize(),v.crossVectors(C,x);const P=v.dot(c[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,x=T.length;R<x;++R){const E=T[R],P=E.start,H=E.count;for(let F=P,V=P+H;F<V;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*u;for(let p=0;p<u;p++)d[_++]=l[f++]}return new cn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Sn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new Be,dr=new $o,ja=new Kn,$h=new L,qa=new L,$a=new L,Ya=new L,Cc=new L,Ka=new L,Yh=new L,Za=new L;class en extends _t{constructor(e=new Sn,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ka.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Cc.fromBufferAttribute(h,e),a?Ka.addScaledVector(Cc,u):Ka.addScaledVector(Cc.sub(t),u))}t.add(Ka)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(ja.containsPoint(dr.origin)===!1&&(dr.intersectSphere(ja,$h)===null||dr.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(qh.copy(s).invert(),dr.copy(e.ray).applyMatrix4(qh),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,b=S;v<b;v+=3){const C=o.getX(v),w=o.getX(v+1),R=o.getX(v+2);i=Ja(this,p,e,n,l,u,h,C,w,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const T=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=Ja(this,a,e,n,l,u,h,T,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,b=S;v<b;v+=3){const C=v,w=v+1,R=v+2;i=Ja(this,p,e,n,l,u,h,C,w,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const T=m,S=m+1,v=m+2;i=Ja(this,a,e,n,l,u,h,T,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function C_(r,e,t,n,i,s,a,o){let c;if(e.side===on?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===xn,o),c===null)return null;Za.copy(o),Za.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Za);return l<t.near||l>t.far?null:{distance:l,point:Za.clone(),object:r}}function Ja(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,qa),r.getVertexPosition(c,$a),r.getVertexPosition(l,Ya);const u=C_(r,e,t,n,qa,$a,Ya,Yh);if(u){const h=new L;Gn.getBarycoord(Yh,qa,$a,Ya,h),i&&(u.uv=Gn.getInterpolatedAttribute(i,o,c,l,h,new He)),s&&(u.uv1=Gn.getInterpolatedAttribute(s,o,c,l,h,new He)),a&&(u.normal=Gn.getInterpolatedAttribute(a,o,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};Gn.getNormal(qa,$a,Ya,d.normal),u.face=d,u.barycoord=h}return u}class La extends Sn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(h,2));function _(g,m,p,T,S,v,b,C,w,R,x){const E=v/w,P=b/R,H=v/2,F=b/2,V=C/2,j=w+1,G=R+1;let q=0,z=0;const ie=new L;for(let ae=0;ae<G;ae++){const ge=ae*P-F;for(let Pe=0;Pe<j;Pe++){const st=Pe*E-H;ie[g]=st*T,ie[m]=ge*S,ie[p]=V,l.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[p]=C>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Pe/w),h.push(1-ae/R),q+=1}}for(let ae=0;ae<R;ae++)for(let ge=0;ge<w;ge++){const Pe=d+ge+j*ae,st=d+ge+j*(ae+1),Ve=d+(ge+1)+j*(ae+1),W=d+(ge+1)+j*ae;c.push(Pe,st,W),c.push(st,Ve,W),z+=6}o.addGroup(f,z,x),f+=z,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(r){const e={};for(let t=0;t<r.length;t++){const n=xs(r[t]);for(const i in n)e[i]=n[i]}return e}function R_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Ls={clone:xs,merge:an};var P_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P_,this.fragmentShader=L_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sp extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new L,Kh=new He,Zh=new He;class Jt extends Sp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Kh,Zh),t.subVectors(Zh,Kh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $r=-90,Yr=1;class I_ extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt($r,Yr,e,t);i.layers=this.layers,this.add(i);const s=new Jt($r,Yr,e,t);s.layers=this.layers,this.add(s);const a=new Jt($r,Yr,e,t);a.layers=this.layers,this.add(a);const o=new Jt($r,Yr,e,t);o.layers=this.layers,this.add(o);const c=new Jt($r,Yr,e,t);c.layers=this.layers,this.add(c);const l=new Jt($r,Yr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Tp extends Ut{constructor(e=[],t=ms,n,i,s,a,o,c,l,u){super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D_ extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new La(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:gi});s.uniforms.tEquirect.value=t;const a=new en(i,s),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=Et),new I_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class br extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class Rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class U_ extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new L;class Ii{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ii(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jh=new L,Qh=new je,ed=new je,N_=new L,td=new Be,Qa=new L,Pc=new Kn,nd=new Be,Lc=new $o;class F_ extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ch,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qa),this.boundingBox.expandByPoint(Qa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qa),this.boundingSphere.expandByPoint(Qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(i),e.ray.intersectsSphere(Pc)!==!1&&(nd.copy(i).invert(),Lc.copy(e.ray).applyMatrix4(nd),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ng?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qh.fromBufferAttribute(i.attributes.skinIndex,e),ed.fromBufferAttribute(i.attributes.skinWeight,e),Jh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=ed.getComponent(s);if(a!==0){const o=Qh.getComponent(s);td.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(N_.copy(Jh).applyMatrix4(td),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ep extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bp extends Ut{constructor(e=null,t=1,n=1,i,s,a,o,c,l=qt,u=qt,h,d){super(null,a,o,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new Be,B_=new Be;class Hu{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:B_;id.multiplyMatrices(o,t[s]),id.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bp(t,e,e,Wn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Ep),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Zl extends cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Kr=new Be,rd=new Be,eo=[],sd=new Yt,k_=new Be,Ws=new en,Xs=new Kn;class z_ extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,k_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),sd.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(sd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),Xs.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),e.ray.intersectsSphere(Xs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Kr),rd.multiplyMatrices(n,Kr),Ws.matrixWorld=rd,Ws.raycast(e,eo);for(let a=0,o=eo.length;a<o;a++){const c=eo[a];c.instanceId=s,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bp(new Float32Array(i*this.count),i,this.count,Uu,ii));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ic=new L,H_=new L,V_=new Fe;class yr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ic.subVectors(n,t).cross(H_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ic),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||V_.getNormalMatrix(e),i=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Kn,G_=new He(.5,.5),to=new L;class Vu{constructor(e=new yr,t=new yr,n=new yr,i=new yr,s=new yr,a=new yr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],T=s[12],S=s[13],v=s[14],b=s[15];if(i[0].setComponents(l-a,f-u,p-_,b-T).normalize(),i[1].setComponents(l+a,f+u,p+_,b+T).normalize(),i[2].setComponents(l+o,f+h,p+g,b+S).normalize(),i[3].setComponents(l-o,f-h,p-g,b-S).normalize(),n)i[4].setComponents(c,d,m,v).normalize(),i[5].setComponents(l-c,f-d,p-m,b-v).normalize();else if(i[4].setComponents(l-c,f-d,p-m,b-v).normalize(),t===pi)i[5].setComponents(l+c,f+d,p+m,b+v).normalize();else if(t===Oo)i[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);const t=G_.distanceTo(e.center);return fr.radius=.7071067811865476+t,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wp extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new L,No=new L,ad=new Be,js=new $o,no=new Kn,Dc=new L,od=new L;class Gu extends _t{constructor(e=new Sn,t=new wp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Uo.fromBufferAttribute(t,i-1),No.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uo.distanceTo(No);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;ad.copy(i).invert(),js.copy(e.ray).applyMatrix4(ad);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=l){const p=u.getX(g),T=u.getX(g+1),S=io(this,e,js,c,p,T,g);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=io(this,e,js,c,g,m,_-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=l){const p=io(this,e,js,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=io(this,e,js,c,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function io(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Uo.fromBufferAttribute(o,i),No.fromBufferAttribute(o,s),t.distanceSqToSegment(Uo,No,Dc,od)>n)return;Dc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Dc);if(!(l<e.near||l>e.far))return{distance:l,point:od.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const cd=new L,ld=new L;class W_ extends Gu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)cd.fromBufferAttribute(t,i),ld.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cd.distanceTo(ld);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class X_ extends Gu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ap extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ud=new Be,Jl=new $o,ro=new Kn,so=new L;class j_ extends _t{constructor(e=new Sn,t=new Ap){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=s,e.ray.intersectsSphere(ro)===!1)return;ud.copy(i).invert(),Jl.copy(e.ray).applyMatrix4(ud);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=l.getX(_);so.fromBufferAttribute(h,m),hd(so,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=d,g=f;_<g;_++)so.fromBufferAttribute(h,_),hd(so,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hd(r,e,t,n,i,s,a){const o=Jl.distanceSqToPoint(r);if(o<t){const c=new L;Jl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class q_ extends Ut{constructor(e,t,n,i,s=Et,a=Et,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class Wu extends Ut{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cp extends Ut{constructor(e,t,n=Ir,i,s,a,o=qt,c=qt,l,u=fa,h=1){if(u!==fa&&u!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ao=new L,oo=new L,Oc=new L,co=new Gn;class $_ extends Sn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(os*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:p}=co;if(g.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),co.getNormal(Oc),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){const S=(T+1)%3,v=h[T],b=h[S],C=co[u[T]],w=co[u[S]],R=`${v}_${b}`,x=`${b}_${v}`;x in d&&d[x]?(Oc.dot(d[x].normal)<=s&&(f.push(C.x,C.y,C.z),f.push(w.x,w.y,w.z)),d[x]=null):R in d||(d[R]={index0:l[T],index1:l[S],normal:Oc.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];ao.fromBufferAttribute(o,g),oo.fromBufferAttribute(o,m),f.push(ao.x,ao.y,ao.z),f.push(oo.x,oo.y,oo.z)}this.setAttribute("position",new ln(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yo extends Sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const T=p*d-a;for(let S=0;S<l;S++){const v=S*h-s;_.push(v,-T,0),g.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const S=T+l*p,v=T+l*(p+1),b=T+1+l*(p+1),C=T+1+l*p;f.push(S,v,C),f.push(v,b,C)}this.setIndex(f),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Y_ extends Sn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new L,s=new L;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let _=d,g=d+f;_<g;_+=3)for(let m=0;m<3;m++){const p=o.getX(_+m),T=o.getX(_+(m+1)%3);i.fromBufferAttribute(a,p),s.fromBufferAttribute(a,T),dd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,h=3*o+(l+1)%3;i.fromBufferAttribute(a,u),s.fromBufferAttribute(a,h),dd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ln(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function dd(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class K_ extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ko extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yi extends Ko{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rp extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z_ extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function lo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function J_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Q_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Pp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Ia{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ev extends Ia{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rh,endingEnd:Rh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ph:s=e,o=2*t-n;break;case Lh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ph:a=e,c=2*n-t;break;case Lh:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,T=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,S=(-1-f)*m+(1.5+f)*g+.5*_,v=f*m-f*g;for(let b=0;b!==o;++b)s[b]=p*a[u+b]+T*a[l+b]+S*a[c+b]+v*a[h+b];return s}}class tv extends Ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}}class nv extends Ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ev(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&J_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=ga;class Is extends si{constructor(e,t,n){super(e,t,n)}}Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ma;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Lp extends si{constructor(e,t,n,i){super(e,t,n,i)}}Lp.prototype.ValueTypeName="color";class ys extends si{constructor(e,t,n,i){super(e,t,n,i)}}ys.prototype.ValueTypeName="number";class iv extends Ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Yn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Ss extends si{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new iv(this.times,this.values,this.getValueSize(),e)}}Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends si{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ma;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends si{constructor(e,t,n,i){super(e,t,n,i)}}Ts.prototype.ValueTypeName="vector";class rv{constructor(e="",t=-1,n=[],i=Fg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(av(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(si.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Q_(c);c=fd(c,1,u),l=fd(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ys(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,g){if(f.length!==0){const m=[],p=[];Pp(f,m,p,_),m.length!==0&&g.push(new h(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let T=0;T!==d[_].morphTargets.length;++T){const S=d[_];m.push(S.time),p.push(S.morphTarget===g?1:0)}i.push(new ys(".morphTargetInfluence["+g+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(Ts,f+".position",d,"pos",i),n(Ss,f+".quaternion",d,"rot",i),n(Ts,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return Lp;case"quaternion":return Ss;case"bool":case"boolean":return Is;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function av(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sv(r.type);if(r.times===void 0){const t=[],n=[];Pp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Di={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ov{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],_=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const cv=new ov;class Os{constructor(e){this.manager=e!==void 0?e:cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class lv extends Error{constructor(e,t){super(e),this.response=t}}class Ip extends Os{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Di.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:i});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ai[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{g+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let C=0,w=u.length;C<w;C++){const R=u[C];R.onProgress&&R.onProgress(b)}p.enqueue(v),T()}},S=>{p.error(S)})}}});return new Response(m)}else throw new lv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Di.add(`file:${e}`,l);const u=Ai[e];delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zr=new WeakMap;class uv extends Os{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Zr.get(a);h===void 0&&(h=[],Zr.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=_a("img");function c(){u(),t&&t(this);const h=Zr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Zr.delete(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),Di.remove(`image:${e}`);const d=Zr.get(this)||[];for(let f=0;f<d.length;f++){const _=d[f];_.onError&&_.onError(h)}Zr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Di.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Xu extends Os{constructor(e){super(e)}load(e,t,n,i){const s=new Ut,a=new uv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Da extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hv extends Da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uc=new Be,pd=new L,md=new L;class ju{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vu,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(pd),md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(md),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dv extends ju{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fv extends Da{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new dv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gd=new Be,qs=new L,Nc=new L;class pv extends ju{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),Nc.copy(n.position),Nc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nc),n.updateMatrixWorld(),i.makeTranslation(-qs.x,-qs.y,-qs.z),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd,n.coordinateSystem,n.reversedDepth)}}class mv extends Da{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zo extends Sp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gv extends ju{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qu extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new gv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _v extends Da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vv extends Sn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Fc=new WeakMap;class xv extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Di.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(Fc.has(a)===!0)i&&i(Fc.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Fc.set(c,l),Di.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Di.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yv extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const $u="\\[\\]\\.:\\/",Tv=new RegExp("["+$u+"]","g"),Yu="[^"+$u+"]",Mv="[^"+$u.replace("\\.","")+"]",Ev=/((?:WC+[\/:])*)/.source.replace("WC",Yu),bv=/(WCOD+)?/.source.replace("WCOD",Mv),wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yu),Av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yu),Cv=new RegExp("^"+Ev+bv+wv+Av+"$"),Rv=["material","materials","bones","map"];class Pv{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tv,"")}static parseTrackName(e){const t=Cv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Rv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Pv;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ql extends Mp{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const _d=new L,uo=new L,Jr=new L,Qr=new L,Bc=new L,Lv=new L,Iv=new L;class Dv{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){_d.subVectors(e,this.start),uo.subVectors(this.end,this.start);const n=uo.dot(uo);let s=uo.dot(_d)/n;return t&&(s=Ue(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Lv,n=Iv){const i=10000000000000001e-32;let s,a;const o=this.start,c=e.start,l=this.end,u=e.end;Jr.subVectors(l,o),Qr.subVectors(u,c),Bc.subVectors(o,c);const h=Jr.dot(Jr),d=Qr.dot(Qr),f=Qr.dot(Bc);if(h<=i&&d<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(h<=i)s=0,a=f/d,a=Ue(a,0,1);else{const _=Jr.dot(Bc);if(d<=i)a=0,s=Ue(-_/h,0,1);else{const g=Jr.dot(Qr),m=h*d-g*g;m!==0?s=Ue((g*f-_*d)/m,0,1):s=0,a=(g*s+f)/d,a<0?(a=0,s=Ue(-_/h,0,1)):a>1&&(a=1,s=Ue((g-_)/h,0,1))}}return t.copy(o).add(Jr.multiplyScalar(s)),n.copy(c).add(Qr.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function vd(r,e,t,n){const i=Ov(n);switch(t){case ap:return r*e;case Uu:return r*e/i.components*i.byteLength;case Nu:return r*e/i.components*i.byteLength;case cp:return r*e*2/i.components*i.byteLength;case Fu:return r*e*2/i.components*i.byteLength;case op:return r*e*3/i.components*i.byteLength;case Wn:return r*e*4/i.components*i.byteLength;case Bu:return r*e*4/i.components*i.byteLength;case To:case Mo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eo:case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case El:case wl:return Math.max(r,16)*Math.max(e,8)/4;case Ml:case bl:return Math.max(r,8)*Math.max(e,8)/2;case Al:case Cl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Rl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wo:case Wl:case Xl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case lp:case jl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ql:case $l:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ov(r){switch(r){case vi:case ip:return{byteLength:1,components:1};case ha:case rp:case Dr:return{byteLength:2,components:1};case Du:case Ou:return{byteLength:2,components:4};case Ir:case Iu:case ii:return{byteLength:4,components:1};case sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lu);function Dp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Uv(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,o),h.length===0)r.bufferSubData(l,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fv=`#ifdef USE_ALPHAHASH
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
#endif`,Bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vv=`#ifdef USE_AOMAP
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
#endif`,Gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wv=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$v=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yv=`#ifdef USE_IRIDESCENCE
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
#endif`,Kv=`#ifdef USE_BUMPMAP
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
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,C0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,O0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X0=`#if defined( USE_POINTS_UV )
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
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rx=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,yx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`#include <common>
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
}`,Vx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,Gx=`#define DISTANCE
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
}`,Wx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
}`,$x=`uniform vec3 diffuse;
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
}`,Yx=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qx=`#define MATCAP
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
}`,ey=`#define MATCAP
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
}`,ty=`#define NORMAL
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
}`,ny=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iy=`#define PHONG
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
}`,ry=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sy=`#define STANDARD
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
}`,ay=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,oy=`#define TOON
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
}`,cy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ly=`uniform float size;
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
}`,uy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,dy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fy=`uniform float rotation;
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
}`,py=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Nv,alphahash_pars_fragment:Fv,alphamap_fragment:Bv,alphamap_pars_fragment:kv,alphatest_fragment:zv,alphatest_pars_fragment:Hv,aomap_fragment:Vv,aomap_pars_fragment:Gv,batching_pars_vertex:Wv,batching_vertex:Xv,begin_vertex:jv,beginnormal_vertex:qv,bsdfs:$v,iridescence_fragment:Yv,bumpmap_pars_fragment:Kv,clipping_planes_fragment:Zv,clipping_planes_pars_fragment:Jv,clipping_planes_pars_vertex:Qv,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:r0,common:s0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:o0,displacementmap_pars_vertex:c0,displacementmap_vertex:l0,emissivemap_fragment:u0,emissivemap_pars_fragment:h0,colorspace_fragment:d0,colorspace_pars_fragment:f0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:x0,fog_pars_vertex:y0,fog_fragment:S0,fog_pars_fragment:T0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:E0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:w0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:P0,lights_phong_fragment:L0,lights_phong_pars_fragment:I0,lights_physical_fragment:D0,lights_physical_pars_fragment:O0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:F0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:H0,map_fragment:V0,map_pars_fragment:G0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:q0,morphinstance_vertex:$0,morphcolor_vertex:Y0,morphnormal_vertex:K0,morphtarget_pars_vertex:Z0,morphtarget_vertex:J0,normal_fragment_begin:Q0,normal_fragment_maps:ex,normal_pars_fragment:tx,normal_pars_vertex:nx,normal_vertex:ix,normalmap_pars_fragment:rx,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:ox,iridescence_pars_fragment:cx,opaque_fragment:lx,packing:ux,premultiplied_alpha_fragment:hx,project_vertex:dx,dithering_fragment:fx,dithering_pars_fragment:px,roughnessmap_fragment:mx,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:vx,shadowmap_vertex:xx,shadowmask_pars_fragment:yx,skinbase_vertex:Sx,skinning_pars_vertex:Tx,skinning_vertex:Mx,skinnormal_vertex:Ex,specularmap_fragment:bx,specularmap_pars_fragment:wx,tonemapping_fragment:Ax,tonemapping_pars_fragment:Cx,transmission_fragment:Rx,transmission_pars_fragment:Px,uv_pars_fragment:Lx,uv_pars_vertex:Ix,uv_vertex:Dx,worldpos_vertex:Ox,background_vert:Ux,background_frag:Nx,backgroundCube_vert:Fx,backgroundCube_frag:Bx,cube_vert:kx,cube_frag:zx,depth_vert:Hx,depth_frag:Vx,distanceRGBA_vert:Gx,distanceRGBA_frag:Wx,equirect_vert:Xx,equirect_frag:jx,linedashed_vert:qx,linedashed_frag:$x,meshbasic_vert:Yx,meshbasic_frag:Kx,meshlambert_vert:Zx,meshlambert_frag:Jx,meshmatcap_vert:Qx,meshmatcap_frag:ey,meshnormal_vert:ty,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:ry,meshphysical_vert:sy,meshphysical_frag:ay,meshtoon_vert:oy,meshtoon_frag:cy,points_vert:ly,points_frag:uy,shadow_vert:hy,shadow_frag:dy,sprite_vert:fy,sprite_frag:py},se={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},fn={basic:{uniforms:an([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:an([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new be(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:an([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:an([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:an([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:an([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:an([se.points,se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:an([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:an([se.common,se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:an([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:an([se.sprite,se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:an([se.common,se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:an([se.lights,se.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};fn.physical={uniforms:an([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ho={r:0,b:0,g:0},pr=new Dn,my=new Be;function gy(r,e,t,n,i,s,a){const o=new be(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function g(S){let v=!1;const b=_(S);b===null?p(o,c):b&&b.isColor&&(p(b,1),v=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,v){const b=_(v);b&&(b.isCubeTexture||b.mapping===qo)?(u===void 0&&(u=new en(new La(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:xs(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pr.copy(v.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(my.makeRotationFromEuler(pr)),u.material.toneMapped=qe.getTransfer(b.colorSpace)!==tt,(h!==b||d!==b.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new en(new Yo(2,2),new hn({name:"BackgroundMaterial",uniforms:xs(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=qe.getTransfer(b.colorSpace)!==tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,f=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,v){S.getRGB(ho,yp(r)),n.buffers.color.setClear(ho.r,ho.g,ho.b,v,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:g,addToRenderList:m,dispose:T}}function _y(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(E,P,H,F,V){let j=!1;const G=h(F,H,P);s!==G&&(s=G,l(s.object)),j=f(E,F,H,V),j&&_(E,F,H,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(E,P,H,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return r.createVertexArray()}function l(E){return r.bindVertexArray(E)}function u(E){return r.deleteVertexArray(E)}function h(E,P,H){const F=H.wireframe===!0;let V=n[E.id];V===void 0&&(V={},n[E.id]=V);let j=V[P.id];j===void 0&&(j={},V[P.id]=j);let G=j[F];return G===void 0&&(G=d(c()),j[F]=G),G}function d(E){const P=[],H=[],F=[];for(let V=0;V<t;V++)P[V]=0,H[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:F,object:E,attributes:{},index:null}}function f(E,P,H,F){const V=s.attributes,j=P.attributes;let G=0;const q=H.getAttributes();for(const z in q)if(q[z].location>=0){const ae=V[z];let ge=j[z];if(ge===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function _(E,P,H,F){const V={},j=P.attributes;let G=0;const q=H.getAttributes();for(const z in q)if(q[z].location>=0){let ae=j[z];ae===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),V[z]=ge,G++}s.attributes=V,s.attributesNum=G,s.index=F}function g(){const E=s.newAttributes;for(let P=0,H=E.length;P<H;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){const H=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;H[E]=1,F[E]===0&&(r.enableVertexAttribArray(E),F[E]=1),V[E]!==P&&(r.vertexAttribDivisor(E,P),V[E]=P)}function T(){const E=s.newAttributes,P=s.enabledAttributes;for(let H=0,F=P.length;H<F;H++)P[H]!==E[H]&&(r.disableVertexAttribArray(H),P[H]=0)}function S(E,P,H,F,V,j,G){G===!0?r.vertexAttribIPointer(E,P,H,V,j):r.vertexAttribPointer(E,P,H,F,V,j)}function v(E,P,H,F){g();const V=F.attributes,j=H.getAttributes(),G=P.defaultAttributeValues;for(const q in j){const z=j[q];if(z.location>=0){let ie=V[q];if(ie===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const ae=ie.normalized,ge=ie.itemSize,Pe=e.get(ie);if(Pe===void 0)continue;const st=Pe.buffer,Ve=Pe.type,W=Pe.bytesPerElement,oe=Ve===r.INT||Ve===r.UNSIGNED_INT||ie.gpuType===Iu;if(ie.isInterleavedBufferAttribute){const ne=ie.data,we=ne.stride,Ae=ie.offset;if(ne.isInstancedInterleavedBuffer){for(let De=0;De<z.locationSize;De++)p(z.location+De,ne.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let De=0;De<z.locationSize;De++)m(z.location+De);r.bindBuffer(r.ARRAY_BUFFER,st);for(let De=0;De<z.locationSize;De++)S(z.location+De,ge/z.locationSize,Ve,ae,we*W,(Ae+ge/z.locationSize*De)*W,oe)}else{if(ie.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)p(z.location+ne,ie.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ne=0;ne<z.locationSize;ne++)m(z.location+ne);r.bindBuffer(r.ARRAY_BUFFER,st);for(let ne=0;ne<z.locationSize;ne++)S(z.location+ne,ge/z.locationSize,Ve,ae,ge*W,ge/z.locationSize*ne*W,oe)}}else if(G!==void 0){const ae=G[q];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(z.location,ae);break;case 3:r.vertexAttrib3fv(z.location,ae);break;case 4:r.vertexAttrib4fv(z.location,ae);break;default:r.vertexAttrib1fv(z.location,ae)}}}}T()}function b(){R();for(const E in n){const P=n[E];for(const H in P){const F=P[H];for(const V in F)u(F[V].object),delete F[V];delete P[H]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const H in P){const F=P[H];for(const V in F)u(F[V].object),delete F[V];delete P[H]}delete n[E.id]}function w(E){for(const P in n){const H=n[P];if(H[E.id]===void 0)continue;const F=H[E.id];for(const V in F)u(F[V].object),delete F[V];delete H[E.id]}}function R(){x(),a=!0,s!==i&&(s=i,l(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function vy(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function xy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Wn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ii&&!R)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:b,maxSamples:C}}function yy(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new yr,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,S=T*4;let v=p.clippingState||null;c.value=v,v=u(_,d,S,f);for(let b=0;b!==S;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==g;++S,v+=4)a.copy(h[S]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Sy(r){let e=new WeakMap;function t(a,o){return o===Sl?a.mapping=ms:o===Tl&&(a.mapping=gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sl||o===Tl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new D_(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const rs=4,xd=[.125,.215,.35,.446,.526,.582],Er=20,kc=new Zo,yd=new be;let zc=null,Hc=0,Vc=0,Gc=!1;const Sr=(1+Math.sqrt(5))/2,es=1/Sr,Sd=[new L(-Sr,es,0),new L(Sr,es,0),new L(-es,0,Sr),new L(es,0,Sr),new L(0,Sr,-es),new L(0,Sr,es),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ty=new L;class Td{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Ty}=s;zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Hc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Dr,format:Wn,colorSpace:un,depthBuffer:!1},i=Md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=My(s)),this._blurMaterial=Ey(s,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,kc)}_sceneToCubeUV(e,t,n,i,s){const c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(yd),h.toneMapping=Ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const g=new Xn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new en(new La,g);let p=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,p=!0):(g.color.copy(yd),p=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));const b=this._cubeSize;fo(i,v*b,S>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ms||e.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;fo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,kc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sd[(i-s-1)%Sd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Er-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const p=[];let T=0;for(let w=0;w<Er;++w){const R=w/g,x=Math.exp(-R*R/2);p.push(x),w===0?T+=x:w<m&&(T+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const v=this._sizeLods[i],b=3*v*(i>S-rs?i-S+rs:0),C=4*(this._cubeSize-v);fo(t,b,C,3*v,2*v),c.setRenderTarget(t),c.render(h,kc)}}function My(r){const e=[],t=[],n=[];let i=r;const s=r-rs+1+xd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-rs?c=xd[a-r+rs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*f),S=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let C=0;C<f;C++){const w=C%3*2/3-1,R=C>2?0:-1,x=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];T.set(x,g*_*C),S.set(d,m*_*C);const E=[C,C,C,C,C,C];v.set(E,p*_*C)}const b=new Sn;b.setAttribute("position",new cn(T,g)),b.setAttribute("uv",new cn(S,m)),b.setAttribute("faceIndex",new cn(v,p)),e.push(b),i>rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Md(r,e,t){const n=new Bi(r,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ey(r,e,t){const n=new Float32Array(Er),i=new L(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ed(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function bd(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function by(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Sl||c===Tl,u=c===ms||c===gs;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Td(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Td(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ay(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const T=f.array;g=f.version;for(let S=0,v=T.length;S<v;S+=3){const b=T[S+0],C=T[S+1],w=T[S+2];d.push(b,C,C,w,w,b)}}else if(_!==void 0){const T=_.array;g=_.version;for(let S=0,v=T.length/3-1;S<v;S+=3){const b=S+0,C=S+1,w=S+2;d.push(b,C,C,w,w,b)}}else return;const m=new(pp(d)?xp:vp)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Cy(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=f[T]*g[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ry(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Py(r,e,t){const n=new WeakMap,i=new je;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*C*4*h),R=new mp(w,b,C,h);R.type=ii,R.needsUpdate=!0;const x=v*4;for(let P=0;P<h;P++){const H=p[P],F=T[P],V=S[P],j=b*C*4*P;for(let G=0;G<H.count;G++){const q=G*x;_===!0&&(i.fromBufferAttribute(H,G),w[j+q+0]=i.x,w[j+q+1]=i.y,w[j+q+2]=i.z,w[j+q+3]=0),g===!0&&(i.fromBufferAttribute(F,G),w[j+q+4]=i.x,w[j+q+5]=i.y,w[j+q+6]=i.z,w[j+q+7]=0),m===!0&&(i.fromBufferAttribute(V,G),w[j+q+8]=i.x,w[j+q+9]=i.y,w[j+q+10]=i.z,w[j+q+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new He(b,C)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ly(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Op=new Ut,wd=new Cp(1,1),Up=new mp,Np=new __,Fp=new Tp,Ad=[],Cd=[],Rd=new Float32Array(16),Pd=new Float32Array(9),Ld=new Float32Array(4);function Us(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ad[i];if(s===void 0&&(s=new Float32Array(i),Ad[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Jo(r,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Iy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function Oy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function Uy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function Ny(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Ld.set(n),r.uniformMatrix2fv(this.addr,!1,Ld),Ft(t,n)}}function Fy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Pd.set(n),r.uniformMatrix3fv(this.addr,!1,Pd),Ft(t,n)}}function By(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Rd.set(n),r.uniformMatrix4fv(this.addr,!1,Rd),Ft(t,n)}}function ky(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function zy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function Hy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function Vy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function Gy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Wy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function Xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function jy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function qy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(wd.compareFunction=fp,s=wd):s=Op,t.setTexture2D(e||s,i)}function $y(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Np,i)}function Yy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fp,i)}function Ky(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Up,i)}function Zy(r){switch(r){case 5126:return Iy;case 35664:return Dy;case 35665:return Oy;case 35666:return Uy;case 35674:return Ny;case 35675:return Fy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Hy;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Wy;case 36295:return Xy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Ky}}function Jy(r,e){r.uniform1fv(this.addr,e)}function Qy(r,e){const t=Us(e,this.size,2);r.uniform2fv(this.addr,t)}function eS(r,e){const t=Us(e,this.size,3);r.uniform3fv(this.addr,t)}function tS(r,e){const t=Us(e,this.size,4);r.uniform4fv(this.addr,t)}function nS(r,e){const t=Us(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function iS(r,e){const t=Us(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function rS(r,e){const t=Us(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sS(r,e){r.uniform1iv(this.addr,e)}function aS(r,e){r.uniform2iv(this.addr,e)}function oS(r,e){r.uniform3iv(this.addr,e)}function cS(r,e){r.uniform4iv(this.addr,e)}function lS(r,e){r.uniform1uiv(this.addr,e)}function uS(r,e){r.uniform2uiv(this.addr,e)}function hS(r,e){r.uniform3uiv(this.addr,e)}function dS(r,e){r.uniform4uiv(this.addr,e)}function fS(r,e,t){const n=this.cache,i=e.length,s=Jo(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Op,s[a])}function pS(r,e,t){const n=this.cache,i=e.length,s=Jo(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Np,s[a])}function mS(r,e,t){const n=this.cache,i=e.length,s=Jo(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Fp,s[a])}function gS(r,e,t){const n=this.cache,i=e.length,s=Jo(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Up,s[a])}function _S(r){switch(r){case 5126:return Jy;case 35664:return Qy;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return rS;case 5124:case 35670:return sS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return cS;case 5125:return lS;case 36294:return uS;case 36295:return hS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}class vS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zy(t.type)}}class xS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_S(t.type)}}class yS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function Id(r,e){r.seq.push(e),r.map[e.id]=e}function SS(r,e,t){const n=r.name,i=n.length;for(Wc.lastIndex=0;;){const s=Wc.exec(n),a=Wc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Id(t,l===void 0?new vS(o,r,e):new xS(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new yS(o),Id(t,h)),t=h}}}class Ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);SS(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Dd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const TS=37297;let MS=0;function ES(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Od=new Fe;function bS(r){qe._getMatrix(Od,qe.workingColorSpace,r);const e=`mat3( ${Od.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case Do:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ud(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ES(r.getShaderSource(e),o)}else return s}function wS(r,e){const t=bS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function AS(r,e){let t;switch(e){case $f:t="Linear";break;case Yf:t="Reinhard";break;case Kf:t="Cineon";break;case Zf:t="ACESFilmic";break;case Qf:t="AgX";break;case ep:t="Neutral";break;case Jf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new L;function CS(){qe.getLuminanceCoefficients(po);const r=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function PS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ia(r){return r!==""}function Nd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IS=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(r){return r.replace(IS,OS)}const DS=new Map;function OS(r,e){let t=ke[e];if(t===void 0){const n=DS.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eu(t)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(r){return r.replace(US,NS)}function NS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function FS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function BS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kS(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===gs&&(e="ENVMAP_MODE_REFRACTION"),e}function zS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qf:e="ENVMAP_BLENDING_MULTIPLY";break;case Og:e="ENVMAP_BLENDING_MIX";break;case Ug:e="ENVMAP_BLENDING_ADD";break}return e}function HS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function VS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=FS(t),l=BS(t),u=kS(t),h=zS(t),d=HS(t),f=RS(t),_=PS(s),g=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ia).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ia).join(`
`),p.length>0&&(p+=`
`)):(m=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),p=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?ke.tonemapping_pars_fragment:"",t.toneMapping!==Ui?AS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,wS("linearToOutputTexel",t.outputColorSpace),CS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=eu(a),a=Nd(a,t),a=Fd(a,t),o=eu(o),o=Nd(o,t),o=Fd(o,t),a=Bd(a),o=Bd(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+a,v=T+p+o,b=Dd(i,i.VERTEX_SHADER,S),C=Dd(i,i.FRAGMENT_SHADER,v);i.attachShader(g,b),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(g)||"",F=i.getShaderInfoLog(b)||"",V=i.getShaderInfoLog(C)||"",j=H.trim(),G=F.trim(),q=V.trim();let z=!0,ie=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,C);else{const ae=Ud(i,b,"vertex"),ge=Ud(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+ae+`
`+ge)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(G===""||q==="")&&(ie=!1);ie&&(P.diagnostics={runnable:z,programLog:j,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(b),i.deleteShader(C),R=new Ao(i,g),x=LS(i,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(g,TS)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=C,this}let GS=0;class WS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new XS(e),t.set(e,n)),n}}class XS{constructor(e){this.id=GS++,this.code=e,this.usedTimes=0}}function jS(r,e,t,n,i,s,a){const o=new gp,c=new WS,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,E,P,H,F){const V=H.fog,j=F.geometry,G=x.isMeshStandardMaterial?H.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),z=q&&q.mapping===qo?q.image.height:null,ie=_[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ge=ae!==void 0?ae.length:0;let Pe=0;j.morphAttributes.position!==void 0&&(Pe=1),j.morphAttributes.normal!==void 0&&(Pe=2),j.morphAttributes.color!==void 0&&(Pe=3);let st,Ve,W,oe;if(ie){const et=fn[ie];st=et.vertexShader,Ve=et.fragmentShader}else st=x.vertexShader,Ve=x.fragmentShader,c.update(x),W=c.getVertexShaderID(x),oe=c.getFragmentShaderID(x);const ne=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,Rt=!!x.map,Ke=!!x.matcap,I=!!q,lt=!!x.aoMap,Me=!!x.lightMap,Je=!!x.bumpMap,Se=!!x.normalMap,ft=!!x.displacementMap,fe=!!x.emissiveMap,ze=!!x.metalnessMap,Bt=!!x.roughnessMap,Pt=x.anisotropy>0,A=x.clearcoat>0,y=x.dispersion>0,N=x.iridescence>0,$=x.sheen>0,K=x.transmission>0,X=Pt&&!!x.anisotropyMap,ye=A&&!!x.clearcoatMap,te=A&&!!x.clearcoatNormalMap,_e=A&&!!x.clearcoatRoughnessMap,ve=N&&!!x.iridescenceMap,Q=N&&!!x.iridescenceThicknessMap,ue=$&&!!x.sheenColorMap,Re=$&&!!x.sheenRoughnessMap,xe=!!x.specularMap,ce=!!x.specularColorMap,Ne=!!x.specularIntensityMap,D=K&&!!x.transmissionMap,ee=K&&!!x.thicknessMap,re=!!x.gradientMap,de=!!x.alphaMap,Z=x.alphaTest>0,Y=!!x.alphaHash,me=!!x.extensions;let Oe=Ui;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Oe=r.toneMapping);const ut={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:Ve,defines:x.defines,customVertexShaderID:W,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:un,alphaToCoverage:!!x.alphaToCoverage,map:Rt,matcap:Ke,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:z,aoMap:lt,lightMap:Me,bumpMap:Je,normalMap:Se,displacementMap:d&&ft,emissiveMap:fe,normalMapObjectSpace:Se&&x.normalMapType===zg,normalMapTangentSpace:Se&&x.normalMapType===dp,metalnessMap:ze,roughnessMap:Bt,anisotropy:Pt,anisotropyMap:X,clearcoat:A,clearcoatMap:ye,clearcoatNormalMap:te,clearcoatRoughnessMap:_e,dispersion:y,iridescence:N,iridescenceMap:ve,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:ue,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:ce,specularIntensityMap:Ne,transmission:K,transmissionMap:D,thicknessMap:ee,gradientMap:re,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:Z,alphaHash:Y,combine:x.combine,mapUv:Rt&&g(x.map.channel),aoMapUv:lt&&g(x.aoMap.channel),lightMapUv:Me&&g(x.lightMap.channel),bumpMapUv:Je&&g(x.bumpMap.channel),normalMapUv:Se&&g(x.normalMap.channel),displacementMapUv:ft&&g(x.displacementMap.channel),emissiveMapUv:fe&&g(x.emissiveMap.channel),metalnessMapUv:ze&&g(x.metalnessMap.channel),roughnessMapUv:Bt&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:ye&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(x.sheenRoughnessMap.channel),specularMapUv:xe&&g(x.specularMap.channel),specularColorMapUv:ce&&g(x.specularColorMap.channel),specularIntensityMapUv:Ne&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:ee&&g(x.thicknessMap.channel),alphaMapUv:de&&g(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Se||Pt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Rt||de),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Rt&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:fe&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hi,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(T(E,x),S(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function T(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const E=_[x.type];let P;if(E){const H=fn[E];P=Ls.clone(H.uniforms)}else P=x.uniforms;return P}function b(x,E){let P;for(let H=0,F=u.length;H<F;H++){const V=u[H];if(V.cacheKey===E){P=V,++P.usedTimes;break}}return P===void 0&&(P=new VS(r,E,x,s),u.push(P)),P}function C(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function w(x){c.remove(x)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:R}}function qS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function $S(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||$S),n.length>1&&n.sort(d||zd),i.length>1&&i.sort(d||zd)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function YS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Hd,r.set(n,[a])):i>=s.length?(a=new Hd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function KS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new be};break;case"SpotLight":t={position:new L,direction:new L,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function ZS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let JS=0;function QS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function eT(r){const e=new KS,t=ZS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,s=new Be,a=new Be;function o(l){let u=0,h=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,T=0,S=0,v=0,b=0,C=0,w=0;l.sort(QS);for(let x=0,E=l.length;x<E;x++){const P=l[x],H=P.color,F=P.intensity,V=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*F,h+=H.g*F,d+=H.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],F);w++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,z=t.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=P.shadow.matrix,T++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(H).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;const q=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,q.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[g]=q.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=j,v++}g++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(H).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const q=P.shadow,z=t.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==b||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=b,R.numLightProbes=w,n.version=JS++)}function c(l,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const S=l[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Vd(r){const e=new eT(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function tT(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Vd(r),e.set(i,[o])):s>=a.length?(o=new Vd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const nT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rT(r,e,t){let n=new Vu;const i=new He,s=new He,a=new je,o=new Rp({depthPacking:hp}),c=new Z_,l={},u=t.maxTextureSize,h={[xn]:on,[on]:xn,[hi]:hi},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:nT,fragmentShader:iT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Sn;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new en(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let p=this.type;this.render=function(C,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const x=r.getRenderTarget(),E=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),H=r.state;H.setBlending(gi),H.buffers.depth.getReversed()?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=p!==Ci&&this.type===Ci,V=p===Ci&&this.type!==Ci;for(let j=0,G=C.length;j<G;j++){const q=C[j],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ie=z.getFrameExtents();if(i.multiply(ie),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ie.x),i.x=s.x*ie.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ie.y),i.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null||F===!0||V===!0){const ge=this.type!==Ci?{minFilter:qt,magFilter:qt}:{};z.map!==null&&z.map.dispose(),z.map=new Bi(i.x,i.y,ge),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ae=z.getViewportCount();for(let ge=0;ge<ae;ge++){const Pe=z.getViewport(ge);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),H.viewport(a),z.updateMatrices(q,ge),n=z.getFrustum(),v(w,R,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Ci&&T(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,E,P)};function T(C,w){const R=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bi(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(w,null,R,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(w,null,R,f,g,null)}function S(C,w,R,x){let E=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)E=P;else if(E=R.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const H=E.uuid,F=w.uuid;let V=l[H];V===void 0&&(V={},l[H]=V);let j=V[F];j===void 0&&(j=E.clone(),V[F]=j,w.addEventListener("dispose",b)),E=j}if(E.visible=w.visible,E.wireframe=w.wireframe,x===Ci?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=r.properties.get(E);H.light=R}return E}function v(C,w,R,x,E){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Ci)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const F=e.update(C),V=C.material;if(Array.isArray(V)){const j=F.groups;for(let G=0,q=j.length;G<q;G++){const z=j[G],ie=V[z.materialIndex];if(ie&&ie.visible){const ae=S(C,ie,x,E);C.onBeforeShadow(r,C,w,R,F,ae,z),r.renderBufferDirect(R,null,F,ae,C,z),C.onAfterShadow(r,C,w,R,F,ae,z)}}}else if(V.visible){const j=S(C,V,x,E);C.onBeforeShadow(r,C,w,R,F,j,null),r.renderBufferDirect(R,null,F,j,C,null),C.onAfterShadow(r,C,w,R,F,j,null)}}const H=C.children;for(let F=0,V=H.length;F<V;F++)v(H[F],w,R,x,E)}function b(C){C.target.removeEventListener("dispose",b);for(const R in l){const x=l[R],E=C.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}const sT={[pl]:ml,[gl]:xl,[_l]:yl,[ps]:vl,[ml]:pl,[xl]:gl,[yl]:_l,[vl]:ps};function aT(r,e){function t(){let D=!1;const ee=new je;let re=null;const de=new je(0,0,0,0);return{setMask:function(Z){re!==Z&&!D&&(r.colorMask(Z,Z,Z,Z),re=Z)},setLocked:function(Z){D=Z},setClear:function(Z,Y,me,Oe,ut){ut===!0&&(Z*=Oe,Y*=Oe,me*=Oe),ee.set(Z,Y,me,Oe),de.equals(ee)===!1&&(r.clearColor(Z,Y,me,Oe),de.copy(ee))},reset:function(){D=!1,re=null,de.set(-1,0,0,0)}}}function n(){let D=!1,ee=!1,re=null,de=null,Z=null;return{setReversed:function(Y){if(ee!==Y){const me=e.get("EXT_clip_control");Y?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ee=Y;const Oe=Z;Z=null,this.setClear(Oe)}},getReversed:function(){return ee},setTest:function(Y){Y?ne(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Y){re!==Y&&!D&&(r.depthMask(Y),re=Y)},setFunc:function(Y){if(ee&&(Y=sT[Y]),de!==Y){switch(Y){case pl:r.depthFunc(r.NEVER);break;case ml:r.depthFunc(r.ALWAYS);break;case gl:r.depthFunc(r.LESS);break;case ps:r.depthFunc(r.LEQUAL);break;case _l:r.depthFunc(r.EQUAL);break;case vl:r.depthFunc(r.GEQUAL);break;case xl:r.depthFunc(r.GREATER);break;case yl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=Y}},setLocked:function(Y){D=Y},setClear:function(Y){Z!==Y&&(ee&&(Y=1-Y),r.clearDepth(Y),Z=Y)},reset:function(){D=!1,re=null,de=null,Z=null,ee=!1}}}function i(){let D=!1,ee=null,re=null,de=null,Z=null,Y=null,me=null,Oe=null,ut=null;return{setTest:function(et){D||(et?ne(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(et){ee!==et&&!D&&(r.stencilMask(et),ee=et)},setFunc:function(et,Si,ai){(re!==et||de!==Si||Z!==ai)&&(r.stencilFunc(et,Si,ai),re=et,de=Si,Z=ai)},setOp:function(et,Si,ai){(Y!==et||me!==Si||Oe!==ai)&&(r.stencilOp(et,Si,ai),Y=et,me=Si,Oe=ai)},setLocked:function(et){D=et},setClear:function(et){ut!==et&&(r.clearStencil(et),ut=et)},reset:function(){D=!1,ee=null,re=null,de=null,Z=null,Y=null,me=null,Oe=null,ut=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,T=null,S=null,v=null,b=null,C=null,w=new be(0,0,0),R=0,x=!1,E=null,P=null,H=null,F=null,V=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=q>=2);let ie=null,ae={};const ge=r.getParameter(r.SCISSOR_BOX),Pe=r.getParameter(r.VIEWPORT),st=new je().fromArray(ge),Ve=new je().fromArray(Pe);function W(D,ee,re,de){const Z=new Uint8Array(4),Y=r.createTexture();r.bindTexture(D,Y),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let me=0;me<re;me++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(ee+me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return Y}const oe={};oe[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(r.DEPTH_TEST),a.setFunc(ps),Je(!1),Se(Eh),ne(r.CULL_FACE),lt(gi);function ne(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function we(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Ae(D,ee){return h[D]!==ee?(r.bindFramebuffer(D,ee),h[D]=ee,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ee),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function De(D,ee){let re=f,de=!1;if(D){re=d.get(ee),re===void 0&&(re=[],d.set(ee,re));const Z=D.textures;if(re.length!==Z.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,me=Z.length;Y<me;Y++)re[Y]=r.COLOR_ATTACHMENT0+Y;re.length=Z.length,de=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,de=!0);de&&r.drawBuffers(re)}function Rt(D){return _!==D?(r.useProgram(D),_=D,!0):!1}const Ke={[Mr]:r.FUNC_ADD,[_g]:r.FUNC_SUBTRACT,[vg]:r.FUNC_REVERSE_SUBTRACT};Ke[xg]=r.MIN,Ke[yg]=r.MAX;const I={[Sg]:r.ZERO,[Tg]:r.ONE,[Mg]:r.SRC_COLOR,[dl]:r.SRC_ALPHA,[Rg]:r.SRC_ALPHA_SATURATE,[Ag]:r.DST_COLOR,[bg]:r.DST_ALPHA,[Eg]:r.ONE_MINUS_SRC_COLOR,[fl]:r.ONE_MINUS_SRC_ALPHA,[Cg]:r.ONE_MINUS_DST_COLOR,[wg]:r.ONE_MINUS_DST_ALPHA,[Pg]:r.CONSTANT_COLOR,[Lg]:r.ONE_MINUS_CONSTANT_COLOR,[Ig]:r.CONSTANT_ALPHA,[Dg]:r.ONE_MINUS_CONSTANT_ALPHA};function lt(D,ee,re,de,Z,Y,me,Oe,ut,et){if(D===gi){g===!0&&(we(r.BLEND),g=!1);return}if(g===!1&&(ne(r.BLEND),g=!0),D!==gg){if(D!==m||et!==x){if((p!==Mr||v!==Mr)&&(r.blendEquation(r.FUNC_ADD),p=Mr,v=Mr),et)switch(D){case Ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bh:r.blendFunc(r.ONE,r.ONE);break;case wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ah:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case wh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,S=null,b=null,C=null,w.set(0,0,0),R=0,m=D,x=et}return}Z=Z||ee,Y=Y||re,me=me||de,(ee!==p||Z!==v)&&(r.blendEquationSeparate(Ke[ee],Ke[Z]),p=ee,v=Z),(re!==T||de!==S||Y!==b||me!==C)&&(r.blendFuncSeparate(I[re],I[de],I[Y],I[me]),T=re,S=de,b=Y,C=me),(Oe.equals(w)===!1||ut!==R)&&(r.blendColor(Oe.r,Oe.g,Oe.b,ut),w.copy(Oe),R=ut),m=D,x=!1}function Me(D,ee){D.side===hi?we(r.CULL_FACE):ne(r.CULL_FACE);let re=D.side===on;ee&&(re=!re),Je(re),D.blending===Ji&&D.transparent===!1?lt(gi):lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(D){E!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),E=D)}function Se(D){D!==pg?(ne(r.CULL_FACE),D!==P&&(D===Eh?r.cullFace(r.BACK):D===mg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),P=D}function ft(D){D!==H&&(G&&r.lineWidth(D),H=D)}function fe(D,ee,re){D?(ne(r.POLYGON_OFFSET_FILL),(F!==ee||V!==re)&&(r.polygonOffset(ee,re),F=ee,V=re)):we(r.POLYGON_OFFSET_FILL)}function ze(D){D?ne(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function Bt(D){D===void 0&&(D=r.TEXTURE0+j-1),ie!==D&&(r.activeTexture(D),ie=D)}function Pt(D,ee,re){re===void 0&&(ie===null?re=r.TEXTURE0+j-1:re=ie);let de=ae[re];de===void 0&&(de={type:void 0,texture:void 0},ae[re]=de),(de.type!==D||de.texture!==ee)&&(ie!==re&&(r.activeTexture(re),ie=re),r.bindTexture(D,ee||oe[D]),de.type=D,de.texture=ee)}function A(){const D=ae[ie];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){st.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function Re(D){Ve.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ve.copy(D))}function xe(D,ee){let re=l.get(ee);re===void 0&&(re=new WeakMap,l.set(ee,re));let de=re.get(D);de===void 0&&(de=r.getUniformBlockIndex(ee,D.name),re.set(D,de))}function ce(D,ee){const de=l.get(ee).get(D);c.get(ee)!==de&&(r.uniformBlockBinding(ee,de,D.__bindingPointIndex),c.set(ee,de))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ie=null,ae={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,T=null,S=null,v=null,b=null,C=null,w=new be(0,0,0),R=0,x=!1,E=null,P=null,H=null,F=null,V=null,st.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:we,bindFramebuffer:Ae,drawBuffers:De,useProgram:Rt,setBlending:lt,setMaterial:Me,setFlipSided:Je,setCullFace:Se,setLineWidth:ft,setPolygonOffset:fe,setScissorTest:ze,activeTexture:Bt,bindTexture:Pt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:ve,texImage3D:Q,updateUBOMapping:xe,uniformBlockBinding:ce,texStorage2D:te,texStorage3D:_e,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:ye,scissor:ue,viewport:Re,reset:Ne}}function oT(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return f?new OffscreenCanvas(A,y):_a("canvas")}function g(A,y,N){let $=1;const K=Pt(A);if((K.width>N||K.height>N)&&($=N/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor($*K.width),ye=Math.floor($*K.height);h===void 0&&(h=_(X,ye));const te=y?_(X,ye):h;return te.width=X,te.height=ye,te.getContext("2d").drawImage(A,0,0,X,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+ye+")."),te}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(A,y,N,$,K=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=y;if(y===r.RED&&(N===r.FLOAT&&(X=r.R32F),N===r.HALF_FLOAT&&(X=r.R16F),N===r.UNSIGNED_BYTE&&(X=r.R8)),y===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.R8UI),N===r.UNSIGNED_SHORT&&(X=r.R16UI),N===r.UNSIGNED_INT&&(X=r.R32UI),N===r.BYTE&&(X=r.R8I),N===r.SHORT&&(X=r.R16I),N===r.INT&&(X=r.R32I)),y===r.RG&&(N===r.FLOAT&&(X=r.RG32F),N===r.HALF_FLOAT&&(X=r.RG16F),N===r.UNSIGNED_BYTE&&(X=r.RG8)),y===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RG8UI),N===r.UNSIGNED_SHORT&&(X=r.RG16UI),N===r.UNSIGNED_INT&&(X=r.RG32UI),N===r.BYTE&&(X=r.RG8I),N===r.SHORT&&(X=r.RG16I),N===r.INT&&(X=r.RG32I)),y===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGB8UI),N===r.UNSIGNED_SHORT&&(X=r.RGB16UI),N===r.UNSIGNED_INT&&(X=r.RGB32UI),N===r.BYTE&&(X=r.RGB8I),N===r.SHORT&&(X=r.RGB16I),N===r.INT&&(X=r.RGB32I)),y===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),N===r.UNSIGNED_INT&&(X=r.RGBA32UI),N===r.BYTE&&(X=r.RGBA8I),N===r.SHORT&&(X=r.RGBA16I),N===r.INT&&(X=r.RGBA32I)),y===r.RGB&&N===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),y===r.RGBA){const ye=K?Do:qe.getTransfer($);N===r.FLOAT&&(X=r.RGBA32F),N===r.HALF_FLOAT&&(X=r.RGBA16F),N===r.UNSIGNED_BYTE&&(X=ye===tt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(A,y){let N;return A?y===null||y===Ir||y===da?N=r.DEPTH24_STENCIL8:y===ii?N=r.DEPTH32F_STENCIL8:y===ha&&(N=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ir||y===da?N=r.DEPTH_COMPONENT24:y===ii?N=r.DEPTH_COMPONENT32F:y===ha&&(N=r.DEPTH_COMPONENT16),N}function b(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Et?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),R(y),y.isVideoTexture&&u.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),E(y)}function R(A){const y=n.get(A);if(y.__webglInit===void 0)return;const N=A.source,$=d.get(N);if($){const K=$[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(A),Object.keys($).length===0&&d.delete(N)}n.remove(A)}function x(A){const y=n.get(A);r.deleteTexture(y.__webglTexture);const N=A.source,$=d.get(N);delete $[y.__cacheKey],a.memory.textures--}function E(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let K=0;K<y.__webglFramebuffer[$].length;K++)r.deleteFramebuffer(y.__webglFramebuffer[$][K]);else r.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)r.deleteFramebuffer(y.__webglFramebuffer[$]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=A.textures;for(let $=0,K=N.length;$<K;$++){const X=n.get(N[$]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[$])}n.remove(A)}let P=0;function H(){P=0}function F(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function j(A,y){const N=n.get(A);if(A.isVideoTexture&&ze(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(N,A,y);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+y)}function G(A,y){const N=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){oe(N,A,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+y)}function q(A,y){const N=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){oe(N,A,y);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+y)}function z(A,y){const N=n.get(A);if(A.version>0&&N.__version!==A.version){ne(N,A,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+y)}const ie={[_s]:r.REPEAT,[Ht]:r.CLAMP_TO_EDGE,[Io]:r.MIRRORED_REPEAT},ae={[qt]:r.NEAREST,[np]:r.NEAREST_MIPMAP_NEAREST,[na]:r.NEAREST_MIPMAP_LINEAR,[Et]:r.LINEAR,[So]:r.LINEAR_MIPMAP_NEAREST,[ni]:r.LINEAR_MIPMAP_LINEAR},ge={[Hg]:r.NEVER,[qg]:r.ALWAYS,[Vg]:r.LESS,[fp]:r.LEQUAL,[Gg]:r.EQUAL,[jg]:r.GEQUAL,[Wg]:r.GREATER,[Xg]:r.NOTEQUAL};function Pe(A,y){if(y.type===ii&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Et||y.magFilter===So||y.magFilter===na||y.magFilter===ni||y.minFilter===Et||y.minFilter===So||y.minFilter===na||y.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ie[y.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ie[y.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ie[y.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ae[y.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ae[y.minFilter]),y.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qt||y.minFilter!==na&&y.minFilter!==ni||y.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function st(A,y){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const $=y.source;let K=d.get($);K===void 0&&(K={},d.set($,K));const X=V(y);if(X!==A.__cacheKey){K[X]===void 0&&(K[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[X].usedTimes++;const ye=K[A.__cacheKey];ye!==void 0&&(K[A.__cacheKey].usedTimes--,ye.usedTimes===0&&x(y)),A.__cacheKey=X,A.__webglTexture=K[X].texture}return N}function Ve(A,y,N){return Math.floor(Math.floor(A/N)/y)}function W(A,y,N,$){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,N,$,y.data);else{X.sort((Q,ue)=>Q.start-ue.start);let ye=0;for(let Q=1;Q<X.length;Q++){const ue=X[ye],Re=X[Q],xe=ue.start+ue.count,ce=Ve(Re.start,y.width,4),Ne=Ve(ue.start,y.width,4);Re.start<=xe+1&&ce===Ne&&Ve(Re.start+Re.count-1,y.width,4)===ce?ue.count=Math.max(ue.count,Re.start+Re.count-ue.start):(++ye,X[ye]=Re)}X.length=ye+1;const te=r.getParameter(r.UNPACK_ROW_LENGTH),_e=r.getParameter(r.UNPACK_SKIP_PIXELS),ve=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Q=0,ue=X.length;Q<ue;Q++){const Re=X[Q],xe=Math.floor(Re.start/4),ce=Math.ceil(Re.count/4),Ne=xe%y.width,D=Math.floor(xe/y.width),ee=ce,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Ne,D,ee,re,N,$,y.data)}A.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,te),r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,ve)}}function oe(A,y,N){let $=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=r.TEXTURE_3D);const K=st(A,y),X=y.source;t.bindTexture($,A.__webglTexture,r.TEXTURE0+N);const ye=n.get(X);if(X.version!==ye.__version||K===!0){t.activeTexture(r.TEXTURE0+N);const te=qe.getPrimaries(qe.workingColorSpace),_e=y.colorSpace===$i?null:qe.getPrimaries(y.colorSpace),ve=y.colorSpace===$i||te===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Q=g(y.image,!1,i.maxTextureSize);Q=Bt(y,Q);const ue=s.convert(y.format,y.colorSpace),Re=s.convert(y.type);let xe=S(y.internalFormat,ue,Re,y.colorSpace,y.isVideoTexture);Pe($,y);let ce;const Ne=y.mipmaps,D=y.isVideoTexture!==!0,ee=ye.__version===void 0||K===!0,re=X.dataReady,de=b(y,Q);if(y.isDepthTexture)xe=v(y.format===pa,y.type),ee&&(D?t.texStorage2D(r.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,ue,Re,null));else if(y.isDataTexture)if(Ne.length>0){D&&ee&&t.texStorage2D(r.TEXTURE_2D,de,xe,Ne[0].width,Ne[0].height);for(let Z=0,Y=Ne.length;Z<Y;Z++)ce=Ne[Z],D?re&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,ue,Re,ce.data):t.texImage2D(r.TEXTURE_2D,Z,xe,ce.width,ce.height,0,ue,Re,ce.data);y.generateMipmaps=!1}else D?(ee&&t.texStorage2D(r.TEXTURE_2D,de,xe,Q.width,Q.height),re&&W(y,Q,ue,Re)):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,ue,Re,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,xe,Ne[0].width,Ne[0].height,Q.depth);for(let Z=0,Y=Ne.length;Z<Y;Z++)if(ce=Ne[Z],y.format!==Wn)if(ue!==null)if(D){if(re)if(y.layerUpdates.size>0){const me=vd(ce.width,ce.height,y.format,y.type);for(const Oe of y.layerUpdates){const ut=ce.data.subarray(Oe*me/ce.data.BYTES_PER_ELEMENT,(Oe+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Oe,ce.width,ce.height,1,ue,ut)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,Q.depth,ue,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,xe,ce.width,ce.height,Q.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,Q.depth,ue,Re,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,xe,ce.width,ce.height,Q.depth,0,ue,Re,ce.data)}else{D&&ee&&t.texStorage2D(r.TEXTURE_2D,de,xe,Ne[0].width,Ne[0].height);for(let Z=0,Y=Ne.length;Z<Y;Z++)ce=Ne[Z],y.format!==Wn?ue!==null?D?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?re&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,ue,Re,ce.data):t.texImage2D(r.TEXTURE_2D,Z,xe,ce.width,ce.height,0,ue,Re,ce.data)}else if(y.isDataArrayTexture)if(D){if(ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,xe,Q.width,Q.height,Q.depth),re)if(y.layerUpdates.size>0){const Z=vd(Q.width,Q.height,y.format,y.type);for(const Y of y.layerUpdates){const me=Q.data.subarray(Y*Z/Q.data.BYTES_PER_ELEMENT,(Y+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,ue,Re,me)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Re,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,ue,Re,Q.data);else if(y.isData3DTexture)D?(ee&&t.texStorage3D(r.TEXTURE_3D,de,xe,Q.width,Q.height,Q.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Re,Q.data)):t.texImage3D(r.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,ue,Re,Q.data);else if(y.isFramebufferTexture){if(ee)if(D)t.texStorage2D(r.TEXTURE_2D,de,xe,Q.width,Q.height);else{let Z=Q.width,Y=Q.height;for(let me=0;me<de;me++)t.texImage2D(r.TEXTURE_2D,me,xe,Z,Y,0,ue,Re,null),Z>>=1,Y>>=1}}else if(Ne.length>0){if(D&&ee){const Z=Pt(Ne[0]);t.texStorage2D(r.TEXTURE_2D,de,xe,Z.width,Z.height)}for(let Z=0,Y=Ne.length;Z<Y;Z++)ce=Ne[Z],D?re&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ue,Re,ce):t.texImage2D(r.TEXTURE_2D,Z,xe,ue,Re,ce);y.generateMipmaps=!1}else if(D){if(ee){const Z=Pt(Q);t.texStorage2D(r.TEXTURE_2D,de,xe,Z.width,Z.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Re,Q)}else t.texImage2D(r.TEXTURE_2D,0,xe,ue,Re,Q);m(y)&&p($),ye.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ne(A,y,N){if(y.image.length!==6)return;const $=st(A,y),K=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+N);const X=n.get(K);if(K.version!==X.__version||$===!0){t.activeTexture(r.TEXTURE0+N);const ye=qe.getPrimaries(qe.workingColorSpace),te=y.colorSpace===$i?null:qe.getPrimaries(y.colorSpace),_e=y.colorSpace===$i||ye===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ve=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!ve&&!Q?ue[Y]=g(y.image[Y],!0,i.maxCubemapSize):ue[Y]=Q?y.image[Y].image:y.image[Y],ue[Y]=Bt(y,ue[Y]);const Re=ue[0],xe=s.convert(y.format,y.colorSpace),ce=s.convert(y.type),Ne=S(y.internalFormat,xe,ce,y.colorSpace),D=y.isVideoTexture!==!0,ee=X.__version===void 0||$===!0,re=K.dataReady;let de=b(y,Re);Pe(r.TEXTURE_CUBE_MAP,y);let Z;if(ve){D&&ee&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Ne,Re.width,Re.height);for(let Y=0;Y<6;Y++){Z=ue[Y].mipmaps;for(let me=0;me<Z.length;me++){const Oe=Z[me];y.format!==Wn?xe!==null?D?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,Oe.width,Oe.height,xe,Oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,Ne,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,Oe.width,Oe.height,xe,ce,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,Ne,Oe.width,Oe.height,0,xe,ce,Oe.data)}}}else{if(Z=y.mipmaps,D&&ee){Z.length>0&&de++;const Y=Pt(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Ne,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,xe,ce,ue[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,ue[Y].width,ue[Y].height,0,xe,ce,ue[Y].data);for(let me=0;me<Z.length;me++){const ut=Z[me].image[Y].image;D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,ut.width,ut.height,xe,ce,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,Ne,ut.width,ut.height,0,xe,ce,ut.data)}}else{D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe,ce,ue[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,xe,ce,ue[Y]);for(let me=0;me<Z.length;me++){const Oe=Z[me];D?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,xe,ce,Oe.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,Ne,xe,ce,Oe.image[Y])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),X.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function we(A,y,N,$,K,X){const ye=s.convert(N.format,N.colorSpace),te=s.convert(N.type),_e=S(N.internalFormat,ye,te,N.colorSpace),ve=n.get(y),Q=n.get(N);if(Q.__renderTarget=y,!ve.__hasExternalTextures){const ue=Math.max(1,y.width>>X),Re=Math.max(1,y.height>>X);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,X,_e,ue,Re,y.depth,0,ye,te,null):t.texImage2D(K,X,_e,ue,Re,0,ye,te,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),fe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,K,Q.__webglTexture,0,ft(y)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,K,Q.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(A,y,N){if(r.bindRenderbuffer(r.RENDERBUFFER,A),y.depthBuffer){const $=y.depthTexture,K=$&&$.isDepthTexture?$.type:null,X=v(y.stencilBuffer,K),ye=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=ft(y);fe(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,X,y.width,y.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,X,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,X,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,A)}else{const $=y.textures;for(let K=0;K<$.length;K++){const X=$[K],ye=s.convert(X.format,X.colorSpace),te=s.convert(X.type),_e=S(X.internalFormat,ye,te,X.colorSpace),ve=ft(y);N&&fe(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,_e,y.width,y.height):fe(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,_e,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,_e,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const K=$.__webglTexture,X=ft(y);if(y.depthTexture.format===fa)fe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(y.depthTexture.format===pa)fe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(A){const y=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=$}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const $=A.texture.mipmaps;$&&$.length>0?De(y.__webglFramebuffer[0],A):De(y.__webglFramebuffer,A)}else if(N){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=r.createRenderbuffer(),Ae(y.__webglDepthbuffer[$],A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,X)}}else{const $=A.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ae(y.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(A,y,N){const $=n.get(A);y!==void 0&&we($.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Rt(A)}function I(A){const y=A.texture,N=n.get(A),$=n.get(y);A.addEventListener("dispose",w);const K=A.textures,X=A.isWebGLCubeRenderTarget===!0,ye=K.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=y.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[te]=[];for(let _e=0;_e<y.mipmaps.length;_e++)N.__webglFramebuffer[te][_e]=r.createFramebuffer()}else N.__webglFramebuffer[te]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)N.__webglFramebuffer[te]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(ye)for(let te=0,_e=K.length;te<_e;te++){const ve=n.get(K[te]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&fe(A)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let te=0;te<K.length;te++){const _e=K[te];N.__webglColorRenderbuffer[te]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[te]);const ve=s.convert(_e.format,_e.colorSpace),Q=s.convert(_e.type),ue=S(_e.internalFormat,ve,Q,_e.colorSpace,A.isXRRenderTarget===!0),Re=ft(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ue,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,N.__webglColorRenderbuffer[te])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,y);for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)we(N.__webglFramebuffer[te][_e],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e);else we(N.__webglFramebuffer[te],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let te=0,_e=K.length;te<_e;te++){const ve=K[te],Q=n.get(ve);let ue=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),Pe(ue,ve),we(N.__webglFramebuffer,A,ve,r.COLOR_ATTACHMENT0+te,ue,0),m(ve)&&p(ue)}t.unbindTexture()}else{let te=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(te,$.__webglTexture),Pe(te,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)we(N.__webglFramebuffer[_e],A,y,r.COLOR_ATTACHMENT0,te,_e);else we(N.__webglFramebuffer,A,y,r.COLOR_ATTACHMENT0,te,0);m(y)&&p(te),t.unbindTexture()}A.depthBuffer&&Rt(A)}function lt(A){const y=A.textures;for(let N=0,$=y.length;N<$;N++){const K=y[N];if(m(K)){const X=T(A),ye=n.get(K).__webglTexture;t.bindTexture(X,ye),p(X),t.unbindTexture()}}}const Me=[],Je=[];function Se(A){if(A.samples>0){if(fe(A)===!1){const y=A.textures,N=A.width,$=A.height;let K=r.COLOR_BUFFER_BIT;const X=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(A),te=y.length>1;if(te)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const _e=A.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),te){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const Q=n.get(y[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,N,$,0,0,N,$,K,r.NEAREST),c===!0&&(Me.length=0,Je.length=0,Me.push(r.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Me.push(X),Je.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),te)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const Q=n.get(y[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ft(A){return Math.min(i.maxSamples,A.samples)}function fe(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ze(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Bt(A,y){const N=A.colorSpace,$=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==un&&N!==$i&&(qe.getTransfer(N)===tt?($!==Wn||K!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Ke,this.setupRenderTarget=I,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=fe}function cT(r,e){function t(n,i=$i){let s;const a=qe.getTransfer(i);if(n===vi)return r.UNSIGNED_BYTE;if(n===Du)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ou)return r.UNSIGNED_SHORT_5_5_5_1;if(n===sp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ip)return r.BYTE;if(n===rp)return r.SHORT;if(n===ha)return r.UNSIGNED_SHORT;if(n===Iu)return r.INT;if(n===Ir)return r.UNSIGNED_INT;if(n===ii)return r.FLOAT;if(n===Dr)return r.HALF_FLOAT;if(n===ap)return r.ALPHA;if(n===op)return r.RGB;if(n===Wn)return r.RGBA;if(n===fa)return r.DEPTH_COMPONENT;if(n===pa)return r.DEPTH_STENCIL;if(n===Uu)return r.RED;if(n===Nu)return r.RED_INTEGER;if(n===cp)return r.RG;if(n===Fu)return r.RG_INTEGER;if(n===Bu)return r.RGBA_INTEGER;if(n===To||n===Mo||n===Eo||n===bo)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===El||n===bl||n===wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Cl||n===Rl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Al||n===Cl)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Ll||n===Il||n===Dl||n===Ol||n===Ul||n===Nl||n===Fl||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Wl||n===Xl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wo)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lp||n===jl||n===ql||n===$l)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===da?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Bp extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const lT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uT=`
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

}`;class hT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:lT,fragmentShader:uT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dT extends Ps{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const g=new hT,m={},p=t.getContextAttributes();let T=null,S=null;const v=[],b=[],C=new He;let w=null;const R=new Jt;R.viewport=new je;const x=new Jt;x.viewport=new je;const E=[R,x],P=new yv;let H=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=v[W];return oe===void 0&&(oe=new Rc,v[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=v[W];return oe===void 0&&(oe=new Rc,v[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=v[W];return oe===void 0&&(oe=new Rc,v[W]=oe),oe.getHandSpace()};function V(W){const oe=b.indexOf(W.inputSource);if(oe===-1)return;const ne=v[oe];ne!==void 0&&(ne.update(W.inputSource,W.frame,l||a),ne.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",G);for(let W=0;W<v.length;W++){const oe=b[W];oe!==null&&(b[W]=null,v[W].disconnect(oe))}H=null,F=null,g.reset();for(const W in m)delete m[W];e.setRenderTarget(T),f=null,d=null,h=null,i=null,S=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",j),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(i,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,we=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?pa:fa,we=p.stencil?da:Ir);const De={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=h.createProjectionLayer(De),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Bi(d.textureWidth,d.textureHeight,{format:Wn,type:vi,depthTexture:new Cp(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Bi(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(W){for(let oe=0;oe<W.removed.length;oe++){const ne=W.removed[oe],we=b.indexOf(ne);we>=0&&(b[we]=null,v[we].disconnect(ne))}for(let oe=0;oe<W.added.length;oe++){const ne=W.added[oe];let we=b.indexOf(ne);if(we===-1){for(let De=0;De<v.length;De++)if(De>=b.length){b.push(ne),we=De;break}else if(b[De]===null){b[De]=ne,we=De;break}if(we===-1)break}const Ae=v[we];Ae&&Ae.connect(ne)}}const q=new L,z=new L;function ie(W,oe,ne){q.setFromMatrixPosition(oe.matrixWorld),z.setFromMatrixPosition(ne.matrixWorld);const we=q.distanceTo(z),Ae=oe.projectionMatrix.elements,De=ne.projectionMatrix.elements,Rt=Ae[14]/(Ae[10]-1),Ke=Ae[14]/(Ae[10]+1),I=(Ae[9]+1)/Ae[5],lt=(Ae[9]-1)/Ae[5],Me=(Ae[8]-1)/Ae[0],Je=(De[8]+1)/De[0],Se=Rt*Me,ft=Rt*Je,fe=we/(-Me+Je),ze=fe*-Me;if(oe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ze),W.translateZ(fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ae[10]===-1)W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Bt=Rt+fe,Pt=Ke+fe,A=Se-ze,y=ft+(we-ze),N=I*Ke/Pt*Bt,$=lt*Ke/Pt*Bt;W.projectionMatrix.makePerspective(A,y,N,$,Bt,Pt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ae(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let oe=W.near,ne=W.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),P.near=x.near=R.near=oe,P.far=x.far=R.far=ne,(H!==P.near||F!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),H=P.near,F=P.far),P.layers.mask=W.layers.mask|6,R.layers.mask=P.layers.mask&3,x.layers.mask=P.layers.mask&5;const we=W.parent,Ae=P.cameras;ae(P,we);for(let De=0;De<Ae.length;De++)ae(Ae[De],we);Ae.length===2?ie(P,R,x):P.projectionMatrix.copy(R.projectionMatrix),ge(W,P,we)};function ge(W,oe,ne){ne===null?W.matrix.copy(oe.matrixWorld):(W.matrix.copy(ne.matrixWorld),W.matrix.invert(),W.matrix.multiply(oe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=vs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(W){return m[W]};let Pe=null;function st(W,oe){if(u=oe.getViewerPose(l||a),_=oe,u!==null){const ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let we=!1;ne.length!==P.cameras.length&&(P.cameras.length=0,we=!0);for(let Ke=0;Ke<ne.length;Ke++){const I=ne[Ke];let lt=null;if(f!==null)lt=f.getViewport(I);else{const Je=h.getViewSubImage(d,I);lt=Je.viewport,Ke===0&&(e.setRenderTargetTextures(S,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(S))}let Me=E[Ke];Me===void 0&&(Me=new Jt,Me.layers.enable(Ke),Me.viewport=new je,E[Ke]=Me),Me.matrix.fromArray(I.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(I.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(lt.x,lt.y,lt.width,lt.height),Ke===0&&(P.matrix.copy(Me.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),we===!0&&P.cameras.push(Me)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ke=h.getDepthInformation(ne[0]);Ke&&Ke.isValid&&Ke.texture&&g.init(Ke,i.renderState)}if(Ae&&Ae.includes("camera-access")&&(e.state.unbindTexture(),h))for(let Ke=0;Ke<ne.length;Ke++){const I=ne[Ke].camera;if(I){let lt=m[I];lt||(lt=new Bp,m[I]=lt);const Me=h.getCameraImage(I);lt.sourceTexture=Me}}}for(let ne=0;ne<v.length;ne++){const we=b[ne],Ae=v[ne];we!==null&&Ae!==void 0&&Ae.update(we,oe,l||a)}Pe&&Pe(W,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Ve=new Dp;Ve.setAnimationLoop(st),this.setAnimationLoop=function(W){Pe=W},this.dispose=function(){}}}const mr=new Dn,fT=new Be;function pT(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),S=T.envMap,v=T.envMapRotation;S&&(m.envMap.value=S,mr.copy(v),mr.x*=-1,mr.y*=-1,mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(fT.makeRotationFromEuler(mr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mT(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const v=S.program;n.uniformBlockBinding(T,v)}function l(T,S){let v=i[T.id];v===void 0&&(_(T),v=u(T),i[T.id]=v,T.addEventListener("dispose",m));const b=S.program;n.updateUBOMapping(T,b);const C=e.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function u(T){const S=h();T.__bindingPointIndex=S;const v=r.createBuffer(),b=T.__size,C=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,b,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=i[T.id],v=T.uniforms,b=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let C=0,w=v.length;C<w;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let x=0,E=R.length;x<E;x++){const P=R[x];if(f(P,C,x,b)===!0){const H=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let j=0;j<F.length;j++){const G=F[j],q=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,H+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(T,S,v,b){const C=T.value,w=S+"_"+v;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{const R=b[w];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return b[w]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function _(T){const S=T.uniforms;let v=0;const b=16;for(let w=0,R=S.length;w<R;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,P=x.length;E<P;E++){const H=x[E],F=Array.isArray(H.value)?H.value:[H.value];for(let V=0,j=F.length;V<j;V++){const G=F[V],q=g(G),z=v%b,ie=z%q.boundary,ae=z+ie;v+=ie,ae!==0&&b-ae<q.storage&&(v+=b-ae),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=q.storage}}}const C=v%b;return C>0&&(v+=b-C),T.__size=v,T.__cache={},this}function g(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class gT{constructor(e={}){const{canvas:t=u_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=mt;let C=0,w=0,R=null,x=-1,E=null;const P=new je,H=new je;let F=null;const V=new be(0);let j=0,G=t.width,q=t.height,z=1,ie=null,ae=null;const ge=new je(0,0,G,q),Pe=new je(0,0,G,q);let st=!1;const Ve=new Vu;let W=!1,oe=!1;const ne=new Be,we=new L,Ae=new je,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Ke(){return R===null?z:1}let I=n;function lt(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lu}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Z,!1),I===null){const O="webgl2";if(I=lt(O,M),I===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Me,Je,Se,ft,fe,ze,Bt,Pt,A,y,N,$,K,X,ye,te,_e,ve,Q,ue,Re,xe,ce,Ne;function D(){Me=new wy(I),Me.init(),xe=new cT(I,Me),Je=new xy(I,Me,e,xe),Se=new aT(I,Me),Je.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),ft=new Ry(I),fe=new qS,ze=new oT(I,Me,Se,fe,Je,xe,ft),Bt=new Sy(v),Pt=new by(v),A=new Uv(I),ce=new _y(I,A),y=new Ay(I,A,ft,ce),N=new Ly(I,y,A,ft),Q=new Py(I,Je,ze),te=new yy(fe),$=new jS(v,Bt,Pt,Me,Je,ce,te),K=new pT(v,fe),X=new YS,ye=new tT(Me),ve=new gy(v,Bt,Pt,Se,N,f,c),_e=new rT(v,N,Je),Ne=new mT(I,ft,Je,Se),ue=new vy(I,Me,ft),Re=new Cy(I,Me,ft),ft.programs=$.programs,v.capabilities=Je,v.extensions=Me,v.properties=fe,v.renderLists=X,v.shadowMap=_e,v.state=Se,v.info=ft}D();const ee=new dT(v,I);this.xr=ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(G,q,!1))},this.getSize=function(M){return M.set(G,q)},this.setSize=function(M,O,B=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,q=O,t.width=Math.floor(M*z),t.height=Math.floor(O*z),B===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(G*z,q*z).floor()},this.setDrawingBufferSize=function(M,O,B){G=M,q=O,z=B,t.width=Math.floor(M*B),t.height=Math.floor(O*B),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ge)},this.setViewport=function(M,O,B,k){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,O,B,k),Se.viewport(P.copy(ge).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Pe)},this.setScissor=function(M,O,B,k){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,O,B,k),Se.scissor(H.copy(Pe).multiplyScalar(z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){Se.setScissorTest(st=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,B=!0){let k=0;if(M){let U=!1;if(R!==null){const J=R.texture.format;U=J===Bu||J===Fu||J===Nu}if(U){const J=R.texture.type,le=J===vi||J===Ir||J===ha||J===da||J===Du||J===Ou,pe=ve.getClearColor(),he=ve.getClearAlpha(),Ce=pe.r,Le=pe.g,Te=pe.b;le?(_[0]=Ce,_[1]=Le,_[2]=Te,_[3]=he,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Ce,g[1]=Le,g[2]=Te,g[3]=he,I.clearBufferiv(I.COLOR,0,g))}else k|=I.COLOR_BUFFER_BIT}O&&(k|=I.DEPTH_BUFFER_BIT),B&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ve.dispose(),X.dispose(),ye.dispose(),fe.dispose(),Bt.dispose(),Pt.dispose(),N.dispose(),ce.dispose(),Ne.dispose(),$.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ai),ee.removeEventListener("sessionend",vh),cr.stop()};function re(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=ft.autoReset,O=_e.enabled,B=_e.autoUpdate,k=_e.needsUpdate,U=_e.type;D(),ft.autoReset=M,_e.enabled=O,_e.autoUpdate=B,_e.needsUpdate=k,_e.type=U}function Z(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Y(M){const O=M.target;O.removeEventListener("dispose",Y),me(O)}function me(M){Oe(M),fe.remove(M)}function Oe(M){const O=fe.get(M).programs;O!==void 0&&(O.forEach(function(B){$.releaseProgram(B)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,B,k,U,J){O===null&&(O=De);const le=U.isMesh&&U.matrixWorld.determinant()<0,pe=cg(M,O,B,k,U);Se.setMaterial(k,le);let he=B.index,Ce=1;if(k.wireframe===!0){if(he=y.getWireframeAttribute(B),he===void 0)return;Ce=2}const Le=B.drawRange,Te=B.attributes.position;let Xe=Le.start*Ce,rt=(Le.start+Le.count)*Ce;J!==null&&(Xe=Math.max(Xe,J.start*Ce),rt=Math.min(rt,(J.start+J.count)*Ce)),he!==null?(Xe=Math.max(Xe,0),rt=Math.min(rt,he.count)):Te!=null&&(Xe=Math.max(Xe,0),rt=Math.min(rt,Te.count));const wt=rt-Xe;if(wt<0||wt===1/0)return;ce.setup(U,k,pe,B,he);let dt,at=ue;if(he!==null&&(dt=A.get(he),at=Re,at.setIndex(dt)),U.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*Ke()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(U.isLine){let Ee=k.linewidth;Ee===void 0&&(Ee=1),Se.setLineWidth(Ee*Ke()),U.isLineSegments?at.setMode(I.LINES):U.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else U.isPoints?at.setMode(I.POINTS):U.isSprite&&at.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))at.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,vt=U._multiDrawCounts,Ze=U._multiDrawCount,Tn=he?A.get(he).bytesPerElement:1,Nr=fe.get(k).currentProgram.getUniforms();for(let Mn=0;Mn<Ze;Mn++)Nr.setValue(I,"_gl_DrawID",Mn),at.render(Ee[Mn]/Tn,vt[Mn])}else if(U.isInstancedMesh)at.renderInstances(Xe,wt,U.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,vt=Math.min(B.instanceCount,Ee);at.renderInstances(Xe,wt,vt)}else at.render(Xe,wt)};function ut(M,O,B){M.transparent===!0&&M.side===hi&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,Na(M,O,B),M.side=xn,M.needsUpdate=!0,Na(M,O,B),M.side=hi):Na(M,O,B)}this.compile=function(M,O,B=null){B===null&&(B=M),p=ye.get(B),p.init(O),S.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==B&&M.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let le=0;le<J.length;le++){const pe=J[le];ut(pe,B,U),k.add(pe)}else ut(J,B,U),k.add(J)}),p=S.pop(),k},this.compileAsync=function(M,O,B=null){const k=this.compile(M,O,B);return new Promise(U=>{function J(){if(k.forEach(function(le){fe.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){U(M);return}setTimeout(J,10)}Me.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let et=null;function Si(M){et&&et(M)}function ai(){cr.stop()}function vh(){cr.start()}const cr=new Dp;cr.setAnimationLoop(Si),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(M){et=M,ee.setAnimationLoop(M),M===null?cr.stop():cr.start()},ee.addEventListener("sessionstart",ai),ee.addEventListener("sessionend",vh),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(O),O=ee.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,O,R),p=ye.get(M,S.length),p.init(O),S.push(p),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ve.setFromProjectionMatrix(ne,pi,O.reversedDepth),oe=this.localClippingEnabled,W=te.init(this.clippingPlanes,oe),m=X.get(M,T.length),m.init(),T.push(m),ee.enabled===!0&&ee.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&ac(J,O,-1/0,v.sortObjects)}ac(M,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ie,ae),Rt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Rt&&ve.addToRenderList(m,M),this.info.render.frame++,W===!0&&te.beginShadows();const B=p.state.shadowsArray;_e.render(B,M,O),W===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(p.setupLights(),O.isArrayCamera){const J=O.cameras;if(U.length>0)for(let le=0,pe=J.length;le<pe;le++){const he=J[le];yh(k,U,M,he)}Rt&&ve.render(M);for(let le=0,pe=J.length;le<pe;le++){const he=J[le];xh(m,M,he,he.viewport)}}else U.length>0&&yh(k,U,M,O),Rt&&ve.render(M),xh(m,M,O);R!==null&&w===0&&(ze.updateMultisampleRenderTarget(R),ze.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(v,M,O),ce.resetDefaultState(),x=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],W===!0&&te.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ac(M,O,B,k){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ve.intersectsSprite(M)){k&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);const le=N.update(M),pe=M.material;pe.visible&&m.push(M,le,pe,B,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ve.intersectsObject(M))){const le=N.update(M),pe=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ae.copy(le.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(ne)),Array.isArray(pe)){const he=le.groups;for(let Ce=0,Le=he.length;Ce<Le;Ce++){const Te=he[Ce],Xe=pe[Te.materialIndex];Xe&&Xe.visible&&m.push(M,le,Xe,B,Ae.z,Te)}}else pe.visible&&m.push(M,le,pe,B,Ae.z,null)}}const J=M.children;for(let le=0,pe=J.length;le<pe;le++)ac(J[le],O,B,k)}function xh(M,O,B,k){const U=M.opaque,J=M.transmissive,le=M.transparent;p.setupLightsView(B),W===!0&&te.setGlobalState(v.clippingPlanes,B),k&&Se.viewport(P.copy(k)),U.length>0&&Ua(U,O,B),J.length>0&&Ua(J,O,B),le.length>0&&Ua(le,O,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function yh(M,O,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Bi(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Dr:vi,minFilter:ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const J=p.state.transmissionRenderTarget[k.id],le=k.viewport||P;J.setSize(le.z*v.transmissionResolutionScale,le.w*v.transmissionResolutionScale);const pe=v.getRenderTarget(),he=v.getActiveCubeFace(),Ce=v.getActiveMipmapLevel();v.setRenderTarget(J),v.getClearColor(V),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),Rt&&ve.render(B);const Le=v.toneMapping;v.toneMapping=Ui;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),W===!0&&te.setGlobalState(v.clippingPlanes,k),Ua(M,B,k),ze.updateMultisampleRenderTarget(J),ze.updateRenderTargetMipmap(J),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let rt=0,wt=O.length;rt<wt;rt++){const dt=O[rt],at=dt.object,Ee=dt.geometry,vt=dt.material,Ze=dt.group;if(vt.side===hi&&at.layers.test(k.layers)){const Tn=vt.side;vt.side=on,vt.needsUpdate=!0,Sh(at,B,k,Ee,vt,Ze),vt.side=Tn,vt.needsUpdate=!0,Xe=!0}}Xe===!0&&(ze.updateMultisampleRenderTarget(J),ze.updateRenderTargetMipmap(J))}v.setRenderTarget(pe,he,Ce),v.setClearColor(V,j),Te!==void 0&&(k.viewport=Te),v.toneMapping=Le}function Ua(M,O,B){const k=O.isScene===!0?O.overrideMaterial:null;for(let U=0,J=M.length;U<J;U++){const le=M[U],pe=le.object,he=le.geometry,Ce=le.group;let Le=le.material;Le.allowOverride===!0&&k!==null&&(Le=k),pe.layers.test(B.layers)&&Sh(pe,O,B,he,Le,Ce)}}function Sh(M,O,B,k,U,J){M.onBeforeRender(v,O,B,k,U,J),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(v,O,B,k,M,J),U.transparent===!0&&U.side===hi&&U.forceSinglePass===!1?(U.side=on,U.needsUpdate=!0,v.renderBufferDirect(B,O,k,U,M,J),U.side=xn,U.needsUpdate=!0,v.renderBufferDirect(B,O,k,U,M,J),U.side=hi):v.renderBufferDirect(B,O,k,U,M,J),M.onAfterRender(v,O,B,k,U,J)}function Na(M,O,B){O.isScene!==!0&&(O=De);const k=fe.get(M),U=p.state.lights,J=p.state.shadowsArray,le=U.state.version,pe=$.getParameters(M,U.state,J,O,B),he=$.getProgramCacheKey(pe);let Ce=k.programs;k.environment=M.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(M.isMeshStandardMaterial?Pt:Bt).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Y),Ce=new Map,k.programs=Ce);let Le=Ce.get(he);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===le)return Mh(M,pe),Le}else pe.uniforms=$.getUniforms(M),M.onBeforeCompile(pe,v),Le=$.acquireProgram(pe,he),Ce.set(he,Le),k.uniforms=pe.uniforms;const Te=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=te.uniform),Mh(M,pe),k.needsLights=ug(M),k.lightsStateVersion=le,k.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Le,k.uniformsList=null,Le}function Th(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Ao.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Mh(M,O){const B=fe.get(M);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function cg(M,O,B,k,U){O.isScene!==!0&&(O=De),ze.resetTextureUnits();const J=O.fog,le=k.isMeshStandardMaterial?O.environment:null,pe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:un,he=(k.isMeshStandardMaterial?Pt:Bt).get(k.envMap||le),Ce=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,rt=!!B.morphAttributes.color;let wt=Ui;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=v.toneMapping);const dt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=dt!==void 0?dt.length:0,Ee=fe.get(k),vt=p.state.lights;if(W===!0&&(oe===!0||M!==E)){const rn=M===E&&k.id===x;te.setState(k,M,rn)}let Ze=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==vt.state.version||Ee.outputColorSpace!==pe||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==he||k.fog===!0&&Ee.fog!==J||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==te.numPlanes||Ee.numIntersection!==te.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==Le||Ee.morphTargets!==Te||Ee.morphNormals!==Xe||Ee.morphColors!==rt||Ee.toneMapping!==wt||Ee.morphTargetsCount!==at)&&(Ze=!0):(Ze=!0,Ee.__version=k.version);let Tn=Ee.currentProgram;Ze===!0&&(Tn=Na(k,O,U));let Nr=!1,Mn=!1,ks=!1;const xt=Tn.getUniforms(),Nn=Ee.uniforms;if(Se.useProgram(Tn.program)&&(Nr=!0,Mn=!0,ks=!0),k.id!==x&&(x=k.id,Mn=!0),Nr||E!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xt.setValue(I,"projectionMatrix",M.projectionMatrix),xt.setValue(I,"viewMatrix",M.matrixWorldInverse);const dn=xt.map.cameraPosition;dn!==void 0&&dn.setValue(I,we.setFromMatrixPosition(M.matrixWorld)),Je.logarithmicDepthBuffer&&xt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Mn=!0,ks=!0)}if(U.isSkinnedMesh){xt.setOptional(I,U,"bindMatrix"),xt.setOptional(I,U,"bindMatrixInverse");const rn=U.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),xt.setValue(I,"boneTexture",rn.boneTexture,ze))}U.isBatchedMesh&&(xt.setOptional(I,U,"batchingTexture"),xt.setValue(I,"batchingTexture",U._matricesTexture,ze),xt.setOptional(I,U,"batchingIdTexture"),xt.setValue(I,"batchingIdTexture",U._indirectTexture,ze),xt.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&xt.setValue(I,"batchingColorTexture",U._colorsTexture,ze));const Fn=B.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Q.update(U,B,Tn),(Mn||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,xt.setValue(I,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Nn.envMap.value=he,Nn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&O.environment!==null&&(Nn.envMapIntensity.value=O.environmentIntensity),Mn&&(xt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&lg(Nn,ks),J&&k.fog===!0&&K.refreshFogUniforms(Nn,J),K.refreshMaterialUniforms(Nn,k,z,q,p.state.transmissionRenderTarget[M.id]),Ao.upload(I,Th(Ee),Nn,ze)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ao.upload(I,Th(Ee),Nn,ze),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(I,"center",U.center),xt.setValue(I,"modelViewMatrix",U.modelViewMatrix),xt.setValue(I,"normalMatrix",U.normalMatrix),xt.setValue(I,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const rn=k.uniformsGroups;for(let dn=0,oc=rn.length;dn<oc;dn++){const lr=rn[dn];Ne.update(lr,Tn),Ne.bind(lr,Tn)}}return Tn}function lg(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ug(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,O,B){const k=fe.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),fe.get(M.texture).__webglTexture=O,fe.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:B,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const B=fe.get(M);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0};const hg=I.createFramebuffer();this.setRenderTarget=function(M,O=0,B=0){R=M,C=O,w=B;let k=!0,U=null,J=!1,le=!1;if(M){const he=fe.get(M);if(he.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(he.__webglFramebuffer===void 0)ze.setupRenderTarget(M);else if(he.__hasExternalTextures)ze.rebindTextures(M,fe.get(M.texture).__webglTexture,fe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(he.__boundDepthTexture!==Te){if(Te!==null&&fe.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Le=fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?U=Le[O][B]:U=Le[O],J=!0):M.samples>0&&ze.useMultisampledRTT(M)===!1?U=fe.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?U=Le[B]:U=Le,P.copy(M.viewport),H.copy(M.scissor),F=M.scissorTest}else P.copy(ge).multiplyScalar(z).floor(),H.copy(Pe).multiplyScalar(z).floor(),F=st;if(B!==0&&(U=hg),Se.bindFramebuffer(I.FRAMEBUFFER,U)&&k&&Se.drawBuffers(M,U),Se.viewport(P),Se.scissor(H),Se.setScissorTest(F),J){const he=fe.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,he.__webglTexture,B)}else if(le){const he=O;for(let Ce=0;Ce<M.textures.length;Ce++){const Le=fe.get(M.textures[Ce]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,B,he)}}else if(M!==null&&B!==0){const he=fe.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,B)}x=-1},this.readRenderTargetPixels=function(M,O,B,k,U,J,le,pe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he){Se.bindFramebuffer(I.FRAMEBUFFER,he);try{const Ce=M.textures[pe],Le=Ce.format,Te=Ce.type;if(!Je.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-k&&B>=0&&B<=M.height-U&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(O,B,k,U,xe.convert(Le),xe.convert(Te),J))}finally{const Ce=R!==null?fe.get(R).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,O,B,k,U,J,le,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he)if(O>=0&&O<=M.width-k&&B>=0&&B<=M.height-U){Se.bindFramebuffer(I.FRAMEBUFFER,he);const Ce=M.textures[pe],Le=Ce.format,Te=Ce.type;if(!Je.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xe),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(O,B,k,U,xe.convert(Le),xe.convert(Te),0);const rt=R!==null?fe.get(R).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,rt);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await h_(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer(Xe),I.deleteSync(wt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,B=0){const k=Math.pow(2,-B),U=Math.floor(M.image.width*k),J=Math.floor(M.image.height*k),le=O!==null?O.x:0,pe=O!==null?O.y:0;ze.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,le,pe,U,J),Se.unbindTexture()};const dg=I.createFramebuffer(),fg=I.createFramebuffer();this.copyTextureToTexture=function(M,O,B=null,k=null,U=0,J=null){J===null&&(U!==0?(cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let le,pe,he,Ce,Le,Te,Xe,rt,wt;const dt=M.isCompressedTexture?M.mipmaps[J]:M.image;if(B!==null)le=B.max.x-B.min.x,pe=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,Le=B.min.y,Te=B.isBox3?B.min.z:0;else{const Fn=Math.pow(2,-U);le=Math.floor(dt.width*Fn),pe=Math.floor(dt.height*Fn),M.isDataArrayTexture?he=dt.depth:M.isData3DTexture?he=Math.floor(dt.depth*Fn):he=1,Ce=0,Le=0,Te=0}k!==null?(Xe=k.x,rt=k.y,wt=k.z):(Xe=0,rt=0,wt=0);const at=xe.convert(O.format),Ee=xe.convert(O.type);let vt;O.isData3DTexture?(ze.setTexture3D(O,0),vt=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ze.setTexture2DArray(O,0),vt=I.TEXTURE_2D_ARRAY):(ze.setTexture2D(O,0),vt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Ze=I.getParameter(I.UNPACK_ROW_LENGTH),Tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Nr=I.getParameter(I.UNPACK_SKIP_PIXELS),Mn=I.getParameter(I.UNPACK_SKIP_ROWS),ks=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);const xt=M.isDataArrayTexture||M.isData3DTexture,Nn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Fn=fe.get(M),rn=fe.get(O),dn=fe.get(Fn.__renderTarget),oc=fe.get(rn.__renderTarget);Se.bindFramebuffer(I.READ_FRAMEBUFFER,dn.__webglFramebuffer),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,oc.__webglFramebuffer);for(let lr=0;lr<he;lr++)xt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.get(M).__webglTexture,U,Te+lr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.get(O).__webglTexture,J,wt+lr)),I.blitFramebuffer(Ce,Le,le,pe,Xe,rt,le,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);Se.bindFramebuffer(I.READ_FRAMEBUFFER,null),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||fe.has(M)){const Fn=fe.get(M),rn=fe.get(O);Se.bindFramebuffer(I.READ_FRAMEBUFFER,dg),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,fg);for(let dn=0;dn<he;dn++)xt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fn.__webglTexture,U,Te+dn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fn.__webglTexture,U),Nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rn.__webglTexture,J,wt+dn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rn.__webglTexture,J),U!==0?I.blitFramebuffer(Ce,Le,le,pe,Xe,rt,le,pe,I.COLOR_BUFFER_BIT,I.NEAREST):Nn?I.copyTexSubImage3D(vt,J,Xe,rt,wt+dn,Ce,Le,le,pe):I.copyTexSubImage2D(vt,J,Xe,rt,Ce,Le,le,pe);Se.bindFramebuffer(I.READ_FRAMEBUFFER,null),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Nn?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(vt,J,Xe,rt,wt,le,pe,he,at,Ee,dt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(vt,J,Xe,rt,wt,le,pe,he,at,dt.data):I.texSubImage3D(vt,J,Xe,rt,wt,le,pe,he,at,Ee,dt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,Xe,rt,le,pe,at,Ee,dt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,Xe,rt,dt.width,dt.height,at,dt.data):I.texSubImage2D(I.TEXTURE_2D,J,Xe,rt,le,pe,at,Ee,dt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Nr),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ks),J===0&&O.generateMipmaps&&I.generateMipmap(vt),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,O,B=null,k=null,U=0){return cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,B,k,U)},this.initRenderTarget=function(M){fe.get(M).__webglFramebuffer===void 0&&ze.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,Se.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}function Ri(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function kp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},va={duration:.5,overwrite:!1,delay:0},Zu,$t,gt,jn=1e8,ct=1/jn,tu=Math.PI*2,_T=tu/4,vT=0,zp=Math.sqrt,xT=Math.cos,yT=Math.sin,Vt=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},ki=function(e){return typeof e=="number"},Ju=function(e){return typeof e>"u"},xi=function(e){return typeof e=="object"},mn=function(e){return e!==!1},Qu=function(){return typeof window<"u"},mo=function(e){return Ct(e)||Vt(e)},Hp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,ST=/random\([^)]+\)/g,TT=/,\s*/g,Gd=/(?:-?\.?\d|\.)+/gi,Vp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gp=/[+-]=-?[.\d]+/,MT=/[^,'"\[\]\s]+/gi,ET=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,ui,nu,eh,On={},Fo={},Wp,Xp=function(e){return(Fo=Ms(e,On))&&yn},th=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xa=function(e,t){return!t&&console.warn(e)},jp=function(e,t){return e&&(On[e]=t)&&Fo&&(Fo[e]=t)||On},ya=function(){return 0},bT={suppressEvents:!0,isStart:!0,kill:!1},Co={suppressEvents:!0,kill:!1},wT={suppressEvents:!0},nh={},er=[],iu={},qp,Cn={},jc={},Wd=30,Ro=[],ih="",rh=function(e){var t=e[0],n,i;if(xi(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ro.length;i--&&!Ro[i].targetTest(t););n=Ro[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new mm(e[i],n)))||e.splice(i,1);return e},Ar=function(e){return e._gsap||rh(qn(e))[0]._gsap},$p=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():Ju(n)&&e.getAttribute&&e.getAttribute(t)||n},gn=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},us=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},AT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Bo=function(){var e=er.length,t=er.slice(0),n,i;for(iu={},er.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sh=function(e){return!!(e._initted||e._startAt||e.add)},Yp=function(e,t,n,i){er.length&&!$t&&Bo(),e.render(t,n,!!($t&&t<0&&sh(e))),er.length&&!$t&&Bo()},Kp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(MT).length<2?t:Vt(e)?e.trim():e},Zp=function(e){return e},Un=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},CT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ms=function(e,t){for(var n in t)e[n]=t[n];return e},Xd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ko=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||Tt,n=e.keyframes?CT(tn(e.keyframes)):Un;if(mn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},RT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Qo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},PT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ru=function(e,t,n,i){return e._startAt&&($t?e._startAt.revert(Co):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},LT=function r(e){return!e||e._ts&&r(e.parent)},jd=function(e){return e._repeat?Es(e._tTime,e=e.duration()+e._rDelay)*e:0},Es=function(e,t){var n=Math.floor(e=yt(e/t));return e&&n===e?n-1:n},zo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ec=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},tc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ec(e),n._dirty||Cr(n,e)),e},Qp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=zo(e.rawTime(),t),(!t._dur||Oa(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),Cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},di=function(e,t,n,i){return t.parent&&rr(t),t._start=yt((ki(n)?n:n||e!==Tt?zn(e,n,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jp(e,t,"_first","_last",e._sort?"_start":0),su(t)||(e._recent=t),i||Qp(e,t),e._ts<0&&tc(e,e._tTime),e},em=function(e,t){return(On.ScrollTrigger||th("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},tm=function(e,t,n,i,s){if(oh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!$t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qp!==Rn.frame)return er.push(e),e._lazy=[s,i],1},IT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},su=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DT=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&IT(e)&&!(!e._initted&&su(e))||(e._ts<0||e._dp._ts<0)&&!su(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=Oa(0,e._tDur,t),u=Es(c,o),e._yoyo&&u&1&&(a=1-a),u!==Es(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||$t||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&tm(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&ru(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&rr(e,1),!n&&!$t&&(Pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},OT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},bs=function(e,t,n,i){var s=e._repeat,a=yt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:yt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&tc(e,e._tTime=e._tDur*o),e.parent&&ec(e),n||Cr(e.parent,e),e},qd=function(e){return e instanceof pn?Cr(e):bs(e,e._dur)},UT={_start:0,endTime:ya,totalDuration:ya},zn=function r(e,t,n){var i=e.labels,s=e._recent||UT,a=e.duration()>=jn?s.endTime(!1):e._dur,o,c,l;return Vt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(tn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},la=function(e,t,n){var i=ki(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=mn(c.vars.inherit)&&c.parent;a.immediateRender=mn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ot(t[0],a,t[s+1])},or=function(e,t){return e||e===0?t(e):t},Oa=function(e,t,n){return n<e?e:n>t?t:n},Qt=function(e,t){return!Vt(e)||!(t=ET.exec(e))?"":t[1]},NT=function(e,t,n){return or(n,function(i){return Oa(e,t,i)})},au=[].slice,nm=function(e,t){return e&&xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xi(e[0]))&&!e.nodeType&&e!==ui},FT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Vt(i)&&!t||nm(i,1)?(s=n).push.apply(s,qn(i)):n.push(i)})||n},qn=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Vt(e)&&!n&&(nu||!ws())?au.call((t||eh).querySelectorAll(e),0):tn(e)?FT(e,n):nm(e)?au.call(e,0):e?[e]:[]},ou=function(e){return e=qn(e)[0]||xa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return qn(t,n.querySelectorAll?n:n===e?xa("Invalid scope")||eh.createElement("div"):e)}},im=function(e){return e.sort(function(){return .5-Math.random()})},rm=function(e){if(Ct(e))return e;var t=xi(e)?e:{each:e},n=Rr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,h=i;return Vt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,T,S,v,b,C,w,R,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,jn])[1],!x){for(w=-jn;w<(w=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=c?Math.min(x,g)*u-.5:i%x,T=x===jn?0:c?g*h/x-.5:i/x|0,w=0,R=jn,C=0;C<g;C++)S=C%x-p,v=T-(C/x|0),m[C]=b=l?Math.abs(l==="y"?v:S):zp(S*S+v*v),b>w&&(w=b),b<R&&(R=b);i==="random"&&im(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:l?l==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Qt(t.amount||t.each)||0,n=n&&g<0?KT(n):n}return g=(m[d]-m.min)/m.max||0,yt(m.b+(n?n(g):g)*m.v)+m.u}},cu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ki(n)?0:Qt(n))}},sm=function(e,t){var n=tn(e),i,s;return!n&&xi(e)&&(i=n=e.radius||jn,e.values?(e=qn(e.values),(s=!ki(e[0]))&&(i*=i)):e=cu(e.increment)),or(t,n?Ct(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=jn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-o),d<l&&(l=d,u=h);return u=!i||l<=i?e[u]:a,s||u===a||ki(a)?u:u+Qt(a)}:cu(e))},am=function(e,t,n,i){return or(tn(e)?!t:n===!0?!!(n=0):!i,function(){return tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},BT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},kT=function(e,t){return function(n){return e(parseFloat(n))+(t||Qt(n))}},zT=function(e,t,n){return cm(e,t,0,1,n)},om=function(e,t,n){return or(n,function(i){return e[~~t(i)]})},HT=function r(e,t,n){var i=t-e;return tn(e)?om(e,r(0,e.length),t):or(n,function(s){return(i+(s-e)%i)%i+e})},VT=function r(e,t,n){var i=t-e,s=i*2;return tn(e)?om(e,r(0,e.length-1),t):or(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Sa=function(e){return e.replace(ST,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(TT);return am(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},cm=function(e,t,n,i,s){var a=t-e,o=i-n;return or(s,function(c){return n+((c-e)/a*o||0)})},GT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Vt(e),o={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(r(e[l-1],e[l]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Ms(tn(e)?[]:{},e));if(!u){for(c in t)ah.call(o,e,c,"get",t[c]);s=function(_){return uh(_,o)||(a?e.p:e)}}}return or(n,s)},$d=function(e,t,n){var i=e.labels,s=jn,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},Pn=function(e,t,n){var i=e.vars,s=i[t],a=gt,o=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&er.length&&Bo(),o&&(gt=o),u=c?s.apply(l,c):s.call(l),gt=a,u},ra=function(e){return rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$t),e.progress()<1&&Pn(e,"onInterrupt"),e},as,lm=[],um=function(e){if(e)if(e=!e.name&&e.default||e,Qu()||e.headless){var t=e.name,n=Ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ya,render:uh,add:ah,kill:aM,modifier:sM,rawVars:0},a={targetTest:0,get:0,getSetter:lh,aliases:{},register:0};if(ws(),e!==i){if(Cn[t])return;Un(i,Un(ko(e,s),a)),Ms(i.prototype,Ms(s,ko(e,a))),Cn[i.prop=t]=i,e.targetTest&&(Ro.push(i),nh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jp(t,i),e.register&&e.register(yn,i,_n)}else lm.push(e)},ot=255,sa={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},qc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},hm=function(e,t,n){var i=e?ki(e)?[e>>16,e>>8&ot,e&ot]:0:sa.black,s,a,o,c,l,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sa[e])i=sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Gd),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=qc(c+1/3,s,a),i[1]=qc(c,s,a),i[2]=qc(c-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Vp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Gd)||sa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/ot,a=i[1]/ot,o=i[2]/ot,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},dm=function(e){var t=[],n=[],i=-1;return e.split(tr).forEach(function(s){var a=s.match(ss)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Yd=function(e,t,n){var i="",s=(e+i).match(tr),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!s)return e;if(s=s.map(function(d){return(d=hm(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=dm(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(tr,"1").split(ss),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(tr),h=l.length-1;o<h;o++)i+=l[o]+s[o];return i+l[h]},tr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),WT=/hsl[a]?\(/,fm=function(e){var t=e.join(" "),n;if(tr.lastIndex=0,tr.test(t))return n=WT.test(t),e[1]=Yd(e[1],n),e[0]=Yd(e[0],n,dm(e[1])),!0},Ta,Rn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,u,h,d,f,_=function g(m){var p=r()-i,T=m===!0,S,v,b,C;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,S=b-a,(S>0||T)&&(C=++h.frame,d=b-h.time*1e3,h.time=b=b/1e3,a+=S+(S>=s?4:s-S),v=1),T||(c=l(g)),v)for(f=0;f<o.length;f++)o[f](b,d,C,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Wp&&(!nu&&Qu()&&(ui=nu=window,eh=ui.document||{},On.gsap=yn,(ui.gsapVersions||(ui.gsapVersions=[])).push(yn.version),Xp(Fo||ui.GreenSockGlobals||!ui.gsap&&ui||{}),lm.forEach(um)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Ta=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ta=0,l=ya},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,T){var S=p?function(v,b,C,w){m(v,b,C,w),h.remove(S)}:m;return h.remove(m),o[T?"unshift":"push"](S),ws(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),ws=function(){return!Ta&&Rn.wake()},$e={},XT=/^[\d.\-M][\d.\-,\s]/,jT=/["']/g,qT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(jT,"").trim():+l,i=c.substr(o+1).trim();return t},$T=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},YT=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qT(t[1])]:$T(e).split(",").map(Kp)):$e._CE&&XT.test(e)?$e._CE("",e):n},KT=function(e){return function(t){return 1-e(1-t)}},Rr=function(e,t){return e&&(Ct(e)?e:$e[e]||YT(e))||t},Or=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return gn(e,function(o){$e[o]=On[o]=s,$e[a=o.toLowerCase()]=n;for(var c in s)$e[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=$e[o+"."+c]=s[c]}),s},pm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$c=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/tu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*yT((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:pm(o);return s=tu/s,c.config=function(l,u){return r(e,l,u)},c},Yc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pm(n);return i.config=function(s){return r(e,s)},i};gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Or(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Or("Elastic",$c("in"),$c("out"),$c());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Or("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Or("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Or("Circ",function(r){return-(zp(1-r*r)-1)});Or("Sine",function(r){return r===1?1:-xT(r*_T)+1});Or("Back",Yc("in"),Yc("out"),Yc());$e.SteppedEase=$e.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ct;return function(o){return((i*Oa(0,a,o)|0)+s)*n}}};va.ease=$e["quad.out"];gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ih+=r+","+r+"Params,"});var mm=function(e,t){this.id=vT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$p,this.set=t?t.getSetter:lh},Ma=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),Ta||Rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tc(this,n),!s._dp||s.parent||Qp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Es(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?zo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(Oa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ec(this),PT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=yt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=wT);var i=$t;return $t=n,sh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$t=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,qd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,qd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(zn(this,n),mn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,mn(i)),this._dur||(this._zTime=-ct),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ct)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ct(n)?n:Zp,c=function(){var u=i.then;i.then=null,s&&s(),Ct(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){ra(this)},r})();Un(Ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var pn=(function(r){kp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=mn(n.sortChildren),Tt&&di(n.parent||Tt,Ri(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&em(Ri(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return la(0,arguments,this),this},t.from=function(i,s,a){return la(1,arguments,this),this},t.fromTo=function(i,s,a,o){return la(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(i,s,zn(this,a),1),this},t.call=function(i,s,a){return di(this,Ot.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Ot(i,a,zn(this,c)),this},t.staggerFrom=function(i,s,a,o,c,l,u){return a.runBackwards=1,ca(a).immediateRender=mn(a.immediateRender),this.staggerTo(i,s,a,o,c,l,u)},t.staggerFromTo=function(i,s,a,o,c,l,u,h){return o.startAt=a,ca(o).immediateRender=mn(o.immediateRender),this.staggerTo(i,s,o,c,l,u,h)},t.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:yt(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,m,p,T,S,v,b,C,w;if(this!==Tt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,S=this._ts,p=!S,h&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=yt(u%m),u===c?(g=this._repeat,d=l):(b=yt(u/m),g=~~b,g&&g===b&&(d=l,g--),d>l&&(d=l)),b=Es(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),C&&g&1&&(d=l-d,w=1),g!==b&&!this._lock){var R=C&&b&1,x=R===(C&&g&1);if(g<b&&(R=!R),o=R?0:u%l?l:u,this._lock=1,this.render(o||(w?0:yt(g*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=R?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=OT(this,yt(o),yt(d)),T&&(u-=d-(d=T._start))),this._tTime=u,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&l&&!s&&!b&&(Pn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&T!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=-ct);break}}f=_}else{f=this._last;for(var E=i<0?i:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&T!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,s,a||$t&&sh(f)),d!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=E?-ct:ct);break}}f=_}}if(T&&!s&&(this.pause(),T.render(d>=o?0:-ct)._zTime=d>=o?1:-1,this._ts))return this._start=v,ec(this),this.render(i,s,a);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!s&&!(i<0&&!o)&&(u||o||!c)&&(Pn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ki(s)||(s=zn(this,s,i)),!(i instanceof Ma)){if(tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Vt(i))return this.addLabel(i,s);if(Ct(i))i=Ot.delayedCall(0,i);else return this}return this!==i?di(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-jn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ot?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Vt(i)?this.removeLabel(i):Ct(i)?this.killTweensOf(i):(i.parent===this&&Qo(this,i),i===this._recent&&(this._recent=this._last),Cr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(Rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=zn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ot.delayedCall(0,s||ya,a);return o.data="isPause",this._hasPause=1,di(this,o,zn(this,i))},t.removePause=function(i){var s=this._first;for(i=zn(this,i);s;)s._start===i&&s.data==="isPause"&&rr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Yi!==o[c]&&o[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=qn(i),c=this._first,l=ki(s),u;c;)c instanceof Ot?AT(c._targets,o)&&(l?(!Yi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=zn(a,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,_=Ot.to(a,Un({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==m&&bs(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Un({startAt:{time:zn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),$d(this,zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),$d(this,zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=yt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return Cr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Cr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,c=jn,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,di(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=yt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;bs(a,a===Tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Tt._ts&&(Yp(Tt,zo(i,Tt)),qp=Rn.frame),Rn.frame>=Wd){Wd+=In.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&In.autoSleep&&Rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Rn.sleep()}}},e})(Ma);Un(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ZT=function(e,t,n,i,s,a,o){var c=new _n(this._pt,e,t,0,1,Sm,null,s),l=0,u=0,h,d,f,_,g,m,p,T;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Sa(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),d=n.match(Xc)||[];h=Xc.exec(i);)_=h[0],g=i.substring(l,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?us(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},l=Xc.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Gp.test(i)||p)&&(c.e=0),this._pt=c,c},ah=function(e,t,n,i,s,a,o,c,l,u){Ct(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:Ct(h)?l?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=Ct(h)?l?nM:xm:ch,_;if(Vt(i)&&(~i.indexOf("random(")&&(i=Sa(i)),i.charAt(1)==="="&&(_=us(d,i)+(Qt(d)||0),(_||_===0)&&(i=_))),!u||d!==i||lu)return!isNaN(d*i)&&i!==""?(_=new _n(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?rM:ym,0,f),l&&(_.fp=l),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&th(t,i),ZT.call(this,e,t,d,i,f,c||In.stringFilter,l))},JT=function(e,t,n,i,s){if(Ct(e)&&(e=ua(e,s,t,n,i)),!xi(e)||e.style&&e.nodeType||tn(e)||Hp(e))return Vt(e)?ua(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ua(e[o],s,t,n,i);return a},gm=function(e,t,n,i,s,a){var o,c,l,u;if(Cn[e]&&(o=new Cn[e]).init(s,o.rawVars?t[e]:JT(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new _n(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==as))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Yi,lu,oh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!Zu,v=e.timeline,b=i.easeReverse||h,C,w,R,x,E,P,H,F,V,j,G,q,z;if(v&&(!d||!s)&&(s="none"),e._ease=Rr(s,va.ease),e._rEase=b&&(Rr(b)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(F=m[0]?Ar(m[0]).harness:0,q=F&&i[F.prop],C=ko(i,nh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?Co:bT),g._lazy=0),a){if(rr(e._startAt=Ot.set(m,Un({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&mn(c),startAt:null,delay:0,onUpdate:l&&function(){return Pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t||!o&&!f)&&e._startAt.revert(Co),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),R=Un({overwrite:!1,data:"isFromStart",lazy:o&&!g&&mn(c),immediateRender:o,stagger:0,parent:p},C),q&&(R[F.prop]=q),rr(e._startAt=Ot.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t?e._startAt.revert(Co):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&mn(c)||c&&!_,w=0;w<m.length;w++){if(E=m[w],H=E._gsap||rh(m)[w]._gsap,e._ptLookup[w]=j={},iu[H.id]&&er.length&&Bo(),G=T===m?w:T.indexOf(E),F&&(V=new F).init(E,q||C,e,G,T)!==!1&&(e._pt=x=new _n(e._pt,E,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ie){j[ie]=x}),V.priority&&(P=1)),!F||q)for(R in C)Cn[R]&&(V=gm(R,C,e,G,E,T))?V.priority&&(P=1):j[R]=x=ah.call(e,E,R,"get",C[R],G,T,0,i.stringFilter);e._op&&e._op[w]&&e.kill(E,e._op[w]),S&&e._pt&&(Yi=e,Tt.killTweensOf(E,j,e.globalTime(t)),z=!e.parent,Yi=0),e._pt&&c&&(iu[H.id]=1)}P&&Tm(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!z,d&&t<=0&&v.render(jn,!0,!0)},QT=function(e,t,n,i,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lu=1,e.vars[t]="+=0",oh(e,o),lu=0,c?xa(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=It(n)+Qt(h.e)),h.b&&(h.b=u.s+Qt(h.b))},eM=function(e,t){var n=e[0]?Ar(e[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return t;s=Ms({},t);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},tM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(tn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ua=function(e,t,n,i,s){return Ct(e)?e.call(t,n,i,s):Vt(e)&&~e.indexOf("random(")?Sa(e):e},_m=ih+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",vm={};gn(_m+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vm[r]=1});var Ot=(function(r){kp(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ca(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=i.parent||Tt,T=(tn(n)||Hp(n)?ki(n[0]):"length"in i)?[n]:qn(n),S,v,b,C,w,R,x,E;if(o._targets=T.length?rh(T):xa("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||mo(l)||mo(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(S=o.timeline=new pn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:T}),S.kill(),S.parent=S._dp=Ri(o),S._start=0,d||mo(l)||mo(u)){if(C=T.length,x=d&&rm(d),xi(d))for(w in d)~_m.indexOf(w)&&(E||(E={}),E[w]=d[w]);for(v=0;v<C;v++)b=ko(i,vm),b.stagger=0,P&&(b.easeReverse=P),E&&Ms(b,E),R=T[v],b.duration=+ua(l,Ri(o),v,R,T),b.delay=(+ua(u,Ri(o),v,R,T)||0)-o._delay,!d&&C===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),S.to(R,b,x?x(v,R,T):0),S._ease=$e.none;S.duration()?l=u=0:o.timeline=0}else if(_){ca(Un(S.vars.defaults,{ease:"none"})),S._ease=Rr(_.ease||i.ease||"none");var H=0,F,V,j;if(tn(_))_.forEach(function(G){return S.to(T,G,">")}),S.duration();else{b={};for(w in _)w==="ease"||w==="easeEach"||tM(w,_[w],b,_.easeEach);for(w in b)for(F=b[w].sort(function(G,q){return G.t-q.t}),H=0,v=0;v<F.length;v++)V=F[v],j={ease:V.e,duration:(V.t-(v?F[v-1].t:0))/100*l},j[w]=V.v,S.to(T,j,H),H+=j.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||o.duration(l=S.duration())}else o.timeline=0;return f===!0&&!Zu&&(Yi=Ri(o),Tt.killTweensOf(T),Yi=0),di(p,Ri(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!_&&o._start===yt(p._time)&&mn(h)&&LT(Ri(o))&&p.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-u)||0)),m&&em(Ri(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-ct&&!u?c:i<ct?0:i,d,f,_,g,m,p,T,S;if(!l)DT(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,S=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=yt(h%g),h===c?(_=this._repeat,d=l):(m=yt(h/g),_=~~m,_&&_===m?(d=l,_--):d>l&&(d=l)),p=this._yoyo&&_&1,p&&(d=l-d),m=Es(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(yt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(tm(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var b=v?o:l-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(d/l);if(this._from&&(this.ratio=T=1-T),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Pn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(T,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ru(this,i,s,a),Pn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ru(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&rr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Pn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,c){Ta||Rn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||oh(this,l),u=this._ease(l/this._dur),QT(this,i,s,a,o,u,l,c)?this.resetTo(i,s,a,o,1):(tc(this,0),this.parent||Jp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ra(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$t),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Yi&&Yi.vars.overwrite!==!0)._first||ra(this),this.parent&&a!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?qn(i):o,l=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&RT(o,c))return s==="all"&&(this._pt=0),ra(this);for(h=this._op=this._op||[],s!=="all"&&(Vt(s)&&(g={},gn(s,function(T){return g[T]=1}),s=g),s=eM(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){d=l[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Qo(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&ra(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return la(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return la(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Tt.killTweensOf(i,s,a)},e})(Ma);Un(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gn("staggerTo,staggerFrom,staggerFromTo",function(r){Ot[r]=function(){var e=new pn,t=au.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ch=function(e,t,n){return e[t]=n},xm=function(e,t,n){return e[t](n)},nM=function(e,t,n,i){return e[t](i.fp,n)},iM=function(e,t,n){return e.setAttribute(t,n)},lh=function(e,t){return Ct(e[t])?xm:Ju(e[t])&&e.setAttribute?iM:ch},ym=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},uh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},aM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Qo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},oM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Tm=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},_n=(function(){function r(t,n,i,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||ym,this.d=c||this,this.set=l||ch,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=oM,this.m=n,this.mt=s,this.tween=i},r})();gn(ih+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return nh[r]=1});On.TweenMax=On.TweenLite=Ot;On.TimelineLite=On.TimelineMax=pn;Tt=new pn({sortChildren:!1,defaults:va,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=fm;var Pr=[],Po={},cM=[],Kd=0,lM=0,Kc=function(e){return(Po[e]||cM).map(function(t){return t()})},uu=function(){var e=Date.now(),t=[];e-Kd>2&&(Kc("matchMediaInit"),Pr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=ui.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),Kc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Kd=e,Kc("matchMedia"))},Mm=(function(){function r(t,n){this.selector=n&&ou(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ct(n)&&(s=i,i=n,n=Ct);var a=this,o=function(){var l=gt,u=a.selector,h;return l&&l!==a&&l.data.push(a),s&&(a.selector=ou(s)),gt=a,h=i.apply(a,arguments),Ct(h)&&a._r.push(h),gt=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ct?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=gt;gt=null,n(this),gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof pn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ot)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Pr.length;a--;)Pr[a].id===this.id&&Pr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),uM=(function(){function r(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){xi(n)||(n={matches:n});var a=new Mm(0,s||this.scope),o=a.conditions={},c,l,u;gt&&!a.selector&&(a.selector=gt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=ui.matchMedia(n[l]),c&&(Pr.indexOf(a)<0&&Pr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(uu):c.addEventListener("change",uu)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ho={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return um(i)})},timeline:function(e){return new pn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Vt(e)&&(e=qn(e)[0]);var s=Ar(e||{}).get,a=n?Zp:Kp;return n==="native"&&(n=""),e&&(t?a((Cn[t]&&Cn[t].get||s)(e,t,n,i)):function(o,c,l){return a((Cn[o]&&Cn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=qn(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Cn[t],o=Ar(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;as._pt=0,h.init(e,n?u+n:u,as,0,[e]),h.render(1,h),as._pt&&uh(1,as)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=yn.to(e,Un((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Rr(e.ease,va.ease)),Xd(va,e||{})},config:function(e){return Xd(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Cn[o]&&!On[o]&&xa(t+" effect requires "+o+" plugin.")}),jc[t]=function(o,c,l){return n(qn(o),Un(c||{},s),l)},a&&(pn.prototype[t]=function(o,c,l){return this.add(jc[t](o,xi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){$e[e]=Rr(t)},parseEase:function(e,t){return arguments.length?Rr(e,t):$e},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new pn(e),i,s;for(n.smoothChildTiming=mn(e.smoothChildTiming),Tt.remove(n),n._dp=0,n._time=n._tTime=Tt._time,i=Tt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&di(n,i,i._start-i._delay),i=s;return di(Tt,n,0),n},context:function(e,t){return e?new Mm(e,t):gt},matchMedia:function(e){return new uM(e)},matchMediaRefresh:function(){return Pr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||uu()},addEventListener:function(e,t){var n=Po[e]||(Po[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Po[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:HT,wrapYoyo:VT,distribute:rm,random:am,snap:sm,normalize:zT,getUnit:Qt,clamp:NT,splitColor:hm,toArray:qn,selector:ou,mapRange:cm,pipe:BT,unitize:kT,interpolate:GT,shuffle:im},install:Xp,effects:jc,ticker:Rn,updateRoot:pn.updateRoot,plugins:Cn,globalTimeline:Tt,core:{PropTween:_n,globals:jp,Tween:Ot,Timeline:pn,Animation:Ma,getCache:Ar,_removeLinkedListItem:Qo,reverting:function(){return $t},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return Zu=e}}};gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ho[r]=Ot[r]});Rn.add(pn.updateRoot);as=Ho.to({},{duration:0});var hM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},dM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=hM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Zc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(Vt(s)&&(c={},gn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}dM(o,s)}}}},yn=Ho.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)$t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Zc("roundProps",cu),Zc("modifiers"),Zc("snap",sm))||Ho;Ot.version=pn.version=yn.version="3.15.0";Wp=1;Qu()&&ws();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;var Zd,Ki,hs,hh,wr,Jd,dh,fM=function(){return typeof window<"u"},zi={},Tr=180/Math.PI,ds=Math.PI/180,ts=Math.atan2,Qd=1e8,fh=/([A-Z])/g,pM=/(left|right|width|margin|padding|x)/i,mM=/[\s,\(]\S/,mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_M=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Em=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yM=function(e,t,n){return e.style[t]=n},SM=function(e,t,n){return e.style.setProperty(t,n)},TM=function(e,t,n){return e._gsap[t]=n},MM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},EM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},bM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Mt="transform",vn=Mt+"Origin",wM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Li(i,o)}):this.tfm[e]=a.x?a[e]:Li(i,e),e===vn&&(this.tfm.zOrigin=a.zOrigin);else return mi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Mt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(vn,t,"")),e=Mt}(s||t)&&this.props.push(e,t,s[e])},wm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},AM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(fh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=dh(),(!s||!s.isStart)&&!n[Mt]&&(wm(n),i.zOrigin&&n[vn]&&(n[vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Am=function(e,t){var n={target:e,props:[],revert:AM,save:wM};return e._gsap||yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Cm,du=function(e,t){var n=Ki.createElementNS?Ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ki.createElement(e);return n&&n.style?n:Ki.createElement(e)},Ln=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(fh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,As(t)||t,1)||""},ef="O,Moz,ms,Ms,Webkit".split(","),As=function(e,t,n){var i=t||wr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ef[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ef[a]:"")+e},fu=function(){fM()&&window.document&&(Zd=window,Ki=Zd.document,hs=Ki.documentElement,wr=du("div")||{style:{}},du("div"),Mt=As(Mt),vn=Mt+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cm=!!As("perspective"),dh=yn.core.reverting,hh=1)},tf=function(e){var t=e.ownerSVGElement,n=du("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),hs.removeChild(n),s},nf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rm=function(e){var t,n;try{t=e.getBBox()}catch{t=tf(e),n=1}return t&&(t.width||t.height)||n||(t=tf(e)),t&&!t.width&&!t.x&&!t.y?{x:+nf(e,["x","cx","x1"])||0,y:+nf(e,["y","cy","y1"])||0,width:0,height:0}:t},Pm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rm(e))},sr=function(e,t){if(t){var n=e.style,i;t in zi&&t!==vn&&(t=Mt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(fh,"-$1").toLowerCase())):n.removeAttribute(t)}},Zi=function(e,t,n,i,s,a){var o=new _n(e._pt,t,n,0,1,a?bm:Em);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},rf={deg:1,rad:1,turn:1},CM={grid:1,flex:1},ar=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=wr.style,c=pM.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||rf[i]||rf[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&Pm(e),(f||a==="%")&&(zi[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[u],It(f?s/_*h:s/100*_);if(o[c?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ki||!g.appendChild)&&(g=Ki.body),m=g._gsap,m&&f&&m.width&&c&&m.time===Rn.time&&!m.uncache)return It(s/m.width*h);if(f&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=h+i,_=e[u],T?e.style[t]=T:sr(e,t)}else(f||a==="%")&&!CM[Ln(g,"display")]&&(o.position=Ln(e,"position")),g===e&&(o.position="static"),g.appendChild(wr),_=wr[u],g.removeChild(wr),o.position="absolute";return c&&f&&(m=Ar(g),m.time=Rn.time,m.width=g[u]),It(d?_*s/h:_&&s?h/_*s:0)},Li=function(e,t,n,i){var s;return hh||fu(),t in mi&&t!=="transform"&&(t=mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),zi[t]&&t!=="transform"?(s=ba(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Go(Ln(e,vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Vo[t]&&Vo[t](e,t,n)||Ln(e,t)||$p(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ar(e,t,s,n)+n:s},RM=function(e,t,n,i){if(!n||n==="none"){var s=As(t,e,1),a=s&&Ln(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ln(e,"borderTopColor"))}var o=new _n(this._pt,e.style,t,0,1,Sm),c=0,l=0,u,h,d,f,_,g,m,p,T,S,v,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ln(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Ln(e,t)||i,g?e.style[t]=g:sr(e,t)),u=[n,i],fm(u),n=u[0],i=u[1],d=n.match(ss)||[],b=i.match(ss)||[],b.length){for(;h=ss.exec(i);)m=h[0],T=i.substring(c,h.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),m!==(g=d[l++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=us(f,m)+v),p=parseFloat(m),S=m.substr((p+"").length),c=ss.lastIndex-S.length,S||(S=S||In.units[t]||v,c===i.length&&(i+=S,o.e+=S)),v!==S&&(f=ar(e,t,g,S)||0),o._pt={_next:o._pt,p:T||l===1?T:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?bm:Em;return Gp.test(i)&&(o.e=0),this._pt=o,o},sf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=sf[n]||n,t[1]=sf[i]||i,t.join(" ")},LM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],zi[o]&&(c=1,o=o==="transformOrigin"?vn:Mt),sr(n,o);c&&(sr(n,Mt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ba(n,1),a.uncache=1,wm(i)))}},Vo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new _n(e._pt,t,n,0,0,LM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ea=[1,0,0,1,0,0],Lm={},Im=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},af=function(e){var t=Ln(e,Mt);return Im(t)?Ea:t.substr(7).match(Vp).map(It)},ph=function(e,t){var n=e._gsap||Ar(e),i=e.style,s=af(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Ea:s):(s===Ea&&!e.offsetParent&&e!==hs&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,hs.appendChild(e)),s=af(e),c?i.display=c:sr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pu=function(e,t,n,i,s,a){var o=e._gsap,c=s||ph(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=c[0],_=c[1],g=c[2],m=c[3],p=c[4],T=c[5],S=t.split(" "),v=parseFloat(S[0])||0,b=parseFloat(S[1])||0,C,w,R,x;n?c!==Ea&&(w=f*m-_*g)&&(R=v*(m/w)+b*(-g/w)+(g*T-m*p)/w,x=v*(-_/w)+b*(f/w)-(f*T-_*p)/w,v=R,b=x):(C=Rm(e),v=C.x+(~S[0].indexOf("%")?v/100*C.width:v),b=C.y+(~(S[1]||S[0]).indexOf("%")?b/100*C.height:b)),i||i!==!1&&o.smooth?(p=v-l,T=b-u,o.xOffset=h+(p*f+T*g)-p,o.yOffset=d+(p*_+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[vn]="0px 0px",a&&(Zi(a,o,"xOrigin",l,v),Zi(a,o,"yOrigin",u,b),Zi(a,o,"xOffset",h,o.xOffset),Zi(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},ba=function(e,t){var n=e._gsap||new mm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=Ln(e,vn)||"0",u,h,d,f,_,g,m,p,T,S,v,b,C,w,R,x,E,P,H,F,V,j,G,q,z,ie,ae,ge,Pe,st,Ve,W;return u=h=d=g=m=p=T=S=v=0,f=_=1,n.svg=!!(e.getCTM&&Pm(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Mt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Mt]!=="none"?c[Mt]:"")),i.scale=i.rotate=i.translate="none"),w=ph(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),l=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),pu(e,q||l,!!q||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,C=n.yOrigin||0,w!==Ea&&(P=w[0],H=w[1],F=w[2],V=w[3],u=j=w[4],h=G=w[5],w.length===6?(f=Math.sqrt(P*P+H*H),_=Math.sqrt(V*V+F*F),g=P||H?ts(H,P)*Tr:0,T=F||V?ts(F,V)*Tr+g:0,T&&(_*=Math.abs(Math.cos(T*ds))),n.svg&&(u-=b-(b*P+C*F),h-=C-(b*H+C*V))):(W=w[6],st=w[7],ae=w[8],ge=w[9],Pe=w[10],Ve=w[11],u=w[12],h=w[13],d=w[14],R=ts(W,Pe),m=R*Tr,R&&(x=Math.cos(-R),E=Math.sin(-R),q=j*x+ae*E,z=G*x+ge*E,ie=W*x+Pe*E,ae=j*-E+ae*x,ge=G*-E+ge*x,Pe=W*-E+Pe*x,Ve=st*-E+Ve*x,j=q,G=z,W=ie),R=ts(-F,Pe),p=R*Tr,R&&(x=Math.cos(-R),E=Math.sin(-R),q=P*x-ae*E,z=H*x-ge*E,ie=F*x-Pe*E,Ve=V*E+Ve*x,P=q,H=z,F=ie),R=ts(H,P),g=R*Tr,R&&(x=Math.cos(R),E=Math.sin(R),q=P*x+H*E,z=j*x+G*E,H=H*x-P*E,G=G*x-j*E,P=q,j=z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=It(Math.sqrt(P*P+H*H+F*F)),_=It(Math.sqrt(G*G+W*W)),R=ts(j,G),T=Math.abs(R)>2e-4?R*Tr:0,v=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Im(Ln(e,Mt)),q&&e.setAttribute("transform",q))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(f*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=It(f),n.scaleY=It(_),n.rotation=It(g)+o,n.rotationX=It(m)+o,n.rotationY=It(p)+o,n.skewX=T+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[vn]=Go(l)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?DM:Cm?Dm:IM,n.uncache=0,n},Go=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jc=function(e,t,n){var i=Qt(t);return It(parseFloat(t)+parseFloat(ar(e,"x",n+"px",i)))+i},IM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dm(e,t)},gr="0deg",$s="0px",_r=") ",Dm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,S=n.zOrigin,v="",b=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==gr||u!==gr)){var C=parseFloat(u)*ds,w=Math.sin(C),R=Math.cos(C),x;C=parseFloat(h)*ds,x=Math.cos(C),a=Jc(T,a,w*x*-S),o=Jc(T,o,-Math.sin(C)*-S),c=Jc(T,c,R*x*-S+S)}m!==$s&&(v+="perspective("+m+_r),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(b||a!==$s||o!==$s||c!==$s)&&(v+=c!==$s||b?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+_r),l!==gr&&(v+="rotate("+l+_r),u!==gr&&(v+="rotateY("+u+_r),h!==gr&&(v+="rotateX("+h+_r),(d!==gr||f!==gr)&&(v+="skew("+d+", "+f+_r),(_!==1||g!==1)&&(v+="scale("+_+", "+g+_r),T.style[Mt]=v||"translate(0, 0)"},DM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,S=parseFloat(a),v=parseFloat(o),b,C,w,R,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=ds,l*=ds,b=Math.cos(c)*h,C=Math.sin(c)*h,w=Math.sin(c-l)*-d,R=Math.cos(c-l)*d,l&&(u*=ds,x=Math.tan(l-u),x=Math.sqrt(1+x*x),w*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),b*=x,C*=x)),b=It(b),C=It(C),w=It(w),R=It(R)):(b=h,R=d,C=w=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=ar(f,"x",a,"px"),v=ar(f,"y",o,"px")),(_||g||m||p)&&(S=It(S+_-(_*b+g*w)+m),v=It(v+g-(_*C+g*R)+p)),(i||s)&&(x=f.getBBox(),S=It(S+i/100*x.width),v=It(v+s/100*x.height)),x="matrix("+b+","+C+","+w+","+R+","+S+","+v+")",f.setAttribute("transform",x),T&&(f.style[Mt]=x)},OM=function(e,t,n,i,s){var a=360,o=Vt(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Tr:1),l=c-i,u=i+l+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Qd)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Qd)%a-~~(l/a)*a)),e._pt=d=new _n(e._pt,t,n,i,l,gM),d.e=u,d.u="deg",e._props.push(n),d},of=function(e,t){for(var n in t)e[n]=t[n];return e},UM=function(e,t,n){var i=of({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Mt]=t,o=ba(n,1),sr(n,Mt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Mt],a[Mt]=t,o=ba(n,1),a[Mt]=l);for(c in zi)l=i[c],u=o[c],l!==u&&s.indexOf(c)<0&&(f=Qt(l),_=Qt(u),h=f!==_?ar(n,c,l,_):parseFloat(l),d=parseFloat(u),e._pt=new _n(e._pt,o,c,h,d-h,hu),e._pt.u=_||0,e._props.push(c));of(o,i)};gn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Vo[e>1?"border"+r:r]=function(o,c,l,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return Li(o,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(c,f,h)}});var Om={name:"css",register:fu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,d,f,_,g,m,p,T,S,v,b,C,w,R,x;hh||fu(),this.styles=this.styles||Am(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Cn[g]&&gm(g,t,n,i,e,s)))){if(f=typeof u,_=Vo[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Sa(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",tr.lastIndex=0,tr.test(l)||(m=Qt(l),p=Qt(u),p?m!==p&&(l=ar(e,g,l,p)+p):m&&(u+=m)),this.add(o,"setProperty",l,u,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],Vt(l)&&~l.indexOf("random(")&&(l=Sa(l)),Qt(l+"")||l==="auto"||(l+=In.units[g]||Qt(Li(e,g))||""),(l+"").charAt(1)==="="&&(l=Li(e,g))):l=Li(e,g),d=parseFloat(l),T=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),g in mi&&(g==="autoAlpha"&&(d===1&&Li(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,o.visibility),Zi(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=mi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in zi,S){if(this.styles.save(g),x=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Ln(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=Ln(e,"perspective"),E?e.style.perspective=E:sr(e,"perspective")}h=parseFloat(u)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||ba(e,t.parseTransform),C=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new _n(this._pt,o,Mt,0,1,b.renderTransform,b,0,-1),v.dep=1),g==="scale")this._pt=new _n(this._pt,b,"scaleY",b.scaleY,(T?us(b.scaleY,T+h):h)-b.scaleY||0,hu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(vn,0,o[vn]),u=PM(u),b.svg?pu(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&Zi(this,b,"zOrigin",b.zOrigin,p),Zi(this,o,g,Go(l),Go(u)));continue}else if(g==="svgOrigin"){pu(e,u,1,C,0,this);continue}else if(g in Lm){OM(this,b,g,d,T?us(d,T+u):u);continue}else if(g==="smoothOrigin"){Zi(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){UM(this,u,e);continue}}else g in o||(g=As(g)||g);if(S||(h||h===0)&&(d||d===0)&&!mM.test(u)&&g in o)m=(l+"").substr((d+"").length),h||(h=0),p=Qt(u)||(g in In.units?In.units[g]:m),m!==p&&(d=ar(e,g,l,p)),this._pt=new _n(this._pt,S?b:o,g,d,(T?us(d,T+h):h)-d,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?xM:hu),this._pt.u=p||0,S&&x!==u?(this._pt.b=l,this._pt.e=x,this._pt.r=vM):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=_M);else if(g in o)RM.call(this,e,g,l,T?T+u:u);else if(g in e)this.add(e,g,l||e[g],T?T+u:u,i,s);else if(g!=="parseTransform"){th(g,u);continue}S||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,l||e[g])),a.push(g)}}w&&Tm(this)},render:function(e,t){if(t.tween._time||!dh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Li,aliases:mi,getSetter:function(e,t,n){var i=mi[t];return i&&i.indexOf(",")<0&&(t=i),t in zi&&t!==vn&&(e._gsap.x||Li(e,"x"))?n&&Jd===n?t==="scale"?MM:TM:(Jd=n||{})&&(t==="scale"?EM:bM):e.style&&!Ju(e.style[t])?yM:~t.indexOf("-")?SM:lh(e,t)},core:{_removeProperty:sr,_getMatrix:ph}};yn.utils.checkPrefix=As;yn.core.getStyleSaver=Am;(function(r,e,t,n){var i=gn(r+","+e+","+t,function(s){zi[s]=1});gn(e,function(s){In.units[s]="deg",Lm[s]=1}),mi[i[13]]=r+","+e,gn(n,function(s){var a=s.split(":");mi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){In.units[r]="px"});yn.registerPlugin(Om);var Cs=yn.registerPlugin(Om)||yn;Cs.core.Tween;const Um=new Yn().setFromEuler(new Dn(-Math.PI/2,0,0,"XYZ")),NM=Um.clone().invert();function cf(r){return new L(r.x,r.z,-r.y)}function FM(r){const e=new Yn(r.x,r.y,r.z,r.w).normalize();return Um.clone().multiply(e).multiply(NM).normalize()}function BM(r){const e=cf(r.position),t=r.target?cf(r.target):void 0,n=r.quaternion??new Yn().setFromEuler(new Dn(r.rotationEuler?.x??0,r.rotationEuler?.y??0,r.rotationEuler?.z??0,"XYZ"));let i=FM(n);if(t){const a=new Jt;a.position.copy(e),a.lookAt(t),i=a.quaternion.clone()}const s=new Dn().setFromQuaternion(i,"XYZ");return{...r,position:e.toArray().reduce((a,o,c)=>(a[c===0?"x":c===1?"y":"z"]=o,a),{}),target:t?t.toArray().reduce((a,o,c)=>(a[c===0?"x":c===1?"y":"z"]=o,a),{}):void 0,rotationEuler:{x:s.x,y:s.y,z:s.z},quaternion:{x:i.x,y:i.y,z:i.z,w:i.w}}}class kM{camera;states;transitions;rules;currentMainState="personalIntro";detailState="base";isTransitioning=!1;constructor(e,t,n,i){this.camera=e,this.states=t,this.transitions=n.transitions,this.rules=i.rules}setCameraStateInstant(e){this.isTransitioning||(this.applyState(this.states[e]),e==="creativityCloseup"?(this.currentMainState="creativityBase",this.detailState="closeup"):(this.currentMainState=e,this.detailState="base"))}async navigateTo(e){if(this.isTransitioning)return!1;if(this.detailState==="closeup"&&await this.exitCreativityCloseup(),e===this.currentMainState)return!0;const t=this.currentMainState,n=this.findTransition(t,e),i=n&&n.keyframes.length>=2?n.keyframes:this.buildFallbackPath(e);return await this.animatePath(i),this.currentMainState=e,this.detailState="base",!0}async enterCreativityCloseup(){if(this.isTransitioning||this.currentMainState!=="creativityBase"||this.detailState!=="base")return!1;const e=this.findTransition("creativityBase","creativityCloseup");return e?(await this.animatePath(e.keyframes),this.detailState="closeup",!0):!1}async exitCreativityCloseup(){if(this.isTransitioning||this.detailState!=="closeup")return!0;const e=this.findTransition("creativityCloseup","creativityBase");return e?(await this.animatePath(e.keyframes),this.detailState="base",this.currentMainState="creativityBase",!0):!1}getDebugSnapshot(){return{currentMainState:this.currentMainState,detailState:this.detailState,isTransitioning:this.isTransitioning,position:this.camera.position.clone(),rotation:this.camera.rotation.clone(),fov:this.camera.fov}}applyState(e){this.applyRuntimeKeyframe(this.toRuntimeKeyframe(e))}toRuntimeKeyframe(e){const t=BM(e),n=new Yn(t.quaternion?.x??0,t.quaternion?.y??0,t.quaternion?.z??0,t.quaternion?.w??1).normalize();return{frame:t.frame,position:new L(t.position.x,t.position.y,t.position.z),quaternion:n,fov:t.fov??this.camera.fov}}async animatePath(e){const t=e.map(n=>this.toRuntimeKeyframe(n));if(t.length<2){t[0]&&this.applyRuntimeKeyframe(t[0]);return}this.isTransitioning=!0;try{for(let n=0;n<t.length-1;n+=1)await this.animateSegment(t[n],t[n+1])}finally{this.isTransitioning=!1}}animateSegment(e,t){const n=Math.abs((t.frame??0)-(e.frame??0)),i=n>0?Math.max(.45,Math.min(2.2,n/24)):1.2,s={progress:0};return new Promise(a=>{Cs.to(s,{progress:1,duration:i,ease:"power2.inOut",onUpdate:()=>{const o=s.progress;this.camera.position.lerpVectors(e.position,t.position,o),this.camera.quaternion.slerpQuaternions(e.quaternion,t.quaternion,o),this.camera.fov=Qi.lerp(e.fov,t.fov,o),this.camera.updateProjectionMatrix()},onComplete:a})})}applyRuntimeKeyframe(e){this.camera.position.copy(e.position),this.camera.quaternion.copy(e.quaternion),this.camera.fov=e.fov,this.camera.updateProjectionMatrix()}findTransition(e,t){return this.transitions.find(n=>n.from===e&&n.to===t)}buildFallbackPath(e){const t=this.currentMainState==="creativityBase"&&this.detailState==="closeup"?this.states.creativityCloseup:this.states[this.currentMainState],n=this.states[e];return[{...t,position:{...t.position},quaternion:t.quaternion?{...t.quaternion}:void 0,rotationEuler:t.rotationEuler?{...t.rotationEuler}:void 0},{...n,position:{...n.position},quaternion:n.quaternion?{...n.quaternion}:void 0,rotationEuler:n.rotationEuler?{...n.rotationEuler}:void 0}]}getNavigationRules(){return this.rules}}function lf(r,e){if(e===Bg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Yl||e===up){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Yl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class zM extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new XM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new sE(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=oa.extractUrlBase(e);a=oa.resolveURL(l,this.path)}else a=oa.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ip(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Nm){try{a[We.KHR_BINARY_GLTF]=new aE(e)}catch(h){i&&i(h);return}s=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new xE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:a[h]=new GM;break;case We.KHR_DRACO_MESH_COMPRESSION:a[h]=new oE(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[h]=new cE;break;case We.KHR_MESH_QUANTIZATION:a[h]=new lE;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function HM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class VM{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new be(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],un);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qu(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new mv(u),l.distance=h;break;case"spot":l=new fv(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class GM{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(e,t,n){const i=[];e.color=new be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],un),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,mt))}return Promise.all(i)}}class WM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class XM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(s)}}class jM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class qM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class $M{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],un)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class YM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class KM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(o[0],o[1],o[2],un),Promise.all(s)}}class ZM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class JM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(o[0],o[1],o[2],un),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mt)),Promise.all(s)}}class QM{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class eE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class tE{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class nE{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class iE{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class rE{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class sE{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const _ of h){const g=new Be,m=new L,p=new Yn,T=new L(1,1,1),S=new z_(_.geometry,_.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&T.fromBufferAttribute(c.SCALE,v),S.setMatrixAt(v,g.compose(m,p,T));for(const v in c)if(v==="_COLOR_0"){const b=c[v];S.instanceColor=new Zl(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,c[v]);_t.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Nm="glTF",Ys=12,uf={JSON:1313821514,BIN:5130562};class aE{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ys,s=new DataView(e,Ys);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===uf.JSON){const l=new Uint8Array(e,Ys+a,o);this.content=n.decode(l)}else if(c===uf.BIN){const l=Ys+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=mu[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=mu[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=fs[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}h(f)},o,l,un,d)})})}}class cE{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class lE{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Fm extends Ia{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*l,g=_-l,m=-2*f+3*d,p=f-d,T=1-m,S=p-d+h;for(let v=0;v!==o;v++){const b=a[g+v+o],C=a[g+v+c]*u,w=a[_+v+o],R=a[_+v]*u;s[v]=T*b+S*C+m*w+p*R}return s}}const uE=new Yn;class hE extends Fm{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return uE.fromArray(s).normalize().toArray(s),s}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hf={9728:qt,9729:Et,9984:np,9985:So,9986:na,9987:ni},df={33071:Ht,33648:Io,10497:_s},Qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dE={CUBICSPLINE:void 0,LINEAR:ga,STEP:ma},el={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ko({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),r.DefaultMaterial}function vr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pE(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function mE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gE(r){let e;const t=r.extensions&&r.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tl(t.attributes):e=r.indices+":"+tl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+tl(r.targets[n]);return e}function tl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function gu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _E(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vE=new Be;class xE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Xu(this.options.manager):this.textureLoader=new xv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ip(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vr(s,o,i),Pi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(oa.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Qc[i.type],o=fs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new cn(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Qc[i.type],l=fs[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==h){const p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(T);S||(g=new l(o,p*f,i.count*f/u),S=new Mp(g,f/u),t.cache.add(T,S)),m=new Ii(S,c,d%f/u,_)}else o===null?g=new l(i.count*c):g=new l(o,d,i.count*c),m=new cn(g,c,_);if(i.sparse!==void 0){const p=Qc.SCALAR,T=fs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new T(a[1],S,i.sparse.count*p),C=new l(a[2],v,i.sparse.count*c);o!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=b.length;w<R;w++){const x=b[w];if(m.setX(x,C[w*c]),c>=2&&m.setY(x,C[w*c+1]),c>=3&&m.setZ(x,C[w*c+2]),c>=4&&m.setW(x,C[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=hf[d.magFilter]||Et,u.minFilter=hf[d.minFilter]||ni,u.wrapS=df[d.wrapS]||_s,u.wrapT=df[d.wrapT]||_s,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==Et,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Ut(g);m.needsUpdate=!0,d(m)}),t.load(oa.resolveURL(h,s.path),_,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Pi(h,a),h.userData.mimeType=a.mimeType||_E(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ap,_i.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new wp,_i.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ko}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[We.KHR_MATERIALS_UNLIT]){const h=i[We.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new be(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],un),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,mt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=hi);const u=s.alphaMode||el.OPAQUE;if(u===el.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===el.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Xn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Xn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Xn){const h=s.emissiveFactor;o.emissive=new be().setRGB(h[0],h[1],h[2],un)}return s.emissiveTexture!==void 0&&a!==Xn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,mt)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Pi(h,s),t.associations.set(h,{materials:e}),s.extensions&&vr(i,h,s),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ff(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=gE(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=ff(new Sn,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?fE(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=a[f];let p;const T=l[f];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new F_(g,T):new en(g,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?p.geometry=lf(p.geometry,up):m.mode===Hn.TRIANGLE_FAN&&(p.geometry=lf(p.geometry,Yl));else if(m.mode===Hn.LINES)p=new W_(g,T);else if(m.mode===Hn.LINE_STRIP)p=new Gu(g,T);else if(m.mode===Hn.LINE_LOOP)p=new X_(g,T);else if(m.mode===Hn.POINTS)p=new j_(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&mE(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Pi(p,s),m.extensions&&vr(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&vr(i,h[0],s),h[0];const d=new br;s.extensions&&vr(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Qi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new Be;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Hu(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let T=0,S=d.length;T<S;T++){const v=d[T],b=f[T],C=_[T],w=g[T],R=m[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const x=n._createAnimationTracks(v,b,C,w,R);if(x)for(let E=0;E<x.length;E++)p.push(x[E])}return new rv(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,vE)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new Ep:l.length>1?u=new br:l.length===1?u=l[0]:u=new _t,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Pi(u,s),s.extensions&&vr(n,u,s),s.matrix!==void 0){const h=new Be;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new br;n.name&&(s.name=i.createUniqueName(n.name)),Pi(s,n),n.extensions&&vr(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof _i||d instanceof Ut)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];qi[s.path]===qi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(qi[s.path]){case qi.weights:l=ys;break;case qi.rotation:l=Ss;break;case qi.translation:case qi.scale:l=Ts;break;default:n.itemSize===1?l=ys:l=Ts;break}const u=i.interpolation!==void 0?dE[i.interpolation]:ga,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const _=new l(c[d]+"."+qi[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gu(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ss?hE:Fm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yE(r,e,t){const n=e.attributes,i=new Yt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const u=gu(fs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=gu(fs[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Kn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function ff(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=mu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return qe.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Pi(r,e),yE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?pE(r,e.targets,t):r})}const Wo=["ROOT_PersonalIntro","ROOT_TechStack","ROOT_Projects","ROOT_Creativity","ROOT_MoreInterests"],pf=["Terminal_Panel_A","Terminal_Panel_B","Terminal_Panel_C","Workstation_Desk","Workstation_Monitor","Creativity_Screen","Projects_Screen","Photo_Frame","PersonalIntro_Photo","Kendo_Gear","Compact_Camera","Artist_Palette","Game_Controller","World_Globe"];function mf(r){return r.clone()}function SE(r){return r.clone()}function TE(r){const e=new Map,t=[];let n=0,i=0;r.traverse(h=>{t.push(h),h.name&&!e.has(h.name)&&e.set(h.name,h),h.isMesh&&(n+=1),(h.type==="Object3D"||h.type==="Empty")&&(i+=1)});const s={};for(const h of Wo){const d=e.get(h);s[h]={found:!!d,position:d?mf(d.position):void 0,rotation:d?SE(d.rotation):void 0,scale:d?mf(d.scale):void 0,children:d?.children.length??0}}const a={};for(const h of pf){const d=e.get(h);a[h]={found:!!d,parent:d?.parent?.name,children:d?.children.length??0}}const o=t.filter(h=>h.name.startsWith("Kendo_Gear_Part_")),c=e.get("ROOT_Kendo"),l=Wo.filter(h=>!s[h].found),u=pf.filter(h=>h==="Kendo_Gear"?!c&&o.length===0:!a[h].found);return{rootChecks:s,objectChecks:a,kendoAggregate:{found:!!(c||o.length),partCount:o.length,parent:c?.parent?.name},objectCount:t.length,meshCount:n,emptyCount:i,missingRoots:l,missingObjects:u}}async function ME(r){const n=(await new zM().loadAsync(r)).scene,i=TE(n);return console.log("[GLB] gltf.scene",n),console.group("[GLB] Object names"),n.traverse(s=>{s.name&&console.log(s.name,s.type,"parent:",s.parent?.name||"—")}),console.groupEnd(),console.group("[GLB] Structure validation"),console.table(Object.entries(i.rootChecks).map(([s,a])=>({name:s,found:a.found,children:a.children,position:a.position?a.position.toArray().map(o=>o.toFixed(3)).join(", "):"—"}))),console.table(Object.entries(i.objectChecks).map(([s,a])=>({name:s,found:a.found,parent:a.parent||"—",children:a.children}))),console.log("Kendo aggregate:",i.kendoAggregate),console.log("Counts:",{objects:i.objectCount,meshes:i.meshCount,empties:i.emptyCount}),console.groupEnd(),{scene:n,structure:i}}class EE{entries;elapsed=0;constructor(e,t){this.entries=t.flatMap(n=>{const i=e.getObjectByName(n.name);return i?[{...n,object:i,baseY:i.position.y+(n.lift??0)}]:(console.warn(`[Float] ${n.name} was not found; idle motion skipped.`),[])})}update(e){this.elapsed+=Math.min(e,.1),this.entries.forEach(t=>{t.object.position.y=t.baseY+Math.sin(this.elapsed*t.speed+t.phase)*t.amplitude})}getAnimatedNames(){return this.entries.map(e=>e.name)}}function mh(r,e,t){const n=r,i=new Xn({name:t,map:e,color:16777215,transparent:r.transparent,opacity:r.opacity,alphaTest:n.alphaTest??0,side:r.side,depthTest:r.depthTest,depthWrite:r.depthWrite,polygonOffset:n.polygonOffset,polygonOffsetFactor:n.polygonOffsetFactor,polygonOffsetUnits:n.polygonOffsetUnits,toneMapped:!1});return i.userData.isContentMaterial=!0,i}function Bm(r,e){const t=r.getObjectByName("Projects_Screen");if(!t||!t.isMesh)return!1;const n=t;n.userData.isContentPlane=!0,n.userData.contentPlaneRole="Projects_Screen";const s=(Array.isArray(n.material)?n.material:[n.material]).map(a=>a.userData.isContentMaterial&&a instanceof Xn?(a.map=e,a.color.set(16777215),a.needsUpdate=!0,a):mh(a,e,"MAT_Projects_Screen_Content"));return n.material=s.length===1?s[0]:s,!0}function bE(r,e){const t=r.getObjectByName("PersonalIntro_Photo");if(!t||!t.isMesh)return!1;const n=t;n.userData.isContentPlane=!0,n.userData.contentPlaneRole="PersonalIntro_Photo",n.castShadow=!1,n.receiveShadow=!1;const s=(Array.isArray(n.material)?n.material:[n.material]).map(a=>a.userData.isContentMaterial&&a instanceof Xn?(a.map=e,a.color.set(16777215),a.toneMapped=!1,a.needsUpdate=!0,a):mh(a,e,"MAT_PersonalIntro_Photo"));return n.material=s.length===1?s[0]:s,!0}function wE(r,e){const t=r.getObjectByName("Creativity_Screen");if(!t||!t.isMesh)return!1;const n=t;n.userData.isContentPlane=!0,n.userData.contentPlaneRole="Creativity_Screen",n.visible=!0,n.frustumCulled=!1,n.castShadow=!1,n.receiveShadow=!1;const s=(Array.isArray(n.material)?n.material:[n.material]).map(a=>a.userData.isContentMaterial&&a instanceof Xn?(a.map=e,a.color.set(16777215),a.toneMapped=!1,a.needsUpdate=!0,a):mh(a,e,"MAT_Creativity_Screen_Content"));return n.material=s.length===1?s[0]:s,!0}const Oi={type:"prompt",text:"kui@portfolio ~/workspace"},AE=[{id:"vite-hmr",lines:[{type:"output",text:"hmr update /src/app.ts"},{type:"success",text:"✓ module refreshed in {{duration}}"}]},{id:"route-request",lines:[Oi,{type:"command",text:"curl --silent /projects"},{type:"output",text:"GET /projects 200"}]},{id:"typescript-check",lines:[Oi,{type:"command",text:"npm run typecheck"},{type:"success",text:"✓ TypeScript check passed"}]},{id:"compile",lines:[{type:"output",text:"compiling /src/scene/camera.ts"},{type:"success",text:"✓ compiled in {{duration}}"}]},{id:"production-build",lines:[Oi,{type:"command",text:"npm run build"},{type:"success",text:"build complete in {{duration}}"}],minDelay:1800,maxDelay:3600}],CE=[{id:"git-status",lines:[Oi,{type:"command",text:"git status"},{type:"output",text:"On branch develop"},{type:"success",text:"working tree clean"}]},{id:"git-fetch",lines:[Oi,{type:"command",text:"git fetch origin"},{type:"output",text:"remote refs checked"},{type:"success",text:"develop is up to date"}]},{id:"git-log",lines:[Oi,{type:"command",text:"git log --oneline -3"},{type:"output",text:"portfolio scene polish"},{type:"output",text:"terminal runtime update"},{type:"output",text:"camera states verified"}]},{id:"git-branch",lines:[{type:"output",text:"branch: develop"},{type:"success",text:"working tree clean"}]},{id:"git-commit-check",lines:[Oi,{type:"command",text:"git diff --stat"},{type:"output",text:"no unstaged changes"}],minDelay:1600,maxDelay:3400}],RE=[{id:"claude-ready",lines:[{type:"prompt",text:"(base) PS D:\\portfolio\\portfolio>"},{type:"command",text:"claude"},{type:"output",text:"Claude Code v2.1.34"},{type:"output",text:"workspace trust check passed"},{type:"success",text:"session ready"}]},{id:"claude-model",lines:[{type:"prompt",text:"(base) PS D:\\portfolio\\portfolio>"},{type:"command",text:"/model"},{type:"output",text:"claude-haiku-4-5 · API Usage Billing"},{type:"success",text:"model available"}]},{id:"claude-workspace",lines:[{type:"output",text:"Tips: run /init to create project instructions"},{type:"output",text:"? for shortcuts"},{type:"success",text:"workspace loaded"}]},{id:"claude-command",lines:[{type:"prompt",text:"(base) PS D:\\portfolio\\portfolio>"},{type:"command",text:"fix typecheck errors"},{type:"output",text:"analyzing workspace"},{type:"success",text:"ready for collaboration"}]},{id:"claude-context",lines:[{type:"output",text:"project context indexed"},{type:"success",text:"safe workspace mode"}]},{id:"claude-update",lines:[{type:"output",text:"collaboration session active"},{type:"success",text:"waiting for next task"}],minDelay:1700,maxDelay:3500}],PE=[{id:"development",title:"development",initialLines:[Oi,{type:"command",text:"npm run dev"},{type:"success",text:"VITE ready in 421ms"},{type:"output",text:"Local: http://localhost:5173/"}],events:AE,minEventDelay:900,maxEventDelay:2400},{id:"version-control",title:"version control",initialLines:[Oi,{type:"command",text:"git status"},{type:"output",text:"On branch develop"},{type:"success",text:"working tree clean"}],events:CE,minEventDelay:1400,maxEventDelay:3200},{id:"tools",title:"claude code",initialLines:[{type:"prompt",text:"(base) PS D:\\portfolio\\portfolio>"},{type:"command",text:"claude"},{type:"output",text:"Claude Code v2.1.34"},{type:"success",text:"session ready"}],events:RE,minEventDelay:1e3,maxEventDelay:2900}],wn='ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',kn={background:"#0e1114",panel:"#131a20",border:"#2e3d45",title:"#9aa7ad",prompt:"#67d5c5",command:"#f2f1eb",output:"#a9b4b8",success:"#79d6a1",warning:"#e2b16e",cursor:"#f2ae70"};class LE{canvas;texture;context;width;height;title;typingSpeed;cursorInterval;maxHistoryLines;visibleLineCount;reducedMotion;mascot;historyLines=[];currentEventLines=[];currentCommandLineIndex=-1;currentCommandText="";visibleCommandLength=0;currentOutputPause=260;currentEventCallback;scrollOffset=0;scrollStartOffset=0;scrollTargetOffset=0;scrollStartTime=0;scrollDuration=240;state="idle";previousState="idle";cursorVisible=!0;typingTimer;outputTimer;cursorTimer;scrollTimer;redrawCount=0;textureUploadCount=0;eventsGenerated=0;constructor(e){this.width=e.width??1024,this.height=e.height??512,this.title=e.title,this.typingSpeed=e.typingSpeed??34,this.cursorInterval=e.cursorInterval??620,this.maxHistoryLines=e.maxHistoryLines??100,this.visibleLineCount=e.visibleLineCount??9,this.mascot=e.mascot,this.reducedMotion=typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height;const t=this.canvas.getContext("2d");if(!t)throw new Error(`Could not create terminal canvas for ${this.title}.`);this.context=t,this.texture=new Wu(this.canvas),this.texture.colorSpace=mt,this.texture.flipY=!1,this.texture.wrapS=Ht,this.texture.wrapT=Ht,this.texture.minFilter=Et,this.texture.magFilter=Et,this.texture.generateMipmaps=!1,this.texture.anisotropy=1,this.render()}startEvent(e,t,n=260){return this.state!=="idle"||this.currentEventLines.length>0?!1:(this.stopTimers(),this.currentEventLines=e,this.currentEventCallback=t,this.currentOutputPause=n,this.currentCommandLineIndex=e.findIndex(i=>i.type==="command"),this.currentCommandText=this.currentCommandLineIndex>=0?e[this.currentCommandLineIndex].text??"":"",this.visibleCommandLength=0,this.eventsGenerated+=1,this.currentCommandLineIndex<0?(this.finishEvent(),!0):(this.appendHistory(e.slice(0,this.currentCommandLineIndex)),this.state="typing",this.cursorVisible=!0,this.render(),this.startCursorTimer(),this.scheduleNextCharacter(0),!0))}setLines(e){this.reset(),this.appendHistory(e),this.scrollOffset=this.getTargetScrollOffset(),this.render()}clearHistory(){this.historyLines=[],this.scrollOffset=0,this.render()}reset(){this.stopTimers(),this.historyLines=[],this.currentEventLines=[],this.currentCommandLineIndex=-1,this.currentCommandText="",this.visibleCommandLength=0,this.currentEventCallback=void 0,this.scrollOffset=0,this.scrollTargetOffset=0,this.state="idle",this.previousState="idle",this.cursorVisible=!0,this.render()}render(){if(this.mascot==="orange-crab"){this.renderClaudeCodeHome();return}const e=this.context,t=this.getTargetScrollOffset();this.scrollOffset>t&&(this.scrollOffset=t),e.clearRect(0,0,this.width,this.height),e.fillStyle=kn.background,e.fillRect(0,0,this.width,this.height),e.fillStyle=kn.panel,e.fillRect(16,16,this.width-32,this.height-32),e.strokeStyle=kn.border,e.lineWidth=2,e.strokeRect(16,16,this.width-32,this.height-32),this.drawHeader(),e.font=`500 25px ${wn}`,e.textBaseline="top";const n=48,i=54,s=108;e.save(),e.beginPath(),e.rect(32,92,this.width-64,this.height-112),e.clip();let a=0;if(this.historyLines.forEach(o=>{const c=s+(a-this.scrollOffset)*n;if(o.type==="blank"){a+=.5;return}const l=o.type==="command"?`$ ${o.text??""}`:o.text??"",u=o.type==="prompt"?kn.prompt:this.colorForLine(o.type);a+=this.drawWrappedLine(l,u,i,c,n)}),this.currentCommandLineIndex>=0&&this.currentEventLines.length>0){const o=this.currentCommandText.slice(0,this.visibleCommandLength);a+=this.drawWrappedLine(`$ ${o}`,kn.command,i,s+(a-this.scrollOffset)*n,n)}(this.state==="typing"||this.state==="output"||this.state==="idle")&&this.cursorVisible&&this.drawWrappedLine("▋",kn.cursor,i,s+(a-this.scrollOffset)*n,n),e.restore(),this.redrawCount+=1,this.textureUploadCount+=1,this.texture.needsUpdate=!0}pause(){this.state!=="paused"&&(this.previousState=this.state,this.stopTimers(),this.state="paused",this.render())}resume(){this.state==="paused"&&(this.state=this.previousState,this.render(),this.state==="typing"?(this.startCursorTimer(),this.scheduleNextCharacter(0)):this.state==="output"?(this.startCursorTimer(),this.outputTimer=window.setTimeout(()=>this.finishEvent(),this.currentOutputPause)):this.state==="scrolling"?this.startScrollAnimation():this.startCursorTimer())}stop(){this.pause()}completeInstantly(){if(this.stopTimers(),this.state==="scrolling"){this.scrollOffset=this.scrollTargetOffset,this.state="idle",this.render();const t=this.currentEventCallback;this.currentEventCallback=void 0,t?.(),this.startCursorTimer();return}this.currentEventLines.length>0&&(this.currentCommandLineIndex>=0?this.appendHistory([this.currentEventLines[this.currentCommandLineIndex],...this.currentEventLines.slice(this.currentCommandLineIndex+1)]):this.appendHistory(this.currentEventLines),this.currentEventLines=[],this.currentCommandLineIndex=-1,this.currentCommandText="",this.visibleCommandLength=0),this.scrollOffset=this.getTargetScrollOffset(),this.scrollTargetOffset=this.scrollOffset,this.state="idle",this.cursorVisible=!0,this.render();const e=this.currentEventCallback;this.currentEventCallback=void 0,e?.(),this.startCursorTimer()}getState(){return this.state}isBusy(){return this.state==="typing"||this.state==="output"||this.state==="scrolling"||this.state==="paused"}getMetrics(){const e=this.currentEventLines.length===0&&this.state==="idle"&&this.historyLines.length>0;return{redrawCount:this.redrawCount,renderCount:this.redrawCount,textureUploadCount:this.textureUploadCount,eventsGenerated:this.eventsGenerated,state:this.state,historyLength:this.historyLines.length,isComplete:e}}dispose(){this.stopTimers(),this.texture.dispose()}scheduleNextCharacter(e){this.typingTimer=window.setTimeout(()=>this.typeNextCharacter(),e)}typeNextCharacter(){if(this.state!=="typing")return;if(this.visibleCommandLength=Math.min(this.visibleCommandLength+1,this.currentCommandText.length),this.render(),this.visibleCommandLength>=this.currentCommandText.length){this.state="output",this.outputTimer=window.setTimeout(()=>this.finishEvent(),this.currentOutputPause);return}const e=this.typingSpeed*(.75+Math.random()*.55);this.scheduleNextCharacter(e)}finishEvent(){this.currentEventLines.length!==0&&(this.stopTimers(),this.currentCommandLineIndex>=0?this.appendHistory([this.currentEventLines[this.currentCommandLineIndex],...this.currentEventLines.slice(this.currentCommandLineIndex+1)]):this.appendHistory(this.currentEventLines),this.currentEventLines=[],this.currentCommandLineIndex=-1,this.currentCommandText="",this.visibleCommandLength=0,this.state="scrolling",this.scrollTargetOffset=this.getTargetScrollOffset(),this.startScrollAnimation())}startScrollAnimation(){if(this.stopScrollTimer(),this.reducedMotion||this.scrollTargetOffset<=this.scrollOffset+.01){this.scrollOffset=this.scrollTargetOffset,this.state="idle",this.render();const t=this.currentEventCallback;this.currentEventCallback=void 0,t?.(),this.startCursorTimer();return}this.scrollStartOffset=this.scrollOffset,this.scrollStartTime=performance.now();const e=()=>{if(this.state!=="scrolling")return;const t=performance.now()-this.scrollStartTime,n=Math.min(t/this.scrollDuration,1),i=1-Math.pow(1-n,3);if(this.scrollOffset=this.scrollStartOffset+(this.scrollTargetOffset-this.scrollStartOffset)*i,this.render(),n>=1){this.scrollOffset=this.scrollTargetOffset,this.state="idle";const s=this.currentEventCallback;this.currentEventCallback=void 0,s?.(),this.startCursorTimer();return}this.scrollTimer=window.setTimeout(e,33)};e()}startCursorTimer(){this.stopCursorTimer(),this.cursorTimer=window.setInterval(()=>{this.state!=="typing"&&this.state!=="output"&&this.state!=="idle"||(this.cursorVisible=!this.cursorVisible,this.render())},this.cursorInterval)}stopTimers(){this.typingTimer!==void 0&&window.clearTimeout(this.typingTimer),this.outputTimer!==void 0&&window.clearTimeout(this.outputTimer),this.typingTimer=void 0,this.outputTimer=void 0,this.stopCursorTimer(),this.stopScrollTimer()}stopCursorTimer(){this.cursorTimer!==void 0&&window.clearInterval(this.cursorTimer),this.cursorTimer=void 0}stopScrollTimer(){this.scrollTimer!==void 0&&window.clearTimeout(this.scrollTimer),this.scrollTimer=void 0}appendHistory(e){e.forEach(t=>this.historyLines.push({...t})),this.historyLines.length>this.maxHistoryLines&&this.historyLines.splice(0,this.historyLines.length-this.maxHistoryLines),this.scrollTargetOffset=this.getTargetScrollOffset(),this.scrollOffset>this.scrollTargetOffset&&(this.scrollOffset=this.scrollTargetOffset)}getTargetScrollOffset(){return Math.max(0,this.getVisualRowCount()-this.visibleLineCount)}getVisualRowCount(){return this.context.font=`500 25px ${wn}`,this.historyLines.reduce((e,t)=>t.type==="blank"?e+.5:e+this.wrapText(t.text??"",this.width-54-54).length,0)}drawHeader(){const e=this.context;e.fillStyle=kn.title,e.font=`600 20px ${wn}`,e.textBaseline="middle",e.fillText(this.title.toUpperCase(),52,53),e.fillStyle=kn.prompt,e.beginPath(),e.arc(this.width-74,52,6,0,Math.PI*2),e.fill(),e.fillStyle=kn.border,e.fillRect(52,76,this.width-104,2),this.mascot==="orange-crab"&&this.drawOrangeCrab(this.width-150,52,.82)}renderClaudeCodeHome(){const e=this.context,t="#dd7857",n="#f1eee8",i="#a7a3a0",s="#6f6a68",a=this.width-8,o=this.height-54;e.clearRect(0,0,this.width,this.height),e.fillStyle="#050505",e.fillRect(0,0,this.width,this.height),e.strokeStyle=t,e.lineWidth=3,e.beginPath(),e.roundRect(4,24,a,o,8),e.stroke(),e.textBaseline="alphabetic",e.font=`600 26px ${wn}`,e.fillStyle=t,e.fillText("Claude Code",40,46),e.font=`500 22px ${wn}`,e.fillStyle=i,e.fillText("v2.1.34",248,46),e.strokeStyle=t,e.lineWidth=2,e.beginPath(),e.moveTo(365,47),e.lineTo(990,47),e.stroke(),e.strokeStyle="#7b3e2f",e.lineWidth=2,e.beginPath(),e.moveTo(370,58),e.lineTo(370,315),e.stroke(),e.font=`500 25px ${wn}`,e.fillStyle=n,e.fillText("Welcome back Kui!",72,92),this.drawOrangeCrab(187,174,1.08,!0),e.font=`500 20px ${wn}`,e.fillStyle=i,e.fillText("claude-haiku-4-5 · API Usage Billing",40,330),e.fillText("D:\\portfolio\\portfolio",105,357),e.font=`600 21px ${wn}`,e.fillStyle="#a6543e",e.fillText("Tips for getting started",394,80),e.font=`500 18px ${wn}`,e.fillStyle=i,e.fillText("Run /init to create a CLAUDE.md file with instructions",394,104),e.fillText("for Claude",394,127),e.fillStyle=s,e.fillText("Note: workspace opened in a trusted project folder",394,151),e.strokeStyle="#7b3e2f",e.beginPath(),e.moveTo(394,171),e.lineTo(978,171),e.stroke(),e.font=`600 21px ${wn}`,e.fillStyle="#a6543e",e.fillText("Recent activity",394,198);const c=this.getClaudeRecentLines();e.font=`500 18px ${wn}`,e.fillStyle=i,c.length===0&&e.fillText("No recent activity",394,222),c.forEach((l,u)=>e.fillText(l,394,222+u*22)),e.fillStyle=i,e.font=`500 20px ${wn}`,e.fillText("/model to try Opus 4.6",28,404),e.strokeStyle="#353535",e.beginPath(),e.moveTo(0,430),e.lineTo(this.width,430),e.moveTo(0,484),e.lineTo(this.width,484),e.stroke(),e.fillStyle=n,e.font=`500 19px ${wn}`,e.fillText('❯ Try "fix typecheck errors"',0,461),e.fillStyle=i,e.fillText("? for shortcuts",28,507),e.fillText("○ /ide for Visual Studio Code",748,507),this.redrawCount+=1,this.textureUploadCount+=1,this.texture.needsUpdate=!0}getClaudeRecentLines(){const e=this.historyLines.filter(t=>t.type!=="blank").map(t=>t.type==="command"?`$ ${t.text??""}`:t.text??"").filter(Boolean).slice(-4);if(this.currentCommandLineIndex>=0&&this.currentEventLines.length>0){const t=this.currentCommandText.slice(0,this.visibleCommandLength);e.push(`$ ${t}`)}return e.slice(-4)}drawOrangeCrab(e,t,n,i=!1){const s=this.context;if(s.save(),s.translate(e,t),s.scale(n,n),i){const l=["   OO   OO   ","   OO   OO   "," OOOOOOOOOOO ","OOOOOOOOOOOOO","OOOOOOOOOOOOO"," OOOOOOOOOOO ","  OOO   OOO  "," OO       OO "];s.fillStyle="#dd7857",l.forEach((h,d)=>{[...h].forEach((f,_)=>{f==="O"&&s.fillRect((_-6)*11,(d-4)*11,11,11)})}),s.restore();return}s.lineCap="round",s.lineJoin="round";const a="#f28b4b",o="#ffb06f",c="#b84f2d";s.strokeStyle=c,s.lineWidth=4,s.fillStyle=a,s.beginPath(),s.ellipse(0,4,31,19,0,0,Math.PI*2),s.fill(),s.stroke(),s.fillStyle=o,s.beginPath(),s.arc(-11,-12,7,0,Math.PI*2),s.arc(11,-12,7,0,Math.PI*2),s.fill(),s.stroke(),s.fillStyle=c,s.beginPath(),s.arc(-11,-12,2.5,0,Math.PI*2),s.arc(11,-12,2.5,0,Math.PI*2),s.fill(),s.strokeStyle=a,s.lineWidth=7,s.beginPath(),s.moveTo(-24,2),s.lineTo(-43,-10),s.moveTo(24,2),s.lineTo(43,-10),s.stroke(),s.strokeStyle=c,s.lineWidth=4,s.beginPath(),s.arc(-48,-13,10,.2,Math.PI*1.35),s.arc(48,-13,10,Math.PI*1.65,Math.PI*2.8),s.stroke(),s.strokeStyle=a,s.lineWidth=5,[-1,1].forEach(l=>{[-7,3,13].forEach((u,h)=>{s.beginPath(),s.moveTo(l*24,u),s.lineTo(l*(42+h*3),u+(h-1)*10),s.stroke()})}),s.restore()}drawLine(e,t,n,i){this.context.fillStyle=t,this.context.fillText(e,n,i)}drawWrappedLine(e,t,n,i,s){const a=this.width-n-54,o=this.wrapText(e,a);return o.forEach((c,l)=>this.drawLine(c,t,n,i+l*s)),Math.max(o.length,1)}wrapText(e,t){if(e.length===0)return[""];const n=[];let i="";for(const s of e){const a=i+s;i&&this.context.measureText(a).width>t?(n.push(i),i=s):i=a}return i&&n.push(i),n}colorForLine(e){return e==="success"?kn.success:e==="warning"?kn.warning:kn.output}}const IE=["Terminal_Panel_A","Terminal_Panel_B","Terminal_Panel_C"],gf=["173ms","284ms","412ms","621ms","831ms"],_f=["/projects","/tech","/assets","/camera"];function DE(r){return Array.isArray(r.material)?r.material:[r.material]}function OE(r,e){const t=r,n=new Xn({name:"MAT_Terminal_Dynamic_Canvas",map:e,color:16777215,transparent:r.transparent,opacity:r.opacity,alphaTest:t.alphaTest??0,side:xn,depthTest:!0,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return n.userData.isContentMaterial=!0,n.userData.isDynamicTerminalMaterial=!0,n}function vf(r,e){return r+Math.random()*Math.max(0,e-r)}function UE(r){return r.replace(/\{\{duration\}\}/g,()=>gf[Math.floor(Math.random()*gf.length)]).replace(/\{\{route\}\}/g,()=>_f[Math.floor(Math.random()*_f.length)])}function xf(r){return r.map(e=>({...e,text:e.text===void 0?void 0:UE(e.text)}))}class NE{constructor(e,t=PE){this.root=e,IE.forEach((n,i)=>{const s=e.getObjectByName(n),a=t[i];if(!s?.isMesh||!a){console.warn(`[Terminal] ${n} or its content data was not found; dynamic canvas skipped.`);return}const o=new LE({width:1024,height:512,title:a.title,mascot:a.id==="tools"?"orange-crab":void 0,maxHistoryLines:100,visibleLineCount:9,typingSpeed:34,cursorInterval:620});s.userData.isContentPlane=!0,s.userData.contentPlaneRole=n;const c=DE(s).map(l=>OE(l,o.texture));s.material=c.length===1?c[0]:c,s.castShadow=!1,s.receiveShadow=!1,this.terminals.push({name:n,content:a,texture:o,mesh:s,recentEventIds:[],initialStarted:!1,lastEventStartedAt:0})}),console.log("[Terminal] live panels",JSON.stringify(this.terminals.map(n=>n.name)))}root;terminals=[];active=!1;hasEnteredTech=!1;liveEnabled=!0;watchdogTimer;activate(){if(this.liveEnabled){if(this.active=!0,!this.hasEnteredTech){this.hasEnteredTech=!0,this.scheduleInitialSequences(0),this.startWatchdog();return}this.ensureLiveScheduling(),this.startWatchdog()}}deactivate(){this.active=!1,this.stopWatchdog(),this.terminals.forEach(e=>{this.clearEntryTimers(e),e.texture.pause()})}replay(){this.clearAllTimers(),this.liveEnabled=!0,this.active=!0,this.hasEnteredTech=!0,this.terminals.forEach(e=>{e.texture.reset(),e.recentEventIds=[],e.initialStarted=!1,e.lastEventStartedAt=0}),this.scheduleInitialSequences(0),this.startWatchdog()}pause(){this.liveEnabled=!1,this.active=!1,this.stopWatchdog(),this.terminals.forEach(e=>{this.clearEntryTimers(e),e.texture.pause()})}resume(){if(this.liveEnabled=!0,this.active=!0,!this.hasEnteredTech){this.hasEnteredTech=!0,this.scheduleInitialSequences(0),this.startWatchdog();return}this.ensureLiveScheduling(),this.startWatchdog()}pauseForVisibility(){this.clearAllTimers(),this.terminals.forEach(e=>e.texture.pause())}resumeFromVisibility(){!this.active||!this.liveEnabled||(this.ensureLiveScheduling(),this.startWatchdog())}setLiveEnabled(e){e?this.resume():this.pause()}generateEvent(e){if(!this.active||!this.liveEnabled)return;const t=this.terminals[e];if(!t||t.texture.isBusy())return;this.clearNextTimer(t);const n=this.chooseEvent(t);n&&this.startEvent(t,n)}clearHistory(){this.terminals.forEach(e=>e.texture.clearHistory())}completeInstantly(){this.terminals.forEach(e=>{e.initialTimer!==void 0&&(window.clearTimeout(e.initialTimer),e.initialTimer=void 0,this.startInitial(e)),e.texture.completeInstantly()})}getMetrics(){const e=this.terminals.map(t=>({name:t.name,metrics:t.texture.getMetrics()}));return{redrawCount:e.reduce((t,n)=>t+n.metrics.redrawCount,0),textureUploadCount:e.reduce((t,n)=>t+n.metrics.textureUploadCount,0),eventsGenerated:e.reduce((t,n)=>t+n.metrics.eventsGenerated,0),panels:e}}getState(){return{active:this.active,hasEnteredTech:this.hasEnteredTech,isPaused:!this.active||this.terminals.some(e=>e.texture.getState()==="paused"),isLive:this.active&&this.liveEnabled,isTyping:this.terminals.some(e=>e.texture.getState()==="typing"),panelCount:this.terminals.length}}dispose(){this.clearAllTimers(),this.stopWatchdog(),this.terminals.forEach(e=>e.texture.dispose()),this.terminals.length=0}scheduleInitialSequences(e){this.terminals.forEach((t,n)=>this.scheduleInitial(t,e+n*500))}scheduleInitial(e,t){this.clearInitialTimer(e),e.initialTimer=window.setTimeout(()=>{e.initialTimer=void 0,this.startInitial(e)},t)}startInitial(e){if(!this.active||!this.liveEnabled||e.initialStarted)return;e.initialStarted=!0,e.texture.startEvent(xf(e.content.initialLines),()=>this.scheduleNext(e),300)||(e.initialStarted=!1)}scheduleNext(e,t,n){if(!this.active||!this.liveEnabled||!e.initialStarted||e.nextTimer!==void 0)return;const i=vf(t??e.content.minEventDelay,n??e.content.maxEventDelay);e.nextDueAt=performance.now()+i,e.nextTimer=window.setTimeout(()=>{if(e.nextTimer=void 0,e.nextDueAt=void 0,!this.active||!this.liveEnabled)return;if(e.texture.isBusy()){this.scheduleNext(e,220,500);return}const s=this.chooseEvent(e);s&&this.startEvent(e,s)},i)}startEvent(e,t){if(!this.active||!this.liveEnabled||e.texture.isBusy())return;const n=performance.now();if(n-e.lastEventStartedAt<500){this.scheduleNext(e,500,800);return}if(!e.texture.startEvent(xf(t.lines),()=>this.scheduleNext(e),t.outputPause??vf(180,360))){this.scheduleNext(e,220,500);return}e.lastEventStartedAt=n,e.recentEventIds.push(t.id),e.recentEventIds.length>4&&e.recentEventIds.shift()}ensureLiveScheduling(){!this.active||!this.liveEnabled||document.hidden||this.terminals.forEach((e,t)=>{if(e.texture.resume(),!e.initialStarted){e.initialTimer===void 0&&this.scheduleInitial(e,220+t*160);return}e.nextTimer===void 0&&e.texture.getState()==="idle"&&this.scheduleNext(e,220,500)})}startWatchdog(){this.watchdogTimer===void 0&&(this.watchdogTimer=window.setInterval(()=>{this.ensureLiveScheduling()},1e3))}stopWatchdog(){this.watchdogTimer!==void 0&&window.clearInterval(this.watchdogTimer),this.watchdogTimer=void 0}chooseEvent(e){const t=new Set(e.recentEventIds.slice(-3)),n=e.content.events.filter(o=>!t.has(o.id)),i=n.length>0?n:e.content.events;if(i.length===0)return;const s=i.reduce((o,c)=>o+(c.weight??1),0);let a=Math.random()*s;for(const o of i)if(a-=o.weight??1,a<=0)return o;return i[i.length-1]}clearInitialTimer(e){e.initialTimer!==void 0&&window.clearTimeout(e.initialTimer),e.initialTimer=void 0}clearNextTimer(e){e.nextTimer!==void 0&&window.clearTimeout(e.nextTimer),e.nextTimer=void 0,e.nextDueAt=void 0}clearEntryTimers(e){this.clearInitialTimer(e),this.clearNextTimer(e)}clearAllTimers(){this.terminals.forEach(e=>this.clearEntryTimers(e))}}se.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new He(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};fn.line={uniforms:Ls.merge([se.common,se.fog,se.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class km extends hn{constructor(e){super({type:"LineMaterial",uniforms:Ls.clone(fn.line.uniforms),vertexShader:fn.line.vertexShader,fragmentShader:fn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const yf=new Yt,go=new L;class zm extends vv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ln(e,3)),this.setAttribute("uv",new ln(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ql(t,6,1);return this.setAttribute("instanceStart",new Ii(n,3,0)),this.setAttribute("instanceEnd",new Ii(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ql(t,6,1);return this.setAttribute("instanceColorStart",new Ii(n,3,0)),this.setAttribute("instanceColorEnd",new Ii(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Y_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),yf.setFromBufferAttribute(t),this.boundingBox.union(yf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)go.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(go)),go.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(go));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const nl=new je,Sf=new L,Tf=new L,Gt=new je,Wt=new je,oi=new je,il=new L,rl=new Be,Xt=new Dv,Mf=new L,_o=new Yt,vo=new Kn,ci=new je;let fi,Lr;function Ef(r,e,t){return ci.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),ci.multiplyScalar(1/ci.w),ci.x=Lr/t.width,ci.y=Lr/t.height,ci.applyMatrix4(r.projectionMatrixInverse),ci.multiplyScalar(1/ci.w),Math.abs(Math.max(ci.x,ci.y))}function FE(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let o=0,c=a;o<c;o++){Xt.start.fromBufferAttribute(i,o),Xt.end.fromBufferAttribute(s,o),Xt.applyMatrix4(t);const l=new L,u=new L;fi.distanceSqToSegment(Xt.start,Xt.end,u,l),u.distanceTo(l)<Lr*.5&&e.push({point:u,pointOnLine:l,distance:fi.origin.distanceTo(u),object:r,face:null,faceIndex:o,uv:null,uv1:null})}}function BE(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,o=r.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),h=-e.near;fi.at(1,oi),oi.w=1,oi.applyMatrix4(e.matrixWorldInverse),oi.applyMatrix4(n),oi.multiplyScalar(1/oi.w),oi.x*=s.x/2,oi.y*=s.y/2,oi.z=0,il.copy(oi),rl.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,f=u;d<f;d++){if(Gt.fromBufferAttribute(c,d),Wt.fromBufferAttribute(l,d),Gt.w=1,Wt.w=1,Gt.applyMatrix4(rl),Wt.applyMatrix4(rl),Gt.z>h&&Wt.z>h)continue;if(Gt.z>h){const S=Gt.z-Wt.z,v=(Gt.z-h)/S;Gt.lerp(Wt,v)}else if(Wt.z>h){const S=Wt.z-Gt.z,v=(Wt.z-h)/S;Wt.lerp(Gt,v)}Gt.applyMatrix4(n),Wt.applyMatrix4(n),Gt.multiplyScalar(1/Gt.w),Wt.multiplyScalar(1/Wt.w),Gt.x*=s.x/2,Gt.y*=s.y/2,Wt.x*=s.x/2,Wt.y*=s.y/2,Xt.start.copy(Gt),Xt.start.z=0,Xt.end.copy(Wt),Xt.end.z=0;const g=Xt.closestPointToPointParameter(il,!0);Xt.at(g,Mf);const m=Qi.lerp(Gt.z,Wt.z,g),p=m>=-1&&m<=1,T=il.distanceTo(Mf)<Lr*.5;if(p&&T){Xt.start.fromBufferAttribute(c,d),Xt.end.fromBufferAttribute(l,d),Xt.start.applyMatrix4(a),Xt.end.applyMatrix4(a);const S=new L,v=new L;fi.distanceSqToSegment(Xt.start,Xt.end,v,S),t.push({point:v,pointOnLine:S,distance:fi.origin.distanceTo(v),object:r,face:null,faceIndex:d,uv:null,uv1:null})}}}class bf extends en{constructor(e=new zm,t=new km({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)Sf.fromBufferAttribute(t,a),Tf.fromBufferAttribute(n,a),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Sf.distanceTo(Tf);const s=new Ql(i,2,1);return e.setAttribute("instanceDistanceStart",new Ii(s,1,0)),e.setAttribute("instanceDistanceEnd",new Ii(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;fi=e.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;Lr=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),vo.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=Lr*.5;else{const h=Math.max(i.near,vo.distanceToPoint(fi.origin));l=Ef(i,h,c.resolution)}if(vo.radius+=l,fi.intersectsSphere(vo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),_o.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Lr*.5;else{const h=Math.max(i.near,_o.distanceToPoint(fi.origin));u=Ef(i,h,c.resolution)}_o.expandByScalar(u),fi.intersectsBox(_o)!==!1&&(n?FE(this,t):BE(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(nl),this.material.uniforms.resolution.value.set(nl.z,nl.w))}}const kE=`
  varying vec3 vNprWorldNormal;

  void main() {
    vNprWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,zE=`
  precision highp float;

  uniform vec3 uLightDirection;
  uniform vec3 uHatchColor;
  uniform float uHatchLineWidth;
  uniform float uHatchSpacing;
  uniform float uHatchAngle;
  uniform float uHatchOpacity;
  uniform float uMidtoneStrength;
  uniform float uShadowThreshold;
  uniform float uDeepShadowThreshold;
  uniform float uShadowDarkenAmount;

  varying vec3 vNprWorldNormal;

  float hatchLines(vec2 screenPosition, float angle) {
    vec2 axis = vec2(cos(angle), sin(angle));
    float coordinate = dot(screenPosition, axis);
    float phase = fract(coordinate / uHatchSpacing);
    float distanceToLine = abs(phase - 0.5);
    float halfWidth = 0.5 * uHatchLineWidth / uHatchSpacing;
    float antiAlias = 0.012;
    return 1.0 - smoothstep(halfWidth, halfWidth + antiAlias, distanceToLine);
  }

  void main() {
    float brightness = max(dot(normalize(vNprWorldNormal), normalize(uLightDirection)), 0.0);
    // Thresholds are brightness thresholds: only genuinely dark-facing areas
    // receive hatching. The base material remains responsible for the light.
    float shadowMask = 1.0 - smoothstep(uShadowThreshold - 0.05, uShadowThreshold + 0.05, brightness);
    float deepMask = 1.0 - smoothstep(uDeepShadowThreshold - 0.03, uDeepShadowThreshold + 0.03, brightness);

    float primaryLines = hatchLines(gl_FragCoord.xy, uHatchAngle);
    float crossLines = hatchLines(gl_FragCoord.xy, uHatchAngle + 1.5707963);
    float alpha = shadowMask * primaryLines * uHatchOpacity * uMidtoneStrength;
    alpha += deepMask * primaryLines * uHatchOpacity * 0.98;
    alpha += deepMask * crossLines * uHatchOpacity * 0.28;

    // A very restrained deep-shadow veil is allowed, but it never replaces
    // the light base with a global gray tone.
    alpha += deepMask * uShadowDarkenAmount * 0.18;

    gl_FragColor = vec4(uHatchColor, min(alpha, 0.92));
  }
`,HE=`
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,VE=`
  precision highp float;

  uniform vec3 uPaperColor;
  uniform float uPaperOpacity;

  float hash(vec2 value) {
    return fract(sin(dot(value, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 cell = floor(gl_FragCoord.xy * 0.72);
    float grain = hash(cell);
    float alpha = uPaperOpacity * (0.35 + grain * 0.65);
    gl_FragColor = vec4(uPaperColor, alpha);
  }
`,Hm=new Set(["PersonalIntro_Photo","Projects_Screen","Creativity_Screen","Terminal_Panel_A","Terminal_Panel_B","Terminal_Panel_C"]),wf=new be("#f3f3ef");function Ks(r){return Array.isArray(r)?r:[r]}function GE(r){return new be(r)}function WE(r){return r.map??null}function sl(r){return{...r}}class XE{scene;root;keyLight;options;label;preset;config;states=[];enabled=!1;constructor(e,t,n,i,s={}){this.scene=e,this.root=t,this.keyLight=n,this.options=s,this.label=s.label??(t.name||"NPR"),this.preset=sl(i),this.config=sl(i)}makeBaseMaterial(e){const t=e,n=new Ko({color:wf.clone().multiplyScalar(this.config.baseLightBoost),map:WE(e),transparent:e.transparent,opacity:e.opacity,alphaTest:t.alphaTest??0,side:e.side,metalness:0,roughness:.9,depthTest:!0,depthWrite:!0});return n.name=`NPR_${this.label}_Base_${e.name||"Material"}`,n}makeHatchMaterial(){return new hn({name:`NPR_${this.label}_Hatching`,vertexShader:kE,fragmentShader:zE,uniforms:{uLightDirection:{value:new L},uHatchColor:{value:GE(this.config.hatchColor)},uHatchLineWidth:{value:this.config.hatchLineWidth},uHatchSpacing:{value:this.config.hatchSpacing},uHatchAngle:{value:Qi.degToRad(this.config.hatchAngle)},uHatchOpacity:{value:this.config.hatchOpacity},uMidtoneStrength:{value:this.config.midtoneStrength},uShadowThreshold:{value:this.config.shadowThreshold},uDeepShadowThreshold:{value:this.config.deepShadowThreshold},uShadowDarkenAmount:{value:this.config.shadowDarkenAmount}},transparent:!0,depthTest:!0,depthWrite:!1,side:xn,blending:Ji,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}makePaperMaterial(){return new hn({name:`NPR_${this.label}_PaperNoise`,vertexShader:HE,fragmentShader:VE,uniforms:{uPaperColor:{value:new be("#4e4a43")},uPaperOpacity:{value:this.config.paperNoiseOpacity}},transparent:!0,depthTest:!0,depthWrite:!1,side:xn,blending:Ji,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}makeOutlineLine(e){const t=new $_(e.geometry,this.options.edgeThreshold??42),n=t.getAttribute("position"),i=[],s=new L,a=new L,o=this.options.minimumSegmentLength??.22;for(let h=0;h+1<n.count;h+=2)s.fromBufferAttribute(n,h),a.fromBufferAttribute(n,h+1),!(s.distanceTo(a)<o)&&i.push(s.x,s.y,s.z,a.x,a.y,a.z);if(t.dispose(),i.length===0)return null;const c=new zm;c.setPositions(i);const l=new km({color:this.config.outlineColor,linewidth:this.config.outlineWidth*140,transparent:!0,opacity:this.options.outlineOpacity??.84,depthTest:!0,depthWrite:!1,worldUnits:!1}),u=new bf(c,l);return u.name=`${e.name}_NPR_MajorEdges`,u.matrixAutoUpdate=!1,u.frustumCulled=!1,u.renderOrder=4,u.userData.isNprOverlay=!0,this.scene.add(u),u}createOverlay(e,t,n){const i=new en(e.geometry,t);return i.name=`${e.name}_NPR_Overlay`,i.matrixAutoUpdate=!1,i.frustumCulled=!1,i.renderOrder=n,i.userData.isNprOverlay=!0,this.scene.add(i),i}collectMeshes(){const e=this.options.includeNames??[],t=new Set(this.options.excludeNames??[]),n=[];return this.root.traverse(i=>{const s=i;s.isMesh&&(this.options.excludeContentPlanes&&(s.userData.isContentPlane||Hm.has(s.name))||t.has(s.name)||e.length>0&&!e.includes(s.name)&&this.root.name!==s.name||n.push(s))}),n}buildStates(){this.disposeOverlays(),this.states.length=0;for(const e of this.collectMeshes()){const t=e.material,n=Ks(t),i=[this.createOverlay(e,this.makeHatchMaterial(),5)],s=[this.createOverlay(e,this.makePaperMaterial(),6)],a=this.makeOutlineLine(e),o=a?[a]:[];e.userData.originalMaterial=t,e.userData.nprManaged=!0,e.material=n.length===1?this.makeBaseMaterial(n[0]):n.map(c=>this.makeBaseMaterial(c)),this.states.push({mesh:e,originalMaterial:t,hatchOverlays:i,paperOverlays:s,outlineOverlays:o})}}disposeOverlays(){for(const e of this.states)[...e.hatchOverlays,...e.paperOverlays,...e.outlineOverlays].forEach(t=>{this.scene.remove(t);const n=t.material;n&&Ks(n).forEach(i=>i.dispose()),t instanceof bf&&t.geometry.dispose()})}setOverlayVisibility(){for(const e of this.states)e.hatchOverlays.forEach(t=>{t.visible=this.enabled&&this.config.hatchingEnabled}),e.paperOverlays.forEach(t=>{t.visible=this.enabled&&this.config.paperNoiseEnabled}),e.outlineOverlays.forEach(t=>{t.visible=this.enabled&&this.config.outlineEnabled})}updateUniforms(){const e=this.keyLight.getWorldPosition(new L),t=this.keyLight.target.getWorldPosition(new L),n=e.sub(t).normalize();for(const i of this.states)[...i.hatchOverlays,...i.paperOverlays,...i.outlineOverlays].forEach(a=>{a.matrix.copy(i.mesh.matrixWorld),a.matrixWorld.copy(i.mesh.matrixWorld),a.matrixWorldNeedsUpdate=!0}),i.hatchOverlays.forEach(a=>{Ks(a.material).forEach(o=>{const c=o;c.uniforms.uLightDirection.value.copy(n),c.uniforms.uHatchColor.value.set(this.config.hatchColor),c.uniforms.uHatchLineWidth.value=this.config.hatchLineWidth,c.uniforms.uHatchSpacing.value=this.config.hatchSpacing,c.uniforms.uHatchAngle.value=Qi.degToRad(this.config.hatchAngle),c.uniforms.uHatchOpacity.value=this.config.hatchOpacity,c.uniforms.uMidtoneStrength.value=this.config.midtoneStrength,c.uniforms.uShadowThreshold.value=this.config.shadowThreshold,c.uniforms.uDeepShadowThreshold.value=this.config.deepShadowThreshold,c.uniforms.uShadowDarkenAmount.value=this.config.shadowDarkenAmount})}),i.paperOverlays.forEach(a=>{Ks(a.material).forEach(o=>{o.uniforms.uPaperOpacity.value=this.config.paperNoiseOpacity})}),i.outlineOverlays.forEach(a=>{a.material.linewidth=this.config.outlineWidth*140,a.material.color.set(this.config.outlineColor)}),Ks(i.mesh.material).forEach(a=>{const o=a;"color"in o&&(o.color.copy(wf).multiplyScalar(this.config.baseLightBoost),o.needsUpdate=!0)})}enable(){this.enabled||(this.buildStates(),this.enabled=!0,this.config.enabled=!0,this.setOverlayVisibility(),this.updateUniforms())}disable(){if(this.enabled){for(const e of this.states)e.mesh.material=e.originalMaterial,e.mesh.userData.nprManaged=!1;this.disposeOverlays(),this.states.length=0,this.enabled=!1,this.config.enabled=!1}}dispose(){this.disable()}resetPreset(){this.config={...sl(this.preset),enabled:this.enabled},this.setOverlayVisibility(),this.updateUniforms()}loadConfig(e){this.config={...this.config,...e,enabled:this.enabled},this.setOverlayVisibility(),this.updateUniforms()}setEnabled(e){e?this.enable():this.disable()}setFeature(e,t){this.config[e]=t,this.setOverlayVisibility()}setParameter(e,t){typeof this.config[e]=="number"&&(this.config[e]=t,this.updateUniforms())}setResolution(e,t){for(const n of this.states)n.outlineOverlays.forEach(i=>i.material.resolution.set(e,t))}getConfig(){return{...this.config}}isEnabled(){return this.enabled}getManagedMeshCount(){return this.states.length}getManagedObjectNames(){return this.states.map(e=>e.mesh.name||e.mesh.type)}getPassCount(){return this.enabled?1+Number(this.config.outlineEnabled)+Number(this.config.hatchingEnabled)+Number(this.config.paperNoiseEnabled):0}update(){this.enabled&&(this.root.updateMatrixWorld(!0),this.updateUniforms())}}class jE{constructor(e,t){this.scene=e,this.keyLight=t}scene;keyLight;controllers=new Map;applyNPRToRoot(e,t,n={}){this.controllers.get(e.uuid)?.dispose();const i=new XE(this.scene,e,this.keyLight,t,n);return i.enable(),this.controllers.set(e.uuid,i),i}enableNPR(e){this.controllers.get(e.uuid)?.setEnabled(!0)}disableNPR(e){this.controllers.get(e.uuid)?.setEnabled(!1)}getController(e){return this.controllers.get(e.uuid)}setResolution(e,t){this.controllers.forEach(n=>n.setResolution(e,t))}update(){this.controllers.forEach(e=>e.update())}getManagedMeshCount(){return[...this.controllers.values()].reduce((e,t)=>e+t.getManagedMeshCount(),0)}getPassCount(){return[...this.controllers.values()].reduce((e,t)=>e+t.getPassCount(),0)}}class Ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qE=new Zo(-1,1,1,-1,0,1);class $E extends Sn{constructor(){super(),this.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ln([0,2,0,0,2,0],2))}}const YE=new $E;class gh{constructor(e){this._mesh=new en(YE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const xo={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class KE extends Ns{constructor(e,t,n){super(),this.scene=e,this.camera=t;const i=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Bi(1,1,{minFilter:qt,magFilter:qt,type:Dr}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Rp,this._materialDepth.depthPacking=hp,this._materialDepth.blending=gi;const o=Ls.clone(xo.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=i,o.aspect.value=t.aspect,o.aperture.value=s,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new hn({defines:Object.assign({},xo.defines),uniforms:o,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader}),this.uniforms=o,this._fsQuad=new gh(this.materialBokeh),this._oldClearColor=new be}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const i=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const ZE={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class JE extends Ns{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ls.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Af extends Ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class QE extends Ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class eb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new Bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new JE(ZE),this.copyPass.material.blending=gi,this.clock=new Sv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Af!==void 0&&(a instanceof Af?n=!0:a instanceof QE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const yo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class tb extends Ns{constructor(){super(),this.uniforms=Ls.clone(yo.uniforms),this.material=new K_({name:yo.name,uniforms:this.uniforms,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader}),this._fsQuad=new gh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$f?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ep?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Jf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nb extends Ns{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class ib{constructor(e,t,n,i={}){this.renderer=e,this.scene=t,this.camera=n,this.enabled=i.enabled??!0,this.composer=new eb(e),this.composer.addPass(new nb(t,n)),this.bokehPass=new KE(t,n,{focus:1,aperture:i.aperture??.0025,maxblur:i.maxBlur??.004}),this.composer.addPass(this.bokehPass),this.outputPass=new tb,this.composer.addPass(this.outputPass),this.uniforms=this.bokehPass.uniforms,this.setEnabled(this.enabled)}renderer;scene;composer;bokehPass;outputPass;uniforms;camera;focusObject=null;focusPoint=new L;focusDistance=1;targetFocusDistance=1;focusInitialized=!1;focusTargetLabel="None";enabled;setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}setFocusObject(e,t=e?.name||"None",n=!1){this.focusObject=e,this.focusTargetLabel=t,this.updateFocusDistance(1/60,n)}setFocusPoint(e,t="Custom Target",n=!1){this.focusObject=null,this.focusPoint.copy(e),this.focusTargetLabel=t,this.updateFocusDistance(1/60,n)}setAperture(e){this.uniforms.aperture.value=Qi.clamp(e,1e-4,.03)}setMaxBlur(e){this.uniforms.maxblur.value=Qi.clamp(e,.001,.03)}getParameters(){return{aperture:this.uniforms.aperture.value,maxBlur:this.uniforms.maxblur.value,focusDistance:this.focusDistance,targetLabel:this.focusTargetLabel}}setSize(e,t){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t),this.uniforms.aspect.value=e/Math.max(t,1)}updateFocusDistance(e,t=!1){this.focusObject&&(this.focusObject.updateWorldMatrix(!0,!0),new Yt().setFromObject(this.focusObject).getCenter(this.focusPoint)),this.camera.updateMatrixWorld();const n=this.camera.worldToLocal(this.focusPoint.clone()),i=Math.max(this.camera.near+.01,-n.z);if(this.targetFocusDistance=i,!this.focusInitialized||t)this.focusDistance=i,this.focusInitialized=!0;else{const s=1-Math.exp(-10*Math.max(e,.001));this.focusDistance=Qi.lerp(this.focusDistance,this.targetFocusDistance,s)}this.uniforms.focus.value=this.focusDistance}update(e=1/60){this.enabled&&this.updateFocusDistance(e)}render(e=1/60){this.update(e),this.enabled?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){this.composer.dispose(),this.bokehPass.dispose()}}const _u={personalIntro:{aperture:.0025,maxBlur:.004},techStack:{aperture:.0023,maxBlur:.004},projects:{aperture:.0025,maxBlur:.0045},creativityBase:{aperture:.0025,maxBlur:.0045},creativityCloseup:{aperture:.0032,maxBlur:.0055},moreInterests:{aperture:.0023,maxBlur:.004}},Vm={personalIntro:{keyIntensity:2.55,shadowIntensity:.58,fillIntensity:.22,ambientIntensity:.52,hemisphereIntensity:.3,keyPosition:[5,9,7],keyTarget:[0,0,0]},techStack:{keyIntensity:2.55,shadowIntensity:1,fillIntensity:0,ambientIntensity:.52,hemisphereIntensity:.3,keyPosition:[5,9,7],keyTarget:[0,0,0]},projects:{keyIntensity:2.55,shadowIntensity:1,fillIntensity:0,ambientIntensity:.52,hemisphereIntensity:.3,keyPosition:[5,9,7],keyTarget:[0,0,0]},creativity:{keyIntensity:2.55,shadowIntensity:1,fillIntensity:0,ambientIntensity:.52,hemisphereIntensity:.3,keyPosition:[5,9,7],keyTarget:[0,0,0]},interests:{keyIntensity:2.55,shadowIntensity:1,fillIntensity:0,ambientIntensity:.52,hemisphereIntensity:.3,keyPosition:[5,9,7],keyTarget:[0,0,0]}};function rb(r,e=Vm){return r==="moreInterests"?e.interests:r==="creativityBase"||r==="creativityCloseup"?e.creativity:e[r]}const Gm="portfolio-lighting-scene-presets-v1";function nc(){if(typeof window>"u")return{};try{const r=window.localStorage.getItem(Gm);if(!r)return{};const e=JSON.parse(r);return e&&typeof e=="object"?e:{}}catch{return{}}}function sb(r){if(!(typeof window>"u"))try{window.localStorage.setItem(Gm,JSON.stringify(r))}catch{}}function Cf(r){return Array.isArray(r)&&r.length===3&&r.every(e=>typeof e=="number")}function Zs(r,e){if(!e||typeof e!="object")return{...r};const t={...r};return["keyIntensity","shadowIntensity","fillIntensity","ambientIntensity","hemisphereIntensity"].forEach(i=>{typeof e[i]=="number"&&(t[i]=e[i])}),Cf(e.keyPosition)&&(t.keyPosition=[...e.keyPosition]),Cf(e.keyTarget)&&(t.keyTarget=[...e.keyTarget]),t}function ab(r){const e=nc();return{personalIntro:Zs(r.personalIntro,e.personalIntro),techStack:Zs(r.techStack,e.techStack),projects:Zs(r.projects,e.projects),creativity:Zs(r.creativity,e.creativity),interests:Zs(r.interests,e.interests)}}function Js(r){const e=nc()[r];return!!(e&&typeof e=="object")}function ob(r,e){const t=nc();t[r]={...e,keyPosition:[...e.keyPosition],keyTarget:[...e.keyTarget]},sb(t)}function cb(r){const e=nc()[r];return e&&typeof e=="object"?{...e}:null}const ht={personalIntro:{kicker:"PERSONAL INTRO / 01",title:"hi, I'm 葵下风",subtitle:"Tech otakus save the world!",body:"我是一名计算机专业学生与创作者。我关注游戏、图形学、交互叙事、AI、harness工程等等",detail:"",tags:["GAME DEVELOPMENT","INTERACTIVE NARRATIVE","CREATIVE TECHNOLOGY"],openingLines:["I observe what is.","I question why.","I imagine what could be.","I create what comes next."],experienceTimeline:[{period:"2025.7–9",title:"科幻美术人才培养工作坊",detail:"制作《爆浆奶茶店》· 主要负责美术、程序"},{period:"2025.9–11",title:"轻风计划（中传&央美联合举办）",detail:"参与制作《Time98：世纪末玫瑰夜幕》· 负责程序"},{period:"2025.10",title:"TapTap 聚光灯 Game Jam",detail:"参与 Game Jam"},{period:"2025.11–12",title:"北航七海游戏社 Game Jam",detail:"制作《SaveLara》· 负责策划、程序"},{period:"2026.1–2",title:"第三届萌芽 Game Jam",detail:"以主策划、主程序身份带领 6 人小队制作《厨房交响曲：乱炖大危机！》"},{period:"2026.3–7",title:"北航 VR 国重实验室",detail:"制作数字孪生无人机控制平台· 以主程序身份参与· 正在申请软著"},{period:"2026.7–至今",title:"腾讯游戏创作大赛 2026 · TENCENT GAME AWARDS 2026",detail:"制作《追忆档案馆》· 以主程序身份参与"}]},techStack:{kicker:"TECH STACK / 02",title:"Tech Stack",subtitle:"先把工具用起来，再把想法做出来。",body:"目前主要使用 Unity、Unreal Engine、Blender、SolidWorks 与 Godot，围绕游戏、交互体验和数字内容进行学习与创作。",detail:"在 AI 协助下，我可以快速了解并上手新的工具与工作流；把问题拆清楚、和 AI 共同查资料与调试，再通过自己的实践完成验证，是我正在形成的学习方式。",tags:["UNITY","UNREAL ENGINE","BLENDER","SOLIDWORKS","GODOT","AI-ASSISTED LEARNING"],groups:[{label:"CURRENT TOOLS",items:["Unity","Unreal Engine","Blender","SolidWorks","Godot"]},{label:"LEARNING APPROACH",items:["快速上手新工具","AI 协作学习","问题拆解","查资料与调试","实践验证"]}]},creativity:{kicker:"CREATIVE PRACTICE / 04",title:"Creativity",subtitle:"我通过ai将创意快速转化为互动网页",body:"",detail:"进入 CloseUp，查看显示器中的创意输出。",tags:["DESIGN","STORY SYSTEMS","VISUAL EXPERIMENTS"]},interests:{kicker:"MORE INTERESTS / 05",title:"More Interests",subtitle:"持续学习与探索是我的日常！",body:"剑道、摄影、绘画、游戏叙事与世界观搭建，是我当下拥有的爱好",detail:"",tags:["KENDO","PHOTOGRAPHY","PAINTING","GAME NARRATIVE","WORLDBUILDING"],certificates:[{title:"《抱大鹅》",award:"第六届 ICAD 国际当代青年美术设计大赛 · 铜奖",photo:"/content-media/interests/photo-bao-da-e.webp",image:"/content-media/interests/icad-bao-da-e.webp"},{title:"《神气的老学究》",award:"第六届 ICAD 国际当代青年美术设计大赛 · 铜奖",photo:"/content-media/interests/photo-shen-qi-de-lao-xue-jia.webp",image:"/content-media/interests/icad-shen-qi-de-lao-xue-jia.webp"}]},projects:[{slug:"memorial-archive",title:"追忆档案馆",type:"中等体量独立游戏",status:"开发中",date:"2026",format:"Unity / C# / 游戏工程",summary:"一款正在开发中的独立游戏：以 Framework / Gameplay 分层、事件通信和数据配置支撑探索、战斗、解谜与剧情系统。",tags:["主程序","游戏架构","Unity","C#"],cover:"/content-media/projects/covers/memorial-archive-cover.webp",screenImage:"/content-media/projects/covers/memorial-archive-cover.webp",screenAccent:"#9ea7ff",detailPath:"/content-media/projects/details/memorial-archive.md"},{slug:"ue5-drone-control",title:"数字孪生无人机控制平台",type:"数字孪生控制平台",status:"外场验证",date:"2026",format:"UE5 / 三端协同 / 软件工程",summary:"连接 UE5 客户端、C++ 后端、Jetson 与 PX4 的虚实联动系统，完成从仿真控制到真实无人机执行的 OODA 闭环。",tags:["数字孪生","无人机","UE5","软件工程"],screenAccent:"#67d5c5",detailPath:"/content-media/projects/details/ue5-drone-control.md",media:[{type:"video",title:"OODA 闭环演示",src:"/content-media/projects/videos/ue5-drone-control-demo.mp4",autoplay:!0,loop:!0}],links:[{label:"GitHub 仓库",url:"https://github.com/lonelyplanet23/UE5DroneControl"}]},{slug:"bursting-milk-tea-shop",title:"爆浆奶茶店",type:"剧情驱动游戏",status:"已发布",date:"2024",format:"叙事 / 模拟经营",summary:"一间看起来平常的奶茶店，藏着关于人类与奶茶生物共生的恐怖故事。",tags:["叙事","模拟经营","恐怖"],cover:"/content-media/projects/covers/bursting-milk-tea-shop-cover.webp",screenImage:"/content-media/projects/covers/bursting-milk-tea-shop-cover.webp",screenAccent:"#5ed2bf",detailPath:"/content-media/projects/details/bursting-milk-tea-shop.md",media:[{type:"video",title:"演示视频",src:"/content-media/projects/videos/bursting-milk-tea-shop-demo.mp4"}],links:[{label:"TapTap 页面",url:"https://www.taptap.cn/app/781080?os=pc"}]},{slug:"vr-interaction-coursework",title:"VR 人机交互课程项目集",type:"VR 人机交互课程项目集",status:"课程项目集",date:"2026",format:"Unity / VR 交互 / PICO 4",summary:"五个 Unity VR 课程原型，覆盖眼动、手势、姿态捕捉与空间交互，并完成 PICO 4 真机运行与调试。",tags:["VR","Unity","PICO 4","人机交互"],cover:"/content-media/projects/covers/vr-interaction-coursework-cover.svg",screenImage:"/content-media/projects/covers/vr-interaction-coursework-cover.svg",screenAccent:"#8cc9ff",detailPath:"/content-media/projects/details/vr-interaction-coursework.md",media:[{type:"video",title:"VR 交互演示",src:"/content-media/projects/videos/vr-interaction-coursework-demo.mp4",autoplay:!0,loop:!0}]},{slug:"kitchen-symphony",title:"厨房交响曲·乱炖大危机",type:"单人躲弹幕游戏",status:"已发布",date:"2026",format:"动作 / 节拍弹幕",summary:"在被紊乱波影响的厨房里，观察节拍、躲避弹幕并击败失控的厨具 Boss。",tags:["单人","弹幕","节拍","Game Jam"],cover:"/content-media/projects/covers/kitchen-symphony-cover.webp",screenImage:"/content-media/projects/covers/kitchen-symphony-cover.webp",screenAccent:"#f2ae70",detailPath:"/content-media/projects/details/kitchen-symphony.md",links:[{label:"在 GmHub 查看",url:"https://www.gmhub.com/game/9571"},{label:"Bilibili 演示视频",url:"https://www.bilibili.com/video/BV1rUc7zqEEr/"}]},{slug:"save-lara",title:"Save Lara",type:"回合制解谜",status:"原型阶段",date:"2024",format:"策略 / 时间机制",summary:"护送装有主人 Lara 的箱子穿过机器人的追捕，用一次次重启改变战局。",tags:["推箱子","策略","时间机制"],cover:"/content-media/projects/covers/save-lara-cover.webp",screenImage:"/content-media/projects/covers/save-lara-cover.webp",screenAccent:"#c1a7ff",detailPath:"/content-media/projects/details/save-lara.md",links:[{label:"GitHub 仓库",url:"https://github.com/rorschachandbat/2025BUAAGJ"}]}],conceptLab:[{slug:"kongtian-university",title:"空天大学",summary:"我在北航文学创作部发起的校园共创 IP：以青春与生命力为核心，为文字、绘画和更多形式的共同创作搭建世界观底座。",tags:["共创 IP","世界观","社区创作","校园叙事"],cover:"/content-media/kongtian-university-cover.webp",link:"https://wwwwwxinchi.github.io/kongtian-university/index.html"},{slug:"ghostfont",title:"GHOSTFONT / 幽灵字体",summary:"视觉合规工程师林默在旧录像中发现失踪姐姐留下的 GhostFont，并必须决定人类应如何重新取得自由。",tags:["AI 治理","互动叙事","选择后果"],cover:"/content-media/ghostfont.svg",link:"/content/entries/ghostfont/interactive.html"},{slug:"zhifeng-night-run",title:"知风夜跑",summary:"在一条校园夜路上交替迈步；当意义暂时缺席，行动本身是否仍能带人继续向前？",tags:["互动叙事","夜跑","多结局"],cover:"/content-media/zhifeng-night-run.svg",link:"/content/entries/zhifeng-night-run/interactive.html"}]};function lb(r){return r==="personalIntro"?ht.personalIntro:r==="techStack"?ht.techStack:r==="projects"?{kicker:"SELECTED PROJECTS / 03",title:"Projects",subtitle:"Made to be experienced.",body:"六个项目，从独立游戏、数字孪生到 VR 交互，记录我如何把系统、玩法与叙事变成可被体验的作品。",detail:"选择项目，工作站屏幕同步切换封面；本地演示视频按需加载。",tags:["6 SELECTED WORKS"]}:r==="creativityBase"?ht.creativity:ht.interests}const xr=["personalIntro","techStack","projects","creativityBase","moreInterests"],ub=["I observe.","I question.","I imagine.","I create."];function Ge(r){return r.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[e]??e)}class hb{panel=document.querySelector("#module-panel");index=document.querySelector("#module-index");projectTopControls=document.querySelector("#project-top-controls");kicker=document.querySelector("#module-kicker");introManifesto=document.querySelector("#intro-manifesto");title=document.querySelector("#module-title");subtitle=document.querySelector("#module-subtitle");body=document.querySelector("#module-body");techStackGrid=document.querySelector("#tech-stack-grid");creativityShowcase=document.querySelector("#creativity-showcase");timeline=document.querySelector("#module-timeline");interestsCertificates=document.querySelector("#interests-certificates");tags=document.querySelector("#module-tags");actions=document.querySelector("#module-actions");creativityExperience=document.querySelector("#creativity-experience");creativityExperienceFrame=document.querySelector("#creativity-experience-frame");creativityExperienceTitle=document.querySelector("#experience-title");status=document.querySelector("#ui-status");brandCaption=document.querySelector("#brand-caption");introTypewriter=document.querySelector("#intro-typewriter");introTypewriterText=document.querySelector("#intro-typewriter-text");callbacks;currentSnapshot={mainState:"personalIntro",detailState:"base",isTransitioning:!1};currentProjectIndex=0;interactionLocked=!1;wheelResetTimer;hasRendered=!1;typewriterTimer;typewriterRunId=0;typewriterRunning=!1;typewriterLineIndex=0;typewriterSuffix="";typewriterDeleting=!1;projectDetails=new Map;projectDetailRequestId=0;introManifestoTimer;introManifestoRunId=0;introManifestoPlayed=!1;renderedMainState;renderedDetailState;selectedCreativitySlug=ht.conceptLab[0]?.slug??"";closeupExperienceVisible=!1;constructor(e){this.callbacks=e}bind(){document.querySelectorAll("[data-portfolio-nav]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.portfolioNav;t&&this.goTo(t)})}),document.querySelector("[data-portfolio-home]")?.addEventListener("click",e=>{e.preventDefault(),this.goTo("personalIntro")}),this.actions?.addEventListener("click",e=>{const t=e.target.closest("[data-ui-action]");if(!t)return;const n=t.dataset.uiAction;n==="prev-project"&&this.changeProject(-1),n==="next-project"&&this.changeProject(1),n==="goto-projects"&&this.goTo("projects"),n==="goto-intro"&&this.goTo("personalIntro"),n==="enter-closeup"&&this.enterCloseup(),n==="exit-closeup"&&this.exitCloseup()}),this.projectTopControls?.addEventListener("click",e=>{const t=e.target.closest("[data-ui-action]");if(!t)return;const n=t.dataset.uiAction;n==="prev-project"&&this.changeProject(-1),n==="next-project"&&this.changeProject(1)}),this.creativityShowcase?.addEventListener("click",e=>{const t=e.target.closest("[data-creativity-entry]");if(!t)return;const n=t.dataset.creativityEntry;n&&this.enterCloseup(n)}),this.creativityShowcase?.addEventListener("pointerover",e=>{const n=e.target.closest("[data-creativity-entry]")?.dataset.creativityEntry;n&&this.previewCreativityEntry(n)}),this.creativityShowcase?.addEventListener("focusin",e=>{const n=e.target.closest("[data-creativity-entry]")?.dataset.creativityEntry;n&&this.previewCreativityEntry(n)}),this.creativityExperience?.addEventListener("click",e=>{e.target.closest("[data-experience-action]")?.dataset.experienceAction==="exit"&&this.exitCloseup()}),window.addEventListener("wheel",e=>{if(e.target instanceof HTMLElement&&e.target.closest("#module-panel")||Math.abs(e.deltaY)<14||this.interactionLocked)return;e.preventDefault(),window.clearTimeout(this.wheelResetTimer),this.wheelResetTimer=window.setTimeout(()=>this.interactionLocked=!1,650),this.interactionLocked=!0;const t=xr.indexOf(this.currentSnapshot.mainState),n=Math.max(0,Math.min(xr.length-1,t+(e.deltaY>0?1:-1)));n!==t?this.goTo(xr[n]):this.interactionLocked=!1},{passive:!1}),window.addEventListener("keydown",e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;e.preventDefault();const t=xr.indexOf(this.currentSnapshot.mainState),n=Math.max(0,Math.min(xr.length-1,t+(e.key==="ArrowDown"?1:-1)));n!==t&&this.goTo(xr[n])})}setStatus(e){this.status&&(this.status.textContent=e)}setProjectIndex(e){this.currentProjectIndex=(e+ht.projects.length)%ht.projects.length,this.render(this.currentSnapshot)}sync(e){if(e.isTransitioning&&this.interactionLocked){this.currentSnapshot={...this.currentSnapshot,isTransitioning:!0};return}const t=!this.hasRendered||e.mainState!==this.currentSnapshot.mainState||e.detailState!==this.currentSnapshot.detailState||e.isTransitioning!==this.currentSnapshot.isTransitioning;this.currentSnapshot=e,t&&this.render(e)}async goTo(e){if(this.interactionLocked||e===this.currentSnapshot.mainState&&this.currentSnapshot.detailState==="base")return;const t=this.currentSnapshot;this.interactionLocked=!0,(this.currentSnapshot.detailState==="closeup"||this.closeupExperienceVisible)&&this.hideCloseupExperience();const n={mainState:e,detailState:"base",isTransitioning:!0};this.currentSnapshot=n,this.render(n);const i=await this.callbacks.navigateTo(e);this.interactionLocked=!1,i||(this.currentSnapshot=t,this.render(t),this.setStatus("Navigation is still settling…"))}async enterCloseup(e=this.selectedCreativitySlug){if(this.interactionLocked||this.currentSnapshot.mainState!=="creativityBase"||this.currentSnapshot.detailState==="closeup")return;const t=ht.conceptLab.find(i=>i.slug===e);if(!t)return;this.selectedCreativitySlug=t.slug,this.interactionLocked=!0,this.setCloseupPanelHidden(!0);const n=await this.callbacks.enterCreativityCloseup(t.slug);this.interactionLocked=!1,n?this.showCloseupExperience(t):(this.setCloseupPanelHidden(!1),this.setStatus("Creativity CloseUp is available from the base view."))}async exitCloseup(){this.interactionLocked||this.currentSnapshot.detailState!=="closeup"||(this.interactionLocked=!0,this.hideCloseupExperience(!1),await this.callbacks.exitCreativityCloseup(),this.interactionLocked=!1)}previewCreativityEntry(e){const t=ht.conceptLab.find(n=>n.slug===e);t&&(this.selectedCreativitySlug=t.slug,this.callbacks.previewCreativityEntry(t.slug))}setCloseupPanelHidden(e){this.panel?.classList.toggle("is-closeup-hidden",e)}showCloseupExperience(e){!this.creativityExperience||!this.creativityExperienceFrame||(this.setCloseupPanelHidden(!0),this.creativityExperienceTitle&&(this.creativityExperienceTitle.textContent=e.title),this.creativityExperienceFrame.src!==new URL(e.link,window.location.href).href&&(this.creativityExperienceFrame.src=e.link),this.creativityExperience.hidden=!1,this.closeupExperienceVisible=!0)}hideCloseupExperience(e=!0){this.creativityExperienceFrame&&(this.creativityExperienceFrame.src="about:blank"),this.creativityExperience&&(this.creativityExperience.hidden=!0),this.closeupExperienceVisible=!1,this.setCloseupPanelHidden(!e)}changeProject(e){this.setProjectIndex(this.currentProjectIndex+e),this.callbacks.setProjectIndex(this.currentProjectIndex)}render(e){if(!this.panel||!this.index||!this.kicker||!this.title||!this.subtitle||!this.body||!this.timeline||!this.tags||!this.actions)return;const t=!this.hasRendered||this.renderedMainState!==e.mainState||this.renderedDetailState!==e.detailState;this.hasRendered=!0;const n=e.detailState==="closeup"?"creativityBase":e.mainState,i=lb(n),s=e.detailState==="closeup",a=n==="personalIntro",o=n==="projects"?ht.projects[this.currentProjectIndex]:void 0,c=xr.indexOf(e.mainState)+1;if(this.index.textContent=String(c).padStart(2,"0"),this.projectTopControls){const u=n==="projects"&&!s&&!!o;this.projectTopControls.hidden=!u,this.projectTopControls.innerHTML=u?this.renderProjectTopControls():""}if(this.kicker.textContent=s?"CREATIVITY / CLOSEUP":i.kicker,this.introManifesto&&(a&&t&&!this.introManifestoPlayed?(this.introManifestoPlayed=!0,this.startIntroManifesto()):this.stopIntroManifesto()),this.title.textContent=o?.title??(s?"Creativity CloseUp":i.title),this.subtitle.textContent=o?`${o.type} · ${o.format}`:i.subtitle,o?(this.body.innerHTML=`<p>${Ge(o.summary)}</p><p class="project-detail">${Ge(o.status)} · ${Ge(o.date)} · ${Ge(o.format)}</p><div class="project-detail-content" data-project-detail><p class="project-detail-loading">Loading project notes…</p></div>${this.renderProjectMedia(o)}`,this.panel.scrollTop=0,this.loadProjectDetail(o)):(this.projectDetailRequestId+=1,this.body.innerHTML=`<p>${Ge(i.body)}</p><p class="module-detail">${Ge(s?"显示器已进入近景状态；返回后可继续浏览其他模块。":i.detail)}</p>`),this.techStackGrid){const u=n==="techStack"&&!s;this.techStackGrid.hidden=!u,this.techStackGrid.innerHTML=u?this.renderTechStack():""}if(this.creativityShowcase){const u=n==="creativityBase"&&!s;this.creativityShowcase.hidden=!u,this.creativityShowcase.innerHTML=u?this.renderCreativityShowcase():""}if(this.timeline.hidden=!a,this.timeline.innerHTML=a?this.renderExperienceTimeline():"",this.interestsCertificates){const u=n==="moreInterests"&&!s;this.interestsCertificates.hidden=!u,this.interestsCertificates.innerHTML=u?this.renderInterestCertificates():""}const l=o?.tags??i.tags;this.tags.innerHTML=l.map(u=>`<span>${Ge(u)}</span>`).join(""),this.actions.innerHTML=this.renderActions(e,o),this.panel.classList.toggle("is-intro",a),this.setCloseupPanelHidden(s||this.closeupExperienceVisible),this.brandCaption&&(this.brandCaption.hidden=!0),this.introTypewriter&&(this.introTypewriter.hidden=!1),this.startTypewriter(),this.renderedMainState=e.mainState,this.renderedDetailState=e.detailState,this.panel.classList.remove("is-updating"),requestAnimationFrame(()=>this.panel?.classList.add("is-updating")),document.querySelectorAll("[data-portfolio-nav]").forEach(u=>{const h=u.dataset.portfolioNav===e.mainState;u.classList.toggle("is-active",h),u.setAttribute("aria-current",h?"page":"false")}),document.querySelector("#scene-status")?.classList.toggle("is-busy",e.isTransitioning)}renderExperienceTimeline(){return`<div class="timeline-heading"><span class="timeline-rule"></span><span>EXPERIENCE / SELECTED WORK</span></div><ol>${ht.personalIntro.experienceTimeline.map(e=>`<li class="experience-item"><time>${Ge(e.period)}</time><div><strong>${Ge(e.title)}</strong><p>${Ge(e.detail)}</p></div></li>`).join("")}</ol>`}renderCreativityShowcase(){return`<div class="creativity-showcase-heading"><span class="timeline-rule"></span><span>INTERACTIVE WORKS / HOVER TO PREVIEW</span></div><div class="creativity-showcase-list">${ht.conceptLab.map((e,t)=>`<article class="creativity-entry ${e.slug===this.selectedCreativitySlug?"is-selected":""}" data-creativity-entry="${Ge(e.slug)}" tabindex="0"><img class="creativity-entry-cover" src="${Ge(e.cover)}" alt="${Ge(e.title)} cover" /><div class="creativity-entry-copy"><p class="creativity-entry-index">${String(t+1).padStart(2,"0")}</p><h2>${Ge(e.title)}</h2><p>${Ge(e.summary)}</p><div class="creativity-entry-tags">${e.tags.map(n=>`<span>${Ge(n)}</span>`).join("")}</div><button type="button" class="creativity-entry-open" data-creativity-entry="${Ge(e.slug)}">Enter CloseUp <span>↗</span></button></div></article>`).join("")}</div>`}renderTechStack(){return ht.techStack.groups.map(e=>`<article class="tech-stack-card"><p class="tech-stack-label">${Ge(e.label)}</p><div class="tech-stack-items">${e.items.map(t=>`<span>${Ge(t)}</span>`).join("")}</div></article>`).join("")}renderInterestCertificates(){return`<div class="interests-certificates-heading"><span class="timeline-rule"></span><span>PHOTOGRAPHY / AWARDS</span></div><div class="interests-certificates-grid">${ht.interests.certificates.map(e=>`<article class="interest-certificate"><img class="interest-certificate-photo" src="${Ge(e.photo)}" alt="${Ge(e.title)} photography work" loading="lazy" /><img class="interest-certificate-image" src="${Ge(e.image)}" alt="${Ge(e.title)} certificate" loading="lazy" /><div class="interest-certificate-copy"><h2>${Ge(e.title)}</h2><p>${Ge(e.award)}</p></div></article>`).join("")}</div>`}renderProjectMedia(e){const t=e.media?.find(n=>n.type==="video");return t?`<div class="project-media"><div class="project-media-heading"><span class="timeline-rule"></span><span>${Ge(t.title)} / LOCAL ASSET</span></div><video class="project-demo" controls muted playsinline preload="metadata" src="${Ge(t.src)}"></video></div>`:""}async loadProjectDetail(e){const t=++this.projectDetailRequestId;let n=this.projectDetails.get(e.slug);try{if(!n){const s=await fetch(e.detailPath,{cache:"no-cache"});if(!s.ok)throw new Error(`HTTP ${s.status}`);n=await s.text(),this.projectDetails.set(e.slug,n)}if(t!==this.projectDetailRequestId||this.currentSnapshot.mainState!=="projects")return;const i=this.body?.querySelector("[data-project-detail]");i&&(i.innerHTML=this.renderProjectMarkdown(n,e))}catch(i){if(t!==this.projectDetailRequestId||this.currentSnapshot.mainState!=="projects")return;const s=this.body?.querySelector("[data-project-detail]");s&&(s.innerHTML='<p class="project-detail-loading">Project notes are unavailable right now.</p>'),console.warn(`[Projects] could not load detail for ${e.slug}`,i)}}renderProjectMarkdown(e,t){const i=e.replace(/^---[\s\S]*?---\s*/u,"").trim().split(/\r?\n/u),s=[];let a=!1,o=[],c=!1;const l=()=>{c&&(s.push("</ul>"),c=!1)};return i.forEach(u=>{if(u.trim().startsWith("```")){a?(s.push(`<pre><code>${Ge(o.join(`
`))}</code></pre>`),o=[],a=!1):(l(),a=!0);return}if(a){o.push(u);return}const h=u.trim();if(!h){l();return}const d=h.match(/^(#{2,4})\s+(.+)$/u);if(d){l();const g=Math.min(4,Math.max(3,d[1].length+1));s.push(`<h${g}>${this.renderProjectInline(d[2],t)}</h${g}>`);return}const f=h.match(/^[-*]\s+(.+)$/u);if(f){c||(s.push("<ul>"),c=!0),s.push(`<li>${this.renderProjectInline(f[1],t)}</li>`);return}const _=h.match(/^!\[([^\]]*)\]\(([^)]+)\)$/u);if(_){l();const g=this.resolveProjectAssetUrl(t,_[2]);s.push(`<figure><img src="${Ge(g)}" alt="${Ge(_[1])}" loading="lazy" /><figcaption>${Ge(_[1])}</figcaption></figure>`);return}l(),s.push(`<p>${this.renderProjectInline(h,t)}</p>`)}),l(),a&&s.push(`<pre><code>${Ge(o.join(`
`))}</code></pre>`),s.join("")}renderProjectInline(e,t){return Ge(e).replace(/`([^`]+)`/gu,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/gu,"<strong>$1</strong>").replace(/\[([^\]]+)\]\(([^)]+)\)/gu,(i,s,a)=>{const o=this.resolveProjectAssetUrl(t,a),c=/^https?:\/\//u.test(o);return`<a class="project-inline-link" href="${Ge(o)}"${c?' target="_blank" rel="noreferrer"':""}>${s} ↗</a>`})}resolveProjectAssetUrl(e,t){const n=t.trim();return/^https?:\/\//u.test(n)||n.startsWith("/")?n:n.includes("videoes/ooda2.mp4")?"/content-media/projects/videos/ue5-drone-control-demo.mp4":n.includes("videoes/codeplay.mp4")?"/content-media/projects/videos/bursting-milk-tea-shop-demo.mp4":e.slug==="bursting-milk-tea-shop"&&n==="image.png"?"/content-media/projects/details/bursting-milk-tea-shop-image.webp":e.slug==="kitchen-symphony"&&n.includes("images/pic05.png")?"/content-media/projects/covers/kitchen-symphony-cover.webp":e.slug==="save-lara"&&n.includes("images/pic03.png")?"/content-media/projects/covers/save-lara-cover.webp":n}startIntroManifesto(){if(!this.introManifesto||!this.panel)return;this.introManifestoTimer!==void 0&&window.clearTimeout(this.introManifestoTimer),this.introManifestoRunId+=1;const e=this.introManifestoRunId,t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(this.introManifesto.hidden=!1,this.introManifesto.classList.remove("is-playing","is-exiting"),this.introManifesto.innerHTML=ub.map(n=>`<span class="intro-manifesto-line">${Ge(n)}</span>`).join(""),this.panel.classList.add("is-manifesto-active"),this.panel.classList.remove("is-manifesto-revealed"),requestAnimationFrame(()=>{e===this.introManifestoRunId&&this.introManifesto?.classList.add("is-playing")}),t){this.finishIntroManifesto(e);return}this.introManifestoTimer=window.setTimeout(()=>{e!==this.introManifestoRunId||!this.introManifesto||(this.introManifesto.classList.add("is-exiting"),this.introManifestoTimer=window.setTimeout(()=>this.finishIntroManifesto(e),460))},2700)}finishIntroManifesto(e){e!==this.introManifestoRunId||!this.introManifesto||!this.panel||(this.introManifesto.hidden=!0,this.introManifesto.classList.remove("is-playing","is-exiting"),this.panel.classList.remove("is-manifesto-active"),this.panel.classList.add("is-manifesto-revealed"),this.introManifestoTimer=window.setTimeout(()=>{e===this.introManifestoRunId&&this.panel?.classList.remove("is-manifesto-revealed")},650))}stopIntroManifesto(){this.introManifestoTimer!==void 0&&window.clearTimeout(this.introManifestoTimer),this.introManifestoTimer=void 0,this.introManifestoRunId+=1,this.introManifesto?.classList.remove("is-playing","is-exiting"),this.introManifesto&&(this.introManifesto.hidden=!0,this.introManifesto.innerHTML=""),this.panel?.classList.remove("is-manifesto-active","is-manifesto-revealed")}startTypewriter(){if(!this.introTypewriterText||this.typewriterRunning)return;const e=ht.personalIntro.openingLines;if(e.length===0)return;this.typewriterRunning=!0,this.typewriterRunId+=1;const t=this.typewriterRunId;if(this.typewriterLineIndex=0,this.typewriterSuffix="",this.typewriterDeleting=!1,this.introTypewriterText.textContent="I",window.matchMedia("(prefers-reduced-motion: reduce)").matches){this.introTypewriterText.textContent=e[0],this.typewriterRunning=!1;return}const i=(a,o)=>{this.typewriterTimer=window.setTimeout(()=>{t===this.typewriterRunId&&this.typewriterRunning&&a()},o)},s=()=>{const a=e[this.typewriterLineIndex%e.length]??e[0],o=a.startsWith("I")?a.slice(1):a;if(this.typewriterDeleting){this.typewriterSuffix.length>0?(this.typewriterSuffix=this.typewriterSuffix.slice(0,-1),this.introTypewriterText.textContent=`I${this.typewriterSuffix}`,i(s,26)):(this.typewriterDeleting=!1,this.typewriterLineIndex=(this.typewriterLineIndex+1)%e.length,i(s,260));return}if(this.typewriterSuffix.length<o.length){this.typewriterSuffix+=o[this.typewriterSuffix.length]??"",this.introTypewriterText.textContent=`I${this.typewriterSuffix}`,i(s,38);return}this.typewriterDeleting=!0,i(s,1450)};s()}stopTypewriter(){this.typewriterRunning=!1,this.typewriterRunId+=1,this.typewriterTimer!==void 0&&window.clearTimeout(this.typewriterTimer),this.typewriterTimer=void 0,this.typewriterSuffix="",this.typewriterDeleting=!1,this.introTypewriterText&&(this.introTypewriterText.textContent="I")}renderActions(e,t){return e.detailState==="closeup"?'<button class="ui-action ui-action-primary" type="button" data-ui-action="exit-closeup">Return to Creativity <span>←</span></button>':e.mainState==="projects"&&t?t.links?.length?`<div class="project-links">${t.links.map(i=>`<a class="ui-action ui-action-secondary" href="${Ge(i.url)}" target="_blank" rel="noreferrer">${Ge(i.label)} <span>↗</span></a>`).join("")}</div>`:"":e.mainState==="creativityBase"?'<span class="module-action-hint">Hover a work to preview it on the monitor · click to enter CloseUp</span>':e.mainState==="personalIntro"||e.mainState==="techStack"?'<button class="ui-action ui-action-primary" type="button" data-ui-action="goto-projects">Explore Projects <span>→</span></button>':'<button class="ui-action ui-action-secondary" type="button" data-ui-action="goto-intro">Back to Intro <span>↗</span></button>'}renderProjectTopControls(){return`<button class="project-top-action" type="button" data-ui-action="prev-project" aria-label="Previous project">←</button><span class="project-top-count">${String(this.currentProjectIndex+1).padStart(2,"0")} / ${String(ht.projects.length).padStart(2,"0")}</span><button class="project-top-action" type="button" data-ui-action="next-project" aria-label="Next project">→</button>`}}const Fs={enabled:!0,outlineEnabled:!0,hatchingEnabled:!0,paperNoiseEnabled:!0,baseLightBoost:1.19,midtoneStrength:.33,hatchLineWidth:11.5,hatchSpacing:23,hatchAngle:45,hatchOpacity:.58,shadowThreshold:.36,deepShadowThreshold:.37,shadowDarkenAmount:0,outlineWidth:.01,outlineColor:"#42403b",hatchColor:"#514e47",paperNoiseOpacity:.01},Wm={...Fs,baseLightBoost:1.17,midtoneStrength:.3,hatchLineWidth:9,hatchSpacing:28,hatchOpacity:.42,shadowThreshold:.32,deepShadowThreshold:.22,outlineWidth:.008,paperNoiseOpacity:.008},Xm={...Fs,baseLightBoost:1.18,midtoneStrength:.24,hatchLineWidth:7,hatchSpacing:35,hatchOpacity:.28,shadowThreshold:.28,deepShadowThreshold:.16,outlineWidth:.006,paperNoiseOpacity:.005},jm={...Fs,baseLightBoost:1.18,midtoneStrength:.3,hatchLineWidth:8,hatchSpacing:32,hatchOpacity:.38,shadowThreshold:.3,deepShadowThreshold:.18,outlineWidth:.007,paperNoiseOpacity:.006},qm={...Fs,baseLightBoost:1.15,midtoneStrength:.28,hatchLineWidth:7,hatchSpacing:38,hatchOpacity:.34,shadowThreshold:.28,deepShadowThreshold:.18,outlineWidth:.007,paperNoiseOpacity:.006},$m="portfolio-npr-scene-presets-v1";function _h(){if(typeof window>"u")return{};try{const r=window.localStorage.getItem($m);if(!r)return{};const e=JSON.parse(r);return!e||typeof e!="object"?{}:e}catch{return{}}}function db(r){if(!(typeof window>"u"))try{window.localStorage.setItem($m,JSON.stringify(r))}catch{}}function Qs(r,e){if(!e||typeof e!="object")return{...r};const t={...r};return Object.keys(r).forEach(n=>{if(n==="enabled")return;const i=e[n];typeof i==typeof r[n]&&(t[n]=i)}),t}function Ym(r){const{enabled:e,...t}=r;return t}function fb(r){const e=_h();return{personalIntro:Qs(r.personalIntro,e.personalIntro),techStack:Qs(r.techStack,e.techStack),projects:Qs(r.projects,e.projects),creativity:Qs(r.creativity,e.creativity),interests:Qs(r.interests,e.interests)}}function Km(r){const e=_h()[r];return e&&typeof e=="object"?{...e}:null}function ea(r){return Km(r)!==null}function pb(r,e){const t=_h();t[r]=Ym(e),db(t)}function mb(r,e){if(typeof document>"u")return;const t={version:1,scene:r,preset:Ym(e)},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download=`npr_${r}_preset.json`,s.click(),window.setTimeout(()=>URL.revokeObjectURL(i),1e3)}const ic=new URLSearchParams(window.location.search),gb=ic.get("debug")==="1";ic.get("capture")==="1"&&document.documentElement.classList.add("capture-mode");gb&&(document.documentElement.classList.add("debug-mode"),document.querySelector("#debug-panel")?.removeAttribute("hidden"));const al=ic.get("captureState"),_b=ic.get("captureDof"),vb=["personalIntro","techStack","projects","creativityBase","creativityCloseup","moreInterests"],Zm=document.querySelector("#canvas-host"),vu=document.querySelector("#status"),xu=document.querySelector("#load-badge"),ns=document.querySelector("#ui-status"),xb=document.querySelector("#current-state"),yb=document.querySelector("#detail-state"),Sb=document.querySelector("#loaded-roots"),Tb=document.querySelector("#camera-position"),Mb=document.querySelector("#camera-rotation"),Eb=document.querySelector("#camera-fov"),ta=document.querySelector("#plane-debug"),Rf=document.querySelector("#npr-mesh-count"),Pf=document.querySelector("#npr-pass-count"),Lf=document.querySelector("#npr-preset-state"),If=document.querySelector("#draw-calls"),Df=document.querySelector("#triangle-count"),Of=document.querySelector("#fps"),Uf=document.querySelector("#terminal-state"),Nf=document.querySelector("#terminal-updates"),Ff=document.querySelector("#terminal-uploads"),bb=[document.querySelector("#terminal-a-metrics"),document.querySelector("#terminal-b-metrics"),document.querySelector("#terminal-c-metrics")];if(!Zm||!vu||!xu)throw new Error("Debug UI root elements are missing.");const $n=new U_;$n.background=new be(13027268);const Fi=new Jt(39.6,window.innerWidth/window.innerHeight,.05,1e3);Fi.position.set(0,-5,2.5);const bt=new gT({antialias:!0,preserveDrawingBuffer:!0});bt.setPixelRatio(Math.min(window.devicePixelRatio,2));bt.setSize(window.innerWidth,window.innerHeight);bt.outputColorSpace=mt;bt.toneMapping=Ui;bt.toneMappingExposure=1;bt.info.autoReset=!1;bt.shadowMap.enabled=!0;bt.shadowMap.type=jf;Zm.appendChild(bt.domElement);const rc=ab(Vm),jt=rc.personalIntro,Jm=new _v(16777215,jt.ambientIntensity);$n.add(Jm);const Qm=new hv(16119541,7369843,jt.hemisphereIntensity);$n.add(Qm);const At=new qu(16777215,jt.keyIntensity);At.position.fromArray(jt.keyPosition);At.castShadow=!0;At.shadow.mapSize.set(2048,2048);At.shadow.bias=-25e-5;At.shadow.normalBias=.02;At.shadow.radius=3;At.shadow.camera.left=-16;At.shadow.camera.right=16;At.shadow.camera.top=16;At.shadow.camera.bottom=-16;At.shadow.camera.near=.1;At.shadow.camera.far=40;At.shadow.camera.updateProjectionMatrix();$n.add(At);$n.add(At.target);const Ur=new qu(16777215,jt.fillIntensity);Ur.position.set(-4,5,6);Ur.castShadow=!1;Ur.target.position.fromArray(jt.keyTarget);$n.add(Ur);$n.add(Ur.target);const pt={keyIntensity:jt.keyIntensity,shadowIntensity:jt.shadowIntensity,fillIntensity:jt.fillIntensity,ambientIntensity:jt.ambientIntensity,hemisphereIntensity:jt.hemisphereIntensity,keyX:jt.keyPosition[0],keyY:jt.keyPosition[1],keyZ:jt.keyPosition[2],targetX:jt.keyTarget[0],targetY:jt.keyTarget[1],targetZ:jt.keyTarget[2]};function ol(){At.intensity=pt.keyIntensity,At.shadow.intensity=pt.shadowIntensity,Ur.intensity=pt.fillIntensity,Jm.intensity=pt.ambientIntensity,Qm.intensity=pt.hemisphereIntensity,At.position.set(pt.keyX,pt.keyY,pt.keyZ),At.target.position.set(pt.targetX,pt.targetY,pt.targetZ),At.target.updateMatrixWorld()}function wa(r,e=!1){const t=rb(r,rc);Cs.killTweensOf(pt),e?(pt.keyIntensity=t.keyIntensity,pt.shadowIntensity=t.shadowIntensity,pt.fillIntensity=t.fillIntensity,pt.ambientIntensity=t.ambientIntensity,pt.hemisphereIntensity=t.hemisphereIntensity,pt.keyX=t.keyPosition[0],pt.keyY=t.keyPosition[1],pt.keyZ=t.keyPosition[2],pt.targetX=t.keyTarget[0],pt.targetY=t.keyTarget[1],pt.targetZ=t.keyTarget[2]):Cs.to(pt,{keyIntensity:t.keyIntensity,shadowIntensity:t.shadowIntensity,fillIntensity:t.fillIntensity,ambientIntensity:t.ambientIntensity,hemisphereIntensity:t.hemisphereIntensity,keyX:t.keyPosition[0],keyY:t.keyPosition[1],keyZ:t.keyPosition[2],targetX:t.keyTarget[0],targetY:t.keyTarget[1],targetZ:t.keyTarget[2],duration:.9,ease:"power2.inOut",overwrite:"auto",onUpdate:ol,onComplete:ol}),ol(),Ur.target.updateMatrixWorld()}let nn=null,Ye=null,yu=null,nr=null,zt=null,Qe=null,Su=null;Qe=new ib(bt,$n,Fi,{enabled:!1,aperture:.0025,maxBlur:.004});Qe.setSize(window.innerWidth,window.innerHeight);const eg={};let St="projects",Xo="personalIntro";const li={aperture:.0025,maxBlur:.004},wb=fb({personalIntro:Xm,techStack:jm,projects:Fs,creativity:Wm,interests:qm}),Aa={personalIntro:ea("personalIntro"),techStack:ea("techStack"),projects:ea("projects"),creativity:ea("creativity"),interests:ea("interests")},jo={personalIntro:Js("personalIntro"),techStack:Js("techStack"),projects:Js("projects"),creativity:Js("creativity"),interests:Js("interests")};let Tu={},is=!0,Lo=!1,tg=0,cl=0,ll=performance.now(),Bf=performance.now();const Ca=Hm,ul=new Map,Ab={a:Au("PROJECT A","#172128","#67d5c5"),b:Au("PROJECT B","#241b2f","#e39c73")},Cb=ht.projects.map((r,e)=>Au(r.title,e===0?"#172128":e===1?"#20223a":"#2b211d",r.screenAccent)),Mu=ht.projects.map(()=>null),ng=ht.projects.map(()=>null),Eu=ht.projects.map(()=>null),kf=ht.projects.map(()=>null);let bu=0,wu="a";const zf=new Map;let Hf=0;async function Rb(r){const e=await new Promise((s,a)=>{const o=new Image;o.decoding="async",o.onload=()=>s(o),o.onerror=()=>a(new Error(`Could not load creativity cover: ${r}`)),o.src=r}),t=document.createElement("canvas");t.width=1600,t.height=1e3;const n=t.getContext("2d");if(!n)throw new Error("Could not create creativity cover canvas.");n.fillStyle="#080b10",n.fillRect(0,0,t.width,t.height),n.drawImage(e,0,0,t.width,t.height);const i=new Wu(t);return i.colorSpace=mt,i.flipY=!1,i.wrapS=Ht,i.wrapT=Ht,i.minFilter=ni,i.magFilter=Et,i.anisotropy=Math.min(bt.capabilities.getMaxAnisotropy(),8),i.needsUpdate=!0,i}function Au(r,e,t){const n=document.createElement("canvas");n.width=960,n.height=540;const i=n.getContext("2d");if(!i)throw new Error("Could not create Projects screen canvas context.");i.fillStyle=e,i.fillRect(0,0,n.width,n.height),i.strokeStyle=`${t}55`,i.lineWidth=2;for(let a=0;a<=n.width;a+=80)i.beginPath(),i.moveTo(a,0),i.lineTo(a,n.height),i.stroke();for(let a=0;a<=n.height;a+=60)i.beginPath(),i.moveTo(0,a),i.lineTo(n.width,a),i.stroke();i.fillStyle=t,i.font="600 54px ui-monospace, SFMono-Regular, Menlo, monospace",i.fillText(r,58,96),i.font="28px ui-monospace, SFMono-Regular, Menlo, monospace",i.fillText("PORTFOLIO PROJECT SCREEN",60,146);const s=new Wu(n);return s.colorSpace=mt,s.flipY=!1,s.needsUpdate=!0,s}function Pb(r){if(!Ye)return;if(!Bm(Ye.scene,Ab[r])){Ie("Projects_Screen was not found in the loaded GLB.","error");return}wu=r,document.querySelectorAll("[data-project-screen]").forEach(t=>{t.dataset.active=t.dataset.projectScreen===r?"true":"false"}),Ie(`Projects screen texture ${r.toUpperCase()} applied only to Projects_Screen`,"success")}function Cu(r){if(!Ye)return;const e=ht.projects[r],t=ng[r]??Mu[r]??Cb[r];if(!e||!t||!Bm(Ye.scene,t)){Ie("Projects_Screen was not found in the loaded GLB.","error");return}Eu.forEach((n,i)=>{n&&(i===r?(n.currentTime=0,n.play().catch(()=>{})):n.pause())}),wu=r===0?"a":"b",document.querySelectorAll("[data-project-screen]").forEach(n=>{n.dataset.active=n.dataset.projectScreen===wu?"true":"false"}),Ie(`Project screen synced: ${e.title}`,"success")}function Vf(r){!Ye||!ht.projects[r]||(bu=r,Cu(r),Lb(r).then(()=>{bu===r&&Cu(r)}))}async function Lb(r){const e=kf[r];if(e)return e;const t=ht.projects[r];if(!t)return;const n=new Xu,i=async()=>{if(!(!t.screenImage||Mu[r]))try{const o=await n.loadAsync(t.screenImage);o.colorSpace=mt,o.flipY=!1,o.wrapS=Ht,o.wrapT=Ht,o.minFilter=Et,o.magFilter=Et,o.needsUpdate=!0,Mu[r]=o,bu===r&&Cu(r),console.log(`[Projects Screen] loaded real cover for ${t.title}: ${t.screenImage}`)}catch(o){console.warn(`[Projects Screen] could not load ${t.screenImage}; using generated fallback.`,o)}},s=async()=>{const o=t.media?.find(c=>c.type==="video"&&"autoplay"in c&&c.autoplay===!0);if(!(!o||Eu[r]))try{const c=document.createElement("video");c.src=o.src,c.muted=!0,c.loop=!0,c.playsInline=!0,c.preload="auto",c.setAttribute("aria-hidden","true"),c.style.position="fixed",c.style.left="-10px",c.style.bottom="-10px",c.style.width="1px",c.style.height="1px",c.style.opacity="0",c.style.pointerEvents="none",document.body.appendChild(c),await new Promise((u,h)=>{const d=()=>{window.clearTimeout(g),c.removeEventListener("loadeddata",f),c.removeEventListener("error",_)},f=()=>{d(),u()},_=()=>{d(),c.removeAttribute("src"),c.load(),c.remove(),h(new Error(`Could not load project video: ${o.src}`))},g=window.setTimeout(_,15e3);c.addEventListener("loadeddata",f,{once:!0}),c.addEventListener("error",_,{once:!0}),c.load()}),c.pause(),c.currentTime=0;const l=new q_(c);l.colorSpace=mt,l.flipY=!1,l.wrapS=Ht,l.wrapT=Ht,l.minFilter=Et,l.magFilter=Et,l.anisotropy=Math.min(bt.capabilities.getMaxAnisotropy(),8),l.needsUpdate=!0,Eu[r]=c,ng[r]=l,console.log(`[Projects Screen] loaded local video cover for ${t.title}: ${o.src}`)}catch(c){console.warn(`[Projects Screen] could not load video cover for ${t.title}; using image or generated fallback.`,c)}},a=Promise.all([i(),s()]).then(()=>{});return kf[r]=a,a}async function Ib(){if(!Ye)return;const r=new Xu;try{const e=await r.loadAsync("/content-media/pic01.webp");if(e.colorSpace=mt,e.flipY=!1,e.wrapS=Ht,e.wrapT=Ht,e.minFilter=ni,e.magFilter=Et,e.anisotropy=Math.min(bt.capabilities.getMaxAnisotropy(),8),e.needsUpdate=!0,!bE(Ye.scene,e)){console.warn("[Personal Intro] PersonalIntro_Photo was not found in the loaded GLB.");return}console.log("[Personal Intro] loaded pic01.webp into PersonalIntro_Photo")}catch(e){console.warn("[Personal Intro] could not load /content-media/pic01.webp; keeping the existing photo material.",e)}}async function Db(r){const e=ht.conceptLab.find(i=>i.slug===r);if(!e||!Ye)return;const t=++Hf;let n=zf.get(e.slug);if(!n)try{n=await Rb(e.cover),zf.set(e.slug,n)}catch(i){console.warn(`[Creativity] could not load ${e.cover}`,i);return}t!==Hf||!Ye||wE(Ye.scene,n)&&Ie(`Creativity preview synced: ${e.title}`,"success")}function ir(r,e=!1){if(!Qe||!Ye)return;Xo=r;const t=_u[r];if(Cs.killTweensOf(li),e)li.aperture=t.aperture,li.maxBlur=t.maxBlur,Qe.setAperture(li.aperture),Qe.setMaxBlur(li.maxBlur);else{const o=Qe.getParameters();li.aperture=o.aperture,li.maxBlur=o.maxBlur,Cs.to(li,{aperture:t.aperture,maxBlur:t.maxBlur,duration:.9,ease:"power2.inOut",overwrite:"auto",onUpdate:()=>{Qe?.setAperture(li.aperture),Qe?.setMaxBlur(li.maxBlur)}})}const n={personalIntro:["Photo_Frame","PersonalIntro_Photo"],techStack:["Terminal_Panel_A","Terminal_Panel_B","Terminal_Panel_C"],projects:["Projects_Screen","Workstation_Desk"],creativityBase:["Creativity_Screen","Workstation_Monitor"],creativityCloseup:["Creativity_Screen","Workstation_Monitor"],moreInterests:["ROOT_MoreInterests"]},i={personalIntro:"ROOT_PersonalIntro",techStack:"ROOT_TechStack",projects:"ROOT_Projects",creativityBase:"ROOT_Creativity",creativityCloseup:"ROOT_Creativity",moreInterests:"ROOT_MoreInterests"},s=n[r].map(o=>Ye.scene.getObjectByName(o)).filter(o=>!!o),a=s.length===0?[Ye.scene.getObjectByName(i[r])].filter(o=>!!o):r==="techStack"?s:[s[0]];if(a.length===0)Qe.setFocusObject(null,"None",e);else if(a.length===1)Qe.setFocusObject(a[0],a[0].name||Lt(Pa(r)),e);else{const o=new Yt;a.forEach(c=>o.expandByObject(c)),Qe.setFocusPoint(o.getCenter(new L),Lt(Pa(r)),e)}Ra()}function Ra(){if(!Qe)return;const r=document.querySelector('[data-dof-action="toggle"]');r&&(r.textContent=`Depth of Field: ${Qe.isEnabled()?"On":"Off"}`);const e=Qe.getParameters(),t=document.querySelector('[data-dof-param="aperture"]'),n=document.querySelector('[data-dof-param="maxBlur"]');t&&(t.value=String(e.aperture)),n&&(n.value=String(e.maxBlur));const i=document.querySelector('[data-dof-value="aperture"]'),s=document.querySelector('[data-dof-value="maxBlur"]');i&&(i.value=e.aperture.toFixed(4)),s&&(s.value=e.maxBlur.toFixed(3));const a=document.querySelector('[data-dof-value="focusDistance"]');a&&(a.value=`${e.focusDistance.toFixed(2)}u`);const o=document.querySelector('[data-dof-value="focusTarget"]');o&&(o.value=e.targetLabel)}function Ru(r){return r==="personalIntro"||r==="techStack"||r==="projects"||r==="creativity"||r==="interests"}function An(r=St){return eg[r]??null}function Lt(r){return{personalIntro:"Personal Intro",techStack:"Tech Stack",projects:"Projects",creativity:"Creativity",interests:"More Interests"}[r]}function Pa(r){return r==="moreInterests"?"interests":r==="creativityBase"||r==="creativityCloseup"?"creativity":r}function Rs(r){St=Pa(r),Vn()}function Vn(){const r=An();if(!r)return;const e=r.getConfig(),t=document.querySelector('[data-npr-action="toggle"]'),n=document.querySelector('[data-npr-action="outline"]'),i=document.querySelector('[data-npr-action="hatching"]'),s=document.querySelector('[data-npr-action="paper"]');if(t&&(t.textContent=`${Lt(St)} NPR: ${r.isEnabled()?"On":"Off"}`),n&&(n.textContent=`Outline: ${e.outlineEnabled?"On":"Off"}`),i&&(i.textContent=`Hatching: ${e.hatchingEnabled?"On":"Off"}`),s&&(s.textContent=`Paper Noise: ${e.paperNoiseEnabled?"On":"Off"}`),document.querySelectorAll('[data-npr-action="toggle-module"]').forEach(a=>{const o=a.dataset.nprTarget;if(!Ru(o))return;const c=An(o);a.textContent=`${Lt(o)} NPR: ${c?.isEnabled()?"On":"Off"}`}),document.querySelectorAll("[data-npr-module]").forEach(a=>{a.dataset.active=a.dataset.nprModule===St?"true":"false";const o=a.dataset.nprModule;a.dataset.saved=Aa[o]?"true":"false"}),Lf){const a=Aa[St]?"saved":"built-in",o=jo[St]?"saved":"baseline";Lf.textContent=`${Lt(St)} · NPR ${a} · Lighting ${o}`}document.querySelectorAll("[data-npr-param]").forEach(a=>{const o=a.dataset.nprParam,c=e[o];if(typeof c!="number")return;a.value=String(c);const l=document.querySelector(`[data-npr-value="${o}"]`);l&&(l.value=o==="hatchAngle"?`${c.toFixed(0)}°`:c.toFixed(2))})}function Ob(r){const e=r.getObjectByName("Portfolio_Ground_Plane");!e||!e.isMesh||sc(e,t=>{const n=t;"color"in n&&n.color.set("#e8e9e6"),"roughness"in n&&(n.roughness=.92),t.needsUpdate=!0})}function Ub(){nr?.update(),Qe?Qe.render():bt.render($n,Fi),bt.domElement.toBlob(r=>{if(!r){Ie("Could not capture the Projects NPR preview.","error");return}const e=URL.createObjectURL(r),t=document.createElement("a");t.href=e,t.download="npr_projects_final.png",t.click(),window.setTimeout(()=>URL.revokeObjectURL(e),1e3),Ie("Current WebGL canvas downloaded as npr_projects_final.png","success")},"image/png")}function Nb(){if(!Qe)return;Qe.render(1/60);const r=nn?.getDebugSnapshot(),e=r?.detailState==="closeup"?"creativity_closeup":r?.currentMainState??Xo,t=Qe.isEnabled()?"on":"off",n=`dof_${e}_${t}.png`;bt.domElement.toBlob(i=>{if(!i){Ie(`Could not capture ${n}`,"error");return}const s=URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=n,a.click(),window.setTimeout(()=>URL.revokeObjectURL(s),1e3),Ie(`DOF reference downloaded as ${n}`,"success")},"image/png")}function Fb(){const r=An();if(!r)return;const e=St;pb(e,r.getConfig()),ob(e,rc[e]),Aa[e]=!0,jo[e]=!0,Vn(),Ie(`${Lt(St)} parameters saved locally`,"success")}function Bb(){const r=An();if(!r)return;const e=St,t=Km(e),n=cb(e);if(t?(r.loadConfig(t),Aa[e]=!0):(r.resetPreset(),Aa[e]=!1),n){const s=rc[e];typeof n.keyIntensity=="number"&&(s.keyIntensity=n.keyIntensity),typeof n.shadowIntensity=="number"&&(s.shadowIntensity=n.shadowIntensity),typeof n.fillIntensity=="number"&&(s.fillIntensity=n.fillIntensity),typeof n.ambientIntensity=="number"&&(s.ambientIntensity=n.ambientIntensity),typeof n.hemisphereIntensity=="number"&&(s.hemisphereIntensity=n.hemisphereIntensity),Array.isArray(n.keyPosition)&&n.keyPosition.length===3&&(s.keyPosition=[...n.keyPosition]),Array.isArray(n.keyTarget)&&n.keyTarget.length===3&&(s.keyTarget=[...n.keyTarget]),jo[e]=!0}else jo[e]=!1;const i=nn?.getDebugSnapshot();if(i){const s=i.detailState==="closeup"?"creativityCloseup":i.currentMainState;Pa(s)===e&&wa(s)}Ie(t||n?`${Lt(St)} saved NPR and lighting parameters loaded`:`${Lt(St)} has no saved preset; built-in values restored`,"success"),Vn()}function kb(){const r=An();r&&(mb(St,r.getConfig()),Ie(`${Lt(St)} preset exported as JSON`,"success"))}function Ie(r,e="normal"){vu.textContent=r,vu.dataset.tone=e,ns&&(e==="error"?ns.textContent="SCENE ATTENTION":r.startsWith("Navigating")?ns.textContent="CAMERA MOVING":r.includes("Project screen")?ns.textContent="SCREEN SYNCED":r.includes("CloseUp")?ns.textContent="CLOSEUP READY":ns.textContent="SCENE READY")}function Gf(r,e){xu.textContent=r,xu.className=`badge ${e}`;const t=document.querySelector("#scene-status");t&&(t.textContent=e==="success"?"SCENE / READY":`SCENE / ${r.toUpperCase()}`,t.dataset.tone=e)}function Wf(r){return[r.x,r.y,r.z].map(e=>e.toFixed(3)).join(" / ")}function zb(r){return r===xn?"FrontSide":r===on?"BackSide":"DoubleSide"}function sc(r,e){(Array.isArray(r.material)?r.material:[r.material]).forEach(e)}function Hb(r,e){const t=Math.max(r.min.x-e.max.x,e.min.x-r.max.x,0),n=Math.max(r.min.y-e.max.y,e.min.y-r.max.y,0),i=Math.max(r.min.z-e.max.z,e.min.z-r.max.z,0);return Math.sqrt(t*t+n*n+i*i)}function Vb(r){r.updateMatrixWorld(!0);const e=[];r.traverse(n=>{n.isMesh&&e.push(n)});const t={};for(const n of Ca){const i=r.getObjectByName(n);if(!i||!i.isMesh){t[n]={found:!1};continue}const s=i,a=s.geometry,o=new Yt().setFromObject(s),c=e.filter(u=>u!==s&&!Ca.has(u.name)).map(u=>({name:u.name||u.type,gap:Hb(o,new Yt().setFromObject(u))})).sort((u,h)=>u.gap-h.gap).slice(0,4).map(u=>({name:u.name,gap:Number(u.gap.toFixed(6))})),l=[];sc(s,u=>{l.push({type:u.type,side:zb(u.side),transparent:u.transparent,opacity:u.opacity,depthWrite:u.depthWrite,depthTest:u.depthTest,polygonOffset:u.polygonOffset,polygonOffsetFactor:u.polygonOffsetFactor,polygonOffsetUnits:u.polygonOffsetUnits})}),t[n]={found:!0,objectType:s.type,geometryType:a.type,vertexCount:a.attributes.position?.count??0,position:s.position.toArray().map(u=>Number(u.toFixed(6))),worldPosition:s.getWorldPosition(new L).toArray().map(u=>Number(u.toFixed(6))),rotation:[s.rotation.x,s.rotation.y,s.rotation.z].map(u=>Number(u.toFixed(6))),scale:s.scale.toArray().map(u=>Number(u.toFixed(6))),renderOrder:s.renderOrder,worldBoundsSize:o.getSize(new L).toArray().map(u=>Number(u.toFixed(6))),materials:l,nearbySurfaces:c,possibleZFight:c.some(u=>u.gap<=.002),userData:s.userData}}return t}function Gb(r){r.traverse(e=>{if(!e.isMesh||!Ca.has(e.name))return;const t=e;t.userData.isContentPlane=!0,t.userData.contentPlaneRole=e.name,t.castShadow=!1,t.receiveShadow=!1,sc(t,n=>{n.side=xn,n.depthTest=!0,n.depthWrite=!0,n.polygonOffset=!0,n.polygonOffsetFactor=-1,n.polygonOffsetUnits=-1,n.needsUpdate=!0})})}function Wb(r){r.traverse(e=>{if(!e.isMesh)return;const t=e,n=t.name==="Portfolio_Ground_Plane",i=Ca.has(t.name);t.castShadow=!n&&!i,t.receiveShadow=!i})}function Xb(r){Ye&&(r?Ye.scene.traverse(e=>{!e.isMesh||!Ca.has(e.name)||sc(e,t=>{const n=t;"color"in n&&(ul.set(t,{color:n.color.clone(),emissive:"emissive"in n?n.emissive.clone():void 0,emissiveIntensity:"emissiveIntensity"in n?n.emissiveIntensity:void 0}),n.color.set(16738877),"emissive"in n&&n.emissive.set(4986888),"emissiveIntensity"in n&&(n.emissiveIntensity=.7),t.needsUpdate=!0)})}):(ul.forEach((e,t)=>{const n=t;e.color&&"color"in n&&n.color.copy(e.color),e.emissive&&"emissive"in n&&n.emissive.copy(e.emissive),e.emissiveIntensity!==void 0&&"emissiveIntensity"in n&&(n.emissiveIntensity=e.emissiveIntensity),t.needsUpdate=!0}),ul.clear()),Lo=r)}function jb(r){if(!r.target)return{...r};const e={x:-2.011593,y:-3.647516,z:.978914},t=.62;return{...r,target:e,position:{x:r.position.x+(e.x-r.position.x)*t+.4,y:r.position.y+(e.y-r.position.y)*t,z:r.position.z+(e.z-r.position.z)*.65}}}function qb(r,e){const t=jb(r.states.personalIntro),n=e.transitions.map(i=>i.name!=="PersonalIntro_to_TechStack"||i.keyframes.length===0?i:{...i,keyframes:[t,...i.keyframes.slice(1)]});return console.log("[Camera] personalIntro code-level approach",JSON.stringify({approachFactor:.62,verticalApproachFactor:.65,horizontalRightOffset:.4,targetChanged:!0,target:t.target,originalPosition:r.states.personalIntro.position,adjustedPosition:t.position,transitionUpdated:n.some(i=>i.name==="PersonalIntro_to_TechStack"&&i.keyframes[0].position.x!==r.states.personalIntro.position.x)})),{statesFile:{...r,states:{...r.states,personalIntro:t}},transitionsFile:{...e,transitions:n}}}function Bs(){if(!nn||!Ye)return;const r=nn.getDebugSnapshot();xb.textContent=r.currentMainState,yb.textContent=r.detailState+(r.isTransitioning?" · transitioning":""),Sb.textContent=`${Wo.length-Ye.structure.missingRoots.length} / ${Wo.length}`,Tb.textContent=Wf(r.position),Mb.textContent=Wf(r.rotation),Eb.textContent=`${r.fov.toFixed(3)}°`,Rf&&(Rf.textContent=String(nr?.getManagedMeshCount()??0)),Pf&&(Pf.textContent=String(nr?.getPassCount()??0)),If&&(If.textContent=String(bt.info.render.calls)),Df&&(Df.textContent=String(bt.info.render.triangles)),Of&&(Of.textContent=tg.toFixed(0)),ei(),Su?.sync({mainState:r.currentMainState,detailState:r.detailState,isTransitioning:r.isTransitioning})}function ei(){if(!zt)return;const r=zt.getState(),e=zt.getMetrics();Uf&&(Uf.textContent=r.active?r.isTyping?"active / typing":r.isLive?"active / live":"active / idle":r.hasEnteredTech?"paused / preserved":"idle / waiting"),Nf&&(Nf.textContent=String(e.redrawCount)),Ff&&(Ff.textContent=String(e.textureUploadCount)),e.panels.forEach((t,n)=>{const i=bb[n];i&&(i.textContent=`E ${t.metrics.eventsGenerated} · R ${t.metrics.redrawCount} · U ${t.metrics.textureUploadCount}`)})}function Pu(r){zt&&(r==="techStack"?zt.activate():zt.deactivate(),ei())}function ig(r){nn?.setCameraStateInstant(r),Rs(r),wa(r,!0),ir(r,!0),Pu(r),Bs(),Ie(`Instant state applied: ${r}`,"success")}async function rg(r){if(!nn)return!1;Rs(r),wa(r),ir(r),Pu(r),Ie(`Navigating to ${r}…`);const e=await nn.navigateTo(r);if(!e){const t=nn.getDebugSnapshot().currentMainState;Rs(t),wa(t),ir(t),Pu(t)}return ir(r),Bs(),Ie(`Navigation complete: ${r}`,"success"),e}async function sg(r){if(!nn)return!1;const e=r?ht.conceptLab.find(n=>n.slug===r):void 0;Rs("creativityCloseup"),ir("creativityCloseup"),Ie(e?`Entering Creativity CloseUp · ${e.title}…`:"Entering Creativity CloseUp…");const t=await nn.enterCreativityCloseup();return Bs(),Ie(t?"Creativity CloseUp entered":"Enter blocked: select Creativity Base first",t?"success":"error"),t}async function ag(){if(!nn)return!1;Rs("creativityBase"),ir("creativityBase"),Ie("Returning to Creativity Base…");const r=await nn.exitCreativityCloseup();return Bs(),Ie(r?"Creativity CloseUp exited":"Exit unavailable",r?"success":"error"),r}function $b(){document.querySelectorAll("[data-instant-state]").forEach(r=>{r.addEventListener("click",()=>ig(r.dataset.instantState))}),document.querySelectorAll("[data-nav-state]").forEach(r=>{r.addEventListener("click",()=>{rg(r.dataset.navState)})}),document.addEventListener("visibilitychange",()=>{zt&&(document.hidden?zt.pauseForVisibility():nn?.getDebugSnapshot().currentMainState==="techStack"&&zt.resumeFromVisibility(),ei())}),document.querySelector('[data-terminal-action="replay"]')?.addEventListener("click",()=>{zt?.replay(),ei(),Ie("Terminal typing replayed","success")}),document.querySelector('[data-terminal-action="pause"]')?.addEventListener("click",()=>{zt?.pause(),ei(),Ie("Terminal typing paused","success")}),document.querySelector('[data-terminal-action="complete"]')?.addEventListener("click",()=>{zt?.completeInstantly(),ei(),Ie("Terminal live mode completed current events","success")}),document.querySelector('[data-terminal-action="live-on"]')?.addEventListener("click",()=>{zt?.setLiveEnabled(!0),ei(),Ie("Terminal live mode enabled","success")}),document.querySelector('[data-terminal-action="live-off"]')?.addEventListener("click",()=>{zt?.setLiveEnabled(!1),ei(),Ie("Terminal live mode paused","success")}),document.querySelector('[data-terminal-action="resume"]')?.addEventListener("click",()=>{zt?.resume(),ei(),Ie("Terminal live mode resumed","success")}),["a","b","c"].forEach((r,e)=>{document.querySelector(`[data-terminal-action="generate-${r}"]`)?.addEventListener("click",()=>{zt?.generateEvent(e),ei(),Ie(`Terminal ${r.toUpperCase()} event generated`,"success")})}),document.querySelector('[data-terminal-action="clear-history"]')?.addEventListener("click",()=>{zt?.clearHistory(),ei(),Ie("Terminal history cleared","success")}),document.querySelector('[data-detail-action="enter"]')?.addEventListener("click",async()=>{await sg()}),document.querySelector('[data-detail-action="exit"]')?.addEventListener("click",async()=>{await ag()}),document.querySelectorAll("[data-npr-module]").forEach(r=>{r.addEventListener("click",()=>{const e=r.dataset.nprModule;Ru(e)&&(St=e,Vn(),Ie(`NPR module selected: ${Lt(St)}`,"success"))})}),document.querySelector('[data-npr-action="toggle"]')?.addEventListener("click",()=>{const r=An();r&&(r.setEnabled(!r.isEnabled()),Vn(),Ie(`${Lt(St)} NPR ${r.isEnabled()?"enabled":"disabled"}`,"success"))}),document.querySelectorAll('[data-npr-action="toggle-module"]').forEach(r=>{r.addEventListener("click",()=>{const e=r.dataset.nprTarget;if(!Ru(e))return;const t=An(e);t&&(t.setEnabled(!t.isEnabled()),Vn(),Ie(`${Lt(e)} NPR ${t.isEnabled()?"enabled":"disabled"}`,"success"))})}),document.querySelector('[data-npr-action="outline"]')?.addEventListener("click",()=>{const r=An();if(!r)return;const e=!r.getConfig().outlineEnabled;r.setFeature("outlineEnabled",e),Vn(),Ie(`${Lt(St)} outline ${e?"enabled":"disabled"}`,"success")}),document.querySelector('[data-npr-action="hatching"]')?.addEventListener("click",()=>{const r=An();if(!r)return;const e=!r.getConfig().hatchingEnabled;r.setFeature("hatchingEnabled",e),Vn(),Ie(`${Lt(St)} hatching ${e?"enabled":"disabled"}`,"success")}),document.querySelector('[data-npr-action="paper"]')?.addEventListener("click",()=>{const r=An();if(!r)return;const e=!r.getConfig().paperNoiseEnabled;r.setFeature("paperNoiseEnabled",e),Vn(),Ie(`${Lt(St)} paper noise ${e?"enabled":"disabled"}`,"success")}),document.querySelector('[data-npr-action="reset"]')?.addEventListener("click",()=>{const r=An();r&&(r.resetPreset(),Vn(),Ie(`${Lt(St)} preset reset`,"success"))}),document.querySelector('[data-npr-action="save"]')?.addEventListener("click",Fb),document.querySelector('[data-npr-action="load"]')?.addEventListener("click",Bb),document.querySelector('[data-npr-action="export"]')?.addEventListener("click",kb),document.querySelector('[data-npr-action="copy"]')?.addEventListener("click",()=>{const r=An();r&&(console.log(`[NPR] ${St} preset copy`,JSON.stringify(r.getConfig(),null,2)),Ie(`${Lt(St)} preset printed to Console`,"success"))}),document.querySelector('[data-npr-action="capture"]')?.addEventListener("click",Ub),document.querySelectorAll("[data-npr-param]").forEach(r=>{r.addEventListener("input",()=>{const e=An();if(!e)return;const t=r.dataset.nprParam;e.setParameter(t,Number(r.value)),Vn()})}),document.querySelector('[data-dof-action="toggle"]')?.addEventListener("click",()=>{Qe&&(Qe.setEnabled(!Qe.isEnabled()),Ra(),Ie(`Depth of field ${Qe.isEnabled()?"enabled":"disabled"}`,"success"))}),document.querySelectorAll("[data-dof-param]").forEach(r=>{r.addEventListener("input",()=>{if(!Qe)return;const e=r.dataset.dofParam;e==="aperture"&&(Qe.setAperture(Number(r.value)),_u[Xo].aperture=Number(r.value)),e==="maxBlur"&&(Qe.setMaxBlur(Number(r.value)),_u[Xo].maxBlur=Number(r.value)),Ra()})}),document.querySelector('[data-dof-action="focus-current"]')?.addEventListener("click",()=>{const r=nn?.getDebugSnapshot(),e=r?r.detailState==="closeup"?"creativityCloseup":r.currentMainState:void 0;e&&(ir(e,!0),Ie(`Depth of field focused on ${Lt(Pa(e))}`,"success"))}),document.querySelector('[data-dof-action="capture"]')?.addEventListener("click",Nb),document.querySelector('[data-debug-action="shadows"]')?.addEventListener("click",()=>{is=!is,bt.shadowMap.enabled=is,At.castShadow=is;const r=document.querySelector('[data-debug-action="shadows"]');r&&(r.textContent=`Shadows: ${is?"On":"Off"}`),Ie(`Real-time shadows ${is?"enabled":"disabled"}`,"success")}),document.querySelector('[data-debug-action="plane-info"]')?.addEventListener("click",()=>{ta&&(ta.hidden=!ta.hidden,ta.textContent=JSON.stringify(Tu,null,2),Ie(ta.hidden?"Plane diagnostics hidden":"Plane diagnostics shown; full data is also in Console","success"))}),document.querySelector('[data-debug-action="highlight-planes"]')?.addEventListener("click",()=>{Xb(!Lo);const r=document.querySelector('[data-debug-action="highlight-planes"]');r&&(r.textContent=`Highlight Planes: ${Lo?"On":"Off"}`),Ie(`Content plane highlight ${Lo?"enabled":"disabled"}`,"success")}),document.querySelectorAll("[data-project-screen]").forEach(r=>{r.addEventListener("click",()=>{const e=r.dataset.projectScreen;(e==="a"||e==="b")&&Pb(e)})})}async function hl(r){const e=await fetch(r);if(!e.ok)throw new Error(`${r} returned ${e.status}`);return e.json()}async function Yb(){try{Ie("Loading GLB and camera data…");const[r,e,t]=await Promise.all([hl("/data/camera_states.json"),hl("/data/camera_transitions.json"),hl("/data/camera_navigation_rules.json")]),n=qb(r,e);Ye=await ME("/models/portfolio_scene.glb"),$n.add(Ye.scene),yu=new EE(Ye.scene,[{name:"World_Globe",amplitude:.1,speed:.95,phase:.1},{name:"Game_Controller",amplitude:.07,speed:1.05,phase:1.7},{name:"Artist_Palette",amplitude:.08,speed:.9,phase:3.1},{name:"Terminal_Panel_A",amplitude:.04,speed:.9,phase:.4,lift:.12},{name:"Terminal_Panel_B",amplitude:.045,speed:.9,phase:2.1,lift:.12},{name:"Terminal_Panel_C",amplitude:.035,speed:.9,phase:4,lift:.12}]),console.log("[Float] animated objects",JSON.stringify(yu.getAnimatedNames())),Gb(Ye.scene),Ob(Ye.scene),zt=new NE(Ye.scene),Vf(0),Ib(),Wb(Ye.scene),nr=new jE($n,At),[{key:"personalIntro",rootName:"ROOT_PersonalIntro",preset:Xm,minimumSegmentLength:.18,edgeThreshold:44,outlineOpacity:.78},{key:"techStack",rootName:"ROOT_TechStack",preset:jm,minimumSegmentLength:.18,edgeThreshold:44,outlineOpacity:.8},{key:"projects",rootName:"ROOT_Projects",preset:Fs,minimumSegmentLength:.22,edgeThreshold:42,outlineOpacity:.84},{key:"creativity",rootName:"ROOT_Creativity",preset:Wm,minimumSegmentLength:.2,edgeThreshold:44,outlineOpacity:.82},{key:"interests",rootName:"ROOT_MoreInterests",preset:qm,minimumSegmentLength:.2,edgeThreshold:44,outlineOpacity:.76}].forEach(d=>{const f=Ye?.scene.getObjectByName(d.rootName);if(!f){console.warn(`[NPR] ${d.rootName} was not found; ${Lt(d.key)} NPR is unavailable.`);return}const _=nr.applyNPRToRoot(f,d.preset,{excludeContentPlanes:!0,minimumSegmentLength:d.minimumSegmentLength,edgeThreshold:d.edgeThreshold,outlineOpacity:d.outlineOpacity,label:Lt(d.key)});_.loadConfig(wb[d.key]),eg[d.key]=_,console.log(`[NPR] ${Lt(d.key)} meshes`,JSON.stringify(_.getManagedObjectNames()))}),nr.setResolution(window.innerWidth,window.innerHeight),Tu=Vb(Ye.scene),console.log("[Content Planes] diagnostics",JSON.stringify(Tu));const s=new Yt().setFromObject(Ye.scene),a=s.getCenter(new L);console.log("[GLB] world bounds",JSON.stringify({min:s.min.toArray(),max:s.max.toArray(),center:a.toArray()}));const o={};for(const d of["ROOT_PersonalIntro","ROOT_TechStack","ROOT_Projects","ROOT_Creativity","ROOT_MoreInterests","Workstation_Desk","Workstation_Monitor","World_Globe"]){const f=Ye.scene.getObjectByName(d);f&&(o[d]=f.getWorldPosition(new L).toArray())}console.log("[GLB] world position samples",JSON.stringify(o)),nn=new kM(Fi,n.statesFile.states,n.transitionsFile,t),console.log("[Camera] coordinate conversion","Blender Z-up -> Three.js Y-up: (x, y, z) -> (x, z, -y); quaternion basis conjugation"),nn.setCameraStateInstant("personalIntro"),Rs("personalIntro"),wa("personalIntro",!0),ir("personalIntro",!0);const c=["Photo_Frame","Terminal_Panel_A","Workstation_Desk","Workstation_Monitor","ROOT_MoreInterests"],l={};for(const d of c){const f=Ye.scene.getObjectByName(d);f&&(l[d]=f.getWorldPosition(new L).project(Fi).toArray())}console.log("[Camera] initial diagnostic",JSON.stringify({direction:Fi.getWorldDirection(new L).toArray(),projectedTargets:l,rendererCalls:bt.info.render.calls})),Su=new hb({navigateTo:rg,enterCreativityCloseup:sg,exitCreativityCloseup:ag,previewCreativityEntry:d=>{Db(d)},setProjectIndex:Vf}),Su.bind(),$b(),al&&vb.includes(al)&&ig(al),_b==="off"&&Qe?.isEnabled()&&Qe.setEnabled(!1),Bs(),Ra();const u=Ye.structure.missingRoots.length===0,h=Ye.structure.missingObjects.length===0;Gf(u&&h?"Loaded":"Issues",u&&h?"success":"error"),!u||!h?Ie(`Validation issue. Missing roots: ${Ye.structure.missingRoots.join(", ")||"none"}; objects: ${Ye.structure.missingObjects.join(", ")||"none"}`,"error"):Ie(`GLB loaded · ${Ye.structure.meshCount} meshes · 5/5 ROOT nodes found`,"success"),Vn()}catch(r){console.error(r),Gf("Error","error"),Ie(r instanceof Error?r.message:"Unknown load error","error")}}window.addEventListener("resize",()=>{Fi.aspect=window.innerWidth/window.innerHeight,Fi.updateProjectionMatrix(),bt.setSize(window.innerWidth,window.innerHeight),nr?.setResolution(window.innerWidth,window.innerHeight),Qe?.setSize(window.innerWidth,window.innerHeight)});function og(){requestAnimationFrame(og),cl+=1;const r=performance.now(),e=Math.min((r-Bf)/1e3,.1);Bf=r,r-ll>=500&&(tg=cl*1e3/(r-ll),cl=0,ll=r),yu?.update(e),nr?.update(),bt.info.reset(),Qe?(Qe.render(e),Ra()):bt.render($n,Fi),Bs()}Yb();og();
