(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1117:function(e,t,n){e.exports={}},2425:function(e,t,n){"use strict";n(1117)},2733:function(e,t,n){"use strict";n.r(t);var r={name:"Oricon",data:function(){return{tab:"",type:"music",tabItems:[{name:"d",title:"日榜单（30）"},{name:"w",title:"周榜单（50）"},{name:"m",title:"月榜单（50）"},{name:"y",title:"年榜单（200）"}],data:null,loading:!0}},mounted:function(){this.getData()},methods:{handleCoverSrc:function(e){return e.indexOf("oricon")>=0?this.$store.state.env.imageServer+e:e},handleUrl:function(e){return e?0===e.indexOf("/")?"https://www.oricon.co.jp".concat(e):e:"javascript:;"},getData:function(){var e=this;this.$axios.post("/oricon").then((function(t){e.data=t.data.data,setTimeout((function(){e.tab="d",e.loading=!1}),100)})).catch((function(t){e.$notify.error({title:"获取数据失败",message:t})}))}}},o=(n(2425),n(2)),l=function(e){e.exports.head={meta:[{hid:"keywords",keywords:"Oricon 排行榜,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"Oricon 排行榜"}],title:"Oricon 排行榜 - MikuTools"},e.options.toolsMeta={name:"Oricon 排行榜",path:"/oricon",head:{meta:[{hid:"keywords",keywords:"Oricon 排行榜,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"Oricon 排行榜"}],title:"Oricon 排行榜 - MikuTools"},show:!0,key:"other"}},component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"oricon"},[n("nya-container",{attrs:{title:"Oricon 排行榜",loading:e.loading}},[e.data?n("div",{staticClass:"update"},[e._v("\n            数据最后更新于："+e._s(e.data.update)+"\n        ")]):e._e(),n("el-radio-group",{staticClass:"mt-15 mb-15",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[n("el-radio",{attrs:{label:"music"}},[e._v("\n                单曲\n            ")]),n("el-radio",{attrs:{label:"album"}},[e._v("\n                专辑\n            ")])],1),e.data?n("div",[n("el-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabItems,(function(t,r){return n("el-tab-pane",{key:"tag-"+r,staticClass:"tab-pane",attrs:{label:t.title,name:t.name}},e._l(e.data[e.type][t.name],(function(t,r){return n("div",{key:e.type+r,staticClass:"music-card"},[n("a",{staticClass:"cover",attrs:{href:e.handleUrl(t.url),target:"_blank",rel:"noopener noreferrer"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.handleCoverSrc(t.cover),expression:"handleCoverSrc(item.cover)"}],attrs:{title:t.name}}),n("div",{staticClass:"image-shadow",style:"background-image: url("+e.handleCoverSrc(t.cover)+");"})]),n("div",{staticClass:"title"},[n("a",{attrs:{title:t.name,href:e.handleUrl(t.url),target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(t.name))])]),n("div",{staticClass:"singer"},[e._v("\n                            歌手："+e._s(t.singer)+"\n                        ")]),n("div",{staticClass:"date"},[e._v("\n                            发售日："+e._s(t.date)+"\n                        ")]),n("div",{staticClass:"number"},[e._v("\n                            "+e._s(r+1)+"\n                        ")]),n("div",{staticClass:"link"},[n("a",{attrs:{title:"前往QQ音乐搜索："+t.name+" - "+t.singer,href:"https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w="+t.name+" - "+t.singer,target:"_blank",rel:"noopener noreferrer"}},[e._v("QQ")]),n("a",{attrs:{title:"前往Google搜索："+t.name+" - "+t.singer,href:"https://www.google.com/search?q="+t.name+" - "+t.singer,target:"_blank",rel:"noopener noreferrer"}},[e._v("Google")]),n("a",{attrs:{title:"前往Apple Music搜索："+t.name+" - "+t.singer,href:"https://music.apple.com/cn/search?term="+t.name+" - "+t.singer,target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Muisc")])])])})),0)})),1)],1):e._e()],1),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[n("b",[e._v("本工具为站长喜好所开发，没有什么实际用处，不会应用户要求调整或增加功能")])]),n("li",[e._v("由于oricon官网经常因为国内网络环境无法访问，特此开发该工具")]),n("li",[e._v("仅统计日本oricon单曲和专辑排行榜")]),n("li",[e._v("数据统计均为：前一天，前一周，前一月，前一年。除特殊情况（服务器炸了）外，数据每天早上9点更新")])])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(component);t.default=component.exports}}]);