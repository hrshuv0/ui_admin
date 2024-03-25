import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { ThemeModeSwitcherComponent } from './theme-mode-switcher.component';
import { KeenSharedModule } from "../../../shared/keen-shared.module";

@NgModule({
  declarations: [ThemeModeSwitcherComponent],
  imports: [
    CommonModule,
    InlineSVGModule,
      KeenSharedModule
  ],
  exports: [ThemeModeSwitcherComponent],
})
export class ThemeModeModule {}
