import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfriendslistComponent } from './userfriendslist.component';

describe('UserfriendslistComponent', () => {
  let component: UserfriendslistComponent;
  let fixture: ComponentFixture<UserfriendslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfriendslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfriendslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
