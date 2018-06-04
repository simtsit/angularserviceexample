import { TestBed, inject } from '@angular/core/testing';

import { TimestumpserviceService } from './timestumpservice.service';

describe('TimestumpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimestumpserviceService]
    });
  });

  it('should be created', inject([TimestumpserviceService], (service: TimestumpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
