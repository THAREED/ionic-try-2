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
  diff: String;
  index: number;
  seq: number;
  authUser: AuthUser;
  user_id: String;
  src: String;
  title: String;
  char0: String;
  char1: String;
  char2: String;
  pause: number;
  time: BehaviorSubject<string> = new BehaviorSubject('0.0');
  timer: number;
  interval;
  SERVER_ADDRESS = 'http://localhost:3000';

  
  private medium = [
    'assets/img/Case2/case02lips.png', 
    'assets/img/Case2/case02tongue.png', 
    'assets/img/Case2/case02gum.png', 
    'assets/img/Case2/case02saliva.png',
    'assets/img/Case2/case02denture.png',
    'assets/img/Case2/case02teeth.png',
  ]
  private hard = [
    'assets/img/Case3/case03lips-teeth-gum.png', 
    'assets/img/Case3/case03saliva.png', 
    'assets/img/Case3/case03lips-teeth-gum.png', 
    'assets/img/Case3/case03saliva.png',
    'assets/img/Case3/case03lips-teeth-gum.png', 
    'assets/img/Case3/case03softtissue.png',
  ]
  private x =[]
  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private dataService: DataService,
    private alertController: AlertController
  ) { }

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
    this.pause++;
  }

  continueTimer() {
    clearInterval(this.interval);
    if (this.timer === 0) {
      this.startTimer(8);
    } else {
      this.startTimer(this.timer/60);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this.dataService.setExamChoice(this.diff, numbers);
    this.dataService.setExamImage(this.diff, this.x);
    this.dataService.setCnt(this.seq);
    this.dataService.setPauseCnt(this.pause);
    this.http.put(`${this.SERVER_ADDRESS}/progress/${this.idParam}/exam2_prog`, {progress: 1})
    .subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/case-checkans', this.idParam, this.diff]);
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
    
  }

  ionViewWillEnter(){
    this.diff = this.route.snapshot.paramMap.get('difficulty');
    if(this.diff === 'medium'){
      this.x = this.medium
      this.item = ['lip', 'tongue', 'gum', 'saliva', 'denture', 'cleanliness'];
    }
    else{
      this.x = this.hard
      this.item = ['lip', 'tongue', 'gum', 'saliva', 'teeth', 'cleanliness'];
    }
    this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/` + this.item[0])
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
    this.index = 0;
    this.seq = 1;
    this.pause = 0;
    this.src = this.x[this.index]
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.startTimer(8);
  }

  
  radioGroupChange(event) {
    this.selectedRadioGroup = String(event.detail.value);
  }

  checkAns() {
    numbers[this.index] = this.selectedRadioGroup;
    if (this.index < 5) {
      this.seq++;
      this.index++;
      this.src = this.x[this.index]
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

    } else {
      this.stopTimer()
    }
  }

  prevPage() {
    this.seq--;
    this.index--;
    numbers[this.index] = this.selectedRadioGroup;
    this.src = this.x[this.index]
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
