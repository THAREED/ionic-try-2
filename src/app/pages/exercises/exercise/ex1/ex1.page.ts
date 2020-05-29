import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Lesson } from '../../../../models/lesson';
import { HttpClient, ɵHttpInterceptingHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ImageService } from 'src/app/services/image.service';


const choices = new Array();
@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})

export class Ex1Page implements OnInit {
  lessonParam: String;
  idParam: String;
  src: string;
  selectedRadioGroup: any;
  state: 'start' | 'pause' = 'pause';
  title: String;
  lesson: Lesson;
  time: BehaviorSubject<string> = new BehaviorSubject('0.0');
  timer: number;
  seq: number;
  interval;
  SERVER_ADDRESS = 'http://localhost:3000';

  private lip = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private imageService: ImageService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.startTimer(2);
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
    this.idParam = this.route.snapshot.paramMap.get('id');
    if(this.lessonParam == 'lip'){
      this.lip = this.shuffle(this.imageService.getLipImage_0().concat(this.imageService.getLipImage_1()).concat(this.imageService.getLipImage_2()))
    }
    this.src = 'http://localhost:51412/' + this.lip[0]
    this.seq = 1;
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

  // radioGroupChange(event) {
  //   this.seq++
  //   this.selectedRadioGroup = String(event.detail.value);
  //   choices.push(this.selectedRadioGroup);
  //   if(this.seq < this.lip.length){
  //     this.src = 'http://localhost:51412/' + this.lip[this.seq]
  //   }
  //   console.log(choices)

  // }

  radioGroupChange(value) {
    this.seq++
    let tmp = String(value);
    choices.push(tmp);
    if(this.seq < this.lip.length){
      this.src = 'http://localhost:51412/' + this.lip[this.seq]
    }
    console.log(choices)

  }

  startTimer(duration: number) {
    this.state = 'start';
    console.log(this.state);
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
    console.log(this.state);
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
    this.router.navigate(['/ex1-score', this.idParam, this.lessonParam]);
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

  ionViewWillEnter() {
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
