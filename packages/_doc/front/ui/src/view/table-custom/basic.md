## 基本用法

:::demo
```html
<div style="position: relative">
    <el-button @click="toCustom">自定义表头</el-button>
    <d-table-custom
        ref="custom"
        :columns="columns"
        @save="save"
    ></d-table-custom>
</div>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        label: '姓名',
                        required: true
                    },
                    {
                        label: '年龄'
                    },
                    {
                        label: '性别'
                    },
                    {
                        label: '身高'
                    }
                ],
                selected: []
            }
        },
        methods: {
            toCustom() {
                this.$refs.custom.open(this.selected)
            },
            save(columns) {
                this.selected = columns
            }
        }
    }
</script>
```
:::
