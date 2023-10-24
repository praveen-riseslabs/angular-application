import { TestBed } from '@angular/core/testing';

import { LogoutuserService } from './logoutuser.service';

describe('LogoutuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogoutuserService = TestBed.get(LogoutuserService);
    expect(service).toBeTruthy();
  });
});
