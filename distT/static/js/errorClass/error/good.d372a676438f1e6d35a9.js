webpackJsonp([22],{"0xMW":function(t,e,n){"use strict";function o(t){n("auVv")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),r=n.n(i),a=n("ABCa"),s=n("rHil"),c=n("dQSc"),d=n("1DHf"),l=n("jOlP"),f=n("YxJB"),p=n("3Lt7"),x=n("2sLL"),u=n("63CM"),g=n.n(u),b=n("NYxO"),m={name:"good",components:{XHeader:a.a,Group:s.a,Card:c.a,Cell:d.a,Spinner:l.a,Flexbox:f.a,FlexboxItem:p.a,XButton:x.a},computed:r()({},Object(b.mapGetters)(["ErrorclassGood"])),directives:{TransferDom:g.a},data:function(){return{loading:!1,loadingNoData:!1}},methods:r()({},Object(b.mapActions)(["getStatisticsGood","setStatisticsGoodAssembleUpdate","setStatisticsScroll","getStatisticsComment"]),{_getData:function(){var t=this;this.loading=!0,this.getStatisticsGood().then(function(e){0===e.data.data.offset.length&&(t.loadingNoData=!0),t.loading=!1}).catch(function(){t.loading=!1})}}),beforeRouteEnter:function(t,e,n){n(function(t){t.ErrorclassGood.index.reset&&t._getData(),t.$parent.$refs.viewBoxBody.scrollTop=t.ErrorclassGood.index.scroll})},beforeRouteLeave:function(t,e,n){this.setStatisticsScroll({type:"good",height:this.$parent.$refs.viewBoxBody.scrollTop}),n()}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.ErrorclassGood.index.list,function(e,o){return n("card",{key:o},[n("div",{staticClass:"weui-panel__hd",staticStyle:{color:"#4cc0be"},attrs:{slot:"header"},slot:"header"},[t._v("\n      "+t._s(e.chapterName)+"\n    ")]),t._v(" "),n("div",{attrs:{slot:"content"},on:{click:function(n){t.$router.push({name:"example",params:{type:e.form,grade:e.grade,subjectId:e.subject_id,id:e.exercisesId}})}},slot:"content"},[n("div",{domProps:{innerHTML:t._s(e.stem)}}),t._v(" "),e.opt.hasOwnProperty("A")?n("div",t._l(e.opt,function(e,o){return n("div",{key:e,staticStyle:{"padding-top":"5px"}},[t._v(t._s(o)+"： "),n("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:t._s(e)}})])})):t._e()]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("div",{staticClass:"weui-cell weui-cell_link",staticStyle:{padding:"5px 15px"}},[n("div",{staticClass:"weui-cell__bd"},[n("flexbox",[n("flexbox-item",{attrs:{span:3}},[t._v("难度: "+t._s(e.degree))]),t._v(" "),n("flexbox-item",{attrs:{span:5}},[t._v("更新: "+t._s(t._f("ymd")(e.time)))]),t._v(" "),n("flexbox-item",{staticStyle:{"text-align":"right"},attrs:{span:4},nativeOn:{click:function(n){t.setStatisticsGoodAssembleUpdate({from:e.form,id:e.exercisesId,index:o})}}},[e.isAssembly?n("i",{staticClass:"icon iconfont icon-correct",staticStyle:{color:"#4cc0be","margin-right":"1rem"}}):n("i",{staticClass:"icon iconfont icon-icon073102",staticStyle:{color:"#4cc0be","margin-right":"1rem"}})])],1)],1)])])])}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?n("spinner",{attrs:{type:"lines"}}):t._e(),t._v(" "),n("div",[t.loadingNoData?n("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("已经加载全部错题~")]):t._e(),t._v(" "),t.loadingNoData||t.loading?t._e():n("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:t._getData}},[t._v("点我加载更多")])])],1)],2)},_=[],h={render:v,staticRenderFns:_},y=h,S=n("VU/8"),k=o,w=S(m,y,!1,k,"data-v-a42f65f4",null);e.default=w.exports},auVv:function(t,e,n){var o=n("u5KJ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("67df88a3",o,!0)},u5KJ:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.weui-btn + .weui-btn[data-v-a42f65f4]{\r\n  margin-top:0;\n}\n.assembleCount[data-v-a42f65f4]{\r\n  position: fixed;\r\n  background:#4cc0be;\r\n  color:#fff;\r\n  font-size: .9rem;\r\n  height: 3.5rem;\r\n  width: 3.5rem;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding:.5rem .75rem;\r\n  border-radius: 50%;\r\n  bottom: 10%;\r\n  right: 5%;\r\n  -webkit-box-shadow: 2px 2px 7px #4cc0be;\r\n          box-shadow: 2px 2px 7px #4cc0be;\r\n  text-align: center;\n}\n.checker-popup[data-v-a42f65f4]{\r\n  background: #fff;\n}\n.check-item[data-v-a42f65f4] {\r\n  background-color: #ddd;\r\n  color: #222;\r\n  font-size: 14px;\r\n  padding: 8px 0;\r\n  width:32%;\r\n  margin-right: 0px;\r\n  line-height: 18px;\r\n  text-align:center;\r\n  margin-bottom: 10px;\r\n  border-radius: 15px;\n}\n.check-item-selected[data-v-a42f65f4] {\r\n  background-color: #4cc0be;\r\n  color: #fff;\n}\n.check-item-disabled[data-v-a42f65f4] {\r\n  color: #999;\n}\r\n",""])}});