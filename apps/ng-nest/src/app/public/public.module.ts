import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UiFormModule } from '@myworkspace/ui/forms'
import { PublicComponent } from './container/public.component'
import { PublicRoutingModule } from './public-routing.module'
import { LoginComponent } from './components/login/login.component'
import { RegistrationComponent } from './components/registration/registration.component'


@NgModule({
  declarations: [PublicComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    UiFormModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
