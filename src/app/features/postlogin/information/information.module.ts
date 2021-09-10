import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { PersonalComponent } from './personal/personal.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { InformationComponent } from './information.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InformationComponent,
    PersonalComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InformationModule { }
