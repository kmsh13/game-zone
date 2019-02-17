import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';



import 'rxjs/add/operator/map';


@Injectable()
export class ApiserviceService {
 data;
  constructor(private http: Http) { }
  showTotalCount() {
	return this.http.get(environment.API_URL)
    .map((res:Response) => res.json());
  }
}
