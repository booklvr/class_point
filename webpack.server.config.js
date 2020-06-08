const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

    // const SERVER_PATH = (argv.mode === 'production') ? '.src//server/server-prod.js' : './src/server/server-dev.js';
    const SERVER_PATH = './src/server/server-dev.js';

    return ({
        entry: {
            server: SERVER_PATH,
        },
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].js'
        },
        target: 'node',
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false, // if you don't put htis is, __dirname
            __filename: false, // and __filename return blank or /
        },
        externals: [nodeExternals()], // Need this to avod error when working with express
        module: {
            rules: [
                {
                    // Transpiles Es6-8 into ES5
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        }
    });
};
