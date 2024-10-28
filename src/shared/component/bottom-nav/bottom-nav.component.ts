import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

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

    nav {
      padding-bottom: calc(1rem + env(safe-area-inset-bottom));
      padding-top: 0.5rem;
    }
  `,
  template: `
    <nav class="bg-neutral-200 flex justify-evenly">
      @for (navigation of navigations; track $index) {
        <button
          class="text-neutral-500 text-xs"
          aria-hidden="true"
          [routerLink]="navigation.path"
          routerLinkActive="active"
          [tabindex]="$index">
          <mat-icon
            [ngClass]="{ 'drop-shadow-md text-gray-600': isActive(navigation.path) }"
            [fontIcon]="navigation.icon"></mat-icon>
          <label
            class="block"
            [ngClass]="{ 'drop-shadow-md text-gray-600': isActive(navigation.path) }">
            {{ navigation.label }}
          </label>
        </button>
      }
    </nav>
  `,
  imports: [RouterLink, MatIcon, RouterLinkActive, NgClass],
  standalone: true,
})
export class BottomNavComponent {
  @Input() navigations: Navigation[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      path: '/app',
    },
    {
      icon: 'receipt',
      label: 'Transactions',
      path: '/transactions',
    },
    {
      icon: 'account_circle',
      label: 'Profile',
      path: '/profile',
    },
  ];
  private readonly router = inject(Router);

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
