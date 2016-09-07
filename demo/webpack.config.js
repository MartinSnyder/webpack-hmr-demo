const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry:  './src/index.js',
    output: {
        path:       'builds/',
        publicPath: 'http://localhost:9000/builds/',
        filename:   'bundle.js'
    },
    devServer: {
        progress: true,
        colors: true,
        port: 9000
    },
    devtool: 'cheap-source-map', // fastest Source map
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    // Needed to find presets in linked modules
                    // http://stackoverflow.com/questions/34574403/how-to-set-resolve-for-babel-loader-presets/
                    presets: ['babel-preset-es2015'].map(require.resolve)
                }
            }
        ]
    },
    plugins: [
        new DashboardPlugin()
    ]
};
