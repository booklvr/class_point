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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/db/models/classroom.js":
/*!************************************!*\
  !*** ./src/db/models/classroom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    Student = __webpack_require__(/*! ./student */ \"./src/db/models/student.js\"); // Create Classroom Schema\n// * mongoose renames the schmea and adds an 's' in the database\n\n\nvar classroomSchema = new mongoose.Schema({\n  owner: {\n    type: mongoose.Schema.Types.ObjectId,\n    // from user Schema logged in user\n    // required: true,\n    ref: 'User' // connect to user model\n\n  },\n  className: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nclassroomSchema.virtual('students', {\n  ref: 'Student',\n  // reference Classroom Model,\n  localField: '_id',\n  // local property that is same as foreign field (user _id);\n  foreignField: 'classroom' // name of thing on Classrooom model that creates relationship (user ._id);\n\n});\nclassroomSchema.pre('deleteOne', {\n  document: true,\n  query: false\n}, /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var classroom, deletedStudents;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('initiating cascade delete students from classroom');\n            classroom = this;\n            console.log(\"find students in classroom:\", classroom);\n            _context.prev = 3;\n\n            if (!(typeof classroom === 'undefined')) {\n              _context.next = 7;\n              break;\n            }\n\n            console.log(\"Can't find classroom in classroom.pre('deleteOne') middleware.  Throw Error\");\n            throw new Error(\"Can't find classroom in classroomSchema.pre('deleteOne') middleware\");\n\n          case 7:\n            _context.next = 9;\n            return Student.deleteMany({\n              classroom: classroom._id\n            });\n\n          case 9:\n            deletedStudents = _context.sent;\n            console.log('deletedStudents', deletedStudents);\n            console.log('deleted Students successfully'); // throw new Error('from questionSchema.pre(delete One) throw error');\n\n            _context.next = 18;\n            break;\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](3);\n            console.log(_context.t0);\n            res.status(500).send(_context.t0);\n\n          case 18:\n            next();\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[3, 14]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar Classroom = mongoose.model('Classroom', classroomSchema);\nmodule.exports = Classroom;\n\n//# sourceURL=webpack:///./src/db/models/classroom.js?");

/***/ }),

/***/ "./src/db/models/student.js":
/*!**********************************!*\
  !*** ./src/db/models/student.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"); // Create Student Schema\n// * mongoose renames the schmea and adds an 's' in the database\n\n\nvar studentSchema = new mongoose.Schema({\n  classroom: {\n    type: mongoose.Schema.Types.ObjectId,\n    // from user Schema logged in user\n    required: true,\n    ref: 'Classroom' // connect to user model\n\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  sex: {\n    type: String,\n    required: true\n  },\n  points: {\n    type: Number,\n    \"default\": 0\n  },\n  totalPoints: {\n    type: Number,\n    \"default\": 0\n  },\n  participationPoints: {\n    type: Number,\n    \"default\": 0\n  }\n}, {\n  timestamps: true\n});\nvar Student = mongoose.model('Student', studentSchema);\nmodule.exports = Student;\n\n//# sourceURL=webpack:///./src/db/models/student.js?");

/***/ }),

/***/ "./src/db/models/user.js":
/*!*******************************!*\
  !*** ./src/db/models/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    _require = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    passportLocalSchema = _require.passportLocalSchema;\n\npassportLocalMongoose = __webpack_require__(/*! passport-local-mongoose */ \"passport-local-mongoose\"), validator = __webpack_require__(/*! validator */ \"validator\"), Classroom = __webpack_require__(/*! ./classroom */ \"./src/db/models/classroom.js\"); // Create User Schema\n// * name \n// * email\n// * password\n// * timestamp ( as second object provied to user Schema)\n\nvar userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: true,\n    trim: true,\n    lowercase: true,\n    validator: function (_validator) {\n      function validator(_x) {\n        return _validator.apply(this, arguments);\n      }\n\n      validator.toString = function () {\n        return _validator.toString();\n      };\n\n      return validator;\n    }(function (value) {\n      if (!validator.isEmail(value)) {\n        // validator is an npm package\n        throw new Error('Must provide an email');\n      }\n    })\n  }\n}, {\n  timestamps: true\n});\nuserSchema.plugin(passportLocalMongoose, {\n  usernameField: 'email'\n});\n\nuserSchema.methods.toJSON = function () {\n  var user = this;\n  var userObject = user.toObject(); // toObject = mongoose method\n\n  delete userObject.password;\n  return userObject;\n};\n\nuserSchema.virtual('classrooms', {\n  ref: 'Classroom',\n  // reference Classroom Model,\n  localField: '_id',\n  // local property that is same as foreign field (user _id);\n  foreignField: 'owner' // name of thing on Classrooom model that creates relationship (user ._id);\n\n}); // userSchema.virtual('classrooms', {\n//     ref: 'Classroom', // refrence Question Model,\n//     localField: '_id', // local property that is same as foreign field (user _id);\n//     foreignField: 'owner' // name of thing on Answer model that creates relationship (user_id);\n// });\n// userSchema.pre('deleteOne', {document: true, query: false}, async function(next) {   \n//     const user = this;\n//     console.log(\"user\", user)\n//     console.log('find users classroom');\n//     // const userId = user.getFilter()[\"_id\"];\n//     if (typeof user === \"undefined\") {\n//         console.log(\"Error deleting user's classroom.  Can't find user.\");\n//     }\n//     console.log('Removing all answers made by the user...')\n//     try {\n//         const deletedClassroom = await Classroom.deleteMany({owner: user._id})\n//         console.log(deletedClassroom);\n//     } catch (err) {\n//         console.log(err);\n//         res.status(500).send(err);\n//     }\n//     next();\n// });\n\nvar User = mongoose.model('user', userSchema);\nmodule.exports = User; // ,\n// password: {\n//     type: String,\n//     required: false,\n//     trim: true,\n//     minlength: 1,\n// }\n\n//# sourceURL=webpack:///./src/db/models/user.js?");

