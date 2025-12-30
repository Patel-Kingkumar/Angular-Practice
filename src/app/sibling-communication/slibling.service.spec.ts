import { TestBed } from '@angular/core/testing';

import { SliblingService } from './slibling.service';

describe('SliblingService', () => {
  let service: SliblingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliblingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
