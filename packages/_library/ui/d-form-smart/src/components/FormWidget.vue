<template>
    <component
        :is="$attrs.type"
        v-model="_value"
        v-bind="{
            clearable: true,
            ...$attrs.props
        }"
        v-on="$attrs.events" />
</template>

<script>
export default {
    props: {
        model: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {

        }
    },
    computed: {
        _value: {
            get() {
                const prop = this.$attrs.prop
                let result = []

                if (this.model[prop[0]]) {
                    result = prop.map(field => this.model[field])
                }

                return result
            },
            set(value) {
                const _value = value || []
                this.$attrs.prop.forEach((field, index) => {
                    this.model[field] = _value[index] ?? ''
                })
            }
        }
    },
    methods: {

    }
}

</script>

<style lang="scss" module="s">

</style>
