<template>

    <div :class="s.view">
        <div :class="[s.wrap]">
            <figure>
                <img :src="src" />
            </figure>
            <transition name="el-fade-in-linear">
                <h1 v-show="!collapse">{{title}}</h1>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        collapse: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Element Admin',
        },
        src: {
            type: String,
            default: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
        }
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" module="s">
.view {
    width: 100%;
    height: 50px;
    display: flex;
}
.wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    figure {
        padding: 16px;
    }
    img {
        width: 32px;
        height: 32px;
    }
    h1 {
        font-weight: 600;
        font-size: 14px;
        margin-left: 8px;
    }
    &.collapse {
        h1 {
            display: none;
        }
    }
}
</style>
