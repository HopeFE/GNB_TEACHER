webpackJsonp([53],{693:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={};e.d(o,"errorClassmate",function(){return n}),e.d(o,"errorList",function(){return a});var n=function(t){return t.classmate},a=function(t){return t.error},s={};e.d(s,"getError",function(){return R}),e.d(s,"setErrorType",function(){return f}),e.d(s,"setErrorScroll",function(){return d}),e.d(s,"clearError",function(){return m}),e.d(s,"getErrorClassmate",function(){return E}),e.d(s,"setErrorClassmateScroll",function(){return O}),e.d(s,"clearErrorClassmate",function(){return _});var c,u=e(127),i=e.n(u),l=e(181),R=function(t,r){var e=t.rootState,o=t.commit;t.state;return new i.a(function(t,n){l.a({method:"get",url:"error/list",params:{offset:e.error.error.offset,token:e.common.user.token,subject_id:r.subjectId,studentId:e.route.params.studentId}}).then(function(e){o("ERROR",{subjectId:r.subjectId,data:e.data.data}),t(e)})})},f=function(t,r){var e=t.rootState,o=t.commit;t.state;return new i.a(function(t,n){l.a({method:"post",url:"error/type",data:{token:e.common.user.token,studentId:e.route.params.studentId,wbeid:r.wbeid,chapterId:r.chapterId,type:r.type}}).then(function(e){o("ERROR_ERROR_TYPE",{index:r.index,type:r.type}),t(e)})})},d=function(t,r){(0,t.commit)("ERROR_SCROLL",{height:r})},m=function(t){t.rootState;(0,t.commit)("ERROR_RELOAD")},E=function(t,r){var e=t.rootState,o=t.commit;t.state;return new i.a(function(t,r){l.a({method:"get",url:"class/classmate/all",params:{token:e.common.user.token}}).then(function(r){o("ERROR_CLASSMATE",{data:r.data.data}),t(r)})})},O=function(t,r){(0,t.commit)("ERROR_CLASSMATE_SCROLL",{height:r})},_=function(t){(0,t.commit)("ERROR_CLASSMATE_RELOAD")},p=e(182),S=e.n(p),L={classmate:{list:[],scroll:0},error:{list:[],subjectId:2,offset:"",scroll:0}},h=(c={},S.a(c,"ERROR_CLASSMATE",function(t,r){t.classmate.list=r.data}),S.a(c,"ERROR_CLASSMATE_SCROLL",function(t,r){t.classmate.scroll=r.height}),S.a(c,"ERROR_CLASSMATE_RELOAD",function(t){t.classmate.list=[],t.classmate.scroll=0}),S.a(c,"ERROR",function(t,r){t.error.offset=r.data.offset,t.error.subjectId=r.subjectId,t.error.list?t.error.list=t.error.list.concat(r.data.list):t.error.list=t.error.list}),S.a(c,"ERROR_SCROLL",function(t,r){t.error.scroll=r.height}),S.a(c,"ERROR_RELOAD",function(t,r){t.error.list=[],t.error.offset="",t.error.scroll=0,t.error.subjectId=2}),S.a(c,"ERROR_ERROR_TYPE",function(t,r){t.error.list[r.index].errorType=Number(r.type)}),c),A={state:L,mutations:h,getters:o,actions:s},C=e(178),b=e.n(C),I=e(128);r.default={name:"error",beforeCreate:function(){I.a.registerModule("error",b.a({},A))}}},694:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("keep-alive",[e("router-view")],1)},staticRenderFns:[]}},855:function(t,r,e){var o=e(56)(e(693),e(694),null,null);t.exports=o.exports}});