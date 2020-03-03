import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./private/private.module').then(mod => mod.PrivateModule),
        canActivate: [ AuthGuard ]
    },
    {
        path: 'auth',
        loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
