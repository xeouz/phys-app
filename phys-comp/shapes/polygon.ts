import { Graphics, GraphicsContext } from "pixi.js";
import { Vector2 } from "../math";
import { RenderConstructor, RenderParams } from "../render";
import { Shape, ShapeType } from "../shape";

export class PolygonShape extends Shape {
    position: Vector2
    constructor(position: Vector2, vertices: Vector2[]) {
        super(ShapeType.POLYGON, vertices);
        this.position = position;
    }

    override writeGraphicsContext(context: GraphicsContext, params: RenderParams): void {
        params.position = this.position;
        RenderConstructor.writePolygonGraphicsContext(context, this.vertices, params);
    }

    override constructGraphicsContext(params: RenderParams): GraphicsContext {
        params.position = this.position;
        return RenderConstructor.constructPolygonGraphicsContext(this.vertices, params);
    }

    override constructGraphics(params: RenderParams): Graphics {
        params.position = this.position;
        return RenderConstructor.constructPolygonGraphics(this.vertices, params);
    }
}