(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1185:function(e,t,n){e.exports={}},2601:function(e,t,n){"use strict";n(1185)},2758:function(e,t,n){"use strict";n.r(t);var o=n(781),l=(n(833),n(834),n(11)),c=n.n(l),r={name:"Timestamp",components:{DatePicker:o.default},data:function(){return{current:null,useSec:!1,defaultValue:c()().format("YYYY-MM-DD"),date:null,chooseManually:!1}},computed:{results:function(){var time=this.chooseManually?this.date:parseInt(this.current);return!!time&&(this.chooseManually?this.date:this.useSec?c.a.unix(time).format("YYYY-MM-DD HH:mm:ss"):c()(time).format("YYYY-MM-DD HH:mm:ss"))}},methods:{setDate:function(){this.useSec?this.current=c()().unix():this.current=(new Date).getTime()}}},d=(n(2601),n(2)),m=function(e){e.exports.head={meta:[{hid:"keywords",keywords:"时间戳转换,时间戳获取,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线时间戳转换|格式化工具"}],title:"时间戳转换 - MikuTools"},e.options.toolsMeta={name:"时间戳转换",path:"/timestamp",head:{meta:[{hid:"keywords",keywords:"时间戳转换,时间戳获取,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线时间戳转换|格式化工具"}],title:"时间戳转换 - MikuTools"},show:!0,key:"development"}},component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timestamp"},[n("nya-container",{attrs:{title:"时间戳转换"}},[e.chooseManually?n("div",{staticClass:"mb-15"},[n("date-picker",{staticClass:"nya-input date-picker",attrs:{type:"datetime",format:"YYYY-MM-DD hh:mm:ss",confirm:"",editable:!1,placeholder:"请选择时间","default-value":e.defaultValue,"value-type":"timestamp"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1):n("div",[n("div",{staticClass:"nya-subtitle"},[e._v("\n                "+e._s("输入时间戳("+(e.useSec?"秒":"毫秒")+")")+"\n            ")]),n("el-input",{staticClass:"mb-15",attrs:{placeholder:"请输入时间戳("+(e.useSec?"秒":"毫秒")+")",autofocus:"",clearable:""},model:{value:e.current,callback:function(t){e.current="string"==typeof t?t.trim():t},expression:"current"}},[n("el-button",{attrs:{slot:"append"},on:{click:e.setDate},slot:"append"},[e._v("\n                    当前时间\n                ")])],1),n("el-checkbox",{staticClass:"mb-15",model:{value:e.useSec,callback:function(t){e.useSec=t},expression:"useSec"}},[e._v("\n                使用秒(s)为单位\n            ")])],1),n("el-checkbox",{model:{value:e.chooseManually,callback:function(t){e.chooseManually=t},expression:"chooseManually"}},[e._v("\n            手动选择时间\n        ")])],1),e.results?n("nya-container",{attrs:{title:"结果"}},[n("nya-copy",{attrs:{copy:e.results}},[n("div",{domProps:{textContent:e._s(e.results)}})])],1):e._e()],1)}),[],!1,null,null,null);"function"==typeof m&&m(component);t.default=component.exports}}]);