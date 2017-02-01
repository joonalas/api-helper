import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/* API helper service:
Designed to ease communication with the wbma-server-node.

 */

@Injectable()
export class ApiHelperService {


  private baseUrl: any = 'http://media.mw.metropolia.fi/wbma';
  private headers: Headers;
  private options: RequestOptions;
  private body: any;

  constructor(private http: Http) { }

  private headerBuilder: any = (contentType?, token?) => {
    this.headers = new Headers({});
    this.options = new RequestOptions({ headers: this.headers });
    if (contentType) {
      this.headers.append('Content-type', contentType);
    } else {
      this.headers.append('Content-type', 'application/json');
    }

    if (token) {
      this.headers.append('x-access-token', token);
    }
    return this.options;
  }

  checkName: any = (username: any) => {
    const url = this.baseUrl + '/users/username/' + username;
    const options = this.headerBuilder();
    return this.http.get(url, options);
  }

  login: any = (data) => {
    const url = this.baseUrl + '/login/';
    const options = this.headerBuilder();
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(url, body, options);
  }

/* USER */
  signup: any = (data) => {
    const url = this.baseUrl + '/users/';
    const options = this.headerBuilder();
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(url, body, options);
  }

  modifyUser: any = (data, token: any) => {
    const url = this.baseUrl + '/users/';
    const options = this.headerBuilder('', token);
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.put(url, body, options);
  }

  getUser: any = (id: any, token: any) => {
    const url = this.baseUrl + '/users/' + id;
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  getAllUsers: any = (token: any) => {
    const url = this.baseUrl + '/users/';
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  getCurrentUser: any = (token: any) => {
    const url = this.baseUrl + '/users/user/';
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  /* MEDIA */
  getFile: any = (id: any) => {
    const url = this.baseUrl + '/media/' + id;
    const options = this.headerBuilder();
    console.log(options);
    return this.http.get(url, options);
  }

  deleteFile: any = (id: any, token: any) => {
    const url = this.baseUrl + '/media/' + id;
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.delete(url, options);
  }

  getUserMediaById: any = (id: any, token?) => {
    const url = this.baseUrl + '/media/user/' + id;
    let options;
    if (token) {
      options = this.headerBuilder('', token);
    } else {
      options = this.headerBuilder();
    }
    console.log(options);
    return this.http.get(url, options);
  }

  getUserMedia: any = (token: any) => {
    const url = this.baseUrl + '/media/user';
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  getMedia: any = (start?, limit?) => {
    console.log(
      this.urlBuilder(['media', 'user'], [{key: 'start', value: 10}, {key: 'limit', value: 30}])
    );
  }







  urlBuilder: any = (pathArray?, paramsArray?) => {
    let url = this.baseUrl;
    let filePath = '';
    let query = '?';
    if (pathArray) {
      for (const x of pathArray) {
        filePath += '/' + x;
      }
      url += filePath;
    }
    if (paramsArray) {
      for (const param of paramsArray) {
        if (paramsArray.indexOf(param) === 0) {
          query += param.key + '=' + param.value;
        } else {
          query += '&' + param.key + '=' + param.value;
        }
      }
      url += query;
    }

    return url;
  }








}
