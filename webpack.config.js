var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/app.jsx',
        vendor: ['react', 'react-dom', 'react-redux', 'react-router']
    },
    output: {
        path: __dirname,
        filename: 'public/javascript/app.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'public/javascript/vendor.js')
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
            }
        ]
    }
}