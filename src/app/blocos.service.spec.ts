import { TestBed } from '@angular/core/testing';

import { BlocosService } from './blocos.service';

describe('BlocosService', () => {
  let service: BlocosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
