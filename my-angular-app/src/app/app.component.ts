import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {GameFrameComponent} from './scene/scene.component';

type Scene = 'menu' | 'play' | 'setting' | 'leaderboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, GameFrameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  title = 'Game Dashboard';
  currentScene: Scene = 'menu';
  sceneText = '';

  goTo(scene: Scene) {
    this.currentScene = scene;
    if (scene === 'play') this.sceneText = 'Đang ở chế độ: PLAY — giao diện chơi (hiển thị chữ thôi).';
    if (scene === 'setting') this.sceneText = 'Đang ở chế độ: SETTING — giao diện cài đặt.';
    if (scene === 'leaderboard') this.sceneText = 'Đang ở chế độ: LEADERBOARD — bảng xếp hạng.';
  }

  backToMenu() {
    this.currentScene = 'menu';
    this.sceneText = '';
  }
}
