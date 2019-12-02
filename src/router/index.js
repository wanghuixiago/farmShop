import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Class from '../views/Class.vue'
import Shop from '../views/Shop.vue'
import Me from '../views/Me.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/class',
    name: 'class',
    component: Class
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  }
  
]

const router = new VueRouter({
  routes
})

export default router
