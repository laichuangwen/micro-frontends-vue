<template>
    <div :class="s.view"
        v-if="list.length">
        <el-scrollbar>
            <el-menu class="el-menu-vertical"
                :style="{height:$attrs.height?$attrs.height:'auto'}"
                :unique-opened="false"
                v-bind="$attrs"
                @select="select"
                mode="vertical">
                <menu-item v-for="item in list"
                    :key="item.path"
                    :item="item">
                </menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
    components: {
        MenuItem
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        };
    },
    methods: {
        select(path) {
            this.$emit('activeChange', path)
        }
    },
};
</script>
<style>
.el-menu-vertical:not(.el-menu--collapse) {
    width: 201px;
}
</style>
<style lang="scss" module="s">
.view {
    // el-submenu加div 解决 Maximum call stack size exceeded
    :global(.el-menu--collapse > div > .el-submenu > .el-submenu__title span) {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
    }
}
</style>
