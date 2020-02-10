export default {
    actions: {
        initListCity: (context) => {
            axios.get('api/initListCity')
                .then(response => {
                    context.commit('initListCity', response.data)
            })
        },
    },
    mutations: {
        initListCity(state, cities) {
            state.cities = cities;
        }
    },
    state: {
        cities: [],
    },
    getters: {
        getCity(state) {
            return state.cities;
        }
    }
}
