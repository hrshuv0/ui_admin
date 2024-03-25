import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {count} from "rxjs";

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrl: './pager.component.scss'
})
export class PagerComponent implements OnInit {
    @Input() totalCount: number;
    @Input() pageSize: number;
    @Input() pageNumber: number;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

    constructor() {

    }

    ngOnInit(): void {
    }

    onPagerChange(event: any) {
        this.pageChanged.emit(event.page);
    }

    protected readonly count = count;
}
