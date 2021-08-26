## 形数据与懒加载用法

:::demo `columns`对应列表，`data`对象数组兼容 `el-table`所有属性。

```html
<div>
  <d-table-plus
    style="margin-bottom: 20px;"
    border
    row-key="id"
    :columns="columns"
    :data="tableData"
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
  >
  </d-table-plus>
  <d-table-plus
    border
    row-key="id"
    lazy
    :load="load"
    :columns="columns"
    :data="tableData"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
  >
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
          },
          {
            label: '地址',
            prop: 'address',
            showOverflowTooltip: true,
          },
        ],
        tableData: [
          {
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [
              {
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
              },
              {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
              },
            ],
          },
          {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        tableData1: [
          {
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            hasChildren: true,
          },
          {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
      };
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
          ]);
        }, 1000);
      },
    },
  };
</script>
```

:::
