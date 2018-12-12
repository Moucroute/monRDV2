import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as url from "url";


@Injectable()
export class PatientRdvInformationHttpService {


  constructor(private http: Http) {
  }


  findRendezvous(id: number): Observable<Response> {

    let headers = new Headers();
    headers.append('Authorization', "Basic "+ btoa("simon:varvat"));

    let options = new RequestOptions({ headers: headers});

    return this.http.get('http://localhost:8080/patient/Historique/' + id,options);

  }


}
