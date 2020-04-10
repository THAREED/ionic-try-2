import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-lesson13',
  templateUrl: './lesson13.page.html',
  styleUrls: ['./lesson13.page.scss'],
})
export class Lesson13Page implements OnInit {
  title: String
  param: string
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

  prevPage(){
    this.router.navigate(['/lesson12', this.param]);
  }
  nextPage(){
    this.router.navigate(['/lesson14', this.param]);
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
