import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPicturesComponent } from './add-user-pictures.component';

describe('AddUserPicturesComponent', () => {
  let component: AddUserPicturesComponent;
  let fixture: ComponentFixture<AddUserPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
