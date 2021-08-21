## Slot 用法

:::demo 直接使用`slotName`属性来插槽，`slotErrorName`、`slotLabelName`是formItem里面的error、label插槽

```html
<template>
  <div>
    <d-form-smart
      ref="form"
      :model="form"
      label-width="150px"
      label-position="left"
      :rules="rules"
      :form-Items="formItems"
    >
      <template #error="{error}">
        <div>自定义错误:{{error}}</div>
      </template>
      <template #label>
        <el-badge :value="12" class="item">
          <span>自定义label</span>
        </el-badge>
      </template>
      <template #btn>
        <el-button type="primary" @click="submit">提交</el-button>
      </template>
    </d-form-smart>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          rate: 0,
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur',
            },
          ],
        },
        formItems: [
          {
            label: '自定义error',
            prop: 'name',
            type: 'el-input',
            slotErrorName: 'error',
            props: {
              placeholder: '请输入内容',
            },
          },
          {
            prop: 'region',
            slotLabelName: 'label',
            type: 'el-input',
            props: {
              placeholder: '请输入内容',
            },
          },
          {
            label: '评分',
            prop: 'rate',
            type: 'el-rate',
          },
          {
            slotName: 'btn',
            props: {},
          },
        ],
      };
    },
    methods: {
      change(val) {
        console.log('change', val);
      },
      submit() {
        console.log(this.form);
         this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
  };
</script>
```

:::
