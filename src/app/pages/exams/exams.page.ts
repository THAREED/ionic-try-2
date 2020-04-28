import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit() {
  }
  startExam()
  {
    this.route.navigate(['case-ex1']);
  }
}
