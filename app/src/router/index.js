import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const PageA = Vue.options.components['pageA']
const PageB = Vue.options.components['pageB']

export default new Router({
  routes: [
    {
      path: '/page-a',
      name: 'PageA',
      component: PageA
    },
    {
      path: '/page-b',
      name: 'PageB',
      component: PageB
    }
  ]
})
