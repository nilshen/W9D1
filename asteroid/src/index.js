const MovingObject = require("./moving_object");
// const Asteroid = require("./asteroid");
const GameView = require("./game_view");
const Game = require("./game")

// window.Asteroid = Asteroid;

// window.MovingObject = MovingObject;


document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    debugger
    canvasEl.width = 1000;
    canvasEl.height = 600;

    const ctx = canvasEl.getContext("2d")

});