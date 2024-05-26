//导入plugin插件
const plugin = require('./plugins/filne.js');

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins: [
        new plugin('misi.txt')//获取对象,里面有apply函数
    ],
}