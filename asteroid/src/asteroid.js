const Util = require("./utils");
const MovingObject = require("./moving_object");


Util.inherits(Asteroid, MovingObject);

function Asteroid(option) {
    option.vel = Util.randomVec(100)
    option.color = "red";
    option.radius = 50;
    MovingObject.call(this, option)
}

module.exports = Asteroid;
