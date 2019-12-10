import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  baseUrl = environment.apiUrl;

  constructor(protected httpClient: HttpClient) { }

  public post(endpoint, body: any, isString?) {

    if (isString) {
      body = JSON.stringify(body);
    }
    return this.httpClient
      .post(`${this.baseUrl}${endpoint}`, body)

  }

  public postRelay(endpoint, body: any) {
    return this.httpClient
      .post(`${endpoint}`, body, {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8',)
      });
  }

  public postWithBasicAuth(endpoint, body, basicAuth) {

    return this.httpClient
      .post(`${this.baseUrl}${endpoint}`, body)

  }


  public putWithBasicAuth(endpoint, body, basicAuth) {

    return this.httpClient
      .put(`${this.baseUrl}${endpoint}`, body)

  }

  public put(endpoint, id, body) {

    return this.httpClient
      .put(`${this.baseUrl}${endpoint}/${id}`, body);
  }

  public putWithoutId(endpoint, body, basicAuth) {

    return this.httpClient
      .put(`${this.baseUrl}${endpoint}`, body);
  }

  public get(endpoint) {
    return this.httpClient
      .get(`${this.baseUrl}${endpoint}`);
  }

  public getBasicAuth(endpoint, basicAuth) {
    return this.httpClient
      .get(`${this.baseUrl}${endpoint}`);
  }


  public delete(endpoint, body?) {

    return body ?
      this.httpClient
        .delete(`${this.baseUrl}${endpoint}`, body) :
      this.httpClient
        .delete(`${this.baseUrl}${endpoint}`);
  }


  public deleteWithBasicAuth(endpoint, httpOptions) {
    return this.httpClient
      .delete(`${this.baseUrl}${endpoint}`);
  }


  httpOptionsWithEmail(email) {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('ui_user:password'),
        'email': email
      })
    }
  };


  httpOptionsWithEmailAndAction(email, action?) {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('ui_user:password'),
        'email': email,
        'action': action
      })
    }
  };
  public postWithSpecialHeaders(endpoint, body: any){
    // return this.httpClient.post(`${environment.apiUrl}${endpoint}`, body);
     return this.httpClient.post(`${environment.apiUrl}${endpoint}`, body, { headers: this.requestOptions(), observe: 'response' });
 
 
   }
  private requestOptions() {
    const headers = new HttpHeaders(
      {
        'Content-type': 'application/json',
        'username':`Administrator`, 
        'password':`manage`, 
    });

    return headers;
  }
  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = '';
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }
    return Observable.throw(
      modelStateErrors || 'Server error'
    );
  }
}
