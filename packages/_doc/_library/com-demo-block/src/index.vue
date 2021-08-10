<template>
    <div
        class="demo-block"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false">
        <slot name="source" />
        <div
            ref="meta"
            class="meta">
            <div
                v-if="$slots.default"
                class="description">
                <slot />
            </div>
            <slot name="highlight" />
        </div>
        <div
            ref="control"
            class="demo-block-control"
            @click="isExpanded = !isExpanded">
            <d-icon :type="isExpanded ? 'arrow-up' : 'arrow-down'" />
            <span>{{ isExpanded ? '隐藏代码' : '显示代码' }}</span>
        </div>
    </div>
</template>

<script>
import 'highlight.js/styles/atom-one-light.css'
export default {
    name: 'DemoBlock',

    props: {
        jsfiddle: Object,
        default() {
            return {}
        }
    },
    data() {
        return {
            hovering: false,
            isExpanded: false
        }
    },

    computed: {

        codeArea() {
            return this.$el.getElementsByClassName('meta')[0]
        },

        codeAreaHeight() {
            if (this.$el.getElementsByClassName('description').length > 0) {
                return this.$el.getElementsByClassName('description')[0].clientHeight +
                    this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
            }
            return this.$el.getElementsByClassName('highlight')[0].clientHeight
        }
    },

    watch: {
        isExpanded(val) {
            this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
        }
    },

    mounted() {
        this.$nextTick(() => {
            const highlight = this.$el.getElementsByClassName('highlight')[0]
            if (this.$el.getElementsByClassName('description').length === 0) {
                highlight.style.width = '100%'
                highlight.borderRight = 'none'
            }
        })
    }
}
</script>

<style lang="scss">
.demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: 0.2s;

    code {
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }

    .source {
        padding: 24px;
    }

    .meta {
        background-color: #fafafa;
        border-top: solid 1px #eaeefb;
        overflow: hidden;
        height: 0;
        transition: height 0.2s;
    }

    .description {
        padding: 20px;
        box-sizing: border-box;
        border: solid 1px #ebebeb;
        border-radius: 3px;
        font-size: 14px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        margin: 10px;
        background-color: #fff;

        p {
            margin: 0;
            line-height: 26px;
        }

        code {
            color: #5e6d82;
            background-color: #e6effb;
            margin: 0 4px;
            display: inline-block;
            padding: 1px 5px;
            font-size: 12px;
            border-radius: 3px;
            height: 18px;
            line-height: 18px;
        }
    }

    .demo-block-control {
        border-top: solid 1px #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;

        > span {
            padding-left: 5px;
            font-size: 14px;
            line-height: 44px;
            transition: 0.3s;
            display: inline-block;
        }

        > svg {
            color: #d3dce6;
            transition: 0.3s;
        }

        &:hover {
            color: #0bb27a;
            background-color: #f9fafc;

            > svg {
                color: #0bb27a;
            }
        }
    }
}
</style>
