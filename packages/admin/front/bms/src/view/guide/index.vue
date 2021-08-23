<template>
  <div :class="s.view">
    <d-search-wrap @search="submit" @reset="reset">
      <DFormSmart
        ref="form"
        inline
        :model="query"
        label-width="100px"
        label-position="right"
        :form-items="formItems"
      >
      </DFormSmart>
      <template #btns>
        <el-button type="primary" @click="add">新增</el-button>
      </template>
    </d-search-wrap>
    <div :class="s.tableCustom">
      <el-button @click="toCustom">自定义表头</el-button>
      <d-table-custom
        ref="custom"
        :columns="columns"
        @save="save"
      ></d-table-custom>
    </div>

    <el-button style="width: 100%">dddd</el-button>
  </div>
</template>

<script>
import config from './config';

export default {
    data() {
        return {
            dialogVisible: true,
            query: {
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
            formAdd: {
                name: '',
                age: '',
                sex: '',
            },
            formItems1: [
                {
                    label: '名字',
                    prop: 'name',
                    type: 'el-input',
                    props: {
                        placeholder: '请输入内容',
                    },
                },
            ],
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
            columns: [
                {
                    label: '姓名',
                    required: true,
                },
                {
                    label: '年龄',
                },
                {
                    label: '性别',
                },
                {
                    label: '身高',
                },
            ],
            selected: [],
        };
    },
    methods: {
        reset() {
            this.$refs.form.resetFields();
        },
        submit() {
            console.log(this.form);
        },
        toCustom() {
            this.$refs.custom.open(this.selected);
        },
        save(columns) {
            this.selected = columns;
        },
        async add() {
            this.$msgbox({
                customClass: 'custom-message-box',
                title: '新增',
                message: this.$createElement('DFormSmart', {
                    ref: 'formAdd',
                    key: Math.random(), // 重新创建，不缓存
                    attrs: {
                        rules: config.rules,
                        labelWidth: '100px',
                        labelPosition: 'right',
                    },
                    props: {
                        model: this.formAdd,
                        formItems: config.formItems,
                    },
                }),
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: async (action, instance, done) => {
                    if (action === 'confirm') {
                        await this.$refs.formAdd.validate();
                        instance.confirmButtonLoading = true;
                        console.log(this.formAdd);
                        setTimeout(() => {
                            this.$refs.formAdd.resetFields();
                            done();
                            setTimeout(() => {
                                instance.confirmButtonLoading = false;
                            }, 300);
                        }, 3000);
                    } else {
                        this.$refs.formAdd.resetFields();
                        done();
                    }
                },
            });
        },
    },
};
</script>

<style lang="scss" module="s">
.view {
  position: relative;
}
.tableCustom{
    position: relative;
}
</style>
