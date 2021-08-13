
export default {
    title: '业务手册-酷客内部系统',
    sort: 0,
    route: {
        name: 'introduce',
        path: 'introduce',
        component: r => require.ensure([], () => r(require('./index.md')), 'introduce')
    }
}
