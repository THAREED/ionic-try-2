import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient-img',
  templateUrl: './add-patient-img.page.html',
  styleUrls: ['./add-patient-img.page.scss'],
})
export class AddPatientImgPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  addImg(){
    this.route.navigate(['add-patient-img2']);
  }

}
