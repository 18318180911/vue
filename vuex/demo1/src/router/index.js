import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import layout from '@/layout/index.vue'
const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        name: 'index',
        component: ()=>import('@/views/index.vue')
      },
      {
        path: '/pins',
        name: 'pins',
        component: ()=>import('@/views/pins.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
