import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Pagar from '../views/Pagar.vue'
import Receber from '../views/Receber.vue'
import PagarParcelado from '../views/PagarParcelado.vue'
import ReceberParcelado from '../views/ReceberParcelado.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Início',
    component: Home
  },
  {
    path: '/pagar',
    name: 'Pagar',
    component: Pagar
  },
  {
    path: '/receber',
    name: 'Receber',
    component: Receber
  },
  {
    path: '/pagar_parcelado',
    name: 'Pagar Parcelado',
    component: PagarParcelado
  },
  {
    path: '/receber_parcelado',
    name: 'Receber Parcelado',
    component: ReceberParcelado
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
