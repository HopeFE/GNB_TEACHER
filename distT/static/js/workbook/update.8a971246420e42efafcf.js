webpackJsonp([53],{"3Akd":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("Dd8w"),i=o.n(a),n=o("ABCa"),r=o("1DHf"),l=o("rHil"),s=o("1sNz"),c=o("jOlP"),d=o("UIMx"),u=o("dgEa"),p=o("2sLL"),k=o("NYxO"),f={name:"Update",components:{XHeader:n.a,Cell:r.a,Group:l.a,ViewBox:s.a,Spinner:c.a,XButton:p.a,Tabbar:d.a,TabbarItem:u.a},computed:i()({},Object(k.mapGetters)(["workbook","User"])),data:function(){return{loading:!0}},methods:i()({},Object(k.mapActions)(["getWorkbook","setWorkbookUpdate"]),{_getData:function(){var t=this;this.loading=!0,this.getWorkbook().then(function(){t.loading=!1})},_changeBook:function(t,e,o){this.setWorkbookUpdate({pindex:t,index:e,workbookId:o})}}),beforeRouteEnter:function(t,e,o){o(function(t){t._getData()})},beforeRouteLeave:function(t,e,o){o()}},b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"管理",showBack:!0}},slot:"header"}),t._v(" "),o("div",[t._l(t.workbook.list.textbook,function(e,a){return o("group",{key:a,attrs:{title:e.textbookName}},t._l(e.list,function(e,i){return o("cell",{key:i},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img.url+"?imageMogr2/auto-orient/thumbnail/180x240!/format/jpg/interlace/1/blur/1x0/quality/100|imageslim",expression:'workbook.img.url+"?imageMogr2/auto-orient/thumbnail/180x240!/format/jpg/interlace/1/blur/1x0/quality/100|imageslim"'}],attrs:{slot:"icon",width:"60",height:"80"},slot:"icon"}),t._v(" "),o("div",{staticStyle:{width:"90%"},attrs:{slot:"after-title"},slot:"after-title"},[o("p",{staticStyle:{color:"#4cc0be","font-size":"14px"}},[t._v("   "+t._s(e.year)+"版")]),t._v(" "),o("p",{staticClass:"ellipsis",staticStyle:{"font-size":".9rem",padding:".2rem 0"}},[t._v("  "+t._s(e.workbookName))]),t._v(" "),e.version?t._l(e.version.split(","),function(e,a){return o("p",{key:a,staticStyle:{color:"#aaa","font-size":"14px"}},[t._v("\n                 "+t._s(e)+"\n            ")])}):t._e()],2),t._v(" "),o("div",{attrs:{slot:"default"},slot:"default"},[e.state?o("x-button",{attrs:{slot:"default",mini:"",plain:"",type:"primary"},nativeOn:{click:function(o){t._changeBook(a,i,e.workbookId)}},slot:"default"},[t._v("隐藏")]):o("x-button",{attrs:{type:"primary",mini:""},nativeOn:{click:function(o){t._changeBook(a,i,e.workbookId)}}},[t._v("显示")])],1)])}))}),t._v(" "),o("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?o("spinner",{attrs:{type:"dots"}}):0===t.User.classes.length?o("p",{staticStyle:{"font-size":"16px",color:"#666",padding:"0 2rem","text-align":"left"},on:{click:function(e){t.$router.push({name:"class_add"})}}},[t._v("\n        没有学生？请点击"),o("span",{staticStyle:{color:"#4cc0be"}},[t._v("创建班级")]),t._v("，并邀请学生加入班级\n      ")]):0===t.workbook.list.textbook.length?o("p",{staticStyle:{"font-size":"16px",color:"#666",padding:"0 2rem","text-align":"left"}},[t._v("没有习题册？请让学生到学生端添加习题册")]):t._e()],1)],2)],1)},g=[],m={render:b,staticRenderFns:g},v=m,_=o("VU/8"),x=_(f,v,!1,null,null,null);e.default=x.exports}});