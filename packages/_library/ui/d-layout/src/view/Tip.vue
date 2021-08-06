<template>
    <div :class="s.main">
        <div :class="s.inner">
            <img :src="img">
            <p :class="s.title">
                {{ title }}
            </p>
            <p :class="s.tip">
                {{ tip }}
            </p>
            <el-button v-if="back"
                @click="returnBack">
                返回上一页
            </el-button>
        </div>
    </div>
</template>

<script>
import defaultImg from '../image/default.png';
import deletedImg from '../image/deleted.png';
import deniedImg from '../image/denied.png'
import disabledImg from '../image/disabled.png';
const imgs = {
    default: defaultImg,
    deleted: deletedImg,
    denied: deniedImg,
    disabled: disabledImg,
}
export default {
    props: {
        type: {
            type: String
        },
        title: {
            type: String
        },
        tip: {
            type: String
        },
        back: {
            type: Boolean
        }
    },
    data() {
        return {
            img: imgs[this.type]
        }
    },
    methods: {
        returnBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" module="s">
.main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 400px;

    .inner {
        text-align: center;
    }

    .title {
        margin-top: 16px;
        line-height: 1em;
        font-size: 16px;
        color: #1c2438;
    }

    .tip {
        margin: 8px 0 24px;
        line-height: 1em;
        font-size: 12px;
        color: #80848f;
    }
}
</style>
