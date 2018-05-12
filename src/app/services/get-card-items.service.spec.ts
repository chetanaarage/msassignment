import { TestBed, inject } from '@angular/core/testing';

import { GetCardItemsService } from './get-card-items.service';

describe('GetCardItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCardItemsService]
    });
  });

  it('should be created', inject([GetCardItemsService], (service: GetCardItemsService) => {
    expect(service).toBeTruthy();
  }));
});
