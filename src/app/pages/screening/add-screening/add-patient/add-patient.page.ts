import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { AuthUser } from 'src/app/models/auth_user';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  authUser: AuthUser;
  user_id: String;
  constructor(
    private route: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  SERVER_ADDRESS = 'http://localhost:3000';
  ngOnInit() {
    this.authService.getUser().subscribe(
      user => {
        this.authUser = user;
        this.user_id = this.authUser[0].id;
      }
    );
  }
  nextPage(){
    this.route.navigate(['add-patient-img']);
  }
  add(form: NgForm) {
    this.http.post(`${this.SERVER_ADDRESS}/patient`,
      { 
        user_id: this.user_id,
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        gender: form.value.gender,
        birth: form.value.date,
        allow_pic: form.value.check
      }
    ).pipe(
      tap(data => {
        return data;
      })
    ).subscribe(data => {
      
    });
  }
}
