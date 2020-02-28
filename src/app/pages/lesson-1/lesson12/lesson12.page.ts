import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson12',
  templateUrl: './lesson12.page.html',
  styleUrls: ['./lesson12.page.scss'],
})
export class Lesson12Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  nextPage(){
    this.route.navigate(['/lesson13']);
  }

}
