import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/SkyNet-Site/',
    name: 'index',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/SkyNet-Site/services',
    name: 'services',
    component: () => import('@/pages/services2.vue'),
  },
  {
    path: '/SkyNet-Site/animation',
    name: 'Animation',
    component: () => import('@/pages/Animation.vue'),
  },
  {
    path: '/SkyNet-Site/ad_creation',
    name: 'AdCreation',
    component: () => import('@/pages/adcreation.vue'),
  },

]

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

export default routers;