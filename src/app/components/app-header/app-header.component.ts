import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  private _dialogService = inject(DialogService);

  @ViewChild('dialogTemplate')
  dialogTemplate!: TemplateRef<any>;

  displayUserInfo() {
    this._dialogService.open(this.dialogTemplate, {
      closeButton: false,
      size: 'sm',
    });
  }
}
