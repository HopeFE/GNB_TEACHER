webpackJsonp([57],{521:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(903),n=o.n(s),a=o(907),l=o(50),c=l(n.a,a.a,null,null,null);t.default=c.exports},755:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ASSEMBLE_OPTIONS="ASSEMBLE_OPTIONS",t.ASSEMBLE_OPTIONS_TEXTBOOK="ASSEMBLE_OPTIONS_TEXTBOOK",t.ASSEMBLE_SYNC="ASSEMBLE_SYNC",t.ASSEMBLE_SYNC_SCROLL="ASSEMBLE_SYNC_SCROLL",t.ASSEMBLE_GAOKAO="ASSEMBLE_GAOKAO",t.ASSEMBLE_GAOKAO_SCROLL="ASSEMBLE_GAOKAO_SCROLL",t.ASSEMBLE_EXAMPLE="ASSEMBLE_EXAMPLE",t.ASSEMBLE_EXAMPLE_SCROLL="ASSEMBLE_EXAMPLE_SCROLL",t.ASSEMBLE_EXAMPLE_CLEAR="ASSEMBLE_EXAMPLE_CLEAR",t.ASSEMBLE_CHOICE="ASSEMBLE_CHOICE",t.ASSEMBLE_CHOICE_SCROLL="ASSEMBLE_CHOICE_SCROLL",t.ASSEMBLE_CHOICE_CLEAR="ASSEMBLE_CHOICE_CLEAR",t.ASSEMBLE_INTO="ASSEMBLE_INTO"},903:function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(181),a=s(n),l=o(128),c=s(l),i=o(904),u=s(i);t.default={name:"assemble",beforeCreate:function(){c.default.registerModule("assemble",(0,a.default)({},u.default))}}},904:function(e,t,o){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var n,a=o(186),l=function(e){return e&&e.__esModule?e:{default:e}}(a),c=o(755),i=s(c),u=o(905),r=s(u),S=o(906),E=s(S),f={options:{textbook:"",editionId:"",subject:"",grade:"10",textbookList:[]},gaokao:{list:[],scroll:0},sync:{list:[],scroll:0},example:{list:[],offset:"",scroll:0},choice:{list:[],offset:"",scroll:0}},m=(n={},(0,l.default)(n,i.ASSEMBLE_OPTIONS_TEXTBOOK,function(e,t){e.options.textbookList=t}),(0,l.default)(n,i.ASSEMBLE_OPTIONS,function(e,t){e.options={subject:t.subject,grade:t.grade,textbook:t.textbook,editionId:t.editionId,textbookList:e.options.textbookList},e.gaokao={list:[],scroll:0},e.sync={list:[],scroll:0}}),(0,l.default)(n,i.ASSEMBLE_SYNC,function(e,t){e.sync.list=e.sync.list?e.sync.list.concat(t.chaper):t.chaper}),(0,l.default)(n,i.ASSEMBLE_SYNC_SCROLL,function(e,t){e.choice.scroll=t}),(0,l.default)(n,i.ASSEMBLE_GAOKAO,function(e,t){e.gaokao.list=e.gaokao.list?e.gaokao.list.concat(t.chaper):t.chaper}),(0,l.default)(n,i.ASSEMBLE_GAOKAO_SCROLL,function(e,t){e.gaokao.scroll=t}),(0,l.default)(n,i.ASSEMBLE_EXAMPLE,function(e,t){e.example.list=e.example.list?e.example.list.concat(t.list):t.list,e.example.offset=t.offset}),(0,l.default)(n,i.ASSEMBLE_EXAMPLE_SCROLL,function(e,t){e.example.scroll=t}),(0,l.default)(n,i.ASSEMBLE_EXAMPLE_CLEAR,function(e){e.example={list:[],offset:"",scroll:0}}),(0,l.default)(n,i.ASSEMBLE_CHOICE,function(e,t){e.choice.list=e.choice.list?e.choice.list.concat(t.list):t.list,e.choice.offset=t.offset}),(0,l.default)(n,i.ASSEMBLE_INTO,function(e,t){e.choice.list[t.index].isAssembly=t.data.isAssembly}),(0,l.default)(n,i.ASSEMBLE_CHOICE_SCROLL,function(e,t){e.choice.scroll=t}),(0,l.default)(n,i.ASSEMBLE_CHOICE_CLEAR,function(e){e.choice={list:[],offset:"",scroll:0}}),n);t.default={state:f,mutations:m,getters:r,actions:E}},905:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AssembleOptions=function(e){return e.options},t.AssembleSync=function(e){return e.sync},t.AssembleGaokao=function(e){return e.gaokao},t.AssembleExample=function(e){return e.example},t.AssembleChoice=function(e){return e.choice}},906:function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.clearAssembleChoice=t.setAssembleChoiceScroll=t.setAssemble=t.getAssembleChoice=t.clearAssembleExample=t.setAssembleExampleScroll=t.getAssembleExample=t.setAssembleSyncScroll=t.getAssembleSync=t.setAssembleGaokaoScroll=t.getAssembleOptionsTextbook=t.setAssembleOptions=t.getAssembleGaokao=void 0;var n=o(127),a=s(n),l=o(59),c=s(l),i=o(185),u=s(i),r=o(755),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(r);t.getAssembleGaokao=function(e,t){var o=e.rootState,s=e.commit,n=e.state;return new a.default(function(e,t){(0,u.default)({method:"get",url:"assemble/gaokao",params:{token:o.common.user.token,options:{editionId:n.options.editionId,grade:n.options.grade,subjectId:n.options.subject}}}).then(function(t){s(S.ASSEMBLE_GAOKAO,t.data.data),e(t)}).catch(function(e){t(e)})})},t.setAssembleOptions=function(e,t){e.rootState;(0,e.commit)(S.ASSEMBLE_OPTIONS,t)},t.getAssembleOptionsTextbook=function(e){var t=e.rootState,o=e.commit;return new a.default(function(e,s){(0,u.default)({method:"get",url:"download/textbook",params:{token:t.common.user.token}}).then(function(t){o(S.ASSEMBLE_OPTIONS_TEXTBOOK,t.data.data),e(t)}).catch(function(e){s(e)})})},t.setAssembleGaokaoScroll=function(e,t){e.rootState;(0,e.commit)(S.ASSEMBLE_GAOKAO_SCROLL,t)},t.getAssembleSync=function(e,t){var o=e.rootState,s=e.commit,n=e.state;return new a.default(function(e,t){(0,u.default)({method:"get",url:"assemble/sync",params:{token:o.common.user.token,textbookId:n.options.textbook}}).then(function(t){s(S.ASSEMBLE_SYNC,t.data.data),e(t)}).catch(function(e){t(e)})})},t.setAssembleSyncScroll=function(e,t){e.rootState;(0,e.commit)(S.ASSEMBLE_SYNC_SCROLL,t)},t.getAssembleExample=function(e,t){var o=e.rootState,s=e.commit,n=e.state;return new a.default(function(e,t){(0,u.default)({method:"get",url:"assemble/example",params:{token:o.common.user.token,offset:n.example.offset,options:{id:o.route.params.id,type:o.route.params.type}}}).then(function(t){s(S.ASSEMBLE_EXAMPLE,t.data.data),e(t)}).catch(function(e){t(e)})})},t.setAssembleExampleScroll=function(e,t){e.rootState;(0,e.commit)(S.ASSEMBLE_EXAMPLE_SCROLL,t)},t.clearAssembleExample=function(e){e.rootState;(0,e.commit)(S.ASSEMBLE_EXAMPLE_CLEAR)},t.getAssembleChoice=function(e,t){var o=e.rootState,s=e.state,n=e.commit;return new a.default(function(e,t){(0,u.default)({method:"get",url:"assemble/chioce",params:{token:o.common.user.token,offset:s.choice.offset,options:{exerciseId:o.route.params.id,grade:o.route.params.grade,subjectId:o.route.params.subjectId}}}).then(function(t){n(S.ASSEMBLE_CHOICE,t.data.data),e(t)}).catch(function(e){t(e)})})},t.setAssemble=function(e,t){var o=e.rootState,s=e.commit;e.state;return new a.default(function(e,n){(0,u.default)({method:"post",url:"assemble/add",data:{token:o.common.user.token,options:{exercisesId:t.id,grade:o.route.params.grade,subjectId:o.route.params.subjectId}}}).then(function(o){s(S.ASSEMBLE_INTO,{index:t.index,data:o.data.data}),localStorage.getItem("isAssemble")?c.default.$vux.toast.show({text:o.data.msg,type:"text",time:1e3,position:"bottom"}):(localStorage.setItem("isAssemble",!0),c.default.$vux.alert.show({title:"请到下载中心下载~",content:"(可以跨章节组卷)",dialogTransition:"vux-fade"})),e(o)}).catch(function(e){n(e)})})},t.setAssembleChoiceScroll=function(e,t){e.rootState;(0,e.commit)(S.ASSEMBLE_CHOICE_SCROLL,t)},t.clearAssembleChoice=function(e){e.rootState;(0,e.commit)(S.ASSEMBLE_CHOICE_CLEAR)}},907:function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("keep-alive",[o("router-view")],1)},n=[];t.a={render:s,staticRenderFns:n}}});