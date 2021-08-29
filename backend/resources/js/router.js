import App from "./components/App.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/app",
        component: App,
        children: [],
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
