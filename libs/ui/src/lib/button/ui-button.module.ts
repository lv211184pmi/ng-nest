import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from '../material.module'
import { UiButtonComponent } from './ui-button/ui-button.component'

@NgModule({
  imports: [ CommonModule, MaterialModule ],
  declarations: [ UiButtonComponent ],
  exports: [ UiButtonComponent ],
})

export class UiButtonModule {}