import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lesson30',
  templateUrl: './lesson30.page.html',
  styleUrls: ['./lesson30.page.scss'],
})
export class Lesson30Page implements OnInit {
  idParam: string;
  lessonParam: string;
  title: string;
  constructor(
    private router: Router,    
    public alertController: AlertController,  
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
    if(this.lessonParam === 'lip'){
      this.title = 'ริมฝีปาก'
    }
    if(this.lessonParam === 'tongue'){
      this.title = 'ลิ้น'
    }
    if(this.lessonParam === 'gum'){
      this.title = 'เหงือก'
    }
    if(this.lessonParam === 'saliva'){
      this.title = 'น้ำลาย'
    }
    if(this.lessonParam === 'teeth'){
      this.title = 'ฟันธรรมชาติ'
    }
    if(this.lessonParam === 'denture'){
      this.title = 'ฟันเทียม'
    }
    if(this.lessonParam === 'cleanliness'){
      this.title = 'ความสะอาด'
    }
  }
  async goHome(){
    const alert = await this.alertController.create({
      header: 'เยี่ยมมากๆ',
      subHeader: 'ผ่านระดับ 1 แล้ว',
      message: 'อย่าลืมเข้ามาเรียนบทสุดท้ายนะ',
      buttons: ['ตกลง']
    });
    await alert.present();
    setTimeout(()=>alert.dismiss(),2000);
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
  nextPage(){
    this.router.navigate(['/lesson34', this.idParam, this.lessonParam]);
  }
}
