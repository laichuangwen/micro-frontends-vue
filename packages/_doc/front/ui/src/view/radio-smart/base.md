## 使用方法

:::demo 直接使用`list`属性来指定数据来源

```html
<template>
  <div>
    <div style=" margin-bottom: 32px;">
      <span>基本：</span>
      <d-radio-smart v-model="value" @change="change" :list="list">
      </d-radio-smart>
    </div>
    <div style=" margin-bottom: 32px;">
      <span>边框：</span>
      <d-radio-smart v-model="value" @change="change" :list="list1">
      </d-radio-smart>
    </div>
    <div>
      <span>按钮：</span>
      <d-radio-smart
        v-model="value"
        type="button"
        @change="change"
        :list="list"
      >
      </d-radio-smart>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 'web',
        ajax: {
          url: 'https://yapi.142vip.cn/mock/1077/country/all',
        },
        defaultProps: {
          label: 'cnName',
          value: 'callingCode',
        },
        list: [
          {
            label: '前端',
            value: 'web',
            disabled: true,
          },
          {
            label: '后端服务',
            value: 'server',
          },
          {
            label: '美工',
            value: 'ui',
          },
        ],
        list1: [
          {
            label: '前端',
            value: 'web',
            border: true,
            disabled: true,
          },
          {
            label: '后端服务',
            value: 'server',
            border: true,
          },
          {
            label: '美工',
            value: 'ui',
            border: true,
          },
        ],
      };
    },
    methods: {
      change(val) {
        console.log('change', val);
      },
    },
  };
</script>
```

:::
