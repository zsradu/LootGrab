var Yo=Object.defineProperty;var jo=(i,e,t)=>e in i?Yo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xr=(i,e,t)=>jo(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ps="162",$o=0,Ls=1,Ko=2,oo=1,Zo=2,Qt=3,gn=0,bt=1,en=2,fn=0,ai=1,Ds=2,Is=3,Us=4,Jo=5,Ln=100,Qo=101,el=102,Ns=103,Fs=104,tl=200,nl=201,il=202,rl=203,ns=204,is=205,sl=206,al=207,ol=208,ll=209,cl=210,ul=211,hl=212,dl=213,fl=214,pl=0,ml=1,_l=2,ir=3,gl=4,vl=5,xl=6,Ml=7,ms=0,yl=1,Sl=2,pn=0,El=1,Tl=2,bl=3,Al=4,wl=5,Rl=6,Cl=7,lo=300,ci=301,ui=302,rs=303,ss=304,hr=306,as=1e3,Ft=1001,os=1002,yt=1003,Os=1004,gi=1005,Et=1006,Mr=1007,In=1008,mn=1009,Pl=1010,Ll=1011,_s=1012,co=1013,dn=1014,tn=1015,wi=1016,uo=1017,ho=1018,Un=1020,Dl=1021,Ot=1023,Il=1024,Ul=1025,Nn=1026,hi=1027,Nl=1028,fo=1029,Fl=1030,po=1031,mo=1033,yr=33776,Sr=33777,Er=33778,Tr=33779,Bs=35840,zs=35841,Gs=35842,Hs=35843,_o=36196,Vs=37492,ks=37496,Ws=37808,Xs=37809,qs=37810,Ys=37811,js=37812,$s=37813,Ks=37814,Zs=37815,Js=37816,Qs=37817,ea=37818,ta=37819,na=37820,ia=37821,br=36492,ra=36494,sa=36495,Ol=36283,aa=36284,oa=36285,la=36286,Bl=3200,zl=3201,gs=0,Gl=1,hn="",kt="srgb",xn="srgb-linear",vs="display-p3",dr="display-p3-linear",rr="linear",$e="srgb",sr="rec709",ar="p3",Bn=7680,ca=519,Hl=512,Vl=513,kl=514,go=515,Wl=516,Xl=517,ql=518,Yl=519,ls=35044,ua="300 es",cs=1035,nn=2e3,or=2001;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ar=Math.PI/180,us=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function jl(i,e){return(i%e+e)%e}function wr(i,e,t){return(1-t)*i+t*e}function ha(i){return(i&i-1)===0&&i!==0}function hs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*r+e.x,this.y=s*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,r,s,c,l,d,f){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,l,d,f)}set(e,t,n,r,s,c,l,d,f){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=s,m[5]=d,m[6]=n,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],l=n[3],d=n[6],f=n[1],m=n[4],a=n[7],o=n[2],h=n[5],_=n[8],g=r[0],p=r[3],u=r[6],y=r[1],x=r[4],E=r[7],C=r[2],w=r[5],A=r[8];return s[0]=c*g+l*y+d*C,s[3]=c*p+l*x+d*w,s[6]=c*u+l*E+d*A,s[1]=f*g+m*y+a*C,s[4]=f*p+m*x+a*w,s[7]=f*u+m*E+a*A,s[2]=o*g+h*y+_*C,s[5]=o*p+h*x+_*w,s[8]=o*u+h*E+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],d=e[6],f=e[7],m=e[8];return t*c*m-t*l*f-n*s*m+n*l*d+r*s*f-r*c*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],d=e[6],f=e[7],m=e[8],a=m*c-l*f,o=l*d-m*s,h=f*s-c*d,_=t*a+n*o+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=a*g,e[1]=(r*f-m*n)*g,e[2]=(l*n-r*c)*g,e[3]=o*g,e[4]=(m*t-r*d)*g,e[5]=(r*s-l*t)*g,e[6]=h*g,e[7]=(n*d-f*t)*g,e[8]=(c*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,c,l){const d=Math.cos(s),f=Math.sin(s);return this.set(n*d,n*f,-n*(d*c+f*l)+c+e,-r*f,r*d,-r*(-f*c+d*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Rr.makeScale(e,t)),this}rotate(e){return this.premultiply(Rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new Ue;function vo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $l(){const i=lr("canvas");return i.style.display="block",i}const da={};function xo(i){i in da||(da[i]=!0,console.warn(i))}const fa=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pa=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Di={[xn]:{transfer:rr,primaries:sr,toReference:i=>i,fromReference:i=>i},[kt]:{transfer:$e,primaries:sr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[dr]:{transfer:rr,primaries:ar,toReference:i=>i.applyMatrix3(pa),fromReference:i=>i.applyMatrix3(fa)},[vs]:{transfer:$e,primaries:ar,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pa),fromReference:i=>i.applyMatrix3(fa).convertLinearToSRGB()}},Kl=new Set([xn,dr]),qe={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Di[e].toReference,r=Di[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Di[i].primaries},getTransfer:function(i){return i===hn?rr:Di[i].transfer}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zn;class Mo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zn===void 0&&(zn=lr("canvas")),zn.width=e.width,zn.height=e.height;const n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=oi(s[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zl=0;class yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?s.push(Pr(r[c].image)):s.push(Pr(r[c]))}else s=Pr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jl=0;class St extends pi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Ft,r=Ft,s=Et,c=In,l=Ot,d=mn,f=St.DEFAULT_ANISOTROPY,m=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=_n(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=d,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=lo;St.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const d=e.elements,f=d[0],m=d[4],a=d[8],o=d[1],h=d[5],_=d[9],g=d[2],p=d[6],u=d[10];if(Math.abs(m-o)<.01&&Math.abs(a-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(m+o)<.1&&Math.abs(a+g)<.1&&Math.abs(_+p)<.1&&Math.abs(f+h+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(f+1)/2,E=(h+1)/2,C=(u+1)/2,w=(m+o)/4,A=(a+g)/4,L=(_+p)/4;return x>E&&x>C?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=A/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=L/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=L/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(a-g)*(a-g)+(o-m)*(o-m));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(a-g)/y,this.z=(o-m)/y,this.w=Math.acos((f+h+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ql extends pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class So extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,c,l){let d=n[r+0],f=n[r+1],m=n[r+2],a=n[r+3];const o=s[c+0],h=s[c+1],_=s[c+2],g=s[c+3];if(l===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=a;return}if(l===1){e[t+0]=o,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(a!==g||d!==o||f!==h||m!==_){let p=1-l;const u=d*o+f*h+m*_+a*g,y=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,u*y);p=Math.sin(p*w)/C,l=Math.sin(l*w)/C}const E=l*y;if(d=d*p+o*E,f=f*p+h*E,m=m*p+_*E,a=a*p+g*E,p===1-l){const C=1/Math.sqrt(d*d+f*f+m*m+a*a);d*=C,f*=C,m*=C,a*=C}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,r,s,c){const l=n[r],d=n[r+1],f=n[r+2],m=n[r+3],a=s[c],o=s[c+1],h=s[c+2],_=s[c+3];return e[t]=l*_+m*a+d*h-f*o,e[t+1]=d*_+m*o+f*a-l*h,e[t+2]=f*_+m*h+l*o-d*a,e[t+3]=m*_-l*a-d*o-f*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,c=e._order,l=Math.cos,d=Math.sin,f=l(n/2),m=l(r/2),a=l(s/2),o=d(n/2),h=d(r/2),_=d(s/2);switch(c){case"XYZ":this._x=o*m*a+f*h*_,this._y=f*h*a-o*m*_,this._z=f*m*_+o*h*a,this._w=f*m*a-o*h*_;break;case"YXZ":this._x=o*m*a+f*h*_,this._y=f*h*a-o*m*_,this._z=f*m*_-o*h*a,this._w=f*m*a+o*h*_;break;case"ZXY":this._x=o*m*a-f*h*_,this._y=f*h*a+o*m*_,this._z=f*m*_+o*h*a,this._w=f*m*a-o*h*_;break;case"ZYX":this._x=o*m*a-f*h*_,this._y=f*h*a+o*m*_,this._z=f*m*_-o*h*a,this._w=f*m*a+o*h*_;break;case"YZX":this._x=o*m*a+f*h*_,this._y=f*h*a+o*m*_,this._z=f*m*_-o*h*a,this._w=f*m*a-o*h*_;break;case"XZY":this._x=o*m*a-f*h*_,this._y=f*h*a-o*m*_,this._z=f*m*_+o*h*a,this._w=f*m*a+o*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],c=t[1],l=t[5],d=t[9],f=t[2],m=t[6],a=t[10],o=n+l+a;if(o>0){const h=.5/Math.sqrt(o+1);this._w=.25/h,this._x=(m-d)*h,this._y=(s-f)*h,this._z=(c-r)*h}else if(n>l&&n>a){const h=2*Math.sqrt(1+n-l-a);this._w=(m-d)/h,this._x=.25*h,this._y=(r+c)/h,this._z=(s+f)/h}else if(l>a){const h=2*Math.sqrt(1+l-n-a);this._w=(s-f)/h,this._x=(r+c)/h,this._y=.25*h,this._z=(d+m)/h}else{const h=2*Math.sqrt(1+a-n-l);this._w=(c-r)/h,this._x=(s+f)/h,this._y=(d+m)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,c=e._w,l=t._x,d=t._y,f=t._z,m=t._w;return this._x=n*m+c*l+r*f-s*d,this._y=r*m+c*d+s*l-n*f,this._z=s*m+c*f+n*d-r*l,this._w=c*m-n*l-r*d-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const d=1-l*l;if(d<=Number.EPSILON){const h=1-t;return this._w=h*c+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,l),a=Math.sin((1-t)*m)/f,o=Math.sin(t*m)/f;return this._w=c*a+this._w*o,this._x=n*a+this._x*o,this._y=r*a+this._y*o,this._z=s*a+this._z*o,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,c=e.y,l=e.z,d=e.w,f=2*(c*r-l*n),m=2*(l*t-s*r),a=2*(s*n-c*t);return this.x=t+d*f+c*a-l*m,this.y=n+d*m+l*f-s*a,this.z=r+d*a+s*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,c=t.x,l=t.y,d=t.z;return this.x=r*d-s*l,this.y=s*c-n*d,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lr.copy(this).projectOnVector(e),this.sub(Lr)}reflect(e){return this.sub(Lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new D,ma=new Ri;class Ci{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=s.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,It):It.fromBufferAttribute(s,c),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ii.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ii.copy(n.boundingBox)),Ii.applyMatrix4(e.matrixWorld),this.union(Ii)}const r=e.children;for(let s=0,c=r.length;s<c;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Ui.subVectors(this.max,vi),Gn.subVectors(e.a,vi),Hn.subVectors(e.b,vi),Vn.subVectors(e.c,vi),sn.subVectors(Hn,Gn),an.subVectors(Vn,Hn),Sn.subVectors(Gn,Vn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-Sn.z,Sn.y,sn.z,0,-sn.x,an.z,0,-an.x,Sn.z,0,-Sn.x,-sn.y,sn.x,0,-an.y,an.x,0,-Sn.y,Sn.x,0];return!Dr(t,Gn,Hn,Vn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!Dr(t,Gn,Hn,Vn,Ui))?!1:(Ni.crossVectors(sn,an),t=[Ni.x,Ni.y,Ni.z],Dr(t,Gn,Hn,Vn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new D,new D,new D,new D,new D,new D,new D,new D],It=new D,Ii=new Ci,Gn=new D,Hn=new D,Vn=new D,sn=new D,an=new D,Sn=new D,vi=new D,Ui=new D,Ni=new D,En=new D;function Dr(i,e,t,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){En.fromArray(i,s);const l=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),d=e.dot(En),f=t.dot(En),m=n.dot(En);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>l)return!1}return!0}const tc=new Ci,xi=new D,Ir=new D;class xs{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,c=e.length;s<c;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Ir)),this.expandByPoint(xi.copy(e.center).sub(Ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new D,Ur=new D,Fi=new D,on=new D,Nr=new D,Oi=new D,Fr=new D;class Eo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ur.copy(e).add(t).multiplyScalar(.5),Fi.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Ur);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Fi),l=on.dot(this.direction),d=-on.dot(Fi),f=on.lengthSq(),m=Math.abs(1-c*c);let a,o,h,_;if(m>0)if(a=c*d-l,o=c*l-d,_=s*m,a>=0)if(o>=-_)if(o<=_){const g=1/m;a*=g,o*=g,h=a*(a+c*o+2*l)+o*(c*a+o+2*d)+f}else o=s,a=Math.max(0,-(c*o+l)),h=-a*a+o*(o+2*d)+f;else o=-s,a=Math.max(0,-(c*o+l)),h=-a*a+o*(o+2*d)+f;else o<=-_?(a=Math.max(0,-(-c*s+l)),o=a>0?-s:Math.min(Math.max(-s,-d),s),h=-a*a+o*(o+2*d)+f):o<=_?(a=0,o=Math.min(Math.max(-s,-d),s),h=o*(o+2*d)+f):(a=Math.max(0,-(c*s+l)),o=a>0?s:Math.min(Math.max(-s,-d),s),h=-a*a+o*(o+2*d)+f);else o=c>0?-s:s,a=Math.max(0,-(c*o+l)),h=-a*a+o*(o+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,a),r&&r.copy(Ur).addScaledVector(Fi,o),h}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),r=$t.dot($t)-n*n,s=e.radius*e.radius;if(r>s)return null;const c=Math.sqrt(s-r),l=n-c,d=n+c;return d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,c,l,d;const f=1/this.direction.x,m=1/this.direction.y,a=1/this.direction.z,o=this.origin;return f>=0?(n=(e.min.x-o.x)*f,r=(e.max.x-o.x)*f):(n=(e.max.x-o.x)*f,r=(e.min.x-o.x)*f),m>=0?(s=(e.min.y-o.y)*m,c=(e.max.y-o.y)*m):(s=(e.max.y-o.y)*m,c=(e.min.y-o.y)*m),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),a>=0?(l=(e.min.z-o.z)*a,d=(e.max.z-o.z)*a):(l=(e.max.z-o.z)*a,d=(e.min.z-o.z)*a),n>d||l>r)||((l>n||n!==n)&&(n=l),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,r,s){Nr.subVectors(t,e),Oi.subVectors(n,e),Fr.crossVectors(Nr,Oi);let c=this.direction.dot(Fr),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;on.subVectors(this.origin,e);const d=l*this.direction.dot(Oi.crossVectors(on,Oi));if(d<0)return null;const f=l*this.direction.dot(Nr.cross(on));if(f<0||d+f>c)return null;const m=-l*on.dot(Fr);return m<0?null:this.at(m/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,s,c,l,d,f,m,a,o,h,_,g,p){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,l,d,f,m,a,o,h,_,g,p)}set(e,t,n,r,s,c,l,d,f,m,a,o,h,_,g,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=c,u[9]=l,u[13]=d,u[2]=f,u[6]=m,u[10]=a,u[14]=o,u[3]=h,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/kn.setFromMatrixColumn(e,0).length(),s=1/kn.setFromMatrixColumn(e,1).length(),c=1/kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,c=Math.cos(n),l=Math.sin(n),d=Math.cos(r),f=Math.sin(r),m=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const o=c*m,h=c*a,_=l*m,g=l*a;t[0]=d*m,t[4]=-d*a,t[8]=f,t[1]=h+_*f,t[5]=o-g*f,t[9]=-l*d,t[2]=g-o*f,t[6]=_+h*f,t[10]=c*d}else if(e.order==="YXZ"){const o=d*m,h=d*a,_=f*m,g=f*a;t[0]=o+g*l,t[4]=_*l-h,t[8]=c*f,t[1]=c*a,t[5]=c*m,t[9]=-l,t[2]=h*l-_,t[6]=g+o*l,t[10]=c*d}else if(e.order==="ZXY"){const o=d*m,h=d*a,_=f*m,g=f*a;t[0]=o-g*l,t[4]=-c*a,t[8]=_+h*l,t[1]=h+_*l,t[5]=c*m,t[9]=g-o*l,t[2]=-c*f,t[6]=l,t[10]=c*d}else if(e.order==="ZYX"){const o=c*m,h=c*a,_=l*m,g=l*a;t[0]=d*m,t[4]=_*f-h,t[8]=o*f+g,t[1]=d*a,t[5]=g*f+o,t[9]=h*f-_,t[2]=-f,t[6]=l*d,t[10]=c*d}else if(e.order==="YZX"){const o=c*d,h=c*f,_=l*d,g=l*f;t[0]=d*m,t[4]=g-o*a,t[8]=_*a+h,t[1]=a,t[5]=c*m,t[9]=-l*m,t[2]=-f*m,t[6]=h*a+_,t[10]=o-g*a}else if(e.order==="XZY"){const o=c*d,h=c*f,_=l*d,g=l*f;t[0]=d*m,t[4]=-a,t[8]=f*m,t[1]=o*a+g,t[5]=c*m,t[9]=h*a-_,t[2]=_*a-h,t[6]=l*m,t[10]=g*a+o}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nc,e,ic)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),ln.crossVectors(n,wt),ln.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),ln.crossVectors(n,wt)),ln.normalize(),Bi.crossVectors(wt,ln),r[0]=ln.x,r[4]=Bi.x,r[8]=wt.x,r[1]=ln.y,r[5]=Bi.y,r[9]=wt.y,r[2]=ln.z,r[6]=Bi.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],l=n[4],d=n[8],f=n[12],m=n[1],a=n[5],o=n[9],h=n[13],_=n[2],g=n[6],p=n[10],u=n[14],y=n[3],x=n[7],E=n[11],C=n[15],w=r[0],A=r[4],L=r[8],O=r[12],v=r[1],b=r[5],q=r[9],$=r[13],R=r[2],X=r[6],k=r[10],K=r[14],W=r[3],j=r[7],Z=r[11],re=r[15];return s[0]=c*w+l*v+d*R+f*W,s[4]=c*A+l*b+d*X+f*j,s[8]=c*L+l*q+d*k+f*Z,s[12]=c*O+l*$+d*K+f*re,s[1]=m*w+a*v+o*R+h*W,s[5]=m*A+a*b+o*X+h*j,s[9]=m*L+a*q+o*k+h*Z,s[13]=m*O+a*$+o*K+h*re,s[2]=_*w+g*v+p*R+u*W,s[6]=_*A+g*b+p*X+u*j,s[10]=_*L+g*q+p*k+u*Z,s[14]=_*O+g*$+p*K+u*re,s[3]=y*w+x*v+E*R+C*W,s[7]=y*A+x*b+E*X+C*j,s[11]=y*L+x*q+E*k+C*Z,s[15]=y*O+x*$+E*K+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],c=e[1],l=e[5],d=e[9],f=e[13],m=e[2],a=e[6],o=e[10],h=e[14],_=e[3],g=e[7],p=e[11],u=e[15];return _*(+s*d*a-r*f*a-s*l*o+n*f*o+r*l*h-n*d*h)+g*(+t*d*h-t*f*o+s*c*o-r*c*h+r*f*m-s*d*m)+p*(+t*f*a-t*l*h-s*c*a+n*c*h+s*l*m-n*f*m)+u*(-r*l*m-t*d*a+t*l*o+r*c*a-n*c*o+n*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],d=e[6],f=e[7],m=e[8],a=e[9],o=e[10],h=e[11],_=e[12],g=e[13],p=e[14],u=e[15],y=a*p*f-g*o*f+g*d*h-l*p*h-a*d*u+l*o*u,x=_*o*f-m*p*f-_*d*h+c*p*h+m*d*u-c*o*u,E=m*g*f-_*a*f+_*l*h-c*g*h-m*l*u+c*a*u,C=_*a*d-m*g*d-_*l*o+c*g*o+m*l*p-c*a*p,w=t*y+n*x+r*E+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(g*o*s-a*p*s-g*r*h+n*p*h+a*r*u-n*o*u)*A,e[2]=(l*p*s-g*d*s+g*r*f-n*p*f-l*r*u+n*d*u)*A,e[3]=(a*d*s-l*o*s-a*r*f+n*o*f+l*r*h-n*d*h)*A,e[4]=x*A,e[5]=(m*p*s-_*o*s+_*r*h-t*p*h-m*r*u+t*o*u)*A,e[6]=(_*d*s-c*p*s-_*r*f+t*p*f+c*r*u-t*d*u)*A,e[7]=(c*o*s-m*d*s+m*r*f-t*o*f-c*r*h+t*d*h)*A,e[8]=E*A,e[9]=(_*a*s-m*g*s-_*n*h+t*g*h+m*n*u-t*a*u)*A,e[10]=(c*g*s-_*l*s+_*n*f-t*g*f-c*n*u+t*l*u)*A,e[11]=(m*l*s-c*a*s-m*n*f+t*a*f+c*n*h-t*l*h)*A,e[12]=C*A,e[13]=(m*g*r-_*a*r+_*n*o-t*g*o-m*n*p+t*a*p)*A,e[14]=(_*l*r-c*g*r-_*n*d+t*g*d+c*n*p-t*l*p)*A,e[15]=(c*a*r-m*l*r+m*n*d-t*a*d-c*n*o+t*l*o)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,c=e.x,l=e.y,d=e.z,f=s*c,m=s*l;return this.set(f*c+n,f*l-r*d,f*d+r*l,0,f*l+r*d,m*l+n,m*d-r*c,0,f*d-r*l,m*d+r*c,s*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,c){return this.set(1,n,s,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,c=t._y,l=t._z,d=t._w,f=s+s,m=c+c,a=l+l,o=s*f,h=s*m,_=s*a,g=c*m,p=c*a,u=l*a,y=d*f,x=d*m,E=d*a,C=n.x,w=n.y,A=n.z;return r[0]=(1-(g+u))*C,r[1]=(h+E)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(h-E)*w,r[5]=(1-(o+u))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(_+x)*A,r[9]=(p-y)*A,r[10]=(1-(o+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=kn.set(r[0],r[1],r[2]).length();const c=kn.set(r[4],r[5],r[6]).length(),l=kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ut.copy(this);const f=1/s,m=1/c,a=1/l;return Ut.elements[0]*=f,Ut.elements[1]*=f,Ut.elements[2]*=f,Ut.elements[4]*=m,Ut.elements[5]*=m,Ut.elements[6]*=m,Ut.elements[8]*=a,Ut.elements[9]*=a,Ut.elements[10]*=a,t.setFromRotationMatrix(Ut),n.x=s,n.y=c,n.z=l,this}makePerspective(e,t,n,r,s,c,l=nn){const d=this.elements,f=2*s/(t-e),m=2*s/(n-r),a=(t+e)/(t-e),o=(n+r)/(n-r);let h,_;if(l===nn)h=-(c+s)/(c-s),_=-2*c*s/(c-s);else if(l===or)h=-c/(c-s),_=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=f,d[4]=0,d[8]=a,d[12]=0,d[1]=0,d[5]=m,d[9]=o,d[13]=0,d[2]=0,d[6]=0,d[10]=h,d[14]=_,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,s,c,l=nn){const d=this.elements,f=1/(t-e),m=1/(n-r),a=1/(c-s),o=(t+e)*f,h=(n+r)*m;let _,g;if(l===nn)_=(c+s)*a,g=-2*a;else if(l===or)_=s*a,g=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-o,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-h,d[2]=0,d[6]=0,d[10]=g,d[14]=-_,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kn=new D,Ut=new Qe,nc=new D(0,0,0),ic=new D(1,1,1),ln=new D,Bi=new D,wt=new D,_a=new Qe,ga=new Ri;class Gt{constructor(e=0,t=0,n=0,r=Gt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],c=r[4],l=r[8],d=r[1],f=r[5],m=r[9],a=r[2],o=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,h),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(o,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(-a,h),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(o,h),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(o,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-m,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _a.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ga.setFromEuler(this),this.setFromQuaternion(ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gt.DEFAULT_ORDER="XYZ";class Ms{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rc=0;const va=new D,Wn=new Ri,Kt=new Qe,zi=new D,Mi=new D,sc=new D,ac=new Ri,xa=new D(1,0,0),Ma=new D(0,1,0),ya=new D(0,0,1),oc={type:"added"},lc={type:"removed"},Or={type:"childadded",child:null},Br={type:"childremoved",child:null};class dt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new D,t=new Gt,n=new Ri,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ue}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(Ma,e)}rotateZ(e){return this.rotateOnAxis(ya,e)}translateOnAxis(e,t){return va.copy(e).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(Ma,e)}translateZ(e){return this.translateOnAxis(ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zi.copy(e):zi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(Mi,zi,this.up):Kt.lookAt(zi,Mi,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Wn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oc),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lc),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,sc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,ac,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const a=d[f];s(e.shapes,a)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,f=this.material.length;d<f;d++)l.push(s(e.materials,this.material[d]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];r.animations.push(s(e.animations,d))}}if(t){const l=c(e.geometries),d=c(e.materials),f=c(e.textures),m=c(e.images),a=c(e.shapes),o=c(e.skeletons),h=c(e.animations),_=c(e.nodes);l.length>0&&(n.geometries=l),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),a.length>0&&(n.shapes=a),o.length>0&&(n.skeletons=o),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=r,n;function c(l){const d=[];for(const f in l){const m=l[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new D(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new D,Zt=new D,zr=new D,Jt=new D,Xn=new D,qn=new D,Sa=new D,Gr=new D,Hr=new D,Vr=new D;class Bt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nt.subVectors(e,t),r.cross(Nt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nt.subVectors(r,t),Zt.subVectors(n,t),zr.subVectors(e,t);const c=Nt.dot(Nt),l=Nt.dot(Zt),d=Nt.dot(zr),f=Zt.dot(Zt),m=Zt.dot(zr),a=c*f-l*l;if(a===0)return s.set(0,0,0),null;const o=1/a,h=(f*d-l*m)*o,_=(c*m-l*d)*o;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getInterpolation(e,t,n,r,s,c,l,d){return this.getBarycoord(e,t,n,r,Jt)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(s,Jt.x),d.addScaledVector(c,Jt.y),d.addScaledVector(l,Jt.z),d)}static isFrontFacing(e,t,n,r){return Nt.subVectors(n,t),Zt.subVectors(e,t),Nt.cross(Zt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Nt.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let c,l;Xn.subVectors(r,n),qn.subVectors(s,n),Gr.subVectors(e,n);const d=Xn.dot(Gr),f=qn.dot(Gr);if(d<=0&&f<=0)return t.copy(n);Hr.subVectors(e,r);const m=Xn.dot(Hr),a=qn.dot(Hr);if(m>=0&&a<=m)return t.copy(r);const o=d*a-m*f;if(o<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(n).addScaledVector(Xn,c);Vr.subVectors(e,s);const h=Xn.dot(Vr),_=qn.dot(Vr);if(_>=0&&h<=_)return t.copy(s);const g=h*f-d*_;if(g<=0&&f>=0&&_<=0)return l=f/(f-_),t.copy(n).addScaledVector(qn,l);const p=m*_-h*a;if(p<=0&&a-m>=0&&h-_>=0)return Sa.subVectors(s,r),l=(a-m)/(a-m+(h-_)),t.copy(r).addScaledVector(Sa,l);const u=1/(p+g+o);return c=g*u,l=o*u,t.copy(n).addScaledVector(Xn,c).addScaledVector(qn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const To={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=jl(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=kr(c,s,e+1/3),this.g=kr(c,s,e),this.b=kr(c,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=To[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return qe.fromWorkingColorSpace(mt.copy(this),e),Math.round(Tt(mt.r*255,0,255))*65536+Math.round(Tt(mt.g*255,0,255))*256+Math.round(Tt(mt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,c=Math.max(n,r,s),l=Math.min(n,r,s);let d,f;const m=(l+c)/2;if(l===c)d=0,f=0;else{const a=c-l;switch(f=m<=.5?a/(c+l):a/(2-c-l),c){case n:d=(r-s)/a+(r<s?6:0);break;case r:d=(s-n)/a+2;break;case s:d=(n-r)/a+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=kt){qe.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Gi);const n=wr(cn.h,Gi.h,t),r=wr(cn.s,Gi.s,t),s=wr(cn.l,Gi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new He;He.NAMES=To;let cc=0;class On extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=ai,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ns,this.blendDst=is,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bn,this.stencilZFail=Bn,this.stencilZPass=Bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ns&&(n.blendSrc=this.blendSrc),this.blendDst!==is&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const l in s){const d=s[l];delete d.metadata,c.push(d)}return c}if(t){const s=r(e.textures),c=r(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cr extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ms,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new D,Hi=new Se;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ls,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix3(e),this.setXY(t,Hi.x,Hi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ls&&(e.usage=this.usage),e}}class bo extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ao extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uc=0;const Lt=new Qe,Wr=new dt,Yn=new D,Rt=new Ci,yi=new Ci,lt=new D;class Ht extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vo(e)?Ao:bo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const l=t[s];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(lt.addVectors(Rt.min,yi.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,yi.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(yi.min),Rt.expandByPoint(yi.max))}Rt.getCenter(n);let r=0;for(let s=0,c=e.count;s<c;s++)lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(lt));if(t)for(let s=0,c=t.length;s<c;s++){const l=t[s],d=this.morphTargetsRelative;for(let f=0,m=l.count;f<m;f++)lt.fromBufferAttribute(l,f),d&&(Yn.fromBufferAttribute(e,f),lt.add(Yn)),r=Math.max(r,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],d=[];for(let L=0;L<n.count;L++)l[L]=new D,d[L]=new D;const f=new D,m=new D,a=new D,o=new Se,h=new Se,_=new Se,g=new D,p=new D;function u(L,O,v){f.fromBufferAttribute(n,L),m.fromBufferAttribute(n,O),a.fromBufferAttribute(n,v),o.fromBufferAttribute(s,L),h.fromBufferAttribute(s,O),_.fromBufferAttribute(s,v),m.sub(f),a.sub(f),h.sub(o),_.sub(o);const b=1/(h.x*_.y-_.x*h.y);isFinite(b)&&(g.copy(m).multiplyScalar(_.y).addScaledVector(a,-h.y).multiplyScalar(b),p.copy(a).multiplyScalar(h.x).addScaledVector(m,-_.x).multiplyScalar(b),l[L].add(g),l[O].add(g),l[v].add(g),d[L].add(p),d[O].add(p),d[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,O=y.length;L<O;++L){const v=y[L],b=v.start,q=v.count;for(let $=b,R=b+q;$<R;$+=3)u(e.getX($+0),e.getX($+1),e.getX($+2))}const x=new D,E=new D,C=new D,w=new D;function A(L){C.fromBufferAttribute(r,L),w.copy(C);const O=l[L];x.copy(O),x.sub(C.multiplyScalar(C.dot(O))).normalize(),E.crossVectors(w,O);const b=E.dot(d[L])<0?-1:1;c.setXYZW(L,x.x,x.y,x.z,b)}for(let L=0,O=y.length;L<O;++L){const v=y[L],b=v.start,q=v.count;for(let $=b,R=b+q;$<R;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let o=0,h=n.count;o<h;o++)n.setXYZ(o,0,0,0);const r=new D,s=new D,c=new D,l=new D,d=new D,f=new D,m=new D,a=new D;if(e)for(let o=0,h=e.count;o<h;o+=3){const _=e.getX(o+0),g=e.getX(o+1),p=e.getX(o+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),c.fromBufferAttribute(t,p),m.subVectors(c,s),a.subVectors(r,s),m.cross(a),l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,g),f.fromBufferAttribute(n,p),l.add(m),d.add(m),f.add(m),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,d.x,d.y,d.z),n.setXYZ(p,f.x,f.y,f.z)}else for(let o=0,h=t.count;o<h;o+=3)r.fromBufferAttribute(t,o+0),s.fromBufferAttribute(t,o+1),c.fromBufferAttribute(t,o+2),m.subVectors(c,s),a.subVectors(r,s),m.cross(a),n.setXYZ(o+0,m.x,m.y,m.z),n.setXYZ(o+1,m.x,m.y,m.z),n.setXYZ(o+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(l,d){const f=l.array,m=l.itemSize,a=l.normalized,o=new f.constructor(d.length*m);let h=0,_=0;for(let g=0,p=d.length;g<p;g++){l.isInterleavedBufferAttribute?h=d[g]*l.data.stride+l.offset:h=d[g]*m;for(let u=0;u<m;u++)o[_++]=f[h++]}return new zt(o,m,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,r=this.attributes;for(const l in r){const d=r[l],f=e(d,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const d=[],f=s[l];for(let m=0,a=f.length;m<a;m++){const o=f[m],h=e(o,n);d.push(h)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,d=c.length;l<d;l++){const f=c[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const r={};let s=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let a=0,o=f.length;a<o;a++){const h=f[a];m.push(h.toJSON(e.data))}m.length>0&&(r[d]=m,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const m=r[f];this.setAttribute(f,m.clone(t))}const s=e.morphAttributes;for(const f in s){const m=[],a=s[f];for(let o=0,h=a.length;o<h;o++)m.push(a[o].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const a=c[f];this.addGroup(a.start,a.count,a.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ea=new Qe,Tn=new Eo,Vi=new xs,Ta=new D,jn=new D,$n=new D,Kn=new D,Xr=new D,ki=new D,Wi=new Se,Xi=new Se,qi=new Se,ba=new D,Aa=new D,wa=new D,Yi=new D,ji=new D;class et extends dt{constructor(e=new Ht,t=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){ki.set(0,0,0);for(let d=0,f=s.length;d<f;d++){const m=l[d],a=s[d];m!==0&&(Xr.fromBufferAttribute(a,e),c?ki.addScaledVector(Xr,m):ki.addScaledVector(Xr.sub(t),m))}t.add(ki)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(s),Tn.copy(e.ray).recast(e.near),!(Vi.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Vi,Ta)===null||Tn.origin.distanceToSquared(Ta)>(e.far-e.near)**2))&&(Ea.copy(s).invert(),Tn.copy(e.ray).applyMatrix4(Ea),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,c=this.material,l=s.index,d=s.attributes.position,f=s.attributes.uv,m=s.attributes.uv1,a=s.attributes.normal,o=s.groups,h=s.drawRange;if(l!==null)if(Array.isArray(c))for(let _=0,g=o.length;_<g;_++){const p=o[_],u=c[p.materialIndex],y=Math.max(p.start,h.start),x=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let E=y,C=x;E<C;E+=3){const w=l.getX(E),A=l.getX(E+1),L=l.getX(E+2);r=$i(this,u,e,n,f,m,a,w,A,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=_,u=g;p<u;p+=3){const y=l.getX(p),x=l.getX(p+1),E=l.getX(p+2);r=$i(this,c,e,n,f,m,a,y,x,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(c))for(let _=0,g=o.length;_<g;_++){const p=o[_],u=c[p.materialIndex],y=Math.max(p.start,h.start),x=Math.min(d.count,Math.min(p.start+p.count,h.start+h.count));for(let E=y,C=x;E<C;E+=3){const w=E,A=E+1,L=E+2;r=$i(this,u,e,n,f,m,a,w,A,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(d.count,h.start+h.count);for(let p=_,u=g;p<u;p+=3){const y=p,x=p+1,E=p+2;r=$i(this,c,e,n,f,m,a,y,x,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function hc(i,e,t,n,r,s,c,l){let d;if(e.side===bt?d=n.intersectTriangle(c,s,r,!0,l):d=n.intersectTriangle(r,s,c,e.side===gn,l),d===null)return null;ji.copy(l),ji.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(ji);return f<t.near||f>t.far?null:{distance:f,point:ji.clone(),object:i}}function $i(i,e,t,n,r,s,c,l,d,f){i.getVertexPosition(l,jn),i.getVertexPosition(d,$n),i.getVertexPosition(f,Kn);const m=hc(i,e,t,n,jn,$n,Kn,Yi);if(m){r&&(Wi.fromBufferAttribute(r,l),Xi.fromBufferAttribute(r,d),qi.fromBufferAttribute(r,f),m.uv=Bt.getInterpolation(Yi,jn,$n,Kn,Wi,Xi,qi,new Se)),s&&(Wi.fromBufferAttribute(s,l),Xi.fromBufferAttribute(s,d),qi.fromBufferAttribute(s,f),m.uv1=Bt.getInterpolation(Yi,jn,$n,Kn,Wi,Xi,qi,new Se)),c&&(ba.fromBufferAttribute(c,l),Aa.fromBufferAttribute(c,d),wa.fromBufferAttribute(c,f),m.normal=Bt.getInterpolation(Yi,jn,$n,Kn,ba,Aa,wa,new D),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const a={a:l,b:d,c:f,normal:new D,materialIndex:0};Bt.getNormal(jn,$n,Kn,a.normal),m.face=a}return m}class rn extends Ht{constructor(e=1,t=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const l=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const d=[],f=[],m=[],a=[];let o=0,h=0;_("z","y","x",-1,-1,n,t,e,c,s,0),_("z","y","x",1,-1,n,t,-e,c,s,1),_("x","z","y",1,1,e,n,t,r,c,2),_("x","z","y",1,-1,e,n,-t,r,c,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(d),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(m,3)),this.setAttribute("uv",new gt(a,2));function _(g,p,u,y,x,E,C,w,A,L,O){const v=E/A,b=C/L,q=E/2,$=C/2,R=w/2,X=A+1,k=L+1;let K=0,W=0;const j=new D;for(let Z=0;Z<k;Z++){const re=Z*b-$;for(let he=0;he<X;he++){const Ce=he*v-q;j[g]=Ce*y,j[p]=re*x,j[u]=R,f.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[u]=w>0?1:-1,m.push(j.x,j.y,j.z),a.push(he/A),a.push(1-Z/L),K+=1}}for(let Z=0;Z<L;Z++)for(let re=0;re<A;re++){const he=o+re+X*Z,Ce=o+re+X*(Z+1),H=o+(re+1)+X*(Z+1),Q=o+(re+1)+X*Z;d.push(he,Ce,Q),d.push(Ce,H,Q),W+=6}l.addGroup(h,W,O),h+=W,o+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function dc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wo(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}const fc={clone:di,merge:Mt};var pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pc,this.fragmentShader=mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=dc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ro extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const un=new D,Ra=new Se,Ca=new Se;class Dt extends Ro{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,Ra,Ca),t.subVectors(Ca,Ra)}setViewOffset(e,t,n,r,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;s+=c.offsetX*r/d,t-=c.offsetY*n/f,r*=c.width/d,n*=c.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=-90,Jn=1;class _c extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dt(Zn,Jn,e,t);r.layers=this.layers,this.add(r);const s=new Dt(Zn,Jn,e,t);s.layers=this.layers,this.add(s);const c=new Dt(Zn,Jn,e,t);c.layers=this.layers,this.add(c);const l=new Dt(Zn,Jn,e,t);l.layers=this.layers,this.add(l);const d=new Dt(Zn,Jn,e,t);d.layers=this.layers,this.add(d);const f=new Dt(Zn,Jn,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,c,l,d]=t;for(const f of t)this.remove(f);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,l,d,f,m]=this.children,a=e.getRenderTarget(),o=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,m),e.setRenderTarget(a,o,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Co extends St{constructor(e,t,n,r,s,c,l,d,f,m){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,r,s,c,l,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gc extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Co(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rn(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:fn});s.uniforms.tEquirect.value=t;const c=new et(r,s),l=t.minFilter;return t.minFilter===In&&(t.minFilter=Et),new _c(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(s)}}const qr=new D,vc=new D,xc=new Ue;class Rn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=qr.subVectors(n,t).cross(vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xc.getNormalMatrix(e),r=this.coplanarPoint(qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new xs,Ki=new D;class ys{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,c=new Rn){this.planes=[e,t,n,r,s,c]}set(e,t,n,r,s,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn){const n=this.planes,r=e.elements,s=r[0],c=r[1],l=r[2],d=r[3],f=r[4],m=r[5],a=r[6],o=r[7],h=r[8],_=r[9],g=r[10],p=r[11],u=r[12],y=r[13],x=r[14],E=r[15];if(n[0].setComponents(d-s,o-f,p-h,E-u).normalize(),n[1].setComponents(d+s,o+f,p+h,E+u).normalize(),n[2].setComponents(d+c,o+m,p+_,E+y).normalize(),n[3].setComponents(d-c,o-m,p-_,E-y).normalize(),n[4].setComponents(d-l,o-a,p-g,E-x).normalize(),t===nn)n[5].setComponents(d+l,o+a,p+g,E+x).normalize();else if(t===or)n[5].setComponents(l,a,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(e){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ki.x=r.normal.x>0?e.max.x:e.min.x,Ki.y=r.normal.y>0?e.max.y:e.min.y,Ki.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Po(){let i=null,e=!1,t=null,n=null;function r(s,c){t(s,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Mc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,m){const a=f.array,o=f.usage,h=a.byteLength,_=i.createBuffer();i.bindBuffer(m,_),i.bufferData(m,a,o),f.onUploadCallback();let g;if(a instanceof Float32Array)g=i.FLOAT;else if(a instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)g=i.SHORT;else if(a instanceof Uint32Array)g=i.UNSIGNED_INT;else if(a instanceof Int32Array)g=i.INT;else if(a instanceof Int8Array)g=i.BYTE;else if(a instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:_,type:g,bytesPerElement:a.BYTES_PER_ELEMENT,version:f.version,size:h}}function s(f,m,a){const o=m.array,h=m._updateRange,_=m.updateRanges;if(i.bindBuffer(a,f),h.count===-1&&_.length===0&&i.bufferSubData(a,0,o),_.length!==0){for(let g=0,p=_.length;g<p;g++){const u=_[g];t?i.bufferSubData(a,u.start*o.BYTES_PER_ELEMENT,o,u.start,u.count):i.bufferSubData(a,u.start*o.BYTES_PER_ELEMENT,o.subarray(u.start,u.start+u.count))}m.clearUpdateRanges()}h.count!==-1&&(t?i.bufferSubData(a,h.offset*o.BYTES_PER_ELEMENT,o,h.offset,h.count):i.bufferSubData(a,h.offset*o.BYTES_PER_ELEMENT,o.subarray(h.offset,h.offset+h.count)),h.count=-1),m.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=n.get(f);m&&(i.deleteBuffer(m.buffer),n.delete(f))}function d(f,m){if(f.isGLBufferAttribute){const o=n.get(f);(!o||o.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const a=n.get(f);if(a===void 0)n.set(f,r(f,m));else if(a.version<f.version){if(a.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(a.buffer,f,m),a.version=f.version}}return{get:c,remove:l,update:d}}class fi extends Ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,c=t/2,l=Math.floor(n),d=Math.floor(r),f=l+1,m=d+1,a=e/l,o=t/d,h=[],_=[],g=[],p=[];for(let u=0;u<m;u++){const y=u*o-c;for(let x=0;x<f;x++){const E=x*a-s;_.push(E,-y,0),g.push(0,0,1),p.push(x/l),p.push(1-u/d)}}for(let u=0;u<d;u++)for(let y=0;y<l;y++){const x=y+f*u,E=y+f*(u+1),C=y+1+f*(u+1),w=y+1+f*u;h.push(x,E,w),h.push(E,C,w)}this.setIndex(h),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var yc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sc=`#ifdef USE_ALPHAHASH
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
#endif`,Ec=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ac=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wc=`#ifdef USE_AOMAP
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
#endif`,Rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ic=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uc=`#ifdef USE_IRIDESCENCE
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
#endif`,Nc=`#ifdef USE_BUMPMAP
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
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wc=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Xc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qc=`vec3 transformedNormal = objectNormal;
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
#endif`,Yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$c=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qc=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lu=`#ifdef USE_GRADIENTMAP
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
}`,cu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
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
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,yu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Su=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lu=`#if defined( USE_POINTS_UV )
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
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
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
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
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
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
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
#endif`,hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_h=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sh=`uniform sampler2D t2D;
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
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ah=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wh=`#include <common>
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
}`,Rh=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ch=`#define DISTANCE
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
}`,Ph=`#define DISTANCE
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
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`uniform float scale;
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
}`,Uh=`uniform vec3 diffuse;
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
}`,Nh=`#include <common>
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
}`,Fh=`uniform vec3 diffuse;
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
}`,Oh=`#define LAMBERT
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
}`,Bh=`#define LAMBERT
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
}`,zh=`#define MATCAP
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
}`,Gh=`#define MATCAP
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
}`,Hh=`#define NORMAL
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
}`,Vh=`#define NORMAL
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
}`,kh=`#define PHONG
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
}`,Wh=`#define PHONG
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
}`,Xh=`#define STANDARD
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
}`,qh=`#define STANDARD
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
}`,Yh=`#define TOON
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
}`,jh=`#define TOON
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
}`,$h=`uniform float size;
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
}`,Kh=`uniform vec3 diffuse;
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
}`,Zh=`#include <common>
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
}`,Jh=`uniform vec3 color;
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
}`,Qh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ed=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:yc,alphahash_pars_fragment:Sc,alphamap_fragment:Ec,alphamap_pars_fragment:Tc,alphatest_fragment:bc,alphatest_pars_fragment:Ac,aomap_fragment:wc,aomap_pars_fragment:Rc,batching_pars_vertex:Cc,batching_vertex:Pc,begin_vertex:Lc,beginnormal_vertex:Dc,bsdfs:Ic,iridescence_fragment:Uc,bumpmap_pars_fragment:Nc,clipping_planes_fragment:Fc,clipping_planes_pars_fragment:Oc,clipping_planes_pars_vertex:Bc,clipping_planes_vertex:zc,color_fragment:Gc,color_pars_fragment:Hc,color_pars_vertex:Vc,color_vertex:kc,common:Wc,cube_uv_reflection_fragment:Xc,defaultnormal_vertex:qc,displacementmap_pars_vertex:Yc,displacementmap_vertex:jc,emissivemap_fragment:$c,emissivemap_pars_fragment:Kc,colorspace_fragment:Zc,colorspace_pars_fragment:Jc,envmap_fragment:Qc,envmap_common_pars_fragment:eu,envmap_pars_fragment:tu,envmap_pars_vertex:nu,envmap_physical_pars_fragment:pu,envmap_vertex:iu,fog_vertex:ru,fog_pars_vertex:su,fog_fragment:au,fog_pars_fragment:ou,gradientmap_pars_fragment:lu,lightmap_fragment:cu,lightmap_pars_fragment:uu,lights_lambert_fragment:hu,lights_lambert_pars_fragment:du,lights_pars_begin:fu,lights_toon_fragment:mu,lights_toon_pars_fragment:_u,lights_phong_fragment:gu,lights_phong_pars_fragment:vu,lights_physical_fragment:xu,lights_physical_pars_fragment:Mu,lights_fragment_begin:yu,lights_fragment_maps:Su,lights_fragment_end:Eu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:wu,map_fragment:Ru,map_pars_fragment:Cu,map_particle_fragment:Pu,map_particle_pars_fragment:Lu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Iu,morphinstance_vertex:Uu,morphcolor_vertex:Nu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Bu,normal_fragment_begin:zu,normal_fragment_maps:Gu,normal_pars_fragment:Hu,normal_pars_vertex:Vu,normal_vertex:ku,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:ju,opaque_fragment:$u,packing:Ku,premultiplied_alpha_fragment:Zu,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:eh,roughnessmap_fragment:th,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:sh,shadowmask_pars_fragment:ah,skinbase_vertex:oh,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:uh,specularmap_fragment:hh,specularmap_pars_fragment:dh,tonemapping_fragment:fh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:_h,uv_pars_fragment:gh,uv_pars_vertex:vh,uv_vertex:xh,worldpos_vertex:Mh,background_vert:yh,background_frag:Sh,backgroundCube_vert:Eh,backgroundCube_frag:Th,cube_vert:bh,cube_frag:Ah,depth_vert:wh,depth_frag:Rh,distanceRGBA_vert:Ch,distanceRGBA_frag:Ph,equirect_vert:Lh,equirect_frag:Dh,linedashed_vert:Ih,linedashed_frag:Uh,meshbasic_vert:Nh,meshbasic_frag:Fh,meshlambert_vert:Oh,meshlambert_frag:Bh,meshmatcap_vert:zh,meshmatcap_frag:Gh,meshnormal_vert:Hh,meshnormal_frag:Vh,meshphong_vert:kh,meshphong_frag:Wh,meshphysical_vert:Xh,meshphysical_frag:qh,meshtoon_vert:Yh,meshtoon_frag:jh,points_vert:$h,points_frag:Kh,shadow_vert:Zh,shadow_frag:Jh,sprite_vert:Qh,sprite_frag:ed},ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Wt={basic:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Mt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Mt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Mt([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Mt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Mt([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Mt([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Mt([ie.common,ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Mt([ie.lights,ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Wt.physical={uniforms:Mt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Zi={r:0,b:0,g:0},An=new Gt,td=new Qe;function nd(i,e,t,n,r,s,c){const l=new He(0);let d=s===!0?0:1,f,m,a=null,o=0,h=null;function _(p,u){let y=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?g(l,d):x&&x.isColor&&(g(x,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,c):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===hr)?(m===void 0&&(m=new et(new rn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:di(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),An.copy(u.backgroundRotation),An.x*=-1,An.y*=-1,An.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),m.material.uniforms.envMap.value=x,m.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(td.makeRotationFromEuler(An)),m.material.toneMapped=qe.getTransfer(x.colorSpace)!==$e,(a!==x||o!==x.version||h!==i.toneMapping)&&(m.material.needsUpdate=!0,a=x,o=x.version,h=i.toneMapping),m.layers.enableAll(),p.unshift(m,m.geometry,m.material,0,0,null)):x&&x.isTexture&&(f===void 0&&(f=new et(new fi(2,2),new vn({name:"BackgroundMaterial",uniforms:di(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=x,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=qe.getTransfer(x.colorSpace)!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),f.material.uniforms.uvTransform.value.copy(x.matrix),(a!==x||o!==x.version||h!==i.toneMapping)&&(f.material.needsUpdate=!0,a=x,o=x.version,h=i.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null))}function g(p,u){p.getRGB(Zi,wo(i)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,u,c)}return{getClearColor:function(){return l},setClearColor:function(p,u=1){l.set(p),d=u,g(l,d)},getClearAlpha:function(){return d},setClearAlpha:function(p){d=p,g(l,d)},render:_}}function id(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||s!==null,l={},d=p(null);let f=d,m=!1;function a(R,X,k,K,W){let j=!1;if(c){const Z=g(K,k,X);f!==Z&&(f=Z,h(f.object)),j=u(R,K,k,W),j&&y(R,K,k,W)}else{const Z=X.wireframe===!0;(f.geometry!==K.id||f.program!==k.id||f.wireframe!==Z)&&(f.geometry=K.id,f.program=k.id,f.wireframe=Z,j=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||m)&&(m=!1,L(R,X,k,K),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function o(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function h(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function g(R,X,k){const K=k.wireframe===!0;let W=l[R.id];W===void 0&&(W={},l[R.id]=W);let j=W[X.id];j===void 0&&(j={},W[X.id]=j);let Z=j[K];return Z===void 0&&(Z=p(o()),j[K]=Z),Z}function p(R){const X=[],k=[],K=[];for(let W=0;W<r;W++)X[W]=0,k[W]=0,K[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:k,attributeDivisors:K,object:R,attributes:{},index:null}}function u(R,X,k,K){const W=f.attributes,j=X.attributes;let Z=0;const re=k.getAttributes();for(const he in re)if(re[he].location>=0){const H=W[he];let Q=j[he];if(Q===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),H===void 0||H.attribute!==Q||Q&&H.data!==Q.data)return!0;Z++}return f.attributesNum!==Z||f.index!==K}function y(R,X,k,K){const W={},j=X.attributes;let Z=0;const re=k.getAttributes();for(const he in re)if(re[he].location>=0){let H=j[he];H===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(H=R.instanceColor));const Q={};Q.attribute=H,H&&H.data&&(Q.data=H.data),W[he]=Q,Z++}f.attributes=W,f.attributesNum=Z,f.index=K}function x(){const R=f.newAttributes;for(let X=0,k=R.length;X<k;X++)R[X]=0}function E(R){C(R,0)}function C(R,X){const k=f.newAttributes,K=f.enabledAttributes,W=f.attributeDivisors;k[R]=1,K[R]===0&&(i.enableVertexAttribArray(R),K[R]=1),W[R]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,X),W[R]=X)}function w(){const R=f.newAttributes,X=f.enabledAttributes;for(let k=0,K=X.length;k<K;k++)X[k]!==R[k]&&(i.disableVertexAttribArray(k),X[k]=0)}function A(R,X,k,K,W,j,Z){Z===!0?i.vertexAttribIPointer(R,X,k,W,j):i.vertexAttribPointer(R,X,k,K,W,j)}function L(R,X,k,K){if(n.isWebGL2===!1&&(R.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=K.attributes,j=k.getAttributes(),Z=X.defaultAttributeValues;for(const re in j){const he=j[re];if(he.location>=0){let Ce=W[re];if(Ce===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(Ce=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(Ce=R.instanceColor)),Ce!==void 0){const H=Ce.normalized,Q=Ce.itemSize,ue=t.get(Ce);if(ue===void 0)continue;const Te=ue.buffer,_e=ue.type,de=ue.bytesPerElement,We=n.isWebGL2===!0&&(_e===i.INT||_e===i.UNSIGNED_INT||Ce.gpuType===co);if(Ce.isInterleavedBufferAttribute){const be=Ce.data,N=be.stride,ut=Ce.offset;if(be.isInstancedInterleavedBuffer){for(let ve=0;ve<he.locationSize;ve++)C(he.location+ve,be.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ve=0;ve<he.locationSize;ve++)E(he.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let ve=0;ve<he.locationSize;ve++)A(he.location+ve,Q/he.locationSize,_e,H,N*de,(ut+Q/he.locationSize*ve)*de,We)}else{if(Ce.isInstancedBufferAttribute){for(let be=0;be<he.locationSize;be++)C(he.location+be,Ce.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let be=0;be<he.locationSize;be++)E(he.location+be);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let be=0;be<he.locationSize;be++)A(he.location+be,Q/he.locationSize,_e,H,Q*de,Q/he.locationSize*be*de,We)}}else if(Z!==void 0){const H=Z[re];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(he.location,H);break;case 3:i.vertexAttrib3fv(he.location,H);break;case 4:i.vertexAttrib4fv(he.location,H);break;default:i.vertexAttrib1fv(he.location,H)}}}}w()}function O(){q();for(const R in l){const X=l[R];for(const k in X){const K=X[k];for(const W in K)_(K[W].object),delete K[W];delete X[k]}delete l[R]}}function v(R){if(l[R.id]===void 0)return;const X=l[R.id];for(const k in X){const K=X[k];for(const W in K)_(K[W].object),delete K[W];delete X[k]}delete l[R.id]}function b(R){for(const X in l){const k=l[X];if(k[R.id]===void 0)continue;const K=k[R.id];for(const W in K)_(K[W].object),delete K[W];delete k[R.id]}}function q(){$(),m=!0,f!==d&&(f=d,h(f.object))}function $(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:a,reset:q,resetDefaultState:$,dispose:O,releaseStatesOfGeometry:v,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:E,disableUnusedAttributes:w}}function rd(i,e,t,n){const r=n.isWebGL2;let s;function c(m){s=m}function l(m,a){i.drawArrays(s,m,a),t.update(a,s,1)}function d(m,a,o){if(o===0)return;let h,_;if(r)h=i,_="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[_](s,m,a,o),t.update(a,s,o)}function f(m,a,o){if(o===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<o;_++)this.render(m[_],a[_]);else{h.multiDrawArraysWEBGL(s,m,0,a,0,o);let _=0;for(let g=0;g<o;g++)_+=a[g];t.update(_,s,1)}}this.setMode=c,this.render=l,this.renderInstances=d,this.renderMultiDraw=f}function sd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const d=s(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=c||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,a=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),o=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=o>0,E=c||e.has("OES_texture_float"),C=x&&E,w=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:m,maxTextures:a,maxVertexTextures:o,maxTextureSize:h,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:w}}function ad(i){const e=this;let t=null,n=0,r=!1,s=!1;const c=new Rn,l=new Ue,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(a,o){const h=a.length!==0||o||n!==0||r;return r=o,n=a.length,h},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,o){t=m(a,o,0)},this.setState=function(a,o,h){const _=a.clippingPlanes,g=a.clipIntersection,p=a.clipShadows,u=i.get(a);if(!r||_===null||_.length===0||s&&!p)s?m(null):f();else{const y=s?0:n,x=y*4;let E=u.clippingState||null;d.value=E,E=m(_,o,x,h);for(let C=0;C!==x;++C)E[C]=t[C];u.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(a,o,h,_){const g=a!==null?a.length:0;let p=null;if(g!==0){if(p=d.value,_!==!0||p===null){const u=h+g*4,y=o.matrixWorldInverse;l.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,E=h;x!==g;++x,E+=4)c.copy(a[x]).applyMatrix4(y,l),c.normal.toArray(p,E),p[E+3]=c.constant}d.value=p,d.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function od(i){let e=new WeakMap;function t(c,l){return l===rs?c.mapping=ci:l===ss&&(c.mapping=ui),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===rs||l===ss)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new gc(d.height);return f.fromEquirectangularTexture(i,c),e.set(c,f),c.addEventListener("dispose",r),t(f.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Lo extends Ro{constructor(e=-1,t=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,c=n+e,l=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,c=s+f*this.view.width,l-=m*this.view.offsetY,d=l-m*this.view.height}this.projectionMatrix.makeOrthographic(s,c,l,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Pa=[.125,.215,.35,.446,.526,.582],Dn=20,Yr=new Lo,La=new He;let jr=null,$r=0,Kr=0;const Cn=(1+Math.sqrt(5))/2,Qn=1/Cn,Da=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Cn,Qn),new D(0,Cn,-Qn),new D(Qn,0,Cn),new D(-Qn,0,Cn),new D(Cn,Qn,0),new D(-Cn,Qn,0)];class Ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){jr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jr,$r,Kr),e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:wi,format:Ot,colorSpace:xn,depthBuffer:!1},r=Ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ld(s)),this._blurMaterial=cd(s,e,t)}return r}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Yr)}_sceneToCubeUV(e,t,n,r){const l=new Dt(90,1,t,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,a=m.autoClear,o=m.toneMapping;m.getClearColor(La),m.toneMapping=pn,m.autoClear=!1;const h=new cr({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),_=new et(new rn,h);let g=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,g=!0):(h.color.copy(La),g=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(l.up.set(0,d[u],0),l.lookAt(f[u],0,0)):y===1?(l.up.set(0,0,d[u]),l.lookAt(0,f[u],0)):(l.up.set(0,d[u],0),l.lookAt(0,0,f[u]));const x=this._cubeSize;Ji(r,y*x,u>2?x:0,x,x),m.setRenderTarget(r),g&&m.render(_,l),m.render(e,l)}_.geometry.dispose(),_.material.dispose(),m.toneMapping=o,m.autoClear=a,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ci||e.mapping===ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new et(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const d=this._cubeSize;Ji(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,Yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Da[(r-1)%Da.length];this._blur(e,r-1,r,s,c)}t.autoClear=n}_blur(e,t,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",s),this._halfBlur(c,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,c,l){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,a=new et(this._lodPlanes[r],f),o=f.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Dn-1),g=s/_,p=isFinite(s)?1+Math.floor(m*g):Dn;p>Dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dn}`);const u=[];let y=0;for(let A=0;A<Dn;++A){const L=A/g,O=Math.exp(-L*L/2);u.push(O),A===0?y+=O:A<p&&(y+=2*O)}for(let A=0;A<u.length;A++)u[A]=u[A]/y;o.envMap.value=e.texture,o.samples.value=p,o.weights.value=u,o.latitudinal.value=c==="latitudinal",l&&(o.poleAxis.value=l);const{_lodMax:x}=this;o.dTheta.value=_,o.mipInt.value=x-n;const E=this._sizeLods[r],C=3*E*(r>x-ri?r-x+ri:0),w=4*(this._cubeSize-E);Ji(t,C,w,3*E,2*E),d.setRenderTarget(t),d.render(a,Yr)}}function ld(i){const e=[],t=[],n=[];let r=i;const s=i-ri+1+Pa.length;for(let c=0;c<s;c++){const l=Math.pow(2,r);t.push(l);let d=1/l;c>i-ri?d=Pa[c-i+ri-1]:c===0&&(d=0),n.push(d);const f=1/(l-2),m=-f,a=1+f,o=[m,m,a,m,a,a,m,m,a,a,m,a],h=6,_=6,g=3,p=2,u=1,y=new Float32Array(g*_*h),x=new Float32Array(p*_*h),E=new Float32Array(u*_*h);for(let w=0;w<h;w++){const A=w%3*2/3-1,L=w>2?0:-1,O=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];y.set(O,g*_*w),x.set(o,p*_*w);const v=[w,w,w,w,w,w];E.set(v,u*_*w)}const C=new Ht;C.setAttribute("position",new zt(y,g)),C.setAttribute("uv",new zt(x,p)),C.setAttribute("faceIndex",new zt(E,u)),e.push(C),r>ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ua(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cd(i,e,t){const n=new Float32Array(Dn),r=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ss(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Na(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ss(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Fa(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ss(){return`

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
	`}function ud(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const d=l.mapping,f=d===rs||d===ss,m=d===ci||d===ui;if(f||m)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let a=e.get(l);return t===null&&(t=new Ia(i)),a=f?t.fromEquirectangular(l,a):t.fromCubemap(l,a),e.set(l,a),a.texture}else{if(e.has(l))return e.get(l).texture;{const a=l.image;if(f&&a&&a.height>0||m&&a&&r(a)){t===null&&(t=new Ia(i));const o=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,o),l.addEventListener("dispose",s),o.texture}else return null}}}return l}function r(l){let d=0;const f=6;for(let m=0;m<f;m++)l[m]!==void 0&&d++;return d===f}function s(l){const d=l.target;d.removeEventListener("dispose",s);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function hd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dd(i,e,t,n){const r={},s=new WeakMap;function c(a){const o=a.target;o.index!==null&&e.remove(o.index);for(const _ in o.attributes)e.remove(o.attributes[_]);for(const _ in o.morphAttributes){const g=o.morphAttributes[_];for(let p=0,u=g.length;p<u;p++)e.remove(g[p])}o.removeEventListener("dispose",c),delete r[o.id];const h=s.get(o);h&&(e.remove(h),s.delete(o)),n.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,t.memory.geometries--}function l(a,o){return r[o.id]===!0||(o.addEventListener("dispose",c),r[o.id]=!0,t.memory.geometries++),o}function d(a){const o=a.attributes;for(const _ in o)e.update(o[_],i.ARRAY_BUFFER);const h=a.morphAttributes;for(const _ in h){const g=h[_];for(let p=0,u=g.length;p<u;p++)e.update(g[p],i.ARRAY_BUFFER)}}function f(a){const o=[],h=a.index,_=a.attributes.position;let g=0;if(h!==null){const y=h.array;g=h.version;for(let x=0,E=y.length;x<E;x+=3){const C=y[x+0],w=y[x+1],A=y[x+2];o.push(C,w,w,A,A,C)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,E=y.length/3-1;x<E;x+=3){const C=x+0,w=x+1,A=x+2;o.push(C,w,w,A,A,C)}}else return;const p=new(vo(o)?Ao:bo)(o,1);p.version=g;const u=s.get(a);u&&e.remove(u),s.set(a,p)}function m(a){const o=s.get(a);if(o){const h=a.index;h!==null&&o.version<h.version&&f(a)}else f(a);return s.get(a)}return{get:l,update:d,getWireframeAttribute:m}}function fd(i,e,t,n){const r=n.isWebGL2;let s;function c(h){s=h}let l,d;function f(h){l=h.type,d=h.bytesPerElement}function m(h,_){i.drawElements(s,_,l,h*d),t.update(_,s,1)}function a(h,_,g){if(g===0)return;let p,u;if(r)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,l,h*d,g),t.update(_,s,g)}function o(h,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<g;u++)this.render(h[u]/d,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,l,h,0,g);let u=0;for(let y=0;y<g;y++)u+=_[y];t.update(u,s,1)}}this.setMode=c,this.setIndex=f,this.render=m,this.renderInstances=a,this.renderMultiDraw=o}function pd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function md(i,e){return i[0]-e[0]}function _d(i,e){return Math.abs(e[1])-Math.abs(i[1])}function gd(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,c=new ct,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function d(f,m,a){const o=f.morphTargetInfluences;if(e.isWebGL2===!0){const _=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,g=_!==void 0?_.length:0;let p=s.get(m);if(p===void 0||p.count!==g){let $=function(){b.dispose(),s.delete(m),m.removeEventListener("dispose",$)};var h=$;p!==void 0&&p.texture.dispose();const u=m.morphAttributes.position!==void 0,y=m.morphAttributes.normal!==void 0,x=m.morphAttributes.color!==void 0,E=m.morphAttributes.position||[],C=m.morphAttributes.normal||[],w=m.morphAttributes.color||[];let A=0;u===!0&&(A=1),y===!0&&(A=2),x===!0&&(A=3);let L=m.attributes.position.count*A,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const v=new Float32Array(L*O*4*g),b=new So(v,L,O,g);b.type=tn,b.needsUpdate=!0;const q=A*4;for(let R=0;R<g;R++){const X=E[R],k=C[R],K=w[R],W=L*O*4*R;for(let j=0;j<X.count;j++){const Z=j*q;u===!0&&(c.fromBufferAttribute(X,j),v[W+Z+0]=c.x,v[W+Z+1]=c.y,v[W+Z+2]=c.z,v[W+Z+3]=0),y===!0&&(c.fromBufferAttribute(k,j),v[W+Z+4]=c.x,v[W+Z+5]=c.y,v[W+Z+6]=c.z,v[W+Z+7]=0),x===!0&&(c.fromBufferAttribute(K,j),v[W+Z+8]=c.x,v[W+Z+9]=c.y,v[W+Z+10]=c.z,v[W+Z+11]=K.itemSize===4?c.w:1)}}p={count:g,texture:b,size:new Se(L,O)},s.set(m,p),m.addEventListener("dispose",$)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",f.morphTexture,t);else{let u=0;for(let x=0;x<o.length;x++)u+=o[x];const y=m.morphTargetsRelative?1:1-u;a.getUniforms().setValue(i,"morphTargetBaseInfluence",y),a.getUniforms().setValue(i,"morphTargetInfluences",o)}a.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=o===void 0?0:o.length;let g=n[m.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];n[m.id]=g}for(let E=0;E<_;E++){const C=g[E];C[0]=E,C[1]=o[E]}g.sort(_d);for(let E=0;E<8;E++)E<_&&g[E][1]?(l[E][0]=g[E][0],l[E][1]=g[E][1]):(l[E][0]=Number.MAX_SAFE_INTEGER,l[E][1]=0);l.sort(md);const p=m.morphAttributes.position,u=m.morphAttributes.normal;let y=0;for(let E=0;E<8;E++){const C=l[E],w=C[0],A=C[1];w!==Number.MAX_SAFE_INTEGER&&A?(p&&m.getAttribute("morphTarget"+E)!==p[w]&&m.setAttribute("morphTarget"+E,p[w]),u&&m.getAttribute("morphNormal"+E)!==u[w]&&m.setAttribute("morphNormal"+E,u[w]),r[E]=A,y+=A):(p&&m.hasAttribute("morphTarget"+E)===!0&&m.deleteAttribute("morphTarget"+E),u&&m.hasAttribute("morphNormal"+E)===!0&&m.deleteAttribute("morphNormal"+E),r[E]=0)}const x=m.morphTargetsRelative?1:1-y;a.getUniforms().setValue(i,"morphTargetBaseInfluence",x),a.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:d}}function vd(i,e,t,n){let r=new WeakMap;function s(d){const f=n.render.frame,m=d.geometry,a=e.get(d,m);if(r.get(a)!==f&&(e.update(a),r.set(a,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),r.get(d)!==f&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){const o=d.skeleton;r.get(o)!==f&&(o.update(),r.set(o,f))}return a}function c(){r=new WeakMap}function l(d){const f=d.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:c}}class Do extends St{constructor(e,t,n,r,s,c,l,d,f,m){if(m=m!==void 0?m:Nn,m!==Nn&&m!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Nn&&(n=dn),n===void 0&&m===hi&&(n=Un),super(null,r,s,c,l,d,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:yt,this.minFilter=d!==void 0?d:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Io=new St,Uo=new Do(1,1);Uo.compareFunction=go;const No=new So,Fo=new ec,Oo=new Co,Oa=[],Ba=[],za=new Float32Array(16),Ga=new Float32Array(9),Ha=new Float32Array(4);function mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Oa[r];if(s===void 0&&(s=new Float32Array(r),Oa[r]=s),e!==0){n.toArray(s,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(s,l)}return s}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function at(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fr(i,e){let t=Ba[e];t===void 0&&(t=new Int32Array(e),Ba[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),at(t,e)}}function yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),at(t,e)}}function Sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),at(t,e)}}function Ed(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Ha.set(n),i.uniformMatrix2fv(this.addr,!1,Ha),at(t,n)}}function Td(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Ga.set(n),i.uniformMatrix3fv(this.addr,!1,Ga),at(t,n)}}function bd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;za.set(n),i.uniformMatrix4fv(this.addr,!1,za),at(t,n)}}function Ad(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),at(t,e)}}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),at(t,e)}}function Cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),at(t,e)}}function Pd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),at(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),at(t,e)}}function Id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),at(t,e)}}function Ud(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Uo:Io;t.setTexture2D(e||s,r)}function Nd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fo,r)}function Fd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Oo,r)}function Od(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||No,r)}function Bd(i){switch(i){case 5126:return xd;case 35664:return Md;case 35665:return yd;case 35666:return Sd;case 35674:return Ed;case 35675:return Td;case 35676:return bd;case 5124:case 35670:return Ad;case 35667:case 35671:return wd;case 35668:case 35672:return Rd;case 35669:case 35673:return Cd;case 5125:return Pd;case 36294:return Ld;case 36295:return Dd;case 36296:return Id;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Od}}function zd(i,e){i.uniform1fv(this.addr,e)}function Gd(i,e){const t=mi(e,this.size,2);i.uniform2fv(this.addr,t)}function Hd(i,e){const t=mi(e,this.size,3);i.uniform3fv(this.addr,t)}function Vd(i,e){const t=mi(e,this.size,4);i.uniform4fv(this.addr,t)}function kd(i,e){const t=mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wd(i,e){const t=mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xd(i,e){const t=mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qd(i,e){i.uniform1iv(this.addr,e)}function Yd(i,e){i.uniform2iv(this.addr,e)}function jd(i,e){i.uniform3iv(this.addr,e)}function $d(i,e){i.uniform4iv(this.addr,e)}function Kd(i,e){i.uniform1uiv(this.addr,e)}function Zd(i,e){i.uniform2uiv(this.addr,e)}function Jd(i,e){i.uniform3uiv(this.addr,e)}function Qd(i,e){i.uniform4uiv(this.addr,e)}function ef(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Io,s[c])}function tf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Fo,s[c])}function nf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Oo,s[c])}function rf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||No,s[c])}function sf(i){switch(i){case 5126:return zd;case 35664:return Gd;case 35665:return Hd;case 35666:return Vd;case 35674:return kd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return qd;case 35667:case 35671:return Yd;case 35668:case 35672:return jd;case 35669:case 35673:return $d;case 5125:return Kd;case 36294:return Zd;case 36295:return Jd;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return rf}}class af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bd(t.type)}}class of{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sf(t.type)}}class lf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function Va(i,e){i.seq.push(e),i.map[e.id]=e}function cf(i,e,t){const n=i.name,r=n.length;for(Zr.lastIndex=0;;){const s=Zr.exec(n),c=Zr.lastIndex;let l=s[1];const d=s[2]==="]",f=s[3];if(d&&(l=l|0),f===void 0||f==="["&&c+2===r){Va(t,f===void 0?new af(l,i,e):new of(l,i,e));break}else{let a=t.map[l];a===void 0&&(a=new lf(l),Va(t,a)),t=a}}}class nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),c=e.getUniformLocation(t,s.name);cf(s,c,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,c=t.length;s!==c;++s){const l=t[s],d=n[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function ka(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const uf=37297;let hf=0;function df(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=r;c<s;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function ff(i){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i);let n;switch(e===t?n="":e===ar&&t===sr?n="LinearDisplayP3ToLinearSRGB":e===sr&&t===ar&&(n="LinearSRGBToLinearDisplayP3"),i){case xn:case dr:return[n,"LinearTransferOETF"];case kt:case vs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wa(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+df(i.getShaderSource(e),c)}else return r}function pf(i,e){const t=ff(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mf(i,e){let t;switch(e){case El:t="Linear";break;case Tl:t="Reinhard";break;case bl:t="OptimizedCineon";break;case Al:t="ACESFilmic";break;case Rl:t="AgX";break;case Cl:t="Neutral";break;case wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _f(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function gf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(si).join(`
`)}function vf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),c=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function si(i){return i!==""}function Xa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ds(i){return i.replace(Mf,Sf)}const yf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sf(i,e){let t=Ie[e];if(t===void 0){const n=yf.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ds(t)}const Ef=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(i){return i.replace(Ef,Tf)}function Tf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ja(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function Af(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case ui:e="ENVMAP_TYPE_CUBE";break;case hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Rf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ms:e="ENVMAP_BLENDING_MULTIPLY";break;case yl:e="ENVMAP_BLENDING_MIX";break;case Sl:e="ENVMAP_BLENDING_ADD";break}return e}function Cf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pf(i,e,t,n){const r=i.getContext(),s=t.defines;let c=t.vertexShader,l=t.fragmentShader;const d=bf(t),f=Af(t),m=wf(t),a=Rf(t),o=Cf(t),h=t.isWebGL2?"":_f(t),_=gf(t),g=vf(s),p=r.createProgram();let u,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(si).join(`
`),u.length>0&&(u+=`
`),y=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(si).join(`
`),y.length>0&&(y+=`
`)):(u=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),y=[h,ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+a:"",o?"#define CUBEUV_TEXEL_WIDTH "+o.texelWidth:"",o?"#define CUBEUV_TEXEL_HEIGHT "+o.texelHeight:"",o?"#define CUBEUV_MAX_MIP "+o.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==pn?mf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,pf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),c=ds(c),c=Xa(c,t),c=qa(c,t),l=ds(l),l=Xa(l,t),l=qa(l,t),c=Ya(c),l=Ya(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=x+u+c,C=x+y+l,w=ka(r,r.VERTEX_SHADER,E),A=ka(r,r.FRAGMENT_SHADER,C);r.attachShader(p,w),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function L(q){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(w).trim(),X=r.getShaderInfoLog(A).trim();let k=!0,K=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,w,A);else{const W=Wa(r,w,"vertex"),j=Wa(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+$+`
`+W+`
`+j)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(R===""||X==="")&&(K=!1);K&&(q.diagnostics={runnable:k,programLog:$,vertexShader:{log:R,prefix:u},fragmentShader:{log:X,prefix:y}})}r.deleteShader(w),r.deleteShader(A),O=new nr(r,p),v=xf(r,p)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let v;this.getAttributes=function(){return v===void 0&&L(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(p,uf)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let Lf=0;class Df{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new If(e),t.set(e,n)),n}}class If{constructor(e){this.id=Lf++,this.code=e,this.usedTimes=0}}function Uf(i,e,t,n,r,s,c){const l=new Ms,d=new Df,f=new Set,m=[],a=r.isWebGL2,o=r.logarithmicDepthBuffer,h=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return f.add(v),v===0?"uv":`uv${v}`}function u(v,b,q,$,R){const X=$.fog,k=R.geometry,K=v.isMeshStandardMaterial?$.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),j=W&&W.mapping===hr?W.image.height:null,Z=g[v.type];v.precision!==null&&(_=r.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,he=re!==void 0?re.length:0;let Ce=0;k.morphAttributes.position!==void 0&&(Ce=1),k.morphAttributes.normal!==void 0&&(Ce=2),k.morphAttributes.color!==void 0&&(Ce=3);let H,Q,ue,Te;if(Z){const Ye=Wt[Z];H=Ye.vertexShader,Q=Ye.fragmentShader}else H=v.vertexShader,Q=v.fragmentShader,d.update(v),ue=d.getVertexShaderID(v),Te=d.getFragmentShaderID(v);const _e=i.getRenderTarget(),de=R.isInstancedMesh===!0,We=R.isBatchedMesh===!0,be=!!v.map,N=!!v.matcap,ut=!!W,ve=!!v.aoMap,Oe=!!v.lightMap,Me=!!v.bumpMap,Ve=!!v.normalMap,Ne=!!v.displacementMap,Be=!!v.emissiveMap,tt=!!v.metalnessMap,T=!!v.roughnessMap,M=v.anisotropy>0,V=v.clearcoat>0,Y=v.iridescence>0,ee=v.sheen>0,J=v.transmission>0,Pe=M&&!!v.anisotropyMap,ye=V&&!!v.clearcoatMap,se=V&&!!v.clearcoatNormalMap,oe=V&&!!v.clearcoatRoughnessMap,Le=Y&&!!v.iridescenceMap,te=Y&&!!v.iridescenceThicknessMap,it=ee&&!!v.sheenColorMap,ze=ee&&!!v.sheenRoughnessMap,ge=!!v.specularMap,fe=!!v.specularColorMap,pe=!!v.specularIntensityMap,ke=J&&!!v.transmissionMap,we=J&&!!v.thicknessMap,Ke=!!v.gradientMap,P=!!v.alphaMap,ae=v.alphaTest>0,B=!!v.alphaHash,ne=!!v.extensions;let le=pn;v.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(le=i.toneMapping);const Ge={isWebGL2:a,shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:Q,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:Te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:We,instancing:de,instancingColor:de&&R.instanceColor!==null,instancingMorph:de&&R.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:xn,alphaToCoverage:!!v.alphaToCoverage,map:be,matcap:N,envMap:ut,envMapMode:ut&&W.mapping,envMapCubeUVHeight:j,aoMap:ve,lightMap:Oe,bumpMap:Me,normalMap:Ve,displacementMap:h&&Ne,emissiveMap:Be,normalMapObjectSpace:Ve&&v.normalMapType===Gl,normalMapTangentSpace:Ve&&v.normalMapType===gs,metalnessMap:tt,roughnessMap:T,anisotropy:M,anisotropyMap:Pe,clearcoat:V,clearcoatMap:ye,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,iridescence:Y,iridescenceMap:Le,iridescenceThicknessMap:te,sheen:ee,sheenColorMap:it,sheenRoughnessMap:ze,specularMap:ge,specularColorMap:fe,specularIntensityMap:pe,transmission:J,transmissionMap:ke,thicknessMap:we,gradientMap:Ke,opaque:v.transparent===!1&&v.blending===ai&&v.alphaToCoverage===!1,alphaMap:P,alphaTest:ae,alphaHash:B,combine:v.combine,mapUv:be&&p(v.map.channel),aoMapUv:ve&&p(v.aoMap.channel),lightMapUv:Oe&&p(v.lightMap.channel),bumpMapUv:Me&&p(v.bumpMap.channel),normalMapUv:Ve&&p(v.normalMap.channel),displacementMapUv:Ne&&p(v.displacementMap.channel),emissiveMapUv:Be&&p(v.emissiveMap.channel),metalnessMapUv:tt&&p(v.metalnessMap.channel),roughnessMapUv:T&&p(v.roughnessMap.channel),anisotropyMapUv:Pe&&p(v.anisotropyMap.channel),clearcoatMapUv:ye&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:it&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(v.sheenRoughnessMap.channel),specularMapUv:ge&&p(v.specularMap.channel),specularColorMapUv:fe&&p(v.specularColorMap.channel),specularIntensityMapUv:pe&&p(v.specularIntensityMap.channel),transmissionMapUv:ke&&p(v.transmissionMap.channel),thicknessMapUv:we&&p(v.thicknessMap.channel),alphaMapUv:P&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ve||M),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!k.attributes.uv&&(be||P),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:o,skinning:R.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,useLegacyLights:i._useLegacyLights,decodeVideoTexture:be&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===$e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===bt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ne&&v.extensions.derivatives===!0,extensionFragDepth:ne&&v.extensions.fragDepth===!0,extensionDrawBuffers:ne&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ge.vertexUv1s=f.has(1),Ge.vertexUv2s=f.has(2),Ge.vertexUv3s=f.has(3),f.clear(),Ge}function y(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const q in v.defines)b.push(q),b.push(v.defines[q]);return v.isRawShaderMaterial===!1&&(x(b,v),E(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){l.disableAll(),b.isWebGL2&&l.enable(0),b.supportsVertexTextures&&l.enable(1),b.instancing&&l.enable(2),b.instancingColor&&l.enable(3),b.instancingMorph&&l.enable(4),b.matcap&&l.enable(5),b.envMap&&l.enable(6),b.normalMapObjectSpace&&l.enable(7),b.normalMapTangentSpace&&l.enable(8),b.clearcoat&&l.enable(9),b.iridescence&&l.enable(10),b.alphaTest&&l.enable(11),b.vertexColors&&l.enable(12),b.vertexAlphas&&l.enable(13),b.vertexUv1s&&l.enable(14),b.vertexUv2s&&l.enable(15),b.vertexUv3s&&l.enable(16),b.vertexTangents&&l.enable(17),b.anisotropy&&l.enable(18),b.alphaHash&&l.enable(19),b.batching&&l.enable(20),v.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.skinning&&l.enable(4),b.morphTargets&&l.enable(5),b.morphNormals&&l.enable(6),b.morphColors&&l.enable(7),b.premultipliedAlpha&&l.enable(8),b.shadowMapEnabled&&l.enable(9),b.useLegacyLights&&l.enable(10),b.doubleSided&&l.enable(11),b.flipSided&&l.enable(12),b.useDepthPacking&&l.enable(13),b.dithering&&l.enable(14),b.transmission&&l.enable(15),b.sheen&&l.enable(16),b.opaque&&l.enable(17),b.pointsUvs&&l.enable(18),b.decodeVideoTexture&&l.enable(19),b.alphaToCoverage&&l.enable(20),v.push(l.mask)}function C(v){const b=g[v.type];let q;if(b){const $=Wt[b];q=fc.clone($.uniforms)}else q=v.uniforms;return q}function w(v,b){let q;for(let $=0,R=m.length;$<R;$++){const X=m[$];if(X.cacheKey===b){q=X,++q.usedTimes;break}}return q===void 0&&(q=new Pf(i,b,v,s),m.push(q)),q}function A(v){if(--v.usedTimes===0){const b=m.indexOf(v);m[b]=m[m.length-1],m.pop(),v.destroy()}}function L(v){d.remove(v)}function O(){d.dispose()}return{getParameters:u,getProgramCacheKey:y,getUniforms:C,acquireProgram:w,releaseProgram:A,releaseShaderCache:L,programs:m,dispose:O}}function Nf(){let i=new WeakMap;function e(s){let c=i.get(s);return c===void 0&&(c={},i.set(s,c)),c}function t(s){i.delete(s)}function n(s,c,l){i.get(s)[c]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $a(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ka(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function c(a,o,h,_,g,p){let u=i[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:h,groupOrder:_,renderOrder:a.renderOrder,z:g,group:p},i[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=h,u.groupOrder=_,u.renderOrder=a.renderOrder,u.z=g,u.group=p),e++,u}function l(a,o,h,_,g,p){const u=c(a,o,h,_,g,p);h.transmission>0?n.push(u):h.transparent===!0?r.push(u):t.push(u)}function d(a,o,h,_,g,p){const u=c(a,o,h,_,g,p);h.transmission>0?n.unshift(u):h.transparent===!0?r.unshift(u):t.unshift(u)}function f(a,o){t.length>1&&t.sort(a||Ff),n.length>1&&n.sort(o||$a),r.length>1&&r.sort(o||$a)}function m(){for(let a=e,o=i.length;a<o;a++){const h=i[a];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:d,finish:m,sort:f}}function Of(){let i=new WeakMap;function e(n,r){const s=i.get(n);let c;return s===void 0?(c=new Ka,i.set(n,[c])):r>=s.length?(c=new Ka,s.push(c)):c=s[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function zf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Gf=0;function Hf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vf(i,e){const t=new Bf,n=zf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new D);const s=new D,c=new Qe,l=new Qe;function d(m,a){let o=0,h=0,_=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let g=0,p=0,u=0,y=0,x=0,E=0,C=0,w=0,A=0,L=0,O=0;m.sort(Hf);const v=a===!0?Math.PI:1;for(let q=0,$=m.length;q<$;q++){const R=m[q],X=R.color,k=R.intensity,K=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)o+=X.r*k*v,h+=X.g*k*v,_+=X.b*k*v;else if(R.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(R.sh.coefficients[j],k);O++}else if(R.isDirectionalLight){const j=t.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*v),R.castShadow){const Z=R.shadow,re=n.get(R);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,r.directionalShadow[g]=re,r.directionalShadowMap[g]=W,r.directionalShadowMatrix[g]=R.shadow.matrix,E++}r.directional[g]=j,g++}else if(R.isSpotLight){const j=t.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(X).multiplyScalar(k*v),j.distance=K,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,r.spot[u]=j;const Z=R.shadow;if(R.map&&(r.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&L++),r.spotLightMatrix[u]=Z.matrix,R.castShadow){const re=n.get(R);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,r.spotShadow[u]=re,r.spotShadowMap[u]=W,w++}u++}else if(R.isRectAreaLight){const j=t.get(R);j.color.copy(X).multiplyScalar(k),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),r.rectArea[y]=j,y++}else if(R.isPointLight){const j=t.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*v),j.distance=R.distance,j.decay=R.decay,R.castShadow){const Z=R.shadow,re=n.get(R);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,re.shadowCameraNear=Z.camera.near,re.shadowCameraFar=Z.camera.far,r.pointShadow[p]=re,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=R.shadow.matrix,C++}r.point[p]=j,p++}else if(R.isHemisphereLight){const j=t.get(R);j.skyColor.copy(R.color).multiplyScalar(k*v),j.groundColor.copy(R.groundColor).multiplyScalar(k*v),r.hemi[x]=j,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=o,r.ambient[1]=h,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==g||b.pointLength!==p||b.spotLength!==u||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==E||b.numPointShadows!==C||b.numSpotShadows!==w||b.numSpotMaps!==A||b.numLightProbes!==O)&&(r.directional.length=g,r.spot.length=u,r.rectArea.length=y,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+A-L,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,b.directionalLength=g,b.pointLength=p,b.spotLength=u,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=E,b.numPointShadows=C,b.numSpotShadows=w,b.numSpotMaps=A,b.numLightProbes=O,r.version=Gf++)}function f(m,a){let o=0,h=0,_=0,g=0,p=0;const u=a.matrixWorldInverse;for(let y=0,x=m.length;y<x;y++){const E=m[y];if(E.isDirectionalLight){const C=r.directional[o];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),o++}else if(E.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const C=r.rectArea[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),l.identity(),c.copy(E.matrixWorld),c.premultiply(u),l.extractRotation(c),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),g++}else if(E.isPointLight){const C=r.point[h];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(u),h++}else if(E.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:d,setupView:f,state:r}}function Za(i,e){const t=new Vf(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function c(a){n.push(a)}function l(a){r.push(a)}function d(a){t.setup(n,a)}function f(a){t.setupView(n,a)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:d,setupLightsView:f,pushLight:c,pushShadow:l}}function kf(i,e){let t=new WeakMap;function n(s,c=0){const l=t.get(s);let d;return l===void 0?(d=new Za(i,e),t.set(s,[d])):c>=l.length?(d=new Za(i,e),l.push(d)):d=l[c],d}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wf extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xf extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yf=`uniform sampler2D shadow_pass;
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
}`;function jf(i,e,t){let n=new ys;const r=new Se,s=new Se,c=new ct,l=new Wf({depthPacking:zl}),d=new Xf,f={},m=t.maxTextureSize,a={[gn]:bt,[bt]:gn,[en]:en},o=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:qf,fragmentShader:Yf}),h=o.clone();h.defines.HORIZONTAL_PASS=1;const _=new Ht;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new et(_,o),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let u=this.type;this.render=function(w,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const O=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),q=i.state;q.setBlending(fn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const $=u!==Qt&&this.type===Qt,R=u===Qt&&this.type!==Qt;for(let X=0,k=w.length;X<k;X++){const K=w[X],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const j=W.getFrameExtents();if(r.multiply(j),s.copy(W.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/j.x),r.x=s.x*j.x,W.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/j.y),r.y=s.y*j.y,W.mapSize.y=s.y)),W.map===null||$===!0||R===!0){const re=this.type!==Qt?{minFilter:yt,magFilter:yt}:{};W.map!==null&&W.map.dispose(),W.map=new Fn(r.x,r.y,re),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Z=W.getViewportCount();for(let re=0;re<Z;re++){const he=W.getViewport(re);c.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),q.viewport(c),W.updateMatrices(K,re),n=W.getFrustum(),E(A,L,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Qt&&y(W,L),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(O,v,b)};function y(w,A){const L=e.update(g);o.defines.VSM_SAMPLES!==w.blurSamples&&(o.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,o.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(r.x,r.y)),o.uniforms.shadow_pass.value=w.map.texture,o.uniforms.resolution.value=w.mapSize,o.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,L,o,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,L,h,g,null)}function x(w,A,L,O){let v=null;const b=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)v=b;else if(v=L.isPointLight===!0?d:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=v.uuid,$=A.uuid;let R=f[q];R===void 0&&(R={},f[q]=R);let X=R[$];X===void 0&&(X=v.clone(),R[$]=X,A.addEventListener("dispose",C)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,O===Qt?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:a[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const q=i.properties.get(v);q.light=L}return v}function E(w,A,L,O,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Qt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const $=e.update(w),R=w.material;if(Array.isArray(R)){const X=$.groups;for(let k=0,K=X.length;k<K;k++){const W=X[k],j=R[W.materialIndex];if(j&&j.visible){const Z=x(w,j,O,v);w.onBeforeShadow(i,w,A,L,$,Z,W),i.renderBufferDirect(L,null,$,Z,w,W),w.onAfterShadow(i,w,A,L,$,Z,W)}}}else if(R.visible){const X=x(w,R,O,v);w.onBeforeShadow(i,w,A,L,$,X,null),i.renderBufferDirect(L,null,$,X,w,null),w.onAfterShadow(i,w,A,L,$,X,null)}}const q=w.children;for(let $=0,R=q.length;$<R;$++)E(q[$],A,L,O,v)}function C(w){w.target.removeEventListener("dispose",C);for(const L in f){const O=f[L],v=w.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}function $f(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const ae=new ct;let B=null;const ne=new ct(0,0,0,0);return{setMask:function(le){B!==le&&!P&&(i.colorMask(le,le,le,le),B=le)},setLocked:function(le){P=le},setClear:function(le,Ge,Ye,ht,Ct){Ct===!0&&(le*=ht,Ge*=ht,Ye*=ht),ae.set(le,Ge,Ye,ht),ne.equals(ae)===!1&&(i.clearColor(le,Ge,Ye,ht),ne.copy(ae))},reset:function(){P=!1,B=null,ne.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,B=null,ne=null;return{setTest:function(le){le?de(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(le){ae!==le&&!P&&(i.depthMask(le),ae=le)},setFunc:function(le){if(B!==le){switch(le){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case Ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=le}},setLocked:function(le){P=le},setClear:function(le){ne!==le&&(i.clearDepth(le),ne=le)},reset:function(){P=!1,ae=null,B=null,ne=null}}}function c(){let P=!1,ae=null,B=null,ne=null,le=null,Ge=null,Ye=null,ht=null,Ct=null;return{setTest:function(je){P||(je?de(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(je){ae!==je&&!P&&(i.stencilMask(je),ae=je)},setFunc:function(je,vt,Vt){(B!==je||ne!==vt||le!==Vt)&&(i.stencilFunc(je,vt,Vt),B=je,ne=vt,le=Vt)},setOp:function(je,vt,Vt){(Ge!==je||Ye!==vt||ht!==Vt)&&(i.stencilOp(je,vt,Vt),Ge=je,Ye=vt,ht=Vt)},setLocked:function(je){P=je},setClear:function(je){Ct!==je&&(i.clearStencil(je),Ct=je)},reset:function(){P=!1,ae=null,B=null,ne=null,le=null,Ge=null,Ye=null,ht=null,Ct=null}}}const l=new r,d=new s,f=new c,m=new WeakMap,a=new WeakMap;let o={},h={},_=new WeakMap,g=[],p=null,u=!1,y=null,x=null,E=null,C=null,w=null,A=null,L=null,O=new He(0,0,0),v=0,b=!1,q=null,$=null,R=null,X=null,k=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=j>=2);let re=null,he={};const Ce=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),Q=new ct().fromArray(Ce),ue=new ct().fromArray(H);function Te(P,ae,B,ne){const le=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(P,Ge),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<B;Ye++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ae+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return Ge}const _e={};_e[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),de(i.DEPTH_TEST),d.setFunc(ir),Ne(!1),Be(Ls),de(i.CULL_FACE),Me(fn);function de(P){o[P]!==!0&&(i.enable(P),o[P]=!0)}function We(P){o[P]!==!1&&(i.disable(P),o[P]=!1)}function be(P,ae){return h[P]!==ae?(i.bindFramebuffer(P,ae),h[P]=ae,n&&(P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function N(P,ae){let B=g,ne=!1;if(P){B=_.get(ae),B===void 0&&(B=[],_.set(ae,B));const le=P.textures;if(B.length!==le.length||B[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,Ye=le.length;Ge<Ye;Ge++)B[Ge]=i.COLOR_ATTACHMENT0+Ge;B.length=le.length,ne=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,ne=!0);if(ne)if(t.isWebGL2)i.drawBuffers(B);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ut(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const ve={[Ln]:i.FUNC_ADD,[Qo]:i.FUNC_SUBTRACT,[el]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[Ns]=i.MIN,ve[Fs]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ve[Ns]=P.MIN_EXT,ve[Fs]=P.MAX_EXT)}const Oe={[tl]:i.ZERO,[nl]:i.ONE,[il]:i.SRC_COLOR,[ns]:i.SRC_ALPHA,[cl]:i.SRC_ALPHA_SATURATE,[ol]:i.DST_COLOR,[sl]:i.DST_ALPHA,[rl]:i.ONE_MINUS_SRC_COLOR,[is]:i.ONE_MINUS_SRC_ALPHA,[ll]:i.ONE_MINUS_DST_COLOR,[al]:i.ONE_MINUS_DST_ALPHA,[ul]:i.CONSTANT_COLOR,[hl]:i.ONE_MINUS_CONSTANT_COLOR,[dl]:i.CONSTANT_ALPHA,[fl]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(P,ae,B,ne,le,Ge,Ye,ht,Ct,je){if(P===fn){u===!0&&(We(i.BLEND),u=!1);return}if(u===!1&&(de(i.BLEND),u=!0),P!==Jo){if(P!==y||je!==b){if((x!==Ln||w!==Ln)&&(i.blendEquation(i.FUNC_ADD),x=Ln,w=Ln),je)switch(P){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.ONE,i.ONE);break;case Is:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Us:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Is:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Us:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,C=null,A=null,L=null,O.set(0,0,0),v=0,y=P,b=je}return}le=le||ae,Ge=Ge||B,Ye=Ye||ne,(ae!==x||le!==w)&&(i.blendEquationSeparate(ve[ae],ve[le]),x=ae,w=le),(B!==E||ne!==C||Ge!==A||Ye!==L)&&(i.blendFuncSeparate(Oe[B],Oe[ne],Oe[Ge],Oe[Ye]),E=B,C=ne,A=Ge,L=Ye),(ht.equals(O)===!1||Ct!==v)&&(i.blendColor(ht.r,ht.g,ht.b,Ct),O.copy(ht),v=Ct),y=P,b=!1}function Ve(P,ae){P.side===en?We(i.CULL_FACE):de(i.CULL_FACE);let B=P.side===bt;ae&&(B=!B),Ne(B),P.blending===ai&&P.transparent===!1?Me(fn):Me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),d.setFunc(P.depthFunc),d.setTest(P.depthTest),d.setMask(P.depthWrite),l.setMask(P.colorWrite);const ne=P.stencilWrite;f.setTest(ne),ne&&(f.setMask(P.stencilWriteMask),f.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),f.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),T(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(P){q!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),q=P)}function Be(P){P!==$o?(de(i.CULL_FACE),P!==$&&(P===Ls?i.cullFace(i.BACK):P===Ko?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),$=P}function tt(P){P!==R&&(W&&i.lineWidth(P),R=P)}function T(P,ae,B){P?(de(i.POLYGON_OFFSET_FILL),(X!==ae||k!==B)&&(i.polygonOffset(ae,B),X=ae,k=B)):We(i.POLYGON_OFFSET_FILL)}function M(P){P?de(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function V(P){P===void 0&&(P=i.TEXTURE0+K-1),re!==P&&(i.activeTexture(P),re=P)}function Y(P,ae,B){B===void 0&&(re===null?B=i.TEXTURE0+K-1:B=re);let ne=he[B];ne===void 0&&(ne={type:void 0,texture:void 0},he[B]=ne),(ne.type!==P||ne.texture!==ae)&&(re!==B&&(i.activeTexture(B),re=B),i.bindTexture(P,ae||_e[P]),ne.type=P,ne.texture=ae)}function ee(){const P=he[re];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(P){Q.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function pe(P){ue.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ue.copy(P))}function ke(P,ae){let B=a.get(ae);B===void 0&&(B=new WeakMap,a.set(ae,B));let ne=B.get(P);ne===void 0&&(ne=i.getUniformBlockIndex(ae,P.name),B.set(P,ne))}function we(P,ae){const ne=a.get(ae).get(P);m.get(ae)!==ne&&(i.uniformBlockBinding(ae,ne,P.__bindingPointIndex),m.set(ae,ne))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},re=null,he={},h={},_=new WeakMap,g=[],p=null,u=!1,y=null,x=null,E=null,C=null,w=null,A=null,L=null,O=new He(0,0,0),v=0,b=!1,q=null,$=null,R=null,X=null,k=null,Q.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:de,disable:We,bindFramebuffer:be,drawBuffers:N,useProgram:ut,setBlending:Me,setMaterial:Ve,setFlipSided:Ne,setCullFace:Be,setLineWidth:tt,setPolygonOffset:T,setScissorTest:M,activeTexture:V,bindTexture:Y,unbindTexture:ee,compressedTexImage2D:J,compressedTexImage3D:Pe,texImage2D:ze,texImage3D:ge,updateUBOMapping:ke,uniformBlockBinding:we,texStorage2D:te,texStorage3D:it,texSubImage2D:ye,texSubImage3D:se,compressedTexSubImage2D:oe,compressedTexSubImage3D:Le,scissor:fe,viewport:pe,reset:Ke}}function Kf(i,e,t,n,r,s,c){const l=r.isWebGL2,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Se,a=new WeakMap;let o;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return _?new OffscreenCanvas(T,M):lr("canvas")}function p(T,M,V,Y){let ee=1;const J=tt(T);if((J.width>Y||J.height>Y)&&(ee=Y/Math.max(J.width,J.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Pe=M?hs:Math.floor,ye=Pe(ee*J.width),se=Pe(ee*J.height);o===void 0&&(o=g(ye,se));const oe=V?g(ye,se):o;return oe.width=ye,oe.height=se,oe.getContext("2d").drawImage(T,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ye+"x"+se+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function u(T){const M=tt(T);return ha(M.width)&&ha(M.height)}function y(T){return l?!1:T.wrapS!==Ft||T.wrapT!==Ft||T.minFilter!==yt&&T.minFilter!==Et}function x(T,M){return T.generateMipmaps&&M&&T.minFilter!==yt&&T.minFilter!==Et}function E(T){i.generateMipmap(T)}function C(T,M,V,Y,ee=!1){if(l===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=M;if(M===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),M===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),M===i.RGBA){const Pe=ee?rr:qe.getTransfer(Y);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=Pe===$e?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(T,M,V){return x(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==yt&&T.minFilter!==Et?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){return T===yt||T===Os||T===gi?i.NEAREST:i.LINEAR}function L(T){const M=T.target;M.removeEventListener("dispose",L),v(M),M.isVideoTexture&&a.delete(M)}function O(T){const M=T.target;M.removeEventListener("dispose",O),q(M)}function v(T){const M=n.get(T);if(M.__webglInit===void 0)return;const V=T.source,Y=h.get(V);if(Y){const ee=Y[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(T),Object.keys(Y).length===0&&h.delete(V)}n.remove(T)}function b(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const V=T.source,Y=h.get(V);delete Y[M.__cacheKey],c.memory.textures--}function q(T){const M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let ee=0;ee<M.__webglFramebuffer[Y].length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[Y][ee]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=T.textures;for(let Y=0,ee=V.length;Y<ee;Y++){const J=n.get(V[Y]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),c.memory.textures--),n.remove(V[Y])}n.remove(T)}let $=0;function R(){$=0}function X(){const T=$;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),$+=1,T}function k(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function K(T,M){const V=n.get(T);if(T.isVideoTexture&&Ne(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,T,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function W(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function j(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function Z(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){Te(V,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const re={[as]:i.REPEAT,[Ft]:i.CLAMP_TO_EDGE,[os]:i.MIRRORED_REPEAT},he={[yt]:i.NEAREST,[Os]:i.NEAREST_MIPMAP_NEAREST,[gi]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},Ce={[Hl]:i.NEVER,[Yl]:i.ALWAYS,[Vl]:i.LESS,[go]:i.LEQUAL,[kl]:i.EQUAL,[ql]:i.GEQUAL,[Wl]:i.GREATER,[Xl]:i.NOTEQUAL};function H(T,M,V){if(M.type===tn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Et||M.magFilter===Mr||M.magFilter===gi||M.magFilter===In||M.minFilter===Et||M.minFilter===Mr||M.minFilter===gi||M.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(i.texParameteri(T,i.TEXTURE_WRAP_S,re[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,re[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,re[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Ft||M.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==yt&&M.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yt||M.minFilter!==gi&&M.minFilter!==In||M.type===tn&&e.has("OES_texture_float_linear")===!1||l===!1&&M.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Q(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",L));const Y=M.source;let ee=h.get(Y);ee===void 0&&(ee={},h.set(Y,ee));const J=k(M);if(J!==T.__cacheKey){ee[J]===void 0&&(ee[J]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,V=!0),ee[J].usedTimes++;const Pe=ee[T.__cacheKey];Pe!==void 0&&(ee[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&b(M)),T.__cacheKey=J,T.__webglTexture=ee[J].texture}return V}function ue(T,M,V){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);const ee=Q(T,M),J=M.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+V);const Pe=n.get(J);if(J.version!==Pe.__version||ee===!0){t.activeTexture(i.TEXTURE0+V);const ye=qe.getPrimaries(qe.workingColorSpace),se=M.colorSpace===hn?null:qe.getPrimaries(M.colorSpace),oe=M.colorSpace===hn||ye===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Le=y(M)&&u(M.image)===!1;let te=p(M.image,Le,!1,r.maxTextureSize);te=Be(M,te);const it=u(te)||l,ze=s.convert(M.format,M.colorSpace);let ge=s.convert(M.type),fe=C(M.internalFormat,ze,ge,M.colorSpace,M.isVideoTexture);H(Y,M,it);let pe;const ke=M.mipmaps,we=l&&M.isVideoTexture!==!0&&fe!==_o,Ke=Pe.__version===void 0||ee===!0,P=J.dataReady,ae=w(M,te,it);if(M.isDepthTexture)fe=i.DEPTH_COMPONENT,l?M.type===tn?fe=i.DEPTH_COMPONENT32F:M.type===dn?fe=i.DEPTH_COMPONENT24:M.type===Un?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:M.type===tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Nn&&fe===i.DEPTH_COMPONENT&&M.type!==_s&&M.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=dn,ge=s.convert(M.type)),M.format===hi&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,M.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Un,ge=s.convert(M.type))),Ke&&(we?t.texStorage2D(i.TEXTURE_2D,1,fe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,fe,te.width,te.height,0,ze,ge,null));else if(M.isDataTexture)if(ke.length>0&&it){we&&Ke&&t.texStorage2D(i.TEXTURE_2D,ae,fe,ke[0].width,ke[0].height);for(let B=0,ne=ke.length;B<ne;B++)pe=ke[B],we?P&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,pe.width,pe.height,ze,ge,pe.data):t.texImage2D(i.TEXTURE_2D,B,fe,pe.width,pe.height,0,ze,ge,pe.data);M.generateMipmaps=!1}else we?(Ke&&t.texStorage2D(i.TEXTURE_2D,ae,fe,te.width,te.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,ze,ge,te.data)):t.texImage2D(i.TEXTURE_2D,0,fe,te.width,te.height,0,ze,ge,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){we&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,fe,ke[0].width,ke[0].height,te.depth);for(let B=0,ne=ke.length;B<ne;B++)pe=ke[B],M.format!==Ot?ze!==null?we?P&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,pe.width,pe.height,te.depth,ze,pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,fe,pe.width,pe.height,te.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,pe.width,pe.height,te.depth,ze,ge,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,fe,pe.width,pe.height,te.depth,0,ze,ge,pe.data)}else{we&&Ke&&t.texStorage2D(i.TEXTURE_2D,ae,fe,ke[0].width,ke[0].height);for(let B=0,ne=ke.length;B<ne;B++)pe=ke[B],M.format!==Ot?ze!==null?we?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,pe.width,pe.height,ze,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,B,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?P&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,pe.width,pe.height,ze,ge,pe.data):t.texImage2D(i.TEXTURE_2D,B,fe,pe.width,pe.height,0,ze,ge,pe.data)}else if(M.isDataArrayTexture)we?(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,fe,te.width,te.height,te.depth),P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ze,ge,te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,ze,ge,te.data);else if(M.isData3DTexture)we?(Ke&&t.texStorage3D(i.TEXTURE_3D,ae,fe,te.width,te.height,te.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ze,ge,te.data)):t.texImage3D(i.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,ze,ge,te.data);else if(M.isFramebufferTexture){if(Ke)if(we)t.texStorage2D(i.TEXTURE_2D,ae,fe,te.width,te.height);else{let B=te.width,ne=te.height;for(let le=0;le<ae;le++)t.texImage2D(i.TEXTURE_2D,le,fe,B,ne,0,ze,ge,null),B>>=1,ne>>=1}}else if(ke.length>0&&it){if(we&&Ke){const B=tt(ke[0]);t.texStorage2D(i.TEXTURE_2D,ae,fe,B.width,B.height)}for(let B=0,ne=ke.length;B<ne;B++)pe=ke[B],we?P&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,ze,ge,pe):t.texImage2D(i.TEXTURE_2D,B,fe,ze,ge,pe);M.generateMipmaps=!1}else if(we){if(Ke){const B=tt(te);t.texStorage2D(i.TEXTURE_2D,ae,fe,B.width,B.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,ge,te)}else t.texImage2D(i.TEXTURE_2D,0,fe,ze,ge,te);x(M,it)&&E(Y),Pe.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Te(T,M,V){if(M.image.length!==6)return;const Y=Q(T,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);const J=n.get(ee);if(ee.version!==J.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);const Pe=qe.getPrimaries(qe.workingColorSpace),ye=M.colorSpace===hn?null:qe.getPrimaries(M.colorSpace),se=M.colorSpace===hn||Pe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const oe=M.isCompressedTexture||M.image[0].isCompressedTexture,Le=M.image[0]&&M.image[0].isDataTexture,te=[];for(let B=0;B<6;B++)!oe&&!Le?te[B]=p(M.image[B],!1,!0,r.maxCubemapSize):te[B]=Le?M.image[B].image:M.image[B],te[B]=Be(M,te[B]);const it=te[0],ze=u(it)||l,ge=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),pe=C(M.internalFormat,ge,fe,M.colorSpace),ke=l&&M.isVideoTexture!==!0,we=J.__version===void 0||Y===!0,Ke=ee.dataReady;let P=w(M,it,ze);H(i.TEXTURE_CUBE_MAP,M,ze);let ae;if(oe){ke&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,P,pe,it.width,it.height);for(let B=0;B<6;B++){ae=te[B].mipmaps;for(let ne=0;ne<ae.length;ne++){const le=ae[ne];M.format!==Ot?ge!==null?ke?Ke&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne,pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne,0,0,le.width,le.height,ge,fe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne,pe,le.width,le.height,0,ge,fe,le.data)}}}else{if(ae=M.mipmaps,ke&&we){ae.length>0&&P++;const B=tt(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,P,pe,B.width,B.height)}for(let B=0;B<6;B++)if(Le){ke?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,te[B].width,te[B].height,ge,fe,te[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,pe,te[B].width,te[B].height,0,ge,fe,te[B].data);for(let ne=0;ne<ae.length;ne++){const Ge=ae[ne].image[B].image;ke?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne+1,0,0,Ge.width,Ge.height,ge,fe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne+1,pe,Ge.width,Ge.height,0,ge,fe,Ge.data)}}else{ke?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ge,fe,te[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,pe,ge,fe,te[B]);for(let ne=0;ne<ae.length;ne++){const le=ae[ne];ke?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne+1,0,0,ge,fe,le.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ne+1,pe,ge,fe,le.image[B])}}}x(M,ze)&&E(i.TEXTURE_CUBE_MAP),J.__version=ee.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _e(T,M,V,Y,ee,J){const Pe=s.convert(V.format,V.colorSpace),ye=s.convert(V.type),se=C(V.internalFormat,Pe,ye,V.colorSpace);if(!n.get(M).__hasExternalTextures){const Le=Math.max(1,M.width>>J),te=Math.max(1,M.height>>J);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,se,Le,te,M.depth,0,Pe,ye,null):t.texImage2D(ee,J,se,Le,te,0,Pe,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ve(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ee,n.get(V).__webglTexture,0,Me(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ee,n.get(V).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(T,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let Y=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||Ve(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===tn?Y=i.DEPTH_COMPONENT32F:ee.type===dn&&(Y=i.DEPTH_COMPONENT24));const J=Me(M);Ve(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Y,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Y,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const Y=Me(M);V&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const Y=M.textures;for(let ee=0;ee<Y.length;ee++){const J=Y[ee],Pe=s.convert(J.format,J.colorSpace),ye=s.convert(J.type),se=C(J.internalFormat,Pe,ye,J.colorSpace),oe=Me(M);V&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,se,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,se,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,se,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const Y=n.get(M.depthTexture).__webglTexture,ee=Me(M);if(M.depthTexture.format===Nn)Ve(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===hi)Ve(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function be(T){const M=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");We(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]=i.createRenderbuffer(),de(M.__webglDepthbuffer[Y],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),de(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function N(T,M,V){const Y=n.get(T);M!==void 0&&_e(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&be(T)}function ut(T){const M=T.texture,V=n.get(T),Y=n.get(M);T.addEventListener("dispose",O);const ee=T.textures,J=T.isWebGLCubeRenderTarget===!0,Pe=ee.length>1,ye=u(T)||l;if(Pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,c.memory.textures++),J){V.__webglFramebuffer=[];for(let se=0;se<6;se++)if(l&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[se]=[];for(let oe=0;oe<M.mipmaps.length;oe++)V.__webglFramebuffer[se][oe]=i.createFramebuffer()}else V.__webglFramebuffer[se]=i.createFramebuffer()}else{if(l&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)V.__webglFramebuffer[se]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pe)if(r.drawBuffers)for(let se=0,oe=ee.length;se<oe;se++){const Le=n.get(ee[se]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),c.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&T.samples>0&&Ve(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let se=0;se<ee.length;se++){const oe=ee[se];V.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[se]);const Le=s.convert(oe.format,oe.colorSpace),te=s.convert(oe.type),it=C(oe.internalFormat,Le,te,oe.colorSpace,T.isXRRenderTarget===!0),ze=Me(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,it,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,V.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),de(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),H(i.TEXTURE_CUBE_MAP,M,ye);for(let se=0;se<6;se++)if(l&&M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)_e(V.__webglFramebuffer[se][oe],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else _e(V.__webglFramebuffer[se],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);x(M,ye)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let se=0,oe=ee.length;se<oe;se++){const Le=ee[se],te=n.get(Le);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),H(i.TEXTURE_2D,Le,ye),_e(V.__webglFramebuffer,T,Le,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),x(Le,ye)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(l?se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,Y.__webglTexture),H(se,M,ye),l&&M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)_e(V.__webglFramebuffer[oe],T,M,i.COLOR_ATTACHMENT0,se,oe);else _e(V.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,se,0);x(M,ye)&&E(se),t.unbindTexture()}T.depthBuffer&&be(T)}function ve(T){const M=u(T)||l,V=T.textures;for(let Y=0,ee=V.length;Y<ee;Y++){const J=V[Y];if(x(J,M)){const Pe=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(J).__webglTexture;t.bindTexture(Pe,ye),E(Pe),t.unbindTexture()}}}function Oe(T){if(l&&T.samples>0&&Ve(T)===!1){const M=T.textures,V=T.width,Y=T.height;let ee=i.COLOR_BUFFER_BIT;const J=[],Pe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(T),se=M.length>1;if(se)for(let oe=0;oe<M.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){J.push(i.COLOR_ATTACHMENT0+oe),T.depthBuffer&&J.push(Pe);const Le=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Le===!1&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),se&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[oe]),Le===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),se){const te=n.get(M[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,ee,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let oe=0;oe<M.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[oe]);const Le=n.get(M[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Me(T){return Math.min(r.maxSamples,T.samples)}function Ve(T){const M=n.get(T);return l&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ne(T){const M=c.render.frame;a.get(T)!==M&&(a.set(T,M),T.update())}function Be(T,M){const V=T.colorSpace,Y=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===cs||V!==xn&&V!==hn&&(qe.getTransfer(V)===$e?l===!1?e.has("EXT_sRGB")===!0&&Y===Ot?(T.format=cs,T.minFilter=Et,T.generateMipmaps=!1):M=Mo.sRGBToLinear(M):(Y!==Ot||ee!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(m.width=T.naturalWidth||T.width,m.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(m.width=T.displayWidth,m.height=T.displayHeight):(m.width=T.width,m.height=T.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=R,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=N,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ve}function Zf(i,e,t){const n=t.isWebGL2;function r(s,c=hn){let l;const d=qe.getTransfer(c);if(s===mn)return i.UNSIGNED_BYTE;if(s===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Pl)return i.BYTE;if(s===Ll)return i.SHORT;if(s===_s)return i.UNSIGNED_SHORT;if(s===co)return i.INT;if(s===dn)return i.UNSIGNED_INT;if(s===tn)return i.FLOAT;if(s===wi)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===Dl)return i.ALPHA;if(s===Ot)return i.RGBA;if(s===Il)return i.LUMINANCE;if(s===Ul)return i.LUMINANCE_ALPHA;if(s===Nn)return i.DEPTH_COMPONENT;if(s===hi)return i.DEPTH_STENCIL;if(s===cs)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===Nl)return i.RED;if(s===fo)return i.RED_INTEGER;if(s===Fl)return i.RG;if(s===po)return i.RG_INTEGER;if(s===mo)return i.RGBA_INTEGER;if(s===yr||s===Sr||s===Er||s===Tr)if(d===$e)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===yr)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Er)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===yr)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sr)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Er)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tr)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bs||s===zs||s===Gs||s===Hs)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Bs)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zs)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gs)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hs)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_o)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vs||s===ks)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Vs)return d===$e?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===ks)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ws||s===Xs||s===qs||s===Ys||s===js||s===$s||s===Ks||s===Zs||s===Js||s===Qs||s===ea||s===ta||s===na||s===ia)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Ws)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xs)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qs)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ys)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===js)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$s)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ks)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zs)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Js)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qs)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ea)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ta)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===na)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ia)return d===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===br||s===ra||s===sa)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===br)return d===$e?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ra)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sa)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ol||s===aa||s===oa||s===la)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===br)return l.COMPRESSED_RED_RGTC1_EXT;if(s===aa)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===oa)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===la)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Un?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Jf extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ai extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,c=null;const l=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),u=this._getHandJoint(f,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const m=f.joints["index-finger-tip"],a=f.joints["thumb-tip"],o=m.position.distanceTo(a.position),h=.02,_=.005;f.inputState.pinching&&o>h+_?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&o<=h-_&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return l!==null&&(l.visible=r!==null),d!==null&&(d.visible=s!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ep=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new St,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new vn({extensions:{fragDepth:!0},vertexShader:ep,fragmentShader:tp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new et(new fi(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class ip extends pi{constructor(e,t){super();const n=this;let r=null,s=1,c=null,l="local-floor",d=1,f=null,m=null,a=null,o=null,h=null,_=null;const g=new np,p=t.getContextAttributes();let u=null,y=null;const x=[],E=[],C=new Se;let w=null;const A=new Dt;A.layers.enable(1),A.viewport=new ct;const L=new Dt;L.layers.enable(2),L.viewport=new ct;const O=[A,L],v=new Jf;v.layers.enable(1),v.layers.enable(2);let b=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=x[H];return Q===void 0&&(Q=new Jr,x[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=x[H];return Q===void 0&&(Q=new Jr,x[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=x[H];return Q===void 0&&(Q=new Jr,x[H]=Q),Q.getHandSpace()};function $(H){const Q=E.indexOf(H.inputSource);if(Q===-1)return;const ue=x[Q];ue!==void 0&&(ue.update(H.inputSource,H.frame,f||c),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function R(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",X);for(let H=0;H<x.length;H++){const Q=E[H];Q!==null&&(E[H]=null,x[H].disconnect(Q))}b=null,q=null,g.reset(),e.setRenderTarget(u),h=null,o=null,a=null,r=null,y=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){l=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(H){f=H},this.getBaseLayer=function(){return o!==null?o:h},this.getBinding=function(){return a},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",R),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Fn(h.framebufferWidth,h.framebufferHeight,{format:Ot,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ue=null,Te=null;p.depth&&(Te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?hi:Nn,ue=p.stencil?Un:dn);const _e={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};a=new XRWebGLBinding(r,t),o=a.createProjectionLayer(_e),r.updateRenderState({layers:[o]}),e.setPixelRatio(1),e.setSize(o.textureWidth,o.textureHeight,!1),y=new Fn(o.textureWidth,o.textureHeight,{format:Ot,type:mn,depthTexture:new Do(o.textureWidth,o.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const de=e.properties.get(y);de.__ignoreDepthValues=o.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await r.requestReferenceSpace(l),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(H){for(let Q=0;Q<H.removed.length;Q++){const ue=H.removed[Q],Te=E.indexOf(ue);Te>=0&&(E[Te]=null,x[Te].disconnect(ue))}for(let Q=0;Q<H.added.length;Q++){const ue=H.added[Q];let Te=E.indexOf(ue);if(Te===-1){for(let de=0;de<x.length;de++)if(de>=E.length){E.push(ue),Te=de;break}else if(E[de]===null){E[de]=ue,Te=de;break}if(Te===-1)break}const _e=x[Te];_e&&_e.connect(ue)}}const k=new D,K=new D;function W(H,Q,ue){k.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);const Te=k.distanceTo(K),_e=Q.projectionMatrix.elements,de=ue.projectionMatrix.elements,We=_e[14]/(_e[10]-1),be=_e[14]/(_e[10]+1),N=(_e[9]+1)/_e[5],ut=(_e[9]-1)/_e[5],ve=(_e[8]-1)/_e[0],Oe=(de[8]+1)/de[0],Me=We*ve,Ve=We*Oe,Ne=Te/(-ve+Oe),Be=Ne*-ve;Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Be),H.translateZ(Ne),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const tt=We+Ne,T=be+Ne,M=Me-Be,V=Ve+(Te-Be),Y=N*be/T*tt,ee=ut*be/T*tt;H.projectionMatrix.makePerspective(M,V,Y,ee,tt,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function j(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;g.texture!==null&&(H.near=g.depthNear,H.far=g.depthFar),v.near=L.near=A.near=H.near,v.far=L.far=A.far=H.far,(b!==v.near||q!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,q=v.far,A.near=b,A.far=q,L.near=b,L.far=q,A.updateProjectionMatrix(),L.updateProjectionMatrix(),H.updateProjectionMatrix());const Q=H.parent,ue=v.cameras;j(v,Q);for(let Te=0;Te<ue.length;Te++)j(ue[Te],Q);ue.length===2?W(v,A,L):v.projectionMatrix.copy(A.projectionMatrix),Z(H,v,Q)};function Z(H,Q,ue){ue===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=us*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(o===null&&h===null))return d},this.setFoveation=function(H){d=H,o!==null&&(o.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null};let re=null;function he(H,Q){if(m=Q.getViewerPose(f||c),_=Q,m!==null){const ue=m.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Te=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,Te=!0);for(let de=0;de<ue.length;de++){const We=ue[de];let be=null;if(h!==null)be=h.getViewport(We);else{const ut=a.getViewSubImage(o,We);be=ut.viewport,de===0&&(e.setRenderTargetTextures(y,ut.colorTexture,o.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(y))}let N=O[de];N===void 0&&(N=new Dt,N.layers.enable(de),N.viewport=new ct,O[de]=N),N.matrix.fromArray(We.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(We.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(be.x,be.y,be.width,be.height),de===0&&(v.matrix.copy(N.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Te===!0&&v.cameras.push(N)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const de=a.getDepthInformation(ue[0]);de&&de.isValid&&de.texture&&g.init(e,de,r.renderState)}}for(let ue=0;ue<x.length;ue++){const Te=E[ue],_e=x[ue];Te!==null&&_e!==void 0&&_e.update(Te,Q,f||c)}g.render(e,v),re&&re(H,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Ce=new Po;Ce.setAnimationLoop(he),this.setAnimationLoop=function(H){re=H},this.dispose=function(){}}}const wn=new Gt,rp=new Qe;function sp(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,wo(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,y,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),a(p,u)):u.isMeshPhongMaterial?(s(p,u),m(p,u)):u.isMeshStandardMaterial?(s(p,u),o(p,u),u.isMeshPhysicalMaterial&&h(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),g(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(c(p,u),u.isLineDashedMaterial&&l(p,u)):u.isPointsMaterial?d(p,u,y,x):u.isSpriteMaterial?f(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===bt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===bt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u),x=y.envMap,E=y.envMapRotation;if(x&&(p.envMap.value=x,wn.copy(E),wn.x*=-1,wn.y*=-1,wn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),p.envMapRotation.value.setFromMatrix4(rp.makeRotationFromEuler(wn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const C=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*C,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function l(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function d(p,u,y,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function m(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function a(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function o(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function h(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===bt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ap(i,e,t,n){let r={},s={},c=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(y,x){const E=x.program;n.uniformBlockBinding(y,E)}function f(y,x){let E=r[y.id];E===void 0&&(_(y),E=m(y),r[y.id]=E,y.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(y,C);const w=e.render.frame;s[y.id]!==w&&(o(y),s[y.id]=w)}function m(y){const x=a();y.__bindingPointIndex=x;const E=i.createBuffer(),C=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function a(){for(let y=0;y<l;y++)if(c.indexOf(y)===-1)return c.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function o(y){const x=r[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,A=E.length;w<A;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let O=0,v=L.length;O<v;O++){const b=L[O];if(h(b,w,O,C)===!0){const q=b.__offset,$=Array.isArray(b.value)?b.value:[b.value];let R=0;for(let X=0;X<$.length;X++){const k=$[X],K=g(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,q+R,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,R),R+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,x,E,C){const w=y.value,A=x+"_"+E;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const L=C[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(y){const x=y.uniforms;let E=0;const C=16;for(let A=0,L=x.length;A<L;A++){const O=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,b=O.length;v<b;v++){const q=O[v],$=Array.isArray(q.value)?q.value:[q.value];for(let R=0,X=$.length;R<X;R++){const k=$[R],K=g(k),W=E%C;W!==0&&C-W<K.boundary&&(E+=C-W),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=K.storage}}}const w=E%C;return w>0&&(E+=C-w),y.__size=E,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const E=c.indexOf(x.__bindingPointIndex);c.splice(E,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const y in r)i.deleteBuffer(r[y]);c=[],r={},s={}}return{bind:d,update:f,dispose:u}}class Bo{constructor(e={}){const{canvas:t=$l(),context:n=null,depth:r=!0,stencil:s=!0,alpha:c=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:a=!1}=e;this.isWebGLRenderer=!0;let o;n!==null?o=n.getContextAttributes().alpha:o=c;const h=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const x=this;let E=!1,C=0,w=0,A=null,L=-1,O=null;const v=new ct,b=new ct;let q=null;const $=new He(0);let R=0,X=t.width,k=t.height,K=1,W=null,j=null;const Z=new ct(0,0,X,k),re=new ct(0,0,X,k);let he=!1;const Ce=new ys;let H=!1,Q=!1,ue=null;const Te=new Qe,_e=new Se,de=new D,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return A===null?K:1}let N=n;function ut(S,I){for(let z=0;z<S.length;z++){const G=S[z],F=t.getContext(G,I);if(F!==null)return F}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ps}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),N=ut(I,S),N===null)throw ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,Oe,Me,Ve,Ne,Be,tt,T,M,V,Y,ee,J,Pe,ye,se,oe,Le,te,it,ze,ge,fe,pe;function ke(){ve=new hd(N),Oe=new sd(N,ve,e),ve.init(Oe),ge=new Zf(N,ve,Oe),Me=new $f(N,ve,Oe),Ve=new pd(N),Ne=new Nf,Be=new Kf(N,ve,Me,Ne,Oe,ge,Ve),tt=new od(x),T=new ud(x),M=new Mc(N,Oe),fe=new id(N,ve,M,Oe),V=new dd(N,M,Ve,fe),Y=new vd(N,V,M,Ve),te=new gd(N,Oe,Be),se=new ad(Ne),ee=new Uf(x,tt,T,ve,Oe,fe,se),J=new sp(x,Ne),Pe=new Of,ye=new kf(ve,Oe),Le=new nd(x,tt,T,Me,Y,o,d),oe=new jf(x,Y,Oe),pe=new ap(N,Ve,Oe,Me),it=new rd(N,ve,Ve,Oe),ze=new fd(N,ve,Ve,Oe),Ve.programs=ee.programs,x.capabilities=Oe,x.extensions=ve,x.properties=Ne,x.renderLists=Pe,x.shadowMap=oe,x.state=Me,x.info=Ve}ke();const we=new ip(x,N);this.xr=we,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(X,k,!1))},this.getSize=function(S){return S.set(X,k)},this.setSize=function(S,I,z=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,k=I,t.width=Math.floor(S*K),t.height=Math.floor(I*K),z===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(X*K,k*K).floor()},this.setDrawingBufferSize=function(S,I,z){X=S,k=I,K=z,t.width=Math.floor(S*z),t.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,I,z,G){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,I,z,G),Me.viewport(v.copy(Z).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,I,z,G){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,I,z,G),Me.scissor(b.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){Me.setScissorTest(he=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(S=!0,I=!0,z=!0){let G=0;if(S){let F=!1;if(A!==null){const ce=A.texture.format;F=ce===mo||ce===po||ce===fo}if(F){const ce=A.texture.type,me=ce===mn||ce===dn||ce===_s||ce===Un||ce===uo||ce===ho,xe=Le.getClearColor(),Ee=Le.getClearAlpha(),Fe=xe.r,Ae=xe.g,Re=xe.b;me?(h[0]=Fe,h[1]=Ae,h[2]=Re,h[3]=Ee,N.clearBufferuiv(N.COLOR,0,h)):(_[0]=Fe,_[1]=Ae,_[2]=Re,_[3]=Ee,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}I&&(G|=N.DEPTH_BUFFER_BIT),z&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),ye.dispose(),Ne.dispose(),tt.dispose(),T.dispose(),Y.dispose(),fe.dispose(),pe.dispose(),ee.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ct),we.removeEventListener("sessionend",je),ue&&(ue.dispose(),ue=null),vt.stop()};function Ke(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Ve.autoReset,I=oe.enabled,z=oe.autoUpdate,G=oe.needsUpdate,F=oe.type;ke(),Ve.autoReset=S,oe.enabled=I,oe.autoUpdate=z,oe.needsUpdate=G,oe.type=F}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function B(S){const I=S.target;I.removeEventListener("dispose",B),ne(I)}function ne(S){le(S),Ne.remove(S)}function le(S){const I=Ne.get(S).programs;I!==void 0&&(I.forEach(function(z){ee.releaseProgram(z)}),S.isShaderMaterial&&ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,G,F,ce){I===null&&(I=We);const me=F.isMesh&&F.matrixWorld.determinant()<0,xe=ko(S,I,z,G,F);Me.setMaterial(G,me);let Ee=z.index,Fe=1;if(G.wireframe===!0){if(Ee=V.getWireframeAttribute(z),Ee===void 0)return;Fe=2}const Ae=z.drawRange,Re=z.attributes.position;let nt=Ae.start*Fe,At=(Ae.start+Ae.count)*Fe;ce!==null&&(nt=Math.max(nt,ce.start*Fe),At=Math.min(At,(ce.start+ce.count)*Fe)),Ee!==null?(nt=Math.max(nt,0),At=Math.min(At,Ee.count)):Re!=null&&(nt=Math.max(nt,0),At=Math.min(At,Re.count));const ot=At-nt;if(ot<0||ot===1/0)return;fe.setup(F,G,xe,z,Ee);let Yt,Je=it;if(Ee!==null&&(Yt=M.get(Ee),Je=ze,Je.setIndex(Yt)),F.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*be()),Je.setMode(N.LINES)):Je.setMode(N.TRIANGLES);else if(F.isLine){let De=G.linewidth;De===void 0&&(De=1),Me.setLineWidth(De*be()),F.isLineSegments?Je.setMode(N.LINES):F.isLineLoop?Je.setMode(N.LINE_LOOP):Je.setMode(N.LINE_STRIP)}else F.isPoints?Je.setMode(N.POINTS):F.isSprite&&Je.setMode(N.TRIANGLES);if(F.isBatchedMesh)Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Je.renderInstances(nt,ot,F.count);else if(z.isInstancedBufferGeometry){const De=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mr=Math.min(z.instanceCount,De);Je.renderInstances(nt,ot,mr)}else Je.render(nt,ot)};function Ge(S,I,z){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=bt,S.needsUpdate=!0,Li(S,I,z),S.side=gn,S.needsUpdate=!0,Li(S,I,z),S.side=en):Li(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),p=ye.get(z),p.init(),y.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(x._useLegacyLights);const G=new Set;return S.traverse(function(F){const ce=F.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const xe=ce[me];Ge(xe,z,F),G.add(xe)}else Ge(ce,z,F),G.add(ce)}),y.pop(),p=null,G},this.compileAsync=function(S,I,z=null){const G=this.compile(S,I,z);return new Promise(F=>{function ce(){if(G.forEach(function(me){Ne.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){F(S);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ye=null;function ht(S){Ye&&Ye(S)}function Ct(){vt.stop()}function je(){vt.start()}const vt=new Po;vt.setAnimationLoop(ht),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(S){Ye=S,we.setAnimationLoop(S),S===null?vt.stop():vt.start()},we.addEventListener("sessionstart",Ct),we.addEventListener("sessionend",je),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(I),I=we.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,A),p=ye.get(S,y.length),p.init(),y.push(p),Te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ce.setFromProjectionMatrix(Te),Q=this.localClippingEnabled,H=se.init(this.clippingPlanes,Q),g=Pe.get(S,u.length),g.init(),u.push(g),Vt(S,I,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(W,j),this.info.render.frame++,H===!0&&se.beginShadows();const z=p.state.shadowsArray;if(oe.render(z,S,I),H===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1)&&Le.render(g,S),p.setupLights(x._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let F=0,ce=G.length;F<ce;F++){const me=G[F];bs(g,S,me,me.viewport)}}else bs(g,S,I);A!==null&&(Be.updateMultisampleRenderTarget(A),Be.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,I),fe.resetDefaultState(),L=-1,O=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Vt(S,I,z,G){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ce.intersectsSprite(S)){G&&de.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);const me=Y.update(S),xe=S.material;xe.visible&&g.push(S,me,xe,z,de.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ce.intersectsObject(S))){const me=Y.update(S),xe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),de.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),de.copy(me.boundingSphere.center)),de.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),Array.isArray(xe)){const Ee=me.groups;for(let Fe=0,Ae=Ee.length;Fe<Ae;Fe++){const Re=Ee[Fe],nt=xe[Re.materialIndex];nt&&nt.visible&&g.push(S,me,nt,z,de.z,Re)}}else xe.visible&&g.push(S,me,xe,z,de.z,null)}}const ce=S.children;for(let me=0,xe=ce.length;me<xe;me++)Vt(ce[me],I,z,G)}function bs(S,I,z,G){const F=S.opaque,ce=S.transmissive,me=S.transparent;p.setupLightsView(z),H===!0&&se.setGlobalState(x.clippingPlanes,z),ce.length>0&&Vo(F,ce,I,z),G&&Me.viewport(v.copy(G)),F.length>0&&Pi(F,I,z),ce.length>0&&Pi(ce,I,z),me.length>0&&Pi(me,I,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Vo(S,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ce=Oe.isWebGL2;ue===null&&(ue=new Fn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?wi:mn,minFilter:In,samples:ce?4:0})),x.getDrawingBufferSize(_e),ce?ue.setSize(_e.x,_e.y):ue.setSize(hs(_e.x),hs(_e.y));const me=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor($),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const xe=x.toneMapping;x.toneMapping=pn,Pi(S,z,G),Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue);let Ee=!1;for(let Fe=0,Ae=I.length;Fe<Ae;Fe++){const Re=I[Fe],nt=Re.object,At=Re.geometry,ot=Re.material,Yt=Re.group;if(ot.side===en&&nt.layers.test(G.layers)){const Je=ot.side;ot.side=bt,ot.needsUpdate=!0,As(nt,z,G,At,ot,Yt),ot.side=Je,ot.needsUpdate=!0,Ee=!0}}Ee===!0&&(Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue)),x.setRenderTarget(me),x.setClearColor($,R),x.toneMapping=xe}function Pi(S,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ce=S.length;F<ce;F++){const me=S[F],xe=me.object,Ee=me.geometry,Fe=G===null?me.material:G,Ae=me.group;xe.layers.test(z.layers)&&As(xe,I,z,Ee,Fe,Ae)}}function As(S,I,z,G,F,ce){S.onBeforeRender(x,I,z,G,F,ce),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(x,I,z,G,S,ce),F.transparent===!0&&F.side===en&&F.forceSinglePass===!1?(F.side=bt,F.needsUpdate=!0,x.renderBufferDirect(z,I,G,F,S,ce),F.side=gn,F.needsUpdate=!0,x.renderBufferDirect(z,I,G,F,S,ce),F.side=en):x.renderBufferDirect(z,I,G,F,S,ce),S.onAfterRender(x,I,z,G,F,ce)}function Li(S,I,z){I.isScene!==!0&&(I=We);const G=Ne.get(S),F=p.state.lights,ce=p.state.shadowsArray,me=F.state.version,xe=ee.getParameters(S,F.state,ce,I,z),Ee=ee.getProgramCacheKey(xe);let Fe=G.programs;G.environment=S.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(S.isMeshStandardMaterial?T:tt).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",B),Fe=new Map,G.programs=Fe);let Ae=Fe.get(Ee);if(Ae!==void 0){if(G.currentProgram===Ae&&G.lightsStateVersion===me)return Rs(S,xe),Ae}else xe.uniforms=ee.getUniforms(S),S.onBuild(z,xe,x),S.onBeforeCompile(xe,x),Ae=ee.acquireProgram(xe,Ee),Fe.set(Ee,Ae),G.uniforms=xe.uniforms;const Re=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=se.uniform),Rs(S,xe),G.needsLights=Xo(S),G.lightsStateVersion=me,G.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ae,G.uniformsList=null,Ae}function ws(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=nr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Rs(S,I){const z=Ne.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function ko(S,I,z,G,F){I.isScene!==!0&&(I=We),Be.resetTextureUnits();const ce=I.fog,me=G.isMeshStandardMaterial?I.environment:null,xe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xn,Ee=(G.isMeshStandardMaterial?T:tt).get(G.envMap||me),Fe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ae=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!z.morphAttributes.position,nt=!!z.morphAttributes.normal,At=!!z.morphAttributes.color;let ot=pn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ot=x.toneMapping);const Yt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=Yt!==void 0?Yt.length:0,De=Ne.get(G),mr=p.state.lights;if(H===!0&&(Q===!0||S!==O)){const Pt=S===O&&G.id===L;se.setState(G,S,Pt)}let Ze=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==mr.state.version||De.outputColorSpace!==xe||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==Ee||G.fog===!0&&De.fog!==ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Ae||De.morphTargets!==Re||De.morphNormals!==nt||De.morphColors!==At||De.toneMapping!==ot||Oe.isWebGL2===!0&&De.morphTargetsCount!==Je)&&(Ze=!0):(Ze=!0,De.__version=G.version);let Mn=De.currentProgram;Ze===!0&&(Mn=Li(G,I,F));let Cs=!1,_i=!1,_r=!1;const ft=Mn.getUniforms(),yn=De.uniforms;if(Me.useProgram(Mn.program)&&(Cs=!0,_i=!0,_r=!0),G.id!==L&&(L=G.id,_i=!0),Cs||O!==S){ft.setValue(N,"projectionMatrix",S.projectionMatrix),ft.setValue(N,"viewMatrix",S.matrixWorldInverse);const Pt=ft.map.cameraPosition;Pt!==void 0&&Pt.setValue(N,de.setFromMatrixPosition(S.matrixWorld)),Oe.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),O!==S&&(O=S,_i=!0,_r=!0)}if(F.isSkinnedMesh){ft.setOptional(N,F,"bindMatrix"),ft.setOptional(N,F,"bindMatrixInverse");const Pt=F.skeleton;Pt&&(Oe.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(N,"boneTexture",Pt.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(ft.setOptional(N,F,"batchingTexture"),ft.setValue(N,"batchingTexture",F._matricesTexture,Be));const gr=z.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0&&Oe.isWebGL2===!0)&&te.update(F,z,Mn),(_i||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,ft.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=Ee,yn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),_i&&(ft.setValue(N,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Wo(yn,_r),ce&&G.fog===!0&&J.refreshFogUniforms(yn,ce),J.refreshMaterialUniforms(yn,G,K,k,ue),nr.upload(N,ws(De),yn,Be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(nr.upload(N,ws(De),yn,Be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(N,"center",F.center),ft.setValue(N,"modelViewMatrix",F.modelViewMatrix),ft.setValue(N,"normalMatrix",F.normalMatrix),ft.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Pt=G.uniformsGroups;for(let vr=0,qo=Pt.length;vr<qo;vr++)if(Oe.isWebGL2){const Ps=Pt[vr];pe.update(Ps,Mn),pe.bind(Ps,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function Wo(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Xo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,I,z){Ne.get(S.texture).__webglTexture=I,Ne.get(S.depthTexture).__webglTexture=z;const G=Ne.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const z=Ne.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){A=S,C=I,w=z;let G=!0,F=null,ce=!1,me=!1;if(S){const Ee=Ne.get(S);Ee.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(N.FRAMEBUFFER,null),G=!1):Ee.__webglFramebuffer===void 0?Be.setupRenderTarget(S):Ee.__hasExternalTextures&&Be.rebindTextures(S,Ne.get(S.texture).__webglTexture,Ne.get(S.depthTexture).__webglTexture);const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const Ae=Ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?F=Ae[I][z]:F=Ae[I],ce=!0):Oe.isWebGL2&&S.samples>0&&Be.useMultisampledRTT(S)===!1?F=Ne.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?F=Ae[z]:F=Ae,v.copy(S.viewport),b.copy(S.scissor),q=S.scissorTest}else v.copy(Z).multiplyScalar(K).floor(),b.copy(re).multiplyScalar(K).floor(),q=he;if(Me.bindFramebuffer(N.FRAMEBUFFER,F)&&Oe.drawBuffers&&G&&Me.drawBuffers(S,F),Me.viewport(v),Me.scissor(b),Me.setScissorTest(q),ce){const Ee=Ne.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,z)}else if(me){const Ee=Ne.get(S.texture),Fe=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.__webglTexture,z||0,Fe)}L=-1},this.readRenderTargetPixels=function(S,I,z,G,F,ce,me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Me.bindFramebuffer(N.FRAMEBUFFER,xe);try{const Ee=S.texture,Fe=Ee.format,Ae=Ee.type;if(Fe!==Ot&&ge.convert(Fe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Ae===wi&&(ve.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ae!==mn&&ge.convert(Ae)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===tn&&(Oe.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-G&&z>=0&&z<=S.height-F&&N.readPixels(I,z,G,F,ge.convert(Fe),ge.convert(Ae),ce)}finally{const Ee=A!==null?Ne.get(A).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(S,I,z=0){const G=Math.pow(2,-z),F=Math.floor(I.image.width*G),ce=Math.floor(I.image.height*G);Be.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,S.x,S.y,F,ce),Me.unbindTexture()},this.copyTextureToTexture=function(S,I,z,G=0){const F=I.image.width,ce=I.image.height,me=ge.convert(z.format),xe=ge.convert(z.type);Be.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,S.x,S.y,F,ce,me,xe,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,G,S.x,S.y,me,xe,I.image),G===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z,G,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=Math.round(S.max.x-S.min.x),me=Math.round(S.max.y-S.min.y),xe=S.max.z-S.min.z+1,Ee=ge.convert(G.format),Fe=ge.convert(G.type);let Ae;if(G.isData3DTexture)Be.setTexture3D(G,0),Ae=N.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Be.setTexture2DArray(G,0),Ae=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const Re=N.getParameter(N.UNPACK_ROW_LENGTH),nt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),At=N.getParameter(N.UNPACK_SKIP_PIXELS),ot=N.getParameter(N.UNPACK_SKIP_ROWS),Yt=N.getParameter(N.UNPACK_SKIP_IMAGES),Je=z.isCompressedTexture?z.mipmaps[F]:z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Je.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?N.texSubImage3D(Ae,F,I.x,I.y,I.z,ce,me,xe,Ee,Fe,Je.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,F,I.x,I.y,I.z,ce,me,xe,Ee,Je.data):N.texSubImage3D(Ae,F,I.x,I.y,I.z,ce,me,xe,Ee,Fe,Je),N.pixelStorei(N.UNPACK_ROW_LENGTH,Re),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,At),N.pixelStorei(N.UNPACK_SKIP_ROWS,ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Yt),F===0&&G.generateMipmaps&&N.generateMipmap(Ae),Me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Be.setTextureCube(S,0):S.isData3DTexture?Be.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Be.setTexture2DArray(S,0):Be.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vs?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===dr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class op extends Bo{}op.prototype.isWebGL1Renderer=!0;class lp extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ls,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xo("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new D;class ur{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zo extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ei;const Si=new D,ti=new D,ni=new D,ii=new Se,Ei=new Se,Go=new Qe,Qi=new D,Ti=new D,er=new D,Ja=new Se,Qr=new Se,Qa=new Se;class up extends dt{constructor(e=new zo){if(super(),this.isSprite=!0,this.type="Sprite",ei===void 0){ei=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cp(t,5);ei.setIndex([0,1,2,0,2,3]),ei.setAttribute("position",new ur(n,3,0,!1)),ei.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=ei,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ti.setFromMatrixScale(this.matrixWorld),Go.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ti.multiplyScalar(-ni.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const c=this.center;tr(Qi.set(-.5,-.5,0),ni,c,ti,r,s),tr(Ti.set(.5,-.5,0),ni,c,ti,r,s),tr(er.set(.5,.5,0),ni,c,ti,r,s),Ja.set(0,0),Qr.set(1,0),Qa.set(1,1);let l=e.ray.intersectTriangle(Qi,Ti,er,!1,Si);if(l===null&&(tr(Ti.set(-.5,.5,0),ni,c,ti,r,s),Qr.set(0,1),l=e.ray.intersectTriangle(Qi,er,Ti,!1,Si),l===null))return;const d=e.ray.origin.distanceTo(Si);d<e.near||d>e.far||t.push({distance:d,point:Si.clone(),uv:Bt.getInterpolation(Si,Qi,Ti,er,Ja,Qr,Qa,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function tr(i,e,t,n,r,s){ii.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ei.x=s*ii.x-r*ii.y,Ei.y=r*ii.x+s*ii.y):Ei.copy(ii),i.copy(e),i.x+=Ei.x,i.y+=Ei.y,i.applyMatrix4(Go)}class hp extends St{constructor(e,t,n,r,s,c,l,d,f){super(e,t,n,r,s,c,l,d,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class li extends Ht{constructor(e=1,t=1,n=1,r=32,s=1,c=!1,l=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:c,thetaStart:l,thetaLength:d};const f=this;r=Math.floor(r),s=Math.floor(s);const m=[],a=[],o=[],h=[];let _=0;const g=[],p=n/2;let u=0;y(),c===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(m),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(h,2));function y(){const E=new D,C=new D;let w=0;const A=(t-e)/n;for(let L=0;L<=s;L++){const O=[],v=L/s,b=v*(t-e)+e;for(let q=0;q<=r;q++){const $=q/r,R=$*d+l,X=Math.sin(R),k=Math.cos(R);C.x=b*X,C.y=-v*n+p,C.z=b*k,a.push(C.x,C.y,C.z),E.set(X,A,k).normalize(),o.push(E.x,E.y,E.z),h.push($,1-v),O.push(_++)}g.push(O)}for(let L=0;L<r;L++)for(let O=0;O<s;O++){const v=g[O][L],b=g[O+1][L],q=g[O+1][L+1],$=g[O][L+1];m.push(v,b,$),m.push(b,q,$),w+=6}f.addGroup(u,w,0),u+=w}function x(E){const C=_,w=new Se,A=new D;let L=0;const O=E===!0?e:t,v=E===!0?1:-1;for(let q=1;q<=r;q++)a.push(0,p*v,0),o.push(0,v,0),h.push(.5,.5),_++;const b=_;for(let q=0;q<=r;q++){const R=q/r*d+l,X=Math.cos(R),k=Math.sin(R);A.x=O*k,A.y=p*v,A.z=O*X,a.push(A.x,A.y,A.z),o.push(0,v,0),w.x=X*.5+.5,w.y=k*.5*v+.5,h.push(w.x,w.y),_++}for(let q=0;q<r;q++){const $=C+q,R=b+q;E===!0?m.push(R,R+1,$):m.push(R+1,R,$),L+=3}f.addGroup(u,L,E===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Es extends Ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],c=[];l(r),f(n),m(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(c,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(y){const x=new D,E=new D,C=new D;for(let w=0;w<t.length;w+=3)h(t[w+0],x),h(t[w+1],E),h(t[w+2],C),d(x,E,C,y)}function d(y,x,E,C){const w=C+1,A=[];for(let L=0;L<=w;L++){A[L]=[];const O=y.clone().lerp(E,L/w),v=x.clone().lerp(E,L/w),b=w-L;for(let q=0;q<=b;q++)q===0&&L===w?A[L][q]=O:A[L][q]=O.clone().lerp(v,q/b)}for(let L=0;L<w;L++)for(let O=0;O<2*(w-L)-1;O++){const v=Math.floor(O/2);O%2===0?(o(A[L][v+1]),o(A[L+1][v]),o(A[L][v])):(o(A[L][v+1]),o(A[L+1][v+1]),o(A[L+1][v]))}}function f(y){const x=new D;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(y),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function m(){const y=new D;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const E=p(y)/2/Math.PI+.5,C=u(y)/Math.PI+.5;c.push(E,1-C)}_(),a()}function a(){for(let y=0;y<c.length;y+=6){const x=c[y+0],E=c[y+2],C=c[y+4],w=Math.max(x,E,C),A=Math.min(x,E,C);w>.9&&A<.1&&(x<.2&&(c[y+0]+=1),E<.2&&(c[y+2]+=1),C<.2&&(c[y+4]+=1))}}function o(y){s.push(y.x,y.y,y.z)}function h(y,x){const E=y*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function _(){const y=new D,x=new D,E=new D,C=new D,w=new Se,A=new Se,L=new Se;for(let O=0,v=0;O<s.length;O+=9,v+=6){y.set(s[O+0],s[O+1],s[O+2]),x.set(s[O+3],s[O+4],s[O+5]),E.set(s[O+6],s[O+7],s[O+8]),w.set(c[v+0],c[v+1]),A.set(c[v+2],c[v+3]),L.set(c[v+4],c[v+5]),C.copy(y).add(x).add(E).divideScalar(3);const b=p(C);g(w,v+0,y,b),g(A,v+2,x,b),g(L,v+4,E,b)}}function g(y,x,E,C){C<0&&y.x===1&&(c[x]=y.x-1),E.x===0&&E.z===0&&(c[x]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.vertices,e.indices,e.radius,e.details)}}class Ts extends Es{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ts(e.radius,e.detail)}}class pr extends Ht{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(c+l,Math.PI);let f=0;const m=[],a=new D,o=new D,h=[],_=[],g=[],p=[];for(let u=0;u<=n;u++){const y=[],x=u/n;let E=0;u===0&&c===0?E=.5/t:u===n&&d===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const w=C/t;a.x=-e*Math.cos(r+w*s)*Math.sin(c+x*l),a.y=e*Math.cos(c+x*l),a.z=e*Math.sin(r+w*s)*Math.sin(c+x*l),_.push(a.x,a.y,a.z),o.copy(a).normalize(),g.push(o.x,o.y,o.z),p.push(w+E,1-x),y.push(f++)}m.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const x=m[u][y+1],E=m[u][y],C=m[u+1][y],w=m[u+1][y+1];(u!==0||c>0)&&h.push(x,E,w),(u!==n-1||d<Math.PI)&&h.push(E,C,w)}this.setIndex(h),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qt extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dp extends On{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ms,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ho extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const es=new Qe,eo=new D,to=new D;class fp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;eo.setFromMatrixPosition(e.matrixWorld),t.position.copy(eo),to.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(to),t.updateMatrixWorld(),es.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(es),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pp extends fp{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mp extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new pp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _p extends Ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=no(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=no();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function no(){return(typeof performance>"u"?Date:performance).now()}const io=new Qe;class ro{constructor(e,t,n=0,r=1/0){this.ray=new Eo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return io.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(io),this}intersectObject(e,t=!0,n=[]){return fs(e,this,n,t),n.sort(so),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)fs(e[r],this,n,t);return n.sort(so),n}}function so(i,e){return i.distance-e.distance}function fs(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,c=r.length;s<c;s++)fs(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ps}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ps);class ao{constructor(e,t,n,r){this.scene=e,this.username=r,this.score=0,this.isJumping=!1,this.jumpVelocity=0,this.jumpHeight=2,this.jumpDuration=1,this.speed=5,this.radius=.5,this.createModel(n),this.mesh.position.copy(t),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.createUsernameLabel(),this.updateUsernamePosition(),e.add(this.mesh),e.add(this.usernameLabel)}createModel(e){const t=new Ai,n=new li(.1,.1,1,8),r=new qt({color:e}),s=new et(n,r);s.position.y=.5,t.add(s);const c=new pr(.2,8,8),l=new qt({color:e}),d=new et(c,l);d.position.y=1.4,t.add(d);const f=new li(.05,.05,.5,8),m=new qt({color:e}),a=new et(f,m);a.position.set(-.3,1.1,0),a.rotation.z=Math.PI/4,t.add(a);const o=new et(f,m);o.position.set(.3,1.1,0),o.rotation.z=-Math.PI/4,t.add(o);const h=new li(.05,.05,.7,8),_=new qt({color:e}),g=new et(h,_);g.position.set(-.1,.15,0),g.rotation.z=Math.PI/6,t.add(g);const p=new et(h,_);p.position.set(.1,.15,0),p.rotation.z=-Math.PI/6,t.add(p),this.mesh=t}createUsernameLabel(){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=256,e.height=64,t.fillStyle="rgba(0, 0, 0, 0.5)",t.fillRect(0,0,e.width,e.height),t.font="bold 24px Arial",t.fillStyle="white",t.textAlign="center",t.textBaseline="middle",t.fillText(this.username,e.width/2,e.height/2);const n=new hp(e),r=new zo({map:n});this.usernameLabel=new up(r),this.usernameLabel.scale.set(2,.5,1)}updateUsernamePosition(){this.usernameLabel.position.copy(this.mesh.position),this.usernameLabel.position.y+=2}update(e,t){const n=t.getMovementVector();this.mesh.position.x+=n.x*this.speed*e,this.mesh.position.z+=n.z*this.speed*e,t.isJumping()&&!this.isJumping&&this.startJump(),this.isJumping&&this.updateJump(e),this.updateUsernamePosition(),this.updateAnimation(n)}startJump(){this.isJumping=!0,this.jumpVelocity=2*this.jumpHeight*Math.PI/this.jumpDuration}updateJump(e){this.jumpVelocity-=9.8*e,this.mesh.position.y+=this.jumpVelocity*e,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.isJumping=!1,this.jumpVelocity=0)}updateAnimation(e){(e.x!==0||e.z!==0)&&(this.mesh.rotation.y=Math.atan2(e.x,e.z));const t=Date.now()*.01,n=Math.sin(t)*.3,r=Math.sin(t)*.2;this.mesh.children[1].rotation.z=Math.PI/4+n,this.mesh.children[2].rotation.z=-Math.PI/4-n,this.mesh.children[3].rotation.z=Math.PI/6+r,this.mesh.children[4].rotation.z=-Math.PI/6-r}addScore(e){this.score+=e}getScore(){return this.score}getPosition(){return this.mesh.position}dispose(){this.scene.remove(this.mesh),this.scene.remove(this.usernameLabel)}}const _t=class _t{static setLevel(e){_t.currentLevel=e}static debug(e,...t){_t.currentLevel<=_t.levels.DEBUG&&console.debug(`[DEBUG] ${e}`,...t)}static info(e,...t){_t.currentLevel<=_t.levels.INFO&&console.info(`[INFO] ${e}`,...t)}static warn(e,...t){_t.currentLevel<=_t.levels.WARN&&console.warn(`[WARN] ${e}`,...t)}static error(e,t=null,...n){_t.currentLevel<=_t.levels.ERROR&&(console.error(`[ERROR] ${e}`,t,...n),t&&(console.error(t),t.stack&&console.error(t.stack)))}static logGameState(e){_t.debug("Game State:",{time:e.gameTime,scores:e.scores,lootCount:e.lootCount,isFrenzy:e.isFrenzy,isGameOver:e.isGameOver})}static logEntityState(e,t){_t.debug(`${t} State:`,{position:e.getPosition(),score:e.getScore?e.getScore():null,isJumping:e.isJumping})}};xr(_t,"levels",{DEBUG:0,INFO:1,WARN:2,ERROR:3}),xr(_t,"currentLevel",_t.levels.DEBUG);let U=_t;class vp{constructor(e,t,n){try{U.info("Initializing GreedBot"),this.scene=e,this.position=t,this.uiManager=n,this.radius=1,this.speed=.5,this.isFrenzy=!1,this.isGreedRush=!1,this.greedRushDuration=5,this.greedRushTimer=0,this.stolenPoints=0,this.createModel(),U.debug("GreedBot created",{position:t})}catch(r){throw U.error("Failed to initialize GreedBot",r),r}}createModel(){try{U.debug("Creating GreedBot model");const e=new pr(this.radius,32,32),t=new dp({color:16711680,emissive:16711680,emissiveIntensity:.5});this.mesh=new et(e,t),this.mesh.position.copy(this.position),this.mesh.castShadow=!0,this.scene.add(this.mesh),this.pulseScale=1,this.pulseSpeed=2,U.debug("GreedBot model created successfully")}catch(e){throw U.error("Failed to create GreedBot model",e),e}}update(e,t,n){try{this.isGreedRush&&(this.greedRushTimer+=e,this.greedRushTimer>=this.greedRushDuration&&(U.debug("Greed Rush ended"),this.isGreedRush=!1,this.greedRushTimer=0));let r=null,s=1/0;if(t.forEach(c=>{const l=this.position.distanceTo(c.getPosition());l<s&&(s=l,r=c)}),r){const c=new D().subVectors(r.getPosition(),this.position).normalize(),l=this.isFrenzy?this.speed*.5:this.speed;this.position.add(c.multiplyScalar(l)),this.mesh.position.copy(this.position),s<10?(U.debug("GreedBot near player",{distance:s}),this.uiManager&&this.uiManager.showGreedBotWarning(s)):this.uiManager&&this.uiManager.hideGreedBotWarning()}this.pulseScale=1+Math.sin(Date.now()*.001*this.pulseSpeed)*.1,this.mesh.scale.set(this.pulseScale,this.pulseScale,this.pulseScale)}catch(r){throw U.error("Error updating GreedBot",r),r}}getPosition(){return this.position}setFrenzy(e){try{U.debug("Setting GreedBot frenzy state",{frenzy:e}),this.isFrenzy=e}catch(t){throw U.error("Failed to set GreedBot frenzy state",t),t}}startGreedRush(e){try{U.info("Starting Greed Rush",{points:e}),this.isGreedRush=!0,this.greedRushTimer=0,this.stolenPoints=e}catch(t){throw U.error("Failed to start Greed Rush",t),t}}dispose(){try{U.debug("Disposing GreedBot"),this.scene.remove(this.mesh)}catch(e){throw U.error("Failed to dispose GreedBot",e),e}}}class ts{constructor(e,t,n){this.scene=e,this.position=t,this.type=n,this.radius=.2,this.createModel()}createModel(){let e,t;switch(this.type){case"coin":e=new li(.15,.15,.05,16),t=new qt({color:16766720,metalness:.8,roughness:.2,emissive:16766720,emissiveIntensity:.2}),this.points=1;break;case"gem":e=new Ts(.2,0),t=new qt({color:65535,metalness:.5,roughness:.1,transparent:!0,opacity:.8,emissive:65535,emissiveIntensity:.3}),this.points=5;break;case"chest":e=new rn(.3,.2,.2),t=new qt({color:9127187,metalness:.3,roughness:.7}),this.points=10;break}this.mesh=new et(e,t),this.mesh.position.copy(this.position),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh),this.animationOffset=Math.random()*Math.PI*2,this.animationSpeed=1+Math.random()*.5}update(e){this.mesh.position.y=this.position.y+Math.sin(Date.now()*.001*this.animationSpeed+this.animationOffset)*.2,this.mesh.rotation.y+=e*2}getPosition(){return this.mesh.position}getPoints(){return this.points}dispose(){this.scene.remove(this.mesh)}}class xp{constructor(e){this.scene=e,this.size=50,this.height=10,this.cubeSize=1,this.platforms=[],this.createArena()}createArena(){this.createBaseLayer(),this.createElevatedPlatforms(),this.createObstacles(),this.createVoidEffect(),this.addLighting()}createBaseLayer(){const e=new rn(this.cubeSize,this.cubeSize,this.cubeSize),t=new qt({color:8421504,roughness:.8,metalness:.2});for(let n=-this.size/2;n<this.size/2;n+=this.cubeSize)for(let r=-this.size/2;r<this.size/2;r+=this.cubeSize){const s=new et(e,t);s.position.set(n,-this.cubeSize/2,r),s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s),this.platforms.push(s)}}createElevatedPlatforms(){const e=new rn(this.cubeSize,this.cubeSize,this.cubeSize),t=new qt({color:8421504,roughness:.8,metalness:.2}),n=10+Math.floor(Math.random()*6);for(let r=0;r<n;r++){const s=1+Math.floor(Math.random()*2),c=(Math.random()-.5)*(this.size-4),l=(Math.random()-.5)*(this.size-4);for(let d=0;d<s;d++){const f=new et(e,t);f.position.set(c,d-this.cubeSize/2,l),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f),this.platforms.push(f)}}}createObstacles(){const e=new rn(this.cubeSize,this.cubeSize,this.cubeSize),t=new qt({color:4210752,roughness:.9,metalness:.1}),n=5+Math.floor(Math.random()*3);for(let r=0;r<n;r++){const s=(Math.random()-.5)*(this.size-4),c=(Math.random()-.5)*(this.size-4),l=new et(e,t);l.position.set(s,0,c),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.platforms.push(l)}}createVoidEffect(){const e=new fi(this.size*2,this.size*2),t=new cr({color:0,transparent:!0,opacity:.5}),n=new et(e,t);n.rotation.x=-Math.PI/2,n.position.y=-this.height,this.scene.add(n);const r=new fi(this.size*2,this.size*2),s=new cr({color:16711680,transparent:!0,opacity:.1}),c=new et(r,s);c.rotation.x=-Math.PI/2,c.position.y=-this.height+.1,this.scene.add(c)}addLighting(){const e=new _p(4210752);this.scene.add(e);const t=new mp(16777215,1);t.position.set(0,this.height,0),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=this.height*2,t.shadow.camera.left=-this.size/2,t.shadow.camera.right=this.size/2,t.shadow.camera.top=this.size/2,t.shadow.camera.bottom=-this.size/2,this.scene.add(t)}getRandomSpawnPosition(){const e=(Math.random()-.5)*(this.size-4),t=(Math.random()-.5)*(this.size-4);return new D(e,0,t)}isOnPlatform(e){const t=new ro;return t.set(e,new D(0,-1,0)),t.far=2,t.intersectObjects(this.platforms).length>0}getPlatformHeight(e){const t=new ro;t.set(e,new D(0,-1,0)),t.far=this.height;const n=t.intersectObjects(this.platforms);return n.length>0?n[0].point.y:0}dispose(){this.platforms.forEach(e=>{this.scene.remove(e)}),this.platforms=[]}}class Mp{constructor(e,t,n,r,s){try{U.info("Initializing game with username:",s),this.renderer=e,this.audioManager=t,this.uiManager=n,this.inputManager=r,this.username=s,this.scene=new lp,this.scene.background=new He(0),U.debug("Scene created"),this.camera=new Dt(70,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,20,20),this.camera.lookAt(0,0,0),U.debug("Camera created and positioned"),this.arena=new xp(this.scene),U.debug("Arena created"),this.players=[],this.bots=[],this.loot=[],this.greedBot=null,this.scores={},this.gameTime=0,this.roundDuration=120,this.isFrenzy=!1,this.isGameOver=!1,U.debug("Game state initialized"),this.init()}catch(c){throw U.error("Failed to initialize game",c),c}}init(){try{U.info("Starting game initialization");const e=this.arena.getRandomSpawnPosition();this.player=new ao(this.scene,e,255,this.username),this.players.push(this.player),this.scores[this.username]=0,U.debug("Player created",{position:e});const t=["LootBot1","LootBot2","LootBot3","LootBot4","LootBot5"],n=[65280,16711680,16776960,16711935,65535],r=3+Math.floor(Math.random()*4);for(let c=0;c<r;c++){const l=this.arena.getRandomSpawnPosition(),d=new ao(this.scene,l,n[c],t[c]);this.bots.push(d),this.scores[t[c]]=Math.floor(Math.random()*5),U.debug("Bot created",{name:t[c],position:l})}const s=this.arena.getRandomSpawnPosition();this.greedBot=new vp(this.scene,s,this.uiManager),U.debug("Greed Bot created",{position:s}),this.spawnLoot(),U.debug("Initial loot spawned"),this.audioManager.startGreedBotSound(),U.info("Game initialization completed")}catch(e){throw U.error("Failed to initialize game components",e),e}}spawnLoot(){try{const e=10+Math.floor(Math.random()*6),t=1+Math.floor(Math.random()*2),n=1;U.debug("Spawning loot",{numCoins:e,numGems:t,numChests:n});for(let s=0;s<e;s++){const c=this.arena.getRandomSpawnPosition();c.y=.5,this.loot.push(new ts(this.scene,c,"coin"))}for(let s=0;s<t;s++){const c=this.arena.getRandomSpawnPosition();c.y=2,this.loot.push(new ts(this.scene,c,"gem"))}const r=this.arena.getRandomSpawnPosition();r.y=3,this.loot.push(new ts(this.scene,r,"chest")),U.debug("Loot spawned successfully",{totalLoot:this.loot.length,coins:e,gems:t,chests:n})}catch(e){throw U.error("Failed to spawn loot",e),e}}update(e){try{if(this.isGameOver)return;if(this.gameTime+=e,this.gameTime>=110&&!this.isFrenzy&&(U.info("Starting Loot Frenzy"),this.startFrenzy()),this.gameTime>=this.roundDuration){U.info("Round duration reached, ending game"),this.endGame();return}this.player.update(e,this.inputManager),U.logEntityState(this.player,"Player"),this.bots.forEach(t=>{const n={getMovementVector:()=>({x:Math.sin(Date.now()*.001)*.5,z:Math.cos(Date.now()*.001)*.5}),isJumping:()=>Math.random()<.01};t.update(e,n),U.logEntityState(t,"Bot")}),this.greedBot.update(e,[...this.players,...this.bots],this.loot),U.logEntityState(this.greedBot,"GreedBot"),this.loot.forEach(t=>{t.update(e)}),this.checkCollisions(),this.updateScores(),Math.floor(this.gameTime)%5===0&&U.logGameState({gameTime:this.gameTime,scores:this.scores,lootCount:this.loot.length,isFrenzy:this.isFrenzy,isGameOver:this.isGameOver})}catch(t){throw U.error("Error in game update loop",t),t}}checkCollisions(){try{this.loot=this.loot.filter(n=>this.player.getPosition().distanceTo(n.getPosition())<this.player.radius+n.radius?(U.debug("Player collected loot",{type:n.type,points:n.getPoints()}),this.player.addScore(n.getPoints()),this.audioManager.play(n.type+"Collect"),n.dispose(),!1):!0);const e=this.greedBot.getPosition();if(this.player.getPosition().distanceTo(e)<this.player.radius+this.greedBot.radius){const n=this.player.getScore();U.warn("Player caught by Greed Bot",{stolenPoints:n}),this.player.addScore(-n),this.greedBot.startGreedRush(n),this.audioManager.play("greedBot")}this.bots.forEach(n=>{if(n.getPosition().distanceTo(e)<n.radius+this.greedBot.radius){const s=n.getScore();U.warn("Bot caught by Greed Bot",{botName:n.username,stolenPoints:s}),n.addScore(-s),this.greedBot.startGreedRush(s),this.audioManager.play("greedBot")}}),this.loot=this.loot.filter(n=>e.distanceTo(n.getPosition())<this.greedBot.radius+n.radius?(U.debug("Greed Bot destroyed loot",{type:n.type}),n.dispose(),!1):!0)}catch(e){throw U.error("Error in collision detection",e),e}}updateScores(){try{this.scores[this.username]=this.player.getScore(),this.bots.forEach(e=>{this.scores[e.username]=e.getScore()}),this.uiManager.updateLeaderboard(this.scores),this.uiManager.updatePlayerScore(this.player.getScore()),this.player.getScore()>=30&&(U.info("Player reached winning score"),this.endGame())}catch(e){throw U.error("Error updating scores",e),e}}startFrenzy(){try{U.info("Starting Loot Frenzy"),this.isFrenzy=!0,this.greedBot.setFrenzy(!0),this.audioManager.playFrenzyStart(),this.uiManager.showFrenzy(),this.spawnLoot(),U.debug("Loot Frenzy started successfully")}catch(e){throw U.error("Failed to start Loot Frenzy",e),e}}endGame(){try{U.info("Ending game"),this.isGameOver=!0,this.audioManager.stopGreedBotSound();let e=this.username,t=this.player.getScore();Object.entries(this.scores).forEach(([n,r])=>{r>t&&(t=r,e=n)}),U.info("Game ended",{winner:e,scores:this.scores}),this.uiManager.showGameOver(e,this.scores)}catch(e){throw U.error("Error ending game",e),e}}render(){try{this.renderer.render(this.scene,this.camera)}catch(e){throw U.error("Error rendering scene",e),e}}onResize(e,t){try{U.debug("Resizing game view",{width:e,height:t}),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}catch(n){throw U.error("Error handling resize",n),n}}dispose(){try{U.info("Disposing game resources"),this.player.dispose(),this.bots.forEach(e=>e.dispose()),this.loot.forEach(e=>e.dispose()),this.greedBot.dispose(),this.arena.dispose(),U.info("Game resources disposed successfully")}catch(e){throw U.error("Error disposing game resources",e),e}}}var bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pn={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var o=this||t;if(a=parseFloat(a),o.ctx||m(),typeof a<"u"&&a>=0&&a<=1){if(o._volume=a,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var h=0;h<o._howls.length;h++)if(!o._howls[h]._webAudio)for(var _=o._howls[h]._getSoundIds(),g=0;g<_.length;g++){var p=o._howls[h]._soundById(_[g]);p&&p._node&&(p._node.volume=p._volume*a)}return o}return o._volume},mute:function(a){var o=this||t;o.ctx||m(),o._muted=a,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(a?0:o._volume,t.ctx.currentTime);for(var h=0;h<o._howls.length;h++)if(!o._howls[h]._webAudio)for(var _=o._howls[h]._getSoundIds(),g=0;g<_.length;g++){var p=o._howls[h]._soundById(_[g]);p&&p._node&&(p._node.muted=a?!0:p._muted)}return o},stop:function(){for(var a=this||t,o=0;o<a._howls.length;o++)a._howls[o].stop();return a},unload:function(){for(var a=this||t,o=a._howls.length-1;o>=0;o--)a._howls[o].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,m()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var o=new Audio;typeof o.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var o=new Audio;o.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,o=null;try{o=typeof Audio<"u"?new Audio:null}catch{return a}if(!o||typeof o.canPlayType!="function")return a;var h=o.canPlayType("audio/mpeg;").replace(/^no$/,""),_=a._navigator?a._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),p=g&&parseInt(g[0].split("/")[1],10)<33,u=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,y=_.match(/Version\/(.*?) /),x=u&&y&&parseInt(y[1],10)<15;return a._codecs={mp3:!!(!p&&(h||o.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!h,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(o.canPlayType('audio/wav; codecs="1"')||o.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(o.canPlayType("audio/x-m4b;")||o.canPlayType("audio/m4b;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var o=function(h){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,a._releaseHtml5Audio(_)}catch{a.noAudio=!0;break}for(var g=0;g<a._howls.length;g++)if(!a._howls[g]._webAudio)for(var p=a._howls[g]._getSoundIds(),u=0;u<p.length;u++){var y=a._howls[g]._soundById(p[u]);y&&y._node&&!y._node._unlocked&&(y._node._unlocked=!0,y._node.load())}a._autoResume();var x=a.ctx.createBufferSource();x.buffer=a._scratchBuffer,x.connect(a.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),x.onended=function(){x.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0),document.removeEventListener("click",o,!0),document.removeEventListener("keydown",o,!0);for(var E=0;E<a._howls.length;E++)a._howls[E]._emit("unlock")}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),document.addEventListener("click",o,!0),document.addEventListener("keydown",o,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var o=new Audio().play();return o&&typeof Promise<"u"&&(o instanceof Promise||typeof o.then=="function")&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var o=this||t;return a._unlocked&&o._html5AudioPool.push(a),o},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var o=0;o<a._howls.length;o++)if(a._howls[o]._webAudio){for(var h=0;h<a._howls[o]._sounds.length;h++)if(!a._howls[o]._sounds[h]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var _=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(_,_)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var o=0;o<a._howls.length;o++)a._howls[o]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var o=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}o.init(a)};n.prototype={init:function(a){var o=this;return t.ctx||m(),o._autoplay=a.autoplay||!1,o._format=typeof a.format!="string"?a.format:[a.format],o._html5=a.html5||!1,o._muted=a.mute||!1,o._loop=a.loop||!1,o._pool=a.pool||5,o._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,o._rate=a.rate||1,o._sprite=a.sprite||{},o._src=typeof a.src!="string"?a.src:[a.src],o._volume=a.volume!==void 0?a.volume:1,o._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=a.onend?[{fn:a.onend}]:[],o._onfade=a.onfade?[{fn:a.onfade}]:[],o._onload=a.onload?[{fn:a.onload}]:[],o._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],o._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],o._onpause=a.onpause?[{fn:a.onpause}]:[],o._onplay=a.onplay?[{fn:a.onplay}]:[],o._onstop=a.onstop?[{fn:a.onstop}]:[],o._onmute=a.onmute?[{fn:a.onmute}]:[],o._onvolume=a.onvolume?[{fn:a.onvolume}]:[],o._onrate=a.onrate?[{fn:a.onrate}]:[],o._onseek=a.onseek?[{fn:a.onseek}]:[],o._onunlock=a.onunlock?[{fn:a.onunlock}]:[],o._onresume=[],o._webAudio=t.usingWebAudio&&!o._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o._preload!=="none"&&o.load(),o},load:function(){var a=this,o=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var h=0;h<a._src.length;h++){var _,g;if(a._format&&a._format[h])_=a._format[h];else{if(g=a._src[h],typeof g!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){o=a._src[h];break}}if(!o){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=o,a._state="loading",window.location.protocol==="https:"&&o.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new r(a),a._webAudio&&c(a),a},play:function(a,o){var h=this,_=null;if(typeof a=="number")_=a,a=null;else{if(typeof a=="string"&&h._state==="loaded"&&!h._sprite[a])return null;if(typeof a>"u"&&(a="__default",!h._playLock)){for(var g=0,p=0;p<h._sounds.length;p++)h._sounds[p]._paused&&!h._sounds[p]._ended&&(g++,_=h._sounds[p]._id);g===1?a=null:_=null}}var u=_?h._soundById(_):h._inactiveSound();if(!u)return null;if(_&&!a&&(a=u._sprite||"__default"),h._state!=="loaded"){u._sprite=a,u._ended=!1;var y=u._id;return h._queue.push({event:"play",action:function(){h.play(y)}}),y}if(_&&!u._paused)return o||h._loadQueue("play"),u._id;h._webAudio&&t._autoResume();var x=Math.max(0,u._seek>0?u._seek:h._sprite[a][0]/1e3),E=Math.max(0,(h._sprite[a][0]+h._sprite[a][1])/1e3-x),C=E*1e3/Math.abs(u._rate),w=h._sprite[a][0]/1e3,A=(h._sprite[a][0]+h._sprite[a][1])/1e3;u._sprite=a,u._ended=!1;var L=function(){u._paused=!1,u._seek=x,u._start=w,u._stop=A,u._loop=!!(u._loop||h._sprite[a][2])};if(x>=A){h._ended(u);return}var O=u._node;if(h._webAudio){var v=function(){h._playLock=!1,L(),h._refreshBuffer(u);var R=u._muted||h._muted?0:u._volume;O.gain.setValueAtTime(R,t.ctx.currentTime),u._playStart=t.ctx.currentTime,typeof O.bufferSource.start>"u"?u._loop?O.bufferSource.noteGrainOn(0,x,86400):O.bufferSource.noteGrainOn(0,x,E):u._loop?O.bufferSource.start(0,x,86400):O.bufferSource.start(0,x,E),C!==1/0&&(h._endTimers[u._id]=setTimeout(h._ended.bind(h,u),C)),o||setTimeout(function(){h._emit("play",u._id),h._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?v():(h._playLock=!0,h.once("resume",v),h._clearTimer(u._id))}else{var b=function(){O.currentTime=x,O.muted=u._muted||h._muted||t._muted||O.muted,O.volume=u._volume*t.volume(),O.playbackRate=u._rate;try{var R=O.play();if(R&&typeof Promise<"u"&&(R instanceof Promise||typeof R.then=="function")?(h._playLock=!0,L(),R.then(function(){h._playLock=!1,O._unlocked=!0,o?h._loadQueue():h._emit("play",u._id)}).catch(function(){h._playLock=!1,h._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),u._ended=!0,u._paused=!0})):o||(h._playLock=!1,L(),h._emit("play",u._id)),O.playbackRate=u._rate,O.paused){h._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||u._loop?h._endTimers[u._id]=setTimeout(h._ended.bind(h,u),C):(h._endTimers[u._id]=function(){h._ended(u),O.removeEventListener("ended",h._endTimers[u._id],!1)},O.addEventListener("ended",h._endTimers[u._id],!1))}catch(X){h._emit("playerror",u._id,X)}};O.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(O.src=h._src,O.load());var q=window&&window.ejecta||!O.readyState&&t._navigator.isCocoonJS;if(O.readyState>=3||q)b();else{h._playLock=!0,h._state="loading";var $=function(){h._state="loaded",b(),O.removeEventListener(t._canPlayEvent,$,!1)};O.addEventListener(t._canPlayEvent,$,!1),h._clearTimer(u._id)}}return u._id},pause:function(a){var o=this;if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"pause",action:function(){o.pause(a)}}),o;for(var h=o._getSoundIds(a),_=0;_<h.length;_++){o._clearTimer(h[_]);var g=o._soundById(h[_]);if(g&&!g._paused&&(g._seek=o.seek(h[_]),g._rateSeek=0,g._paused=!0,o._stopFade(h[_]),g._node))if(o._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),o._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||o._emit("pause",g?g._id:null)}return o},stop:function(a,o){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"stop",action:function(){h.stop(a)}}),h;for(var _=h._getSoundIds(a),g=0;g<_.length;g++){h._clearTimer(_[g]);var p=h._soundById(_[g]);p&&(p._seek=p._start||0,p._rateSeek=0,p._paused=!0,p._ended=!0,h._stopFade(_[g]),p._node&&(h._webAudio?p._node.bufferSource&&(typeof p._node.bufferSource.stop>"u"?p._node.bufferSource.noteOff(0):p._node.bufferSource.stop(0),h._cleanBuffer(p._node)):(!isNaN(p._node.duration)||p._node.duration===1/0)&&(p._node.currentTime=p._start||0,p._node.pause(),p._node.duration===1/0&&h._clearSound(p._node))),o||h._emit("stop",p._id))}return h},mute:function(a,o){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"mute",action:function(){h.mute(a,o)}}),h;if(typeof o>"u")if(typeof a=="boolean")h._muted=a;else return h._muted;for(var _=h._getSoundIds(o),g=0;g<_.length;g++){var p=h._soundById(_[g]);p&&(p._muted=a,p._interval&&h._stopFade(p._id),h._webAudio&&p._node?p._node.gain.setValueAtTime(a?0:p._volume,t.ctx.currentTime):p._node&&(p._node.muted=t._muted?!0:a),h._emit("mute",p._id))}return h},volume:function(){var a=this,o=arguments,h,_;if(o.length===0)return a._volume;if(o.length===1||o.length===2&&typeof o[1]>"u"){var g=a._getSoundIds(),p=g.indexOf(o[0]);p>=0?_=parseInt(o[0],10):h=parseFloat(o[0])}else o.length>=2&&(h=parseFloat(o[0]),_=parseInt(o[1],10));var u;if(typeof h<"u"&&h>=0&&h<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,o)}}),a;typeof _>"u"&&(a._volume=h),_=a._getSoundIds(_);for(var y=0;y<_.length;y++)u=a._soundById(_[y]),u&&(u._volume=h,o[2]||a._stopFade(_[y]),a._webAudio&&u._node&&!u._muted?u._node.gain.setValueAtTime(h,t.ctx.currentTime):u._node&&!u._muted&&(u._node.volume=h*t.volume()),a._emit("volume",u._id))}else return u=_?a._soundById(_):a._sounds[0],u?u._volume:0;return a},fade:function(a,o,h,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(a,o,h,_)}}),g;a=Math.min(Math.max(0,parseFloat(a)),1),o=Math.min(Math.max(0,parseFloat(o)),1),h=parseFloat(h),g.volume(a,_);for(var p=g._getSoundIds(_),u=0;u<p.length;u++){var y=g._soundById(p[u]);if(y){if(_||g._stopFade(p[u]),g._webAudio&&!y._muted){var x=t.ctx.currentTime,E=x+h/1e3;y._volume=a,y._node.gain.setValueAtTime(a,x),y._node.gain.linearRampToValueAtTime(o,E)}g._startFadeInterval(y,a,o,h,p[u],typeof _>"u")}}return g},_startFadeInterval:function(a,o,h,_,g,p){var u=this,y=o,x=h-o,E=Math.abs(x/.01),C=Math.max(4,E>0?_/E:_),w=Date.now();a._fadeTo=h,a._interval=setInterval(function(){var A=(Date.now()-w)/_;w=Date.now(),y+=x*A,y=Math.round(y*100)/100,x<0?y=Math.max(h,y):y=Math.min(h,y),u._webAudio?a._volume=y:u.volume(y,a._id,!0),p&&(u._volume=y),(h<o&&y<=h||h>o&&y>=h)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,u.volume(h,a._id),u._emit("fade",a._id))},C)},_stopFade:function(a){var o=this,h=o._soundById(a);return h&&h._interval&&(o._webAudio&&h._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(h._interval),h._interval=null,o.volume(h._fadeTo,a),h._fadeTo=null,o._emit("fade",a)),o},loop:function(){var a=this,o=arguments,h,_,g;if(o.length===0)return a._loop;if(o.length===1)if(typeof o[0]=="boolean")h=o[0],a._loop=h;else return g=a._soundById(parseInt(o[0],10)),g?g._loop:!1;else o.length===2&&(h=o[0],_=parseInt(o[1],10));for(var p=a._getSoundIds(_),u=0;u<p.length;u++)g=a._soundById(p[u]),g&&(g._loop=h,a._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=h,h&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,a.playing(p[u])&&(a.pause(p[u],!0),a.play(p[u],!0)))));return a},rate:function(){var a=this,o=arguments,h,_;if(o.length===0)_=a._sounds[0]._id;else if(o.length===1){var g=a._getSoundIds(),p=g.indexOf(o[0]);p>=0?_=parseInt(o[0],10):h=parseFloat(o[0])}else o.length===2&&(h=parseFloat(o[0]),_=parseInt(o[1],10));var u;if(typeof h=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,o)}}),a;typeof _>"u"&&(a._rate=h),_=a._getSoundIds(_);for(var y=0;y<_.length;y++)if(u=a._soundById(_[y]),u){a.playing(_[y])&&(u._rateSeek=a.seek(_[y]),u._playStart=a._webAudio?t.ctx.currentTime:u._playStart),u._rate=h,a._webAudio&&u._node&&u._node.bufferSource?u._node.bufferSource.playbackRate.setValueAtTime(h,t.ctx.currentTime):u._node&&(u._node.playbackRate=h);var x=a.seek(_[y]),E=(a._sprite[u._sprite][0]+a._sprite[u._sprite][1])/1e3-x,C=E*1e3/Math.abs(u._rate);(a._endTimers[_[y]]||!u._paused)&&(a._clearTimer(_[y]),a._endTimers[_[y]]=setTimeout(a._ended.bind(a,u),C)),a._emit("rate",u._id)}}else return u=a._soundById(_),u?u._rate:a._rate;return a},seek:function(){var a=this,o=arguments,h,_;if(o.length===0)a._sounds.length&&(_=a._sounds[0]._id);else if(o.length===1){var g=a._getSoundIds(),p=g.indexOf(o[0]);p>=0?_=parseInt(o[0],10):a._sounds.length&&(_=a._sounds[0]._id,h=parseFloat(o[0]))}else o.length===2&&(h=parseFloat(o[0]),_=parseInt(o[1],10));if(typeof _>"u")return 0;if(typeof h=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,o)}}),a;var u=a._soundById(_);if(u)if(typeof h=="number"&&h>=0){var y=a.playing(_);y&&a.pause(_,!0),u._seek=h,u._ended=!1,a._clearTimer(_),!a._webAudio&&u._node&&!isNaN(u._node.duration)&&(u._node.currentTime=h);var x=function(){y&&a.play(_,!0),a._emit("seek",_)};if(y&&!a._webAudio){var E=function(){a._playLock?setTimeout(E,0):x()};setTimeout(E,0)}else x()}else if(a._webAudio){var C=a.playing(_)?t.ctx.currentTime-u._playStart:0,w=u._rateSeek?u._rateSeek-u._seek:0;return u._seek+(w+C*Math.abs(u._rate))}else return u._node.currentTime;return a},playing:function(a){var o=this;if(typeof a=="number"){var h=o._soundById(a);return h?!h._paused:!1}for(var _=0;_<o._sounds.length;_++)if(!o._sounds[_]._paused)return!0;return!1},duration:function(a){var o=this,h=o._duration,_=o._soundById(a);return _&&(h=o._sprite[_._sprite][1]/1e3),h},state:function(){return this._state},unload:function(){for(var a=this,o=a._sounds,h=0;h<o.length;h++)o[h]._paused||a.stop(o[h]._id),a._webAudio||(a._clearSound(o[h]._node),o[h]._node.removeEventListener("error",o[h]._errorFn,!1),o[h]._node.removeEventListener(t._canPlayEvent,o[h]._loadFn,!1),o[h]._node.removeEventListener("ended",o[h]._endFn,!1),t._releaseHtml5Audio(o[h]._node)),delete o[h]._node,a._clearTimer(o[h]._id);var _=t._howls.indexOf(a);_>=0&&t._howls.splice(_,1);var g=!0;for(h=0;h<t._howls.length;h++)if(t._howls[h]._src===a._src||a._src.indexOf(t._howls[h]._src)>=0){g=!1;break}return s&&g&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,o,h,_){var g=this,p=g["_on"+a];return typeof o=="function"&&p.push(_?{id:h,fn:o,once:_}:{id:h,fn:o}),g},off:function(a,o,h){var _=this,g=_["_on"+a],p=0;if(typeof o=="number"&&(h=o,o=null),o||h)for(p=0;p<g.length;p++){var u=h===g[p].id;if(o===g[p].fn&&u||!o&&u){g.splice(p,1);break}}else if(a)_["_on"+a]=[];else{var y=Object.keys(_);for(p=0;p<y.length;p++)y[p].indexOf("_on")===0&&Array.isArray(_[y[p]])&&(_[y[p]]=[])}return _},once:function(a,o,h){var _=this;return _.on(a,o,h,1),_},_emit:function(a,o,h){for(var _=this,g=_["_on"+a],p=g.length-1;p>=0;p--)(!g[p].id||g[p].id===o||a==="load")&&(setTimeout((function(u){u.call(this,o,h)}).bind(_,g[p].fn),0),g[p].once&&_.off(a,g[p].fn,g[p].id));return _._loadQueue(a),_},_loadQueue:function(a){var o=this;if(o._queue.length>0){var h=o._queue[0];h.event===a&&(o._queue.shift(),o._loadQueue()),a||h.action()}return o},_ended:function(a){var o=this,h=a._sprite;if(!o._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(o._ended.bind(o,a),100),o;var _=!!(a._loop||o._sprite[h][2]);if(o._emit("end",a._id),!o._webAudio&&_&&o.stop(a._id,!0).play(a._id),o._webAudio&&_){o._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var g=(a._stop-a._start)*1e3/Math.abs(a._rate);o._endTimers[a._id]=setTimeout(o._ended.bind(o,a),g)}return o._webAudio&&!_&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,o._clearTimer(a._id),o._cleanBuffer(a._node),t._autoSuspend()),!o._webAudio&&!_&&o.stop(a._id,!0),o},_clearTimer:function(a){var o=this;if(o._endTimers[a]){if(typeof o._endTimers[a]!="function")clearTimeout(o._endTimers[a]);else{var h=o._soundById(a);h&&h._node&&h._node.removeEventListener("ended",o._endTimers[a],!1)}delete o._endTimers[a]}return o},_soundById:function(a){for(var o=this,h=0;h<o._sounds.length;h++)if(a===o._sounds[h]._id)return o._sounds[h];return null},_inactiveSound:function(){var a=this;a._drain();for(var o=0;o<a._sounds.length;o++)if(a._sounds[o]._ended)return a._sounds[o].reset();return new r(a)},_drain:function(){var a=this,o=a._pool,h=0,_=0;if(!(a._sounds.length<o)){for(_=0;_<a._sounds.length;_++)a._sounds[_]._ended&&h++;for(_=a._sounds.length-1;_>=0;_--){if(h<=o)return;a._sounds[_]._ended&&(a._webAudio&&a._sounds[_]._node&&a._sounds[_]._node.disconnect(0),a._sounds.splice(_,1),h--)}}},_getSoundIds:function(a){var o=this;if(typeof a>"u"){for(var h=[],_=0;_<o._sounds.length;_++)h.push(o._sounds[_]._id);return h}else return[a]},_refreshBuffer:function(a){var o=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[o._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),o},_cleanBuffer:function(a){var o=this,h=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return o;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),h))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,o},_clearSound:function(a){var o=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);o||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(a){this._parent=a,this.init()};r.prototype={init:function(){var a=this,o=a._parent;return a._muted=o._muted,a._loop=o._loop,a._volume=o._volume,a._rate=o._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,o._sounds.push(a),a.create(),a},create:function(){var a=this,o=a._parent,h=t._muted||a._muted||a._parent._muted?0:a._volume;return o._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(h,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=o._src,a._node.preload=o._preload===!0?"auto":o._preload,a._node.volume=h*t.volume(),a._node.load()),a},reset:function(){var a=this,o=a._parent;return a._muted=o._muted,a._loop=o._loop,a._volume=o._volume,a._rate=o._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,o=a._parent;o._duration=Math.ceil(a._node.duration*10)/10,Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,o=a._parent;o._duration===1/0&&(o._duration=Math.ceil(a._node.duration*10)/10,o._sprite.__default[1]===1/0&&(o._sprite.__default[1]=o._duration*1e3),o._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},c=function(a){var o=a._src;if(s[o]){a._duration=s[o].duration,f(a);return}if(/^data:[^;]+;base64,/.test(o)){for(var h=atob(o.split(",")[1]),_=new Uint8Array(h.length),g=0;g<h.length;++g)_[g]=h.charCodeAt(g);d(_.buffer,a)}else{var p=new XMLHttpRequest;p.open(a._xhr.method,o,!0),p.withCredentials=a._xhr.withCredentials,p.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(u){p.setRequestHeader(u,a._xhr.headers[u])}),p.onload=function(){var u=(p.status+"")[0];if(u!=="0"&&u!=="2"&&u!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+p.status+".");return}d(p.response,a)},p.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[o],a.load())},l(p)}},l=function(a){try{a.send()}catch{a.onerror()}},d=function(a,o){var h=function(){o._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&o._sounds.length>0?(s[o._src]=g,f(o,g)):h()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(_).catch(h):t.ctx.decodeAudioData(a,_,h)},f=function(a,o){o&&!a._duration&&(a._duration=o.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},m=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),o=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),h=o?parseInt(o[1],10):null;if(a&&h&&h<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof bi<"u"?(bi.HowlerGlobal=e,bi.Howler=t,bi.Howl=n,bi.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=r)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var r=n._howls.length-1;r>=0;r--)n._howls[r].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,n,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,r,s,c,l){var d=this;if(!d.ctx||!d.ctx.listener)return d;var f=d._orientation;if(n=typeof n!="number"?f[1]:n,r=typeof r!="number"?f[2]:r,s=typeof s!="number"?f[3]:s,c=typeof c!="number"?f[4]:c,l=typeof l!="number"?f[5]:l,typeof t=="number")d._orientation=[t,n,r,s,c,l],typeof d.ctx.listener.forwardX<"u"?(d.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),d.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),d.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),d.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),d.ctx.listener.upY.setTargetAtTime(c,Howler.ctx.currentTime,.1),d.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):d.ctx.listener.setOrientation(t,n,r,s,c,l);else return f;return d},Howl.prototype.init=function(t){return function(n){var r=this;return r._orientation=n.orientation||[1,0,0],r._stereo=n.stereo||null,r._pos=n.pos||null,r._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},r._onstereo=n.onstereo?[{fn:n.onstereo}]:[],r._onpos=n.onpos?[{fn:n.onpos}]:[],r._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var c=r._getSoundIds(n),l=0;l<c.length;l++){var d=r._soundById(c[l]);if(d)if(typeof t=="number")d._stereo=t,d._pos=[t,0,0],d._node&&(d._pannerAttr.panningModel="equalpower",(!d._panner||!d._panner.pan)&&e(d,s),s==="spatial"?typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):d._panner.setPosition(t,0,0):d._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",d._id);else return d._stereo}return r},Howl.prototype.pos=function(t,n,r,s){var c=this;if(!c._webAudio)return c;if(c._state!=="loaded")return c._queue.push({event:"pos",action:function(){c.pos(t,n,r,s)}}),c;if(n=typeof n!="number"?0:n,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")c._pos=[t,n,r];else return c._pos;for(var l=c._getSoundIds(s),d=0;d<l.length;d++){var f=c._soundById(l[d]);if(f)if(typeof t=="number")f._pos=[t,n,r],f._node&&((!f._panner||f._panner.pan)&&e(f,"spatial"),typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):f._panner.setPosition(t,n,r)),c._emit("pos",f._id);else return f._pos}return c},Howl.prototype.orientation=function(t,n,r,s){var c=this;if(!c._webAudio)return c;if(c._state!=="loaded")return c._queue.push({event:"orientation",action:function(){c.orientation(t,n,r,s)}}),c;if(n=typeof n!="number"?c._orientation[1]:n,r=typeof r!="number"?c._orientation[2]:r,typeof s>"u")if(typeof t=="number")c._orientation=[t,n,r];else return c._orientation;for(var l=c._getSoundIds(s),d=0;d<l.length;d++){var f=c._soundById(l[d]);if(f)if(typeof t=="number")f._orientation=[t,n,r],f._node&&(f._panner||(f._pos||(f._pos=c._pos||[0,0,-.5]),e(f,"spatial")),typeof f._panner.orientationX<"u"?(f._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),f._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):f._panner.setOrientation(t,n,r)),c._emit("orientation",f._id);else return f._orientation}return c},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,r,s,c;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")r=n[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return c=t._soundById(parseInt(n[0],10)),c?c._pannerAttr:t._pannerAttr;else n.length===2&&(r=n[0],s=parseInt(n[1],10));for(var l=t._getSoundIds(s),d=0;d<l.length;d++)if(c=t._soundById(l[d]),c){var f=c._pannerAttr;f={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:f.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:f.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:f.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:f.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:f.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:f.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:f.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:f.panningModel};var m=c._panner;m||(c._pos||(c._pos=t._pos||[0,0,-.5]),e(c,"spatial"),m=c._panner),m.coneInnerAngle=f.coneInnerAngle,m.coneOuterAngle=f.coneOuterAngle,m.coneOuterGain=f.coneOuterGain,m.distanceModel=f.distanceModel,m.maxDistance=f.maxDistance,m.refDistance=f.refDistance,m.rolloffFactor=f.rolloffFactor,m.panningModel=f.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,r=n._parent;n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,t.call(this),n._stereo?r.stereo(n._stereo):n._pos&&r.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,r=n._parent;return n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,n._stereo?r.stereo(n._stereo):n._pos?r.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,r._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Pn);class yp{constructor(){try{U.info("Initializing AudioManager"),this.sounds={coin:new Pn.Howl({src:["/sounds/coin.mp3"],volume:.5}),gem:new Pn.Howl({src:["/sounds/gem.mp3"],volume:.6}),chest:new Pn.Howl({src:["/sounds/chest.mp3"],volume:.7}),greedBot:new Pn.Howl({src:["/sounds/greed-bot.mp3"],volume:.4,loop:!0}),frenzy:new Pn.Howl({src:["/sounds/frenzy.mp3"],volume:.8}),jump:new Pn.Howl({src:["/sounds/jump.mp3"],volume:.3})},this.isMuted=!1,this.setupMuteToggle(),U.debug("AudioManager initialized successfully")}catch(e){throw U.error("Failed to initialize AudioManager",e),e}}setupMuteToggle(){try{U.debug("Setting up mute toggle");const e=document.createElement("button");e.id="mute-button",e.innerHTML="🔊",e.style.position="absolute",e.style.top="20px",e.style.left="20px",e.style.padding="10px",e.style.borderRadius="5px",e.style.border="none",e.style.background="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.cursor="pointer",document.getElementById("ui-overlay").appendChild(e),localStorage.getItem("lootGrabMuted")==="true"&&(U.debug("Loading saved mute state"),this.toggleMute()),e.addEventListener("click",()=>{U.debug("Mute button clicked"),this.toggleMute(),localStorage.setItem("lootGrabMuted",this.isMuted)}),U.debug("Mute toggle setup completed")}catch(e){throw U.error("Failed to setup mute toggle",e),e}}toggleMute(){try{this.isMuted=!this.isMuted;const e=document.getElementById("mute-button");e.innerHTML=this.isMuted?"🔈":"🔊",Object.values(this.sounds).forEach(t=>{t.mute(this.isMuted)}),U.info("Audio state changed",{isMuted:this.isMuted})}catch(e){throw U.error("Failed to toggle mute",e),e}}play(e){try{!this.isMuted&&this.sounds[e]&&(U.debug("Playing sound",{soundName:e}),this.sounds[e].play())}catch(t){throw U.error("Failed to play sound",t,{soundName:e}),t}}stop(e){try{this.sounds[e]&&(U.debug("Stopping sound",{soundName:e}),this.sounds[e].stop())}catch(t){throw U.error("Failed to stop sound",t,{soundName:e}),t}}setVolume(e,t){try{this.sounds[e]&&(U.debug("Setting sound volume",{soundName:e,volume:t}),this.sounds[e].volume(t))}catch(n){throw U.error("Failed to set sound volume",n,{soundName:e,volume:t}),n}}playCoinCollect(){try{U.debug("Playing coin collect sound"),this.play("coin")}catch(e){throw U.error("Failed to play coin collect sound",e),e}}playGemCollect(){try{U.debug("Playing gem collect sound"),this.play("gem")}catch(e){throw U.error("Failed to play gem collect sound",e),e}}playChestCollect(){try{U.debug("Playing chest collect sound"),this.play("chest")}catch(e){throw U.error("Failed to play chest collect sound",e),e}}startGreedBotSound(){try{U.debug("Starting Greed Bot sound"),this.play("greedBot")}catch(e){throw U.error("Failed to start Greed Bot sound",e),e}}stopGreedBotSound(){try{U.debug("Stopping Greed Bot sound"),this.stop("greedBot")}catch(e){throw U.error("Failed to stop Greed Bot sound",e),e}}playFrenzyStart(){try{U.debug("Playing frenzy start sound"),this.play("frenzy")}catch(e){throw U.error("Failed to play frenzy start sound",e),e}}playJump(){try{U.debug("Playing jump sound"),this.play("jump")}catch(e){throw U.error("Failed to play jump sound",e),e}}}class Sp{constructor(){try{U.info("Initializing UIManager"),this.leaderboard=document.getElementById("leaderboard"),this.playerScore=document.getElementById("player-score"),this.menuScreen=document.getElementById("menu-screen"),this.frenzyText=null,this.setupFrenzyText(),U.debug("UIManager initialized successfully")}catch(e){throw U.error("Failed to initialize UIManager",e),e}}setupFrenzyText(){try{U.debug("Setting up frenzy text"),this.frenzyText=document.createElement("div"),this.frenzyText.style.position="absolute",this.frenzyText.style.top="50%",this.frenzyText.style.left="50%",this.frenzyText.style.transform="translate(-50%, -50%)",this.frenzyText.style.fontSize="48px",this.frenzyText.style.color="#ff00ff",this.frenzyText.style.textShadow="0 0 10px #ff00ff",this.frenzyText.style.fontFamily="Arial, sans-serif",this.frenzyText.style.display="none",this.frenzyText.style.zIndex="100",document.getElementById("ui-overlay").appendChild(this.frenzyText),U.debug("Frenzy text setup completed")}catch(e){throw U.error("Failed to setup frenzy text",e),e}}updateLeaderboard(e){try{U.debug("Updating leaderboard",{scores:e});const t=Object.entries(e).sort(([,r],[,s])=>s-r);let n='<div style="font-weight: bold; margin-bottom: 5px;">Leaderboard</div>';t.forEach(([r,s],c)=>{n+=`<div style="color: ${c===0?"#ffd700":c===1?"#c0c0c0":"#cd7f32"}">${r}: ${s}</div>`}),this.leaderboard.innerHTML=n,U.debug("Leaderboard updated successfully")}catch(t){throw U.error("Failed to update leaderboard",t),t}}updatePlayerScore(e){try{U.debug("Updating player score",{score:e}),this.playerScore.textContent=`Score: ${e}`}catch(t){throw U.error("Failed to update player score",t),t}}showFrenzy(){try{U.info("Showing frenzy text"),this.frenzyText.textContent="LOOT FRENZY!",this.frenzyText.style.display="block",this.frenzyText.style.animation="frenzyPulse 1s infinite";const e=document.createElement("style");e.textContent=`
                @keyframes frenzyPulse {
                    0% { transform: translate(-50%, -50%) scale(1); }
                    50% { transform: translate(-50%, -50%) scale(1.2); }
                    100% { transform: translate(-50%, -50%) scale(1); }
                }
            `,document.head.appendChild(e),U.debug("Frenzy text displayed with animation")}catch(e){throw U.error("Failed to show frenzy text",e),e}}hideFrenzy(){try{U.debug("Hiding frenzy text"),this.frenzyText.style.display="none",this.frenzyText.style.animation=""}catch(e){throw U.error("Failed to hide frenzy text",e),e}}showGameOver(e,t){try{U.info("Showing game over screen",{winner:e,scores:t});const n=document.createElement("div");n.style.position="absolute",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",n.style.background="rgba(0, 0, 0, 0.9)",n.style.padding="20px",n.style.borderRadius="10px",n.style.color="white",n.style.textAlign="center",n.style.zIndex="1000";const r=document.createElement("div");r.style.fontSize="24px",r.style.marginBottom="20px",r.style.color="#ffd700",r.textContent=`Winner: ${e}`,n.appendChild(r);const s=document.createElement("div");s.style.marginBottom="20px",Object.entries(t).sort(([,l],[,d])=>d-l).forEach(([l,d])=>{const f=document.createElement("div");f.textContent=`${l}: ${d}`,s.appendChild(f)}),n.appendChild(s);const c=document.createElement("button");c.textContent="Play Again",c.style.padding="10px 20px",c.style.fontSize="18px",c.style.borderRadius="5px",c.style.border="none",c.style.background="#4CAF50",c.style.color="white",c.style.cursor="pointer",c.onclick=()=>{U.debug("Play again button clicked"),document.getElementById("menu-screen").style.display="flex",n.remove()},n.appendChild(c),document.getElementById("ui-overlay").appendChild(n),U.debug("Game over screen displayed successfully")}catch(n){throw U.error("Failed to show game over screen",n),n}}showGreedBotWarning(e){try{U.debug("Showing Greed Bot warning",{distance:e});let t=document.getElementById("greed-bot-warning");t||(t=document.createElement("div"),t.id="greed-bot-warning",t.style.position="absolute",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",t.style.color="#ff0000",t.style.fontSize="24px",t.style.textShadow="0 0 10px #ff0000",t.style.fontFamily="Arial, sans-serif",t.style.zIndex="100",document.getElementById("ui-overlay").appendChild(t),U.debug("Greed Bot warning element created"));const n=Math.min(1,5/e);t.style.opacity=n,t.textContent="GREED BOT NEARBY!",U.debug("Greed Bot warning updated",{intensity:n})}catch(t){throw U.error("Failed to show Greed Bot warning",t),t}}hideGreedBotWarning(){try{U.debug("Hiding Greed Bot warning");const e=document.getElementById("greed-bot-warning");e&&(e.style.opacity="0")}catch(e){throw U.error("Failed to hide Greed Bot warning",e),e}}}class Ep{constructor(){try{U.info("Initializing InputManager"),this.keys={forward:!1,backward:!1,left:!1,right:!1,jump:!1},this.mobileInput={x:0,y:0},this.setupKeyboardControls(),U.debug("InputManager initialized successfully")}catch(e){throw U.error("Failed to initialize InputManager",e),e}}setupKeyboardControls(){try{U.debug("Setting up keyboard controls"),window.addEventListener("keydown",e=>{switch(e.code){case"KeyW":case"ArrowUp":this.keys.forward=!0,U.debug("Forward key pressed");break;case"KeyS":case"ArrowDown":this.keys.backward=!0,U.debug("Backward key pressed");break;case"KeyA":case"ArrowLeft":this.keys.left=!0,U.debug("Left key pressed");break;case"KeyD":case"ArrowRight":this.keys.right=!0,U.debug("Right key pressed");break;case"Space":this.keys.jump=!0,U.debug("Jump key pressed");break}}),window.addEventListener("keyup",e=>{switch(e.code){case"KeyW":case"ArrowUp":this.keys.forward=!1,U.debug("Forward key released");break;case"KeyS":case"ArrowDown":this.keys.backward=!1,U.debug("Backward key released");break;case"KeyA":case"ArrowLeft":this.keys.left=!1,U.debug("Left key released");break;case"KeyD":case"ArrowRight":this.keys.right=!1,U.debug("Right key released");break;case"Space":this.keys.jump=!1,U.debug("Jump key released");break}}),U.debug("Keyboard controls setup completed")}catch(e){throw U.error("Failed to setup keyboard controls",e),e}}setMobileInput(e,t){try{U.debug("Setting mobile input",{x:e,y:t}),this.mobileInput.x=e,this.mobileInput.y=t}catch(n){throw U.error("Failed to set mobile input",n),n}}setJump(e){try{U.debug("Setting jump state",{jumping:e}),this.keys.jump=e}catch(t){throw U.error("Failed to set jump state",t),t}}getMovementVector(){try{const e={x:0,z:0};this.keys.forward&&(e.z-=1),this.keys.backward&&(e.z+=1),this.keys.left&&(e.x-=1),this.keys.right&&(e.x+=1),Math.abs(this.mobileInput.x)>10&&(e.x+=Math.sign(this.mobileInput.x)),Math.abs(this.mobileInput.y)>10&&(e.z+=Math.sign(this.mobileInput.y));const t=Math.sqrt(e.x*e.x+e.z*e.z);return t>0&&(e.x/=t,e.z/=t),U.debug("Movement vector calculated",{vector:e}),e}catch(e){throw U.error("Failed to calculate movement vector",e),e}}isJumping(){try{return U.debug("Checking jump state",{isJumping:this.keys.jump}),this.keys.jump}catch(e){throw U.error("Failed to check jump state",e),e}}}class Tp{constructor(){try{U.info("Initializing game application"),this.renderer=new Bo({canvas:document.getElementById("game-canvas"),antialias:!0}),U.debug("WebGL renderer created"),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,U.debug("Renderer configured",{size:{width:window.innerWidth,height:window.innerHeight},pixelRatio:this.renderer.getPixelRatio()}),this.clock=new gp,this.game=null,this.audioManager=new yp,this.uiManager=new Sp,this.inputManager=new Ep,U.info("Core managers initialized"),this.init()}catch(e){throw U.error("Failed to initialize game application",e),e}}init(){try{U.info("Setting up game initialization"),window.addEventListener("resize",()=>{U.debug("Window resize detected",{width:window.innerWidth,height:window.innerHeight}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.game&&this.game.onResize(window.innerWidth,window.innerHeight)}),document.getElementById("join-game").addEventListener("click",()=>{const e=document.getElementById("username").value.trim();e?(U.info("Starting game for user:",e),this.startGame(e)):U.warn("Attempted to start game without username")}),window.innerWidth<=768&&(U.info("Mobile device detected, setting up mobile controls"),this.setupMobileControls())}catch(e){throw U.error("Failed to initialize game",e),e}}setupMobileControls(){try{const e=document.getElementById("mobile-controls"),t=document.getElementById("jump-button");let n=0,r=0,s=!1;e.addEventListener("touchstart",c=>{n=c.touches[0].clientX,r=c.touches[0].clientY,s=!0,U.debug("Touch start detected",{x:n,y:r})}),e.addEventListener("touchmove",c=>{if(!s)return;const l=c.touches[0].clientX,d=c.touches[0].clientY,f=l-n,m=d-r;this.inputManager.setMobileInput(f,m),U.debug("Touch move detected",{deltaX:f,deltaY:m})}),e.addEventListener("touchend",()=>{s=!1,this.inputManager.setMobileInput(0,0),U.debug("Touch end detected")}),t.addEventListener("touchstart",()=>{this.inputManager.setJump(!0),U.debug("Jump button pressed")}),t.addEventListener("touchend",()=>{this.inputManager.setJump(!1),U.debug("Jump button released")}),U.info("Mobile controls setup completed")}catch(e){throw U.error("Failed to setup mobile controls",e),e}}startGame(e){try{U.info("Starting new game for user:",e),document.getElementById("menu-screen").style.display="none",this.game=new Mp(this.renderer,this.audioManager,this.uiManager,this.inputManager,e),this.animate(),U.info("Game started successfully")}catch(t){throw U.error("Failed to start game",t),t}}animate(){try{requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta();this.game&&(this.game.update(e),this.game.render())}catch(e){throw U.error("Error in animation loop",e),e}}}window.addEventListener("load",()=>{try{U.info("Page loaded, initializing game application"),new Tp}catch(i){throw U.error("Failed to initialize game application on page load",i),i}});
