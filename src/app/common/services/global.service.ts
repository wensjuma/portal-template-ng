
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import * as moment from 'moment';


@Injectable(
  {
    providedIn: 'root',
  }
)
export class GlobalService {
  public apiHost: string;
  

  public setting: any = {};

  constructor() {
    // this.apiHost='https://10.20.2.4:8094/'  
    //this.apiHost = 'http://saccotest.ekenya.co.ke:8094/';
    // this.apiHost = 'https://ns569548.ip-51-79-82.net:8094/'
    // this.apiHost = 'https://bempower.ekenya.co.ke/'
    //this.apiHost = 'http://138.68.176.94:8094/';
    // this.apiHost = 'https://10.20.32.67:8094/';
  }
  loadGlobalSettingsFromLocalStorage(): void {
    if (localStorage.getItem('backend-setting') != null) {
      this.setting = JSON.parse(localStorage.getItem('backend-setting'));
    }
  }
  public handleServerErrors(result: any): any {
    let isValidationError = false;
    let errorMessage;
    /*    this.message.error('Encountered an error', { nzDuration: 2000 });
        switch (result.response_code) {
          case 400:
            errorMessage = 'Wrong method';
            break;
          case 401:
            errorMessage = 'Session Expired';
            this.message.error('Your session  has expired', { nzDuration: 4000 });
            break;
          case 403:
            errorMessage = 'UnAuthorized';
            break;
          case 422:
            isValidationError = true;
            errorMessage = Array.from(Object.keys(result.error_messages), k => result.error_messages[k]);
            break;
          case 404:
            errorMessage = 'Not Found';
            break;
          case 500:
            errorMessage = 'Internal Server Error';
            break;
        }
        return { errorMessage: errorMessage, isValidationError: isValidationError  };
        **/
  }
  public getCurentUser() {
    var user = localStorage.getItem(user)
  }

  public validateOnClientSide(validateForm: any): boolean {
    let hasClientValidationError = false;
    for (const i in validateForm.controls) {
      if (validateForm.controls) {
        validateForm.controls[i].markAsDirty();
        validateForm.controls[i].updateValueAndValidity();
        if (validateForm.controls[i].errors !== null) {
          hasClientValidationError = true;
        }
      }
    }
    return hasClientValidationError;
  }

 /**
  get Unique values in an array
   *
   */
  public uniqueBy(arr: any, fn: any): any {
    const unique = {};
    const distinct = [];
    arr.forEach(function (x: any): any {
      const key = fn(x);
      if (!unique[key]) {
        distinct.push(key);
        unique[key] = true;
      }
    });
    return distinct;
  }
 /**
  * Returns an array of dates between the two dates
  *  */ 
  enumerateDaysBetweenDates(startDate: any, endDate: any): any {
    startDate = moment(startDate);
    endDate = moment(endDate);
    const now = startDate;
    const dates = [];
    while (now.isBefore(endDate) || now.isSame(endDate)) {
      dates.push(now.format('YYYY-MM-DD'));
      now.add(1, 'days');
    }
    return dates;
  }

  /**
   * Shuffles array in place. ES6 version
   */
  public shuffle(a: any): any {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
