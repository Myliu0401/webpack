
/* const { CleanWebpackPlugin }  = require('clean-webpack-plugin'); */
const clean = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool:"source-map",


    plugins:[
         new clean.CleanWebpackPlugin(),  //清除旧文件的函数
    ],

    output:{
        filename:"[name]-[hash:5].js",
    }
}