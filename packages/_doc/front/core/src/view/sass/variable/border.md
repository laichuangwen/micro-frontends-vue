
## 圆角

<div class="border" :class="item.name.replace('$','')" :key="item.name" v-for="item of borders" @click="$ctx.copy(item.name)">
    {{item.text}}{{item.name}}
</div> 

<script>
export default {
    data(){
        return {
            borders: [
                { name: '$border-radius-small',text: '小' },
                { name: '$border-radius-base',  text: '基础' },
                { name: '$border-radius-large', text: '大' },
            ]
        }
    },
    methods:{
        customStyle(item){
            return {
                'border-radius': item.val
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.border{
  display: block;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid $color-border;
}
.border-radius-small{
    border-radius: $border-radius-small;
}
.border-radius-base{
    border-radius: $border-radius-base;
}
.border-radius-large{
    border-radius: $border-radius-large;
}
</style>