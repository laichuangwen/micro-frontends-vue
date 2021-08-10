// 因为在各个项目中用类似vite-plugin-style-import 插件所以就直接手动引入
// 样式已经在theme 动态引入，如果不用theme 请手动引入
// Button 如果很在意打包大小请自己手动引入

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
import Cascader from 'element-ui/lib/calendar';
import Transfer from 'element-ui/lib/transfer';
import ColorPicker from 'element-ui/lib/color-picker';
import DatePicker from 'element-ui/lib/date-picker';
import TimeSelect from 'element-ui/lib/time-select';
import TimePicker from 'element-ui/lib/time-picker';



const webUI = [
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
]

export default {
    install(Vue) {
        // 加载dmui
        webUI.forEach(el => {
            Vue.component(el.name, el)
        })
    }
}
