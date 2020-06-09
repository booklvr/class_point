const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',    
        addClassroom: './src/js/addClassroom/controller.js',
        boysVsGirls: './src/js/boysVsGirls/controller.js',  
        classroom: './src/js/classroom/controller.js',
        individual: './src/js/individual/controller.js',    
        participation: './src/js/participation/controller.js',
        register: './src/js/register/controller.js',   
        team: './src/js/team/controller.js',  
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    target: 'web',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // set to true if you want JS source maps
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
            // Loads the javacript into html template provided.
            // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1
                      }
                    },
                    'postcss-loader',
                    'sass-loader',
                  ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/index.ejs',
            filename: 'views/pages/index.ejs',
            chunks: ['main'],
        }),
        //addClassroom
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/addClassroom.ejs',
            filename: 'views/pages/addClassroom.ejs',
            chunks: ['main', 'addClassroom']
        }),
        //boysVsGirls
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/boysVsGirls.ejs',
            filename: 'views/pages/boysVsGirls.ejs',
            chunks: ['main', 'boysVsGirls'],
        }),
        //classroom
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/classroom.ejs',
            filename: 'views/pages/classroom.ejs',
            chunks: ['main', 'classroom']
        }),
        //classrooms
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/classrooms.ejs',
            filename: 'views/pages/classrooms.ejs',
            chunks: ['main', 'classrooms']
        }),
        //individual
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/individual.ejs',
            filename: 'views/pages/individual.ejs',
            chunks: ['main', 'individual']
        }),
        //login
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/login.ejs',
            filename: 'views/pages/login.ejs',
            chunks: ['main', 'login']
        }),
        //participation
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/participation.ejs',
            filename: 'views/pages/participation.ejs',
            chunks: ['main', 'participation']
        }),
        //register
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/register.ejs',
            filename: 'views/pages/register.ejs',
            chunks: ['main', 'register']
        }),
        //team
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/pages/team.ejs',
            filename: 'views/pages/team.ejs',
            chunks: ['main', 'team']
        }),
        // *** partials ***
        //footer
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/partials/footer.ejs',
            filename: 'views/partials/footer.ejs',
            chunks: []
        }),
        // navbar
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/partials/navbar.ejs',
            filename: 'views/partials/navbar.ejs',
            chunks: []
        }),
        // head
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/partials/head.ejs',
            filename: 'views/partials/head.ejs',
            chunks: []
        }),
        // options
        new HtmlWebpackPlugin({
            template: '!!raw-loader!src/views/partials/options.ejs',
            filename: 'views/partials/options.ejs',
            chunks: []
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
};
