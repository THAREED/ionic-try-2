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
    this.router.navigateByUrl('/app');
 
  }
}