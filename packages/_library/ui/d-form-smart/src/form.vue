<template>
    <div>
        <d-form
            ref="form"
            v-bind="_formProps"
            :class="{
                [s['form--popup']]: layout === 'popup'
            }"
            v-on="$listeners">
            <component
                :is="contentComponent"
                v-bind="contentComponentProps">
                <slot
                    v-for="slot in Object.keys($slots)"
                    :slot="slot"
                    :name="slot" />
            </component>
        </d-form>
    </div>
</template>

<script>
import { grid as LayoutGrid, Default as LayoutDefault, popup as LayoutPopup } from './layout';

// 布局枚举，key 是 layout 属性的值，value 是组件名称
const layoutEnums = {
    grid: 'LayoutGrid',
    popup: 'LayoutPopup',
};

export default {
    components: {
        LayoutGrid,
        LayoutDefault,
        LayoutPopup,
    },
    props: {
        formItems: {
            type: Array,
            default: () => [],
        },
        layout: {
            type: String,
            default: null,
            validator: (value) => {
                const enums = Object.keys(layoutEnums);
                if (enums.includes(value)) {
                    return true;
                }
                throw new Error(`layout参数只能是 [${enums.join(',')}] 其中一个`);
            },
        },
        layoutConfig: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
        };
    },
    computed: {
        _formItems() {
            const Default = {
                type: 'd-input',
            };

            // 先过滤掉需要隐藏的 item
            const result = this.formItems.filter((item) => !item.hide).map((item) => {
                item = {
                    ...Default,
                    ...item,
                };
                return item;
            });

            return result;
        },
        _formProps() {
            const Default = {};
            if (this.layout === 'popup') {
                // 布局模式为弹窗 则表单的 inline 属性默认为 true
                Default.inline = true;
            }

            const result = {
                ...Default,
                ...this.$attrs,
            };
            return result;
        },
        contentComponent() {
            const result = layoutEnums[this.layout] || 'LayoutDefault';
            return result;
        },
        contentComponentProps() {
            let result = {};
            switch (this.layout) {
            case 'grid':
            case 'popup':
                result = {
                    model: this._formProps.model,
                    layoutConfig: this.layoutConfig,
                    formItems: this._formItems,
                };
                break;
            default:
                result = {
                    model: this._formProps.model,
                    formItems: this._formItems,
                };
                break;
            }
            return result;
        },
    },
    methods: {
        // 对整个表单进行校验的方法
        validate(...props) {
            return this.$refs.form.validate(...props);
        },
        // 对部分字段进行校验
        validateField(...props) {
            return this.$refs.form.validateField(...props);
        },
        // 对整个表单进行重置
        resetFields() {
            this.$refs.form.resetFields();
        },
        // 移除表单项的校验结果
        clearValidate(...props) {
            this.$refs.form.clearValidate(...props);
        },
    },
};

</script>

<style lang="scss" module="s">
.form--popup {
    [class*=form-item] {
        margin-bottom: 0 !important;
    }
}
</style>
