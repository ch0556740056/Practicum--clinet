import { TestBed } from '@angular/core/testing';

import { PersonalDetailServiceService } from './personal-detail-service.service';

describe('PersonalDetailServiceService', () => {
  let service: PersonalDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
