webpackJsonp([32],{Ayre:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"\n.popup .vux-cell-box[data-v-00085c0a]:before{\r\n  border-top:0px !important;\n}\r\n",""])},KKji:function(t,e,o){var n=o("Ayre");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("3650a08b",n,!0)},Pn3M:function(t,e,o){"use strict";function n(t){o("KKji")}Object.defineProperty(e,"__esModule",{value:!0});var i=o("Dd8w"),s=o.n(i),a=o("2sLL"),c=o("ABCa"),r=o("1sNz"),l=o("rHil"),p=o("1DHf"),h=o("7Ah8"),d=o("jOlP"),u=o("NYxO"),f=o("xJtg"),w={name:"assemble",components:{XButton:a.a,XHeader:c.a,ViewBox:r.a,Group:l.a,Cell:p.a,PopupPicker:h.a,Spinner:d.a,Share:f.a},computed:s()({},Object(u.mapGetters)(["MyDownloadAssemble"]),{grade:function(){switch(this.options[0]){case"初中":return"789";case"高中":return"10";default:return""}},subjectId:function(){switch(this.options[1]){case"数学":return"2";case"物理":return"7";default:return""}}}),data:function(){return{options:["高中","数学"],showPopupPicker:!1,loading:!0,error:!1,showAction:!1,share:{content:"",title:"我的组卷",href:""}}},methods:s()({},Object(u.mapActions)(["getMyDownloadAssemble","clearMyDownload"]),{_download:function(t){this.share.href=t.url,this.share.content=t.name,this.showAction=!0},_getData:function(){var t=this;this.clearMyDownload({type:"assemble"}),this.loading=!0,this.getMyDownloadAssemble({options:{grade:this.grade,subjectId:this.subjectId}}).then(function(){t.error=!1,t.loading=!1}).catch(function(e){t.error=!0,t.loading=!1})}}),watch:{options:function(){this.showPopupPicker=!1,this._getData()}},beforeRouteEnter:function(t,e,o){o(function(t){"myDownload"===e.name&&t._getData()})},beforeRouteLeave:function(t,e,o){this.showAction?(this.showAction=!1,o(!1)):this.showPopupPicker?(this.showPopupPicker=!1,o(!1)):o()}},g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view-box",{attrs:{"body-padding-top":"46px"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"组卷列表"}},slot:"header"},[o("div",{attrs:{slot:"right"},on:{click:function(e){t.showPopupPicker=!0}},slot:"right"},[t._v("筛选")]),t._v(" "),o("div",{staticClass:"popup"},[o("popup-picker",{attrs:{show:t.showPopupPicker,"confirm-text":"确定","show-cell":!1,data:[["初中","高中"],["数学","物理"]]},on:{"on-hide":function(e){t.showPopupPicker=!1}},model:{value:t.options,callback:function(e){t.options=e},expression:"options"}})],1)]),t._v(" "),o("div",[o("group",{directives:[{name:"show",rawName:"v-show",value:t.MyDownloadAssemble.list.length,expression:"MyDownloadAssemble.list.length"}],attrs:{gutter:0,title:"只展示最近一个月的试卷"}},t._l(t.MyDownloadAssemble.list,function(e,n){return o("cell",{key:n,attrs:{title:e.name}},[o("div",{staticStyle:{color:"#4cc0be"}},[o("span",{staticStyle:{padding:"0 5px","line-height":"24px"},on:{click:function(o){t._download(e)}}},[o("i",{staticClass:"icon iconfont icon-download",staticStyle:{"font-size":"16px"}}),t._v("下载\n          ")]),t._v(" "),o("span",{staticStyle:{padding:"0 5px","line-height":"24px"},on:{click:function(o){t.$router.push({name:"myDownloadAssemble_detail",params:{id:e.downloadId}})}}},[o("i",{staticClass:"icon iconfont icon-chakan",staticStyle:{"font-size":"16px"}}),t._v("查看\n          ")])])])})),t._v(" "),o("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[t.loading?o("spinner",{attrs:{type:"lines"}}):t.MyDownloadAssemble.list.length?t.error?o("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:function(e){t._getData()}}},[t._v("出错了点我重新加载")]):t._e():o("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("近一月还未有下载记录")])],1)],1),t._v(" "),o("share",{attrs:{change:t.showAction,showAction:t.showAction,content:t.share.content,title:t.share.title,href:t.share.href},on:{"update:change":function(e){t.showAction=e}}})],1)},b=[],m={render:g,staticRenderFns:b},v=m,y=o("VU/8"),x=n,_=y(w,v,!1,x,"data-v-00085c0a",null);e.default=_.exports}});