import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lesson15',
  templateUrl: './lesson15.page.html',
  styleUrls: ['./lesson15.page.scss'],
})
export class Lesson15Page implements OnInit {

  constructor(
    private router: Router,  
    public alertController: AlertController,  
  ) { }

  ngOnInit() {
  }
  async goHome() {
    const alert = await this.alertController.create({
      header: 'เยี่ยมเลย',
      subHeader: 'ผ่านระดับ 0 แล้ว',
      message: 'คราวหน้ามาเรียนบทที่เหลือกัน',
      buttons: ['ตกลง']
    });
    await alert.present();
    this.router.navigate(['']);
  }

  nextPage(){
    //ไปหน้า 21 
  }

}
