import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankFormComponent } from './blank-form/blank-form.component';


const routes: Routes = [
    { path: '', redirectTo: '/blank', pathMatch: 'full' },
    { path: 'blank', component: BlankFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
