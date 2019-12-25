export default {
    actions: {
        getMessage: (context) => {
            axios.get('api/getMessage')
                .then(response => {
                    context.commit('updateMessage', response.data)
                })
        }
    },
    mutations: {
        updateMessage(state, messages) {
            state.messages = messages;
        }
    },
    state: {
        messages: [],
    },
    getters: {
        getMessages(state) {
            return state.messages;
        }
    }
}
