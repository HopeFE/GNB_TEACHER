webpackJsonp([73],{"/8yk":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),o=a.n(i),n=a("ABCa"),r=a("1sNz"),l=a("rHil"),s=a("dQSc"),c=a("1DHf"),d=a("jOlP"),p=a("2FOq"),u=a("NYxO"),h={name:"cameraDetail",components:{XHeader:n.a,ViewBox:r.a,Group:l.a,Card:s.a,Cell:c.a,Spinner:d.a,Previewer:p.a},computed:o()({},Object(u.mapGetters)(["MyDownloadCamera"])),data:function(){return{loading:!1,list:[{w:0,h:0,src:""}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},methods:o()({},Object(u.mapActions)(["getMyDownloadCameraDetail","clearMyDownloadDetail"]),{_getData:function(){var t=this;this.clearMyDownloadDetail({type:"camera"}),this.loading=!0,this.getMyDownloadCameraDetail().then(function(e){t.loading=!1}).catch(function(){t.loading=!1})},show:function(t){var e=this;this.list[0].w=t.width,this.list[0].h=t.height,this.list[0].src=t.src,this.$nextTick(function(){e.$refs.previewer.show(0)})}}),beforeRouteEnter:function(t,e,a){a(function(t){t._getData()})},beforeRouteLeave:function(t,e,a){a()}},f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view-box",{attrs:{"body-padding-top":"46px"}},[a("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"拍错题详情"}},slot:"header"}),t._v(" "),a("div",[t._l(t.MyDownloadCamera.detail,function(e,i){return a("card",{key:i},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{on:{click:function(a){t.show(e.photo)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.photo.url+"-errorList",expression:"detail.photo.url+'-errorList'"}]})])])])}),t._v(" "),a("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?a("spinner",{attrs:{type:"lines"}}):t._e()],1)],2),t._v(" "),a("previewer",{ref:"previewer",attrs:{list:t.list,options:t.options}})],1)},w=[],v={render:f,staticRenderFns:w},y=v,m=a("VU/8"),g=m(h,y,!1,null,null,null);e.default=g.exports}});