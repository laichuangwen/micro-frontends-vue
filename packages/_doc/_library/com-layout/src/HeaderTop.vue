<template>
    <div :class="s.view">
        <div :class="s.left">
            <h3 :class="s.logo">文档库</h3>
        </div>
        <div :class="s.main">
            <template v-for="(main, index) in list">
                <a :key="index"
                    :class="s.topMenu"
                    :href="main.groups ? 'javascript:;' : `${main.path}`">
                    <d-icon :type="main.icon" />
                    <span>
                        {{ main.title }}
                    </span>
                    <div v-if="main.groups"
                        :class="s.dropdown">
                        <template v-for="(group, groupIndex) in main.groups">
                            <span :key="`group-${groupIndex}`"
                                :class="{
                                        [s.title]: true,
                                        [s.line]: groupIndex !== 0
                                    }">
                                {{ group.title }}
                            </span>
                            <a v-for="(sub, subIndex) in group.children"
                                :key="`sub-${groupIndex}-${subIndex}`"
                                :href="`${sub.path}`">
                                {{ sub.title }}
                            </a>
                        </template>
                    </div>
                </a>
                <div v-if="index !== list.length - 1"
                    :key="`divider-${index}`"
                    :class="s.divider" />
            </template>
        </div>
        <div :class="s.right">
            <!-- search -->
            <!-- <SearchInput /> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => [
                {
                    path: '/guide',
                    title: '指南',
                },
                {
                    path: '/core',
                    title: '核心模块',
                },
                {
                    path: '/ui',
                    title: '通用UI',
                },
                {
                    title: '项目',
                    groups: [
                        {
                            title: '业务系统',
                            children: [
                                {
                                    path: '/product-admin',
                                    title: '后台管理',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" module="s">
$top-height: 65px;
$left-width: 280px;
$main-width: 700px;
$right-width: 195px;
.view {
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 1280px;
    height: $top-height;
    max-height: $top-height;
    box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
    border-bottom: 1px solid #d4dadf;
    background-color: #fff;
    z-index: 20;

    .left,
    .main,
    .right {
        display: flex;
        align-items: center;
    }

    .main {
        .topMenu {
            color: #495060;
            display: inline-block;
            height: 65px;
            line-height: 63px;
            position: relative;
            cursor: pointer;

            svg {
                color: #495060;
                font-size: 20px;
                margin-right: 5px;
                margin-bottom: -1px;
            }

            &:hover .dropdown {
                display: block;
            }
        }

        .dropdown {
            display: none;
            line-height: 14px;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            border: 1px solid #ebeef5;
            border-radius: 4px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            padding: 10px 0;
            cursor: auto;
            max-height: calc(100vh - #{$top-height});
            overflow: auto;

            .title {
                position: relative;
                display: block;
                white-space: nowrap;
                padding: 0 20px;
                line-height: 26px;
                color: #495060;
                font-weight: bold;
                text-align: left;
            }

            > a {
                position: relative;
                display: block;
                white-space: nowrap;
                padding: 0 20px;
                line-height: 26px;
                color: #606266;
                text-align: left;
                cursor: pointer;

                &:hover {
                    background: #f5f7fa;
                }
            }

            .line {
                border-top: 1px solid #ebeef5;
                margin-top: 6px;

                &::before {
                    content: '';
                    height: 6px;
                    display: block;
                    margin: 0 -20px;
                    background-color: #fff;
                }
            }

            [disabled] {
                pointer-events: none;
                color: #b8b8b8;
            }
        }

        .divider {
            width: 1px;
            height: 15px;
            margin: 0 30px;
            background: #bbbec4;
        }
    }
}
.logo {
    display: inline-block;
    height: 35px;
    border-right: 1px solid #e6ecf1;
    text-align: center;
    width: $left-width;
    color: #364149;
    line-height: 35px;
    font-weight: 260;
    font-size: 24px;
    cursor: pointer;
}
.main {
    .topMenu {
        color: #495060;
        display: inline-block;
        height: 65px;
        line-height: 63px;
        position: relative;
        cursor: pointer;

        svg {
            color: #495060;
            font-size: 20px;
            margin-right: 5px;
            margin-bottom: -1px;
        }

        &:hover .dropdown {
            display: block;
        }
    }

    .dropdown {
        display: none;
        line-height: 14px;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 10px 0;
        cursor: auto;
        max-height: calc(100vh - #{$top-height});
        overflow: auto;

        .title {
            position: relative;
            display: block;
            white-space: nowrap;
            padding: 0 20px;
            line-height: 26px;
            color: #495060;
            font-weight: bold;
            text-align: left;
        }

        > a {
            position: relative;
            display: block;
            white-space: nowrap;
            padding: 0 20px;
            line-height: 26px;
            color: #606266;
            text-align: left;
            cursor: pointer;

            &:hover {
                background: #f5f7fa;
            }
        }

        .line {
            border-top: 1px solid #ebeef5;
            margin-top: 6px;

            &::before {
                content: '';
                height: 6px;
                display: block;
                margin: 0 -20px;
                background-color: #fff;
            }
        }

        [disabled] {
            pointer-events: none;
            color: #b8b8b8;
        }
    }

    .divider {
        width: 1px;
        height: 15px;
        margin: 0 30px;
        background: #bbbec4;
    }
}
</style>
