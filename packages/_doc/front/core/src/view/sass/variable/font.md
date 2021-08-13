
## 字号
<table class="font">
  <tbody>
    <tr :key="item.name" v-for="item of fonts" @click="$ctx.copy(item.name)">
      <td  :class="item.name.replace('$','')">{{item.text}}</td>
      <td  :class="item.name.replace('$','')">FontSize</td>
      <td class="darkLight">{{item.name}}</td>
    </tr>
  </tbody>
</table>

<script>
export default {
    data(){
        return {
            fonts: [
                { text: '巨大', name: '$font-size-huge'},
                { text: '大号', name: '$font-size-large'},
                { text: '中等', name: '$font-size-medium'},
                { text: '基础', name: '$font-size-base'},
                { text: '小号', name: '$font-size-small'}
            ]
        }
    },
    methods:{
        customStyle(item){
            return {
                'font-size': item.val
            }
        }
    }
}
</script>

<style  lang="scss" scoped>
.font {
    position: relative;
    margin-bottom: 45px;
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5em;
    th,td {
        padding: 15px;
        max-width: 260px;
        border-bottom: 1px solid #d8d8d8;
        color: #333;
    }
    tr{
        cursor: pointer;
        &:hover {
            background: rgba(216, 217, 253, .2);
        }
    }
    .darkLight {
      color: #99a9bf;
    }
}
.font-size-huge{
    font-size: $font-size-huge;
}
.font-size-large{
    font-size: $font-size-large;
}
.font-size-medium{
    font-size: $font-size-medium;
}
.font-size-base{
    font-size: $font-size-base;
}
.font-size-small{
    font-size: $font-size-small;
}
</style>