import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.page.html',
  styleUrls: ['./lesson11.page.scss'],
})
export class Lesson11Page implements OnInit {
  param: String
  src: String
  title: String
  description: String
  lesson:Lesson
  SERVER_ADDRESS = 'http://localhost:3000'; // Your Node Address
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('lesson');
    if(this.param == "lip"){
      this.src = "assets/icon/ริมฝีปาก.png";
    }
    if(this.param == "tongue"){
      this.src = "assets/icon/ลิ้น.png";
    }
    if(this.param == "gum"){
      this.src = "assets/icon/เหงือก.png";
    }
    if(this.param == "saliva"){
      this.src = "assets/icon/น้ำลาย.png";
    }
    if(this.param == "teeth"){
      this.src = "assets/icon/ฟันธรรมชาติ.png";
    }
    if(this.param == "denture"){
      this.src = "assets/icon/ฟันเทียม.png";
    }
    if(this.param == "cleanliness"){
      this.src = "assets/icon/แปรงสีฟัน.png";
    }
    if(this.param == "pain"){
      this.src = "assets/icon/ความเจ็บปวด.png";
    }
  }

  start(){
    this.router.navigate(['/lesson12', this.param]);
  }
  
  goToLessonPage()
  {
    this.router.navigate(['/tabs']);
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
      this.description = lesson[0].description
    });
  }
}
