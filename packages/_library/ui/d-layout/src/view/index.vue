<template>
    <el-container :class="s.view">
        <el-drawer v-if="width<900"
            :visible.sync="drawerShow"
            direction="ltr"
            size="200px"
            :wrapperClosable="true"
            :with-header="false">
            <el-aside width="auto">
                <slot name="aside"></slot>
            </el-aside>
        </el-drawer>
        <el-aside v-else
            width="auto">
            <slot name="aside"></slot>
        </el-aside>
        <el-container :class="s.container">
            <el-header v-if="fixedHeader"
                height="50px">
                <slot name="header"></slot>
            </el-header>
            <el-main v-loading="loading">
                <el-header v-if="!fixedHeader"
                    height="50px">
                    <slot name="header"></slot>
                </el-header>
                <div :class="s.main"
                    v-show="!view.type">
                    <slot></slot>
                </div>
                <!-- 提示视图 -->
                <Tip v-if="view.type"
                    :type="view.type"
                    :title="view.title"
                    :tip="view.tip"
                    :back="view.back" />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Tip from './Tip.vue';

export default {
    components: {
        Tip,
    },
    props: {
        drawer: {
            type: Boolean,
            default: false,
        },
        fixedHeader: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        view: {
            type: Object,
            default: () => ({
                type: '', // enum: 空显示router-view denied显示未授权 deleted显示被删除
                title: '', // 提示标题
                tip: '', // 提示语
                back: true, // 是否显示
            }),
        },
    },
    data() {
        return {
            width: 1366,
        };
    },
    computed: {
        drawerShow: {
            set(value) {
                this.$emit('update:drawer', value);
            },
            get() {
                return this.drawer;
            },
        },
    },
    beforeMount() {
        window.addEventListener('resize', this.resizeHandler);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
    },
    mounted() {
        this.resizeHandler();
    },
    methods: {
        resizeHandler() {
            const resize = document.body.getBoundingClientRect();
            this.width = resize.width;
            this.$emit('resizeChange', resize);
        },
    },
};
</script>

<style lang="scss" module="s">
.view {
    :global(.el-header) {
        padding: 0 !important;
    }
    :global(.el-main) {
        padding: 0 !important;
    }
    .container {
        height: 100vh;
    }
    .main {
        padding: 24px;
    }
}
</style>
