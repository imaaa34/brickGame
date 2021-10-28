import Paddle from "/src/paddle.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d"); //2dで平面図形を描く

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

// ctx.fillStyle = '#f00';
// ctx.fillRect(30, 10, 100, 100);

// ctx.fillStyle = '#00f';
// ctx.fillRect(300, 200, 100, 100);

// ctx.fillStyle = '#00f';
// ctx.fillRect(470, 450, 50, 50);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);
