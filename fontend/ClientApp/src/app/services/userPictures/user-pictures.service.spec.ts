import { TestBed } from '@angular/core/testing';

import { UserPicturesService } from './user-pictures.service';

describe('UserPicturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPicturesService = TestBed.get(UserPicturesService);
    expect(service).toBeTruthy();
  });
});
