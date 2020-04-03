import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.page.html',
  styleUrls: ['./lesson11.page.scss'],
})
export class Lesson11Page implements OnInit {
  lesson: String
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.lesson = this.route.snapshot.paramMap.get('lesson');
  }

  start(){
    this.router.navigate(['/lesson12', this.lesson]);
  }
  
  goToLessonPage()
  {
    this.router.navigate(['/tabs']);
  }
  


}
