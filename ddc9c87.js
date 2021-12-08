/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{2426:function(t,e,n){t.exports=function(){"use strict";function t(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function e(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?t(Object(source),!0).forEach((function(t){c(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):t(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return d(t)||m(t)||f(t)||w()}function d(t){if(Array.isArray(t))return v(t)}function m(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function f(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function w(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var x="undefined"!=typeof window&&void 0!==window.document,y=x?window:{},M=!(!x||!y.document.documentElement)&&"ontouchstart"in y.document.documentElement,C=!!x&&"PointerEvent"in y,D="cropper",B="all",k="crop",O="move",T="zoom",E="e",W="w",H="s",N="n",L="ne",z="nw",Y="se",X="sw",R="".concat(D,"-crop"),S="".concat(D,"-disabled"),A="".concat(D,"-hidden"),j="".concat(D,"-hide"),I="".concat(D,"-invisible"),P="".concat(D,"-modal"),U="".concat(D,"-move"),$="".concat(D,"Action"),Q="".concat(D,"Preview"),K="crop",Z="move",J="none",G="crop",V="cropend",F="cropmove",_="cropstart",tt="dblclick",et=M?"touchstart":"mousedown",it=M?"touchmove":"mousemove",at=M?"touchend touchcancel":"mouseup",nt=C?"pointerdown":et,ot=C?"pointermove":it,ht=C?"pointerup pointercancel":at,st="ready",ct="resize",lt="wheel",pt="zoom",ut="image/jpeg",mt=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,gt=/^data:/,ft=/^data:image\/jpeg;base64,/,vt=/^img|canvas$/i,wt=200,bt=100,xt={viewMode:0,dragMode:K,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:wt,minContainerHeight:bt,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},yt='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',Mt=Number.isNaN||y.isNaN;function Ct(t){return"number"==typeof t&&!Mt(t)}var Dt=function(t){return t>0&&t<1/0};function Bt(t){return void 0===t}function kt(t){return"object"===n(t)&&null!==t}var Ot=Object.prototype.hasOwnProperty;function Tt(t){if(!kt(t))return!1;try{var e=t.constructor,n=e.prototype;return e&&n&&Ot.call(n,"isPrototypeOf")}catch(t){return!1}}function Et(t){return"function"==typeof t}var Wt=Array.prototype.slice;function Ht(t){return Array.from?Array.from(t):Wt.call(t)}function Nt(data,t){return data&&Et(t)&&(Array.isArray(data)||Ct(data.length)?Ht(data).forEach((function(e,n){t.call(data,e,n,data)})):kt(data)&&Object.keys(data).forEach((function(e){t.call(data,data[e],e,data)}))),data}var Lt=Object.assign||function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return kt(t)&&n.length>0&&n.forEach((function(e){kt(e)&&Object.keys(e).forEach((function(n){t[n]=e[n]}))})),t},zt=/\.\d*(?:0|9){12}\d*$/;function Yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return zt.test(t)?Math.round(t*e)/e:t}var Xt=/^width|height|left|top|marginLeft|marginTop$/;function Rt(element,t){var style=element.style;Nt(t,(function(t,e){Xt.test(e)&&Ct(t)&&(t="".concat(t,"px")),style[e]=t}))}function St(element,t){return element.classList?element.classList.contains(t):element.className.indexOf(t)>-1}function At(element,t){if(t)if(Ct(element.length))Nt(element,(function(e){At(e,t)}));else if(element.classList)element.classList.add(t);else{var e=element.className.trim();e?e.indexOf(t)<0&&(element.className="".concat(e," ").concat(t)):element.className=t}}function jt(element,t){t&&(Ct(element.length)?Nt(element,(function(e){jt(e,t)})):element.classList?element.classList.remove(t):element.className.indexOf(t)>=0&&(element.className=element.className.replace(t,"")))}function It(element,t,e){t&&(Ct(element.length)?Nt(element,(function(n){It(n,t,e)})):e?At(element,t):jt(element,t))}var Pt=/([a-z\d])([A-Z])/g;function Ut(t){return t.replace(Pt,"$1-$2").toLowerCase()}function qt(element,t){return kt(element[t])?element[t]:element.dataset?element.dataset[t]:element.getAttribute("data-".concat(Ut(t)))}function $t(element,t,data){kt(data)?element[t]=data:element.dataset?element.dataset[t]=data:element.setAttribute("data-".concat(Ut(t)),data)}function Qt(element,t){if(kt(element[t]))try{delete element[t]}catch(e){element[t]=void 0}else if(element.dataset)try{delete element.dataset[t]}catch(e){element.dataset[t]=void 0}else element.removeAttribute("data-".concat(Ut(t)))}var Kt=/\s\s*/,Zt=function(){var t=!1;if(x){var e=!1,n=function(){},o=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});y.addEventListener("test",n,o),y.removeEventListener("test",n,o)}return t}();function Jt(element,t,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;t.trim().split(Kt).forEach((function(t){if(!Zt){var r=element.listeners;r&&r[t]&&r[t][e]&&(o=r[t][e],delete r[t][e],0===Object.keys(r[t]).length&&delete r[t],0===Object.keys(r).length&&delete element.listeners)}element.removeEventListener(t,o,n)}))}function Gt(element,t,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;t.trim().split(Kt).forEach((function(t){if(n.once&&!Zt){var r=element.listeners,h=void 0===r?{}:r;o=function(){delete h[t][e],element.removeEventListener(t,o,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];e.apply(element,c)},h[t]||(h[t]={}),h[t][e]&&element.removeEventListener(t,h[t][e],n),h[t][e]=o,element.listeners=h}element.addEventListener(t,o,n)}))}function Vt(element,t,data){var e;return Et(Event)&&Et(CustomEvent)?e=new CustomEvent(t,{detail:data,bubbles:!0,cancelable:!0}):(e=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,data),element.dispatchEvent(e)}function Ft(element){var t=element.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var _t=y.location,te=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ee(t){var e=t.match(te);return null!==e&&(e[1]!==_t.protocol||e[2]!==_t.hostname||e[3]!==_t.port)}function ie(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function ae(t){var e=t.rotate,n=t.scaleX,o=t.scaleY,r=t.translateX,h=t.translateY,c=[];Ct(r)&&0!==r&&c.push("translateX(".concat(r,"px)")),Ct(h)&&0!==h&&c.push("translateY(".concat(h,"px)")),Ct(e)&&0!==e&&c.push("rotate(".concat(e,"deg)")),Ct(n)&&1!==n&&c.push("scaleX(".concat(n,")")),Ct(o)&&1!==o&&c.push("scaleY(".concat(o,")"));var l=c.length?c.join(" "):"none";return{WebkitTransform:l,msTransform:l,transform:l}}function ne(t){var n=e({},t),o=0;return Nt(t,(function(t,e){delete n[e],Nt(n,(function(e){var n=Math.abs(t.startX-e.startX),r=Math.abs(t.startY-e.startY),h=Math.abs(t.endX-e.endX),c=Math.abs(t.endY-e.endY),l=Math.sqrt(n*n+r*r),d=(Math.sqrt(h*h+c*c)-l)/l;Math.abs(d)>Math.abs(o)&&(o=d)}))})),o}function oe(t,n){var o=t.pageX,r=t.pageY,h={endX:o,endY:r};return n?h:e({startX:o,startY:r},h)}function re(t){var e=0,n=0,o=0;return Nt(t,(function(t){var r=t.startX,h=t.startY;e+=r,n+=h,o+=1})),{pageX:e/=o,pageY:n/=o}}function he(t){var e=t.aspectRatio,n=t.height,o=t.width,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",h=Dt(o),c=Dt(n);if(h&&c){var l=n*e;"contain"===r&&l>o||"cover"===r&&l<o?n=o/e:o=n*e}else h?n=o/e:c&&(o=n*e);return{width:o,height:n}}function se(t){var e=t.width,n=t.height,o=t.degree;if(90==(o=Math.abs(o)%180))return{width:n,height:e};var r=o%90*Math.PI/180,h=Math.sin(r),c=Math.cos(r),l=e*c+n*h,d=e*h+n*c;return o>90?{width:d,height:l}:{width:l,height:d}}function ce(image,t,e,n){var o=t.aspectRatio,r=t.naturalWidth,h=t.naturalHeight,c=t.rotate,d=void 0===c?0:c,m=t.scaleX,f=void 0===m?1:m,v=t.scaleY,w=void 0===v?1:v,x=e.aspectRatio,y=e.naturalWidth,M=e.naturalHeight,C=n.fillColor,D=void 0===C?"transparent":C,B=n.imageSmoothingEnabled,k=void 0===B||B,O=n.imageSmoothingQuality,T=void 0===O?"low":O,E=n.maxWidth,W=void 0===E?1/0:E,H=n.maxHeight,N=void 0===H?1/0:H,L=n.minWidth,z=void 0===L?0:L,Y=n.minHeight,X=void 0===Y?0:Y,canvas=document.createElement("canvas"),R=canvas.getContext("2d"),S=he({aspectRatio:x,width:W,height:N}),A=he({aspectRatio:x,width:z,height:X},"cover"),j=Math.min(S.width,Math.max(A.width,y)),I=Math.min(S.height,Math.max(A.height,M)),P=he({aspectRatio:o,width:W,height:N}),U=he({aspectRatio:o,width:z,height:X},"cover"),$=Math.min(P.width,Math.max(U.width,r)),Q=Math.min(P.height,Math.max(U.height,h)),K=[-$/2,-Q/2,$,Q];return canvas.width=Yt(j),canvas.height=Yt(I),R.fillStyle=D,R.fillRect(0,0,j,I),R.save(),R.translate(j/2,I/2),R.rotate(d*Math.PI/180),R.scale(f,w),R.imageSmoothingEnabled=k,R.imageSmoothingQuality=T,R.drawImage.apply(R,[image].concat(l(K.map((function(param){return Math.floor(Yt(param))}))))),R.restore(),canvas}var le=String.fromCharCode;function de(t,e,n){var o="";n+=e;for(var i=e;i<n;i+=1)o+=le(t.getUint8(i));return o}var pe=/^data:.*,/;function ue(t){var e=t.replace(pe,""),n=atob(e),o=new ArrayBuffer(n.length),r=new Uint8Array(o);return Nt(r,(function(t,i){r[i]=n.charCodeAt(i)})),o}function me(t,e){for(var n=[],o=8192,r=new Uint8Array(t);r.length>0;)n.push(le.apply(null,Ht(r.subarray(0,o)))),r=r.subarray(o);return"data:".concat(e,";base64,").concat(btoa(n.join("")))}function ge(t){var e,n=new DataView(t);try{var o,r,h;if(255===n.getUint8(0)&&216===n.getUint8(1))for(var c=n.byteLength,l=2;l+1<c;){if(255===n.getUint8(l)&&225===n.getUint8(l+1)){r=l;break}l+=1}if(r){var d=r+10;if("Exif"===de(n,r+4,4)){var m=n.getUint16(d);if(((o=18761===m)||19789===m)&&42===n.getUint16(d+2,o)){var f=n.getUint32(d+4,o);f>=8&&(h=d+f)}}}if(h){var v,i,w=n.getUint16(h,o);for(i=0;i<w;i+=1)if(v=h+12*i+2,274===n.getUint16(v,o)){v+=8,e=n.getUint16(v,o),n.setUint16(v,1,o);break}}}catch(t){e=1}return e}function fe(t){var e=0,n=1,o=1;switch(t){case 2:n=-1;break;case 3:e=-180;break;case 4:o=-1;break;case 5:e=90,o=-1;break;case 6:e=90;break;case 7:e=90,n=-1;break;case 8:e=-90}return{rotate:e,scaleX:n,scaleY:o}}var ve={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var element=this.element,t=this.options,e=this.container,n=this.cropper,o=Number(t.minContainerWidth),r=Number(t.minContainerHeight);At(n,A),jt(element,A);var h={width:Math.max(e.offsetWidth,o>=0?o:wt),height:Math.max(e.offsetHeight,r>=0?r:bt)};this.containerData=h,Rt(n,{width:h.width,height:h.height}),At(element,A),jt(n,A)},initCanvas:function(){var t=this.containerData,e=this.imageData,n=this.options.viewMode,o=Math.abs(e.rotate)%180==90,r=o?e.naturalHeight:e.naturalWidth,h=o?e.naturalWidth:e.naturalHeight,c=r/h,l=t.width,d=t.height;t.height*c>t.width?3===n?l=t.height*c:d=t.width/c:3===n?d=t.width/c:l=t.height*c;var m={aspectRatio:c,naturalWidth:r,naturalHeight:h,width:l,height:d};this.canvasData=m,this.limited=1===n||2===n,this.limitCanvas(!0,!0),m.width=Math.min(Math.max(m.width,m.minWidth),m.maxWidth),m.height=Math.min(Math.max(m.height,m.minHeight),m.maxHeight),m.left=(t.width-m.width)/2,m.top=(t.height-m.height)/2,m.oldLeft=m.left,m.oldTop=m.top,this.initialCanvasData=Lt({},m)},limitCanvas:function(t,e){var n=this.options,o=this.containerData,r=this.canvasData,h=this.cropBoxData,c=n.viewMode,l=r.aspectRatio,d=this.cropped&&h;if(t){var m=Number(n.minCanvasWidth)||0,f=Number(n.minCanvasHeight)||0;c>1?(m=Math.max(m,o.width),f=Math.max(f,o.height),3===c&&(f*l>m?m=f*l:f=m/l)):c>0&&(m?m=Math.max(m,d?h.width:0):f?f=Math.max(f,d?h.height:0):d&&(m=h.width,(f=h.height)*l>m?m=f*l:f=m/l));var v=he({aspectRatio:l,width:m,height:f});m=v.width,f=v.height,r.minWidth=m,r.minHeight=f,r.maxWidth=1/0,r.maxHeight=1/0}if(e)if(c>(d?0:1)){var w=o.width-r.width,x=o.height-r.height;r.minLeft=Math.min(0,w),r.minTop=Math.min(0,x),r.maxLeft=Math.max(0,w),r.maxTop=Math.max(0,x),d&&this.limited&&(r.minLeft=Math.min(h.left,h.left+(h.width-r.width)),r.minTop=Math.min(h.top,h.top+(h.height-r.height)),r.maxLeft=h.left,r.maxTop=h.top,2===c&&(r.width>=o.width&&(r.minLeft=Math.min(0,w),r.maxLeft=Math.max(0,w)),r.height>=o.height&&(r.minTop=Math.min(0,x),r.maxTop=Math.max(0,x))))}else r.minLeft=-r.width,r.minTop=-r.height,r.maxLeft=o.width,r.maxTop=o.height},renderCanvas:function(t,e){var n=this.canvasData,o=this.imageData;if(e){var r=se({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0}),h=r.width,c=r.height,l=n.width*(h/n.naturalWidth),d=n.height*(c/n.naturalHeight);n.left-=(l-n.width)/2,n.top-=(d-n.height)/2,n.width=l,n.height=d,n.aspectRatio=h/c,n.naturalWidth=h,n.naturalHeight=c,this.limitCanvas(!0,!1)}(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCanvas(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,Rt(this.canvas,Lt({width:n.width,height:n.height},ae({translateX:n.left,translateY:n.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,n=this.imageData,o=n.naturalWidth*(e.width/e.naturalWidth),r=n.naturalHeight*(e.height/e.naturalHeight);Lt(n,{width:o,height:r,left:(e.width-o)/2,top:(e.height-r)/2}),Rt(this.image,Lt({width:n.width,height:n.height},ae(Lt({translateX:n.left,translateY:n.top},n)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,n=t.aspectRatio||t.initialAspectRatio,o=Number(t.autoCropArea)||.8,r={width:e.width,height:e.height};n&&(e.height*n>e.width?r.height=r.width/n:r.width=r.height*n),this.cropBoxData=r,this.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*o),r.height=Math.max(r.minHeight,r.height*o),r.left=e.left+(e.width-r.width)/2,r.top=e.top+(e.height-r.height)/2,r.oldLeft=r.left,r.oldTop=r.top,this.initialCropBoxData=Lt({},r)},limitCropBox:function(t,e){var n=this.options,o=this.containerData,r=this.canvasData,h=this.cropBoxData,c=this.limited,l=n.aspectRatio;if(t){var d=Number(n.minCropBoxWidth)||0,m=Number(n.minCropBoxHeight)||0,f=c?Math.min(o.width,r.width,r.width+r.left,o.width-r.left):o.width,v=c?Math.min(o.height,r.height,r.height+r.top,o.height-r.top):o.height;d=Math.min(d,o.width),m=Math.min(m,o.height),l&&(d&&m?m*l>d?m=d/l:d=m*l:d?m=d/l:m&&(d=m*l),v*l>f?v=f/l:f=v*l),h.minWidth=Math.min(d,f),h.minHeight=Math.min(m,v),h.maxWidth=f,h.maxHeight=v}e&&(c?(h.minLeft=Math.max(0,r.left),h.minTop=Math.max(0,r.top),h.maxLeft=Math.min(o.width,r.left+r.width)-h.width,h.maxTop=Math.min(o.height,r.top+r.height)-h.height):(h.minLeft=0,h.minTop=0,h.maxLeft=o.width-h.width,h.maxTop=o.height-h.height))},renderCropBox:function(){var t=this.options,e=this.containerData,n=this.cropBoxData;(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCropBox(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,t.movable&&t.cropBoxMovable&&$t(this.face,$,n.width>=e.width&&n.height>=e.height?O:B),Rt(this.cropBox,Lt({width:n.width,height:n.height},ae({translateX:n.left,translateY:n.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Vt(this.element,G,this.getData())}},we={initPreview:function(){var element=this.element,t=this.crossOrigin,e=this.options.preview,n=t?this.crossOriginUrl:this.url,o=element.alt||"The image to preview",image=document.createElement("img");if(t&&(image.crossOrigin=t),image.src=n,image.alt=o,this.viewBox.appendChild(image),this.viewBoxImage=image,e){var r=e;"string"==typeof e?r=element.ownerDocument.querySelectorAll(e):e.querySelector&&(r=[e]),this.previews=r,Nt(r,(function(e){var img=document.createElement("img");$t(e,Q,{width:e.offsetWidth,height:e.offsetHeight,html:e.innerHTML}),t&&(img.crossOrigin=t),img.src=n,img.alt=o,img.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',e.innerHTML="",e.appendChild(img)}))}},resetPreview:function(){Nt(this.previews,(function(element){var data=qt(element,Q);Rt(element,{width:data.width,height:data.height}),element.innerHTML=data.html,Qt(element,Q)}))},preview:function(){var t=this.imageData,e=this.canvasData,n=this.cropBoxData,o=n.width,r=n.height,h=t.width,c=t.height,l=n.left-e.left-t.left,d=n.top-e.top-t.top;this.cropped&&!this.disabled&&(Rt(this.viewBoxImage,Lt({width:h,height:c},ae(Lt({translateX:-l,translateY:-d},t)))),Nt(this.previews,(function(element){var data=qt(element,Q),e=data.width,n=data.height,m=e,f=n,v=1;o&&(f=r*(v=e/o)),r&&f>n&&(m=o*(v=n/r),f=n),Rt(element,{width:m,height:f}),Rt(element.getElementsByTagName("img")[0],Lt({width:h*v,height:c*v},ae(Lt({translateX:-l*v,translateY:-d*v},t))))})))}},be={bind:function(){var element=this.element,t=this.options,e=this.cropper;Et(t.cropstart)&&Gt(element,_,t.cropstart),Et(t.cropmove)&&Gt(element,F,t.cropmove),Et(t.cropend)&&Gt(element,V,t.cropend),Et(t.crop)&&Gt(element,G,t.crop),Et(t.zoom)&&Gt(element,pt,t.zoom),Gt(e,nt,this.onCropStart=this.cropStart.bind(this)),t.zoomable&&t.zoomOnWheel&&Gt(e,lt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleDragModeOnDblclick&&Gt(e,tt,this.onDblclick=this.dblclick.bind(this)),Gt(element.ownerDocument,ot,this.onCropMove=this.cropMove.bind(this)),Gt(element.ownerDocument,ht,this.onCropEnd=this.cropEnd.bind(this)),t.responsive&&Gt(window,ct,this.onResize=this.resize.bind(this))},unbind:function(){var element=this.element,t=this.options,e=this.cropper;Et(t.cropstart)&&Jt(element,_,t.cropstart),Et(t.cropmove)&&Jt(element,F,t.cropmove),Et(t.cropend)&&Jt(element,V,t.cropend),Et(t.crop)&&Jt(element,G,t.crop),Et(t.zoom)&&Jt(element,pt,t.zoom),Jt(e,nt,this.onCropStart),t.zoomable&&t.zoomOnWheel&&Jt(e,lt,this.onWheel,{passive:!1,capture:!0}),t.toggleDragModeOnDblclick&&Jt(e,tt,this.onDblclick),Jt(element.ownerDocument,ot,this.onCropMove),Jt(element.ownerDocument,ht,this.onCropEnd),t.responsive&&Jt(window,ct,this.onResize)}},xe={resize:function(){if(!this.disabled){var t,e,n=this.options,o=this.container,r=this.containerData,h=o.offsetWidth/r.width,c=o.offsetHeight/r.height,l=Math.abs(h-1)>Math.abs(c-1)?h:c;1!==l&&(n.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),n.restore&&(this.setCanvasData(Nt(t,(function(e,i){t[i]=e*l}))),this.setCropBoxData(Nt(e,(function(t,i){e[i]=t*l})))))}},dblclick:function(){this.disabled||this.options.dragMode===J||this.setDragMode(St(this.dragBox,R)?Z:K)},wheel:function(t){var e=this,n=Number(this.options.wheelZoomRatio)||.1,o=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?o=t.deltaY>0?1:-1:t.wheelDelta?o=-t.wheelDelta/120:t.detail&&(o=t.detail>0?1:-1),this.zoom(-o*n,t)))},cropStart:function(t){var e=t.buttons,button=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(Ct(e)&&1!==e||Ct(button)&&0!==button||t.ctrlKey))){var n,o=this.options,r=this.pointers;t.changedTouches?Nt(t.changedTouches,(function(t){r[t.identifier]=oe(t)})):r[t.pointerId||0]=oe(t),n=Object.keys(r).length>1&&o.zoomable&&o.zoomOnTouch?T:qt(t.target,$),mt.test(n)&&!1!==Vt(this.element,_,{originalEvent:t,action:n})&&(t.preventDefault(),this.action=n,this.cropping=!1,n===k&&(this.cropping=!0,At(this.dragBox,P)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var n=this.pointers;t.preventDefault(),!1!==Vt(this.element,F,{originalEvent:t,action:e})&&(t.changedTouches?Nt(t.changedTouches,(function(t){Lt(n[t.identifier]||{},oe(t,!0))})):Lt(n[t.pointerId||0]||{},oe(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,n=this.pointers;t.changedTouches?Nt(t.changedTouches,(function(t){delete n[t.identifier]})):delete n[t.pointerId||0],e&&(t.preventDefault(),Object.keys(n).length||(this.action=""),this.cropping&&(this.cropping=!1,It(this.dragBox,P,this.cropped&&this.options.modal)),Vt(this.element,V,{originalEvent:t,action:e}))}}},ye={change:function(t){var e,n=this.options,o=this.canvasData,r=this.containerData,h=this.cropBoxData,c=this.pointers,l=this.action,d=n.aspectRatio,m=h.left,f=h.top,v=h.width,w=h.height,x=m+v,y=f+w,M=0,C=0,D=r.width,R=r.height,S=!0;!d&&t.shiftKey&&(d=v&&w?v/w:1),this.limited&&(M=h.minLeft,C=h.minTop,D=M+Math.min(r.width,o.width,o.left+o.width),R=C+Math.min(r.height,o.height,o.top+o.height));var j=c[Object.keys(c)[0]],I={x:j.endX-j.startX,y:j.endY-j.startY},P=function(t){switch(t){case E:x+I.x>D&&(I.x=D-x);break;case W:m+I.x<M&&(I.x=M-m);break;case N:f+I.y<C&&(I.y=C-f);break;case H:y+I.y>R&&(I.y=R-y)}};switch(l){case B:m+=I.x,f+=I.y;break;case E:if(I.x>=0&&(x>=D||d&&(f<=C||y>=R))){S=!1;break}P(E),(v+=I.x)<0&&(l=W,m-=v=-v),d&&(w=v/d,f+=(h.height-w)/2);break;case N:if(I.y<=0&&(f<=C||d&&(m<=M||x>=D))){S=!1;break}P(N),w-=I.y,f+=I.y,w<0&&(l=H,f-=w=-w),d&&(v=w*d,m+=(h.width-v)/2);break;case W:if(I.x<=0&&(m<=M||d&&(f<=C||y>=R))){S=!1;break}P(W),v-=I.x,m+=I.x,v<0&&(l=E,m-=v=-v),d&&(w=v/d,f+=(h.height-w)/2);break;case H:if(I.y>=0&&(y>=R||d&&(m<=M||x>=D))){S=!1;break}P(H),(w+=I.y)<0&&(l=N,f-=w=-w),d&&(v=w*d,m+=(h.width-v)/2);break;case L:if(d){if(I.y<=0&&(f<=C||x>=D)){S=!1;break}P(N),w-=I.y,f+=I.y,v=w*d}else P(N),P(E),I.x>=0?x<D?v+=I.x:I.y<=0&&f<=C&&(S=!1):v+=I.x,I.y<=0?f>C&&(w-=I.y,f+=I.y):(w-=I.y,f+=I.y);v<0&&w<0?(l=X,f-=w=-w,m-=v=-v):v<0?(l=z,m-=v=-v):w<0&&(l=Y,f-=w=-w);break;case z:if(d){if(I.y<=0&&(f<=C||m<=M)){S=!1;break}P(N),w-=I.y,f+=I.y,v=w*d,m+=h.width-v}else P(N),P(W),I.x<=0?m>M?(v-=I.x,m+=I.x):I.y<=0&&f<=C&&(S=!1):(v-=I.x,m+=I.x),I.y<=0?f>C&&(w-=I.y,f+=I.y):(w-=I.y,f+=I.y);v<0&&w<0?(l=Y,f-=w=-w,m-=v=-v):v<0?(l=L,m-=v=-v):w<0&&(l=X,f-=w=-w);break;case X:if(d){if(I.x<=0&&(m<=M||y>=R)){S=!1;break}P(W),v-=I.x,m+=I.x,w=v/d}else P(H),P(W),I.x<=0?m>M?(v-=I.x,m+=I.x):I.y>=0&&y>=R&&(S=!1):(v-=I.x,m+=I.x),I.y>=0?y<R&&(w+=I.y):w+=I.y;v<0&&w<0?(l=L,f-=w=-w,m-=v=-v):v<0?(l=Y,m-=v=-v):w<0&&(l=z,f-=w=-w);break;case Y:if(d){if(I.x>=0&&(x>=D||y>=R)){S=!1;break}P(E),w=(v+=I.x)/d}else P(H),P(E),I.x>=0?x<D?v+=I.x:I.y>=0&&y>=R&&(S=!1):v+=I.x,I.y>=0?y<R&&(w+=I.y):w+=I.y;v<0&&w<0?(l=z,f-=w=-w,m-=v=-v):v<0?(l=X,m-=v=-v):w<0&&(l=L,f-=w=-w);break;case O:this.move(I.x,I.y),S=!1;break;case T:this.zoom(ne(c),t),S=!1;break;case k:if(!I.x||!I.y){S=!1;break}e=Ft(this.cropper),m=j.startX-e.left,f=j.startY-e.top,v=h.minWidth,w=h.minHeight,I.x>0?l=I.y>0?Y:L:I.x<0&&(m-=v,l=I.y>0?X:z),I.y<0&&(f-=w),this.cropped||(jt(this.cropBox,A),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}S&&(h.width=v,h.height=w,h.left=m,h.top=f,this.action=l,this.renderCropBox()),Nt(c,(function(p){p.startX=p.endX,p.startY=p.endY}))}},Me={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&At(this.dragBox,P),jt(this.cropBox,A),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=Lt({},this.initialImageData),this.canvasData=Lt({},this.initialCanvasData),this.cropBoxData=Lt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(Lt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),jt(this.dragBox,P),At(this.cropBox,A)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,Nt(this.previews,(function(element){element.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,jt(this.cropper,S)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,At(this.cropper,S)),this},destroy:function(){var element=this.element;return element[D]?(element[D]=void 0,this.isImg&&this.replaced&&(element.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=this.canvasData,o=n.left,r=n.top;return this.moveTo(Bt(t)?t:o+Number(t),Bt(e)?e:r+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=this.canvasData,o=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(Ct(t)&&(n.left=t,o=!0),Ct(e)&&(n.top=e,o=!0),o&&this.renderCanvas(!0)),this},zoom:function(t,e){var n=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(n.width*t/n.naturalWidth,null,e)},zoomTo:function(t,e,n){var o=this.options,r=this.canvasData,h=r.width,c=r.height,l=r.naturalWidth,d=r.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&o.zoomable){var m=l*t,f=d*t;if(!1===Vt(this.element,pt,{ratio:t,oldRatio:h/l,originalEvent:n}))return this;if(n){var v=this.pointers,w=Ft(this.cropper),x=v&&Object.keys(v).length?re(v):{pageX:n.pageX,pageY:n.pageY};r.left-=(m-h)*((x.pageX-w.left-r.left)/h),r.top-=(f-c)*((x.pageY-w.top-r.top)/c)}else Tt(e)&&Ct(e.x)&&Ct(e.y)?(r.left-=(m-h)*((e.x-r.left)/h),r.top-=(f-c)*((e.y-r.top)/c)):(r.left-=(m-h)/2,r.top-=(f-c)/2);r.width=m,r.height=f,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return Ct(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,Ct(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(Ct(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=this.imageData,o=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(Ct(t)&&(n.scaleX=t,o=!0),Ct(e)&&(n.scaleY=e,o=!0),o&&this.renderCanvas(!0,!0)),this},getData:function(){var data,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.options,n=this.imageData,o=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){data={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height};var h=n.width/n.naturalWidth;if(Nt(data,(function(t,i){data[i]=t/h})),t){var c=Math.round(data.y+data.height),l=Math.round(data.x+data.width);data.x=Math.round(data.x),data.y=Math.round(data.y),data.width=l-data.x,data.height=c-data.y}}else data={x:0,y:0,width:0,height:0};return e.rotatable&&(data.rotate=n.rotate||0),e.scalable&&(data.scaleX=n.scaleX||1,data.scaleY=n.scaleY||1),data},setData:function(data){var t=this.options,e=this.imageData,n=this.canvasData,o={};if(this.ready&&!this.disabled&&Tt(data)){var r=!1;t.rotatable&&Ct(data.rotate)&&data.rotate!==e.rotate&&(e.rotate=data.rotate,r=!0),t.scalable&&(Ct(data.scaleX)&&data.scaleX!==e.scaleX&&(e.scaleX=data.scaleX,r=!0),Ct(data.scaleY)&&data.scaleY!==e.scaleY&&(e.scaleY=data.scaleY,r=!0)),r&&this.renderCanvas(!0,!0);var h=e.width/e.naturalWidth;Ct(data.x)&&(o.left=data.x*h+n.left),Ct(data.y)&&(o.top=data.y*h+n.top),Ct(data.width)&&(o.width=data.width*h),Ct(data.height)&&(o.height=data.height*h),this.setCropBoxData(o)}return this},getContainerData:function(){return this.ready?Lt({},this.containerData):{}},getImageData:function(){return this.sized?Lt({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,data={};return this.ready&&Nt(["left","top","width","height","naturalWidth","naturalHeight"],(function(e){data[e]=t[e]})),data},setCanvasData:function(data){var t=this.canvasData,e=t.aspectRatio;return this.ready&&!this.disabled&&Tt(data)&&(Ct(data.left)&&(t.left=data.left),Ct(data.top)&&(t.top=data.top),Ct(data.width)?(t.width=data.width,t.height=data.width/e):Ct(data.height)&&(t.height=data.height,t.width=data.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var data,t=this.cropBoxData;return this.ready&&this.cropped&&(data={left:t.left,top:t.top,width:t.width,height:t.height}),data||{}},setCropBoxData:function(data){var t,e,n=this.cropBoxData,o=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&Tt(data)&&(Ct(data.left)&&(n.left=data.left),Ct(data.top)&&(n.top=data.top),Ct(data.width)&&data.width!==n.width&&(t=!0,n.width=data.width),Ct(data.height)&&data.height!==n.height&&(e=!0,n.height=data.height),o&&(t?n.height=n.width/o:e&&(n.width=n.height*o)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,source=ce(this.image,this.imageData,e,t);if(!this.cropped)return source;var n=this.getData(),o=n.x,r=n.y,h=n.width,c=n.height,d=source.width/Math.floor(e.naturalWidth);1!==d&&(o*=d,r*=d,h*=d,c*=d);var m=h/c,f=he({aspectRatio:m,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),v=he({aspectRatio:m,width:t.minWidth||0,height:t.minHeight||0},"cover"),w=he({aspectRatio:m,width:t.width||(1!==d?source.width:h),height:t.height||(1!==d?source.height:c)}),x=w.width,y=w.height;x=Math.min(f.width,Math.max(v.width,x)),y=Math.min(f.height,Math.max(v.height,y));var canvas=document.createElement("canvas"),M=canvas.getContext("2d");canvas.width=Yt(x),canvas.height=Yt(y),M.fillStyle=t.fillColor||"transparent",M.fillRect(0,0,x,y);var C=t.imageSmoothingEnabled,D=void 0===C||C,B=t.imageSmoothingQuality;M.imageSmoothingEnabled=D,B&&(M.imageSmoothingQuality=B);var k,O,T,E,W,H,N=source.width,L=source.height,z=o,Y=r;z<=-h||z>N?(z=0,k=0,T=0,W=0):z<=0?(T=-z,z=0,W=k=Math.min(N,h+z)):z<=N&&(T=0,W=k=Math.min(h,N-z)),k<=0||Y<=-c||Y>L?(Y=0,O=0,E=0,H=0):Y<=0?(E=-Y,Y=0,H=O=Math.min(L,c+Y)):Y<=L&&(E=0,H=O=Math.min(c,L-Y));var X=[z,Y,k,O];if(W>0&&H>0){var R=x/h;X.push(T*R,E*R,W*R,H*R)}return M.drawImage.apply(M,[source].concat(l(X.map((function(param){return Math.floor(Yt(param))}))))),canvas},setAspectRatio:function(t){var e=this.options;return this.disabled||Bt(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,n=this.dragBox,o=this.face;if(this.ready&&!this.disabled){var r=t===K,h=e.movable&&t===Z;t=r||h?t:J,e.dragMode=t,$t(n,$,t),It(n,R,r),It(n,U,h),e.cropBoxMovable||($t(o,$,t),It(o,R,r),It(o,U,h))}return this}},Ce=y.Cropper,De=function(){function t(element){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,t),!element||!vt.test(element.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=element,this.options=Lt({},xt,Tt(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return h(t,[{key:"init",value:function(){var t,element=this.element,e=element.tagName.toLowerCase();if(!element[D]){if(element[D]=this,"img"===e){if(this.isImg=!0,t=element.getAttribute("src")||"",this.originalUrl=t,!t)return;t=element.src}else"canvas"===e&&window.HTMLCanvasElement&&(t=element.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var element=this.element,n=this.options;if(n.rotatable||n.scalable||(n.checkOrientation=!1),n.checkOrientation&&window.ArrayBuffer)if(gt.test(t))ft.test(t)?this.read(ue(t)):this.clone();else{var o=new XMLHttpRequest,r=this.clone.bind(this);this.reloading=!0,this.xhr=o,o.onabort=r,o.onerror=r,o.ontimeout=r,o.onprogress=function(){o.getResponseHeader("content-type")!==ut&&o.abort()},o.onload=function(){e.read(o.response)},o.onloadend=function(){e.reloading=!1,e.xhr=null},n.checkCrossOrigin&&ee(t)&&element.crossOrigin&&(t=ie(t)),o.open("GET",t,!0),o.responseType="arraybuffer",o.withCredentials="use-credentials"===element.crossOrigin,o.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,n=this.imageData,o=ge(t),r=0,h=1,c=1;if(o>1){this.url=me(t,ut);var l=fe(o);r=l.rotate,h=l.scaleX,c=l.scaleY}e.rotatable&&(n.rotate=r),e.scalable&&(n.scaleX=h,n.scaleY=c),this.clone()}},{key:"clone",value:function(){var element=this.element,t=this.url,e=element.crossOrigin,n=t;this.options.checkCrossOrigin&&ee(t)&&(e||(e="anonymous"),n=ie(t)),this.crossOrigin=e,this.crossOriginUrl=n;var image=document.createElement("img");e&&(image.crossOrigin=e),image.src=n||t,image.alt=element.alt||"The image to crop",this.image=image,image.onload=this.start.bind(this),image.onerror=this.stop.bind(this),At(image,j),element.parentNode.insertBefore(image,element.nextSibling)}},{key:"start",value:function(){var t=this,image=this.image;image.onload=null,image.onerror=null,this.sizing=!0;var e=y.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(y.navigator.userAgent),n=function(e,n){Lt(t.imageData,{naturalWidth:e,naturalHeight:n,aspectRatio:e/n}),t.initialImageData=Lt({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!image.naturalWidth||e){var o=document.createElement("img"),body=document.body||document.documentElement;this.sizingImage=o,o.onload=function(){n(o.width,o.height),e||body.removeChild(o)},o.src=image.src,e||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",body.appendChild(o))}else n(image.naturalWidth,image.naturalHeight)}},{key:"stop",value:function(){var image=this.image;image.onload=null,image.onerror=null,image.parentNode.removeChild(image),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var element=this.element,t=this.options,image=this.image,e=element.parentNode,template=document.createElement("div");template.innerHTML=yt;var n=template.querySelector(".".concat(D,"-container")),canvas=n.querySelector(".".concat(D,"-canvas")),o=n.querySelector(".".concat(D,"-drag-box")),r=n.querySelector(".".concat(D,"-crop-box")),h=r.querySelector(".".concat(D,"-face"));this.container=e,this.cropper=n,this.canvas=canvas,this.dragBox=o,this.cropBox=r,this.viewBox=n.querySelector(".".concat(D,"-view-box")),this.face=h,canvas.appendChild(image),At(element,A),e.insertBefore(n,element.nextSibling),this.isImg||jt(image,j),this.initPreview(),this.bind(),t.initialAspectRatio=Math.max(0,t.initialAspectRatio)||NaN,t.aspectRatio=Math.max(0,t.aspectRatio)||NaN,t.viewMode=Math.max(0,Math.min(3,Math.round(t.viewMode)))||0,At(r,A),t.guides||At(r.getElementsByClassName("".concat(D,"-dashed")),A),t.center||At(r.getElementsByClassName("".concat(D,"-center")),A),t.background&&At(n,"".concat(D,"-bg")),t.highlight||At(h,I),t.cropBoxMovable&&(At(h,U),$t(h,$,B)),t.cropBoxResizable||(At(r.getElementsByClassName("".concat(D,"-line")),A),At(r.getElementsByClassName("".concat(D,"-point")),A)),this.render(),this.ready=!0,this.setDragMode(t.dragMode),t.autoCrop&&this.crop(),this.setData(t.data),Et(t.ready)&&Gt(element,st,t.ready,{once:!0}),Vt(element,st)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),jt(this.element,A))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=Ce,t}},{key:"setDefaults",value:function(t){Lt(xt,Tt(t)&&t)}}]),t}();return Lt(De.prototype,ve,we,be,xe,ye,Me),De}()},2427:function(t,e,n){t.exports={}}}]);