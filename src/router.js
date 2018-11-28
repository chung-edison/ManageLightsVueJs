import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Buildings from '@/views/Buildings.vue'
import Rooms from '@/views/Rooms.vue'
import Lights from '@/views/Lights.vue'
import All from '@/views/All.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/buildings',
            name: 'buildings',
            component: Buildings,
        },
        {
            path: '/rooms',
            name: 'rooms',
            component: Rooms,
        },
        {
            path: '/lights',
            name: 'lights',
            component: Lights,
        },
        {
            path: '/all',
            name: 'all',
            component: All,
        }
    ]
})
