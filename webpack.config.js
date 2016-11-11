var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './app/app.jsx',
        vendor: ['react', 'react-dom', 'react-redux', 'react-router'],
        style: ['./app/styles/app.scss']
    },
    output: {
        path: __dirname,
        filename: 'public/js/app.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'public/js/vendor.js'),
        new ExtractTextPlugin('public/css/style.css')
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            'app/components'
        ],
        alias: {
            routes: 'routes/routes.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?[a-z0-9]+)?$/,
                loader: 'url?limit=10000&emitFile=false'   
            }
        ]
    }
}