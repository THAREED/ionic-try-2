import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-checkans',
  templateUrl: './case-checkans.page.html',
  styleUrls: ['./case-checkans.page.scss'],
})
export class CaseCheckansPage implements OnInit {
  data: Array<String>;

  constructor(
    private router:Router,
    public alertController: AlertController,
    private dataService: DataService,
    private route: ActivatedRoute  
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    this.data = this.dataService.getExamChoice(id);
  }
  SendAns()
  {
    this.router.navigate(['case-checkans']);
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
}