/***/ }),

/***/ "./src/db/mongoose.js":
/*!****************************!*\
  !*** ./src/db/mongoose.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar connectDB = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var conn;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return mongoose.connect(process.env.MONGO_ATLAS_URI, {\n              useNewUrlParser: true,\n              useCreateIndex: true,\n              useUnifiedTopology: true,\n              useFindAndModify: false\n            });\n\n          case 3:\n            conn = _context.sent;\n            console.log(\"MongoDB connected: \".concat(conn.connection.host));\n            _context.next = 12;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(\"WON'T CONNECT AHHHHHHHHH\");\n            console.error(_context.t0);\n            process.exit(1);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function connectDB() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = connectDB;\n\n//# sourceURL=webpack:///./src/db/mongoose.js?");

/***/ }),

/***/ "./src/server/routers/classroom.js":
/*!*****************************************!*\
  !*** ./src/server/routers/classroom.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\"),\n    url = __webpack_require__(/*! url */ \"url\"),\n    multer = __webpack_require__(/*! multer */ \"multer\"),\n    upload = __webpack_require__(/*! ./middleware/csv.multer */ \"./src/server/routers/middleware/csv.multer.js\"),\n    User = __webpack_require__(/*! ../../db/models/user */ \"./src/db/models/user.js\"),\n    Classroom = __webpack_require__(/*! ../../db/models/classroom */ \"./src/db/models/classroom.js\"),\n    Student = __webpack_require__(/*! ../../db/models/student */ \"./src/db/models/student.js\"),\n    _require = __webpack_require__(/*! ./middleware/auth */ \"./src/server/routers/middleware/auth.js\"),\n    isLoggedIn = _require.isLoggedIn;\n\nvar router = new express.Router(); // GET USERS CLASSROOMS\n\nrouter.get('/', isLoggedIn, /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var user, data;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log('get add classroom form');\n            _context2.prev = 1;\n            _context2.next = 4;\n            return User.findById(req.user._id);\n\n          case 4:\n            user = _context2.sent;\n            _context2.next = 7;\n            return user.populate({\n              path: 'classrooms'\n            }).execPopulate();\n\n          case 7:\n            user = _context2.sent;\n            classrooms = user.classrooms;\n            data = [];\n            _context2.next = 12;\n            return Promise.all(classrooms.map( /*#__PURE__*/function () {\n              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(classroom) {\n                var result;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.prev = 0;\n                        _context.next = 3;\n                        return classroom.populate({\n                          path: 'students' // populate questions\n\n                        }).execPopulate();\n\n                      case 3:\n                        _context.next = 8;\n                        break;\n\n                      case 5:\n                        _context.prev = 5;\n                        _context.t0 = _context[\"catch\"](0);\n                        console.log(_context.t0);\n\n                      case 8:\n                        result = {};\n                        result._id = classroom._id;\n                        result.className = classroom.className;\n                        result.classSize = classroom.students.length;\n                        data.push(result);\n\n                      case 13:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee, null, [[0, 5]]);\n              }));\n\n              return function (_x3) {\n                return _ref2.apply(this, arguments);\n              };\n            }()));\n\n          case 12:\n            console.log('DATA:', data);\n            data.sort(function (a, b) {\n              return a.className.localeCompare(b.className) || a.className - b.className;\n            });\n            console.log('DATA-SORTED', data); // console.log(\"classrooms\", classrooms)\n            // console.log('user post populate', user);\n            // console.log('user.classrooms', user.classrooms);\n\n            res.render('pages/classrooms', {\n              data: data\n            });\n            _context2.next = 22;\n            break;\n\n          case 18:\n            _context2.prev = 18;\n            _context2.t0 = _context2[\"catch\"](1);\n            console.log(_context2.t0);\n            res.status(404).send(_context2.t0);\n\n          case 22:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 18]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.get('/class/:id', /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    var classroom;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log('getting the single class');\n            console.log('update route'); // console.log('req.query:', req.query);\n\n            _context3.prev = 2;\n            _context3.next = 5;\n            return Classroom.findById(req.params.id);\n\n          case 5:\n            classroom = _context3.sent;\n\n            if (classroom) {\n              _context3.next = 8;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(404).send('classroom not found'));\n\n          case 8:\n            _context3.next = 10;\n            return classroom.populate({\n              path: 'students'\n            }).execPopulate();\n\n          case 10:\n            // console.log(classroom.students);\n            // console.log(classroom.students);\n            res.render('pages/classroom', {\n              students: classroom.students,\n              classroom: classroom\n            });\n            _context3.next = 17;\n            break;\n\n          case 13:\n            _context3.prev = 13;\n            _context3.t0 = _context3[\"catch\"](2);\n            console.log('err');\n            res.status(404).send(_context3.t0);\n\n          case 17:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[2, 13]]);\n  }));\n\n  return function (_x4, _x5) {\n    return _ref3.apply(this, arguments);\n  };\n}()); // GET ADD CLASSROOM FORM \n\nrouter.get('/add', function (req, res) {\n  console.log('get addClassroom form');\n  res.render('pages/addClassroom');\n}); // ADD CLASSROOM\n\nrouter.post('/add', isLoggedIn, upload, /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n    var classroom, csv, lines, keys, _loop;\n\n    return regeneratorRuntime.wrap(function _callee4$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            if (req.body.className) {\n              _context5.next = 2;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", res.status(400).send({\n              error: 'could not add student'\n            }));\n\n          case 2:\n            _context5.prev = 2;\n            classroom = new Classroom({\n              owner: req.user._id,\n              className: req.body.className\n            });\n            _context5.next = 6;\n            return classroom.save();\n\n          case 6:\n            _context5.next = 11;\n            break;\n\n          case 8:\n            _context5.prev = 8;\n            _context5.t0 = _context5[\"catch\"](2);\n            console.log(_context5.t0), res.status(500).send(_context5.t0);\n\n          case 11:\n            if (req.file) {\n              _context5.next = 14;\n              break;\n            }\n\n            console.log('no file uploaded reverting to add manually');\n            return _context5.abrupt(\"return\", res.redirect(\"./class/\".concat(classroom._id)));\n\n          case 14:\n            //convert CSV BUFFER TO STRING\n            csv = req.file.buffer.toString(); // split lines on carriage return, split each by comma\n\n            lines = csv.split('\\n').map(function (line) {\n              return line.trim().split(',');\n            }); // get the keys from line 1;\n\n            keys = lines[0];\n            _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {\n              var student;\n              return regeneratorRuntime.wrap(function _loop$(_context4) {\n                while (1) {\n                  switch (_context4.prev = _context4.next) {\n                    case 0:\n                      student = {};\n                      keys.forEach(function (key, index) {\n                        student[key] = lines[i][index];\n                      });\n                      newStudent = new Student(_objectSpread(_objectSpread({}, student), {}, {\n                        classroom: classroom._id\n                      }));\n                      _context4.next = 5;\n                      return newStudent.save();\n\n                    case 5:\n                    case \"end\":\n                      return _context4.stop();\n                  }\n                }\n              }, _loop);\n            });\n            i = 1;\n\n          case 19:\n            if (!(i < lines.length - 1)) {\n              _context5.next = 24;\n              break;\n            }\n\n            return _context5.delegateYield(_loop(), \"t1\", 21);\n\n          case 21:\n            i++;\n            _context5.next = 19;\n            break;\n\n          case 24:\n            res.redirect(\"./class/\".concat(classroom._id));\n\n          case 25:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee4, null, [[2, 8]]);\n  }));\n\n  return function (_x6, _x7) {\n    return _ref4.apply(this, arguments);\n  };\n}(), function (error, req, res, next) {\n  res.status(400).send({\n    error: error.message\n  });\n});\nrouter.get('/delete/:id', isLoggedIn, /*#__PURE__*/function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n    var deleteClass;\n    return regeneratorRuntime.wrap(function _callee5$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            console.log('classroom id:', req.params.id);\n            _context6.prev = 1;\n            _context6.next = 4;\n            return Classroom.findOne({\n              _id: req.params.id\n            });\n\n          case 4:\n            deleteClass = _context6.sent;\n            _context6.next = 7;\n            return deleteClass.deleteOne();\n\n          case 7:\n            if (deleteClass) {\n              // req.flash('success', 'Classroom deleted Successfully');\n              console.log('deleted classroom successfully');\n              res.redirect('../');\n            } else {\n              res.status(404).send('classroom not found');\n            }\n\n            ;\n            _context6.next = 15;\n            break;\n\n          case 11:\n            _context6.prev = 11;\n            _context6.t0 = _context6[\"catch\"](1);\n            console.log(_context6.t0);\n            res.status(500).send(_context6.t0);\n\n          case 15:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee5, null, [[1, 11]]);\n  }));\n\n  return function (_x8, _x9) {\n    return _ref5.apply(this, arguments);\n  };\n}()); // router.get('/size/:id', isLoggedIn, async (req, res) => {\n//     console.log(\"return the class size\");\n//     try {\n//         const classroom = await Classroom.findById(req.params.id);\n//         await classroom.populate({\n//             path: 'students'\n//         }).execPopulate();\n//         res.send(classroom.students.length)\n//     } catch (err) {\n//         console.log(err);\n//         res.status(500).send(err);\n//     }\n// }) \n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routers/classroom.js?");

