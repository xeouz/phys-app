import { Container, ContainerChild, Graphics, GraphicsContext } from 'pixi.js';
import { transformPosition, untransformPosition, Vector2 } from './math';
import { RenderConstructor } from './render';
import { PhysObject } from './object';

export class PhysData {
    stage: Container<ContainerChild> = new Container();

    dimensions = new Vector2(0, 0);
    mouse_position = new Vector2(0, 0);
    mouse_down = {left: false, right: false};
    dt = 0;

    should_transform_position = true;
    graphics_objects: Map<string, Graphics> = new Map();
    
    phys_objects: Map<string, PhysObject> = new Map();
    
    constructor() {
        
    }

    setMousePosition(position: Vector2) {
        if(!this.should_transform_position) {
            this.mouse_position = position;
            return;
        }

        this.mouse_position = transformPosition(position, this.dimensions);
    }

    addGraphics(id: string, graphics: Graphics) {
        this.graphics_objects.set(id, graphics);
        this.stage.addChild(graphics);
    }

    removeGraphics(id: string) {
        if(!this.graphics_objects.has(id)) return;

        this.stage.removeChildAt(this.stage.getChildIndex(this.graphics_objects.get(id)!));
        this.graphics_objects.get(id)!.destroy();
        this.graphics_objects.delete(id);
    }

    attachPhysObject(object: PhysObject) {
        this.phys_objects.set(object.id, object);
        this.graphics_objects.set(object.id, object.graphics);
        this.stage.addChild(object.graphics);
    }

    detachPhysObject(id: string) {
        this.stage.removeChildAt(this.stage.getChildIndex(this.graphics_objects.get(id)!));
        this.graphics_objects.delete(id);
        this.phys_objects.delete(id);
    }

    updatePhysObjects() {
        this.phys_objects.forEach((object) => {

        });
    }
}