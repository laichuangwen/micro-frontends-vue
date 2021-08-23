const rules = {
    name: [
        { required: true, message: '请输入名称', trigger: 'change' },
        {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'change',
        },
    ],
    age: [{ required: true, message: '请输入年龄', trigger: 'change' }],
    sex: [{ required: true, message: '请选择', trigger: 'change' }],
};
const formItems = [
    {
        label: '名字',
        prop: 'name',
        type: 'el-input',
        props: {
            placeholder: '请输入名字',
        },
    },
    {
        label: '年龄',
        prop: 'age',
        type: 'el-input',
        props: {
            placeholder: '请输入年龄',
        },
    },
    {
        label: '性别',
        prop: 'sex',
        type: 'd-radio-smart',
        props: {
            list: [
                {
                    label: '男',
                    value: 0,
                },
                {
                    label: '女',
                    value: 1,
                },
            ],
        },
    },
];
export default {
    rules,
    formItems,
};
