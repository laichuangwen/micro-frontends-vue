<template>
    <div>
        <div :class="[s.item,(active||hashActive)?s.active:'']"
            @click="to(item)">
            <d-icon v-show="icon"
                :type="icon"></d-icon>
            {{title}}
        </div>
        <div v-if="active"
            :class="s.children">
            <SideItem v-for="list in anchor"
                type="anchor"
                :key="list.name"
                :item="list"></SideItem>
        </div>
        <div v-if="item.children"
            :class="s.children">
            <SideItem v-for="list in item.children"
                :key="list.name"
                :item="list"></SideItem>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideItem',
    props: {
        type: {
            type: String,
            defalut: '',
        },
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {
        anchor() {
            return this.$store.state.menu.anchor;
        },
        hashActive() {
            if (this.type === 'anchor') {
                return this.$route.hash === `#${this.item.name}`;
            }
            return false;
        },
        active() {
            return this.$route.name === this.item.name;
        },
        icon() {
            if (this.item.meta && this.item.meta.icon) {
                return this.item.meta.icon;
            }
            return '';
        },
        title() {
            if (this.item.meta && this.item.meta.title) {
                return this.item.meta.title;
            }
            return '';
        },

    },
    data() {
        return {
        };
    },
    methods: {
        to({ name }) {
            if (this.$route.name === name) {
                return;
            }
            if (this.type === 'anchor') {
                const url = `/${this.$route.name.replaceAll('.', '/')}#${name}`;
                history.pushState(null, url, url);
                return;
            }
            this.$router.push({ name });
        },
    },
};
</script>

<style lang="scss" module="s">
.item {
    width: 100%;
    height: 37px;
    display: flex;
    padding: 7px 24px 7px 22px;
    position: relative;
    align-items: center;
    color: #495060;
    cursor: pointer;
    user-select: none;

    svg {
        color: #495060;
        font-size: 18px;
        margin: 0 5px 0 2px;
    }

    &:hover {
        background: #e6ecf1;
        color: #80848f;
    }

    &.active {
        color: $color-link;
        background: #fff;

        svg {
            color: #0bb27a;
        }

        &:hover {
            color: $color-link;
            background: #fff;
        }
    }
}
.children {
    margin-left: 24px;
    border-left: 1px solid #e6ecf1;
        padding-bottom: 8px;
}
</style>