/***/ }),

/***/ "./src/server/routers/game.js":
/*!************************************!*\
  !*** ./src/server/routers/game.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\"),\n    User = __webpack_require__(/*! ../../db/models/user */ \"./src/db/models/user.js\"),\n    Classroom = __webpack_require__(/*! ../../db/models/classroom */ \"./src/db/models/classroom.js\"),\n    Student = __webpack_require__(/*! ../../db/models/student */ \"./src/db/models/student.js\"),\n    gameHelper = __webpack_require__(/*! ./helpers/gameHelper */ \"./src/server/routers/helpers/gameHelper.js\"),\n    _require = __webpack_require__(/*! ./middleware/auth */ \"./src/server/routers/middleware/auth.js\"),\n    isLoggedIn = _require.isLoggedIn;\n\nvar router = new express.Router(); // get the individual game\n// * id = classroom._id\n\nrouter.get('/individual/:id', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var classroom;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('made it to the individual game');\n            _context.prev = 1;\n            _context.next = 4;\n            return Classroom.findById(req.params.id);\n\n          case 4:\n            classroom = _context.sent;\n            res.render('pages/individual', {\n              classroom: classroom\n            });\n            _context.next = 12;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0);\n            res.status(404).send(_context.t0);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()); // get the boysVsGirls game\n// * id = classroom._id\n\nrouter.get('/boysVsGirls/:id', /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var classroom;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log('made it to the boys vs girls game');\n            _context2.prev = 1;\n            _context2.next = 4;\n            return Classroom.findById(req.params.id);\n\n          case 4:\n            classroom = _context2.sent;\n            res.render('pages/boysVsGirls', {\n              classroom: classroom\n            });\n            _context2.next = 12;\n            break;\n\n          case 8:\n            _context2.prev = 8;\n            _context2.t0 = _context2[\"catch\"](1);\n            console.log(_context2.t0);\n            res.status(404).send(_context2.t0);\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 8]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nrouter.get('/participation/:id', /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    var classroom;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log('made it to the class participation score page');\n            _context3.prev = 1;\n            _context3.next = 4;\n            return Classroom.findById(req.params.id);\n\n          case 4:\n            classroom = _context3.sent;\n            res.render('pages/participation', {\n              classroom: classroom\n            });\n            _context3.next = 12;\n            break;\n\n          case 8:\n            _context3.prev = 8;\n            _context3.t0 = _context3[\"catch\"](1);\n            console.log(err);\n            res.status(404).send(err);\n\n          case 12:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[1, 8]]);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}()); // GET THE GAME FORM\n\nrouter.get('/teamForm/:id', /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n    var classroom;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            console.log('rendering game form');\n            _context4.prev = 1;\n            _context4.next = 4;\n            return Classroom.findById(req.params.id);\n\n          case 4:\n            classroom = _context4.sent;\n            res.render('pages/team', {\n              classroom: classroom\n            });\n            _context4.next = 12;\n            break;\n\n          case 8:\n            _context4.prev = 8;\n            _context4.t0 = _context4[\"catch\"](1);\n            console.log(_context4.t0);\n            res.status(404).send(_context4.t0);\n\n          case 12:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[1, 8]]);\n  }));\n\n  return function (_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}());\nrouter.get(\"/classData/:id\", /*#__PURE__*/function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n    var data, classroom;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            data = [];\n            _context5.prev = 1;\n            _context5.next = 4;\n            return Classroom.findById(req.params.id);\n\n          case 4:\n            classroom = _context5.sent;\n            _context5.prev = 5;\n            _context5.next = 8;\n            return classroom.populate({\n              path: 'students' // populate questions\n\n            }).execPopulate();\n\n          case 8:\n            _context5.next = 13;\n            break;\n\n          case 10:\n            _context5.prev = 10;\n            _context5.t0 = _context5[\"catch\"](5);\n            console.log(_context5.t0);\n\n          case 13:\n            res.send(classroom.students);\n            _context5.next = 20;\n            break;\n\n          case 16:\n            _context5.prev = 16;\n            _context5.t1 = _context5[\"catch\"](1);\n            console.log(_context5.t1);\n            res.status(500).send(_context5.t1);\n\n          case 20:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[1, 16], [5, 10]]);\n  }));\n\n  return function (_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}());\nrouter.post('/updatePoints', /*#__PURE__*/function () {\n  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            students = req.body;\n            students.forEach(function (student) {\n              console.log('student.points', student.points);\n\n              try {\n                var query = {\n                  _id: student._id\n                };\n                var options = {\n                  \"new\": false\n                };\n                Student.findOneAndUpdate(query, {\n                  $inc: {\n                    totalPoints: student.points\n                  }\n                }).then(function (res) {\n                  return console.log('RESULT', res);\n                });\n              } catch (err) {\n                console.log(err);\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n\n  return function (_x11, _x12) {\n    return _ref6.apply(this, arguments);\n  };\n}());\nrouter.post('/updateParticipation', /*#__PURE__*/function () {\n  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {\n    return regeneratorRuntime.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            students = req.body;\n            students.forEach(function (student) {\n              console.log('student.points', student.points);\n\n              try {\n                var query = {\n                  _id: student._id\n                };\n                var options = {\n                  \"new\": false\n                };\n                Student.findOneAndUpdate(query, {\n                  $inc: {\n                    participationPoints: student.points\n                  }\n                }).then(function (res) {\n                  return console.log('RESULT', res);\n                });\n              } catch (err) {\n                console.log(err);\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }));\n\n  return function (_x13, _x14) {\n    return _ref7.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routers/game.js?");

