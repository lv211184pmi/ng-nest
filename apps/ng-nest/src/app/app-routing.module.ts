import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
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
