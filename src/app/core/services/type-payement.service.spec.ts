import { TestBed } from '@angular/core/testing';

import { TypePayementService } from './type-payement.service';

describe('TypePayementService', () => {
  let service: TypePayementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePayementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
