import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from '../../shared/component/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, BottomNavComponent],
  template: `
    <router-outlet />
    <bottom-nav></bottom-nav>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MainComponent {}
