import { TestBed } from '@angular/core/testing';

import { NestedFormArrayService } from './nested-form-array.service';

describe('NestedFormArrayService', () => {
  let service: NestedFormArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedFormArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
