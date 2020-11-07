import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: Views,
      meta: { requiresAuth: true },
      children: [
        {
          // default router page
          path: '',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
        },
        {
          path: '/aboutUs',
          name: 'aboutUs',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/AboutUs')
        },
        {
          path: '/services',
          name: 'services',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/Services')
        },
        {
          path: '/eduSmart',
          name: 'eduSmart',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/EduSmart')
        },
        {
          path: '/loyaltyPlus',
          name: 'loyaltyPlus',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/LoyaltyPlus')
        },
        {
          path: '/merchantPlus',
          name: 'merchantPlus',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/MerchantPlus')
        },
        {
          path: '/events',
          name: 'events',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/Events')
        },
        {
          path: '/eventsPage/:name',
          name: 'eventsPage',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/Events/eventPage/index.vue')
        },
        {
          path: '/contactUs',
          name: 'contactUs',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/ContactUs')
        }
      ]
    }
  ]
})
