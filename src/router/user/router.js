import settings from '../../features/settings/router'
import modules from './modules/store'
import store from 'src/store'

export default {
  'user': {
    component: r => require.ensure([], () => r(require('./pages/layout')), '/user'),
    subRoutes: {
      '/':{component: r => require.ensure([], () => r(require('./pages/index')), '/user/')},
      'photo':{component:r => require.ensure([], () => r(require('./pages/photo')), '/user/photo')},
      ...settings
    }
  }
}

store.registerModule('user', {
  ...modules
});