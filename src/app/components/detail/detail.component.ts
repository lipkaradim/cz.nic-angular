import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { Observable } from 'rxjs';
import { DomainInfo } from 'src/app/utils/detail-model';

@Component({
  selector: 'app-detail',
  imports: [CommonModule, ToggleSwitchModule, ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  private _http = inject(HttpClient);
  filePath = 'app/assets/domain-detail.json';
  showPassword = false;

  data$: Observable<DomainInfo> = this._http.get<DomainInfo>(this.filePath);

  formGroup: FormGroup = new FormGroup({
    checked: new FormControl<boolean>(false)
  });

  displayPassword() {
    this.showPassword = !this.showPassword;
  }
}
