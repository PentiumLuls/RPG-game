let gameGrid;

let townImg;
let town;

let isDevMode = true;

function preload() {
    townImg = loadImage('img/tiles/town.png');
    town = {image: townImg,width: 161,height: 150};
}

function setup() {
    gameGrid = new GameGrid(10, 10);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    gameGrid.draw();
}

function keyPressed() {
    if (keyCode === 192) {
        isDevMode = !isDevMode;
    }
}