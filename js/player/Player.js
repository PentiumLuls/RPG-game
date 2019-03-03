class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        fill(255);
        strokeWeight(1);
        square(
            floor(width / 2) - 20,
            floor(height / 2) - 20,
            40
        )
    }
}