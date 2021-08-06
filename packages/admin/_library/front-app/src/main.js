
import user from './store/user'
import meta from './store/meta'
import menu from './store/menu'
import layout from './store/layout';
import menuSys from './store/menu/menu.js';
/**
 * 校验权限
 */
const validateRight = (to, permissionObj) => {
    const { permission } = to.meta
    switch (Object.prototype.toString.call(permission)) {
        case '[object Boolean]':
            return permission
        case '[object String]':
            return permissionObj[permission]
        case '[object Array]':
            return !Object.keys(permission).some(item => !permissionObj)
        case '[object Function]':
            return permission()
        default:
            return true
    }
}

/**
 * 初始化主应用状态管理
 */

export const InitMainStore = async ({ Vue }) => {
    const { store } = Vue.$ctx
    store.registerModule('user', user)
    store.registerModule('meta', meta)
    store.registerModule('menu', menu)
    store.registerModule('layout', layout)

    // 是否拥有权限
    Vue.$p = Vue.prototype.$p = key => {
        const permission = Vue.$ctx.store.getters['user/permission'] || {}
        return permission[key] || false
    }
}
/**
 * 主应用路由钩子
 */
export const RouterMainHooks = async ({ Vue }) => {
    const {
        $ctx: {
            router,
            store
        }
    } = Vue
    router.beforeEach((to, from, next) => {
        // 初始化微应用菜单列表
        const sysBaseList = Object.keys(menuSys)
        const [base] = to.path.split('/').filter(list => list)
        // 微应用菜单列表
        if (sysBaseList.includes(base)) {
            store.dispatch('menu/initMenus', base)
            const { firstSubMenu } = store.state.menu
            // 去除/线
            const path = to.path.replace(/\//g, '');
            // 默认进入首个子菜单
            if (path === base && firstSubMenu) {
                next({
                    replace: true,
                    path: firstSubMenu
                })
                return
            }
        } else {
            // 主应用的权限控制，微应用的权限控制归微应用触发_mainApp.setGlobalState
            // 权限校验
            const noValid = to.matched.some(item => !validateRight(item, Vue))
            if (noValid) {
                // 设置无权限
                store.dispatch('layout/view/toggle', 'denied')
                next()
                return
            } else {
                // 设置有权限
                console.log('设置有权限');
                store.dispatch('layout/view/toggle')
            }
        }
        next()
    })
}
/**
 * 初始化微应用状态管理
 */

export const InitMicroStore = async ({ Vue }, option) => {
    const { _mainApp } = option
    Vue.$ctx._mainApp = _mainApp
    if (_mainApp.onGlobalStateChange) {
        // 第二个参数要true
        _mainApp.onGlobalStateChange((state, prev) => {
            // 不想放store了，子应用访问主应用用户放一个全局变量
            Vue.$ctx.permission = state.permission
            // 设置校验权限的全局变量
            Vue.$p = Vue.prototype.$p = key => {
                const permission = state.permission || {}
                return permission[key] || false
            }
        }, true);
    }
}

/**
 * 主微应用路由钩子
 */
export const RouterMicroHooks = async ({ Vue }) => {
    const {
        $ctx: {
            router,
            _mainApp,
            permission,
        }
    } = Vue
    if (!_mainApp.setGlobalState) return
    router.beforeEach((to, from, next) => {
        if (!to.matched.length) {
            _mainApp.setGlobalState({
                main: 'deleted'
            })
            next()
            return
        }
        // 权限校验
        const noValid = to.matched.some(item => !validateRight(item, permission))
        if (noValid) {
            // 触发主应用store设置无权限页面
            _mainApp.setGlobalState({
                main: 'denied'
            })
            next()
            return
        } else {
            // 触发主应用store设置去除无权限页面
            _mainApp.setGlobalState({
                main: ''
            })
            // 触发主应用store设置主应用navs（主应用的navs 要根据子应用router变化）
            _mainApp.setGlobalState({
                navs: to.matched.map(list => {
                    return {
                        path: list.path,
                        title: list.meta.title,
                    }
                })
            })
        }
        next()
    })
}
/**
 * 初始化用户配置
 */
export const UserConfig = async ({ Vue }) => {
    const { store } = Vue.$ctx
    await store.dispatch('user/config/init')
}

/**
 * 初始化用户信息
 */
export const UserInfo = async ({ Vue }) => {
    const {
        store
    } = Vue.$ctx
    // manage 获取用户信息
    await store.dispatch('user/info/init') // 获取用户信息
    await store.dispatch('user/permission/init') // 初始化权限
}

