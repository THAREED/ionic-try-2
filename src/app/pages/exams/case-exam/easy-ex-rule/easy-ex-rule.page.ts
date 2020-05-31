import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-easy-ex-rule',
  templateUrl: './easy-ex-rule.page.html',
  styleUrls: ['./easy-ex-rule.page.scss'],
})
export class EasyExRulePage implements OnInit {
  idParam: String;
  constructor(
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idParam = this.route.snapshot.paramMap.get('id');
  }
  startEasyExam()
  {
    this.router.navigate(['easy-ex1', this.idParam]);
  }

}
