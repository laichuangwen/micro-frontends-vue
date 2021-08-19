## 使用方法

:::demo 直接使用`list`属性来指定数据来源

```html
<template>
  <div>
    <span>无分组：</span>
    <d-select-smart
      ref="sel"
      v-model="value"
      @change="change"
      :list="list"
      multiple
      clearable
    >
    </d-select-smart>

    <span>分组：</span>
    <d-select-smart
      ref="sel"
      v-model="value"
      type="group"
      @change="change"
      :list="list1"
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
        value: "",
        ajax: {
          url: "https://yapi.142vip.cn/mock/1077/country/all",
        },
        defaultProps: {
          label: "cnName",
          value: "callingCode",
        },
        list: [
          {
            label: "前端",
            value: "web",
            disabled: true,
          },
          {
            label: "后端服务",
            value: "server",
          },
          {
            label: "美工",
            value: "ui",
          },
        ],
        list1: [
          {
            label: "前端",
            value: "web",
            children: [
              {
                label: "后端服务后",
                value: "server",
              },
              {
                label: "美工",
                value: "ui",
              },
            ],
          },
          {
            label: "后端服务",
            value: "server",
            children: [
              {
                label: "后端服务",
                value: "server1",
                disabled: true,
              },
              {
                label: "美工",
                value: "ui1",
              },
            ],
          },
          {
            label: "美工",
            value: "ui",
            children: [
              {
                label: "后端服务",
                value: "server2",
              },
              {
                label: "美工",
                value: "ui2",
              },
            ],
          },
        ],
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
