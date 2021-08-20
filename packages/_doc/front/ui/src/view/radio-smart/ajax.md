## 网络请求

:::demo 直接使用`ajax`属性来获取数据

```html
<template>
  <div>
    <d-radio-smart
      v-model="value"
      @change="change"
      type="button"
      :default-props="defaultProps"
      :ajax="ajax"
    >
    </d-radio-smart>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
        ajax: {
          url: "https://yapi.142vip.cn/mock/1077/country/all",
        },
        defaultProps: {
          label: "cnName",
          value: "callingCode",
        },
      };
    },
    methods: {
      change(val) {
        console.log("change", val);
      },
    },
  };
</script>
```

:::
