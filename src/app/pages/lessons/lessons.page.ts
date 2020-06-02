import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthUser } from 'src/app/models/auth_user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Progress } from '../../models/progress';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})

export class LessonsPage implements OnInit {
  authUser: AuthUser;
  firstname: String;
  user_id: String;
  less_1: String;
  less_2: String;
  less_3: String;
  less_4: String;
  less_5: String;
  less_6: String;
  less_7: String;
  less_8: String;
  progress: Progress;
  username: String;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private route: Router,
    private http: HttpClient,
    private authService: AuthService,
    private data: DataService
  ) {}

  ngOnInit() {
    
  }
  lesson1() {
    return this.route.navigate(['/lesson11', this.user_id, 'lip']);
  }
  lesson2() {
    return this.route.navigate(['/lesson11', this.user_id, 'tongue']);
  }
  lesson3() {
    return this.route.navigate(['/lesson11', this.user_id, 'gum']);
  }
  lesson4() {
    return this.route.navigate(['/lesson11', this.user_id, 'saliva']);
  }
  lesson5() {
    return this.route.navigate(['/lesson11', this.user_id, 'teeth']);
  }
  lesson6() {
    return this.route.navigate(['/lesson11', this.user_id, 'denture']);
  }
  lesson7() {
    return this.route.navigate(['/lesson11', this.user_id, 'cleanliness']);
  }
  lesson8() {
    return this.route.navigate(['/lesson11', this.user_id, 'pain']);
  }

  ionViewWillEnter() {
    this.authService.getUser().subscribe(
      user => {
        this.authUser = user;
        this.user_id = this.authUser[0].id;
        this.getProgress(this.user_id);
        this.data.setUser(this.authUser[0].firstname, this.authUser[0].lastname, this.authUser[0].gender)
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
      this.data.setUserLevel(progress[0].user_level)
      if (progress[0].less_1_prog === 0) {
        this.less_1 = 'ไม่เคยเรียน';
      }
      if (progress[0].less_1_prog === 1) {
        this.less_1 = 'เรียนถึงระดับ 1';
      }
      if (progress[0].less_1_prog === 2) {
        this.less_1 = 'เรียนถึงระดับ 2';
      }
      if (progress[0].less_1_prog === 3) {
        this.less_1 = 'เรียนจบบทแล้ว';
      }

      if (progress[0].less_2_prog === 0) {
        this.less_2 = 'ไม่เคยเรียน';
      }
      if (progress[0].less_2_prog === 1) {
        this.less_2 = 'เรียนถึงระดับ 1';
      }
      if (progress[0].less_2_prog === 2) {
        this.less_2 = 'เรียนถึงระดับ 2';
      }
      if (progress[0].less_2_prog === 3) {
        this.less_2 = 'เรียนจบบทแล้ว';
      }

      if (progress[0].less_3_prog === 0) {
        this.less_3 = 'ไม่เคยเรียน';
      }
      if (progress[0].less_3_prog === 1) {
        this.less_3 = 'เรียนถึงระดับ 1';
      }
      if (progress[0].less_3_prog === 2) {
        this.less_3 = 'เรียนถึงระดับ 2';
      }
      if (progress[0].less_3_prog === 3) {
        this.less_3 = 'เรียนจบบทแล้ว';
      }

      if (progress[0].less_4_prog === 0) {
        this.less_4 = 'ไม่เคยเรียน';
      }
      if (progress[0].less_4_prog === 1) {
        this.less_4 = 'เรียนถึงระดับ 1';
      }
      if (progress[0].less_4_prog === 2) {
        this.less_4 = 'เรียนถึงระดับ 2';
      }
      if (progress[0].less_4_prog === 3) {
        this.less_4 = 'เรียนจบบทแล้ว';
      }

      if (progress[0].less_5_prog === 0) {
        this.less_5 = 'ไม่เคยเรียน';
      }
      if (progress[0].less_5_prog === 1) {
        this.less_5 = 'เรียนถึงระดับ 1';
      }
      if (progress[0].less_5_prog === 2) {
        this.less_5 = 'เรียนถึงระดับ 2';
      }
      if (progress[0].less_5_prog === 3) {
        this.less_5 = 'เรียนจบบทแล้ว';
      }

      if (progress[0].less_6_prog === 0) {
        this.less_6 = 'ไม่เคยเรียน';
      }
      if (progress[0].less_6_prog === 1) {
        this.less_6 = 'เรียนถึงระดับ 1';
      }
      if (progress[0].less_6_prog === 2) {
        this.less_6 = 'เรียนถึงระดับ 2';
      }
      if (progress[0].less_6_prog === 3) {
        this.less_6 = 'เรียนจบบทแล้ว';
      }

      if (progress[0].less_7_prog === 0) {
        this.less_7 = 'ไม่เคยเรียน';
      }
      if (progress[0].less_7_prog === 1) {
        this.less_7 = 'เรียนถึงระดับ 1';
      }
      if (progress[0].less_7_prog === 2) {
        this.less_7 = 'เรียนถึงระดับ 2';
      }
      if (progress[0].less_7_prog === 3) {
        this.less_7 = 'เรียนจบบทแล้ว';
      }

      if (progress[0].less_8_prog === 0) {
        this.less_8 = 'ไม่เคยเรียน';
      }
      if (progress[0].less_8_prog === 1) {
        this.less_8 = 'เรียนถึงระดับ 1';
      }
      if (progress[0].less_8_prog === 2) {
        this.less_8 = 'เรียนถึงระดับ 2';
      }
      if (progress[0].less_8_prog === 3) {
        this.less_8 = 'เรียนจบบทแล้ว';
      }
    });
  }

}
