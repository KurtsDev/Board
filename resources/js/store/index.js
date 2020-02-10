import Vue from 'vue';
import Vuex from 'vuex';

import messageForm from "./modules/messageForm";
import messageList from "./modules/messageList";
import citySelect from "./modules/citySelect";
import chat from "./modules/chat";
import chatList from "./modules/chatList";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        messageForm,
        messageList,
        citySelect,
        chat,
        chatList

    },
});
