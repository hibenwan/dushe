import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import appcover from '@/pages/cover/cover'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: appcover
    }
  ]
})
