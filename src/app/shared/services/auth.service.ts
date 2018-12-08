import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import { LoginResponse } from '../models/login-response';
import { transformStringToBase64 } from '../utils/base64';

@Injectable()
export class AuthService {

    // private basicAuthHeader = 'Basic ' + Buffer.from('webapp:123456').toString('base64');
    private basicAuthHeader: string;
    constructor(private http: HttpClient) {
        if (isAndroid) {
            this.basicAuthHeader = 'Basic ' + transformStringToBase64('Android', 'webapp:123456');
        } else if (isIOS) {
            this.basicAuthHeader = 'Basic ' + transformStringToBase64('iOS', 'webapp:123456');
        }
    }

    login(username: string, password: string): Observable<LoginResponse> {
        const headers = new HttpHeaders({
            Authorization: this.basicAuthHeader,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        const options = {headers};

        return this.http.post<LoginResponse>('/oauth/token',
            'grant_type=password&scope=read%20write&username=' + username + '&password=' + password,
            options);
    }

}
