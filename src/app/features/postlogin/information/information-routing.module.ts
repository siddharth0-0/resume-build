import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { InformationComponent } from './information.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  { path: '', component:InformationComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'work', component: WorkExperienceComponent },
  { path: 'education', component: EducationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
