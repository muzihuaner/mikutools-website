(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1106:function(n,t,e){n.exports={}},2389:function(n,t,e){n.exports=e.p+"img/0.a597dd6.png"},2390:function(n,t,e){n.exports=e.p+"img/1.ec979c7.png"},2391:function(n,t,e){n.exports=e.p+"img/2.7c68d58.png"},2392:function(n,t,e){n.exports=e.p+"img/3.531ee50.png"},2393:function(n,t,e){n.exports=e.p+"img/4.967fcbb.png"},2394:function(n,t,e){n.exports=e.p+"img/5.3ad8e5d.png"},2395:function(n,t,e){n.exports=e.p+"img/6.67373f5.png"},2396:function(n,t,e){n.exports=e.p+"img/7.41b3c6f.png"},2397:function(n,t,e){n.exports=e.p+"img/8.2a794ea.png"},2398:function(n,t,e){n.exports=e.p+"img/9.3303bca.png"},2399:function(n,t,e){n.exports=e.p+"img/10.72e99f2.png"},2400:function(n,t,e){n.exports=e.p+"img/11.e0c39cd.png"},2401:function(n,t,e){n.exports=e.p+"img/12.41ea735.png"},2402:function(n,t,e){n.exports=e.p+"img/13.76fc0e5.png"},2403:function(n,t,e){n.exports=e.p+"img/14.fb26fec.png"},2404:function(n,t,e){"use strict";e(1106)},2723:function(n,t,e){"use strict";e.r(t);e(8);var o=e(755),c=e(251),r=e(646),l=e(643),f={name:"ChristmasHat",data:function(){return{n:null,src:[e(2389),e(2390),e(2391),e(2392),e(2393),e(2394),e(2395),e(2396),e(2397),e(2398),e(2399),e(2400),e(2401),e(2402),e(2403)],style:0,logo:null,backgroundImage:null,canvas:null}},watch:{style:function(){this.n&&this.renderCanvas()}},mounted:function(){this.canvas=new o.fabric.Canvas(this.$refs.canvas)},methods:{handleChange:function(n){var t=this,e=n.target.files;if(!e.length)return!1;var o=e[0];Object(l.a)(o).then((function(n){var image=new Image;image.onload=function(){t.backgroundImage=image,t.$nextTick(t.renderCanvas)},image.src=n}))},renderCanvas:function(){var n=this;this.canvas.clear();var image=this.backgroundImage,t=this.$refs.box.offsetWidth,e=1;image.width>t?(this.canvas.setWidth(t),this.canvas.setHeight(t/image.width*image.height),e=t/image.width):(this.canvas.setWidth(image.width),this.canvas.setHeight(image.height)),this.getLogo().then((function(){var e=image.width/2/n.logo.width;image.width>t&&(e=t/2/n.logo.width);var c=new o.fabric.Image(n.logo,{scaleX:e,scaleY:e,left:0,top:0});n.canvas.add(c),c.centerH(),n.canvas.renderAll()}));var c=new o.fabric.Image(image,{scaleX:e,scaleY:e,left:0,top:0,selectable:!1});this.canvas.setBackgroundImage(c)},getLogo:function(){var n=this;return new Promise((function(t,e){var image=new Image;image.crossOrigin="anonymous",image.onload=function(){n.logo=image,t(image)},image.onerror=e,image.src=n.src[n.style]}))},save:function(){if(!this.n)return!1;Object(c.a)(this.canvas.toDataURL(),"".concat(Object(r.a)(),".png"))}}},d=(e(2404),e(2)),h=function(n){n.exports.head={meta:[{hid:"keywords",keywords:"在线加口罩,头像加口罩,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线加口罩"}],title:"头像加口罩 - MikuTools"},n.options.toolsMeta={name:"头像加口罩",path:"/mask",head:{meta:[{hid:"keywords",keywords:"在线加口罩,头像加口罩,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线加口罩"}],title:"头像加口罩 - MikuTools"},show:!0,key:"obsolete"}},component=Object(d.a)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"mask"},[e("nya-container",{attrs:{title:"在线加口罩"}},[e("div",{staticClass:"nya-subtitle"},[n._v("\n            请选择要制作的图片\n        ")]),e("el-input",{attrs:{type:"file",accept:"image/*",placeholder:n.n?n.n.replace(/C:\\fakepath\\/,""):"点击这里上传文件",clearable:""},nativeOn:{change:function(t){return n.handleChange(t)}},model:{value:n.n,callback:function(t){n.n=t},expression:"n"}},[e("el-button",{attrs:{slot:"append"},on:{click:n.save},slot:"append"},[n._v("\n                下载\n            ")])],1),e("div",{staticClass:"nya-subtitle mt-15"},[n._v("\n            选择口罩样式\n        ")]),e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择","popper-append-to-body":!1},model:{value:n.style,callback:function(t){n.style=t},expression:"style"}},n._l(n.src,(function(t,o){return e("el-option",{key:o,attrs:{label:"样式："+(o+1),value:o}},[e("div",{staticClass:"preview"},[e("el-image",{attrs:{src:n.src[o],fit:"contain"}}),e("div",[n._v(n._s("样式："+(o+1)))])],1)])})),1)],1),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:n.n,expression:"n"}],attrs:{title:"预览"}},[e("div",{ref:"box",staticClass:"box"},[e("canvas",{ref:"canvas"})])])],1)}),[],!1,null,null,null);"function"==typeof h&&h(component);t.default=component.exports},643:function(n,t,e){"use strict";e(8);t.a=function(n){return new Promise((function(t,e){var o=new FileReader;o.readAsDataURL(n),o.onload=function(){return t(o.result)},o.onerror=function(n){return e(n)}}))}},646:function(n,t,e){"use strict";e(8),e(66),e(67);var o=e(144).MD5;t.a=function(){return o(Math.random().toString()).toString()}},756:function(n,t){},757:function(n,t){},758:function(n,t){}}]);