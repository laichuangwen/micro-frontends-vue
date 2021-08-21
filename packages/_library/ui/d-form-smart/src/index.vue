<script>
export default {
    props: {
        model: {
            type: Object,
            default: () => {},
        },
        rowItems: {
            type: Array,
            default: () => [],
        },
        formItems: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {};
    },
    methods: {
        // 处理v-modelv value 值
        hanlderValue(prop) {
            // 时间范围选择组件处理
            if (Array.isArray(prop) && prop.length > 0) {
                const [first] = prop;
                if (this.model[first]) {
                    const data = prop.map((key) => this.model[key]);
                    return data;
                }
                return [];
            }
            return this.model[prop];
        },
        // 处理FormItem绑定值
        hanlderFormItemProp(prop) {
            // 时间范围选择组件处理
            if (Array.isArray(prop) && prop.length > 0) {
                // 处理时间范围选择的
                const [first] = prop;
                return first;
            }
            return prop;
        },
        // 处理改变值
        hanlderModel(prop, value) {
            // 时间范围选择组件处理
            if (prop && Array.isArray(prop)) {
                prop.forEach((key, index) => {
                    this.model[key] = value[index];
                });
            } else {
                this.model[prop] = value;
            }
        },
        validate(...props) {
            console.log('校验', this.$refs.form);
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
    render(createElement) {
        // 父级slots
        // form-item label slot
        const slotLabel = (slotName) => createElement(
            'template',
            {
                slot: 'label',
            },
            this.$slots[slotName],
        );
        // formItem 组件
        const formItem = (item) => createElement(
            'el-form-item',
            {
                props: {
                    ...item,
                    prop: this.hanlderFormItemProp(item.prop),
                },
                scopedSlots: {
                    error: (prop) => this.$scopedSlots[item.slotErrorName] && this.$scopedSlots[item.slotErrorName](prop),
                },
            },
            [
                // 加入label插槽
                item.slotLabelName ? slotLabel(item.slotLabelName) : '',
                // 有插槽优先
                item.slotName ? this.$slots[item.slotName] : createElement(item.type || 'el-input', {
                    //
                    attrs: {
                        ...item.props,
                    },
                    props: {
                        clearable: true,
                        ...item.props,
                        value: this.hanlderValue(item.prop),
                    },
                    // 加样式
                    style: {
                        width: '210px',
                        ...(item.props && item.props.style),
                    },
                    on: {
                        change: (value) => {
                            this.hanlderModel(item.prop, value);
                        },
                        // el-input 场景
                        input: (value) => {
                            this.hanlderModel(item.prop, value);
                        },
                    },
                }),
            ],
        );
        // col 组件
        const col = (item) => createElement('el-col', {
            props: {
                ...item,
            },
        }, item.formItem ? [formItem(item.formItem)] : '');
        // row组件
        const row = (item) => createElement('el-row', {
            props: {
                ...item,
            },
        }, item.cols.map((list) => col(list)));
        return createElement(
            'el-form',
            {
                ref: 'form',
                props: {
                    ...this.$attrs,
                    model: this.model,
                },
                on: {
                    ...this.$listeners,
                },
            },
            // rowItems 优先
            this.rowItems.length ? this.rowItems.map((item) => row(item)) : this.formItems.map((item) => formItem(item)),
        );
    },
};
</script>

<style lang="scss" module="s"></style>
