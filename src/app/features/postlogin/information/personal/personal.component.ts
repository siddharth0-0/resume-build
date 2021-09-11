import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  public personalForm : FormGroup;

  constructor(private router : Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalForm = this.formBuilder.group({
      fname : ['null',Validators.required],
      lname :['null',Validators.required],
      address : [null,Validators.required],
      city :[null,Validators.required],
      zip : [null,[Validators.required,Validators.minLength(6)]],
      country :[null,Validators.required],
      email : [null,[Validators.required,Validators.email]],
      number : [null,[Validators.required,Validators.minLength(10)]],
      // git :[null,Validators.required]
    })
  }

  onCancel(){
    this.router.navigate(['post/homepage']);
  }
  onNext(){
    this.router.navigate(['post/information/education']);
  }
}
