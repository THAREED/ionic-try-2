import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.page.html',
  styleUrls: ['./patient-edit.page.scss'],
})
export class PatientEditPage implements OnInit {

  constructor(
    private route: Router,
    public alertController: AlertController,  
  ) { }

  ngOnInit() {
  }
  async sendAns(){
    const alert = await this.alertController.create({
      header: 'สำเร็จ',
      subHeader: '',
      message: 'บันทึกการแก้ไขแล้ว',
      buttons: ['ตกลง']
    });
    await alert.present();
    this.route.navigate(['patient-list']);

  }
}
