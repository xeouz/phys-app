import { Vector2 } from "../math";
import { PolygonShape } from "./polygon";

export class RectShape extends PolygonShape {
    constructor(position: Vector2, size: Vector2) {
        super(position, [
            new Vector2(position.x + size.x/2, position.y + size.y/2), // top right
            new Vector2(position.x + size.x/2, position.y - size.y/2), // bottom right
            new Vector2(position.x - size.x/2, position.y - size.y/2), // bottom left
            new Vector2(position.x - size.x/2, position.y + size.y/2), // top left
        ]);
    }
}