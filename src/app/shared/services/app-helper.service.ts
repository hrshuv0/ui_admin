import {Injectable} from '@angular/core';
import {Filter} from "../models/pagination";
import {HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AppHelperService {

    constructor() {
    }


    loadQueryParams(filter?: Filter) {
        let params: HttpParams = new HttpParams();
        if (filter) {
            if(filter.pageIndex){
                params = params.append("pageIndex", filter.pageIndex);
            }
            if(filter.pageSize){
                params = params.append("pageSize", filter.pageSize);
            }
            if(filter.search){
                params = params.append("search", filter.search);
            }
            if(filter.sort){
                params = params.append("sort", filter.sort);
            }
            if(filter.sortDirection){
                params = params.append("sortDirection", filter.sortDirection);
            }
        }

        return params;
    }

}
