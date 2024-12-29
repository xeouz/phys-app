import { Application, Assets, Sprite, Ticker } from 'pixi.js';
import { PhysData } from './data';
import { Vector2 } from './math';

export class Phys {
    app: Application;
    container: HTMLElement;
    data: PhysData;
    
    constructor(container: HTMLElement) {
        this.app = new Application();
        this.container = container;
        this.data = new PhysData();
    }

    async init() {
        await this.app.init({ background: '#81a1c1', resizeTo: this.container });

        this.container.appendChild(this.app.canvas);

        this.app.ticker.add((dt) => this.update(dt));

        this.app.stage.eventMode = 'static';
        this.app.stage.hitArea = this.app.screen;
        
        this.data.dimensions = new Vector2(this.app.screen.width, this.app.screen.height);
        this.app.stage.addEventListener('pointermove', (e) => {
            let x = e.global.x;
            let y = e.global.y;
            this.data.setMousePosition(new Vector2(x, y));
        });

        this.app.stage.addEventListener('pointerdown', (e) => {       
            if(e.buttons == 1) {
                this.data.mouse_down.left = true;
            }
            if(e.buttons == 2) {
                this.data.mouse_down.right = true;
            }
        });

        this.app.stage.addEventListener('pointerup', (e) => {
            this.data.mouse_down.left = false;
            this.data.mouse_down.right = false;
        });
    }

    update(tick: Ticker) {
        this.data.dt = tick.deltaTime;

        
    }
}