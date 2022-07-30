import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/pokemon/:name',
    name: 'pokemon-details',
    component: () => import('@/views/PokemonDetails.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/error-404',
    name: 'not-found',
    redirect: { name: '404' },
  },
]
