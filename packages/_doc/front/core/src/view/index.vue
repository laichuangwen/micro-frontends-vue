<template>
    <com-layout :menus="menus" :anchor="anchor">
        <router-view></router-view>
    </com-layout>
</template>

<script>
import router from '../router.js';

export default {
    data() {
        return {

        };
    },
    computed: {
        menus() {
            return router;
        },
        anchor() {
            return this.$store.state.menu.anchor;
        },
    },
};
</script>

<style lang="scss" module="s">
</style>
