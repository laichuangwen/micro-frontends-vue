<template>
  <div>
    <d-search-wrap @search="submit" @reset="reset">
      <d-form-smart
        ref="form"
        inline
        :model="form"
        label-width="100px"
        label-position="right"
        :form-items="formItems"
      >
      </d-form-smart>
      <template #btns>
        <el-button type="primary">新增</el-button>
      </template>
    </d-search-wrap>
    <el-button type="primary" v-if="$p('bms.guide')">有权限</el-button>
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
            this.$refs.form.resetFields();
        },
        submit() {
            console.log(this.form);
        },
    },
};
</script>

<style lang="scss" module="s"></style>
