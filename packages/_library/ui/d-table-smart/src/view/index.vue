<template>
    <v-main
        ref="table"
        v-bind="$attrs"
        :slots="slots"
        v-on="$listeners" />
</template>

<script>
import VMain from './Main.vue';

export default {
    name: 'DTableSmart',
    components: {
        VMain,
    },
    computed: {
        slots() {
            // 具名插槽列表
            const {
                custom,
                'topbar-tool': topbarTool,
                'topbar-left': topbarLeft,
                ...slotName
            } = this.$scopedSlots;

            return {
                custom,
                topbarTool,
                topbarLeft,
                ...slotName,
            };
        },
    },
    mounted() {
        console.log(this.$attrs);
    },
    methods: {
        search() {
            this.$nextTick(() => {
                this.$refs.table.search();
            });
        },
        refresh() {
            this.$nextTick(() => {
                this.$refs.table.getList();
            });
        },
        clearSelection() {
            this.$nextTick(() => {
                this.$refs.table.clearSelection();
            });
        },
        toggleSelect(...params) {
            this.$nextTick(() => {
                this.$refs.table.toggleSelect(...params);
            });
        },
    },
};
</script>
