import { Graphics, GraphicsContext } from "pixi.js";
import { Vector2 } from "../math";
import { RenderParams } from "../render";
import { Shape, ShapeType } from "../shape";

import { RenderConstructor } from "../render";

export class CircleShape extends Shape {
    radius: number;
    position: Vector2;

    constructor(position: Vector2, radius: number) {
        super(ShapeType.CIRCLE, [position]);
        this.radius = radius;
        this.position = position;
    }

    override writeGraphicsContext(context: GraphicsContext, params: RenderParams): void {
        params.position = this.position;
        RenderConstructor.writeCircleGraphicsContext(context, this.radius, params);
    }

    override constructGraphicsContext(params: RenderParams): GraphicsContext {
        params.position = this.position;
        return RenderConstructor.constructCircleGraphicsContext(this.radius, params);
    }

    override constructGraphics(params: RenderParams): Graphics {
        params.position = this.position;
        return RenderConstructor.constructCircleGraphics(this.radius, params);
    }
}