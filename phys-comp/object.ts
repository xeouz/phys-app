import { Graphics } from "pixi.js";
import { Shape } from "./shape";
import { RenderParams } from "./render";

export class PhysObject { 
    id: string;
    shape: Shape;
    graphics: Graphics = new Graphics();
    
    visible: boolean = true;

    constructor(id: string, shape: Shape, params: RenderParams | undefined = undefined) {
        this.id = id;
        this.shape = shape;

        if(params) {
            this.constructGraphics(params);
        }
    }

    constructGraphics(params: RenderParams) {
        this.graphics = this.shape.constructGraphics(params);
    }

    setVisibility(visible: boolean) {
        this.visible = visible;
        this.graphics.visible = visible;
    }
}