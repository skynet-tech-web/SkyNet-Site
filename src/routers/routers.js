import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/pages/services2.vue'),
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import('@/pages/Animation.vue'),
  },
  {
    path: '/ad_creation',
    name: 'AdCreation',
    component: () => import('@/pages/adcreation.vue'),
  },

]

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

export default routers;