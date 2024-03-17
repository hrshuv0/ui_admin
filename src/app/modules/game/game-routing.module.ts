import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GameListComponent} from "./game-list/game-list.component";

const routes: Routes = [
    {
        path: '',
        component: GameListComponent,
        children: [
            {path: 'list', component: GameListComponent},
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
