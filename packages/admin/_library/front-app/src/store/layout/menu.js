export default {
    namespaced: true,
    state: {
        collapse: false, // 是否展开
        drawer: false, // 小屏用
        backgroundColor: '#304156',
        textColor: '#bfcbd9',
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
        setCollapse(state, collapse) {
            const { rootState } = state;
            const { width } = rootState.layout;
            if (width < 900) {
                state.commit('update', {
                    collapse: false,
                    drawer: collapse, // 小屏用
                });
            } else {
                state.commit('update', {
                    collapse,
                    drawer: false, // 小屏用
                });
            }
        },
    },
};
