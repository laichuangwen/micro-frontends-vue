import DIcon from '@support/d-icon';
import DSelectSmart from '@support/d-select-smart';
import DRadioSmart from '@support/d-radio-smart';
import DCheckboxSmart from '@support/d-checkbox-smart';
import DFormSmart from '@support/d-form-smart';
import DSearchWrap from '@support/d-search-wrap';
import DTableCustom from '@support/d-table-custom';
import DTableTool from '@support/d-table-tool';
import DTablePlus from '@support/d-table-plus';
import DTableSmart from '@support/d-table-smart';

export default {
    async install(Vue) {
        Vue.component('DIcon', DIcon);
        Vue.component('DSelectSmart', DSelectSmart);
        Vue.component('DRadioSmart', DRadioSmart);
        Vue.component('DCheckboxSmart', DCheckboxSmart);
        Vue.component('DFormSmart', DFormSmart);
        Vue.component('DSearchWrap', DSearchWrap);
        Vue.component('DTableCustom', DTableCustom);
        Vue.component('DTableTool', DTableTool);
        Vue.component('DTablePlus', DTablePlus);
        Vue.component('DTableSmart', DTableSmart);
    },
};
