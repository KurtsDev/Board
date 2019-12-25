require('./bootstrap');

import App from './App';
import store from './store'
import router from './router'

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    render: h => h(App)

});
