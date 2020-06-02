import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

 
  //ปุ่มกดให้บันทึกค่าแล้วไปหน้า after
  register(form: NgForm) {
    if(form.value.password == form.value.password2){
      this.authService.register(
        form.value.firstname, 
        form.value.lastname, 
        form.value.career, 
        form.value.gender,
        form.value.phone, 
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
              this.navCtrl.navigateRoot('/app');
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
}