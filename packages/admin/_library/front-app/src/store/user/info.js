export default {
    namespaced: true,
    state: {
        alias: '',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
        gender: '',
        name: 'Ewen',
        thumbAvatar: '',
        uid: '',
    },
    mutations: {

        /*
         ** 初始化用户信息
         */
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
            //     const data = await api.get('/sso-api/admin-user/current')
            //     commit('update', data)
            // } catch (error) {
            //     console.log('error', error)
            // }
            // Vue.$ctx.store.commit('user/permission/update', data.funcCodes)
        },
    },
};
