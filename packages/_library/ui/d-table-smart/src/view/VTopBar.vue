<template>
    <div :class="s.topBar">
        <div :class="s.left">
            <slot name="left" />
        </div>
        <div :class="s.right">
            <slot name="right" />
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" module="s">
.topBar {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .left {
        display: inline-flex;
        align-items: center;
    }

    .right {
        display: inline-flex;
        align-items: center;

        .button {
            padding-top: 0;
            padding-bottom: 0;
            border-right: 1px solid #e1e6eb;

            &:first-child {
                border-left: 1px solid #e1e6eb;
            }
        }
    }
}
</style>
