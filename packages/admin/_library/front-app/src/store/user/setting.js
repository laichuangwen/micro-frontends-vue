export default {
    namespaced: true,
    state: {
        theme: '',
        logo: true,
    },
    mutations: {
        update(state, data) {
            for (const i in data) {
                state.hasOwnProperty(i) && (state[i] = data[i])
            }
        }
    },
    actions: {
        update({ commit }, { key, value }) {
            if (key && value !== undefined) {
                // 更新状态机数据
                commit('update', { [key]: value })
            }
        }
    }
}
