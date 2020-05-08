import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson15',
  templateUrl: './lesson15.page.html',
  styleUrls: ['./lesson15.page.scss'],
})
export class Lesson15Page implements OnInit {

  constructor(
    private router: Router,    
  ) { }

  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['']);
  }
  nextPage(){
    //ไปหน้า 21 
  }

}
