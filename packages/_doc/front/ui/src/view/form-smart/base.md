## 基本用法

:::demo 直接使用`formItems`属性来配置表单

```html
<template>
  <div>
    <d-form-smart
      ref="form"
      :model="form"
      label-width="150px"
      label-position="left"
      :form-Items="formItems"
    >
      <template #slotErrorName>
        <span>按钮</span>
      </template>
      <template #region-label>
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
          date: [],
          delivery: false,
          personnel: '',
          radio: '',
          checkbox: [],
          cascader: [],
          timeSelect: '',
          datePicker: '',
          startTime: '',
          endTime: '',
          rate: 0,
          special: '',
          desc: null,
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
            label: '名字',
            prop: 'name',
            type: 'el-input',
            props: {
              placeholder: '请输入内容',
            },
          },
          {
            label: '开关',
            prop: 'delivery',
            type: 'el-switch',
          },
          {
            prop: 'region',
            type: 'd-select-smart',
            slotLabelName: 'region-label',
            props: {
              list: [],
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
            label: '智能radio',
            prop: 'radio',
            type: 'd-radio-smart',
            props: {
              style: {
                width: '600px',
              },
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
            label: '智能checkbox',
            prop: 'checkbox',
            type: 'd-checkbox-smart',
            props: {
              style: {
                width: '600px',
              },
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
              type: 'datetimerange',
              startPlaceholder: '开始日期',
              endPlaceholder: '结束日期',
              format: 'yyyy-MM-dd',
              valueFormat: 'yyyy-MM-dd',
            },
          },
          {
            label: '评分',
            prop: 'rate',
            type: 'el-rate',
          },
          {
            label: '备注',
            prop: 'desc',
            type: 'el-input',
            props: {
              placeholder: '请输入内容',
              type: 'textarea',
              style: {
                width: '400px',
              },
            },
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
      submit(){
           console.log(this.form);
      }
    },
  };
</script>
```

:::
