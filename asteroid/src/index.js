// const MovingObject = require("./moving_object");
// const Asteroid = require("./asteroid");
const GameView = require("./game_view");
const Game = require("./game");



document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");

    canvasEl.width = 1000;
    canvasEl.height = 600;

    const ctx = canvasEl.getContext("2d")

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1000, 600)

    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });

    // mo.draw(ctx);
    // mo.move();

    // const ast = new Asteroid({pos: [500, 500]});
    // ast.draw(ctx);

    const game = new Game();
    game.draw(ctx);
   
});