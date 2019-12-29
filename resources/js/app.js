require('./bootstrap');

import App from './App';
import store from './store'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    render: h => h(App)

});
