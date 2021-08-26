## 固定表头/固定列
纵向内容过多时，可选择固定表头；横向内容过多时，可选择固定列。

:::demo 固定列需要使用`fixed`属性，它接受 Boolean 值或者`left` `right`，表示左边固定还是右边固定。


```html
<div>
  <d-table-plus  height="250" :columns="columns" :data="tableData">
    <template #handler="{ row }">
      <el-button type="text" size="small" @click="handlerAdd(row)"
        >新增</el-button
      >
      <el-button type="text" size="small">编辑</el-button>
    </template>
  </d-table-plus>
</div>

<script>
  export default {
    data() {
      return {
        columns: [
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
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
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
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
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
      handlerAdd(row) {
        console.log(row);
      },
    },
  };
</script>
```

:::
