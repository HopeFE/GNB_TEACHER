webpackJsonp([102],{"/kga":function(e,t,n){"use strict";function o(e){n("OQbP")}var a=n("JkZY"),i={mixins:[a.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(e){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(e){this.$emit("update:show",e),this.$emit(e?"on-show":"on-hide"),e?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var e=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),t=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(e&&t)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===e.layout}},[n("transition",{attrs:{name:e.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-mask",style:e.maskStyle,on:{click:e.hide}})]),e._v(" "),n("transition",{attrs:{name:e.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:e.dialogClass,style:e.dialogStyle},[e._t("default")],2)])],1)},u=[],s={render:r,staticRenderFns:u},c=s,l=n("VU/8"),m=o,h=l(i,c,!1,m,null,null);t.a=h.exports},"/ocq":function(e,t,n){e.exports=n("49fU")(358)},"49fU":function(e,t){e.exports=vendor_library},"62KO":function(e,t,n){"use strict";function o(e){n("vGvH")}var a=n("/kga"),i={name:"confirm",components:{XDialog:a.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(e){this.showValue=e},showValue:function(e){var t=this;this.$emit("input",e),e&&(this.showInput&&(this.msg="",setTimeout(function(){t.$refs.input&&t.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(e){this.msg=e},setInputFocus:function(){this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{dialogClass:"android"===e.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":e.maskTransition,"dialog-transition":"android"===e.theme?"vux-fade":e.dialogTransition,"hide-on-blur":e.hideOnBlur,"mask-z-index":e.maskZIndex},on:{"on-hide":function(t){e.$emit("on-hide")}},model:{value:e.showValue,callback:function(t){e.showValue=t},expression:"showValue"}},[e.title?n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[e._v(e._s(e.title))])]):e._e(),e._v(" "),e.showInput?n("div",{staticClass:"vux-prompt",on:{touchstart:function(t){t.preventDefault(),e.setInputFocus(t)}}},[n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:e.placeholder},domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}},"input",e.inputAttrs,!1))]):n("div",{staticClass:"weui-dialog__bd"},[e._t("default",[n("div",{domProps:{innerHTML:e._s(e.content)}})])],2),e._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:e._onCancel}},[e._v(e._s(e.cancelText||"取消"))]),e._v(" "),n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:e._onConfirm}},[e._v(e._s(e.confirmText||"确定"))])])])],1)},u=[],s={render:r,staticRenderFns:u},c=s,l=n("VU/8"),m=o,h=l(i,c,!1,m,null,null);t.a=h.exports},"7+uW":function(e,t,n){e.exports=n("49fU")(355)},"9JMe":function(e,t,n){e.exports=n("49fU")(361)},Bfwr:function(e,t,n){"use strict";function o(e){n("UZ6i")}var a={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(e){this.$emit("update:show",e)}}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),e._v(" "),n("div",{staticClass:"weui-toast",style:{position:e.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),e._v(" "),n("p",{staticClass:"weui-toast__content"},[e._v(e._s(e.text||"加载中")),e._t("default")],2)])])])},r=[],u={render:i,staticRenderFns:r},s=u,c=n("VU/8"),l=o,m=c(a,s,!1,l,null,null);t.a=m.exports},ByBT:function(e,t){},NHnr:function(e,t,n){"use strict";function o(e){n("ByBT")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i=n("cTzj"),r=n.n(i),u=n("v5o6"),s=n.n(u),c=n("olkN"),l=n("Gu7T"),m=n.n(l),h=n("/ocq"),d=n("9JMe"),p=[{path:"/",component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){return e(n("YtIq"))}.bind(null,n)).catch(n.oe)},redirect:function(e){return localStorage.getItem("token")?"index":"login"},children:[{path:"index",name:"index",component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){return e(n("H0dg"))}.bind(null,n)).catch(n.oe)}},{path:"bag",name:"bag",component:function(e){return Promise.all([n.e(0),n.e(9)]).then(function(){return e(n("FxCO"))}.bind(null,n)).catch(n.oe)}},{path:"user",name:"user",component:function(e){return Promise.all([n.e(0),n.e(50)]).then(function(){return e(n("P6DD"))}.bind(null,n)).catch(n.oe)}}]},{path:"/article/:id",component:function(e){return Promise.all([n.e(0),n.e(51)]).then(function(){return e(n("YpuW"))}.bind(null,n)).catch(n.oe)}}],f={path:"/login",component:function(e){return n.e(45).then(function(){return e(n("Uf6q"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",component:function(e){return Promise.all([n.e(0),n.e(82)]).then(function(){return e(n("b/kq"))}.bind(null,n)).catch(n.oe)}},{path:"/forget",component:function(e){return Promise.all([n.e(0),n.e(83)]).then(function(){return e(n("s73Z"))}.bind(null,n)).catch(n.oe)}},{path:"/register",component:function(e){return Promise.all([n.e(0),n.e(81)]).then(function(){return e(n("Fiug"))}.bind(null,n)).catch(n.oe)}},{path:"/info",component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){return e(n("zNy7"))}.bind(null,n)).catch(n.oe)}},{path:"/resetPassword",component:function(e){return Promise.all([n.e(0),n.e(80)]).then(function(){return e(n("ZUY7"))}.bind(null,n)).catch(n.oe)}},{path:"/setPassword",component:function(e){return Promise.all([n.e(0),n.e(79)]).then(function(){return e(n("EL1J"))}.bind(null,n)).catch(n.oe)}}]},b={path:"/about",component:function(e){return n.e(100).then(function(){return e(n("jCss"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"about",component:function(e){return Promise.all([n.e(0),n.e(13)]).then(function(){return e(n("oQjA"))}.bind(null,n)).catch(n.oe)}},{path:"my",name:"about_my",component:function(e){return Promise.all([n.e(0),n.e(49)]).then(function(){return e(n("/WIw"))}.bind(null,n)).catch(n.oe)}},{path:"advice",name:"about_advice",component:function(e){return Promise.all([n.e(0),n.e(89)]).then(function(){return e(n("+oFv"))}.bind(null,n)).catch(n.oe)}},{path:"adviceHistory",component:function(e){return Promise.all([n.e(0),n.e(88)]).then(function(){return e(n("v91k"))}.bind(null,n)).catch(n.oe)}}]},w={path:"/correct/:grade/:subjectId/:id",name:"correct",component:function(e){return Promise.all([n.e(0),n.e(47)]).then(function(){return e(n("P7Ty"))}.bind(null,n)).catch(n.oe)}},g={path:"/example/:type/:subjectId/:grade/:id",name:"example",component:function(e){return Promise.all([n.e(0),n.e(46)]).then(function(){return e(n("k55o"))}.bind(null,n)).catch(n.oe)}},v={path:"/homework",component:function(e){return n.e(97).then(function(){return e(n("1Ak0"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"homework",component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){return e(n("k9+I"))}.bind(null,n)).catch(n.oe)}},{path:"class/:index/:id",name:"homework_class",component:function(e){return Promise.all([n.e(0),n.e(85)]).then(function(){return e(n("Jok3"))}.bind(null,n)).catch(n.oe)}},{path:"publish/content",name:"homework_publish_content",component:function(e){return Promise.all([n.e(0),n.e(34)]).then(function(){return e(n("3Axc"))}.bind(null,n)).catch(n.oe)}},{path:"publish/audio",name:"homework_publish_audio",component:function(e){return Promise.all([n.e(0),n.e(12)]).then(function(){return e(n("cDS7"))}.bind(null,n)).catch(n.oe)}},{path:"publish/image",name:"homework_publish_image",component:function(e){return Promise.all([n.e(0),n.e(11)]).then(function(){return e(n("piNK"))}.bind(null,n)).catch(n.oe)}},{path:"publish/photo",name:"homework_publish_photo",component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){return e(n("36Mw"))}.bind(null,n)).catch(n.oe)}}]},_={path:"/message",component:function(e){return n.e(44).then(function(){return e(n("+jyd"))}.bind(null,n)).catch(n.oe)},redirect:"/message/",children:[{path:"/",component:function(e){return Promise.all([n.e(0),n.e(76)]).then(function(){return e(n("0XKR"))}.bind(null,n)).catch(n.oe)}},{path:"correct",component:function(e){return Promise.all([n.e(0),n.e(77)]).then(function(){return e(n("7kOl"))}.bind(null,n)).catch(n.oe)}},{path:"system",component:function(e){return Promise.all([n.e(0),n.e(75)]).then(function(){return e(n("fBUo"))}.bind(null,n)).catch(n.oe)}},{path:"class",component:function(e){return Promise.all([n.e(0),n.e(78)]).then(function(){return e(n("ya8Y"))}.bind(null,n)).catch(n.oe)}}]},x={path:"/class",component:function(e){return n.e(43).then(function(){return e(n("bleQ"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"class",component:function(e){return Promise.all([n.e(0),n.e(67)]).then(function(){return e(n("2ZZq"))}.bind(null,n)).catch(n.oe)}},{path:"add",name:"class_add",component:function(e){return Promise.all([n.e(0),n.e(69)]).then(function(){return e(n("+frP"))}.bind(null,n)).catch(n.oe)}},{path:"message",name:"class_message",redirect:"/message/class"},{path:"detail/:code",name:"class_detal",component:function(e){return Promise.all([n.e(0),n.e(27)]).then(function(){return e(n("B3TT"))}.bind(null,n)).catch(n.oe)}},{path:"update/name/:code/:name",name:"class_update_name",component:function(e){return Promise.all([n.e(0),n.e(26)]).then(function(){return e(n("DK8F"))}.bind(null,n)).catch(n.oe)}},{path:"classmate/update/:code/:name",name:"class_classmate_update",component:function(e){return Promise.all([n.e(0),n.e(68)]).then(function(){return e(n("J423"))}.bind(null,n)).catch(n.oe)}}]},P={path:"/assemble",component:function(e){return n.e(99).then(function(){return e(n("lInX"))}.bind(null,n)).catch(n.oe)},redirect:"/assemble/sync",children:[{path:"gaokao",name:"assemble_gaokao",component:function(e){return Promise.all([n.e(0),n.e(87)]).then(function(){return e(n("Eeap"))}.bind(null,n)).catch(n.oe)}},{path:"sync",name:"assemble_sync",component:function(e){return Promise.all([n.e(0),n.e(86)]).then(function(){return e(n("UZKd"))}.bind(null,n)).catch(n.oe)}},{path:"options",name:"assemble_options",component:function(e){return Promise.all([n.e(0),n.e(37)]).then(function(){return e(n("YuAl"))}.bind(null,n)).catch(n.oe)}},{path:"example/:type/:id/:name",name:"assemble_example",component:function(e){return Promise.all([n.e(0),n.e(39)]).then(function(){return e(n("SVpX"))}.bind(null,n)).catch(n.oe)}},{path:"example/options",name:"assemble_example_options",component:function(e){return Promise.all([n.e(0),n.e(38)]).then(function(){return e(n("bK6G"))}.bind(null,n)).catch(n.oe)}},{path:"choice/:subjectId/:grade/:id",name:"assemble_choice",component:function(e){return Promise.all([n.e(0),n.e(40)]).then(function(){return e(n("JA45"))}.bind(null,n)).catch(n.oe)}}]},k={path:"/assemble/download",component:function(e){return n.e(98).then(function(){return e(n("b26M"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"download",component:function(e){return Promise.all([n.e(0),n.e(36)]).then(function(){return e(n("mLGK"))}.bind(null,n)).catch(n.oe)}},{path:"update/:id",name:"download_update",component:function(e){return Promise.all([n.e(0),n.e(35)]).then(function(){return e(n("aMoI"))}.bind(null,n)).catch(n.oe)}}]},y=[P,k],C={path:"/myDownload",component:function(e){return n.e(95).then(function(){return e(n("Zobc"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"myDownload",component:function(e){return Promise.all([n.e(0),n.e(71)]).then(function(){return e(n("tudR"))}.bind(null,n)).catch(n.oe)}},{path:"paper",name:"myDownloadPaper",component:function(e){return Promise.all([n.e(0),n.e(29)]).then(function(){return e(n("utyQ"))}.bind(null,n)).catch(n.oe)}},{path:"paper/search",name:"myDownloadPaperSearch",component:function(e){return Promise.all([n.e(0),n.e(10)]).then(function(){return e(n("KqGx"))}.bind(null,n)).catch(n.oe)}},{path:"assemble",name:"myDownloadAssemble",component:function(e){return Promise.all([n.e(0),n.e(32)]).then(function(){return e(n("Pn3M"))}.bind(null,n)).catch(n.oe)}},{path:"assemble/:id",name:"myDownloadAssemble_detail",component:function(e){return Promise.all([n.e(0),n.e(74)]).then(function(){return e(n("5ilH"))}.bind(null,n)).catch(n.oe)}},{path:"camera",name:"myDownloadCamera",component:function(e){return Promise.all([n.e(0),n.e(31)]).then(function(){return e(n("8eBx"))}.bind(null,n)).catch(n.oe)}},{path:"camera/:id",name:"myDownloadCamera_detail",component:function(e){return Promise.all([n.e(0),n.e(73)]).then(function(){return e(n("/8yk"))}.bind(null,n)).catch(n.oe)}},{path:"good",name:"myDownloadGood",component:function(e){return Promise.all([n.e(0),n.e(30)]).then(function(){return e(n("T2o5"))}.bind(null,n)).catch(n.oe)}},{path:"good/:id",name:"myDownloadGood_detail",component:function(e){return Promise.all([n.e(0),n.e(72)]).then(function(){return e(n("N0YR"))}.bind(null,n)).catch(n.oe)}},{path:"remember",name:"myDownloadRemember",component:function(e){return Promise.all([n.e(0),n.e(28)]).then(function(){return e(n("/Yiy"))}.bind(null,n)).catch(n.oe)}},{path:"remember/:id",name:"myDownloadRemember_detail",component:function(e){return Promise.all([n.e(0),n.e(70)]).then(function(){return e(n("5K+s"))}.bind(null,n)).catch(n.oe)}}]},S={path:"/settings",component:function(e){return n.e(93).then(function(){return e(n("C3QX"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"settings",component:function(e){return Promise.all([n.e(0),n.e(42)]).then(function(){return e(n("8+Zw"))}.bind(null,n)).catch(n.oe)}},{path:"info",name:"settings_info",component:function(e){return Promise.all([n.e(0),n.e(64)]).then(function(){return e(n("4+dg"))}.bind(null,n)).catch(n.oe)}},{path:"update",name:"settings_update",component:function(e){return Promise.all([n.e(0),n.e(6)]).then(function(){return e(n("shXn"))}.bind(null,n)).catch(n.oe)}},{path:"photo",name:"settings_photo",component:function(e){return Promise.all([n.e(0),n.e(14)]).then(function(){return e(n("cpz7"))}.bind(null,n)).catch(n.oe)}},{path:"resetPwd",name:"settings_pwd",component:function(e){return Promise.all([n.e(0),n.e(63)]).then(function(){return e(n("Pwcc"))}.bind(null,n)).catch(n.oe)}}]},I={path:"/workbook",component:function(e){return n.e(90).then(function(){return e(n("fw9t"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"workbook",component:function(e){return Promise.all([n.e(0),n.e(16)]).then(function(){return e(n("XxfA"))}.bind(null,n)).catch(n.oe)}},{path:"/options",name:"workbook_options",component:function(e){return Promise.all([n.e(0),n.e(15)]).then(function(){return e(n("i9Pc"))}.bind(null,n)).catch(n.oe)}},{path:"/update",name:"workbook_update",component:function(e){return Promise.all([n.e(0),n.e(52)]).then(function(){return e(n("3Akd"))}.bind(null,n)).catch(n.oe)}},{path:"chapter/:name/:workbookId",name:"workbook_chapter",component:function(e){return Promise.all([n.e(0),n.e(56)]).then(function(){return e(n("Wwr2"))}.bind(null,n)).catch(n.oe)}},{path:"exercise",component:function(e){return Promise.all([n.e(0),n.e(41)]).then(function(){return e(n("Q9ej"))}.bind(null,n)).catch(n.oe)},children:[{path:"number/:name/:chapterId/",name:"workbook_exercise_number",component:function(e){return Promise.all([n.e(0),n.e(54)]).then(function(){return e(n("7xrM"))}.bind(null,n)).catch(n.oe)}},{path:"photo/:name/:chapterId/",name:"workbook_exercise_photo",component:function(e){return Promise.all([n.e(0),n.e(53)]).then(function(){return e(n("QbQ4"))}.bind(null,n)).catch(n.oe)}}]},{path:"exercise/error/:chapterId/:wbeid/",name:"workbook_exercise_error",component:function(e){return Promise.all([n.e(0),n.e(55)]).then(function(){return e(n("GJrN"))}.bind(null,n)).catch(n.oe)}}]},O=[{path:"errorClass/class",name:"errorClass",component:function(e){return Promise.all([n.e(0),n.e(92)]).then(function(){return e(n("GVFb"))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/chapter/:classCode/:name",name:"errorClassChapter",component:function(e){return Promise.all([n.e(0),n.e(62)]).then(function(){return e(n("3WfC"))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/chapter/options/:name/:classCode",name:"errorClassOptions",component:function(e){return Promise.all([n.e(0),n.e(24)]).then(function(){return e(n("4yER"))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error",component:function(e){return Promise.all([n.e(0),n.e(19)]).then(function(){return e(n("E/IY"))}.bind(null,n)).catch(n.oe)},children:[{path:"camera/:classCode/:chapterId/:name",name:"errorClassCamera",component:function(e){return Promise.all([n.e(0),n.e(23)]).then(function(){return e(n("gmqp"))}.bind(null,n)).catch(n.oe)}},{path:"remember/:classCode/:chapterId/:name",name:"errorClassRemember",component:function(e){return Promise.all([n.e(0),n.e(18)]).then(function(){return e(n("c7ob"))}.bind(null,n)).catch(n.oe)}},{path:"good/:classCode/:chapterId/:name",name:"errorClassGood",component:function(e){return Promise.all([n.e(0),n.e(22)]).then(function(){return e(n("0xMW"))}.bind(null,n)).catch(n.oe)}}]},{path:"errorClass/error/remember/assemble/options",name:"errorClassRemember_options",component:function(e){return Promise.all([n.e(0),n.e(17)]).then(function(){return e(n("w/H+"))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error/good/assemble/options",name:"errorClassGood_options",component:function(e){return Promise.all([n.e(0),n.e(20)]).then(function(){return e(n("+O3F"))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error/remember/assemble/:classCode",name:"errorClassRemember_assemble",component:function(e){return Promise.all([n.e(0),n.e(60)]).then(function(){return e(n("iqg/"))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error/good/assemble/:classCode",name:"errorClassGood_assemble",component:function(e){return Promise.all([n.e(0),n.e(21)]).then(function(){return e(n("sSND"))}.bind(null,n)).catch(n.oe)}},{path:"errorClass/error/camera/assemble/:classCode",name:"errorClassCamera_assemble",component:function(e){return Promise.all([n.e(0),n.e(61)]).then(function(){return e(n("toNA"))}.bind(null,n)).catch(n.oe)}}],T={path:"errorClassmate",name:"errorClassmate",component:function(e){return n.e(91).then(function(){return e(n("eSYa"))}.bind(null,n)).catch(n.oe)},redirect:"errorClassmate/",children:[{path:"/",name:"errorClassmate_index",component:function(e){return Promise.all([n.e(0),n.e(59)]).then(function(){return e(n("P297"))}.bind(null,n)).catch(n.oe)}},{path:"list/:name/:studentId",name:"errorClassmate_list",component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){return e(n("UJOd"))}.bind(null,n)).catch(n.oe)}},{path:"comment/:studentId/:wbeid/:chapterId",name:"errorClassmate_comment",component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){return e(n("bkJi"))}.bind(null,n)).catch(n.oe)}}]},$=[{path:"/statistics",component:function(e){return n.e(57).then(function(){return e(n("WnaF"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"statistics",component:function(e){return Promise.all([n.e(0),n.e(58)]).then(function(){return e(n("ixi/"))}.bind(null,n)).catch(n.oe)}}].concat(m()(O),[T])}],E={path:"/invite",component:function(e){return n.e(96).then(function(){return e(n("arGY"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"invite",component:function(e){return Promise.all([n.e(0),n.e(33)]).then(function(){return e(n("bvPC"))}.bind(null,n)).catch(n.oe)}},{path:"list",name:"invite_list",component:function(e){return Promise.all([n.e(0),n.e(84)]).then(function(){return e(n("joMZ"))}.bind(null,n)).catch(n.oe)}}]},N={path:"/points",component:function(e){return n.e(94).then(function(){return e(n("exMS"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"points",component:function(e){return Promise.all([n.e(0),n.e(25)]).then(function(){return e(n("wV5I"))}.bind(null,n)).catch(n.oe)}},{path:"earn",name:"points_earn",component:function(e){return Promise.all([n.e(0),n.e(66)]).then(function(){return e(n("ol97"))}.bind(null,n)).catch(n.oe)}},{path:"rask",name:"points_rask",component:function(e){return Promise.all([n.e(0),n.e(65)]).then(function(){return e(n("ygZh"))}.bind(null,n)).catch(n.oe)}},{path:"list",name:"points_list",component:function(e){return Promise.all([n.e(0),n.e(48)]).then(function(){return e(n("OP2y"))}.bind(null,n)).catch(n.oe)}}]};a.default.use(h.default);var U=new h.default({mode:"hash",routes:[].concat(m()(y),[b,w,g,v,E],m()(p),m()($),[f,_,C,x,N,S,I])});Object(d.sync)(c.a,U);var j=U,V=n("3BeM"),R=n("Y+qm"),B=n("NXWw"),D=n("ODCk"),M=n.n(D),F=n("Peep"),Y={name:"app"},H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},W=[],Z={render:H,staticRenderFns:W},A=Z,G=n("VU/8"),q=o,X=G(Y,A,!1,q,null,null),K=X.exports;n("j1ja");a.default.use(V.a),a.default.use(r.a,{attempt:3}),a.default.use(R.a),a.default.use(B.a),a.default.use(F.a),s.a.attach(document.body),a.default.config.productionTip=!1,a.default.filter("ymd",function(e){return M()(new Date(Number(e+"000")),"YYYY-MM-DD")}),a.default.filter("ymdhms",function(e){return M()(new Date(Number(e+"000")),"YYYY-MM-DD HH:mm:ss")}),a.default.filter("subject",function(e){switch(e){case 2:return"数学";case 7:return"物理";case 8:return"化学"}}),document.addEventListener("plusready",function(){var e=null;plus.navigator.setStatusBarBackground("#4cc0be"),setTimeout(function(){var e=plus.audio.createPlayer("233.mp3");e.setRoute(plus.audio.ROUTE_SPEAKER),e.play(function(){},function(e){})},500),plus.key.addEventListener("backbutton",function(){"/index"===c.a.state.route.path||"/bag"===c.a.state.route.path||"/login"===c.a.state.route.path||"/user"===c.a.state.route.path?e?(new Date).getTime()-e<1e3&&plus.runtime.quit():(e=(new Date).getTime(),a.default.$vux.toast.show({text:"再按一次退出",type:"text",time:1e3,position:"bottom"}),setTimeout(function(){e=null},1e3)):history.back()},!1)});var L=new a.default({router:j,store:c.a,render:function(e){return e(K)}}).$mount("#app-box");t.default=L},NYxO:function(e,t,n){e.exports=n("49fU")(360)},OQbP:function(e,t){},S5ax:function(e,t){},UZ6i:function(e,t){},YEn3:function(e,t,n){"use strict";var o=n("//Fk"),a=n.n(o),i=n("mvHQ"),r=n.n(i),u=n("Dd8w"),s=n.n(u),c=n("7+uW"),l=n("mtWM"),m=n.n(l);m.a.defaults.timeout=1e4,m.a.defaults.baseURL="http://www.guinaben.com:8070/test/teacher/",m.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",m.a.interceptors.request.use(function(e){return e.params=s()({},e.params,{VERSION:"3.4.0"}),"post"===e.method&&(e.data=r()(e.data)),e}),m.a.interceptors.response.use(function(e){if(401===e.data.code)return localStorage.removeItem("token"),c.default.$vux.toast.show({text:e.data.msg,type:"warn",time:500,isShowMask:!0}),setTimeout(function(){try{plus.runtime.restart()}catch(e){window.location.href="/login"}},500),a.a.reject(e);if(403===e.data.code)c.default.$vux.alert.show({title:"发现新版本",content:"赚积分有惊喜",onHide:function(){/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?plus.runtime.openURL("itms-apps://itunes.apple.com/cn/app/gui-na-ben-jiao-shi-duan-zai/id1190013249?l=en&mt=8"):window.location.href="market://details?id=com.sanbao.guinaben.teacher"}});else if(200!==e.data.code)return c.default.$vux.toast.show({text:e.data.msg,type:"text",time:1e3,position:"bottom"}),a.a.reject(e);return e},function(e){return c.default.$vux.toast.show({text:"网络异常",type:"text",time:1e3,position:"bottom"}),a.a.reject(e)}),t.a=m.a},"ZWj+":function(e,t){},cTzj:function(e,t,n){e.exports=n("49fU")(359)},j1ja:function(e,t,n){e.exports=n("49fU")(152)},mtWM:function(e,t,n){e.exports=n("49fU")(133)},mzja:function(e,t,n){"use strict";function o(e){n("ZWj+")}var a=n("/kga"),i={name:"alert",components:{XDialog:a.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(e){this.showValue=e},showValue:function(e){this.$emit("input",e)}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":e.maskTransition,"dialog-transition":e.dialogTransition,"hide-on-blur":e.hideOnBlur,"mask-z-index":e.maskZIndex},on:{"on-hide":function(t){e.$emit("on-hide")},"on-show":function(t){e.$emit("on-show")}},model:{value:e.showValue,callback:function(t){e.showValue=t},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[e._v(e._s(e.title))])]),e._v(" "),n("div",{staticClass:"weui-dialog__bd"},[e._t("default",[n("div",{domProps:{innerHTML:e._s(e.content)}})])],2),e._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:e._onHide}},[e._v(e._s(e.buttonText||"确定"))])])])],1)},u=[],s={render:r,staticRenderFns:u},c=s,l=n("VU/8"),m=o,h=l(i,c,!1,m,null,null);t.a=h.exports},olkN:function(e,t,n){"use strict";var o={};n.d(o,"getUserInfo",function(){return p}),n.d(o,"setUserInfo",function(){return f}),n.d(o,"getToken",function(){return b}),n.d(o,"getUserNews",function(){return w}),n.d(o,"setHeadImg",function(){return g}),n.d(o,"uploadHeadImg",function(){return v}),n.d(o,"getSwiperInfo",function(){return _}),n.d(o,"swiperInfoClear",function(){return x});var a,i=n("7+uW"),r=n("NYxO"),u=n("bOdI"),s=n.n(u),c=n("Dd8w"),l=n.n(c),m=n("//Fk"),h=n.n(m),d=n("YEn3"),p=function(e){var t=e.rootState,n=e.commit;return i.default.$vux.loading.show({text:"请稍候"}),new h.a(function(e,o){Object(d.a)({method:"get",url:"user",params:{token:t.common.user.token}}).then(function(t){n("USERINFO",t.data.data),e(t),i.default.$vux.loading.hide()}).catch(function(){i.default.$vux.loading.hide()})})},f=function(e,t){var n=e.rootState;e.commit,e.dispatch;return i.default.$vux.loading.show({text:"请稍候"}),new h.a(function(e,o){Object(d.a)({method:"post",url:"user/update",data:l()({},t,{token:n.common.user.token})}).then(function(t){i.default.$vux.loading.hide(),e(t)}).catch(function(){i.default.$vux.loading.hide()})})},b=function(e,t){var n=e.commit;return i.default.$vux.loading.show({text:"请稍候"}),new h.a(function(e,o){Object(d.a)({method:"post",url:"user/token",data:l()({},t)}).then(function(t){n("USER_TOKEN",t.data.token),i.default.$vux.loading.hide(),e(t)}).catch(function(e){i.default.$vux.loading.hide(),o(e)})})},w=function(e){var t=e.rootState,n=e.commit;return new h.a(function(e,o){Object(d.a)({method:"get",url:"message/new",params:{token:t.common.user.token}}).then(function(t){n("USER_NEW_MESSAGE",t.data.data),e(t)})})},g=function(e,t){(0,e.commit)("USERPHOTO_SET",t)},v=function(e,t){var n=e.rootState,o=e.commit,a=e.dispatch;return i.default.$vux.loading.show({text:"请稍候"}),new h.a(function(e,r){Object(d.a)({method:"post",url:"user/headImg",data:{img:t.img,token:n.common.user.token}}).then(function(t){o("USERPHOTO_POST",t.data.data),a("getUserInfo"),i.default.$vux.loading.hide(),e(t)}).catch(function(e){i.default.$vux.loading.hide(),r(e)})})},_=function(e){var t=e.rootState,n=e.commit;return new h.a(function(e,o){Object(d.a)({method:"get",url:"swiper",params:{id:t.route.params.id}}).then(function(t){n("SWIPER_INFO",t.data.data),e(t)})})},x=function(e){(0,e.commit)("SWIPER_INFO",{title:"",article:""})},P={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",article:{title:"",content:""},news:{classes:!1,correct:!1,system:!1},user:{version:"",headImg:"",bufferImg:"",name:"",school:"",subjectId:"",sex:"",mobile:"",classes:[],swiper:[{}],token:localStorage.getItem("token")}},k={Path:function(e,t,n){return n.route.path},Query:function(e,t,n){return n.route.query},Params:function(e,t,n){return n.route.params},Route:function(e,t,n){return n.route},User:function(e){return e.user},News:function(e){return e.news},SwiperInfo:function(e){return e.article},System:function(e){return e.system}},y=(a={},s()(a,"USERINFO",function(e,t){e.user.headImg=t.headImg,e.user.name=t.name,e.user.subjectId=t.subjectId,e.user.mobile=t.mobile,e.user.school=t.school,e.user.sex=t.sex,e.user.swiper=t.swiper,e.user.classes=t.classes,e.user.version=t.version}),s()(a,"USERPHOTO_POST",function(e,t){e.user.headImg=t.headImg}),s()(a,"USERPHOTO_SET",function(e,t){e.user.bufferImg=t}),s()(a,"USER_TOKEN",function(e,t){e.user.token=t,localStorage.setItem("token",t)}),s()(a,"USER_NEW_MESSAGE",function(e,t){e.news.classes=t.classes,e.news.correct=t.correct,e.news.system=t.system}),s()(a,"SWIPER_INFO",function(e,t){e.article.title=t.title,e.article.content=t.content}),a),C={state:P,getters:k,mutations:y,actions:o};i.default.use(r.default);t.a=new r.default.Store({modules:{common:C}})},rLAy:function(e,t,n){"use strict";function o(e){n("S5ax")}var a=n("xNvf"),i={name:"toast",mixins:[a.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(e){var t=this;e&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.show=!1,t.$emit("input",!1),t.$emit("on-hide"),t.fixSafariOverflowScrolling("touch")},this.time))},value:function(e){this.show=e}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowMask&&e.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),e._v(" "),n("transition",{attrs:{name:e.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-toast",class:e.toastClass,style:{width:e.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==e.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),e._v(" "),e.text?n("p",{staticClass:"weui-toast__content",style:e.style,domProps:{innerHTML:e._s(e.text)}}):n("p",{staticClass:"weui-toast__content",style:e.style},[e._t("default")],2)])])],1)},u=[],s={render:r,staticRenderFns:u},c=s,l=n("VU/8"),m=o,h=l(i,c,!1,m,null,null);t.a=h.exports},v5o6:function(e,t,n){e.exports=n("49fU")(354)},vGvH:function(e,t){}},["NHnr"]);