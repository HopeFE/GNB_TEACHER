webpackJsonp([1],{765:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};e.d(o,"MyDownload",function(){return r}),e.d(o,"MyDownloadPaper",function(){return a});var r=function(t){return t.download},a=function(t){return t.paper},i={};e.d(i,"getMyDownload",function(){return p}),e.d(i,"clearMyDownload",function(){return D}),e.d(i,"getMyDownloadList",function(){return m}),e.d(i,"setMyDownloadPaperScroll",function(){return O}),e.d(i,"clearMyDownloadPaper",function(){return _});var u,c=e(178),d=e.n(c),l=e(127),s=e.n(l),f=e(181),p=function(t){var n=t.rootState,e=t.state,o=t.commit;return new s.a(function(t,r){f.a({method:"get",url:"download/myDownload",params:d.a({token:n.common.user.token},e.options)}).then(function(n){o("MYDOWNLOAD",n.data.data),t(n)})})},D=function(t){t.rootState;(0,t.commit)("MYDOWNLOAD_RESET")},m=function(t){var n=t.rootState,e=t.commit;return new s.a(function(t,o){f.a({method:"get",url:"download/myDownload/list",params:{token:n.common.user.token,downloadId:n.route.params.downloadId}}).then(function(n){e("MYDOWNLOAD_PAPER",n.data.data),t(n)})})},O=function(t,n){(0,t.commit)("MYDOWNLOAD_PAPER_SCROLL",n)},_=function(t){t.rootState;(0,t.commit)("MYDOWNLOAD_PAPER_RESET")},v=e(182),P=e.n(v),w={paper:{list:[],scroll:0},download:[]},E=(u={},P.a(u,"MYDOWNLOAD",function(t,n){t.download=n}),P.a(u,"MYDOWNLOAD_RESET",function(t){t.download=[]}),P.a(u,"MYDOWNLOAD_PAPER",function(t,n){t.paper.list=n}),P.a(u,"MYDOWNLOAD_PAPER_RESET",function(t){t.paper.list=[],t.paper.scroll=0}),P.a(u,"MYDOWNLOAD_PAPER_SCROLL",function(t,n){t.paper.scroll=n}),u),A={state:w,getters:o,actions:i,mutations:E},L=e(178),R=e.n(L),N=e(128);n.default={name:"myDownload",beforeCreate:function(){N.a.registerModule("myDownload",R.a({},A))}}},766:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("keep-alive",[e("router-view")],1)},staticRenderFns:[]}},771:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};e.d(o,"Download",function(){return r}),e.d(o,"DownloadPaper",function(){return a});var r=function(t){return t.download},a=function(t){return t.paper},i={};e.d(i,"getDownload",function(){return s}),e.d(i,"getDownloadList",function(){return f}),e.d(i,"setMyDownloadPaperUp",function(){return p}),e.d(i,"setMyDownloadPaperDown",function(){return D}),e.d(i,"setMyDownloadPaperDel",function(){return m}),e.d(i,"setMyDownloadPaperScroll",function(){return O}),e.d(i,"clearMyDownloadPaper",function(){return _});var u,c=e(127),d=e.n(c),l=e(181),s=function(t){var n=t.rootState,e=t.commit;return new d.a(function(t,o){l.a({method:"get",url:"download",params:{token:n.common.user.token}}).then(function(n){e("DOWNLOAD",n.data.data),t(n)})})},f=function(t){var n=t.rootState,e=t.commit;return new d.a(function(t,o){l.a({method:"get",url:"download/list",params:{token:n.common.user.token,downloadId:n.route.params.downloadId}}).then(function(n){e("DOWNLOAD_PAPER",n.data.data),t(n)})})},p=function(t,n){(0,t.commit)("DOWNLOAD_PAPER_UP",n)},D=function(t,n){(0,t.commit)("DOWNLOAD_PAPER_DOWN",n)},m=function(t,n){(0,t.commit)("DOWNLOAD_PAPER_DEL",n)},O=function(t,n){(0,t.commit)("DOWNLOAD_PAPER_SCROLL",n)},_=function(t){t.rootState;(0,t.commit)("DOWNLOAD_PAPER_RESET")},v=e(182),P=e.n(v),w={paper:{list:[],scroll:0},download:[]},E=(u={},P.a(u,"DOWNLOAD",function(t,n){t.index=n}),P.a(u,"DOWNLOAD_PAPER",function(t,n){t.paper.list=n}),P.a(u,"DOWNLOAD_PAPER_UP",function(t,n){var e=t.paper.list.splice(n,1);t.paper.list.splice(n-1,0,e)}),P.a(u,"DOWNLOAD_PAPER_DOWN",function(t,n){var e=t.paper.list.splice(n,1);t.paper.list.splice(n+1,0,e)}),P.a(u,"DOWNLOAD_PAPER_DEL",function(t,n){t.paper.list.splice(n,1)}),P.a(u,"DOWNLOAD_PAPER_RESET",function(t){t.paper.list=[],t.paper.scroll=0}),P.a(u,"DOWNLOAD_PAPER_SCROLL",function(t,n){t.paper.scroll=n}),u),A={state:w,getters:o,actions:i,mutations:E},L=e(178),R=e.n(L),N=e(128);n.default={name:"download",beforeCreate:function(){N.a.registerModule("download",R.a({},A))}}},772:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("keep-alive",[e("router-view")],1)},staticRenderFns:[]}},829:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};e.d(o,"Invite",function(){return r});var r=function(t){return t},a={};e.d(a,"getInvite",function(){return s}),e.d(a,"getInviteList",function(){return f}),e.d(a,"setInviteListClear",function(){return p}),e.d(a,"setInviteCode",function(){return D});var i,u=e(127),c=e.n(u),d=e(59),l=e(181),s=function(t){var n=t.rootState,e=t.commit;return d.default.$vux.loading.show({text:"请稍候"}),new c.a(function(t,o){l.a({method:"get",url:"invite",params:{token:n.common.user.token}}).then(function(n){d.default.$vux.loading.hide(),e("ADVICE_LIST",n.data.data),t(n)}).catch(function(t){d.default.$vux.loading.hide(),o(t)})})},f=function(t){var n=t.rootState,e=t.commit;return new c.a(function(t,o){l.a({method:"post",url:"invite/list",data:{token:n.common.user.token}}).then(function(n){e("INVITE_LIST",n.data.data),t(n)})})},p=function(t){(0,t.commit)("INVITE_LIST_RESET")},D=function(t,n){var e=t.rootState,o=(t.commit,t.dispatch);return new c.a(function(t,r){l.a({method:"post",url:"invite/code",params:{code:n.code,token:e.common.user.token}}).then(function(n){o("getInvite"),t(n)})})},m=e(182),O=e.n(m),_={isInvited:!1,inviteCode:"",list:[]},v=(i={},O.a(i,"INVITE_LIST_RESET",function(t){t.list=[]}),O.a(i,"INVITE_LIST",function(t,n){t.list=n}),O.a(i,"ADVICE_LIST",function(t,n){t.isInvite=n.isInvited,t.inviteCode=n.inviteCode}),i),P={state:_,getters:o,actions:a,mutations:v},w=e(178),E=e.n(w),A=e(128);n.default={name:"invite",beforeCreate:function(){A.a.registerModule("invite",E.a({},P))}}},830:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("keep-alive",[e("router-view")],1)},staticRenderFns:[]}},877:function(t,n,e){var o=e(56)(e(765),e(766),null,null);t.exports=o.exports},879:function(t,n,e){var o=e(56)(e(771),e(772),null,null);t.exports=o.exports},894:function(t,n,e){var o=e(56)(e(829),e(830),null,null);t.exports=o.exports}});