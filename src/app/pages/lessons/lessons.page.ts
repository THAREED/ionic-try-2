import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  lesson1()
  {
    this.route.navigate(['/lesson11']);
  }



}
