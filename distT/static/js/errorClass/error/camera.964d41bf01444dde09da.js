webpackJsonp([24],{OVvU:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.weui-btn + .weui-btn[data-v-2c5ffa11]{\n  margin-top:0;\n}\n.assembleCount[data-v-2c5ffa11]{\n  position: fixed;\n  background:#4cc0be;\n  color:#fff;\n  font-size: .9rem;\n  height: 3.5rem;\n  width: 3.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding:.5rem .75rem;\n  border-radius: 50%;\n  bottom: 10%;\n  right: 5%;\n  -webkit-box-shadow: 2px 2px 7px #4cc0be;\n          box-shadow: 2px 2px 7px #4cc0be;\n  text-align: center;\n}\n.checker-popup[data-v-2c5ffa11]{\n  background: #fff;\n}\n.check-item[data-v-2c5ffa11] {\n  background-color: #ddd;\n  color: #222;\n  font-size: 14px;\n  padding: 8px 0;\n  width:32%;\n  margin-right: 0px;\n  line-height: 18px;\n  text-align:center;\n  margin-bottom: 10px;\n  border-radius: 15px;\n}\n.check-item-selected[data-v-2c5ffa11] {\n  background-color: #4cc0be;\n  color: #fff;\n}\n.check-item-disabled[data-v-2c5ffa11] {\n  color: #999;\n}\n",""])},gmqp:function(t,e,a){"use strict";function i(t){a("jq0o")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),o=a.n(n),r=a("ABCa"),s=a("rHil"),c=a("dQSc"),l=a("1DHf"),d=a("jOlP"),f=a("YxJB"),p=a("3Lt7"),x=a("2sLL"),m=a("2FOq"),v=a("63CM"),h=a.n(v),u=a("NYxO"),b={name:"camera",components:{XHeader:r.a,Group:s.a,Card:c.a,Cell:l.a,Spinner:d.a,Flexbox:f.a,FlexboxItem:p.a,XButton:x.a,Previewer:m.a},computed:o()({},Object(u.mapGetters)(["ErrorclassCamera"])),data:function(){return{loading:!1,loadingNoData:!1,list:[{w:0,h:0,src:""}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},directives:{TransferDom:h.a},methods:o()({},Object(u.mapActions)(["getStatisticsCamera","setStatisticsCameraAssembleUpdate","setStatisticsScroll"]),{_getData:function(){var t=this;this.loading=!0,this.getStatisticsCamera().then(function(e){0===e.data.data.offset.length&&(t.loadingNoData=!0),t.loading=!1}).catch(function(){t.loading=!1})},show:function(t){var e=this;this.list[0].w=t.width,this.list[0].h=t.height,this.list[0].src=t.url,this.$nextTick(function(){e.$refs.previewer.show(0)})}}),beforeRouteEnter:function(t,e,a){a(function(t){t.ErrorclassCamera.index.reset&&t._getData(),t.$parent.$refs.viewBoxBody.scrollTop=t.ErrorclassCamera.index.scroll})},beforeRouteLeave:function(t,e,a){this.setStatisticsScroll({type:"camera",height:this.$parent.$refs.viewBoxBody.scrollTop}),a()}},g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.ErrorclassCamera.index.list,function(e,i){return a("card",{key:i},[a("div",{staticClass:"weui-panel__hd",attrs:{slot:"header"},slot:"header"},[a("flexbox",[a("flexbox-item",{staticStyle:{color:"#4cc0be"},attrs:{span:8}},[t._v(t._s(e.chapterName))]),t._v(" "),a("flexbox-item",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v(t._s(t._f("ymd")(e.time)))])],1)],1),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{on:{click:function(a){t.show(e.photo)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.photo.url+"-errorList",expression:"error.photo.url+'-errorList'"}]})])]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"weui-cell weui-cell_link",staticStyle:{padding:"5px 15px"}},[a("div",{staticClass:"weui-cell__bd"},[a("flexbox",{attrs:{gutter:0}},[a("flexbox-item",{attrs:{span:4}},[t._v("\n              错误学生: "+t._s(e.studentName)+"\n            ")]),t._v(" "),a("flexbox-item",{attrs:{span:4}}),t._v(" "),a("flexbox-item",{staticStyle:{"text-align":"right"},attrs:{span:4},nativeOn:{click:function(a){t.setStatisticsCameraAssembleUpdate({id:e.id,index:i})}}},[e.isAssembly?a("i",{staticClass:"icon iconfont icon-correct",staticStyle:{color:"#4cc0be","margin-right":"1rem"}}):a("i",{staticClass:"icon iconfont icon-icon073102",staticStyle:{color:"#4cc0be","margin-right":"1rem"}})])],1)],1)])])])}),t._v(" "),a("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?a("spinner",{attrs:{type:"lines"}}):t._e(),t._v(" "),a("div",[t.loadingNoData?a("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("已经加载全部错题~")]):t._e(),t._v(" "),t.loadingNoData||t.loading?t._e():a("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:t._getData}},[t._v("点我加载更多")])])],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("previewer",{ref:"previewer",attrs:{list:t.list,options:t.options}})],1)],2)},_=[],w={render:g,staticRenderFns:_},y=w,S=a("VU/8"),C=i,k=S(b,y,!1,C,"data-v-2c5ffa11",null);e.default=k.exports},jq0o:function(t,e,a){var i=a("OVvU");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("2a113872",i,!0)}});