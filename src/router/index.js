// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import News from "../components/News.vue";
import Chat from "../components/Chat.vue";
import Info from "../components/info.vue";

const routes = [
    { path: '', component: News},
    { path: '/news', component: News},
    { path: '/chat', component: Chat},
    { path: '/chat/info', component: Info},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
