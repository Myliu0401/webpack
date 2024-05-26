module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /index\.js/,
            use: [{
                    loader: './loaders/loader-1.js',
                    options: {
                        naisi: '变量',
                    }
                },
                {
                    loader: './loaders/loader-2.js'
                },
                {
                    loader: './loaders/loader-3.js'
                },
                {
                    loader: './loaders/loader-4.js'
                },
                {
                    loader: './loaders/loader-5.js'
                }
            ]
        }]
    }
}