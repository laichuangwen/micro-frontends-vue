import menu from './store/menu';
/**
 * 初始化微应用状态管理
 */

export const InitMicroStore = async ({ Vue }, option) => {
    const { store } = Vue.$ctx;
    store.registerModule('menu', menu);
    const { _mainApp } = option;
    Vue.$ctx._mainApp = _mainApp;
    if (_mainApp.onGlobalStateChange) {
        // 第二个参数要true
        _mainApp.onGlobalStateChange(() => {
            // 微应用回调
            // console.log(state, prev);
        }, true);
    }
};
