<script>
import VTopBar from './VTopBar.vue';
import VTable from './VTable.vue';

export default {
    components: {
        VTopBar,
        VTable,
    },
    props: {
        slots: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {};
    },
    render(createElement) {
        console.log(this.slots);
        const { topbarLeft, topbarTool, custom } = this.slots;
        const topBar = createElement('VTopBar', {
            props: {},
            scopedSlots: {
                default: custom,
                left: topbarLeft,
                right: topbarTool,
            },
        });
        console.log('main_attrs', this.$attrs);
        const table = createElement('VTable', {
            attrs: {
                ...this.$attrs,
            },
            props: {
                ...this.$attrs,
            },
            scopedSlots: {
                ...this.slots,
            },
        });
        return createElement('div', {}, [topBar, table]);
    },
};
</script>

<style lang="scss" module="s"></style>
