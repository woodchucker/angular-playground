import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.css'],
  template: `
  <nav class="flex items-center bg-white flex-wrap">
    <a href="#" class="p-2 mr-4 inline-flex items-center">
    <!-- <img src="assets/cp7-logo-small-cropped.svg" alt="cp7-logo" class="pr-3"> -->
      <span class="text-xl text-gray-800 font-bold uppercase tracking-wide"
        >Control Panel</span
      >
    </a>
    <button
      class="inline-flex text-gray-800 p-3 hover:bg-gray-400 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
      data-target="#navigation"
      (click)="showMenu = !showMenu"
    >
      <img src="assets/icons-menu.svg"/>
    </button>
    <div
      class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
      id="navigation"
      [ngClass]="{ hidden: !showMenu, 'inline-flex': showMenu }"
    >
      <div
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
      >
        <ng-container *ngFor="let item of menu_items">
          <a
            [attr.id]="item.fragment!+'item'"
            [routerLink]="[item.fragment]"
            routerLinkActive="active"
            class="nav-linklg:inline-flex lg:w-auto w-full px-3 py-2 pb-3 rounded text-gray-800 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
            <span>{{ item.name }}</span>
          </a>
        </ng-container>
      </div>
    </div>
  </nav>

`,
})
export class MenuComponent {

  @Input() showMenu = false;
  @Output() navBarToggled = new EventEmitter();

  menu_items = [
    {
      name: "Home",
      fragment: "home"

    },
    {
      name: "User",
      fragment: "user"

    }
  ];

}
