
const htmlwebpackplugin = require('html-webpack-plugin'); //自动生成html文件,并将js文件以script标签的方式引入

const clean = require('clean-webpack-plugin'); //自动删除旧的文件


module.exports = {
    mode:'development', //配置模式

    devtool:'source-map', //配置源码地图


    output:{  //配置出口
        filename:"[name]-[hash:5].js",
    },
 
    entry:{ //配置入口
        index:'./src/index.js',
        a:'./src/a.js',
    },

    plugins:[ //配置插件
          new htmlwebpackplugin({
            filename:'index.html',
            chunks:['index'],
            template:'./public/index.html',
        }),
          new clean.CleanWebpackPlugin(),
          new htmlwebpackplugin({
            filename:'a.html',
            chunks:['a'],
            template:'./public/index.html',
        }),
    ],
};