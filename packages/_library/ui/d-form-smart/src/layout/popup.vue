<!-- 弹窗布局 -->
<template>
    <div>
        <!-- 外面的 -->
        <FormItem
            v-for="(item,index) in formItems.slice(0, _layoutConfig.outsideNum)"
            :key="index"
            :item="item"
            :model="model">
            <slot
                v-if="item.slotName"
                :slot="item.slotName"
                :name="item.slotName" />
        </FormItem>

        <VFilterWrapper
            v-if="popupFormItems.length"
            v-bind="_layoutConfig.filterWrapper"
            :query="model"
            v-on="filterWrapperEvents">
            <template #query>
                <FormItem
                    v-for="(item,index) in popupFormItems"
                    :key="index"
                    :item="item"
                    :model="model"
                    :class="s['popup-form-item']">
                    <slot
                        v-if="item.slotName"
                        :slot="item.slotName"
                        :name="item.slotName" />
                </FormItem>
            </template>
        </VFilterWrapper>
    </div>
</template>

<script>
import VFilterWrapper from '@support/vayne-filter-wrapper';
import FormItem from '../components/FormItem.vue';

export default {
    components: {
        FormItem,
        VFilterWrapper,
    },
    props: {
        model: {
            type: Object,
            default: () => ({}),
        },
        layoutConfig: {
            type: Object,
            default: () => ({}),
        },
        formItems: {
            type: Array,
            default: () => [],
        },
    },
    inject: ['rootCompnent'],
    data() {
        return {

        };
    },
    computed: {
        _layoutConfig() {
            const Default = {
                outsideNum: 1,
            };
            const result = {
                ...Default,
                ...this.layoutConfig,
            };

            return result;
        },
        filterWrapperEvents() {
            const result = {
                'on-reset': this.onReset,
                ...this._layoutConfig.filterWrapper?.on,
            };
            return result;
        },
        popupFormItems() {
            const result = this.formItems.slice(this._layoutConfig.outsideNum, this.formItems.length);
            return result;
        },
    },
    methods: {
        onReset() {
            this.rootCompnent.filterReset();
        },
    },
};

</script>

<style lang="scss" module="s">
.popup-form-item {
    margin-bottom: 16px;
}
</style>
