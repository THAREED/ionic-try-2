import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

 
  //ปุ่มกดให้บันทึกค่าแล้วไปหน้า after
  register(form: NgForm) {
    if(form.value.username != undefined && form.value.password != undefined){
      if(form.value.password === form.value.password2){
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
      else{
        this.alertService.presentToast("Password doesn't match");
      }
    }
    else{
      this.alertService.presentToast("Username and Password are Required");
    }

  }
}