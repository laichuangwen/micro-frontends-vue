## 网络请求

:::demo 直接使用`ajax`属性来获取数据

```html
<template>
  <div>
    <d-checkbox-smart
      v-model="value"
      @change="change"
      :default-props="defaultProps"
      :ajax="ajax"
      :interceptors="interceptors"
    >
    </d-checkbox-smart>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        ajax: {
          url: "https://yapi.142vip.cn/mock/1077/country/all",
        },
        defaultProps: {
          label: "cnName",
          value: "callingCode",
        },
          interceptors: {
                then: (res) => {
                    console.log(res);
                    return res.map((item) => ({
                        ...item,
                        border: true,
                        size: 'mini',
                    }));
                },
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
