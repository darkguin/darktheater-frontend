import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastViewComponent } from './toast-view.component';

describe('ToastViewComponent', () => {
  let component: ToastViewComponent;
  let fixture: ComponentFixture<ToastViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
