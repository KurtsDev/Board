export default {
    actions: {
        setMessageTitleVal: ({commit}, messageTitleVal) => {
            commit('setMessageTitleVal', messageTitleVal)
        },
        setMessageTextVal: ({commit}, messageTextVal) => {
            commit('setMessageTextVal', messageTextVal)
        },

        messageSubmit: ({state}) => {

            axios
                .post('/api/store', {
                    title: state.messageTitleVal,
                    message: state.messageTextVal,
                })
                .then(response => {
                });
        },

    },
    mutations: {
        setMessageTitleVal: (state, messageTitleVal) => state.messageTitleVal = messageTitleVal,
        setMessageTextVal: (state, messageTextVal) => state.messageTextVal = messageTextVal,
    },

    state: {
        messageTitleVal: '',
        messageTextVal: '',
    },

    getters: {},

}

