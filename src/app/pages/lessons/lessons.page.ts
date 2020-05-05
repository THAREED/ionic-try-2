import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthUser } from 'src/app/models/auth_user';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Progress } from '../../models/progress';

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
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private route: Router,
    private http: HttpClient,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {

  }
  lesson1() {
    return this.route.navigate(['/lesson11', 'lip']);
  }
  lesson2() {
    return this.route.navigate(['/lesson11', 'tongue']);
  }
  lesson3() {
    return this.route.navigate(['/lesson11', 'gum']);
  }
  lesson4() {
    return this.route.navigate(['/lesson11', 'saliva']);
  }
  lesson5() {
    return this.route.navigate(['/lesson11', 'teeth']);
  }
  lesson6() {
    return this.route.navigate(['/lesson11', 'denture']);
  }
  lesson7() {
    return this.route.navigate(['/lesson11', 'cleanliness']);
  }
  lesson8() {
    return this.route.navigate(['/lesson11', 'pain']);
  }
  ionViewWillEnter() {
    this.authService.authUser().subscribe(
      user => {
        this.authUser = user;
        this.user_id = this.authUser[0].id;
        this.firstname = this.authUser[0].firstname;
        this.getProgress(this.user_id);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
        data => {
        this.alertService.presentToast(data['message']);
        },
        error => {
        console.log(error);
        },
        () => {
        this.navCtrl.navigateRoot('/app');
        }
    );
  }
  getProgress(user_id){
    this.http.get<Progress>(`${this.SERVER_ADDRESS}/progress/` + user_id)
    .pipe(
      tap(progress => {
        return progress;
      })
    ).subscribe(progress => {
      this.progress = progress;
      this.less_1 = progress[0].less_1_prog;
      this.less_2 = progress[0].less_2_prog;
      this.less_3 = progress[0].less_3_prog;
      this.less_4 = progress[0].less_4_prog;
      this.less_5 = progress[0].less_5_prog;
      this.less_6 = progress[0].less_6_prog;
      this.less_7 = progress[0].less_7_prog;
      this.less_8 = progress[0].less_8_prog;
      console.log(this.less_5)
    });
  }

}