/***/ }),

/***/ "./src/server/routers/helpers/gameHelper.js":
/*!**************************************************!*\
  !*** ./src/server/routers/helpers/gameHelper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var gameHelper = function () {\n  //helper functions\n  return {\n    shuffleArray: function shuffleArray(array) {\n      var currentIndex = array.length,\n          temporaryValue,\n          randomIndex; // While there remain elements to shuffle...\n\n      while (0 !== currentIndex) {\n        // Pick a remaining element...\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1; // And swap it with the current element.\n\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n      }\n\n      return array;\n    }\n  };\n}();\n\nmodule.exports = gameHelper;\n\n//# sourceURL=webpack:///./src/server/routers/helpers/gameHelper.js?");

/***/ }),

/***/ "./src/server/routers/main.js":
/*!************************************!*\
  !*** ./src/server/routers/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\"),\n    User = __webpack_require__(/*! ../../db/models/user */ \"./src/db/models/user.js\"),\n    Classroom = __webpack_require__(/*! ../../db/models/classroom */ \"./src/db/models/classroom.js\"),\n    _require = __webpack_require__(/*! ./middleware/auth */ \"./src/server/routers/middleware/auth.js\"),\n    isLoggedIn = _require.isLoggedIn;\n\nvar router = new express.Router();\nrouter.get('/', function (req, res) {\n  res.render('pages/index');\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routers/main.js?");

