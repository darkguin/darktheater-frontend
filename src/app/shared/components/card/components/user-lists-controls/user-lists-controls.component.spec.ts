import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListsControlsComponent } from './user-lists-controls.component';

describe('UserListsControlsComponent', () => {
  let component: UserListsControlsComponent;
  let fixture: ComponentFixture<UserListsControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListsControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
