
## 输入框宽度

<div :class="s.border" :style="customStyle(item)" :key="item.name" v-for="item of borders" @click="$ctx.copy(item.name)">
    {{item.text}} {{item.val}}
    <div>{{item.name}}</div>
</div> 

<script>
export default {
    data(){
        return {
            borders: [
                { name: '$input-width-small', val: val['input-width-small'], text: '小' },
                { name: '$input-width-base', val: val['input-width-base'], text: '基础' },
                { name: '$input-width-large', val: val['input-width-large'], text: '大' },
            ]
        }
    },
    methods:{
        customStyle(item){
            return {
                'width': item.val
            }
        }
    }
}
</script>

<style module="s" lang="scss">
.border{
  display: block;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid $color-border;
}
</style>