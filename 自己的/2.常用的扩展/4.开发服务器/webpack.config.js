const clean = require('clean-webpack-plugin');
const html = require('html-webpack-plugin');
const copy = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',

    output: {
        filename: 'script/[name]-[hash].js',
    },

    plugins: [
        new clean.CleanWebpackPlugin(),
        new html({
            template:'./public/index.html'
        }),
        new copy({
            patterns:  [
              { from: './public', to: './' },
            ],
          })
    ],

    //给 webpack-dev-server 配置
    devServer:{
        port:65535, //指定端口号
        open:true,
        index:'index.html',
        stats:{
            colors:true,
            modules:false,
        },
        proxy:{
            "/api":{
                target: 'https://open.duyiedu.com',
                changeOrigin:true //根据服务器更改请求头
            }
        }
    }
}