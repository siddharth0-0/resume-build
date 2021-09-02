import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostloginModule } from './postlogin/postlogin.module';
import { PreloginModule } from './prelogin/prelogin.module';

const routes: Routes = [
  { path: '', loadChildren: () => PreloginModule},
  { path: 'post', loadChildren: () => PostloginModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
