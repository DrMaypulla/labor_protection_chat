// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import News from "../components/News.vue";
import Chat from "../components/Chat.vue";


const routes = [
    { path: '', component: News},
    { path: '/news', component: News},
    { path: '/chat', component: Chat},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
