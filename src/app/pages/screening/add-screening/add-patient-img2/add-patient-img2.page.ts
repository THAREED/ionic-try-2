import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient-img2',
  templateUrl: './add-patient-img2.page.html',
  styleUrls: ['./add-patient-img2.page.scss'],
})
export class AddPatientImg2Page implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  startScreen(){
    this.route.navigate(['screening-step1']);
  }

}
