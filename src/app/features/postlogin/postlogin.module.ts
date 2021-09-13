import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostloginRoutingModule } from './postlogin-routing.module';
import { PostHomeComponent } from './post-home/post-home.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [PostHomeComponent, PreviewComponent],
  imports: [
    CommonModule,
    PostloginRoutingModule
  ]
})
export class PostloginModule { }
