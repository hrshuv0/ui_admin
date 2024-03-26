import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    loadList(): Observable<any> {
        return this.http.get(this.baseUrl + 'games').pipe(
            map(res => {
                return res;
            })
        );
    }

    loadForm(id: any) {
        return this.http.get(this.baseUrl + 'games/' + id).pipe(
            map(res =>{
                return res;
            })
        );
    }

    save(value: any):Observable<any> {
        return  this.http.post(this.baseUrl + 'games/save', value).pipe(
            map(res =>{
                return res;
            })
        );

    }
}
