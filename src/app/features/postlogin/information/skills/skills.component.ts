import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['post/information/work']);
  }
  onNext(){
    this.router.navigate(['post/information/personal']);
  }
}
