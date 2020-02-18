import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PublicComponent } from './container/public.component';

const routes: Routes = [
    {
        path: '', component: PublicComponent,
        children: [
            { path: '', redirectTo: 'login' },
            { path: 'login', component: LoginComponent },
            { path: 'registration', component: RegistrationComponent }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicRoutingModule {}