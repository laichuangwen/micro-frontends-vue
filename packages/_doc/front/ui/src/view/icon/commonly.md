## 图标集合

<div :class="s.app">
    <div :class="s.search">
        <input v-model="search" type="text" placeholder="输入英文关键词搜索，比如 add">
        <p>点击下面的图标按钮可以直接复制组件代码</p>
    </div>
    <div v-for="icon of icons" :class="s.icon" @click="copyCode(icon)">
        <d-icon :type="icon"></d-icon>
        <p>{{icon}}</p>
    </div>
</div>

<script>
export default {
    data(){
        return {
            search: '',
            meta_icons: [
                'alert',
                'trash',
                'warning',
                'refresh',
                'loading',
                'search',
                'settings',
                'crop',
                'menu',
                'reorder',
                'more',
                'move',
                'add-circle-outline',
                'add-circle',
                'add',
                'arrow-left',
                'arrow-right',
                'arrow-back',
                'arrow-down',
                'arrow-up',
                'arrow-forward',
                'arrow-round-back',
                'arrow-round-down',
                'arrow-round-forward',
                'arrow-round-up',
                'arrow-dropdown-circle',
                'arrow-dropdown',
                'arrow-dropleft-circle',
                'arrow-dropleft',
                'arrow-dropright-circle',
                'arrow-dropright',
                'arrow-dropup-circle',
                'arrow-dropup',
                'radio-button-off',
                'radio-button-on',
                'checkbox-outline',
                'checkbox',
                'checkmark-circle-outline',
                'checkmark-circle',
                'checkmark',
                'close-circle-outline',
                'close-circle',
                'close',
                'help-circle-outline',
                'help-circle',
                'help',
                'information-circle-outline',
                'information-circle',
                'information',
                'remove-circle-outline',
                'remove-circle',
                'remove',
                'square-outline',
                'square',
                'date',
                'import',
                'export',
                'expansion',
                'shrink',
                'table-custom',
            ]
        }
    },
    computed:{
        icons(){
            return this.meta_icons.filter( icon => icon.indexOf(this.search) > -1 )
        }
    },
    methods:{
        copyCode(icon){
            this.$ctx.copy(`<d-icon type="${icon}"></d-icon>`)
        }
    }
}
</script>

<style module="s" lang="scss">
.app{
    &::after{
        content: '';
        display: table;
        clear: both;
    }
    .search{
        position: relative;
        margin: 20px auto 30px;
        text-align: center;
        input{
            width: 500px;
            box-sizing: border-box;
            border: 0;
            border-radius: 4px;
            background: #f5f5f5;
            text-align: center;
            font-size: 14px;
            outline: none;
            margin: 0 auto;
            padding: 8px 0;
        }
    }
    .icon{
        float: left;
        margin: 6px 6px 6px 0;
        width: 145px;
        text-align: center;
        list-style: none;
        cursor: pointer;
        height: 100px;
        color: #5c6b77;
        transition: all .2s ease;
        position: relative;
        padding-top: 10px;
        &:hover{
            background: rgba(216, 217, 253, .2);
        }
    }
    p{
        padding-top: 15px;
        margin: 5px;
        font-size: 14px;
    }
    svg{
        font-size: 30px;
    }
}
</style>