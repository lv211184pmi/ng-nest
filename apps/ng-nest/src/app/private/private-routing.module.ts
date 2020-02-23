import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PrivateComponent } from './container/private.component'

const routes: Routes = [
    {
        path: '', component: PrivateComponent,
        children: [
            { path: '', redirectTo: 'live-chat' },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrivateRoutingModule {}
