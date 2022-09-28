import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeControlComponent } from './size-control.component';

describe('SizeControlComponent', () => {
  let component: SizeControlComponent;
  let fixture: ComponentFixture<SizeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
