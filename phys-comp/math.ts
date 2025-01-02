import { PhysData } from "./data";

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
        return new Vector2(this.x / length, this.y / length);
    }

    normal_vec() {
        return new Vector2(this.y, -this.x);
    }

    add(other: Vector2) {
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    dot(other: Vector2) {
        return this.x * other.x + this.y * other.y;
    }

    cross(other: Vector2) {
        return this.x * other.y - this.y * other.x;
    }
}

export function transformX(x: number, dimension_x: number) {
    return x - (dimension_x / 2);
}

export function transformY(y: number, dimension_y: number) {
    return (-y + (dimension_y / 2));
}

export function untransformX(x: number, dimension_x: number) {
    return x + (dimension_x / 2);
}


export function untransformY(y: number, dimension_y: number) {
    return (-y + (dimension_y / 2));
}

export function transformPosition(position: Vector2, dimensions: Vector2) {
    return new Vector2(transformX(position.x, dimensions.x), transformY(position.y, dimensions.y));
}


export function untransformPosition(position: Vector2, dimensions: Vector2) {
    return new Vector2(untransformX(position.x, dimensions.x), untransformY(position.y, dimensions.y));
}