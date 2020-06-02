import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Progress } from '../../../models/progress';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-lesson34',
  templateUrl: './lesson34.page.html',
  styleUrls: ['./lesson34.page.scss'],
})
export class Lesson34Page implements OnInit {
  paths: Array<string>;
  user_id: String;
  title: String;
  idParam: String;
  lessonParam: String;
  seq: number;
  less_num: String;
  state: 'start' | 'pause' = 'pause';
  time: BehaviorSubject<string> = new BehaviorSubject('0');
  timer: number;
  interval;
  lesson: Lesson;
  progress: Progress;
  lessonProg: Number;
  src: String;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private screenOrientation: ScreenOrientation,
    private image: ImageService
  ) { }

  startTimer(duration: number) {
      this.src = this.paths[this.seq - 1];
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
    if (this.lessonProg <= 3) {
      this.updateProgress(this.idParam, '3', this.less_num);
    }
    this.screenOrientation.unlock();
    this.router.navigate(['app']);
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
    if (this.lessonParam === 'lip') {
      this.paths = this.image.getLipImage_2()
    }
    if (this.lessonParam === 'tongue') {
      this.paths = [];
    }
    if (this.lessonParam === 'gum') {
      this.paths = [];
    }
    if (this.lessonParam === 'saliva') {
      this.paths = [];
    }
    if (this.lessonParam === 'teeth') {
      this.paths = [];
    }
    if (this.lessonParam === 'denture') {
      this.paths = [];
    }
    if (this.lessonParam === 'cleanliness') {
      this.paths = [];
    }
    if (this.lessonParam === 'pain') {
      this.paths = [];
    }
    let i = this.paths.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.paths[j];
      this.paths[j] = this.paths[i];
      this.paths[i] = temp;
    }
    this.seq = 1;
    this.startTimer(5);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  nextPage() {
      this.router.navigate(['/lesson21', this.idParam, this.lessonParam]);
  }

  updateProgress(user_id: String, progress: String, less_num: String) {
    this.http.put(`${this.SERVER_ADDRESS}/progress/${user_id}/less_${less_num}_prog`, {progress: progress})
    .subscribe(data => {
      console.log(data);
    });
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
        this.less_num = '1';
      }
      if (this.lessonParam === 'tongue') {
        this.lessonProg = progress[0].less_2_prog;
        this.less_num = '2';
      }
      if (this.lessonParam === 'gum') {
        this.lessonProg = progress[0].less_3_prog;
        this.less_num = '3';
      }
      if (this.lessonParam === 'saliva') {
        this.lessonProg = progress[0].less_4_prog;
        this.less_num = '4';
      }
      if (this.lessonParam === 'teeth') {
        this.lessonProg = progress[0].less_5_prog;
        this.less_num = '5';
      }
      if (this.lessonParam === 'denture') {
        this.lessonProg = progress[0].less_6_prog;
        this.less_num = '6';
      }
      if (this.lessonParam === 'cleanliness') {
        this.lessonProg = progress[0].less_7_prog;
        this.less_num = '7';
      }
      if (this.lessonParam === 'pain') {
        this.lessonProg = progress[0].less_8_prog;
        this.less_num = '8';
      }
    });
  }

  ionViewWillEnter() {
    this.getProgress(this.idParam);
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
