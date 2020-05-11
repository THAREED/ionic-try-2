import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-case',
  templateUrl: './edit-case.page.html',
  styleUrls: ['./edit-case.page.scss'],
})
export class EditCasePage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  confirm(){
    this.route.navigate(['patient-edit']);
  }

}
