
const clean = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    devtool:'source-map',

    plugins:[
        new clean.CleanWebpackPlugin(),
    ],

    
}