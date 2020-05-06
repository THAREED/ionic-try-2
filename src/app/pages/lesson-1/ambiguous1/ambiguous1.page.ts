import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

let split;
@Component({
  selector: 'app-ambiguous1',
  templateUrl: './ambiguous1.page.html',
  styleUrls: ['./ambiguous1.page.scss'],
})
export class Ambiguous1Page implements OnInit {
  title: String;
  idParam: string;
  lessonParam: string;
  ambiguous1: String;
  ambi1_txt: String;
  ambi1_img: String;
  lesson: Lesson;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
  }

  // prevPage(){
  //   this.router.navigate(['/lesson12', this.param]);
  // }
  nextPage() {
    this.router.navigate(['/lesson24', this.idParam, this.lessonParam]);
  }
  ionViewWillEnter() {
    this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/` + this.lessonParam)
    .pipe(
      tap(lesson => {
        return lesson;
      })
    ).subscribe(lesson => {
      this.lesson = lesson;
      this.title = lesson[0].title;
      this.ambiguous1 = lesson[0].ambiguous_1;
      split = this.ambiguous1.split(',');
      this.ambi1_txt = split[0];
      this.ambi1_img = split[1];
    });
}


}
