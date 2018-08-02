import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ListserviceService {

  constructor(
    private http: Http
  ) { }
  getList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
    .map((res:Response) => res.json());
  }

}
