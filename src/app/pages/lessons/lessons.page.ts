import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  gender:string;
  firstname:string;
  lastname:string;
  phone:string;
  username:string;
  password:string;
  password2:string;
  career:string;

  constructor(
    private route: Router,
    private storage: Storage

  ) {
    this.storage.get('gender').then((val)=>{
      this.gender = val;
      console.log('your text is ', val);
    });

    this.storage.get('firstname').then((val)=>{
      this.firstname = val;
      console.log('your text is ', val);
    });

    this.storage.get('lastname').then((val2)=>{
      this.lastname = val2;
      console.log('your text is ', val2);
    });

    this.storage.get('phone').then((val3)=>{
      this.phone = val3;
      console.log('your text is ', val3);
    });

    this.storage.get('username').then((val4)=>{
      this.username = val4;
      console.log('your text is ', val4);
    });

    this.storage.get('password').then((val2)=>{
      this.password = val2;
      console.log('your text is ', val2);
    });

    this.storage.get('password2').then((val2)=>{
      this.password2 = val2;
      console.log('your text is ', val2);
    });

    this.storage.get('career').then((val2)=>{
      this.career = val2;
      console.log('your text is ', val2);
    });



  }

  ngOnInit() {
  }
  lesson1()
  {
    this.route.navigate(['/lesson11']);
  }



}
