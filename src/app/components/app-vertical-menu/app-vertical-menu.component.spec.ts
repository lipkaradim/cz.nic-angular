import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppVerticalMenuComponent } from './app-vertical-menu.component';

describe('AppVerticalMenuComponent', () => {
  let component: AppVerticalMenuComponent;
  let fixture: ComponentFixture<AppVerticalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppVerticalMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
