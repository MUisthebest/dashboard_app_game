import { Component, Input, Output, EventEmitter, HostListener  } from '@angular/core';

@Component({
  selector: 'app-game-frame',
  standalone: true,
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.css'
})

export class GameFrameComponent {
  @Output() back = new EventEmitter<void>();

  onBackClick() {
    this.back.emit();
  }
@HostListener('window:message', ['$event'])
onMessage(event: MessageEvent) {
  if (event.data?.type === 'EXIT_TO_MENU') {
    this.onBackClick();
  }
}


  @Input() text: string = ''; // ← khai báo Input
}
