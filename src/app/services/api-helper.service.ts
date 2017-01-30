import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/* API helper service:
Designed to ease communication with the wbma-server-node.

 */

@Injectable()
export class APIHelperService {

  private baseURL = 'http://media.mw.metropolia.fi/wbma';

  constructor(private http: Http) { }

// Authentication. Returns observable consisting of JSON objects.
  login(username: string, password: string) {
    const url = this.baseURL + '/login';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const data = `
      {
        "username": "${username}",
        "password": "${password}"
      }
    `;

    return this.http.post(url, data, options).map(
      /* Response is in JSON string form. Transform it to javascript object with
      json() function */
      resp => resp.json()
    );
  }

}
