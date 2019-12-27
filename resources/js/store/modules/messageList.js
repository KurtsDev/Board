export default {
    actions: {
        getMessage: (context) => {
            axios.get('api/getMessage')
                .then(response => {
                    context.commit('updateMessage', response.data);
                })
        },

        showMessage: (context, id) => {
            context.commit('showMessage', id);
        },

    },
    mutations: {
        updateMessage(state, messages) {
            state.messages = messages;
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
            return state.messages.reverse();
        }
    }
}
