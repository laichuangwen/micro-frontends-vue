<script>
import VEmpty from './empty.vue';

export default {
    components: {
        VEmpty,
    },
    data() {
        return {
            loading: {},
        };
    },
    mounted() {
        this.loading = this.$loading({
            lock: true,
            customClass: this.s.customLoding,
            text: this.$attrs.loadingText || '加载中',
            spinner: 'el-icon-loading',
            target: document.querySelector('.el-table__body-wrapper'),
        });
    },
    render(createElement) {
        const { columns = [] } = this.$attrs;
        // 加载
        this.$nextTick(() => {
            if (this.$attrs.loading === undefined) {
                this.loading.close();
            } else {
                this.loading.visible = this.$attrs.loading;
            }
        });
        const slots = createElement('VEmpty', {
            slot: 'empty',
            props: {
                text: this.$attrs.emptyText,
                loading: this.$attrs.loading,
            },
        });
        // 加上递归
        const tableColumn = (item) => createElement(
            'el-table-column',
            {
                props: {
                    ...item,
                },
                scopedSlots: {
                    default: this.$scopedSlots[item.slotName] || '',
                    header: this.$scopedSlots[item.slotHeaderName] || '',
                },
            },
            [
                item.children
            && item.children.length
            && item.children.map((list) => tableColumn(list)),
            ],
        );
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
                scopedSlots: {
                    append: this.$scopedSlots.append,
                },
            },
            [slots, ...columns.map((item) => tableColumn(item))],
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

<style lang="scss" module="s">
.customLoding {
  right: 1px;
  bottom: 1px;
}
</style>