/***/ }),

/***/ "./src/server/routers/middleware/auth.js":
/*!***********************************************!*\
  !*** ./src/server/routers/middleware/auth.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var User = __webpack_require__(/*! ../../../db/models/user */ \"./src/db/models/user.js\"),\n    Classroom = __webpack_require__(/*! ../../../db/models/classroom */ \"./src/db/models/classroom.js\");\n\nvar middlewareObj = {};\n\nmiddlewareObj.isLoggedIn = function (req, res, next) {\n  if (req.isAuthenticated()) {\n    return next();\n  }\n\n  console.log('you need to be logged in to do that'); // req.flash(\"error\", \"You need to be logged in to do that\");\n\n  res.render('pages/login');\n};\n\nmodule.exports = middlewareObj;\n\n//# sourceURL=webpack:///./src/server/routers/middleware/auth.js?");

/***/ }),

/***/ "./src/server/routers/middleware/csv.multer.js":
/*!*****************************************************!*\
  !*** ./src/server/routers/middleware/csv.multer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var multer = __webpack_require__(/*! multer */ \"multer\"); // MULTER MIDDLEWARE for POST /user/me/avatar\n// MULTER middlware for POST /user/me/avatar\n\n\nvar upload = multer({\n  // dest: 'avatars',  // provide file for uploaded images in route directory (remove to pass file through function)\n  limits: {// fileSize: 1000000\n  },\n  fileFilter: function fileFilter(req, file, cb) {\n    // req, file-info, callback\n    console.log('file.originalname:', file.originalname);\n\n    if (!file.originalname.match(/\\.(csv)$/)) {\n      // restrict file type to jpg jpeg or png -> originalname from multer docs\n      console.log('trueorfalse', file.originalname.match(/\\.(.csv)$/));\n      return cb(new Error('File must be .csv'));\n    }\n\n    cb(undefined, true); // success\n    // cb(undefined, false); // silently reject\n  } // inMemory: true,\n\n}).single('csvfile');\nmodule.exports = upload;\n\n//# sourceURL=webpack:///./src/server/routers/middleware/csv.multer.js?");

/***/ }),

