import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Filter} from "../../shared/models/pagination";
import {AppHelperService} from "../../shared/services/app-helper.service";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient,
                private appHelper: AppHelperService) {
    }

    loadList(filter?: Filter): Observable<any> {
        let params: HttpParams = this.appHelper.loadQueryParams(filter);

        return this.http.get(this.baseUrl + 'games', {params: params}).pipe(
            map(res => {
                return res;
            })
        );
    }

    loadForm(id: any) {
        return this.http.get(this.baseUrl + 'games/' + id).pipe(
            map(res => {
                return res;
            })
        );
    }

    save(value: any): Observable<any> {
        return this.http.post(this.baseUrl + 'games/save', value).pipe(
            map(res => {
                return res;
            })
        );
    }
}
