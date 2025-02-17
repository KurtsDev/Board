import Vue from 'vue'
import VueRouter from 'vue-router';

import App from "../App";
import MessageList from "../components/MessageList";
import CitySelect from "../components/CitySelect";
import MessageForm from '../components/MessageForm'
import Chat from "../components/Chat";
import ChatList from "../components/ChatList";

Vue.use(VueRouter);



export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                city: CitySelect,
            }
        },
        {
            path: '/:id',
            components: {
                form: MessageForm,
                list: MessageList,
                chat: Chat,
                chatList: ChatList,
            }
        },

    ],
});
