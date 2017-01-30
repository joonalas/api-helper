import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/* API helper service:
Designed to ease communication with the wbma-server-node.

 */

@Injectable()
export class ApiHelperService {

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


  // User. TODO: optional field full_name.
  createUser(username: string, password: string, email: string) {
    const url = this.baseURL + '/users';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const data = `
      {
        "username": "${username}",
        "password": "${password}",
        "email": "${email}"
      }
    `;

    return this.http.post(url, data, options).map(
      resp => resp.json()
    );
  }

  deleteUser(id: Number, token: string) {
    const url = this.baseURL + '/users';
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('x-access-token', token);
    const options = new RequestOptions({headers: headers});

    return this.http.delete(url, options).map(
      resp => resp.json()
    );
  }


  modUser(username: string, password: string, email: string, token: string) {
    console.log(token);
    const jsonObject = {};
    if (username) {
      jsonObject['username'] = username;
    }
    if (password) {
      jsonObject['password'] = password;
    }
    if (email) {
      jsonObject['email'] = email;
    }

    const url = this.baseURL + '/users';
    const headers = new Headers({'Content-Type': 'application/json'});
    /*headers.append('x-access-token', token);
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers',
    'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, origin, cache-control');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Cache-Control', 'no-cache');*/

    headers.append('x-access-token', token);


    //headers.append('Acces-Control-Request-Method', 'PUT');
    //headers.append('Access-Control-Request-Headers', 'x-access-token');
    const options = new RequestOptions({headers: headers});
    const data = JSON.stringify(jsonObject);
    console.log(data, headers);

    return this.http.put(url, data, options).map(
      resp => resp.json()
    );
  }

  allowPUT(domain: string) {
    const url = this.baseURL + domain;
    const headers = new Headers({'Access-Control-Request-Method': 'PUT'});
    headers.append('Access-Control-Request-Headers', 'x-access-token');
    const options = new RequestOptions({headers: headers});

    return this.http.options(url, options).map(
      resp => resp.json()
    );
  }

  extractData(responseObservable: any) {
    let response: any;
    responseObservable.subscribe(
      (resp) => response = resp
    );

    return response;
  }

}
