import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCoverComponent } from './content-cover.component';

describe('ContentCoverComponent', () => {
  let component: ContentCoverComponent;
  let fixture: ComponentFixture<ContentCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
