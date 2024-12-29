import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Application, Assets, Sprite } from 'pixi.js';
import { Phys } from '../../phys-comp/phys';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'phys-app';

  async ngOnInit() {
    const phys = new Phys(document.getElementById('pixiContainer')!);

    await phys.init();
  }
}
