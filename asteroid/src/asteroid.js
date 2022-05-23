const Util = require("./utils");
const MovingObject = require("./moving_object");


Util.inherits(Asteroid, MovingObject);

function Asteroid(optionHash) {
    // this.pos = optionHash.pos
    // this.vel = Util.randomVec
    // this.color = "red";
    // this.radius = 50;
}

const ast = new Asteroid();

module.exports = Asteroid;
