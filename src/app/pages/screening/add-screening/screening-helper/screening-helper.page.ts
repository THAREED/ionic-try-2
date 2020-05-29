import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screening-helper',
  templateUrl: './screening-helper.page.html',
  styleUrls: ['./screening-helper.page.scss'],
})
export class ScreeningHelperPage implements OnInit {

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
