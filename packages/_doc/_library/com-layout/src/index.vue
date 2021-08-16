<template>
    <el-container>
        <el-header :class="s.header"
            height="65px">
            <header-top></header-top>
        </el-header>
        <el-container :class="s.container">
            <el-aside :class="s.aside">
                <div :class="s.side">
                    <SideItem v-for="item in menus"
                        :key="item.name"
                        :item="item">
                    </SideItem>
                </div>
            </el-aside>
            <el-main :class="s.main">
                <slot></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderTop from './HeaderTop.vue';
import SideItem from './SideItem.vue';

export default {
    components: {
        HeaderTop,
        SideItem,
    },
    props: {
        menus: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" module="s">
$top-height: 65px;
$left-width: 280px;
$main-width: 700px;
$right-width: 195px;
.header {
    padding: 0;
    height: 65px;
}
.container {
    width: 1100px;
    margin: auto;
}
.aside {
    width: 300px;
}
.side {
    position: fixed;
    top: 65px;
    padding-top: 30px;
    width: 300px;
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    z-index: 15;
    background: #f5f7f9;
    border-right: 1px solid #e6ecf1;
}
.main {
    position: relative;
    width: $main-width;
}
</style>
