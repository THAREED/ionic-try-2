import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-easy-ex1',
  templateUrl: './easy-ex1.page.html',
  styleUrls: ['./easy-ex1.page.scss'],
})
export class EasyEx1Page implements OnInit {

  constructor(
    private route:Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }
  async helpAlert() {
    const alert = await this.alertController.create({
      header: 'วิธีทำ',
      subHeader: 'เลือกระดับความผิดปกติให้ครบทั้ง 7 ตำแหน่ง',
      message: 'ระดับ 0 สุขภาพดี <br>ระดับ 1 เริ่มมีปัญหาแล้วนะ <br>ระดับ 2 ไปหาหมอด่วน',
      buttons: ['เข้าใจแล้ว']
    });
    await alert.present();
    }

    async helper() {
      const alert = await this.alertController.create({
        header: 'ลิ้น',
        subHeader: 'ลักษณะสำคัญ',
        message: 'ระดับ 0 ชุ่มชื้น หยาบ ชมพู <br>ระดับ 1 เรียบ คราบขาว <br>ระดับ 2 แผลบวม',
        buttons: ['เข้าใจแล้ว']
      });
      await alert.present();
      }
}
