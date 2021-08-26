## 多级表头/自定义表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

:::demo

```html
<div>
  <d-table-plus border :columns="columns" :data="tableData">
       <template #tip>
       <el-tooltip class="item" effect="dark" content="我是自定义表头" placement="top-start">
      <span>配送信息</span>
    </el-tooltip>
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
            required: true,
            align: 'center',
          },
          {
            label: '配送信息',
            align: 'center',
            slotHeaderName: 'tip',
            children: [
              {
                label: '姓名',
                prop: 'name',
                align: 'center',
                formatter: (row) => `${row.name}1111`,
              },
              {
                label: '地址',
                align: 'center',
                children: [
                  {
                    label: '省份',
                    prop: 'province',
                    align: 'center',
                  },
                  {
                    label: '市区',
                    align: 'center',
                    prop: 'city',
                  },
                  {
                    label: '地址',
                    align: 'center',
                    prop: 'address',
                    showOverflowTooltip: true,
                  },
                ],
              },
            ],
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
