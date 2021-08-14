export default {
    namespaced: true,
    state: {
        list: ['bms.home', 'bms.guide'],
    },
    mutations: {
        update(state, val) {
            state.list = val;
        },
    },
    actions: {
        async init() {
            // const data = await api.get('/sso-api/admin-user/permissions')
            // commit('update', data)
        },
    },
};
