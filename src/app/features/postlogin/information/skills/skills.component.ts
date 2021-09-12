import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillForm : FormGroup;

  constructor(private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      skillName : [null,Validators.required],
      skillLevel : [null,Validators.required]
    })
  }

  onBack(){
    this.router.navigate(['post/information/work']);
  }
  onNext(){
    this.router.navigate(['post/information/personal']);
  }
}
