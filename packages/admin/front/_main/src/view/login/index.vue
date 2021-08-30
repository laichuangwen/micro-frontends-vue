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
                token: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uY3Vjby5zc28iLCJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJhdWQiOiLotZbliJvmlociLCJqdGkiOiI3MTc1NjI0MzEyNzM5NTk0MjQiLCJpYXQiOjE2MzAyMjQ4MDIsImV4cCI6MTYzMDgyOTYwMn0.trPC_v1NpLata6-en5kyoXVBlrSJWuHzBzCIlwVXSk0',
                status: 0,
            });
            this.$router.replace('center');
        },
    },
};
</script>

<style lang="scss" module="s">
</style>
