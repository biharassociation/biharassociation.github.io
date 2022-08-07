import { TestBed } from '@angular/core/testing';

import { JoinUsService } from './contact.service';

describe('ContactService', () => {
  let service: JoinUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
