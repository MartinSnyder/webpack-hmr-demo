const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

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
        port:9000
    },
    devtool: 'cheap-eval-source-map', // fastest Source map
    progress: true,
    resolve: {
        // Needed to require .jsx files without specifying the suffix
        // http://discuss.babeljs.io/t/es6-import-jsx-without-suffix/172/2
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        // Needed to apply babel to linked modules
        // https://github.com/webpack/webpack/issues/1083
        root: path.join(__dirname, 'node_modules')
    },
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
            },
            {
                test: /.jsx$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    // Needed to handle 'npm link'ed modules
                    // http://stackoverflow.com/questions/34574403/how-to-set-resolve-for-babel-loader-presets/
                    presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-react-hmre'].map(require.resolve)
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
        new DashboardPlugin()
    ]
};
