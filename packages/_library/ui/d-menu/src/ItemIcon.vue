<template>
    <d-icon v-if="/^icon-/.test(icon)"
        :class="s.icon"
        :src="icon"></d-icon>
    <i v-else
        :class="icon"></i>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" module="s">
.icon {
    color: currentColor;
    width: 24px;
    font-size: 18px;
    margin-right: 5px;
}
</style>
