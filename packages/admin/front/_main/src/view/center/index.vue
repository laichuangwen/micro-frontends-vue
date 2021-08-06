<template>
    <div>
        应用中心页
        <el-button type="primary"
            @click="$router.push('/bms').catch(()=>{})">bms系统</el-button>
        <el-button type="primary"
            @click="$router.push('/rbac').catch(()=>{})">rbac系统</el-button>
        <el-button type="primary"
            @click="$router.push('/operation').catch(()=>{})">operation系统</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    }
};
</script>

<style lang="scss" module="s">
</style>
