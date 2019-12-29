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

        messageSubmit: ({commit, state}) => {
            axios.post('/api/store', {
                    name: state.messageUserName,
                    email: state.messageUserEmail,
                    phone: state.messageUserPhone,
                    title: state.messageTitleVal,
                    message: state.messageTextVal,
                })
                .then(
                    commit('unsetBeforeSubmitError')
                )
                .catch(
                    commit('setBeforeSubmitError')
                )
        },

        currentBlurInput: ({commit}, value) => {
            commit('setCurrentBlurInput', value)
        },

    },
    mutations: {
        setMessageUserName: (state, messageUserName) => state.messageUserName = messageUserName,
        setMessageUserEmail: (state, messageUserEmail) => state.messageUserEmail = messageUserEmail,
        setMessageUserPhone: (state, messageUserPhone) => state.messageUserPhone = messageUserPhone,
        setMessageTitleVal: (state, messageTitleVal) => state.messageTitleVal = messageTitleVal,
        setMessageTextVal: (state, messageTextVal) => state.messageTextVal = messageTextVal,
        setBeforeSubmitError: (state) => state.beforeSubmitError = false,
        unsetBeforeSubmitError: (state) => state.beforeSubmitError = true,
        setCurrentBlurInput: (state, value) => state.currentBlurInput = value,
    },

    state: {
        messageUserName: '',
        messageUserEmail: '',
        messageUserPhone: '',
        messageTitleVal: '',
        messageTextVal: '',
        beforeSubmitError: true,
        currentBlurInput: '',
    },

    getters: {
        nameValid(state) {
            return state.messageUserName.length < 31;
        },
        emailValid(state) {
             if (state.messageUserEmail.length === 0)  return true;

            let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let regExpEmail = regExp.test(state.messageUserEmail);
            let emailValidResult = state.messageUserEmail.length < 130 && regExpEmail;

            return emailValidResult;
        },
        phoneValid(state) {
            return state.messageUserPhone.length < 17;
        },
        titleValid(state) {
            return state.messageTitleVal.length > 0 && state.messageTitleVal.length < 121;
        },

        messageValid(state) {
            return state.messageTextVal.length > 0 && state.messageTextVal.length < 701;
        },

        currentBlurInput(state) {
            return state.currentBlurInput;
        },


    },

}

