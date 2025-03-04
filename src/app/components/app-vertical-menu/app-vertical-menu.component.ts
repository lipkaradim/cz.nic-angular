import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-app-vertical-menu',
  imports: [CommonModule, Menu],
  templateUrl: './app-vertical-menu.component.html',
  styleUrl: './app-vertical-menu.component.scss',
})
export class AppVerticalMenuComponent implements OnInit {
  model: MenuItem[] = [];

  ngOnInit() {
      this.model = [
          {
              label: 'Registry',
              icon: 'pi pi-plus',
          },
      ];
  }
}
