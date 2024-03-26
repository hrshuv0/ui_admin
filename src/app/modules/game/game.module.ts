import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InlineSVGModule} from "ng-inline-svg-2";
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../_metronic/partials";
import {GameRoutingModule} from "./game-routing.module";
import {GameListComponent} from "./game-list/game-list.component";
import {SharedModule} from "../../shared/shared.module";
import {GameFormComponent} from "./game-form/game-form.component";



@NgModule({
  declarations: [
      GameListComponent,
      GameFormComponent
  ],
    imports: [
        CommonModule,
        GameRoutingModule,
        InlineSVGModule,
        DropdownMenusModule,
        WidgetsModule,
        CardsModule,
        SharedModule
    ]
})
export class GameModule { }
