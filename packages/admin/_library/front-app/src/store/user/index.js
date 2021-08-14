import info from './info';
import permission from './permission';

export default {
    namespaced: true,
    state: {},
    modules: {
        info,
        permission,
    },
    getters: {
        permission(state) {
            const pms = {};
            state.permission.list.forEach((item) => {
                pms[item] = true;
            });
            return pms;
        },
    },
};
