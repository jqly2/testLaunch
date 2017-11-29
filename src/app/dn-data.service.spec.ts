import { TestBed, inject } from '@angular/core/testing';

import { DnDataService } from './dn-data.service';

describe('DnDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnDataService]
    });
  });

  it('should be created', inject([DnDataService], (service: DnDataService) => {
    expect(service).toBeTruthy();
  }));
});
