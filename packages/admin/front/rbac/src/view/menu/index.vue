<template>
    <div :class="s.view">
        menu
        <el-button type="primary"
            @click="jump">跳转</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        jump() {
            // hyperlink.open('/vue')
            history.pushState(null, '/bms', '/bms');
        },
    },
};
</script>

<style lang="scss" module="s">
.view {
    height: 1500px;
}
</style>
