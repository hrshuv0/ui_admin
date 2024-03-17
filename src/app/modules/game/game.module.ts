import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InlineSVGModule} from "ng-inline-svg-2";
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../_metronic/partials";
import {SharedModule} from "../../_metronic/shared/shared.module";
import {GameRoutingModule} from "./game-routing.module";



@NgModule({
  declarations: [],
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
