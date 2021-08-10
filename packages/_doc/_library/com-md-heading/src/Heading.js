
export default {
    name: 'md-heading',
    //inject: ['DMdWrapper'],
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root
            let name = parent.$options.componentName

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent

                if (parent) {
                    name = parent.$options.componentName
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params))
            }
        }
    },
    render() {
        const customtag = this.$attrs.type // eslint-disable-line
        return <customtag>{this.$slots.default}</customtag>
    },
    mounted() {
        const data ={
            name: this.$attrs.id,
            meta:{
                title: this.$el.innerText.replace(/ #$/, ''),
            }
        }
        this.$store.commit('menu/addAnchor', data)
    },
    destroyed() {
        this.$store.commit('menu/update', {
            anchor: []
        })
    }
}
