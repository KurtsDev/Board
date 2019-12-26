export default {
    actions: {
        setMessageUserName: ({commit}, messageUserName) => {
            commit('setMessageUserName', messageUserName)
        },

        setMessageUserEmail: ({commit}, messageUserEmail) => {
            commit('setMessageUserEmail', messageUserEmail)
        },

        setMessageUserPhone: ({commit}, messageUserPhone) => {
            commit('setMessageUserPhone', messageUserPhone)
        },



        setMessageTitleVal: ({commit}, messageTitleVal) => {
            commit('setMessageTitleVal', messageTitleVal)
        },
        setMessageTextVal: ({commit}, messageTextVal) => {
            commit('setMessageTextVal', messageTextVal)
        },

        messageSubmit: ({state}) => {

            axios
                .post('/api/store', {
                    name: state.messageUserName,
                    email: state.messageUserEmail,
                    phone: state.messageUserPhone,

                    title: state.messageTitleVal,
                    message: state.messageTextVal,
                })
                .then(response => {
                });
        },

    },
    mutations: {
        setMessageUserName: (state, messageUserName) => state.messageUserName = messageUserName,
        setMessageUserEmail: (state, messageUserEmail) => state.messageUserEmail = messageUserEmail,
        setMessageUserPhone: (state, messageUserPhone) => state.messageUserPhone = messageUserPhone,

        setMessageTitleVal: (state, messageTitleVal) => state.messageTitleVal = messageTitleVal,
        setMessageTextVal: (state, messageTextVal) => state.messageTextVal = messageTextVal,
    },

    state: {
        messageUserName: '',
        messageUserEmail: '',
        messageUserPhone: '',

        messageTitleVal: '',
        messageTextVal: '',
    },

    getters: {},

}

