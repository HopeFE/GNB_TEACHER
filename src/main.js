import Vue from 'vue'
import Router from 'vue-router'
import VueTouch from 'vue-touch'
import { sync } from 'vuex-router-sync'
import App from './app'
import store from './store'
import * as _ from './config/whole.js'
//登陆、注册
import Login from './login/pages/login'
import agreement from './login/pages/agreement'
import register from './login/pages/register'
import setPassword from './login/pages/setPassword'
import setInfo from './login/pages/setInfo'
import forget from './login/pages/forget'
import resetPassword from './login/pages/resetPassword'
//首页
import Main from './main/common/main'
import User from './main/pages/user'
import Message from './main/pages/message'
import Index from './main/pages/index'
import Photo from './main/pages/photo.vue'
//题目评注、纠错
import correct from './common/pages/correct'
import comment from './common/pages/comment'

//通知
import messageClass from './message/pages/class'
import messageCorrect from './message/pages/correct'
import messageSystem from './message/pages/system'
//个人中心
import userResetPwd from './user/pages/resetPwd'
import userInfo from './user/pages/info'
//个人中心-设置
import userSettingsIndex from './user/pages/settings/index'
import userSettingsAboutUs from './user/pages/settings/aboutUs'
import userSettingsAdvice from './user/pages/settings/advice'
import userSettingsAdviceHistory from './user/pages/settings/adviceHistory'
//个人中心-邀请好友
import userInviteIndex from './user/pages/invite/index'
import userInviteFriend from './user/pages/invite/friend'
import userCodeInput from './user/pages/invite/input'
//查错题
import indexCheckIndex from './check/pages/index.vue'
import indexCheckDetail from './check/pages/detail.vue'
import indexCheckError from './check/pages/error.vue'
import indexCheckErrorDetail from './check/pages/errorDetail.vue'
//知识图谱
import report from './report/pages/index'
import reportDetail from './report/pages/detail'
//刷题型
import indexBrushIndex from './brush/pages/index.vue'
import indexBrushDetail from './brush/pages/detail.vue'
import indexBrushBrush from './brush/pages/brush.vue'
import indexBrushError from './brush/pages/error.vue'
import indexBrushErrorDetail from './brush/pages/errorDetail.vue'

//我的班级
import indexClassIndex from './class/pages/index'
import indexClassCreate from './class/pages/createClass'
import indexClassDetail from './class/pages/classDetail'
import indexClassInvite from './class/pages/invite'
import indexClassManage from './class/pages/classManage.vue'
import indexClassApply from './class/pages/classApply.vue'
//我的教材
import userTextbook from './user/pages/textbook/index'
//插件
import moment from 'moment'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import '../node_modules/cropperjs/dist/cropper.min.css'


Vue.use(Router)
Vue.use(VueTouch)

Vue.config.devtools = true
FastClick.attach(document.body)

//图片异步加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'http://www.atool.org/placeholder.png?size=300x200&text=%E5%8A%A0%E8%BD%BD%E5%9B%BE%E7%89%87%E5%A4%B1%E8%B4%A5&&bg=ccc&fg=fff',
    loading: 'http://hilongjw.github.io/vue-lazyload/dist/loading-spin.svg'
})

//格式化时间
Vue.filter('ymd', function(value) {
    return moment.unix(value).format('YYYY-MM-DD');
});

//请求超时
Vue.http.interceptors.push((request, next) => {
    var timeout;
    if (request._timeout) {
        timeout = setTimeout(() => {
            if(request.onTimeout) request.onTimeout(request)
            request.abort()
        }, request._timeout);
    }
    next((response) => {
        clearTimeout(timeout);
    });
})

