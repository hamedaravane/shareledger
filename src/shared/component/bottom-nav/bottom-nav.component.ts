import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Navigation {
  icon: string;
  path: string;
  label: string;
}

@Component({
  selector: 'bottom-nav',
  styles: `
    :host {
      width: 100vw;
      position: fixed;
      bottom: 0;
    }
  `,
  template: `
    <nav class="bg-neutral-300">
      <div class="flex w-full pb-4 justify-evenly">
        @for (navigation of navigations; track $index) {
          <button [routerLink]="navigation.path">
            <i class="fa-solid {{ navigation.icon }}"></i>
            <span>{{ navigation.label }}</span>
          </button>
        }
      </div>
    </nav>
  `,
  imports: [RouterLink],
  standalone: true,
})
export class BottomNavComponent {
  @Input() navigations: Navigation[] = [
    {
      icon: 'fa-dashboard',
      label: 'Dashboard',
      path: '/',
    },
    {
      icon: 'fa-setting',
      label: 'Setting',
      path: '/',
    },
    {
      icon: 'fa-window',
      label: 'Window',
      path: '/',
    },
  ];
}
