import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

let split;
@Component({
  selector: 'app-lesson12',
  templateUrl: './lesson12.page.html',
  styleUrls: ['./lesson12.page.scss'],
})
export class Lesson12Page implements OnInit {
  title: String;
  char0: String;
  char0_split0: String;
  char0_split1: String;
  char1: String;
  char2: String;
  ambiguous0: String;
  lessonParam: String;
  idParam: String;
  lesson: Lesson;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
    this.idParam = this.route.snapshot.paramMap.get('id');
  }
  nextPage() {
    if (this.ambiguous0 != null) {
      this.router.navigate(['/ambiguous0', this.idParam, this.lessonParam]);
    } else {
      this.router.navigate(['/lesson13', this.idParam, this.lessonParam]);
    }
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
        this.char0 = lesson[0].characteristic_0;
        split = this.char0.split(',', 2);
        this.char0_split0 = split[0];
        this.char0_split1 = split[1];
        this.char1 = lesson[0].characteristic_1;
        this.char2 = lesson[0].characteristic_2;
        this.ambiguous0 = lesson[0].ambiguous_0;
      });
  }

}
