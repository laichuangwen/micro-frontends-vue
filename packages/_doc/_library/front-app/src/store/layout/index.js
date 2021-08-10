import menu from './menu.js';
import view from './view.js';
export default {
    namespaced: true,
    modules: {
        menu,
        view
    },
    state: {
        logo: true,
        fixedHeader: true,
        width: ''
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
