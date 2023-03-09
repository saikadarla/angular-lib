import { TestBed } from '@angular/core/testing';

import { MyLibService } from './my-lib-bh.service';

describe('MyLibService', () => {
  let service: MyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