/***/ "./src/server/routers/student.js":
/*!***************************************!*\
  !*** ./src/server/routers/student.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\"),\n    url = __webpack_require__(/*! url */ \"url\"),\n    Classroom = __webpack_require__(/*! ../../db/models/classroom */ \"./src/db/models/classroom.js\"),\n    Student = __webpack_require__(/*! ../../db/models/student */ \"./src/db/models/student.js\"),\n    _require = __webpack_require__(/*! ./middleware/auth */ \"./src/server/routers/middleware/auth.js\"),\n    isLoggedIn = _require.isLoggedIn;\n\nvar router = new express.Router();\nrouter.post('/:id', isLoggedIn, /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var newStudent;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!req.body.name) {\n              console.log('must include class name');\n            } else if (!req.body.gender) {\n              console.log('must include gender');\n            }\n\n            _context.prev = 1;\n            newStudent = new Student({\n              classroom: req.params.id,\n              name: req.body.name,\n              sex: req.body.sex\n            });\n            _context.next = 5;\n            return newStudent.save();\n\n          case 5:\n            res.redirect(\"../classroom/class/\".concat(req.params.id));\n            _context.next = 12;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0);\n            res.status(400).send(_context.t0);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.post('/update/:id', /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var updates, allowedUpdates, isValidOperation, query, update, options, student;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            updates = Object.keys(req.body); // returns list of keys from req.body,\n\n            allowedUpdates = ['name', 'sex', 'totalPoints', 'participationPoints'];\n            isValidOperation = updates.every(function (update) {\n              return allowedUpdates.includes(update);\n            });\n\n            if (isValidOperation) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(400).send({\n              error: 'Invalid updates!'\n            }));\n\n          case 5:\n            query = {\n              _id: req.params.id\n            };\n            update = _objectSpread({}, req.body); // delete update.totalPoints;\n            // delete update.participationPoints;\n\n            _context2.prev = 7;\n            options = {\n              \"new\": true\n            };\n            _context2.next = 11;\n            return Student.findOneAndUpdate(query, update, options);\n\n          case 11:\n            student = _context2.sent;\n\n            if (student) {\n              _context2.next = 14;\n              break;\n            }\n\n            throw \"Can't add student\";\n\n          case 14:\n            // await student.save();\n            res.redirect(\"../../classroom/class/\".concat(student.classroom));\n            _context2.next = 21;\n            break;\n\n          case 17:\n            _context2.prev = 17;\n            _context2.t0 = _context2[\"catch\"](7);\n            console.log(_context2.t0);\n            res.status(500).send(_context2.t0);\n\n          case 21:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[7, 17]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nrouter.get('/delete/:id', isLoggedIn, /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    var student, classroom;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log('delete student route');\n            _context3.prev = 1;\n            _context3.next = 4;\n            return Student.findOne({\n              _id: req.params.id\n            });\n\n          case 4:\n            student = _context3.sent;\n            console.log(student);\n            classroom = student.classroom;\n            _context3.next = 9;\n            return student.deleteOne();\n\n          case 9:\n            res.redirect(\"../../classroom/class/\".concat(classroom));\n            _context3.next = 16;\n            break;\n\n          case 12:\n            _context3.prev = 12;\n            _context3.t0 = _context3[\"catch\"](1);\n            console.log(_context3.t0);\n            res.status(404).send(_context3.t0);\n\n          case 16:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[1, 12]]);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routers/student.js?");

/***/ }),

