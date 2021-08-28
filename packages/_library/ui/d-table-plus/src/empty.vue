<template>
  <div :class="s.noData">
    <div v-if="!loading">
      <d-icon :class="s.icon" type="no-data"></d-icon>
      <div :class="s.text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: '搜索不到您想要的数据~换个条件试一下',
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" module="s">
.noData {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 90px 0;
  .icon {
    font-size: 60px;
    color: $color-primary;
  }
  .text {
    color: #80848f;
    font-size: 14px;
    margin: 8px 0 16px;
  }
}
</style>
