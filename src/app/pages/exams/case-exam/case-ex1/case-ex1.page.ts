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
  lipPath: Array<string>;
  tonguePath: Array<string>;
  gumPath: Array<string>;
  salivaPath: Array<string>;
  teethPath: Array<string>;
  denturePath: Array<string>;
  cleanlinessPath: Array<string>;
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
    this.lipPath = [

      '1_0_001.png',
      '1_0_002.png',
      '1_0_003.png',
      '1_0_004.png',
      '1_0_005.png',
      '1_0_006.png',
      '1_0_007.png',
      '1_0_008.png',
      '1_1_001.png',
      '1_1_002.png',
      '1_1_003.png',
      '1_1_004.png',
      '1_2_001.png',
      '1_2_002.png',
      '1_2_003.png',
      '1_2_004.png',
      '1_2_005.png'
    ];
    this.tonguePath = [
      '2_0_001.png',
      '2_0_002.png',
      '2_1_001.png',
      '2_1_002.png',
      '2_2_001.png',
      '2_2_002.png',
      '2_2_003.png'
    ];
    this.gumPath = [
      '3_0_001.png',
      '3_0_002.png',
      '3_0_003.png',
      '3_0_004.png',
      '3_0_005.png',
      '3_0_006.png',
      '3_1_001.png',
      '3_1_002.png',
      '3_1_003.png',
      '3_1_004.png',
      '3_2_001.png',
      '3_2_002.png',
      '3_2_003.png',
      '3_2_004.png',
      '3_2_005.png',
      '3_2_006.png',
      '3_2_007.png',
      '3_2_008.png',
      '3_2_009.png',
      '3_2_010.png',
      '3_2_011.png',
      '3_2_012.png',
      '3_2_013.png',
      '3_2_014.png'
    ];
    this.salivaPath = [
      '4_0_001.png',
      '4_1_001.png',
      '4_1_002.png',
      '4_1_003.png',
      '4_2_001.png'
    ];
    this.teethPath = [
      '5_0_001.png',
      '5_0_002.png',
      '5_0_003.png',
      '5_0_004.png',
      '5_0_005.png',
      '5_0_006.png',
      '5_0_007.png',
      '5_0_008.png',
      '5_0_009.png',
      '5_0_010.png',
      '5_1_001.png',
      '5_1_002.png',
      '5_1_003.png',
      '5_1_004.png',
      '5_1_005.png',
      '5_1_006.png',
      '5_1_007.png',
      '5_1_008.png',
      '5_2_001.png',
      '5_2_002.png',
      '5_2_003.png',
      '5_2_004.png',
      '5_2_005.png',
      '5_2_006.png',
      '5_2_007.png',
      '5_2_008.png',
      '5_2_009.png',
      '5_2_010.png'
    ];
    this.denturePath = [
      '6_0_001.png',
      '6_0_002.png',
      '6_0_003.png',
      '6_0_004.png',
      '6_1_001.png',
      '6_1_002.png',
      '6_1_003.png',
      '6_2_001.png',
      '6_2_002.png'
    ];
    this.cleanlinessPath = [
      '7_2_001.png',
      '7_2_002.png',
      '7_2_003.png',
      '7_2_004.png',
      '7_2_005.png'
    ];
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
      this.src = 'http://localhost:51412/' + this.shuffle(this.lipPath)[0];
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
