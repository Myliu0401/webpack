module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /.jpg|.png/,
            use: [{
                loader: './loaders/img-loader.js'
            }]
        }]
    },
}