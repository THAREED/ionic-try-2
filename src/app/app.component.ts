import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { Storage } from '@ionic/storage';
import { AuthUser } from 'src/app/models/auth_user';
import { DataService } from '../app/services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  authUser: AuthUser;
  firstname: String;
  lastname: String;
  user_id: String;
  username: String;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private data: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.authService.getToken();
    });
  }

  logout() {
    this.authService.logout().subscribe(
        data => {
        this.alertService.presentToast(data['Logout']);
        },
        error => {
        console.log(error);
        },
        () => {
        this.navCtrl.navigateRoot('/login');
        }
    );
  }
}
