webpackJsonp([56],{531:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(933),a=o.n(n),l=o(937),d=o(50),r=d(a.a,l.a,null,null,null);e.default=r.exports},757:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DOWNLOAD_URL="DOWNLOAD_URL",e.DOWNLOAD_PAPER="DOWNLOAD_PAPER",e.DOWNLOAD_PAPER_UP="DOWNLOAD_PAPER_UP",e.DOWNLOAD_PAPER_DOWN="DOWNLOAD_PAPER_DOWN",e.DOWNLOAD_PAPER_DEL="DOWNLOAD_PAPER_DEL",e.DOWNLOAD_PAPER_RESET="DOWNLOAD_PAPER_RESET",e.DOWNLOAD_PAPER_SCROLL="DOWNLOAD_PAPER_SCROLL"},933:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(181),l=n(a),d=o(128),r=n(d),u=o(934),i=n(u);e.default={name:"download",beforeCreate:function(){r.default.registerModule("download",(0,l.default)({},i.default))}}},934:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var a,l=o(186),d=function(t){return t&&t.__esModule?t:{default:t}}(l),r=o(757),u=n(r),i=o(935),c=n(i),s=o(936),f=n(s),D={paper:{list:[],scroll:0},downloadUrl:""},p=(a={},(0,d.default)(a,u.DOWNLOAD_PAPER,function(t,e){t.paper.list=e}),(0,d.default)(a,u.DOWNLOAD_URL,function(t){}),(0,d.default)(a,u.DOWNLOAD_PAPER_UP,function(t,e){var o=t.paper.list.block[e.pindex].list;o[e.index]=o.splice(e.index-1,1,o[e.index])[0]}),(0,d.default)(a,u.DOWNLOAD_PAPER_DOWN,function(t,e){var o=t.paper.list.block[e.pindex].list;o[e.index]=o.splice(e.index+1,1,o[e.index])[0]}),(0,d.default)(a,u.DOWNLOAD_PAPER_DEL,function(t,e){t.paper.list.block[e.pindex].list.splice(e.index,1)}),(0,d.default)(a,u.DOWNLOAD_PAPER_RESET,function(t){t.paper.list=[],t.paper.scroll=0}),(0,d.default)(a,u.DOWNLOAD_PAPER_SCROLL,function(t,e){t.paper.scroll=e}),a);e.default={state:D,getters:c,actions:f,mutations:p}},935:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DownloadPaper=function(t){return t.paper},e.DownloadUrl=function(t){return t.downloadUrl}},936:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.clearMyDownloadPaper=e.setMyDownloadPaperScroll=e.setMyDownloadPaperDel=e.setMyDownloadPaperDown=e.setMyDownloadPaperUp=e.getDownloadVaild=e.getDownloadUrl=e.getDownloadUpdate=e.getDownloadList=void 0;var a=o(181),l=n(a),d=o(127),r=n(d),u=o(757),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(u),c=o(185),s=n(c),f=o(59),D=n(f);e.getDownloadList=function(t,e){var o=t.rootState,n=t.commit;return new r.default(function(t,a){(0,s.default)({method:"get",url:"download/list",params:(0,l.default)({token:o.common.user.token},e)}).then(function(e){n(i.DOWNLOAD_PAPER,e.data.data),t(e)}).catch(function(t){a(t)})})},e.getDownloadUpdate=function(t,e){for(var o=t.rootState,n=t.state,a=(t.commit,[]),l=n.paper.list.block,d=0;d<l.length;d++)for(var u=0;u<l[d].list.length;u++)a.push(l[d].list[u].exercisesId);return D.default.$vux.loading.show({text:"请稍候"}),new r.default(function(t,e){(0,s.default)({method:"post",url:"download/update",data:{token:o.common.user.token,downloadId:o.route.params.id,ids:a}}).then(function(e){D.default.$vux.loading.hide(),t(e)}).catch(function(t){D.default.$vux.loading.hide(),e(t)})})},e.getDownloadUrl=function(t,e){var o=t.rootState,n=t.state,a=t.commit;return new r.default(function(t,e){(0,s.default)({method:"post",url:"download/download",data:{token:o.common.user.token,downloadId:n.paper.list.downloadId}}).then(function(e){a(i.DOWNLOAD_URL),t(e)}).catch(function(t){e(t)})})},e.getDownloadVaild=function(t){var e=t.rootState,o=t.state;t.commit;return new r.default(function(t,n){(0,s.default)({method:"post",url:"download/validDownload",data:{token:e.common.user.token,downloadId:o.paper.list.downloadId}}).then(function(e){t(e)}).catch(function(t){n(t)})})},e.setMyDownloadPaperUp=function(t,e){var o=(t.state,t.commit);0===e.index?D.default.$vux.toast.show({text:"不能再上移了",type:"text",time:1e3,position:"bottom"}):o(i.DOWNLOAD_PAPER_UP,e)},e.setMyDownloadPaperDown=function(t,e){var o=t.state,n=t.commit;e.index===o.paper.list.block[e.pindex].list.length-1?D.default.$vux.toast.show({text:"不能再下移了",type:"text",time:1e3,position:"bottom"}):n(i.DOWNLOAD_PAPER_DOWN,e)},e.setMyDownloadPaperDel=function(t,e){(0,t.commit)(i.DOWNLOAD_PAPER_DEL,e)},e.setMyDownloadPaperScroll=function(t,e){(0,t.commit)(i.DOWNLOAD_PAPER_SCROLL,e)},e.clearMyDownloadPaper=function(t){t.rootState;(0,t.commit)(i.DOWNLOAD_PAPER_RESET)}},937:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("keep-alive",[o("router-view")],1)},a=[];e.a={render:n,staticRenderFns:a}}});