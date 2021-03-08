/** @format */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Step2 from '../views/Step2.vue';
import Step3 from '../views/Step3.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/step2',
    name: 'Step2',
    component: Step2,
  },
  {
    path: '/step3',
    name: 'Step3',
    component: Step3,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
