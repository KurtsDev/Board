require('./bootstrap');

import App from './App';


import VueRouter from 'vue-router';
window.Vue.use(VueRouter);

import Vuex from 'vuex';
window.Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        messages: [],
        messageTitleVal: '',
        messageTextVal: '',
    },
    mutations: {},
    actions: {},
    getters: {},

});



const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'App',
            component: App
        }
    ],
});

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    render: h => h(App)

});
