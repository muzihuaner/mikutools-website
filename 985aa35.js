(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1961:function(t,e,n){"use strict";n(994)},2687:function(t,e,n){"use strict";n.r(e);var o=n(650),l=n.n(o),r={name:"ConvertTime",data:function(){return{fromValue:0,fromUnit:0,toValue:0,toUnit:1,items:[{name:"年",unit:"y",value:0,m:1},{name:"周",unit:"wk",value:0,m:52.142857142857146},{name:"天",unit:"d",value:0,m:365},{name:"小时",unit:"h",value:0,m:8760},{name:"分钟",unit:"m",value:0,m:525600},{name:"秒",unit:"s",value:0,m:31536e3},{name:"毫秒",unit:"ms",value:0,m:31536e6},{name:"微妙",unit:"μs",value:0,m:31536e9},{name:"纳秒",unit:"nm",value:0,m:31536e12},{name:"皮秒",unit:"ps",value:0,m:31536e15}]}},methods:{convert:function(t,e){if(!l()(parseFloat(t)))return this.clear(),!1;var n=this.items[this.fromUnit],o=this.items[this.toUnit];e?(this.fromValue=t/o.m*n.m,this.toValue=t):(this.toValue=t/n.m*o.m,this.fromValue=t)},clear:function(){this.fromValue=0,this.toValue=0,this.items.forEach((function(i){i.value=0}))}}},c=(n(1961),n(2)),m=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"年-时间单位转换,周-时间单位转换,天-时间单位转换,小时-时间单位转换,分钟-时间单位转换,秒-时间单位转换,微妙-时间单位转换,毫秒-时间单位转换,皮秒-时间单位转换,纳秒-时间单位转换,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"时间单位转换"}],title:"时间单位转换 - MikuTools"},t.options.toolsMeta={name:"时间单位转换",path:"/convert_time",head:{meta:[{hid:"keywords",keywords:"年-时间单位转换,周-时间单位转换,天-时间单位转换,小时-时间单位转换,分钟-时间单位转换,秒-时间单位转换,微妙-时间单位转换,毫秒-时间单位转换,皮秒-时间单位转换,纳秒-时间单位转换,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"时间单位转换"}],title:"时间单位转换 - MikuTools"},show:!0,key:"data-conversion"}},component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"convert_time"},[n("nya-container",{attrs:{title:"时间单位转换"}},[n("el-input",{attrs:{type:"number",autofocus:"",value:t.fromValue},on:{input:function(e){return t.convert(e,0)}}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},on:{input:function(e){return t.convert(t.fromValue,0)}},slot:"prepend",model:{value:t.fromUnit,callback:function(e){t.fromUnit=e},expression:"fromUnit"}},t._l(t.items,(function(e,o){return n("el-option",{key:o,attrs:{label:e.name,value:o}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"var(--color-text-placeholder)","font-size":"13px"}},[t._v(t._s(e.unit))])])})),1)],1),n("div",{staticClass:"eva eva-swap-outline"}),n("el-input",{attrs:{type:"number",value:t.toValue},on:{input:function(e){return t.convert(e,1)}}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},on:{input:function(e){return t.convert(t.fromValue,0)}},slot:"prepend",model:{value:t.toUnit,callback:function(e){t.toUnit=e},expression:"toUnit"}},t._l(t.items,(function(e,o){return n("el-option",{key:o,attrs:{label:e.name,value:o}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"var(--color-text-placeholder)","font-size":"13px"}},[t._v(t._s(e.unit))])])})),1)],1)],1),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("如果转换数据有问题，请在首页【留言板】中进行反馈")]),n("li",[t._v("结果以实际为准，本数据仅供参考，由于转换单位不同可能会有一定误差，本工具以【年(y)】作为基准单位")])])])],1)}),[],!1,null,null,null);"function"==typeof m&&m(component);e.default=component.exports},650:function(t,e,n){var o=n(82),l=n(53);t.exports=function(t){return"number"==typeof t||l(t)&&"[object Number]"==o(t)}},994:function(t,e,n){t.exports={}}}]);