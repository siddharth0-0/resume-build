import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  workForm : FormGroup;
  addWork: FormArray;

  
  constructor(private router : Router,private formBuilder : FormBuilder) { 
    this.workForm = this.formBuilder.group({});
    this.addWork = this.formBuilder.array([]);
  }

  ngOnInit(): void {
    this.addWork.push(this.formBuilder.group({
      companyName : [null,Validators.required],
      jobTitle :[null,Validators.required],
      city : [null,Validators.required],
      state :[null,Validators.required],
      startMonth :[null,Validators.required],
      startYear :[null,Validators.required],
      endMonth :[null,Validators.required],
      endYear :[null,Validators.required],
      description : [null],
    }));
    // this.workForm = this.formBuilder.group({
    //   companyName : ['null',Validators.required],
    //   jobTitle :[null,Validators.required],
    //   city : [null,Validators.required],
    //   state :[null,Validators.required],
    //   startMonth :['Februray',Validators.required],
    //   startYear :['2012',Validators.required],
    //   endMonth :['January',Validators.required],
    //   endYear :['2012',Validators.required],
    //   description : [null],
    // })
    this.workForm.addControl('addWork',this.addWork);
  }

  // get addForm(){
  //   return this.workForm.get()
  // }

  onAddForm(){
    let workField = this.formBuilder.group({
      companyName : [null,Validators.required],
      jobTitle :[null,Validators.required],
      city : [null,Validators.required],
      state :[null,Validators.required],
      startMonth :[null,Validators.required],
      startYear :[null,Validators.required],
      endMonth :[null,Validators.required],
      endYear :[null,Validators.required],
      description : [null],
    })
    this.addWork.push(workField);
  }

  // addWorkForm() : FormGroup{
  //   return this.formBuilder.group({
  //     companyName : ['null',Validators.required],
  //     jobTitle :[null,Validators.required],
  //     city : [null,Validators.required],
  //     state :[null,Validators.required],
  //     startMonth :['Februray',Validators.required],
  //     startYear :['2012',Validators.required],
  //     endMonth :['January',Validators.required],
  //     endYear :['2012',Validators.required],
  //     description : [null],
  //   });
  // }

  onBack(){
    this.router.navigate(['post/information/education']);
  }
  onNext(){
    this.router.navigate(['post/information/skill']);
  }
}
