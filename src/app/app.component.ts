import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { AuthUser } from 'src/app/models/auth_user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  authUser: AuthUser;
  user_id: String;
  firstname: String;
  lastname: String;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.authService.getToken();
    });
  }
  // ionViewWillEnter() {
  //   this.authService.authUser().subscribe(
  //     user => {
  //       console.log('this is: ' + user);
  //       this.authUser = user;
  //       this.user_id = this.authUser[0].id;
  //       this.firstname = this.authUser[0].firstname;
  //       this.lastname = this.authUser[0].lastname;
  //     }
  //   );
  // }
}
