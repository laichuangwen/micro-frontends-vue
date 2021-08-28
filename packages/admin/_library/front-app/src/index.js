import env from './env';
import auth from './auth';
import util from './util';
import icon from './icon';
import router from './router';
import com from './com';
import theme from './theme';
import api from './api';
import store from './store';
import {
    RouterMicroHooks, RouterMainHooks, InitMainStore, InitMicroStore,
} from './main';

export default (App, option) => {
    const {
        env: {
            sys,
        },
    } = option;
    if (sys === '_main') {
        // 主应用
        App.task('工具方法', (app) => util(app))
            .task('环境', (app) => env(app, option))
            .task('路由', (app) => router(app, option))
            .task('基础组件', (app) => com(app))
            .task('图标', (app) => icon(app))
            .task('主题', ['基础组件'], (app) => theme(app))
            .task('请求处理', ['基础组件'], (app) => api(app))
            .task('状态管理', ['环境', '请求处理'], (app) => store(app))
            .task('权限处理', ['状态管理'], (app) => auth(app))
            .task('主应用状态管理', ['状态管理'], (app) => InitMainStore(app))
            .task('主应用路由钩子', ['基础组件', '路由', '主应用状态管理'], (app) => RouterMainHooks(app));
    } else {
        // 微应用
        App.task('工具方法', (app) => util(app))
            .task('环境', (app) => env(app, option))
            .task('路由', (app) => router(app, option))
            .task('基础组件', (app) => com(app))
            .task('图标', (app) => icon(app))
            .task('主题', ['基础组件'], (app) => theme(app))
            .task('请求处理', ['基础组件'], (app) => api(app))
            .task('状态管理', ['环境', '请求处理'], (app) => store(app))
            .task('权限处理', ['状态管理'], (app) => auth(app))
            .task('微应用状态管理', ['环境', '请求处理'], (app) => InitMicroStore(app, option))
            .task('微应用路由钩子', ['基础组件', '路由', '状态管理', '微应用状态管理'], (app) => RouterMicroHooks(app));
    }
    return App;
};
