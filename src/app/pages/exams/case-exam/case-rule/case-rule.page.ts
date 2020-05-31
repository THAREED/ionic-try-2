import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-rule',
  templateUrl: './case-rule.page.html',
  styleUrls: ['./case-rule.page.scss'],
})
export class CaseRulePage implements OnInit {
  idParam: String;
  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) { }
    
    ngOnInit() {
      this.idParam = this.route.snapshot.paramMap.get('id');
    }
  nextPage()
  {
    this.router.navigate(['case-ex1', this.idParam]);
  }
  goHome()
  {
    this.router.navigate(['exam']);
  }

}
