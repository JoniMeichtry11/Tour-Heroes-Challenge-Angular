import { TestBed } from '@angular/core/testing';

import { InfoHeroeService } from './info-heroe.service';

describe('InfoHeroeService', () => {
  let service: InfoHeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoHeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
