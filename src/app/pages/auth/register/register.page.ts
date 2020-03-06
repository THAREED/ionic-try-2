import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private menu: MenuController,
  ) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.authService.register(
      form.value.firstname,
      form.value.lastname,
      form.value.phone,
      form.value.sex,
      form.value.username,
      form.value.password,
      form.value.password2
    ).subscribe(
      data => {
        this.authService.login(form.value).subscribe(
          data => {
          },
          error => {
            console.log(error);
          },
          () => {
            this.menu.enable(true);
            this.navCtrl.navigateRoot('/login');
          }
        );
        this.alertService.presentToast(data['message']);
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );
  }
}
