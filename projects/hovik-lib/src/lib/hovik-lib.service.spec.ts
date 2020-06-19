import { TestBed } from '@angular/core/testing';

import { HovikLibService } from './hovik-lib.service';

describe('HovikLibService', () => {
  let service: HovikLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HovikLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
