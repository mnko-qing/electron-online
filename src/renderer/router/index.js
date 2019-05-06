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
          path: '/window/overview',
          name: 'overview',
          component: require('@/components/views/overview/overview').default
        },
        {
          path: '/window/codingRules',
          name: 'codingRules',
          component: require('@/components/views/codingRules/codingRules').default
        },
        {
          path: '/window/taskManagement',
          name: 'taskManagement',
          component: 
          require('@/components/views/taskManagement/taskManagement').default
        },
        {
          path: '/window/processManagement',
          name: 'processManagement',
          component: 
          require('@/components/views/processManagement/processManagement').default
        },
        {
          path: '/window/templateManagement',
          name: 'templateManagement',
          component: 
            require('@/components/views/templateManagement/templateManagement').default,
          children: [
            {
              path: '/window/templateManagement/createTemplate',
              name: 'createTemplate',
              component:
              require('@/components/views/templateManagement/createTemplate').default
            }
          ]
        },
        {
          path: '/window/dictionaryManagement',
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
