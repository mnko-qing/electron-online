import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/window/login').default
    },
    {
      path: '/window',
      name: 'window',
      component: require('@/components/window/mainWindow').default,
      children:[
        {
          path: 'overview',
          name: 'overview',
          component: require('@/components/views/overview/overview').default
        },
        {
          path: 'codingRules',
          name: 'codingRules',
          component: require('@/components/views/codingRules/codingRules').default
        },
        {
          path: 'taskManagement',
          name: 'taskManagement',
          component: 
          require('@/components/views/taskManagement/taskManagement').default
        },
        {
          path: 'processManagement',
          name: 'processManagement',
          component: 
          require('@/components/views/processManagement/processManagement').default
        },
        {
          path: 'templateManagement',
          name: 'templateManagement',
          component: 
            require('@/components/views/templateManagement/templateManagement').default,
          children: [
            {
              path: 'createTemplate',
              name: 'createTemplate',
              component:
              require('@/components/views/templateManagement/createTemplate').default
            }
          ]
        },
        {
          path: 'dictionaryManagement',
          name: 'dictionaryManagement',
          component: 
          require('@/components/views/dictionaryManagement/dictionaryManagement').default
        },
      ]
    },
    

    /* {
      path: '*',
      redirect: '/'
    } */
  ]
})
