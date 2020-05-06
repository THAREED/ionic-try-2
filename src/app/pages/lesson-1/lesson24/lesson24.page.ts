import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-lesson24',
  templateUrl: './lesson24.page.html',
  styleUrls: ['./lesson24.page.scss'],
})
export class Lesson24Page implements OnInit {
  title: String;
  idParam: String;
  lessonParam: String;
  seq: number;
  state: 'start' | 'pause' = 'pause';
  time: BehaviorSubject<string> = new BehaviorSubject('0');
  timer: number;
  interval;
  lesson: Lesson;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private screenOrientation: ScreenOrientation
  ) { }

  startTimer(duration: number) {
      this.state = 'start';
      clearInterval(this.interval);
      this.timer = duration; // second
      this.updateTimeValue();
      this.interval = setInterval(() => {
        this.updateTimeValue();
      }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.state = 'pause';
  }

  continueTimer() {
    clearInterval(this.interval);
    console.log(this.timer);
    if (this.timer === 0) {
      this.startTimer(5);
    } else {
      this.startTimer(this.timer);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    // this.updateProgress(this.idParam, '2');
    this.router.navigate(['/lesson31', this.idParam, this.lessonParam]);
  }

  nextTimer() {
    clearInterval(this.interval);
    if (this.seq >= 5) {
      this.stopTimer();
    } else {
      this.seq++;
      this.startTimer(5);
    }
  }

  updateTimeValue() {
    let seconds: any = this.timer % 60;

    seconds = String(Math.floor(seconds)).slice(-2);
    const text = seconds;
    this.time.next(text);

    --this.timer;
    if (this.timer < 0) {
      console.log(this.seq);
      if (this.seq === 5) {
        this.stopTimer();
      } else {
        this.seq++;
        this.startTimer(5);
      }
    }
  }

  ngOnInit() {
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.seq = 1;
    this.startTimer(5);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  nextPage() {
      this.router.navigate(['/lesson31', this.idParam, this.lessonParam]);
  }

  updateProgress(user_id: String, progress: String, less_num: String) {
    this.http.put(`${this.SERVER_ADDRESS}/progress/${user_id}/less_${less_num}_prog`, {progress: progress})
    .subscribe(data => {
      console.log(data);
    });
  }

  ionViewWillEnter() {
    console.log(this.screenOrientation.type);
    this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/` + this.lessonParam)
    .pipe(
      tap(lesson => {
        return lesson;
      })
    ).subscribe(lesson => {
      this.lesson = lesson;
      this.title = lesson[0].title;
    });
  }

}
