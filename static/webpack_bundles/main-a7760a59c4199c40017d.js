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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/js/index.js":
/*!****************************!*\
  !*** ./static/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/static/js/index.js: Unexpected token, expected \\\";\\\" (3:5)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReact\\u001b[39m from \\u001b[32m'react'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReactDOM\\u001b[39m from \\u001b[32m'react-dom'\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 3 | \\u001b[39mfrom django\\u001b[33m.\\u001b[39mviews\\u001b[33m.\\u001b[39mgeneric \\u001b[36mimport\\u001b[39m \\u001b[33mTemplateView\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mApp\\u001b[39m \\u001b[36mextends\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mComponent\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m  render () {\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n    at Object._raise (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:757:17)\\n    at Object.raiseWithData (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:750:17)\\n    at Object.raise (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:744:17)\\n    at Object.unexpected (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:8834:16)\\n    at Object.semicolon (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:8816:40)\\n    at Object.parseExpressionStatement (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:11743:10)\\n    at Object.parseStatementContent (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:11344:19)\\n    at Object.parseStatement (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:11210:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:11785:25)\\n    at Object.parseBlockBody (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:11771:10)\\n    at Object.parseTopLevel (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:11141:10)\\n    at Object.parse (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:12843:10)\\n    at parse (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/parser/lib/index.js:12896:38)\\n    at parser (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/gensync/index.js:254:32)\\n    at /Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/gensync/index.js:266:13\\n    at async.call.result.err.err (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/gensync/index.js:216:11)\\n    at /Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/gensync/index.js:184:28\\n    at /Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/@babel/core/lib/gensync-utils/async.js:72:7\\n    at /Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/gensync/index.js:108:33\\n    at step (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/gensync/index.js:280:14)\\n    at /Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/gensync/index.js:266:13\\n    at async.call.result.err.err (/Users/alyshialozanosmith/Desktop/momentum_projects/Obodo-main/node_modules/gensync/index.js:216:11)\");\n\n//# sourceURL=webpack:///./static/js/index.js?");

/***/ })

/******/ });