import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultipleImageUploadComponent } from './multiple-image-upload/multiple-image-upload.component';


const routes: Routes = [
  {
    path:'multiple',
    component: MultipleImageUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadsRoutingModule { }
