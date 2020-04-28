import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-ex1',
  templateUrl: './case-ex1.page.html',
  styleUrls: ['./case-ex1.page.scss'],
})
export class CaseEx1Page implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit() {
  }
  checkAns()
  {
    this.route.navigate(['case-checkans']);
  }
}
