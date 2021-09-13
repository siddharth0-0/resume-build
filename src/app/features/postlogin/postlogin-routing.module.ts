import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationModule } from './information/information.module';
import { PostHomeComponent } from './post-home/post-home.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: PostHomeComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'information',  loadChildren: () => InformationModule},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostloginRoutingModule { }
