import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login.vue'


const routes = [
    {
        path: '/',
        component: Login,
        name: 'login'
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router