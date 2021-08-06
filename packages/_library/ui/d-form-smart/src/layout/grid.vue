<!-- 栅格布局 -->
<template>
    <d-row v-bind="_layoutConfig">
        <d-col
            v-for="(item, index) in formItems"
            :key="index"
            v-bind="item.col"
            :span="(item.col && item.col.span) || _layoutConfig.colSpan">
            <FormItem
                :item="item"
                :model="model">
                <slot
                    v-if="item.slotName"
                    :slot="item.slotName"
                    :name="item.slotName" />
            </FormItem>
        </d-col>
    </d-row>
</template>

<script>
import FormItem from '../components/FormItem.vue'

export default {
    components: {
        FormItem
    },
    props: {
        model: {
            type: Object,
            default: () => ({})
        },
        layoutConfig: {
            type: Object,
            default: () => ({})
        },
        formItems: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
    computed: {
        _layoutConfig() {
            const Default = {
                type: 'flex',
                colSpan: 8
            }
            const result = {
                ...Default,
                ...this.layoutConfig
            }

            return result
        }
    },
    mounted() {
    },
    methods: {

    }
}

</script>

<style lang="scss" module="s">

</style>
