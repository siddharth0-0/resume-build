import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillForm : FormGroup;
  addSkill : FormArray

  constructor(private router : Router, private formBuilder : FormBuilder) {
    this.skillForm = this.formBuilder.group({});
    this.addSkill = this.formBuilder.array([]);
  }

  ngOnInit(): void {
    this.addSkill.push(this.formBuilder.group({
      skillName : [null,Validators.required],
      skillLevel : [null,Validators.required]
    }));
    // this.skillForm = this.formBuilder.group({
    //   skillName : [null,Validators.required],
    //   skillLevel : [null,Validators.required]
    // })
    this.skillForm.get('addskill') as FormArray;
  }

  onAddForm(){
    let skillField = this.formBuilder.group({
      skillName : [null,Validators.required],
      skillLevel : [null,Validators.required]
    })
    this.addSkill.push(skillField);
  }

  onBack(){
    this.router.navigate(['post/information/work']);
  }
  onNext(){
    this.router.navigate(['post/information/personal']);
  }
}
