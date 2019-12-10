import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  // intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
        setHeaders: {

            Authorization: `Bearer 11111111111dsfcdegrfg`,
            username:'Administrator',
            password:'manage',
            'Content-Type': `application/json`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': `true`,
 
        },
        withCredentials: true
    });

    return next.handle(request);

}
}
