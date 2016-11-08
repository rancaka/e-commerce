module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: 'public/bundle.js'
    },
    resolve: {
        root: __dirname,
        moduleDirectories: [
            'node_modules',
            'app/components'
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-es2015', 'babel-preset-react']
                }
            }
        ]
    }
}