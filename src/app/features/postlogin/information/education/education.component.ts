import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  uniForm : FormGroup
  schoolForm : FormGroup

  constructor(private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.uniForm = this.formBuilder.group({
      uniName : [null,Validators.required],
      uniDegree : [null,Validators.required],
      uniFieldName : [null,Validators.required],
      uniStartDate : [null,Validators.required],
      uniEndDate : [null,Validators.required],
      uniCity : [null,Validators.required],
      uniCountry : [null,Validators.required],
    });

    this.schoolForm = this.formBuilder.group({
      schoolName : [null,Validators.required],
      schoolDegree : [null,Validators.required],
      schoolFieldName : [null,Validators.required],
      schoolStartDate : [null,Validators.required],
      schoolEndDate : [null,Validators.required],
      schoolCity : [null,Validators.required],
      schoolCountry : [null,Validators.required],
    });
  }

  onBack(){
    this.router.navigate(['post/information/personal']);
  }
  onNext(){
    this.router.navigate(['post/information/work']);
  }
}
