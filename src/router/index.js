import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Help from "@/views/Help";
import Profile from "@/views/Profile";
import CreateReview from '@/views/CreateReview'
import About from '@/views/About'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About

    },
    {
        path: '/help',
        name: 'help',
        component: Help
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/create_review',
        name: 'create_review',
        component: CreateReview
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router