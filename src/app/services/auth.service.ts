import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { AuthUser } from '../models/auth_user';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token: any;
  AUTH_SERVER_ADDRESS = 'http://localhost:3000'; 

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
  ) { }

  login(auth_user: AuthUser) {
    return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/login`,
      auth_user
    ).pipe(
      tap(token => {
        this.storage.set('token', token)
          .then(
            () => {
              console.log('Token Stored');
            },
            error => console.error('Error storing item', error)
          );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  

  register(firstname: String, lastname: String, career: String,gender: String,phone: String, username: String, password: String, password2: String) {
    return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/register`,
      { firstname:firstname, lastname:lastname , career: career,gender:gender, phone:phone, username: username, password: password ,password2:password2}
    );
  }

  logout() {
    console.log('Logout');
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + ' ' + this.token['access_token']
    });
    return this.http.get(`${this.AUTH_SERVER_ADDRESS}/auth/logout`, { headers: headers })
      .pipe(
        tap(data => {
          this.storage.remove('token');
          this.isLoggedIn = false;
          delete this.token;
          return data;
        })
      );
  }

  user() {
    console.log('GET User Data');
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + ' ' + this.token['access_token']
    });
    return this.http.get<AuthUser>(`${this.AUTH_SERVER_ADDRESS}/users`, { headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      );
  }

  authUser() {
    console.log('GET User Data');
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + ' ' + this.token['access_token']
    });
    return this.http.get<AuthUser>(`${this.AUTH_SERVER_ADDRESS}/auth_users`, { headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      );
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if (this.token != null) {
          this.isLoggedIn = true;
          console.log(data);
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }

}
