/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db/models/classroom.js":
/*!********************************!*\
  !*** ./db/models/classroom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"),\n      Student = __webpack_require__(/*! ./student */ \"./db/models/student.js\"); // Create Classroom Schema\n// * mongoose renames the schmea and adds an 's' in the database\n\n\nconst classroomSchema = new mongoose.Schema({\n  owner: {\n    type: mongoose.Schema.Types.ObjectId,\n    // from user Schema logged in user\n    // required: true,\n    ref: 'User' // connect to user model\n\n  },\n  className: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nclassroomSchema.virtual('students', {\n  ref: 'Student',\n  // reference Classroom Model,\n  localField: '_id',\n  // local property that is same as foreign field (user _id);\n  foreignField: 'classroom' // name of thing on Classrooom model that creates relationship (user ._id);\n\n});\nclassroomSchema.pre('deleteOne', {\n  document: true,\n  query: false\n}, async function (req, res, next) {\n  console.log('initiating cascade delete students from classroom');\n  const classroom = this;\n  console.log(\"find students in classroom:\", classroom);\n\n  try {\n    if (typeof classroom === 'undefined') {\n      console.log(\"Can't find classroom in classroom.pre('deleteOne') middleware.  Throw Error\");\n      throw new Error(\"Can't find classroom in classroomSchema.pre('deleteOne') middleware\");\n    }\n\n    const deletedStudents = await Student.deleteMany({\n      classroom: classroom._id\n    });\n    console.log('deletedStudents', deletedStudents);\n    console.log('deleted Students successfully'); // throw new Error('from questionSchema.pre(delete One) throw error');\n  } catch (err) {\n    console.log(err);\n    res.status(500).send(err);\n  }\n\n  next();\n});\nconst Classroom = mongoose.model('Classroom', classroomSchema);\nmodule.exports = Classroom;\n\n//# sourceURL=webpack:///./db/models/classroom.js?");

/***/ }),

/***/ "./db/models/student.js":
/*!******************************!*\
  !*** ./db/models/student.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"); // Create Student Schema\n// * mongoose renames the schmea and adds an 's' in the database\n\n\nconst studentSchema = new mongoose.Schema({\n  classroom: {\n    type: mongoose.Schema.Types.ObjectId,\n    // from user Schema logged in user\n    required: true,\n    ref: 'Classroom' // connect to user model\n\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  sex: {\n    type: String,\n    required: true\n  },\n  points: {\n    type: Number,\n    default: 0\n  },\n  totalPoints: {\n    type: Number,\n    default: 0\n  },\n  participationPoints: {\n    type: Number,\n    default: 0\n  }\n}, {\n  timestamps: true\n});\nconst Student = mongoose.model('Student', studentSchema);\nmodule.exports = Student;\n\n//# sourceURL=webpack:///./db/models/student.js?");

/***/ }),

/***/ "./db/models/user.js":
/*!***************************!*\
  !*** ./db/models/user.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"),\n      {\n  passportLocalSchema\n} = __webpack_require__(/*! mongoose */ \"mongoose\");\n\npassportLocalMongoose = __webpack_require__(/*! passport-local-mongoose */ \"passport-local-mongoose\"), validator = __webpack_require__(/*! validator */ \"validator\"), Classroom = __webpack_require__(/*! ./classroom */ \"./db/models/classroom.js\"); // Create User Schema\n// * name \n// * email\n// * password\n// * timestamp ( as second object provied to user Schema)\n\nconst userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: true,\n    trim: true,\n    lowercase: true,\n\n    validator(value) {\n      if (!validator.isEmail(value)) {\n        // validator is an npm package\n        throw new Error('Must provide an email');\n      }\n    }\n\n  }\n}, {\n  timestamps: true\n});\nuserSchema.plugin(passportLocalMongoose, {\n  usernameField: 'email'\n});\n\nuserSchema.methods.toJSON = function () {\n  const user = this;\n  const userObject = user.toObject(); // toObject = mongoose method\n\n  delete userObject.password;\n  return userObject;\n};\n\nuserSchema.virtual('classrooms', {\n  ref: 'Classroom',\n  // reference Classroom Model,\n  localField: '_id',\n  // local property that is same as foreign field (user _id);\n  foreignField: 'owner' // name of thing on Classrooom model that creates relationship (user ._id);\n\n}); // userSchema.virtual('classrooms', {\n//     ref: 'Classroom', // refrence Question Model,\n//     localField: '_id', // local property that is same as foreign field (user _id);\n//     foreignField: 'owner' // name of thing on Answer model that creates relationship (user_id);\n// });\n// userSchema.pre('deleteOne', {document: true, query: false}, async function(next) {   \n//     const user = this;\n//     console.log(\"user\", user)\n//     console.log('find users classroom');\n//     // const userId = user.getFilter()[\"_id\"];\n//     if (typeof user === \"undefined\") {\n//         console.log(\"Error deleting user's classroom.  Can't find user.\");\n//     }\n//     console.log('Removing all answers made by the user...')\n//     try {\n//         const deletedClassroom = await Classroom.deleteMany({owner: user._id})\n//         console.log(deletedClassroom);\n//     } catch (err) {\n//         console.log(err);\n//         res.status(500).send(err);\n//     }\n//     next();\n// });\n\nconst User = mongoose.model('user', userSchema);\nmodule.exports = User; // ,\n// password: {\n//     type: String,\n//     required: false,\n//     trim: true,\n//     minlength: 1,\n// }\n\n//# sourceURL=webpack:///./db/models/user.js?");

