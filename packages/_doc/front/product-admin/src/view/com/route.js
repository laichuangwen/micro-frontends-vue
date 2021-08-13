
export default {
    title: '组件',
    sort: 10,
    children: require.context('./', true, /^\.\/((?!\/)[\s\S])+\/route\.js$/)
}
