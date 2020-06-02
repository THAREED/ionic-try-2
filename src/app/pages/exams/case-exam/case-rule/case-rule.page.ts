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
  diff: String;
  difficulty: String;
  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) { }
    
    ngOnInit() {
      this.idParam = this.route.snapshot.paramMap.get('id');
      this.diff = this.route.snapshot.paramMap.get('difficulty');
      if(this.diff === 'medium'){
        this.difficulty = 'ปานกลาง'
      }
      else{
        this.difficulty = 'ยาก'
      }
    }
  nextPage()
  {
    this.router.navigate(['case-ex1', this.idParam, this.diff]);
  }
  goHome()
  {
    this.router.navigate(['app/tabs/exam']);
  }

}
