<template>
  <div :class="{ [s.view]: true, [s.fold]: fold }">
    <div ref="options">
      <slot></slot>
    </div>
    <div :class="s.right">
      <div>
        <slot name="btns"></slot>
      </div>
      <div :class="s.wrap">
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
  </div>
</template>

<script>
export default {
    name: 'DSearchWrapper',
    data() {
        return {
            needMore: false,
            fold: false,
            inited: false,
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
            const oversize = rect.height > 51;
            this.needMore = oversize;
            if (!this.inited && oversize) {
                this.inited = true;
                this.fold = !oversize;
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
$height: 51px;

.view {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  height: $height;
  overflow: hidden;
  &.fold {
    flex-direction: column;
    height: auto;
    overflow: auto;
    .right {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 16px;
    }
  }
}
.right {
  display: flex;
  flex-direction: row;
  .wrap {
    margin-left: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
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
