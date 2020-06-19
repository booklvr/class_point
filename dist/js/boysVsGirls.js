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
/******/ 	__webpack_require__.p = "../../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/boysVsGirls/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/js/boysVsGirls/UI.js":
/*!**********************************!*\
  !*** ./src/js/boysVsGirls/UI.js ***!
  \**********************************/
/*! exports provided: boysVsGirlsUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boysVsGirlsUI", function() { return boysVsGirlsUI; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonFunctions.js */ "./src/js/commonFunctions.js");




var boysVsGirlsUI = function () {
  var DOMStrings = {
    // BY CLASS
    submit: '.submit',
    gameContainer: '.game__container',
    classroomData: '.classroomData',
    teams: '.teams',
    previewTeams: '.preview__teams',
    titleContainer: '.title__container',
    title: '.title',
    refreshStudentsBtn: '.refresh-studentsBtn',
    refreshGameBtn: '.refresh-gameBtn',
    shuffleStudentsBtn: '.shuffle-studentsBtn',
    saveGameBtn: '.save-gameBtn',
    // not yet
    goToClassroomBtn: '.goToClassroomBtn',
    playAgainBtn: '.playAgainBtn',
    playGameBtn: '.playGameBtn',
    previous: '.previous',
    previousStudent: '.previous-student',
    nextStudent: '.next-student',
    next: '.next'
  };
  var DOM = {
    classroomData: document.querySelector(DOMStrings.classroomData),
    gameContainer: document.querySelector(DOMStrings.gameContainer),
    teams: document.querySelector(DOMStrings.teams),
    previewTeams: document.querySelector(DOMStrings.previewTeams),
    submit: document.querySelector(DOMStrings.submit),
    titleContainer: document.querySelector(DOMStrings.titleContainer),
    title: document.querySelector(DOMStrings.title)
  }; //persistent data

  var studentsArray = [];
  var teamsArray = [];
  var backupArray = []; //HELPER FUNCTIONS

  var createBoysGirlsTeams = function createBoysGirlsTeams() {
    console.log('creatingTeams'); // clear array

    var boys = {
      name: 'Boys Team',
      totalPoints: 0,
      teamID: 'boys',
      students: studentsArray.filter(function (student) {
        return student.sex === 'male';
      })
    };
    var girls = {
      name: 'Girls Team',
      totalPoints: 0,
      teamID: 'girls',
      students: studentsArray.filter(function (student) {
        return student.sex === 'female';
      })
    };
    teamsArray = [];
    teamsArray.push(boys);
    teamsArray.push(girls);
  };

  var randomTeamFirst = function randomTeamFirst() {
    var girlsFirst = Math.random() >= 0.5;

    if (girlsFirst) {
      console.log('girlsFirst');
      teamsArray.push(teamsArray.shift());
    } else {
      console.log('boysFirst');
    }
  };

  return {
    getDOMStrings: function getDOMStrings() {
      return DOMStrings;
    },
    getClassroomData: function () {
      var _getClassroomData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var classroomID, response, students;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('get classroom data');
                classroomID = DOM.classroomData.dataset.classroom_id;
                _context.next = 4;
                return fetch("/game/classData/".concat(classroomID));

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                students = _context.sent;
                students.forEach(function (student) {
                  return studentsArray.push(student);
                }); //shuffle students array for different game play every time

                studentsArray = _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].shuffleArray(studentsArray);
                backupArray = studentsArray;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getClassroomData() {
        return _getClassroomData.apply(this, arguments);
      }

      return getClassroomData;
    }(),
    createPreviewDOM: function createPreviewDOM() {
      createBoysGirlsTeams();
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addPreviewToDOM(teamsArray);
    },
    deleteStudent: function deleteStudent(e) {
      if (e.target.classList.contains('deleteStudent')) {
        _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].removeStudentFromTeam(teamsArray, e.target.id);
        studentsArray = _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].removeStudentfromArray(studentsArray, e.target.id); //remove the student form the DOM
        // console.log(e.target.parentElement);

        var li = e.target.parentElement;
        li.remove();
      }
    },
    //////////////////////////////////////////////////////////////////
    // *** functions for game play ***
    startGame: function startGame(e) {
      // posting teams to teamGame
      e.preventDefault();
      console.log("let's play");
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].startGame();
      randomTeamFirst(); // teamsArray.forEach(team => shuffleArray(team.students))

      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addTeamsToDom(teamsArray);
    },
    changePointStudent: function changePointStudent(e) {
      var target = e.target.parentElement;

      if (target.classList.contains('add__student') || target.classList.contains('minus__student')) {
        var action = _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].plusOrMinus(target);
        var student = target.parentElement;
        var team = student.parentElement.parentElement;
        console.log(action);
        _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].updateStudentPointDom(target, action);
        _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].updatePointsArrayAll(teamsArray, student, action);
        _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].updateTeamPointDom(team, action);
      }
    },
    changeTeamPoints: function changeTeamPoints(e) {
      var target = e.target.parentElement;
      var pointDiv = target.parentElement;

      if (pointDiv.classList.contains('teamPoint')) {
        var team = pointDiv.parentElement.parentElement; // const pointValue = pointDiv.lastElementChild;

        var action = _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].plusOrMinus(target); // change points in teamsArray

        _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].updatePointsArrayTeam(teamsArray, team.id, action); //update DOM 

        _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].updateTeamPointDom(team, action);
      }
    },
    goToPrevious: function goToPrevious() {
      console.log('gotoprevious');
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].clearDOM(); // shift arrays 

      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].unShiftTeamsAndStudentArray(teamsArray); // console.log('teamArray-post-shift', teamsArray);

      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addTeamsToDom(teamsArray);
    },
    goToPreviousStudent: function goToPreviousStudent() {
      console.log('goToPreviousStudent');
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].clearDOM();
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].unShiftStudentsArray(teamsArray[0].students);
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addTeamsToDom(teamsArray);
    },
    goToNextStudent: function goToNextStudent() {
      console.log('goToNextStudent'); // CF.clearDOM();

      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].clearDOM();
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].shiftStudentsArray(teamsArray[0].students);
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addTeamsToDom(teamsArray);
    },
    goToNext: function goToNext() {
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].clearDOM(); // shift arrays 

      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].shiftTeamsAndStudentArray(teamsArray);
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addTeamsToDom(teamsArray);
    },
    refreshScores: function refreshScores() {
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].deleteScores(teamsArray);
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].clearDOM();
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addTeamsToDom(teamsArray);
    },
    refreshStudents: function refreshStudents() {
      console.log('refreshStudents');
      studentsArray = backupArray;
      createBoysGirlsTeams();
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addPreviewToDOM(teamsArray);
    },
    shufflePreview: function shufflePreview() {
      console.log('shuffle these students around');
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].shuffleArray(studentsArray);
      createBoysGirlsTeams();
      _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addPreviewToDOM(teamsArray);
    },
    saveGame: function () {
      var _saveGame = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].clearDOM();
                _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].endGameOptions();
                _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addWinningTeam(teamsArray);
                _commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"].addWinningStudent(studentsArray);
                url = "/game/updatePoints";
                _context2.next = 7;
                return fetch(url, {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                  // credentials: 'same-origin',
                  body: JSON.stringify(studentsArray)
                }).then(function (res) {
                  return res;
                }).then(function (text) {
                  return console.log('final result', text);
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function saveGame() {
        return _saveGame.apply(this, arguments);
      }

      return saveGame;
    }(),
    playAgain: function playAgain() {
      window.location.reload(false);
    },
    goToClassroom: function goToClassroom() {
      window.location.href = "/classroom/class/".concat(DOM.classroomData.dataset.classroom_id);
    }
  };
}(_commonFunctions_js__WEBPACK_IMPORTED_MODULE_2__["commonFunctions"]);



