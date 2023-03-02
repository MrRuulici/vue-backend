import {createRouter, createWebHistory} from 'vue router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name: 'home',
      component: () => import('../pages/Home.vue'),
    },
    {
      path:'/about',
      name: 'about',
      component: () => import('../pages/About.vue'),
    },
    {
      path:'/',
      name: 'blog',
      component: () => import('../pages/Blog.vue'),
    },
    {
      path:'/',
      name: 'GetAQuote',
      component: () => import('../pages/GetAQuote.vue'),
    },
    {
      path:'/',
      name: 'media',
      component: () => import('../pages/Media.vue'),
    },
    {
      path:'/',
      name: 'shop',
      component: () => import('../pages/Shop.vue'),
    },
  ],
});

export default router;