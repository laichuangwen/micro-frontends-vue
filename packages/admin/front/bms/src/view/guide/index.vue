<template>
  <div>
    <d-search-wrap @search="$refs.table.search()" @reset="reset">
      <d-form-smart
        ref="form"
        inline
        :model="query"
        label-width="80px"
        label-position="right"
        :form-items="formItems"
      >
      </d-form-smart>
    </d-search-wrap>
    <d-table-smart
      ref="table"
      :ajax="ajax"
      :headerCustomHide="false"
      @selectionChange="selectionChange"
      :tools="tools"
      :columns="columns"
      :keys="{
        list: 'list',
        total: 'total',
        pageCurrent: 'page',
        pageSize: 'size',
      }"
    >
      <template #topbarLeft>
        <el-button type="primary" @click="add">新增</el-button>
      </template>
      <template #handler="{ row }">
        <el-button type="text" size="small" @click="handlerAdd(row)"
          >新增</el-button
        >
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </d-table-smart>
  </div>
</template>

<script>
import config from './config';

export default {
    data() {
        return {
            query: {
                businessCategory: '',
                finishedProductId: '',
                finishedProductName: '',
            },
            formAdd: {
                name: '',
                age: '',
                sex: '',
            },
            tools: [
                {
                    title: '工具',
                    event: () => {

                    },
                },
            ],
            formItems: [
                {
                    label: '业务类别',
                    prop: 'businessCategory',
                },
                {
                    label: '成品料号',
                    prop: 'finishedProductId',
                    props: {
                        placeholder: '成品料号',
                        maxlength: 50,
                    },
                },
                {
                    label: '成品名称',
                    prop: 'finishedProductName',
                    props: {
                        placeholder: '成品名称',
                        maxlength: 50,
                    },
                },
            ],
            columns: [
                {
                    type: 'selection',
                    align: 'center',
                    width: '55',
                },
                {
                    label: '业务类别',
                    property: 'businessCategory',
                    required: true,
                },
                {
                    label: '成品料号',
                    property: 'finishedProductId',
                    required: true,
                },
                {
                    label: '成品名称',
                    property: 'finishedProductName',
                    required: true,
                },
                {
                    label: '规格型号',
                    property: 'finishedProductSpecifications',
                    'show-overflow-tooltip': true,
                },
                {
                    label: '对应半成品料号',
                    property: 'semiFinishedProductId',
                },
                {
                    label: '半成品名称',
                    property: 'semiFinishedProductName',
                },
                {
                    label: '半成品规格',
                    property: 'semiFinishedProductSpecifications',
                    'show-overflow-tooltip': true,

                },
                {
                    label: '操作',
                    type: 'handler',
                    fixed: 'right',
                    slotName: 'handler',
                    width: 120,
                },
            ],
            selected: [],
        };
    },
    computed: {
        ajax() {
            return {
                url: '/bms-api/bom/list',
                params: {
                    ...this.query,
                },
            };
        },
    },
    methods: {
        async reset() {
            await this.$refs.form.resetFields();
            this.$refs.table.search();
        },
        handlerAdd(row) {
            console.log(row);
        },
        selectionChange(val) {
            console.log(val);
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
</style>
