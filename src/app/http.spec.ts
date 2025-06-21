import { TestBed } from '@angular/core/testing';

import { HTTP } from './http';

describe('HTTP', () => {
  let service: HTTP;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTP);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
