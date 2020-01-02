import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Restful from '../components/API/Restful.vue'

import Percent from '../components/Layout/Percent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/percent',
        component: Percent
      },
      {
        path: '/restful',
        component: Restful
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
