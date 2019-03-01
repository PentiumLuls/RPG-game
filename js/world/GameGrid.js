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
            grid[i][j] = new Tile(town);
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

    draw() {
        scale(1.5);
        let yOffset = -25;
        for (let y = 0; y < this.rows; y++) {
            if (y % 2 === 1) {
                yOffset = 30 * y;
            } else {
                yOffset += 30;
            }
            for (let x = 0; x < this.cols; x++) {
                const tile = this.grid[x][y];
                let xOffset = 0;
                if (y % 2 === 1)
                    xOffset = 80;
                image(tile.type.image, x * tile.type.width - xOffset, y * tile.type.height - yOffset);
                
                if (isDevMode) {
                    textSize(40);
                    fill(0, 102, 153);
                    text(x + ', ' + y, x * tile.type.width - xOffset + 30, y * tile.type.height - yOffset + 80);
                }
            }
        }
    }
}