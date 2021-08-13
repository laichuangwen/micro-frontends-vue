
export default {
    title: 'CUCO-FE',
    sort: 10,
    route: {
        name: 'introduce',
        path: 'introduce',
        component: r => require.ensure([], () => r(require('./index.md')), 'introduce')
    }
}
