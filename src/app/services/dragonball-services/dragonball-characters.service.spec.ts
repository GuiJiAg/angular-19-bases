import { TestBed } from '@angular/core/testing';

import { DragonballCharactersService } from './dragonball-characters.service';

describe('DragonballCharactersService', () => {
  let service: DragonballCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonballCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
