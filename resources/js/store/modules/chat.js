export default {
    actions: {

        chatMessageSubmit: ({commit, state}) => {
            axios.post('api/chatMessageSubmit', {
                textChat: state.textChat,
            })
                .then()
                .catch()
        }

    },


    mutations: {

        textChat(state, textChat) {
            state.textChat = textChat;
        },

    },

    state: {
        messagesChat: [],
        textChat: '',

    },
    getters: {

    }
}
