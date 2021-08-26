## 带斑马纹表格
使用带斑马纹的表格，可以更容易区分出不同行的数据。
:::demo `stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。


```html
<div>
  <d-table-plus stripe :columns="columns" :data="tableData">
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
      refresh() {
        console.log('refresh');
      },
    },
  };
</script>
```

:::
