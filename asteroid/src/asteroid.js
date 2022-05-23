const Util = require("./utils")
const MovingObject = require("./moving_object");

console.log("This is the asteroid file")

Util.inherits(Asteroid, MovingObject);

function Asteroid () {

}

const ast = new Asteroid();

module.exports = Asteroid;
debugger