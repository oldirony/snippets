var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './test/index.js',
        './test/css/main.scss'
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devtool: 'source-map',
    output: {
        filename: './test/bundle.js'
    },
    plugins : [
        new ExtractTextPlugin({ filename: './test/bundle.css', disable: false, allChunks: true })
    ]
};