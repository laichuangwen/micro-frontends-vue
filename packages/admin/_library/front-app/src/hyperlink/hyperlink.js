
import pathToRegexp, { parse as parseLink, compile } from './path-to-regexp'
import { _Vue } from './index'

// 所有路由内部链接映射汇总
const linkRoute = require.context('./routes', false, /\.js$/)
const routes = linkRoute.keys().reduce((route, key) => {
    const childLink = linkRoute(key)
    const prevLength = Object.keys(route).length
    const childLength = Object.keys(childLink).length
    Object.assign(route, childLink)
    if (prevLength + childLength > Object.keys(route).length) {
        console.warn(`内部链接出现重名覆盖，请检查文件 ${key}`)
    }
    return route
}, {})

const parseUrl = href => {
    let [
        path,
        query = ''
    ] = href.split(/\?(.*)/g)
    let origin = ''
    if (path.startsWith('/')) {
        origin = location.origin
    } else if (path.startsWith(location.origin)) {
        origin = location.origin
        path = path.replace(origin, '')
    }
    return {
        origin,
        path,
        query: _Vue.$ctx.util.qs.parse(query),
        target: ''
    }
}

// 解析链接
export const parse = (href = '', target) => {
    const qs = _Vue.$ctx.util.qs
    const [
        path,
        query
    ] = href.split(/\?(.*)/g)

    // 处理输入
    for (const link in routes) {
        const regexp = pathToRegexp(link) // 内部链接对应正则
        const result = regexp.exec(path) // 匹配结果
        if (result) {
            // key匹配上了 接下来 将value转换为正确的path

            // 解析result params参数
            const params = parseLink(link).reduce((prev, curr, index) => {
                if (typeof curr === 'object') {
                    prev[curr.name] = result[index]
                }
                return prev
            }, {})

            if (typeof routes[link] === 'function') { // 是function 直接返回
                href = routes[link]({
                    href,
                    params,
                    query: qs.parse(query || '')
                })
                break
            } else {
                // 输出转换结果
                href = compile(routes[link])(params)
                const [
                    href_extend,
                    query_extend
                ] = href.split(/\?(.*)/g)

                href = `${href_extend}${qs.stringify({
                    ...qs.parse(query_extend),
                    ...qs.parse(query)
                }, { addQueryPrefix: true })}`
                break
            }
        }
    }

    let option = parseUrl(href)

    // 解析target
    if (typeof target === 'string') {
        option.target = target
    }
    // 解析option
    if (typeof target === 'object') {
        option = {
            ...option,
            ...target,
            query: {
                ...option.query,
                ...target.query
            }
        }
    }

    // 处理是否新窗口打开
    if (option.query.is_new_window) {
        option.target = '_blank'
    }

    return option
}

export const open = (link, option = '') => {
    const { qs, openWindow } = _Vue.$ctx.util
    const router = Vue.$Router || Vue.$ctx.router

    const { path, origin, query, target } = parse(link, option)
    const href = `${origin}${path}${qs.stringify(query, { addQueryPrefix: true })}`

    if (target === '_blank' || origin !== location.origin) {
        openWindow(href)
    } else {
        const route = resolve({ path, origin, query, target })
        if (typeof route === 'string') {
            location.href = href
        } else {
            route.query = {
                ...route.query,
                ...query
            }
            router && router.push(route)
        }
    }
}

export const com = {
    inheritAttrs: false,
    render(h) { // 这里兼容了旧版vue-jsx
        const to = resolve(this.$attrs.to)
        const attrs = this.$attrs

        if (typeof to === 'string') {
            if (!to.startsWith(location.origin)) {
                delete attrs.target
                return <a href={to} target="_blank" {...{ attrs }} >{this.$slots.default}</a>
            }
            return <a href={to} {...{ attrs }} >{this.$slots.default}</a>
        }
        delete attrs.to
        return <router-link to={to} {...{ attrs }}>{this.$slots.default}</router-link>
    }
}

export const resolve = (href = '') => {
    const qs = _Vue.$ctx.util.qs
    const { path: link, origin, query } = typeof href === 'object' ? href : parse(href)
    const router = _Vue.$Router || _Vue.$ctx.router
    if (router) {
        const base = window.namespace ? `/${window.namespace}` : ''
        const path = link.replace(base, '')// eslint-disable-line
        if (base === '' || path !== link) { // 在命名空间下
            const notFoundRoute = router.resolve('must/notfoundroute').route
            const resolveRoute = router.resolve(path).route
            if (notFoundRoute.name !== resolveRoute.name) {
                const noQueryPath = path.split('?')[0]
                const rs = resolveRoute.matched.find(item => item.regex.test(noQueryPath))
                const { name } = rs
                // 返回路由对象
                return {
                    name,
                    query: resolveRoute.query,
                    params: resolveRoute.params
                }
            }
        }
    }
    // 返回真实地址
    return `${origin}${link}${qs.stringify(query, { addQueryPrefix: true })}`
}
