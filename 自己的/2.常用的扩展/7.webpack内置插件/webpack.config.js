const html = require('html-webpack-plugin');
const clean = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',

    output: {
        filename: 'script/[name]-[hash:3].js'
    },

    plugins: [
        new html({
            template: './public/index.html',
            filename: 'html/index.html'
        }),
        new clean.CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            PI: 'Math.PI',
        }),
        new webpack.BannerPlugin({
            banner: `hash:[hash]
                    name:[name]`
        }),
        new webpack.BannerPlugin({
            banner: `hash:[hash]
                    `
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
        })
    ],

}