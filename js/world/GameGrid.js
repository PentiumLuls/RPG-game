function make2DArray(cols, rows) {
    const result = new Array(cols);
    for (let i = 0; i < cols; i++) {
        result[i] = new Array(rows);
    }
    return result;
}

function fillWithRandomTiles(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            floor(random(2)) === 1
                ? grid[i][j] = new Tile(grass1)
                : grid[i][j] = new Tile(grass1);
        }
    }
}

class GameGrid {
    constructor(width, height) {
        this.cols = width;
        this.rows = height;
        this.grid = make2DArray(this.cols, this.rows);
        fillWithRandomTiles(this.grid);
    }

    draw(playerX, playerY) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const tile = this.grid[x][y];
                image(tile.image, tileSizes.width * x, tileSizes.height * y);

                if (isDevMode) {
                    textSize(10);
                    fill(0, 102, 153);
                    text(x + ', ' + y, tileSizes.width * x, tileSizes.height * y);
                }
            }
        }
    }
}