webpackJsonp([70],{1030:function(e,t,i){t=e.exports=i(526)(!1),t.push([e.i,".homepage .weui_tabbar_label[data-v-3b6cfe40]{font-size:14px;margin-top:2px}.homepage .weui-tabbar__icon .iconfont[data-v-3b6cfe40]{position:relative;left:1px;top:-2px}.homepage .icon-active[data-v-3b6cfe40]{color:#4cc0be}.assembleCount[data-v-3b6cfe40]{position:fixed;background:#4cc0be;color:#fff;font-size:.9rem;height:3.5rem;width:3.5rem;box-sizing:border-box;padding:.5rem .75rem;border-radius:50%;bottom:10%;right:5%;box-shadow:2px 2px 7px #4cc0be;text-align:center}",""])},1073:function(e,t,i){var a=i(1030);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(527)("02d712bf",a,!0)},1150:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"100%"}},[i("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px","body-padding-bottom":"50px"}},[i("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header"},slot:"header"},[i("x-header",{attrs:{"left-options":{backText:this.$route.params.name}}})],1),e._v(" "),i("keep-alive",[i("router-view")],1),e._v(" "),i("tabbar",{staticClass:"homepage",staticStyle:{"z-index":"2"},attrs:{slot:"bottom"},slot:"bottom"},[i("tabbar-item",{attrs:{selected:"errorClassRemember"===e.$route.name},nativeOn:{click:function(t){e._toPage("errorClassRemember")}}},[i("i",{class:"icon iconfont icon-jinrulianxi "+("errorClassRemember"===e.$route.name?"icon-active":""),attrs:{slot:"icon"},slot:"icon"}),e._v(" "),i("span",{attrs:{slot:"label"},slot:"label"},[e._v("记错题")])]),e._v(" "),i("tabbar-item",{attrs:{selected:"errorClassCamera"===e.$route.name},nativeOn:{click:function(t){e._toPage("errorClassCamera")}}},[i("i",{class:"icon iconfont icon-camera "+("errorClassCamera"===e.$route.name?"icon-active":""),attrs:{slot:"icon"},slot:"icon"}),e._v(" "),i("span",{attrs:{slot:"label"},slot:"label"},[e._v("拍错题")])]),e._v(" "),i("tabbar-item",{attrs:{selected:"errorClassGood"===e.$route.name},nativeOn:{click:function(t){e._toPage("errorClassGood")}}},[i("i",{class:"icon iconfont icon-bag1 "+("errorClassGood"===e.$route.name?"icon-active":""),attrs:{slot:"icon"},slot:"icon"}),e._v(" "),i("span",{attrs:{slot:"label"},slot:"label"},[e._v("精选练习")])])],1)],1),e._v(" "),"errorClassRemember"===e.$route.name?[i("div",{staticClass:"assembleCount",on:{click:function(t){e.$router.push({name:"errorClassRemember_assemble",params:{classCode:e.$route.params.classCode}})}}},[e._v("\n      已选"),i("br"),e._v(e._s(e.ErrorclassRemember.count)+"\n    ")])]:"errorClassCamera"===e.$route.name?[i("div",{staticClass:"assembleCount",on:{click:function(t){e.$router.push({name:"errorClassCamera_assemble",params:{classCode:e.$route.params.classCode}})}}},[e._v("\n      已选"),i("br"),e._v(e._s(e.ErrorclassCamera.count)+"\n    ")])]:"errorClassGood"===e.$route.name?[i("div",{staticClass:"assembleCount",on:{click:function(t){e.$router.push({name:"errorClassGood_assemble",params:{classCode:e.$route.params.classCode}})}}},[e._v("\n      已选"),i("br"),e._v(e._s(e.ErrorclassGood.count)+"\n    ")])]:e._e()],2)},staticRenderFns:[]}},601:function(e,t,i){i(1073);var a=i(52)(i(987),i(1150),"data-v-3b6cfe40",null);e.exports=a.exports},623:function(e,t,i){"use strict";function a(e,t){if(!/^javas/.test(e)&&e){"object"===(void 0===e?"undefined":(0,n.default)(e))||t&&"string"==typeof e&&!/http/.test(e)?"object"===(void 0===e?"undefined":(0,n.default)(e))&&!0===e.replace?t.replace(e):"BACK"===e?t.go(-1):t.push(e):window.location.href=e}}function r(e,t){return!t||t._history||"string"!=typeof e||/http/.test(e)?e&&"object"!==(void 0===e?"undefined":(0,n.default)(e))?e:"javascript:void(0);":"#!"+e}Object.defineProperty(t,"__esModule",{value:!0});var o=i(68),n=function(e){return e&&e.__esModule?e:{default:e}}(o);t.go=a,t.getUrl=r},624:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(207),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return(0,r.default)({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},625:function(e,t,i){t=e.exports=i(526)(!1),t.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},626:function(e,t,i){var a=i(625);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(527)("0c618dd8",a,!0)},627:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[i("transition",{attrs:{name:e.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),e.shouldOverWriteTitle?e._e():i("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[i("transition",{attrs:{name:e.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),e.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[e._t("overwrite-title")],2):e._e(),e._v(" "),i("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},628:function(e,t,i){i(626);var a=i(52)(i(624),i(627),null,null);e.exports=a.exports},629:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},630:function(e,t,i){t=e.exports=i(526)(!1),t.push([e.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},631:function(e,t,i){var a=i(630);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(527)("f224bd30",a,!0)},632:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-tab"},[e._t("header"),e._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},staticRenderFns:[]}},633:function(e,t,i){i(631);var a=i(52)(i(629),i(632),null,null);e.exports=a.exports},685:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.childMixin=t.parentMixin=void 0;var a=i(623),r={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var e=this.$children,t=0;t<e.length;t++)e[t].currentIndex=t,e[t].currentSelected&&(this.index=t)}}},props:{value:Number},watch:{currentIndex:function(e,t){t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!1),e>-1&&this.$children[e]&&(this.$children[e].currentSelected=!0),this.$emit("input",e),this.$emit("on-index-change",e,t)},index:function(e){this.currentIndex=e},value:function(e){this.index=e}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},o={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.updateIndex()})},methods:{onItemClick:function(e){var t=this;void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){t.$emit("on-item-click",t.currentIndex)})),!0===e&&(0,a.go)(this.link,this.$router)}},watch:{currentSelected:function(e){e&&(this.$parent.index=this.currentIndex)},selected:function(e){this.currentSelected=e}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}};t.parentMixin=r,t.childMixin=o},707:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"badge",props:{text:[String,Number]}}},711:function(e,t,i){t=e.exports=i(526)(!1),t.push([e.i,".vux-badge{display:inline-block;text-align:center;background:#f74c31;color:#fff;font-size:12px;height:16px;line-height:16px;border-radius:8px;padding:0 6px;background-clip:padding-box;vertical-align:middle}.vux-badge-single{padding:0;width:16px}.vux-badge-dot{height:auto;padding:5px}",""])},715:function(e,t,i){var a=i(711);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(527)("8db6a9d2",a,!0)},720:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===e.text,"vux-badge-single":void 0!==e.text&&1===e.text.toString().length}],domProps:{textContent:e._s(e.text)}})},staticRenderFns:[]}},723:function(e,t,i){i(715);var a=i(52)(i(707),i(720),null,null);e.exports=a.exports},728:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(685);t.default={name:"tabbar",mixins:[a.parentMixin],props:{iconClass:String}}},729:function(e,t,i){t=e.exports=i(526)(!1),t.push([e.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}.vux-reddot,.vux-reddot-border,.vux-reddot-s{position:relative}.vux-reddot-border:after,.vux-reddot-s:after,.vux-reddot:after{background-color:#f74c31;right:-3px;top:-3px}.vux-reddot-border:after,.vux-reddot-border:before,.vux-reddot-s:after,.vux-reddot:after{content:"";position:absolute;display:block;width:8px;height:8px;border-radius:5px;background-clip:padding-box}.vux-reddot-border:before{background-color:#fff;right:-4px;top:-4px;padding:1px}.vux-reddot-s:after{width:6px;height:6px;top:-5px;right:-5px}.weui-tabbar__icon{position:relative}.weui-tabbar__icon>sup{position:absolute;top:-8px;left:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:101}.weui-tabbar__item.vux-tabbar-simple{padding:0;height:50px;line-height:50px}.vux-tabbar-simple .weui-tabbar__label{font-size:14px;line-height:50px}',""])},730:function(e,t,i){var a=i(729);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(527)("7e70a6c4",a,!0)},731:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"weui-tabbar"},[e._t("default")],2)},staticRenderFns:[]}},732:function(e,t,i){i(730);var a=i(52)(i(728),i(731),null,null);e.exports=a.exports},739:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(685),r=i(723),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"tabbar-item",components:{Badge:o.default},beforeMount:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[a.childMixin],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},748:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":e.isActive,"vux-tabbar-simple":e.simple},attrs:{href:"javascript:;"},on:{click:function(t){e.onItemClick(!0)}}},[e.simple?e._e():i("div",{staticClass:"weui-tabbar__icon",class:[e.iconClass||e.$parent.iconClass,{"vux-reddot":e.showDot}]},[e.simple||e.hasActiveIcon&&e.isActive?e._e():e._t("icon"),e._v(" "),!e.simple&&e.hasActiveIcon&&e.isActive?e._t("icon-active"):e._e(),e._v(" "),e.badge?i("sup",[i("badge",{attrs:{text:e.badge}})],1):e._e()],2),e._v(" "),i("p",{staticClass:"weui-tabbar__label"},[e._t("label")],2)])},staticRenderFns:[]}},751:function(e,t,i){var a=i(52)(i(739),i(748),null,null);e.exports=a.exports},987:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(133),o=a(r),n=i(628),s=a(n),l=i(732),c=a(l),d=i(751),u=a(d),b=i(633),p=a(b),f=i(208);t.default={name:"error",components:{XHeader:s.default,Tabbar:c.default,TabbarItem:u.default,ViewBox:p.default},computed:(0,o.default)({},(0,f.mapGetters)(["Route","ErrorclassCamera","ErrorclassGood","ErrorclassRemember"])),methods:{_toPage:function(e){this.$router.replace({name:e,params:{name:this.Route.params.name,chapterId:this.Route.params.chapterId,subject:this.Route.params.subject}})}}}}});