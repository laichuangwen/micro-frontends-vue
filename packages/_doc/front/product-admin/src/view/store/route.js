export default {
    title: '状态树',
    sort: 20,
    route: {
        name: 'store',
        path: 'store',
        component: (r) => require.ensure([], () => r(require('./index.md')), 'store'),
    },
};
