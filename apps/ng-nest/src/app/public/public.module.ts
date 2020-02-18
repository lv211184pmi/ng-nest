import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UiModule } from '@myworkspace/ui'
import { PublicComponent } from './container/public.component'
import { PublicRoutingModule } from './public-routing.module'
import { LoginComponent } from './components/login/login.component'
import { RegistrationComponent } from './components/registration/registration.component'


@NgModule({
  declarations: [PublicComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    UiModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
