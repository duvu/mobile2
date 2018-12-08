import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Config } from '../config';
import { ApplicationContext } from './application-context';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private applicationContext: ApplicationContext) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('URL', req.url);
        if (req.url.startsWith('/oauth')) {
            return next.handle(req.clone(
                {url: Config.apiUrl + req.url}
            )); // forward
        } else {
            const token = ('bearer' + this.applicationContext.token);
            return next.handle(req.clone(
                {
                    url: Config.apiUrl + req.url,
                    headers: req.headers.set('Content-Type', 'application/json')
                        .set('Accept', 'application/json')
                        .set('Authorization', token)
                }
            ));
        }
    }
}