const router = new Router()
router.map({
    '/login': { component: Login },
    'agreement': { component: agreement },
    //注册账户
    'register': { component: register },
    'register/password': { component: setPassword },
    'register/info': { component: setInfo },
    //忘记密码
    'forget': { component: forget },
    'forget/password': { component: resetPassword },
    //纠错
    'correct/:id':{component: correct},
    //评注
    'comment/:id':{component: comment},
    //主页
    'main/': {
        component: Main,
        subRoutes: {
            'user/': {
                component: User
            },
            'message/': {
                component: Message
            },
            'index/': {
                component: Index
            }
        }
    },
    'main/user/photo':{
        component: Photo
    },
    //消息
    'message/class': { component: messageClass },
    'message/system': { component: messageSystem },
    'message/correct': { component: messageCorrect },
    //个人中心
    'user/resetPwd': { component: userResetPwd },
    'user/info': { component: userInfo },
    //设置
    'user/settings': { component: userSettingsIndex },
    'user/settings/aboutUs': { component: userSettingsAboutUs },
    'user/settings/advice': { component: userSettingsAdvice },
    'user/settings/advice/history': { component: userSettingsAdviceHistory },
    //邀请好友
    'user/invite': { component: userInviteIndex },
    'user/invite/friend': { component: userInviteFriend },
    'user/invite/input': { component: userCodeInput },
    //我的班级
    'index/class': { component: indexClassIndex },
    'index/createClass': { component: indexClassCreate },
    'index/class/detail/:id': { component: indexClassDetail },
    'index/class/invite/:id': { component: indexClassInvite },
    'index/class/manage/:id': { component: indexClassManage },
    'index/class/apply/:id':{ component: indexClassApply},
    //查错题
    'index/check': { component: indexCheckIndex },
    'index/check/detail/:id': { component: indexCheckDetail },
    'index/check/detail/error/:id': { component: indexCheckError},
    'index/check/detail/errorDetail/:id': { component: indexCheckErrorDetail},
    //刷题型 Brush
    'index/brush': { component: indexBrushIndex },
    'index/brush/detail/:id': { component: indexBrushDetail },
    'index/brush/brush/:id': { component:indexBrushBrush },
    'index/brush/error/:id': { component:indexBrushError },
    '/index/brush/detail/errorDetail/:id': { component:indexBrushErrorDetail },
    //我的教材
    'user/textBook': { component: userTextbook },
    //知识图谱
    'report': {component: report},
    'report/detail/:sectionId': {component: reportDetail},
})

router.redirect({
    // '/':'/main',
    '/main/': '/main/index',
    '/collect/': '/collect/example',
    'camera/correct/:id':'/correct/:id',
    'collect/correct/:id':'/correct/:id',
    'error/correct/:id':'/correct/:id',
    'camera/comment/:id':'/comment/:id',
    'collect/comment/:id':'/comment/:id',
    'error/comment/:id':'/comment/:id'
});



sync(store, router)

router.beforeEach(function(transition) {
    if (transition.to.path == '/') {
        if(localStorage.token){
            router.replace('/main/index');
        }else{
            router.replace('/login');
        }
    }
    if (transition.to.path == '/register/password') {
        if (store.state.register.mobile == '') {
            console.log("禁止访问!");
            router.replace('/register');
        }
    }
    if (transition.to.path == '/forget/password') {
        if (store.state.forget.mobile == '') {
            console.log("禁止访问!");
            router.replace('/forget');
        }
    }
    transition.next();
})



function plusReady(){
    let first = null;
    plus.key.addEventListener("backbutton",function(){
        if(store.state.route.path == '/main/index' || store.state.route.path =='/main/message' || store.state.route.path =='/main/user'){
            if (!first) {
                first = new Date().getTime();
                _.toast('再按一次退出')
                setTimeout(function() {
                    first = null;
                }, 1000);
            } else {
                if (new Date().getTime() - first < 1000) {
                    plus.runtime.quit();
                }
            }
        }else{
            window.history.back();
        }
    });
}

if(window.plus){
    plusReady();
}else{
    document.addEventListener("plusready",plusReady,false);
}

router.start(App, '#App')
