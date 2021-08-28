<template>
  <div>
    <div :class="s.btns">
      <div
        v-for="(item, index) in events"
        :key="index"
        type="text"
        :class="s.btn"
      >
        <drop-down v-if="item.type === 'dropdown'" :data="item" />
        <span v-else @click="item.event">
          {{ item.title }}
          <d-icon v-if="item.icon" :type="item.icon" :class="s.icon" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import dropDown from './dropdown.vue';

export default {
    name: 'VTableTool',
    components: {
        dropDown,
    },
    props: {
        events: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" module="s">
.btns {
  display: flex;
  align-items: center;
}

.icon {
  transition: color 0.2s;
  font-size: 12px;
}

.btn {
  border-right: 2px solid #e1e6eb;
  padding: 0 8px;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s;

  &:first-child {
    border-left: 2px solid #e1e6eb;
  }

  &:hover,
  &:hover .icon {
    color: $color-primary;
  }
}
</style>
