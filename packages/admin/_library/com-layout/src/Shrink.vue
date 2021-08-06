<template>
    <div :class="[s.shrink,collapse?s.active:'']"
        @click="toggleClick">
        <i class="el-icon-s-fold"
            :class="s.icon"></i>
        <!-- <svg t="1626943998931"
            :class="s.icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5364"
            width="18"
            height="18">
            <path d="M944.191 698.51H452.994c-26.458 0-47.76-20.469-47.76-53.073s21.302-53.02 47.76-53.02H944.19c26.459 0 47.813 20.415 47.813 53.02S970.65 698.51 944.19 698.51z m0-266.927H452.994c-26.458 0-47.76-20.522-47.76-53.125 0-32.604 21.302-53.022 47.76-53.022H944.19c26.459 0 47.813 20.417 47.813 53.022 0 32.603-21.354 53.125-47.813 53.125z m-4.74-266.824H81.276c-28.959 0-49.271-20.468-49.271-53.072s20.313-53.02 49.27-53.02h858.179c28.906 0 52.55 20.415 52.55 53.02 0 32.604-23.645 53.072-52.551 53.072z m-640.78 533.803V325.75L32.628 512.208l266.043 186.354zM81.275 859.188h858.178c28.906 0 52.55 20.468 52.55 53.02 0 32.604-23.644 53.127-52.55 53.127H81.275c-28.959 0-49.271-20.523-49.271-53.127-0.001-32.552 20.312-53.02 49.27-53.02z m0 0"
                p-id="5365"></path>
        </svg> -->
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
            return this.$store.state.layout
        },
        menu() {
            return this.layout.menu
        },
        width() {
            return this.layout.width
        },
        collapse: {
            set(value) {
                this.$store.dispatch('layout/menu/update', {
                    key: 'collapse',
                    value
                })
            },
            get() {
                return this.menu.collapse
            },
        }
    },
    methods: {
        toggleClick() {
            this.$store.dispatch('layout/menu/setCollapse', !this.collapse)
            // if (this.width < 900) {
            //     // 小屏幕，先
            //     this.collapse = false
            //     this.$store.dispatch('layout/menu/update', {
            //         key: 'drawer',
            //         value: !this.collapse
            //     })
            // } else {
            //     this.collapse = !this.collapse
            // }

        }
    }
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
