import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-lesson30',
  templateUrl: './lesson30.page.html',
  styleUrls: ['./lesson30.page.scss'],
})
export class Lesson30Page implements OnInit {

  constructor(
    private router: Router,    
    public alertController: AlertController,  
  ) { }

  ngOnInit() {
  }
  async goHome(){
    const alert = await this.alertController.create({
      header: 'เยี่ยมมากๆ',
      subHeader: 'ผ่านระดับ 1 แล้ว',
      message: 'อย่าลืมเข้ามาเรียนบทสุดท้ายนะ',
      buttons: ['ตกลง']
    });
    await alert.present();
    this.router.navigate(['']);
  }
  nextPage(){
    //ไปหน้า 31 
  }
}
