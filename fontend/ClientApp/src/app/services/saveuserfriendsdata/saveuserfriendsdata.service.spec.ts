import { TestBed } from '@angular/core/testing';

import { SaveuserfriendsdataService } from './saveuserfriendsdata.service';

describe('SaveuserfriendsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveuserfriendsdataService = TestBed.get(SaveuserfriendsdataService);
    expect(service).toBeTruthy();
  });
});
