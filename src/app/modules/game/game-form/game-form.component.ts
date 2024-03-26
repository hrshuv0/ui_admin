import {Component, OnInit} from '@angular/core';
import {PageInfoService, PageLink} from "../../../_metronic/layout";
import {GameService} from "../game.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-game-form',
    templateUrl: './game-form.component.html',
    styleUrl: './game-form.component.scss'
})
export class GameFormComponent implements OnInit {
    id: any;
    formData: FormGroup;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private pageInfo: PageInfoService,
        private gameService: GameService) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');

        this.createForm();
        this.loadData();
        this.loadBreadCrumbsLinks();
    }

    private loadData() {
        if(!this.id)  return;

        this.gameService.loadForm(this.id).subscribe({
            next: res =>{
                this.formData.patchValue(res);
                // console.log(this.formData.value);
            }
        });
    }

    submit() {
        if(this.formData.invalid){
            this.formData.markAllAsTouched();
            return;
        }

        this.gameService.save(this.formData.value).subscribe();



    }

    private createForm() {
        this.formData = this.fb.group({
            id: [null],
            name: [null, Validators.required],
            status: [null]
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
