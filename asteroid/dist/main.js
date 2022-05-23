/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(optionHash) {\n    // this.pos = optionHash.pos\n    // this.vel = Util.randomVec\n    // this.color = \"red\";\n    // this.radius = 50;\n}\n\nconst ast = new Asteroid();\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack://asteroid/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\nfunction Game () {\n\n}\n\nGame.prototype.step = function() {\n\n};\n\nGame.prototype.move = function() {\n\n};\n\nGame.prototype.checkCollisions = function() {\n\n};\n\nGame.prototype.draw = function(ctx) {\n\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://asteroid/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module) => {

eval("function GameView () {\n\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://asteroid/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n// const Asteroid = require(\"./asteroid\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\n// window.Asteroid = Asteroid;\n\n// window.MovingObject = MovingObject;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    debugger\n    canvasEl.width = 1000;\n    canvasEl.height = 600;\n\n    const ctx = canvasEl.getContext(\"2d\")\n\n});\n\n//# sourceURL=webpack://asteroid/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(optionHash) {\n    this.pos = optionHash.pos;\n    this.vel = optionHash.vel;\n    this.radius = optionHash.radius;\n    this.color = optionHash.color;\n}\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n});\n\nMovingObject.prototype.move = function () {\n    return pos[this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]\n};\n\nMovingObject.prototype.draw = function (ctx) {\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n    // ctx.stroke();\n\n    ctx.strokeStyle = this.color;\n    // ctx.lineWidth = \"30\";\n\n    ctx.fillStyle = this.color;\n    ctx.fill();\n\n    ctx.stroke();\n};\n\nMovingObject.prototype.isCollidedWith = function (otherMovingObject) {\n\n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroid/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(child, parent) {\n        function Surrogate () {};\n        Surrogate.prototype = parent.prototype;\n        child.prototype = new Surrogate();\n        child.prototype.constructor = child;\n    }\n\n    // randomVec(length) {\n    //     const deg = 2 * Math.PI * Math.random();\n    //     return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    // },\n    //   // Scale the length of a vector by the given amount.\n    // scale(vec, m) {\n    //     return [vec[0] * m, vec[1] * m];\n    // }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://asteroid/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;