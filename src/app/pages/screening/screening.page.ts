import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.page.html',
  styleUrls: ['./screening.page.scss'],
})
export class ScreeningPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  lookUp()
  {
    this.route.navigate(['patient-list']);
  }
  addPatient()
  {
    this.route.navigate(['add-patient']);
  }

}
