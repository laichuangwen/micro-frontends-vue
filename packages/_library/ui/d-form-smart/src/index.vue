<!-- 智能表单组件plus版 -->
<template>
    <FormSmart
        ref="form"
        v-bind="$attrs"
        v-on="$listeners">
        <slot
            v-for="slot in Object.keys($slots)"
            :slot="slot"
            :name="slot" />
    </FormSmart>
</template>

<script>
import FormSmart from './form.vue';

export default {
    name: 'FormSmart',
    components: {
        FormSmart,
    },
    data() {
        return {
        };
    },
    provide() {
        return {
            rootCompnent: this,
        };
    },
    methods: {
        // 过滤弹窗 on-reset 事件
        filterReset() {
            this.$emit('on-reset');
        },

        /** **********  以下是提供给外部用的方法  *********** */
        // 对整个表单进行校验的方法
        validate(...props) {
            return this.$refs.form.validate(...props);
        },
        // 对部分字段进行校验
        validateField(...props) {
            return this.$refs.form.validateField(...props);
        },
        // 对整个表单进行重置
        resetFields() {
            this.$refs.form.resetFields();
        },
        // 移除表单项的校验结果
        clearValidate(...props) {
            this.$refs.form.clearValidate(...props);
        },
    },
};

</script>

<style lang="scss" module="s">

</style>
