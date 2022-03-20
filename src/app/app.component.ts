import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StyleManager } from './core/style-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fun';
  isDark = this.styleManager.isDark;

  constructor(
    private styleManager: StyleManager) {
  }

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
}
