import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-rule',
  templateUrl: './case-rule.page.html',
  styleUrls: ['./case-rule.page.scss'],
})
export class CaseRulePage implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit() {
  }
  nextPage()
  {
    this.route.navigate(['case-ex1']);
  }

}
