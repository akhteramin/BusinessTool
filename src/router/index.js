/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Fees from '@/components/Fees';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/fees',
            name: 'Fees',
            component: Fees
        }
    ]
});
