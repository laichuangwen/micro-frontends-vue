import menu from './menu';
import view from './view';

export default {
    namespaced: true,
    modules: {
        menu,
        view,
    },
    state: {
        logo: true,
        fixedHeader: true,
        mainFullscreen: false,
        width: '',
    },
    mutations: {
        update(state, data) {
            for (const i in data) {
                if (Object.prototype.hasOwnProperty.call(data, i)) {
                    state[i] = data[i];
                }
            }
        },
    },
    actions: {
        update({ commit }, { key, value }) {
            if (key && value !== undefined) {
                // 更新状态机数据
                commit('update', { [key]: value });
            }
        },
    },
};
