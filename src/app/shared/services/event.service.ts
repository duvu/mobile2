import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventData } from '../models/event-data';

@Injectable()
export class EventService {
    private _http: HttpClient;
    private _router: Router;
    private _url: string;

    constructor(http: HttpClient, router: Router) {
        this._router = router;
        this._http = http;
        this._url = '/api/track/';
    }

    getLiveEvents(): Observable<Array<EventData>> {
        const url = this._url + 'live';
        return this._http.get<Array<EventData>>(url);
    }
    getHistoryEvents(deviceId: string, timeFrom: number, timeTo: number): Observable<Array<EventData>> {
        const url = this._url + 'history/' + deviceId;
        let params = new HttpParams();
        params = params.append('timeFrom', String(timeFrom));
        params = params.append('timeTo', String(timeTo));
        return this._http.get<Array<EventData>>(url, {params});
    }
}
