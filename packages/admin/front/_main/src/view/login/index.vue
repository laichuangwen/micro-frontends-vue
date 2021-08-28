<template>
    <div>
        <el-button type="primary" @click="hanlderLogin">登录进去</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        hanlderLogin() {
            this.$ctx.auth.setToken({
                token: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uY3Vjby5zc28iLCJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJhdWQiOiLotZbliJvmlociLCJqdGkiOiI3MTQ2NjE2MDM3MTg0NjM0ODgiLCJpYXQiOjE2MzAwMjg3MDAsImV4cCI6MTYzMDYzMzUwMH0.ej-Tb9A0tDuHUq-oFSowNIj1lAZDYzGBK_4FzlrvB5M',
                status: 0,
            });
            this.$router.replace('center');
        },
    },
};
</script>

<style lang="scss" module="s">
</style>
