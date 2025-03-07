import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppVerticalMenuComponent } from "./components/app-vertical-menu/app-vertical-menu.component";
import { DetailComponent } from "./components/detail/detail.component";

@Component({
  imports: [RouterModule, AppHeaderComponent, AppVerticalMenuComponent, DetailComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
