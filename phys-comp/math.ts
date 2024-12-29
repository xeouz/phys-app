export class Vector2 {
    x = 0;
    y = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }

    copy() {
        return new Vector2(this.x, this.y);
    }

    neg() {
        return new Vector2(-this.x, -this.y);
    }

    scale(factor: number) {
        return new Vector2(this.x * factor, this.y * factor);
    }

    length_squared() {
        return this.x * this.x + this.y * this.y;
    }

    length() {
        return Math.sqrt(this.length_squared());
    }

    normalize() {
        let length = this.length();
        this.x /= length;
        this.y /= length;
    }

    normal_vec() {
        return new Vector2(-this.y, this.x);
    }

    add(other: Vector2) {
        this.x += other.x;
        this.y += other.y;
    }

    dot(other: Vector2) {
        return this.x * other.x + this.y * other.y;
    }

    cross(other: Vector2) {
        return this.x * other.y - this.y * other.x;
    }
}
