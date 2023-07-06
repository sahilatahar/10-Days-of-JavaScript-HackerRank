class Polygon {
    constructor(sidesLength) {
        this.sidesLength = sidesLength;
    }
    perimeter() {
        return this.sidesLength.reduce((sum, side) => sum += side, 0);
    }
}