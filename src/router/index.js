import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from '../store/account/';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('../layouts/Base.vue'),
    children: [ 
      { path: '', component: () => import('../views/home/Products.vue') },
      { path: '/home/details/:idProduct', component: () => import('../views/home/Details.vue') },
      { path: '/home/cart', component: () => import('../views/home/Cart.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('../views/account/Login.vue')
  },
]

/* Guard routes from unauthenticated user
    NOT WORKING
    
const isLogged = store.getters['isLogged'];

router.beforeEach(async (to) => {
  if (!isLogged && to.name !== '/') {
    return { name: '/' }
  }
})
 */

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
