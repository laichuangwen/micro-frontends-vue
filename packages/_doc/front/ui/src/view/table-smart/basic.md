## 列表完成用法

:::demo

```html
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
    :header-custom-hide="false"
    :fullscreen-hide="true"
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
    <!--  #topbarLeft  -->
    <template slot="topbarLeft">
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

<script>
  export default {
    data() {
      return {
        query: {
          businessCategory: '',
          finishedProductId: '',
          finishedProductName: '',
        },
        tools: [
          {
            title: '工具',
            event: () => {},
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
        formAdd: {
          name: '',
          age: '',
          sex: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'change' },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'change',
            },
          ],
          age: [{ required: true, message: '请输入年龄', trigger: 'change' }],
          sex: [{ required: true, message: '请选择', trigger: 'change' }],
        },
        formAddItems: [
          {
            label: '名字',
            prop: 'name',
            type: 'el-input',
            props: {
              placeholder: '请输入名字',
            },
          },
          {
            label: '年龄',
            prop: 'age',
            type: 'el-input',
            props: {
              placeholder: '请输入年龄',
            },
          },
          {
            label: '性别',
            prop: 'sex',
            type: 'd-radio-smart',
            props: {
              list: [
                {
                  label: '男',
                  value: 0,
                },
                {
                  label: '女',
                  value: 1,
                },
              ],
            },
          },
        ],
      };
    },
    computed: {
      ajax() {
        return {
          url: 'https://yapi.142vip.cn/mock/1077/list',
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
              rules: this.rules,
              labelWidth: '100px',
              labelPosition: 'right',
            },
            props: {
              model: this.formAdd,
              formItems:this.formAddItems,
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
```

:::
