import { Graphics, GraphicsContext } from "pixi.js";
import { Vector2 } from "./math";
import { RenderParams } from "./render";

export enum ShapeType {
    CIRCLE,
    POLYGON,
}

export class Shape {
    vertices: Vector2[];
    type: ShapeType;
    
    constructor(type: ShapeType, vertices: Vector2[]) {
        this.type = type;
        this.vertices = vertices;

        if(new.target === Shape) {
            throw new Error("Shape is an abstract class");
        }
    }

    writeGraphicsContext(context: GraphicsContext, params: RenderParams) {
        

    }

    constructGraphicsContext(params: RenderParams) : GraphicsContext {
        return new GraphicsContext();
    }

    constructGraphics(params: RenderParams) : Graphics {
        return new Graphics();
    }
}