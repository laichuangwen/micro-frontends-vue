## 基本用法

:::demo

```html
<div>
    <d-table-tool :events="events" @refresh="refresh"></d-table-tool>
</div>

<script>
    export default {
        data() {
            return {
                rule1:'2',
                rule2:1,
                events: [{
                        title: '导出',
                        icon: 'export',
                        event: () => {
                            console.log('export')
                        }
                    },
                    {
                        type: 'dropdown',
                        options: [{
                            value: '1',
                            label: '黄金糕'
                        }, {
                            value: '2',
                            label: '黄金糕2'
                        }, {
                            value: '3',
                            label: '黄金糕3'
                        }],
                        event: (value) => {
                            this.rule1=value
                            console.log(value)
                        },
                        activeRule:(row)=>{
                            return row.value===this.rule1
                        }
                    },
                    {
                        type: 'dropdown',
                        options: [{
                            value: 1,
                            label: '黄金糕'
                        }, {
                            value: 2,
                            label: '黄金糕2'
                        }, {
                            value: 3,
                            label: '黄金糕3'
                        }],
                        event: (value) => {
                            this.rule2=value
                            console.log(value)
                        },
                        activeRule:(row)=>{
                            return row.value===this.rule2
                        }
                    }
                ]
            }
        },
        methods: {
            refresh() {
                console.log('refresh')
            }
        }
    }
</script>
```

:::
