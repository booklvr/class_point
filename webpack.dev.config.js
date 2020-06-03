const path = require('path');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: [
            '@babel/polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitWarning: true,
                    failOnError: false,
                    failOnWarning: false,
                    rules: {
                        "no-console": 0,
                        "no-undef": 0,
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        // options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader'
            //         }
            //     ]
            // },
            // {
            //     test: /\.(eot|svg|ttf|woff)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader'
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/html/index.ejs",
            minify: {
                removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
            },
            inject: true,
            ejsVarInject: {
                api: '<%= api %>'
            }
        }),
       
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'style.css',
        //     chunkFilename: '[id].css',
        // })
    ]
}
