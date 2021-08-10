<template>
    <div :class="s.view">
        <header-top></header-top>
        <div :class="s.content"
            v-loading="loading">
            <div :class="s.left">
                <div ref="side"
                    :class="s.side">
                    <SideItem v-for="item in menus"
                        :key="item.name"
                        :item="item">
                    </SideItem>
                </div>
            </div>
            <div ref="main"
                :class="s.main">
                <slot></slot>å
            </div>
            <div :class="s.right" />
        </div>
    </div>
</template>

<script>
import HeaderTop from './HeaderTop.vue';
import SideItem from './SideItem.vue';
export default {
    componentName: 'DMdWrapper',
    components: {
        HeaderTop,
        SideItem
    },
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        menus: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
        };
    },
    provide() {
        return {
            DMdWrapper: this
        }
    },
    async mounted() {

        if (this.independent) return
        this.$nextTick(() => {

            // const sideEl = this.$refs.side
            // let menuEl = ''

            // scroll content anchor
            // if (location.hash) {
            //     setTimeout(() => {
            //         const anchorEl = document.querySelector(location.hash)
            //         document.scrollingElement.scrollTop = anchorEl.offsetTop - 100
            //     }, 0)
            //     menuEl = sideEl.querySelector(`[href='${location.hash}']`)
            // } else {
            //     // scroll side menu item
            //     menuEl = sideEl.querySelector(`[route=${location.pathname.replace('/', '')}]`)
            // }
            // if (menuEl) {
            //     sideEl.scrollTop = menuEl.offsetTop - sideEl.offsetTop
            // }
        })
    },
    methods: {
        handleCommand(path) {
            location.href = path
        },
        addHeading(anchor) {
            if (anchor) {
                this.anchors.push(anchor)
            }
        },
        removeHeading(anchor) {
            if (anchor) {
                this.anchors.splice(this.anchors.indexOf(anchor), 1)
            }
        }
    }
};
</script>

<style lang="scss" module="s">
$top-height: 65px;
$left-width: 280px;
$main-width: 700px;
$right-width: 195px;
.view {
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
        padding-top: 70px;
    }
}

.content {
    padding-top: 65px;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;

    .left {
        display: flex;
        padding-bottom: 50px;
        overflow: auto;
        background: #f5f7f9;
        z-index: 15;
        border-right: 1px solid #e6ecf1;
    }

    .main {
        padding-bottom: 80px;
        padding-top: 30px;
    }
}

.side {
    position: fixed;
    top: 65px;
    padding-top: 30px;
    width: $left-width;
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    z-index: 15;
    background: #f5f7f9;
}

@media (min-width: 1440px) {
    .left {
        flex: 1 0 auto;
        min-width: $left-width;
        width: calc((100% - 1440px) / 2 + #{$left-width});
        flex-direction: row-reverse;
    }

    .main {
        flex: 0 0 auto;
        width: $main-width;
        margin: 0 0 0 65px;
    }

    .right {
        flex: 1 0 auto;
        min-width: $right-width;
        width: calc((100% - 1440px) / 2 + #{$right-width});
    }
}

@media (max-width: 1440px) {
    .left {
        flex: 1 0 auto;
        width: $left-width;
        max-width: $left-width;
        flex-direction: row-reverse;
    }

    .main {
        flex: 0 0 auto;
        width: $main-width;
        margin: 0 0 0 65px;
    }

    .right {
        flex: 1 0 auto;
        width: calc(100% - 1245px);
    }
}
</style>
