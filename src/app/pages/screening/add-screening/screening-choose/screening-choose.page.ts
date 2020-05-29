import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screening-choose',
  templateUrl: './screening-choose.page.html',
  styleUrls: ['./screening-choose.page.scss'],
})
export class ScreeningChoosePage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  confirm(){
    this.route.navigate(['screening-step1']);
  }
  choose(){
    this.route.navigate(['screening-choose']);
  }
}
