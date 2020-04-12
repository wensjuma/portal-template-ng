import { Settings } from './app.settings.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from './app.settings';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  location: Location;
  title = 'kcb-eteller-portal';
  constructor() {
    // this.settings = this.appSettings.settings;
  }
}


