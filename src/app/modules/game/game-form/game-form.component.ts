import {Component, OnInit} from '@angular/core';
import {PageInfoService, PageLink} from "../../../_metronic/layout";
import {GameService} from "../game.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss'
})
export class GameFormComponent implements OnInit{
    id:any;

    constructor(private route: ActivatedRoute,
                private pageInfo: PageInfoService,
                private gameService: GameService) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');


        this.loadData();
        this.loadBreadCrumbsLinks();


    }

    private loadData() {

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
            },
            {
                title: 'Games',
                path: 'games',
                isActive: false
            },
            {
                title: '',
                path: '/',
                isActive: false,
                isSeparator: true
            }
        ];

        let title = this.id ? 'Edit' : 'New';

        this.pageInfo.updateTitle(title);
        this.pageInfo.updateBreadcrumbs(breadCrumbsLinks);
    }
}
