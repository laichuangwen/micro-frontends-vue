
import DemoBlock from '@docs/com-demo-block'
import MdLink from '@docs/com-md-link'
import MdHeading from '@docs/com-md-heading'
import ComLayout from '@docs/com-layout'
import DLayout from '@support/d-layout'
import DIcon from '@support/d-icon'
import DRightPanel from '@support/d-right-panel'
import DMenu from '@support/d-menu'
import DNavBar from '@support/d-nav-bar'

export default {
    async install(Vue) {
        Vue.component('DemoBlock', DemoBlock)
        Vue.component('MdLink', MdLink)
        Vue.component('MdHeading', MdHeading)
        Vue.component('DLayout', DLayout)
        Vue.component('DIcon', DIcon)
        Vue.component('DMenu', DMenu)
        Vue.component('DRightPanel', DRightPanel)
        Vue.component('DNavBar', DNavBar)
        Vue.component('ComLayout', ComLayout)
    }
}