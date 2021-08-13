
## 颜色
<div class="group">
    <div class="box" :class="item.name.replace('$','')" @click="$ctx.copy(item.name)" :key="item.text" v-for="(item,index) of colors1">
        {{item.text}} {{item.name}} 
    </div>
</div>
<div class="group">
    <div class="box" :class="item.name.replace('$','')"  @click="$ctx.copy(item.name)" :key="item.text" v-for="item of colors2">
        {{item.text}} {{item.name}}
    </div>
</div>

<script>
export default {
    data(){
        return {
            colors1: [
                { text: '主色',  name:'$color-primary' },
                { text: '选中',  name:'$color-primary-select' },
                { text: '轻主',  name:'$color-primary-light' },
                { text: '提示',  name:'$color-info' },
                { text: '成功',  name:'$color-success' },
                { text: '警告',  name:'$color-warning' },
                { text: '错误',  name:'$color-error' },
                { text: '链接',  name:'$color-link' },
                { text: '链接选中',  name:'$color-link-hover' },
            ],
            colors2: [
                { text: '标题',  name:'$color-title' },
                { text: '正文',  name:'$color-content' },
                { text: '辅助',  name:'$color-sub' },
                { text: '图标',  name:'$color-icon' },
                { text: '失效',  name:'$color-disabled' },
                { text: '边框',  name:'$color-border' },
                { text: '分割',  name:'$color-divider' },
                { text: '悬停',  name:'$color-hover' },
                { text: '背景',  name:'$color-background' }
            ]
        }
    }
}
</script>

<style  lang="scss" scoped>
.group {
    display: inline-block;
    width: 260px;
    margin-right: 10px;
    border-radius: 4px;
    overflow: hidden;
    vertical-align: top;

    .box {
        cursor: pointer;
        padding: 12px;
        height: 42px;
        box-sizing: border-box;
        font-size: 14px;
    }
}
.color-primary{
    color: #fff;
    background: $color-primary;
}
.color-primary-select{
    color: #fff;
    background: $color-primary-select;
}
.color-primary-light{
    color: #fff;
    background: $color-primary-light;
}
.color-info{
    color: #fff;
    background: $color-info;
}
.color-success{
    color: #fff;
    background: $color-success;
}
.color-warning{
    color: #fff;
    background: $color-warning;
}
.color-error{
    color: #fff;
    background: $color-error;
}
.color-link{
    color: #fff;
    background: $color-link;
}
.color-link-hover{
    color: #fff;
    background: $color-link-hover;
}
.color-title{
    color: #fff;
    background: $color-title;
}
.color-content{
    color: #fff;
    background: $color-content;
}
.color-sub{
    color: #fff;
    background: $color-sub;
}
.color-icon{
    color: #fff;
    background: $color-icon;
}
.color-disabled{
    color: #fff;
    background: $color-disabled;
}
.color-border{
    color: #a5a5a5;
    background: $color-border;
}
.color-divider{
    color: #a5a5a5;
    background: $color-divider;
}
.color-hover{
    color: #a5a5a5;
    background: $color-hover;
}
.color-background{
    color: #a5a5a5;
    background: $color-background;
}
</style>