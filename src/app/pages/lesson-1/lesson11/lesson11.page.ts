import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.page.html',
  styleUrls: ['./lesson11.page.scss'],
})
export class Lesson11Page implements OnInit {
  param: String
  title: String
  description: String
  lesson:Lesson
  SERVER_ADDRESS = 'http://localhost:3000'; // Your Node Address
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('lesson');
  }

  start(){
    this.router.navigate(['/lesson12', this.param]);
  }
  
  goToLessonPage()
  {
    this.router.navigate(['/tabs']);
  }
  

  ionViewWillEnter() {
      this.http.get<Lesson>(`${this.SERVER_ADDRESS}/` + this.param)
      .pipe(
        tap(lesson => {
          return lesson;
        })
      ).subscribe(lesson => {
        this.lesson = lesson
        this.title = lesson[0].title
        this.description = lesson[0].description
      });
  }
}
