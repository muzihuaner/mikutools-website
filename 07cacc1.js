(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1130:function(t,e,c){t.exports={}},2475:function(t,e,c){"use strict";c(1130)},2744:function(t,e,c){"use strict";c.r(e);var o={name:"ScreenClockPc",layout:"blank",data:function(){return{fullscreen:!1}},computed:{styles:function(){var t=new Date,e=t.getHours()/12*360+t.getMinutes()/60*30,c=t.getMinutes()/60*360+t.getSeconds()/60*6,o=t.getSeconds()/60*360;return["@keyframes rotate-hour{from{transform:rotate("+e+"deg);}to{transform:rotate("+(e+360)+"deg);}}","@keyframes rotate-minute{from{transform:rotate("+c+"deg);}to{transform:rotate("+(c+360)+"deg);}}","@keyframes rotate-second{from{transform:rotate("+o+"deg);}to{transform:rotate("+(o+360)+"deg);}}"].join("")}},methods:{launchFullscreen:function(){if(this.fullscreen)document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),this.fullscreen=!1;else{var t=this.$refs.clock;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullScreen(),this.fullscreen=!0}}}},l=(c(2475),c(2)),n=function(t){t.exports.head={meta:[{hid:"keywords",keywords:"在线屏保,时钟屏保,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线时钟屏保"}],title:"时钟屏保 - MikuTools"},t.options.toolsMeta={name:"时钟屏保",path:"/screen_clock",head:{meta:[{hid:"keywords",keywords:"在线屏保,时钟屏保,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"在线时钟屏保"}],title:"时钟屏保 - MikuTools"},show:!0,key:"other"}},component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{ref:"clock",staticClass:"screen_clock_pc"},[c("style",{domProps:{textContent:t._s(t.styles)}}),c("div",{staticClass:"btns"},[c("i",{staticClass:"eva eva-arrow-back",attrs:{title:"返回"},on:{click:function(e){return t.$router.push("/")}}}),c("i",{staticClass:"eva eva-expand",attrs:{title:"全屏"},on:{click:t.launchFullscreen}})]),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clock-wrapper"},[e("div",{staticClass:"clock-base"},[e("div",{staticClass:"clock-dial"},[e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"}),e("div",{staticClass:"clock-indicator"})]),e("div",{staticClass:"clock-hour"}),e("div",{staticClass:"clock-minute"}),e("div",{staticClass:"clock-second"}),e("div",{staticClass:"clock-center"})])])}],!1,null,null,null);"function"==typeof n&&n(component);e.default=component.exports}}]);