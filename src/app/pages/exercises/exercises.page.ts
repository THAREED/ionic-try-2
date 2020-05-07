import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Progress } from '../../models/progress';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthUser } from 'src/app/models/auth_user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {
  param: String;
  user_id: String;
  progress: Progress;
  authUser: AuthUser;
  case_1: String;
  case_2: String;
  case_3: String;
  case_4: String;
  case_5: String;
  case_6: String;
  case_7: String;
  case_8: String;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit() {

  }
  ex1() {
    return this.router.navigate(['/ex1',  this.user_id, 'lip']);
  }
  ex2() {
    return this.router.navigate(['/ex1',  this.user_id, 'tongue']);
  }
  ex3() {
    return this.router.navigate(['/ex1',  this.user_id, 'gum']);
  }
  ex4() {
    return this.router.navigate(['/ex1',  this.user_id, 'saliva']);
  }
  ex5() {
    return this.router.navigate(['/ex1', this.user_id, 'teeth']);
  }
  ex6() {
    return this.router.navigate(['/ex1',  this.user_id, 'denture']);
  }
  ex7() {
    return this.router.navigate(['/ex1',  this.user_id, 'cleanliness']);
  }
  ex8() {
    return this.router.navigate(['/ex1',  this.user_id, 'pain']);
  }

  ionViewWillEnter() {
    this.authService.authUser().subscribe(
      user => {
        this.authUser = user;
        this.user_id = this.authUser[0].id;
        this.getProgress(this.user_id);
      }
    );
  }

  getProgress(user_id) {
    this.user_id = user_id;
    this.http.get<Progress>(`${this.SERVER_ADDRESS}/progress/` + this.user_id)
    .pipe(
      tap(progress => {
        return progress;
      })
    ).subscribe(progress => {
      this.progress = progress;
      this.case_1 = progress[0].case_1_num;
      this.case_2 = progress[0].case_2_num;
      this.case_3 = progress[0].case_3_num;
      this.case_4 = progress[0].case_4_num;
      this.case_5 = progress[0].case_5_num;
      this.case_6 = progress[0].case_6_num;
      this.case_7 = progress[0].case_7_num;
      this.case_8 = progress[0].case_8_num;
    });
  }

}
