<template>
    <svg
        :class="classes"
        :style="style"
        aria-hidden="true"
        v-on="eventHandle">
        <use :xlink:href="`#${icon}`" />
    </svg>
</template>

<script>
import './loadCommonIcon'
export default {
    name: 'DIcon',
    props: {
        color: String,
        rotate: { // 是否旋转
            type: Boolean,
            default: false
        },
        rotateDuration: { // 旋转周期
            type: Number,
            default: 1
        },
        pointer: { // 悬停 是否有可点击样式
            type: Boolean,
            default: false
        },
        disabled: { // 是否禁用
            type: Boolean,
            default: false
        }
    },
    computed: {
        icon() {
            const icon = this.$attrs.src || this.$attrs.type
            if (typeof icon === 'object') {
                return icon.default.id
            }
            if (typeof icon === 'string') {
                return icon.startsWith('icon-') ? icon : `icon-${icon}`
            }
        },
        style() {
            const style = {}
            if (this.color) {
                style.color = this.color
            }
            if (this.rotate && this.rotateDuration) {
                style.animation = `${this.s.rotate} ${this.rotateDuration}s infinite linear`
            }
            if (this.pointer) {
                style.cursor = 'pointer'
            }
            if (this.disabled) {
                style.cursor = 'not-allowed'
            }
            return style
        },
        classes() {
            const classes = [this.s.icon]
            if (this.rotate) {
                classes.push(this.s.rotate)
            }
            return classes
        },
        eventHandle() {
            return {
                ...this.$listeners,
                click: this.clickHandle // 重写click => disabled 时阻止向外传递
            }
        }
    },
    methods: {
        clickHandle(event) {
            if (!this.disabled) {
                this.$emit('click', event)
            }
        }
    }
}
</script>

<style lang="scss" insertbefore module="s">
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    // color: $color-icon;
    color: #80848f;
    font-size: 16px;
    user-select: none;

    &:focus {
        outline: none;
    }

    &.rotate {
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }
}
</style>
