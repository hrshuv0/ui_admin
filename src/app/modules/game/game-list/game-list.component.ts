import {Component, OnInit} from '@angular/core';
import {PageInfoService, PageLink} from "../../../_metronic/layout";
import {GameService} from "../game.service";
import {Pagination} from "../../../shared/models/pagination";

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
    // dataList: any[];
    pagination: Pagination<any[]>;

    loading = false;


    constructor(private pageInfo: PageInfoService,
                private gameService: GameService) {
    }

    ngOnInit(): void {
        this.loadData();
        this.loadBreadCrumbsLinks();


    }

    loadData(): void {
        this.loading = true;

        this.gameService.loadList().subscribe({
            next: (res: Pagination<any>) => {
                // this.dataList = res.data;
                this.pagination = res;
                console.log('data: ', this.pagination);
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

}
