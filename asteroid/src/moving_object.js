function MovingObject(optionHash) {
    this.pos = optionHash.pos;
    this.vel = optionHash.vel;
    this.radius = optionHash.radius;
    this.color = optionHash.color;
}

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

MovingObject.prototype.move = function () {
    return pos[this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
};

MovingObject.prototype.draw = function (ctx) {

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    // ctx.stroke();

    ctx.strokeStyle = this.color;
    // ctx.lineWidth = "30";

    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.stroke();
};

MovingObject.prototype.isCollidedWith = function (otherMovingObject) {

};


module.exports = MovingObject;