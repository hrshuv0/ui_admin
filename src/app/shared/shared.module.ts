import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {PagerComponent} from "./components/pager/pager.component";
import {KeenSharedModule} from "../_metronic/shared/keen-shared.module";


@NgModule({
    declarations: [
        PagerComponent
    ],
    exports: [
        PagerComponent,
        KeenSharedModule
    ],
    imports: [
        CommonModule,
        NgbPaginationModule,
        KeenSharedModule
    ]
})
export class SharedModule {
}
