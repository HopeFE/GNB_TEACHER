webpackJsonp([38],{"8Z6T":function(e,t,o){var n=o("L6e0");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("rjj0")("09856538",n,!0)},L6e0:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,"\n.popup .vux-cell-box[data-v-bf1bb0e8]:before{\r\n  border-top:0px !important;\n}\n.center[data-v-bf1bb0e8]{\r\n  text-align: center;\n}\r\n",""])},mLGK:function(e,t,o){"use strict";function n(e){o("8Z6T")}Object.defineProperty(t,"__esModule",{value:!0});var a=o("Xxa5"),s=o.n(a),i=o("exGp"),r=o.n(i),c=o("Dd8w"),l=o.n(c),d=o("ABCa"),p=o("1sNz"),u=o("dQSc"),f=o("jOlP"),h=o("YxJB"),x=o("3Lt7"),w=o("rHil"),b=o("7Ah8"),v=o("UIMx"),_=o("dgEa"),m=o("NYxO"),g=o("xJtg"),D={name:"index",components:{XHeader:d.a,ViewBox:p.a,Card:u.a,Spinner:f.a,Flexbox:h.a,FlexboxItem:x.a,Group:w.a,PopupPicker:b.a,Tabbar:v.a,TabbarItem:_.a,Share:g.a},computed:l()({},Object(m.mapGetters)(["DownloadPaper","DownloadUrl","User"]),{block:function(){return this.DownloadPaper.list.block||[]},downloadId:function(){return this.DownloadPaper.list.downloadId}}),data:function(){return{showPopupPicker:!1,loading:!0,error:!1,showAction:!1,share:{href:"",content:"试卷分享",title:"我的组卷"}}},methods:l()({},Object(m.mapActions)(["clearAssembleExample","getDownloadUpdate","getDownloadList","getDownloadUrl","setMyDownloadPaperScroll","clearMyDownloadPaper","clearAssembleChoice","setMyDownloadPaperUp","setMyDownloadPaperDown","setMyDownloadPaperDel"]),{_getData:function(){var e=this;this.clearMyDownloadPaper(),this.loading=!0,this.getDownloadList().then(function(){e.error=!1,e.loading=!1}).catch(function(t){e.error=!0,e.loading=!1})},_download:function(){var e=this;return r()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getDownloadUpdate({id:e.downloadId}).then(function(t){e.share.href=t.data.data.url,e.showAction=!0});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.showAction=!1;case 8:case"end":return t.stop()}},t,e,[[0,5]])}))()},_shareSuccess:function(){this._getData(),this.clearMyDownloadPaper(),this.clearAssembleExample(),this.$router.go(-1)}}),beforeRouteEnter:function(e,t,o){o(function(e){"example"!==t.name&&e._getData(),e.$refs.download.scrollTo(e.DownloadPaper.scroll)})},beforeRouteLeave:function(e,t,o){this.showAction?(this.showPopupPicker=!1,o(!1)):(this.setMyDownloadPaperScroll(this.$refs.download.getScrollTop()),o())}},y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view-box",{ref:"download",attrs:{"body-padding-top":"46px"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"下载"}},slot:"header"}),e._v(" "),o("div",{attrs:{slot:"default"},slot:"default"},[e._l(e.block,function(t,n){return o("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],key:n},[o("div",{staticClass:"weui-cells__title"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.list,function(t,a){return o("card",{key:a},[o("div",{attrs:{slot:"content"},on:{click:function(e){this.$router.push({name:"example",params:{subjectId:t.subject_id,grade:t.grade,id:t.exercisesId,type:1===t.form?"exercises":"lxexercises"}})}},slot:"content"},[o("div",{domProps:{innerHTML:e._s(t.stem)}}),e._v(" "),e._l(t.opt,function(t,n){return o("div",{key:n,staticStyle:{"padding-top":"5px"}},[e._v("\n            "+e._s(n)+"："),o("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(t)}})])})],2),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"weui-cell weui-cell_link"},[o("div",{staticClass:"weui-cell__bd"},[o("flexbox",[o("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(t){e.setMyDownloadPaperUp({pindex:n,index:a})}}},[o("i",{staticClass:"icon iconfont icon-up"}),e._v("上移\n                ")]),e._v(" "),o("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(t){e.setMyDownloadPaperDown({pindex:n,index:a})}}},[o("i",{staticClass:"icon iconfont icon-down"}),e._v("下移\n                ")]),e._v(" "),o("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(t){e.setMyDownloadPaperDel({pindex:n,index:a})}}},[o("i",{staticClass:"icon iconfont icon-lajitong16"}),e._v("删除\n                ")])],1)],1)])])])})],2)}),e._v(" "),o("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[e.loading?o("spinner",{attrs:{type:"lines"}}):e.block.length?e.error?o("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:function(t){e._getData()}}},[e._v("出错了点我重新加载")]):e._e():o("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[e._v("该科目还未组卷")])],1),e._v(" "),o("share",{attrs:{change:e.showAction,showAction:e.showAction,content:e.share.content,title:e.share.title,href:e.share.href},on:{"update:change":function(t){e.showAction=t},"on-share-success":function(t){e._shareSuccess()}}})],2),e._v(" "),o("tabbar",{directives:[{name:"show",rawName:"v-show",value:e.block&&e.block.length,expression:"block && block.length"}],staticStyle:{"background-color":"#4cc0be",color:"#fff"},attrs:{slot:"bottom"},slot:"bottom"},[o("flexbox",{staticStyle:{padding:".3rem"}},[o("flexbox-item",{staticStyle:{"font-size":".8rem","text-align":"center"},attrs:{span:12},nativeOn:{click:function(t){e._download()}}},[o("i",{staticClass:"icon iconfont icon-download"}),e._v("下载")])],1)],1)],1)},k=[],P={render:y,staticRenderFns:k},S=P,M=o("VU/8"),A=n,C=M(D,S,!1,A,"data-v-bf1bb0e8",null);t.default=C.exports}});