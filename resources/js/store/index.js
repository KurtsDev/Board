import Vue from 'vue';
import Vuex from 'vuex';

import messageForm from "./modules/messageForm";
import messageList from "./modules/messageList";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        messageForm,
        messageList,
    },
});
