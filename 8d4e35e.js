(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{2668:function(t,e,o){"use strict";o.r(e);o(359);var l=o(642),n={name:"BilibiliBbqVideoDownloader",data:function(){return{results:"",loading:!1,form:{url:""},regex:l.a}},methods:{download:function(){var t=this;if(this.loading)return!1;l.a.http.test(this.form.url)?(this.loading=!0,this.results="",this.form.url=this.form.url.match(l.a.http)[0],this.$axios.post("/bilibili_bbq_video_downloader",{url:this.form.url}).then((function(e){t.loading=!1,t.results=e.data.data})).catch((function(e){t.loading=!1,t.$notify.error({title:"解析失败",message:e})}))):this.$notify.error({title:"解析失败",message:"请输入正确的链接"})}}},r=o(2),d=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"Bilibili 轻视频解析下载,怎么下载轻视频,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线 Bilibili 轻视频解析下载"}],title:"Bilibili 轻视频下载 - MikuTools"},t.options.toolsMeta={name:"Bilibili 轻视频下载",path:"/bilibili_bbq_video_downloader",head:{meta:[{hid:"keywords",keywords:"Bilibili 轻视频解析下载,怎么下载轻视频,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线 Bilibili 轻视频解析下载"}],title:"Bilibili 轻视频下载 - MikuTools"},show:!1,key:"vip"}},component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bilibili_bbq_video_downloader"},[o("nya-container",{attrs:{title:"哔哩哔哩轻视频解析"}},[o("el-form",{staticClass:"nya-input-btn",attrs:{model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[o("span",{staticClass:"nya-subtitle"},[t._v("请输入视频链接")]),o("el-form-item",{attrs:{prop:"url",rules:[{required:!0,message:"链接不能为空"},{pattern:t.regex.http,message:"链接格式不合法"}]}},[o("el-input",{attrs:{disabled:t.loading,clearable:"",autofocus:"",placeholder:"https://bbq.bilibili.com/video/?id=1568086431057836433"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.download(e))}},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url","string"==typeof e?e.trim():e)},expression:"form.url"}},[o("el-button",{attrs:{slot:"append",loading:t.loading},on:{click:t.download},slot:"append"},[t._v("\n                        "+t._s(t.loading?"获取中":"开始获取")+"\n                    ")])],1)],1)],1)],1),o("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.results.length,expression:"results.length"}],attrs:{title:"获取成功"}},t._l(t.results,(function(e,l){return o("p",{key:l},[o("b",[t._v(t._s(e.title)+"：")]),o("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.url))])])})),0)],1)}),[],!1,null,null,null);"function"==typeof d&&d(component);e.default=component.exports},642:function(t,e,o){"use strict";e.a={domain:/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/,http:/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,http_with_unicode:/https?:\/\/[-A-Za-z0-9\u2E80-\u9FFF+&@#/%?=~_|!:,.;]+[-A-Za-z0-9\u2E80-\u9FFF+&@#/%=~_|]/}}}]);