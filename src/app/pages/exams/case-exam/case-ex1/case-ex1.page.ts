import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth_user';
import { Lesson } from '../../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

const numbers = new Array();
@Component({
  selector: 'app-case-ex1',
  templateUrl: './case-ex1.page.html',
  styleUrls: ['./case-ex1.page.scss'],
})
export class CaseEx1Page implements OnInit {
  state: 'start' | 'pause' = 'pause';
  item: Array<string>;
  ans: Array<string>;
  selectedRadioGroup: any;
  idParam: String;
  index: number;
  seq: number;
  authUser: AuthUser;
  user_id: String;
  src: String;
  title: String;
  char0: String;
  char1: String;
  char2: String;
  time: BehaviorSubject<string> = new BehaviorSubject('0.0');
  timer: number;
  interval;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private dataService: DataService,
    private alertController: AlertController
  ) { }

  ionViewWillEnter() {
    
    this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/lip`)
    .pipe(
      tap(lesson => {
        return lesson;
      })
    ).subscribe(lesson => {
      this.title = lesson[0].title;
      this.char0 = lesson[0].characteristic_0;
      this.char1 = lesson[0].characteristic_1;
      this.char2 = lesson[0].characteristic_2;
      // this.src = 'http://localhost:51412/' + this.shuffle(this.lipPath)[0];
    });
  }

  shuffle(paths) {
    let i = paths.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = paths[j];
      paths[j] = paths[i];
      paths[i] = temp;
    }
    return paths;
  }

  changeLesson() {
    this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/${this.item[this.index]}`)
    .pipe(
      tap(lesson => {
        return lesson;
      })
    ).subscribe(lesson => {
      this.title = lesson[0].title;
      this.char0 = lesson[0].characteristic_0;
      this.char1 = lesson[0].characteristic_1;
      this.char2 = lesson[0].characteristic_2;
    });
    this.src = 'http://localhost:51412/' + this.shuffle(this[this.item[this.index] + 'Path'])[0];
    this.index++;
  }
  radioGroupChange(event) {
    this.selectedRadioGroup = String(event.detail.value);
  }

  startTimer(duration: number) {
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 60; // second
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
    if (this.timer === 0) {
      this.startTimer(2);
    } else {
      this.startTimer(this.timer/60);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    numbers.push(this.selectedRadioGroup);
    this.dataService.setExerciseChoice('test', numbers);
    this.router.navigate(['/case-checkans', this.idParam, 'test']);
  }

  updateTimeValue() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);
    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;
    if (this.timer < 0) {
      this.stopTimer();
    }
  }

  ngOnInit() {
    this.index = 0;
    this.seq = 1;
    this.startTimer(2);
    this.item = ['tongue', 'gum', 'saliva', 'teeth', 'denture', 'cleanliness'];
    this.idParam = this.route.snapshot.paramMap.get('id');
  }
  checkAns() {
    numbers.push(this.selectedRadioGroup);
    if (this.index < 6) {
      this.seq++;
      this.changeLesson();
    } else {
      this.dataService.setExerciseChoice('test', numbers);
      this.router.navigate(['/case-checkans', this.idParam, 'test']);
    }
  }
  async helpAlert() {
    const alert = await this.alertController.create({
      header: 'วิธีทำ',
      subHeader: 'เลือกระดับความผิดปกติให้ครบทั้ง 7 ตำแหน่ง',
      message: 'ระดับ 0 สุขภาพดี <br>ระดับ 1 เริ่มมีปัญหาแล้วนะ <br>ระดับ 2 ไปหาหมอด่วน',
      buttons: ['เข้าใจแล้ว']
    });
    await alert.present();
  }
}
