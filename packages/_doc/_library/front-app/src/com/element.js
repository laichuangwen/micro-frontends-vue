// 样式已经在theme 动态引入，如果不用theme 请手动引入
import Container from 'element-ui/lib/container';
import Header from 'element-ui/lib/header';
import Aside from 'element-ui/lib/aside';
import Main from 'element-ui/lib/main';
import Message from 'element-ui/lib/message';

const webUI = [
    Container,
    Header,
    Aside,
    Main,
];
export default {
    install(Vue) {
        // 加载dmui
        webUI.forEach((el) => {
            Vue.component(el.name, el);
        });
        Vue.prototype.$message = Message;
    },
};
