
## 层级
数值大的优先显示

<table :class="s.zindex">
  <tbody>
    <tr :class="s.tr" :key="item.text" v-for="item of zindexs" @click="$ctx.copy(item.name)">
      <td>
          {{item.text}}
      </td> 
      <td>
          {{item.val}}
      </td> 
      <td>
          {{item.name}}
      </td> 
    <tr>
  </tbody>
</table>

<script>
export default {
    data(){
        return {
            zindexs: [
                { name: '$zindex-spin', val: val['zindex-spin'], text: '数据加载' },
                { name: '$zindex-affix', val: val['zindex-affix'], text: '图钉' },
                { name: '$zindex-back-top', val: val['zindex-back-top'], text: '返回顶部' },
                { name: '$zindex-select', val: val['zindex-select'], text: '下拉' },
                { name: '$zindex-modal', val: val['zindex-modal'], text: '弹窗' },
                { name: '$zindex-message', val: val['zindex-message'], text: '全局提示' },
                { name: '$zindex-notification', val: val['zindex-notification'], text: '通知提醒' },
                { name: '$zindex-tooltip', val: val['zindex-tooltip'], text: '文字提示' },
                { name: '$zindex-transfer', val: val['zindex-transfer'], text: '穿梭框' },
                { name: '$zindex-loading-bar', val: val['zindex-loading-bar'], text: '进度条' }
            ]
        }
    }
}
</script>

<style module="s" lang="scss">
.zindex{
    position: relative;
    margin-bottom: 45px;
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5em;
    th,td {
        padding: 15px;
        max-width: 250px;
        border-bottom: 1px solid #d8d8d8;
        color: #333;
    }
    tr {
        cursor: pointer;
        &:hover {
            background: rgba(216, 217, 253, .2);
        }
    }
}
</style>