import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('../views/Index.vue'),
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.path !== '/') {
        next('/')
    } else {
        next()
    }
})

export default router
