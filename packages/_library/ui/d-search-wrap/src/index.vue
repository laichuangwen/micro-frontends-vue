<template>
  <div @keyup.tab="handlerTab" :class="{ [s.view]: true, [s.fold]: fold }">
    <div  :class="s.options">
      <div ref="options">
        <slot></slot>
      </div>
    </div>
    <div :class="s.right">
      <el-button type="primary" @click="search">查询</el-button>
      <el-button @click="reset">重置</el-button>
      <div v-if="needMore" :class="s.more" @click="more">
        <span>{{ !fold ? '展开' : '收起' }}</span>
        <i
          class="el-icon-d-arrow-left"
          :class="{ [s.icon]: true, [s.isFold]: !fold }"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DSearchWrapper',
    data() {
        return {
            needMore: false,
            fold: false,
        };
    },
    mounted() {
        this.init();
        window.addEventListener('resize', this.init);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.init);
    },
    methods: {
        init() {
            const rect = this.$refs.options.getBoundingClientRect();
            const oversize = rect.height > 48;
            this.needMore = oversize;
        },
        handlerTab() {
            // tab 切换时
            if (this.needMore) {
                this.fold = true;
            }
        },
        more() {
            this.fold = !this.fold;
        },
        search() {
            this.$emit('search');
        },
        reset() {
            this.$emit('reset');
        },
    },
};
</script>

<style lang="scss" module="s">
$height: 48px;

.view {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 14px;
  &.fold {
    margin-bottom: 24px;
    padding-bottom: 32px;
    .options {
      height: auto;
      overflow: auto;
      padding-right: 0;
      position: relative;
    }
    .right {
      position: absolute;
      right: 0;
      top: auto;
      bottom: 0px;
    }
  }
}

.options {
  height: $height;
  overflow: hidden;
  padding-right: 180px;
}
.right {
  width: 180px;
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: auto;
}
@media (max-width: 600px) {
  .view {
    padding-bottom: 32px;
  }
  .options {
    padding-right: 0;
  }
  .right {
    position: absolute;
    right: 0;
    top: auto;
    bottom: 0;
  }
}

.more {
  width: 50px;
  margin-left: 10px;
  color: $color-primary;
  cursor: pointer;

  .icon {
    color: $color-primary;
    transform: rotate(90deg);
    transition: transform 0.2s;
    &.isFold {
      transform: rotate(-90deg);
    }
  }
  &:hover {
    opacity: 0.8;
    .icon {
      color: $color-primary;
    }
  }
}
</style>
