import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/models/auth_user';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {
  item: Array<string>;
  authUser: AuthUser;
  firstname: String;
  user_id: String;
  user_exp: string;
  user_level: string;
  exp_prog: number;
  exam1_prog: number;
  exam2_prog: number;
  exam3_prog: number;
  state: string;
  tmp: any;
  SERVER_ADDRESS = 'http://localhost:3000';

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private data: DataService
  ) { }

  ionViewWillEnter() {
    this.authService.getUser().subscribe(
      user => {
        this.authUser = user;
        this.user_id = this.authUser[0].id;
        this.data.setUser(this.authUser[0].firstname, this.authUser[0].lastname, this.authUser[0].gender)
        console.log(this.data.getUserGender())
        this.http.get(`${this.SERVER_ADDRESS}/progress/` + this.user_id)
          .pipe(
            tap(progress => {
              return progress;
            })
          ).subscribe(progress => {
            this.user_exp = progress[0].user_exp;
            this.data.setUserLevel(this.user_level);
            this.user_level = progress[0].user_level;
            if(this.user_level === '0'){
              this.user_level = 'มือใหม่'
            }
            if(this.user_level === '1'){
              this.user_level = 'มือฝึกหัด'
            }
            if(this.user_level === '2'){
              this.user_level = 'ผู้เชี่ยวชาญ'
            }
            this.exp_prog = parseFloat(this.user_exp)/100;
            this.exam1_prog = progress[0].exam1_prog;
            this.exam2_prog = progress[0].exam2_prog;
            this.exam3_prog = progress[0].exam3_prog;

          });
          this.http.get(`${this.SERVER_ADDRESS}/exp/` + this.user_id + `/history`)
          .pipe(
            tap(progress => {
              return progress;
            })
          ).subscribe(progress => {
            const ob = Object.keys(progress).map(function(index) {
            const data = progress[index];
            return data;
          });
            this.item = ob;
          });
      }
    );

  }

  ngOnInit() {
    
  }
  startEasyExam() {
    this.router.navigate(['easy-ex-rule', this.user_id]);
  }
  startMediumExam() {
    this.router.navigate(['case-rule', this.user_id, 'medium']);
  }
  startHardExam() {
    this.router.navigate(['case-rule', this.user_id, 'hard']);
  }
}
