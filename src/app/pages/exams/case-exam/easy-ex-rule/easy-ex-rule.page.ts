import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-easy-ex-rule',
  templateUrl: './easy-ex-rule.page.html',
  styleUrls: ['./easy-ex-rule.page.scss'],
})
export class EasyExRulePage implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit() {
  }
  startEasyExam()
  {
    this.route.navigate(['easy-ex1']);
  }

}
