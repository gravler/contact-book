import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/views/Contacts'
import Details from '@/views/Details'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Contacts
        },
        {
            path: '/details/:id',
            component: Details,
            props: true
        }
    ]
})