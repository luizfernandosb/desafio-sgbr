import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/settings', component: () => import('@/views/SettingsView.vue') },
    { path: '/settings/:submenu/:subitem?', component: () => import('@/views/SubSettingsView.vue') },
    { path: '/', redirect: '/settings' }
  ]
})

export default router