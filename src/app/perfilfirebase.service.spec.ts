import { TestBed } from '@angular/core/testing';

import { PerfilfirebaseService } from './perfilfirebase.service';

describe('PerfilfirebaseService', () => {
  let service: PerfilfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
