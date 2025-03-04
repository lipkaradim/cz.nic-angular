import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppVerticalMenuComponent } from "./components/app-vertical-menu/app-vertical-menu.component";

@Component({
  imports: [RouterModule, AppHeaderComponent, AppVerticalMenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cznic-angular';
}
