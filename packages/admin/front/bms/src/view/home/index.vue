<template>
  <div :class="s.view">
    <el-button type="primary" @click="jump">跳转</el-button>
    <el-button type="primary" @click="store">设置主应用store</el-button>
    <DGroupSmart
      ref="sel"
      v-model="value"
      @change="change"
      :defaultProps="defaultProps"
      :ajax="ajax"
      name="el-select"
      clearable
    >
      <!-- <template #prefix>
        <span>按钮</span>
      </template>
      <template #empty>
        <span>按钮</span>
      </template> -->
    </DGroupSmart>
    <DRadioSmart
      v-model="value"
      :interceptors="interceptors"
      :defaultProps="defaultProps"
      :ajax="ajax"
    ></DRadioSmart>
  </div>
</template>

<script>
import DGroupSmart from '@support/d-select-smart';
import DRadioSmart from '@support/d-radio-smart';

export default {
    components: {
        DGroupSmart,
        DRadioSmart,
    },
    data() {
        return {
            value: '355',
            loading: true,
            ajax: {
                url: 'https://yapi.142vip.cn/mock/1077/country/all',
            },
            defaultProps: {
                label: 'cnName',
                value: 'callingCode',
            },
            interceptors: {
                then: (res) => {
                    console.log(res);
                    return res.map((item) => ({
                        ...item,
                        border: true,
                    }));
                },
            },
            list: [
                {
                    label: '前端',
                    value: 'web',
                    disabled: true,
                },
                {
                    label: '后端服务',
                    value: 'server',
                },
                {
                    label: '美工',
                    value: 'ui',
                },
            ],
            list1: [
                {
                    label: '前端',
                    value: 'web',
                    children: [
                        {
                            label: '后端服务后端服务后端服务后端服务后端服务后端服务',
                            value: 'server',
                        },
                        {
                            label: '美工',
                            value: 'ui',
                        },
                    ],
                },
                {
                    label: '后端服务',
                    value: 'server',
                    children: [
                        {
                            label: '后端服务',
                            value: 'server1',
                        },
                        {
                            label: '美工',
                            value: 'ui1',
                        },
                    ],
                },
                {
                    label: '美工',
                    value: 'ui',
                    children: [
                        {
                            label: '后端服务',
                            value: 'server2',
                        },
                        {
                            label: '美工',
                            value: 'ui2',
                        },
                    ],
                },
            ],
        };
    },
    mounted() {
        this.$refs.sel.focus();
    },
    methods: {
        jump() {
            // hyperlink.open('/vue')
            history.pushState(null, '/rbac', '/rbac');
        },
        store() {
            this.$ctx._mainApp.setGlobalState({
                main: 'denied',
            });
        },
        change(val) {
            console.log('change', val);
        },
    },
};
</script>

<style lang="scss" module="s">
.view {
  height: 1500px;
}
</style>
