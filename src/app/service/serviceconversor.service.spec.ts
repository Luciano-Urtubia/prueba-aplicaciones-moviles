import { TestBed } from '@angular/core/testing';

import { ServiceconversorService } from './serviceconversor.service';

describe('ServiceconversorService', () => {
  let service: ServiceconversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceconversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
