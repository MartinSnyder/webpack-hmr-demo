const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry:  './src/index.js',
    devtool: 'cheap-source-map',
    output: {
        path:       '/',
        publicPath: 'http://localhost:8080/',
        filename:   'bundle.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: 'es2015'
            }
        },{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    },
    plugins: [
        new DashboardPlugin()
    ]
};
