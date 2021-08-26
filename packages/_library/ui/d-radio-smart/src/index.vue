<script>
export default {
    name: 'DRadioSmart',
    props: {
        value: {
            type: [Number, String],
            defalut: null,
        },
        type: {
            type: String,
            default: '',
            validator: (value) => {
                const candidateValue = ['', 'button'];
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
                let res = await this.$ctx.api.request(this.ajax);
                if (this.interceptors.then) {
                    res = await this.interceptors.then(res);
                }
                // 有时候返回并不是一个数组的情况价格listKey
                this.reqList = this.listKey ? res[this.listKey] : res;
                this.loading = false;
            } catch (err) {
                this.loading = false;
                if (this.interceptors.catch) {
                    // eslint-disable-next-line no-ex-assign
                    err = this.interceptors.catch(err);
                }
            }
        },
    },
    render(createElement) {
        // el-radio
        // el-radio-group
        const optionsName = this.type === 'button' ? 'el-radio-button' : 'el-radio';
        const com = createElement(
            'el-radio-group',
            {
                props: {
                    ...this.$attrs,
                    value: this.value,
                },
                on: {
                    input: (val) => {
                        this.$emit('input', val);
                    },
                    ...this.$listeners,
                },
            },
            this.options.map((item) => createElement(optionsName, {
                props: {
                    ...item,
                    label: item[this.defaultProps.value],
                    ...this.$attrs.options,
                },
                key: item[this.defaultProps.value],
            }, item[this.defaultProps.label])),
        );
        return com;
    },
};
</script>

<style lang="scss" module="s"></style>
