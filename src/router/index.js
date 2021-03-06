import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import HomePage from '@views/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
