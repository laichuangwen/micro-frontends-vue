/* eslint-disable */
const icons = require.context('svg-sprite-loader!./', true, /^\.\/common\/((?!\/)[\s\S])+\.commonicon$/)
icons.keys().forEach(icons)
/* eslint-enable */
