<template>
    <div :class="s.setting">
        <div :class="s.item">
            <label>主题色</label>
            <el-color-picker v-model="theme"
                @change="changeTheme"
                :predefine="['#409EFF', '#1890ff', '#304156','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]" />
        </div>
        <div :class="s.item">
            <label>侧边栏 Logo</label>
            <el-switch  @change="changeLogo" v-model="logo" />
        </div>
        <div :class="s.item">
            <label>固定Header</label>
            <el-switch  @change="changeHeader" v-model="fixedHeader" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            theme: '#11a983',
            logo: true,
            fixedHeader: true,
        };
    },
    methods: {
        changeTheme(theme) {
            this.$ctx.theme.updateTheme(theme);
            localStorage.setItem('theme', theme);
        },
        changeLogo(logo) {
            this.$store.dispatch('layout/update', {
                key: 'logo',
                value: logo,
            });
        },
        changeHeader(fixedHeader) {
            this.$store.dispatch('layout/update', {
                key: 'fixedHeader',
                value: fixedHeader,
            });
        },
    },
};
</script>

<style lang="scss" module="s">
.setting {
    padding: 24px;
    .item {
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        label {
            width: 100px;
        }
    }
}
</style>
