import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.scss']
})
export class PostHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  onNew(){
    this.router.navigate(['post/information']);
  }

}
