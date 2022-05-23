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

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(option) {\n    option.vel = Util.randomVec(100)\n    option.color = \"red\";\n    option.radius = 50;\n    MovingObject.call(this, option)\n}\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack://asteroid/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\n\nfunction Game () {\n    this.DIM_X = 1000;\n    this.DIM_Y = 600;\n    this.NUM_ASTEROIDS = 10;\n    this.asteroids = this.addAsteroids();\n}\n\nGame.prototype.step = function() {\n\n};\n\nGame.prototype.move = function() {\n\n};\n\nGame.prototype.checkCollisions = function() {\n\n};\n\n\nGame.prototype.addAsteroids = function () {\n    const asteroids = [];\n    \n    while (asteroids.length < this.NUM_ASTEROIDS) {\n        let position = this.randomPosition();\n        let ast = new Asteroid(position)\n        asteroids.push(ast);\n    }\n    return asteroids\n}\n\nGame.prototype.randomPosition = function () {\n    let randX = Math.floor(Math.random() * 1001);\n    let randY = Math.floor(Math.random() * 601);\n    \n    return {pos: [randX, randY]}\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    for (let i = 0; i < this.asteroids.length; i++) {\n        this.asteroids[i].draw(ctx)\n    }\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://asteroid/./src/game.js?");

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

eval("// const MovingObject = require(\"./moving_object\");\n// const Asteroid = require(\"./asteroid\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n\n    canvasEl.width = 1000;\n    canvasEl.height = 600;\n\n    const ctx = canvasEl.getContext(\"2d\")\n\n    ctx.fillStyle = 'black';\n    ctx.fillRect(0, 0, 1000, 600)\n\n    // const mo = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    // });\n\n    // mo.draw(ctx);\n    // mo.move();\n\n    // const ast = new Asteroid({pos: [500, 500]});\n    // ast.draw(ctx);\n\n    const game = new Game();\n    game.draw(ctx);\n   \n});\n\n//# sourceURL=webpack://asteroid/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(optionHash) {\n    this.pos = optionHash.pos;\n    this.vel = optionHash.vel;\n    this.radius = optionHash.radius;\n    this.color = optionHash.color;\n}\n\n\nMovingObject.prototype.move = function () {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n};\n\nMovingObject.prototype.draw = function (ctx) {\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n\n\n    ctx.strokeStyle = this.color;\n\n\n    ctx.fillStyle = this.color;\n    ctx.fill();\n\n    ctx.stroke();\n};\n\nMovingObject.prototype.isCollidedWith = function (otherMovingObject) {\n\n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroid/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(child, parent) {\n        function Surrogate () {};\n        Surrogate.prototype = parent.prototype;\n        child.prototype = new Surrogate();\n        child.prototype.constructor = child;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n      // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://asteroid/./src/utils.js?");

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