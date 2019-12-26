export default {
    actions: {
        getMessage: (context) => {
            axios.get('api/getMessage')
                .then(response => {
                    context.commit('updateMessage', response.data);
                    context.commit('addShowColumn')
                })
        }
    },
    mutations: {
        updateMessage(state, messages) {
            state.messages = messages;
        },

        addShowColumn(state) {
            state.messages.map(function (item) {
                Vue.set(item, 'show', true);
            })
        },

    },
    state: {
        messages: [],

    },
    getters: {
        getMessages(state) {
            return state.messages.reverse();
        }
    }
}
