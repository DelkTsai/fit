var resolve = require('./resolve')
var externals = require('./externals')

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: __dirname + '/output',
        publicPath: '/output/',
        filename: 'index.js'
    },

    externals: externals,

    module: {
        loaders: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: [/node_modules/, /demo\/lists/],
                loaders: ['react-hot-loader', 'ts-loader', 'html-path-loader']
            }, {
                test: /\.(jsx|js|es6)?$/,
                exclude: [/node_modules/, /demo\/lists/],
                loaders: ['react-hot-loader', 'babel?presets[]=react,presets[]=es2015', 'html-path-loader']
            }, {
                test: /\.(jsx|js|es6)?$/,
                include: [/demo/],
                loaders: ['html-path-loader']
            }, {
                test: /\.(scss|css)/,
                exclude: [/node_modules/, /lib\/pc\/style/, /lib\/mobile\/style/, /demo\/lists/],
                loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path-loader']
            },
            {
                test: /\.(scss|css)/,
                include: [/node_modules/, /lib\/pc\/style/, /lib\/mobile\/style/, /demo\/lists/],
                loaders: ['style', 'css', 'autoprefixer', 'sass']
            }, {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=3000&name=img/[hash:8].[name].[ext]'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=3000&name=font/[hash:8].[name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.md$/,
                loader: 'text-loader'
            }
        ]
    },

    resolve: resolve
};