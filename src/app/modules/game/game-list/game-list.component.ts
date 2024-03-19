import {Component, OnInit} from '@angular/core';
import {PageInfoService, PageLink} from "../../../_metronic/layout";
import {GameService} from "../game.service";

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
    dataList: any[] = [];

    loading = false;


    constructor(private pageInfo: PageInfoService,
                private gameService: GameService) {
    }

    ngOnInit(): void {
        this.loadData();
        this.loadBreadCrumbsLinks();


    }

    loadData() {
        this.loading = true;
        this.gameService.load().subscribe({
            next: res => {
                this.dataList = res.data;
                console.log(this.dataList);
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
