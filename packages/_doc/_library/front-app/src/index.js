
import env from './env';
import util from './util';
import icon from './icon';
import router from './router';
import com from './com';
import theme from './theme';
import api from './api';
import store from './store';
import { InitMicroStore } from './main.js';

export default (app, option) => {
    const { env: {
        sys
    } } = option
    if (sys === '_main') {
        // 主应用
        app.task('工具方法', app => util(app))
            .task('环境', app => env(app, option))
            .task('路由', app => router(app, option))
            .task('图标', app => icon(app))
            .task('主题', app => theme(app))
            .task('请求处理', app => api(app))
            .task('状态管理', ['环境', '请求处理'], app => store(app))
    } else {
        // 微应用
        app.task('工具方法', app => util(app))
            .task('环境', app => env(app, option))
            .task('路由', app => router(app, option))
            .task('基础组件', app => com(app))
            .task('图标', app => icon(app))
            .task('主题', ['基础组件'], app => theme(app))
            .task('请求处理', ['基础组件'], app => api(app))
            .task('状态管理', ['环境', '请求处理'], app => store(app))
            .task('微应用状态管理', ['环境', '请求处理'], app => InitMicroStore(app, option))
    }
    return app
}