/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { APIHelperService } from './api-helper.service';

describe('APIHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIHelperService]
    });
  });

  it('should ...', inject([APIHelperService], (service: APIHelperService) => {
    expect(service).toBeTruthy();
  }));
});
