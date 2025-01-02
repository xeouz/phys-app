import { ColorSource, FillInput, Graphics, GraphicsContext, LineCap, StrokeInput, toStrokeStyle } from 'pixi.js';
import { untransformPosition, Vector2 } from './math';
import { transformPosition } from './math';
import { PhysData } from './data';

export class RenderParams {
    position: Vector2;
    dimensions: Vector2;
    stroke_col: ColorSource = 'black';
    fill_col: ColorSource = 'black';
    stroke_width: number = 3;
    line_cap: LineCap = 'round';

    constructor(dimensions: Vector2, position: Vector2 = new Vector2(0, 0), stroke_col: ColorSource = 'black', fill_col: ColorSource = 'black', stroke_width: number = 3, line_cap: LineCap = 'round') {
        this.position = position;
        this.dimensions = dimensions;
        this.stroke_col = stroke_col;
        this.fill_col = fill_col;
        this.stroke_width = stroke_width;
        this.line_cap = line_cap;
    }
}

export class RenderConstructor {


    ///--- UI Graphics ---///

    // 'Vector Arrow' Graphics
    static writeVectorGraphicsContext(context: GraphicsContext, vector: Vector2, params: RenderParams) {
        let p = untransformPosition(params.position, params.dimensions);
        let v = new Vector2(vector.x, -vector.y); // pixi y axis is inverted

        let head = p.add(v);
        
        context.moveTo(p.x, p.y).lineTo(head.x, head.y).stroke({width: params.stroke_width, color: params.stroke_col, cap: params.line_cap});

        let arrow_size = 12;
        let arrow_length = v.add(v.normalize().neg().scale(arrow_size));
        let normal = v.normal_vec().normalize().scale(arrow_size*0.7);
        let p1 = p.add(arrow_length);
        let p2 = p1.add(normal);
        let p3 = p1.add(normal.neg());
        let new_head = head.add(v.normalize().scale(5));
        context.moveTo(new_head.x, new_head.y).lineTo(p2.x, p2.y).lineTo(p3.x, p3.y).lineTo(new_head.x, new_head.y).fill(params.fill_col);
    }

    static constructVectorGraphicsContext(vector: Vector2, params: RenderParams) : GraphicsContext {
        let context = new GraphicsContext();
        RenderConstructor.writeVectorGraphicsContext(context, vector, params);
        return context;
    }
    
    static constructVectorGraphics(vector: Vector2, params: RenderParams) : Graphics {
        let graphics = new Graphics();
        graphics.context = RenderConstructor.constructVectorGraphicsContext(vector, params);
        return graphics;
    }

    ///--- Shape Graphics ---///

    // Circle Graphics
    static writeCircleGraphicsContext(context: GraphicsContext, radius: number, params: RenderParams) {
        let p = untransformPosition(params.position, params.dimensions);

        console.log(p)
        
        context.circle(p.x, p.y, radius);
        context.fill(params.fill_col);
    }

    static constructCircleGraphicsContext(radius: number, params: RenderParams) : GraphicsContext {
        let context = new GraphicsContext();
        RenderConstructor.writeCircleGraphicsContext(context, radius, params);
        return context;
    }

    static constructCircleGraphics(radius: number, params: RenderParams) : Graphics {
        let graphics = new Graphics();
        graphics.context = RenderConstructor.constructCircleGraphicsContext(radius, params);
        return graphics;
    }

    // Polygon Graphics
    static writePolygonGraphicsContext(context: GraphicsContext, vertices: Vector2[], params: RenderParams) {
        let first = untransformPosition(vertices[0], params.dimensions);
        context.moveTo(first.x, first.y);
        for (let i = 1; i < vertices.length; i++) {
            let v = untransformPosition(vertices[i], params.dimensions);

            context.lineTo(v.x, v.y);
        }
        context.lineTo(first.x, first.y);
        context.fill(params.fill_col);
        context.stroke({width: params.stroke_width, color: params.stroke_col, cap: params.line_cap});
    }

    static constructPolygonGraphicsContext(vertices: Vector2[], params: RenderParams) : GraphicsContext {
        let context = new GraphicsContext();
        RenderConstructor.writePolygonGraphicsContext(context, vertices, params);
        return context;
    }

    static constructPolygonGraphics(vertices: Vector2[], params: RenderParams) : Graphics {
        let graphics = new Graphics();
        graphics.context = RenderConstructor.constructPolygonGraphicsContext(vertices, params);
        return graphics;
    }
}
