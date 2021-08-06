
const defaultOption = {
    color: '#409EFF',
    version: '2.15.3'
}

class Theme {
    // 固定不能更改,需要这个值对比更改
    ORIGINAL_THEME = '#409EFF'
    chalk = '';
    theme = '';
    constructor(option) {
        this.option = {
            ...defaultOption,
            ...option
        }
        const { color } = option
        if (color) {
            this.updateTheme(color)
        }
    }
    async updateTheme(color) {
        const oldVal = this.chalk ? this.theme : this.ORIGINAL_THEME
        if (typeof color !== 'string') return
        const themeCluster = this.getThemeCluster(color.replace('#', ''))
        const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
        const getHandler = (variable, id) => {
            return () => {
                const originalCluster = this.getThemeCluster(this.ORIGINAL_THEME.replace('#', ''))
                const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)
                let styleTag = document.getElementById(id)
                if (!styleTag) {
                    styleTag = document.createElement('style')
                    styleTag.setAttribute('id', id)
                    document.head.appendChild(styleTag)
                }
                styleTag.innerText = newStyle
            }
        }
        if (!this.chalk) {
            const url = `https://unpkg.com/element-ui@${this.option.version}/lib/theme-chalk/index.css`
            // const url = './theme.txt'
            await this.getCSSString(url, 'chalk')
        }
        const chalkHandler = getHandler('chalk', 'chalk-style')
        chalkHandler()
        const styles = [].slice.call(document.querySelectorAll('style'))
            .filter(style => {
                const text = style.innerText
                return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
            })
        styles.forEach(style => {
            const { innerText } = style
            if (typeof innerText !== 'string') return
            style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
        })
        document.getElementsByTagName('body')[0].style.setProperty('--color-primary', color);
        this.theme = color
    }
    updateStyle(style, oldCluster, newCluster) {
        let newStyle = style
        oldCluster.forEach((color, index) => {
            newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
        })
        return newStyle
    }
    getCSSString(url, variable) {
        return new Promise(async resolve => {
            const xhr = new XMLHttpRequest()
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
                    resolve()
                }
            }
            xhr.open('GET', url)
            xhr.send()
            // 不用网络请求，本地没网会样式消失
        })
    }
    getThemeCluster(theme) {
        const tintColor = (color, tint) => {
            let red = parseInt(color.slice(0, 2), 16)
            let green = parseInt(color.slice(2, 4), 16)
            let blue = parseInt(color.slice(4, 6), 16)
            if (tint === 0) { // when primary color is in its rgb space
                return [red, green, blue].join(',')
            } else {
                red += Math.round(tint * (255 - red))
                green += Math.round(tint * (255 - green))
                blue += Math.round(tint * (255 - blue))
                red = red.toString(16)
                green = green.toString(16)
                blue = blue.toString(16)
                return `#${red}${green}${blue}`
            }
        }
        const shadeColor = (color, shade) => {
            let red = parseInt(color.slice(0, 2), 16)
            let green = parseInt(color.slice(2, 4), 16)
            let blue = parseInt(color.slice(4, 6), 16)
            red = Math.round((1 - shade) * red)
            green = Math.round((1 - shade) * green)
            blue = Math.round((1 - shade) * blue)
            red = red.toString(16)
            green = green.toString(16)
            blue = blue.toString(16)
            return `#${red}${green}${blue}`
        }
        const clusters = [theme]
        for (let i = 0; i <= 9; i++) {
            clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
        }
        clusters.push(shadeColor(theme, 0.1))
        return clusters
    }
}

export default Theme