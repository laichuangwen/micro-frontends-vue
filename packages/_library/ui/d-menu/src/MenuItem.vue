<template>
    <div v-if="item&&item.children&&item.children.length">
        <el-submenu
            :key="item.path"
            :index="item.path"
            popper-append-to-body>
            <template slot="title">
                <item-icon :icon="item.icon"></item-icon>
                <span>{{item.title}}</span>
            </template>
            <template>
                <menu-item v-for="child in item.children"
                    :key="child.path"
                    :item="child">
                </menu-item>
            </template>
        </el-submenu>
    </div>
    <el-menu-item v-else
        :key="item.path"
        :index="item.path">
        <item-icon :icon="item.icon"></item-icon>
        <span slot="title">{{item.title}}</span>
    </el-menu-item>
</template>

<script>
import ItemIcon from './ItemIcon.vue';

export default {
    name: 'MenuItem',
    components: {
        ItemIcon,
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        };
    },
};
</script>
