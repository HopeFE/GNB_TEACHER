webpackJsonp([39],{BSaW:function(e,t,s){var a=s("e8nx");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("0cb0c694",a,!0)},SVpX:function(e,t,s){"use strict";function a(e){s("BSaW")}Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),o=s.n(n),i=s("ABCa"),l=s("1sNz"),c=s("dQSc"),r=s("jOlP"),d=s("YxJB"),p=s("3Lt7"),m=s("NYxO"),b={name:"example",components:{XHeader:i.a,ViewBox:l.a,Card:c.a,Spinner:r.a,Flexbox:d.a,FlexboxItem:p.a},computed:o()({},Object(m.mapGetters)(["Route","AssembleExample","AssembleOptions"]),{list:function(){return this.AssembleExample.list}}),data:function(){return{loading:!0,loadingNoData:!1}},methods:o()({},Object(m.mapActions)(["getAssembleExample","setAssembleExampleScroll","clearAssembleExample","setAssemble"]),{_getData:function(){var e=this;this.loading=!0,this.getAssembleExample().then(function(t){t.data.data.list.length<10&&(e.loadingNoData=!0),e.loading=!1}).catch(function(){e.loading=!1})}}),beforeRouteEnter:function(e,t,s){s(function(e){"assemble_gaokao"!==t.name&&"assemble_sync"!==t.name&&0!==e.AssembleExample.list.length||(e.loadingNoData=!1,e.clearAssembleExample(),e._getData()),e.$refs.viewBox.scrollTo(e.AssembleExample.scroll)})},beforeRouteLeave:function(e,t,s){this.setAssembleExampleScroll(this.$refs.viewBox.getScrollTop()),s()}},x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{height:"100%"}},[s("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px"}},[s("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header"},slot:"header"},[s("x-header",{attrs:{"left-options":{backText:e.Route.params.name}}},[s("div",{attrs:{slot:"right"},on:{click:function(t){e.$router.push({name:"assemble_example_options"})}},slot:"right"},[e._v("\n          筛选\n        ")])])],1),e._v(" "),s("div",[e._l(e.list,function(t,a){return s("card",{key:a},[s("div",{staticClass:"weui-panel__hd",staticStyle:{color:"#4bb7aa"},attrs:{slot:"header"},slot:"header"},[e._v("\n          "+e._s("chapter"===e.Route.params.type?t.chapterName:t.typeName)+"\n        ")]),e._v(" "),s("div",{attrs:{slot:"content"},on:{click:function(s){e.$router.push({name:"example",query:{name:"chapter"===e.Route.params.type?t.chapterName:t.typeName},params:{subjectId:t.subject_id,grade:t.grade,id:t.exercisesId,type:"exercises"},query:{from:"assemble"}})}},slot:"content"},[s("div",{domProps:{innerHTML:e._s(t.stem)}}),e._v(" "),e._l(t.opt,function(t,a){return s("div",{key:a,staticStyle:{"padding-top":"5px"}},[e._v("\n            "+e._s(a)+"："),s("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(t)}})])})],2),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"weui-cell weui-cell_link",staticStyle:{padding:"5px 15px"}},[s("div",{staticClass:"weui-cell__bd"},[s("flexbox",{attrs:{gutter:0}},[s("flexbox-item",{attrs:{span:3}},[e._v("难度: "+e._s(t.degree))]),e._v(" "),s("flexbox-item",{staticStyle:{"text-align":"center"},attrs:{span:7}},[e._v("更新: "+e._s(e._f("ymd")(t.time)))]),e._v(" "),s("flexbox-item",{staticStyle:{"text-align":"right"},attrs:{span:2},nativeOn:{click:function(s){e.setAssemble({id:t.exercisesId,index:a,form:1,subjectId:t.subject_id,grade:t.grade})}}},[t.isAssembly?s("i",{staticClass:"icon iconfont icon-correct",staticStyle:{color:"#4cc0be"}}):s("i",{staticClass:"icon iconfont icon-icon073102",staticStyle:{color:"#4cc0be"}})])],1)],1)])])])}),e._v(" "),s("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[e.loading?s("spinner",{attrs:{type:"lines"}}):e._e(),e._v(" "),s("div",[e.loadingNoData?s("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[e._v("已经加载全部题型~")]):e._e(),e._v(" "),e.loadingNoData||e.loading?e._e():s("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:e._getData}},[e._v("点我加载更多")])])],1)],2)]),e._v(" "),s("div",{staticClass:"assembleCount",on:{click:function(t){e.$router.push({name:"download"})}}},[e._v("\n    已选"),s("br"),e._v(e._s(e.AssembleExample.count)+"\n  ")])],1)},u=[],f={render:x,staticRenderFns:u},_=f,v=s("VU/8"),g=a,h=v(b,_,!1,g,"data-v-1fd030bc",null);t.default=h.exports},e8nx:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,"\n.assembleCount[data-v-1fd030bc] {\n  position: fixed;\n  background: #4cc0be;\n  color: #fff;\n  font-size: .9rem;\n  height: 4rem;\n  width: 4rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: .5rem .75rem;\n  border-radius: 50%;\n  bottom: 10%;\n  right: 5%;\n  -webkit-box-shadow: 2px 2px 7px #4cc0be;\n          box-shadow: 2px 2px 7px #4cc0be;\n  text-align: center;\n}\n",""])}});