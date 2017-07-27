const path = require('path');
var config = {
    entry: './src/index.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react'],
                    compact: false,
                    sourceMap: true
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

module.exports = config;
