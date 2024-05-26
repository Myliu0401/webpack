const html = require('html-webpack-plugin');
const copy = require('copy-webpack-plugin');

module.exports = {

    output: {
        filename: 'script/[name]-[chunkhash:3].js'
    },

    entry: {
        list: './src/list.js',
        detail: './src/detail.js'
    },

    plugins: [
        new html({
            template: './public/list.html',
            filename: 'list.html',
            chunks: ['list'],
        }),
        new html({
            template: './public/detail.html',
            filename: 'detail.html',
            chunks: ['detail']
        }),

        new copy({
            patterns: [{
                    from: './public/img',
                    to: './img'
                },
                {
                    from: './public/css',
                    to: './css'
                }
            ]
        })
    ],

    stats: {
        colors: true,
        modules: false,
    },

    devServer: {
        open: true,
        openPage: 'list.html',
        proxy: {
            '/api': {
                target: 'http://yuanjin.tech:5100',
                changeOrigin: true,
            }
        }
    }


}