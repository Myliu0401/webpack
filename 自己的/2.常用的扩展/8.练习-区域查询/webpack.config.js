const dev = require('./webpack.dev.js');
const pro = require('./webpack.prod.js');
const yiyan = require('./webpack.yiyan.js');

/* 


*/
module.exports = function (env) {
    dev.plugins = [...dev.plugins, ...yiyan.plugins];
    if (env && env === 'dev') { //开发环境
        return {
            ...dev,
            ...yiyan,
        }
    } else { //生产环境
        return {
            ...pro,
            ...yiyan,
        }
    }
}
