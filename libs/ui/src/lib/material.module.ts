import { NgModule } from '@angular/core'
//     MatAutocompleteModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatCardModule,
//     MatCheckboxModule,
//     MatChipsModule,
//     MatDatepickerModule,
//     MatDialogModule,
//     MatExpansionModule,
//     MatFormFieldModule,
//     MatGridListModule,
//     MatIconModule,
//     MatInputModule,
//     MatListModule,
//     MatMenuModule,
//     MatNativeDateModule,
//     MatProgressBarModule,
//     MatProgressSpinnerModule,
//     MatRippleModule,
//     MatSelectModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatSnackBarModule,
//     MatSortModule,
//     MatStepperModule,
//     MatTableModule,
//     MatTabsModule,
// } from '@angular/material'

import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSliderModule } from '@angular/material/slider'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatRadioModule } from '@angular/material/radio';
import { UiButtonComponent } from './button/ui-button/ui-button.component'


const modules = [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    // MatExpansionModule,
    // MatIconModule,
    // MatListModule,
    // MatMenuModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRippleModule,
    // MatChipsModule,
    // MatSelectModule,
    // MatStepperModule,
    // FlexLayoutModule,
    // MatTableModule,
    // MatTabsModule,
    // MatSortModule,
    // MatSlideToggleModule,
    // MatDialogModule,
    // FlexLayoutModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatMomentDateModule,
    // MatAutocompleteModule,
    // MatGridListModule,
    // MatSnackBarModule,
]

@NgModule({
    imports: modules,
    exports: modules,
})
export class MaterialModule {}
