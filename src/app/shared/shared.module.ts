
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  // Navigation.
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,

  // Layout
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,

  // Buttons & Indicators
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,

  // Form Controls.
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSelectModule,

  // Popups & Modals
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,

  // Tables
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,

  // Services
  MatIconRegistry,
  MatFormFieldModule
 
} from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AgGridModule,
    // Ng2SmartTableModule,
        // Navigation.
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,

  // Layout
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  

  // Buttons & Indicators
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,

  // Form Controls.
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSelectModule,

  // Popups & Modals
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,

  // Tables
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,

  // Services
  // MatIconRegistry
  ],
  
  exports:[
    // Ng2SmartTableModule,
      // Navigation.
      AgGridModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,

  // Layout
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,

  // Buttons & Indicators
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,

  // Form Controls.
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSelectModule,

  // Popups & Modals
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,

  // Tables
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,

  // Services
  // MatIconRegistry
  ]
})
export class SharedModule { }
