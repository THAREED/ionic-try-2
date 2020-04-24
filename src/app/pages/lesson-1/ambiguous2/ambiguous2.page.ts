import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

var split
@Component({
  selector: 'app-ambiguous2',
  templateUrl: './ambiguous2.page.html',
  styleUrls: ['./ambiguous2.page.scss'],
})
export class Ambiguous2Page implements OnInit {
  title: String
  param: string
  ambiguous2: String
  ambi2_txt: String
  ambi2_img: String
  lesson:Lesson
  SERVER_ADDRESS = 'http://localhost:3000'; // Your Node Address
  constructor(
    private http: HttpClient,
    private router: Router,    
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('lesson');
  }

  // prevPage(){
  //   this.router.navigate(['/lesson12', this.param]);
  // }
  nextPage(){
    this.router.navigate(['/lesson34', this.param]);
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
      this.ambiguous2 = lesson[0].ambiguous_2
      split = this.ambiguous2.split(",")
      this.ambi2_txt = split[0]
      this.ambi2_img = split[1]
    });
}


}
