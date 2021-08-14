import qs from 'qs';
import Api from '@support/front-api';

export default (app, option) => {
    Api.install(app, option);
    const { Vue } = app;
    const {
        api,
    } = app.Vue.$ctx;

    api.postQuery = (url, params) => api.post(url, qs.stringify(params));
    api.putQuery = (url, params) => api.put(url, qs.stringify(params));
    api.deleteQuery = (url, params) => api.delete(url, qs.stringify(params));

    // api成功的处理
    api.option.responseSuccess = ({ config, data }) => {
        if (!data.code) {
            // 没有resCode说明可能是文件流
            return Promise.resolve(data);
        } if (data.code === 200) {
            return Promise.resolve(data.result);
        }
        switch (data.errcode) {
        case 100400:
        case 100401:
        case 100403:
            Vue.$message.error('登录已失效,请重新登录!');
            setTimeout(() => {
                Vue.$ctx.auth.signout();
            }, 2000);
            return Promise.reject(data.result);
        case 403:
            Vue.$ctx.store.dispatch('vayne/view/toggle', 'denied');
            return Promise.reject(data.result);
        default: {
            const errToast = config.errToast === undefined || config.errToast;
            if (errToast) {
                Vue.$message.error(data.msg);
            }
            return Promise.reject(data);
        }
        }

        /*
         * } else {
         * return Promise.resolve(data)
         * }
         */
    };
    // api出错时的处理
    api.option.responseError = (error) => {
        const { config, response, message } = error;
        console.log('responseError');
        // 通过axios主动取消请求
        if (message === 'cancel') {
            return error;
        }

        if (!window.navigator.onLine) {
            Vue.$message.error('您的网络挂了,请网络正常后再进行系统操作 (ಥ﹏ಥ)');
            return '您的网络挂了';
        }

        const errToast = config.errToast === undefined || config.errToast;

        let errMsg = response.data;

        if (response.status === 401) {
            Vue.$message.error('登录已失效,请重新登录!');
            setTimeout(() => {
                Vue.$ctx.auth.signout(401);
            }, 2000);
            return Promise.reject(errMsg);
        }

        let errData = {
            msg: response.statusText,
            resultcode: response.status,
        };
        if (typeof errMsg === 'object') {
            errMsg = response.data;
            errData = {
                msg: errMsg.error,
                resultcode: errMsg.resultcode,
                data: errMsg.data,
            };
        }
        if (errToast) {
            Vue.$message.error(errData.msg || '服务器开小车了~');
        }
        return Promise.reject(errData);
    };
};
