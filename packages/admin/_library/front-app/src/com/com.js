
import ComLayout from '@admin/com-layout'
import DLayout from '@support/d-layout'
import DIcon from '@support/d-icon'
import DRightPanel from '@support/d-right-panel'
import DMenu from '@support/d-menu'
import DNavBar from '@support/d-nav-bar'

export default {
    async install(Vue) {
        Vue.component('DLayout', DLayout)
        Vue.component('DIcon', DIcon)
        Vue.component('DMenu', DMenu)
        Vue.component('DRightPanel', DRightPanel)
        Vue.component('DNavBar', DNavBar)
        Vue.component('ComLayout', ComLayout)
    }
}