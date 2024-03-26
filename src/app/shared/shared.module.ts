import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {PagerComponent} from "./components/pager/pager.component";
import {KeenSharedModule} from "../_metronic/shared/keen-shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        PagerComponent
    ],
    exports: [
        PagerComponent,
        KeenSharedModule,
        ReactiveFormsModule
    ],
    imports: [
        CommonModule,
        NgbPaginationModule,
        KeenSharedModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
}
