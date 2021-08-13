
export default {
    title: 'Vue.$ctx',
    sort: 30,
    route: {
        name: 'ctx',
        path: 'ctx',
        component: r => require.ensure([], () => r(require('./index.md')), 'ctx')
    }
}
