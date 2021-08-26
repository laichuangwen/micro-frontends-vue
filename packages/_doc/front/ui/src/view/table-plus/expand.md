## 展开行用法

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。
:::demo 通过设置 type="expand" 和 slotName 可以开启展开行功能

```html
<div>
  <d-table-plus :columns="columns" :data="tableData">
    <template #good="{row}">
      <el-form label-position="left" inline>
        <el-form-item label="商品名称">
          <span>{{ row.name }}</span>
        </el-form-item>
        <el-form-item label="所属店铺">
          <span>{{row.shop }}</span>
        </el-form-item>
        <el-form-item label="商品 ID">
          <span>{{row.id }}</span>
        </el-form-item>
        <el-form-item label="店铺 ID">
          <span>{{ row.shopId }}</span>
        </el-form-item>
        <el-form-item label="商品分类">
          <span>{{ row.category }}</span>
        </el-form-item>
        <el-form-item label="店铺地址">
          <span>{{ row.address }}</span>
        </el-form-item>
        <el-form-item label="商品描述">
          <span>{{ row.desc }}</span>
        </el-form-item>
      </el-form>
    </template>
  </d-table-plus>
</div>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            type: 'expand',
            prop: 'id',
            slotName: 'good',
          },
          {
            label: '商品名称',
            width: '100px',
            prop: 'id',
            align: 'center',
          },
          {
            label: '商品名称',
            width: '100px',
            prop: 'name',
            align: 'center',
          },
          {
            label: '描述',
            prop: 'desc',
          },
        ],
        tableData: [
          {
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
          },
          {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
          },
          {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
          },
          {
            id: '12987126',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
          },
        ],
      };
    },
  };
</script>
```

:::
