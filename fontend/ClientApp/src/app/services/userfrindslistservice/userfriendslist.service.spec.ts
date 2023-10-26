import { TestBed } from '@angular/core/testing';

import { UserfriendslistService } from './userfriendslist.service';

describe('UserfriendslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserfriendslistService = TestBed.get(UserfriendslistService);
    expect(service).toBeTruthy();
  });
});
