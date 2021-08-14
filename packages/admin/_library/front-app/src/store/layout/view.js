// 权限页
const defaultConfig = {
    default: {
        title: '',
        tip: '',
    },
    denied: {
        title: '您没有访问权限哦~',
        tip: '请联系管理员开通相关权限',
    },
    disabled: {
        title: '您没有查看该数据的权限哦~',
        tip: '',
    },
    deleted: {
        title: '您查看的内容不存在',
        tip: '',
    },
};
class View {
    constructor(data) {
        if (typeof data === 'string' || !data) {
            data = {
                type: data || '',
            };
        }
        const { type } = data;
        const view = {
            ...defaultConfig[type || 'default'],
            ...data,
        };
        Object.entries(view).forEach(([
            key,
            value,
        ]) => {
            this[key] = value;
        });
    }
}
export default {
    namespaced: true,
    state: {
        type: '', // enum: 空显示router-view denied显示未授权 deleted显示被删除
        title: '',
        tip: '',
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
        toggle({ commit }, data) {
            commit('update', new View(data));
        },
    },
};
