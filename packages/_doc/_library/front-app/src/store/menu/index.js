export default {
    namespaced: true,
    state: {
        anchor: []
    },
    mutations: {
        update(state, val) {
            for (const i in val) {
                state[i] = val[i]
            }
        },
        addAnchor(state, val) {
            state.anchor.push(val)
        }
    },
    actions: {
    }
}
