function MovingObject () {
    console.log("This is within the class")
}

MovingObject.prototype.move = function () {
    console.log("I am moving")
}

MovingObject.prototype.draw = function(ctx) {

}

MovingObject.prototype.isCollidedWith = function (otherMovingObject) {

}


module.exports = MovingObject;