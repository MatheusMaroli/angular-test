import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  likes = 0;
  public liked(): void {
    this.likes = this.likes + 1;
  }
}
