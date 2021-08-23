<template>
    <el-dropdown
        :class="s.dropdown"
        @command="data.event">
        <span>
            {{ activeItem && activeItem.label || data.title }}
            <d-icon
                type="arrow-down"
                :class="s.icon" />
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
                v-for="(item,index) in data.options"
                :key="index"
                :class="item.value === activeItem && activeItem.value ? s.active : ''"
                :command="item.value">
                {{ item.label }}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({
                type: '',
                options: [],
                event: () => {},
                activeRule: () => {

                },
            }),
        },
    },
    computed: {
        activeItem() {
            const active = this.data.options.find((item) => this.data.activeRule(item));
            return active;
        },
    },
};
</script>

<style lang='scss' module='s'>
.dropdown {
    font-size: 12px;
}

.active {
    color: $color-primary;
}

.icon{
    font-size: 12px;
}
</style>
