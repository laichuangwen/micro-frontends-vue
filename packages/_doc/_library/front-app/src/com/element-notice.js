// 因为在各个项目中用类似vite-plugin-style-import 插件所以就直接手动引入
// 样式已经在theme 动态引入，如果不用theme 请手动引入
// Button 如果很在意打包大小请自己手动引入
import Loading from 'element-ui/lib/loading';
import Message from 'element-ui/lib/message';
import MessageBox from 'element-ui/lib/message-box';
import Notification from 'element-ui/lib/notification';

export default {
    install(Vue) {
        // 加载dmui
        Vue.use(Loading.directive);
        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
        Vue.prototype.$notify = Notification;
        Vue.prototype.$message = Message;
    }
}
