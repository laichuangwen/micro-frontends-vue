import DemoBlock from '@docs/com-demo-block';
import MdLink from '@docs/com-md-link';
import MdHeading from '@docs/com-md-heading';
import ComLayout from '@docs/com-layout';

export default {
    async install(Vue) {
        Vue.component('DemoBlock', DemoBlock);
        Vue.component('MdLink', MdLink);
        Vue.component('MdHeading', MdHeading);
        Vue.component('ComLayout', ComLayout);
    },
};
