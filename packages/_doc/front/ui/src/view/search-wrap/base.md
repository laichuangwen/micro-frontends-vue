## 基本用法

:::demo 直接使用`d-form-smart`属性来配置搜索条件,展开收缩会根据高度自动判断

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
    </d-search-wrap>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          cascader: [],
          timeSelect: '',
          datePicker: '',
          startTime: '',
          endTime: '',
          special: '',
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
          {
            label: '智能select',
            prop: 'special',
            type: 'd-select-smart',
            props: {
              ajax: {
                url: 'https://yapi.142vip.cn/mock/1077/country/all',
              },
              defaultProps: {
                label: 'cnName',
                value: 'callingCode',
              },
            },
          },
          {
            label: '级联',
            prop: 'cascader',
            type: 'el-cascader',
            props: {
              options: [
                {
                  value: 'zhinan',
                  label: '指南',
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [
                        {
                          value: 'yizhi',
                          label: '一致',
                        },
                        {
                          value: 'fankui',
                          label: '反馈',
                        },
                        {
                          value: 'xiaolv',
                          label: '效率',
                        },
                        {
                          value: 'kekong',
                          label: '可控',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            label: '时间选择',
            prop: 'timeSelect',
            type: 'el-time-select',
            props: {
              placeholder: '选择时间',
            },
          },
          {
            label: '日期选择',
            prop: 'datePicker',
            type: 'el-date-picker',
            props: {
              placeholder: '选择日期',
              valueFormat: 'yyyy-MM-dd',
            },
          },
          {
            label: '日期范围选择',
            prop: ['startTime', 'endTime'],
            type: 'el-date-picker',
            props: {
              type: 'daterange',
              startPlaceholder: '开始日期',
              endPlaceholder: '结束日期',
              format: 'yyyy-MM-dd',
              valueFormat: 'yyyy-MM-dd',
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
