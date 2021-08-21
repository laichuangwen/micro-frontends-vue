## slot用法

:::demo 直接使用`d-form-smart`属性来配置搜索条件

```html
<template>
  <div>
    <d-search-wrap @search="submit" @reset="reset">
      <d-form-smart
        ref="form"
        :model="form"
        label-width="150px"
        label-position="left"
        :form-Items="formItems"
      >
      </d-form-smart>
    <template #btns>
        <el-button type="primary" >新增</el-button>
      </template>
    </d-search-wrap>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
        },
        formItems: [
          {
            label: '名字',
            prop: 'name',
            type: 'el-input',
            props: {
              placeholder: '请输入内容',
            },
          },
        ],
      };
    },
    methods: {
      reset() {
        this.$refs.form.resetFields()
      },
      submit() {
        console.log(this.form);
      },
    },
  };
</script>
```

:::
