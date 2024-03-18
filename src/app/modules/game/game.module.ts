import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InlineSVGModule} from "ng-inline-svg-2";
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../_metronic/partials";
import {SharedModule} from "../../_metronic/shared/shared.module";
import {GameRoutingModule} from "./game-routing.module";
import {GameListComponent} from "./game-list/game-list.component";



@NgModule({
  declarations: [
      GameListComponent
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
