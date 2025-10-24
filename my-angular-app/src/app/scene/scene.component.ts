import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-frame',
  standalone: true,
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.css'
})

export class GameFrameComponent {
  @Input() text: string = ''; // ← khai báo Input
}
