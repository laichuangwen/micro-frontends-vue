## 单选用法

:::demo 组件提供了单选的支持，只需要配置highlight-current-row属性即可实现单选。之后由current-change事件来管理选中时触发的事件

```html
<div>
  <d-table-plus
    ref="table"
    highlight-current-row
    :columns="columns"
    :data="tableData"
    @current-change="handleCurrentChange"
  >
  </d-table-plus>
    <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            label: '日期',
            prop: 'date',
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
            prop: 'province',
          },
          {
            label: '市区',
            prop: 'city',
          },
          {
            label: '地址',
            prop: 'address',
            showOverflowTooltip: true,
          },
        ],
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
      setCurrent(row) {
        this.$refs.table.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        console.log(val)
      },
    },
  };
</script>
```

:::
