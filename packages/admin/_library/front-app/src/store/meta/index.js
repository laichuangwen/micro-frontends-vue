import dics from './dics.js';

export default {
    namespaced: true,
    modules: {},
    state() {
        return {
            ...dics,
        };
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
        async init() {
            // try {
            //     const data = await api.get('/bms-api/role-do/getAllSystem')
            //     commit('update', {
            //         SYS_OPTIONS: data
            //     })
            // } catch (error) {
            //     console.log('error', error)
            // }
        },
    },
};
