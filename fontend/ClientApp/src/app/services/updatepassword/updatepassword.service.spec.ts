import { TestBed } from '@angular/core/testing';

import { UpdatepasswordService } from './updatepassword.service';

describe('UpdatepasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatepasswordService = TestBed.get(UpdatepasswordService);
    expect(service).toBeTruthy();
  });
});
