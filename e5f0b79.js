(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{2752:function(e,t,o){"use strict";o.r(t);var l=o(2598),r=o.n(l);r.a.defaults({fontPath:"/fonts/figlet"});var n={name:"Taag",data:function(){return{result:"",loading:!1,formData:{text:"MikuTools",font:"Standard",horizontalLayout:"default",verticalLayout:"default"},fontOptions:[{label:"Featured FIGlet Fonts",options:["3D Diagonal","Alpha","Acrobatic","Avatar","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big","Blocks","Bulbhead","Cards","Chiseled","Crawford2","Crazy","Dancing Font","Doh","Doom","Efti Wall","Epic","Fire Font-k","Fire Font-s","Flower Power","Fun Face","Fun Faces","Ghost","Graceful","Graffiti","Impossible","Isometric1","Isometric2","Isometric3","Isometric4","JS Bracket Letters","Lil Devil","Merlin1","Modular","Ogre","Patorjk's Cheese","Patorjk-HeX","Rectangles","Slant","Slant Relief","Small","Small Slant","Small Isometric1","Soft","Standard","Star Wars","Sub-Zero","Swamp Land","Sweet","Train","Twisted","Wet Letter","Varsity"]},{label:"ANSI FIGlet Fonts",options:["3D-ASCII","ANSI Regular","ANSI Shadow","Bloody","Calvin S","Delta Corps Priest 1","Electronic","Elite","Stronger Than All","THIS","The Edge"]},{label:"Regular FIGlet Fonts",options:["1Row","3-D","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ASCII New Roman","Alligator","Alligator2","Alphabet","Arrows","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big Chief","Bigfig","Binary","Block","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Caligraphy","Caligraphy2","Catwalk","Chunky","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Crawford","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DWhistled","Decimal","Def Leppard","Diamond","Diet Cola","Digital","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Water","Fender","Filter","Flipped","Four Tops","Fraktur","Fuzzy","Georgi16","Georgia11","Ghoulish","Glenyn","Goofy","Gothic","Gradient","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Invita","Italic","Ivrit","JS Block Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","LCD","Larry 3D","Lean","Letters","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin2","Mike","Mini","Mirror","Mnemonic","Morse","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Old Banner","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Relief","Relief2","Reverse","Roman","Rotated","Rounded","Rowan Cap","Rozzo","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shadow","Shimrod","Short","Slide","Small Caps","Small Keyboard","Small Poison","Small Script","Small Shadow","Small Tengwar","Speed","Spliff","Stacey","Stampate","Stampatello","Star Strips","Stellar","Stforek","Stick Letters","Stop","Straight","Swan","Tanja","Tengwar","Term","Test1","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tombstone","Trek","Tsalagi","Tubular","Two Point","USA Flag","Univers","Wavy","Weird","Whimsy","Wow"]}],layoutOptions:[{label:"默认 - 设计字体时的默认间距",value:"default"},{label:"展开 - 尽可能展开字符间距",value:"full"},{label:"紧凑 - 字符之间贴紧",value:"fitted"},{label:"controlled smushing",value:"controlled smushing"},{label:"universal smushing",value:"universal smushing"}]}},watch:{formData:{deep:!0,handler:function(){this.generator()}}},mounted:function(){this.generator()},methods:{generator:function(){var e=this;this.loading=!0;var text=this.formData.text;r.a.text(text,this.formData,(function(t,o){e.loading=!1,t?e.$message.error("生成失败:"+t):e.result=o}))},onCopy:function(){this.$message.success("复制成功！")}}},c=o(2),d=function(e){e.exports.head={meta:[{hid:"keywords",keywords:"TAAG,文本转字符画,终端字符画,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"文本转 ASCII 艺术字 (TAAG)"}],title:"艺术字符生成 - MikuTools"},e.options.toolsMeta={name:"艺术字符生成",path:"/taag",head:{meta:[{hid:"keywords",keywords:"TAAG,文本转字符画,终端字符画,MikuTools,Ice-Hazymoon,在线工具"},{hid:"description",description:"文本转 ASCII 艺术字 (TAAG)"}],title:"艺术字符生成 - MikuTools"},show:!0,key:"text"}},component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"taag"},[o("nya-container",{attrs:{title:"字符转画"}},[o("el-form",[o("el-form-item",[o("div",{staticClass:"nya-subtitle"},[e._v("\n                    请选择字体\n                ")]),o("el-select",{staticStyle:{width:"100%"},attrs:{filterable:""},model:{value:e.formData.font,callback:function(t){e.$set(e.formData,"font",t)},expression:"formData.font"}},e._l(e.fontOptions,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)})),1)],1),o("el-form-item",[o("div",{staticClass:"nya-subtitle"},[e._v("\n                    请选择字符间宽\n                ")]),o("el-select",{staticStyle:{width:"100%"},model:{value:e.formData.horizontalLayout,callback:function(t){e.$set(e.formData,"horizontalLayout",t)},expression:"formData.horizontalLayout"}},e._l(e.layoutOptions,(function(e){return o("el-option",{key:e.value+"1",attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",[o("div",{staticClass:"nya-subtitle"},[e._v("\n                    请选择字符间高\n                ")]),o("el-select",{staticStyle:{width:"100%"},model:{value:e.formData.verticalLayout,callback:function(t){e.$set(e.formData,"verticalLayout",t)},expression:"formData.verticalLayout"}},e._l(e.layoutOptions,(function(e){return o("el-option",{key:e.value+"2",attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",[o("div",{staticClass:"nya-subtitle"},[e._v("\n                    请输入字符\n                ")]),o("el-input",{attrs:{type:"textarea"},model:{value:e.formData.text,callback:function(t){e.$set(e.formData,"text",t)},expression:"formData.text"}})],1)],1)],1),e.result.trim()?o("nya-container",{attrs:{title:"结果"}},[o("pre",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.result,expression:"result",arg:"copy"}],staticStyle:{"line-height":"normal","word-spacing":"normal"}},[e._v(e._s(e.result))])]):e._e(),o("nya-container",{attrs:{title:"说明"}},[o("ul",{staticClass:"nya-list"},[o("li",[o("b",[e._v("所有字体均仅支持英文字母，不支持数字或符号。")])]),o("li",[e._v("点击结果区域即可复制字符")]),o("li",[e._v("项目字体均来自 "),o("a",{attrs:{href:"https://github.com/patorjk/figlet.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("figlet.js")]),e._v("。")])])])],1)}),[],!1,null,null,null);"function"==typeof d&&d(component);t.default=component.exports}}]);