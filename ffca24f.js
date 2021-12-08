/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1952:function(t,e,n){"use strict";n(985)},2644:function(t,e,n){"use strict";n.r(e);n(8),n(66),n(67),n(52);var o=n(1948),r=n.n(o),c=(n(361),n(42),function(image){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=image.width,this.height=this.canvas.height=image.height,this.context.drawImage(image,0,0,this.width,this.height)});c.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},c.prototype.update=function(t){this.context.putImageData(t,0,0)},c.prototype.getPixelCount=function(){return this.width*this.height},c.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},c.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var l=function(){};if(l.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},l.prototype.getPalette=function(t,e,n){(void 0===e||e<2||e>256)&&(e=10),(void 0===n||n<1)&&(n=10);for(var o,r,g,b,image=new c(t),l=image.getImageData().data,f=image.getPixelCount(),v=[],i=0;i<f;i+=n)r=l[(o=4*i)+0],g=l[o+1],b=l[o+2],l[o+3]>=125&&(r>250&&g>250&&b>250||v.push([r,g,b]));var d=h.quantize(v,e),m=d?d.palette():null;return image.removeCanvas(),m},l.prototype.getColorFromUrl=function(t,e,n){var o=document.createElement("img"),r=this;o.addEventListener("load",(function(){var c=r.getPalette(o,5,n)[0];e(c,t)})),o.src=t},l.prototype.getImageData=function(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var n=new Array(i),i=0;i<t.length;i++)n[i]=String.fromCharCode(t[i]);var data=n.join(""),o=window.btoa(data);e("data:image/png;base64,"+o)}},n.send()},l.prototype.getColorAsync=function(t,e,n){var o=this;this.getImageData(t,(function(t){var r=document.createElement("img");r.addEventListener("load",(function(){var t=o.getPalette(r,5,n)[0];e(t,this)})),r.src=t}))},!f)var f={map:function(t,e){var n={};return e?t.map((function(t,i){return n.index=i,e.call(n,t)})):t.slice()},naturalOrder:function(a,b){return a<b?-1:a>b?1:0},sum:function(t,e){var n={};return t.reduce(e?function(p,t,i){return n.index=i,p+e.call(n,t)}:function(p,t){return p+t},0)},max:function(t,e){return Math.max.apply(null,e?f.map(t,e):t)}};var h=function(){function t(t,g,b){return(t<<10)+(g<<5)+b}function e(t){var e=[],n=!1;function o(){e.sort(t),n=!0}return{push:function(t){e.push(t),n=!1},peek:function(t){return n||o(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return n||o(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return n||o(),e}}}function n(t,e,n,o,r,c,l){var f=this;f.r1=t,f.r2=e,f.g1=n,f.g2=o,f.b1=r,f.b2=c,f.histo=l}function o(){this.vboxes=new e((function(a,b){return f.naturalOrder(a.vbox.count()*a.vbox.volume(),b.vbox.count()*b.vbox.volume())}))}function r(e,n){if(n.count()){var o=n.r2-n.r1+1,r=n.g2-n.g1+1,c=n.b2-n.b1+1,l=f.max([o,r,c]);if(1==n.count())return[n.copy()];var i,h,v,d,m=0,y=[],w=[];if(l==o)for(i=n.r1;i<=n.r2;i++){for(d=0,h=n.g1;h<=n.g2;h++)for(v=n.b1;v<=n.b2;v++)d+=e[t(i,h,v)]||0;m+=d,y[i]=m}else if(l==r)for(i=n.g1;i<=n.g2;i++){for(d=0,h=n.r1;h<=n.r2;h++)for(v=n.b1;v<=n.b2;v++)d+=e[t(h,i,v)]||0;m+=d,y[i]=m}else for(i=n.b1;i<=n.b2;i++){for(d=0,h=n.r1;h<=n.r2;h++)for(v=n.g1;v<=n.g2;v++)d+=e[t(h,v,i)]||0;m+=d,y[i]=m}return y.forEach((function(t,i){w[i]=m-t})),C(l==o?"r":l==r?"g":"b")}function C(t){var e,o,r,c,l,f=t+"1",h=t+"2",v=0;for(i=n[f];i<=n[h];i++)if(y[i]>m/2){for(r=n.copy(),c=n.copy(),l=(e=i-n[f])<=(o=n[h]-i)?Math.min(n[h]-1,~~(i+o/2)):Math.max(n[f],~~(i-1-e/2));!y[l];)l++;for(v=w[l];!v&&y[l-1];)v=w[--l];return r[h]=l,c[f]=r[h]+1,[r,c]}}}return n.prototype={volume:function(t){var e=this;return e._volume&&!t||(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(e){var n=this,o=n.histo;if(!n._count_set||e){var i,r,c,l=0;for(i=n.r1;i<=n.r2;i++)for(r=n.g1;r<=n.g2;r++)for(c=n.b1;c<=n.b2;c++)l+=o[t(i,r,c)]||0;n._count=l,n._count_set=!0}return n._count},copy:function(){var t=this;return new n(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var n=this,o=n.histo;if(!n._avg||e){var r,i,c,l,f=0,h=0,v=0,d=0;for(i=n.r1;i<=n.r2;i++)for(c=n.g1;c<=n.g2;c++)for(l=n.b1;l<=n.b2;l++)f+=r=o[t(i,c,l)]||0,h+=r*(i+.5)*8,v+=r*(c+.5)*8,d+=r*(l+.5)*8;n._avg=f?[~~(h/f),~~(v/f),~~(d/f)]:[~~(8*(n.r1+n.r2+1)/2),~~(8*(n.g1+n.g2+1)/2),~~(8*(n.b1+n.b2+1)/2)]}return n._avg},contains:function(t){var e=this,n=t[0]>>3,o=t[1]>>3,r=t[2]>>3;return n>=e.r1&&n<=e.r2&&o>=e.g1&&o<=e.g2&&r>=e.b1&&r<=e.b2}},o.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,i=0;i<e.size();i++)if(e.peek(i).vbox.contains(t))return e.peek(i).color;return this.nearest(t)},nearest:function(t){for(var e,n,o,r=this.vboxes,i=0;i<r.size();i++)((n=Math.sqrt(Math.pow(t[0]-r.peek(i).color[0],2)+Math.pow(t[1]-r.peek(i).color[1],2)+Math.pow(t[2]-r.peek(i).color[2],2)))<e||void 0===e)&&(e=n,o=r.peek(i).color);return o},forcebw:function(){var t=this.vboxes;t.sort((function(a,b){return f.naturalOrder(f.sum(a.color),f.sum(b.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,o=t[n].color;o[0]>251&&o[1]>251&&o[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(c,l){if(!c.length||l<2||l>256)return!1;var h=function(e){var n,o,r,c,l=new Array(32768);return e.forEach((function(e){o=e[0]>>3,r=e[1]>>3,c=e[2]>>3,n=t(o,r,c),l[n]=(l[n]||0)+1})),l}(c);h.forEach((function(){0}));var v=function(t,e){var o,r,c,l=1e6,f=0,h=1e6,v=0,d=1e6,m=0;return t.forEach((function(t){o=t[0]>>3,r=t[1]>>3,c=t[2]>>3,o<l?l=o:o>f&&(f=o),r<h?h=r:r>v&&(v=r),c<d?d=c:c>m&&(m=c)})),new n(l,f,h,v,d,m,e)}(c,h),d=new e((function(a,b){return f.naturalOrder(a.count(),b.count())}));function m(t,e){for(var n,o=1,c=0;c<1e3;)if((n=t.pop()).count()){var l=r(h,n),f=l[0],v=l[1];if(!f)return;if(t.push(f),v&&(t.push(v),o++),o>=e)return;if(c++>1e3)return}else t.push(n),c++}d.push(v),m(d,.75*l);for(var y=new e((function(a,b){return f.naturalOrder(a.count()*a.volume(),b.count()*b.volume())}));d.size();)y.push(d.pop());m(y,l-y.size());for(var w=new o;y.size();)w.push(y.pop());return w}}}(),v=l,d=n(1949),m=n.n(d),y=n(643),w={name:"Color",data:function(){return{color:"#249ffd",filename:null,preview:"",imgColor:{color:"",palette:""},loading:!1,colorthief:new v,pickr:null,mobile:""}},computed:{handleColor:function(){var t=r()(this.color);return{"RGB(A)":t.toString("rgb").toUpperCase(),HEX6:t.toHexString().toUpperCase(),HEX8:t.toHex8String().toUpperCase(),"HSL(A)":t.toString("hsl").toUpperCase(),"HSV(A)":t.toString("hsv").toUpperCase()}}},mounted:function(){window.innerWidth>950&&(this.hide=!1),this.$store.state.isMobile?n(1950):n(1951),this.initPickr()},methods:{initPickr:function(){var t=this;this.pickr=m.a.create({el:this.$refs.colorPicker,theme:this.$store.state.isMobile?"monolith":"classic",default:this.color,components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,hsla:!0,hsva:!0,cmyk:!0,input:!0,clear:!0,save:!0}},position:"right-end"}),this.pickr.on("save",(function(e){t.color=e?e.toRGBA().toString(2):""}))},copyColor:function(t){var e=this;this.$copyText(t).then((function(){e.$message.success("复制成功")}),(function(){e.$message.error("复制失败，请手动选择复制")}))},reset:function(){this.color="#249ffd",this.pickr.setColor("#249ffd"),this.preview="",this.imgColor={color:"",palette:""},this.colorthief=new v},handleChange:function(t){var e=this;if(this.loading)return!1;var n=t.target.files;if(!n.length)return!1;var o=n[0];this.loading=!0,this.reset(),Object(y.a)(o).then((function(t){e.preview=t;var img=new Image;img.onload=function(){var t=e.colorthief.getPalette(img).map((function(t){return r()("rgb(".concat(t.toString(),")")).toHexString()})),n=r()("rgb(".concat(e.colorthief.getColor(img).toString(),")")).toHexString();e.imgColor.palette=t,e.imgColor.color=n,e.color=n,e.pickr.setColor(n),e.loading=!1},img.src=e.preview}))}}},C=(n(1952),n(2)),k=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"hex转rgb,颜色代码转换,在线颜色选择,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线颜色转换"}],title:"颜色处理 - MikuTools"},t.options.toolsMeta={name:"颜色处理",path:"/color",head:{meta:[{hid:"keywords",keywords:"hex转rgb,颜色代码转换,在线颜色选择,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线颜色转换"}],title:"颜色处理 - MikuTools"},show:!0,key:"other"}},component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"color"},[n("nya-container",{attrs:{title:"颜色转换"}},[n("el-tooltip",{attrs:{transition:"el-fade-in",effect:"dark",content:"选择颜色",placement:"top"}},[n("div",{staticStyle:{display:"inline-block"}},[n("div",{staticClass:"nya-subtitle inline-title"},[t._v("\n                    颜色选择器\n                ")]),n("div",{ref:"colorPicker"})])]),n("hr"),n("div",{staticClass:"nya-subtitle"},[t._v("\n            提取图片主色\n        ")]),n("el-input",{staticClass:"mb-15",attrs:{type:"file",placeholder:t.filename?t.filename.replace(/C:\\fakepath\\/,""):"点击这里上传文件",accept:"image/*",clearable:""},on:{clear:t.reset},nativeOn:{change:function(e){return t.handleChange(e)}},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),t.preview?n("div",{staticClass:"preview"},[n("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                预览\n            ")]),n("img",{attrs:{src:t.preview,alt:"preview"}})]):t._e(),t.preview?n("div",{staticClass:"img-colors"},[n("div",{staticClass:"img-color"},[n("div",{staticClass:"nya-subtitle mt-15"},[t._v("\n                    主色\n                ")]),n("el-tooltip",{staticClass:"copy",attrs:{transition:"el-fade-in",effect:"dark",content:"复制主色",placement:"bottom"}},[n("div",{style:{"background-color":t.imgColor.color},on:{click:function(e){return t.copyColor(t.imgColor.color)}}},[t._v("\n                        "+t._s(t.imgColor.color)+"\n                    ")])])],1),n("div",{staticClass:"img-palette"},[n("div",{staticClass:"nya-subtitle"},[t._v("\n                    调色盘\n                ")]),n("ul",t._l(t.imgColor.palette,(function(e,o){return n("el-tooltip",{key:o,attrs:{transition:"el-fade-in",effect:"dark",content:"复制 HEX 值",placement:"bottom"}},[n("li",{style:{"background-color":e},on:{click:function(n){return t.copyColor(e)}}},[t._v("\n                            "+t._s(e)+"\n                        ")])])})),1)])]):t._e()],1),n("nya-container",{attrs:{title:"结果"}},[n("ul",{staticClass:"nya-list"},t._l(t.handleColor,(function(e,o){return n("li",{key:o,on:{click:function(n){return t.copyColor(e)}}},[n("el-tooltip",{attrs:{transition:"el-fade-in",effect:"dark",content:"点击复制："+o,placement:"right"}},[n("div",{staticStyle:{display:"inline-block"}},[n("b",[t._v(t._s(o)+"：")]),n("span",[t._v(t._s(e))])])])],1)})),0)])],1)}),[],!1,null,null,null);"function"==typeof k&&k(component);e.default=component.exports},643:function(t,e,n){"use strict";n(8);e.a=function(t){return new Promise((function(e,n){var o=new FileReader;o.readAsDataURL(t),o.onload=function(){return e(o.result)},o.onerror=function(t){return n(t)}}))}},985:function(t,e,n){t.exports={}}}]);