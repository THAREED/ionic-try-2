import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson13',
  templateUrl: './lesson13.page.html',
  styleUrls: ['./lesson13.page.scss'],
})
export class Lesson13Page implements OnInit {

  constructor(
    private router: Router,    
  ) { }

  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['']);
  }
  nextPage(){
    //ไปหน้า 14 หน้าflip รูป
    // this.router.navigate(['lesson14']);
  }

}
