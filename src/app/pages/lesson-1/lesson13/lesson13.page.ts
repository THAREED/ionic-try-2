import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson13',
  templateUrl: './lesson13.page.html',
  styleUrls: ['./lesson13.page.scss'],
})
export class Lesson13Page implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  prevPage(){
    this.route.navigate(['/lesson12']);
  }
  nextPage(){
    this.route.navigate(['/lesson14']);
  }

}
