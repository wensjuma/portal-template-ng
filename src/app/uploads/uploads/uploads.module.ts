import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadsRoutingModule } from './uploads-routing.module';
import { MultipleImageUploadComponent } from './multiple-image-upload/multiple-image-upload.component';


@NgModule({
  declarations: [MultipleImageUploadComponent],
  imports: [
    CommonModule,
    SharedModule,
   
    UploadsRoutingModule
  ]
})
export class UploadsModule { }
