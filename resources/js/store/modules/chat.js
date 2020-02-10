import Vue from 'vue';

export default {
    actions: {

        createRoom: async ({commit}, roomInfo) => {

            let messageUserId = roomInfo.messageUserId;
            let messageId = roomInfo.messageId;
            let messageTitle = roomInfo.messageTitle

            let response = await axios.get('api/getUser');
            let userId = response.data.id;

            let createRoomInfo = {
                roomKey: 'chat_' + messageUserId + '_' + messageId + '_' + userId,
                chatName: messageTitle
            };


            commit('createRoom', createRoomInfo);


        },

        chatMessageSubmit: ({commit, state}) => {
            commit('addMessageChat', state.textChat);
            axios.post('api/chatMessageSubmit', {
                textChat: state.textChat,
            })
                .then()
                .catch()
        }

    },


    mutations: {
        //v-model
        textChat(state, textChat) {
            state.textChat = textChat;
        },


        addMessageChat(state, message) {
            let activeChat = state.activeChat;
            if (activeChat) {
                state.chatList[activeChat]['chatMessage'].push(message);
            }

        },

        createRoom(state, createRoomInfo) {
            let roomKey = createRoomInfo.roomKey;
            let chatName = createRoomInfo.chatName;
            if (!state.chatList[roomKey]) {
                Vue.set(state.chatList, roomKey, {
                    chatName: chatName,
                    chatMessage: []
                });
            }
            state.activeChat = roomKey;

        },


    },
//хранит все сообщения с конкретным юзером

    state: {
        activeChat: '',
        chatList: {
            //chat_6_37_100: {
            //      chatName: chatName,
            //       chatMessage: []
            // }
        },
        textChat: '',

    },
    getters: {

        chatSubmitDisabled(state) {
            return state.textChat && state.activeChat;
        },

        activeChat(state) {
            return state.activeChat;
        },

        messagesChat(state) {
            let activeChat = state.activeChat;

            if (state.chatList[activeChat]) {
                return state.chatList[activeChat]['chatMessage'];
            }


        }


    }
}
