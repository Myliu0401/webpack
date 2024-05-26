const clean = require('clean-webpack-plugin'); //导入自动清除旧文件模块
const htmlwebpackplugin = require('html-webpack-plugin'); //导入自动生成html文件模块
const CopyPlugin = require('copy-webpack-plugin'); //导入一个静态资源复制规则模块
module.exports = {
    mode: 'development', //配置模式
    devtool: 'source-map', //配置模式

    output: {
        filename: '[name]-[hash:5].js', //配置生成文件的文件名字
    },


    plugins: [ //配置插件
        new clean.CleanWebpackPlugin(),
        new htmlwebpackplugin({
            template: './public/index.html',
        }),
        new CopyPlugin({
            patterns: [{
                from: './public',
                to: './'
            }]
        })
    ],
};