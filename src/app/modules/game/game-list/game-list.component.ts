import {Component, OnInit} from '@angular/core';
import {PageInfoService, PageLink} from "../../../_metronic/layout";
import {GameService} from "../game.service";
import {Filter, Pagination} from "../../../shared/models/pagination";

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
    // dataList: any[];
    pagination: Pagination<any[]>;
    filter: Filter = new Filter;

    loading = false;


    constructor(private pageInfo: PageInfoService,
                private gameService: GameService) {
    }

    ngOnInit(): void {
        this.loadData();
        this.loadBreadCrumbsLinks();


    }

    loadData(filter?: Filter): void {
        this.loading = true;

        this.gameService.loadList(filter).subscribe({
            next: (res: Pagination<any>) => {
                // this.dataList = res.data;
                this.pagination = res;
                // console.log('data: ', this.pagination);
            },
            complete: () => {
                this.loading = false;
            }
        });
    }

    private loadBreadCrumbsLinks() {
        let breadCrumbsLinks: Array<PageLink> = [
            {
                title: 'Dashboard',
                path: '/',
                isActive: false
            },
            {
                title: '',
                path: '/',
                isActive: false,
                isSeparator: true
            }
        ];

        this.pageInfo.updateTitle('Games');
        this.pageInfo.updateBreadcrumbs(breadCrumbsLinks);
    }

    onPageChange(pageIndex: any) {
        this.filter.pageIndex = pageIndex;

        this.loadData(this.filter);
    }
}
