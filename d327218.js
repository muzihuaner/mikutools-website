(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{2676:function(t,e,n){"use strict";n.r(e);var o={name:"Chouxiang",data:function(){return{text:"",results:"",loading:!1}},methods:{transform:function(){var t=this;if(this.loading)return!1;this.loading=!0,this.$axios.post("/chouxiang",{text:this.text}).then((function(e){t.results=e.data.data,t.loading=!1})).catch((function(e){t.$notify.error({title:"转换失败",message:e}),t.loading=!1}))}}},r=n(2),l=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"抽象话转换,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线抽象话转换"}],title:"我们都是孙笑川 - MikuTools"},t.options.toolsMeta={name:"我们都是孙笑川",path:"/chouxiang",head:{meta:[{hid:"keywords",keywords:"抽象话转换,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线抽象话转换"}],title:"我们都是孙笑川 - MikuTools"},show:!0,key:"other"}},component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chouxiang"},[n("nya-container",{attrs:{title:"抽象话转换"}},[n("div",{staticClass:"nya-subtitle"},[t._v("\n            输入文字开始转换\n        ")]),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"我们都是孙笑川",autofocus:"",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.transform(e)}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}},[n("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.transform},slot:"append"},[t._v("\n                "+t._s(t.loading?"转换中":"开始转换")+"\n            ")])],1)],1),t.results?n("nya-container",{attrs:{title:"转换成功"}},[n("nya-copy",{attrs:{copy:t.results}},[n("div",{domProps:{textContent:t._s(t.results)}})])],1):t._e(),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("词库来自："),n("a",{attrs:{href:"https://github.com/gaowanliang/NMSL/blob/master/src/data/emoji.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/gaowanliang/NMSL/blob/master/src/data/emoji.json")])])])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(component);e.default=component.exports}}]);