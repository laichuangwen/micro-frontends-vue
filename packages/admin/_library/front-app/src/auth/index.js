export default ({ Vue }) => {
    const {
        util: {
            sessionStorage,
            cookie,
        },
        api,
    } = Vue.$ctx;
    class Auth {
        constructor() {
            this.tokenName = 'accesstoken';

            // 获取token
            const { token } = this.getToken();
            this.token = token;
            // 写入api配置
            if (token) {
                api.option.headers.token = token;
                // console.log(api.option.headers.token);
                // 路径上权限过滤
            } else if (!['/login'].includes(location.pathname)) {
                this.signout();
                throw new Error('缺少accesstoken，请重新登录');// 抛出异常可以打断后续的代码执行
            }
        }

        // 获取token
        getToken() {
            const json = cookie.get(this.tokenName); // 获取token字符串
            if (!json) {
                return '';
            }
            const tokenObj = JSON.parse(json); // 解析token为对象
            return {
                token: tokenObj.token,
            };
        }

        // 设置token
        setToken({
            token,
        }) {
            api.option.headers.token = token;
            // 设置token到cookie中
            cookie.set(this.tokenName, JSON.stringify({
                status: 0, // 上传文件有个状态
                token,
            }), {
                expDay: 10,
            });
        }

        // 清空token
        clearToken() {
            api.option.headers.token = '';
            cookie.remove(this.tokenName);
            sessionStorage.remove(this.tokenName);
        }

        // 退出登录
        async signout() {
            this.clearToken();
            location.replace('/login');
        }
    }

    Vue.$ctx.auth = new Auth();
};
