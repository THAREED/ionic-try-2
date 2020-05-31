import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/models/auth_user';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {
  item: Array<string>;
  idParam: String;
  authUser: AuthUser;
  firstname: String;
  user_id: String;
  user_exp: string;
  user_level: string;
  exp_prog: number;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  ionViewWillEnter() {
    this.authService.getUser().subscribe(
      user => {
        this.authUser = user;
        this.user_id = this.authUser[0].id;
        // this.getExam(this.user_id);
        this.http.get(`${this.SERVER_ADDRESS}/progress/` + this.user_id)
          .pipe(
            tap(progress => {
              return progress;
            })
          ).subscribe(progress => {
            this.user_exp = progress[0].user_exp;
            this.user_level = progress[0].user_level;
            this.exp_prog = parseFloat(this.user_exp)/100;
            console.log(this.exp_prog)
            // const ob = Object.keys(exam_detail).map(function(index) {
            //   const data = exam_detail[index];
            //   return data;
            // });
            // this.item = ob;
          });
      }
    );
  }

  // getExam(user_id) {
  //   this.user_id = user_id;
  //   this.http.get(`${this.SERVER_ADDRESS}/exam/` + this.user_id)
  //   .pipe(
  //     tap(exam_detail => {
  //       return exam_detail;
  //     })
  //   ).subscribe(exam_detail => {
  //     const ob = Object.keys(exam_detail).map(function(index) {
  //       const data = exam_detail[index];
  //       return data;
  //     });
  //     this.item = ob;
  //   });
  // }

  ngOnInit() {
  }
  startEasyExam() {
    this.router.navigate(['easy-ex-rule', this.user_id]);
  }
  startExam() {
    this.router.navigate(['case-rule', this.user_id]);
  }
}
