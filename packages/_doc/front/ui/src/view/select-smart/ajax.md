## 网络请求

:::demo 直接使用`ajax`属性来获取数据

```html
<template>
  <div>
    <d-select-smart
      ref="sel"
      v-model="value"
      @change="change"
      :default-props="defaultProps"
      :ajax="ajax"
      multiple
      clearable
    >
    </d-select-smart>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ["35818", "355"],
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