/***/ "./src/server/routers/user.js":
/*!************************************!*\
  !*** ./src/server/routers/user.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\"),\n    passport = __webpack_require__(/*! passport */ \"passport\"),\n    User = __webpack_require__(/*! ../../db/models/user */ \"./src/db/models/user.js\"),\n    Classroom = __webpack_require__(/*! ../../db/models/classroom */ \"./src/db/models/classroom.js\"),\n    _require = __webpack_require__(/*! ./middleware/auth */ \"./src/server/routers/middleware/auth.js\"),\n    isLoggedIn = _require.isLoggedIn;\n\nvar router = new express.Router(); // GET USER's CLASSROOM\n\nrouter.get('/me', isLoggedIn, /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('get logged in User classroom'); // const classrooms = Classrooms.find({User: req.user._id})\n            // res.send('classrooms');\n\n            res.render('pages/classrooms');\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()); // REGISTER USER FORM\n\nrouter.get('/', function (req, res) {\n  console.log('get register form');\n  res.render(\"pages/register\");\n}); // REGISTER NEW User\n\nrouter.post('/', /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var newUser, user;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log('registering new user');\n            _context2.prev = 1;\n\n            if (!(req.body.password !== req.body.password2)) {\n              _context2.next = 4;\n              break;\n            }\n\n            throw new Error('passwords do not match');\n\n          case 4:\n            newUser = _objectSpread({}, req.body);\n            delete newUser.password;\n            delete newUser.password2;\n            console.log(newUser);\n            user = new User(newUser);\n            User.register(user, req.body.password, function (err, user) {\n              if (err) {\n                console.log('error while registering user: ', err);\n                return res.send(err);\n              }\n\n              passport.authenticate(\"local\")(req, res, function () {\n                // req.flash(\"success\", \"successfully signed up! nice to meet you \" + req.body.username);\n                res.redirect('../classroom');\n              });\n            });\n            _context2.next = 16;\n            break;\n\n          case 12:\n            _context2.prev = 12;\n            _context2.t0 = _context2[\"catch\"](1);\n            console.log(\"err\", _context2.t0);\n            res.status(500).send({\n              error: 'server error'\n            });\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 12]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}()); //LOGIN USER FORM\n\nrouter.get('/login', /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log('get login form');\n            res.render(\"pages/login\");\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}());\nrouter.post('/login', passport.authenticate(\"local\", {\n  failureRedirect: \"/users/login\" // failureFlash: true,\n  // successFlash: \"Try answering some questions.\"\n\n}), function (req, res) {\n  res.redirect('/classroom');\n}); //LOGOUT USER\n\nrouter.get('/logout', /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            console.log('');\n            req.logout(); // req.flash('success', 'See you later!');\n\n            res.redirect('/');\n\n          case 3:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function (_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}()); //UPDATE USER FORM\n\nrouter.get('/update', /*#__PURE__*/function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            console.log('get update form');\n            res.send('test');\n\n          case 2:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function (_x9, _x10) {\n    return _ref5.apply(this, arguments);\n  };\n}()); //UPDATE USER\n\nrouter.post('/update', isLoggedIn, /*#__PURE__*/function () {\n  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            console.log('updating user');\n            res.send('test');\n\n          case 2:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n\n  return function (_x11, _x12) {\n    return _ref6.apply(this, arguments);\n  };\n}()); // CONFIRM DELETE FORM\n//* maybe use confirm javascript\n\nrouter.get('/confirmDelete', isLoggedIn, /*#__PURE__*/function () {\n  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {\n    return regeneratorRuntime.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            console.log('get confirm delete form');\n            res.send('test');\n\n          case 2:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }));\n\n  return function (_x13, _x14) {\n    return _ref7.apply(this, arguments);\n  };\n}()); // CONFIRM DELETE\n\nrouter.post('/confirmDelete', isLoggedIn, /*#__PURE__*/function () {\n  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {\n    return regeneratorRuntime.wrap(function _callee8$(_context8) {\n      while (1) {\n        switch (_context8.prev = _context8.next) {\n          case 0:\n            console.log('confirming user delete');\n            res.send('test');\n\n          case 2:\n          case \"end\":\n            return _context8.stop();\n        }\n      }\n    }, _callee8);\n  }));\n\n  return function (_x15, _x16) {\n    return _ref8.apply(this, arguments);\n  };\n}()); // DELETE USER FORM\n\nrouter.get('/delete', isLoggedIn, /*#__PURE__*/function () {\n  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {\n    return regeneratorRuntime.wrap(function _callee9$(_context9) {\n      while (1) {\n        switch (_context9.prev = _context9.next) {\n          case 0:\n            console.log('get delete form');\n            res.send('test');\n\n          case 2:\n          case \"end\":\n            return _context9.stop();\n        }\n      }\n    }, _callee9);\n  }));\n\n  return function (_x17, _x18) {\n    return _ref9.apply(this, arguments);\n  };\n}()); // DELETE USER\n\nrouter.get('/delete', isLoggedIn, /*#__PURE__*/function () {\n  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {\n    return regeneratorRuntime.wrap(function _callee10$(_context10) {\n      while (1) {\n        switch (_context10.prev = _context10.next) {\n          case 0:\n            console.log('delete user');\n            res.send('test');\n\n          case 2:\n          case \"end\":\n            return _context10.stop();\n        }\n      }\n    }, _callee10);\n  }));\n\n  return function (_x19, _x20) {\n    return _ref10.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routers/user.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7__);\n// const   express =           require('express'),\n// cors =              require('cors'),\n// path =              require('path'),\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\"),\n    passport = __webpack_require__(/*! passport */ \"passport\"),\n    LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\"),\n    flash = __webpack_require__(/*! connect-flash */ \"connect-flash\"),\n    userRouter = __webpack_require__(/*! ./routers/user */ \"./src/server/routers/user.js\"),\n    classroomRouter = __webpack_require__(/*! ./routers/classroom */ \"./src/server/routers/classroom.js\"),\n    studentRouter = __webpack_require__(/*! ./routers/student */ \"./src/server/routers/student.js\"),\n    gameRouter = __webpack_require__(/*! ./routers/game */ \"./src/server/routers/game.js\"),\n    mainRouter = __webpack_require__(/*! ./routers/main */ \"./src/server/routers/main.js\"),\n    User = __webpack_require__(/*! ../db/models/user */ \"./src/db/models/user.js\");\n\nvar connectDB = __webpack_require__(/*! ../db/mongoose */ \"./src/db/mongoose.js\");\n\n\n\n\n\n\n\n\n // import bodyParser from 'body-parser';\n// import routers from 'routers';\n//Connect to database\n\nconnectDB();\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()(),\n    port = process.env.PORT,\n    DIST_DIR = __dirname,\n    HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html'),\n    compiler = webpack__WEBPACK_IMPORTED_MODULE_3___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default.a);\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {\n  publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_7___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler)); // Body parser\n\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.json()); //Enable cors\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use(bodyParser.json());\napp.use(flash());\napp.set('views', path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'views'));\napp.set(\"view engine\", \"ejs\");\napp.engine('.ejs', __webpack_require__(/*! ejs */ \"ejs\").__express); // Set static folder\n\napp.use('/public', express__WEBPACK_IMPORTED_MODULE_2___default.a[\"static\"](__dirname + \"/public\")); // app.use(express.static(__dirname + '/public'));\n// PASSPORT CONFIGURATION\n\napp.use(__webpack_require__(/*! express-session */ \"express-session\")({\n  secret: process.env.EXPRESS_SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(passport.initialize());\napp.use(passport.session());\npassport.use(User.createStrategy());\npassport.serializeUser(User.serializeUser());\npassport.deserializeUser(User.deserializeUser()); // set up flash \n\napp.use(function (req, res, next) {\n  res.locals.currentUser = req.user;\n  res.locals.error = req.flash('error');\n  res.locals.success = req.flash('success');\n  next();\n});\napp.use('/users', userRouter);\napp.use('/classroom', classroomRouter);\napp.use('/student', studentRouter);\napp.use('/game', gameRouter);\napp.use('/', mainRouter);\napp.listen(port, function () {\n  return console.log(\"Server is up on port \".concat(port));\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    main: './src/index.js',\n    addClassroom: './src/js/addClassroom/controller.js',\n    boysVsGirls: './src/js/boysVsGirls/controller.js',\n    classroom: './src/js/classroom/controller.js',\n    individual: './src/js/individual/controller.js',\n    participation: './src/js/participation/controller.js',\n    register: './src/js/register/controller.js',\n    team: './src/js/team/controller.js'\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: 'js/[name].js'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: 'source-map',\n  module: {\n    rules: [{\n      enforce: \"pre\",\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"eslint-loader\",\n      options: {\n        emitWarning: true,\n        failOnError: false,\n        failOnWarning: false\n      }\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader'\n    }, // loads the javascript into html template provided.\n    // entry point is et below in HtmlWebpackPlugin in Plugins\n    {\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" // options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.(sc|c)ss$/,\n      use: ['style-loader', {\n        loader: 'css-loader',\n        options: {\n          importLoaders: 1\n        }\n      }, 'postcss-loader', 'sass-loader']\n    }, {\n      test: /\\.(png|jpe?g|gif)$/i,\n      use: ['file-loader']\n    } // {\n    //     test: /\\.(eot|svg|ttf|woff)$/i,\n    //     use: [\n    //         {\n    //             loader: 'file-loader'\n    //         }\n    //     ]\n    // }\n    ]\n  },\n  plugins: [// *** pages *** \n  // index.ejs\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/index.ejs',\n    filename: 'views/pages/index.ejs'\n  }), //addClassroom\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/addClassroom.ejs',\n    filename: 'views/pages/addClassroom.ejs',\n    chunks: ['main', 'addClassroom']\n  }), //boysVsGirls\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/boysVsGirls.ejs',\n    filename: 'views/pages/boysVsGirls.ejs',\n    chunks: ['main', 'boysVsGirls']\n  }), //classroom\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/classroom.ejs',\n    filename: 'views/pages/classroom.ejs',\n    chunks: ['main', 'classroom']\n  }), //classrooms\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/classrooms.ejs',\n    filename: 'views/pages/classrooms.ejs',\n    chunks: ['main', 'classrooms']\n  }), //individual\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/individual.ejs',\n    filename: 'views/pages/individual.ejs',\n    chunks: ['main', 'individual']\n  }), //login\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/login.ejs',\n    filename: 'views/pages/login.ejs',\n    chunks: ['main', 'login']\n  }), //participation\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/participation.ejs',\n    filename: 'views/pages/participation.ejs',\n    chunks: ['main', 'participation']\n  }), //register\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/register.ejs',\n    filename: 'views/pages/register.ejs',\n    chunks: ['main', 'register']\n  }), //team\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/pages/team.ejs',\n    filename: 'views/pages/team.ejs',\n    chunks: ['main', 'team']\n  }), // *** partials ***\n  //footer\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/partials/footer.ejs',\n    filename: 'views/partials/footer.ejs',\n    chunks: []\n  }), // navbar\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/partials/navbar.ejs',\n    filename: 'views/partials/navbar.ejs',\n    chunks: []\n  }), // head\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/partials/head.ejs',\n    filename: 'views/partials/head.ejs',\n    chunks: ['main']\n  }), // options\n  new HtmlWebpackPlugin({\n    template: '!!raw-loader!src/views/partials/options.ejs',\n    filename: 'views/partials/options.ejs',\n    chunks: []\n  }) // new webpack.HotModuleReplacementPlugin(),\n  // new webpack.NoEmitOnErrorsPlugin(),\n  // new MiniCssExtractPlugin({\n  //     filename: 'style.css',\n  //     chunkFilename: '[id].css',\n  // })\n  ]\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

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

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv/config\");\n\n//# sourceURL=webpack:///external_%22dotenv/config%22?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

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

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });