import Vue from 'vue'
import Router from 'vue-router'
import 'babel-polyfill'
import { sync } from 'vuex-router-sync'
import App from './app'
import store from './store'
import * as _ from 'config/whole.js'
import Login from './router/login/router'
import Correct from './features/correct/router'
import Example from './features/example/router'
import Layout from './router/layout'
import User from './router/user/router'
import Index from './router/index/router'
import Classes from './router/Classes/router'
import Interact from './router/interact/router'
//插件
import moment from 'moment'
import FastClick from 'fastclick'
// import VueLazyload from 'vue-lazyload'

Vue.use(Router)

Vue.config.devtools = true
FastClick.attach(document.body)

//图片异步加载
// Vue.use(VueLazyload,{
//   preLoad: 1.3,
//   error: 'http://www.chinasanbao.com/new/upload/headimg/headimg.png',
//   loading: 'http://hilongjw.github.io/vue-lazyload/dist/loading-spin.svg'
// })

//格式化时间
Vue.filter('ymd', function(value) {
  return moment.unix(value).format('YYYY-MM-DD');
});

//课程ID的转换
Vue.filter('subName', (id) => {
  switch(id){
    case '2':return '数学';
    case '7':return '物理';
    case '8':return '化学';
  }
});

const router = new Router()
router.map({
  ...Login,
  ...Correct,
  ...Example,
  'main': {
    component: Layout,
    subRoutes: {
      ...Index,
      ...User,
      ...Classes,
      ...Interact
    }
  }
})

//讲路由和store同步
sync(store, router)

router.beforeEach(function(transition) {
  if (transition.to.path == '/') {
    if(localStorage.token){
        router.replace('/main/index');
    }else{
        router.replace('/login');
    }
  }
  transition.next();
})


/*在首页 或者loading启动的时候,返回键失效
* 其他页面则直接返回上一页
*/
document.addEventListener('plusready', function(){
  setInterval(function(){
    plus.key.addEventListener('backbutton',function(){
      if(
        store.state.route.path == '/login' || 
        store.state.route.path == '/main/index' || 
        store.state.route.path == '/main/classes' || 
        store.state.route.path =='/main/interact' || 
        store.state.route.path =='/main/user' ||
        store.state.tools.isLoading
      ){
        return;
      }
      history.back();
    },false);
  },500)
});
    
router.start(App, '#App')
