import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { SystemUsersComponent } from './system-users/system-users.component';
import { AddUserDialogComponent } from './system-users/add-user-dialog/add-user-dialog.component';


@NgModule({
  declarations: [SystemUsersComponent, AddUserDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule
  ],
  entryComponents:[
    AddUserDialogComponent
  ]
})
export class UserManagementModule { }
