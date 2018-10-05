/*eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: require('@/components/Login').default
        },
        {
            path: '/User/profile',
            name: 'user',
            component: require('@/components/User').default,
            beforeEnter: (to, from, next) => {
                if (!store.state.user)
                    next('/')
                next()

            }
        },
        {
            path: '/Task/list',
            name: 'task',
            component: require('@/components/Task').default,
            beforeEnter: (to, from, next) => {
                if (!store.state.user)
                    next('/')
                next()

            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
