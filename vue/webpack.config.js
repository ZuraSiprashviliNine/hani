
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('webpack-clean-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreRenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: path.join(__dirname, 'src', 'main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {

                    },
                    hotReload: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.(png|jpg|gif|svg|woff(2)?|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'assets',
                    publicPath: 'assets',
                }
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        port: 669
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
};

if(process.env.NODE_ENV === 'production'){
    module.exports.plugins = (module.exports.plugins || []).concat([
        new PreRenderSpaPlugin({
            staticDir: path.join(__dirname, 'build'),
            routes: [
                '/',
            ]
        })
    ])
}