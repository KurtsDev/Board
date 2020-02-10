import chat from "./chat";
import Vue from "vue";

export default {
    actions: {},
    mutations: {},
    state: {},
    getters: {
        chatList(state, getters, rootState, rootGetters) {

            let activeChat = rootState.chat.activeChat;

            if (rootState.chat.chatList[activeChat]) {
                return rootState.chat.chatList;
            }
        }
    },


}
