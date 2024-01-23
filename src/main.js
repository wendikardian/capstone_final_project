import "./assets/main.css";

import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import {store} from './store/index'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"