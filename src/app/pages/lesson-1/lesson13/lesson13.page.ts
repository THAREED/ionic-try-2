import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lesson13',
  templateUrl: './lesson13.page.html',
  styleUrls: ['./lesson13.page.scss'],
})
export class Lesson13Page implements OnInit {
  idParam: string;
  lessonParam: string;
  title: string;
  constructor(
    private router: Router, 
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
  goHome(){
    this.router.navigate(['']);
  }
  nextPage(){
    this.router.navigate(['/lesson14', this.idParam, this.lessonParam]);
  }

}
