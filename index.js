const scoreEl = document.querySelector("#scoreEl");
const canvas = document.quertSelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let projetctiles = [];
let grids = [];
let invaderProjectiles = [];
let particles = [];
let bombs = [];
let powerUps = [];

let player = new Player();

let keys = {
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    Space: {
        pressed: false
    }
};

let frames = 0;
let randomInterval = Math.floor(Math.random() * 500 + 500);

let game = {
    over: false,
    active: true
};

let score = 0;
let spawBuffer = 500;
let fps = 60;
let fpsInterval = 100 / fps;

let msPrev = window.performance.now();