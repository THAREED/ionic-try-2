import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap, first } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-lesson14',
  templateUrl: './lesson14.page.html',
  styleUrls: ['./lesson14.page.scss'],
})
export class Lesson14Page implements OnInit {
  paths: Array<string>;
  src: String
  title: String
  param: String
  seq: number
  state: 'start' | 'pause' = 'pause'
  time: BehaviorSubject<string> = new BehaviorSubject('0');
  timer: number
  interval;
  lesson:Lesson
  currentScreenOrientation:string
  SERVER_ADDRESS = 'http://localhost:3000'; // Your Node Address
  constructor(
    private http: HttpClient,
    private router: Router,    
    private route: ActivatedRoute,
    private screenOrientation: ScreenOrientation
  ) {}

  startTimer(duration: number){
      this.src = this.paths[this.seq-1];
      this.state = 'start'
      clearInterval(this.interval)
      this.timer = duration; //second
      this.updateTimeValue()
      this.interval = setInterval(() => {
        this.updateTimeValue()
      }, 1000)
  }

  pauseTimer(){
    clearInterval(this.interval)
    this.state = 'pause'
  }

  continueTimer(){
    clearInterval(this.interval)
    // console.log(this.timer)
    if(this.timer == 0){
      this.startTimer(5)
    }
    else{
      this.startTimer(this.timer)
    }
  }

  stopTimer(){
    clearInterval(this.interval)
    this.router.navigate(['/lesson21', this.param])
  }

  nextTimer(){
    clearInterval(this.interval)
    if(this.seq >= 5){
      this.stopTimer()
    }
    else{
      this.seq++
      this.startTimer(5)
    }
  }

  updateTimeValue(){
    let seconds: any = this.timer % 60

    seconds = String(Math.floor(seconds)).slice(-2)
    const text = seconds
    this.time.next(text)

    --this.timer
    if(this.timer < 0){
      // console.log(this.seq)
      if(this.seq == 5){
        this.stopTimer()
      }
      else{
        this.seq++
        this.startTimer(5)
      }
    }
  }
  
  ngOnInit() {
    this.paths = ['http://localhost:51412/1_0/1_0_001.png', 'http://localhost:51412/1_0/1_0_002.png', 'http://localhost:51412/1_0/1_0_003.png','http://localhost:51412/1_0/1_0_004.png','http://localhost:51412/1_0/1_0_005.png'];
    this.param = this.route.snapshot.paramMap.get('lesson')
    this.seq = 1
    this.startTimer(5)
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  nextPage(){
      this.router.navigate(['/lesson21', this.param])
  }
  ionViewWillEnter() {
    this.http.get<Lesson>(`${this.SERVER_ADDRESS}/` + this.param)
    .pipe(
      tap(lesson => {
        return lesson;
      })
    ).subscribe(lesson => {
      this.lesson = lesson
      this.title = lesson[0].title
    });
  } 
  
}
