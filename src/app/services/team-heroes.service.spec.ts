import { TestBed } from '@angular/core/testing';

import { TeamHeroesService } from './team-heroes.service';

describe('TeamHeroesService', () => {
  let service: TeamHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
