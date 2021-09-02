import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreHomeComponent } from './pre-home/pre-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PreHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloginRoutingModule { }
