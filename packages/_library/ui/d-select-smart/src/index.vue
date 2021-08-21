<script>
export default {
    name: 'DSelectSmart',
    props: {
        value: {
            type: [Number, String, Array],
            defalut: null,
        },
        type: {
            type: String,
            default: '',
            validator: (value) => {
                const candidateValue = ['', 'group'];
                if (candidateValue.includes(value)) {
                    return true;
                }
                throw new Error(`可选值必须是'${candidateValue.toString()}'其中一个`);
            },
        },
        autoFetch: {
            type: Boolean,
            default: true,
        },
        ajax: {
            type: Object,
            default: () => ({
                url: '',
                params: {},
            }),
        },
        list: {
            type: Array,
            default: () => [],
        },

        // 接口请求options，读取响应的键
        listKey: {
            type: String,
            default: null,
        },
        defaultProps: {
            type: Object,
            default: () => ({
                children: 'children',
                label: 'label',
                value: 'value',
            }),
        },
        interceptors: {
            type: Object,
            default: () => ({
                // 获取options成功
                then: (res) => res,
                // 获取options失败
                catch: (err) => err,
            }),
        },
    },
    data() {
        return {
            loading: false,
            reqList: [],
            value1: this.value,
        };
    },
    computed: {
        options() {
            // 如果外层传入list 优先取list
            return this.list.length ? this.list : this.reqList;
        },
    },
    watch: {
        ajax: {
            deep: true,
            handler() {
                if (!this.autoFetch) return;
                this.getOptions();
            },
        },
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            if (this.autoFetch) {
                await this.getOptions();
            }
        },
        async getOptions() {
            if (!this.ajax.url) return;

            try {
                this.loading = true;
                // 处理默认赋值不回现,临时处理方式
                const va = this.value;
                this.$emit('input', '');
                let res = await this.$ctx.api.request(this.ajax);
                if (this.interceptors.then) {
                    res = await this.interceptors.then(res);
                }
                // 有时候返回并不死一个数组的情况价格listKey
                this.reqList = this.listKey ? res[this.listKey] : res;
                this.loading = false;
                // 处理默认赋值不回现,临时处理方式
                setTimeout(() => {
                    this.$emit('input', va);
                });
            } catch (err) {
                this.loading = false;
                if (this.interceptors.catch) {
                    // eslint-disable-next-line no-ex-assign
                    err = this.interceptors.catch(err);
                }
            }
        },
        focus() {
            this.$refs.select.focus();
        },
        blur() {
            this.$refs.select.blur();
        },
    },
    render(createElement) {
    // 父级slots
        const slots = Object.keys(this.$slots).map((slotName) => createElement(
            'template',
            {
                slot: slotName,
            },
            this.$slots[slotName],
        ));
        // el-option
        const elOption = (item) => createElement('el-option', {
            props: {
                ...item,
                label: item[this.defaultProps.label],
                value: item[this.defaultProps.value],
            },
            key: item[this.defaultProps.value],
        });
        // el-select
        const com = createElement(
            'el-select',
            {
                ref: 'select',
                props: {
                    clearable: true,
                    ...this.$attrs,
                    loading: this.loading,
                    value: this.value,
                },
                on: {
                    input: (val) => {
                        this.$emit('input', val);
                    },
                    ...this.$listeners,
                },
            },
            [
                // 默认插槽
                ...slots,
                ...this.options.map((item) => {
                    if (this.type === 'group') {
                        // 分组
                        return createElement(
                            'el-option-group',
                            {
                                props: {
                                    ...item,
                                    label: item[this.defaultProps.label],
                                    value: item[this.defaultProps.value],
                                    options: item.children,
                                },
                            },
                            item.children && item.children.map((list) => elOption(list)),
                        );
                    }
                    // 没有分组
                    return elOption(item);
                }),
            ],
        );
        return com;
    },
};
</script>

<style lang="scss" module="s"></style>
