import {Component, OnInit} from '@angular/core';
import {PageInfoService, PageLink} from "../../../_metronic/layout";

@Component({
    selector: 'app-game-list',
    standalone: true,
    imports: [],
    templateUrl: './game-list.component.html',
    styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {

    breadCrumbsLinks: Array<PageLink>;

    constructor(private pageInfo: PageInfoService) {
    }

    ngOnInit(): void {
        this.loadBreadCrumbsLinks();


    }


    private loadBreadCrumbsLinks() {
        this.breadCrumbsLinks = [
            {
                title: 'Dashboard',
                path: '/',
                isActive: false
            },
            {
                title:'',
                path: '/',
                isActive: false,
                isSeparator: true
            }
        ];

        this.pageInfo.updateTitle('Games');
        this.pageInfo.updateBreadcrumbs(this.breadCrumbsLinks);
    }


}
