const loaderUtils = require('loader-utils');

function getIcons(loaderContext, icons) {
    return `{
        ${Object.keys(icons).map((key) => `'${key}':require(${loaderUtils.stringifyRequest(loaderContext, icons[key])}).default.id`)
        .join(',\n')}
    }`;
}

module.exports = function (source, map) {
    console.log('source', source);
    const loaderContext = this;
    const query = loaderUtils.parseQuery(this.resourceQuery) || {};
    const moduleName = query.module === true ? '$icon' : query.module;

    this.callback(
        null, `
        module.exports = function(Component) {
            Component.options.beforeCreate = Component.options.beforeCreate || []
            Component.options.beforeCreate = Component.options.beforeCreate.concat(function(context){
                this['${moduleName}'] = Object.assign({}, this['${moduleName}'], ${getIcons(loaderContext, JSON.parse(source))})
            })
        }`,
        map,
    );
};
