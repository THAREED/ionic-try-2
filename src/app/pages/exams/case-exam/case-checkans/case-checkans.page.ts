import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-case-checkans',
  templateUrl: './case-checkans.page.html',
  styleUrls: ['./case-checkans.page.scss'],
})
export class CaseCheckansPage implements OnInit {
  data: Array<String>;
  images: Array<String>;
  idParam: String;
  cnt: number;
  score_sum: number;
  fi_sum: number;
  exp: number;
  pause: number;
  old_exp: number;
  class1: string;
  class2: string;
  class3: string;
  class4: string;
  class5: string;
  class6: string;
  SERVER_ADDRESS = 'http://localhost:3000';
  
  private right_ans = 0;
  private id;
  constructor(
    private router:Router,
    public alertController: AlertController,
    private dataService: DataService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('data');
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.data = this.dataService.getExamChoice(this.id);
    this.pause = this.dataService.getPauseCnt();
    this.images = this.dataService.getExamImage(this.id);
    this.cnt = this.dataService.getCnt();
    
    if(this.data[0] === '1'){
      this.right_ans++;
      this.class1 = 'level-tab level-1'
    }
    else if(this.data[0] === '0'){
      this.class1 = 'level-tab level-0'
    }
    else{
      this.class1 = 'level-tab level-2'
    }
    
    if(this.data[1] === '1'){
      this.right_ans++;
      this.class2 = 'level-tab level-1'
    }
    else if(this.data[1] === '0')(
      this.class2 = 'level-tab level-0'
    )
    else{
      this.class2 = 'level-tab level-2'
    }

    if(this.data[2] === '0'){
      this.right_ans++;
      this.class3 = 'level-tab level-0'
    }
    else if(this.data[2] === '1'){
      this.class3 = 'level-tab level-1'
    }
    else{
      this.class3 = 'level-tab level-2'
    }

    if(this.data[3] === '1'){
      this.class4 = 'level-tab level-1'
      this.right_ans++;
    }
    else if(this.data[3] === '0'){
      this.class4 = 'level-tab level-0'
    }
    else{
      this.class4 = 'level-tab level-2'
    }

    if(this.data[4] === '1'){
      this.right_ans++;
      this.class5 = 'level-tab level-1'
    }
    else if(this.data[4] === '0'){
      this.class5 = 'level-tab level-0'
    }
    else{
      this.class5 = 'level-tab level-2'
    }

    if(this.data[5] === '0'){
      this.right_ans++;
      this.class6 = 'level-tab level-0'
    }
    else if(this.data[5] === '1'){
      this.class6 = 'level-tab level-1'
    }
    else{
      this.class6 = 'level-tab level-2'
    }
  }

  sendAns()
  {
    if(this.id === 'medium'){
      this.score_sum = ((this.right_ans * 3) - (this.pause * 2 ))/(this.cnt * 3) * 100
      this.fi_sum = Math.round((this.score_sum + Number.EPSILON) * 100) / 100
      this.exp = Math.round((((this.score_sum*3) / 20) + Number.EPSILON) * 100) / 100
      this.http.post(`${this.SERVER_ADDRESS}/exp/`+ this.idParam + `/history`,
      {exp: this.exp, level: 'ปานกลาง'})
      .subscribe(data =>{
        console.log(data)
      });
    }
    else{
      this.score_sum = ((this.right_ans * 5) - (this.pause * 2 )) / (this.cnt * 5) * 100
      this.fi_sum = Math.round((this.score_sum + Number.EPSILON) * 100) / 100
      this.exp = Math.round((((this.score_sum*5) / 20) + Number.EPSILON) * 100) / 100
      this.http.post(`${this.SERVER_ADDRESS}/exp/`+ this.idParam + `/history`,
      {exp: this.exp, level: 'ยาก'})
      .subscribe(data =>{
        console.log(data)
      });
    }
    
    this.http.get(`${this.SERVER_ADDRESS}/progress/` + this.idParam)
    .pipe(
      tap(progress => {
        return progress;
      })
    ).subscribe(progress => {
      this.old_exp = progress[0].user_exp;
      let a = ((this.old_exp*100)+(this.exp*100))/100
      
      if(a < 0){
        this.http.put(`${this.SERVER_ADDRESS}/progress/${this.idParam}/`, { exp: 0 })
          .subscribe(data => {
            console.log(data);
        });
      }
      else{
        this.http.put(`${this.SERVER_ADDRESS}/progress/${this.idParam}/`, { exp: a })
        .subscribe(data => {
          console.log(data);
        });
      }

    });
    this.router.navigate(['app/tabs/exam']);
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
