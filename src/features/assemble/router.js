export default {
  path: '/assemble',
  component: r => require.ensure([], () => r(require('./layout')), '/assemble'),
  redirect: '/assemble/center/sync',
  children: [
    {
      path: 'center',
      component: r => require.ensure([], () => r(require('./pages/center')), '/assemble/center'),
      children: [
        {
          path: 'gaokao',
          name: 'assemble_gaokao',
          component: r => require.ensure([], () => r(require('./pages/gaokao')), '/assemble/center/gaokao')
        },
        {
          path: 'sync',
          name: 'assemble_sync',
          component: r => require.ensure([], () => r(require('./pages/sync')), '/assemble/center/sync')
        }
      ]
    },
    {
      path: 'options',
      name: 'assemble_options',
      component: r => require.ensure([], () => r(require('./pages/options')), '/assemble/center/options')
    },
    {
      path: 'example/:type/:id/:name',
      name: 'assemble_example',
      component: r => require.ensure([], () => r(require('./pages/example')), '/assemble/example')
    },
    {
      path: 'choice/:subjectId/:grade/:id',
      name: 'assemble_choice',
      component: r => require.ensure([], () => r(require('./pages/choice')), '/assemble/choice')
    }
  ]
}