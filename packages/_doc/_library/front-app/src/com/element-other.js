// 因为在各个项目中用类似vite-plugin-style-import 插件所以就直接手动引入
// 样式已经在theme 动态引入，如果不用theme 请手动引入
// Button 如果很在意打包大小请自己手动引入

import Dialog from 'element-ui/lib/dialog';
import Dropdown from 'element-ui/lib/dropdown';
import DropdownMenu from 'element-ui/lib/dropdown-menu';
import DropdownItem from 'element-ui/lib/dropdown-item';
import Menu from 'element-ui/lib/menu';
import Submenu from 'element-ui/lib/submenu';
import MenuItem from 'element-ui/lib//menu-item';
import MenuItemGroup from 'element-ui/lib/menu-item-group';
import Popover from 'element-ui/lib/popover';
import Tooltip from 'element-ui/lib/tooltip';
import Breadcrumb from 'element-ui/lib/breadcrumb';
import BreadcrumbItem from 'element-ui/lib/breadcrumb-item';
import Tabs from 'element-ui/lib/tabs';
import TabPane from 'element-ui/lib/tab-pane';
import Tag from 'element-ui/lib/tag';
import Card from 'element-ui/lib/card';
import Carousel from 'element-ui/lib/carousel';
import CarouselItem from 'element-ui/lib/carousel-item';
import Collapse from 'element-ui/lib/collapse';
import CollapseItem from 'element-ui/lib/collapse-item';
import Divider from 'element-ui/lib/divider';
import Image from 'element-ui/lib/image';
import Backtop from 'element-ui/lib/backtop';
import PageHeader from 'element-ui/lib/page-header';
import CascaderPanel from 'element-ui/lib/cascader-panel';
import Drawer from 'element-ui/lib/drawer';
import Popconfirm from 'element-ui/lib/popconfirm';
import Scrollbar from 'element-ui/lib/scrollbar.js';


const webUI = [
    Drawer,
    Dialog,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Tabs,
    TabPane,
    Tag,
    Card,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Divider,
    Image,
    Backtop,
    PageHeader,
    CascaderPanel,
    Popconfirm,
    Scrollbar
]

export default {
    install(Vue) {
        // 加载dmui
        webUI.forEach(el => {
            Vue.component(el.name, el)
        })
    }
}
