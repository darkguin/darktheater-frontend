import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTagComponent } from './media-tag.component';

describe('MediaTagComponent', () => {
  let component: MediaTagComponent;
  let fixture: ComponentFixture<MediaTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
