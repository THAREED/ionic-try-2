import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // gender:string;
  // firstname:string;
  // lastname:string;
  // phone:string;
  // username:string;
  // password:string;
  // password2:string;
  // career:string;

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private menu: MenuController,
    private storage: Storage,
  ) 
  {
    // this.storage.get('gender').then((val)=>{
    //   this.gender = val;
    //   console.log('your text is ', val);
    // });

    // this.storage.get('firstname').then((val)=>{
    //   this.firstname = val;
    //   console.log('your text is ', val);
    // });

    // this.storage.get('lastname').then((val2)=>{
    //   this.lastname = val2;
    //   console.log('your text is ', val2);
    // });

    // this.storage.get('phone').then((val3)=>{
    //   this.phone = val3;
    //   console.log('your text is ', val3);
    // });

    // this.storage.get('username').then((val4)=>{
    //   this.username = val4;
    //   console.log('your text is ', val4);
    // });

    // this.storage.get('password').then((val2)=>{
    //   this.password = val2;
    //   console.log('your text is ', val2);
    // });

    // this.storage.get('password2').then((val2)=>{
    //   this.password2 = val2;
    //   console.log('your text is ', val2);
    // });

    // this.storage.get('career').then((val2)=>{
    //   this.career = val2;
    //   console.log('your text is ', val2);
    // });
  }

  ngOnInit() {
  }

  async registerModal() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
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
