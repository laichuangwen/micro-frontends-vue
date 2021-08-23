<template>
    <transition
        :enter-class="s['transition-enter']"
        :leave-class="s['transition-leave']"
        :enter-active-class="s['transition-enter-active']"
        :leave-active-class="s['transition-leave-active']">
        <div
            v-show="show"
            ref="column"
            v-clickoutside="close"
            :class="s.customColumn"
            :style="{ top: `${top}px` }">
            <div :class="s.columnFooter">
                <el-button
                    type="text"
                    @click="close">
                    取消
                </el-button>
                <el-button
                    type="primary"
                    @click="submit">
                    保存
                </el-button>
            </div>
            <div :class="s.columnContent">
                <h3 :class="s.title">
                    已显示表头
                    <span :class="s.tips">
                        可<span :class="s.active">拖拽</span>表头调整显示顺序
                    </span>
                </h3>
                <Draggable
                    v-model="selected"
                    :class="s.tags">
                    <div
                        v-for="(item, index) of selected"
                        :key="index"
                        :class="[s.tag, {
                            [s.disabled]: item.required
                        }]">
                        {{ item.label }}
                        <span
                            :class="s.close"
                            @click="deleteHandle(item,index)">
                            <d-icon
                                type="close"
                                :class="s.closeIcon" />
                        </span>
                    </div>
                </Draggable>
                <el-divider />
                <template v-if="!!unselected.length">
                    <h3 :class="s.title">
                        未选择表头
                    </h3>
                    <div :class="s.tags">
                        <div
                            v-for="(item, index) in unselected"
                            :key="index"
                            :class="s.btn_wrap">
                            <div
                                :class="s.float"
                                @click="addHandle(item,index)">
                                + 添加
                            </div>
                            <el-button
                                :class="s.add"
                                type="cancel">
                                {{ item.label }}
                            </el-button>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </transition>
</template>

<script>
import Draggable from 'vuedraggable';
import Clickoutside from './clickoutside.js';

export default {
    name: 'DTableCustom',
    components: {
        Draggable,
    },
    directives: {
        Clickoutside,
    },
    props: {
        columns: { // 表格所有的列
            type: Array,
            default: () => [],
        },
        min: {
            type: Number,
            default: 3,
        },
        max: {
            type: Number,
            default: 50,
        },
        offsetTop: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            show: false,
            selected: [],
            top: 0,
            extraColumn: [], // 不可操作但又必须展示的列，如：操作
            dynamicColumns: [],
        };
    },
    computed: {
        unselected() {
            const labels = this.selected.map((item) => item.label);
            const extraLabel = this.extraColumn.map((item) => item.label);
            const unselected = this.dynamicColumns.filter((item) => !labels.includes(item.label) && !extraLabel.includes(item.label));
            return unselected;
        },
    },
    watch: {
        columns: {
            immediate: true,
            handler(value) {
                this.$set(this, 'dynamicColumns', value);
            },
        },
    },
    mounted() {
        this.getOffsetTop();
    },
    methods: {
        open(selected = []) {
            this.show = true;
            const extraColumn = this.dynamicColumns.filter((item) => item.label === '操作');
            const extraLabel = extraColumn.map((item) => item.label);
            this.extraColumn = extraColumn;
            let columns = selected;
            if (!selected.length) {
                columns = [...this.columns];
            }
            this.selected = columns.filter((item) => !extraLabel.includes(item.label));
        },
        getOffsetTop() {
            // parentNode 可能会较久加载出来，故计算时间延迟 1s
            setTimeout(() => {
                // 容器高度 + margin-bottom + 偏移距离
                this.top = this.$refs.column.parentNode.offsetHeight + 16 + this.offsetTop;
            }, 1000);
        },
        // 选中字段处理
        addHandle(item) {
            const { max } = this;
            if (this.selected >= max) {
                this.$message.warning(`显示字段不能超过${max}个`);
                return;
            }
            this.selected.push(item);
        },
        // 删除选中处理
        deleteHandle(item, index) {
            if (this.selected.length <= this.min) {
                this.$message.warning(`显示字段不能少于${this.min}个`);
                return;
            }
            this.selected.splice(index, 1);
        },
        async submit() {
            const selected = [
                ...this.selected,
                ...this.extraColumn,
            ];
            this.$emit('save', selected);
            this.show = false;
        },
        close() {
            this.show = false;
        },
    },
};
</script>

