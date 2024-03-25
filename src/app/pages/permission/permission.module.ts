import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbNavModule, NgbDropdownModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { KeenSharedModule } from 'src/app/_metronic/shared/keen-shared.module';
import { CrudModule } from 'src/app/modules/crud/crud.module';
import { PermissionListingComponent } from './permission-listing/permission-listing.component';
import { PermissionDetailsComponent } from './permission-details/permission-details.component';



@NgModule({
  declarations: [PermissionListingComponent, PermissionDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PermissionListingComponent,
      },
      {
        path: ':id',
        component: PermissionDetailsComponent,
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
export class PermissionModule { }
