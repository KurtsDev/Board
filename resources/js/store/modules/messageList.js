export default {
    actions: {
        initListMessage: (context, state) => {
            axios.get('api/initListMessage', {
                params: {
                    cityId: context.rootState.messageForm.messageCityId
                }
            }).then(response => {
                    context.commit('initListMessage', response.data);
                })
        },

        realTimePushMessage: (context, message) => {
            context.commit('realTimePushMessage', message);
        },

        showMessage: (context, id) => {
            context.commit('showMessage', id);
        },
    },
    mutations: {
        initListMessage(state, messages) {
            state.messages = messages;
        },

        realTimePushMessage(state, message) {
            state.messages.push(message);
        },

        showMessage(state, id) {
            state.messages.forEach(function (item) {
                if (item.id === id)
                    item.show = !item.show;
            });
        },

    },

    state: {
        messages: [],

    },
    getters: {
        getMessages(state) {

            return state.messages.sort(function (itemA, itemB) {
                return (itemB.id - itemA.id)
            });

        }
    }
}
