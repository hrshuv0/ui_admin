import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorsRoutingModule} from './errors-routing.module';
import {ErrorsComponent} from './errors.component';
import {Error404Component} from './error404/error404.component';
import {Error500Component} from './error500/error500.component';
import {TestErrorComponent} from "../../components/test-error/test-error.component";


@NgModule({
    declarations: [
        ErrorsComponent,
        Error404Component,
        Error500Component,
        TestErrorComponent
    ],
    imports: [
        CommonModule,
        ErrorsRoutingModule
    ]
})
export class ErrorsModule {
}
