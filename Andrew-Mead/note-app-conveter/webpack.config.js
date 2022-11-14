const path = require('path')

module.exports = {
    entry: {
        index: ["babel-polyfill", "./src/index.js"],
        edit: ["babel-polyfill", "./src/edit.js"],
    },
    output: {
        path: path.resolve(__dirname, 'public/script'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        static: path.resolve(__dirname, '/public'),
        // publicPath: '/http://localhost:8081/'
    },
    devtool: 'source-map'
}

