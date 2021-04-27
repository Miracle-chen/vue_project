import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home'
import IndexPage from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/index',
      name: 'index',
      component: IndexPage
    }
  ]
})
