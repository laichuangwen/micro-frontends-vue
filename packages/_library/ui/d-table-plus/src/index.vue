<script>
export default {
    data() {
        return {};
    },
    render(createElement) {
        const { columns = [] } = this.$attrs;
        // 加上递归
        const tableColumn = (item) => createElement('el-table-column', {
            props: {
                ...item,
            },
            scopedSlots: {
                default: this.$scopedSlots[item.slotName] || '',
                header: this.$scopedSlots[item.slotHeaderName] || '',
            },
        }, [item.children && item.children.length && item.children.map((list) => tableColumn(list))]);
        return createElement(
            'el-table',
            {
                ref: 'table',
                props: {
                    headerRowClassName: 'custom-table-header',
                    ...this.$attrs,
                },
                on: {
                    ...this.$listeners,
                },
            },
            [...columns.map((item) => tableColumn(item))],
        );
    },
    methods: {
        clearSelection() {
            this.$refs.table.clearSelection();
        },
        toggleRowSelection(row, selected) {
            this.$refs.table.toggleRowSelection(row, selected);
        },
        toggleAllSelection() {
            this.$refs.table.toggleRowSelection();
        },
        toggleRowExpansion(row, expanded) {
            this.$refs.table.toggleRowExpansion(row, expanded);
        },
        setCurrentRow(row) {
            this.$refs.table.setCurrentRow(row);
        },
        clearSort() {
            this.$refs.table.clearSort();
        },
        clearFilter(columnKey) {
            this.$refs.table.clearFilter(columnKey);
        },
        doLayout() {
            this.$refs.table.clearFilter();
        },
        sort(prop, order) {
            this.$refs.table.sort(prop, order);
        },
    },
};
</script>

<style lang="scss" module="s"></style>
