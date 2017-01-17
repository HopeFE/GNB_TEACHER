import layout from './pages/layout'
import login from './pages/login'
import register from './pages/register'
import forget from './pages/forget'
import resetPassword from './pages/resetPassword'
import setPassword from './pages/setPassword'

export default {
    '/': {
        component: layout,
        subRoutes: {
            'login': {
                component: login,
            },
            'register': {
                component: register,
            },
            'setPassword': {
                component: setPassword,
            },
            'forget': {
                component: forget,
            },
            'resetPassword': {
                component: resetPassword,
            }
        }
    }
}
