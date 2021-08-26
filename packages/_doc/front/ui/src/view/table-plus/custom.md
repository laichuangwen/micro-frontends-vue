## 自定义列模板用法

自定义列的显示内容，可组合其他组件使用。

:::demo 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。

```html
<div>
  <d-table-plus :columns="columns" :data="tableData">
    <template #date="{row}">
      <i class="el-icon-time"></i>
      <span style="margin-left: 10px">{{ row.date }}</span>
    </template>
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
            label: '日期',
            prop: 'date',
            align: 'center',
            slotName: 'date',
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
        ],
      };
    },
  };
</script>
```

:::
