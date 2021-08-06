<!-- 负责渲染每个表单项 -->
<template>
    <!-- prop 为数组 -->
    <d-form-item
        v-if="Array.isArray(item.prop)"
        v-bind="item"
        :prop="item.prop[0]">
        <FormWidget
            :model="model"
            v-bind="item" />
    </d-form-item>

    <!-- prop 不是数组 -->
    <d-form-item
        v-else
        v-bind="item">
        <slot
            v-if="item.slotName"
            :name="item.slotName" />

        <template v-else>
            <component
                :is="item.type"
                v-model="model[item.prop]"
                v-bind="{
                    clearable: true,
                    ...item.props
                }"
                v-on="item.events" />
        </template>
    </d-form-item>
</template>

<script>
const FormWidget = () => import('./FormWidget.vue')

export default {
    components: {
        FormWidget
    },
    props: {
        item: {
            type: Object,
            default: () => ({})
        },
        model: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}

</script>

<style lang="scss" module="s">

</style>
