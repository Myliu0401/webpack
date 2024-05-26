module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /index.css/,
            use: [{
                loader: './loader/css-loader.js'
            }]
        }]
    }
}