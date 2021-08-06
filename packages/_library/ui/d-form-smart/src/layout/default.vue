<!-- 默认布局 -->
<template>
    <div>
        <FormItem
            v-for="(item, index) in formItems"
            :key="index"
            :item="item"
            :model="model">
            <slot
                v-if="item.slotName"
                :slot="item.slotName"
                :name="item.slotName" />
        </FormItem>
    </div>
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
        formItems: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

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
