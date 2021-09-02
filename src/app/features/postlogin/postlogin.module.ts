import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostloginRoutingModule } from './postlogin-routing.module';
import { PostHomeComponent } from './post-home/post-home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [PostHomeComponent, PersonalInfoComponent],
  imports: [
    CommonModule,
    PostloginRoutingModule
  ]
})
export class PostloginModule { }
