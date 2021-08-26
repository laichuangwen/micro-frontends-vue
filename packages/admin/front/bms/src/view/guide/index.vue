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
    <!-- <div :class="s.tableCustom">
      <el-button @click="toCustom">自定义表头</el-button>
    </div> -->
    <DTableSmart header-row-class-name="custom-table" :columns="columns" :data="tableData" border>
      <template #custom>
        <d-table-custom
          ref="custom"
          :columns="columns"
          @save="save"
        ></d-table-custom>
      </template>
      <template #topbarLeft>
        <el-button type="primary" @click="add">新增</el-button>
      </template>
      <template #topbarTool>
        <d-table-tool :events="events"></d-table-tool>
      </template>
      <template #handler="{ row }">
        <el-button type="text" size="small" @click="handlerAdd(row)"
          >新增</el-button
        >
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </DTableSmart>

    <!-- <el-button style="width: 100%">dddd</el-button> -->
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
            events: [
                {
                    title: '自定义表头',
                    icon: 'table-custom',
                    event: () => {
                        console.log('dd');
                        this.$refs.custom.open(this.selected);
                    },
                },
            ],
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
                    type: 'selection',
                    width: '55',
                },
                {
                    type: 'index',
                    label: '排序',
                    width: '55',
                    align: 'center',
                },
                {
                    label: '日期',
                    prop: 'date',
                    width: '400px',
                    required: true,
                    align: 'center',
                },
                {
                    label: '姓名',
                    width: '100px',
                    prop: 'name',
                    required: true,
                    align: 'center',
                    formatter: (row) => `${row.name}1111`,
                },
                {
                    label: '省份',
                    width: '700px',
                    prop: 'province',
                },
                {
                    label: '市区',
                    prop: 'city',
                    width: '700px',
                },
                {
                    label: '地址',
                    width: '500px',
                    prop: 'address',
                    showOverflowTooltip: true,
                },
                {
                    label: '操作',
                    type: 'handler',
                    width: '150px',
                    fixed: 'right',
                    slotName: 'handler',
                },
            ],
            selected: [],
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
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
        // toCustom() {
        //     this.$refs.custom.open(this.selected);
        // },
        save(columns) {
            this.selected = columns;
        },
        handlerAdd(row) {
            console.log(row);
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
// :global {
//   .el-table th {
//     background: #f8f8f9;
//      font-weight: 800 !important;
//   }
//   .el-table thead {
//     color: $color-title;
//     .cell{
//         font-weight: bold;
//     }
//   }
// }
.view {
  position: relative;
}
.tableCustom {
  position: relative;
}
</style>
