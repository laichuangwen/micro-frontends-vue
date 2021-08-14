import Util from '@support/front-util';

export default (app) => {
    Util.install(app);
    const { Vue } = app;
    Vue.$ctx.copy = (text) => {
        Vue.$ctx.util.copy(text);
        Vue.prototype.$message.success('复制成功');
    };
};
