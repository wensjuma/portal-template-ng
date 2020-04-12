import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.scss']
})
export class SystemUsersComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private toastrService: ToastrService
    ) { }
    
  ngOnInit() {
  }
createUserDialog(){
  // const dialogConfig = new MatDialogConfig()
  // dialogConfig.disableClose = true;
  // dialogConfig.hasBackdrop = false
  // this.dialog.open(AddUserDialogComponent)
  this.toastrService.success('toast works!', 'Success')
}

}
