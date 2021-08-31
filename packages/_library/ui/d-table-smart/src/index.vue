<script>
import axios from 'axios';
import VTablePlus from '@support/d-table-plus';
import VTopBar from './components/VTopBar.vue';
import VSelection from './components/VSelection.vue';

export default {
    components: {
        VSelection,
        VTopBar,
        VTablePlus,
    },
    props: {
    // 读取响应的键
        keys: {
            type: Object,
            default: () => ({
                list: 'list',
                total: 'total',
                pageCurrent: 'pageCurrent',
                pageSize: 'pageSize',
            }),
        },
        ajax: {
            type: Object,
            default: () => ({
                url: '',
                params: {},
            }),
        },
        // 自定义表头
        headerCustomHide: {
            type: Boolean,
            default: true,
        },
        // 全屏
        fullscreenHide: {
            type: Boolean,
            default: false,
        },
        // 右边工具
        tools: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            loadingTable: false,
            clientWidth: 1200,
            selection: [],
            list: [],
            total: 0,
            pageCurrent: 1,
            pageSize: 10,
            cancelGetList: null,
            customColumns: [],
        };
    },
    computed: {
    // 默认配置
        defaultColumns() {
            const { columns } = this.$attrs;
            if (columns && columns.length) {
                // 多选类型
                return columns.map((item) => {
                    if (item.type === 'selection') {
                        return {
                            // 加上跨页选中，要配合row-key 使用
                            'reserve-selection': true,
                            ...item,
                        };
                    }
                    return item;
                });
            }
            return [];
        },
        // 本地自定义表头
        locationColumns() {
            const col = JSON.parse(localStorage.getItem(location.pathname));
            const selectedColumns = col || [...this.defaultColumns];
            return selectedColumns;
        },
        isSelection() {
            const { columns } = this.$attrs;
            const res = columns.find((item) => item.type === 'selection');
            return !!res;
        },
    },
    mounted() {
        this.customColumns = this.locationColumns;
        this.getList();
        window.addEventListener('resize', this.getClientWidth);
        this.getClientWidth();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getClientWidth);
    },
    render(createElement) {
        const { topbarLeft } = this.$scopedSlots;
        // 处理选中
        const selection = this.isSelection
            ? createElement('VSelection', {
                props: {
                    num: this.selection.length,
                },
                on: {
                    clear: () => this.$refs.table.clearSelection(),
                },
            })
            : '';
        // 处理表格头部
        const topBar = createElement('VTopBar', {
            props: {
                columns: this.defaultColumns,
                selectedColumns: this.customColumns,
                headerCustomHide: this.headerCustomHide,
                fullscreenHide: this.fullscreenHide,
                events: this.tools,
            },
            scopedSlots: {
                left: topbarLeft,
            },
            on: {
                customChange: (val) => {
                    this.customColumns = val;
                    this.$refs.table.doLayout();
                },
            },
        });
        // 处理分页
        const page = createElement('el-pagination', {
            style: {
                marginTop: '24px',
            },
            props: {
                currentPage: this.pageCurrent,
                pageSize: this.pageSize,
                total: this.total,
                background: true,
                pageSizes: [10, 25, 50, 100],
                // 兼容手机端分页
                layout:
          this.clientWidth < 700
              ? 'prev,next,total,jumper'
              : 'prev, pager, next, sizes, slot,total,jumper',
            },
            on: {
                'size-change': this.handleSizeChange,
                'current-change': this.handleCurrentChange,
            },
        });
        // 处理表格
        const table = createElement('VTablePlus', {
            ref: 'table',
            attrs: {
                'row-key': 'id',
                data: this.list,
                border: true,
                stripe: true,
                loading: this.loadingTable,
                ...this.$attrs,
                // 自定义表头选择保存时
                columns: this.customColumns.length
                    ? this.customColumns
                    : this.defaultColumns,
            },
            on: {
                ...this.$listeners,
                'selection-change': this.selectionChange,
            },
            scopedSlots: this.$scopedSlots,
        });
        return createElement('div', {}, [topBar, selection, table, page]);
    },
    methods: {
        search() {
            this.pageCurrent = 1;
            this.getList();
        },
        refresh() {
            this.getList();
        },
        // 表格度
        getClientWidth() {
            this.$nextTick(() => {
                const { clientWidth } = this.$refs.table.$el;
                this.clientWidth = clientWidth;
            });
        },
        handleSizeChange(pageSize) {
            this.pageCurrent = 1;
            this.pageSize = pageSize;
            this.getList();
        },
        handleCurrentChange(pageCurrent) {
            this.pageCurrent = pageCurrent;
            this.getList();
        },
        // 当自定义保存表头后，出错，或者更新提示用户
        selectionChange(selection) {
            this.selection = selection;
            this.$emit('selectionChange', selection);
        },
        async getList() {
            // 主动取消请求
            this.cancelGetList && await this.cancelGetList('cancel');
            const { url, params } = this.ajax;
            if (!url) return;
            // loading
            this.loadingTable = true;
            const form = {
                [this.keys.pageCurrent]: this.pageCurrent,
                [this.keys.pageSize]: this.pageSize,
                ...params,
            };
            this.$ctx.api
                .get(url, {
                    // 主动取消请求
                    cancelToken: new axios.CancelToken((c) => {
                        this.cancelGetList = c;
                    }),
                    params: form,
                })
                .then(async (res) => {
                    this.list = res[this.keys.list];
                    this.total = res[this.keys.total];
                    this.loadingTable = false;
                    this.$emit('search-finish', res);
                    // 处理最后一页分页问题
                    const page = Math.ceil(this.total / this.pageSize);
                    if (this.pageCurrent > page && page > 0) {
                        this.pageCurrent = Math.ceil(this.total / this.pageSize);
                        this.getList();
                    }
                })
                .catch(async (err) => {
                    this.loadingTable = false;
                    console.log(err);
                });
        },
        // table-plus 默认方法
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