/***/ }),

/***/ "./db/mongoose.js":
/*!************************!*\
  !*** ./db/mongoose.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst connectDB = async () => {\n  try {\n    const conn = await mongoose.connect(process.env.MONGO_ATLAS_URI, {\n      useNewUrlParser: true,\n      useCreateIndex: true,\n      useUnifiedTopology: true,\n      useFindAndModify: false\n    });\n    console.log(`MongoDB connected: ${conn.connection.host}`);\n  } catch (error) {\n    console.log(\"WON'T CONNECT AHHHHHHHHH\");\n    console.error(error);\n    process.exit(1);\n  }\n};\n\nmodule.exports = connectDB;\n\n//# sourceURL=webpack:///./db/mongoose.js?");

/***/ }),

/***/ "./server/server-dev.js":
/*!******************************!*\
  !*** ./server/server-dev.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_4__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './routers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// const   express =           require('express'),\n// cors =              require('cors'),\n// path =              require('path'),\nbodyParser = __webpack_require__(/*! body-parser */ \"body-parser\"), passport = __webpack_require__(/*! passport */ \"passport\"), LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\"), flash = __webpack_require__(/*! connect-flash */ \"connect-flash\"), // userRouter =        require('./routers/user'),\n// classroomRouter =   require('./routers/classroom'),\n// studentRouter =     require('./routers/student'),\n// gameRouter =        require('./routers/game'),  \n// mainRouter =        require('./routers/main'),\nUser = __webpack_require__(/*! ../db/models/user */ \"./db/models/user.js\");\n\nconst connectDB = __webpack_require__(/*! ../db/mongoose */ \"./db/mongoose.js\");\n\n\n\n\n\n\n //Connect to database\n\nconnectDB();\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n      port = process.env.PORT,\n      DIST_DIR = __dirname,\n      HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html'),\n      compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_4___default.a); // Body parser\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json()); //Enable cors\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use(bodyParser.json());\napp.use(flash());\napp.set(\"view engine\", \"ejs\");\napp.set('views', path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'views')); // Set static folder\n\napp.use('/public', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(__dirname + \"/public\")); // app.use(express.static(__dirname + '/public'));\n// PASSPORT CONFIGURATION\n\napp.use(__webpack_require__(/*! express-session */ \"express-session\")({\n  secret: process.env.EXPRESS_SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(passport.initialize());\napp.use(passport.session());\npassport.use(User.createStrategy());\npassport.serializeUser(User.serializeUser());\npassport.deserializeUser(User.deserializeUser()); // set up flash \n\napp.use((req, res, next) => {\n  res.locals.currentUser = req.user;\n  res.locals.error = req.flash('error');\n  res.locals.success = req.flash('success');\n  next();\n});\napp.use('/users', !(function webpackMissingModule() { var e = new Error(\"Cannot find module './routers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).user);\napp.use('/classroom', !(function webpackMissingModule() { var e = new Error(\"Cannot find module './routers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).classroom);\napp.use('/student', !(function webpackMissingModule() { var e = new Error(\"Cannot find module './routers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).student);\napp.use('/game', rotuers.game);\napp.use('/', !(function webpackMissingModule() { var e = new Error(\"Cannot find module './routers'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).main);\napp.listen(port, () => console.log(`Server is up on port ${port}`));\n\n//# sourceURL=webpack:///./server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\"); // const MiniCssExtractPlugin = require('mini-css-extract-plugin');\n\n\nconst HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    app: ['@babel/polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: 'source-map',\n  module: {\n    rules: [{\n      enforce: \"pre\",\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"eslint-loader\",\n      options: {\n        emitWarning: true,\n        failOnError: false,\n        failOnWarning: false,\n        rules: {\n          \"no-console\": 0,\n          \"no-undef\": 0\n        }\n      }\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader',\n      query: {\n        presets: ['@babel/preset-env']\n      }\n    }, {\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" // options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.(sc|c)ss$/,\n      use: [// MiniCssExtractPlugin.loader,\n      'style-loader', 'css-loader', 'postcss-loader', 'sass-loader']\n    }, {\n      test: /\\.(png|jpe?g|gif)$/i,\n      use: [{\n        loader: 'file-loader'\n      }]\n    }, {\n      test: /\\.(eot|svg|ttf|woff)$/i,\n      use: [{\n        loader: 'file-loader'\n      }]\n    }]\n  },\n  plugins: [new HtmlWebpackPlugin({\n    title: '500 Chance Encounters',\n    template: './src/html/index.html',\n    excludeChunks: ['server']\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin() // new MiniCssExtractPlugin({\n  //     filename: 'style.css',\n  //     chunkFilename: '[id].css',\n  // })\n  ]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-flash\");\n\n//# sourceURL=webpack:///external_%22connect-flash%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "passport-local-mongoose":
/*!******************************************!*\
  !*** external "passport-local-mongoose" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local-mongoose\");\n\n//# sourceURL=webpack:///external_%22passport-local-mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ })

/******/ });