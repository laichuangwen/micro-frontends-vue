export default {
    namespaced: true,
    state: {
        anchor: [],
    },
    mutations: {
        update(state, val) {
            for (const i in val) {
                if (Object.prototype.hasOwnProperty.call(val, i)) {
                    state[i] = val[i];
                }
            }
        },
        addAnchor(state, val) {
            state.anchor.push(val);
        },
    },
    actions: {
    },
};
