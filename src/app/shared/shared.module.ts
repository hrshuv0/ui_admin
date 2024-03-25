import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {PagerComponent} from "./components/pager/pager.component";


@NgModule({
    declarations: [
        PagerComponent
    ],
    exports: [
        PagerComponent
    ],
    imports: [
        CommonModule,
        NgbPaginationModule
    ]
})
export class SharedModule {
}
