import Vue from 'vue'
import Router from 'vue-router'
import SideNav from '@/examples/SideNavExample'
import Full from '@/examples/Full'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/full',
      name: 'Full',
      component: Full
    },
    {
      path: '/side-nav',
      name: 'SideNav',
      component: SideNav
    }
  ]
})
