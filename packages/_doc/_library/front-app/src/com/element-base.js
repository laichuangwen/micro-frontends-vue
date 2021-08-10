// 因为在各个项目中用类似vite-plugin-style-import 插件所以就直接手动引入
// 样式已经在theme 动态引入，如果不用theme 请手动引入

import Icon from 'element-ui/lib/icon';
import Container from 'element-ui/lib/container';
import Header from 'element-ui/lib/header';
import Aside from 'element-ui/lib/aside';
import Main from 'element-ui/lib/main';
import Footer from 'element-ui/lib/footer';
import Link from 'element-ui/lib/link';
import Row from 'element-ui/lib/row';
import Col from 'element-ui/lib/col';
// element icon
import 'element-ui/lib/theme-chalk/icon.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';


const webUI = [
    Row,
    Col,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Icon,
    Link,
    CollapseTransition
]
export default {
    install(Vue) {
        // 加载dmui
        webUI.forEach(el => {
            Vue.component(el.name, el)
        })
    }
}
