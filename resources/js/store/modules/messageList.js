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

        showMessage(id) {
            console.log(id)
            this.state.messages.forEach(item => item.id === id ? item.show = false : true)
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
