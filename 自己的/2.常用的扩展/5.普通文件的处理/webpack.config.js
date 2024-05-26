//导入自动生成html文件
const html = require('html-webpack-plugin');

//导入自动清除旧文件
const clean = require('clean-webpack-plugin');

//导入自动复制静态资源
const copy = require('copy-webpack-plugin');

const file = require('file-loader');

module.exports = {

    //模式
    mode: 'development',

    //源码地图
    devtool: 'source-map',

    //出口配置
    output: {
        filename: 'script/[name]-[hash:5].js'
    },

    //插件配置
    plugins: [
        new html({
            template: './public/index.html',
        }),
        new clean.CleanWebpackPlugin(),
        /* new copy({
            patterns: [{
                from: './public',
                to: './'
            }]
        }), */
    ],

    //配置搭建服务器
    devServer: {
        open: true,
        stats: { //配置控制输出
            modules: false,
            colors: true,
        }
    },

    //配置模块
    module: { 
        rules: [{
            test: /\.png|\.jpg/,
            use: [{
                /* loader: 'file-loader',
                options:{
                    name:'img/[name]-[hash:3].[ext]'
                } */

                loader:'url-loader',
            }]
        }]
    }


};

console.log(typeof(file) );