<style module="s" lang="scss">
.customColumn {
    z-index: 999;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #f5f8fa;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    height: 400px;
    border-top: 1px solid $color-divider;

    .title {
        font-size: 16px;
        color: #495060;

        .headImg {
            font-size: 12px;
            margin-left: 11px;

            span:last-child {
                padding-left: 0;
            }

            &::after {
                content: "";
                width: 1px;
                height: 16px;
                margin-left: 8px;
                padding-left: 2px;
                background: $color-border;
                font-size: 12px;
            }
        }

        .tips {
            margin-left: 8px;
            color: #80848f;
            font-size: 12px;

            .active {
                color: #f90;
            }
        }
    }
}

.columnContent {
    height: 400px;
    overflow-y: auto;
    padding: 24px 16px 100px;
}

.columnFooter {
    border-top: 1px solid #e1e6eb;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 64px;
    width: 100%;
    z-index: 999;
    background-color: #f5f8fa;
    line-height: 64px;
    text-align: right;
    padding: 0 24px;
}

.btn {
    float: left;
    margin: 16px 16px 0 0;
}

.tags {
    overflow: hidden;

    .tips {
        margin-top: 16px;
    }

    &::after {
        display: block;
        clear: both;
        content: "";
    }

    > p {
        font-size: 14px;
        color: $color-title;
        margin-bottom: 16px;
    }

    .center {
        color: $color-sub;
        text-align: center;
    }

    > .btn_wrap {
        float: left;
        position: relative;
        margin: 16px 16px 0 0;

        .float {
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            line-height: 32px;
            text-align: center;
            border-radius: 2px;
            color: #fff;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.5);
            left: 0;
            top: 0;
        }

        &:hover {
            .float {
                display: block;
            }
        }
    }

    > button {
        &:hover {
            border: 1px solid #e1e6eb;
            color: $color-content;
        }
    }

    > .ope_btn {
        width: 100%;
        height: 32px;
        line-height: 32px;
        display: block;
        clear: both;
        color: $color-sub;
        font-size: 12px;
        text-align: center;
        border: 1px dashed $color-border;

        &:hover {
            border: 1px dashed $color-primary;
            color: $color-primary;
        }
    }
}

.tag {
    height: 32px;
    line-height: 32px;
    cursor: move;
    position: relative;
    float: left;
    margin: 16px 16px 0 0;
    padding: 0 40px 0 15px;
    font-weight: 400;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    white-space: nowrap;
    background-color: $color-primary;
    transform: translate(0, 0);

    &::after {
        position: absolute;
        display: block;
        content: "";
        top: 1px;
        bottom: 0;
        right: 30px;
        width: 1px;
        background: rgba(255, 255, 255, 0.3);
    }

    .close {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        .closeIcon {
            color: #fff;
            font-size: 18px;
            cursor: pointer;
        }

        > i {
            transform: scale(1.6) rotate(0);
            cursor: pointer;
        }
    }

    &:hover {
        box-shadow: 0 8px 24px rgba(28, 36, 56, 0.3);
        transform: translate(0, -2px);
        transition: transform 0.2s;
    }

    &.disabled {
        padding-right: 15px;
        opacity: 0.6;

        &::before {
            content: " ";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 1;
        }

        .close {
            display: none;
        }

        &::after {
            display: none;
        }
    }
}

.transition-enter-active,
.transition-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
}

.transition-enter,
.transition-leave-active {
    opacity: 0;
    transform: scaleY(0);
}
</style>
