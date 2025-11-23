import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() navigate = new EventEmitter<'play' | 'leaderboard' | 'menu'>();

  onPlay() { this.navigate.emit('play'); }
  onLeaderboard() { this.navigate.emit('leaderboard'); }
  onBackToMenu() { this.navigate.emit('menu'); }
}
