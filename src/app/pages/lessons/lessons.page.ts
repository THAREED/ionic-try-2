import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthUser } from 'src/app/models/auth_user';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})

export class LessonsPage implements OnInit {
  authUser: AuthUser;
  firstname: String;
  SERVER_ADDRESS = 'http://localhost:3000'; // Your Node Address
  constructor(
    private route: Router,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }
  lesson1()
  {
    return this.route.navigate(['/lesson11', "lip"]);
  }
  lesson2()
  {
    return this.route.navigate(['/lesson11', "tongue"]);
  }
  lesson3()
  {
    return this.route.navigate(['/lesson11', "gum"]);
  }
  lesson4()
  {
    return this.route.navigate(['/lesson11', "saliva"]);
  }
  lesson5()
  {
    return this.route.navigate(['/lesson11', "teeth"]);
  }
  lesson6()
  {
    return this.route.navigate(['/lesson11', "denture"]);
  }
  lesson7()
  {
    return this.route.navigate(['/lesson11', "cleanliness"]);
  }
  lesson8()
  {
    return this.route.navigate(['/lesson11', "pain"]);
  }
  ionViewWillEnter() {
    this.authService.authUser().subscribe(
      user => {
        this.authUser = user;
        this.firstname = this.authUser[0].firstname
        console.log(this.authUser[0].firstname)
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
        data => {
        this.alertService.presentToast(data['message']);        
        },
        error => {
        console.log(error);
        },
        () => {
        this.navCtrl.navigateRoot('/app');
        }
    );
    }

}
