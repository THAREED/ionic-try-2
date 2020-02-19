import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
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
    private menu: MenuController,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
  ) { }

  dismissLogin() {
    this.modalController.dismiss();
  }

  // async registerModal() {
  //   this.dismissLogin();
  //   const registerModal = await this.modalController.create({
  //     component: RegisterPage
  //   });
  //   return await registerModal.present();
  // }
  
  login(form: NgForm) {
    this.authService.login(form.value).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        // this.dismissLogin();
        // this.menu.enable(true);
        this.navCtrl.navigateRoot('/app');
      }
    );
  }

  ngOnInit() { }

}
