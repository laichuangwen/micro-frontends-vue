export default {
    name: 'md-link',
    render() {
        const { href } = this.$attrs;
        if (href.startsWith('/')) {
            const path = this.$attrs.href.replace(this.$router.options.base, '/');
            const { route } = this.$router.resolve(path);

            if (route.name === this.$router.resolve('/').route.name) {
                return <a>{this.$slots.default}</a>;
            }
            return <router-link to={path}>{this.$slots.default}</router-link>;
        }
        return <a>{this.$slots.default}</a>;
    },
};
