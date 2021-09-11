import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['post/information/personal']);
  }
  onNext(){
    this.router.navigate(['post/information/work']);
  }
}
