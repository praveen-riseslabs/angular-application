import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveuserfriendsComponent } from './saveuserfriends.component';

describe('SaveuserfriendsComponent', () => {
  let component: SaveuserfriendsComponent;
  let fixture: ComponentFixture<SaveuserfriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveuserfriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveuserfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
