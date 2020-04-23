import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  ex1()
  {
    this.route.navigate(['/ex1']);
  }
}