/***/ }),

/***/ "./src/js/boysVsGirls/controller.js":
/*!******************************************!*\
  !*** ./src/js/boysVsGirls/controller.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/js/boysVsGirls/UI.js");




var controller = function (UI) {
  var setupEventListeners = function setupEventListeners() {
    var DOMStrings = UI.getDOMStrings();
    var DOM = {
      teams: document.querySelector(DOMStrings.teams),
      submit: document.querySelector(DOMStrings.submit),
      gameContainer: document.querySelector(DOMStrings.gameContainer),
      previewTeams: document.querySelector(DOMStrings.previewTeams),
      titleContainer: document.querySelector(DOMStrings.titleContainer),
      refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
      shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
      playGameBtn: document.querySelector(DOMStrings.playGameBtn),
      refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
      saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
      goToClassroomBtn: document.querySelector(DOMStrings.goToClassroomBtn),
      playAgainBtn: document.querySelector(DOMStrings.playAgainBtn),
      next: document.querySelector(DOMStrings.next),
      nextStudent: document.querySelector(DOMStrings.nextStudent),
      previousStudent: document.querySelector(DOMStrings.previousStudent),
      previous: document.querySelector(DOMStrings.previous)
    }; //EVENT LISTENERS

    DOM.playGameBtn.addEventListener('click', UI.startGame);
    DOM.previewTeams.addEventListener('click', UI.deleteStudent);
    DOM.teams.addEventListener('click', UI.changePointStudent);
    DOM.teams.addEventListener('click', UI.changeTeamPoints); // DOM.gameContainer.addEventListener('click', UI.goToNext);
    // DOM.titleContainer.addEventListener('click', UI.refreshScores);

    DOM.refreshGameBtn.addEventListener('click', UI.refreshScores);
    DOM.refreshStudentsBtn.addEventListener('click', UI.refreshStudents);
    DOM.shuffleStudentsBtn.addEventListener('click', UI.shufflePreview);
    DOM.saveGameBtn.addEventListener('click', UI.saveGame);
    DOM.goToClassroomBtn.addEventListener('click', UI.goToClassroom);
    DOM.playAgainBtn.addEventListener('click', UI.playAgain);
    DOM.previous.addEventListener('click', UI.goToPrevious);
    DOM.previousStudent.addEventListener('click', UI.goToPreviousStudent);
    DOM.nextStudent.addEventListener('click', UI.goToNextStudent);
    DOM.next.addEventListener('click', UI.goToNext);
  };

  return {
    init: function () {
      var _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('You can now play a boy Vs girls game');
                _context.next = 3;
                return UI.getClassroomData();

              case 3:
                UI.createPreviewDOM();
                setupEventListeners();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  };
}(_UI_js__WEBPACK_IMPORTED_MODULE_2__["boysVsGirlsUI"]);

controller.init();

/***/ }),

