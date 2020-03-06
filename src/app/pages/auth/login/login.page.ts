import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private menu: MenuController,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(form.value).subscribe(
      data => {
        this.alertService.presentToast('Logged In');
      },
      error => {
        console.log(error);
      },
      () => {
        this.menu.enable(true);
        this.navCtrl.navigateRoot('/app');
      }
    );
  }
}
