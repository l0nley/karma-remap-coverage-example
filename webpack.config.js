var path = require('path');

module.exports = {
    entry: './src/core.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/assets/",
        filename: 'bundle.min.js'
    },
    devtool: 'inline-source-map',
    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js','.ts']
    },
    module: {
        loaders: [
            {
                test: /\.(j|t)s$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            }
        ]
    }
};