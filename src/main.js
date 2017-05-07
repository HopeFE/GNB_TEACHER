import Vue from 'vue'
import store from './store'
import FastClick from 'fastclick'
import router from './router'
import VueLazyload from 'vue-lazyload'
import {ToastPlugin, LoadingPlugin, ConfirmPlugin, dateFormat} from 'vux'
import App from './App'

Vue.use(ToastPlugin)    // 使用提醒
// 图片异步加载
Vue.use(VueLazyload, {
  attempt: 3
})
Vue.use(LoadingPlugin)  // 使用Loading
Vue.use(ConfirmPlugin)  // 使用Confirm
FastClick.attach(document.body)   // 使用fastclick
Vue.config.productionTip = false

// 时间戳转换
Vue.filter('ymd', (value) => {
  return dateFormat(new Date(Number(`${value}000`)), 'YYYY-MM-DD')
})

// 在首页 返回键失效其他页面则直接返回上一页
document.addEventListener('plusready', () => {
  let first = null
  plus.navigator.setStatusBarBackground('#4BB7AA')  // 设置状态栏颜色
  plus.key.addEventListener('backbutton', () => {
    if (store.state.route.path === '/index' || store.state.route.path === '/bag' || store.state.route.path === '/login' || store.state.route.path === '/user') {
      if (!first) {
        first = new Date().getTime()
        Vue.$vux.toast.show({text: '再按一次退出', type: 'text', time: 1000, position: 'bottom'})
        setTimeout(() => { first = null }, 1000)
      } else {
        new Date().getTime() - first < 1000 ? plus.runtime.quit() : ''
      }
    } else {
      history.back()
    }
  }, false)
})

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

export default app
