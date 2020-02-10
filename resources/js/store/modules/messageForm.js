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
                    created_at_valid: new Date(),
                })
                .then()
                .catch()
        },



        messageSendUnlockTime: async (context, state) => {

            let response = await axios.get('api/messageNextDate');

            let nextMessage = new Date(response.data);
            let nextMessageSec = nextMessage / 1000 + 1;
            nextMessageSec = Math.round(nextMessageSec);


            let realtime = new Date() / 1000;
            realtime = Math.round(realtime);

            let messageSendUnlockTime = nextMessageSec - realtime;

             let timer = setInterval(() => {

                 if (messageSendUnlockTime > 0) {
                     messageSendUnlockTime--;
                     context.commit('lockTime', messageSendUnlockTime);
                 } else {
                     clearInterval(timer);
                 }

            }, 1000);

        },





    },
    mutations: {
        setMessageUserName: (state, messageUserName) => state.messageUserName = messageUserName,
        setMessageUserEmail: (state, messageUserEmail) => state.messageUserEmail = messageUserEmail,
        setMessageUserPhone: (state, messageUserPhone) => state.messageUserPhone = messageUserPhone,
        setMessageTitleVal: (state, messageTitleVal) => state.messageTitleVal = messageTitleVal,
        setMessageTextVal: (state, messageTextVal) => state.messageTextVal = messageTextVal,
        setMessageCityId: (state, messageCityId) => state.messageCityId = messageCityId,
        lockTime: (state, lockTime) => state.lockTime = lockTime,
    },

    state: {
        messageUserName: '',
        messageUserEmail: '',
        messageUserPhone: '',
        messageTitleVal: '',
        messageTextVal: '',
        messageCityId: '',
        lockTime: null,
    },

    getters: {

        lockTime(state) {
            let sec =  state.lockTime;

            let m = sec / 60 ^ 0;
            let s = sec - (m * 60);

            return {
                secondLockTime: (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s),
                stateLockTime: sec > 0 ? true : false
            }
        },

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
