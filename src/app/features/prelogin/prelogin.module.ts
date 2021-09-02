import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloginRoutingModule } from './prelogin-routing.module';
import { PreHomeComponent } from './pre-home/pre-home.component';


@NgModule({
  declarations: [PreHomeComponent],
  imports: [
    CommonModule,
    PreloginRoutingModule
  ]
})
export class PreloginModule { }
