
> 对所有浏览器样式进行默认设置，对字体进行统一规范，力求在各个操作系统下都有最佳展示效果，在不支持优先字体的情况，使用备用字体

## 中文字体

<div class="demo-typo-box typo-PingFang">
  和畅惠风
  <div class="name">PingFang SC (优先字体)</div>
</div>
<div class="demo-typo-box typo-Hiragino">
  和畅惠风
  <div class="name">Hiragino Sans GB (备用字体)</div>
</div>
<div class="demo-typo-box typo-Microsoft">
  和畅惠风
  <div class="name">Microsoft YaHei (次级字体)</div>
</div>

## 英文／数字字体

<div class="demo-typo-box typo-Helvetica-Neue">
  RGag
  <div class="name">Helvetica Neue (优先字体)</div>
</div>
<div class="demo-typo-box typo-Helvetica">
  RGag
  <div class="name">Helvetica (备用字体)</div>
</div>
<div class="demo-typo-box typo-Arial">
  RGag
  <div class="name">Arial (次级字体)</div>
</div>

<style lang="scss">
.demo-typo-box {
  height: 200px;
  width: 200px;
  position: relative;
  border: 1px solid #eaeefb;
  font-size: 40px;
  color: #1f2d3d;
  text-align: center;
  line-height: 162px;
  padding-bottom: 36px;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 17px;
  border-radius: 4px;
  .name {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    border-top: 1px solid #eaeefb;
    font-size: 14px;
    color: #8492a6;
    line-height: 35px;
    text-align: left;
    text-indent: 10px;
    font-family: 'Helvetica Neue';
  }
}
.typo-PingFang {
  font-family: 'PingFang SC';
}
.typo-Hiragino {
  font-family: 'Hiragino Sans GB';
}
.typo-Microsoft {
  font-family: 'Microsoft YaHei';
}
/* 英文 */
.typo-Helvetica-Neue {
  font-family: 'Helvetica Neue';
}
.typo-Helvetica {
  font-family: 'Helvetica';
}
.typo-Arial {
  font-family: 'Arial';
}
</style>

## 具体内容
```scss
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers*/
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
    display: block;
}

blockquote,
q {
    quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

a {
    cursor: pointer;
    color: $color-link;
    -webkit-backface-visibility: hidden;
    text-decoration: none;

    &:hover {
        color: $color-link-hover;
    }
}

li {
    list-style: none;
}

body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    line-height: 1;
    font-size: 14px;
}

* {
    box-sizing: border-box;
}
```