import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-easy-ex1-score',
  templateUrl: './easy-ex1-score.page.html',
  styleUrls: ['./easy-ex1-score.page.scss'],
})
export class EasyEx1ScorePage implements OnInit {
  images: Array<String>;
  idParam: String;
  myChunk: Array<String>;
  img_data: Array<String>;
  ans_data: Array<String>;
  img: Array<String>;
  src;
  pause: number;
  help: number;
  cnt: number;
  score_sum: number;
  exp: number;
  exp_txt: string;
  old_exp: number;
  case_num: String;
  state: string;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  private right_ans = 0;
  private tmp_0 = []
  private tmp_1 = []
  private tmp_2 = []
  private images_0 = []
  private images_1 = []
  private images_2 = []
  private wrong_ans = []

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    this.state = '0'
    const id = this.route.snapshot.paramMap.get('data');
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.ans_data = this.dataService.getExerciseChoice(id);
    this.img_data = this.dataService.getExerciseImage(id);
    this.pause = this.dataService.getPauseCnt();
    this.cnt = this.dataService.getCnt();
    this.help = this.dataService.getHelpCnt();
    if (this.ans_data[0] === '1') {
      this.tmp_1.push(this.img_data[0])
       this.right_ans++;
    }
    if (this.ans_data[1] === '1') {
      this.tmp_1.push(this.img_data[1])
      this.right_ans++;
    }
    if (this.ans_data[2] === '0') {
      this.tmp_0.push(this.img_data[2])
      this.right_ans++;
    }
    if (this.ans_data[3] === '2') {
      this.tmp_2.push(this.img_data[3])
      this.right_ans++;
    }
    if (this.ans_data[4] === '1') {
      this.tmp_1.push(this.img_data[4])
      this.right_ans++;
    }
    if (this.ans_data[5] === '0') {
      this.tmp_0.push(this.img_data[5])
      this.right_ans++;
    }
    this.images_0 = this.chunkArray(this.tmp_0, 3)
    this.images_1 = this.chunkArray(this.tmp_1, 3)
    this.images_2 = this.chunkArray(this.tmp_2, 3)

    this.score_sum = ((this.right_ans - this.pause - (this.help * 2)) / this.cnt) * 100
    this.score_sum = Math.round((this.score_sum + Number.EPSILON) * 100) / 100
    if(this.score_sum < 65){
      this.state = "1"
    }
    else if(this.score_sum >= 65 && this.score_sum < 80){
      this.state = "2"
    }
    else{
      this.state = "3"
    }
    
    this.exp = Math.round(((this.score_sum / 20) + Number.EPSILON) * 100) / 100
    if (this.score_sum > 0) {
      this.exp_txt = '+' + this.exp
    }
    else {
      this.exp_txt = '' + this.exp
    }
    this.http.get(`${this.SERVER_ADDRESS}/progress/` + this.idParam)
    .pipe(
      tap(progress => {
        return progress;
      })
    ).subscribe(progress => {
      this.old_exp = progress[0].user_exp;
      this.http.post(`${this.SERVER_ADDRESS}/exp/`+ this.idParam + `/history`,
      {exp: this.exp, level: 'ง่าย'})
      .subscribe(data =>{
        console.log(data)
      });
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
  }

  chunkArray(myArray, chunk_size) {
    var results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }

}
