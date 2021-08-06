<template>
    <d-layout :drawer.sync="drawer"
        :view="view"
        :loading="loading"
        :fixedHeader="fixedHeader"
        @resizeChange="resizeChange">
        <template #aside>
            <sys-logo v-if="logo"
                :collapse="menu.collapse"></sys-logo>
            <d-menu :height="logo?'calc(100vh - 50px)':'100vh'"
                :default-active="$route.path"
                @activeChange="activeChange"
                v-bind="menu"
                :list="subMenus">
            </d-menu>
        </template>
        <template #header>
            <div :class="s.header">
                <div :class="s.left">
                    <shrink></shrink>
                    <d-nav-bar :list="navs"></d-nav-bar>
                </div>
                <personal></personal>
            </div>
        </template>
        <d-right-panel>
            <setting></setting>
        </d-right-panel>
        <slot></slot>
    </d-layout>
</template>

<script>
import Setting from './Setting.vue';
import Shrink from './Shrink.vue';
import SysLogo from './SysLogo.vue';
import Personal from './Personal.vue';

export default {
    components: {
        Setting,
        Shrink,
        SysLogo,
        Personal
    },
    props: {
        loading: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {

        };
    },
    computed: {
        // 小屏幕
        drawer: {
            set(value) {
                this.$store.dispatch('layout/menu/update', {
                    key: 'drawer',
                    value
                })
            },
            get() {
                return this.menu.drawer
            }
        },
        layout() {
            return this.$store.state.layout
        },
        menu() {
            return this.layout.menu
        },
        view() {
            return this.layout.view
        },
        width() {
            return this.layout.width
        },
        fixedHeader() {
            return this.layout.fixedHeader
        },
        logo() {
            return this.layout.logo
        },
        firstSubMenu() {
            return this.$store.state.menu.firstSubMenu
        },
        rootMenus() {
            return this.$store.state.menu.rootMenus
        },
        subMenus() {
            return this.$store.state.menu.subMenus
        },
        navs() {
            return this.$store.state.menu.navs
        },
    },
    methods: {
        resizeChange({ width }) {
            // 存宽度
            this.$store.dispatch('layout/update', {
                key: 'width',
                value: width
            })
            // 收缩menu
            this.$store.dispatch('layout/menu/setCollapse', false)
        },
        activeChange(url) {
            // 跳转
            history.pushState(null, url, url)
            // 当小屏点击会自动隐藏
            if (this.width < 900) {
                this.$store.dispatch('layout/menu/setCollapse', false)
            }
        }
    }
};
</script>


<style lang="scss" module="s">
.header {
    padding: 0 !important;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
}
.loading {
    position: absolute;
    height: 100%;
    width: 100%;
}
</style>