/***/ "./src/js/commonFunctions.js":
/*!***********************************!*\
  !*** ./src/js/commonFunctions.js ***!
  \***********************************/
/*! exports provided: commonFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonFunctions", function() { return commonFunctions; });
var commonFunctions = function () {
  var DOMStrings = {
    // ID's
    numberOfTeams: "#numberOfTeams",
    // CLASSES
    submit: ".submit",
    gameContainer: ".game__container",
    // classroomData: '.classroomData',
    teams: ".teams",
    previewTeams: ".preview__teams",
    gameForm: ".gameForm",
    errors: ".errors",
    titleContainer: ".title__container",
    title: ".title",
    refreshStudentsBtn: ".refresh-studentsBtn",
    refreshGameBtn: ".refresh-gameBtn",
    playGameBtn: ".playGameBtn",
    shuffleStudentsBtn: ".shuffle-studentsBtn",
    saveGameBtn: ".save-gameBtn",
    // not yet
    goToClassroomBtn: ".goToClassroomBtn",
    playAgainBtn: ".playAgainBtn",
    previous: ".previous",
    previousStudent: ".previous-student",
    nextStudent: ".next-student",
    next: ".next",
    options: ".options"
  };
  var DOM = {
    numberOfTeams: document.querySelector(DOMStrings.numberOfTeams),
    submit: document.querySelector(DOMStrings.submit),
    gameForm: document.querySelector(DOMStrings.gameForm),
    gameContainer: document.querySelector(DOMStrings.gameContainer),
    errors: document.querySelector(DOMStrings.errors),
    // classroomData: document.querySelector(DOMStrings.classroomData),
    teams: document.querySelector(DOMStrings.teams),
    previewTeams: document.querySelector(DOMStrings.previewTeams),
    titleContainer: document.querySelector(DOMStrings.titleContainer),
    title: document.querySelector(DOMStrings.title),
    refreshStudentsBtn: document.querySelector(DOMStrings.refreshStudentsBtn),
    shuffleStudentsBtn: document.querySelector(DOMStrings.shuffleStudentsBtn),
    playGameBtn: document.querySelector(DOMStrings.playGameBtn),
    refreshGameBtn: document.querySelector(DOMStrings.refreshGameBtn),
    saveGameBtn: document.querySelector(DOMStrings.saveGameBtn),
    goToClassroomBtn: document.querySelector(DOMStrings.goToClassroomBtn),
    playAgainBtn: document.querySelector(DOMStrings.playAgainBtn),
    next: document.querySelector(DOMStrings.next),
    nextStudent: document.querySelector(DOMStrings.nextStudent),
    previousStudent: document.querySelector(DOMStrings.previousStudent),
    previous: document.querySelector(DOMStrings.previous)
  }; //is it an add or minus button;

  return {
    plusOrMinus: function plusOrMinus(target) {
      return target.classList.contains("add") ? 1 : -1;
    },
    addPreviewToDOM: function addPreviewToDOM(teamsArray) {
      DOM.previewTeams.innerHTML = "";
      teamsArray.forEach(function (team) {
        //create new team div
        var newTeam = document.createElement("div");
        newTeam.className += "team"; //add title

        var teamName = document.createElement("h3");
        teamName.className += "teamName";
        teamName.innerHTML = team.name;
        newTeam.appendChild(teamName);
        var teamList = document.createElement("ul");
        teamList.className += "teamList";
        team.students.forEach(function (student) {
          var newStudent = document.createElement("li");
          newStudent.className += "student";
          newStudent.innerHTML = "\n                        <span class=\"student-name\">".concat(student.name, "</span>\n                        <span class=\"student-gender\">").concat(student.sex === "male" ? "boy" : "girl", "</span>\n                        <i id=\"").concat(student._id, "\" class=\"deleteStudent fas fa-minus\"></i></a>\n                    ");
          teamList.appendChild(newStudent);
        });
        newTeam.appendChild(teamList); // const teamName = document.createElement('ul')

        DOM.previewTeams.appendChild(newTeam);
      });
    },
    removeStudentFromTeam: function removeStudentFromTeam(teamsArray, studentID) {
      teamsArray.forEach(function (team) {
        return team.students = team.students.filter(function (student) {
          return student._id !== studentID;
        });
      });
      console.log("teamsArray", teamsArray);
    },
    removeStudentfromArray: function removeStudentfromArray(studentsArray, studentID) {
      // console.log(studentID);
      studentsArray = studentsArray.filter(function (student) {
        return student._id != studentID;
      });
      console.log(studentsArray);
      return studentsArray;
    },
    shuffleArray: function shuffleArray(array) {
      var currentIndex = array.length,
          temporaryValue,
          randomIndex; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    addErrorMessage: function addErrorMessage(message) {
      DOM.errors.innerHTML = message;
      setTimeout(function () {
        DOM.errors.innerHTML = "";
      }, 3000);
    },
    startGame: function startGame() {
      DOM.title.innerHTML = "Let's Play";

      if (DOM.gameForm) {
        DOM.gameForm.remove();
      }

      DOM.previewTeams.remove();
      DOM.teams.innerHTML = "";
      DOM.refreshStudentsBtn.remove();
      DOM.shuffleStudentsBtn.remove();
      DOM.playGameBtn.remove();
      DOM.refreshGameBtn.classList.toggle("hide");
      DOM.saveGameBtn.classList.toggle("hide");
      DOM.previous.classList.toggle("hide");
      DOM.nextStudent.classList.toggle("hide");
      DOM.previousStudent.classList.toggle("hide");
      DOM.next.classList.toggle("hide");
      DOM.teams.classList.toggle("hide");
    },
    addTeamsToDom: function addTeamsToDom(teamsArray) {
      // add teams to the dom
      teamsArray.forEach(function (team, teamIndex) {
        //create new team div
        var newTeam = document.createElement("div");
        newTeam.className += "team";
        newTeam.setAttribute("id", team.teamID); //add title

        var teamInfo = document.createElement("div");
        teamInfo.className += "team-info";
        var teamName = document.createElement("h3");
        teamName.className += "teamName";
        teamName.innerHTML = team.name;
        teamInfo.appendChild(teamName);
        var teamPoint = document.createElement("div");
        teamPoint.className += "teamPoint";
        teamPoint.innerHTML = "\n                    <button class=\"minus minus__team\"><i class=\"fas fa-minus\"></i></button>\n                    <button class=\"add add__team\"><i class=\"fas fa-plus\"></i></button>\n                    <span class=\"teamPointValue\">".concat(team.totalPoints, "</span>\n                ");
        teamInfo.appendChild(teamPoint);
        newTeam.appendChild(teamInfo);
        var teamList = document.createElement("ul");
        teamList.className += "teamList";
        team.students.forEach(function (student, studentIndex) {
          var newStudent = document.createElement("li");
          newStudent.className += "student";
          newStudent.setAttribute("id", student._id);
          newStudent.innerHTML = "\n                        <span class=name>".concat(student.name, "</span>\n                        <button class=\"add-plus-btn minus minus__student\"><i class=\"fas fa-minus\"></i></button>\n                        <button class=\"add-plus-btn add add__student\"><i class=\"fas fa-plus\"></i></button>\n                        <span class=\"points\">").concat(student.points, "</span>\n                    ");
          teamList.appendChild(newStudent); // create current student

          if (teamIndex === 0 && studentIndex === 0) {
            newStudent.className += " currentStudent"; // create next student
          } else if (teamIndex === 1 && studentIndex === 0) {
            newStudent.className += " nextStudent";
          }
        });
        newTeam.appendChild(teamList); // const teamName = document.createElement('ul')

        DOM.teams.appendChild(newTeam);
      });
    },
    updateStudentPointDom: function updateStudentPointDom(target, action) {
      //find pointsDiv
      var pointsDiv = target.parentElement.lastElementChild; //update pointsDiv

      pointsDiv.innerHTML = +pointsDiv.innerHTML + action;
    },
    updatePointsArrayAll: function updatePointsArrayAll(teamsArray, student, action) {
      console.log(student.parentElement.parentElement);
      var studentID = student.id;
      teamsArray.forEach(function (team) {
        return team.students.map(function (student) {
          if (student._id === studentID) {
            console.log("it's a match"); // add or minus points from student points

            student.points += action;
            team.totalPoints += action;
          }
        });
      });
      console.log(teamsArray);
    },
    updatePointsArrayTeam: function updatePointsArrayTeam(teamsArray, teamID, action) {
      // iterate over teams array
      // add or minus point to teamPoints
      teamsArray.forEach(function (team) {
        console.log("team.teamID", team.teamID);
        console.log("teamID", teamID);

        if (team.teamID === teamID) {
          console.log("its a match :) ");
          team.totalPoints += action;
        }
      });
      console.log(teamsArray);
    },
    updateTeamPointDom: function updateTeamPointDom(team, action) {
      var pointValue = team.querySelector(".teamPointValue");
      action === 1 ? pointValue.innerHTML = +pointValue.innerHTML + 1 : pointValue.innerHTML = +pointValue.innerHTML - 1;
    },
    clearDOM: function clearDOM() {
      DOM.teams.innerHTML = ""; // DOM.gameContainer.firstChild.remove();
    },
    shiftTeamsAndStudentArray: function shiftTeamsAndStudentArray(array) {
      console.log("shift array");
      console.log(array);
      array[0].students.push(array[0].students.shift());
      console.log(array);
      array.push(array.shift());
      console.log(array);
    },
    unShiftTeamsAndStudentArray: function unShiftTeamsAndStudentArray(array) {
      console.log("unshift array");
      array.unshift(array.pop());
      array[0].students.unshift(array[0].students.pop());
    },
    unShiftStudentsArray: function unShiftStudentsArray(array) {
      console.log("unShift array");
      array.unshift(array.pop());
    },
    shiftStudentsArray: function shiftStudentsArray(array) {
      console.log("shift array");
      array.push(array.shift());
    },
    deleteScores: function deleteScores(teamsArray) {
      teamsArray.forEach(function (team) {
        team.totalPoints = 0;
        team.students.forEach(function (student) {
          student.points = 0;
        });
      });
      console.log(teamsArray);
    },
    clearInput: function clearInput() {
      DOM.numberOfTeams.value = 1;
    },
    endGameOptions: function endGameOptions() {
      DOM.teams.innerHTML = "";
      DOM.refreshGameBtn.remove();
      DOM.saveGameBtn.remove();
      DOM.previous.remove();
      DOM.previousStudent.remove();
      DOM.nextStudent.remove();
      DOM.next.remove();
      DOM.goToClassroomBtn.classList.toggle("hide");
      DOM.playAgainBtn.classList.toggle("hide");
    },
    addWinningTeam: function addWinningTeam(array) {
      console.log(array);
      var winningTeamScore = Math.max.apply(Math, array.map(function (o) {
        return o.totalPoints;
      }));
      var winningTeams = array.filter(function (o) {
        return o.totalPoints == winningTeamScore;
      });
      console.log(winningTeams);
      var winningTeamContainer = document.createElement("div");
      winningTeamContainer.classList += "winningStudentContainer";
      winningTeamContainer.innerHTML = "\n                <h3 class=\"winningStudentTitle\">".concat(winningTeams.length === 1 ? "First Place Team" : "Tied for First", "</h3> \n            ");
      winningTeams.forEach(function (team) {
        winningTeamContainer.innerHTML += "\n                    <div class=\"firstPlace\">\n                        <p class=\"winnerName\">".concat(team.name, " <span class=\"winnerPoints\">").concat(team.totalPoints, "</span></p>\n                    </div>\n                ");
      });
      DOM.teams.appendChild(winningTeamContainer);
    },
    addWinningStudent: function addWinningStudent(array) {
      var winningStudentScore = Math.max.apply(Math, array.map(function (o) {
        return o.points;
      }));
      var winningStudents = array.filter(function (o) {
        return o.points == winningStudentScore;
      });
      console.log(winningStudents);
      var winningStudentContainer = document.createElement("div");
      winningStudentContainer.classList += "winningStudentContainer";
      winningStudentContainer.innerHTML = "\n                <h3 class=\"winningStudentTitle\">".concat(winningStudents.length === 1 ? "First Place Student" : "Tied for First", "</h3> \n            ");
      winningStudents.forEach(function (student) {
        winningStudentContainer.innerHTML += "\n                    <div class=\"firstPlace\">\n                        <p class=\"winnerName\">".concat(student.name, " <span class=\"winnerPoints\">").concat(student.points, "</span></p>\n                    </div>\n                ");
      });
      DOM.teams.appendChild(winningStudentContainer);
    }
  };
}();

 // export default commonFunctions;

/***/ })

/******/ });
//# sourceMappingURL=boysVsGirls.js.map