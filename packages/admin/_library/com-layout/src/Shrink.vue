<template>
    <div :class="[s.shrink,collapse?s.active:'']"
        @click="toggleClick">
        <i class="el-icon-s-fold"
            :class="s.icon"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    computed: {
        layout() {
            return this.$store.state.layout;
        },
        menu() {
            return this.layout.menu;
        },
        width() {
            return this.layout.width;
        },
        collapse: {
            set(value) {
                this.$store.dispatch('layout/menu/update', {
                    key: 'collapse',
                    value,
                });
            },
            get() {
                return this.menu.collapse;
            },
        },
    },
    methods: {
        toggleClick() {
            this.$store.dispatch('layout/menu/setCollapse', !this.collapse);
        },
    },
};
</script>

<style lang="scss" module="s">
.shrink {
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #fbfbfb;
    }
    &.active {
        transform: rotate(180deg);
    }
    .icon {
        font-size: 24px;
        color: $color-primary;
    }
}
</style>
