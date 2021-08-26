## 基本用法

:::demo `columns`对应列表，`data`对象数组兼容 `el-table`所有属性。

```html
<div>
  <d-table-plus :columns="columns" :data="tableData">
  </d-table-plus>
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
    }
  };
</script>
```

:::
