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
import 'element-ui/lib/theme-chalk/icon.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
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
import Input from 'element-ui/lib/input';
import InputNumber from 'element-ui/lib/input-number';
import Radio from 'element-ui/lib/radio';
import RadioGroup from 'element-ui/lib/radio-group';
import RadioButton from 'element-ui/lib/radio-button';
import Checkbox from 'element-ui/lib/checkbox';
import CheckboxButton from 'element-ui/lib/checkbox-button';
import CheckboxGroup from 'element-ui/lib/checkbox-group';
import Switch from 'element-ui/lib/switch';
import Select from 'element-ui/lib/select';
import Option from 'element-ui/lib/option';
import OptionGroup from 'element-ui/lib/option-group';
import Button from 'element-ui/lib/button';
import ButtonGroup from 'element-ui/lib/button-group';
import Form from 'element-ui/lib/form';
import FormItem from 'element-ui/lib/form-item';
import Slider from 'element-ui/lib/slider';
import Upload from 'element-ui/lib/upload';
import Rate from 'element-ui/lib/rate';
import Cascader from 'element-ui/lib/cascader';
import Transfer from 'element-ui/lib/transfer';
import ColorPicker from 'element-ui/lib/color-picker';
import DatePicker from 'element-ui/lib/date-picker';
import TimeSelect from 'element-ui/lib/time-select';
import TimePicker from 'element-ui/lib/time-picker';
import Loading from 'element-ui/lib/loading';
import Message from 'element-ui/lib/message';
import MessageBox from 'element-ui/lib/message-box';
import Notification from 'element-ui/lib/notification';
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
import Scrollbar from 'element-ui/lib/scrollbar';

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
    CollapseTransition,
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
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Slider,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Form,
    FormItem,
    Upload,
    Rate,
    Cascader,
    ColorPicker,
    Transfer,
    DatePicker,
    TimeSelect,
    TimePicker,
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
    Scrollbar,

];
export default {
    install(Vue) {
        // 加载dmui
        webUI.forEach((el) => {
            Vue.component(el.name, el);
        });
        Vue.use(Loading.directive);
        Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
        Vue.$notify = Vue.prototype.$notify = Notification;
        Vue.$message = Vue.prototype.$message = Message;
    },
};
