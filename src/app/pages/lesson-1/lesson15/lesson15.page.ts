import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lesson15',
  templateUrl: './lesson15.page.html',
  styleUrls: ['./lesson15.page.scss'],
})
export class Lesson15Page implements OnInit {
  idParam: string;
  lessonParam: string;
  constructor(
    private router: Router,  
    public alertController: AlertController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
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
    this.router.navigate(['/lesson24', this.idParam, this.lessonParam]);
  }

}
