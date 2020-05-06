import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Progress } from '../../../models/progress';

@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.page.html',
  styleUrls: ['./lesson11.page.scss'],
})
export class Lesson11Page implements OnInit {
  idParam: String;
  lessonParam: String;
  user_id: String;
  src: String;
  class: String;
  title: String;
  status: String;
  description: String;
  lesson: Lesson;
  lessonProg: Number;
  progress: Progress;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private screenOrientation: ScreenOrientation
  ) { }

  ngOnInit() {
    this.screenOrientation.unlock();
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
    if (this.lessonParam === 'lip') {
      this.src = 'assets/icon/ริมฝีปาก.png';
    }
    if (this.lessonParam === 'tongue') {
      this.src = 'assets/icon/ลิ้น.png';
    }
    if (this.lessonParam === 'gum') {
      this.src = 'assets/icon/เหงือก.png';
    }
    if (this.lessonParam === 'saliva') {
      this.src = 'assets/icon/น้ำลาย.png';
    }
    if (this.lessonParam === 'teeth') {
      this.src = 'assets/icon/ฟันธรรมชาติ.png';
    }
    if (this.lessonParam === 'denture') {
      this.src = 'assets/icon/ฟันเทียม.png';
    }
    if (this.lessonParam === 'cleanliness') {
      this.src = 'assets/icon/แปรงสีฟัน.png';
    }
    if (this.lessonParam === 'pain') {
      this.src = 'assets/icon/ความเจ็บปวด.png';
    }
  }

  start() {
    this.router.navigate(['/lesson12', this.idParam, this.lessonParam]);
  }

  goToLessonPage() {
    this.router.navigate(['/tabs']);
  }

  setStatus() {
    if (this.lessonProg === 0) {
      this.status = 'ไม่เคยเรียน';
    }
    if (this.lessonProg === 1) {
      this.status = 'เรียนถึงระดับ 1';
    }
    if (this.lessonProg === 2) {
      this.status = 'เรียนถึงระดับ 2';
    }
    if (this.lessonProg === 3) {
      this.status = 'เรียนจบบทแล้ว';
    }
  }

  getProgress(user_id) {
    this.user_id = user_id;
    this.http.get<Progress>(`${this.SERVER_ADDRESS}/progress/` + this.user_id)
    .pipe(
      tap(progress => {
        return progress;
      })
    ).subscribe(progress => {
      this.progress = progress;
      if (this.lessonParam === 'lip') {
        this.lessonProg = progress[0].less_1_prog;
      }
      if (this.lessonParam === 'tongue') {
        this.lessonProg = progress[0].less_2_prog;
      }
      if (this.lessonParam === 'gum') {
        this.lessonProg = progress[0].less_3_prog;
      }
      if (this.lessonParam === 'saliva') {
        this.lessonProg = progress[0].less_4_prog;
      }
      if (this.lessonParam === 'teeth') {
        this.lessonProg = progress[0].less_5_prog;
      }
      if (this.lessonParam === 'denture') {
        this.lessonProg = progress[0].less_6_prog;
      }
      if (this.lessonParam === 'cleanliness') {
        this.lessonProg = progress[0].less_7_prog;
      }
      if (this.lessonParam === 'pain') {
        this.lessonProg = progress[0].less_8_prog;
      }
      this.setStatus();
    });
  }

  ionViewWillEnter() {
    this.getProgress(this.idParam);
    this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/` + this.lessonParam)
    .pipe(
      tap(lesson => {
        return lesson;
      })
    ).subscribe(lesson => {
      this.lesson = lesson;
      this.title = lesson[0].title;
      this.description = lesson[0].description;
    });
  }
}
