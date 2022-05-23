const Asteroid = require("./asteroid")
const MovingObject = require("./moving_object")

function Game () {
    this.DIM_X = 1000;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = this.addAsteroids();
}

Game.prototype.step = function() {

};

Game.prototype.move = function() {

};

Game.prototype.checkCollisions = function() {

};


Game.prototype.addAsteroids = function () {
    const asteroids = [];
    
    while (asteroids.length < this.NUM_ASTEROIDS) {
        let position = this.randomPosition();
        let ast = new Asteroid(position)
        asteroids.push(ast);
    }
    return asteroids
}

Game.prototype.randomPosition = function () {
    let randX = Math.floor(Math.random() * 1001);
    let randY = Math.floor(Math.random() * 601);
    
    return {pos: [randX, randY]}
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx)
    }
};

module.exports = Game;