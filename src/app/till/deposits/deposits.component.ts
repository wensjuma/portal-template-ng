import { DenominationService } from './../../common/services/denomination.service';
import { AdminDialogComponent } from './../admin-dialog/admin-dialog.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../../common/services/websocket.service'
import * as SockJS from 'sockjs-client';
import * as  EventBus from 'vertx3-eventbus-client';
import { DenominationComponent } from '../denominations/denominations.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent implements OnInit, OnDestroy {
  input;
  public result: any;
  public eventBus;
  public message: any;
  public _data: any
  transactionForm: FormGroup

  constructor(
    public dialog: MatDialog,
    private denominationService: DenominationService,
    private formBuilder: FormBuilder,
    private _eventBus: WebsocketService,
    private  _snackBar: MatSnackBar
  ) {

  }
  ngOnInit() {
    // this.applySockConnection()
    this.handlerRegister()
    this.denominationService.totalbefore.asObservable().subscribe(val => {
      let temp: number = val;
      let tempVal = temp.toFixed(2);
      this.transactionForm.controls['amount'].setValue(tempVal);
    })
    this.transactionForm = this.formBuilder.group({
      accountno: ['', Validators.required],
      amount: ['', Validators.required],
      purpose: ['', [Validators.required]],
      depositername: ['', [Validators.required]],
      signature: ['', Validators.required],
    });
  }
  handlerRegister() {
    const self = this

    self._eventBus.eventBus.onopen = function () {
      // console.log(result);
      self._eventBus.eventBus.registerHandler('out', function (error, message) {
        const response = message.body;
        console.log(JSON.stringify(response));
        this.result = response
        //try self to get pass data to html  self.result = response
      })
    
    }
  }
  sendInfo(message: string, action: string) {
    this._snackBar.open(" Successifully added!", action, {
      duration: 2000,
      panelClass: ["my-snack-bar"],
      // verticalPosition: "top", // 'top' | 'bottom'
      // horizontalPosition: "right"
    });

    const self = this
    console.log(this.message);
    self.eventBus.send('in')
  }
  complete() {
    let msg = {
      message: 'transactions received'
    }
  }
  loadDenominations() {
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    this.dialog.open(DenominationComponent, {
      width: '600px',
      data: {}
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);

    // });
  }
  openDialog() {
    let dialog = this.dialog.open(AdminDialogComponent)
  }
  // public applySockConnection() {
  //   let stompClient = this._wsService.sockConnect()
  //   console.log(stompClient)
  //   stompClient.connect({}, frame => {
  //     console.log('reach');

  //     console.log(stompClient);
  //     console.log(frame);
  //     // Subscribe to notification topic
  //     stompClient.subscribe('/topic/message/user', notification => {
  //       console.log(notification);

  //       if (notification.body.startsWith('[transform]')) {
  //         console.log(123);

  //         //this._snackBar.open(notification.body, '', { duration: 7000, horizontalPosition: 'right' });
  //         // rest of the logic goes here...
  //       }
  //     });
  //     // sendMessage() {
  //   //   if (this.input) {
  //   //     this.messageService.sendMessage(this.input);
  //   //     this.input = '';
  //   //   }
  //   // }
  //   })

  //   }
  ngOnDestroy(): void{
    this._eventBus.eventBus.close()
  }
}