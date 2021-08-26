## 多选用法

选择多行数据时使用 Checkbox。

:::demo 实现多选非常简单: 手动添加一个 el-table-column，设 type 属性为 selection 即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用 show-overflow-tooltip 属性，它接受一个 Boolean，为 true 时多余的内容会在 hover 时以 tooltip 的形式显示出来

```html
<div>
  <d-table-plus ref="table" :columns="columns" :data="tableData"> </d-table-plus>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])"
      >切换第二、第三行的选中状态</el-button
    >
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
</div>

<script>
  export default {
    data() {
      return {
          multipleSelection: [],
        columns: [
          {
            type: 'selection',
            width: '55',
            align: 'center',
          },
          {
            label: '日期',
            prop: 'date',
            align: 'center',
          },
          {
            label: '姓名',
            width: '100px',
            prop: 'name',
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
      toggleSelection(rows) {
        if (rows) {
          rows.forEach((row) => {
            this.$refs.table.toggleRowSelection(row);
          });
        } else {
          this.$refs.table.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    },
  };
</script>
```

:::
