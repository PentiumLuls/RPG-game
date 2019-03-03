let gameGrid;

let player;

const tileSizes = {width: 16, height: 16};
let grass1;

let isDevMode = true;

function preload() {
    //LOAD IMAGES
    grass1 = loadImage('img/tiles/grass1.png');
}

function setup() {
    gameGrid = new GameGrid(10, 10);
    player = new Player(5, 5);
    const canvas = createCanvas(windowWidth / 2 - 20, windowHeight - 100);
    canvas.parent("canvas-window");
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

function runEditorCode() {
    const code = editor.getValue();
}