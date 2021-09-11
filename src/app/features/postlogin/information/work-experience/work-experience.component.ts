import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['post/information/education']);
  }
  onNext(){
    this.router.navigate(['post/information/skill']);
  }
}
