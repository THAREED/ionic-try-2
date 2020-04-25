import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from '../../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {
  param: String
  title: String
  lesson:Lesson
  SERVER_ADDRESS = 'http://localhost:3000'; // Your Node Address
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('lesson');
    console.log(this.param)
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
    });
  }
}
