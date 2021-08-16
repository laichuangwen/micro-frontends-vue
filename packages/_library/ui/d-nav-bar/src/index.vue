<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :key="item.path"
            v-for="item in list">{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    props: {
        list: {
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
</style>
