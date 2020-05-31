import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Lesson } from '../../../../models/lesson';
import { HttpClient, ɵHttpInterceptingHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ImageService } from 'src/app/services/image.service';
import { DataService } from 'src/app/services/data.service';
import { Progress } from '../../../../models/progress';

const choices = new Array();
const images = new Array();
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
  pause_cnt: number;
  help: number;
  progress: String;
  case: String;
  interval;
  char_0: String;
  char_1: String;
  char_2: String;
  SERVER_ADDRESS = 'http://localhost:3000';

  private x = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private imageService: ImageService,
    private alertController: AlertController,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.startTimer(2);
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
    this.idParam = this.route.snapshot.paramMap.get('id');
    if(this.lessonParam == 'lip'){
      this.x = this.shuffle(this.imageService.getLipImage_0().concat(this.imageService.getLipImage_1()).concat(this.imageService.getLipImage_2()))
      this.case = '1';
      this.title = 'ริมฝึปาก'
    }
    this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/` + this.lessonParam)
    .pipe(
      tap(lesson => {
        return lesson;
      })
    ).subscribe(lesson => {
      this.lesson = lesson;
      this.char_0 = lesson[0].characteristic_0;
      this.char_1 = lesson[0].characteristic_1;
      this.char_2 = lesson[0].characteristic_2;
    });
    this.src = this.x[0]
    console.log(this.x)
    this.seq = 1;
    this.pause_cnt = 0;
    this.help = 0;
    this.http.get<Progress>(`${this.SERVER_ADDRESS}/progress/` + this.idParam)
    .pipe(
      tap(progress => {
        return progress;
      })
    ).subscribe(progress => {
      let old_prog = '';
      let tmp = 0;
      if(this.case === '1'){
        old_prog = progress[0].case_1_num;
        tmp = parseInt(old_prog) + 1;
        this.progress = tmp.toString();
      }
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

  radioGroupChange(value) {
    images.push(this.x[this.seq-1])
    let tmp = String(value);
    if(tmp === images[this.seq-1].toString().split("_")[1]){
      this.correct()
    }
    else{
      this.wrong()
    }
    console.log(images[this.seq-1])
    console.log(tmp)
    this.seq++
    choices.push(tmp);
    if(this.state === 'pause'){
      this.continueTimer();
    }
    if(this.seq < this.x.length){
      this.src = this.x[this.seq]
    }
    if(this.seq === this.x.length){
      this.stopTimer()
    }
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
    this.pause_cnt++;
    clearInterval(this.interval);
    if (this.timer === 0) {
      this.startTimer(2);
    } else {
      this.startTimer(this.timer/60);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this.dataService.setExerciseChoice('score', choices);
    this.dataService.setExerciseImage('score', images);
    this.dataService.setPauseCnt(this.pause_cnt);
    this.dataService.setHelpCnt(this.help);
    this.dataService.setCnt(this.seq);
    this.http.put(`${this.SERVER_ADDRESS}/progress/${this.idParam}/case_${this.case}_num`, {progress: this.progress})
    .subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/ex1-score', this.idParam, 'score']);
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

  // ionViewWillEnter() {
  //   this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/` + this.lessonParam)
  //   .pipe(
  //     tap(lesson => {
  //       return lesson;
  //     })
  //   ).subscribe(lesson => {
  //     this.lesson = lesson;
  //     this.title = lesson[0].title;
  //   });
  // }

  async helpAlert() {
    this.help++;
    const alert = await this.alertController.create({
      header: this.title.toString(),
      subHeader: 'ลักษณะสำคัญ',
      message: 'ระดับ 0 ' + this.char_0 + '<br>ระดับ 1 ' + this.char_1 + ' <br>ระดับ 2 ' + this.char_2,
      buttons: ['เข้าใจแล้ว']
    });
    await alert.present();
  }

  async correct() {
    const alert = await this.alertController.create({
      header: 'ถูกต้อง',
      message: 'เก่งมากเลย',
    });

    await alert.present();
    setTimeout(()=>alert.dismiss(),2000);
  }
  async wrong() {
    const alert = await this.alertController.create({
      header: 'ผิด',
      message: 'ข้อต่อไปคิดดีๆ นะ',
    });

    await alert.present();
    setTimeout(()=>alert.dismiss(),2000);
  }
}
