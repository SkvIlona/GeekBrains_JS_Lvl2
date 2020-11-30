const path = require('path')

module.exports = {
    entry: './src/shop.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader' }
                ]
            }
        ]
    }

}