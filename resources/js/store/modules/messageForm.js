export default {
    actions: {
        messageSubmit: ({commit, state}) => {
            axios.post('/api/store', {
                    name: state.messageUserName,
                    email: state.messageUserEmail,
                    phone: state.messageUserPhone,
                    title: state.messageTitleVal,
                    message: state.messageTextVal,
                    city_id: state.messageCityId,
                })
                .then()
                .catch()
        },

    },
    mutations: {
        setMessageUserName: (state, messageUserName) => state.messageUserName = messageUserName,
        setMessageUserEmail: (state, messageUserEmail) => state.messageUserEmail = messageUserEmail,
        setMessageUserPhone: (state, messageUserPhone) => state.messageUserPhone = messageUserPhone,
        setMessageTitleVal: (state, messageTitleVal) => state.messageTitleVal = messageTitleVal,
        setMessageTextVal: (state, messageTextVal) => state.messageTextVal = messageTextVal,
        setMessageCityId: (state, messageCityId) => state.messageCityId = messageCityId,
    },

    state: {
        messageUserName: '',
        messageUserEmail: '',
        messageUserPhone: '',
        messageTitleVal: '',
        messageTextVal: '',
        messageCityId: '',
    },

    getters: {
        validMessageUserName(state) {
            if (state.messageUserName.length === 0) {
                return null;
            } else if (state.messageUserName.length < 30) {
                return true;
            } else {
                return false;
            }
        },

        validMessageUserEmail(state) {
            let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (state.messageUserEmail.length === 0) {
                return null;
            } else if (regExp.test(state.messageUserEmail) && state.messageUserEmail.length < 130) {
                return true;
            } else {
                return false;
            }
        },

        validMessageUserPhone(state) {
            let regExp = /[A-zА-яЁё]/

            if (state.messageUserPhone.length === 0) {
                return null;
            } else if (!regExp.test(state.messageUserPhone) && state.messageUserPhone.length < 30) {
                return true;
            } else {
                return false;
            }
        },

        validMessageTitle(state) {
            if (state.messageTitleVal.length === 0) {
                return false;
            } else if (state.messageUserName.length < 120) {
                return true;
            }
        },

        validMessageText(state) {
            if (state.messageTextVal.length === 0) {
                return false;
            } else if (state.messageTextVal.length < 700) {
                return true;
            }
        },

    },

}
