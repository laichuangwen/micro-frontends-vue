
## 阴影
<div class="boxShadow" :class="item.name.replace('$','')" :key="item.name" v-for="item of boxShadows" @click="$ctx.copy(item.name)">
    {{item.text}} {{item.val}} {{item.name}}
</div> 

<script>

export default {
    data(){
        return {
            boxShadows: [
                { name: '$shadow-base', text: '基础' },
                { name: '$shadow-card', text: '卡片' },
                { name: '$shadow-card-big', text: '大卡片' }
            ]
        }
    },
    methods:{
        customStyle(item){
            return {
                'box-shadow': item.val
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.boxShadow{
  display: block;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
}
.shadow-base{
    box-shadow: $shadow-base;
}
.shadow-card{
    box-shadow: $shadow-card;
}
.shadow-card-big{
    box-shadow: $shadow-card-big;
}
</style>