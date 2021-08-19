import DIcon from '@support/d-icon';
import DSelectSmart from '@support/d-select-smart';

export default {
    async install(Vue) {
        Vue.component('DIcon', DIcon);
        Vue.component('DSelectSmart', DSelectSmart);
    },
};
