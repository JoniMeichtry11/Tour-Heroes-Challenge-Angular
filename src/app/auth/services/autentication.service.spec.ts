import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AutenticationService } from './autentication.service';

describe('AutenticationService', () => {
  let service: AutenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AutenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
