import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AuthUser } from 'src/app/models/auth_user';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.page.html',
  styleUrls: ['./screening.page.scss'],
})
export class ScreeningPage implements OnInit {
  SERVER_ADDRESS = 'http://localhost:3000';
  user_id: String;
  authUser: AuthUser;
  num: number;
  constructor(
    private route: Router,
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(
      user => {
        this.authUser = user;
        this.user_id = this.authUser[0].id;
        this.http.get(`${this.SERVER_ADDRESS}/patient/` + this.user_id)
        .pipe(
          tap(patient => {
            return patient;
          })
        ).subscribe(patient => {
          this.num = Object.keys(patient).length
        });
          }
    );
    
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
