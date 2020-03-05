import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.page.html',
  styleUrls: ['./lesson11.page.scss'],
})
export class Lesson11Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  start(){
    this.route.navigate(['/lesson12']);
  }
  
  goToLessonPage()
  {
    this.route.navigate(['/tabs']);
  }
  


}
