import { Vector2 } from './math';

export class PhysData {
    dimensions = new Vector2(0, 0);
    mouse_position = new Vector2(0, 0);
    mouse_down = {left: false, right: false};
    dt = 0;

    should_transform_position = true;
    
    constructor() {
        
    }

    setMousePosition(position: Vector2) {
        if(!this.should_transform_position) {
            this.mouse_position = position;
            return;
        }

        this.mouse_position = transformPosition(position, this.dimensions);
    }
}

function transformPosition(position: Vector2, dimensions: Vector2) {
    let tx = position.x - (dimensions.x / 2);
    let ty = -(position.y - (dimensions.y / 2));

    return new Vector2(tx, ty);
}

function untransformPosition(position: Vector2, dimensions: Vector2) {
    let tx = position.x + (dimensions.x / 2);
    let ty = -(position.y - (dimensions.y / 2));

    return new Vector2(tx, ty);
}
