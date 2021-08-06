
import axios from 'axios'

const defaultOption = {
    headers: {},
    // 请求发送前
    requestSuccess: config => config,
    requestError: error => Promise.reject(error),
    responseSuccess: response => Promise.resolve(response.data),
    responseError: error => Promise.reject(error)
}

class Api {
    constructor(option) {
        this.option = {
            ...defaultOption,
            ...option
        }

        // 暴露常用请求方法
        Array.of('get', 'post', 'delete', 'put', 'patch', 'request').forEach(item => {
            this[item] = (...args) => {
                const axiosInstance = axios.create(this.option)
                // 加载拦截器配置
                axiosInstance.interceptors.request.use(this.option.requestSuccess, this.option.requestError)
                axiosInstance.interceptors.response.use(this.option.responseSuccess, this.option.responseError)
                return axiosInstance[item].apply(this.axiosInstance, args)
            }
        })
    }

    createInstance(option) {
        return new Api({
            ...this.option,
            ...option
        })
    }

    static install({ Vue }, option) {
        Vue.$ctx.api = new Api(option)
    }
}

export default Api
