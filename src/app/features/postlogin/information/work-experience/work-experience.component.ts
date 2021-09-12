import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  workForm : FormGroup;
  
  constructor(private router : Router,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.workForm = this.formBuilder.group({
      companyName : ['null',Validators.required],
      jobTitle :[null,Validators.required],
      city : [null,Validators.required],
      state :[null,Validators.required],
      startMonth :['Februray',Validators.required],
      startYear :['2012',Validators.required],
      endMonth :['January',Validators.required],
      endYear :['2012',Validators.required],
      description : [null],
    })
  }

  onBack(){
    this.router.navigate(['post/information/education']);
  }
  onNext(){
    this.router.navigate(['post/information/skill']);
  }
}
