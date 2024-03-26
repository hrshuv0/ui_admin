import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

    let router: Router = inject(Router);


    return next(req).pipe(
        catchError(error => {
            if(error){
                if(error.status === 400){
                    if(error.error.errors){
                        throw error.error;
                    }
                    else{
                        // this.toastr.error(error.error.message, error.error.statusCode);
                        console.log('error: ', error.error.message, error.error.statusCode);

                    }
                }
                if(error.status === 401){
                    // this.toastr.error(error.error.message, error.error.statusCode);
                    console.log('error: ', error.error.message, error.error.statusCode);
                }
                if(error.status === 404){
                    // this.router.navigateByUrl('not-found').then(r => r);
                    console.log('error: ', 'not found');
                }
                if(error.status === 500){
                    // this.router.navigateByUrl('server-error').then(r => r);
                    console.log('error: ', 'server error');

                }
            }
            return throwError(error);
        })
    );
};
