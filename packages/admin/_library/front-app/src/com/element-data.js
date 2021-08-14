// 因为在各个项目中用类似vite-plugin-style-import 插件所以就直接手动引入
// 样式已经在theme 动态引入，如果不用theme 请手动引入
// Button 如果很在意打包大小请自己手动引入

import Pagination from 'element-ui/lib/pagination';
import Table from 'element-ui/lib/table';
import TableColumn from 'element-ui/lib/table-column';
import Tag from 'element-ui/lib/tag';
import Tree from 'element-ui/lib/tree';
import Progress from 'element-ui/lib/progress';
import Badge from 'element-ui/lib/badge';
import Avatar from 'element-ui/lib/avatar';
import Skeleton from 'element-ui/lib/skeleton';
import Empty from 'element-ui/lib/empty';

const webUI = [
    Table,
    TableColumn,
    Tag,
    Progress,
    Pagination,
    Tree,
    Badge,
    Avatar,
    Skeleton,
    Empty,
];

export default {
    install(Vue) {
        // 加载dmui
        webUI.forEach((el) => {
            Vue.component(el.name, el);
        });
    },
};
