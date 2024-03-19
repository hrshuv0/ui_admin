import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GameListComponent} from "./game-list/game-list.component";
import {GameFormComponent} from "./game-form/game-form.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '',component: GameListComponent},
            {path: 'new', component: GameFormComponent},
            {path: 'edit/:id', component: GameFormComponent},
            {path: '**', redirectTo: '', pathMatch: 'full'},
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GameRoutingModule {
}
