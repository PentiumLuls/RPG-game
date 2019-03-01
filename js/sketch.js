let gameGrid;

let player;

const tileSizes = {width: 162, height: 150};
let town;
let farm_field;
let hotel;

let isDevMode = true;

function preload() {
    town = {image: loadImage('img/tiles/town.png')};
    farm_field = {image: loadImage('img/tiles/farm-field.png')};
    hotel = {image: loadImage('img/tiles/hotel.png')}
}

function setup() {
    gameGrid = new GameGrid(10, 10);
    player = new Player(5, 5);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    gameGrid.draw(player.x, player.y);
    player.draw();
}

function keyPressed() {
    if (keyCode === 192) {
        isDevMode = !isDevMode;
    }
}