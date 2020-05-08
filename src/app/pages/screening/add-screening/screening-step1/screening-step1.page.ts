import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screening-step1',
  templateUrl: './screening-step1.page.html',
  styleUrls: ['./screening-step1.page.scss'],
})
export class ScreeningStep1Page implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  getHelp(){
    this.route.navigate(['screening-helper']);
  }
  nextPage(){
    this.route.navigate(['screening-recheck']);
  }

}
