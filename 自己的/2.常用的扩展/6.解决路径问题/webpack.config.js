const clean = require('clean-webpack-plugin');
const html = require('html-webpack-plugin');
const copy = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',

    output: {
        filename: 'script/[name]-[hash:5].js',
        /* publicPath:'/' */
        
    },

    plugins: [
        new clean.CleanWebpackPlugin(),
        new html({
            template: './public/index.html',
            filename: 'html/index.html',
        }),
    ],

    devServer: {
        open: true,
        stats: {
            colors: true,
            modules: false
        },
        openPage:'/html/index.html', //在服务器中,没有改输出路径的话,dist文件作为根文件夹,'/html/index.html'就是在根文件夹里
    },

    module: {
        rules: [{
            test: /\.jpg|.png/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name]-[hash:5].[ext]',
                    publicPath:'../' , //不是单纯的 / 就不会被判定为绝对路径
                }
            }]
        }],
    }

}