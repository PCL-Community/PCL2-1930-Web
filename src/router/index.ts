import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/HomeView.vue"),
        },
        {
            path: "/q/homepage",
            name: "q_homepage",
            component: () => import("@/views/Q/HomepageView.vue"),
        },
    ],
});

export default router;
