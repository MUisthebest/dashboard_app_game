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
  @Output() navigate = new EventEmitter<'play' | 'setting' | 'leaderboard'>();

  onPlay() { this.navigate.emit('play'); }
  onSetting() { this.navigate.emit('setting'); }
  onLeaderboard() { this.navigate.emit('leaderboard'); }
}
