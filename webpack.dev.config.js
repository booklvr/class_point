const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// require("regenerator-runtime/runtime");

module.exports = {
  entry: {
    main: "./src/index.js",
    addClassroom: "./src/js/addClassroom/controller.js",
    boysVsGirls: "./src/js/boysVsGirls/controller.js",
    classroom: "./src/js/classroom/controller.js",
    individual: "./src/js/individual/controller.js",
    participation: "./src/js/participation/controller.js",
    register: "./src/js/register/controller.js",
    team: "./src/js/team/controller.js",
    // main: ["babel-polyfill", "./src/index.js"],
    // addClassroom: ["babel-polyfill", "./src/js/addClassroom/controller.js"],
    // boysVsGirls: ["babel-polyfill", "./src/js/boysVsGirls/controller.js"],
    // classroom: ["babel-polyfill", "./src/js/classroom/controller.js"],
    // individual: ["babel-polyfill", "./src/js/individual/controller.js"],
    // participation: ["babel-polyfill", "./src/js/participation/controller.js"],
    // register: ["babel-polyfill", "./src/js/register/controller.js"],
    // team: ["babel-polyfill", "./src/js/team/controller.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "js/[name].js",
  },
  mode: "development",
  target: "web",
  devtool: "source-map",
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
        },
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "babel-loader",
      //   query: {
      //     presets: ["@babel/preset-env"],
      //   },
      // },
      // loads the javascript into html template provided.
      // entry point is et below in HtmlWebpackPlugin in Plugins
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: { minimize: true }
          },
        ],
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
      // {
      //     test: /\.(eot|svg|ttf|woff)$/i,
      //     use: [
      //         {
      //             loader: 'file-loader'
      //         }
      //     ]
      // }
    ],
  },
  plugins: [
    // *** pages ***
    // index.ejs
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/index.ejs",
      filename: "views/pages/index.ejs",
    }),
    //addClassroom
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/addClassroom.ejs",
      filename: "views/pages/addClassroom.ejs",
      chunks: ["main", "addClassroom"],
    }),
    //boysVsGirls
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/boysVsGirls.ejs",
      filename: "views/pages/boysVsGirls.ejs",
      chunks: ["main", "boysVsGirls"],
    }),
    //classroom
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/classroom.ejs",
      filename: "views/pages/classroom.ejs",
      chunks: ["main", "classroom"],
    }),
    //classrooms
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/classrooms.ejs",
      filename: "views/pages/classrooms.ejs",
      chunks: ["main", "classrooms"],
    }),
    //individual
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/individual.ejs",
      filename: "views/pages/individual.ejs",
      chunks: ["main", "individual"],
    }),
    //login
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/login.ejs",
      filename: "views/pages/login.ejs",
      chunks: ["main", "login"],
    }),
    //participation
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/participation.ejs",
      filename: "views/pages/participation.ejs",
      chunks: ["main", "participation"],
    }),
    //register
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/register.ejs",
      filename: "views/pages/register.ejs",
      chunks: ["main", "register"],
    }),
    //team
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/pages/team.ejs",
      filename: "views/pages/team.ejs",
      chunks: ["main", "team"],
    }),
    // *** partials ***
    //footer
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/partials/footer.ejs",
      filename: "views/partials/footer.ejs",
      chunks: [],
    }),
    // navbar
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/partials/navbar.ejs",
      filename: "views/partials/navbar.ejs",
      chunks: [],
    }),
    // head
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/partials/head.ejs",
      filename: "views/partials/head.ejs",
      chunks: ["main"],
    }),
    // options
    new HtmlWebpackPlugin({
      template: "!!raw-loader!src/views/partials/options.ejs",
      filename: "views/partials/options.ejs",
      chunks: [],
    }),

    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    // new MiniCssExtractPlugin({
    //     filename: 'style.css',
    //     chunkFilename: '[id].css',
    // })
  ],
};
