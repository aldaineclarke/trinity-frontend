import { TestBed } from '@angular/core/testing';

import { PlumberService } from './plumber.service';

describe('PlumberService', () => {
  let service: PlumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
