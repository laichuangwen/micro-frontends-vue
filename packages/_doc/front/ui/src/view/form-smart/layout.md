## Layout 布局用法

:::demo 直接使用`slotName`属性来插槽，`slotErrorName`、`slotLabelName`是 formItem 里面的 error、label 插槽

```html
<template>
  <div>
    <d-form-smart
      ref="form"
      :model="form"
      label-width="100px"
      label-position="right"
      :rules="rules"
      :row-Items="rowItems"
    >
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
          age: '',
          sex: '',
          remark: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur',
            },
          ],
        },
        rowItems: [
          {
            gutter: 20,
            cols: [
              {
                span: 12,
                formItem: {
                  label: '名字',
                  prop: 'name',
                  type: 'el-input',
                  props: {
                    placeholder: '请输入',
                  },
                },
              },
              {
                span: 12,
                formItem: {
                  label: '年龄',
                  prop: 'age',
                  type: 'el-input',
                  props: {
                    placeholder: '请输入',
                  },
                },
              },
            ],
          },
          {
            gutter: 20,
            cols: [
              {
                span: 24,
                formItem: {
                  label: '备注',
                  prop: 'sex',
                  type: 'd-radio-smart',
                  props: {
                    placeholder: '请输入',
                    list: [
                      {
                        label: '男',
                        value: 1,
                      },
                      {
                        label: '女',
                        value: 2,
                      },
                    ],
                  },
                },
              },
            ],
          },
          {
            gutter: 20,
            cols: [
              {
                span: 24,
                formItem: {
                  label: '备注',
                  prop: 'remark',
                  type: 'el-input',
                  props: {
                    placeholder: '请输入',
                    type: 'textarea',
                    style: {
                      width: '80%',
                    },
                  },
                },
              },
            ],
          },
          {
            gutter: 20,
            cols: [
              {
                span: 24,
                formItem: {
                  slotName: 'btn'
                },
              },
            ],
          },
        ]
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
