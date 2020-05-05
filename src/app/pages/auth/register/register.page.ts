import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  AUTH_SERVER_ADDRESS = 'http://localhost:3000';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private storage: Storage,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  //ปุ่มกดให้บันทึกค่าแล้วไปหน้า after
  onClick(gender, firstname, lastname, phone, username, password, password2, career){

    //เก็บค่าใน storage ที่ชื่อ input1 ก่อน โดยเอาค่า txtNumber ที่ทำการแมพ ngModel ไว้มาเก็บ
    this.storage.set('gender', gender);
    this.storage.set('firstname', firstname);
    this.storage.set('lastname', lastname);
    this.storage.set('phone', phone);
    this.storage.set('username', username);
    this.storage.set('password', password);
    this.storage.set('password2', password2);
    this.storage.set('career', career);

    //ไปหน้า p2 (หรืออาจจะไม่มีหน้านี้ก็ได้สามารถแสดงผลในหน้าไหนก็ได้)
    // this.router.navigateByUrl('/app');
  }
  register(form: NgForm) {
    if (form.value.password === form.value.password2) {
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
