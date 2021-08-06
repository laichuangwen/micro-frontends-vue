import menusJson from './menu.js'

function filterMenu(list, permission) {
    const menus = []
    list.forEach(item => {
        if (item.permission && permission && !permission[item.permission]) return
        // if (item.permission) return
        if (item.children && item.children.length) {
            const childs = filterMenu(item.children, permission)
            if (!childs.length) return
            item.children = childs
        }
        menus.push(item)
    })
    return menus
}

export default {
    namespaced: true,
    state: {
        rootMenus: [],
        subMenus: [],
        firstSubMenu: '',
        navs: []
    },
    mutations: {
        update(state, val) {
            for (const i in val) {
                state[i] = val[i]
            }
        }
    },
    actions: {
        initMenus({ commit }, sys) {
            // 过滤系统菜单
            const permission = this.getters['user/permission']
            const curMenus = menusJson[sys]
            const menus = filterMenu(curMenus, permission)
            // 获取根菜单
            const rootMenus = menus.map(item => {
                const { children, ...menu } = item
                return menu
            })
            // 获取子菜单
            const curRootRoute = menus.find(item => item.route === sys)
            const subMenus = curRootRoute && curRootRoute.children ? curRootRoute.children : []
            // 获取首个子菜单
            let firstSubMenu = ''
            if (subMenus.length) {
                const [firstMenu] = subMenus
                firstSubMenu = firstMenu.path
                if (firstMenu.children) {
                    firstSubMenu = firstMenu.children[0].path
                }
            }
            commit('update', { rootMenus, subMenus, firstSubMenu })
        },
        setNavs({ commit }, navs = []) {
            commit('update', { navs })
        }
    }
}
