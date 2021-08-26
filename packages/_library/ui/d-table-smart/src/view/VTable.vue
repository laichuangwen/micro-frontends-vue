<script>
export default {
    props: {
        slots: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
        };
    },
    render(createElement) {
        console.log('table_arrts', this.$attrs);
        console.log('table_scopedSlots', this.$scopedSlots);
        const { columns = [] } = this.$attrs;
        const tableColumn = columns.map((item) => createElement('el-table-column', {
            props: {
                ...item,
            },
            scopedSlots: {
                default: this.$scopedSlots[item.slotName] || '',
            },
        }));
        return createElement('el-table', {
            props: {
                ...this.$attrs,
            },
        }, [...tableColumn]);
    },
};
</script>

<style lang="scss" module="s">
</style>
