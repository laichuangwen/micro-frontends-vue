<template>
    <el-dropdown ref="dropdown"
        placement="bottom-end"
        trigger="hover"
        size="medium"
        :disabled="false"
        :hide-on-click="true"
        :show-timeout="250"
        :hide-timeout="150"
        @command="onCmd"
        @visible-change="(visible) => {}">
        <figure :class="s.avatar">
            <el-avatar :size="32"
                :src="info.avatar"
                alt="">
            </el-avatar>
        </figure>
        <el-dropdown-menu slot="dropdown"
            style="width: 180px;">
            <li :class="s.logoWrapper">
                <div :class="s.logoLeft">
                    <el-avatar shape="circle"
                        :size="48"
                        :src="info.avatar"
                        alt="" />
                </div>
                <div :class="s.nameRight">
                    <div :class="s.name">
                        {{ info.name }}
                    </div>
                </div>
            </li>
            <el-dropdown-item :class="s.item"
                :selected="false"
                :disabled="false"
                :divided="false"
                command="center">
                应用中心
            </el-dropdown-item>
            <el-dropdown-item :class="s.item"
                :selected="false"
                :disabled="false"
                :divided="false"
                command="signOut">
                退出登录
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        user(){
            return this.$store.state.user
        },
        info(){
            return this.user.info
        }
    },
    methods: {
        async onCmd(cmd) {
            switch (cmd) {
                case 'center':
                    history.pushState(null, '/center', '/center')
                    //hyperlink.open('/center')
                    break
                case 'signOut':
                    //  auth.signout()
                    break
                default:
                    break
            }
        }
    }
}
</script>

<style lang="scss" module="s">
.avatar {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.item {
    // line-height: 40px;
}

.logoWrapper {
    display: flex;
    align-items: center;
    padding: 6px 16px 16px;
    margin-bottom: 8px;
    border-bottom: 1px solid #f0f4f8;
}

.nameRight {
    padding-left: 16px;
}

.name {
    font-size: 16px;
    font-weight: bold;
    color: #1c2438;
}
</style>
