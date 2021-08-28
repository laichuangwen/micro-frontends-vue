<template>
  <div :class="s.view">
      <i class="el-icon-info" :class="s.icon"></i>
      <span>已选择<span :class="s.num">{{num}}</span>个</span>
      <el-button :class="s.btn" type="text"@click="$emit('clear')">清空</el-button>
  </div>
</template>

<script>
export default {
    props: {
        num: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" module="s">
.view{
    padding: 8px 16px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid $color-primary-light;
    background-color: #f0faff;
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon{
        margin-right: 8px;
        color: $color-primary;
    }
    .num{
        padding: 0 4px;
        color: $color-primary;
    }
    .btn{
        margin-left: 8px;
        padding: 4px;
    }
}
</style>
