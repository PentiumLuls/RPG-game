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
                ? grid[i][j] = new Tile(hotel)
                : grid[i][j] = new Tile(farm_field);
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

    getCoordinatesOfTile(tileX, tileY) {
        let xOffset = 0;
        let yOffset = -25;
        if (tileY % 2 === 1) {
            xOffset = 80;
            yOffset = 28 * tileY;
        } else {
            //TODO OPTIMIZE
            for (let y = 0; y <= tileY; y += 1) {
                yOffset += 27;
            }
        }
        return {
            x: tileX * tileSizes.width - xOffset,
            y: tileY * tileSizes.height - yOffset
        };
    }

    draw(playerX, playerY) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const tile = this.grid[x][y];
                const coordinates = this.getCoordinatesOfTile(x, y);
                image(tile.type.image, coordinates.x, coordinates.y);

                if (isDevMode) {
                    textSize(40);
                    fill(0, 102, 153);
                    text(x + ', ' + y, coordinates.x + 30, coordinates.y + 80);
                }
            }
        }
    }
}