import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListingComponent } from './role-listing/role-listing.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbNavModule, NgbDropdownModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { KeenSharedModule } from 'src/app/_metronic/shared/keen-shared.module';
import { CrudModule } from 'src/app/modules/crud/crud.module';



@NgModule({
  declarations: [RoleDetailsComponent, RoleListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoleListingComponent,
      },
      {
        path: ':id',
        component: RoleDetailsComponent,
      },
    ]),
    CrudModule,
      KeenSharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild(),
  ]
})
export class RoleModule { }
