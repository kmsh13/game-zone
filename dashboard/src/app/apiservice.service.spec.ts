import { TestBed, inject } from '@angular/core/testing';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { ApiserviceService } from './apiservice.service';
import { HttpModule } from '@angular/http';
describe('ApiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
	 imports: [
        HttpModule
    ],
      providers: [ApiserviceService]
    });
  });

  it('should ...', inject([ApiserviceService], (service: ApiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
