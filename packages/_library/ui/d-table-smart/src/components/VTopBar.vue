<template>
    <div :class="s.topBar">
        <div :class="s.left">
            <slot name="left" />
        </div>
        <div :class="s.right">
            <v-table-tool :events="list"></v-table-tool>
        </div>
         <v-table-custom
          ref="custom"
          :resetShow="resetShow"
          :columns="columns"
          @reset="reset"
          @save="save"
        ></v-table-custom>
    </div>
</template>

<script>
import VTableTool from '@support/d-table-tool';
import VTableCustom from '@support/d-table-custom';

export default {
    components: {
        VTableTool,
        VTableCustom,
    },
    props: {
        events: {
            type: Array,
            default: () => [],
        },
        columns: {
            type: Array,
            default: () => [],
        },
        selectedColumns: {
            type: Array,
            default: () => [],
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
    },
    data() {
        return {
            fullscreen: false,
            resetShow: false,
        };
    },
    mounted() {
        this.resetShow = !!localStorage.getItem(location.pathname);
    },
    computed: {
        list() {
            return [
                {
                    title: !this.fullscreen ? '全屏' : '退出全屏',
                    icon: !this.fullscreen ? 'expansion' : 'shrink',
                    event: () => {
                        this.fullscreen = !this.fullscreen;
                        // 微前端微应用专属的store，触发主应用
                        this.$ctx._mainApp && this.$ctx._mainApp.setGlobalState({
                            mainFullscreen: this.fullscreen,
                        });
                        this.$emit('fullscreen', this.fullscreen);
                    },
                    hide: this.fullscreenHide,
                },
                {
                    title: '表头',
                    icon: 'table-custom',
                    event: () => {
                        this.$refs.custom.open(this.selectedColumns);
                    },
                    hide: this.headerCustomHide,
                },
                ...this.events,
            ].filter((item) => !item.hide);
        },
    },
    methods: {
        save(columns) {
            this.resetShow = true;
            localStorage.setItem(location.pathname, JSON.stringify(columns));
            this.$emit('customChange', columns);
        },
        reset() {
            localStorage.removeItem(location.pathname);
            this.resetShow = false;
            this.$emit('customChange', this.columns);
        },
    },
};
</script>

<style lang="scss" module="s">
.topBar {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .left {
        display: inline-flex;
        align-items: center;
    }

    .right {
        display: inline-flex;
        align-items: center;

        .button {
            padding-top: 0;
            padding-bottom: 0;
            border-right: 1px solid #e1e6eb;

            &:first-child {
                border-left: 1px solid #e1e6eb;
            }
        }
    }
}
</style>
