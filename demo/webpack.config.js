const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry:  './src/index.js',
    mode: 'development',
    devtool: 'cheap-source-map',
    output: {
        path:       '/',
        publicPath: 'http://localhost:8080/',
        filename:   'bundle.js'
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env']
                }
            }
        },{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    },
    plugins: [
        new DashboardPlugin()
    ]
};
