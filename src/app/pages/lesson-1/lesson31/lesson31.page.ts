import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

let d;
@Component({
  selector: 'app-lesson31',
  templateUrl: './lesson31.page.html',
  styleUrls: ['./lesson31.page.scss'],
})
export class Lesson31Page implements OnInit {
  title: String;
  char0: String;
  char0_split0: String;
  char0_split1: String;
  char1: String;
  char2: String;
  ambiguous2: String;
  lessonParam: String;
  idParam: String;
  lesson: Lesson;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private screenOrientation: ScreenOrientation
  ) { }

  ngOnInit() {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
    this.screenOrientation.unlock();
  }
  nextPage() {
    if (this.ambiguous2 != null) {
      this.router.navigate(['/ambiguous2', this.idParam, this.lessonParam]);
    } else {
      this.router.navigate(['/lesson34', this.idParam, this.lessonParam]);
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
        this.char0 = lesson[0].characteristic_2;
        d = this.char0.split(',', 2);
        this.char0_split0 = d[0];
        this.char0_split1 = d[1];
        this.char1 = lesson[0].characteristic_1;
        this.char2 = lesson[0].characteristic_2;
        this.ambiguous2 = lesson[0].ambiguous_2;
      });
  }

}
