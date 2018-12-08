import { Injectable } from '@angular/core';
import * as applicationSetting from 'application-settings';
import { LoginResponse } from '../models/login-response';

@Injectable()
export class ApplicationContext {
    get companyName(): string {
        return this._companyName;
    }

    set companyName(value: string) {
        this._companyName = value;
    }
    get expiredIn(): number {
        return this._expiredIn;
    }

    set expiredIn(value: number) {
        this._expiredIn = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    private _token: string;
    private _expiredIn: number;
    private _userName: string;
    private _companyName: string;

    constructor() {

    }

    storeProfile(data: LoginResponse): void {
        console.log('Profile: ', data);
        this.token = data.access_token;
        this.expiredIn = data.expires_in;
        this.companyName = data.organizationName;
        applicationSetting.setString('profile', JSON.stringify(data));
    }

    setUserName(userName: string) {
        this.userName = userName;
    }

    logout() {
        this.token = null;
        this.expiredIn = null;
        this.companyName = null;
        applicationSetting.setString('profile', '');
    }
}
