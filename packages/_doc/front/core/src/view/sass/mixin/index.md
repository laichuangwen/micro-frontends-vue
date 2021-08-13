> 可直接`点击复制`快速获取混合

## 媒体查询
快速设置不同分辨率样式
<table :class="s.list">
  <tbody>
    <tr :key="item.name" v-for="item of medias" @click="$ctx.copy(item.name)">
      <td>{{item.text}}</td>
      <td>{{item.val}}</td>
      <td>{{item.name}}</td>
    </tr>
  </tbody>
</table>

## 文本
<table :class="s.list">
  <tbody>
    <tr :key="item.name" v-for="item of texts" @click="$ctx.copy(item.name)">
      <td>{{item.text}}</td>
      <td :class="s['text_'+item.val]">用 WEB-UI 快速搭建页面</td>
      <td>{{item.name}}</td>
    </tr>
    <tr @click="$ctx.copy('@include text_ellipsis;')">
      <td>文本溢出省略</td>
      <td :class="s.text_ellipsis">我是一段文本溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出溢出</td>
      <td>@include text_ellipsis;</td>
    </tr>
  </tbody>
</table>

## 宽高
快速设置宽高
<table :class="s.list">
  <tbody>
    <tr :key="item.name" v-for="item of sizes" @click="$ctx.copy(item.name)">
      <td>{{item.text}}</td>
      <td>{{item.name}}</td>
    </tr>
  </tbody>
</table>

<script>

export default {
    data(){
        return {
            medias: [
                { text: '小屏', name: '@include media(small) {\n\n}', val: '0px ~ 1280px'},
                { text: '中屏', name: '@include media(medium) {\n\n}', val: '1280px ~ 1600px'},
                { text: '大屏', name: '@include media(large) {\n\n}', val: '1600px ~ 无穷大'}
            ],
            texts: [
                { text: '大标题', name: '@include text(title1);', val: 'title1'},
                { text: '主标题', name: '@include text(title2);', val: 'title2'},
                { text: '小标题', name: '@include text(title3);', val: 'title3'},
                { text: '正文', name: '@include text(content);', val: 'content'},
                { text: '失效文本', name: '@include text(disabled);', val: 'disabled'},
                { text: '说明文本', name: '@include text(desc);', val: 'desc'},
                { text: '资讯文本', name: '@include text(info);', val: 'info'},
                { text: '链接文本', name: '@include text(link);', val: 'link'},
                { text: '错误文本', name: '@include text(error);', val: 'error'},
                { text: '警告文本', name: '@include text(warning);', val: 'warning'},
                { text: '辅助文本', name: '@include text(sub);', val: 'sub'}
            ],
            sizes: [
                { text: '宽高', name: '@include size();' }
            ]
        }
    }
}
</script>

<style module="s" lang="scss">
.list {
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
}

.text_title1{ 
    @include text(title1);
}
.text_title2{ 
    @include text(title2);
}
.text_title3{ 
    @include text(title3);
}
.text_content{ 
    @include text(content);
}
.text_disabled{ 
    @include text(disabled);
}
.text_desc{ 
    @include text(desc);
}
.text_info{ 
    @include text(info);
}
.text_link{ 
    @include text(link);
}
.text_error{ 
    @include text(error);
}
.text_warning{ 
    @include text(warning);
}
.text_sub{ 
    @include text(sub);
}
.text_ellipsis{
    @include text_ellipsis;
}
</style>