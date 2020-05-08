import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  nextPage(){
    this.route.navigate(['add-patient-img']);
  }

}
