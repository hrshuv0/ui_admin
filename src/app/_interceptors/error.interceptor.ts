import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {ToastrService} from "ngx-toastr";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

    let router: Router = inject(Router);
    let toastr: ToastrService = inject(ToastrService);


    return next(req).pipe(
        catchError(error => {
            if (error) {
                if (error.status === 400) {
                    if (error.error.errors) {
                        toastr.error(error.error.errors[0], error.error.statusCode);
                        throw error.error;
                    } else {
                        toastr.error(error.error.message, error.error.statusCode);
                        // console.log('error: ', error.error.message, error.error.statusCode);
                    }
                }
                if (error.status === 401) {
                    toastr.error(error.error.message, error.error.statusCode);
                    // console.log('error: ', error.error.message, error.error.statusCode);
                }
                if (error.status === 404) {
                    router.navigateByUrl('error/404').then(r => r);
                    // console.log('error: ', 'not found');
                }
                if (error.status === 500) {
                    router.navigateByUrl('error/500').then(r => r);
                    // console.log('error: ', 'server error');
                }
            }
            return throwError(error);
        })
    );
};
