import { TestBed, inject } from '@angular/core/testing';

import { ServerDownloadProviderService } from './server-download-provider.service';

describe('ServerDownloadProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerDownloadProviderService]
    });
  });

  it('should be created', inject([ServerDownloadProviderService], (service: ServerDownloadProviderService) => {
    expect(service).toBeTruthy();
  }));
});
