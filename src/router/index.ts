// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CategoryPage from '../views/CategoryPage.vue';
import PaymentPage from '../views/PaymentPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: CategoryPage,
    props: true,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
