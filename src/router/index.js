import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Rest from '@/pages/rest/index'
import Challenge from '@/pages/challenge/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rest',
      name: 'Rest',
      component: Rest
    },
    {
      path: '/challenge',
      name: 'Challenge',
      component: Challenge
    }
  ]
})
