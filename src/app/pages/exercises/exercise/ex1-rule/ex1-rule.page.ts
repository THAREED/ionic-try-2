import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ex1-rule',
  templateUrl: './ex1-rule.page.html',
  styleUrls: ['./ex1-rule.page.scss'],
})
export class Ex1RulePage implements OnInit {
  idParam: String;
  lessonParam: String;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
  }
  ex1()
  {
    // this.route.navigate(['ex1']);
    this.router.navigate(['/ex1', this.idParam, this.lessonParam]);
  }

}
